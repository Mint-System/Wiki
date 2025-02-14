---
lang: en
tags:
  - Specification
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
	Account --> Forge
	Repo --> Account
	RepoBranch --> Repo
	Repo --> User
	
    class User {
		char name required
		char ssh_private_key
		char ssh_private_key_password
    }

	class Account {
		char name required
		
		many2one forge_id
		char local_path
	}
	
	class Forge {
		char name required
		char hostname required
		char local_path
	}

    class Repo{
		char name required
		char http_url computed
		char ssh_url computed
		char push_url
		char pull_url
		char local_path

		selection status
		selection cmd
		text cmd_input
		file cmd_input_file
		text cmd_output
		
		many2one account_id
		many2one user_id
		one2many branch_ids
    }

    class RepoBranch{
		char name required
		integer sequence required
		boolean default

		many2one repo_id
    }
```

description:

Runs git commands in the home folder of Odoo. The ssh key is stored in the Odoo user entry. On every operation it is written as a temporary file.


![[Git Base Repo UI]]

Forge Provider:
* GitHub: github.com
* GitLab: gitlab.com
* Gitea: gitea.com
* Codeberg: codeberg.org
* Codey: codey.ch

Commands:
* git status
* git log
* git add .
* git clean -fd
* git commit -m "$1"

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
