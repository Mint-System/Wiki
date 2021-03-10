# OpenVPN

VPN client.

Website: <https://openvpn.net/download-open-vpn/>

## Configuration

Requirement:
* .ovpn configuration file
* openvpn installed

Load the configuration file\
`openvpn2 --config janik_vonrotz@vpn.example.ch.ovpn`

Import config\
`openvpn3 config-import --config janik_vonrotz@vpn.example.ch.ovpn`

List configs\
`openvpn3 configs-list`

Start session\
`openvpn3 session-start --config janik_vonrotz@vpn.example.ch.ovpn`

Get PID\
`openvpn3 sessions-list`

Kill session\
`sudo kill $PID`

## Troubleshooting

### Unrecognized arguments

While parsing the config file this error is thrown:

```
** ERROR ** /bin/openvpn2: error: unrecognized arguments: --route-delay 4
```

Simply comment the config line out to resolve this issue.