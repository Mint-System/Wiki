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

After login click on *Add sign-in method*.

Then select *Microsoft Authenticator*.

![[Microsoft Add a sign-in method.png]]

On the first dialog hit *Next* and then click *Next* again.

The TOTP QR code will be provided. Copy and save the image.

Then click the *Can't scan image?* button and copy the *Code* and *URL*.

![[Microsoft Sccan the QR code.png]]

Store the the image, code and url in a vault. They can be used later to setup TOTP on any device.

Complete the porocess and you should see a new sign-in method.


![[Microsoft Security info.png]]

Use the QR code to setup an entry in your TOTP app.

## Login with TOTP

When you login into your Office 365 account and are prompted to provide the second factor, click on *I can't use my Microsoft Authenticator app right now*. 

Then select *Use a verficiation code* as verfication option.

![[Microsoft Verify your identity.png]]

Enter the TOTP code generated from your TOTP app.