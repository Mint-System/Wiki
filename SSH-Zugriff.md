---
kind:
  - explain
section: communication
---

# SSH-Zugriff

Die Verwaltung eines Linux-Server erfolgt mit einer [[Kommandozeile]]. Es gibt also keine grafische Oberfläche um die Einstellungen und Software auf dem zu steuern. SSH erlaubt den Fernzugriff auf die Kommandozeile.

## Dokumentation

Mit [[Ansible]] werden die Server-Konfigurationen beschrieben und über Kommandozeilen-Befehle angewendet. Diese Server-Konfiguration wird auf einem anderen Computer gespeichert und daher muss eine Verbindung zwischen Ansible-Client und dem Server möglich sein.

Mitarbeiter der Mint System erhalten nur auf bestimmte Server Administrations-Zugriff. Zugriffe auf Server werden protokolliert. Es gibt keine System-Benutzer.

## Sicherheit

Der SSH-Zugriff ist nur für bestimmte Benutzer freigeschaltet und ein Login mittels Passwort ist nicht erlaubt. Die Authentisierung findet mittels SSH-Schlüsselpaar statt.

Jeder Benutzer der sich mit SSH auf einem Server anmelden möchte, muss seinen öffentlichen SSH-Schlüssel auf dem Server hinterlegen. Nur wer im Besitz des privaten SSH-Schlüssels ist, kann sich so auf dem Server einloggen.

Solange der SSH-Schlüssel des Benutzers nicht abhanden kommt ist ein Login durch einen nicht autorisierten Benutzer nahezu unmöglich.

![[SSH-Login with key.png]]

## Jump-Host

Es wird empfohlen, dass der SSH-Zugriff nicht direkt auf den Server erfolgt, sondern via Jump-Host. Ein Jump-Host agiert als Proxy für die SSH-Verbindung. Der SSH-Port auf dem Ziel-Server kann so nur für die IP-Adresse des Jump-Host authorisiert werden.
![[SSH Jump-Host.png]]
Mit dieser Massnahme lässt sich die Authorisierung für den SSH-Zugriff zentralisieren und der Angriffvektor auf den Server wird reduziert.
