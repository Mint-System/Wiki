---
section: training
kind: tutorial
---

Du lernst wie man mit Odoo Projekt und Zeiterfassung arbeitet.

Aufzeichnung Teil 1: <https://bbb.ch-open.ch/playback/presentation/2.3/be661e82181977837bf24c177f352a4faab2414e-1772437803706>

Aufzeichnung Teil 2: <https://bbb.ch-open.ch/playback/presentation/2.3/be661e82181977837bf24c177f352a4faab2414e-1773043026042>

## Über

Als Unternehmen leisten wir grösstenteils Projektarbeit.

Hinweise sind 💡 markiert.

> Was beinhaltet Projektarbeit?

Alle Tätigkeiten, die verrichtet werden, sind an Projekte gekoppelt, deshalb Projektarbeit. Die Art der Tätigkeiten sind unterschiedlich, wir machen Support, Recherche, Analyse, Koordination, Administration, Zusammenfassung, Entwicklung, Implementation, Integration, ...
Als Unternehmen verrichten wir diese Leistungen im Auftrag von Kunden und verrechen was möglich ist.

> Was ist Kanban?

Damit die Projektarbeit gelingt, kann man sich bis an das Lebensende mit "Projektmanagement" beschäftigen. Es gibt viele Modelle, Theorien und Wissen zu diesem Thema. Aktuell machen Projektmanagement nach Kanban.

Kanban kommt aus der Fertigungsindustrie und wurde von Toyota entwickelt. Natürlich geht es im Wesentlichen um Effizienzsteigerung. Jedoch wird in Kanban anerkennt, dass Kapazitäten beschränkt sind und der reibungslose Ablauf entscheidend ist.

> Wie wird Kanban auf die Projektarbeit angewendet?

Die Projektarbeit auf wird auf einem Board abgebildet. Man stellt sich Notizzettel auf einem Flipchart in verschiedenen Spalten vor. Diese Zettel bzw. Aufgaben versuchen von links nach rechts zu kommen (Push) indem darauf beschriebene Arbeit erledigt wird.

> Welche Kanban-Prinzipien gibt es?

Hier ist eine Zusammenfassung der wichtigsten [[Kanban Principles]]:

- **Visualising Work**: Alle Aufgaben sichtbar machen.
- **WIP**: Die Anzahl Aufgaben in Spalten ist limitiert.
- **Managing Flow**: Alles muss im Fluss bleiben, Blocker müssen beseitigt werden.
- **Continuous Improvement**: Wir möchten uns stetig verbessern. 

## Projekte

In unserem Odoo gibt es für jedes Projekt ein Dashboard. 

> Welche Projekte gibt es?

Wir unterscheiden zwischen internen und externen Projekten. Externe Projekte sind Kundenprojekte. Bei internen Projekten sind wir selbst Kunde.

Alle Projekte befinden sich ebenfalls auf einem Board und haben einen Status. Das Projekt-Controlling prüft den Projektstatus für das ganze Unternehmen.
## Aufgaben

Kommen wir gleich zum wichtigsten - die Aufgaben.

> Wie zeige ich Aufgaben an?

Jedes Projekt hat Aufgaben. Jede Aufgabe ist einem Projekt zugeordnet. Aufgaben sind auch Personen zugeordnet. Mit dem Board "Meine Aufgaben", sieht man die eigenen Aufgaben über alle Projekte hinweg. Das Board "Alle Aufgaben" zeigt alle Aufgaben in allen Projekten an.

💡 Jedes Projekt generiert einen Menü-Eintrag. Mit der Navigation-Suche kann man so direkt in ein Projekt-Board springen.

> Welche Stufen durchläuft eine Aufgabe?

Alle Aufgaben in allen Projekten durchlaufen die gleichen Projektphasen. Wie man die Aufgaben den Spalten zuordnet ist in [[Richtlinie - Aufgabenverwaltung]] festgehalten.

> Wer erstellt und wer bearbeitet eine Aufgabe?

