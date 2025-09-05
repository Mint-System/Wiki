---
tags:
  - Asset
kind:
  - explain
section: product
---
# Nextcloud FAQ

## Offen

### Finanzdokumente nachweislich nicht veränderbar

Frage: Finanzlegungsstandard erfordern, dass Finanzdokumente nachweislich nicht verändert oder gelöscht wurden (audit-proof). Gibt es eine solchen Mechanismus in Nextcloud?

Antwort: 

## Beantwortet

### Komplexe Workflows abbilden

Frage: Wie können mehrstufige Genehmigungsworkflows in Nextcloud abgebildet werden?

Anwort: Mit Nextcloud 22 gibt es verschiedene [Verbesserungen bezl. Workflows](https://nextcloud.com/blog/nextcloud-hub-22-introduces-approval-workflows-integrated-knowledge-management-and-decentralized-group-administration/). Einfache Worfklows können mit Nextcloud so implementiert werden.

### Dokumente anhand Metadaten suchen

Frage: Mit einer App können WebDav-Metadaten erfasst werden. Können diese auch durchsucht werden?

Anwort: Nein, das ist leider nicht möglich. Die Metadaten machen vor allem Sinn für Drittanwendungen, die via Webdav Informationen auf Dokumenten speichern möchten.

### Mit OCR Metadaten erfassen

Frage: Kann mithilfe OCR-Erkennung Metadaten gesetzt werden?

Antwort: Mit [Full text search - Files - Tesseract OCR](https://apps.nextcloud.com/apps/files_fulltextsearch_tesseract) kann Text aus Bildern gelesen und indexiert werden. Eine erweitere Indexierung anhand Metadaten ist so nicht möglich.

### Versionierung mit Dokument-ID

Frage: Wie können verschiedene Dokumentversionen anhand einer ID identifiziert und gebündelt werden?

Antwort: Eine explizite Versionierung ist mit Nextcloud nicht möglich. 