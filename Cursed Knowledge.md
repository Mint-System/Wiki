---
lang: en
section: dev
kind:
  - explain
---
# Cursed Knowledge

Here we document "cursed knowledge". This are solutions to difficult problems that are so niche that we never have to solve this problem again and thus the knowledge is already obsolete.

## [[Odoo Build]]

### Module odoo has not attribute cli

This error caused a big headache.

```
Initialize database 18.0 with web.
Traceback (most recent call last):
  File "/home/janikvonrotz/Odoo-Build/venv18.0/bin/odoo", line 8, in <module>
    odoo.cli.main()
    ^^^^^^^^
AttributeError: module 'odoo' has no attribute 'cli'
```

The error occurred after adding the upgrade-util to the `requirements.txt`.

```txt
git+https://github.com/odoo/upgrade-util@master ; python_version <= '3.12'
```

For some reason the upgrade-util overwrites the `odoo` namespace.

The solution was to set the Python path variable `export PYTHONPATH="$PWD/odoo"`.