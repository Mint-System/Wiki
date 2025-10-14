---
tags:
  - HowTo
kind:
  - howto
section: product
---

# Keycloak Troubleshooting

## Resolved

### Container not starting

**Problem**

During container start this error is thrown:

`User with username 'admin' already added to '/opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json'`

**Solution**

Comment out the user env vars.

```yml

---
image: "{{ keycloak_image }}"
restart_policy: unless-stopped
recreate: yes
env:
  # KEYCLOAK_USER: "{{ keycloak_user }}"
  # KEYCLOAK_PASSWORD: "{{ keycloak_password }}"
  DB_VENDOR: "{{ keycloak_db_type }}"
```