Die Projektleiterin ist für das Board und den Projektverlauf verantwortlich. Jeder Mitarbeitende darf Aufgaben erfassen. Bei der Zuweisung der Aufgabe gelt bestimmte Regeln: Der Konsent muss gegeben sein. Man darf nicht erwarten, dass wenn man jemanden eine Aufgabe zuweist, die Aufgabe auch erledigt wird. Bei der Zuweisung findet immer ein Austausch zwischen den Beteiligten statt.

💡 Man darf auf eigene Initiative Aufgaben erfassen. Diese Aufgaben gehören ins "Backlog". Jede Aufgabe muss von der Projektleiterin validiert und zugewiesen werden. 

> Wer ist für die Aufgabe verantwortlich?

Wenn eine Aufgabe an zwei oder mehrere Personen zugeteilt ist, stellt sich die Frage der Verantwortung. In diesem Fall gilt: Die Verantwortung liegt beim Projektleiter. Die Projektleiterin muss sicherstellen, dass die Beteiligten die Aufgabe erledigen.

💡Gerade bei Aufgaben zur Entwicklung eines Odoo-Moduls macht die Zuweisung an zwei Personen (Entwickler und Analyst) Sinn. 

> Wie werden Aufgaben priorisiert?

Jede Aufgabe kann 0 bis 3 ⭐ Sterne haben. Diese Sterne definieren wie wichtig die Aufgabe ist. Jede Projektleiterin entscheidet welche Aufgaben wichtig sind und welche nicht. Bearbeiter orientieren sich an der Priorisierung.

> Wann und wie lange ist eine Aufgabe in Bearbeitung?

Für Bearbeitende ist die Spalte "In Arbeit" am wichtigsten. Wenn man eine Tätigkeit ausführt, muss die dazugehörige Aufgabe in dieser Spalte sein. Wenn man die Tätigkeit beenden, darf die Aufgabe in der Spalte bleiben.

Jedoch ist die Anzahl der Aufgaben in der Spalte auf **7** limitiert (das ist Grenze der menschlichen kognitiven Leistung sich Dinge zu merken). Wenn man mehr Platz braucht, muss man die Aufgaben erledigen (nach rechts) oder zurückschieben (nach links).

💡 Die Limite wird nicht technisch forciert. Zur Orientierung gibt es im Dashboard "Zeiterfassung" eine Auswertung der Aufgaben in Bearbeitung.

> Wann ist eine Aufgabe erledigt?

Eine Aufgabe hat immer einen Kunden. Wenn man Aufgabe fertiggestellt hat und auf das Feedback des Kunden wartet, landet die Aufgabe im Status "Review". Nach einer unbestimmten Zeit schiebt der Projektleiter die Aufgabe auf "Erledigt".

> Jede Regel hat eine Ausnahme. Wie sieht das hier aus?

Es gibt Aufgaben, die dauern so lange wie das Projekt selbst. Diese Aufgaben landen in der rechten Spalten "Postlog". Dies Aufgaben durchlaufen nicht die Statis des Boards.

## Phasen

Wir verkaufen Projekte gegliedert in Phasen.

> Was sind Projektphasen?

Jedes verkaufte Projekt wird in Phasen gegliedert. Phasen definieren Tätigkeit und das Ergebnis für den Kunden.

💡 Die verfügbaren Phasen findest du unter [[Phasen]].

Mit jedem Angebot für Implementations-Projekte definieren wird eine Aufwandsschätzung entlang der Projektphasen erstellt. Die Schätzungs-Werte werden in Odoo festgehalten. Projektphasen und Aufwandsschätzung sind eng verknüpft.

> Wie werden Projektphasen genutzt?

Eine Aufgabe hat einen Status (Aufgabenphase) und kann einer Projektphase zugeordnet werden. Mit der Zuordnung an die Projektphase kann dem Kunden der Fortschritt des Projekts aufgezeigt werden.

