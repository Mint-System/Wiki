---
tags:
  - handbook
kind:
  - howto
section: handbook
---

# Wordpress Handbook

[[TOC]]

## List plugins

Connect to the database.

```bash
docker exec -it mysql01 bash
mysql -u$MYSQL_USER -p$MYSQL_PASSWORD
```

Run this query.

```sql
USE wordpress;
SELECT option_value FROM wp_options WHERE option_name="active_plugins";
```

This will give an output like this:

```
a:15:{i:0;s:51:"all-in-one-wp-migration/all-in-one-wp-migration.php";i:1;s:49:"Ultimate_VC_Addons-3.19.22/Ultimate_VC_Addons.php";i:2;s:43:"custom-post-type-ui/custom-post-type-ui.php";i:3;s:36:"documents-from-git/documents-git.php";i:4;s:33:"duplicate-post/duplicate-post.php";i:5;s:27:"js_composer/js_composer.php";i:6;s:23:"loco-translate/loco.php";i:7;s:41:"password-protected/password-protected.php";i:8;s:47:"regenerate-thumbnails/regenerate-thumbnails.php";i:9;s:39:"simple-staff-list/simple-staff-list.php";i:10;s:27:"svg-support/svg-support.php";i:11;s:41:"wordpress-importer/wordpress-importer.php";i:12;s:24:"wordpress-seo/wp-seo.php";i:13;s:49:"wp-user-profile-avatar/wp-user-profile-avatar.php";i:14;s:21:"wppusher/wppusher.php";}
```

## Disable plugin

Update the output from the last query.

Set `a:15` to `a:14` and remove `i:7;s:41:"password-protected/password-protected.php";`

```sql
UPDATE `wp_options`
SET `option_value` = 'a:14:{i:0;s:51:"all-in-one-wp-migration/all-in-one-wp-migration.php";i:1;s:49:"Ultimate_VC_Addons-3.19.22/Ultimate_VC_Addons.php";i:2;s:43:"custom-post-type-ui/custom-post-type-ui.php";i:3;s:36:"documents-from-git/documents-git.php";i:4;s:33:"duplicate-post/duplicate-post.php";i:5;s:27:"js_composer/js_composer.php";i:6;s:23:"loco-translate/loco.php";i:7;s:47:"regenerate-thumbnails/regenerate-thumbnails.php";i:8;s:39:"simple-staff-list/simple-staff-list.php";i:9;s:27:"svg-support/svg-support.php";i:10;s:41:"wordpress-importer/wordpress-importer.php";i:11;s:24:"wordpress-seo/wp-seo.php";i:12;s:49:"wp-user-profile-avatar/wp-user-profile-avatar.php";i:13;s:21:"wppusher/wppusher.php";}'
WHERE `option_name` = 'active_plugins';
```

## Update site url

Run this query.

```sql
UPDATE wp_options
SET option_value = 'https://www.example.com'
WHERE option_name = 'siteurl';

UPDATE wp_options
SET option_value = 'https://www.example.com'
WHERE option_name = 'home';
```
