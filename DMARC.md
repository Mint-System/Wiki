---
tags:
- Definition
---
# DMARC

DMARC steht für „Domain-based Message Authentification, Reporting and Conformance“. Es wurde zur Reduzierung von E-Mail-Missbrauch entwickelt. Diese Technologie setzt hierbei auf die Spezifikationen für DKIM (Domain Keys Identified Mail) und SPF (Sender Policy Framework).

Mithilfe der DMARC-Richtlinie können Sie angeben, dass Ihre E-Mails mithilfe der Verfahren SPF (Sender Policy Framework) und DKIM (DomainKeys Identified Mail) geschützt werden. Darüber hinaus können Sie mit dieser Richtlinie definieren, wie der Empfänger abhängig von den Ergebnissen der DKIM- und SPF-Prüfung E-Mail-Nachrichten behandeln und Sie als Domaininhaber über Missbrauch informieren soll.

DMARC-Richtlinien werden in Form eines TXT-Records hinzugefügt. Dieser Eintrag wird DMARC-Record genannt. Dieser wird mit dem Subdomain-Namen _dmarc angelegt (z. B. \_dmarc.example.com). Der Inhalt des TXT-Records besteht aus Tags, die mithilfe von Semikolons getrennt werden.

Beispiel:

`v=DMARC1;p=reject;pct=100;rua=mailto:postmaster@example.com`

![[DMARC Process.png]]