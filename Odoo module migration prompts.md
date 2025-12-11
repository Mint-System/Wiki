---
title: Odoo module migration prompts
kind:
  - reference
section: template
---
## View attributes

```bash
task=$(cat << EOF
Migrate view definitions from Odoo 16.0 to 17.0.
For example:
<field name="test_field_1" attrs="{'invisible': [('active', '=', True)]}"/>
<field name="test_field_2" attrs="{'invisible': [('zip', '!=', 123)]}"/>
<field name="test_field_3" attrs="{'readonly': [('zip', '!=', False)]}"/>
<field name="test_field_4" context="{'default_zip_id': active_id}" />
<button name="test_button_1" states="draft" />
<button name="test_button_2" states="assigned" />
To:
<field name="test_field_1" invisible="active"/>
<field name="test_field_2" invisible="zip != 123"/>
<field name="test_field_3" readonly="zip"/>
<field name="test_field_4" context="{'default_zip_id': id}" />
<button name="test_button_1" invisible="state != 'draft'" />
<button name="test_button_2" invisible="state != 'assigned'" />
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

task update-with-llm addons/$REPO/$MODULE/views/*.xml $task
```

## Settings page

```bash
task=$(cat << EOF
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

task update-with-llm addons/$REPO/$MODULE/views/*.xml $task
```

## Readonly states

```bash
task=$(cat << EOF
Migrate model fields state definitions.
Replace this kind of conditions:

READONLY_STATES = {
	"draft": [("readonly", False)],
	"initialized": [("readonly", True)],
	"connected": [("readonly", True)],
	"deleted": [("readonly", False)],
}
name = fields.Char(states=READONLY_STATES)
key = fields.Char(
	readonly=True
	states={"draft": [("readonly", False)], "assigned": [("deleted", False)]},
)

With a form view definitions of the respective model:

<field name="name" readonly="state in ['initialized', 'connected']"/>
<field name="key" readonly="state not in ['draft', 'deleted']"/>

EOF
)

task update-with-llm addons/$REPO/$MODULE/models/*.py $task
```

## Message body markup

```bash
task=$(cat << EOF
Migrate message links to markup safe definition. The following example:

license_msg = _("This license has been created from: %s (%s)") % (
	line.order_id._get_html_link(),
	line.product_id.name,
)
license.message_post(body=license_msg)

Become this:

from markupsafe import Markup
...
license_msg = Markup(_("This license has been created from: %s (%s)")) % (
	line.order_id._get_html_link(),
	line.product_id.name,
)
license.message_post(body=license_msg)

EOF
)

task update-with-llm addons/$REPO/$MODULE/models/*.py $task
```

