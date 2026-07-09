{pkgs}: {
  deps = [
    pkgs.libgbm
    pkgs.gtk3
    pkgs.xorg.libxcb
    pkgs.xorg.libXrandr
    pkgs.xorg.libXfixes
    pkgs.xorg.libXext
    pkgs.xorg.libXdamage
    pkgs.xorg.libXcomposite
    pkgs.xorg.libX11
    pkgs.alsa-lib
    pkgs.pango
    pkgs.cairo
    pkgs.mesa
    pkgs.libxkbcommon
    pkgs.libdrm
    pkgs.at-spi2-atk
    pkgs.expat
    pkgs.dbus
    pkgs.cups
    pkgs.atk
    pkgs.nspr
    pkgs.nss
    pkgs.glib
    pkgs.chromium
  ];
}
