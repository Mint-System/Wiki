---
tags:
- Richtlinien
---
# Richtlinie - Odoo Modulentwicklung

## Guidelines

We following the [OCA Guidelines](https://github.com/OCA/odoo-community.org/blob/master/website/Contribution/CONTRIBUTING.rst) .

## Quality Assurance

Here is check list before doing any commit:

- The module can be installed without errors
- The code of the module is linted
- There are not typos in strings and texts
- The readme file of the repo lists the module and its summary
- There are not unnecessary files in the stage
- Every string is translated
- No copy paste of AI-code from the prompt
- The module is tested in the UI

## Testing

Writing tests is welcomed, but [[Odoo Module Test Instructions]] are sufficient.

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