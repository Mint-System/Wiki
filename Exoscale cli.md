---
lang: en
section: tool
kind:
  - howto
---

# Exoscale cli

Every Exoscale resource can be managed with the `exo` cli.

Website: <https://community.exoscale.com/community/tools/exoscale-command-line-interface/>

## Create API key for S3

Based on <https://community.exoscale.com/community/iam/quick-start/#api-keys>.

Create a `policy.json`:

```json
{
  "default-service-strategy": "deny",
  "services": {
    "sos": {
      "type": "allow"
    }
  }
}
```

Create a role:

```bash
cat policy.json | exo iam role create hyperion-role --editable --policy -
```

List details of the role:

```bash
exo iam role show hyperion-role
exo iam role show hyperion --policy
```

Create an api key for the role:

```bash
exo iam api-key create hyerion-api-key hyperion-role
```
