---
title: Odoo Lifecycle
section: communication
kind: explain
---

Der Lebenszyklus der Odoo-Applikation.

## Start

Wenn der Odoo-Prozess gestartet wird, lädt dieser den Python-Code der Module und importiert die benötigten Python-Pakete. Der Python-Code wird zur C-Code verarbeitet.

Beim Start des Odoo-Prozesses werden Feld-Definitionen der Odoo-Klassen einmalig geladen.

## Modul Installation

Beim installieren eines Modul wird das Datenbankschema basierend auf den geladenen Feld-Definition angepasst und die XML-Dateien/Daten werden direkt in die entsprechenden Datenbank-Tabellen geladen.

## Laufzeit

XML-Daten können zur Laufzeit aktualisiert werden, die Datenbank-Felder hingegen nicht.

## Requests

Bei einem Request erstellt Odoo einen Datenbank-Cursor, führt die Methoden und Funktionen aus und sendet die Response zurück.

## Neustart

Der Odoo-Prozess wird heruntergefahren (Exit-Signal) und wieder gestartet. Neuer Python-Code und somit auch neue Klassen-Definition werden geladen.

## Beenden

Der Odoo-Prozess wird heruntergefahren (Exit-Signal).
