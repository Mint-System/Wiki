---
tags:
- Definition
---
# Odoo Upgrade

## Beschreibung

Ein Odoo Upgrade ist ein iterativer Prozess. Im ersten Schritt des Upgrade-Prozess wird die Odoo-Datenbank analysiert. Es wird eine Liste der Module von Dritten erstellt und geprüft ob die Module in der neuen Odoo Version verfügbar sind. Es wird eine Odoo Upgrade-Umgebung bereitgestellt und das Upgrade-Drehbuch initialisiert.

Module von Dritten werden migriert, ersetzt oder entfernt. Ziel ist es, dass alle benötigten Module von Dritten in der Upgrade-Umgebung bereit sind. Ist das erledigt, kann die Implementation des Drehbuchs beginnen. Die bestehende Odoo-Datenbank wird mit den Upgrade-Skripten von [[Odoo S.A.]] aktualisiert. Abhängig von der Odoo Version werden Einstellungen und Anpassungen aktiviert oder deaktiviert. Die aktualisierte Odoo Datenbank wird in der Upgrade-Umgebung des Kunden bereitgestellt und gemeinsam mit dem Kunden getestet. Fehler und Feedbacks werden im Upgrade-Drehbuch festgehalten und mit dem Odoo Support koordiniert.

Der Drehbuch-Prozess wird nach Bedarf wiederholt bis eine Freigabe erfolgt. Bei einer Freigabe kann das produktive Upgrade gemäss Drehbuch per Stichtag durchgeführt werden. Nach dem Upgrade verifiziert der Kunde die neue Odoo-Umgebung. Wenn es zu unerwarteten Fehler kommt, erfolgt ein Rollback auf die ursprüngliche Version. Der Fehler wird analysiert und das produktive Upgrade wird bei der nächsten Gelegenheit wieder durchgeführt.

## Prozess-Übersicht

| Arbeitsschritt                    | Verantwortlich      | Beschreibung                                                                                               |
| --------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| Datenbank prüfen                  | Mint System         | Liste der Module von Dritten erstellen.                                                                    |
| Lokale Umgebung vorbereiten       | Mint System         | Lokale Umgebung für Upgrade vorbereiten.                                                                   |
| Odoo Module migrieren             | Mint System         | Odoo Module auf neue Version migrieren.                                                                    |
| Test-Upgrade durchführen          | Mint System         | Odoo Upgrade im Testmodus ausführen.                                                                       |
| Upgrade-Umgebung Kunde            | Mint  System        | Die Upgrade-Umgebung für Kunde bereitstellen.                                                              |
| Test-Upgrade bereitstellen        | Mint System         | Upgrade im Testmoduls durchführen und auf Upgrade-Umgebung bereitstellen.                                  |
| Test-Upgrade verifizeren          | Kunde               | Funktionale Anforderungen prüfen.                                                                          |
| Feedback-Loop Test-Uprade starten | Mint System / Kunde | Technische Anpassungen in Drechbuch-Prozess vornehmen. Kundenspezifischer Drechbuch-Prozess dokumentieren. |
| Freigabe produktives Upgrade      | Kunde               | Kunde erteilt Freigabe für produktives Upgrade.                                                            |
| Produktives Upgrade durchführen   | Mint System         | Gemäss Kundenspezifischer Upgrade-Dokumentation das produktive Upgrade durchführen.                        |
| Produktives Upgrade verifizieren  | Kunde               | Produktives Upgrade verfizieren.                                                                           |

## Weiterführende Links

Siehe auch: 

* [[Odoo Community Upgrade]]
* [[Odoo Enterprise Upgrade]]
* [[Odoo.sh Upgrade]] [[Odoo Troubleshooting]]

Die internen Prozesse sind:

* [[Prozesse Odoo - Upgrade Angebot]]
* [[Prozesse Projektmanagement - Odoo#Odoo Upgrade koordinieren]]
* [[Prozesse Odoo - Modul Migration]]
* [[Prozesse Odoo - Upgrade-Umgebung bereitstellen]]
* [[Prozesse Odoo - Upgrade Implementation]]
* [[Processes Infrastructure - Upgrade Odoo]]
