# Vorgehensmodell Odoo Projekte

## Einleitung

Das vorliegende Vorgehensmodell für ERP Projekte beschreibt die Systematik zur Implementierung der Managementsoftware Odoo in Unternehmungen.

## Rollen

In der Projektarbeit sind auf Seite Mint System und Kunde unterschiedliche Rollen zu besetzen. Im folgenden Kapitel werden sie beschrieben.

### Projektleiter (Mint System)

Der Projektleiter ist der Hauptentscheidungsträger des Projekts. Er ist gleichzeitig Projektmanager, Business Analyst und Produktexperte.

Als Projektmanager leitet er das Projekt durch:
* die Definition des Projektplans und dessen konsequenten Umsetzung
* die Fokussierung auf die Hauptziele
* den Miteinbezug des SPoC (Single Point of Contact) in das Projekt
* den richtigen Einsatz von Ressourcen
* die Berücksichtigung der Risiken

Als Business Analyst und Produktexperte hat er das Ziel, die Dinge möglichst einfach zu halten.

Seine Aufgaben sind:
* Entscheiden, wie bestimmte Anforderungen umgesetzt werden können    
* die Wünsche des Kunden hinterfragen und seine Erwartungen lenken
* Konfiguration von Odoo
* Datenmigration
* das Schreiben der Spezifikationen für zusätzliche Funktionen (falls Entwicklungen erforderlich sind)
 
Der Projektleiter ist der Hauptansprechpartner für den Kunden während des gesamten Projekts.

### Projektdirektor (Mint System)

Bei grösseren Projekten oder in einem hochpolitischen Umfeld wird ein Projektdirektor ergänzend zum Projektleiter eingesetzt. Während sich der Projektleiter auf die Umsetzung des Projektes konzentriert, hilft der Projektdirektor bei der Kommunikation des Projekts und lenkt die Erwartungen der Führungskräfte auf einer abstrakteren Ebene.

Seine Rolle besteht darin, die Entscheidungsträger auf dem Laufenden zu halten und er übernimmt folgende Aufgaben:
* Berichterstattung über den Projektfortschritt an das Steering Committee
* Verfolgung der Effizienz des Projekts und (falls erforderlich) Umsetzung von Massnahmen

Im Gegensatz zum Projektleiter arbeitet der Projektdirektor nicht Vollzeit an einem Projekt, aber er überblickt es von Anfang bis Ende. Bei kleineren Projekten wird diese Rolle in der Regel direkt vom Projektleiter übernommen.

### App-Experte (Mint System)

Für speziell komplexe Anwendungen (Finanzen, Lager, Marketing, Fertigung, Website) werden die Personen mit dem grössten Fachwissen als Odoo App-Experten einbezogen.

Sie haben ein tiefes funktionales Wissen in branchenspezifischen Odoo Funktionen und solides Erfahrungswissen.

Die App-Experten sind nicht Teil des Projekts. Sie arbeiten in verschiedenen Projekten gleichzeitig. In der Regel werden sie für die GAP-Analyse hinzugezogen.

### Entwickler (Mint System)

Nicht alle Projekte erfordern Entwickler. Sie werden situativ beigezogen wenn kundenspezifische komplexe Anpassungen gefordert sind.

### Single Point of Contact (SPoC) (Kunde)

Um die Umsetzung so schnell, einfach und kosteneffizient wie möglich zu machen, braucht es einen starken Ansprechpartner auf der Seite der Kunden. Diese Person muss die erforderlichen Fachkenntnisse mitbringen Der Projektleiter arbeitet eng mit dem SPoC eng zusammen.

Der SPoC fokussiert darauf,
* das Projekt eng zu begleiten
* ein Botschafter für das Projekt zu sein, der die Endbenutzer überzeugt
* die Projektplanung mit der Agenda des Unternehmens abzustimmen

