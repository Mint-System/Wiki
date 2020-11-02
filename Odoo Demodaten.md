# Odoo Demodaten

Für die Odoo Demos werden Datensätze und Szenarios gepflegt. Für jede Odoo App wird festgehalten wie die Demodaten exportiert wurden und wie die dazugehörige Export-Datei heisst.

#FIXME: Move this note to [[Odoo Demodaten]]

##  Initialisierung

Benutzer
```
Name
Login
Sprache
```
Datei: `res.users.csv`

?> Die Benutzer haben nach dem Import für alle Apps maximale Rechte ausser für PLM, Administration und Quality.

## App Fertigung

Produkte
```
External ID
Name
Product Type
Internal Reference
Cost
```
Datei: `product_template.csv `

Stückliste
```
External ID
Product
Quantity
BoM Type
BoM Lines/Component
BoM Lines/Quantity
```
Datei: `mrp_bom.csv`

Arbeitsplätze
```
Sequenz
Code
Arbeitsplatz
```
Datei: `mrp.workcenter.csv`

Arbeitspläne
Achtung: funktioniert nicht! Wie importiert man Vorgänge?
```
Beschreibung
Arbeitsplan
Vorgänge
```
Datei: `mrp.workcenter.csv`

## App Projekt

Projektstufe
```
Sequenz
Stufenbezeichnung
In Kanban eingeklappt
Beschreibung
Projekte/Externe ID 
```
Datei: `project.task.type.csv`

Projekt
```
Sequenz
Name
Projektmanager
Kunde
```
Datei: `project.project.csv`

Aufgaben (Hauptaufgaben)
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task_main.csv`

Aufgaben
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task.csv`