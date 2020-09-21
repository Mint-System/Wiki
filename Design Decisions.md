# Design Decisions

Technische und komplexe Fragestellungen werden hier systematisch bewertet und beantwortet.

## Zugriff ohne Benutzerlizenz

Fragestellung: Wie erhalten Mitarbeiter der Mint System Zugriff auf die Odoo-Umgebung des Kunden ohne, dass eine Benutzer-Lizenz gekauft werden muss?

## Odoo Enterprise Modul-Code

Fragestellung: Wie soll der Odoo Enterprise Modul-Code installiert und verwaltet werden?

Auf dem [GitHub-Repo](github.com/odoo/enterprise) von Odoo Enterprise ist der gesamte Module-Code der Enterprise Apps verfügbar. Dieser Code muss zur Verwendung der Enterprise-Funktionen auf der Odoo-Instanz vorhanden sein. Da der Code umfangreich ist, sich stetig verändert und viele Abhängigkeiten besitzt, stellt sich die Frage, wie dieser am besten bereitgestellt wird.

**Entscheid:** [[#Lösungsvorschlag 1 Zip-Pakete]].

### Lösungsvorschlag 1: Zip-Pakete

Jedes Modul soll versioniert als Zip-Datei mit [[Ansible]] auf dem Sever installiert werden.

Pro:
* Kontrolle der Modul-Versionen
* Kunde kann nicht nach Bedarf Apps installieren
* Das Auto-Install-Flag in den Modulen kann deaktivert werden
* Entwicklung Verständnis für die Modul-Struktur

Con:
* Hoher Verwaltungsaufwand der Pakete
* Kunde erhält nicht den gesamten Code