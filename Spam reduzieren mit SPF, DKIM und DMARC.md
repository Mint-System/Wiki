# Spam reduzieren mit SPF, DKIM und DMARC

Mit diesem Beitrag möchten wir einen einen Einblick in eine komplexe Thematik geben: Spam.

Spam verursacht tagtäglich Kosten in Millardenhöhe. E-Mail-Server werden gefultet, Mails landen fälschlicherweise im Spamordner und unerfahrene Anwender werden mit Mails "gefischt". Ebenso viele Massnahmen gibt es dagegen. Gerade aktuell ist SPF, DKIM und DMARC. Jeder Administrator sollte diese kryptischen Begriffe kennen.

## Versand und Empfang von E-Mails

Beim Klick auf Versenden im E-Mail-Programm passiert im Normalfall folgendes:

![[Mail Versand mit SMTP und IMAP.png]]

1. Mail-Programm übermittelt Nachricht an Mail-Server (SMTP-Protokoll)
2. Mail-Server prüft den Empfänger und such den Empfänger-Mail-Server (DNS-Protokoll)
3. Wurde der Empfänger-Mail-Server gefunden, wird die Nachricht verschickt (SMTP-Protokoll)
4. Empfänger-Mail-Server legt Mail in Postfach des Empfänger ab
5. Mail-Programm des Empfänger aktualisiert die Übersicht der Mails

Die Filterung von Spam-Nachrichten erfolgt im Schritt 3. Der Mail-Server prüft eingehende Nachrichten nach bestimmten Stichwörter. Dabei kann es passieren, dass eine valide Mail als Spam klassifiziert wird und umgekehrt eine Spam-Mail als valide deklariert wird. Doch es gibt einen weiteren wichtigen Check, dazu eine Einstiegsfrage:

> Wie weiss der empfangende Mail-Server, dass der Absender der Nachricht wirklich vom versendenden Mail-Server verschicken darf?

Angenommen wir haben die Mail-Adresse `info@example.com`, dann heisst das, dass meine Organisation im Besitz der Domain `example.com` ist und unter dieser Domain E-Mails Versenden und Empfangen darf. Damit der empfangende Mail-Server überprüfen kann, ob man wirklich der Besitzer dieser Domain ist und wirklich E-Mails versenden darf, braucht es eine Reihe von Checks: SPF, DKIM und DMARC

## SPF

![[Infografik SPF.png]]

Das Sender Policy Framework (SPF) unterbindet das E-Mails von einem nicht legitimierten Mail Transfer Agent (MTA) versendet werden. Der empfangende Mail-Server kann überprüfen, ob der MTA unter einer bestimmten Domäne Mails versenden darf.

**Implementation**

Für jeden MTA stellt man einen spezifischen DNS-Eintrag zur Verfügung. Dieser SPF-Eintrag enthält die Adresse des MTA und weist darauf hin, dass es Richtlinie zur Verarbeitung der Mails gibt.

## DKIM

![[Infografik DKIM.png]]

DomainKeys Identified Mail (DKIM) funktioniert ähnlich wie SPF. Jedoch wird nicht der Mail Transfer Agent (MTS) geprüft, sonder der Absender des Mails. Mit DKIM werden alle ausgehenden Mails signiert. Der empfangede Mail-Server kann diese Signatur überprüfen.

**Implementation**

Für jede Applikation, die eine E-Mail signiert, stell einen öffentlichen Schlüssen für eine bestimmte DNS-Adresse zur Verfügung. Als Administrator kopiert man den öffentlichen Schlüssel und erstellt einen DNS-Eintrag für die Adresse bereit.

## DMARC

DMARC steht für Domain-based Message Authentication, Reporting & Conformance, es bestimmt wie ein E-Mail-Versand authentisiert, protokolliert und verarbeitet wird. DMARC beinhaltet SPF und DKIM.

![[Infografik DMARC.png]]

**Implementation**

Als Administrator des Mail-Systems bestimmen sie Richtlinien und eine Berichts-Mail-Adresse und publizieren diese Informationen als DNS-Eintrag. Die Richtlinien erklären dem Empfänger wie er die Mail prüfen soll und wie er im Falle eines Spamverdachts verfahren soll.

## Fazit

Eine gute Zusammenfassung für das Zusammenspiel von SPF, DKIM und DMARC ist [hier verfügbar](https://dmarc.globalcyberalliance.org/how-it-works/).

Diese Massnahmen erhöhen die Reputation des eigenen Mail-Server. Andere Mail-Server können anhand dieser Checks sicherstellen, dass alle ausgehenden Mails legitim sind.

Als technischer Administrator für ein Mail-System empfehlen wir unbedingt diese Massnahmen zu implementieren.