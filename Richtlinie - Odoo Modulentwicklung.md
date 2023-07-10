---
tags:
- Richtlinien
---
# Richtlinie - Odoo Modulentwicklung

## Namenskonventionen

### Ansichten

Ansichten werden gemäss diesem Schema benannt:

> Technischer Modullname + "." + Modellname + "\_" + Ansichtstyp

Bespiel: `job_portal_base.joboffer_form`

### Systemparameter

Systemparameter werden nach dem folgenden Schema bennant:

> Technischer Modullname + "." + Verrichtung + Modell- oder Feldname

Beispiel für Parameter zum Kopieren eines Feldes im Einkaufsvertrag: `purchase_requisition_reference.copy_reference`

### Kommentare

Wenn Funktion überschrieben wird muss eine Kommentar in diesem Format hinzugefügt werden:

```python
"""OVERWRITE: Funktionsbeschreibung"""
#OVERWRITE:
```