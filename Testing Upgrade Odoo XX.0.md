---
title: Testing Upgrade Odoo XX.0
kind: reference
section: template
---

## Abgrenzung 🔭

Die folgenden Aspekte sind für as Testing "out-of-scope":

- Übersetzungen
- Odoo Benutzeroberfläche
- Layout der Berichte

## Testfälle 🔬

Öffnen Testumgebung: https://upgrade.example.com/

| Bereich               | Titel                                | Prüfschritte                                                                                                                                                            | Status |
| --------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Verkauf               | Angebot erstellen                    | - Öffnen App _Verkauf_<br>- Erstellen neues Angebot                                                                                                                     | 🟩     |
| Zeiterfassung         | Projektzeit erfassen                 | - Öffnen App *Zeiterfassung*<br>- Anzeigen Listenansicht<br>- Erfassen Eintrag mit Verkaufsauftragsposition                                                             | 🟥     |
| Geplante Aktion       | Reminder Verlängerung versenden      | - Anzeige geplante Aktionen<br>- Suche nach _Verkaufsabonnement: Reminder Verlängerung versenden_<br>- Aktion manuell asuführen<br>- Prüfen ob E-Mails versendet wurden | 🟩     |
| Automatische Aktionen | Standard-Zahlungsbedingung festlegen | - Anzeige automatische Aktionen<br>- Prüfen ob Aktion aktiv ist.                                                                                                        | 🟧     |
