## Präsentation
Dokumente verwalten mit Odoo und/oder Nextcloud.

---
### Agenda
* Herausforderungen Dokumentverwaltung
* WebDav
* Nextcloud
* Odoo Documents
* Odoo und Nextcloud
* Demo
* Community vs. Enterprise
* Diskussion
---
### Herasuforderungen Dokumentverwaltung

Bekannte Herausforderungen im Umgang mit Dokumenten.

* **Duplikate**
	* Mail-Anhang
	* Versionierung
	* Bearbeitungsverlauf
---
* **Diskussionen**
	* Fehlender Kontext
	* Dokumentpfad teilen
* **Workflows**
	* Unterschrift
	* Archivierung
* **Eindeutigkeit**
	* Dokument-ID
	* Datei/Ordner verschieben
	* Integrität
---
* **Integration**
	* ERP-System
	* Mail-Client
* **Suche**
	* Volltextsuche
	* Metadaten
* **Inhaltstypen**
	* Umfragen
	* Aufgaben
	* Notizbuch
	* Signatur
---
### WebDav [^1]

Der neue (alte) Standard zur Bereitstellung von Dateien übers Internet (HTTP).

![[Map WebDav Folder.png]]

---
### WebDav [^2]

* Offener Standard für Dateiaustausch
* Versionierung
* UUID (Universal Unique Identifier) für Dokumente
* Prüfsumme

---
### Nextcloud

![[Nextcloud Webapplikation.png]]

---
* DMS und Kollaborationsplattform
* Implementiert WebDav
* Ersetzt SMB (Netzlaufwerk)
* Open Source -> Investitionsschutz

---
### Platform unabhängig

Nextcloud kann überall installiert werden.

![[Nextcloud Alle Plattformen.png]]

---
### Odoo Documents

![[Odoo Documents.png]]

---
* Odoo Erweiterung
* Verwaltung von Anhängen
* Integration mit Odoo Workflows
* Keine WebDav-Unterstützung

---
### Odoo und Nextcloud

* Odoo App: Nextcloud Odoo Integration[^3]
* Entwicklung: Odoo Dokumente <-> Link von Nextcloud

![[MRP Shared Documents Beispiel.png]]

* Vision: Nextcloud-Filepicker for Odoo

---
### Nextcloud Integration

![[Nextcloud Integration.svg]]

---
### Community vs. Enterprise

* **Odoo Enterprise**
	* Support Odoo S.A.
	* Upgrade-Service
	* Enterprise-Funktionen
	* <https://www.odoo.com/de_DE/pricing>
* **Nextcloud Enterprise**
	* Support Nextcloud GmbH
	* Erweiterte Security-Compliance
	* <https://nextcloud.com/enterprise/order/>

---
### Demo

Nextcloud:
* https://nextcloud.mintsys.ch
* Username **demo**  
* Password **12demo34**  
* WebDav: `davs://nextcloud.mintsys.ch/remote.php/dav/files/demo/`
Odoo Documents:
* https://runbot.odoo.com/
* Username **admin**  
* Password **admin**  
---
### Diskussion

* Dreiecksbeziehung Mint System GmbH, Odoo S.A., Nextcloud GmbH
* Integration mit Services
* Integrationsmöglichkeiten WebDav
* Hosting Nextcloud/Odoo
* Dokumente signieren [^4]

---
### Referenzen

* Nextcloud
	* https://nextcloud.com/industries/engineering/
* Odoo
	* https://www.odoo.com/de_DE/customers

---
### Quellen

[^1]: https://datatracker.ietf.org/doc/html/rfc4918
[^2]: https://docs.nextcloud.com/server/latest/developer_manual/client_apis/WebDAV/search.html#supported-dav-properties
[^3]: https://apps.odoo.com/apps/modules/14.0/owncloud_odoo/
[^4]: https://apps.nextcloud.com/apps/electronicsignatures