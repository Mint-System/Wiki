---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - Server entfernen

Einen Server entfernen.

### Benutzer entfernen

Wenn der Server bei einem Drittanbieter gehostet ist, müssen Sie als erstes die Benutzer entfernen.

Arbeitsschritte:

* Entfernen Sie die Benutzer auf dem Server `aplaybook -i inventories/setup plays/clean.yml -t iam -l $ALIAS`

## Server aus Ansible Inventar entfernen

Arbeitsschritte:

* Suchen Sie im Inventar nach dem Server-Alias
* Entfernen Sie alle Inventory-Einträge mit dem Alias
* Entfernen Sie die dazugehörigen DNS-Einträge
* Führen Sie das Playbook zur Aktualisierung des Monitoring-System aus

## Server bei Hosting-Provider löschen

Arbeitsschritte:

* Loggen Sie sich bei der Konsole des Hosting-Provider ein
* Fahren Sie den Server herunter
* Löschen Sie den Server nach 3 Tagen.

## Odoo Abonnement beenden

Arbeitsschritte:

* Loggen Sie sich bei Odoo ein
* Rufen Sie das Abonnement für das Server-Hosting auf
* Wählen Sie die Aktion schliessen

## Server-Dokumentation aktualisieren

Arbeitsschritte:

* Entfernen Sie den Server aus [[Servers#Liste]]
* Geben Sie den Server-Alias frei