---
tags:
- Definition
---
# Odoo Upgrade

Ein Odoo Upgrade ist ein iterativer Prozess. Im ersten Schritt des Upgrade-Prozess wird die Odoo-Umgebung in der Entwicklungsumgebung bereitgestellt und mit den Upgrade-Skripten von Odoo S.A. aktualisiert. Module von Dritten werden migriert, ersetzt oder entfernt. Abhängig von der Odoo Version werden Einstellungen und Anpassungen aktiviert oder deaktiviert. Die aktualisierte Odoo Datenbank wird in der Testumgebung des Kunden bereitgestellt und gemeinsam mit dem Kunden getestet. Fehler und Feedbacks werden im Upgrade-Drehbuch festgehalten und mit dem Odoo Support koordiniert. Der Upgrade-Prozess wird nach Bedarf wiederholt bis eine Freigabe erfolgt. Wurde die Testumgebung freigegeben, kann das produktive Upgrade gemäss Drehbuch per Stichtag durchgeführt werden.

Siehe [[Odoo Community Upgrade]], [[Odoo Enterprise Upgrade]], [[Odoo.sh Upgrade]], [[Odoo Troubleshooting]]

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
