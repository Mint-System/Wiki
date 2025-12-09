---

---

# Mint SaaS

## Input

Aufbau und Funktion Cluster

- Mit Ansible installiert man auf einem Server Kubernetes (MicroK8s) und fügt diesen einem Cluster hinzu
- Der Kubernetes-Cluster besteht aus Servern (Node / Worker), die in unterschiedlichen Rechenzentern (Exoscale, Hetzer, ...) betrieben werden können und alle einer public IP erreichbar sind
- Auf den Nodes läuft ein oder mehrere Pods / Container
- Das Deployment der Container wird vom Master-Node gesteuert
- Mehrere Pods können als Service publizert werden
- Es gibt verschiedene Namespaces innerhalb des Clusters: Hosting, Monitoring, Ingress, Backup, ...
- Es gibt einen Ingress-Service, der den eingehenden Traffic an die entsprechenden Services weiterleitet

Integration Odoo

- Unter mintsys.ch soll eine Odoo Webshop erreichbar sein, wo Kunden Hostings kaufen können
- Eine Odoo Erweiterung deployed das gekaufte Hosting in einem Kubernetes-Cluster
- Der Kunde sieht im Portal von Odoo seine Hostings und kann diese von dort verwalten
- Die Bereitstellung der Container (beispielsweise Nextcloud und Postgres) und die Konfiguration des Proxy (Ingress) für eine Wildcard-Domain \*.mintsys.ch sind automatisiert
