---
title: Git Handbook
kind: howto
lang: en
section: handbook
---

[[TOC]]

## Push until specific commit

This how you can push until a specific commit (hash):

```bash
COMMIT=1f72f3ba764e4ece0cd556779781b414c2efacb6
echo "Summary of the commits diff:"
git --no-pager log origin/main..$COMMIT --oneline
git push origin $COMMIT:main
```
