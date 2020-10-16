# Odoo Scripts

Install Odoo-Scripts.

```bash
curl https://raw.githubusercontent.com/Mint-System/Ansible-Playbooks/master/roles/odoo-scripts/files/odoo-backup -o /usr/local/bin/odoo-backup

chmod +x /usr/local/bin/odoo-backup

odoo-backup -p $MASTER_PASSWORD $ -d erp -h https://erp.mint-system.ch -o /var/tmp

curl https://raw.githubusercontent.com/Mint-System/Ansible-Playbooks/master/roles/odoo-scripts/files/odoo-restore -o /usr/local/bin/odoo-restore

chmod +x /usr/local/bin/odoo-restore

odoo-restore -p $MASTER_PASSWORD$ -d finanzen -h https://finazen.mintsys.ch -f /var/tmp/erp.zip -r```