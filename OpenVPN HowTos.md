---
tags:
- HowTo
---
# OpenVPN HowTos

## Store username and passwword

Create `pass.txt` file next to the `.ovpn` file.

Add username and password to the file:

```
username
password
```

In the configuration file add `auth-user-pass pass.txt`.