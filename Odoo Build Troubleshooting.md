---
tags:
  - Troubleshooting
lang: en
---

# Odoo Build Troubleshooting

## Run

### inotify instance limit reached 

**Problem**

While starting the native server this error is thrown:

```bash
OSError: [Errno 24] inotify instance limit reached
```

Or this error:

```bash
inotify.calls.InotifyError: Call failed (should not be -1): (-1) ERRNO=(0)
```

**Solution**

Increase inotify watch limit.

```bash
sudo vi /etc/sysctl.conf
```

```
fs.inotify.max_user_watches=524288
fs.inotify.max_user_instances=256
```

```bash
sudo sysctl -p
```

### ImportError libldap

**Problem**

Instance with `auth_ldap` does not start.

```
ImportError: libldap_r-2.4.so.2: cannot open shared object file: No such file or directory
```

**Solution**

Reinstall with pip flags.

```bash
pip install python-ldap --force-reinstall --no-binary python-ldap
```

### psycopg2 symbol not found

**Problem**

`init-db` fails with psycopg2 errors on macOS / Darwin.

**Solution**

```bash
source task source
pip install psycopg2-binary --force
```

### Distribution not found

**Problem**

After switching the Odoo version with `task checkout` the `task` command fail with this error:

```
pkg_resources.DistributionNotFound: The 'odoo==XX.0' distribution was not found and is required by the application
```

**Solution**

The local Odoo package needs to be updated:

```bash
source task source
pip install -e odoo 
```

### sqlite3 module not found

**Problem**

```
ModuleNotFoundError: No module named '_sqlite3'
```

**Solution**

Install library and reinstall python.

```
sudo apt install libsqlite3-dev
pyenv install 3.7.2
```