---
tags:
- Definition
---
# Attendance and Overtime Management

Odoo App von [[Syscoon GmbH]] zur Kalkulation von Überzeiten.

## Features

**Arbeitszeiten**

* Arbeitszeitblock am jeweiligen Tag wird berücksichtigt

**Überstunden**

* Offset kann für Mitarbeiter festgelegt werden
* Überzeit wird fortlaufend kumuliert

**Anwesenheit**

* Anzeige der fehlenden Anwesenheiten
* Zusätliche Anwesenheit kann für jeden Anwesenheitseintrag hinterlegt werden
* Korrektur einer Anwesenheit wird für alle Einträge übernommen

**Abwesenheit**

* Abwesenheit wird als Anwesenheit aufgeführt

## Einschränkungen

* Feiertage müssen als Abwesenheit bezogen werden, damit Sie als Anwesenheit angezeigt werden.

* Feiertage müssen bei Arbeitszeit als *Global Time-Off* hinterlegt werden. Hat man pro Mitarbeiter aufgrund der unterschiedlichen Anstellungsmodellen eine Arbeitszeitdefinition, müssen Feiertage mehrmals erfasst werden.

* Bei Feiertag und halber Ferientag (< 1 Tag) werden nicht die durchschnittlichen Arbeitszeiten verwendet.

* Der Code des Moduls ist nicht kommentiert. Die Feldtitel sind auf Englisch, die Hilfestellung wieder auf Deutsch. Das macht eine Erweiterung des Moduls schwierig.