Als Koordinator auf Seiten Kunde hat der SPoC den vollen Überblick über das Projekt. Er kümmert sich um folgende Aufgaben:
* Sammlung und Bewertung der Projektanforderungen
* Schulung der Endbenutzer mit der Unterstützung des Projektleiters (es gibt keinen besseren Ausbilder als ein Kollege, der die internen Prozesse kennt)
* ein interner Odoo-Experte zu werden (und damit erste Ansprechperson für die Unterstützung der Kollegen)

Entscheidende Anforderungen an den SPoC sind:
* für das Projekt verfügbar sein
* die Kompetenz haben, Entscheidungen zu treffen
* bei MitarbeiterInnen anerkannt

### Extra-Rollen (Kunde)

Bei grossen Projekten könnten zusätzliche Rollen definiert werden:

**Steering Committee**

Entscheidungsträger des Kunden zusammen mit dem Projektdirektor/-leiter von Mint System.

Das Gremium verantwortet die Methodik und die Überwachung des Projekterfolgs.

**Super-User**

Ergänzend zum SPoC fungieren die Super-User als Experten in ihren spezifischen Arbeitsbereichen und unterstützen den SPoC bei der Definition der Anforderungen. Sie testen und validieren die Ergebnisse.

**Sponsoren**

in der Regel der CEO oder CFO des Kunden die das Projekt finanziell verantworten. Sie fokussieren auf die Hauptziele und sind normalerweise Teil des Steering Committees.

## Projektphasen

Die folgende Tabelle zeigt die Projektphasen und deren relativen Zeitbedarf.

| Phase             | Relativer Zeitbedarf | Inhalt                                                                                   |
| ----------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| GAP-Analyse       | 10%                  | Geschäftsanalyse, GAP-Analyse, Projektphasen & Budget                                    |
| Kick-Off          | 5%                   | Beteiligte mit Vorgehensmodell vertraut machen und Grundlagen schulen                    |
| Implementierung   | 80%                  | Iterative Implementierungsschritte: Analyse, Umsetzung, Validierung, Super-User-Schulung |
| Go-Live           | 5%                   | Benutzerschulung, Verbesserungen                                                         |
| Second Deployment | variabel             | Anwendungsumfang erweitern, Kundenentwicklungen umsetzen                                 |

![[Classic Project Journey.svg]]

### GAP-Analyse

_Geschäftsanalyse, GAP-Analyse, Projektphasen & Budget_

**Inhalt**

Vertreter von Mint System treffen sich mit dem potentiellen Kunden und diskutieren die Projektziele, die Motivation und die Risiken.

**Ziele**

* Die Kundenanforderungen sind mit den Möglichkeiten der Software abgeglichen
* Zweifel an der Durchführbarkeit des Projekts sind ausgeräumt
* Der designierte Projektleiter hat ein klares Bild über das Projekt
* Die Projektplanung und das Budget sind diskutiert

**Ergebnisse**

* Mapping zwischen Geschäftsanforderungen und Produktmerkmalen
* Projektplan Makro
* Budget
* Proof-of-Concept (POC): Demo der wichtigsten Geschäftsabläufe

### Kick-Off

_Beteiligte mit Vorgehensmodell vertraut machen und Grundlagen schulen_

**Ziele**

* Der SPoC ist mit der Methodik vertraut und identifiziert sich mit den Projekt-Visionen
* GAP-Analyse mit Machbarkeitsbeurteilung (falls noch nicht vorhanden)
* Projektplan Makro
* Der SPoC ist motiviert und bereit, Zeit in das Erlernen von Odoo zu investieren

### Implementierung

In der Kick-Off-Phase wurde die entworfene Lösung präsentiert. In der nächsten Phase "Implementierung" arbeitet das Projektteam in kurzen Zyklen um jede jede Woche neue Funktionen in Betrieb zu haben. Die Lösung wird kontinuierlich durch den Projektleiter und den SPoC validiert. Die Konfiguration, der Datenimport und spezifische Entwicklung werden (falls erforderlich) parallel behandelt.

**Konfiguration**

Der Projektleiter konfiguriert die Software. Er implementiert zusätzlich die erforderlichen Anpassungen mit mit der Studio-Anwendung, aber keine kundenspezifische Entwicklung.

