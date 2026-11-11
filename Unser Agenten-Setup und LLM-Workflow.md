---
section: blog
kind: explain
draft: true
---

> LLMs und Ageneten effizient nutzen.

In diesem Beitrag möchten wir unseren LLM-Workflow und unser Agenten-Setup präsentieren.

Bestimmte Wörter wie Inference, Provider, Harness, Deployment oder Models lassen sich (noch) nicht sinnvoll ist Deutsche übersetzen. Um präzise zu bleiben verwenden wir die Englischen Begriffe.

## Claude die Antithese

Wir nutzen bewusst keine Produkte und Dienste von Anthropic und OpenAI. Einerseits weil es proprietäre Lösungen sind und andererseits weil wir diese Technologie nicht einfach nutzen wollen, sondern auch verstehen wollen.

Claude ist ein Bündel von geschlossenen Produkten und Dienstleistungen:

- Harnesses: Claude Code, Claude CLI/TUI
- Single Inference Provider: Anthropic
- Proprietary Models: Fable, Opus, Sonnet, Haiku
- Restricted Customizing: CLAUDE.md

Wer Claude einsetzt macht man sich langfristig von diesen Produkten und Diensten abhängig. Diese Abhängigkeit bedeutet, dass wissen wir inzwischen (Digitale Souveränität), weniger Spielraum und höhere Kosten für das Unternehmen.

## Agenten-Setup

Nun wie sieht ein ein Agenten-Setup aus, wenn man die Sache ernst meint.

Anstatt einen Anbieter von Models oder ein Harness oder ein Inference Provider zu nutzen, nutzen wir ganz viele:

- Open Harnesses: OpenCode, Pi, llm
- Inference Provider: Infomaniak, Scaleway, Hugging Face, Mistral
- Open Weights Models: Kimi-K2.6, Qwen3-Embedding-8B, Qwen3.5-397B, Apertus-v1.5-70, DeepSeek-V4-Flash, GLM-5.2
- Standardized Customizing: AGENTS.md

Alle genanten Punkte (Harness, Inference Provider, Models) sind austauschbar. Damit können immer die effizienteste und kostengünstigste Lösung einsetzen.

Was etwas komplizierter ist, ist das ganze Setup. Aber daraus machen wir keine Geheimnis. Hier ist das Installations-Skript für Pi: <https://github.com/Mint-System/Dotfiles/blob/main/packages/pi>

## Projekt-Setup

Es hat sich gezeigt, dass der effiziente Einsatz von LLMs nur mit sog. Guardrails möglich ist. In den `AGENTS.md`-Dateien erklärt man dem Agenten was dieser bei der Ausführung eines Prompts berücksichtigen muss. Die sog. Skills sind nur eine Erweiterung des `AGENTS.md`.

Diese Instruktionen sind Projekt-spezifisch. Wenn man mehrere Projekte hat, muss man sicherstellen, dass das AGENTS.md angepasst und aktuell ist. Wir haben ca. 100 Git-Projekte mit unterschiedlichen Branches. Damit wir unsere Projekte und AGENTS.md veralten können, haben wir das <https://taskfile.build/> entwickelt. 

Jedes Projekt hat ein sog. Taskfile. Das ist ein Bash-Skript und gibt Zugriff auf eine grosse Sammlung von Befehlen: <https://taskfile.build/library/>
In dieser Sammlung sind Befehle um das AGENTS.md aus einem Katalog von Vorlagen zusammenzustellen. Dann gibt es Befehle um prompts.md-Dateien zu erstellen. Mehr dazu im nächsten Abschnitt.

## Jupyter-Notebooks

Der Vorteil des Taskfile ist, dass sich nur Werkzeuge und Instruktionen über Projekte verteilen lassen, sondern auch ganze Software-Frameworks:

- Dokumentation -> Zensical
- Website -> Hugo
- Datenverarbeitung -> Jupyter
- Deployment -> Kubernetes
- Container -> Docker
- Scripting -> Python
- Verschlüsselung -> SOPS

Ein wichtiges Werkezeug sind die Jupyter-Notebooks. Sobald wir Daten verarbeiten, erstellen wir bzw. lassen wir Jupyter-Notebooks generieren. Damit lassen sich komplexe Datenmigrationen wie "Exportiere alle Daten aus Bexio und importieren Sie nach Odoo" in wenigen Stunden erledigen.

Ein weiterer grosser Vorteil von Jupyter-Notebooks, ist dass man ein selbstdokumentierendes und reproduzierbares Drehbuch erhält. Das ist in der Arbeit mit LLMs entscheidend. Anstatt dem LLM die Datenverarbeitung zu überlassen, gibt man Instruktionen, dass das LLM ein Jupyter-Notebook erstellen soll um die Datenverarbeitung zu machen. Das Endprodukt lässt sich dann ohne Unterstützung des LLMs nutzen.

## LLM-Workflow

Nun wie sieht das ganze in Action aus. Das was es zu sehen gibt, ist visuell nicht besonders spektakulär, aber für Softwareentwickler und Interessierte spannend.

Den LLM-Workflow zeige ich anhand des folgenden Beispiels:

> PHP2Shell war ein grosses Problem für meine WordPress-Website. Nun habe ich von Static Site Generators gehört und möchte aus meiner dynamischen Website eine statische Website machen. Ein Agent soll mich bei der Konvertierung unterstützen.

### Projekt initialisieren

