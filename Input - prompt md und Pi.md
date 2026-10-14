---
title: Input - prompt.md und Pi
section: training
kind: tutorial
---

## Einleitung

Im ersten Teil widmen wir uns der Theorie und im zweiten Teil der Anwendung. In diesem Input lernst mehr über den Umgang und Arbeit mit LArge Language Models (LLM).

Bevor wir loslegen müssen wir ein paar Begriffe klären. In den folgenden Abschnitt der Englische Begriff und eine überspitzte Erklärung.

### Claude (Klaus)

Claude steht inzwischen für vieles. Ist es ein Model? Eine Smartphone-App? Oder der lebendig gewordene Sohn von Anthropic? Fakt ist, es ist eine proprietäre Sammlung von ai-Produkten. Dasselbe gilt für die Produkte von OpenAI. Es sind überbewertete proprietäre Lösungen und wiedersprechen dem Open Source Gedanken. 

### AI (Afrikanische Intelligenz)

Ironischerweise gäbe es Open Source und Open Knowledge gar keine LLMs. Die Trainingsdaten wurden im Internet ohne Einwilligung der Autoren abgegriffen. Auch ohne  die Ausbeutung von Klick-Wokern in Nairobi gäbe es keine Bildgeneratoren. Das ist die Schattenseite der Technologie.

In diesem Zusammenhang gibt es noche viele weitere Problem (Data Centers, Wassermangel, TechBros, Escapism, Doomerism, Kopplung mit Militär, Einsatz KI im Krieg, ...). Den Intelligenzbegriff gilt es zu vermeiden. In nur zwei Klicks landet man von https://en.wikipedia.org/wiki/Intelligence via "g factor" in der Eugenik. Auf moralischer Ebene läuft mit LLMs also vieles schief.

Gleichzeit verändert KI spürbar die Arbeitswelt. Sei es als Ersatz für Suchmaschinen, zum Lösen der Hausaufgaben oder bei der Programmierung von Software. Daher stellt sich die Frage was können wir beeinflussen und was nicht. Als Konsumenten haben wir die Wahl bei den Modellen, Anbietern und Workflow. Das ist schon mal ein Anfang.

### Model (Viel Text)

Was sind nochmals Modelle? Die Open Source und Open Weights Modelle sind Dateien in unterschiedlichen Grössen gefüttert mit viel Text. Die Text-Stücke werden zerlegt und nach deren Zusammenhang gewichtet. Es entsteht eine Topologie aus Buchstaben (Tokens).

Auf https://huggingface.co/ findet so ziemlich alle verfügbaren Modelle. Um ein solches Model zu trainieren braucht es viel Rechenleistung. Es braucht ganze Datenzentren um ein fähiges Model zu kreieren.

### Prompts (Befehle)

Prompts sind Anweisungen an eine Modell. Es kann eine Frage sein oder ein Befehl.

### Harness (Gurtzeug)

