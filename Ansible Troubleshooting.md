---
tags:
  - Troubleshooting
kind:
  - howto
section: product
---

# Ansible Troubleshooting

## Minimum Python version

**Problem**

When Ansible is executing the gathering information task the following error is thrown:

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

Compile Python 3.8 directly on the server.

```bash
# Install dependencies for building Python
sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget

# Download Python 3.8
cd /tmp
wget https://www.python.org/ftp/python/3.8.18/Python-3.8.18.tgz
tar -xf Python-3.8.18.tgz
cd Python-3.8.18

# Configure and compile
./configure --enable-optimizations
make -j $(nproc)

# Install (this will take some time)
sudo make altinstall

# Verify installation
python3.8 --version
```
