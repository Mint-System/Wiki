# Ansible Troubleshooting


## Legacy setup failed

**Problem**

When Ansible is executing the gathering information task the following error is shown:

```
The following modules failed to execute: ansible.legacy.setup
```

**Solution**

Update the Python3 version on the target host.