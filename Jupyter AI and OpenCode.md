---
kind: explain
section: product
---

Wir kombinieren [[Jupyter AI]] und [[OpenCode]] um einen Workspace zur Arbeit mit Agenten bereitzustellen.

## Vergleich mit [[Odoo KI]]

|                                | **Odoo AI**                      | **Jupyter AI und OpenCode**                                  |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| Zugriff auf Odoo               | Direkt (Odoo-ORM)                | API (XML-RPC und JSON-API)                                   |
| Art des Zugriffs               | Lesen                            | Lesen und Schreiben                                          |
| Verfügbare Provider            | Google Gemini und OpenAI ChatGPT | [OpenCode Providers](https://opencode.ai/docs/de/providers/) |
| Interaktion                    | Odoo Dialog und App-spezisch     | Jupyter AI Chat                                              |
| Technische Anforderung an Odoo | Postgres mit PGVector            | API-Zugriff                                                  |
| Anwendungsfall                 | Navigation und Reporting         | Datenverarbeitung und Automatisierung                        |
| Inference Kosten               | Gemäss Provider                  | OpenCode Free Tier                                           |
| Chat-Verlauf geteilt mit       | Google / OpenAI                  | -                                                            |
