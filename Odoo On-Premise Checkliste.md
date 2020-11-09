# Odoo On-Premise Checkliste
Checkliste für On-Premise Installation.

Struktur:

**ID** **Gruppe**  
**Audit**  
**Referenz Mint System**  
**Finding**  

## Host

Checkliste zur Auditierung einer Hosting-Umgebung.

1 Disk  
Das Host-System stellt ausreichend Speicherplatz zur Verfügung

2 Sicherheit  
Der Zugriff auf das Host-System ist  nur bestimmten Benutzern erlaubt

[Mint-System/Ansible-Playbooks/IAM](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/iam/tasks/users.yml#L9)

3 Sicherheit  
Ein Root-Zugriff auf das Host-System ist nicht möglich

[Mint-System/Ansible-Playbooks/IAM](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/iam/tasks/groups.yml#L15)

## Docker

Checkliste zur Auditierung einer Odoo-Docker-Umgebung.

1 Container  
Docker Daten werden Container-unabhängig persistiert

[Mint-System/Ansible-Playbooks/Postgres](https://github.com/Mint-System/Ansible-Playbooks/blob/0a03c2939b035bbe95915614f72000d67ef8e113/roles/postgres/tasks/install.yml#L17)

2 Container  
Es werden Docker Volumes verwendet

[Mint-System/Ansible-Playbooks/Postgres](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/postgres/tasks/install.yml#L1)

3 Container  
Konfiguration der Container erfolgt über Umgebungsvariablen

[Mint-System/Ansible-Playbooks/Postgres](https://github.com/Mint-System/Ansible-Playbooks/blob/0a03c2939b035bbe95915614f72000d67ef8e113/roles/postgres/tasks/install.yml#L12)

4 Odoo  
Für den Odoo Datenbankmanager ist ein Master-Passwort gesetzt

[Mint-System/Ansible-Playbooks/Odoo](https://github.com/Mint-System/Ansible-Playbooks/blob/0a03c2939b035bbe95915614f72000d67ef8e113/roles/odoo/templates/odoo.conf#L4)

5 Odoo  
Der Odoo Addon-Ordner ist korrekt eingebunden

[Mint-System/Ansible-Playbooks/Odoo](https://github.com/Mint-System/Ansible-Playbooks/blob/0a03c2939b035bbe95915614f72000d67ef8e113/roles/odoo/tasks/install.yml#L34)

6 Odoo  
Der Datenbankfilter macht ein Mapping des Hostnamen

 [Odoo Development](https://odoo-development.readthedocs.io/en/latest/admin/dbfilter.html#database-names-equal-to-subdomain)

7 Container  
Die Container Konfiguration wird bsp. mit Docker-Compose gemanaged

[Mint-System/Ansible-Playbooks](https://github.com/Mint-System/Ansible-Playbooks)

8 Sicherheit  
Die Datenbank-Passwörter sind sicher aufbewahrt

[Mint-System/Ansible-Playbooks#setup](https://github.com/Mint-System/Ansible-Playbooks#setup)

9 Container  
Die Container werden nach einem System-Neustart gestartet

[Mint-System/Ansible-Playbooks/Postgres](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/postgres/tasks/install.yml#L10)

10 Sicherheit  
Die Container kommunizieren über eine eigenes Netzwerk und nicht über exposed Ports

[Mint-System/Ansible-Playbooks/Postgres](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/postgres/tasks/install.yml#L20)

## Odoo

Checkliste zur Auditierung einer Odoo-Installation.

1 Email  
Die Email-Domäne und der ausgehende Server ist konfiguriert

2 Email  
Der eingehende Email-Server ist konfiguriert

3 Email  
Für den Email Account sind die nötigen Aliase konfiguriert

[Infomaniak odoo@mint-system.ch](https://manager.infomaniak.com/v3/317103/mailbox-settings/469398/alias?mailbox=odoo&orig=hm)

4 Localization  
Es ist nur eine System-Sprache konfiguriert

5 Localization  
Begriffe wie die "payment terms" sind übersetzt

6 Administration  
Ein Benutzer hat Adminstratoren-Rechte und kennt sich mit dem Debug-Modus von Odoo aus

7 Sicherheit  
Benutzer verwenden sichere Passwörter und speichern diese in einem Passwortmanager

8 Sicherheit  
Die Standard-Zugriffsberechtigungen sind definiert

9 Integrität  
Es sind nur Apps installiert, die auch verwendet werden

10 Localization  
Grundeinstellungen zur Währung und Informationen zum Unternehmen wurden gemacht

### Optionale Apps

Für die jeweiligen Odoo Editionen werden die folgenden Apps zur Installation empfohlen:

[[Odoo Community Edition]]:

*   Web Responsive - [Link](https://github.com/Mint-System/Ansible-Playbooks/blob/master/roles/odoo/files/web_responsive-13.0.2.1.zip)
*   Web Company Color - [Link](https://github.com/Mint-System/Ansible-Playbooks/blob/master/roles/odoo/files/web_company_color-13.0.1.0.zip)
*   Theme Clean - Link

## Backup

Checkliste zur Auditierung des Backups einer Odoo-Umgebung.

1 Odoo  
Es wird regelmässig ein Odoo Export über den Datenbankmanager erstellt

[Mint-System/Ansible-Playbooks/restic-client](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/restic-client/tasks/install.yml#L84)

2 Dump  
Von der Odoo Datenbank wird regelmässig ein Dump erstellt

[Mint-System/Ansible-Playbooks/restic-client](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/restic-client/tasks/install.yml#L107)

3 Sicherheit  
Die Backup-Daten werden auf einem externen System gespeichert

[Mint-System/Ansible-Playbooks/restic-server](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/restic-server/tasks/install.yml#L12)

4 Versionierung  
Es existiert ein Backup Rotation-Mechanismus

[Mint-System/Ansible-Playbooks/restic-client](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/restic-client/tasks/install.yml#L118)

## Proxy

Checkliste zur Auditierung eines Forward-Proxys für eine Odoo-Installation.

1 Domain  
Die Odoo-Installation ist öffentlich unter einer Subdomain erreichbar

2 Sicherheit  
Die Verbindung ist verschlüsselt und mit einem Zeritifikat von LetsEncrypt verifiziert

3 Sicherheit  
Die LetsEncrypt-Zertifikate werden automatisch erneuert

[Mint-System/Ansible-Playbooks/Nginx](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/nginx/tasks/install-certbot.yml#L68)

4 Odoo  
Der Proxy-Modus von Odoo ist aktiviert

[Mint-System/Ansible-Playbooks/Odoo](https://github.com/Mint-System/Ansible-Playbooks/blob/380533b0623cfa6bd2879c79033be17f0b342094/roles/odoo/templates/odoo.conf#L5)

5 Sicherheit  
Die Upload-Grösse von Dateien ist eingeschränkt

## Optionale Audits

Weitere Themenbereiche zur auditierung wären Überwachung der Umgebung und Schutz der Appikation. Als Odoo-Verantworlticher möchte man sicherstellen, dass Ausfälle bemerkt werden und die Webapplikation nach aussen ausreichend geschützt ist.

Hat der Kunde eine Odoo-Webseite im Einsatz wäre hier die Kontrolle der Analytics-Funktion angebracht.