---
tags:
- Asset
---
![[Banner Hosting SLA.png]]

# Service Level Agreement Hosting
Version: 2023-12-11

Applikationen, die mit [[Mintsys Cloud]] gehostet werden, erhalten die folgenden Garantien:
## Verfügbarkeit

* Wir arbeiten mit verschiedenen Hosting-Anbietern, die immer mindestens 99.9% Verfügbarkeit garantieren. Deshalb garantieren wir eine monatliche Verfügbarkeit von 99.9% für unsere Hosting-Angebote.
* 99.9% monatliche Verfügbarkeit = Maximale ungeplante Ausfallzeit von 45 Minuten pro Monat.
*  In der Regel liefern wir eine viel bessere Betriebszeit als diese (100% in den meisten Monaten), da auch unsere Provider immer eine viel bessere Betriebszeit als ihre SLA liefern.

<small>Diese Metriken beziehen sich auf die Verfügbarkeit der Plattform selbst. Einzelne Datenbanken oder Applikationen können aus bestimmten Gründen vorübergehend nicht verfügbar sein, die in der Regel mit den Aktionen oder Anpassungen des Kunden zusammenhängen. Geplante Wartungsarbeiten finden selten statt, in der Regel einmal im Monat, dauern in der Regel weniger als 1 Stunde und werden ausserhalb der Geschäftszeiten in der Region, in der die Wartung stattfindet, durchgeführt.</small>

## Backup

* Standardmässig werden Dateien und Datenbanken täglich gesichert. Volle Backups werden jeweils die letzten 7 Tage, 4 Wochen und 12 Monate aufbewahrt.
* Der Backup-Server wird täglich auf einen zweiten Standort gespiegelt.
* Backups können jederzeit vom Server heruntergeladen oder an einen dritten Standort kopiert werden.
* Um sicherzustellen, dass im Falle eines Disasters die Wiederherstellung eines Dienstes funktioniert, wird ein "Disaster Recovery Plan" und damit verbundende Szenarien fortlaufend entwickelt.

## Monitoring

* Ressourcen wie Speicherplatz, Arbeitsspeicher oder Rechenleistung des Server und dessen Container werden konstant überwacht.
* Ausgewählte Applikations-Metriken wie beispielsweise die Grösse einer Datenbank oder die Verfügbarkeit einer Website werden ebenso erfasst.
* Überschreiten die Metriken bestimmte Grenzwerte, wird ein Alarm ausgelöst und proaktiv gehandelt.

## Unabhängigkeit

* Der Code zum Aufbau der Infrastruktur und Konfigurationen der Hosting-Dienstleistungen ist Open Source.
* Sie können auf Ende des aktuellen Monat ihr Hosting-Vertrag kündigen und zu einem anderen Anbieter wechseln.
* Daten können jederzeit vollumfänglich als Datenbank- und/oder Datei-Dump exportiert werden.
* Auf Wunsch erhalten Sie SSH-Zugriff auf den Server mit den Hosting-Dienstleistungen.

## Sicherheit

Die Sicherheit Ihrer Daten ist uns sehr wichtig und wir haben unsere Systeme und Verfahren so gestaltet, dass Sie dies gewährleisten. Hier sind einige Highlights:

* **SSL** - Alle Webverbindungen zu Client-Instanzen sind mit 256-Bit-SSL-Verschlüsselung (HTTPS mit einem 2048-Bit-Modul-SSL-Zertifikat) geschützt und laufen hinter SSL-Stacks der Klasse A. Alle unsere Zertifikatsketten verwenden bereits SHA-2.
* **Zuverlässige Plattform** - Server mit voller Hardware-Garantie, redundanter Datenspeicherung, Netzwerk und Stromversorgung.
* **Passwörter** - Kundenpasswörter sind mit SHA512-Verschlüsselung nach Industriestandard geschützt.
* **Sichere Systeme** - Auf unseren Servern laufen aktuelle Linux-Distributionen mit aktuellen Sicherheits-Patches, mit Firewall und Massnahmen gegen Angriffe.
* **Isolierung** - Applikationen werden in speziellen Containern ausgeführt. Keine gemeinsame Nutzung von Daten zwischen Kunden, kein Zugriff von einer Datenbank zur anderen ist möglich.

## Wartung

* Die Server werden regelmässig mit Sicherheitsupdates gepatcht.
* Anwendungen und Dienste werden gemäss Releasezyklus zeitnah aktualisiert.
* Der verfügbare Speicherplatz wird verwaltet und proaktiv erweitert.