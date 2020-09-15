# Odoo Handbuch

Das ist das Mint System Handbuch zu Odoo. Hier erhalten Kunden Anleitungen zu Odoo-Funktionen.

# Initialisierung
![[icons_odoo_survey.png]]

Richten sie ihre Odoo-Umgebung ein.

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
![[icons_odoo_membership.png]]

Einstellungen für ihren persönlichen Odoo-Benutzer.

## Lokalisierung

Nach dem Login klicken sie oben rechts auf ihren Benutzer und wählen *My Profile*. Legen sie die folgenden Einstellungen fest.

**Zeitzone** - Damit wird automatisch die Systemzeit richtig eingestellt.  
**EMail** - Über diese EMailadresse werden alle Nachrichten verschickt (Rechnung, Nachrichten an Kunden). Diese Mailadresse erscheint als Versender im Mailheader.  
**Signatur** - Die Signatur sollte die kompletten Unternehmensdaten enthalten.  
**Foto** - Für das Foto verwenden sie ein JPG-Format nicht grösser als 100 x 100 Pixel.  

## Passwort ändern

Klicken sie oben rechts auf ihen Benutzer und wählen *My Profile*. Drücken sie  am Ende des Dialogs auf *Passwort ändern*.

# Apps
![[icons_odoo_modules.png]]

Odoo-Apps konfigurieren und korrekt verwenden.

# Einstellungen
![[icons_odoo_settings.png]]

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwickler Tools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

## Übersetzungen aktualisieren

**Generierung**

