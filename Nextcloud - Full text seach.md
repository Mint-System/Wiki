
# Nextcloud: Volltextsuche

## Voraussetung

* Elasticsearch index mit *ingest-attachment* plugin
* Elasticsearch nextcloud user

## Setup

Install these Nextcloud apps:
* Full text search:  Diese App bietet die Grundfunktionen zur Volltextsuche
* Full text search - Files: Erweitert die Dateien-App um die Volltextsuche.
* Full text search - Elasticsearch Platform: Dies stellt die Verbindung zur Suchmaschine her.
* Full text search - Files - Tesseract OCR: Verbindung zu Tesseract.

## Konfiguration

Unter *Einstellungen > Volltextsuche* diese Einstellungen machen:

* **Suchplattform**: Elasticsearch
* **Navigations-Symbol**: Aktiviert
* **Adresse des Servlets**: <http://nextcloud:hwii4mie3Egha9ooro5@elastic01:9200/>
* **index**: nextcloud

## Index generieren

Dieser Befehl muss regelmässig ausgeführt werden:

`docker exec -u www-data nextcloud01 php occ fulltextsearch:index`

Dazu der Output:

```

Options: []
Memory: 68 MB
┌─ Indexing  ────
│ Action: indexDocument
│ Provider: Files                Account: demo
│ Document: 1642
│ Info: application/vnd.openxmlformats-officedocument.wordprocessingml.document
│ Title: Documents/Welcome to Nextcloud Hub.docx
│ Content size: 33536
│ Chunk:      5/23
│ Progress:      0/1
└──
┌─ Results ────
│ Result:     60/60
│ Index: files:1645
│ Status: ok
│ Message: {"_index":"nextcloud","_type":"standard","_id":"files:1645","_versi
│ on":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_se
│ q_no":59,"_primary_term":1}
└──
┌─ Errors ────
│ Error:      0/0
│ Index:
│ Exception:
│ Message:
│
│
└──
## x:first result ## c/v:prec/next result ## b:last result
## f:first error ## h/j:prec/next error ## d:delete error ## l:last error
## q:quit ## p:pause
```

## Suchen

In Nextcloud bindet sie Suche nun die Ergebisse aus dem Index ein.

![[Nextcloud Full text seach.png]]