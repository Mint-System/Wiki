---
kind: howto
section: process
---

## Mint System Wiki lokal entwickeln

Die Webseite https://wiki.mint-system.ch wird mit [Zensical](https://zensical.org/) gebaut. Zensical liest die Markdown-Dateien im Ordner `docs` und erzeugt daraus eine statische Webseite. Die Wiki-Markdown-Dateien liegen im GitHub Repository und werden mit `./task prepare-docs` in den Ordner `docs` konvertiert.

Arbeitsschritte:

1. Klonen Sie das Repository

```bash
git clone git@github.com:Mint-System/Wiki.git
cd Wiki
```

2. Initialisieren Sie das Zensical Projekt

Voraussetzungen sind [uv](https://docs.astral.sh/uv/) und [Node.js](https://nodejs.org/). Das Kommando erstellt die Python-Umgebung `.venv`, installiert Zensical und legt die Konfiguration in `zensical.toml` an (falls noch nicht vorhanden).

```bash
./task init-zensical-docs
```

Zusätzlich benötigt `bin/build.js` die Node-Abhängigkeiten (gray-matter). Installieren Sie diese einmalig:

```bash
npm install
```

3. Bereiten Sie die Dokumentation vor

Das Kommando konvertiert die Wiki-Markdown-Dateien (Wikilinks, Canvas, Anhänge) aus dem Repository in den Ordner `docs`:

```bash
./task prepare-docs
```

4. Starten Sie den Entwicklungsserver

Der Entwicklungsserver ist unter <http://localhost:8000> erreichbar:

```bash
./task dev-zensical-docs
```

5. Produktions-Build erstellen und lokal ausliefern (optional)

```bash
./task build-zensical-docs
./task serve-zensical-docs
```

Der Build wird im Ordner `site` abgelegt und ist unter <http://localhost:8080> erreichbar.

Die Publizierung auf https://wiki.mint-system.ch erfolgt automatisch über [[Vercel]], sobald die Änderungen auf den `main` Branch von <https://github.com/Mint-System/Wiki> gepusht werden.
