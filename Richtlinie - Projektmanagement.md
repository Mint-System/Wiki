---
title: Richtlinie - Projektmanagement
kind: explain
section: policy
---

Übersetzung: [[Policy Project Management]]

Die Umsetzung von Projekten unterliegt bestimmten Richtlinien.

## Projektstatus

Der Status einens Projekts wird über das Kanban zugeordnet.

- **Backlog 🎒**: Das Projekt ist nicht aktiv. Der Kunde des Projekts hat sich länger nicht gemeldet. Es besteht Klärungsbedarf.
- **Bereit 🏁**: Das Projekt wartet auf den Kick-off.
- **Implementation 🧑‍💻**: Die Odoo-Implementation oder Softwareentwicklung ist am laufen.
- **Betrieb ▶️**: Die Implementation ist abgeschlossen und das die Software ist in Betrieb.
- **Erledigt ✅**: Das Projekt ist abgeschlossen und der Betrieb läuft autonom.
- **Abgebrochen 🛑**: Die Zusammenarbeit mit dem Kunden wurde beendet.
- **Postlog ♻️**: Interne Projekte, die fortgehend bearbeitet werden.

## Projektordner

Der Projektordner soll immer gleich aussehen und so die Projekt-übergreifende Navigation erleichtern.

**Standardordner**

| Ordner / Dokument               | Beschreibung                                         |
| ------------------------------- | ---------------------------------------------------- |
| Anforderungen/                  | Dokumente zur Anforderungsanalyse                    |
| Anforderungen/Anforderungen.ext | Dokument mit Anforderungsanalyse                     |
| Angebot/                        | Dokumente zur Angebotserstellung                     |
| Angebot/Konzept.ext             | Projektkonzept mit Planung                           |
| Berichte/                       | Kunden- und Projektrapporte                          |
| Docs/                           | Projektdokumentationen                               |
| Input/                          | Projektinputs                                        |
| Kick-Off/                       | Dokumente zum Projektstart                           |
| Meetings/YYYY-MM-DD TITEL.md    | Meeting-Notizen mit Namenskonvention                 |
| Meta/                           | Verträge, Bestellungen, NDAs zum Projekt             |
| Notizen/                        | Ordner für Notizen der Projektmitarbeiter            |
| Output                          | Projektergebnisse                                    |
| Projektplan.ext                 | Dokument mit Zeitplan                                |
| Verarbeitung/                   | Verarbeitung der Inputs. Ausgabe in Output.          |
| README.md                       | Projektbeschreibung und Orientierung für Mitarbeiter |
| Worklog/YYYY-MM-DD TITEL.md     | Protokolle zur Auftragsabwicklung                    |
| Workshop/                       | Dokumente zum Workshop                               |
| Issues/YYYY-MM-DD TITEL.md      | Details zu Projektaufgaben                           |

**Projektphasen**

| Ordner / Dokument     | Beschreibung                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| PhaseNN NAME/         | Ordner mit Inhalt der jeweiligen Projektphase                            |
| PhaseNN NAME/Input/   | Dokumente des Kunden werden hier abgelegt                                |
| PhaseNN NAME/Output/  | Deliverable, die an den Kunden gehen. Berichte, Daten oder Auswertungen. |
| PhaseNN NAME/Prozess/ | Ordner für Korrespondenz und Projektdaten                                |
| PhaseNN NAME/Worklog  | Arbeitsprotokolle                                                        |

Projektphasen sind analog [[Phasen]].

**Systemordner**

| Ordner / Dokument | Beschreibung                                                     |
| ----------------- | ---------------------------------------------------------------- |
| Archiviert/       | Archivierte Dokumente werden hier abgelegt                       |
| Data/             | Nutzdaten für Projekt                                            |
| Template/         | Ordner mit Markdown/Obsidian Vorlagen                            |
| attachments/      | Mediendateien und Anhänge werden hier gespeichert                |
| tmp/              | Temporäre Daten die gelöscht werden dürfen, werden hier abgelegt |

## Projektdaten Teilen

Projektordner dürfen mit Kunden geteilt werden. Die Teilung erfolgt mittels [[Nextcloud]]-Link.
