---
title: Odoo App Verkauf
section: communication
kind: explain
---

## Verkaufsgruppen und Baugruppen

Wie werden die Verkaufsgruppen von Baugruppen unterschieden?

Odoo bildet die Produkte zur Fertigung in folgenden Schema ab.

![[Verkaufsgruppen und Baugruppen.png]]

**Beispiel Produkt Stuhl**

Stuhl A kann als Option auch mit Rollen ausgestattet werden.
Das Produkt Stuhl würde man mit dem Attribut Rollen (Ja/Nein) ausstatten.
Es entstehen bei der Produktkonfiguration zwei Varianten.
Entweder reicht ein einfacher Preisaufschlag auf das Attribut oder man bildet eine Stückliste für die Variante mit Rollen.
Im zweiten Fall erfasst man die Rollen als Produkt mit einem fixen Preis und fügt es der Produktvariante "Stuhl mit Rollen" hinzu.
Erfordert der Stuhl eine Fertigung, fügt man einen Arbeitsplan der Stückliste hinzu.
In der Kostenentwicklung des Stuhls werden Aufwands- und Materialkosten eingerechnet.
Der Käufer sieht schlussendlich nur den Stuhl A mit oder ohne Rollen zur Auswahl.

Die Unterscheidung der Gruppe lässt sich festlegen:

![[Stücklisten Typ.png]]

## Rahmenaufträge

Mit dem Kunden können in Form eines Rahmenvertrags zum Beispiel 10'000 Stk des Produktes X verkauft werden. Ein Rahmenvertrag wird in mehrere Verkaufsaufträge gesplittet. Die 10'000 Stk können also zum Beispiel auf fünf Aufträge à je 2'000 Stk aufgeteilt werden. Die Zugehörigkeit der Unter-Verkaufsaufträge zum Rahmenvertrag ist in der Menu-Führung sichtbar. Im CRM wiederum wird angezeigt, dass Rahmenvertrag aus den fünf Unter-Vekaufsaufträgen besteht. Im Rahmenvertrag wird zudem sichtbar, ob die gesamte verkaufte Stückzahl bereits in Unter-Verkaufsaufträge aufgeteilt ist. Im Weiteren wird verhindert, dass die Summe der Stückzahl aus den Unter-Verkaufsaufträgen die vereinbarte Gesamtstückzahl nicht überschreitet. Jeder Unter-Verkaufsautrag kann individuelle Stückzahlen und Liefertermine beinhalten.
