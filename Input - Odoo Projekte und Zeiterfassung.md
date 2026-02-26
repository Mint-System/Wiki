---
section: training
kind: tutorial
---

Du lernst wie man mit Odoo Projekt und Zeiterfassung arbeitet.

## Über

Als Unternehmen leisten wir in erster Linie Projektarbeit.

> Was beinhaltet Projektarbeit?

Alle Tätigkeiten, die verrichtet werden, sind an ein Projekt gekoppelt. Ergo Projektarbeit. Die Art der Tätigkeit ist unterschiedlich: Support, Recherche, Analyse, Koordination, Administration, Zusammenfassen, Entwicklung, Implementation, Integration, ...
Als Unternehmen verrichten wir diese Leistungen im Auftrag von Kunden und möchten was möglich verrechnen.

> Was ist Kanban?

Damit die Projektarbeit gelingt, kann man sich bis an das Lebensende mit Projektmanagement beschäftigen.

Wir machen Projektmanagement nach Kanban. Kanban kommt aus der Fertigungsindustrie und wurde von Toyota geprägt.

> Wie wird Kanban auf die Projektarbeit angewendet?

Die Projektarbeit auf wird auf einem Board abgebildet. Man sich Notizzettel auf einem Flipchart in verschiedenen Spalten vorstellen. Die Notizen bzw. Aufgaben versuchen von links nach rechts zu kommen. Zur Implementierung von Kanban gibt es verschiedene Prinzipien.

> Welche Kanban-Prinzipien gibt es?

Hier ist eine Zusammenfassung der wichtigsten Prinzipien: [[Kanban|Kanban]]

- **Visualising Work**: Alle Aufgaben sichtbar machen.
- **WIP**: Die Anzahl Aufgaben in Spalten ist limitiert.
- **Managing Flow**: Alles muss im Fluss bleiben, Blocker müssen beseitigt werden.
- **Continuous Improvement**: Wir möchten uns stetig verbessern. 

## Projekte

In unserem Odoo gibt es für jedes Projekt ein Dashboard. 

> Welche Projekte gibt es?

Wir unterscheiden zwischen internen und externen Projekten. Externe Projekte sind Kundenprojekte.

Alle Projekte befinden sich auf einem Board und haben einen Status gemäss Spalte.

## Aufgaben

Kommen wir gleich zum wichtigsten - die Aufgaben.

> Wie zeige ich Aufgaben an?

Jedes Projekt hat Aufgaben. Jede Aufgabe ist einem Projekt zugeordnet. Aufgaben sind auch Personen zugeordnet. Mit dem Board "Meine Aufgaben", sieht man die zugewiesenen Aufgaben über alle Projekte hinweg. Das Board "Alle Aufgaben" zeigt alle Aufgaben in allen Projekten.

Jedes Projekt generiert einen Menü-Eintrag. Mit der Navigation-Suche kann man so direkt in ein Projekt-Board springen.

> Welche Stufen durchläuft eine Aufgabe?

Alle Aufgaben in allen Projekten durchlaufen die gleichen Projektphasen. Wie man die Aufgaben den Spalten zuordnet ist in [[Richtlinie - Aufgabenverwaltung]] festgehalten.

> Wer erstellt und wer bearbeitet eine Aufgabe?

Die Projektleiterin ist für das Board und den Projektverlauf verantwortlich. Jeder darf Aufgaben erfassen. Bei der Zuweisung der Aufgabe muss man, aber aufpassen. Der Konsent muss gegeben sein. Man darf nicht erwarten, dass wenn man jemanden eine Aufgabe zuweist, die Aufgabe auch erledigt wird.

Man darf auf eigene Initiative Aufgaben erfassen. Diese Aufgaben gehören ins "Backlog". Jede Aufgabe muss von der Projektleiterin validiert und zugewiesen werden. 

> Wer ist für die Aufgabe verantwortlich?

Wenn eine Aufgabe ans zwei oder mehrere Personen zugeteilt ist, stellt sich die Frage der Verantwortung. In diesem Fall gilt, die Verantwortung liegt beim Projektleiter. Die Projektleiterin muss sicherstellen, dass die Beteiligten die Aufgabe erledigen.

> Wie werden Aufgaben priorisiert?

