---
title: Odoo FAQ
section: product
kind: explain
---

Offene Fragen rund um Odoo.

# Verkäufe

## Neues Auftragselement

Frage: Wie kann man einem bestehenden und abgeschlossenen Verkaufsauftrag ein neues Auftragselement hinzufügen, darüber Zeit buchen und dann in Rechnung stellen?

Antwort:

# Fertigung

## Reservation und Priorisierung komplexe Fertigungsaufträge

Frage: Wenn ein Auftrag geplant wird, werden die benötigten Produkte im Lager reserviert. Die Priorisierung der Produkte ist oftmals ungünstig. Möchte man diese ändern muss zuerst die Reservierung aufgehoben werden. Kann das umgangen werden?

Antwort:

## Lageraktualisierung: Push vs. Pull

Frage: Die Lageraktualisierung funktioniert nur im Pull-Modus, d.h. beim Erstellen eines Fertigungsauftrag muss der Scheduler von Hand gestartet werden um sicherzustellen dass das Lager aktuell ist. Gibt es andere Wege?

Anwort:

## Produktionsplanung

Frage:

Gemäss untenstehendem Bild weiss Odoo wenn der Start eines Produktionsauftrages geplant ist bevor das Material verfügbar ist. Das zeigt sich nämlich daran, dass die Schrift dunkelrot erscheint. (Wäre der Starttermin hinter dem Liefertermin des fehlenden Materials wäre die Schrift orange.)
Die entscheidende Frage ist: Auf welcher Gesamtübersicht erscheint diese Information? D.h. auf welcher Liste/Grafik erkenne ich, welche Produktionsaufträge noch unrealistisch geplant sind?

![[Lagerbewegung.png]]

Die gesuchte Liste ist offensichtlich "Prognostizierter Bestand" (Lager > Berichtswesen). Darauf sind nämlich mit dem Filter "Forecasted Stock" die Artikel sichtbar, welche zu einem bestimmten Zeitpunkt Negativ-Bestand haben. Dies wiederum entspricht der Markierung "rote Farbe" gemäss obiger Bemerkung.
Die nächste Frage ist nun: Wie verbessert man die Planung am effizientesten?

![[Progonostizierter Bestand.png]]

Eine gute Möglichkeit wäre vielleicht die untenstehend abgebildete Maske.
Die dargestellten Auftragsnummern sind offensichtlich ein Hyperlink. ... der funktioniert aber nicht. Ich vermute einen technischen Fehler.

![[Bestandsprognose Rundrohr.png]]

Antwort:

# Personal

## Vergleich theoretische und tatsächliche Arbeitszeit

Frage: Wie kann die theoretische Arbeitszeit mit der tatsächlichen inklusive Abwesenheit verglichen werden? Es gibt eine OCA-Erweiterung, was ist das Enterprise-Pendant?

Antwort:

## Öffentliche Feiertage

Frage: Verwalten von öffentlichen Feiertagen und berücksichtigung in Abwesenheitszeiten.

Antwort:
