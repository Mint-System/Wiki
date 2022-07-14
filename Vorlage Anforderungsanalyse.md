---
tags:
- Vorlagen
---

# Vorlage Anforderungsanalyse

Ein [[Anforderungsanalyse]] hat die folgende Struktur:

* Begriffe: Definition der wichtigsten Begriffe
* System: Systemkontext mit Umsystemen
	* Stakeholder: Wer sind die Stakeholder?
	* Rollen: Rollenbeschreibungen
	* Datenmodell: Visualisierung des Datenmodells
* [[Anforderungen]]
	* Funktionale Anforderungen
	* Qualitätsanforderungen
	* Randbedingungen
* Berechigungsmatrix
	* Tabelle mit Rollen und deren Berechtigungen auf den Geschäftsobjekten
* Anhang
	* Dokumente Interview

## Textbausteine

**Systemkontext**

Der Systemkontext stellt eine Abgrenzung des ERP-System zu den Umsystemen dar. Dazu eine Grafik, welche die Odoo-Funktionen im Kontext der Unternehmensorganisation zeigt:

![[Odoo Systemkontext.svg]]

Odoo besteht aus einer Vielzahl an Apps die miteinander gekoppelt werden können. Geschäftsprozesse berühren verschiedene Odoo-Apps und deren Geschäftsobjekte.

**Funktionale Anforderungen (FA)**

| ID   | Titel                             | Beschreibung                                                                                                             | Kriterium | Status        | Kommentar |
| ---- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------- | ------------- | --------- |
| FA-1 | Buchungsnachträge mit Genehmigung | Wenn Mitarbeiter Korrekturen an den Buchungen vornehmen, wird die Korrektur dem Vogesetzten zur Genehmigung freigegeben. | Muss      | Nicht Erfüllt |           |
|      |                                   |                                                                                                                          |           |               |           |
