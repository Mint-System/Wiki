---
section: dev
kind:
  - tutorial
lang: en
---
# Meilisearch Upgrade

This is a step by step tutorial for the [Meilisearch dump upgrade](https://www.meilisearch.com/docs/learn/update_and_migration/updating#using-a-dump).

```bash

API_KEY
```

## Prepare

Get the Meilisearch master key.

## Execute

```bash
curl \
  -X POST "http://<your-domain-name>/dumps" \
  -H "Authorization: Bearer $API_KEY"
```

## Post
