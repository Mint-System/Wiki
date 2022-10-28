---
tags:
- Prozess
---
# Prozesse Infrastruktur:  Installation Raspberry Pi
Bereitstellung Raspberry Pi.

## Gerät registrieren

Arbeitsschritte:
* Auf Raspberry Pi das Terminal öffnen
* Den Befehl Verbindungs-Befehl von [[JFrog Connect]] eingeben

Als Root-User:

```
su -c 'wget -O - "https://connect.jfrog.io/v2/install_connect" | sh -s M5Livevd8LHwDDyLbzhd2mPKWhPnejcPBA raspberry'
```

Als normaler User:

```
sudo wget -O -  "https://connect.jfrog.io/v2/install_connect" | sudo sh -s M5Livevd8LHwDDyLbzhd2mPKWhPnejcPBA raspberry
```

* Neues Gerät an [[Team Infrastruktur]] melden