Jede Aufgabe kann 0 bis 3 Sterne haben. Diese Sterne definieren wie wichtig die Aufgabe ist. Jede Projektleiterin entscheidet welche Aufgaben wichtig sind und welche nicht. 

> Wann und wie lange ist eine Aufgabe in Bearbeitung?

Für alle Mitarbeitenden ist die Spalte "In Arbeit" am wichtigsten. Sobald man eine Tätigkeit ausführt, muss die dazugehörige Aufgabe in diese Spalte sein. Wenn man die Tätigkeit beenden, darf die Aufgabe in der Spalte bleiben.

Jedoch ist die Anzahl der Aufgaben in der Spalte auf **7** limitiert. Das ist Grenze der menschlichen kognitiven Leistung sich Dinge zu merken. Wenn man mehr Platz möchte, muss man also die Aufgabe erledigen (nach rechts) oder zurückschieben (nach links).

> Wann ist eine Aufgabe erledigt?

Eine Aufgabe hat immer einen Kunden. Wenn man Aufgabe erfüllt hat und auf das Feedback des Kunden wartet, landet die Aufgabe im Status "Review". Nach einer unbestimmten Zeit schiebt der Projektleiter die Aufgabe auf "Erledigt".

> Jede Regel hat eine Ausnahme. Wie sieht das hier aus?

Es gibt Aufgaben, die dauern so lange wie das Projekt selbst. Diese Aufgaben landen in der rechten Spalten "Postlog". Dies Aufgaben durchlaufen nicht die Statis des Boards.

## Phasen

Wir verkaufen Projekte aufgeteilt in Phasen.

> Was sind Projektphasen?

Jedes verkaufte Projekt wird in Phasen gegliedert. Phasen definieren Tätigkeit und das Ergebnis für den Kunden. 
Mit jedem Angebot für Implementations-Projekte definieren wir eine Aufwandsschätzung entlang der Projekt-Phasen. Diese Schätzungen werden in Odoo festgehalten.

> Wie werden Projekt-Phasen genutzt?

Nebst der Aufgabenphase kann eine Aufgabe einer Projektphase zugeordnet werden. Damit ist es möglich dem Kunden den Fortschritt der einzelnen Projektphasen zu zeigen.

## Zeiterfassung

Jede Tätigkeit wird mit einem Zeiterfassungs-Eintrag dokumentiert.

> Wie erfasse ich meine Zeit?

Bevor du mit der Zeiterfassung startet, must du klären, ob die aufgewendete Zeit abgerechnet werden kann. Dazu ein Beispiel. Der Kunde möchte, dass im Odoo Webshop bei einer Bestellung automatisch eine Rechnung erstellt wird. Du weisst noch nicht wie helfen kannst und musst zuerst eine Recherche machen. Der Recherche-Aufwand kann nicht verrechnet werden und muss deshalb auf die dafür vorgesehene Projektaufgabe "Know-how" gebucht werden. Wenn du weisst wie du dem Kunden helfen und die Aufgabe erledigen kannst, kannst du die Zeit auf die Aufgabe buchen.

Um Zeit zu buchen, nutzt du den Button "Start" auf der Aufabe. Das Startet einen Timer, dieser läuft bis du auf "Stop" klickst. Wenn der Timer gestoppt wird, wirst auf aufgefordert eine Beschreibung hinzuzufügen.

> Wie sieht die Beschreibung aus?

Der Kunde erhält einen Arbeitsrapport mit allen Zeiterfassungseinträgen. Er sieht welche Einträge abgerechnet werden und welche nicht. Für jeden Eintrag sieht er die Beschreibung.

Die Beschreibung richtet sich an den Kunden. Es ist empfohlen mindestens einen Satz für eine Stunde Aufwand zu schreiben.

> Wie wird entschieden ob Aufwand abgerechnet wird?

Grundsätzlich entscheidet der Erfasser des Zeit-Eintrags, ob dieser abgrechnet werden soll oder nicht. Jede Aufgabe von Kundenprojekten ist mit einer Auftragsposition verbunden. Die Auftragsposition ist die verkaufte Leistung.

Die Aufgaben "Projektadministration" und "Know-how" sind mit der Position "Kulanz" verbunden. Die dazugehörigen Zeiterfassungseinträge werden zu 0 CHF verrechnet und im Arbeitsrapport aufgeführt. Wir möchten Kunden zeigen, welche Aufwände wir tätigen und nicht verrechnen.

