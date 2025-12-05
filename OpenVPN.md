---
tags:
- Definition
website: https://openvpn.net/download-open-vpn/
---
# OpenVPN

VPN client.

Related:

- [[OpenVPN Cheatsheet]]
- [[OpenVPN Handbook]]

## HowTos

## Store username and passwword

Create `pass.txt` file next to the `.ovpn` file.

Add username and password to the file:

```
username
password
```

In the configuration file add `auth-user-pass pass.txt`.

## Troubleshooting

### Unrecognized arguments

While parsing the config file this error is thrown:

```
** ERROR ** /bin/openvpn2: error: unrecognized arguments: --route-delay 4
```

Simply comment the config line out to resolve this issue.
