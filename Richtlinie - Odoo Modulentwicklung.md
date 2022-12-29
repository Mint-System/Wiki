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