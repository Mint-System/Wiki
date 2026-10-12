---
title: Input - pormptl.md und Pi
section: training
kind: tutorial
---

## Einleitung

Im ersten Teil wie immer Theorie und im zweiten Teil Anwendung.

Zuerst müssen wir ein paar Begriffe klären. In den folgenden Abschnitt der Englische Begriff und eine überspitzte Erklärung.

### Claude (Klaus)

Claude steht inzwischen für vieles. Ist es ein Model, eine Smartphone-App oder eine lebendig gewordene Sohn von Anthropic (Anthropisch)? In diesem Kontext ist eine proprietäre Sammlung von ai-Produkten. 

### Model (Viel Text)

Kurz das LLM (Large Language Model). Eine grosse Datei mit viel Text. Nur wurden die Text-Stücke zerlegt und nach deren Zusammenhang gewichtet. Es entsteht eine Topologie aus Buchstaben (Tokens).

### AI (Afrikanische Intelligenz)

Ohne Open* gäbe es keine LLMs und die Ausbeutung von Klick-Wokern in Nairobi keine gelabelten Daten. Den Intelligenzbegriff als solchen gilt es zu vermeiden. Mit nur zwei Klicks landet man von https://en.wikipedia.org/wiki/Intelligence via "g factor" in der Eugenik.

### Harness (Gurtzeug)

Ermöglicht dem LLM im weitesten Sinne die Fähigkeit als Agent zu agieren. Im Engsten Sinne ist eine Schleife für Prompts. In diesm Input schauen wir uns [Pi](https://pi.dev/) an.

### Inference (Schlussfolgerung)

Man nehme ganz viel Arbeits- und Grafikspeicher und lade das ganze Model hinein. Man füge einen Prompt hinzu und rauskommt eine Schlussfolgerung des Models. Mit der sog. Inference erhalten wir die statistisch wahrscheinlichste Zusammensetzung von Buchstaben auf unsere in Token zerlegt Fragen. 

### Inference Provider (Dienstleister für Schlussfolgerungen)

Weil Arbeits- und Grafikspeicher und sowie so alles teuerer geworden ist, können jene die diese Ressourcen verkaufen. Das nennt sich Tokenomics. Mein zerlegt seine Prompt in Tokens und schickt in an einen Inference Provider. Für die Anfrage und die Anzahl Tokens bezahlt man.

Zum Glück gibt es viele Provider. Der günstigste mit den meisten Models gewinnt! Nich nur, wir bevorzugen Anbieter in der Schweiz.

Infomaniak: 1069 Hits für CHF 22.277\
Hugging Face: 279 Hits für $20.53\
Scaleway: Pending

### Agent (Schlaue Schleife)

Der Schlaumeier auf dem Computer. Das es sich hier um einen Agenten handelt ist natürlich Quatsch. Es wirklich nichts mehr als eine schlaue Schleife. Der Agent wird mit einem Prompt gefüttern. Im Prompt sind Anweisungen zur Erledigung einer Aufgabe: "Kaufe mir 7 Eier im Internet". Der Agent erhält noch einen System-Prompt: "Du bist schlauer Einkäufer" und bestimmte Fähigkeiten: "Mit Firefox kannst du im Web surfen".

Dann legt der Agent los. Er macht sich "Gedanken" und versucht als erstes die Aufgabe zu verstehen. Er entwickelt ein Vorgehen (Plan) und wenn er sich "sicher" ist, dann legt er los (Execute). Er arbeitet solange an der Aufgabe bis er diese Erledig hat.

Am Ende bekommt vielleicht 7 Eier nach Hause geliefert. Es können aber auch 7000 sein. Also aufgepasst.

### Anthropomorphism (Vermenschlichung)

In der letzten Erklärung wurde Begriffe wie "Gedanken" in Anführungs- und Schlusszeichen gesetzt. Diese Begriffe vermenschlichen die Technik und das ist nicht gut. Da stimmt sogar der Papast zu.

Rudolf Steiner würde dagegen halten. Aber lassen wir die Diskussion beiseite. Wichtig ist, dass man versteht, dass wenn man mit einem LLM interagiert, dieses vorgibt ein Mensch zu sein. Das ist by design und leider nicht immer hilfreich.

## Taskfile

Was Pi ist wissen wir inzwischen. Doch was ist das `prompt.md`?

Das `prompt.md` ist eine Erfindung von https://taskfile.build/ und das Taskfile ist eine Erfindung von Mint System. Es ist eine Art und Weise wie wir mit LLMs interagieren wollen.

### prompt.md

Man sollte nicht einfach los prompted, sondern sich zuerst Gedanken mache (Think before you code)  was man erreichen will. Mit dem Befehl `create-prompt` wird eine `prompt.md` Datei mit diesem Inhalt erstellt:

```markdown
---
title: "$PROMPT_TITLE"
author: "$PROMPT_AUTHOR"
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# $PROMPT_TITLE

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

@Developer Provide instructions with clear objective here.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker Set frontmatter state to completed and update date, harness and model. If you have access to session info also add token count.
```

Das sind einerseits Arbeitsanweisungen für den Agenten markiert mit `@Clanker` und anderseits Anweisungen für den Author `@Developer`. Im Abschnitt "Task" verfasst der Entwickler die Aufgaben.

Er macht sich Gedanken wieviele Eier es braucht und man die Aufgabe falsch verstehen kann. Er gibt Anweisungen wie der Clanker vorgehen soll. Erst wenn sich der Entwickler sicher ist, führt er den Prompt aus.

### prompt-log

Jede Ausführung wird im prompt-log registriert. Im Git-Jargon ist das prompt-log ein Branch. Hier ein Beispiel: https://codeberg.org/Mint-System/taskfile.build/src/branch/prompt-log

Mit dem Befehl `commit-prompt` wird das aktuelle `prompt.md` registriert. Der letzte Commit wird verlinkt. So bleibt nachvollziehbar was der Prompt bzw. der Clanker gemacht hat.

## Workflow

Nun wie sieht der Workflow in der Praxis aus? Wir wissen jetzt was das `prompt.md` und was Pi ist. Schauen wir uns an wie der Prompt mit Pi verarbeitet wird. 

### Prompt erstellen

Der Wofklow ist ganz einfach. Wir öffnen das Terminal und navigieren in eine Projekt mit einem Taskfile.

```bash
cd ~/my-project
task create ""
```

### Prompt mit Pi ausführen


```bash

```

### Prompt committen

```bash

```

## Hands-on

Bist du bereit das selber zu machen? Geht ganz einfach! Wie bei Jamie Oliver wurde bereits alles vorgekocht. Du musst nur noch die Anweisungen befolgen.

### Tools installieren

### Ein ETL-Projekt erstellen

### Ein Jupyter-Notebook generieren