Sobald die Anwendungen konfiguriert sind, involviert der Projektleiter den SPoC und die Super-User mittels einer Reihe von Workshops und Schulungen um die Funktionen und Einstellung zu zu validieren.

**Datenimport**

Je nach Umfang und Komplexität der Daten werden sie durch den Projektleiter oder den Entwickler importiert. Basierend auf Anweisungen durch den Projektleiter sammeln der SPoC und die Super-User die Daten und bereiten die Files für den Import vor.

Die Datenmigration vom alten zum neuen System kann zu Verzögerungen führen. Es ist wichtig, die richtigen Entscheidungen zu treffen. Folgende Punkte sind zu beachten:

1.  Der Produktionsstart darf nicht aufgrund der Datenqualität verzögert werden.  
    Das Importieren von möglichst sauberen Daten ist optimal. Dies darf aber das Einhalten von Terminen nicht beeinträchtigen. Eine Nachbesserung der Daten kann zu einem späteren Zeitpunkt abgeschlossen werden.
2.  Stammdaten importieren ist grundsätzlich sinnvoll. Die vollständige Historie migrieren sollte aber möglichst vermieden werden. Begründung: Hohe Kosten, viel Zeitaufwand, wenig Wertschöpfung

**Kundenspezifische Entwicklungen**

In dieser Phase genehmigt der Projektleiter, was entwickelt werden sollte. Normalerweise Funktionen die zum Betrieb des Unternehmens notwendig sind (in Abgrenzung zu "nice-to-have").

Der Projektleiter schreibt die Spezifikationen einschliesslich der Szenarien die getestet werden sollen. Der SPoC bescheinigt die Konformität mit den Geschäftsanforderungen.
Anschliessend übernimmt der Entwickler und realisiert die Anforderungen.

Der Projektleiter testet die neuen Funktionen und integriert sie im System. Sobald die Entwicklung validiert ist erfolgt die Schulung des SPoC und der Super-User.
Der SPoC trägt die Verantwortung für die Freigabe der Entwicklung.

Falls Probleme festgestellt werden informiert er den Projektleiter. Dieser wiederum setzt sich mit dem Entwickler in Verbindung um die Fehler zu beheben und die notwendigen Änderungen vorzunehmen.

**Validierung & Schulung von End-Usern**

Sobald alle Anforderungen einer Phase erfüllt sind, ist der SPoC für alle abschliessenden Tests verantwortlich und gibt grünes Licht für die Inbetriebnahme.

Als interne Odoo-Experten organisieren und schulen der SPoC und/oder die Super-User alle End-User.

Gleichzeitig ist der Kunde dafür verantwortlich das Benutzerhandbuch zu schreiben. Die Dokumentation muss mit den internen Prozessen und der Terminologie des Kunden übereinstimmen.

### Go-Live

Wenn es an der Zeit ist den Schalter umzulegen, könnten unerwartete Probleme auftauchen. Oft sind sie auf zwei Ursachen zurückzuführen:

* Die Datenbank ist nicht vollständig getestet  
    Es muss sichergestellt sein, dass die Super-User alle Prozesse getestet haben
* Die Anwender sind nicht gut geschult:  
    Wenn die Schulung vor Monaten durchgeführt wurden, ist inzwischen vielleicht Vieles vergessen worden. Wenn sie nicht selbst geübt haben, haben sie möglicherweise kritische Schritte verpasst.

### Second Deployment

Einen Monat nach dem Initial Deployment überprüft der Projektleiter die Liste der verbleibende Entwicklungen die in Phase 1 nicht gestartet wurden (d.h. Entwicklung die auf später verschoben wurden weil sie nicht unbedingt notwendig sondern "nice-to-have" sind.)

Mit dem Feedback der Benutzer wird die Priorisierung der spezifischen Entwicklungen neu beurteilt (typischerweise stellt sich heraus, dass 50% der Entwicklungen nicht notwendig waren und inzwischen neue Entwicklungen beantragt wurden).