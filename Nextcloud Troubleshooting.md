---
kind:
  - howto
section: product
---

# Nextcloud Troubleshooting

## Upgrade

### Argument must be of type array

**Problem**

Nextcloud upgrade failed with `array_filter(): Argument #1 ($array) must be of type array, null given` error.

**Cause**

App store queries failed during upgrade for certain apps (activity, circles).

**Solution**

Disable problematic apps with `php occ app:disable activity circles`, run upgrade, then re-enable apps.

### On upgrade singleton not found

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

## Integration

### Cannot install collabora server

**Problem**

Installation from app store failed.

**Solution**

Run a manual installation.

```
docker exec --user www-data nextcloud02 php -d memory_limit=512M occ app:install richdocumentscode
docker exec --user www-data nextcloud02 php -d memory_limit=512M occ app:remove richdocumentscode
```

### Cannot open document in OnlyOffice

**Problem**

This error occurs:

```
cURL error 3: (see https://curl.haxx.se/libcurl/c/libcurl-errors.html) for /hosting/discovery
```

**Solution**

Remove "Office Online Integration" app.

## Client

### Sync client not autostarting

**Problem**

On the Nextcloud sync client is not started automatically.

**Solution**

Install _GNOME Tweaks_ and add Nextcloud to the _Startup Applications_.
