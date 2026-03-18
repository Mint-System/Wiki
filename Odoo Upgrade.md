---
title: Odoo Upgrade
kind: explain
section: communication
---

## Beschreibung

Ein Odoo Upgrade ist ein iterativer Prozess. Im ersten Schritt des Upgrade-Prozess wird die Odoo-Datenbank analysiert und eine Aufwandsschätzung erstellt. Es wird eine Liste der Module von Dritten erstellt und geprüft ob die Module in der neuen Odoo Version verfügbar sind. Es wird eine Odoo Upgrade-Umgebung bereitgestellt und das Upgrade-Drehbuch initialisiert.

Module von Dritten werden migriert, ersetzt oder entfernt. Ziel ist es, dass alle benötigten Module von Dritten in der Upgrade-Umgebung bereit sind. Ist das erledigt, kann die Implementation des Drehbuchs beginnen. Die bestehende Odoo-Datenbank wird mit den Upgrade-Skripten von [[Odoo S.A.]] aktualisiert. Abhängig von der Odoo Version werden Einstellungen und Anpassungen aktiviert oder deaktiviert. Die aktualisierte Odoo Datenbank wird in der Upgrade-Umgebung des Kunden bereitgestellt und gemeinsam mit dem Kunden getestet. Fehler und Feedbacks werden im Upgrade-Drehbuch festgehalten und mit dem Odoo Support koordiniert.

Der Drehbuch-Prozess wird nach Bedarf wiederholt bis eine Freigabe erfolgt. Bei einer Freigabe kann das produktive Upgrade gemäss Drehbuch per Stichtag durchgeführt werden. Nach dem Upgrade verifiziert der Kunde die neue Odoo-Umgebung. Wenn es zu unerwarteten Fehler kommt, erfolgt ein Rollback auf die ursprüngliche Version. Der Fehler wird analysiert und das produktive Upgrade wird bei der nächsten Gelegenheit wieder durchgeführt.

## Prozess-Übersicht

| Arbeitsschritt                   | Verantwortlich      | Beschreibung                                                                     |
| -------------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Datenbank prüfen                 | Mint System         | Liste der Module von Dritten erstellen.                                          |
| Aufwandsschätzung erstellen      | Mint System         | Anhand Vorlage ein Angebot mit Aufwandsschätzung erstellen.                      |
| Odoo Module migrieren            | Mint System         | Odoo Module auf neue Version migrieren. Funktionale Tests der Module validieren. |
| Upgrade-Umgebung bereitstellen   | Mint System / Kunde | Die Upgrade-Umgebung für Kunde bereitstellen. Upgrade-Drehbuch initialisieren.   |
| Test-Upgrade durchführen         | Mint System         | Upgrade im Testmodus durchführen und auf Upgrade-Umgebung bereitstellen.         |
| Testing asuführen                | Kunde               | Workflows anhand Testfällen prüfen. Feedback erfassen.                           |
| Feedback iterativ verarbeiten    | Mint System / Kunde | Anpassungen gemäss Feedback vornehmen. Drehbuch des Kunden aktualisieren.        |
| Produktives Upgrade freigeben    | Kunde               | Kunde erteilt Freigabe für produktives Upgrade. Termin für Upgrade festlegen.    |
| Produktives Upgrade durchführen  | Mint System         | Gemäss Drehbuch das produktive Upgrade durchführen und validieren.               |
| Produktives Upgrade abschliessen | Mint System / Kunde | Post-Upgrade Fehler melden und korrigieren. Upgrade-Umgebung entfernen.          |

## Weiterführende Links

Siehe auch:

- [[Odoo Upgrade FAQ]]
- [[Odoo Community Upgrade]]
- [[Odoo Enterprise Upgrade]]
- [[Odoo.sh Upgrade]]

Die internen Prozesse sind:

- [[Prozesse Odoo - Upgrade Angebot]]
- [[Prozesse Projektmanagement - Odoo]]
- [[Prozesse Odoo - Upgrade Implementation]]
- [[Prozesse Odoo - Upgrade-Umgebung bereitstellen]]
- [[Prozesse Odoo - Migration Module]]
- [[Prozesse Odoo - Migration OCA Module]]
- [[Prozesse Infrastruktur - Upgrade Odoo]]
- [[Prozesse Odoo.sh - Upgrade Implementation]]
- [[Prozesse Odoo.sh - Modul Migration]]
- [[Prozesse Infrastruktur - Upgrade Odoo.sh]]
