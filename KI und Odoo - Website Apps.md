---
section: blog
kind: explain
draft: true
title:
---

Wir und unsere Kunden beschäftigen sich intensiv mit KI-Agenten (LLM-Loops). Wir sehen und erleben wie zeitaufwändige Arbeiten mühelos automatisiert werden. Odoo-Kunden lassen das System von KI-Agenten konfigurieren und erweitern es mit neue Funktionen.

Dass dies unsere bestehenden Implementation-Prozesse auf die Probe stellt muss hier nicht erklärt werden. Wir sehen viele Vorteile in der Arbeit mit KI, aber auch sog. Regressionen. Also Probleme, die gelöst sind, erscheinen wieder in neuer Formen.

KI verändert die Arbeitsweise auf mehreren Ebenen. Organisatorisch, Operativ und Technisch wird gerade einiges in Frage gestellt. Bei Mint System versuchen wir nicht nur Schritt zu halten, sondern wollen auch verstehen wie diese Werkezeuge (Ja es sind immer noch Werkzeuge) konstruriert sind.

## Neue Entwicklung?

Ein Szenario mit dem wir jetzt mehrmals konfrontiert waren ist das folgende:

- Odoo-Kunde vermisst eine Funktionalität in Odoo
- Der Kunde schildert dies einem KI-Agenten
- Der KI-Agent entwickelt eine Lösung und fragt nach den Zugangsdaten des Kunden
- Der Kunde stellt diese zur Verfügung und er Agent installiert die Lösung auf der Odoo-Umgebung
- Der Kunde validiert die Lösung

Die hier beschriebene Lösung kann eine Anpassung einem Bericht sein oder eine neues Modul. Nun bleiben bei diesem Vorgehen einige Punkte unkgelärt:

- Reproduzierbarkeit: Wo wird der Quellcode der Anpassung gespeichert?
- Integrität: Ist sichergsetellt, dass die Anpassung ungewollte Nebenwirkuingen hat?
- Verantwortung: Wer gibt Antwort, wenn die Lösung nicht korrekt funktioniert?
- Beratung: Ist das die beste Lösung?

Für die genannten Punkte gibt es in der Softwareentwicklung bereits Lösungen und Best Practices.

## Einzelkämpfer oder Team?

Bevor wir einen besseren Ansatz präsentieren, müssen wir aber noch einen wichtige Aussage klären: KI macht die Prozesse effizienter als Einzelkämpfer, aber nicht als Team.

Wir begegenen nur wenigen Beispielen wo der Einsatz von KI die Abläufe in einem Team oder Organisation effizienter gemacht. Oft sind jene, die von der KI schwärmen Einzelkämpfer.

Der Einsatz von KI in Organisation führt oft zu einer Verlagerung der Kosten. Ein Einzelner kann viel neue Inhalte (Code, Bilder, Dokumente, Texte, ...) generieren, aber nur wenige können das konsumieren (Lesen, Prüfen, Validieren, ...). Diese Diskrepanz gab es schon immer, verstärkt sich jedoch mit Ki ungemein.

## Odoo Website Apps

Nun Zurück zu unserem Szenario. Wie gesagt haben wir paar offene Punkte (Reproduzierbarkeit, Integrität, Verantwortung, Beratung) und müssen klären wie das besser geht.

Dass man selbständig Odoo nach seinen Bedürfnissen anpassen möchte, finden wir total legitim. Damit die Verfügbarkeit des System nicht gefährdet wird, lohnt sich ein systematisches Vorgehen.

### Problemstellung

Wir zeigen den Lösungsansatz anhand folgenden Beispiel: Wir erhalten von Lieferanten jeden Monat eine Preisliste und möchten diese in Odoo importieren. Irgendwie müssen die bestehende und neue Produkte erkannt und mit den Preisen der Liste verbunden werden. Mit Excel und Formeln wäre das irgendwie möglich.

### Recherche

Als erstes machen wir eine Recherche. Es kann gut sein, dass das Problem bereits in der Odoo Gemeinschaft gelöst wurde. Auch hier können KI-Agenten helfen. Instruiere Sie eine Websuche zu machen.

### Spezifikation

Wir haben keine existierende Lösung für unser Problem gefunden und möchten eine Anpassung an Odoo vornehmen.

In unseren KI-gestützen Entwicklungsprozessen starten wir immer mit einer Prompt-Datei. In dieser Datei beschreiben wir was das Problem ist und wie Lösung aussehen soll. Ein Beispiel:

```markdown

```


