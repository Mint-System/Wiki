---
tags:
- HowTo
---
# Git HowTo

## Push until specific commit

This how you can push until a specific commit (hash):

```bash
COMMIT=1f72f3ba764e4ece0cd556779781b414c2efacb6
echo "Summary of the commits diff:"
git --no-pager log origin/main..$COMMIT --oneline
git push origin $COMMIT:main
```

## Fork aktualisieren

In diesem Beispiel haben wir einen Fork:

* Upstream: https://github.com/Mint-System/Odoo-Build/
* Origin: https://github.com/sozialinfo/Odoo-Build

### Einrichten

Repo öffnen.

```bash
cd Sozialinfo-Odoo-Build
git switch 16.0
```

Upstream-Remote hinzufügen:

```bash
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
```

Den Upstream-Branch erstelllen:

```bash
git checkout -b Mint-System-16.0 upstream/16.0
```

Von dort den Upstream-Branch pullen.

```bash
git pull upstream 16.0
```

### Ausführen

Aktualisieren Upstream-Branch.

```bash
git switch Mint-System-16.0 
git pull upstream 16.0
```

Submodules-Datei auschecken.

```bash
git checkout 16.0 .gitmodules
git stash
```

Branch neu anlegen und Submodules-Datei wieder einfügen. 

```bash
git branch -D 16.0
git switch -c 16.0
git stash pop
```

Submodule neu auschecken.

```bash
task git-submodule-switch 16.0
task git-submodule-pull
```

Rebrand.

```
sed -i 's/Mint System/Sozialinfo/g' README.md
sed -i 's/Mint-System/Sozialinfo/g' README.md
```

Alles committen.

```bash
git add --all
git commit -m "feat: checkout upstream"
git push -f --set-upstream origin 16.0
```
## Run rebase

### Resolve rebase conflicts

Here is a common scenario when rebasing a branch from the main branch causes a conflict:

```
➜  sozialinfo git:(DEV-466-advert) ✗ git rebase 16.0
Auto-merging job_portal_exporter/static/description/index.html
CONFLICT (content): Merge conflict in job_portal_exporter/static/description/index.html
error: could not apply 6af8cb6... feat: init advert base module
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 6af8cb6... feat: init advert base module
```

In this case the commit `6af8cb6` could not be applied to the branch, because the file `index.html` has been update in both branches.

Running `git diff` gives us more details about the conflict. Git tries to combine the conflicted files and separates the conflicting lines with markers. A merge editor can help resolving the conflict:

![[vs code merge editor.png]]

After resolving the conflict you run `git rebase --continue`. You are prompted to confirm the commit. Git will update the commit with resolved file.

Next is a more complex conlfict.

```
➜  sozialinfo git:(77a2e96) ✗ git rebase --continue
[detached HEAD 5b5ed65] feat: init advert base module
 99 files changed, 1230 insertions(+), 1964 deletions(-)
 create mode 100644 advert_base/LICENSE
 create mode 100644 advert_base/README.rst
 create mode 100644 advert_base/__init__.py
 create mode 100644 advert_base/__manifest__.py
 create mode 100644 advert_base/demo/demo.xml
 create mode 100644 advert_base/images/screen.png
 create mode 100644 advert_base/models/__init__.py
 create mode 100644 advert_base/models/advert_order.py
 create mode 100644 advert_base/models/crm_lead.py
 create mode 100644 advert_base/models/product_template.py
 create mode 100644 advert_base/security/ir.model.access.csv
 create mode 100644 advert_base/security/security.xml
 create mode 100644 advert_base/static/description/icon.png
 create mode 100644 advert_base/static/description/index.html
 create mode 100644 advert_base/views/advert_order_views.xml
 create mode 100644 advert_base/views/crm_lead_views.xml
 rewrite fastapi_legal_advice/static/description/index.html (99%)
 rewrite job_portal_base/static/description/index.html (99%)
 rewrite legal_advice_sale/static/description/index.html (99%)
Auto-merging education_meilisearch/models/education_advanced_training.py
Auto-merging education_meilisearch/models/education_professional_event.py
CONFLICT (content): Merge conflict in education_meilisearch/models/education_professional_event.py
Auto-merging job_portal_meilisearch/models/job_portal_joboffer.py
Auto-merging legal_advice_meilisearch/models/request.py
error: could not apply 65775af... feat: use convert datetime from mixin
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 65775af... feat: use convert datetime from mixin
```

Two conflicts could be resolved automatically. The file `education_professional_event.py` has a conflict that needs to be resolved.

![[git rebase conflict.png]]
We selected *Accept Incoming Change* which is the change you made in the branch. When trying to continue the rebase the following message might show up:

```
➜  sozialinfo git:(03c8a41) ✗ git rebase --continue
education_meilisearch/models/education_professional_event.py: needs merge
You must edit all merge conflicts and then
mark them as resolved using git add
```

When resolving conflicts you have to add the files `git add .`. You should be greeted by this message once the rebase has finished:

```
➜  sozialinfo git:(03c8a41) ✗ git rebase --continue
[detached HEAD 7ab738a] feat: use convert datetime from mixin
 4 files changed, 13 insertions(+), 62 deletions(-)
Successfully rebased and updated refs/heads/DEV-466-advert.
```

Make sure to push the changes with `git push -f`. After a rebase the local git history is different from the remote history.