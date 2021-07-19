# Odoo Development Workflow

Workflow for [[Odoo Development]].

## Requirements

In order to develope Odoo modules you must run `task install-src`.

## Troubleshooting

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