---
section: dev
kind:
  - tutorial
lang: en
---
# Meilisearch Upgrade

This is a step by step tutorial for the [Meilisearch dump upgrade](https://www.meilisearch.com/docs/learn/update_and_migration/updating#using-a-dump).

## Prepare

Set the Meilisearch master key and url.

```bash
API_URL=
API_KEY=
```

Create a backup of Meilisearch data.

```bash

```

Navigate into the Ansible-Build directory.

```bash
cd ~/Ansible-Build
```

## Execute

Trigger dump creation.

```bash
curl \
  -X POST "http://$API_URL/dumps" \
  -H "Authorization: Bearer $API_KEY"
```

Check status of dump creation.

```bash

```

Deploy new Meilisearch image with Ansible.

```bash

```

Connect to the host.

```bash
task connect-host eros
```

Import the dump.

```bash
./meilisearch --import-dump dumps/{dump_uid.dump} --master-key="MASTER_KEY"
```

## Cleanup

Delete dump files.

```bash

```