# Odoo Lifecycle

## Start

Odoo lädt den Python-Code der Module und aus den Python-Paketen. Der Python-Code wird zur C-Code transpiliert.

## Modul Installation

Beim installieren eines Modul wird das Datenbankschema basierend auf dem geladenen Python-Code angepasst und die XML-Daten werden in die entsprechenden Tabellen geladen.

## Requests

Bei einem Request erstellt Odoo einen Datenbank-Cursor, führt die Business-Logik aus und sendet die Response zurück.
## Neustart

Der Odoo-Prozess wird heruntergefahren (Exit-Signal) und wieder gestartet. Neuer Python-Code wird geladen.
