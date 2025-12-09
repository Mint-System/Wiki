---

---

# OpenVPN Cheatsheet

Requirement:

- .ovpn configuration file
- openvpn installed

Load the configuration file\
`openvpn2 --config janik_vonrotz@vpn.example.ch.ovpn`

Import config\
`openvpn3 config-import --config janik_vonrotz@vpn.example.ch.ovpn`

List configs\
`openvpn3 configs-list`

Start session\
`openvpn3 session-start --config janik_vonrotz@vpn.example.ch.ovpn`

Stop session\
`openvpn3 session-manage --config ~janik_vonrotz@vpn.example.ch.ovpn --disconnect`

Get PID\
`openvpn3 sessions-list`

Kill session\
`sudo kill $PID`
