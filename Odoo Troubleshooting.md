---
tags:
- HowTo
---
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

## Cannot unreserve product in stock

**Problem**

```
It is not possible to unreserve more products of $PRODUCT_NAME than you have in stock.
Es ist nicht möglich, die Reservierung für mehr Produkte von $PRODUKTNAME auzuheben als im Lager vorhanden sind.
```

**Solution**

First run [[Odoo Server Aktionen#Mint System Report Unreserved Qty]] and then run [[Odoo Server Aktionen#Mint System Fix Unreserved Qty]].

See here for details: <https://www.odoo.com/de_DE/forum/hilfe-1/it-is-not-possible-to-unreserve-more-products-of-than-you-have-in-stock-138783>

The original script <https://gist.github.com/amoyaux/279aee13eaddacbddb435dafbc0a6295>.

## Wrong translation

When opening the sale report it fails.

**Problem**

```
Fehler:
Odoo Server Error

Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/odoo/addons/web/controllers/main.py", line 2137, in report_download
    report_name = safe_eval(report.print_report_name, {'object': obj, 'time': time})
  File "/usr/lib/python3/dist-packages/odoo/tools/safe_eval.py", line 328, in safe_eval
    c = test_expr(expr, _SAFE_OPCODES, mode=mode)
  File "/usr/lib/python3/dist-packages/odoo/tools/safe_eval.py", line 184, in test_expr
    code_obj = compile(expr, "", mode)
  File "<string>", line 1
    (object.state in ('draft', 'sent') und 'Angebot - %s' % (object.name)) oder 'Auftrag - %s' % (object.name)
                                         ^
SyntaxError: invalid syntax
```

**Solution**

Reset the translated name of the report.

![[Odoo troubleshooting - wrong translation.png]]