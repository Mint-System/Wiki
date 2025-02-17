---
tags:
  - HowTo
---
# Nextcloud Destkop Client

## Installation

Laden Sie den Nextcloud Desktop Client hier herunter: <https://nextcloud.com/install/#desktop-files>

```bash
[~/Downloads]$ sudo mv Nextcloud-3.15.3-x86_64.AppImage /usr/bin/nextcloud
[~/Downloads]$ sudo chmod +x /usr/bin/nextcloud
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

Update the desktop database.

```bash
update-desktop-database
```

Then you can add the app to the startup applications:

![[Gnome Tweaks Add Nextcloud.png]]