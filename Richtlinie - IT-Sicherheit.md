---
title: Richtlinie - IT-Sicherheit
kind: explain
section: policy
---

> **Hinweis:** Diese Richtlinie ist noch **nicht final** und befindet sich aktuell im **Entwurfsstatus**.  
> Der Inhalt dient als Arbeitsgrundlage und muss vor der offiziellen Freigabe noch **fachlich und organisatorisch geprüft** werden.

## Grundsatz
Informationen, Systeme und Zugänge der Mint System GmbH sind so zu schützen, dass Vertraulichkeit, Integrität und Verfügbarkeit jederzeit gewährleistet sind.

Sicherheitsmassnahmen müssen angemessen, wirksam und im Arbeitsalltag umsetzbar sein

## Geltungsbereich und Verantworlichkeit 

Diese Richtlinie gilt für:

- Mitarbeitende der Mint System GmbH
- Freelancer und externe Dienstleister die im Auftrag der Mint System GmbH arbeiten
- temporäre Benutzerkonten
- Endgeräte, Server, Cloud-Dienste, Netzwerke und Anwendungen
- Kunden-, Geschäfts- und Personendaten in digitaler und physischer Form

Jede Person ist für den sicheren Umgang mit Informationen, Arbeitsmitteln und Zugangsdaten mitverantwortlich. 

Die Geschäftsleitung definiert die Sicherheitsvorgaben. Administratoren setzen technische Schutzmassnahmen um und überwachen deren Einhaltung. 

Für die Einstufung von Informationen sind die jeweiligen fachlich verantwortlichen Personen zuständig. 

Ausnahmen von dieser Richtlinie müssen vorgängig genehmigt und dokumentiert werden.

## Klassifizierung

Informationen werden nach Schutzbedarf behandelt.

Folgende Schutzstufen werden unterschieden:

- **Öffentlich:** Informationen zur freien Veröffentlichung (z.B. im Mint Wiki)
- **Intern:** Informationen nur für Mitarbeitende und berechtigte Dritte (z.B. in der Nextcloud)
- **Vertraulich:** Informationen mit erhöhtem Schutzbedarf, insbesondere Kundeninformationen, Vertragsunterlagen, Zugangsdaten und Personendaten

Ist die Einstufung unklar, wird die Information als vertraulich behandelt.

Vertrauliche Informationen sind in Dokumenten, Dateien, Nachrichten oder Ablagen entsprechend zu kennzeichnen.

Weitere Anforderungen sind in der [[Richtlinie - Klassifizierung von Informationen]] geregelt.

## Zugriff

Zugriff auf Systeme und Daten wird nur gewährt, wenn dieser für die Aufgabenerfüllung erforderlich ist.

Es gelten folgende Grundsätze:

- persönliche Benutzerkonten verwenden
- keine Weitergabe von Zugangsdaten
- keine gemeinsame Nutzung persönlicher Accounts
- Berechtigungen nach dem Prinzip Need to know
- Berechtigungen möglichst rollenbasiert vergeben
- administrative Tätigkeiten nur mit dafür vorgesehenen Konten

Nicht mehr benötigte Zugriffe sind umgehend zu entfernen.

Weitere Anforderungen sind in der [[Richtlinie - Identity und Access Management ]]geregelt.

## Passwörter und Secrets

Passwörter und andere Secrets werden ausschliesslich in freigegebenen Passwortmanagern gespeichert.

Es gelten folgende Regeln:

- keine Speicherung in Klartextdateien, Notizen oder Chats
- keine Weitergabe über ungesicherte Kanäle
- keine Wiederverwendung von Passwörtern für mehrere Dienste
- technische Zugangsdaten müssen dokumentiert und kontrolliert abgelegt sein

Weitere Anforderungen sind in der [[Richtlinie - Passwortmanager|Richtlinie - Passwortmanager]] geregelt.

# Geräte

Für die Arbeit werden nur freigegebene und ausreichend geschützte Geräte verwendet.

Geräte müssen:

- mit Passwort oder biometrisch geschützt sein
- automatisch gesperrt werden
- aktuelle Sicherheitsupdates erhalten
- bei Verlust oder Diebstahl sofort gemeldet werden

Sicherheitsmechanismen wie Firewall, Monitoring oder Verschlüsselungen dürfen nicht ohne Freigabe deaktiviert werden.

Private Geräte dürfen verwendet werden, sofern dies mit den Vorgaben der Mint System GmbH vereinbar ist.

Geschäftliche Daten dürfen nicht unkontrolliert in private Apps, Messenger oder Dateispeicher kopiert werden.

Bei privaten Geräten ist für die geschäftliche Nutzung nach Möglichkeit ein getrenntes Benutzerkonto zu verwenden.

Private Geräte, die für geschäftliche Zwecke eingesetzt werden, müssen ebenfalls ausreichend geschützt und mit einer Festplattenverschlüsselung wie LUKS betrieben werden.

Weitere Anforderungen sind in der [[Richlinie - Arbeitsplatz]] und [[Richtlinie - Smartphone]] geregelt.

## E-Mail und Kommunikation

Vertrauliche Informationen dürfen nur über freigegebene Kommunikationskanäle ausgetauscht werden.

Es gelten folgende Grundsätze:

- keine Passwörter oder Secrets unverschlüsselt per E-Mail oder Chat versenden
- unbekannte Anhänge und Links nicht unüberlegt öffnen
- projektbezogene Kommunikation nachvollziehbar im vorgesehenen System führen
- vertrauliche Informationen nur an berechtigte Empfänger senden

