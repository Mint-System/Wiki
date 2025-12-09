---
kind:
  - explain
section: policy
---

# Richtlinie - Passwortmanager

Passwörter und Zugangsdaten zu Accounts der Mint System werden in einem [[Passwortmanager]] gespeichert.

Intern werden alle Passwörter mit [[KeePassXC]] gespeichert.

Wenn Passwörter mit Externen geteilt werden müssen, werden Sie in [[Nextcloud Passwords]] als Duplikate erfasst.

## Anforderungen

Ein Passwort muss 40 Zeichen lang sein und alphanumerische Zeichen enthalten.

## Generieren

Mit dem Link [Passwort generieren](https://duckduckgo.com/?t=canonical&q=pwgen+40&ia=answer) erhalten Sie ein Passwort, welches die Anforderungen an die Passwort-stärke erfüllt.

Auf der Kommandozeile können Sie `pwgen -c 40` ausführen.

## Struktur

Passwörter dürfen nicht in Unterordner separiert werden.

## Attribute

Jedes Passwort muss mit mindestens folgenden Attributen erfasst werden:

- **Titel**: Das Format ist `Bezeichnung - Unternehmensname`, Beispiel: `Infomaniak Manager Adminsrator - Mint System GmbH`
- **Benutzername**: Eingabe für Login-Feld
- **Passwort**: Eingabe für Passwort-Feld
- **URL**: Url auf Resource

Optional ist das Feld _Notiz_.
