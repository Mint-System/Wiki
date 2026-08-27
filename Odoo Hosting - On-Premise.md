---
title: Odoo Hosting - On-Premise
kind: explain
section: product
---

Mit Mint System installiert Odoo auf einem Server in der Umgebung des Kunden

## Systemanforderungen

Der Kunde stellt einen Server zur Installation von Odoo bereit. Die Mint System konfiguriert den Server gemäss dem Angebot [[Managed Server]] und installiert die Anwendung [[Odoo]].

### Hardware

Die folgenden Angaben sind Mindestvoraussetzung und richten sich an 10 bis 50 Benutzer:

**vCPU**: 2 Cores\
**RAM**: 4 GB\
**Disk Root**: 20 GB\
**Disk Data**: 40 GB

### Software

**Betriebssystem**: Linux-basierten Betriebssysteme wie Ubuntu, Debian, CentOS, Fedora werden unterstützt. Die bevorzugte Distribution ist die aktuelle Version von Debian.\
**Container-Support**: Die Odoo Webapplikation wird als Docker-Container betrieben.\
**Berechtigungen**: Zur Installation der benötigten Software werden Root-Rechte benötigt.

### Erreichbarkeit

**DNS**: Der Server soll unter einem Hostname, beispielsweise `odoo.example.com`, erreichbar sein.\
**Intern**: Der Odoo-Server muss nicht unbedingt vom Internet erreichbar sein. Wenn der Server nur innerhalb des Unternehmensnetzwerk erreichbar ist, muss auf die Funktionalität Odoo-Portal verzichtet werden.\
**Extern**: Wenn Odoo aus dem Internet erreichbar sein soll, erfolgt die Verbindung mit HTTPS (Port 443).\
**Remote-Zugriff**: Der Remote-Zugriff von Mint System erfolgt mit SSH. Mehr dazu unter [[SSH-Zugriff]].\
**Repositories**: Zur Installation von Software muss der Server auf externe Repositories zugreifen. Dazu eine Liste von Hosts zur Freigaben:
* docker.com
* docker.io
* odoo.com
* github.com
* gitlab.com
* codeberg.com
* mint.app.codey.ch
* debian.org
* init7.net
* quad9.net
* gcr.io
* infomaniak.com

### Integration

**Login**: Wenn Benutzer sich über [LDAP](https://www.odoo.com/documentation/user/14.0/general/auth/ldap.html) oder [[OAuth]] in Odoo einloggen, müssen die entsprechenden Authentisierungs-Endpunkte erreichbar sein.\
**E-Mail**: Odoo verschickt Mails zur Benachrichtigungen. Dazu ist eine SMTP-Verbindung (Port 587) und eine IMAP-Verbindung (Port 993) zu einem Mail-Account der Organisation notwendig.\
**HTTPS-Zertifikate**: Falls die Zertifkate auf dem Server mit [[Let's Encrypt]] erstellt werden, muss der Server via [HTTP (Port 80) erreichbar](https://letsencrypt.org/docs/allow-port-80/) sein.

## Firewall

Wenn zwischen dem Odoo-Server und Internet eine Firewall geschaltet ist, muss folgendes beachtet werden:

**Loopback**: Die Odoo-Url muss von intern wie von extern geroutet werden.
**TLS-Terminierung**: Wenn die TLS-Zertfikate auf der Firewall generiert werden, müssen Anfragen mit HTTP an den Odoo-Server weitergeleitet werden.
**Proxy-Headers**: Es muss sichergestellt sein, dass die empfangenen HTTP-Headers in der Anfrage erhalten bleiben. 

## Best Practice

Ein On-Premise Odoo Hosting kann wie folgt aussehen:

![[Odoo Hosting On-Premise.svg]]

## Checkliste

Verwaltet der Kunde den Server sowie die Odoo-Installation selbst und möchte einen Qualitätscheck durchführen, haben wir dafür eine [[Odoo On-Premise Checkliste]] erstellt.
