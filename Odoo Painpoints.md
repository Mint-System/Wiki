# Odoo Painpoints
Eine Liste von Design-Entscheiden und Funktionen, die mangelhaft umgesetzt oder schwer nachvollziehbar sind.

## Anzeige Aktivitäten

Erstellt man eine Aktivität zu einem Objekt und archiviert dieses, wird die Aktivität immer noch als Erinnerung dargstellt. Klickt man darauf erscheint eine leer Seite.

## E-Mail Empfänger nicht sichtbar

Versendet man ein Mail an mehrere Empfänger so ist das beim empfangenen Mail nicht sichbar.

## Forward chatter messages

Cannot forward chatter messages.

## Nur ein Timer kann gestartet werden

Nur ein Mitarbeiter kann den Aufgaben-Timer laufen lassen.  
Funktioniert mit OCA timer besser.

## Reservierung Bestand bei Planung

Wenn ein Auftrag geplant wird, werden die benötigten Produkte im Lager reserviert. Die Priorisierung der Produkte ist oftmals ungünstig. Möchte man diese ändern muss zuerst die Reservierung aufgehoben werden.

**Lösungsansatz 1**

Lager-Reservierungen bei Arbeitsaufträgen sollen bei Ausführung des Lager-Schedulers aufgehoben werden.

## Lieferungen bewerten

Lieferungen können nicht bewertet werden.

## Angebotsanfrage mit Anhang

Den RFQs können keine Portal-Anhänge mitgeschickt werden.

Lösung: Mit Odoo14 geht das, für Odoo 13 kann gemäss Handbuch ein Feld hinzugefügt werden.

## Barcode generieren

Barcodes können nicht automatisch generiert werden.

## Invoicing Type kann nicht geändert werden

Für Timesheet Enträge kann der Abrechnungstyp nicht geändert werden.

# Resolved

## Soll-/Haben-Konten vertauscht

Konfiguriert man eine Regel im Modul Personalabrechnung wird im Tab Finanzen zuerst das Soll und dann das Haben angzeigt.

-> Changed order with Odoo Studio

In der Ansicht der Buchungszeilen erscheint ebenfalls zuerst das Soll und dann das Haben.

Fehler ist auch bei Schweizer Partner bekannt.

Resolved:  Correct in Odoo 14.

## Projektstufen verwalten

Standardmässig kann in jedem Projekt die Stufen verwalten werden. Dadurch entstehen Duplikate und unübersichtliche Darstellungen der Aufgaben.

Projektübergreifend Stufen festzulegen ist nur im Entwicklermodus möglich. Sobald ein neues Projekt erfasst wurde, muss dieses explizit der existierenden Stufe hinzugefügt werden.

GitHub Issue dazu: https://github.com/odoo/odoo/issues/8660  

Lösung: Projekttemplate kopieren, erstellt kein neuen Stufen.

## Mangelnde und falsche Übersetzungen

Genehigung Budget ist falsch übersetzt.  
Berichtsnamen in Projekten sind nicht übersetzt.

Lösung: Fortlaufend Odoo und dazugehörige Sprachpakete aktualisieren. Fehlende Übersetzungen manuell erstellen.

## Filter in Url

Standardmässig sind Filter nicht in der Url von Odoo enthalten. Das macht es schwierig Filter zu teilen.

Lösung: Filter können gespeichert werden. Das ist vermutlich der Workaround für dieses Problem.

## Personalbrechnung Lokalisierung

Verschiedene Lohnarten der Schweiz können nicht abgebildet werden.

Lösung: Erweiterung von Gioardano  erweitert die Anteilsdefinition der Lohnarten.

## Integrität Chatter-Favoriten

Markiert man eine Nachricht im Chatter und löscht das dazugehörige Objekt, kann man den Favoriten nicht mehr entfernen.

Lösung: Odoo löscht von Zeit zu Zeit die ungültigen Verbindungen.

## Reporting

QWeb Reports können nicht auf einfache Art und Weise erstellt werden.

-> Geht doch mit Odoo Studio?

Lösung: Entweder mit Odoo Studio erstellen oder py3o.

## Odoo-Benutzerlizenzen für Partner
Status: Erledigt

Die aktuelle Lage zum Problem mit den Partner-Benutzer-Lizenzen:

Es stehen die folgenden Optionen zur Verfügung:
- Der Kunde kauft eine zusätzliche Benutzer Lizenz für einen Partner-Account. Der Partner-Account ist nicht personalisiert.
- Der Kunde kauft für einen Mitarbeiter des Partners eine Lizenz. Der Partner-Account ist personalisiert
- Der Kunde deaktiviert und aktiviert die Partner-Benutzer nach Bedarf. Der Partner kann seine Benutzer nicht selber aktivieren.
- Der Partner greift auf die Datenbank zu und aktiviert seinen Benutzer.

Löunsg: [[Design Decisions#Zugriff ohne Benutzerlizenz]]