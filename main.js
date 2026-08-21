const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

app.disableHardwareAcceleration();
app.commandLine.appendSwitch("disable-gpu");
app.commandLine.appendSwitch("disable-gpu-compositing");

let mainWin = null;
let nativeProc = null;
const SETTINGS_PATH = path.join(app.getPath("userData"), "settings.json");
const LOG_PATH = path.join(app.getPath("userData"), "app.log");
const ICON_PATH = fs.existsSync(path.join(__dirname, "native", "app.ico"))
  ? path.join(__dirname, "native", "app.ico")
  : path.join(process.resourcesPath || __dirname, "native", "app.ico");

let settings = { gameDir: "", favorites: [] };

function log(...args) {
  const line = new Date().toISOString() + " " + args.map((v) => {
    if (v instanceof Error) return v.stack || v.message;
    if (typeof v === "string") return v;
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }).join(" ");
  console.log(line);
  try { fs.appendFileSync(LOG_PATH, line + "\n", "utf8"); } catch (_) {}
}

function loadSettings() {
  try { if (fs.existsSync(SETTINGS_PATH)) settings = JSON.parse(fs.readFileSync(SETTINGS_PATH, "utf8")); } catch(e){}
  if (!settings || typeof settings !== "object") settings = { gameDir: "", favorites: [] };
  if (!settings.gameDir) settings.gameDir = "";
  if (!Array.isArray(settings.favorites)) settings.favorites = [];
  settings.favorites = [...new Set(settings.favorites.filter((p) => typeof p === "string"))];
}
function saveSettings() {
  try { fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2), "utf8"); } catch(e){}
}
loadSettings();

function getNativeDir() {
  const d = path.join(__dirname, "native");
  return fs.existsSync(d) ? d : path.join(process.resourcesPath, "native");
}
function getDefaultDir() {
  return (settings.gameDir && fs.existsSync(settings.gameDir)) ? settings.gameDir : app.getPath("documents");
}

function killNative() {
  if (nativeProc) {
    try { nativeProc.kill(); } catch(e){}
    nativeProc = null;
  }
}

