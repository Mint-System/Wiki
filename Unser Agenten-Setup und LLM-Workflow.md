---
section: blog
kind: explain
draft: true
---

> LLMs und Ageneten effizient nutzen.

In diesem Beitrag möchten wir unseren LLM-Workflow und unser Agenten-Setup präsentieren.

Bestimmte Wörter wie Inference, Provider, Harness, Commit, Deployment oder Models lassen sich (noch) nicht sinnvoll ist Deutsche übersetzen. Um präzise zu bleiben verwenden wir die Englischen Begriffe.

## Abgrenzung Claude und Co

Wir nutzen bewusst keine Produkte und Dienste von Anthropic und OpenAI. Einerseits weil es proprietäre Lösungen sind und andererseits weil wir die LLM-Technologie nicht einfach anwenden wollen, sondern auch verstehen möchten.

Claude ist ein Bündel von geschlossenen Produkten und Dienstleistungen:

- Closed Harnesses: Claude Code, Claude CLI/TUI
- Single Inference Provider: Anthropic
- Proprietary Models: Fable, Opus, Sonnet, Haiku
- Restricted Customizing: CLAUDE.md

Wer Claude einsetzt macht man sich von diesen Produkten und Dienstleistungen abhängig. Diese Abhängigkeit bedeutet langfristig - das wissen wir inzwischen (Digitale Souveränität) - weniger Spielraum und höhere Kosten für das Unternehmen.

## Agenten-Setup

Wie sieht ein ein Agenten-Setup aus, wenn man die Sache ernst meint?

Anstatt einen Anbieter von Models oder ein Harness oder ein Inference Provider zu nutzen, nutzen wir verschiedene

- Open Harnesses: OpenCode, Pi, llm
- Multiple Inference Providers: Infomaniak, Scaleway, Hugging Face, Mistral
- Open Weight Models: Kimi-K2.6, Qwen3-Embedding-8B, Qwen3.5-397B, Apertus-v1.5-70, DeepSeek-V4-Flash, GLM-5.2
- Standardized Customizing: AGENTS.md

Alle genanten Punkte (Harness, Inference Provider, Models) sind austauschbar. Damit haben wir immer auf die effizienteste und kostengünstigste Lösung Zugriff.

Was die Sache verkomplizierter ist natürlich das ganze Setup. Aber so schwierig ist es dann doch nicht und wir machen daraus auch kein Geheimnis. Hier ist unser Installationsskript für Pi: <https://github.com/Mint-System/Dotfiles/blob/main/packages/pi>

## Projekt-Setup

Es hat sich gezeigt, dass der effiziente Einsatz von LLMs nur mit sog. Guardrails möglich ist. In den `AGENTS.md`-Dateien erklärt man dem Agenten was dieser bei der Ausführung eines Prompts berücksichtigen soll. 

Diese Instruktionen sind Projekt-spezifisch. Wenn man mehrere Projekte hat, muss man sicherstellen, dass das AGENTS.md  immer aktuell und angepasst ist. Wir haben ca. 100 Git-Projekte. Damit wir unsere Projekte und AGENTS.md verwalten können, haben wir das <https://taskfile.build/> entwickelt. 

Jedes Projekt hat ein Taskfile. Das ist ein Bash-Skript und gibt Zugriff auf eine grosse Sammlung von Befehlen: <https://taskfile.build/library/>
In dieser Sammlung sind Befehle vorhanden, um das AGENTS.md aus einem Katalog von Bausteinen zusammenzustellen. Im Weiteren gibt es Befehle um die prompts.md Dateien anzulegen. Mehr dazu im übernächsten Abschnitt.

## Software-Frameworks

Der Vorteil des Taskfile ist, dass sich nur Werkzeuge und Instruktionen über Projekte verteilen lassen, sondern auch ganze Software-Frameworks:

- Dokumentation -> Zensical
- Website -> Hugo
- Datenverarbeitung -> Jupyter
- Deployment -> Kubernetes
- Container -> Docker
- Scripting -> Python
- Verschlüsselung -> SOPS

Ein wichtiges Werkezeug sind die Jupyter-Notebooks. Sobald wir Daten verarbeiten, erstellen wir bzw. lassen wir Jupyter-Notebooks erstellen. Damit lassen sich komplexe Datenmigrationen wie "Exportiere alle Daten aus Bexio und importieren Sie nach Odoo" in wenigen Stunden erledigen.

