---
draft: false
kind: explain
section: blog
---

Wie man die Werkzeuge aus Data Science für Odoo effizient einsetzen kann.

Wer heutzutage Data Science studiert, lernt [Python](https://www.python.org/) als Programmiersprache und [Jupyter](https://jupyter.org/) als Entwicklungsumgebung kennen. Die Zeiten von [SPSS](https://www.ibm.com/products/spss) gezählt. Es gibt noch [R](https://www.r-project.org/) und [RStudio](https://posit.co/products/open-source/rstudio), doch das hat immer weniger Relevanz. Python wurde zu universellen Sprache und kommt in verschiedenen Bereichen zum Einsatz. Machine Learning, Data Analysis, Visualization, Automatisierung und auch die Entwicklung von Large Language Models sind von Python getrieben.

Dieses Potenzial ist besonders spannend für Odoo. Odoo eine Business Management Software und das Odoo Backend ist in Python geschrieben. Jeder Statistiker und jede Datenwissenschaftlerin kann Python-Code lesen und schreiben.

Bei Mint System haben wir Personen mit diesem Profil angestellt und Fragen uns wie wir die Welt der Data Science und Odoo besser verbinden kann. Der Austausch von Daten hat in Odoo eine zentrale Bedeutung.

### Data Science in Odoo Projekte

Daten wie beispielsweise Kontakte müssen bei der Implementation eines Odoo Projekts von einem bestehenden System extrahiert, angepasst und importiert werden. Daten wie EDI-Dokumente müssen vorgängig bearbeitet werden damit diese ins Odoo geladen werden können. Es gibt auch den umgekehrten Weg. Daten sollen aus Odoo exportiert und weiter verarbeitet werden.

Eine kurze Übersicht dieser Berührungspunkte:

- Extract Load Transform (ETL)
- Data Export and Transformation
- Data Syncing
- Data Analysis and Visualization
- Machine Learning

### Flexibilität mit Jupyter

Die eingebauten Kapazitäten von Odoo um diese Bereiche abzubilden sind begrenzt. Odoo lässt sich beliebig mit Modulen sprich Python-Code erweitern. Doch gerade in diesen Bereiche wünscht man sich viel Flexibilität. Zum Beispiel möchte man im laufenden Betrieb ein neues Feld zum Datensatz hinzufügen oder einen Parameter vom Pytorch-Model anpassen.

Diese Flexibilität bieten Jupyter Notebooks. Jupyter Noteboks enthalten Dokumentation, Instruktion und Resultat in einem Dokument. Bestehende Python-Bibliotheken wie Pytorch, pandas, Matplotlib oder scikit-learn können in Notebooks geladen und verwendet werden.

Mit diesen Tools lassen sich grossen Datenmengen blitzschnell verbinden. In der Kommunikation mit Odoo wird dann die Schnittstelle (API) zum Flaschenhals. Die Daten sind ready, brauchen aber viel Zeit bis diese im System sind. 

### Integration von Jupyter Notebooks

Wir haben uns gefragt, wie wir Jupyter Notebooks mit Odoo verbinden können, ohne die Odoo-API zu nutzen und ohne einen direkten Zugriff auf die Odoo-Datenbank zu machen. Das Ergebnis sind zwei Odoo Module _Jupyter Lab_ und _Jupyter Notebook Run_.

Mit dem ersten Modul kann in Odoo eine Jupyter Lab Umgebung erstellen, initialisieren und starten.

`Jupyter Lab Running.png`

Mit einem Link gelangt man auf die Jupyter Lab Umgebung. Notebooks in diesem Kontext erhalten Zugriff auf das Odoo Datenmodell. 

`Jupyter Lab Odoo Notebook.png`

Das zweite Module ermöglicht die Ausführung von Jupyter Notebooks ohne dass man die Jupyter Lab Umgebung starten muss.

Der Benutzer kann ein Notebook aufrufen und einen Dialog zur Ausführung starten. Parameter oder Dateien können an das Notebook übergeben werden.

`Jupyter Notebook Run Wizard.png`

Das Resultat der Ausführung wird in Odoo angezeigt.

`Jupyter Notebook Run Result.png`
