# Odoo Email Integration

Odoo bietet die Möglichkeit über E-Mail zu kommunizieren. Beispielsweise kann man eine Projekt-Aufgabe abonnieren und erhält eine Benachrichtigung, wenn jemand eine Nachricht auf der Aufgabe hinterlässt. Auf diese Benachrichtung kann man antworten und diese Antwort wird dann wiederum an die Aufgabe angehängt.

Videos:
* *[How to Handle Your Email Environment with Odoo](https://www.youtube.com/watch?v=emLnLw2XliI)
- [Spam Detection](https://youtu.be/emLnLw2XliI?t=932)

## Incoming

Odoo is in general prepared to send e-mails using only the "author's" address as sender (From), and then use a "catchall" reply-to address in order to route back the answers (when someone replies to its notifications).

## Outgoing

Aktuell ist noch unklar wie die eingehenden E-Mails verarbeitet werden.