💡 Die Aufwandsschätzung vergleich geplante und effektive Stunden. 

## Zeiterfassung

Jede Tätigkeit wird mit einem Zeiterfassungs-Eintrag dokumentiert.

> Wie erfasse ich meine Zeit?

Bevor du mit der Zeiterfassung startet, must du klären, ob die aufgewendete Zeit abgerechnet werden kann oder nicht. Dazu ein Beispiel:

Der Kunde möchte, dass im Odoo Webshop bei einer Bestellung automatisch eine Rechnung erstellt wird. Du weisst noch nicht wie du helfen kannst und musst zuerst eine Recherche machen. Der Recherche-Aufwand kann nicht verrechnet werden und muss deshalb auf die dafür vorgesehene Projektaufgabe "Know-how" gebucht werden. Wenn du weisst wie du dem Kunden helfen und die Aufgabe erledigen kannst, kannst du die Zeit auf die Aufgabe buchen.

Um Zeit zu buchen, nutzt du den Button "Start" auf der Aufabe. Das Startet einen Timer, dieser läuft bis du auf "Stop" klickst. Wenn der Timer gestoppt wird, wirst auf aufgefordert eine Beschreibung hinzuzufügen.

> Wie genau muss ich meine Zeit erfassen?

Grundsätzlich muss alles gebucht werden. Jeder Aufwand, der anfällt muss gerundet auf 15 Minuten verbucht werden. Das ist gerade zu Beginn, wenn man es noch nicht kennt, eine grosse Angewöhnung.

> Wie muss die Beschreibung aussehen?

Die Beschreibung richtet sich an den Kunden. Der Kunde erhält einen Arbeitsrapport mit allen Zeiterfassungseinträgen. Er sieht welche Einträge abgerechnet werden und welche nicht. Für jeden Eintrag sieht er die Beschreibung.

💡 Es ist empfohlen mindestens einen Satz für eine Stunde Aufwand zu schreiben. Auch sollte die Beschreibung nicht dem Aufgabentitel entsprechen.

> Wie wird entschieden ob Aufwand abgerechnet wird?

Beim Erfassen des Zeit-Eintrags wird entschieden ob der Aufwand abgerechnet werden soll oder nicht. Jede Aufgabe von Kundenprojekten ist mit einer Auftragsposition verbunden. Die Auftragsposition führt zu einer Abrechnung.

💡 Die Aufgaben "Projektadministration" und "Know-how" sind mit der Position "Kulanz" verbunden. Die dazugehörigen Zeiterfassungseinträge werden zu 0 CHF verrechnet und im Arbeitsrapport aufgeführt. Wir möchten Kunden zeigen, welche Aufwände wir tätigen und nicht verrechnen.

Wichtig!: Bevor die Rechnungen erstellt werden, validiert die Projektleiterin die Zeiterfassungseinträge des Projekt. In Folge der Validierung können Einträge gekürzt, aufgeteilt oder gelöschen. Der Projektleiter ist für die Abrechnung verantwortlich.

> Wie wähle ich die richtige Auftrasgposition aus?

Die Auswahl der Auftragsposition wird schwierig, wenn der Kunde mehrere Verkaufsaufträge hat. Um die Auswahl zu vereinfachen kann auf einem Auftrag eine interne Referenz hinterlegt werden. Diese Referenz erscheint im Anzeigenamen der Auftragspositionen.

> Wie sieht das im Fall Stundenlohn aus?

Gute Projektleitung soll zu einer guten Verrechenbarkeit führen. Der Projektleiter muss sicher stellen dass die geplanten verkauften Stunden den effektiven Stunden entsprechen. Eine Überschreitung des Budget muss kommuniziert werden. Dem Kunden gegenüber sprechen wir bei der Projektarbeit von einem Kostendach.

## Todos

Die Aufgabenplanung ist persönliche. Wie man die Aufgabe plant ist Sache des Bearbeiters.

> Welchen Zweck haben Aufgabenbeschreibungen?

