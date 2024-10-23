---
tags:
- Prozess
---
# Prozesse Projektmanagement - Business Requirement

## Stakeholder Story formulieren

Verantwortlich: [[Rollen#Projektleiter]]

In Prosa wird die Sicht des Kunden formuliert. Als erstes wird die IST-Situation erläutert und anschliessend die SOLL-Situation.

## Spezifikation formulieren

Verantwortlich: [[Rollen#Projektleiter]]

Die Spezifikation enthält Anweisung zur Reproduktion des Problems oder Ausführung der neuen Funktion. Dazu ein Beispiel:

```
Arbeitsschritte:

1. Zweistufige Fertigung auf Lagerort einschalten
2. Produkt "A" (Storable Product) mit Strückliste anlegen
3. Produkt "B" in Stückliste eintragen
4. Bei Produkt "B" im WH/Stock Bestand 1 anlegen
5. Fertigungsauftrag 1 für A mit Scheduled Date [Heute] anlegen und bestätigen  
6. Im Upstream Picking "Verfügbarkeit prüfen" (--> Product B ist reserviert, im Fertigungsauftrag erscheint B als "Available)
7. Fertigungsauftrag 2 für A mit Scheduled Date [Heute - 1] anlegen und bestätigen (--> im Fertigungsauftrag 2 erscheint B als "Available und im Fertigungsauftrag 1 als "Not available)
```

Dazu wird formuliert wie eine technische Lösung für das Problem aussieht. 

## Massnahme formulieren

Verantwortlich: [[Rollen#Stakeholder]]

In Rücksprache mit Stakeholder des  Projekts wird eine Massnahme formuliert. Die Massnahme ist die Aufgabenbeschreibung und richtet sich an den Entwickler oder Integrator, welcher die Lösung implementiert.

Ist das Business Requirement bestätigt, wird eine Aufgabe angelegt und die Massnahme wird 1:1 auf die Beschreibung der Aufgabe übertragen.
