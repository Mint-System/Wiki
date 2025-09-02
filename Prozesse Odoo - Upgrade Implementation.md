---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Odoo - Upgrade Implementation

## Prozess initialisieren

Arbeitsschritte:

* Erstellen Drehbuch anhand Vorlage
	* Odoo Comunity Edition: [[Odoo Community Upgrade]]
	* Odoo Enterprise Edition: [[Odoo Enterprise Upgrade]]
	* Odoo.sh Hosting: [[#Odoo.sh Upgrade durchführen]]
* [[#Modulliste erstellen]]
* Erstellen Liste der aktiven Snippets
* Upgrade-Strategy wählen: [[Odoo Enterprise Upgrade]] oder [[Odoo Community Upgrade]]

## Modulliste erstellen

Arbeitsschritte:

* Auf Server einloggen `ssh $ALIAS.mint-system.com`
* Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
* Modulname aus Konsole kopieren und filtern
* Vorlage [[Migrate Modules to Odoo XX.0]] kopieren
* Modulnamen einfügen

## Module prüfen

Arbeitsschritte:

* Lokale Entwicklungssumgebung bereitstellen ([[Odoo Build]])
* Jedes Modul anhand <https://odoo.build/modules.html> prüfen
* Bei Bedarf das Modul migrieren
* Bereitstellen Modul auf neuer Odoo-Umgebung

## Snippets prüfen

Arbeitsschritte:

* Auf der Testumgebung Ansichten und Berichte mit Snippets anzeigen
* Bei Bedarf Snippet anpassen und Befehl in Drehbuch festhalten

## Testfälle entwickeln

Arbeitsschritte:

* Ausführen Drehbuch
* Entwickeln Testfälle anhand Vorlage [[Testing Upgrade Odoo XX.0]]
* Erstellen Dokument Feedback [[Feedback Upgrade Odoo XX.0]]
* Nachricht an die TesterIn schicken:

```
Hallo $VORNAME

Die Upgrade-Umgebung $ODOO_LINK steht zum Testen bereit. Das Login ist das gleiche wie bisher.

Die Testfälle sind in diesem Dokument festgehalten: $TESTING_FILELINK
Du kannst die Testfälle weiter ausformulieren oder umformulieren.
Das Feedback zum Testing wird hier gesammelt: $FEEDBACK_FILELINK

Kannst du beschrieben Testfälle ausführen und bei Problemen eine Beschreibung im Feedback-Dokument festhalten.

Bei Fragen zu den Test-Fällen oder Struktur der Feedbacks, bitte melden.

Viele Grüsse
```