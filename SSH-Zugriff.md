---
tags:
- Asset
---
# SSH-Zugriff

Die Verwaltung eines Linux-Server erfolgt mit einer [[Kommandozeile]]. Es gibt also keine grafische Oberfläche um die Einstellungen und Software auf dem zu steuern. SSH erlaubt den Fernzugriff auf die Kommandozeile.

## Ansible

Mit [[Ansible]] werden die Server-Konfigurationen beschrieben und über Kommandozeilen-Befehle angewendet. Diese Server-Konfiguration wird auf einem anderen Computer gespeichert und daher muss eine Verbindung zwischen Ansible-Client und dem Server möglich sein.

## Sicherheit

Der SSH-Zugriff ist nur für bestimmte Benutzer freigeschaltet und ein Login mittels Passwort ist nicht erlaubt. Die Authentisierung findet mittels SSH-Schlüsselpaar statt.

Jeder Benutzer der sich mit SSH auf einem Server anmelden möchte, muss seinen öffentlichen SSH-Schlüssel auf dem Server hinterlegen. Nur wer im Besitz des privaten SSH-Schlüssels ist, kann sich so auf dem Server einloggen.

Solange der SSH-Schlüssel des Benutzers nicht abhanden kommt ist ein Login durch einen nicht autorisierten Benutzer nahezu unmöglich.

![[SSH-Login with key.png]]