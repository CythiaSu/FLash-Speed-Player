<div align="center">

# ⚡ Flash Speed Player

<table align="center" width="90%">
<tr><td bgcolor="#F4F8FF"><strong>A lightweight Windows desktop player for SWF/SPL games with Ruffle and adjustable playback speed.</strong></td></tr>
<tr><td bgcolor="#FFF8E7"><strong>一款基于 Ruffle、支持 SWF/SPL 游戏与播放速度调节的轻量 Windows 桌面播放器。</strong></td></tr>
</table>

<p>
  <img src="https://img.shields.io/badge/Platform-Windows%20x64-0078D4?style=for-the-badge&logo=windows" alt="Windows x64" />
  <img src="https://img.shields.io/badge/Engine-Ruffle-6B4FBB?style=for-the-badge" alt="Ruffle" />
  <img src="https://img.shields.io/badge/Format-SWF%20%2F%20SPL-F2C94C?style=for-the-badge" alt="SWF and SPL" />
  <img src="https://img.shields.io/badge/Status-Stable%20Local%20Build-2EA44F?style=for-the-badge" alt="Stable local build" />
</p>

<p><strong>⚡ Browse · Play · Speed up</strong><br><em>⚡ 浏览 · 播放 · 加速</em></p>

</div>

## ✨ About / 项目简介

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Flash Speed Player is an Electron file browser that launches a customized native Ruffle desktop player for local Flash content.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">Flash Speed Player 是一个 Electron 文件管理器外壳，可调用经过定制的原生 Ruffle 桌面播放器运行本地 Flash 内容。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">It is designed for offline Windows use and for older SWF/SPL games that still work with Ruffle.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">它面向离线 Windows 使用场景，适合运行仍然兼容 Ruffle 的老 Flash SWF/SPL 游戏。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The file browser and the native player are kept separate, so local files do not depend on a browser-based WASM wrapper.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">项目将文件浏览器与原生播放器分离，打开本地文件时不依赖浏览器 WASM 包装层。</div>

## 🎮 Features / 功能亮点

- 📂 <span style="color:#1D4ED8;">Browse local folders and open <code>.swf</code> and <code>.spl</code> files.</span><br><span style="background:#FFF8E7;color:#9A6700;">浏览本地文件夹，并打开 <code>.swf</code> 与 <code>.spl</code> 文件。</span>
- ⭐ <span style="color:#1D4ED8;">Keep a favorites list for frequently played games.</span><br><span style="background:#FFF8E7;color:#9A6700;">为常玩的游戏维护独立收藏夹。</span>
- 🗑️ <span style="color:#1D4ED8;">Delete files or folders after a system confirmation prompt.</span><br><span style="background:#FFF8E7;color:#9A6700;">删除文件或文件夹前会弹出系统确认提示。</span>
- 🚀 <span style="color:#1D4ED8;">Adjust playback speed from <code>0.25x</code> to <code>10x</code>.</span><br><span style="background:#FFF8E7;color:#9A6700;">支持从 <code>0.25x</code> 到 <code>10x</code> 的播放速度调节。</span>
- 🎯 <span style="color:#1D4ED8;">Start games with <code>high16x16</code> quality by default.</span><br><span style="background:#FFF8E7;color:#9A6700;">默认使用 <code>high16x16</code> 画质启动游戏。</span>
- 🕹️ <span style="color:#1D4ED8;">Keep keyboard, controller/D-pad, and Steam Deck/Proton navigation in mind.</span><br><span style="background:#FFF8E7;color:#9A6700;">针对键盘、手柄/D-pad 以及 Steam Deck/Proton 导航体验进行了适配。</span>
- 🧩 <span style="color:#1D4ED8;">Use <code>Ctrl+Q</code> in the native player to exit the running game.</span><br><span style="background:#FFF8E7;color:#9A6700;">在原生播放器中使用 <code>Ctrl+Q</code> 退出当前游戏。</span>

## ⌨️ Controls / 操作方式

| Key / 按键 | English | 中文 |
|---|---|---|
| `↑` `↓` / `W` `S` | Move the selection | 移动当前选择 |
| `←` / `A` | Return to the parent folder | 返回上一级文件夹 |
| `→` / `D` | Open the selected folder | 打开选中文件夹 |
| `E` / `Space` | Open a folder or play a file | 打开文件夹或播放文件 |
| `F` | Open favorites | 打开收藏夹 |
| `R` | Add or remove the selected game from favorites | 收藏或取消收藏当前游戏 |
| `Delete` | Delete the selected file or folder | 删除当前文件或文件夹 |
| <kbd>F5</kbd> | Decrease native-player speed | 原生播放器减速 |
| <kbd>F6</kbd> | Increase native-player speed | 原生播放器加速 |
| <kbd>F7</kbd> | Reset native-player speed to `1x` | 将原生播放器速度恢复为 `1x` |
| <kbd>Ctrl</kbd> + <kbd>Q</kbd> | Exit the running game | 退出当前游戏 |

## 📦 Current release / 当前发布版

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The checked-in source corresponds to the last local stable directory build in <code>release/FlashSpeedPlayer</code>.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">当前源码对应于 <code>release/FlashSpeedPlayer</code> 中最后一个本地稳定版目录构建。</div>

