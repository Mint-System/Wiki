---
kind:
  - reference
---

# Login with GitLab

Install `auth_oidc` module.

Configure the auth provider with these options:

Provider Name: `Login with GitLab`  
Auth Flow: `OpenID Connect (authorization code flow)`  
Token Map: `sub:user_id`  
Client ID: `1671ed7714ec2c2fb58c43f71f7cced55c5c85355f7d88f85fc6614b9c7c1b1d`  
Client Secret: `**************************************************`  
Allowed: `[x]`  
Body: `Login with GitLab`  
Authorization URL: `https://gitlab.com/oauth/authorize`  
Scope: `openid`  
Token URL: `https://gitlab.com/oauth/token`  
JWKS URL: `https://gitlab.com/-/jwks`
