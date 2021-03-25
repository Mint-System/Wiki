# Odoo.sh Entwicklung

Die Odoo.sh Verwaltungsplattform ist eng mit dem [[GitHub]] Repository gekoppelt.

## Branches

Mit Branches werden die Odoo-Umgebungen definiert. Jeder Branch ist einer Kategorie zugewiesen.

**Kategorien**

Production:
* Kann nur einen Branch enthalten
* Initiale Datenbank ist ohne Demodaten
* Umgebung kann nicht neu gebaut werden
* Es können keine Tests ausgeführt werden

Staging:
* Kann mehrere Branches enthalten
* Lädt die produktive Datenbank
* Umgebungen können neu gebaut werden
* Es können keine Tests ausgeführt werden

Development:
* Kann mehrere Branches enthalten
* Lädt eine leere Datenbank mit Demodaten
* Umgebungen können neu gebaut werden
* Es können Tests ausgeführt werden