---
tags:
- Asset
---
# Managed Server Konfiguration

Als Teil der Managed Server Dienstleistung erfolgt die Konfiguration und Bereitstellung verschiedener Applikationen.

## Standard

Die folgende Grafik zeigt auf wie eine Server-Umgebung für Odoo aussieht und welche Verbindung von Intern und Extern gemacht werden.

![[Managed Server Konfiguration Standard.canvas|Managed Server Konfiguration Standard]]

## Mailgate

Wenn kein Mail-Postfach für Odoo zur Verfügung steht, kann der Versand und Empfang mit [[Mailgun]] und [[Odoo Mailgate]] umgesetzt werden.

![[Managed Server Konfiguration Mailgate.canvas|Managed Server Konfiguration Mailgate]]
Für diese Konfiguration wird eine Subdomain mit den folgenden DNS-Einträgen benötigt. Als Subodmain empfehlen wir `mail.example.com`.

| Host                               | Type  | Value                           | Description    |
| ---------------------------------- | ----- | ------------------------------- | -------------- |
| email.mail.example.com             | CNAME | eu.mailgun.org                  | Mail Tracking  |
| mail.example.com                   | MX    | server.example.com              | Mail Receiving |
| email.\_domainkey.mail.example.com | TXT   | k=rsa; p=MIGfMA0GCSqGSIb3D ...  | DKIM key       |
| mail.example.com                   | TXT   | v=spf1 include:mailgun.org ~all | SPF            |
| \_dmarc.mail.example.com           | TXT   | v=DMARC1; p=reject;             | DMARC policy   |
Die benötigten Werte werden von Mailgun generiert.
