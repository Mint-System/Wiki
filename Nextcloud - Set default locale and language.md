---
section: dev
lang: en
kind:
  - howto
---

# Nextcloud: Set default locale and language

Set default language.  
`docker exec -u www-data nextcloud01 php occ config:system:set default_language --value="de_CH"`

Set default locale.  
`docker exec -u www-data nextcloud01 php occ config:system:set default_locale --value="de_CH"`
