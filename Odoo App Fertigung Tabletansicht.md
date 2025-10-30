---
tags:
  - Definition
kind:
  - explain
section: communication
---

# Odoo App Fertigung Tabletansicht

Die Tabletansicht der Fertigungsaufträge ist eine spezielle Lösung von Odoo. Sie erfordert eine Erläuterung.

## Technisch

Technisch gesehen ist die Tabletansicht ein normales Odoo-Formular mit aufwändigem Styling. Es wird der gleiche Mechanismus zur Darstellung der Daten und Eingabefelder verwendet wie er für alle anderen Formularansichten verwendet wird.

## Anpassung

Die Ansicht kann aktuell nicht mit Odoo Studio verändert werden. Das liegt an den aufwändigen Formatierungen.

Im Odoo Forum wurde folgender Beitrag beantwortet: [Can I customize the Work Order Tablet View? I want all the buttons at the top.](https://www.odoo.com/de_DE/forum/hilfe-1/can-i-customize-the-work-order-tablet-view-i-want-all-the-buttons-at-the-top-170932). Die Felder des Datenmodells `mrp.workorder` können also mit der Anpassung der Ansicht neu angeordnet werden.

**Felder verknüpfter Modelle anzeigen**

Damit beispielsweise der Produktname in der Tabletansicht angezeigt werden kann, muss dieser im Workorder-Objekt hinterlegt werden.

![[Workorder Product Name.png]]

Die relevante Code-Zeile: <https://github.com/odoo/odoo/blob/master/addons/mrp/models/mrp_workorder.py#L34>

Wenn man nun eine verknüpfte Information wie die Produktkategorie anzeigen möchte, muss dazu die Klasse Workorder angepasst werden. In diesem Fall würde man ein Feld `product_category_id` hinzufügen und dieses mit dem Relations-Attribut verknüpften. Die Tabletansicht würde man mit dem neuen Feld ergänzen.
