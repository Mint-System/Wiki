---
tags:
  - Spezifikation
draft: true
---

# Spezifikation Mint Cloud

Die Mint Cloud Hosting-Platform basiert auf Odoo und Kubernetes.

## Architektur

![[Mint Cloud Architecture.canvas|Mint Cloud Architecture]]

## Technisch

Der Kern der Architektur bildet der Odoo Webshop. Er ist die Schnittstelle nach Aussen zum Kunden und nach Innen zu den Kubernetes-Umgebungen.
### Odoo Webshop

[[Specification Website Sale Helm]]

### Ansible

Die Manifest-Dateien kommen aus dem [[Ansible Build]] Projekt. Der Odoo Kubernetes-Controller verwendet somit die gleichen Manifest-Dateien wie Ansible.
### Mailgun

Mit Mailgun können Absender-Domain registriert werden: [[Mailgun#Create a domain]].
### Exoscale

[[Exoscale]] ist nur einer von Möglichen "Managed Kubernetes Providern".
### Payrexx

[[Payrexx]] ist ein Schweizer Zahlungsanbieter. Es gibt bereits Integrationen für Odoo.
### Codey

Codey ist ein Projekt der [[VSHN AG]] und soll eine Schweizer Alternative zu GitHub und Co beiten.

## Workflow

Rollen: Kunde, Operator

System: Odoo, Kubernetes

ConfigMap erfassen:

1. Der Operator loggt sicht im Odoo Backend ein
2. Er erfasst unter *Kubernetes > ConfigMaps* einen Eintrag
3. Er legt fest, ob die ConfigMap eine Vorlage ist

Manifest erfassen:

1. Der Operator loggt sicht im Odoo Backend ein
2. Er erfasst unter *Kubernetes > Manifests* einen Eintrag
3. Ein Manifest hat einen Titel und eine URL auf die YAML-Datei
4. Odoo zeigt eine Vorschau der Manifest-Datei, wenn die URL eingetragen wird

Hosting-Produkt erfassen:

1. Anschliessend öffnet er *Website > Produkte*
2. Er erfasst ein neues Produkt *Odoo-Hosting* als Subscription
3. Im Tab *Kubernetes* wählt er die Vorlage ConfigMap, Environment und Manfeste zur Anwendung aus

Hosting einkaufen:

1. Ein Kunde besucht Webshop
2. Der Kunde legt ein Odo-Hosting in den Warenkorb
3. Im Checkout-Prozess gibt der Kunde einen Appnamen ein
4. Er sieht einen Hinweis, dass der Appname als Subdomain verwendet wird
5. Odoo validiert die Eingabe des Appnamen
6. Der Kunde bezahlt den Warenkorb
7. Odoo erstellt eine subscription udn löst ein Deployment aus
8. Odoo versendet eine Einladung via Mailgun unter dem App-Hostname
9. Der Kunde erhält ein E-Mail mit den Zugriffsdaten

Deployment:

1. Odoo legt eine Subscription an
2. Für jede Auftragszeile -> Produkt -> Environments wird ein Namespace und eine App erstellt
3. Der Namespace wird direkt in Kubernetes angelegt
4. Beim Erstellen der App wird die ConfigMap vom Produkt kopiert
5. Odoo lädt in Reihenfolge die Manifest-Dateien herunter
6. Odoo wendet die Werte der ConfigMap als Jinja-Template auf die Manifest-Dateien an
7. Odoo wendet die Manifest-Dateien an.
8. Kubernetes erstellt die Deployments und Services.

ConfigMap exportieren:

1. Der Operator loggt sich im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Eintrag
3. Mit einem Klick auf *Aktion > Export ConfigMAp* erhält er ein Ansible `vars.yml`

Manuelles Deployment:

1. Der Operator loggt sicht im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Eintrag
3. Er klickt auf "Apply" und "Update"
4. Odoo prüft den Status des Ingress und zeigt diesen an

Integration zurücksetzen:

1. Der Kunde loggt sich Odoo Portal ein
2. Er öffnet die Apps-Kachel und wählt eine App aus
3. In der Detailansicht wählt der die Aktion "Reset"
4. Odoo triggert ein Deployment

Integration manuell zurücksetzen:

1. Der Operator loggt sicht im Odoo Backend ein
2. Er zeigt die Kubernetes Apps an und öffnen einen Integration-Eintrag
3. Er klickt auf den "Reset" Button