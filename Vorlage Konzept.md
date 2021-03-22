# Vorlage Konzept

Überschriften:

* Einleitung
	* Ausgangslage
	* Systeme im Einsatz
	* [[Begriffe]]
* Mint System
	* Partner
* Lösungsvorschlag
* Anforderungsanalyse
	* Systeme im Einsatz
	* Systemkontext
	* Stakeholder
* Prozesse
* Vorgehen
	* Phase N: Beschreibung
* Aufwandsschätzung
* Referenzen
* Anhang

## Textbausteine

**Mint System GmbH**

Als Mint System GmbH sind wir ein Schweizer Unternehmen aus der Region und "bauen die Brücke" zwischen Odoo S.A. und dem Kunden. Wir verstehen die Prozesse von Firmen wie die Schmidiger GmbH. Der designierte Projektleiter Kurt Gisler ist ausgebildeter Elektroingenieur mit Praxiserfahrung aus der Branche Entwicklung und Produktion von Elektro-Mechanischen Systemen. Ergänzt mit dem Knowhow aus erfolgreichen Odoo-Projekten (siehe Abschnitt Referenzen) sind wir ein kompetenter Partner für die Umsetzung des ERP-Projektes bei Schmidiger GmbH. Wir würden uns sehr freuen.

**Dreiecksbeziehung "Kunde - Odoo - Mint System"**

Bezüglich der Lizenzierung von Odoo steht der Kunde direkt mit Odoo S.A. in Verbindung. Deshalb setzt sich das Angebot aus den folgenden zwei Offerten zusammen:

-   Dienstleistung von Mint System GmbH zur Implementierung von Odoo (S00031)
-   Lizenzen für die einzelnen Apps inkl. Wartung und technischer Support von Odoo S.A.

### Vorgehen

