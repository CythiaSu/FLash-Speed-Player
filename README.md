# Flash Speed Player

> 基于 Ruffle 的轻量 Windows SWF/SPL 本地播放器，支持收藏、浏览和播放速度调节。  
> A lightweight Windows SWF/SPL player based on Ruffle with browsing, favorites, and playback-speed control.

[![Status](https://img.shields.io/badge/status-stable%20local%20build-2ea44f?style=for-the-badge)](SOURCE-STATUS.md)
[![Platform](https://img.shields.io/badge/platform-Windows%20x64-0078d4?style=for-the-badge&logo=windows)](#requirements)
[![Engine](https://img.shields.io/badge/engine-Ruffle-6b4fbb?style=for-the-badge)](https://github.com/ruffle-rs/ruffle)
[![Format](https://img.shields.io/badge/format-SWF%20%2F%20SPL-f2c94c?style=for-the-badge)](#features)
[![Speed](https://img.shields.io/badge/speed-0.25x%20%E2%80%93%2010x-f0883e?style=for-the-badge)](#controls)

<p align="center">
  <b>[BROWSE] Browse</b>&nbsp;&nbsp;·&nbsp;&nbsp;
  <b>[PLAY] Play</b>&nbsp;&nbsp;·&nbsp;&nbsp;
  <b>[SPEED] Speed Control</b>&nbsp;&nbsp;·&nbsp;&nbsp;
  <b>[LOCAL] Offline Windows</b>
</p>

## 中文

Flash Speed Player 是一个面向 Windows 的本地 Flash 内容播放器。Electron 外壳负责文件浏览、收藏、删除和进程启动，经过定制的原生 Ruffle 播放器负责 SWF/SPL 执行、渲染、输入和速度控制。

### 功能

| 标记 | 功能 |
|---|---|
| `[BROWSE]` | 浏览本地文件夹并打开 `.swf` 与 `.spl` 文件 |
| `[FAVORITE]` | 为常玩的游戏维护收藏夹 |
| `[DELETE]` | 删除文件或文件夹前显示系统确认提示 |
| `[SPEED]` | 支持 `0.25x` 到 `10x` 播放速度 |
| `[QUALITY]` | 默认使用 `high16x16` 画质启动游戏 |
| `[INPUT]` | 支持键盘、手柄、D-pad 和 Steam Deck/Proton 导航 |
| `[EXIT]` | 原生播放器使用 `Ctrl+Q` 退出当前游戏 |

### 前置要求

- Windows x64。
- Node.js 和 npm，仅在从源码构建时需要。
- Rust stable 与 MSVC Windows 工具链，仅在重新构建原生 Ruffle 时需要。
- Visual Studio C++ 构建工具，仅在从源码构建时需要。

播放器面向离线本地文件使用，不依赖在线 Flash 服务。

### 操作方式

| 按键 | 功能 |
|---|---|
| `↑` `↓` / `W` `S` | 移动当前选择 |
| `←` / `A` | 返回上一级文件夹 |
| `→` / `D` | 打开选中的文件夹 |
| `E` / `Space` | 打开文件夹或播放文件 |
| `F` | 打开收藏夹 |
| `R` | 收藏或取消收藏当前游戏 |
| `Delete` | 删除当前文件或文件夹 |
| `F5` | 原生播放器减速 |
| `F6` | 原生播放器加速 |
| `F7` | 将速度恢复为 `1x` |
| `Ctrl` + `Q` | 退出当前游戏 |

### 当前版本

当前源码对应最后一个本地稳定目录构建：

| 项目 | 内容 |
|---|---|
| 平台 | Windows x64 |
| 产品 | Flash Speed Player |
| 原生引擎 | 修改后的 Ruffle desktop player |
| Ruffle 源码版本 | `0.3.0` |
| 应用版本元数据 | `0.4.0-nightly.2026.6.24` |
| 发布形式 | 解压运行目录 |

注意：程序内部仍保留历史 nightly 版本字符串。创建新的正式语义版本标签前，应先统一版本号并重新构建。

### 运行发布版

请完整解压发布目录，然后运行：

```text
Flash Speed Player.exe
```

请保持以下目录与主程序位于同一发布目录：

```text
resources/
locales/
resources/native/
```

不要单独移动主程序，否则可能找不到播放器资源和本地化文件。

### 项目架构

```text
Electron 外壳
    -> 文件浏览、收藏、删除、设置、进程启动

原生 Ruffle 播放器
    -> SWF/SPL 执行、渲染、输入、画质、播放速度
```

这种分离让本地文件通过原生桌面路径加载，不依赖浏览器 WASM 包装层或 `file://` 工作流。

### 源码结构

| 路径 | 作用 |
|---|---|
| `main.js` | Electron 主进程 |
| `preload.js` | 渲染进程安全桥接层 |
| `renderer/` | 文件浏览器和 UI |
| `assets/` | 项目图标资源 |
| `native/ruffle-src/` | 修改后的 Ruffle Rust 工作区 |
| `native/*.exe` | 打包时使用的预编译运行时 |
| `scripts/` | 重新构建辅助脚本 |
| `THIRD-PARTY-NOTICES.md` | 第三方组件声明 |

## English

Flash Speed Player is a Windows desktop player for local Flash content. The Electron shell handles browsing, favorites, deletion, and process launching, while a customized native Ruffle player handles SWF/SPL execution, rendering, input, and playback speed.

### Features

| Marker | Feature |
|---|---|
| `[BROWSE]` | Browse local folders and open `.swf` and `.spl` files |
| `[FAVORITE]` | Keep a favorites list for frequently played games |
| `[DELETE]` | Show a system confirmation prompt before deleting files or folders |
| `[SPEED]` | Adjust playback speed from `0.25x` to `10x` |
| `[QUALITY]` | Start games with `high16x16` quality by default |
| `[INPUT]` | Support keyboard, controller, D-pad, and Steam Deck/Proton navigation |
| `[EXIT]` | Use `Ctrl+Q` in the native player to exit the running game |

### Requirements

- Windows x64.
- Node.js and npm for source builds.
- Rust stable with the MSVC Windows toolchain for rebuilding the native player.
- Visual Studio C++ build tools for source builds.

The player is designed for offline local-file use and does not depend on an online Flash service.

### Controls

| Key | Action |
|---|---|
| `↑` `↓` / `W` `S` | Move the selection |
| `←` / `A` | Return to the parent folder |
| `→` / `D` | Open the selected folder |
| `E` / `Space` | Open a folder or play a file |
| `F` | Open favorites |
| `R` | Add or remove the selected game from favorites |
| `Delete` | Delete the selected file or folder |
| `F5` | Decrease native-player speed |
| `F6` | Increase native-player speed |
| `F7` | Reset native-player speed to `1x` |
| `Ctrl` + `Q` | Exit the running game |

### Current Build

The checked-in source corresponds to the last local stable directory build:

| Item | Value |
|---|---|
| Platform | Windows x64 |
| Product | Flash Speed Player |
| Native engine | Customized Ruffle desktop player |
| Ruffle source version | `0.3.0` |
| Application metadata | `0.4.0-nightly.2026.6.24` |
| Release format | Extracted directory |

The application still contains the historical nightly version string. Normalize the version metadata and rebuild before creating a new semantic-version release tag.

### Run the Release

Extract the complete release directory and run:

```text
Flash Speed Player.exe
```

Keep these directories next to the executable:

```text
resources/
locales/
resources/native/
```

Do not move the executable by itself; the player and localization resources are resolved relative to the extracted directory.

### Architecture

```text
Electron shell
    -> Browsing, favorites, deletion, settings, and process launching

Native Ruffle player
    -> SWF/SPL execution, rendering, input, quality, and playback speed
```

This separation keeps local-file loading in the native desktop path instead of a browser-only WASM or `file://` workflow.

### Source Layout

| Path | Role |
|---|---|
| `main.js` | Electron main process |
| `preload.js` | Secure renderer bridge |
| `renderer/` | File browser and UI |
| `assets/` | Project icon assets |
| `native/ruffle-src/` | Customized Ruffle Rust workspace |
| `native/*.exe` | Prebuilt runtime files used by packaging |
| `scripts/` | Rebuild helpers |
| `THIRD-PARTY-NOTICES.md` | Third-party notices |

## Build from Source

Install Node.js, npm, Rust stable with the MSVC Windows toolchain, and suitable Visual Studio C++ build tools. Run from the repository root:

```powershell
npm ci
.\scripts\build-native.ps1
npm run dist
```

The native build script compiles `ruffle_desktop` and copies the result to the filename expected by the Electron packaging configuration. The Electron build creates an extracted Windows application directory.

## Third-Party Notices

The native player is based on Ruffle. Preserve the notices in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), [native/LICENSE.md](native/LICENSE.md), and `native/ruffle-src/LICENSE.md` when redistributing the project.

The upstream Ruffle project is available at [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle).

The project-specific license is provided by the existing project files. No additional license file has been added in this README update.

