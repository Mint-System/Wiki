---
section: blog
kind: explain
draft: true
---

> LLMs und Ageneten effizient nutzen.

In diesem Beitrag möchten wir unseren LLM-Workflow und unser Agenten-Setup präsentieren.

## Claude?

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

```bash
[~]$ mkdir odoo-aersolution-etl
[~]$ cd odoo-aersolution-etl
[~/odoo-aersolution-etl]$ task init-project
```

Ich wähle: Python, Hugo, Prompt LLM, Jupyter, 

```bash
[main][~/odoo-aersolution-etl]$ ls -f
task  .gitignore  LICENSE  .env.template  .  CHANGELOG.md  ..  AGENTS.md  tmp  README.md  .git
```

```bash
[main][~/odoo-aersolution-etl]$ task commit-with-llm
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

```bash
[main][~/odoo-aersolution-etl]$ task init-prompt-log
Warning: could not push prompt-log to remote.
Preparing worktree (checking out 'prompt-log')
HEAD is now at 9983576 init: prompt-log branch
Created prompt-log worktree at tmp/prompt-log.
```

```bash
[main][~/odoo-aersolution-etl]$ task create-prompt "Convert website to Hugo static site"
```

```markdown

```


```bash
[main][~/odoo-aersolution-etl]$ task prompt-with-pi -m
```

```

```
