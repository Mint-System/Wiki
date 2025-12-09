---
title: Richtlinie - Softwareentwicklung
kind: explain
section: policy
---

## Versionierung

Wir orientieren uns bei der Versionierung von Software an [[Semantic Versioning]].

## Git Commit Messages

Wir orientieren uns bei der Erstellung von Commit Messages an [[Conventional Commits]].

## Changelog

Für jede Softwareentwicklung wird ein [[Keep a changelog]] geführt.

## Git Branches

Das Git-Branching-Model sieht folgende Benennung vor:

- `prod`: production
- `main`: production
- `int`: integration
- `test`: testing
- `dev`: development
- `upg`: upgrade

## Linting

Wir verwenden [[pre-commit]] für das Linting.
