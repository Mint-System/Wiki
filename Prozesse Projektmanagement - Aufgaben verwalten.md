---
tags:
- Prozess
---
# Prozesse Projektmanagement: Aufgaben verwalten
Aufgabenverwaltung im Odoo

## Aufgabe erstellen

Beim Erstellen einer Aufgabe muss beachtet werden, dass standardmässig ein Auftragselement aus dem verlinkten Verkaufsauftrag hinzugefügt wird. Soll die verbuchte Zeit auf der Aufgabe verrechnet werden, muss ein entsprechendes Auftragselement vorhanden sein. Ansonsten gilt es den Link zum Auftrag zu entfernen.

Es gelten die [[Richtlinie - Aufgabenverwaltung]].

### Haupt- und Unteraufgaben

Alle Unteraufgaben haben Prefix: `OI: `. OI steht in diesem Fall für Odoo Implementierung.  
Alle Hauptaufgaben haben am Ende des Namens den Suffix " (OI)" mit den jeweiligen Anfangsbuchstaben.

![[Prozesse Projektmanagent Unterteilung Aufgaben.png]]

## Aufgaben bündeln

Bei mehreren Aufgaben ist es schwierig die Übersicht der Fristen zu behalten. Zur Planung können mehrere Aufgaben zu einem Paket gebündelt werden. Dazu erstellt man eine Aufgabe mit der Bezeichung `AP1: Beschreibung`. Das Aufgabenpaket (AP) verlinkt man mit den anderen Aufgaben.

Auf die Aufgabenpakete wird keine Zeit gebucht. Sie dienen lediglich der Planung.