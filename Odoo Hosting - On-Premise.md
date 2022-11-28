---
tags:
- Asset
---
# Odoo Hosting - On-Premise
Mit Mint System installiert Odoo auf einem Server in der Umgebung des Kunden

## Systemanforderungen
Der Kunde stellt einen Server zur Installation von Odoo bereit. Die Mint System konfiguriert den Server gemäss dem Angebot [[Managed Server]] und installiert die Anwendung [[Odoo]].

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
**Extern**: Wenn der Server und die Odoo Webapplikation nicht vom Kunden verwaltet werden, muss der Server von extern erreichbar sein.\
**SSH**: Der Remote-Zugriff erfolgt über SSH. Der entsprechende Port (Standard 22) muss freigeschaltet sein. Mehr dazu unter [[SSH-Zugriff]].\
**Repositories**: Zur Installation von Software kann der Server auf externe Repositories der jeweiligen Linux-Distribution zugreifen.  

### Integration

**Login**: Wenn Benutzer sich über [LDAP](https://www.odoo.com/documentation/user/14.0/general/auth/ldap.html) oder [[OAuth]] in Odoo einloggen, müssen die entsprechenden Authentisierungs-Endpunkte erreichbar sein.  
**E-Mail**: Odoo verschickt Mails zur Benachrichtigungen. Dazu ist eine SMTP-Verbindung (Port 587) und eine IMAP-Verbindung (Port 993) zu einem Mail-Account der Organisation notwendig.  
**HTTPS**: Die Odoo Webapplikation soll unter HTTPS (Port 443) erreichbar sein. Dazu müssen die notwendigen Zertifikate bereitgestellt werden.
**HTTP**: Falls die Zertifkate mit [[Let's Encrypt]] erstellt werden sollen, muss der Server mit HTTP (Port 80) erreichbar sein.

## Best Practice

Ein On-Premise Odoo Hosting kann wie folgt aussehen:

![[Odoo Hosting On-Premise.png]]

## Checkliste

Verwaltet der Kunde den Server sowie die Odoo-Installation selbst und möchte einen Qualitätscheck durchführen, haben wir dafür eine [[Odoo On-Premise Checkliste]] erstellt.