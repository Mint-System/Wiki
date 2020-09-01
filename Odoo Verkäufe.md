# Odoo Verkäufe
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
