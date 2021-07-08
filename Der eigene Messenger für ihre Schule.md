![](https://external-preview.redd.it/IZY_3R9NabammEUqD8mO5moNGrwZ8xZDWiHkpsF3tkQ.jpg?auto=webp&s=7d0570d233e76c862a39b0c65ef54a4ec971c92c)

# Der eigene Messenger für ihre Schule
Wie sieht eine Alternative zu Whatsapp und Co für den Schulbetrieb aus?

Whatsapp-Verbote an Schulen machen Sinn. Doch wie sieht eine Alternative aus? Grundsätzlich möchte man so komfortabel kommunizieren wie man es sich mit Whatsapp und Co gewohnt. E-Mail wäre vielleicht eine Lösung, doch eine Mail-Adresse für jede Schülerin ist keine Option. Der Datenschutz spielt eine grosse Rolle, aber bleibt es bei einem leeren Versprechen? Es wäre super, wenn man selber eine sichere Messenger-Lösung für die Schule betreiben kann. "Ist das überhaupt möglich?", fragen sie sich vermutlich.

Genau das ist möglich. In diesem Beitrag möchten wir aufzeigen wie eine Schule einen eigenen Messenger-Dienst betreiben kann.

Aber zuerst eine wichtiger Punkt zum allgemeinen Verständnis: E-Mail hat den modernen Messenger immer noch etwas voraus. Jeder, der möchte, kann seinen eigenen E-Mail-Server installieren und seinen eigenes E-Mail-Programm entwickeln. Alle Protokolle zur Kommunikation mit E-Mail sind offengelegt. Jeder kann mitmachen.

Was E-Mail schon lang kann, funktioniert erst bis vor kurzen mit Messenger. Zumindest für ganz stimmte Messenger. Jeder Messenger, der das [Matrix-Protokoll](https://matrix.org/) versteht, ermöglich die Kommunikation mit anderen Matrix-Messengern. Würde beispielsweise Whatsapp und Threema das Matrix-Protokoll implementieren, könnte man mit Whatsapp an einem Threema-Kontakt eine Nachricht schreiben.

So viel zur Technik. Nun fragen sie sich vielleicht wie man selber zu einem Matrix-Messenger kommt und haben vielleicht mühe die neuen Begriffe und Themen einzuordnen.

Um das zu vereinfachen haben wir ein Messenger-Paket für Schulen zusammengestellt, schauen wir uns dazu die Einkaufsliste an.

## Einkaufsliste

Was brauche ich für die eigene Messenger-Lösung an der Schule und was kostet das?

**1x Domain**

Sie brauche eine Webadresse wie zum Beispiel `matrix.schule-sisikon.ch`. Unter dieser Adresse ist der Matrix-Server erreichbar.

Kosten: 20 CHF pro Jahr

**1x Managed Server**

Sie brauchen einen Server um die Lösung zu hosten. Entweder betreiben sie diesen selber oder Fragen bei einem Anbieter um eine Offerte. Die Kosten sind Abhängig von der Benutzerzahl.

Kosten: ca. 80 CHF pro Monat pro 100 Benutzer

**1x Software-Installation**

Matrix ist die Software, welche den Einsatz eines eigenen Messenger ermöglicht. Sie brauchen Unterstützung bei der Installation.

Kosten: Einmalig ca. 500 CHF

**Element-App**

Die Messenger-App [Element](https://element.io/) kommuniziert mit dem Matrix-Server. Sie ist gratis und kann auf allen Geräten installiert werden.

Kosten: 0 CHF

## Unterstützung

Es gibt viele Unternehmen, die sich mit Open Source Software auskennen und sie beim Einkauf und der Inbetriebnahme unterstützen können.

**Mint System**

Mint System unterstützten Schulen beim Betrieb von Open Source Software. Mit der [Openeduca](https://www.openeduca.ch)-Initiave präsentieren wir sinnvolle Lösungen für den Schulbetrieb.

**[Ungleich](https://ungleich.ch/)**

Ungleich leistet seit Jahren Pionierarbeit im Bereich von alterantiven Softwarelösungen. Sie ist Partner von Matrix und dazu verschiedene Produkte im Angebot.

## Funktionsweise

Haben wir ihre Neugierde geweckt? Sie möchten genaueres zu Matrix und Element wissen? Hier erläuteren wir die Funktionen von Matrix und Element.

Den Matrix-Server kann man sich wie ein Mail-Server vorstellen. Anstatt Postfächer gibt es Accounts. Als Benutzer registriere ich mich auf einem Matrix-Server nach Wahl oder erhalten einen vordefinierten Account vom Administrator. Die Benutzer-Identität ist ähnlich wie die E-Mail-Adresse, beispielsweise `marta.muster@schule-sisikon.ch`. Mit dieser Adresse kann ich mit anderen Matrix-Benutzer kontakt aufnehmen.

Auf dem Matrix-Server gibt es Räume (Rooms) und Umgebungen (Spaces). Ein Raum kann beispielsweise eine Klasse repräsentieren und eine Umgebung wäre alle Unterstufenklassen. Matrix-Benutzer können sich selber in Räumen organisieren, ganz ähnlich den Gruppen-Chats von Messengern.

Mehre Matrix-Server bilden eine Netztwerk. Das ist eine grossartige Sache, denn nur so kann die Messenger-Vielfalt wie auch das Problem der Datenhoheit bewältigt werden.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzblesk.net%2Fblog%2Fcontent%2Fimages%2F2020%2F07%2Ffederation.png&f=1&nofb=1)

Alle Benutzerdaten bleiben immer auf dem eigenen Matrix-Server. Verlässt eine Benutzerin die Schule kann der Account auch auf einen neuen Matrix-Server migriert werden.

## Vorteile

Der Einsatz der Messenger-Lösung hat folgende Vorteile für sie:

**Datenmissbrauch unmöglich**

Alle Daten sind verschlüsselt auf dem Matrix-Server gespeichert. Der Nachrichtenaustausch erfolgt verschlüsselt. Administratoren haben keinen Zugriff auf die Benutzerdaten.

**Geringer Administrationsauwand**

Der Matrix-Server läuft stabil und ist einfach zu warten. Neue Acccounts können ohne Aufwand angelegt werden.

**Pädagogisch Sinnvoll**

Intuitiv und einfach soll Software an Schulen sein. Mit Element haben sie eine Messenger-Lösung, die jeder versteht.

**Eigener Account**

Die Schülerin/Leherin ist im Besitz des Matrix-Accounts und das auch nach dem Wechsel der Schule. Matrix-Accounts können von Server zu Server transportiert werden.

**Open Source**

Die präsentierte Lösung ist Open Source. Man ist weder vom Entwickler noch vom Lieferanten abhängig.

## Chance

Wir erinnern uns: Matrix funktioniert ähnlich wie E-Mail. Jeder Matrix-Server kann mit jedem Matrix-Server kommunizieren. Jede Schule mit einem Matrix-Server kann mit einer anderen Schule kommunizieren. Es ist also möglich ein Netzwerk aus Matrix-Server zu bauen.

Bei Mint System verfolgen wir diese Vision:

> Im Jahr 2030 verfügt jede öffentliche Institution der Schweiz, die über eine Domäne identifiziert werden kann, einen eigenen Matrix-Server. Jeder Angestellte hat Zugriff auf einen Matrix-Account und nutzt diesen aktiv zur Kommunikation.

Das ist eine gewagte Vision. Doch wir glauben fest daran, dass Matrix das gängige E-Mail ablösen wird. Effizient und sicher zu kommunizieren wird an Bedeutung gewinnen und Matrix/Element trifft hier genau ins Schwarze.

## Kontakt

Haben sie noch Fragen oder würden gerne eine Demo habe Matrix/Element haben? Nehmen sie mit uns kontakt auf. Wir freuen uns über ein unverbindliches Gespräch mit ihnen.