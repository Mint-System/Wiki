---
kind: reference
section: vendor
website: https://www.debian.org/
---

## Lifecycle

<https://endoflife.date/debian>

## HowTo

### Passwordless sudo einrichten

- Einloggen auf Server mit Benutzername und Login
- Erstellen Eintrag `$USERNAME ALL=(ALL) NOPASSWD: ALL` in `/etc/sudoers`
- Session neustarten und Passwordless Sudo testen