| Item / 项目 | Value / 内容 |
|---|---|
| Platform / 平台 | Windows x64 |
| Product / 产品 | Flash Speed Player |
| Native engine / 原生引擎 | Customized Ruffle desktop player / 修改后的 Ruffle 桌面播放器 |
| Ruffle source / Ruffle 源码版本 | `0.3.0` |
| Application metadata / 应用版本元数据 | `0.4.0-nightly.2026.6.24` |
| Release format / 发布形式 | Extracted directory / 解压运行目录 |

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The application still contains the historical nightly version string; normalize it and rebuild before creating a new semantic-version release tag.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">程序内部仍保留历史 nightly 版本字符串；创建新的正式语义版本标签前，请先统一版本号并重新构建。</div>

## ▶️ Run the release / 运行发布版

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Extract the complete release archive and run <code>Flash Speed Player.exe</code> from the extracted directory.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">请完整解压发布压缩包，然后在解压目录中运行 <code>Flash Speed Player.exe</code>。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Keep <code>resources/</code>, <code>locales/</code>, and <code>resources/native/</code> together with the main executable.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">请将 <code>resources/</code>、<code>locales/</code> 和 <code>resources/native/</code> 与主程序放在一起，不要单独移动 exe。</div>

## 🧱 Architecture / 项目架构

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The Electron shell handles browsing, favorites, deletion, settings, and process launching.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">Electron 外壳负责文件浏览、收藏、删除、设置和播放器进程启动。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The native Ruffle desktop player handles SWF/SPL execution, rendering, input, quality, and playback speed.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">原生 Ruffle 桌面播放器负责 SWF/SPL 执行、渲染、输入、画质和播放速度。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">This separation keeps local-file loading in the native desktop path instead of a browser-only <code>file://</code> workflow.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">这种分离让本地文件通过原生桌面路径加载，避免依赖浏览器中的 <code>file://</code> 工作流。</div>

## 🗂️ Source layout / 源码结构

| Path / 路径 | English role | 中文作用 |
|---|---|---|
| `main.js` | Electron main process | Electron 主进程 |
| `preload.js` | Secure renderer bridge | 渲染进程安全桥接层 |
| `renderer/` | File browser and UI | 文件浏览器与界面 |
| `assets/` | Project icon assets | 项目图标资源 |
| `native/ruffle-src/` | Customized Ruffle Rust workspace | 修改后的 Ruffle Rust 工作区 |
| `native/*.exe` | Prebuilt runtime files used by packaging | 打包时使用的预编译运行时 |
| `scripts/` | Rebuild helpers | 重新构建辅助脚本 |

## 🛠️ Build from source / 从源码构建

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Install Node.js, npm, Rust stable with the MSVC Windows toolchain, and suitable Visual Studio C++ build tools.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">请安装 Node.js、npm、带 MSVC Windows 工具链的 Rust stable，以及匹配的 Visual Studio C++ 构建工具。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Run the following commands from the repository root.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">请在仓库根目录运行以下命令。</div>

```powershell
npm ci
.\scripts\build-native.ps1
npm run dist
```

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The native build script compiles <code>ruffle_desktop</code> and copies the result to the filename expected by the Electron package configuration.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">原生构建脚本会编译 <code>ruffle_desktop</code>，并将结果复制为 Electron 打包配置所需的文件名。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The Electron build creates an extracted Windows application directory.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">Electron 构建会生成解压运行的 Windows 应用目录。</div>

## ⚖️ Third-party notices / 第三方声明

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The native player is based on Ruffle, which is available under the MIT License or Apache License 2.0 at the recipient's option.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">原生播放器基于 Ruffle，Ruffle 可由接收者选择使用 MIT License 或 Apache License 2.0。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">Preserve the notices in <a href="THIRD-PARTY-NOTICES.md">THIRD-PARTY-NOTICES.md</a>, <a href="native/LICENSE.md">native/LICENSE.md</a>, and <code>native/ruffle-src/LICENSE.md</code>.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">重新分发时请保留 <a href="THIRD-PARTY-NOTICES.md">THIRD-PARTY-NOTICES.md</a>、<a href="native/LICENSE.md">native/LICENSE.md</a> 和 <code>native/ruffle-src/LICENSE.md</code> 中的声明。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The upstream Ruffle project is available at <a href="https://github.com/ruffle-rs/ruffle">ruffle-rs/ruffle</a>.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">Ruffle 上游项目地址为 <a href="https://github.com/ruffle-rs/ruffle">ruffle-rs/ruffle</a>。</div>

## 📜 License / 许可证

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The project-specific license has not been selected yet.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">本项目自身的许可证目前尚未确定。</div>

<div style="border-left:4px solid #3B82F6;background:#F4F8FF;padding:10px 14px;margin:8px 0;">The bundled Ruffle components retain their upstream licenses and notices.</div>
<div style="border-left:4px solid #E0A11B;background:#FFF8E7;padding:10px 14px;margin:8px 0;">随项目分发的 Ruffle 组件保留其上游许可证与版权声明。</div>
