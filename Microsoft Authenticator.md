---
tags:
  - Definition
kind:
  - howto
lang: en
---

# Microsoft Authenticator

## TOTP 2FA aktivieren

Enabling [[TOTP Auth]] for your Microsoft account can be difficult as the naming is different to the common practice. This short guide provies a step by step guide to setup and login with a TOTP code.

First go your account security settings: <https://mysignins.microsoft.com/security-info>

After login click on _Add sign-in method_.

Then select _Microsoft Authenticator_.

![[Microsoft Add a sign-in method.png]]

On the first dialog hit _Next_ and then click _Next_ again.

The TOTP QR code will be provided. Copy and save the image.

Then click the _Can't scan image?_ button and copy the _Code_ and _URL_.

![[Microsoft Sccan the QR code.png]]

Store the the image, code and url in a vault. They can be used later to setup TOTP on any device.

Complete the porocess and you should see a new sign-in method.

![[Microsoft Security info.png]]

Use the QR code to setup an entry in your TOTP app.

## Login with TOTP

When you login into your Office 365 account and are prompted to provide the second factor, click on _I can't use my Microsoft Authenticator app right now_.

Then select _Use a verficiation code_ as verfication option.

![[Microsoft Verify your identity.png]]

Enter the TOTP code generated from your TOTP app.
