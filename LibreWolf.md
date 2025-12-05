---
kind: reference
lang: en
section: tool
tags:
- Website
website: https://librewolf.net/
---
# LibreWolf

## Usage

### Disable strict tracking

In the settings set these options:

Enable: Open previous windows and tabs
Disable: Delete cookies and site data when LibreWolf is closed
Disable: Ask to save passwords
Disable: Clear history when LibreWolf closes

And in the `about:config` set these options:

```
privacy.resistFingerprinting = false
privacy.fingerprintingProtection = true
privacy.fingerprintingProtection.overrides = +AllTargets,-JSDateTimeUTC
```
