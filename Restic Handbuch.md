---
tags:
  - Handbuch
kind:
  - howto
section: product
---

# Restic Handbuch

## Repo auf Server öffnen

Um ein restic Repo auf dem restic Server öffnen, setzen Sie diese Umgebungsvariablen.

```bash
export RESTIC_PASSWORD=******
export RESTIC_REPOSITORY=/mnt/sdb/triton
```

Anschliessend können Sie auf das Repo wie gewohnt zugreifen.

## Snapshot etfernen

Wenn Sie ein Snapshots anhand einer ID entfernen möchten, führen Sie folgendes aus:

```bash
restic -r /mnt/kronos-disk2/pan snapshots
restic -r /mnt/kronos-disk2/pan forget $SNAPSHOT_ID
restic -r /mnt/kronos-disk2/pan prune
```

## Alle Snapshots enfernen

Standardmässig groupiert restic die Snaphosts. Damit Snapshots über alle Gruppen hinweg entfern werden, verwendet den `--group-by` Parameter:

```bash
restic forget --group-by '' --keep-last 3 --prune
```
