# Odoo Journal-Vorlage

## Verkauf

Name: **Ausgangsrechnungen**  
Kurzzeichen: DFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Verkäufe  
Währung: CHF  
Standard-Sollkonto: 3400 Dienstleistungserlöse  
Standard-Habenkonto: 3400 Dienstleistungserlöse  

## Einkauf

Name: **Eingangsrechnungen**  
Kurzzeichen: KFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Einkauf  
Währung: CHF  
Standard-Sollkonto: 4400 Handelswarenaufwand  
Standard-Habenkonto: 4400 Handelswarenaufwand  

## Finanzen

Name: **Sonstige Operationen**  
Kurzzeichen: DIV  
Sequenz: Prefix "DIV/%(range_year)s/"  
Typ: Sonstiges  
Währung: CHF  

Name: **Bank**  
Kurzzeichen: BNK1  
Sequenz: Prefix "BNK1/%(range_year)s/"  
Typ: Bank  
Währung: CHF  
Standard-Sollkonto: 1021 Bank  
Standard-Habenkonto: 1021 Bank  

### SPOS

Name: **Kasse/Bank**  
Kurzzeichen: CSH1  
Sequenz: Prefix "CSH1/%(range_year)s/"  
Typ: Kasse/Bank  
Währung: CHF  
Standard-Sollkonto: 1001 Kasse/Bank  
Standard-Habenkonto: 1001 Kasse/Bank  

### Mehrere Währungen

Name: **Wechselkursdifferenzen (CHF)**  
Kurzzeichen: EXCH  
Sequenz: Prefix "EXCH/%(range_year)s/"  
Type: Sonstiges  
Standard-Sollkonto: 4906 Währungsdifferenzen  
Standard-Habenkonto: 3806 Währungsdifferenzen  

## Personalabrechnung

Name: **Lohn**  
Kurzzeichen: LHN  
Sequenz: Prefix "LHN/%(range_year)s/"  
Typ: Sonstiges  
Währung: CHF  
Standard-Sollkonto: 5000 Lohnaufwand  
Standard-Habenkonto: 5000 Lohnaufwand  