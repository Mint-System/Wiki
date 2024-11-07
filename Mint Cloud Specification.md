
# Mint Cloud Specification

Die Mint Cloud Hosting-Plattform basiert auf Odoo und Kubernetes.

![[Mint Cloud Architecture.canvas|Mint Cloud Architecture]]

## Technisch

Die Kommunikation zwischen Odoo und der Kubernetes API erfolgt mit dem [kubernetes-python-client](https://kubernetes.readthedocs.io/en/latest/).

Bei einem Deployment werden die Manifest-Dateien von der URL heruntergeladen. Die App-Parameter werden in ein `vars.yml` geschrieben. Analog Ansible (Jinja2) werden die Manifest-Dateien mit den Werten ergänzt. Die Manifest-Dateien werden mit dem Python-Client angewendet.

Die Manifest-Dateien kommen aus dem [[Ansible Build]] Projekt. Odoo verwendet dann die gleichen Manifest-Dateien wie Ansible.

Die Odoo-Module für den Webshop sind hier beschrieben: [[Specification Website Sale Kubernetes Subscription OCA]]

Mit [[Mailgun]] können Absender-Domain registriert werden: <https://documentation.mailgun.com/docs/mailgun/api-reference/openapi-final/tag/Domains/#tag/Domains/operation/httpapi.(*T).CreateDomain-fm-4>.

## Workflow

Rollen: Kunde, Operator

System: Odoo, Kubernetes

Hosting-Produkt erfassen:

1. Der Operator loggt sicht im Odoo Backen ein
2. Er erfasst unter *Kubernetes > Manifests* einen Eintrag
3. Ein Manifest hat einen Titel und eine URL auf die YAML-Datei
4. Anschliessend öffnet er *Website > Produkte*
5. Er erfasst ein neues Produkt *Odoo-Hosting* als Subscription
6. Im Tab *Kubernetes* wählt er die Manifeste zur Anwendung aus

Einkauf und Deployment:

1. Ein Kunde besucht Webshop
2. Der Kunde legt ein Odo-Hosting in den Warenkorb
3. Im Checkout-Prozess gibt der Kunde einen Appnamen ein
4. Er sieht einen Hinweis, dass der Appname als Subdomain verwendet wird
5. Odoo validiert die Eingabe des Appname
6. Der Kunde bezahlt das Hosting
7. Odoo legt eine Subscription an und erstellt zwei Apps mitHostname $APP.mint-cloud.ch und  $APP-int.mint-cloud.ch
8. Mit dem Anlegen einer App wird ein Deployment der Odoo-Manifeste ausgelöst
9. Kubernetes registriert den App-Hostname als Mailgun-Domain
10. Odoo versendet eine Einladung via Mailgun unter dem App-Hostname
11. Der Kunde erhält ein E-Mail mit den Zugriffsdaten

Export:

1. Der Operator loggt sich im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Eintrag
3. Mit einem Klick auf *Aktion > Export to YAML* erhält er eine Ansible `vars.yml`

Manuelles Deployment

1. Der Operator loggt sicht im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Eintrag
3. Er klickt auf "Apply" und "Update"
4. Odoo prüft den Status des Ingress und zeigt diesen an

Kunde Reset Staging:

1. Der Kunde loggt sich Odoo Portal ein
2. Er öffnet die Apps-Kachel und wählt eine App aus
3. In der Detailansicht wählt der die Aktion "Reset"
4. Odoo triggert ein Deployment

Manuelles Reset Staging:

1. Der Operator loggt sicht im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Integration-Eintrag
3. Er klickt auf den "Reset" Button