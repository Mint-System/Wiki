---
tags:
  - Troubleshooting
---


# Ansible Troubleshooting

## Legacy setup failed

**Problem**

When Ansible is executing the gathering information task the following error is shown:

```
The following modules failed to execute: ansible.legacy.setup
```

**Solution**

Install pyenv.

```bash
sudo su
curl https://pyenv.run | bash
```

Install python build dependencies.
``
```bash
# Install gcc libraries
apt install -y build-essential

# Install libraries for bz2 support
apt install -y libbz2-dev

# Install libraries for _curses support
apt install -y libncurses5-dev libncursesw5-dev

# Install libraries for ctypes support
apt install -y libffi-dev

# Install libraries for readline support
apt install -y libreadline-dev

# Install libraries for SSL support
apt install -y libssl-dev

# General dependencies for Python build
apt install -y zlib1g-dev libsqlite3-dev liblzma-dev libgdbm-dev libnss3-dev
```

Init pyenv.

```bash
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Install python 3.8.

```bash
pyenv install 3.8
pyenv global 3.8.20
```

Set Ansible python interpreter to pyenv shim.

```yml
ansible_python_interpreter: /root/.pyenv/shims/python3
```

