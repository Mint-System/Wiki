---
kind: reference
lang: en
section: tool
tags:
- Definition
website: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
---
# PuTTY

PuTTY is an SSH and telnet client, developed originally by Simon Tatham for the Windows platform.

## Howto

### Generate ssh keys

- Open PuttyGen
- Click Load
- Load your private key
- Go to `Conversions->Export OpenSSH` and export your private key
- Copy your private key to `~/.ssh/id_dsa` (or `id_rsa`).

### Setup

Setup PuTTY Connection.

- Session:
  - Host Name: `geras.mint-system.com`
  - Port: `22`
- Connection > Data:
  - Auto-login username: `marcusmenzel`
- Connection > Proxy:
  - Proxy type: `SSH to proxy and use port forwarding`
  - Proxy hostname: `jump.mint-system.com`
  - Port: `22`
  - Username: `marcusmenzel`
- Connection > SSH > Tunnels:
  - dev
    - Source port: `58443`
    - Destination: `odoo-dev.allnet.ch:443`
  - prod
    - Source port: `59443`
    - Destination: `odoo-dev.allnet.ch:443`
- Connection > SSH > Auth > Credentials:
  - Private key for the authentication: Private-Key-Datei auswählen
- Session > Logging:
  - Session logging: `All session output`
