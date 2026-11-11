---
section: blog
kind: explain
draft: true
---

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
- GitOps -> Kubernetes
- Container -> Docker
- Scripting -> Python

Ein wichtiges Werkezeug sind die Jupyter-Notebooks. Sobald wir Daten verarbeiten, erstellen wir bzw. lassen wir Jupyter-Notebooks generieren. Damit lassen sich komplexe Datenmigrationen wie "Exportiere alle Daten aus Bexio und importieren Sie nach Odoo" in wenigen Stunden erledigen.

Ein weiterer grosser Vorteil von Jupyter-Notebooks, ist dass man ein selbstdokumentierendes und reproduzierbares Drehbuch erhält. Das ist in der Arbeit mit LLMs entscheidend. Anstatt dem LLM die Datenverarbeitung zu überlassen, gibt man Instruktionen, dass das LLM ein Jupyter-Notebook erstellen soll um die Datenverarbeitung zu machen. Das Endprodukt lässt sich dann ohne Unterstützung des LLMs nutzen.

## LLM-Workflow

Nun wie sieht das ganze in Action aus. Das was es zu sehen gibt, ist visuell nicht besonders spektakulär, aber für Softwareentwickler und Interessierte spannend.

Den LLM-Workflow zeige ich anhand des folgenden Beispiels:

> PHP2Shell war ein grosses Problem für meine WordPress-Website. Nun habe ich von Static Site Generators gehört und möchte aus meiner dynamischen Website eine statische Website machen. Ein Agent soll mich bei der Konvertierung unterstützen.





## Neue Möglichkeiten



