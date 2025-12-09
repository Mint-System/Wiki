---
kind: tutorial
section: methodology
---

# Design Decisions

Technische und komplexe Fragestellungen werden hier systematisch bewertet und beantwortet.

## Zugriff ohne Benutzerlizenz

Fragestellung: Wie erhalten Mitarbeiter der Mint System Zugriff auf die Odoo-Umgebung des Kunden ohne, dass eine Benutzer-Lizenz gekauft werden muss?

Referenz: [[Odoo Painpoints#Odoo Painpoints#Odoo-Benutzerlizenzen für Partner]]

**Entscheid:** Löunsgsvorschlag 1

### Lösungsvorschlag 1

Auf der Live-Umgebung sind die Partner-Benutzer vorhanden und archiviert. Nach Bedarf kann der Kunde diese aktivieren. Möchte der Partner die Benutzer selber aktivieren, kann er das über die Datenbank machen. Der technische Verantwortliche kann mittels Skript auf dem Server den Account aktiveren oder deaktivieren.

```
helios:/$ docker-odoo-user -c odoo06  -d erp-dev -enable janik.vonrotz@mint-system.ch
helios:/$ docker-odoo-user -c odoo06 -d erp-dev -disable janik.vonrotz@mint-system.ch
```

Die Prozesse:

[[Prozesse Odoo - Entwicklung#Benutzer aktivieren oder deaktivieren]]  
[[Prozesse Odoo - Entwicklung#App Einstellungen#Partner-Synchronisation auf täglich umstellen]]

### Lösungsvorschlag 2

Auf jeder Kundeninstallation wird pgAdmin installiert. Über den Admin kann auf die Datenbank zugegriffen werden und der entsprechende Benutzer aktiviert oder deaktiviert werden.

Note: Odoo.sh allows you to impersonate as any user on the database.

## Odoo Enterprise Modul-Code

Fragestellung: Wie soll der Odoo Enterprise Modul-Code installiert und verwaltet werden?

Auf dem [GitHub-Repo](https://github.com/odoo/enterprise) von Odoo Enterprise ist der gesamte Module-Code der Enterprise Apps verfügbar. Dieser Code muss zur Verwendung der Enterprise-Funktionen auf der Odoo-Instanz vorhanden sein. Da der Code umfangreich ist, sich stetig verändert und viele Abhängigkeiten besitzt, stellt sich die Frage, wie dieser am besten bereitgestellt wird.

**Entscheid:** [[#Lösungsvorschlag 1 Zip-Pakete]].

### Lösungsvorschlag 1: Zip-Pakete

Jedes Modul soll versioniert als Zip-Datei mit [[Ansible]] auf dem Sever installiert werden.

Pro:

- Kontrolle der Modul-Versionen
- Kunde kann nicht nach Bedarf Apps installieren
- Das Auto-Install-Flag in den Modulen kann deaktivert werden
- Entwicklung Verständnis für die Modul-Struktur

Con:

- Hoher Verwaltungsaufwand der Pakete
- Kunde erhält nicht den gesamten Code

### Lösungsvorschlag 2: Git Repo
