# Nextcloud Handbuch

![[Nextcloud Logo.png]]

## Einloggen mit GitLab

Mit dem [[Nextcloud Social Login]] können sie ganz einfach mit einem bestehenden GitLab-Account in Nextcloud einloggen. Sofern sie Mitglied in einer registrierten GitLab-Gruppe sind, wird die Mitgliedschaft übertragen und Zugriff auf Ordner mit dieser Gruppe werden freigegeben. 

![[Einloggen mit GitLab.gif]]

## Infomaniak-Mail einrichten

Die Verbindung mit Infomaniak-Mail ist kinderleicht. Im Anmeldefenster des Mail-Clients können sie die Anmeldeinformationen zum Postfach eingeben. Nextcloud erkennt automatisch wo ihr Postfach gespeichert ist.

![[Anmeldung Infomaniak Postfach.png]]

## Kalender einrichten

In der Kalender-App von Nextcloud speichern sie ihre Termine. Im Vergleich zur Mail-App können ihre externe Kalender nur read-only eingebunden werden.

## Informaniak-Kalender importieren

Den Kalender von Infomaniak können sie ganz einfach als `.ics`-Datei exportieren und in Nextcloud importieren.

![[Calendar Import.png]]

## Infomaniak-Kontakte importieren

Die Kontakte von Infomaniak können sie ganz einfach als `.vcf`-Datei exportieren und in Nextcloud importieren.

## Kalender abonnieren

Bei Google Calendar, Office 365 und vielen anderen Groupware-Anbieter können Kalender im iCal-Format als Link geteilt werden. In Nextcloud kann man diesen Link  hinzufügen und hat so den Kalender als read-only an einem zentralen Ort.

![[iCal Link.png]]

## Nextcloud Kalender und Kontakte mit iOS synchronisieren

Damit sie ihre Termine und Kontate von Nextcloud auf ihr iOS-Gerät synchronisieiren können, gibt es von Nextcloud ein offizielle Dokumentation: <https://docs.nextcloud.com/server/19/user_manual/pim/sync_ios.html>

## OnlyOffice Dokumentvorlage hinzufügen

Navigieren sie nach *Einstellungen > Verwaltung > ONLYOFFICE > Gemeinsame Vorlagen*. Fügen sie hier Dokumente hinzu. Diese stehen anschliessen beim Erstellen eines Dokuments mit OnlyOffice zur Verfügung.

## Ordner Nextcloud-übergreifend teilen

Ordner und Dateien können nicht nur innerhalb von Nextcloud und mit den Teilen-Links nach Extern geteilt werden, sondern auch mit anderen Nextcloud-Installation.

Damit sie einen Ordner oder Datei mit jemanden auf einer anderen Nextcloud-Installation teilen können, brauchen sie deren *Federated-Cloud-ID*. Diese findet man unter *Einstellungen > Persönlich > Teilen > Federated Cloud*, sie können sie direkt kopieren und zum Versender zustellen.

Der Empfänger teilt den Ordner oder Datei wie gewohnt, jedoch wählt er den zweiten Vorschlag bei der Eingabe der ID:

![[Nextcloud Federated Sharing.png]]

Der Empfänger erhält in Nextcloud eine Nachricht mit der Aufforderung den geteilten Ordner oder Datei zu bestätigen.