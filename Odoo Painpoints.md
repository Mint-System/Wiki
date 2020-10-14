# Odoo Painpoints
Eine Liste von Design-Entscheiden und Funktionen, die mangelhaft umgesetzt oder schwer nachvollziehbar sind.

## Projektstufen verwalten

Standardmässig kann in jedem Projekt die Stufen verwalten werden. Dadurch entstehen Duplikate und unübersichtliche Darstellungen der Aufgaben.

Projektübergreifend Stufen festzulegen ist nur im Entwicklermodus möglich. Sobald ein neues Projekt erfasst wurde, muss dieses explizit der existierenden Stufe hinzugefügt werden.

GitHub Issue dazu: https://github.com/odoo/odoo/issues/8660  
-> Projekttemplate kopieren, erstellt kein neuen Stufen.

## Mangelnde und falsche Übersetzungen

Genehigung Budget ist falsch übersetzt.  
Berichtsnamen in Projekten sind nicht übersetzt.

## Filter in Url

Standardmässig sind Filter nicht in der Url von Odoo enthalten. Das macht es schwierig Filter zu teilen.

## Personalbrechnung Lokalisierung

Verschiedene Lohnarten der Schweiz können nicht abgebildet werden.

## Integrität Chatter-Favoriten

Markiert man eine Nachricht im Chatter und löscht das dazugehörige Objekt, kann man den Favoriten nicht mehr entfernen.

## Anzeige Aktivitäten

Erstellt man eine Aktivität zu einem Objekt und archiviert dieses, wird die Aktivität immer noch als Erinnerung dargstellt. Klickt man darauf erscheint eine leer Seite.

## E-Mail Empfänger nicht sichtbar

Versendet man ein Mail an mehrere Empfänger so ist das beim empfangenen Mail nicht sichbar.

## Reporting

QWeb Reports können nicht auf einfache Art und Weise erstellt werden.

-> Geht doch mit Odoo Studio?

## Forward chatter messages

Cannot forward chatter messages.

## Soll-/Haben-Konten vertauscht

Konfiguriert man eine Regel im Modul Personalabrechnung wird im Tab Finanzen zuerst das Soll und dann das Haben angzeigt.

-> Changed order with Odoo Studio

In der Ansicht der Buchungszeilen erscheint ebenfalls zuerst das Soll und dann das Haben.

## Nur einer Timer kann gestartet werden

Nur ein Mitarbeiter kann den Aufgaben-Timer laufen lassen.  
Funktioniert mit OCA timer.

## Odoo-Benutzerlizenzen für Partner
Status: Erledigt

Die aktuelle Lage zum Problem mit den Partner-Benutzer-Lizenzen:

Es stehen die folgenden Optionen zur Verfügung:
- Der Kunde kauft eine zusätzliche Benutzer Lizenz für einen Partner-Account. Der Partner-Account ist nicht personalisiert.
- Der Kunde kauft für einen Mitarbeiter des Partners eine Lizenz. Der Partner-Account ist personalisiert
- Der Kunde deaktiviert und aktiviert die Partner-Benutzer nach Bedarf. Der Partner kann seine Benutzer nicht selber aktivieren.
- Der Partner greift auf die Datenbank zu und aktiviert seinen Benutzer.

Löunsg: [[Design Decisions#Zugriff ohne Benutzerlizenz]]