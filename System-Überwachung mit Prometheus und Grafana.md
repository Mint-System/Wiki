---
tags:
- HowTo
---
# Systemüberwachung mit Prometheus und Grafana

Die Mint System bietet für Kunden das Cloud-Hosting [[Mint Cloud]] an. Zum Betrieb werden Server in existieren Rechenzentern gemietet. Der Hosting-Partner stellt sicher, dass die phyischen Server funktionieren und ist für Ausfälle verantwortlich. Für alle Software, die auf dem Server installiert wird, ist jedoch die Mint System verantwortlich. Auch wir müssen sicherstellen, dass die Software einwandfrei funktioniert. Dazu betreiben wir einen Überwachungs- bzw. Monitoringsystem. Dieses meldet uns wenn biespielsweise die Festplatte auf einem Server vollläuft. In diesem Beitrag möchten wir dieses System genauer erklären.

## Architektur

Das Monitoringsystem besteht aus mehreren Bausteinen. Im Kern ist Prometheus. Prometheus ist ein Datenbanksystem und ist speziell gut darin, metrische Daten zu verarbeiten. Mit Grafana werden die Daten visualisiert. Beispielsweise kann man ein Diagramm zur Metrik *Freier Festplattenspeicher* erstellen. Im Weiteren kann man Regeln für Alarme hinzufügen. Erreicht beispielsweise der *Freie Festplattenspeicher* eine bestimmte Zahl, kann man ein Email an den verantwortlichen Techniker versenden.

Diese Grafik gibt eine Übersicht zum den Systembausteinen:

![[Prometheus Grafana.jpeg]]

Auf der linken Seite ist der Server aufgeteilt in weitere Bausteine dargestellt.

### Docker Host

Der Docker Host ist sozusagen der Server. Das Betriebssystem auf dem Server wird hauptsächlich dazu verwendet Docker zu betreiben. Docker erlaubt es uns auf unterschiedlichen Betriebssystemen (Linux, MacOS, Windows) die gleichen Serveranwendung auszuführen.

### Exporter

cAdvisor und Node Exporter sind beides Webserver, die vom physischen Server und von Docker Metriken auslesen. Sie publizieren diese Metriken auf einer Webseite. Prometheus greift alle paar Sekunden auf die Webseite zu und speichert die Metriken.

## Beispiel

Damit man sich das besser vorstellen kann, hier eine kurze Erläuterung.

Die Mint System betreibt einen Linux-Server namens Zeus. Wenn man mit dem Terminal darauf einloggt und den Befehl zum Anzeigen des Festplattenspeichers eingibt, sieht man, dass noch 12 Gigabyte verfügbar sind.

![[Server Festplattenspeicher Beispiel.png]]

Diese Zahl wird in Bytes vom Node-Exporter erfasst und auf einer gesicherten Webseite publiziert.

![[Node-Exporter Beispiel.png]]

Prometheus greift auf die Webseite zu und speichert die Zahl. Mit Grafana kann ich nun die ganze Zahlenreie abrufen und visualisieren.

![[Grafana Monitoring Beispiel.png]]

Damit der Wert nicht in Megabytes angezeigt wird, muss man diesen noch umrechnen.

## Weitere Metriken

Natürlich gibt es noch viele weitere Metriken und Aspekte eines Systems zum Erfassen. Für Anwendungen wie [[BigBlueButton]] oder [[Nextcloud]] werden bestimmte Metriken erfasst. So wissen wir wie viele Benutzer auf einer Nextcloud-Instanz aktiv sind oder wie viele Teilnehmer am letzten online Meeting auf BigBlueButton teilgenommen haben.

> All diese Metriken helfen uns die Vielzahl an Server und Anwendungen zu verstehen und sicherzustellen, dass alles wie erwartet funktioniert.