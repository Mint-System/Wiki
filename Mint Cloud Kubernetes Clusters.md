---
kind:
  - reference
---

# Mint Cloud Kubernetes Clusters

Every cluster available in the Mint Cloud should be accessable with a three letter subdomain.

| CName            | Type      | Provider   |
| ---------------- | --------- | ---------- |
| exo.mintcloud.ch | OpenShift | APPUiO     |
| chk.mintcloud.ch | OpenStack | Infomaniak |
| cloud.local      | Kind      | Localhost  |

For each cluster there will be a wildcard DNS-Entry, f.g. `*.chk.mintcloud.ch`.