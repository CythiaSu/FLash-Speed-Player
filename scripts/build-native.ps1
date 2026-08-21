$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$manifest = Join-Path $repoRoot "native\ruffle-src\Cargo.toml"
$builtPlayer = Join-Path $repoRoot "native\ruffle-src\target\release\ruffle.exe"
$packagedPlayer = Join-Path $repoRoot "native\flash-speed-player.exe"

if (-not (Get-Command cargo -ErrorAction SilentlyContinue)) {
    throw "cargo was not found. Install Rust with the MSVC Windows toolchain first."
}

& cargo build --release --manifest-path $manifest --package ruffle_desktop
if ($LASTEXITCODE -ne 0) {
    throw "Ruffle native build failed with exit code $LASTEXITCODE."
}

if (-not (Test-Path -LiteralPath $builtPlayer)) {
    throw "Expected native output was not found: $builtPlayer"
}

Copy-Item -LiteralPath $builtPlayer -Destination $packagedPlayer -Force
Write-Output "Native player copied to $packagedPlayer"
