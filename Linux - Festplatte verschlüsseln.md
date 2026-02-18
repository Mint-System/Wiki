---
kind: howto
section: dev
---

## LUKS

The Linux Unified Key Setup (LUKS) helps encrypting the entire disk.

Set up LUKS encryption can be done during installation (recommended) or for an existing disk.

## Encrypt new installation

Most Linux installer will guide you trough the process of encrypting your disk.

If asked to choose an option, always opt for Logical Volume Manager (LVM) on LUKS encryption.

## Encrypt existing installation

Encrypting a disk where a Linux has been installed is a bit more complicated.

## Arch Linux

As always the Arch users get a special treatment. The Arch Wiki covers this topic quite well: <https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system>