Bevor die Rechnungen erstellt werden, validiert der Projektleiter alle Zeiterfassungseinträge. Er kann Einträge kürzen, aufteilen oder löschen. Die Rechnung soll den Kunden nicht überraschen.

> Wie sieht das im Stundenlohn aus?

Gute Projektleitung soll zu einer guten Verrechenbarkeit führen. Wenn der Projektleiter die Zeiterfassung validiert, kommt es meistens zu abstrichen. Der Projektleiter muss sicher stellen dass die geplanten verkauften Stunden den effektiven Stunden entsprechen. Eine Überschreitung des Budget muss kommuniziert werden. Dem Kunden gegenüber sprechen wir bei der Projektarbeit von einem Kostendach.
## Todos

Mitarbeitenden haben eigene Arbeitsmethodiken. Innerhalb von Aufgaben darf man seine persönliche Methodik anwenden.

> Welchen Zweck haben Aufgabenbeschreibungen?

Der Projektleiter interessiert sich für den Projekstatus. Er muss beim Aufruf des Boards eine aktuelle Sicht auf das Projekt haben. Das gelingt, wenn Mitarbeitende ihre Aufgaben in die richtige Spalte schieben.

Beim Aufrufen einer Aufgaben sieht man die Beschreibung. Wichtig ist, dass es eine hat. Der Inhalt richtet sich an die zugewiesenen Personen. Die Beschreibung gibt Auskunft an was genau gearbeitet wird.

> Was sind Todos?

Mit der Editor-Aktion "/Checklist" können Checkboxen erstellt werden. Diese Todo können offen oder erledigt sein. Das ist die granularste Form um Tätigkeiten zu beschreiben.

> Wie wird eine Aufgabe zerlegt?

Aufgaben können zur Erledigung unterschiedlich lange dauern. Eine Aufgabe kann in mehrere Aufgaben aufgeteilt und verbunden werden. Stellt man sich Grösse einer Aufgabe auf einer Spannweite vor, haben wir dieses Anfangs- und Endpunkte:

- **Kleinste Einheit (XS)**: Eine Aufgabe sollte nicht kleiner sein als ein Todo.
- **Grösste Einheit (XL)**: Die maximale Grösse einer Aufgabe ist die Projektphase.

> Wie nutze ich Odoo Aktivitäten?

Im Odoo Chatter kann man Aktivitäten zur Erledigung erstellen. Wir nutzen diese Aktivitäten nicht für das Projektmanagement. Jedoch dürfen Aktivitäten für die persönliche Aufgabenplanung genutzt werden. 
## Kommunikation

Wir nutzen Odoo zur Kommunikation mit den Kunden und für den internen Dialog.

> Wie sende ich eine Nachricht an einen Kunden?

Zuerst stellt sich die Frage in welchem Kontext die Anfrage gemacht werden soll. Die Kommunikation erfolgt mit dem Odoo Chatter und dieser ist immer an ein Dokument gebunden. In den meisten Fällen nutzt man den Chatter auf einer Projektaufgaben.

Mit der Aktion "Nachricht senden" wird an den Kontakt (partner_id) und an alle Follower (follower_ids) des Dokuments eine E-Mail zu gestellt. Bevor du eine Nachricht sendest, stell sicher, dass die Liste der Follower korrekt ist.

Die Odoo-Kommunikation ist hier weiter beschrieben: <https://www.odoo-wiki.org/best-practice-communication-with-odoo.html>

> Wie erfahre ich von der Antwort eines Kunden?

Wenn ein Kunde auf eine Mail von Odoo antwortet, landet die Antwort-Mail im Postfach von Odoo. Odoo ordnet die Nachricht dem Dokument zu und versendet eine Benachrichtigung an alle Follower.

> Wie schreibe ich einem Mitarbeitenden?

Auch im Austausch mit Mitarbeitenden ist der Kontext entscheidend. Im Chatter wählst du "Notiz hinterlassen" und nutzt das @-Tagging um eine Benachrichtigung zu senden. 

> Was ist der Unterschied zwischen Nachrichten und Notizen?

Nachrichten versenden führt zu einem E-Mail. Notiz hinterlassen führt zu einer Benachrichtigung.



