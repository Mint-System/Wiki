---
tags:
- Asset
---
# Odoo Customizing ohne unvorhergesehene Upgradekosten
Jede Anpassung in Odoo birgt ein Risiko für unvorgesehene Upgradekosten.

Der folgende Artikel beschreibt, wie wir als Integratoren das Odoo-System den Bedürfnissen des Kunden anpassen und gleichzeitig sicherstellen, dass in Zukunft keine funktionalen Einschränkungen oder Regressionen entstehen.

Eine Regression im Kontext der Softwareentwicklung bezieht sich auf einen Fehler in einem Feature. Dazu ein Beispiel: Das Feature *Login mit Google-Account* hat vor der Aktualisierung der Systemumgebung funktioniert, danach nicht mehr. Es ist ein Bug entstanden, ohne dass am Softwarecode des Features etwas geändert wurde.

Diese Art von Fehler möchte man auf jeden Fall vermeiden. Falls er trotzdem auftritt, möchte man ihn schnell beheben können. Dieses Problemszenario lässt sich verallgemeinern. Als Odoo-Integratoren müssen wir sicherstellen, dass jede Änderung die wir heute an einer Odoo-Installation vornehmen, in Zukunft so wenig Fehler wie möglich verursacht.

Es ist natürlich schwierig abzuschätzen, wie sich eine Software in Zukunft verändert. Dennoch lassen sich paar wichtige Prinzipien definieren um diese Art von Problemen zu vermeiden.

### Kurze Releasezyklen fahren

![[004-clock.png]]

Odoo veröffentlicht alle paar Tage eine neue Version der Software. Damit kommen laufend neue Funktionen und Verbesserungen dazu. Damit wir den Anschluss nicht verpassen, versuchen wir so oft wie möglich die Odoo-Installationen zu aktualisieren.

### Wiederverwenden statt entwickeln

![[001-reuse.png]]

Bei einer neuen Anforderung für eine Anpassungen, die Odoo out-of-the-box nicht liefert, prüfen wir bei der Odoo Community und bei Partnern, ob eine ähnliche Anpassung bereits umgesetzt wurde. Eine Entwicklung hat mehr Bedeutung, wenn Sie von weiteren Odoo-Installationen verwendet wird.

### So wenig wie möglich verändern

![[003-minus.png]]

Bei jeder Anpassung wollen wir wissen, ob das Kosten-Nutzen-Verhältnis stimmt. Oft wird die Software den individuellen Bedürfnissen angepasst und man vergisst dabei den gesamten Kontext. Eine Anpassung am System muss sich immer für alle Anwender lohnen.

### Visuelle Änderungen vorziehen

![[002-ux.png]]

Anpassungen der Benutzeroberfläche sind günstiger in der Wartung, weil Sie weiter weg vom Kern des System sind. Visuelle Änderungen beziehen sich im Normalfall auf die bestehende Datenstruktur und haben dadurch eine geringe Integrationstiefe.

### Verberbungssystem nutzen

![[007-shapes.png]]

Odoo verfügt über ein ausgeklügeltes Vererbungssystem. Das heisst jede Anpassung einer Ansicht oder einem Geschäftsobjekt kann so formuliert werden, dass Sie sich immer auf eine bestehende Ansicht oder Objekt bezieht. Man überschreibt also nie den bestehenden Code, sondern erweitert diesen um die neue Funktion.

### Änderungen am System dokumentieren

![[005-paper.png]]

Alle Anpassungen an einer Odoo-Installation werden dokumentiert. Das macht es einfacher für Dritte nachzuvollziehen, was bei der Entwicklung von neuen Erweiterungen (und insbesondere Systemupgrades) beachtet werden muss.

### Erweiterungen modular halten

![[006-construction.png]]

Erweiterungen lassen sich entweder zusammenfassen oder aufteilen und dadurch erstellt oder vermeidet man Abhängigkeiten zwischen den Erweiterungen. Die Philosophie von Odoo sieht vor, dass man Erweiterungen so klein wie möglich hält. Das heisst Abhängigkeiten zischen Odoo-Modulen gilt es zu vermeiden.
