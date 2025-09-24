---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Infrastruktur -  Raspberry Pi bereitstellen

Bereitstellung Raspberry Pi.

## Raspberry Pi Image ausführen

* Laden Sie den *Raspberry Pi Imager* herunter <https://www.raspberrypi.com/software/>
* Installieren Sie die Software
* Starten Sie den Imager und wählen Sie als Betriebssystem *Raspberry OS* aus
* Stecken Sie die SD Karten in den Computer und wählen Sie das Medium

![[Raspberry Pi Imager.png]]

* Klicken Sie auf erweiterten Optionen
* Aktivieren Sie diese Optionen und geben Sie die entsprechenden Werte ein:
	* Enable SSH
	* Set username and password
	* Configure wireless LAN
	* Set locale settings
* Starten Sie den Vorgang mit *Write

## SSH-Zugriff via GUI einrichten

Arbeitsschritte:
* Auf Rraspberry Pi einloggen
* "Raspberry Pi Confiugration" starten
* Im Tab *Interfaces* die Option *SSH* aktivieren
* Mit *Ok* den Vorgang bestätigen
* Terminal starten und `ifconfig` eingeben
* Mit SSH zugreifen `ssh pi@ip-address`

## SSH-Zugriff via Terminal einrichten

Arbeitsschritte:
* Auf Raspberry Pi einloggen
* Terminal starten
* Den SSH-Dienst starten `sudo systemctl enable ssh`
* Die aktuelle IP-Adresse anzeigen `ifconfig`
* Mit SSH zugreifen `ssh pi@ip-address`

## Gerät mit Tailscale einrichten

Arbeitsschritte:
* Tailscale installieren `sudo apt-get install tailscale`
* Backend starten `sudo systemctl status tailscaled`
* In Backend einloggen `sudo tailscale login`
* Den Einladungs-Link im Browser öffnen
* Mit GitHub-Account einloggen
* Beim Zugriff unbedingt die Orgnisation *Mint System* verwenden

## Gerät mit JFrog Connect verbinden

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

* Neues Gerät an [[Kreis Infrastruktur]] melden