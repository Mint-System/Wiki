# Odoo Troubleshooting

## Odoo-Client-Fehler

**Problem**

After restoring an Odoo instance the following error occurs

```
Fehler:
Zurückverfolgung
_generateActionViews/<@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:447:298
_.forEach@https://metallprojekt.mintsys.ch/web/content/606-2d12e2f/web.assets_common.js:108:566
_generateActionViews@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:447:229
_executeWindowAction/<@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:442:497
```

**Solution**

Reassmble all assets. Alernatively delete assets entries.

##  Python OSError

**Problem**

When generating a report with p3yo this error occurs:

```
OSError: [Errno 8] Exec format error: '/usr/local/bin/libreoffice'
```

**Solution**

Apply shebang line `#!/bin/sh` in shell script.
**

## wkhtmlpdf unpatched

**Problem**

```
wkhtmltopdf: b'The switch --header-spacing, is not support using unpatched qt, and will be ignored.The switch --header-html, is not support using unpatched qt, and will be ignored.The switch --footer-html, is not support using unpatched qt, and will be ignored.'  
```

**Solution**

```bash
cd ~

# Select an appropriate link for your system (32 or 64 bit) from the page https://wkhtmltopdf.org/downloads.html and past to the next line

wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.4/wkhtmltox-0.12.4\_linux-generic-amd64.tar.xz

tar xvf wkhtmltox\*.tar.xz

sudo mv wkhtmltox/bin/wkhtmlto\* /usr/bin

sudo apt-get install -y openssl build-essential libssl-dev libxrender-dev git-core libx11-dev libxext-dev libfontconfig1-dev libfreetype6-dev fontconfig
```

## Watch limit reached

**Problem**

```
OSError(errno.ENOSPC, "inotify watch limit reached")
```

**Solution**

Temporary:

```bash
sudo sysctl fs.inotify.max_user_watches=524288
```