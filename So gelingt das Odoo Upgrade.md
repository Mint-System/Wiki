---
draft: true
kind: explain
section: blog
---

Wäre Odoo ein Spiel, dann ist das Odoo Upgrade der Endgegner. 
Odoo Upgrades sind für Unternehmen und Odoo Partner eine grosse Herausforderung.
In vielen Fällen wird sogar auf ein Upgrade verzichtet und so bleibt auf einer alten Odoo Version hängen.
Ein Upgrade spätestens nach 3 Jahren ist ein Muss.
Das ist der aktuelle Lebenszyklus von Odoo.

In diesem Beitrag möchten wir erklären warum Odoo Upgrades eine Herausforderung sind und wie diese gelingen.

## Optionen für ein Upgrade

Jedes Jahr macht Odoo einen neuen Major-Release und stellt gleichzeitig die Upgrade-Skript bereit, um auf die neue Version zu wechseln.

Wie das Odoo Upgrade ausgeführt wird, hängt von gewählten Hosting ab:

- **Odoo.com**: Das Upgrade erfolgt fortlaufend. Auf Odoo.com werden unter dem Jahr Minor-Releases (19.1, 19.2, 19.3, 20.0, 20.1, ...) bereitgestellt. Das Upgrade wird automatisch gemacht.
- **Odoo.sh**: Mit der Upgrade-Funktion kann man einen Branch in den Upgrade-Modus setzen und so den Upgrade-Workflow starten. Das Upgrade wird manuell gemacht.
- **Odoo On-Prem**: Der Systemadministrator stellt die Upgrade-Umgebung bereit und wendet das Upgrade-Skript von Odoo an.

Die Wahl des Hostings hängt Stark von der Anpassbarkeit und Kontrolle über Odoo-Installation ab.
Auf Odoo.com kann man keine Anpassungen oder Module von Dritten installieren.
Auf Odoo.sh ist kann man Anpassungen vornehmen und Module von Dritten installieren. Jedoch nutzt Odoo.sh die Infrastruktur von Google. Damit verliert man die Kontrolle über Daten.
Mit der Odoo On-Prem Option hat man die grösste Freiheit zur Anpassung des Systems. Man trägt aber auch die grösste Verantwortung.

Bei Mint System haben wir uns auf Odoo On-Prem spezialisiert.
Wir hosten Odoo auf Server in unterschiedlichen Umgebungen und an verschiedenen Standorten.
Wir wissen wie die Eingabe auf der Odoo Benutzeroberfläche auf die Festsplatte auf dem Server gelangt. Und vor allem wissen wir wo genau diese Eingaben gespeichert sind.
Dieses Wissen hilft uns bei der Umsetzung von Odoo Upgrades.

## Das Upgrade Projekt

> Kunde und Odoo Partner müssen für ein erfolgreiches Upgrade zusammenarbeiten.

Ein Odoo Upgrade ist nicht einfach eine Aufgabe, sondern ein Projekt. Es braucht ein klare Abgrenzung zu einem bestehenden Odoo-Projekt.

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

Hinter den einzelnen Phase stecken weitere Prozesse und Arbeitsschritte.

## Die Qualität der Module

> Odoo Upgrades scheitern oft an der mangelnden Qualität der Module von Dritten.

Hier wird geprüft ob die Module von Dritten in der neuen Odoo Version funktionieren. 
In dieser Phase zeigt sich auf die Qualität der Softwareentwicklung.
Was guter Odoo-Code ist, ist selbst für erfahrene Softwareentwickler eine Herausforderung.

Als Orientierung für ausgezeichnete Softwareentwicklung in der Odoo Welt steht die [Odoo Community Association](https://odoo-community.org/) (OCA).
Sie verwalten mehrere tausend Module über alle Odoo Versionen hinweg.
Ihre Standards sind höher als die von Odoo selbst.
Gute Odoo-Entwickler kennen die Werkzeuge und Prozesse der OCA.

## Das Drehbuch als Orientierung

> Umfangreiche Upgrade-Projekte brauchen eine klare Struktur. Ein Drehbuch hilft sicherzustellen, dass der Upgrade-Prozess fehlerfrei ausgeführt werden kann.

Die Anwendung der Upgrade-Skripte sind auf Odoo.com automatisiert.
Am Tag X wird man als Anwender von einer neuen Odoo Version Überrascht.
Oft funktionieren dann bestimmte Dinge nicht mehr oder sind an einem anderen Ort zu finden.
Als Anwender ist man gezwungen sich neu zu orientieren.

Auf Odoo.sh und On-Prem steuert man den Upgrade-Prozess selbst.

Hier sind die Vorlage der Drehbücher:

Odoo.sh: [Playbook Upgrade Odoo.sh XX.0](https://wiki.mint-system.ch/playbook-upgrade-odoo.sh-xx.0.html)

On-Prem: [Playbook Upgrade Odoo XX.0](https://wiki.mint-system.ch/playbook-upgrade-odoo-xx.0.html)

Die technischen Arbeitsschritte aus dem Drehbuch basieren auf den Werkzeuge von [Odoo Build - Upgrade](https://odoo.build/upgrade.html).

## Abgrenzung im Testing

> Ein unklare Abgrenzung in der Testphase führt zu einer Verzögerung des Upgrade-Projekts.

In der Testing-Phase steht die Abgrenzung im Zentrum.
Der Kunde muss validieren dass seine Kern-Prozesse in der neuen Odoo-Umgebung einwandfrei funktionieren.

## Das Ziel vor Augen

> Ein Odoo Upgrade ist kein Ergebnis, sondern ein Prozess.

Das Finale des Upgrade-Prozess ist natürlich das produktive Upgrade.
Es ist wichtig zu verstehen, dass ein erfolgreiches produktives Upgrade die Konsequenz aus einem funktionierenden Upgrade-Prozess ist.
Wenn man vertrauen in das Drehbuch hat und dieses mehrfach validieren konnte, dann wird der Raum für Unerwartetes klein.
Unerwartete Probleme wird es beim produktiven Upgrade geben.
Das lässt sich nicht vermeiden. 
Wichtig ist, dass man flexibel genug ist um darauf reagieren zu können.
## Rollback ist eine Option

> Nennen Sie es nicht "Deadline", sondern "Aufführung".

War die Vorbereitung ungenügend und das produktive Upgrade läuft nicht wie geplant, dann braucht es den Mut den Prozess abzubrechen.
Legen Sie ein maximales Zeitfenster zur Durchführung des Upgrades fest und seien Sie konsequent bei der einer Überschreitung.
