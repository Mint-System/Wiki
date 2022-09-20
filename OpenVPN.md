---
tags:
- Definition
---
# OpenVPN

VPN client.

Website: <https://openvpn.net/download-open-vpn/>

* [[OpenVPN Cheatsheet]]
* [[OpenVPN HowTos]]

## Troubleshooting

### Unrecognized arguments

While parsing the config file this error is thrown:

```
** ERROR ** /bin/openvpn2: error: unrecognized arguments: --route-delay 4
```

Simply comment the config line out to resolve this issue.