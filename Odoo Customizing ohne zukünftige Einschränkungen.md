# Odoo Customizing ohne zukünftige Einschränkungen
Wie man eine Software so anpasst,  dass man zukünfigte Upgradekosten einsparrt.

Wir möchten einen Einblick geben, wie wir als Integratoren das Odoo-System den Bedürfnissen des Kunden anpassen und sicherstellen, dass in Zukunft keine funktionalen Einschränkungen oder Regressionen entstehen.

Eine Regression in Kontext der Softwareentwicklung bezieht sich auf einen Fehler in einem Softwarefeature. Das Feature hat beispielsweise vor der Aktualisierung der Systemumgebung funktioniert, aber nachher nicht mehr. Es ist ein Bug entstanden, ohne, dass am Softwareode etwas geändert wurde.

Diese Art von Fehler möchte man auf jeden Fall vermeiden und falls er doch Eintritt möchte man ihn schnell behben können. Dieses Problemszenario lässt sich verallgemeinern. Als Odoo-Integratoren müssen wir sicherstellen, dass jede Änderungen, die wir heute an einer Odoo-Installation vornehmen in Zukunft so wenig Fehler wie möglich verursacht.

Es ist sehr schwierig abzuschätzen wie sich eine Software in Zukunft verändert, dennoch lassen sich paar wichtige Prinzipien definieren um diese Art von Problemen zu vermeiden.

### Kurze Releasezyklen fahren

![[004-clock.png]]

Odoo veröffentlich alle paar Tage eine neue Version der Software. Es kommen laufend neue Funktionen und Verbesserungen dazu. Damit wir den Anschluss nicht verpassen, versuchen wir so oft wie möglich die Odoo-Installation zu aktualisieren.

### Wiederverwenden statt entwickeln

![[001-reuse.png]]

Bei einer neuen Anforderung für eine Anpassungen, die Odoo out-of-the-box nicht leistet, prüfen wir in einerseits in Odoo Community und bei Partner, ob eine ähnliche Anpassung bereits umgesetzt wurde. Eine Entwicklung hat mehr Bedeutung, wenn diese von weiteren Odoo-Installationen genutzt wird.

### So wenig wie möglich verändern

![[003-minus.png]]

Bei jeder Anpassung wollen wir wissen, ob das Kosten-Nutzen-Verhältnis stimmt. Oft wird die Software den individuellen Bedürfnissen angepasst und man vergisst dabei den grösseren Kontext. Eine Anpassung am System muss immer wirtschaftlich sein.

### Visuelle Änderungen vorziehen

![[002-ux.png]]

Anpassungen der Benutzeroberfläche sind günstiger in der Wartung, weil sie weiter weg vom Kern des System sind. Visuelle Änderungen beziehen sich im Normalfall auf die bestehende Datenstruktur und haben dadurch eine geringe Integrationstiefe.

### Verberbungssystem nutzen

![[007-shapes.png]]

Odoo verfügt über ein ausgeklügeltes Vererbungssystem. Das heisst jede Anpassung an einer Ansicht oder einem Geschäftsobjekt kann so forumliert werden, dass sie sich immer auf eine bestehende Ansicht oder Objekt bezieht. Man überschreibt also nie den bestehenden Odoo-Code, sondern erweitert diesen um die gewünschte Anpassung.

### Änderungen am System dokumentieren

![[005-paper.png]]

Alle Anpassungen an einer Odoo-Installation werden dokumentiert. Das macht es einfacher für Dritte nachvollzuziehen, was bei neuen Erweiterungen und insbesondere Systemupgrades beachtet werden muss.

### Erweiterungen modular halten

![[006-construction.png]]

Erweiterungen lassen sich entweder zusammenfassen oder aufteilen und dadurch können Abhängigkeiten entstehen oder vermieden werden. Die Philosophie von Odoo sieht vor, dass man Erweiterungen so modular wie möglich hält. Das heisst Abhängigkeiten zischen Odoo-Modulen gilt es zu vermeiden.