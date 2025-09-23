---
section: process
kind:
  - howto
---
# Prozesse Marketing - Website

## Referenzen aktualisieren

* Website Repo <https://github.com/Mint-System/Website> klonen
* In der Datei `Website/data/references.yaml` einen Eintrag erstellen

```yaml
- name: Company Name
  description: >
    Description
  category: Category
  website: https://www.example.com/
  image: /assets/images/references/company-name.png
```

* Die Zusammenfassung des Unternehmens mit <https://chat.mistral.ai/> und diesem Prompt generieren

```
Create a short german introduction about the company: https://www.example.com
Do not use more than 100 words. Do not mention the domain itself. Lookup informations about the company if possible. The text will be used as reference for successful project. Make the text as objective as possible.
```

* Das Logo als PNG-Datei auf der Seite <obsidian://open?vault=Website&file=static%2Fassets%2Fimages%2Freferences%2FREADME> einfügen
* Die Website-Vorschau lokal generieren
* Die Änderungen committen und pushen