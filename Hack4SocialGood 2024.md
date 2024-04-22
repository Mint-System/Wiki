---
tags:
- Asset
---

![[caritas.png]]
# Hack4SocialGood 2024
Die Mint System hat am Hack4SocialGood teilgenommen.


Der [Hack4SocialGood](https://www.zhaw.ch/en/socialwork/hack4socialgood/) ist ein Hackathon, der Menschen aus dem Sozialwesen und der IT zusammenbringt um Lösungen für die Aniegen im Digitalisierungbereicht zu entwickeln. 

Um an einem Hackathon teilzunehmen, muss man kein Softwareentwickler sein. Ziel ist es in einer interdisziplinären Gruppe Lösungen für eine konkrete Challenge zu entwickeln. Dazu hat man 24 Stunden Zeit und darf am Ende des Hackathons die Lösung pitchen.

Beim diesjährigen Hack4SocialGood wurden [11 Challenges angemeldet](https://bd.hack4socialgood.ch/event/6), davon wurden 9 ausgewählt und durchgeführt. Wir haben uns für die Challenge der Caritas ["Von Daten zu Taten"](https://bd.hack4socialgood.ch/project/90) entschieden.

## Challenge

Die Challenges werden in einem bestimmten Format präsentiert. Hier die wichtigsten Punkte der Caritas-Challenge:

Hintergrund:
- Die Caritas ist die grösste Nichtregierungsorganisation der Schweiz, die verschiedene Unterstützungsangebote für armutsbetroffene Menschen bereitstellt. Daten werden in verschiedenen Bereichen erfasst, wie z.B. in Beratungsstellen und Caritas-Märkten, jedoch werden diese bisher kaum systematisch analysiert.

Ziel der Challenge/Vorstellung Endprodukt:
- Ziel ist es, Indikatoren zu entwickeln, Daten zu integrieren und Prognosemodelle zu erstellen, um Armutsbetroffene besser zu unterstützen.
- Entwicklung eines integrierten Prototyps eines Daten-Dashboards, das die verschiedenen Datenbestände der Caritas nutzt, um Einblicke in Tätigkeiten und Bedürfnisse zu ermöglichen.

Zur Verfügung gestellte Daten:
- Daten aus den Caritas Märkten (schweizweit)
- Caritas beider Basel Falldaten aus Sozialberatung

## Team

Für die Challenge haben sich 13 Leute angemeldet. Mit dabei waren Studieren im Bereich Data Science, Forschende in den Sozialwissenschaften, Sozialarbeitende und Softwareentwickler.

![[Hack4SocialGood Team.png]]

Aufgrund der Vielzahl ein Teilnehmenden wurden das Team in zwei Gruppen aufgeteilt. Die eine Gruppe entwickelte eine Konzept für die Analyse und Visualisierung der Daten. Die andere Gruppe programmierte und integrierte technische Systeme um die Anforderungen aus dem Konzept umzusetzen.
## Lösung

Weil die meisten einen Hintergrund in Data Science hatten, war der Einsatz von [Python](https://www.python.org/) und [Jupyter Books](https://jupyter.org/) naheliegend. Ein Problem bei den Jupyter Books ist die Präsentation der Ergebnisse. Es können keine Dokumente oder Websites generiert werden. Im Lösungsfindungsprozess kam dann [Quarto](https://quarto.org/) in Spiel. Damit lassen sich die Anforderungen an Präsentation und Auswertung der Daten verbinden und können an einem Ort programmiert werden.

Die gemeinsame Programmierung der Lösung fand auf GitHub statt. Dazu hatten wir als erstes die Caritas Schweiz als Organisation erfasst: <https://github.com/Caritas-Schweiz> und wurden anschliessend die Repositories  erstellt um den Code zu speichern.

Der Quellcode der Lösung findet man hier: <https://github.com/Caritas-Schweiz/Quarto>

Das Resultat ist eine Website mit Visualisierungen der Daten: <https://caritas-schweiz-reporting.vercel.app/>
## Fazit

Mit der Teilnahme an diesem Hackthon wollten wir einen Beitrag für die Digitalisierung im Sozialwesen leisten. Als kleine Unternehmen ist es eine Herausforderung im Arbeitsalltag neue Technologien und Probleme zu entdecken. Ein Hackathon bietet die perfekten Rahmenbedigungen zur Innvoation. Man ist gefordert kreativ zu sein und muss in kurzer Zeit einen Prototyp erstellen. Das funktioniert nur wenn das Team reibungslos zusammenarbeitet und sich jeder einbringen kann. Schlichtweg ein grossartiges Erlebnis.  