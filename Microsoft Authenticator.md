---
tags:
  - Definition
kind:
  - howto
lang: en
---
# Microsoft Authenticator

## TOTP 2FA aktivieren

Enabling [[TOTP Auth]] for your Microsoft account can be difficult as the naming is diffent to the standards. This short guide provies a step by step guide.

First go your account security settings: <https://mysignins.microsoft.com/security-info>

After login click on *Add sign-in method*.

Then select *Microsoft Authenticator*.

![[Microsoft Add a sign-in method.png]]

Hit on the dialog *Next* and then click *Next* on the second dialog.

The TOTP QR code will be provided. Coopy and save the image.

Then click the *Can't scan image?* button and copy the *Code* and *URL*.

![[Microsoft Sccan the QR code.png]]

Store the the image, code and url in a vault. They can be used later to setup TOTP on any device.

Complete the porocess and you should see a new sign-in method.


![[Microsoft Security info.png]]

## Login with TOTP

When you login into your Office 365 account and are prompted to provide the second factor.

When you login select *Use a verficiation code*.

![[Microsoft Verify your identity.png]]