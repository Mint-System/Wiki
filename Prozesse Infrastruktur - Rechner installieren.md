---
title: Prozesse Infrastruktur - Rechner installieren
section: process
kind:
  - howto
---
## Rechner neuinstallieren

### Automatische Installation
Wir haben eine USB-stick ([[Prozesse Infrastruktur - Installationsmedium bereitstellen]]) verfügbar um eine Rechner mit Ubuntu einzurichten. Die benötigte Anwendungen werden automatisch installiert. Der Rechner booten von der USB-stick und 'Try or Install Ubuntu' auswählen. Nach eine Weile kommst du in eine Ubuntu Umgebung und wird eine GUI für die Installation gezeigt.

Während der Installation gibt es in der GUI die volgende Eingaben zu machen :
- Tastatur layout.
- Netzwerk Verbindung. Eine Internet Verbindung soll verfügbar sein. Z.B. verbinde mit eine WiFi Netzwerk.
- Install recommended proprietary software. Wegen Kompatibilität empfehlen wir Software und Media Formats anzunehmen. Es könnte z.B. sein dass, Netzwerk oder Grafik Treiber nicht standard verfügbar sind.
- Partitionierung von der Festplatte. Empfohlen wird um die ganze Festplatte für diese Installation zu verwenden ("Advanced featured" -> "Use LVM and encryption"). Somit auch die Festplatte verschlüsselt werden kann mit ein (LUKS) Passphrase/Kennwort. Der Passphrase kann später geändert werden. 
```
NB alle Daten werden von der Festplatte gelöscht.
```
- Konto angaben und Kennwort.

Nach der Neustart wird noch einiges gefragt.
- Alle Schritte können  übersprungen werden.
- Jetzt kannst du deine Rechner weiter einrichten mit den [[Mint System Dotfiles]].

### Manuelle Installation
- Verschlüsselung von der Festplatte ist eine Muss. Nachträglich verschlüsseln kann gefährlich sein wegen Datenverlust. Empfohlen wird das während der Installation einzurichten.
- Snaps zu installieren (snap install *snapname*)
	- keepassxc
    - thunderbird
    - obsidian
    - firefox
    - drawio
    - astral-uv
    - notepad-plus-plus
    - kubectl
    - kubectx
	- *Nach Bedarf*
		- sublime-text
	    - sublime-merge
	    - element-desktop
	    - teams-for-linux
	    - whatsapp-linux-desktop
	    - signal-desktop
- Packages zu installieren (sudo apt install *packagename*)
    - nextcloud-desktop
    - libreoffice
    - git
    - docker.io
	- *Nach Bedarf*
	    - gimp
	    - vlc
	    - rhythmbox
Nach der Neustart wird noch einiges gefragt.
- Alle Schritte können  übersprungen werden.
- Jetzt kannst du deine Rechner weiter einrichten mit den [[Mint System Dotfiles]].