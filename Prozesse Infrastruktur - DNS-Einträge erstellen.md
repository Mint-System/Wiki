---
tags:
- Prozess
---

# Prozesse Infrastruktur: DNS-Einträge erstellen

## DNS-Einträge für Server erstellen

* Name gemäss Liste [[Server]] definieren
* DNS-Eintrag in Ansible registrieren

## DNS-Einträge für Nextcloud erstellen

* Erstellen Sie einen Eintrag für Nextcloud und Services. Beispiel:
	* `cloud.example.com CNAME $NAME.mint-system.com`
	* `doc.example.com CNAME $NAME.mint-system.com`

### DNS-Einträge für Mail erstellen

Für die Mail-Domain führen Sie diese Schritte aus:
* Erstellen Sie einen MX-Eintrag
* Erstellen Sie einen DKIM-Eintrag
* Erstellen Sie einen SPF-Eintrag