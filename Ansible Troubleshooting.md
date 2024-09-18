# Ansible Troubleshooting


## Legacy setup failed

**Problem**

When Ansible is executing the gathering information task the following error is shown:

```
The following modules failed to execute: ansible.legacy.setup
```

**Solution**

Update the Python3 version on the target host.

```bash
sudo apt install python3.7
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 1
```