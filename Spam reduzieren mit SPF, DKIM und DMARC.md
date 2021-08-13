# Spam reduzieren mit SPF, DKIM und DMARC

Beim Klick auf Versenden im E-Mail-Programm passiert im Normalfall folgendes:

1. Mail-Programm übermittelt Nachricht an Mail-Server (IMAP-Protokoll)
2. Mail-Server prüft den Empfänger und such den Empfänger-Mail-Server (DNS-Protokoll)
3. Wurde der Empfänger-Mail-Server gefunden, wird die Nachricht verschickt (SMTP-Protokoll)
4. Empfänger-Mail-Server legt Mail in Postfach des Empfänger ab
5. Mail-Programm des Empfänger aktualisiert die Übersicht der Mails

Die Filterung von Spam-Nachrichten erfolgt im Schritt 3. Der Mail-Server prüft eingehende Nachrichten nach bestimmten Stichwörter. Dabei kann es passieren, dass eine valide Mail als Spam klassifiziert wird und umgekehrt. Doch es gibt einen weiteren wichtigen Check, dazu eine Einstiegsfrage:

> Wie weiss der empfangende Mail-Server, dass der Absender der Nachricht wirklich vom versendenden Mail-Server verschicken darf?

Angenommen wir haben die Mail-Adresse `info@example.com`, dann heisst das, dass meine Organisation im Besitz der Domain `example.com` ist und unter dieser Domain E-Mails Versenden und Empfangen darf. Damit der empfangende Mail-Server überprüfen kann, ob man wirklich der Besitzer dieser Domain ist und wirklich E-Mails versenden darf, braucht es eine Reihe von Checks.

## SPF

Das Sender Policy Framework (SPF) unterbindet das E-Mails von einem nicht legitimierten Mail Transfer Agent (MTA) versendet werden.

Implementation:

## DKIM

Implementation:

## DMARC

Implementation:

## Spam reduzieren

Diese Massnahmen erhöhen die Reputation des eigenen Mail-Server. Andere Mail-Server können anhand dieser Check sicherstellen, dass alle ausgehenden Mails legitim sind.

Spam ist eine komplexe An