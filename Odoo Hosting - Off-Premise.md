---
tags:
- Asset
---
# Odoo Hosting - Off-Premise

Mit Mint System installiert Odoo auf einem Server bei einem ICT-Partner des Kunden. 

## Systemanforderungen

Der Partner des Kunden stellt einen Server zur Installation von Odoo bereit. Die Mint System konfiguriert diesen Server gemäss dem Angebot [[Managed Server]] und installiert die Anwendung [[Odoo]].

### Hardware

Die folgenden Angaben sind Mindestvoraussetzung und richten sich an 10 bis 50 Benutzer:

**vCPU**: 2 Cores  
**RAM**: 4 GB  
**Disk**: 40 GB  

### Software

**Betriebssystem**: Die Linux-basierten Betriebsysteme Ubuntu, Debian, CentOS werden unterstützt.  
**Container-Support**: Die Odoo Webapplikation wird als Docker-Container betrieben.   
**Berechtigungen**: Zur Installation der benötigten Software werden Root-Rechte benötigt.  

### Zugriff

**DNS**: Der Server soll unter einem Hostname, beispielsweise `odoo.example.com`, erreichbar sein.\
**Extern**: Der muss muss von Extern erreichbar sein.\
**SSH**: Der Remote-Zugriff erfolgt über SSH. Der entsprechende Port (Standard ist 22) muss freigeschaltet sein. Mehr dazu unter [[SSH-Zugriff]].\
**Repositories**: Zur Installation von Software kann der Server auf externe Repositories der jeweiligen Linux-Distribution zugreifen.

### Integration

**Login**: Wenn Benutzer sich über [LDAP](https://www.odoo.com/documentation/user/14.0/general/auth/ldap.html) oder [[OAuth]] in Odoo einloggen, müssen die entsprechenden Authentisierungs-Endpunkte erreichbar sein.  
**E-Mail**: Odoo verschickt Mails zur Benachrichtigungen. Dazu ist eine SMTP-Verbindung (Port 587) und eine IMAP-Verbindung (Port 993) zu einem Mail-Account der Organisation notwendig.  
**HTTPS**: Die Odoo Webapplikation soll unter HTTPS (Port 443) erreichbar sein. Dazu müssen die notwendigen Zertifikate bereitgestellt werden.
**HTTP**: Falls die Zertifkate mit [[Let's Encrypt]] erstellt werden, muss der Server mit [HTTP (Port 80) erreichbar](https://letsencrypt.org/docs/allow-port-80/) sein.

## Best Practice

Ein Off-Premise Odoo Hosting kann wie folgt aussehen:

![[Odoo Hosting On-Premise.svg]]