Das Vorgehen orientiert sich am Mint System [Vorgehensmodell für ERP Projekte](https://cloud.mint-system.ch/s/cPnnr7yjPApL8YG). Die einzelnen Arbeitspakete sind im folgenden Abschnitt erläutert. Daraus leitet sich die
Aufwandsschätzung ab.

[[Phase Installation|Phase X: Installation]]
* Den Odoo Mandanten aufsetzen
* Die DNS Konfiguration vornehmen
* Odoo Mail-Account Integration
* Die Benutzer in Odoo bereitstellen
* Odoo Module von Dritten installieren

Ziel: Odoo steht für die Initialisierung bereit.

[[Phase Initialisierung|Phase X: Initialisierung]]
* Die Adressen der Lieferanten importieren
* Die Adressen der Kunden importieren
* Die Bankkonten erfassen und konfigurieren
* Das Dokumentlayout festlegen und umsetzen

Ziel: Initialisierungs-Daten stehen in Odoo zur Verfügung.

[[Phase Finanzen|Phase X: Finanzen]]
* Den Kontenplan einrichten
* Die Mehrwertsteuersätze einrichten
* Die Journale einrichten
* Die Bankenverbindung zum Ebanking einrichten
* Debitoren und Kreditoren einrichten

Ziel: Interne Buchhaltung erfolgt mittels Odoo.

[[Phase Fertigung|Phase X: Fertigung]]
* Die Arbeitsplätze erfassen
* Die Fertigungs-Routen definieren
* Arbeitspläne erfassen
* Notwendige Qualitätsschritte einfügen

Ziel: Alle Daten zum Fertigen der Produkte sind bereit.

[[Phase Produktentwicklung|Phase X: Produktentwicklung]]
* Alle Produkte importieren
* Stücklisten definieren

Ziel: Alle Produkte sind definiert.

[[Phase Produktionsplanung|Phase X: Produktionsplanung]]
* Sicherhehits-Vorlaufzeiten sammeln
* Kapazitäten der Arbeitsplätze definieren

Ziel: Produktionsabläufe können geplant werden.

[[Phase Lohnabrechnung|Phase X: Personalabrechnung]]
* Das Personal erfassen
* Die Verträge erfassen und zuweisen
* Die Abzüge der Arbeitgeber/Arbeitnehmer in den Stammdaten eintragen
* Die Konfiguration der Lohnarten vornehmen

Ziel: Lohnabrechnung mit Odoo.

[[Phase Verkäufe und Einkauf|Phase X: Verkäufe und Einkauf]]
* Die Lieferanten Preislisten importieren
* Lead-Times festlegen
* Mindestbestandsregeln einrichten

Ziel: Alle Daten zum Verkaufen und Einkaufen der Produkte sind bereit.

[[Phase Webshop|Phase X: Webshop]]
* Den Seitenaufbau definieren (Startseite und weitere Seiten)
* Das Layout (Farbkonzept, Schriftarten) bestimmen
* Die Inhalte erfassen
* Die Inhalte mit den Produkten erweitern
* Den Warenkorb einrichten
* Die Zahlungsmittel einrichten

Ziel: Es sind Produkte der Stiär Biär im Webshop bestellbar.

[[Phase Projekt|Phase X: Projekt]]
* Projekt-Berichte konfigurieren
* Die Hauptaufgaben - Unteraufgaben Struktur definieren
*  Projekt-Templates einrichten

Ziel: Alle Daten zum Starten und Überwachen der Projekte sind bereit.

[[Phase Zeiterfassung|Phase X: Zeiterfassung]]
* Alle persönlichen Verträge einrichten
* Den Freigabe-Workflow konfigurieren
* Den anwendbaren Feiertagskalender importieren
* Das Berichtswesen konfigurieren

Ziel: Die Kalender und Verträge sind für Arbeitszeit-Rapportierung bereit.

[[Phase Lager|Phase X: Lager]]
* Alle Lager und Lagerorte einrichten
* Die Lager-Routen definieren
* Die Lager beschriften
* Den Verpackungs-Vorgang einrichten
* Das Barcode Scanning aktivieren

Ziel: Die Lager sind eingerichtet, beschriftet und alle Routen programmiert.

[[Phase Versand|Phase X: Versand]]
* Die Lieferfirmen integrieren
* Die Beauftragung für den Versand einrichten

Ziel: Die Schnittstelle zu den Lieferfirmen ist etabliert

Phase X: Reporting
* Das Reporting für die Nachkalkulation einrichten
* Die verschiedenen Dashboards bereitstellen

Ziel: Das Reporting und das Management-Cockpit sind bereit.

[[Phase Odoo Entwicklung|Phase x: Odoo Entwicklung]]
* Erstellen technische Spezifikation
* Kick-Off mit externen Odoo Entwickler
* Kontinuierliche Integration und Testen der Lösung

Ziel: Odoo Entwicklung validiert.

[[Phase Personal|Phase x: Personal]]
* Adressen des Personal erfassen
* Arbeitsverträge einrichten
* Arbeitszeiten definieren
* Organisation und Genehmigungsprozess abbilden

Ziel: Die Pesonaldaten der Mitarbeiter sind erfasst.

[[Phase An- und Abwesenheitszeiten|Phase x: An- und Abwesenheitszeiten]]
* Abwesenheitstypen festlegen
* Importieren Feiertagskalender
* Prüfung des Genehmegigungsprozesses
* Testen der Stundenlohnabrechnung

Ziel: Mitarbeiter können ihre An- und Abwesenheitszeiten registrieren.


[[Phase Terminal Zeiterfassung|Phase x: Terminal Zeiterfassung]]
* Beschaffung Hardware
* Installation und Konfiguration Betriebssystem
* Registration RFID/NFC-Codes
* Installation Terminal vor Ort

Ziel: Mitarbeiter registrieren ihre Anwesenheitszeiten über das Terminal.

## Referenzen

Siehe [[Mint System Referenzen]].