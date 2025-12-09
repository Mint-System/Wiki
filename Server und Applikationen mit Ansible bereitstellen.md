---
title: Server und Applikationen mit Ansible bereitstellen
kind: explain
section: blog
---

> Mit Ansible haben wir die Flexibilität unsere Open Source Systeme überall zu installieren. Egal ob es ein kommerzieller Cloud-Anbieter ist, das Rechenzentrum von Dritten oder Server des Unternehmens ist.

### Was ist Ansible?

Ansible ist ein Open Source Automatisierungs-Werkzeug allgemeinen Konfiguration und Administration von Computern. Mit Ansible beschreibt man die Arbeitsschritte, die es braucht um ein Betriebssystem oder eine Anwendung zu installieren und konfigurieren. Diese Arbeitsschritte enthalten Platzhalter und können so mit Variablen flexibel ausgeführt werden.

Die Arbeitsschritte fasst man in einem **Playbook** zusammen und die Variablen in einem **Inventory**.

### Was ist ein Inventory?

Wie es der Name andeutet handelt es sich um ein Inventar. Im Inventory beschreibt man welche Server es gibt und welche Konfiguration diese erhalten. Man kann die Server zu Gruppen zusammenfassen und so die Anzahl der Variablen zur Konfiguration reduzieren.

### Was ist ein Playbook?

Arbeitsschritte werden werden in Rollen zusammengefasst. Eine Rolle beinhaltet die im Normalfall die Installation und Konfiguration einer Anwendung. Mehrere Rollen lassen sich in einem Playbook zusammenfassen.

### Wie sieht das konkret aus?

Ein Ansible-Projekt besteht nur aus Ordner und Textdateien. Dazu ein Beispiel für die Bereitstellung einer [Nextcloud](https://nextcloud.com/)-Instanz. Auf https://ansible.build publizieren wir alle Ansible Rollen. In der Liste der Rollen findet man _nextcloud_: https://ansible.build/roles/nextcloud/. Dahinter verbirgt sich diese Ordern-Struktur:

![[Ansbile Nextcloud Task File.png]]

Innerhalb der `{}`-Klammern befinden sich die Variablen. welche aus dem Inventory übertragen werden. Die Odner-Struktur der Inventories sieht etwas anders aus:

![[Ansible Nextcloud Inventory.png]]

### Für was kann ich Ansible verwenden?

Die Möglichkeiten wie Ansible zum Einsatz kommt sind unbbegrenzt. Wir verwenden Ansible für:

- Verwaltung von Domain und DNS-Einträgen
- Installation und Konfiguration von Linux-Server
- Bereitstellung eines Monitoring-System
- Bereitstellung eines Login-Anbieter
- Automatisches Backups
- Installation und Konfiguration von Odoo
- Firewall mit Nginx-Proxy
- VPN für Server-Umgebung

Der grosse Vorteil: Wenn der Server oder das System gelöscht wird, kann es in kurzer Zeit vollständig wiederhergestellt werden. Die Konfiguraiton des Systems und die Arbeitsabläufe sind mit Ansible beschrieben und könneen somit auf Knopfdruck ausgeführt werden.

### Wie steht Ansible im Vergleich zu anderen Automatisierungs-Werkzeugen?

Es gibt viele weitere Automatisierungs-Werkzeuge wie Chef, Puppet oder Salt. Im Vergleich zu anderen Lösungen arbeitet nach dem Push-Prinzip. Wenn man im Inventory oder in den Rollen eine Änderung gemacht hat, muss man Ansible ausführen, damit die Änderungen angwendet werden. Bei anderen Systemen arbeitet man nach dem Pull-Prinzip. Auf den jeweiligen Server ist ein Agent installiert, der regelmässig die neusten Änderungen abfragt und diese anwendet.

### Ich brauche noche mehr Informationen.

Gerne bieten wir Workshops zu Ansible an. Wir haben es bereits bei verschiedenen Kunden implementiert und gute Erfahrungen gemacht. Melde Sie sich bei uns und wir machen ein unverbindliches Angebot.
