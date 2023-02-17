---
tags:
- Richtlinien
---
# Richtlinie - Passwörter
Passwörter und Zugangsdaten zu Accounts der Mint System werden zentral gespeichert.

Mehr dazu unter [[Passwortmanager]].

## Anforderungen

Ein Passwort muss 40 Zeichen lang sein und alphanumerische Zeichen enthalten.

## Generieren

Mit dem Link [Passwort generieren](https://duckduckgo.com/?t=canonical&q=pwgen+40&ia=answer) erhalten Sie ein Passwort, welches die Anforderungen an die Passwort-stärke erfüllt.

Auf der Kommandozeile können Sie `pwgen -c 40` ausführen.

## Struktur

Passwörter dürfen nicht in Unterordner separiert werden.

## Attribute

Jedes Passwort muss mit mindestens folgenden Attributen erfasst werden:

* Titel
* Benutzername
* Passwort
* URL

Optional ist das Feld *Notiz*.