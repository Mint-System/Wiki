---
tags:
- Definition
---
# Odoo REST API
Odoo by default has no REST API. By installing the module [rest_api](https://github.com/yezyilomo/odoo-rest-api) from GitHub and its python dependencies you get one.

Here is an python example script on how to use the the REST API.

```py
import json
import requests
import sys

AUTH_URL = 'http://localhost:8069/web/session/authenticate/'

headers = {'Content-type': 'application/json'}

# Remember to configure default db on odoo configuration file(dbfilter = ^db_name$)
# Authentication credentials
data = {
    'params': {
         'login': 'admin',
         'password': 'admin',
         'db': 'odoo'
    }
}

# Authenticate user
res = requests.post(
    AUTH_URL, 
    data=json.dumps(data), 
    headers=headers
)

# Get session_id from the response cookies
# We are going to use this as our API key
session_id = res.cookies.get('session_id', '')

# Example
# Get products(assuming you have products in you db)
# Here am using query param to fetch only product id and name(This will be faster)
USERS_URL = 'http://localhost:8069/api/product.product/'

# Pass session_id for auth
params = {'session_id': session_id, 'query': '{id, name}'}

res = requests.get(
    USERS_URL, 
    params=params
)

# This will be small since we've retrieved only id and name
print(res.text)
```