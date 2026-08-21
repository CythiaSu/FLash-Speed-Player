<div align="center">

# ⚡ Flash Speed Player

**A lightweight Windows desktop player for SWF/SPL games with Ruffle and adjustable playback speed.**  
**一款基于 Ruffle、支持 SWF/SPL 游戏与播放速度调节的轻量 Windows 桌面播放器。**

<p>
  <img src="https://img.shields.io/badge/Platform-Windows%20x64-0078D4?style=for-the-badge&logo=windows" alt="Windows x64" />
  <img src="https://img.shields.io/badge/Engine-Ruffle-6B4FBB?style=for-the-badge" alt="Ruffle" />
  <img src="https://img.shields.io/badge/Format-SWF%20%2F%20SPL-F2C94C?style=for-the-badge" alt="SWF and SPL" />
  <img src="https://img.shields.io/badge/Status-Stable%20Local%20Build-2EA44F?style=for-the-badge" alt="Stable local build" />
</p>

<em>⚡ Browse. Play. Speed up.</em>  
<em>⚡ 浏览、播放、加速，一站完成。</em>

</div>

## ✨ About / 项目简介

Flash Speed Player is an Electron file browser that launches a customized native Ruffle desktop player for local Flash content.  
Flash Speed Player 是一个 Electron 文件管理器外壳，可调用经过定制的原生 Ruffle 桌面播放器运行本地 Flash 内容。

It is designed for offline Windows use and for older SWF/SPL games that still work with Ruffle.  
它面向离线 Windows 使用场景，适合运行仍然兼容 Ruffle 的老 Flash SWF/SPL 游戏。

The project keeps the file browser and the native player separate, so local files can be opened without relying on a browser-based WASM wrapper.  
项目将文件浏览器与原生播放器分离，打开本地文件时不依赖浏览器 WASM 包装层。

## 🎮 Features / 功能亮点

- 📂 Browse local folders and open `.swf` and `.spl` files.  
  📂 浏览本地文件夹，并打开 `.swf` 与 `.spl` 文件。
- ⭐ Keep a favorites list for frequently played games.  
  ⭐ 为常玩的游戏维护独立收藏夹。
- 🗑️ Delete files or folders after a system confirmation prompt.  
  🗑️ 删除文件或文件夹前会弹出系统确认提示。
- 🚀 Adjust playback speed through `0.25x`, `0.5x`, `1x`, `2x`, `3x`, `5x`, and `10x`.  
  🚀 支持 `0.25x`、`0.5x`、`1x`、`2x`、`3x`、`5x` 和 `10x` 播放速度。
- 🎯 Start games with `high16x16` quality by default.  
  🎯 默认使用 `high16x16` 画质启动游戏。
- 🕹️ Keep keyboard, controller/D-pad, and Steam Deck/Proton navigation in mind.  
  🕹️ 针对键盘、手柄/D-pad 以及 Steam Deck/Proton 导航体验进行了适配。
- 🧩 Use `Ctrl+Q` in the native player to exit the running game.  
  🧩 在原生播放器中使用 `Ctrl+Q` 退出当前游戏。

## ⌨️ Controls / 操作方式

| Key / 按键 | Action / English | 操作 / 中文 |
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

The checked-in source corresponds to the last local stable directory build in `release/FlashSpeedPlayer`.  
当前源码对应于 `release/FlashSpeedPlayer` 中最后一个本地稳定版目录构建。

- **Platform / 平台:** Windows x64
- **Product / 产品:** Flash Speed Player
- **Native engine / 原生引擎:** Customized Ruffle desktop player
- **Ruffle source version / Ruffle 源码版本:** `0.3.0`
- **Application metadata / 应用版本元数据:** `0.4.0-nightly.2026.6.24`
- **Release format / 发布形式:** Extracted directory, not a single portable executable.  
  解压运行目录，不是单文件便携版。

The application still contains the historical nightly version string; normalize it and rebuild before creating a new semantic-version release tag.  
程序内部仍保留历史 nightly 版本字符串；创建新的正式语义版本标签前，请先统一版本号并重新构建。

## ▶️ Run the release / 运行发布版

Extract the complete release archive before launching the application.  
启动前请先完整解压发布压缩包。

Run `Flash Speed Player.exe` from the extracted directory.  
在解压目录中运行 `Flash Speed Player.exe`。

Keep `resources/`, `locales/`, and `resources/native/` together with the main executable.  
请将 `resources/`、`locales/` 和 `resources/native/` 与主程序放在一起，不要单独移动 exe。

## 🧱 Architecture / 项目架构

The Electron shell handles browsing, favorites, deletion, settings, and process launching.  
Electron 外壳负责文件浏览、收藏、删除、设置和播放器进程启动。

The native Ruffle desktop player handles SWF/SPL execution, rendering, input, quality, and playback speed.  
原生 Ruffle 桌面播放器负责 SWF/SPL 执行、渲染、输入、画质和播放速度。

This separation keeps local-file loading in the native desktop path instead of a browser-only `file://` workflow.  
这种分离让本地文件通过原生桌面路径加载，避免依赖浏览器中的 `file://` 工作流。

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

Install Node.js, npm, Rust stable with the MSVC Windows toolchain, and suitable Visual Studio C++ build tools.  
请安装 Node.js、npm、带 MSVC Windows 工具链的 Rust stable，以及匹配的 Visual Studio C++ 构建工具。

Run the following commands from the repository root:  
请在仓库根目录运行以下命令：

```powershell
npm ci
.\scripts\build-native.ps1
npm run dist
```

The native build script compiles `ruffle_desktop` and copies the result to the filename expected by the Electron package configuration.  
原生构建脚本会编译 `ruffle_desktop`，并将结果复制为 Electron 打包配置所需的文件名。

The Electron build creates an extracted Windows application directory.  
Electron 构建会生成解压运行的 Windows 应用目录。

## ⚖️ Third-party notices / 第三方声明

The native player is based on Ruffle, which is available under the MIT License or Apache License 2.0 at the recipient's option.  
原生播放器基于 Ruffle，Ruffle 可由接收者选择使用 MIT License 或 Apache License 2.0。

Preserve the notices in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), [native/LICENSE.md](native/LICENSE.md), and `native/ruffle-src/LICENSE.md`.  
重新分发时请保留 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)、[native/LICENSE.md](native/LICENSE.md) 和 `native/ruffle-src/LICENSE.md` 中的声明。

The upstream Ruffle project is available at [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle).  
Ruffle 上游项目地址为 [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)。

## 📜 License / 许可证

The project-specific license has not been selected yet.  
本项目自身的许可证目前尚未确定。

The bundled Ruffle components retain their upstream licenses and notices.  
随项目分发的 Ruffle 组件保留其上游许可证与版权声明。

