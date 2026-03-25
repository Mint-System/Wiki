---
kind: howto
section: handbook
---

## Dynamic Forwarding

Creates a **SOCKS proxy** on localhost port 1080.

```bash
ssh -p 46022 -D 1080 $ALIAS.mint-system.com
```

Start Chromium using the proxy.

```bash
 chromium --proxy-server="socks5://127.0.0.1:1080"
```

Browse the internal network.
