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

**Vor- und Nachteile des Systems Saldosteuersatz**
Der Vorteil liegt hauptsächlich an der Einfachheit der Abrechnung gegenüber der Eidg. Steuerverwaltung. Das Unternehmen listet seinen Umsatz (Kreditorenrechnungen) auf und multipliziert den Umsatz mit dem Saldosteuersatz. Es ist keine Auflistung der Wareneingänge (Debitorenrechnungen) notwendig.

Der Nachteil liegt daran, dass das Unternehmen die bezahlten MWST der Einkäufe (Debitorenrechnungen) nicht in Abzug bringen kann. Sofern die Einkäufe gering sind, hat der Saldosteuersatz vorteile. Wenn die Unternehmung in der Summe einen hohen Betrag an Einkäufen hat, so "verliert" er die bezahlten MWST an die Steuerverwaltung. Bei einer Abrechnung nicht im System Salsosteuersatz wäre dies ein Null-Summen-Spiel, also CHF 0 gegenüber dem Steueramt abzurechnen. 

Da Mint System nach Saldosteuersatz abrechnen (5.9%) und somit den Einkauf nicht abziehen kann, ergibt sich jeweils eine Differenz von 1.8%. Bei einem Projekt mit externen Dienstleistungen (Debitoren) von zum Beispiel CHF 40'000 sind dies CHF 2'360 die Mint System so statt CHF 0 der MWST abliefert. Auch wenn die Dienstleistung mit CHF 40'000 weiterverrechnet (Kreditoren) wird. 




