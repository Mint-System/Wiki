---
title: Richtlinie - Generative KI
kind: explain
section: policy
draft: true
---

> **Hinweis:** Diese Richtlinie ist noch **nicht final** und befindet sich aktuell im **Entwurfsstatus**.  
> Der Inhalt dient als Arbeitsgrundlage und muss vor der offiziellen Freigabe noch **fachlich und organisatorisch geprüft** werden.

## Grundsatz

Generative KI darf zur Unterstützung bei der täglichen Arbeit und in der Softwareentwicklung bei Mint System eingesetzt werden.

Die Verantwortung für die verwendeten Eingaben und erzeugten Ergebnisse bleibt bei der jeweiligen Person.

KI-Ergebnisse müssen vor der Verwendung immer fachlich geprüft werden.

## Freigegebene Dienste

Für die geschäftliche Nutzung von generativer KI ist grundsätzlich nur [[LLM Chat Mint System]] zu verwenden.

Mint System betreibt dafür eine selbst gehostete [[Open WebUI]]-Instanz und bindet ausgewählte Cloud-Modelle der [Infomaniak AI Services](https://www.infomaniak.com/de/hosting/ai-services) an. Diese Architektur wurde bewusst gewählt, um die Kontrolle über Zugänge, Konfiguration, Datenverarbeitung, Datenspeicherung und Modellauswahl zu behalten.

Infomaniak stellt verschiedene Open-Source-KI-Modelle über eine OpenAI-kompatible Schnittstelle bereit. Dabei werden die Informaniak AI Services in Schweizer Rechenzentren betrieben, Anfragen nicht gespeichert und Prompts weder zum Training der Modelle noch zur Verbesserung der Dienste verwendet. Zusätzlich werden dadurch das DSG und die DSGVO vollständig eingehalten.

> Da sich der Markt für KI-Modelle und deren Hosting rasant entwickelt, überprüft Mint System die eingesetzten Modelle und Provider regelmässig, um diese nach Bedarf anzupassen. Dies erlaubt es Mint System den Datenschutz dauerhaft zu gewährleisten und die eigene digitale Souveränität zu stärken.

## Umgang mit Daten

Bei der Nutzung generativer KI gilt:

- nur die für die Aufgabe notwendigen Daten eingeben
- Kunden- und Personendaten anonymisieren
- keine Passwörter, API-Keys, Tokens oder andere Zugangsdaten eingeben
- keine vollständigen Datenbanken oder unnötigen Datenbestände hochladen
- vertragliche Vorgaben der Kunden beachten

Weitere Vorgaben sind in der [[Richtlinie - Datenschutz]] und der [[Richtlinie - Cloud-Dienste]] geregelt.

## Zugriff auf Systeme

Ein direkter Zugriff von KI-Chats oder KI-Agenten auf Odoo, Kundensysteme, Datenbanken oder produktive Schnittstellen ist nicht erlaubt.

## Softwareentwicklung

Für die Softwareentwicklung dürfen nur freigegebene Werkzeuge wie [[OpenCode]] mit den vorgesehenen KI-Providern eingesetzt werden.

Durch KI erzeugter Quellcode muss vor der Übernahme geprüft und getestet werden.

Zugangsdaten, produktive Kundendaten und vertrauliche Informationen dürfen nicht in Prompts oder Quellcode eingefügt werden.

Weitere Vorgaben sind in der [[Richtlinie - Softwareentwicklung]] geregelt.