Ermöglicht im weitesten Sinne dem LLM die Fähigkeit als Agent zu agieren. Im Engsten Sinne ist eine Schleife für Prompts. In diesm Input schauen wir uns [Pi](https://pi.dev/) an.

### Inference (Schlussfolgerung)

Man nehme ganz viel Arbeits- und Grafikspeicher und lade das ganze Model hinein. Man füge einen Prompt hinzu und rauskommt die Schlussfolgerung des Models. Mit der sog. Inference erhalten wir die statistisch wahrscheinlichste Zusammensetzung von Buchstaben auf unsere in Token zerlegten Prompt.

### Inference Provider (Dienstleister für Schlussfolgerungen)

Weil Arbeits- und Grafikspeicher teuer geworden ist, können jene, die diese Ressourcen haben, sie verkaufen. Als Kunde zerlegt man den Prompt in Tokens und schickt in an einen Inference Provider. Für die Anfrage und die Anzahl Tokens bezahlt man.

Zum Glück gibt viele Anbieter. Der Günstigste mit den meisten Models gewinnt! Aber nicht nur, wir bevorzugen Anbieter in der Schweiz. Für unsere Arbeit schauen wir uns diese Anbieter an:

Infomaniak: 1069 Hits für CHF 22.277\
Hugging Face: 279 Hits für $20.53\
Scaleway: Pending

### Agent (Schlaue Schleife)

Das ist der Schlaumeier auf dem Computer. Das es sich hier um einen echten Agenten handelt, ist natürlich Quatsch. Es wirklich nichts mehr als eine programmierte Schleife.

Der Agent wird mit einem Prompt gefüttert. Im Prompt sind Anweisungen zur Erledigung einer Aufgabe: "Kaufe mir 7 Eier im Internet". Der Agent erhält einen System-Prompt dazu: "Du bist ein schlauer Einkäufer" und bestimmte Fähigkeiten: "Mit Firefox kannst du im Web surfen".

Dann legt der Agent los. Er macht sich "Gedanken" und versucht als erstes die Aufgabe zu verstehen. Er entwickelt ein Vorgehen (Plan) und wenn er sich "sicher" ist, macht er die Ausführung (Execute). Er arbeitet solange an der Aufgabe bis diese erledig ist. Ob er aufgibt oder nicht ist eine Frage des Trainings und Parametrierung des Models.

Am Ende bekommt vielleicht 7 Eier nach Hause geliefert. Es können aber auch 7000 sein. Also aufgepasst!

### Anthropomorphism (Vermenschlichung)

In der letzten Erklärung wurden Begriffe wie "Gedanken" in Anführungs- und Schlusszeichen gesetzt. Diese Begriffe vermenschlichen die Technik und das entspricht nicht deren Konstruktion. Da stimmt sogar der Papst zu.

Wenn man mit LLMs interagiert, beispielsweise in einem Chat, geben diese vor ein Mensch zu sein. Oder mindestens versucht unser Hirn im Chat einen Mensch zu finden. Die Grenze ist nicht ganz klar.

## Taskfile

Pi ist ein Harness. Was ist das `prompt.md`?

Das `prompt.md` ist eine Erfindung von https://taskfile.build/ und das Taskfile ist eine Erfindung von Mint System. Es ist eine Art und Weise wie wir mit LLMs interagieren wollen.

### prompt.md

In der Abeit mit LLMs sollte man nicht einfach darauf los prompten. Als erstes muss man sich Gedanken machen was man eigentlich erreichen will (Think before you code). Mit dem Befehl `create-prompt` wird eine `prompt.md` Datei erstellt. Das ist eine Vorlage um die Gedanken in Form von Anweisungen festzuhalten. Das ist die aktuelle Vorlage:

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

Enthalten sind einerseits Anweisungen für den Agenten markiert mit `@Clanker` und anderseits Anweisungen für den Author markiert mit `@Developer`. 

Der Author macht sich Gedanken wie viele Eier es braucht und ob man die Aufgabe falsch verstehen kann. Er gibt Anweisungen wie der Clanker vorgehen soll. Erst wenn sich der Entwickler sicher fühlt, führt er den Prompt aus.

### Prompt-Log

Jede Ausführung wird im Prompt-Log registriert. Im Git-Jargon ist das Prompt-Log ein Branch. Hier ein Beispiel: https://codeberg.org/Mint-System/taskfile.build/src/branch/p
rompt-log

Mit dem Befehl `commit-prompt` wird das aktuelle `prompt.md` registriert. Der letzte Commit wird verlinkt. So bleibt nachvollziehbar was der Prompt bzw. der Clanker gemacht hat.

### OpenSpec

Die Idee vom `prompt.md` und Prompt-Log ist nicht neu. Eine Inspiration dafür war <https://openspec.dev/>. Warum nicht gleich mit OpenSpec arbeiten? Gemäss https://openspec.dev/docs/setup#what-init-installs erstellt das OpenSpec cli im aktuellen Verzeichnis ein `/openspec` Ordner und weitere Dinge. Mit diesem Workflow hat man auf jedem Git-Branch ein OpenSpec setup. Mit dem Prompt-Log ist das zentralisiert.

## Workflow

Wie sieht der Workflow in der Praxis aus? Wir wissen jetzt was das `prompt.md` und was Pi ist. Schauen wir uns an wie der Prompt mit Pi verarbeitet wird. 

### Prompt erstellen

Der Wofklow ist ganz einfach. Wir öffnen das Terminal und navigieren in eine Projekt mit einem Taskfile. Dann erstellen wir ein Prompt-File.

```bash
cd ~/Nextcloud-Build
task create-prompt "Connect to Nextclou and create personal user"
```

Der Editor öffnet sich und bei `@Developer` beschreibt man die Aufgabe.

### Prompt mit Pi ausführen

Wenn der Prompt beschrieben ist, führt man ihn mit diesem Befehl aus:

```bash
task prompt-with-pi
```

Das PI Harness wird gestartet und der Prompt wird als Query mitgeteilt. Pi legt los und bittet nach Erledigung der Aufgabe um eine Review.

### Resultat prüfen

Der Author prüft das Resultat und teil Pi mit ob es passt oder nicht. Es können auch Verbesserungen und Ergänzungen mitgeteilt werden.

Wenn die Aufgabe erledigt, ergänzt Pi das Frontmatter und das Worklog in der Prompt-Datei. Der Author muss nun das Ergebnis selbst committen. Die Commit-Nachricht lässt sich mit diesem Befehl generieren:

```bash
task commit-with-llm
```

### Prompt committen

Nun kann der Prompt im Prompt-Log registriert werden:

```bash
task commit-prompt
```

Dieser Befehl speichert den aktuelle Commit im Frontmatter. Der `prompt-log` Branch wird automatisch gepusht.

## Hands-on (en)

Are you ready to cook a prompt yourself? Everything is ready, simply follow the instructions.

### Install tools

If not done already clone the Mint System dotfiles" <https://github.com/mint-System/dotfiles#usage>.

Open a terminal and move into the `mint-system-dotfiles` project.

```bash
[~]$ cd ~/mint-system-dotfiles
[main][~/mint-system-dotfiles]$
```

Make a copy of the `.env` file and verify project setup:

```bash
cp .env.template .env
task show-project-setup
```

Make sure the KeePass env var points to the `Infrastruktur.kdbx` file.

Now we are going to install the required tools:

```bash
task install sops
task install age
task install llm # Will prompt ofr the KeePass database password
task install pi # Will prompt ofr the KeePass database password
```

Check if pi can make a connection:

```bash
pi "hi"
```

It should use the `infomaniak/moonshotai/Kimi-K2.6` model by default.

### Initialize the ETL project

```bash
[~]$ mkdir odoo-example-etl
[~]$ cd odoo-example-etl
[~/odoo-example-etl]$ task init-project
Init git directory.
Initialized empty Git repository in /home/$USER$/odoo-example-etl/.git/
Create tmp folder.
Copy gitgnore template.
Copy taskfile template.
Copy env template.
Copy agents template.
Copy changelog template.
Touch readme file.
Copy license file.
```

Open the `task` file and remove all help sections except for the Jupyter, LLM and Prompt section.

Init Jupyter Lab:

```bash
task install-jupyter-lab
```

Create a sops config:

```bash
task init-dotenv-sops
Generated age key 'odoo-example-etl' and appended to /home/$USER/.config/sops/age/keys.txt
Create .sops.yaml
Age key file: /home/$USER/.config/sops/age/keys.txt
Age key name: odoo-example-etl
Age public key: age1xjjk2az208g73fmz08r9dh0fdnmhxzm73qa9rrvmdkugjcrrh4sszh202n
sops will use the key from /home/$USER/.config/sops/age/keys.txt automatically.
```

Create a encypted `secrets.env`:

```bash
task create-dotenv secrets secrets
Init .env file: /home/$USER/odoo-example-etl/secrets.env
Encrypted /home/$USER/odoo-example-etl/secrets.env with sops.
Edit with: task edit-dotenv secrets
```

Edit the `secrets.env`:

```
task edit-dotenv secrets
```

And enter this content:

```bash
ODOO_URL=https://jupyter-lab.19.odoo.build/
ODOO_DATABASE=jupyter-lab
ODOO_API_TOKEN= # Copy from KeePass "jupyter-lab.19.odoo.build" entry
```

Save the file and close the editor.

### Generate the Jupyter notebook

Still in the project folder create a prompt:

```bash
task create-prompt "Create a personal Odoo account"
File created:
prompt.md
```

Replace `@Developer` with these instructions:

````markdown
Your goal ist create a Jupyter notebook `setup-odoo.ipynb` that configures Odoo.

Use `ODOO_API_URL=https://$ODOO_URL/json/2` to connect to Odoo. Note that this is the JSON-2 API and not the XML-/JSON-RPC API.See `https://$ODOO_URL/doc` for details.

Alle required env vars are stored in `secrets.env`. You can load the env vars like this:

```bash
eval "$(task show-dotenv secrets)"
```

Set `SOPS_AGE_KEY_FILE=/home/$USER/.config/sops/age/keys.txt` to decrypt.

You can run the notebook with `task run-jupyter-notebook setup-odoo.ipynb secrets`. This should automatically decrypt the `secrets.env` and load the env vars.

The notebook simply creates a personal user account with a random password. Show the password to the user.
````

Save the prompt and execute with Pi:

```bash
task prompt-with-pi
```

### Test the result

Once Pi has finished and asks for review, start the Jupyter lab:

```bash
task start-jupyter-lab secrets
```

Open the Notebook and run.

Try to log in with new user.

## Anwendungsbereiche

Hier eine Liste was man prompten sollte:

- Generierung von Boilerplate Code
- Konvertierung von Datenstrukturen
- Massenmutationen
- Spezifikation einer Software

Und hier eine Liste was man nicht prompten sollte:

- Aufgaben deren Lösung unbekannt ist
- Recherchen im Internet
- Dinge die mit einem Shell-Befehl erledigt sind
- Zugriff auf produktive Umgebung

## Verbesserungen

Der Workflow mit `prompt.md` und Prompt-Log funktioniert schon ganz gut. Es gibt aber noch ein paar offene Punkte:

- ~~**Review**: Wenn der Agent die Aufgabe erledigt hat, setzt er den Prompt auf `completed`. Jedoch wäre es besser, dass auf `review` geht und die Prüfung der Resultat eingefordert wird.~~
- **Reset**: Ist man nicht zufrieden mit dem Resultat und möchte man von vorne beginnen ist das aktuell schwierig. Einerseits muss man die Änderungen mit Git zurücksetzen und dann das Worklog im `prompt.md` löschen.
- **Sub-Agents**: Wenn man bei der Ausführung einer Aufgabe feststellt, dass die Erledigung ein neues separates `prompt.md` erfordert wird die Sache schwierig.
- **Continue**: Mit dem Befehl `prompt-with-pi` soll ein bestehendes Prompt-File aus dem Prompt-Log geladen werden können.
