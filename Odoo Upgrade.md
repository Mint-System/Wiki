---
tags:
- Definition
---
# Odoo Upgrade

Ein Odoo Upgrade ist ein iterativer Prozess. Im Upgrade-Prozess wird die Odoo-Umgebung in der Entwicklungsumgebung bereitgestellt und mit den Upgrade-Skripten aktualisiert. Module von Dritten werden installiert, aktualisiert oder entfernt. Abhängig von der Odoo Version werden Einstellungen und Anpassungen hinzugefügt oder entfernt. Die aktualisierte Odoo Datenbank wird in der Testumgebung bereitgestellt und mit dem Kunden getestet. Gemeldete Fehler und Feedback fliessen zurück in den Upgrade-Prozess und werden mit dem Odoo Support koordiniert. Wurde die Testumgebung freigegeben, kann das produktive Upgrade an einem Stichtag durchgeführt werden.

Siehe [[Odoo Community Upgrade]], [[Odoo Enterprise Upgrade]], [[Odoo Troubleshooting]].

## Prozessbeschreibung

| Arbeitsschritt                    | Verantwortlich      | Beschreibung                                                                                           |
| --------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| Datenbank prüfen                  | Mint System         | Liste der Module von Dritten erstellen.                                                                |
| Entwicklungsumgebung vorbereiten  | Mint System         | Lokale Entwicklungsumgebung für Upgrade vorbereiten.                                                   |
| Odoo Module migrieren             | Mint System         | Odoo Module auf neue Version migrieren.                                                                |
| Test-Upgrade durchführen          | Mint System         | Odoo Upgrade im Testmodus ausführen.                                                                   |
| Test-Upgrade bereitstellen        | Mint System         | Test-Umgebung auf neue Odoo Version aktualisieren und Test-Upgrade bereitstellen.                      |
| Test-Upgrade verifizeren          | Kunde               | Funktionale Anforderungen prüfen.                                                                      |
| Feedback-Loop Test-Uprade starten | Mint System / Kunde | Technische Anpassungen in Upgrade-Prozess vornehmen. Kundenspezifischer Upgrade-Prozess dokumentieren. |
| Freigabe produktives Upgrade      | Kunde               | Kunde erteilt Freigabe für produktives Upgrade.                                                        |
| Produktives Upgrade durchführen   | Mint System         | Gemäss Kundenspezifischer Upgrade-Dokumentation das produktive Upgrade durchführen.                    |
| Produktives Upgrade verifizieren  | Kunde                    | Produktives Upgrade verfizieren.                                                                                                       |

