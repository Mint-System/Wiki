---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Odoo - Modul Migration

## Submodule-Branch initialisieren

Arbeitsschritte:

- Navigation in das Submodule

```bash
cd addons/$REPO
```

- Neuer Branch erstellen

```bash
git switch --orphan $TARGET_VERSION
```

- Alle Dateien entfernen

```bash
rm -rf ./*
```

- Template-Dateien kopieren und `README.md` Datei aktualisieren

```bash
task template-repo addons/$REPO
```

- Änderungen committen

```bash
git add --all
git commit -m "feat: init $(git branch --show-current)"
git push --set-upstream origin $(git branch --show-current)
```

- Submodule auf Odoo Build hinzufügen

```bash
task add-git-submodule git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO
```

- Änderungen auf Odoo Build committen
- Register repo to <https://apps.odoo.com/apps/dashboard/repos>

## Modul migrieren

Arbeitsschritte:

- In Odoo-Build die neue Odoo Version auschecken:

```bash
task load-version $TARGET_VERSION
```

- Auschecken Modul von vorhergehender Version

```bash
cd addons/$REPO
git checkout $SOURCE_VERSION $MODULE
```

- Modul-Code und Version in `__manifest__.py` aktualisieren

```bash
task migrate-module addons/$REPO/$MODULE
```

- Generate module doc file.

```bash
task generate-module-docs addons/$REPO/$MODULE
```

- Modul linten und Repo aktualisieren:

```bash
cd addons/$REPO/
task all
```

- Modul installieren und testen

```bash
task init-module addons/$REPO/$MODULE
```

- If required migrate the attrs definition with this prompt.

```bash
TASK=$(cat << EOF
Migrate view definitions from Odoo 16.0 to 17.0.
For example:
<field name="test_field_1" attrs="{'invisible': [('active', '=', True)]}"/>
<field name="test_field_2" attrs="{'invisible': [('zip', '!=', 123)]}"/>
<field name="test_field_3" attrs="{'readonly': [('zip', '!=', False)]}"/>
<field name="test_field_4" context="{'default_zip_id': active_id}" />
To:
<field name="test_field_1" invisible="active"/>
<field name="test_field_2" invisible="zip != 123"/>
<field name="test_field_3" readonly="zip"/>
<field name="test_field_4" context="{'default_zip_id': id}" />
Or for example:
<div class="oe_chatter">
	<field name="message_follower_ids"/>
	<field name="activity_ids"/>
	<field name="message_ids"/>
</div>
To:
<chatter/>
EOF
)

task update-with-llm addons/$REPO/$MODULE/views/*.xml "$TASK"
```

```bash
TASK=$(cat << EOF
Migrate settings view from Odoo 17.0 to 18.0.
For example:
<div name="integration" position="inside">
	<div class="col-12 col-lg-6 o_setting_box" id="ssh_setting">
		<div class="o_setting_left_pane">
			<field name="module_ssh" />
		</div>
		<div class="o_setting_right_pane">
			<label string="SSH" for="module_ssh" />
			<div class="text-muted">
				Integrate with SSH.
			</div>
			<div attrs="{'invisible': [('module_ssh', '=', False)]}">
				<div class="content-group mt16">
					<label for="ssh_public_key" class="o_light_label" />
					<field name="ssh_public_key" />
				</div>
				<div class="content-group">
					<label for="ssh_private_key" class="o_light_label" />
					<field name="ssh_private_key" />
				</div>
			</div>
		</div>
	</div>
</div>
To:
<block id="integration" position="inside">
	<setting help="Integrate with SSH.">
		<field name="module_ssh"/>
		<div invisible="not module_ssh">
			<div class="content-group mt16">
				<label for="ssh_public_key" class="o_light_label mr8" />
				<field name="ssh_public_key" />
			</div>
			<div class="content-group">
				<label for="ssh_private_key" class="o_light_label mr8" />
				<field name="ssh_private_key" />
			</div>
		</div>
	</setting>
</block>
EOF
)

task update-with-llm addons/$REPO/$MODULE/views/*.xml "$TASK"
```

```
TASK=$(cat << EOF
Migrate model fields state definitions:
For example:
    READONLY_STATES = {
        "draft": [("readonly", False)],
        "initialized": [("readonly", True)],
        "connected": [("readonly", True)],
        "deleted": [("readonly", False)],
    }
    name = fields.Char(required=True, states=READONLY_STATES)
To:
    def _is_readonly(self):
        self.ensure_one()
        return self.state in ['initialized', 'connected']
EOF
)

task update-with-llm addons/$REPO/$MODULE/models/*.py "$TASK"
```

- Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
- Migration committen

```bash
git -C addons/$REPO add --all
git -C addons/$REPO commit -m "feat($MODULE): migrate
```

- Optional einen Pull-Request erstellen:
  - Feature branch erstellen `git switch -c mig-$MODULE`
  - Und mit dem CLI einen PR erstellen `gh pr create`
  - Wenn PR gemerged ist, das Submodule-Repo deployen
- Änderungen pushen

```bash
git push
```

## Mint System Fork für OCA Repository erstellen

Arbeitsschritte:

- Go to the repo and create a fork
- Navigate into the local repo`cd oca/sale-workflow
- Add the fork as remote `git remote add mint-system git@github.com:Mint-System/sale-workflow.git`
- Checkout a customer branch `git switc -c $BRANCH-$PROJECT_CODE`
- Push a branch to the remote with `git push mint-system $BRANCH-$PROJECT_CODE`

## OCA-Modul migrieren

Arbeitsschritte:

- Prüfen ob für das gesuchte Modul ein Pull-Request existiert, der alle Tests erfüllt
  - Denn Branch des Pull-Request bereitstellen
- Prüfen ob die OCA plant das Modul auf die Odoo Zielversion upzugraden
  - Modul gemäss Anleitung [[Migrate OCA module to XX.0]] migrieren
  - Den Branch des Ppull-Request bereitstellen