Damit Begriffe überesetzt werden können, muss als erstes die Liste, der zu übersetzenden Begriffe aktualisiert werden.  Im [[#Entwicklermodus aktivieren|Entwickler-Modus]] folgende Aktionen ausführen:

*Einstellungen > Übersetzungen > Fehlende Begriffe generieren*.

Dann kann man die Übersetzungen über die Einstellungen anzeigen.

## Übersetzungen erstellen

Odoo wird in viele Sprachen übersetzt, daher kann es sein, dass die Lokalisierung in der eingestellte Sprache unvollständig ist.

Findet man einen Begriff oder Satz, der nicht korrekt übersetzt ist, kann man diesen selbst anpassen. Dazu ein Beispiel.

Der folgende Ausschnitt ist aus einem Odoo-Dialog. Die Labels und Buttons sind nicht übersetzt.

![[Odoo Übersetzung vorher.png]]

Als erstes muss man  die [[#Übersetzungen aktualisieren]]. Anschliessend kann man in der Liste *Einstellungen > Übersetzungen > Übersetzte Begriffe* den englischen Begriff suchen und anpassen.

![[Odoo Übersetzung bearbeiten.png]]

Nun ist der Odoo-Dialog übersetzt.

![[Odoo Übersetzung nachher.png]]

## Übersetzungen exportieren

Im Entwicklermodus öffnen sie den Export-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung exportieren*. Wählen sie die zu exportierende Sprache, Datei-Format CSV und eine App deren Übersetzungen sie exportieren möchten. Drücken sie auf *Export* und laden die CSV-Datei herunter.

!> Organisieren sie die Übersetzung nach Apps

## Übersetzungen importieren

m Entwicklermodus öffnen sie den Import-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung importieren*. Für die Sprache Deutsch (Schweiz) geben sie die folgenden Informationen ein:
* Sprache: de
* Code: CH
Laden sie die Datei mit Übersetzungen hoch und klicken auf *Import*.

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
![[icons_odoo_mail.png]]

# Kalender
![[icons_odoo_calendar.png]]

# Kontakte
![[icons_odoo_contacts.png]]

# Notizen
![[icons_odoo_note.png]]

# Dashboards
![[icons_odoo_board.png]]

# Kundenveraltung
![[icons_odoo_crm.png]]

# Verkäufe
![[icons_odoo_sale.png]]

## Verkäufe Dashboard

Navigation: *Applikationen > Verkäufe*

Hier sehen Sie alle offnen Angebote und Verkaufsaufträge.

### Angebot erstellen

Aktion: *Verkäufe > Anlegen*

Wählen Sie den Kunden aus, der das Angebot erhalten soll. 

## Produkte Dashboard

Navigation: *Verkkäufe > Produkte > Produkte*

### Produkt erstellen

# Projekt
![[icons_odoo_project.png]]

## Projektplanung erstellen

## Projekt anlegen
Feld |Inhalt|Beispiel
:- |: -|:-
Projektbezeichnung| *Name des Projektes*|Mountainbike Krönten


## Timer starten



# Finanzen
![[icons_odoo_account_accountant.png]]

## Finanzen Dashboard

## Mehrere Währungen

Navigieren nach *Finanzen > Konfiguration > Einstellungen > Währungen* und dort die Option *Mehrere Währungen* akvieren. Nach Bedarf muss ein Journal gemäss [[Odoo Journal-Vorlage]] erstellt werden. Die verfügbaren Währungen können über die Option *Andere Währungen aktivieren* verwaltet werden.

### Währungskursmanuell festlegen

Euro -> CHF 1.1061

### Währungskurse synchronisieren

# Zeiterfassung
![[icons_odoo_hr_timesheet.png]]

## Zeiterfassung Dashboard

## Eintrag manuell erstellen

Damit ein Odoo Benutzer ein Zeiterfassungs-Eintrag machen kann, müssen die foglenden Bedingungen erfüllt sein:
* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

## Awesome Timesheet

Um die mobile App *Awesome Timesheet* in ihrem Browser oder auf dem Smartphone zu verwenden, müssen sie es zuerst über den jeweiligen App-Store installieren.

### Login
<!-- tabs:start -->
#### **Schritt 1**
Öffnen sie das Menu und wählen *Synchronize*.

![[Awesome Timesheet Login 1.png]]

#### **Schritt 2**
Klick auf *Sign In*.

![[Awesome Timesheet Login 2.png]]

#### **Schritt 3**
*Https://* auswählen und die Odoo Domain eingeben.

![[Awesome Timesheet Login 5.png]]

#### **Schritt 4**
Im Feld *Login* die Email und Feld *Password* das Passwort eingeben. Einloggen mit klick auf *Login*.

![[Awesome Timesheet Login 4.png]]

#### **Schritt 5**
Erscheint ein Dialog, wählen sie *Discard Data*.

![[Awesome Timesheet Login 3.png]]
<!-- tabs:end -->

Nun ist die App bereit zur mobilen Zeiterfassung.

### Aufgabe und Projekt zuweisen

Damit ein Projekt und eine Aufgabe in der Awesome Timesheet für die Zeiterfassung sichtbar wird müssen die folgenden Bedigungen erfüllt sein.

* Das Projekt muss als Favorit markiert sein
* Die Projektaufgabe ist dem Benutzer zugewiesen oder der Benutzer wurde als Abonement der Aufgabe hinzugefügt.

# Personal
![[icons_odoo_hr.png]]

Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzer ein Mitarbeiter hinterlegt werden.

## Mitarbeiter erfassen

Navigieren sie nach *Personal* und wählen *+ Anlegen*. Geben sie den Vor- und Nachnamen des Mitarbeiter ein und öffnen den Tab *HR Einstelungen*. Wählen sie unter *Verknüpfter Benutzer* einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll.

Schliessen Sie den Vorgang mit *Speichern* ab.

## Arbeitsvertrag hinzufügen

# Personalabrechnung
![[icons_odoo_hr_payroll.png]]

# Abwesenheitszeiten
![[icons_odoo_hr_holidays.png]]

# Link Tracker
![[icons_odoo_website_partner.png]]

Um diesen App zu sehen, müssen sie den [[#Entwicklermodus aktivieren|Entwicklermodus]] aktvieren.

# Odoo App

Alle Odoo-Funktionen sind als mobile App verfügbar.

## Login

Die Verwendung der App erfordert einen Odoo Account. Setze nach Bedarf das [[#Passwort ändern]] zurück.

Laden Sie die App aus dem Geräte-spezifischen App-Store herunter.

# Fleet
![[icons_odoo_fleet.png]]

Das App dient zur Verwaltung von Fahrzeugen. Es können Fahrzeugdaten, Leasing-Verträge, Servicekosten oder Treibstoffkosten erfasst werden.

## Fahrzeugflotte verwalten

Nach der Installation sind die gängisten Automarken bereits erfasst.
Bei einer Fahrzeugflotte für Lastkraftwagen (LKW) sind die Marken/Lieferanten nicht erfasst. Diese sind noch nachträglich zu erfassen inkl. Logo.

## Treibstoffkosten erfassen

Je erfasstes Fahrzeug kann der Tankvorgang erfasst werden:
- Treibstoffart
- Anzahl Liter
- Preis je Liter
- aktueller Kilometerstand

## Status der Fahrzeuge anzeigen

In der Kanban-Ansicht werden die Stati wie "Verfügbar", "in Wartung" oder "in Betrieb" als Spalten dargestellt und die Fahrzeuge zugeteilt.
# Website
![[icons_odoo_website.png]]

# Studio
![[icons_odoo_web_studio.png]]

# Datenbank Manager
![[icons_odoo_website_version.png]]

Zur Verwaltung der Odoo-Instanzen gibt es ein Datenbank Manager. Dieses Tool erlaubt ein Backup von der Instanz zu erstellen und nach Bedarf wiederherzustellen.

## Backup erstellen

Der Datenbank Manager kann unter der URL `https://$DOMAIN/web/database/manager` aufgerufen werden. Hier werden die Odoo-Instanzen aufgelistet. Beim Klick auf *Backup* wird man aufgefordert das *[[Odoo Master Password|Master Password]]* einzugeben. Nach Eingabe des Password und abschliessen des Dialogs erhält man eine ZIP-Datei zum herunterladen.