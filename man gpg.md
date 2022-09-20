---
tags:
- HowTo
---
# man gpg

QR-Code von public gpg key generieren.\
```bash
gpg --export -a johndoe@example.com | qrencode -Sv40 -o gpg.png
```