---
kind:
  - howto
section: process
---

# Prozesse Infrastruktur - Innernet bereitstellen

Bereistellung Innernet-Umgebung.

## Innernet Client installieren

Arbeittsschritte:

- [WireGuard](https://www.wireguard.com/install/) installieren
- Install Cargo `sudo apt install cargo`
- Login as root `sudo su`
- Install Innernet Client `cargo install --git https://github.com/tonarino/innernet --tag v1.5.5 client`
- Auf Innernet Server das Invitation-File erstellen und auf den Client kopieren
- Invitation-File installieren `sudo innernet install /path/to/invitation.toml`
