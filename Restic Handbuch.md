---
tags:
- HowTo
---
# Restic Handbuch

## Repo auf Server öffnen

Um ein Restic Repo auf dem Restic Server öffnen, setzen Sie diese Umgebungsvariablen.

```bash
export RESTIC_PASSWORD=
export RESTIC_REPOSITORY=/mnt/kronos-disk2/pan
```

Anschliessend können Sie auf das Repo wie gewohnt zugreifen.

## Snapshot etfernen

Wenn Sie ein Snapshots anhand einer ID entfernen möchten, führen Sie folgendes aus:

```bash
restic -r /mnt/kronos-disk2/pan snapshots
restic -r /mnt/kronos-disk2/pan forget $SNAPSHOT_ID
restic -r /mnt/kronos-disk2/pan prune
```