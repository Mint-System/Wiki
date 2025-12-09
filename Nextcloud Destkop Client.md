---
title: Nextcloud Desktop Client
lang: en
kind: tutorial
section: tool
---

## Installation for Windows

Download and install the Nextcloud desktop client from <https://nextcloud.com/install/#desktop-files>.

## Installation for Linux (package)

Mit dem Package manager die App installieren.

```bash
sudo apt install nextcloud-client
sudo yum install nextcloud-client
```

Mit dem Gnome Desktop (48.3) und Nextcloud Client (3.16.3) auf Fedora gibt es eine File Manager Integration:

![[Linux Gnome Nextcloud Desktop Integration.png]]

## Installation for Linux (binary)

Download the Nextcloud desktop client from <https://nextcloud.com/install/#desktop-files>.

Move the file from the download folder to the user bin folder:

```bash
wcurl https://github.com/nextcloud-releases/desktop/releases/download/v3.15.3/Nextcloud-3.15.3-x86_64.AppImage
sudo mv Nextcloud-3.15.3-x86_64.AppImage /usr/bin/nextcloud
sudo chmod +x /usr/bin/nextcloud
```

Create a desktop entry:

```bash
cat <<EOF | sudo tee /usr/share/applications/nextcloud.desktop > /dev/null
[Desktop Entry]
Name=Nextcloud
Exec=/usr/bin/nextcloud
Icon=nextcloud
Type=Application
Categories=Network;
Terminal=false
EOF
```

Update the desktop database:

```bash
update-desktop-database
```

Then you can add the app to the startup applications:

![[Gnome Tweaks Add Nextcloud.png]]