Ein weiterer  Vorteil von Jupyter-Notebooks, ist dass man ein selbstdokumentiertes und reproduzierbares Programm erhält. Das ist in der Arbeit mit LLMs entscheidend. Anstatt dem LLM die Datenverarbeitung direkt zu überlassen, teilt man Anweisungen mit, dass die Datenverarbeitung Jupyter-Notebooks erfolgen soll. Das Endprodukt das Jupyter-Notebook lässt sich dann ohne Unterstützung des LLMs ausführen.

## LLM-Workflow

Nun wie sieht das ganze in Aktion aus. Das was es zu sehen gibt, ist visuell nicht besonders spektakulär, aber jene die sich auf der Kommandozeile austoben umso spannender.

Den LLM-Workflow zeige ich anhand des folgenden Beispiels:

> PHP2Shell war ein grosses Problem für meine WordPress-Website. Nun habe ich von "Static Site Generators" gehört und möchte aus meiner dynamischen Website eine statische Website machen. Ein Agent soll mich bei der Konvertierung unterstützen.

### Projekt initialisieren

Ich öffne die Kommandozeile, erstelle einen Projekt-Ordner und initialisiere das Taskfile:

```bash
[~]$ mkdir website-to-hugo
[~]$ cd website-to-hugo
[~/website-to-hugo]$ task init-project
```

Ich wählte die Profile Python, Hugo, Prompt LLM und Jupyter für das Projekt aus. Der Befehl erstellt mir diese Dateien:

```bash
[main][~/website-to-hugo]$ ls -f
task  .gitignore  LICENSE  .env.template  .  CHANGELOG.md  ..  AGENTS.md  tmp  README.md  .git
```

Bevor ich mit prompten loslegen kann,  müssen die neuen Daten committed werden.

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

Wie man sehen kann, wird auch die Commit Message mit einem LLM generiert. Für diesen Vorgang nutzen wir das llm-cli: <https://codeberg.org/Mint-System/taskfile.build/src/branch/main/bin/commit-with-llm>

### Prompt-Datei erstellen

Nun sind wir bereit, um das Prompt-Log und die Prompt-Datei zu erstellen. Im Prompt-Log werden alle Ausführungen eines LLM registriert und dokumentiert.

```bash
[main][~/website-to-hugo]$ task init-prompt-log
Warning: could not push prompt-log to remote.
Preparing worktree (checking out 'prompt-log')
HEAD is now at 9983576 init: prompt-log branch
Created prompt-log worktree at tmp/prompt-log.
```

Mit dem folgenden Befehl erstellen wir eine prompt.md Datei:

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

Also note that the website is translated into English (en) and German (de). Download content in both languages.

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

Das prompt.md entählt weitere Anweisungen. Insbesondere wird sichergestellt dass die  README.md und AGENTS.md Dateien gelesen werden.

### Prompt ausführen

 Mit diesem Befehl wird das Pi harness gestartet und eine Auswahl von Providers und Models präsentiert:

```bash
[main][~/website-to-hugo]$ task prompt-with-pi -m
```

Ich wähle "Mistral" mit "DeepSeek-V4-Flash" und Pi legt los. Pi zeigt alle Inputs und Outputs, die im Loop entstehen. Hier ein Ausschnitt:

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

Je nach Aufgaben kann die Ausführung von wenigen Sekunden bis Stunden dauern.

Der Agent erstellt sich eine Todo-Liste und arbeitet bis er das Ziel erreicht hat. Während der Ausführung kann man Steering-Prompts eingeben. Diese werden bei der nächsten Gelegenheit aufgenommen und verarbeitet:

```text
...
 $ cd /home/janikvonrotz/website-to-hugo && PROJECT_DIR=$PWD timeout 1800
 ./task run-jupyter-notebook proc/download-website.ipynb 2>&1 | tail -20; echo
 "EXIT=$?"; ls tmp/website | wc -l; ls tmp/website/assets | wc -l (timeout 1900s)

 Elapsed 26m 2s


 Steering: This takes very long. Note this in the noteook. Do not rerun the note...
 ↳ Alt+Up to edit all queued messages

● Todos (1/7)
├─ ✓ Analyze site navigation and page structure
├─ ◐ Create proc/download-website.ipynb (writing download notebook)
├─ ○ Setup Hugo site
├─ ○ Extract content to YAML content files
├─ ○ Create Hugo theme replicating styling
├─ ○ Build and verify site
└─ ○ Update prompt.md worklog and docs

── ⠧ Working ───────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────────
~/website-to-hugo (main)
↑42k ↓14k R1.7M CH99.3% 42.3%/128k                (mistral) deepseek-v4-1-flash-1017
```

