---
lang: en
tags:
  - Specification
draft: true
---
# Specification Website Sale Kubernetes Subscription OCA

Context: Odoo shop for mint-cloud.ch

Goal: Extend website sale module so registered users can buy an Odoo App subscription that is automatically deployed to Kubernetes.

Repo: <https://github.com/Mint-System/Odoo-Apps-Vertical-SaaS>\
Version: 18

## Modules

### Kubernetes Base

Name: `kubernetes_base`\
depends: `product`\
models:

```mermaid
classDiagram
    App --> ConfigMap
    ConfigMap --> KeyValue
    KeyValue --> ConfigValue
    App --> Namespace
    Manifest <-- ProductManifestRel
    ProductManifestRel --> Product
    Subscription <--> App
    Namespace --> ResPartner
    Product --> ConfigMap
    Namespace --> Environment
    Product --> Environment
    App --> Product
    ConfigMap <|--Secret
    Product --> Secret
    App --> Secret
    Secret --> KeyValue

    class App{
		char name required
		char hostname required
		
		many2one namespace_id requried
		many2one subscription_line_id requried

		many2one environment_id related
		many2one product_id related
		many2one partner_id related
		
		many2many config_map_ids
		many2many secret_ids
    }

    class ResCompany{
		char kubernetes_api_url
		char kubernetes_api_key
		char kubernetes_domain
    }

    class ConfigMap{
		char name required
		bool is_template
		many2many key_value_ids
    }
    
    class Secret{
		char name required
		bool is_template
		many2many key_value_ids
    }

	class KeyValue{
		selection type required
		char key required
		text value required
		many2many value_ids required
	}

    class ConfigValue{
		char value required 
    }

    class Namespace{
		char name required
		many2one partner_id required
		one2many app_ids required
		many2one environment_id required
    }

    class Environment{
		char name required
		char code required
    }

    class ResPartner{
		char name required
    }

    class Manifest{
		char name required
		char url required
		one2many product_ids
    }

    class Product{
		char name required
		bool kubernetes_ok
		
		many2one config_map_templ_id
		many2one secret_templ_id
		
		many2many manifest_ids
		many2many environment_ids
    }

    class ProductManifestRel{
		one2many product_id
		one2many manifest_id
		int sequence
    }

    class Subscription{
		char name required
		many2one app_id required
    }

    class SaleOrder{
		char name required
		char app_name required
    }
```

description:

Add <https://github.com/kubernetes-client/python>.﻿
Setup connection to Kubernetes cluster.
Define deployment and service manifests.
Setup product tab to select manifests.
Manage config maps and apps.
Applies the config map key values to the manifest files.

environments:
- prod: production
- int: integration
- test: testing
- dev: development
- upg: upgrade

kubernetes.app:

- name r4ts-int
- hostname: ﻿﻿r4ts-int.mint-cloud.ch
- config_map_ids:
	- KUBERNETES_ENVIRONMENT: int
	- KUBERNETES_IMAGE: mintsystem:odoo-17.0.20241104
	- KUBERNETES_GIT_REPOS: git@github.com/mint-cloud/r4ts.git
	- KUBERNETES_PIP_INSTALL: fastapi

Products:
- Odoo Community Edition
- Odoo Enterprise Edition

### Kubernetes Portal

Name: `kubernetes_portal`\
depends: `kubernetes_base,portal`

description:

Add portal views to manage the Kubernetes app.

### Subscription OCA Portal

Name: `subscription_oca_portal`\
depends: `subscription_oca,portal`\

description:

Basic portal view for oca subscriptions.

### Website Sale Kubernetes Subscription OCA

Name: `website_sale_kubernetes_subscription_oca`\
depends: `website_sale,kubernetes_base,subscription_oca`

description:

User can enter app name in checkout process.
The (subscription) product is deployed to the Kubernetes cluster.
An invitation mail with the credentials is sent to the customer.