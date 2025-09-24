---
tags:
  - HowTo
kind:
  - tutorial
section: organisation
---
# Wissenstransfer: Einfache Anpassungen für Odoo entwickeln

Ziele:

* Der Integrator eines [[Odoo-Projekte|Odoo-Projekt]] hat die Kompetenz Anpassungen an der Odoo-Oberfläche vorzunehmen und diese mit [[Git]] festzuhalten.
* Die Geschäftslogik von Odoo kann an den Integrator vermittelt werden.
* Der Integrator kann einfache Abfragen auf der Odoo-Datenbank machen.

Dauer: 8 Stunden

## Thema 1: Entwicklungsumgebung einrichten

Gemeinsam wird die [[Odoo Entwicklungsumgebung]] eingerichtet.

Schritte:
* Installation [[Visual Studio Code]] auf Computer
* Installation [[Git]] und [[Docker]] auf Computer
* Sicherstellen Zugriff auf [[GitLab]], [[GitHub]] und [[Odoo Enterprise]]
* Auschecken einer Odoo Version und erstellen der lokalen Entwicklungsumgebung mit Docker

## Thema 2: Ansichten, Aktionen und Menus

Die Funktionsweise der Odoo-Oberfläche wird erläutert.

Schritte:
* Installation [[Odoo App Lager]]
* Herleiten des Vorgangs vom Klick bis zur Anzeige der Ansicht
* Erläutern technische Einstellungen des [[Odoo Entwicklermodus]]
* Nach Bedarf einfache Todo-App im Entwicklermodus erstellen

## Thema 3: XML, XPath und Snippets

Eine Ansicht kann mit einem [[XPath]]-Edit bearbeiten. In diesem Zusammenhang wird die Funktionsweise von [[Odoo Studio]] erläutert.

Schritte:
* Installation Odoo-Studio und erstellen Anpassungen
* Anpassung als XML-betrachten
* Anpassung zu XML-Snippet übersetzen
* XML-Snippet speichern und comitten
* Nach Bedarf benötigte Änderungen erstellen