Weitere Regeln sind in der [[Richtlinie - Kommunikation]], der [[Richtlinie - E-Mail]] und der [[Richtlinie - Kollaboration]] geregelt.

## Cloud-Dienste

Neue Cloud- oder SaaS-Dienste für die Arbeit dürfen nur eingesetzt werden, wenn sie geprüft und freigegeben wurden.

Bei der Auswahl ist insbesondere zu beachten:

- Art der bearbeiteten Daten
- Speicherort der Daten
- Zugriffsmöglichkeiten für Dritte
- Sicherung, Wiederherstellung und Export
- Authentifizierung und Berechtigungen
- Logging, Monitoring und Datenlöschung bei Beendigung des Dienstes

Kunden- und Personendaten dürfen nur in freigegebenen Diensten bearbeitet werden.

Weitere Anforderungen sind in der [[Richtlinie - Cloud-Dienste]] geregelt.

## Dokumente und Ablage

Dokumente müssen an der vorgesehenen Stelle abgelegt und gemäss Schutzbedarf behandelt werden.

Es gelten folgende Grundsätze:

- keine unkontrollierten Kopien vertraulicher Dokumente erstellen
- Dokumente nur in freigegebenen Ablagen speichern
- Freigaben an Externe gezielt und nachvollziehbar erteilen
- Archive, Input-, Output- und tmp-Ordner gemäss Vorgaben verwenden

Weitere Regeln sind in der [[Richtlinie - Dokumentmanagement]] geregelt.

## Homeoffice und unterwegs

Auch ausserhalb des Büros gelten dieselben Sicherheitsanforderungen.

Insbesondere gilt:

- Bildschirm vor Einsicht Dritter schützen (z.B. Privacy Folie)
- Geräte nicht unbeaufsichtigt offen liegen lassen
- öffentliche Netzwerke nur mit ausreichendem Schutz nutzen
- Ausdrucke und Notizen mit vertraulichen Inhalten sicher aufbewahren
- auf Reisen nur notwendige Daten mitführen

## Entwicklung und Testsysteme

Zugangsdaten dürfen nicht im Quellcode gespeichert werden.

Produktive Daten dürfen nicht ungeschützt in Entwicklungs- oder Testumgebungen verwendet werden.

Testdaten sind wenn möglich zu anonymisieren oder zu maskieren.

Weitere Regeln sind in der [[Richtlinie - Softwareentwicklung]] geregelt.

## Physischer Zugang und Besucher

Zugang zu Büroräumen erhalten nur autorisierte Personen.

Besucher, Handwerker und andere externe Personen dürfen sich nicht unkontrolliert in internen Bereichen bewegen.

Externe Personen sind zu begleiten oder gemäss Vorgaben vorab freizugeben.

Schlüssel, Badges und andere Zutrittsmittel sind persönlich und dürfen nicht weitergegeben werden.

Weitere Anforderungen sind in der [[Richtlinie - Zutritt und Besucher]] geregelt.

## Externe Dienstleister

Externe Dienstleister erhalten nur Zugriff, wenn dies erforderlich, dokumentiert und vertraglich geregelt ist.

Vor dem Zugriff sind insbesondere zu regeln:

- Vertraulichkeit
- Verantwortlichkeiten
- Umfang des Zugriffs
- sichere Übermittlung von Zugangsdaten
- Beendigung und Entzug des Zugriffs
- allfällige Freigaben des Kunden

Weitere Anforderungen sind in der [[Richtlinie - Lieferanten und externe Dienstleister]] geregelt.

## Sicherheitsvorfälle

Sicherheitsvorfälle müssen sofort gemeldet werden.

Dazu gehören insbesondere:

- Phishing oder verdächtige E-Mails
- Verlust oder Diebstahl von Geräten
- Fehlversand vertraulicher Informationen
- unberechtigte Zugriffe
- Malware-Verdacht
- versehentliche Veröffentlichung oder Löschung von Daten
- verdächtige Supportanfragen oder Social Engineering

Sicherheitsvorfälle werden dokumentiert und nachverfolgt.

Weitere Anforderungen sind in der [[Richtlinie - Sicherheitsvorfälle]] geregelt.

## Awareness und Schulung

Mitarbeitende und externe Leistungserbringende müssen in angemessenem Umfang für Informationssicherheit sensibilisiert werden.

Dazu gehören insbesondere Sensibilisierung zu Phishing, Umgang mit vertraulichen Informationen, Passwortsicherheit und Meldung von Vorfällen.

Weitere Anforderungen sind in der [[Richtlinie - Security Awareness]]geregelt.

## Löschung, Entsorgung und Wiederverwendung

Daten sind nach gesetzlichen, vertraglichen und internen Vorgaben zu löschen, zu archivieren oder aufzubewahren.

Datenträger, Geräte und Ausdrucke mit geschäftlichen Informationen sind vor Wiederverwendung, Rückgabe oder Entsorgung sicher zu löschen oder zu vernichten.

Weitere Anforderungen sind in der [[Richtlinie - Datenlöschung und Entsorgung]] geregelt.
## Austritt und Rollenwechsel

Bei Austritt, Funktionswechsel oder Projektende müssen Berechtigungen, Geräte, Schlüssel und Unterlagen umgehend zurückgegeben oder entzogen werden.

Lokale Kopien geschäftlicher Daten sind zu löschen, soweit keine gesetzliche oder vertragliche Aufbewahrungspflicht besteht.

## Verstösse

Verstösse gegen diese Richtlinie können organisatorische, arbeitsrechtliche oder vertragliche Konsequenzen haben.