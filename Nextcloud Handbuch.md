---
title: Nextcloud Handbuch
kind: howto
section: handbook
---

![[Nextcloud Logo.png]]

[[TOC]]

## Login

### Einloggen mit GitLab

Mit dem [[Nextcloud App Social Login]] können Sie ganz einfach mit einem bestehenden GitLab-Account in Nextcloud einloggen. Sofern Sie Mitglied in einer registrierten GitLab-Gruppe sind, wird die Mitgliedschaft übertragen und Zugriff auf Ordner mit dieser Gruppe werden freigegeben.

![[Einloggen mit GitLab.gif]]

### 2-Faktor-Authentisierung aktivieren

Aktivieren Sie einen Provider für die 2-Faktor-Authentisierung wie zum Beispiel den [[Nextcloud App Two-Factor TOTP Provider]].

Navigiere als Administrator nach _Verwaltungseinstellungen > Sicherheit_ und aktivieren die 2-Faktor-Authentisierung. Wähle als erzwungene Gruppe die Administratoren-Gruppe aus.

### 2-Faktor-Authentisierung TOTP einrichten

Als Benutzer navigierst du nach _Persönliche Einstellungen > Sicherheit_. Aktivere die Option _TOTP (Authenticator app)_

## E-Mail

### Infomaniak-Mail einrichten

Die Verbindung mit Infomaniak-Mail ist kinderleicht. Im Anmeldefenster des Mail-Clients können Sie die Anmeldeinformationen zum Postfach eingeben. Nextcloud erkennt automatisch wo ihr Postfach gespeichert ist.

![[Anmeldung Infomaniak Postfach.png]]

## Kalender

### Kalender einrichten

In der Kalender-App von Nextcloud speichern Sie ihre Termine. Im Vergleich zur Mail-App können ihre externe Kalender nur read-only eingebunden werden.

### Informaniak-Kalender importieren

Den Kalender von Infomaniak können Sie ganz einfach als `.ics`-Datei exportieren und in Nextcloud importieren.

![[Calendar Import.png]]

### Infomaniak-Kontakte importieren

Die Kontakte von Infomaniak können Sie ganz einfach als `.vcf`-Datei exportieren und in Nextcloud importieren.

### Kalender abonnieren

Bei Google Calendar, Office 365 und vielen anderen Groupware-Anbieter können Kalender im iCal-Format als Link geteilt werden. In Nextcloud kann man diesen Link hinzufügen und hat so den Kalender als read-only an einem zentralen Ort.

![[iCal Link.png]]

### Nextcloud Kalender und Kontakte mit iOS synchronisieren

Damit Sie ihre Termine und Kontate von Nextcloud auf ihr iOS-Gerät synchronisieiren können, gibt es von Nextcloud ein offizielle Dokumentation: <https://docs.nextcloud.com/server/19/user_manual/pim/sync_ios.html>

## Office

### OnlyOffice Dokumentvorlage hinzufügen

Navigieren Sie nach _Einstellungen > Verwaltung > ONLYOFFICE > Gemeinsame Vorlagen_. Fügen Sie hier Dokumente hinzu. Diese stehen anschliessen beim Erstellen eines Dokuments mit OnlyOffice zur Verfügung.

## Teilen

### Ordner Nextcloud-übergreifend teilen

Ordner und Dateien können nicht nur innerhalb von Nextcloud und mit den Teilen-Links nach Extern geteilt werden, sondern auch mit anderen Nextcloud-Installation.

Damit Sie einen Ordner oder Datei mit jemanden auf einer anderen Nextcloud-Installation teilen können, brauchen Sie deren _Federated-Cloud-ID_. Diese findet man unter _Einstellungen > Persönlich > Teilen > Federated Cloud_, Sie können Sie direkt kopieren und zum Versender zustellen.

Der Empfänger teilt den Ordner oder Datei wie gewohnt, jedoch wählt er den zweiten Vorschlag bei der Eingabe der ID:

![[Nextcloud Federated Sharing.png]]

Der Empfänger erhält in Nextcloud eine Nachricht mit der Aufforderung den geteilten Ordner oder Datei zu bestätigen.

### Weiterteilen erlauben

Wenn Sie einen Ordner einem Benutzer oder einer Gruppe freigeben, können Sie den Berechtigten das _Weiterteilen_ erlauben.

![[Nextcloud Weiterteilen erlauben.png]]

## Berechtigungen

### Gruppenadministrator definieren

Über die Benutzerverwaltung _Benutzer > Aktive Benutzer_ können Sie einen Benutzer zum Gruppenadministrator für eine Benutzergruppe ernennen. Fügen Sie dazu in der Spalte _Gruppenadministrator für_ ganz einfach die entsprechenden Gruppen hinzu:

![[Nextcloud Gruppenadministrator.png]]

## Benachrichtigungen

### Benachrichtigungen ausschalten

Öffne _Administrationseinstellungen > Aktivität_ und deaktiviere die Option _Benachrichtigungs-E-Mails einschalten_.