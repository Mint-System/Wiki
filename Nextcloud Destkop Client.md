---
tags:
  - HowTo
lang: en
---
# Nextcloud Desktop Client

## Installation

Download the Nextcloud desktop client from <https://nextcloud.com/install/#desktop-files>.

Move the file from the download folder to the user bin folder:

```bash
cd ~/Downloads
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