---
tags:
- HowTo
---
# Nextcloud Troubleshooting

## On upgrade singleton not found
#Nextcloud20 

**Problem**

During an update from Nextcloud 19 to 20 the following issue has been thrown.

```
Error: Class 'OCA\Mail\AppInfo\BootstrapSingleton' not found in /var/www/nextcloud/apps/mail/lib/AppInfo/Application.php:35
Stack trace:
```

**Solution**

Manually repeate the upgrade and disable maintenance mode

```bash
docker exec --user www-data nextcloud02 php occ upgrade
docker exec --user www-data nextcloud02 php occ maintenance:mode --off   
```

## Cannot install collabora server
#Nextcloud20

**Problem**

Installation from app store failed.

**Solution**

Run a manual installation.

```
docker exec --user www-data nextcloud02 php -d memory_limit=512M occ app:install richdocumentscode
docker exec --user www-data nextcloud02 php -d memory_limit=512M occ app:remove richdocumentscode
```

### Sync client not autostarting

**Problem**

On the Nextcloud sync client is not started automatically.

**Solution**

Install *GNOME Tweaks* and add Nextcloud to the *Startup Applications*.