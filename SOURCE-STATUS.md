# Source status for the stable release

This source snapshot is paired with the directory release in the parent `release` staging area.

## Included

- Electron shell source: `main.js`, `preload.js`, and `renderer/`
- Project icon and npm manifests
- Customized Ruffle Rust workspace: `native/ruffle-src/`
- Native runtime binaries required by the current Electron packaging configuration
- Ruffle license and attribution files

## Excluded intentionally

- `native/speed_hook/`: an earlier native-hook experiment, not used by the final release path
- `native/ruffle-master.zip`: redundant source archive
- Electron build output, duplicate test builds, logs, and generated build caches

## Reproducibility note

The Ruffle source tree does not retain its upstream Git history in this workspace. The source version is recorded as `0.3.0` in `native/ruffle-src/Cargo.toml`; the exact upstream commit cannot be reconstructed from this directory alone.
