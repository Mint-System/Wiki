---

---

# Odoo Nextcloud Filestore

A good example of how Odoo attachments can be stored externally: https://github.com/camptocamp/odoo-cloud-platform/tree/16.0/attachment_s3

## Nextcloud Base

`nextcloud_base`

This will be the first module to provide a Nextcloud-Integration for Odoo.

It initalizes the fields to enter the Nextcloud credentials.
If an attachment is written it stores it to Nextcloud: https://cloud-py-api.github.io/nc_py_api/FirstSteps.html#uploading-a-single-file
The filetype will be converted from binary to url.

It will generate a folder structure like this:

- Odoo/
  - {model}/
    - {id}/
      - {filename}

- Odoo
  - project.task
    - 3724
      - image.png

The Nextcloud-File-ID will be stored in the `ir.attachment`.
If the filename changes it will be updated in Nextcloud.
If the file is clicked in Odoo it will open the Nextcloud-Link.
Existing files can be moved from Odoo to nextcloud.

## Nextcloud Group ACL

`nextcloud_group_acl`

This module ensures that access permissions of an Odoo model are applied to the folder.

Every Odoo group will be created in Nextcloud as well.
Existing groups can be synced to Nextcloud.
When a Model-Folder is created in Nextcloud, the same access groups are applied.