Mit der Dauer der Ausführung füllt sich das Kontext-Fenster. Wenn des Kontext-Fenster vollgelaufen ist, kann es mit der Compact Aktion der bestehende Kontext reduziert werden:

```text

 Response was truncated before completion.

● Todos (2/7)
├─ ✓ Analyze site navigation and page structure
├─ ✓ Create proc/download-website.ipynb
├─ ◐ Setup Hugo site (setting up Hugo site)
├─ ○ Extract content to YAML content files
├─ ○ Create Hugo theme replicating styling
├─ ○ Build and verify site
└─ ○ Update prompt.md worklog and docs

── ⠴ Compacting context... (escape to cancel) ──────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────────
~/website-to-hugo (main)
↑90k ↓53k R11M CH99.1% 97.2%/128k                 (mistral) deepseek-v4-1-flash-1017
```

Spannend and dieser Stelle - es gibt Pi-Erweiterungen um das Kontext-Fenster zu visualisieren und zu analyiseren:

![[pi context usage.png]]

Hat der Agent sein Ziel erreicht, bittet er um eine Review. Dass dieser nach einer Review fragen muss, ist explizit im prompt.md festgehalten. 

### Ergebnis prüfen

Jetzt kommt der wichtigste Teil: Fingerspitzengefühl

LLMs sind ein Destillat des menschlichen Wissen. Beim Programmieren kann es nur Konzept anwenden, die es bereits gibt. Es kann keine neuen Lösungsansätze entwickeln. Das führt dazu, dass das LLM auf biegen und brechen versuchen eine plausible Lösung hinzukriegen. Und in vielen Fällen ist das ausreichend. Bewegt man sich aber in einer Domänen, die nur schlecht vom LLM-Wissen abgedeckt sind, muss man nachhelfen.

An dieser Stelle mache ich manuelle Tests. Ich starte das Programm oder führe die neuen Funktionen aus. Ich lesen den generierten Code und versuche den Lösungsansatz des LLMs zu verstehen. Also alles was hilft um das Resultat zu plausibilieren.

Möchte man an dieser Stelle ein neues prompt.md erstellen oder die Prüfung überspringen, werden die entsprechende Befehle blockiert:

```bash
[main][~/odoo-aersolution-etl]$ task commit-prompt
Error: Cannot commit prompt in review state.
```

### Ergebnis festhalten

Wir sind zufrieden mit dem Ergebnis und teilen dem LLM mit, dass die Aufgabe erledigt ist. Gemäss AGENTS.md fühlt der Agent im prompt.md die Metadaten ab.

Bevor wir das prompt.md aufzeichnen, committen wir den Code:

```bash
[main][~/odoo-aersolution-etl]$ t commit-with-llm
Write prompt to tmp/llm_prompt.
Send prompt with staged git diff and wait for the response of the Qwen/Qwen3-Embedding-8B LLM.
Saved response to tmp/llm_prompt_result.
Preview of commit message:

feat: migrate Odoo website to bilingual Hugo static site

- Add Jupyter notebooks to download the Odoo website and extract content into Hugo bundles
- Implement `example` Hugo theme with custom CSS and layouts for sections, blog, and jobs
- Generate bilingual (EN/DE) content for home, services, story, team, blog, and job postings
- Configure `hugo.toml` with menus, languages, and site parameters
- Update documentation (README, AGENTS, CHANGELOG) and add `.gitignore` rules for Hugo
```

Dann registrieren wir das prompt.md im Prompt-Log:

```bash
[main][~/odoo-aersolution-etl]$ task commit-prompt
Updating existing prompt file: 2026-11-11_convert-website-to-hugo-static-site.md
On branch prompt-log
nothing to commit, working tree clean
Warning: push failed.
```

Der ganze Einsatz des LLMs und dessen Ergebnis nachvollziehbar dokumentiert.

---

Letzte Bemerkung: Kaum zu glauben, aber dieser Blog-Post wurde von Hand geschrieben! :)