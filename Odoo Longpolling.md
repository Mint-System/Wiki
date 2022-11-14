---
tags:
- Definition
---
# Odoo Longpolling

Odoo normal operations are done through the main (also called HTTP) port, which defaults to 8069. However, long polling requests are a bit different:

- In threaded mode (`workers = 0`, best for development), they pass though the same 8069 port.
- In multiprocess mode (`workers = 2` or more, best for production), they use a specific process which listens by default on port 8072.