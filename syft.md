---
tags:
- Definition
---
# syft

CLI tool and library for generating a Software Bill of Materials from container images and filesystems.

Repository: <https://github.com/anchore/syft>

## Beispiel

Generierung einer SBOM mit syft für Docker Image:

```bash
➜  ~ syft odoo:3863e3e905e5
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [1055 packages]
NAME                               VERSION                       TYPE
Babel                              2.6.0                         python
JSONStream                         1.3.2                         npm
Jinja2                             2.10                          python
Mako                               1.0.7                         python
MarkupSafe                         1.1.0                         python
Pillow                             5.4.1                         python
PyPDF2                             1.26.0                        python
PyYAML                             3.13                          python
Unidecode                          1.0.23                        python
Werkzeug                           0.14.1                        python
XlsxWriter                         1.1.2                         python
abbrev                             1.1.1                         npm
adduser                            3.118                         deb
agent-base                         4.2.0                         npm
agentkeepalive                     3.3.0                         npm
agentkeepalive                     3.4.0                         npm
aiohttp                            3.5.1                         python
ajv                                5.0.0                         npm
ansi                               0.3.0                         npm
ansi-align                         2.0.0                         npm
ansi-regex                         2.1.1                         npm
ansi-regex                         3.0.0                         npm
ansi-styles                        3.2.1                         npm
ansi-styles                        4.3.0                         npm
ansicolors                         0.3.2                         npm
ansistyles                         0.1.3                         npm
appdirs                            1.4.3                         python
aproba                             1.2.0                         npm
apt                                1.8.2.2                       deb
archy                              1.0.0                         npm
are-we-there-yet                   1.1.4                         npm
argh                               0.26.2                        python
```