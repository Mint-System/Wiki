---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Odoo - App Website
Installation Module Website `website`.

## Installation

Auswahl:
* eCommerce `website_sale`
* Digitale Produkte `website_sale_digital`
* eCommerce Subscription `website_sale_subscription`

### Optionen aktivieren
Navigieren nach *Einstellungen > Allgemeine Einstellungen > Integration* und Auswahl:
* Unsplash Bilder Galerie

Navigieren nach *Einstellungen > Website > Website* und Auswahl:
* Google Analytics

Theme installieren: *Einstellungen > Website > Pick a Theme*.

## Initialisierung

Arbeitsschritte:
* Zahlungsmittel  aktivieren
* Produkte, Kategorien und Preislisten erfassen
* Allgemeine Geschäftsbedingungen hinterlegen

## Implementation

Arbeitsschritte:
* Fix bug [[Odoo 14#Editor not wide enough]]
* Festlegen *Domain* der Website mit `http://` Prefix
* Color Theme festlegen

### Seiteninhalt erstellen

Arbeitsschritte:
* Header und Footer definieren
* Unternehmensdaten auf der Website definieren