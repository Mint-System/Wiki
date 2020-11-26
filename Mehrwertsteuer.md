# Mehrwertsteuer (MwSt)
Die Mint System (CHE-150.248.608 MWST) verrechnet die Mehrwertsteuer mittels dem Saldosteuersatz (SSS) über folgende Abrechnungsmodalitäten:

**Software: Programmierung/Entwicklung**  
Umsatzanteil: 40%  
Bewilligter SSS: 6,5%  

**Unternehmensberatung**  
Umsatzanteil: 60%  
Bewilligter SSS: 5,9%  

**Konfiguration in der Buchhaltung bei Saldosteuersatz**
Damit für die MWST-Abrechnung die beiden Saldosteuersätze aus der Finanzbuchhaltung herangezogen werden kann, werden zwei verschiedene MWST-Sätze mit je einen Eintrag 7.7% unter (Finanzen > Konfiguration > Steuern) erstellt und anschliessend den Produkten hinterlegt. 
- Steuerbezeichnung: "Zu zahlende MwSt. bei 7,7% (NRZ/SSS 6.5%)" für die Produkte Programmierung/Entwicklung
- Steuerbezeichnung: "	Zu zahlende MwSt. bei 7,7% (NRZ/SSS 5.9%)" für die Produkte Software Programmierung/Entwicklung

***Alternative***
Eine Alternative wäre zusätzlich den Kontenplan anzupassen. So würde ein Konto 2200 Geschuldete MwSt. (Umsatzsteuer 6.5%) und ein Konto 2201 Geschuldete MwSt. (Umsatzsteuer 5.9%) in der Konfiguration bei den beiden Steuersätzen hinterlegt.

**Rechnungen von der Schweiz in die EU**
Für eine Rechnungen ins Ausland muss man keine Mehrwertsteuer verrechnen, es zahlt jeweils der Kunde direkt am Ort. Es kommt das "Reverse Charge" Verfahren (Umkehr der Steuerschuld) zum Einsatz. Man muss auf der Rechnung eindeutig kennzeichnen, dass das so ist. Z.B. Mehrwertsteuer wird vom Rechnungsempfänger bezahlt.
Ein Unternehmen zahlt dann MwSt. und kann es dann auch als Vorsteuerabzug geltend machen. Bei Privatpersonen gilt eine Limite von CHF 10'000, darunter ist keine MwSt. zu entrichten.

**Abrechnung der Mehrwertsteuer**
Die Abrechnung erfolgt quartalsweise über das zugestellte Formular in Papierform. In Odoo Finanzen wird der Umsatzsteuerbericht über den Menüpunkt Berichtswesen ausgegeben. Dabei wird die Abrechnungsperiode (Quartal) im Filter ausgewählt.






