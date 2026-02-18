---
section: training
kind: tutorial
---

Umgang mit LLMs und Tooling in der Entwicklungsumgebung.

## Über

> Was ist ein Large Language Model (LLM)?

Ein LLM ist ein computerlinguistisches Wahrscheinlichkeitsmodell. Es stellt Wort- und Satzfolge-Beziehungen aus einer Vielzahl von Textdokumenten und einem rechenintensivem Trainingsprozess her.

 Als selbstanpassende Sprachmodelle können sie verschiedene Aufgaben in natürlicher Sprache ausführen, z. B. das Zusammenfassen, Übersetzen, Vorhersagen und Erstellen von Texten.

> Wast ist ein LLM Chat?

Über einen Dialog kann mit einem LLM gechattet werden. Der Chat stellt ein Kontext-Fenster und den Chat-Verlauf in jeder Interaktion zur Verfügung. Das LLM kann so vergangene Antworten bei neuen Fragen berücksichtigen und sich Dinge "merken". 

> Was ist ein LLM Agent?

Ein LLM Agent kann im Vergleich zum Chat mit zusätzlichen Werkzeugen interagieren. Die sog. Tools erlauben es beispielsweise Daten vom Computer zu lesen und zu schreiben.

Mit einem Kommandozeilenwerkzeug wird der LLM Agent angesteuert. In einem Chat teilt der Anwender die Aufgabe mit und der Agent arbeitet solange bis die Aufgabe erfüllt ist.

> Was ist ein LLM Provider?

Ein LLM Provider stellt Modelle mit API als Dienstleistung bereit. Über die API können Anwendungen wie Chats oder Kommandozeilenwerkzeuge auf verschiedene Sprachmodelle zugreifen.

> Was ist ein LLM Router?

Der LLM Router verbindet die APIs von verschiedenen LLM Provider. Damit kann der Anwender über eine einheitliche API auf verschiedene Sprachmodelle und Provider zugreifen.

## Hosting

> Wo werden diese Dinge gehostet/angeboten?

LLM APIs werden als Dienstleistung von Service-Providern wie Infomaniak angeboten. Die Liste von Providern ist sehr umfassend: <https://opencode.ai/docs/providers/>

Den LLM Chat hosten wir selber. Der LLM Agent wird lokal auf der Kommandozeile ausgeführt. Und als LLM Router nutzen wir ein externes Angebot.

> Nach welchen Kriterien wählen wir die LLM-Dienstleistungen aus?

- **LLM**: Verfügbar als Open Weights und im besten Fall Open Source.
- **LLM Provider**: Provider ist in der Schweiz oder in Europa. Chat-Protokolle werden nicht als Trainingsdaten verwendet.
- **LLM Chat**: Ist eine Open Source Software und kann selber gehostet werden.
- **LLM Agent**: Ist eine Open Source Software und kann lokal ausgeführt werden.
- **LLM Router**: Verbindet europäische LLM Provider. Transparentes Pricing.

## LLM auswählen

> Wie unterscheiden sich LLMs voneinander?

Es gibt Modelle, die aufgrund der Trainingsdaten auf bestimmte Anwendungsfälle spezialisiert sind. Beispielsweise wurde [StarCoder](https://huggingface.co/bigcode/starcoder) mehrheitlich mit Computer-Code trainiert und eignet sich deshalb gut für Programmier-Aufgaben.

> Wie sehe ich ob ein Modell über Tools verfügt?

Auf Listen von Models kann nach diesem Attribut gefiltert werden: <https://cortecs.ai/serverlessModels?tags=Tools>

> Was ist ein "Thinking" LLM?

Modelle mit der Fähigkeit "Reasoning" oder "Thinking" absolvieren einen internen Prozess bevor sie die Antwort liefern.
## Chat starten

> Wie kann ich mit einem LLM chatten?

Du kannst entweder über die Weboberfläche [[LLM Chat Mint System]] oder über die Kommandozeile mit `llm` kommunizieren.

> Was ist der Nutzen?

LLM Chats sind eine gute Hilfe bei der Verarbeitung von unstrukturierten Dokumenten oder können gute Hinweise auf Fehlermeldungen liefern.

> Wie richte ich die Kommandozeile ein?

Du kannst das [[llm]] cli mit den [[Mint System Dotfiles]] installieren. Beim Einrichten wird automatisch eine Verbindung mit den Infomaniak AI Tools gemacht.

## Agent ausführen

> Wie sieht der Coding Workflow aus?

Details zum Workflow sind hier beschrieben: <https://janikvonrotz.ch/2026/02/17/working-with-llm-agents/#workflow>

> Wie kann ich OpenCode lokal installieren?

Du kannst das OpenCode cli mit den [[Mint System Dotfiles]] installieren.

> Mit welchem Provider soll ich OpenCode verbinden?

Verwende den Anbieter _Cortecs_, den API-Key findest du in KeePass.

> Was ist der Plan und Build Modus?

Im Plan-Modus macht der Agent keine Änderungen an Dateien und formuliert einen Plan um die Aufgabe zu lösen. Im Build-Modus nutzt der Agent die verfügbaren Tools um die Aufgabe zu erledigen.

> Was ist das `AGENTS.md`?

Das `AGENTS.md` ist eine Readme-Datei, die sich an den Agenten richtet. Damit wird dem Agenten den benötigten Kontext sowie Erklärungen zum Projekt geliefert. Das Dokument soll die Arbeit des Agenten vereinfachen und Fehler vermeiden.

> Wie erstelle ich einen Prompt?

Wenn das Projekt über einen `prompts` Ordner verfügt, kannst du mit `task create-prompt "Titel des Prompts"` einen Prompt anlegen. Erweitere den Abschnitt _Task_ mit der Aufgabenbeschreibung.

> Wie führe ich einen Prompt aus?

Starte `opencode` im Terminal und gibt den Pfad zur Prompt-Datei ein. OpenCode sollte erkennen, dass es sich um eine Aufgabe handelt.