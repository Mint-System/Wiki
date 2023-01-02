---
tags:
- Richtlinien
---
# Richtlinie - Odoo Modulentwicklung

## Namenskonvention

### Systemparameter

Systemparameter werden nach dem folgenden Schema bennant:

> Technischer Modullname + "." + Verrichtung + Modell- oder Feldname

Beispiel für Parameter zum Kopieren eines Feldes im Einkaufsvertrag: `purchase_requisition_reference.copy_reference`

### Kommentare

Wenn Funktion überschrieben wird muss eine Kommentar in diesem Format hinzugefügt werden:

```python
#OVERWRITE:
```