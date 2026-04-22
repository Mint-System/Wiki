---
draft: false
kind: explain
section: blog
title: So gelingt das Odoo Upgrade
---

Wäre Odoo ein Game, dann ist das Odoo Upgrade der Bosskampf. Odoo Upgrades sind für Unternehmen und Odoo Partner eine grosse Herausforderung. In vielen Fällen wird sogar auf ein Upgrade verzichtet und man bleibt auf einer alten Odoo Version hängen.

Jedes Jahr gibt es eine neue Odoo Hauptversion. Nur die letzten [drei Odoo Versionen erhalten Support](https://www.odoo.com/documentation/master/administration/standard_extended_support.html). Ein Upgrade spätestens nach 3 Jahren ist somit ein Muss.

In diesem Beitrag möchten wir erklären warum Odoo Upgrades eine Herausforderung sind und wie diese am besten gelingen.

## Optionen für ein Upgrade

Wie erwähnt macht Odoo jedes Jahr einen neuen Major-Release und stellt gleichzeitig die Upgrade-Skript bereit um auf die neue Version zu wechseln.

Wie das Odoo Upgrade ausgeführt wird, hängt vom gewählten Hosting ab. Hier eine Übersicht zu den Hostings und den Upgrade-Optionen:

- **Odoo.com**: Das Upgrade erfolgt fortlaufend. Auf Odoo.com werden unter dem Jahr Minor-Releases (19.1, 19.2, 19.3, 20.0, 20.1, ...) bereitgestellt. Das Upgrade wird auf verlangen gemacht.
- **Odoo.sh**: Mit der Upgrade-Funktion kann man einen Branch in den Upgrade-Modus setzen und so den Upgrade-Workflow starten. Das Upgrade wird manuell gemacht.
- **Odoo On-Prem**: Der Systemadministrator stellt die Upgrade-Umgebung bereit und wendet die Upgrade-Skripte von Odoo an.

Der Upgrade-Prozess unterscheidet sich auch abhängig von der Edition:

- **Enterprise**: Nur mit Odoo Enterprise erhält man Zugriff auf die [Odoo Upgrade-Skripte](https://upgrade.odoo.com/).
- **Community**: Möchte man eine Odoo Community Datenabnk aktualisieren, ist man auf die Unterstützung eines Odoo Partners, der sich mit dem [OpenUpgrade](https://oca.github.io/OpenUpgrade/) Projekt auskennt, angewiesen.

Die Wahl des Hostings geht vom Bedürfnis zur Anpassbarkeit und Kontrolle des Odoo-System aus. Auf Odoo.com kann man keine komplexen Anpassungen oder Module von Dritten installieren. Auf Odoo.sh lassen sich Anpassungen vornehmen und Module von Dritten installieren. Im Hintergrund nutzt Odoo.sh die Infrastruktur von Google. Damit unterliegen die Datenhoheit und der Datenschutz der amerikanischen Gesetzgebung. Wer hohe Anforderungen an die Sicherheit und Datenschutz hat, erhält mit Odoo On-Prem das höchste Grad an Freiheit zur Anpassung und Kontrolle über das Systems.

Bei Mint System haben wir uns auf Odoo On-Prem spezialisiert. Wir hosten Odoo auf Server in Rechenzentren an verschiedenen Standorten. Wir können feststellen wie die Eingabe auf der Odoo Benutzeroberfläche bis zum Speicher auf der Festsplatte des Servers gelangt. Wir wissen wo genau die Eingaben und Daten gespeichert sind, welche Gesetzgebung dort gilt. Das spannende am On-Prem Hosting, diese Expertise hilft uns bei der Umsetzung von Odoo Upgrades.

## Der Upgrade-Prozess

> Kunde und Odoo Partner müssen für ein erfolgreiches Upgrade eng zusammenarbeiten.

Ein Odoo Upgrade ist nicht einfach eine Aufgabe oder ein Projekt, sondern ein Prozess. Das Resultat des Prozesses ist das Odoo Upgrade. Das wichtig, weil ein Prozess lässt sich nur bedingt "einkaufen". Der Upgrade-Prozess muss in der Organisation des Kunden funktionieren und erfordert die Unterstützung des Odoo Partner.

Den gesamten Upgrade-Prozess haben wir wie folgt dokumentiert:

| Phase                            | Verantwortlich      | Beschreibung                                                                     |
| -------------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Datenbank prüfen                 | Mint System         | Liste der Module von Dritten erstellen.                                          |
| Aufwandsschätzung erstellen      | Mint System         | Anhand Vorlage ein Angebot mit Aufwandsschätzung erstellen.                      |
| Odoo Module migrieren            | Mint System         | Odoo Module auf neue Version migrieren. Funktionale Tests der Module validieren. |
| Upgrade-Umgebung bereitstellen   | Mint System / Kunde | Die Upgrade-Umgebung für Kunde bereitstellen. Upgrade-Drehbuch initialisieren.   |
| Test-Upgrade durchführen         | Mint System         | Upgrade im Testmodus durchführen und auf Upgrade-Umgebung bereitstellen.         |
| Testing asuführen                | Kunde               | Workflows anhand Testfällen prüfen. Feedback erfassen.                           |
| Feedback iterativ verarbeiten    | Mint System / Kunde | Anpassungen gemäss Feedback vornehmen. Drehbuch des Kunden aktualisieren.        |
| Produktives Upgrade freigeben    | Kunde               | Kunde erteilt Freigabe für produktives Upgrade. Termin für Upgrade festlegen.    |
| Produktives Upgrade durchführen  | Mint System         | Gemäss Drehbuch das produktive Upgrade durchführen und validieren.               |
| Produktives Upgrade abschliessen | Mint System / Kunde | Post-Upgrade Fehler melden und korrigieren. Upgrade-Umgebung entfernen.          |

Hinter den einzelnen Phase verbergen sich weitere Prozesse und Arbeitsschritte.

## Die Qualität der Module

> Odoo Upgrades scheitern oft an der mangelnden Qualität der Module von Dritten.

Bei der Migration der Module wird geprüft ob die Module von Dritten in der neuen Odoo Version noch funktionieren. In dieser Phase zeigt sich die Qualität der Softwareentwicklung. Module können mit Sorgfalt und Bedacht programmiert werden, sodass diese in neuen Odoo Versionen noch funktionieren oder nur kleinere Anpassung brauchen. Diese sog. Portabilität von Modulen lässt sich nur schwer messen. Erfahrene Odoo-Entwicklerinnen, welche die Herausforderung von Upgrades kennen, wissen wie man guten Odoo-Code produziert.

Mint System orientiert sicht an der [Odoo Community Association](https://odoo-community.org/) (OCA) als Masststab für ausgezeichnete Softwareentwicklung in der Odoo Welt. Die Mitglieder der OCA verwalten tausende von Odoo Modulen über alle Odoo Versionen hinweg. Ihre Quallitäts-Standards sind höher als die von Odoo Enterprise. Gute Odoo-EntwicklerInnen kennen die Werkzeuge und Prozesse der OCA.

## Das Drehbuch als Orientierung

> Umfangreiche Upgrade-Projekte brauchen eine klare Struktur. Ein Drehbuch hilft sicherzustellen, dass der Upgrade-Prozess fehlerfrei ausgeführt werden kann.

Im Zentrum eines Upgrades steht die Ausführung der Upgrade-Skripte. Diese Skripte passen das Datenbankschema und die Daten auf die gewünschte Odoo Version an. Für Anpassungen und Module von Dritten ist man selber verantwortlich. Nach Ausführung des Upgrade-Skripte muss man die neue Odoo Datenbank prüfen und sicherstellen, dass alles funktioniert. Die Validierung der neuen Odoo Datenbank ist eine anspruchsvolle Aufgabe. Mithilfe eines Drehbuchs kann man die Validierung vereinfachen und sicherstellen dass das produktive Upgrade einwandfrei funktioniert. 

Hier finden Sie die Vorlagen der Drehbücher von Mint System:

- **Odoo.sh**: [Playbook Upgrade Odoo.sh XX.0](https://wiki.mint-system.ch/playbook-upgrade-odoo.sh-xx.0.html)
- **On-Prem**: [Playbook Upgrade Odoo XX.0](https://wiki.mint-system.ch/playbook-upgrade-odoo-xx.0.html)

Die technischen Arbeitsschritte in den Drehbüchern werden mithilfe von [Odoo Build - Upgrade](https://odoo.build/upgrade.html) ausgeführt.

## Abgrenzung im Testing

> Ein unklare Abgrenzung in der Testphase führt zu einer Verzögerung des Upgrade-Projekts.

In der Testing-Phase steht eine klare Abgrenzung im Zentrum. Der Kunde validiert seine Kern-Prozesse in der neuen Odoo-Umgebung und muss sicherstellen, dass diese einwandfrei funktionieren. Nach einem Upgrade sieht und fühlt sich Odoo immer etwas anders an. Es kommen neue Funktionen hinzu oder Workflows von Odoo ändern sich. Daraus entstehen oft neue Wünsche zur Anpassung von Odoo. Es ist entscheident, dass man neue Anforderungen vom Upgrade-Projekt abgrenzt.

## Das Ziel vor Augen

> Ein Odoo Upgrade ist kein Ergebnis, sondern ein Prozess.

Das Finale des Upgrade-Prozesses ist das produktive Upgrade. Es ist wichtig zu verstehen, dass ein erfolgreiches produktives Upgrade die Konsequenz aus einem funktionierenden Upgrade-Prozess ist. Wenn man vertrauen in das Drehbuch hat und dieses mehrmals validieren konnte, dann wird der Raum für Unerwartetes klein. Trotzdem wir es unerwartete Probleme beim produktiven Upgrade geben. Das lässt sich nicht vermeiden. Wichtig ist, dass man flexibel darauf reagieren kann.

## Rollback als Plan B

> Nennen Sie es nicht "Deadline", sondern "Aufführung".

War die Vorbereitung ungenügend und das produktive Upgrade läuft nicht wie erhofft, dann braucht es den Mut abzubrechen und das ein neues Datum für ein erneutes Upgrade zu suchen. Legen Sie ein maximales Zeitfenster zur Durchführung eines Upgrades fest und seien Sie einer Überschreitung konsequent.
