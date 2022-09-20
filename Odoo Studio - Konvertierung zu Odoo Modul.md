---
tags:
- HowTo
---

# Odoo Studio: Konvertierung zu Odoo Modul

Mit dieser Anleitung konvertieren Sie eine Anpassung von Odoo Studio zu einem Odoo Modul.

## Neues Modul erstellen

* Odoo Studio Anpassungen exportieren
* Extrahieren `customizations.zip`
* Dateien `ir_model_fields.xml` und `ir_ui_view.xml` öffnen
* Alle unbrauchbaren Anpassung in den Dateien entfernen
* Odoo Modul `xxx_layout` erstellen und die angepassten Dateien in den `view` Ordner kopieren
* Folgende Ersetzungen vornehmen:

Attribut > record > id: `studio_customization` > `xxx_layout`\
Attri but > reccord > id: `odoo_studio_account__83539bb5...` > Kopieren von Attribut inherit_id\
Feld name: `Odoo Studio:` `XXX Layout`

* Entfernen alle Instanzen von `context="{'studio': True}"`, `<field name="field_parent" eval="False"/>`, `<field name="groups_id" eval="[(6, 0, [])]"/>`

## Migration durchführen

Für jedes Feld, das mit Odoo Studio erstellt wurde, müssend die Daten der Spalte exportiert werden. Als Beispiel nehmen wir an, wir haben ein Feld `x_studio_description` auf dem Model `sale.model_sale_order`.

* Öffnen Listenansicht des Model
* Exportieren des Felds als import-kompatible Export und speichern als `MODEL.csv`
* Odoo Studio deinstallieren (Die Felder und Anpassungen werden nun entfernt)

Es kann sein, dass die Anpassungen nicht entfernt werden. Dann müssen die Felder, Anischten und Filter manuell entfernt werden.

* Neues Modul installieren
* Die exportierten Felder wieder importieren

