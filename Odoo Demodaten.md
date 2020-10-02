# Odoo Demodaten

Für die Odoo Demos werden Datensätze und Szenarios gepflegt. Für jede Odoo App wird festgehalten wie die Demodaten exportiert wurden und wie die dazugehörige Export-Datei heisst.

##  Initialisierung
Benutzer
```
Name
Login
Sprache
```
Datei: `res.users.xlsx`
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
Datei: `product_template.xls `

Stückliste
```
External ID
Product
Quantity
BoM Type
BoM Lines/Component
BoM Lines/Quantity
```
Datei: `mrp_bom.xls`

Arbeitsplätze
```
Sequenz
Code
Arbeitsplatz
```
Datei: `mrp.workcenter.xls`

Arbeitspläne
Achtung: funktioniert nicht! Wie importiert man Vorgänge?
```
Beschreibung
Arbeitsplan
Vorgänge
```
Datei: `mrp.workcenter.xls`

## App Projekt

Projektstufe
```
Sequenz
Stufenbezeichnung
In Kanban eingeklappt
Beschreibung
Projekte/Externe ID 
```
Datei: `project.task.type.xlsx`

Projekt
```
Sequenz
Name
Projektmanager
Kunde
```
Datei: `project.project.xlsx`

Aufgaben (Hauptaufgaben)
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task_Hautaufgaben.xlsx`

Aufgaben
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task.xlsx`