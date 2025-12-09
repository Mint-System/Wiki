---
kind:
  - howto
section: product
---

# Restic Troubleshooting

## Snapshots

### Unsupported version

**Problem**

```
Fatal: config cannot be loaded: unsupported repository version.
```

**Cause**

With version 0.14 the repo version v2 was introduced.

**Solution**

Make sure you have either restic above or below 0.14 installed.
