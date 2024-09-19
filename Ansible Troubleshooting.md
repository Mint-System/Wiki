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
```
# Install gcc libraries
apt install build-essential

# Install libraries for bz2 support
apt install libbz2-dev

# Install libraries for _curses support
apt install libncurses5-dev libncursesw5-dev

# Install libraries for ctypes support
apt install libffi-dev

# Install libraries for readline support
apt install libreadline-dev

# Install libraries for SSL support
apt install libssl-dev

# General dependencies for Python build
apt install zlib1g-dev libsqlite3-dev liblzma-dev libgdbm-dev libnss3-dev
```

Init pyenv.

```bash
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Install python 3.7

```bash
pyenv install 3.7
```

Set Ansible python interpreter.

```yml
ansible_python_interpreter: 
```

