# Vorgehensmodell Softwareentwicklung

Hier beschreibt die [[Mint System GmbH]] ihr Vorgehensmodell zum Softwareentwicklungsprozess.

## Agile Entwicklung

Die Umsetzung des Softwareentwicklungsprojekt erfolgt nach dem agilen Ansatz:

![[Agile Software Development.png]]

### Requirements

Der Kunde definiert die Anforderungen. Diese werden zusammen mit dem Kunde analyisiert und besprochen. Anforderungen können sich im Verlauf des Projekts verändern.

### Design

Anhand der Anforderung wird ein oder mehrere Arbeitspakete definiert. Ein Arbeitspaket enthält Anweisungen für den Entwickler und ist Bindgeglied zwischen den geschäftlichen Anforderungen und der technischen Implementation.

### Develop

Sobald ein Arbeitspaket definiert ist, kann dieses zur Entwicklung freigegben werden. Der Entwickler meldet allfällige Probleme an den Projektmanager.

### Test

Ist das Arbeitspaket umgesetzt wird es direkt getestet. Feedbacks aus der Testphase fliessen wieder in die Design-Phase.

### Deploy

Für Arbeitspakete, die getestet wurden, wird ein Release erstellt. Der Release wird in der produktiven Umgebung installiert.

## Projektmanagent

Das Projektmanagement regelt die Zusammenarbeit und Kommunikation mit dem Kunden.

Für das Projektmanagement wird [[Odoo]] verwendet.

### Initiale Planung

Das gesamte Projekt wird in [[Projektphasen]] mit groben Aufwandsschätzungen geplant. Die daraus resultierenden Kosten werden als Kostendach betrachtet.

### Arbeitspakete

Für jede Anforderung wird eines oder mehre Arbeitspakete definiert. Im Arbeitspaket ist beschrieben wie die Implementation konkret aussieht.

Die Arbeitspakete sind als Projektaufgaben im Odoo-Projekt verfügbar.

### Kommunikation

Die Kommunikation mit dem Kunden erfolgt über die Portalansicht des Odoo-Projekts. Der Kunde kann dort direkt Aufgaben kommentieren oder Anhänge hinzufügen.

### Verrechnung

Die Verrechnung des Aufwands erfolgt auf Stundenbasis. Der Entwickler rapportiert seine Stunden und der Projektleiter verrechnet diese am Ende des Monats. Damit die Kontrolle der Kosten für den Kunden sichergestellt ist, wird ein [[Kostendach]] festgelegt.

## Releasemanagement

Neue Software-Releases werden auf dem verknüpften GithHub-[[Repository]] publiziert.