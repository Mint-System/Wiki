---
lang: en
---

# Specification Website Sale Kubernetes Subscription OCA

Context: Odoo shop for mint-cloud.ch

Goal: Extend website sale module so registered users can buy an Odoo App subscription that is automatically deployed to Kubernetes.

Repo: Mint-System/Vertical-SaaS\
Version: 18\
Edition: CE

## Modules

### Kubernetes Base

Name: `kubernetes_base`\
depends: product\
models: kubernets.app / kubernetes.namespace / kubernetes.manifest

description:

﻿﻿https://github.com/kubernetes-client/python﻿﻿
Setup connection to kubernetes cluster.
Define deployment and service templates.
Define deployment/service as a product.
Manage deployment subdomain.

kubernetes.app (Ansible Host):

- environment: prod: production, int: integration, test: testging, dev: development, upg: upgrade
- host: ﻿﻿r4ts.mint-cloud.ch,﻿﻿ r4ts-upd.mint-cloud.ch
- revision: 16.0.20241104, 17.0.20241104
- git_repos: git@github.com/oca/sale-workflow#16,git@github.com/oca/sale-workflow#17
- pip_install: fastapi

### Kubernetes Portal

Name: `kubernetes_portal`\
depends: kubernetes_base, portal 

description:

Add portal views to manage the Kubernetes app.

### Subscription OCA Portal

Name: `subscription_oca_portal`\
depends: subscription_oca, portal\

description:

Basic portal view for oca subscriptions.

### Website Sale Kubernetes Subscription OCA

Name: `website_sale_kubernetes_subscription_oca`\
depends: website_sale, kubernetes_base, subscription_oca

description:

User can enter app name in checkout process.
The (subscription) product is deployed to the Kubernetes cluster.