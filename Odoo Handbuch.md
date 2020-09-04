# Odoo Handbuch

Das ist das Mint System Handbuch zu Odoo. Hier erhalten Kunden Anleitungen zu Odoo-Funktionen.

# Initialisierung

## Unternehmensdaten

Die Unternehmensdaten werden an vielen Stellen im System verwendet. Unter anderem für die Rechnung, für Angebote, für E-Mails und weiteres. Füllen sie bitte diese Daten aus und verwenden sie ein Logo mit folgenden Details:
* Datenformat: JPG oder PNG
* Grösse: Empfehlung Breite 300 pixel

Benötigte Informationen:
* Unternehmensname, Adresse, Telefon
* EMail, Webseite (Domain)
* Bankverbindung - Name, Kontonummer
* IBAN Nummer
* Unternehmensnummer, MwSt Nr. (wenn vorhanden)

## Mehrwertsteuer

Bevor sie im System die erste Rechnung erstellen sollten sie die Abklärungen machen ob sie überhaupt MwSt. pflichtig sind oder nicht. Es gilt die Regel:

**Ab einem Jahresumsatz von CHF 100’000 sind sie steuerpflichtig und müssen die MwSt. quartalsweise abrechnen. Sind sie noch nicht steuerpflichtig, können sie alle Rechnungen ohne Steuer erzeugen. Aufs neue Buchhaltungsjahr hin, schätzen sie ihren Umsatz ein.**

Sind sie noch nicht Steuerpflichtig, können sie direkt mit dem Verbuchen von Rechnungen beginnen und tragen bei der Steuer nichts ein. Sind sie Steuerpflichtig, dann arbeiten sie am besten nach der Methode Effektive
Steuerverrechnung und vereinbarten Entgelten. So ist auch die Buchhaltung eingestellt.

DIe Abrechnung nach vereinbarten Entgelten (Art. 39 Abs. 1 MWSTG) ist das Standardverfahren der eidgenössischen Steuerverwaltung.

## Journale

[[Odoo Journal-Vorlage]]

## Kontenplan

## Eröffnungsbuchung

# Persönliche Einstellungen

## Lokalisierung

Nach dem Login klicken sie oben rechts auf ihren Benutzer und wählen *My Profile*. Legen sie die folgenden Einstellungen fest.

**Zeitzone** - Damit wird automatisch die Systemzeit richtig eingestellt.  
**EMail** - Über diese EMailadresse werden alle Nachrichten verschickt (Rechnung, Nachrichten an Kunden). Diese Mailadresse erscheint als Versender im Mailheader.  
**Signatur** - Die Signatur sollte die kompletten Unternehmensdaten enthalten.  
**Foto** - Für das Foto verwenden sie ein JPG-Format nicht grösser als 100 x 100 Pixel.  

## Passwort ändern

Klicken sie oben rechts auf ihen Benutzer und wählen *My Profile*. Drücken sie  am Ende des Dialogs auf *Passwort ändern*.

# Apps

# Einstellungen

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwickler Tools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

## Übersetzungen aktualisieren

**Generierung**

Damit Begriffe überesetzt werden können, muss als erstes die Liste, der zu übersetzenden Begriffe aktualisiert werden.  Im Entwickler-Modus folgende Ausführung machen:

*Einstellungen > Übersetzungen > Fehlende Begriffe generieren*

Dann die kann man die Überstzungen über die Einstellungen anzeigen.

**Aktualisierung**

Die Liste *Einstellungen > Übersetzungen > Übersetzte Begriffe* nach *Nicht übersetzt* filtern.

Nach dem zu übersetzenden Begriff suchen und aktualisieren.

![[Odoo Übersetzte Begriffe.png]]

## Tour deaktivieren

Aktivieren Sie den [[#Entwicklermodus aktivieren|Entwicklermodus]].

Klicken sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen sie *Tour deaktivieren*.

## Benutzerrechte vergeben.

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Zugriffsrechte sie verändern möchten. Drücken sie auf *Bearbeiten* und wählen sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![[Odoo Handbuch Benutzerrechte.png]]

Klicken Sie auf speichern um den Vorgang abzuschliessen.

!> Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.

## Passwort zurücksetzen

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Passwort sie zurücksetzen möchten.
 
Wählen Sie *Aktion* und *Passwort ändern*. Geben sie im Feld *Neues Passwort* das neue Passwort ein.

# Diskussion

# Kalender

# Kontakte

# Kundenveraltung

# Verkäufe

## Verkäufe Dashboard

Navigation: *Applikationen > Verkäufe*

Hier sehen Sie alle offnen Angebote und Verkaufsaufträge.

### Angebot erstellen

Aktion: *Verkäufe > Anlegen*

Wählen Sie den Kunden aus, der das Angebot erhalten soll. 

## Produkte Dashboard

Navigation: *Verkläufe > Produkte > Produkte*

### Produkt erstellen

# Projekt

# Finanzen

## Finanzen Dashboard

## Mehrere Währungen

Odoo Dokumentation: [Odoo’s multi-currency system ](https://www.odoo.com/documentation/user/13.0/accounting/others/multicurrencies/how_it_works.html)

Navigieren nach *Finanzen > Konfiguration > Einstellungen > Währungen* und dort die Option *Mehrere Währungen* akvieren. Nach Bedarf muss ein Journal gemäss [[Odoo Journal-Vorlage]] erstellt werden. Die verfügbaren Währungen können über die Option *Andere Währungen aktivieren* verwaltet werden.

# Zeiterfassung

## Zeiterfassung Dashboard

## Awesome Timesheet

Um die mobile App *Awesome Timesheet* in ihrem Browser oder auf dem Smartphone zu verwenden, müssen sie es zuerst über den jeweiligen App-Store installieren.

### Login

Öffnen sie das Menu und wählen *Synchronize*.

![[Awesome Timesheet Login 1.png]]

Klick auf *Sign In*.

![[Awesome Timesheet Login 2.png]]

*Https://* auswählen und die Odoo Domain eingeben.

![[Awesome Timesheet Login 5.png]]

Im Feld *Login* die Email und Feld *Password* das Passwort eingeben. Einloggen mit klick auf *Login*.

![[Awesome Timesheet Login 4.png]]

Erscheint ein Dialog, wählen sie *Discard Data*.

![[Awesome Timesheet Login 3.png]]

Nun ist die App zur mobilen Zeiterfassung bereit.

# Personal

Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzer ein Mitarbeiter hinterlegt werden.

## Mitarbeiter erfassen

Navigieren sie nach *Personal* und wählen *+ Anlegen*. Geben sie den Vor- und Nachnamen des Mitarbeiter ein und öffnen den Tab *HR Einstelungen*. Wählen sie unter *Verknüpfter Benutzer* einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll.

Schliessen Sie den Vorgang mit *Speichern* ab.

## Arbeitsvertrag hinzufügen

# Personalabrechnung

# Abwesenheitszeiten

# Link Tracker

Um diesen App zu sehen, müssen sie den [[#Entwicklermodus aktivieren|Entwicklermodus]] aktvieren.

# Odoo App

Alle Odoo-Funktionen sind als mobile App verfügbar.

## Login

Die Verwendung der App erfordert einen Odoo Account. Setze nach Bedarf das [[#Passwort ändern]] zurück.

Laden Sie die App aus dem Geräte-spezifischen App-Store herunter.