---
tags:
  - Website
kind:
  - explain
---
# autossh

Website: <https://linux.die.net/man/1/autossh>

## Forward SSH Tunnel

```yml
local_user="debian"
local_key_file="/home/debian/.ssh/id_ed25519"
local_interface="0.0.0.0"
local_port="8080"
ssh_user="debian"
ssh_server="jump.example.com"
ssh_port="2222"
remote_server="remote.example.com"
remote_port="80"
```

```mermaid
graph TD
    A[localhost:8080] --->|ssh| B[debian @ jump.example.com:2222]
    B -->|ssh| C[debian @ remote.example.com:22]
    A -->|http| D[remote.example.com:80]
    
    style A fill:#e8f5e8
    style B fill:#fff3e0
    style C fill:#ffe8e8
    style D fill:#ffe8e8
```

## Reverse SSH Tunnel

```yml
local_user="autossh"
local_key_file="/home/autossh/.ssh/id_ed25519"
local_interface="0.0.0.0"
local_port="22"
ssh_user="debian"
ssh_server="jump.example.com"
ssh_port="2222"
remote_server="localhost"
remote_port="2223"
```

```mermaid
graph TD
    A[autossh @ remote.example.com0.0.0.0:22] -->|ssh| B[autossh @ jump.example.com:2222]
    D[localhost] -->|ssh| C[debian @ jump.example.com:2223]
    C -->|ssh| A
    
    style A fill:#ffe8e8
    style B fill:#fff3e0
    style C fill:#fff3e0
    style D fill:#e8f5e8
```