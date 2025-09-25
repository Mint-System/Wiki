---
tags:
  - Troubleshooting
kind:
  - howto
section: product
---


# Ansible Troubleshooting

## Legacy setup failed

**Problem**

When Ansible is executing the gathering information task the following error is shown:

```
fatal: [host]: FAILED! => changed=false
  ansible_facts: {}
  failed_modules:
    ansible.legacy.setup:
      failed: true
      msg: 'ansible-core requires a minimum of Python version 3.8. Current version: 3.7.3 (default, Mar 23 2024, 16:12:05) [GCC 8.3.0]'
  msg: |-
    The following modules failed to execute: ansible.legacy.setup
o
```

**Solution**

Migrate the server to a newer OS release.