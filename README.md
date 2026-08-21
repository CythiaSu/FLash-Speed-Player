# Flash Speed Player

> A lightweight Windows desktop player for SWF/SPL games with Ruffle and adjustable playback speed.
>
> 一款基于 Ruffle、支持 SWF/SPL 游戏和播放速度调节的轻量 Windows 桌面播放器。

Flash Speed Player is an Electron file browser that launches a customized native Ruffle desktop player for local Flash content. It is intended for offline Windows use and for running older SWF/SPL games that still work with Ruffle.

## Current release

The checked-in source corresponds to the last local stable directory build in `release/FlashSpeedPlayer`.

- Platform: Windows x64
- Product: Flash Speed Player
- Native player base: Ruffle 0.3.0 source tree with the project playback-speed changes
- Application metadata: `0.4.0-nightly.2026.6.24`
- Release format: extracted directory; run `Flash Speed Player.exe` from the complete directory

The application metadata still contains the historical nightly version string. Keep that string when reproducing this exact build, or normalize it and rebuild before creating a new stable version tag.

## Features

- Browse local folders and open `.swf` and `.spl` files.
- Keep a favorites list for playable files.
- Delete files or folders after a system confirmation prompt.
- Adjust playback speed in the native player: `0.25x`, `0.5x`, `1x`, `2x`, `3x`, `5x`, and `10x`.
- Use `F5`/`F6`/`F7` in the player to decrease, increase, or reset speed.
- Launch with `high16x16` quality by default.
- Use `Ctrl+Q` in the player to exit the running game.
- Keep navigation usable with keyboard, controller/D-pad input, and Steam Deck/Proton testing adjustments.

## Running the release

Do not copy only the main executable. Extract the complete release directory and start:

```text
Flash Speed Player.exe
```

The release must retain `resources/`, `locales/`, and the native files under `resources/native/`.

## Source layout

```text
main.js                 Electron main process
preload.js              Context bridge for renderer IPC
renderer/               File browser and UI
assets/                 Project icon
native/ruffle-src/      Ruffle Rust workspace used by the native player
native/*.exe            Prebuilt native runtime files used by the packaged app
scripts/                Rebuild helpers
```

The old `native/speed_hook` binaries are not part of the final release path and are intentionally excluded from this source snapshot.

## Building

Requirements:

- Node.js and npm
- Rust stable with the MSVC Windows toolchain
- Visual Studio C++ build tools suitable for the Ruffle dependencies

From the repository root:

```powershell
npm ci
.\scripts\build-native.ps1
npm run dist
```

`build-native.ps1` builds `ruffle_desktop` from `native/ruffle-src` and copies the resulting native executable to the filename expected by the Electron package configuration. `npm run dist` creates an extracted Electron build using the files in `native/`.

## Third-party software

The native player is based on Ruffle. Preserve the notices in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), [native/LICENSE.md](native/LICENSE.md), and `native/ruffle-src/LICENSE.md` when redistributing the source or binaries.

## License

The project-specific license has not been selected yet. The Ruffle components retain their upstream licenses; see the third-party notices before publishing a public repository.
