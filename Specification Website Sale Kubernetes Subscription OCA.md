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
models:

```mermaid
classDiagram
    App --> ConfigMap
    ConfigMap --> ConfigKey
    ConfigMap --> ConfigValue
    App --> Namespace
    Manifest <-- ProductManifestRel
    ProductManifestRel --> Product
    Subscription <--> App
    Namespace --> ResPartner
    Product --> ConfigMap
    Namespace --> Environment
    Product --> Environment
    App --> Product

    class App{
      string name required
      string hostname required
      many2one product_id required
      many2many config_map_ids
      many2one namespace_id requried
      many2one environment_id required
      many2one partner_id related
      many2one subscription_id requried
    }

    class ResCompany{
      string kubernetes_api_url
      string kubernetes_api_key
      string kubernets_domain
    }

    class ConfigMap{
      bool is_template
      many2one key_id required
      many2one value_d required
    }

    class ConfigKey{
      string key required
    }

    class ConfigValue{
      string value required
    }

    class Namespace{
      string name required
      many2one partner_id required
      one2many app_ids required
      many2one environment_id required
    }

    class Environment{
      string name required
      string short required
    }

    class ResPartner{
      string name required
    }

    class Manifest{
      string name required
      string url required
      one2many product_ids
    }

    class Product{
      string name required
      one2many manifest_ids
      many2one config_map_template_id
      many2many environment_ids
    }

    class ProductManifestRel{
      one2many product_id
      one2many manifest_id
      int sequence
    }

    class Subscription{
      string name required
      many2one app_id required
    }

    class SaleOrder{
      string name required
      string app_name required
    }
```

description:

Add <﻿﻿https://github.com/kubernetes-client/python>﻿﻿
Setup connection to Kubernetes cluster.
Define deployment and service manifests.
Setup product tab to select manifests.
Manage app domains.

kubernetes.config.map:
	environment
		- prod: production
		- int: integration
		- test: testing
		- dev: development
		- upg: upgrade

kubernetes.app:

- name r4ts-int
- hostname: ﻿﻿r4ts-int.mint-cloud.ch
- config_map_ids:
	- ENVIRONMENT: prod
	- REVISION: 17.0.20241104
	- GIT_REPOS: <git@github.com/oca/sale-workflow#16>,<git@github.com/oca/sale-workflow#17>
	- PIP_INSTALL: fastapi

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
An invitation mail with the credentials is sent to the customer.