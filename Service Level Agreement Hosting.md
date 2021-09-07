# Service Level Agreement Hosting
Applikationen, die mit [[Mintsys Cloud]] gehostet werden, erhalten die folgenden Garantien:

## Verfügbarkeit

* Wir arbeiten mit verschiedenen Hosting-Anbieter, die immer mindestens 99.9% Verfügbarkeit garantieren. Deshalb garantieren wir eine monatliche Verfügbarkeit von 99.9 % für unsere Hosting-Angebote.
* 99.9% monatliche Verfügbarkeit = Maximale ungeplante Ausfallzeit von 45 Minuten pro Monat.
*  In der Regel liefern wir eine viel bessere Betriebszeit als diese (100% in den meisten Monaten), da auch unsere Provider immer eine viel bessere Betriebszeit als ihre SLA liefern.

<small>Diese Metriken beziehen sich auf die Verfügbarkeit der Plattform selbst für alle Kunden. Einzelne Datenbanken oder Applikationen können aus bestimmten Gründen vorübergehend nicht verfügbar sein, die in der Regel mit den Aktionen oder Anpassungen des Kunden zusammenhängen. Geplante Wartungsarbeiten finden selten statt, in der Regel einmal im Monat, dauern in der Regel weniger als 1 Stunde und werden außerhalb der Geschäftszeiten in der Region, in der die Wartung stattfindet, durchgeführt.</small>

## Backup

* Standardmässig werden Dateien und Datenbanken täglich gesichert, dabei werden volle Backups jeweils die letzten 12 Monate, 4 Wochen und 7 Tage aufbewahrt.
* Der Backup-Server wird täglich auf einen zweiten Standort gespiegelt.
* Backups können jederzeit vom Server heruntergeladen oder regelmässig an einen dritten Standort kopiert werden.

## Unabhängigkeit

* Der Code zum Aufbau der Infrastruktur und Konfigurationen der Hosting-Dienstleistungen ist Open Source.
* Sie können auf Ende des aktuellen Monat ihr Hosting-Vertrag kündigen und zu einem Dritt-Anbieter wechseln.
* Daten können jederzeit vollumfänglich als Datenbank- und/oder Datei-Dump exportiert werden.
* Auf Wunsch erhalten sie SSH-Zugriff auf den Server mit den Hosting-Dienstleistungen

## Sicherheit

Die Sicherheit Ihrer Daten ist uns sehr wichtig, und wir haben unsere Systeme und Verfahren so gestaltet, dass sie dies gewährleisten. Hier sind einige Highlights:

* **SSL** - Alle Webverbindungen zu Client-Instanzen sind mit 256-Bit-SSL-Verschlüsselung (HTTPS mit einem 2048-Bit-Modul-SSL-Zertifikat) geschützt und laufen hinter SSL-Stacks der Klasse A. Alle unsere Zertifikatsketten verwenden bereits SHA-2.
* **Zuverlässige Plattform** - Server mit voller Hardware-Garantie, redundanter Datenspeicherung, Netzwerk und Stromversorgung.
* **Passwörter** - Kundenpasswörter sind mit SHA512-Verschlüsselung nach Industriestandard geschützt.
* **Sichere Systeme** - Auf unseren Servern laufen aktuelle Linux-Distributionen mit aktuellen Sicherheits-Patches, mit Firewall und Maßnahmen gegen Angriffe.
* **Isolierung** - Applikationen werden in speziellen Container ausgeführt - keine gemeinsame Nutzung von Daten zwischen Kunden, kein Zugriff von einer Datenbank zur anderen is möglich.