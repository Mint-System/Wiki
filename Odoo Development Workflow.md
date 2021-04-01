# Odoo Development Workflow

## Tools

In order to develope Odoo modules, install these tools:

* [pre-commit](https://pre-commit.com/#install)

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