Der Projektleiter interessiert sich für den Projektstatus. Er muss beim Aufruf des Boards eine aktuelle Sicht auf das Projekt haben. Das gelingt, wenn Mitarbeitende ihre Aufgaben in die richtige Spalte schieben.

Beim Aufrufen einer Aufgaben sieht man die Beschreibung. Wichtig ist, dass es eine hat. Der Inhalt richtet sich an die zugewiesenen Personen. Die Beschreibung gibt Auskunft über den Arbeitsinhalt.

> Was sind Todos?

Mit der Editor-Aktion "/Checklist" können Checkboxen erstellt werden. Diese Todos können offen oder erledigt sein. Das ist die granularste Form um Tätigkeiten zu definieren.

💡 Weil Todos nicht zugewiesen werde können, kann man als Alternative in ()-Klammern das Kürzel der Person anfügen.

💡 Die offenen Todos müssen immer als erstes sichtbar sein.

> Wie wird eine Aufgabe zusammengefasst oder zerlegt?

Aufgaben können zur Erledigung unterschiedlich lange dauern. Eine Aufgabe kann in mehrere Aufgaben aufgeteilt und verbunden werden. Stellt man sich Grösse einer Aufgabe auf einer Spannweite vor, haben wir dieses Anfangs- und Endpunkte:

- **Kleinste Einheit (XS)**: Eine Aufgabe sollte nicht kleiner sein als ein Todo.
- **Grösste Einheit (XL)**: Die maximale Grösse einer Aufgabe ist die Projektphase.

💡 Auf jeder Aufgabe können andere Aufgaben als Blocker oder Teilaufgabe verlinkt werden.

> Wie nutze ich Odoo Aktivitäten?

Im Odoo Chatter kann man Aktivitäten zur Erledigung erstellen. Wir nutzen diese Aktivitäten nicht für das Projektmanagement. Jedoch dürfen Aktivitäten für die persönliche Aufgabenplanung genutzt werden.

## Kommunikation

Wir nutzen Odoo zur Kommunikation mit Kunden und für den internen Dialog.

> Wie sende ich eine Nachricht an einen Kunden?

Zuerst stellt sich die Frage in welchem Kontext die Anfrage gemacht werden soll. Die Kommunikation erfolgt mit dem Odoo Chatter und dieser ist immer an ein Dokument gebunden. In den meisten Fällen nutzt man den Chatter auf einer Projektaufgaben.

Mit der Aktion "Nachricht senden" wird an den Kontakt (partner_id) und an alle Follower (follower_ids) des Dokuments eine E-Mail zu gestellt. Bevor du eine Nachricht sendest, stell sicher, dass die Liste der Follower korrekt ist.

💡 Die Eingabe-Maske kann vergrössert werden. In der vergrösserten Ansicht werden die Empfänger aufgelistet.

Die Odoo-Kommunikation ist hier weiter beschrieben: <https://www.odoo-wiki.org/best-practice-communication-with-odoo.html>

> Wie erfahre ich von der Antwort eines Kunden?

Wenn ein Kunde auf eine E-Mail von Odoo antwortet, landet die Antwort-Mail im Postfach von Odoo. Odoo ordnet die Nachricht dem Dokument zu und versendet eine Benachrichtigung an alle Follower.

> Wie schreibe ich meine Kollegen an?

Auch im Austausch mit Mitarbeitenden ist der Kontext entscheidend. Im Chatter wählst du "Notiz hinterlassen" und nutzt das @-Symbol um Personen zu markieren. Beim versenden erhalten diese eine Benachrichtigung. 

💡 In der Dialog-App gibt es Kanäle. Diese dienen zum allgemeinen Austausch.

> Was ist der Unterschied zwischen Nachrichten und Notizen?

Nachrichten versenden führt zu einem E-Mail. Notiz hinterlassen führt zu einer Protokollierung.

💡 Der falsche Knopf ist schnell gedrückt.
