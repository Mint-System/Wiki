---
section: blog
kind: explain
draft: true
---

> Wie sie für Odoo eigene Apps mit Hilfe einer KI entwickeln können.

Wir und unsere Kunden beschäftigen sich intensiv mit KI-Agenten (LLM-Loops). Wir sehen und erleben wie zeitaufwändige Arbeiten mühelos automatisiert werden. Odoo-Kunden lassen das System von KI-Agenten konfigurieren und erweitern es mit neue Funktionen.

Dass dies unsere bestehenden Implementation-Prozesse auf die Probe stellt muss hier nicht erklärt werden. Wir sehen viele Vorteile in der Arbeit mit KI, aber auch sog. Regressionen. Also Probleme, die gelöst sind, erscheinen wieder in neuer Formen.

KI verändert die Arbeitsweise auf mehreren Ebenen. Organisatorisch, Operativ und Technisch wird gerade einiges auf den Kopf gestellt. Bei Mint System versuchen wir nicht nur Schritt zu halten, sondern wollen auch verstehen wie diese Werkzeuge (Ja es sind immer noch Werkzeuge) funktionieren und wie wir sie gestalten können.

## Neue Entwicklung?

Eine Situation mit dem wir jetzt mehrmals konfrontiert waren ist die folgende:

- Odoo-Kunde vermisst eine Funktionalität in Odoo
- Der Kunde schildert das Problem einem KI-Agenten
- Der KI-Agent entwickelt eine Lösung und fragt nach den Zugangsdaten des Kunden
- Der Kunde stellt diese zur Verfügung und er Agent installiert die Lösung auf der Odoo-Umgebung
- Der Kunde validiert die Lösung?

Die hier beschriebene Lösung kann eine Anpassung an einem Bericht oder eine neues Odoo Modul sein. Nun bleiben bei diesem Vorgehen einige Punkte ungeklärt:

- **Reproduzierbarkeit**: Wo wird der Quellcode der Anpassung gespeichert?
- **Upgrade-fähig**: Wir wird sichergestellt, dass die Lösung nach einem Odoo Upgrade funktioniert?
- **Verantwortung**: Wer gibt Antwort, wenn die Lösung nicht korrekt funktioniert?
- **Recherche**: Ist das die beste Lösung? Kann man das Problem mit Bord-Mittel lösen?

Für die hier genannten Punkte gibt es in der Softwareentwicklung bereits Prozesse und Best Practices.

## Einzelkämpfer oder Team?

Der Einsatz von KI in Organisation führt oft zu einer Verlagerung der Kosten. Ein Einzelner kann viel neue Inhalte (Code, Bilder, Dokumente, Texte, ...) generieren, aber nur wenige können das konsumieren (Lesen, Prüfen, Validieren, ...). Diese Diskrepanz gab es schon immer, verstärkt sich jedoch mit KI ungemein.

Oft sind jene, die von der KI schwärmen Einzelkämpfer. Sie tragen ausschliesslich Eigenverantwortung. In bestimmten Organisation mag das funktionieren, in den meisten aber nicht. Gerade wenn man im Team arbeitet, muss sichergestellt, dass der Effizienzgewinn durch KI nicht auf der Strecke bleibt.

## Odoo Website Apps

Nun Zurück zu unserem Szenario. Wie gesagt haben wir paar offene Punkte (Reproduzierbarkeit, Upgrade-fähig, Verantwortung, Recherche) und müssen klären wie das besser geht.

Dass man selbständig Odoo nach seinen Bedürfnissen anpassen möchte, finden wir total legitim. Damit die Verfügbarkeit des System nicht gefährdet wird, lohnt sich ein systematisches Vorgehen.

### Beispiel

Wir zeigen den Lösungsansatz anhand folgenden Beispiel: Wir erhalten von Lieferanten jeden Monat eine Preisliste und möchten diese in Odoo importieren. Irgendwie müssen die bestehende und neue Produkte erkannt und mit den Preisen der Liste verbunden werden. Mit Excel und Formeln wäre das irgendwie möglich.

#### Recherchieren

Als erstes empfehlen wir eine Recherche. Es kann gut sein, dass das Problem bereits in der Odoo Gemeinschaft gelöst wurde. Auch hier können KI-Agenten helfen. Instruiere Sie diese eine Websuche zu machen.

Oder hacken Sie bei ihrem Odoo-Partner nach. Diese sollte eine Einschätzung geben können und nutzt ja die Möglichkeiten von LLMs selbst auch.

#### Spezifizieren

Wir haben keine existierende Lösung für unser Problem gefunden und möchten eine Anpassung an Odoo vornehmen.

In unseren KI-gestützten Entwicklungsprozessen starten wir immer mit einer Prompt-Datei. In dieser Datei beschreiben wir was das Problem ist und wie Lösung aussehen soll. Ein Beispiel:

````markdown
Every month I receive a pricelist from a Vendor and would like to import it into Odoo.

Please create an Odoo Website App (HTML/CSS/JavaScript) that helps importing the pricelist into Odoo.

### Access 

My Odoo instance is running at:

Url: http://localhost:8069  
Database: 19.0  
Username: admin  
Password: admin  

I have installed the `website` module.

### Pricelist App

Create an HTML/CSS/JavaScript-App and create a script to embed it on the Odoo website.

The app allows me to upload a pricelist in the format of `input/vendor_pricelist.csv`. Here is an example:

```csv
sku,product,price,currency
P001,Table,100,CHF
P002,Chair,50,CHF
P003,Desk,75,CHF
```

Create an Odoo website page "Pricelist Importer" and embed the Code on this page.

After the import the app must show a summary.
````

#### Implementieren

Nun haben wir eine klare Vorstellung was die neue App leisten soll. Mithilfe eines Agenten lassen wir die Spezifikation umsetzen.

#### Prüfen

Sobald der Agent sein Ziel erreicht hat, ist es wichtig das Ergebnis zu prüfen. Man sollte dem Resultat nicht blind vertrauen. Eine Prüfung des generierten Codes, auch wenn man diesen einfach überfliegt, ist schon viel wert. Eine Schlüsselfrage, die man sich hier stellen kann, ist: Habe ich eine Antwort, wenn jemand fragt, was die App macht?

Angeommen wir sind zufrieden mit dem Ergebnis, dann einchecken wir den Code in ein Git-Repository ein.. Hier das Ergebnis des vorhergehenden Beispiels: <https://github.com/Mint-System/Demo-Odoo-Website-App>

### Demo

Damit es nicht nur bei Text bleibt, hier ein paar Screenshots des Results aus unserem Beispiel.

Auf einer neuen Odoo-Umgebung kann die Website-App mit einem Befehl bereitgestellt werden: 

```bash
[main][~/demo-odoo-website-apps]$ t publish-pricelist-importer
Publishing pricelist importer page to Odoo website ...
Authenticated as user 2 on http://localhost:8069 (db 19.0)
Created page /pricelist-importer (page #9, view #2324).
Open http://localhost:8069/pricelist-importer
```

Und hier einzelnen Arbeitsschritte vom Upload bis zur Zusammenfassung:

![[pricelist-importer_01-upload.png]]

![[pricelist-importer_02-preview.png]]

![[pricelist-importer_03-progress.png]]

![[pricelist-importer_04-summary.png]]