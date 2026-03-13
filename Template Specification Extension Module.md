---
kind: reference
section: template
lang: en
---

- [ ] Develop "Auth Signup Firstname"

Module: auth_signup_firstname\
Depends: auth_siginup, partner_firstname\
Version: 18.0\
Summary: Signup form with first- and lastname.\
Repo: addons/website

Remove the name field from the "auth_signup.fields" form. Add firstname and lastname.
Extend the "_prepare_signup_values" and "signup" method to include the firstname and lastname fields.