# Office 365 Exchange für Odoo konfigurieren

Damit Odoo E-Mail mit einem Office 365 Postfach versenden kann, müssen bestimmte Vorbereitungen getroffen werden.

## Relay Server

Odoo verwendet Office 365 Exchange als Relay Server. Dieser muss explizit aktiviert und konfiguriert werden.

```mermaid
graph LR
  A((Odoo)) -->|SMTP| B((Exchange))
```


* Login unter [https://portal.office.com/adminportal/home](https://portal.office.com/adminportal/home) und öffnen *Admin Center > Exchange*
* Navigation nach *Nachrichtenfluss > Connectors*
* Neuer Connector erfassen und mit *Weiter* bestätigen

![[Office 365 Connector.png]]

* Als Name *Odoo Connector* eintragen
* Option *IP-Adresse* auswählen und die Adresse des Odoo Server eintragen

Die IP-Adresse des Odoo Server können Sie mit diesem Befehl anzeigen:

```bash
nslookup erp.example.com
```

* Mit *Weiter* und *Speichern* den Vorgang abschliessen

## Odoo Postfach

Odoo verwendet ein Postfach um E-Mail zu Empfangen und zu versenden

```mermaid
graph LR
  A((Customer)) -->|SMTP| B((Exchange))
  B((Exchange)) -->|IMAP/SMTP| C((Odoo))
```

* Login unter [https://portal.office.com/adminportal/home](https://portal.office.com/adminportal/home) und öffnen *Benutzer > Aktive Benutzer*
* Postfach für Odoo erstellen

## Catchall Mail

Odoo kann unter anderen Adressen Mails versenden und Empfangen. Dazu braucht es eine catchall-Adresse.

* Öffnen Office 365 Admin Center
* Naivgation nach *Benutzer > Aktive Benuter > Auswahl Odoo Account* und mit Rechtsklick *Benutzernamen und E-Mail verwalten* auswählen
* Die Adresse `catchall@example.com` hinzufügen

## Odoo eingehender Mail-Server

Für den Empfang von Exchange-Mails das folgende IMAP-Postfach konfigureiren:

Servername: `outlook.office365.com`\
Servertyp: IMAP Server\
Port: `993`\
SSL/TLS: `[x]`\
Login information: Bentzername und Passwort des Odoo Postfach

## Odoo ausgehender Mail-Server

Odoo unterscheidet zwischen eingehenden und ausgehen Mails. Für den Versand von Mails muss eine SMTP-Verbindung konfiguriert werden.

* Adresse für Mail-Server anzeigen

```
dig example.ch MX +short
0 example-ch.mail.protection.outlook.com.
```

* Mail-Account mit diesen Informaionen erfassen:

Beschreibung: `Office365 Outgoing`\
Postausgang-Server: `example-ch.mail.protection.outlook.com`\
SMTP-Port: `25`\
Verbindungssicherheit: `Keine`

* Die Verbindung testen und den Vorgang abschliessen