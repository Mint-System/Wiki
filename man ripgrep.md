---
tags:
- HowTo
---
# man ripgrep

Text in allen Dateien ersetzen.\
```bash
rg " sie " --files-with-matches | xargs -d '\n' sed -i "s/ sie / Sie /g"
```