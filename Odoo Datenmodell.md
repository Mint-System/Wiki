# Odoo Datenmodell

Dokumentation der wichtigsten Beziehungen im Odoo Datenmodell.

Syntax:
* <m:m> Mehrere zu mehrere
* <1:m>,<m:1> Eine zu mehrere oder mehrere zu eine
* <1:1> Eins zu eins

## Rechnung und Verkaufsauftrag

Verkaufsauftrag <1:m> Auftragsposition <m:m> Rechnungszeile <m:1> Rechnung.