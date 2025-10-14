---
tags:
  - Blog
draft: false
kind:
  - explain
section: blog
---

# Spam reduzieren mit SPF, DKIM und DMARC

Mit diesem Beitrag möchten wir einen Einblick in eine komplexe Thematik geben: Spam.

Spam verursacht tagtäglich Kosten in Miliardenhöhe. E-Mail-Server werden geflutet, Mails landen fälschlicherweise im Spamordner und unerfahrene Anwender werden mit Mails "gefischt". Ebenso viele Massnahmen gibt es dagegen. Gerade aktuell ist SPF, DKIM und DMARC. Jeder Administrator sollte diese kryptischen Begriffe kennen.

## Versand und Empfang von E-Mails

Beim Klick auf Versenden im E-Mail-Programm passiert im Normalfall Folgendes:

![[Mail Versand mit SMTP und IMAP.png]]

1. Mail-Programm übermittelt Nachricht an Mail-Server (SMTP-Protokoll)
2. Mail-Server prüft den Empfänger und sucht den Empfänger-Mail-Server (DNS-Protokoll)
3. Wurde der Empfänger-Mail-Server gefunden, wird die Nachricht verschickt (SMTP-Protokoll)
4. Empfänger-Mail-Server legt Mail in Postfach des Empfängers ab
5. Mail-Programm des Empfängers aktualisiert die Übersicht der Mails

Die Filterung von Spam-Nachrichten erfolgt im Schritt 3. Der Mail-Server prüft eingehende Nachrichten nach bestimmten Stichwörtern Dabei kann es passieren, dass eine valide Mail als Spam klassifiziert wird und umgekehrt eine Spam-Mail als valide deklariert wird. Doch es gibt einen weiteren wichtigen Check. Dazu folgende Einstiegsfrage:

> Wie weiss der empfangende Mail-Server, dass der Absender der Nachricht wirklich vom versendenden Mail-Server verschicken darf?

Angenommen wir haben die Mail-Adresse `info@example.com`, dann heisst das, meine Organisation ist im Besitz der Domain `example.com` und ich darf unter dieser Domain E-Mails versenden und empfangen. Damit der empfangende Mail-Server überprüfen kann ob man wirklich der Besitzer dieser Domain ist und E-Mails versenden darf, braucht es eine Reihe von Checks: SPF, DKIM und DMARC

## SPF

![[Infografik SPF.png]]

Das Sender Policy Framework (SPF) unterbindet das E-Mails von einem nicht legitimierten Mail Transfer Agent (MTA) versendet werden. Der empfangende Mail-Server kann überprüfen, ob der MTA unter einer bestimmten Domäne Mails versenden darf.

**Implementation**

Für jeden MTA stellt man einen spezifischen DNS-Eintrag zur Verfügung. Dieser SPF-Eintrag enthält die Adresse des MTA und weist darauf hin, dass es Richtlinien zur Verarbeitung der Mails gibt.

## DKIM

![[Infografik DKIM.png]]

DomainKeys Identified Mail (DKIM) funktioniert ähnlich wie SPF. Jedoch wird nicht der Mail Transfer Agent (MTS) geprüft, sondern der Absender des Mails. Mit DKIM werden alle ausgehenden Mails signiert. Der empfangende Mail-Server kann diese Signatur überprüfen.

**Implementation**

Für jede Applikation die eine E-Mail signiert, stell einen öffentlichen Schlüssen für eine bestimmte DNS-Adresse zur Verfügung. Als Administrator kopiert man den öffentlichen Schlüssel und erstellt einen DNS-Eintrag für die Adresse bereit.

## DMARC

DMARC steht für Domain-based Message Authentication, Reporting & Conformance. Es bestimmt wie ein E-Mail-Versand authentisiert, protokolliert und verarbeitet wird. DMARC beinhaltet SPF und DKIM.

![[Infografik DMARC.png]]

**Implementation**

Als Administrator des Mail-Systems bestimmen Sie Richtlinien und eine Berichts-Mail-Adresse und publizieren diese Informationen als DNS-Eintrag. Die Richtlinien erklären dem Empfänger wie er die Mail prüfen soll und wie er im Falle eines Spamverdachts verfahren soll.

## Fazit

Eine gute Zusammenfassung für das Zusammenspiel von SPF, DKIM und DMARC ist [hier verfügbar](https://dmarc.globalcyberalliance.org/how-it-works/).

Diese Massnahmen erhöhen die Reputation des eigenen Mail-Servers. Andere Mail-Server können anhand dieser Checks sicherstellen, dass alle ausgehenden Mails legitim sind.

Als technischer Administrator für ein Mail-System empfehlen wir unbedingt diese Massnahmen zu implementieren.
