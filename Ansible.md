---
tags:
  - Definition
section: infrastructure
---
# Ansible

Ansible ist die Technologie mit der die gesamte Mint System Infrastruktur betrieben wird. Mit Ansible wird die Server-Konfiguration beschrieben und angewendet.

[[Ansible Troubleshooting]]

## Playbooks

Die [[Ansible Build]] Playbooks von Mint System sind öffentlich auf GitHub verfügbar.

## Inventories

Die Konfiguration der Infrastruktur ist als [[Ansible Inventory]] gespeichert.

## Secrets

Passwörter und Keys werden mit [[Ansible Vault]] verschlüsselt und verwaltet.

## Architektur

![[Ansible Architektur.png]]

## Lessons Learned

**Tags**

Once a play matches a tag, it will also run every task that is part of that play regardless of other tags.