Ich öffne die Kommandozeile, erstelle einen Projekt-Ordner und initialisiere das Taskfile-Projekt:

```bash
[~]$ mkdir website-to-hugo
[~]$ cd website-to-hugo
[~/website-to-hugo]$ task init-project
```

Ich wählte die folgenden Profile Python, Hugo, Prompt LLM und Jupyter für das Projekt. Der Befehl erstellt diese Dateien:

```bash
[main][~/website-to-hugo]$ ls -f
task  .gitignore  LICENSE  .env.template  .  CHANGELOG.md  ..  AGENTS.md  tmp  README.md  .git
```

Damit ich mit dem prompten loslegen kann, committe ich neuen Dateien.

```bash
[main][~/website-to-hugo]$ task commit-with-llm
Write prompt to tmp/llm_prompt.
fatal: your current branch 'main' does not have any commits yet
Send prompt with staged git diff and wait for the response of the Qwen/Qwen3-Embedding-8B LLM.
Saved response to tmp/llm_prompt_result.
Preview of commit message:

chore: initialize project structure and documentation

- Add .env.template and .gitignore
- Create AGENTS.md with guidelines for LLM agents
- Add CHANGELOG.md following Keep a Changelog format
- Include GNU Affero General Public License v3.0
- Initialize empty README.md
- Add task script with Python, Jupyter, LLM, Prompt, and Hugo utilities

Do you want to commit (Y) or edit (e) before commit the message? (Y/e/n):
[main (root-commit) 86b5366] chore: initialize project structure and documentation
 7 files changed, 936 insertions(+)
 create mode 100644 .env.template
 create mode 100644 .gitignore
 create mode 100644 AGENTS.md
 create mode 100644 CHANGELOG.md
 create mode 100644 LICENSE
 create mode 100644 README.md
 create mode 100755 task
```

Wie man sieht wird die Commit-Message generiert. Für diesen Vorgang nutzen wir das llm-cli: <https://codeberg.org/Mint-System/taskfile.build/src/branch/main/bin/commit-with-llm>

### Prompt-Datei erstellen

Nun sind wir bereit um das Prompt-Log und die Prompt-Datei zu erstellen. Im Prompt-Log werden alle Ausführungen von einem LLM registriert und dokumentiert.

```bash
[main][~/website-to-hugo]$ task init-prompt-log
Warning: could not push prompt-log to remote.
Preparing worktree (checking out 'prompt-log')
HEAD is now at 9983576 init: prompt-log branch
Created prompt-log worktree at tmp/prompt-log.
```

Mit diesem Befehl erstellen wir die prompt.md Datei:

```bash
[main][~/website-to-hugo]$ task create-prompt "Convert website to Hugo static site"
```

Ich öffne die Datei und ersetze:

```markdown
@Author Provide instructions with clear objective here.
```

mit meinen Instruktionen:

```markdown
I have a website <https://www.example.com/> and would like to convert it to a static site using Hugo.

### Download site

First, I want you to download the site. Create a `proc/download-website.ipynb` Jupyter notebook to this.

The goals is that you have the html files in the `tmp` folder.

Start by analysing the navigation and page structure. Then proceed by download the pages.

### Setup Hugo

Use `install-hugo` and use the `hugo` cli to setup a new site in this folder.

### Extract content

Next I want you to extract the website's content. Create the site structure and store content as yaml content.

Remove any styling from the content. Store images in a static folder.

Ignore pages with dynamic elements like a contact form or shop checkout process.

### Create a theme

Try to replicate the styling of the website by creating a Hugo theme.

### Build the site

For development use `dev-hugo-site`. For a production build run `build-hugo-site`.
```

In der prompt.md sind Anweisungen das README.md und das AGENTS.md zu lesen.

### Prompt ausführen

Nun der spannende Teil. Mit diesem Befehl wird das Pi harness gestartet und eine Auswahl von Providers und Models präsentiert:

```bash
[main][~/website-to-hugo]$ task prompt-with-pi -m
```

Ich wähle Mistral und DeepSeek-V4-Flash und Pi legt los.

Pi zeigt alle Aktionen, die ausgeführt werden. Hier ein Ausschnitt:

```text
...
 $ cd /home/janikvonrotz/website-to-hugo && for p in / /de_CH/
 /example-story /blog /contactpersons /contactus-1 /cookie-policy /engineering
 /impressum /jobs /production /qualification /quality /shop /shop/cart; do
 code=$(curl -sS -o /dev/null -w '%{http_code} %{size_download}' -L
 "https://www.example.com$p" --max-time 25); echo "$p -> $code"; done (timeout
 180s)

 ... (1 earlier lines, ctrl+o to expand)
 / -> 000 0
 /de_CH/ -> 200 46210
 /example-story -> 200 58379
 curl: (28) Operation timed out after 25001 milliseconds with 0 bytes received
 /blog -> 000 0

 Elapsed 1m 14s


── ⠇ Working ────────────────────────────────────────────────────────────────────────

─────────────────────────────────────────────────────────────────────────────────────
~/website-to-hugo (main)
↑12k ↓1.4k R61k CH97.8% 10.7%/128k                 (mistral) deepseek-v4-1-flash-1017
```

Pi kann mit Plugins erweitern werden. Ein Plugin kann die Nutzung des Kontext-Fenster visualisieren:

![[pi context usage.png]]

### Ergebnis prüfen

