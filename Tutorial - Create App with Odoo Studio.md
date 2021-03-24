# Tutorial: Create App with Odoo Studio

## Steps

### Step 0: Init app

* Open dashboard
* Start Odoo Studio
* Click *New App*

App Name: `Knowledge`\
Object Name: `Page`\
Features:
* Chatter
* Custom Sorting
* Archiving
* Tags
* Notes

* Finish the wizard and close Odoo Studio

### Step 1: Insert records

* Open the new app
* Create new page

Name: `App mit Odoo Studio erstellen`\
Tags: `studio, tutorial`\
Notes: `Lorem ipsum`

* Return to page

### Step 2: Add field

* Open Form View in Odoo Studio
* Add *Html* field
* Set *Label* to `Content`
* Set *Technical Name* to `content`
* Close Odoo Studio

### Step 3: Update record

* Edit the page
* Add some formatted text to the new field
* Save the record

### Step 4: Connect project model

* Open Form View in Odoo Studio
* Insert *Many2one* field

Relation: `project`

* Set *Technical Name* to `project`
* Close Odoo Studio
* Open example record and link project

### Step 5: Link from project

* Open the linked project in Form View
* Open Odoo Studio
* Add a smart button

Label: `Pages`\
Icon: same as Knowledge app\
Related field: `Project (Page)`

* Close Odoo Studio

## Next Steps

* [[Tutorial - Customize report with Odoo Studio]]