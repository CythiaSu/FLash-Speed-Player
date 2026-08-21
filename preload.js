const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  listDir:            (dir) => ipcRenderer.invoke("list-dir", dir),
  getDefaultDir:      ()    => ipcRenderer.invoke("get-default-dir"),
  getParentDir:       (dir) => ipcRenderer.invoke("get-parent-dir", dir),
  openFileDialog:     ()    => ipcRenderer.invoke("open-file-dialog"),
  openFolderDialog:   ()    => ipcRenderer.invoke("open-folder-dialog"),
  getSettings:        ()    => ipcRenderer.invoke("get-settings"),
  setSettings:        (s)   => ipcRenderer.invoke("set-settings", s),
  listFavorites:      ()    => ipcRenderer.invoke("list-favorites"),
  toggleFavorite:     (p)   => ipcRenderer.invoke("toggle-favorite", p),
  deletePath:         (p)   => ipcRenderer.invoke("delete-path", p),
  launchNativePlayer: (p)   => ipcRenderer.invoke("launch-native-player", p),
  stopNativePlayer:   ()    => ipcRenderer.invoke("stop-native-player"),
  exitGame:           ()    => ipcRenderer.invoke("exit-game"),
  getNativePid:       ()    => ipcRenderer.invoke("get-native-pid"),
});