// === Window ===
function createWindow() {
  mainWin = new BrowserWindow({
    width: 960, height: 680, minWidth: 480, minHeight: 320,
    title: "Flash Speed Player",
    icon: fs.existsSync(ICON_PATH) ? ICON_PATH : undefined,
    autoHideMenuBar: true, menuBarVisible: false,
    webPreferences: { preload: path.join(__dirname, "preload.js"), webSecurity: false },
  });
  require("electron").Menu.setApplicationMenu(null);
  mainWin.loadFile(path.join(__dirname, "renderer", "index.html"));
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) { app.quit(); } else {
  app.on("second-instance", () => { if (mainWin) { if (mainWin.isMinimized()) mainWin.restore(); mainWin.focus(); } });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on("before-quit", () => { killNative(); });

// === IPC: File System ===
ipcMain.handle("list-dir", async (_e, d) => {
  try {
    const ents = fs.readdirSync(d, { withFileTypes: true });
    const r = [];
    for (const en of ents) {
      const fp = path.join(d, en.name), st = fs.statSync(fp);
      r.push({ name: en.name, path: fp, isDir: en.isDirectory(), isSwf: en.isFile() && /\.swf$/i.test(en.name), isSpl: en.isFile() && /\.spl$/i.test(en.name), size: st.size, mtime: st.mtimeMs });
    }
    return { ok: true, entries: r, current: d };
  } catch(e) { return { ok: false, error: e.message }; }
});
ipcMain.handle("get-default-dir", async () => getDefaultDir());
ipcMain.handle("get-parent-dir", async (_e, d) => { const p = path.dirname(d); return fs.existsSync(p) ? p : null; });
ipcMain.handle("open-file-dialog", async () => {
  const r = await dialog.showOpenDialog(mainWin, { title: "选择 SWF 文件", filters: [{ name: "Flash 文件", extensions: ["swf", "spl"] }], properties: ["openFile"] });
  return (!r.canceled && r.filePaths.length > 0) ? r.filePaths[0] : null;
});
ipcMain.handle("open-folder-dialog", async () => {
  const r = await dialog.showOpenDialog(mainWin, { title: "选择文件夹", properties: ["openDirectory"] });
  return (!r.canceled && r.filePaths.length > 0) ? r.filePaths[0] : null;
});
ipcMain.handle("get-settings", async () => settings);
ipcMain.handle("set-settings", async (_e, s) => {
  settings = { ...settings, ...s };
  if (!Array.isArray(settings.favorites)) settings.favorites = [];
  saveSettings();
  return { ok: true };
});

function isFlashFile(filePath) {
  return /\.(swf|spl)$/i.test(filePath);
}

function removeFavoritePaths(target) {
  const normalized = path.resolve(target).toLowerCase();
  const prefix = normalized.endsWith(path.sep) ? normalized : normalized + path.sep;
  const before = settings.favorites.length;
  settings.favorites = settings.favorites.filter((favorite) => {
    const candidate = path.resolve(favorite).toLowerCase();
    return candidate !== normalized && !candidate.startsWith(prefix);
  });
  if (settings.favorites.length !== before) saveSettings();
}

ipcMain.handle("list-favorites", async () => {
  const entries = [];
  let changed = false;
  for (const favorite of settings.favorites) {
    try {
      const st = fs.statSync(favorite);
      if (!st.isFile() || !isFlashFile(favorite)) throw new Error("Not a Flash file");
      entries.push({
        name: path.basename(favorite), path: favorite, isDir: false,
        isSwf: /\.swf$/i.test(favorite), isSpl: /\.spl$/i.test(favorite),
        size: st.size, mtime: st.mtimeMs,
      });
    } catch (_) {
      changed = true;
    }
  }
  if (changed) {
    settings.favorites = entries.map((entry) => entry.path);
    saveSettings();
  }
  return { ok: true, entries };
});

ipcMain.handle("toggle-favorite", async (_e, filePath) => {
  try {
    const target = path.resolve(filePath);
    const st = fs.statSync(target);
    if (!st.isFile() || !isFlashFile(target)) return { ok: false, error: "只能收藏 SWF / SPL 文件" };
    const index = settings.favorites.findIndex((favorite) => path.resolve(favorite).toLowerCase() === target.toLowerCase());
    if (index >= 0) {
      settings.favorites.splice(index, 1);
      saveSettings();
      return { ok: true, favorite: false };
    }
    settings.favorites.push(target);
    saveSettings();
    return { ok: true, favorite: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

ipcMain.handle("delete-path", async (_e, targetPath) => {
  try {
    const target = path.resolve(targetPath);
    if (path.parse(target).root.toLowerCase() === target.toLowerCase()) return { ok: false, error: "不能删除磁盘根目录" };
    const st = fs.lstatSync(target);
    const label = st.isDirectory() ? "文件夹及其全部内容" : "文件";
    const answer = await dialog.showMessageBox(mainWin, {
      type: "warning",
      title: "确认删除",
      message: `删除${label}？`,
      detail: target,
      buttons: ["删除", "取消"],
      defaultId: 1,
      cancelId: 1,
      noLink: true,
    });
    if (answer.response !== 0) return { ok: false, canceled: true };
    fs.rmSync(target, { recursive: st.isDirectory(), force: false, maxRetries: 2, retryDelay: 100 });
    removeFavoritePaths(target);
    return { ok: true, wasDirectory: st.isDirectory() };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

// === IPC: Launch Ruffle ===
ipcMain.handle("launch-native-player", async (_e, swfPath) => {
  log("[LAUNCH] swfPath:", swfPath);
  try {
    const nd = getNativeDir();
    const speedPlayer = path.join(nd, "flash-speed-player.exe");
    const fallbackPlayer = path.join(nd, "ruffle.exe");
    const ne = fs.existsSync(speedPlayer) ? speedPlayer : fallbackPlayer;

    if (!fs.existsSync(ne)) return { ok: false, error: "player exe not found" };
    if (!fs.existsSync(swfPath)) return { ok: false, error: "SWF file not found: " + swfPath };

    killNative();

    const gameDir = path.dirname(swfPath);
    const args = ["--quality", "high16x16", swfPath];
    log("[LAUNCH] exe:", ne);
    log("[LAUNCH] cwd:", gameDir);
    log("[LAUNCH] args:", args);

    const child = spawn(ne, args, {
      cwd: gameDir,
      detached: false,
      stdio: "ignore",
      windowsHide: false,
    });
    log("[LAUNCH] PID:", child.pid);
    nativeProc = child;

    child.on("exit", (code) => {
      log("[LAUNCH] Ruffle exited, code:", code);
      if (nativeProc && nativeProc.pid === child.pid) nativeProc = null;
      if (mainWin && !mainWin.isDestroyed())
        mainWin.webContents.executeJavaScript("if(window._onNativeExit)window._onNativeExit()").catch(()=>{});
    });
    child.on("error", (e) => {
      log("[LAUNCH] Spawn error:", e);
      if (nativeProc && nativeProc.pid === child.pid) nativeProc = null;
    });

    return { ok: true, pid: child.pid };
  } catch(e) {
    log("[LAUNCH] Exception:", e);
    return { ok: false, error: e.message };
  }
});

ipcMain.handle("stop-native-player", async () => { killNative(); return { ok: true }; });
ipcMain.handle("exit-game", async () => {
  killNative();
  if (mainWin && !mainWin.isDestroyed())
    mainWin.webContents.executeJavaScript("if(window._onNativeExit)window._onNativeExit()").catch(()=>{});
  return { ok: true };
});

ipcMain.handle("get-native-pid", async () => (nativeProc ? nativeProc.pid : null));


