---
lang: en
---
# Specification Git Kubernetes

Context: Odoo shop for mint-cloud.ch

Goal: Create a git branch for every Kubernetes app / environment.

Repo: <https://github.com/Mint-System/Odoo-Apps-Connector>\
Version: 18

## Modules

### Git Base

Name: `git_base`\
depends: `base`\
models:

```mermaid
classDiagram
    Forge <--> User
	ForgePartnerRel --> Forge
	Forge --> Provider
	ForgePartnerRel --> ResPartner
	Repo --> Forge
	Branch --> Repo
	
    class User {
		char name required
		many2many git_forge_ids
		char ssh_private_key
		char ssh_private_key_password
    }

	class Forge {
		char name required
		many2one provider_id
		many2many user_ids
	}
	
	class Provider {
		char name required
		char hostname required
	}

	class ForgePartnerRel {
		forge_id many2one required
		partner_id many2one required
		char name required
	}

    class Repo{
		char name required
		many2one forge_id
		char reponame required
		one2many branch
    }

    class Branch{
		char name required
		integer sequence required
		boolean default
    }
```

description:

Runs git commands in the home folder of Odoo. The ssh key is stored in the Odoo user entry. On every operation it is written as a temporary file.

```python
Repo.clone_from(url, repo_dir, env={"GIT_SSH_COMMAND": 'ssh -i /PATH/TO/KEY'})
```

![[Git Base Repo UI.excalidraw]]

Commands:
* git add .
* git commit -m "$1"
* git status
* git log
* git clean -df

Branches:
- prod: production
- int: integration
- test: testing
- dev: development
- upg: upgrade

### Git Kubernetes

Name: `git_kubernetes`\
depends: `git_base,kubernetes_base`

description:

When a new app is added for every environment a branch is created in a git repo.
