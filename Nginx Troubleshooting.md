---
tags:
  - Troubleshooting
kind: howto
section: product
---
# Nginx Troubleshooting

## Issues

### Request entity too large

**Problem**

The server responds with:

```
413 Request Entity Too Large
```

**Solution**

Increase the max upload size:

```
client_max_body_size 128M;
```