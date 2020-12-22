# SMTP-Skripte

Skripte zum Testen der SMTP-Verbindung von Odoo zum Mail-Server.

## Powershell

```powershell
$EmailTo = "janik.vonrotz@mint-system.ch"
$EmailFrom = "irgendwas@example.com"
$Subject = "Test"
$Body = "Test Body"
$SMTPServer = "mail.example.com"
$SMTPPort = 587
$SMTPUser = "odoo@example.com"
$SMTPPassword = "password"

$SMTPMessage = New-Object System.Net.Mail.MailMessage($EmailFrom,$EmailTo,$Subject,$Body)
$SMTPClient = New-Object Net.Mail.SmtpClient($SMTPServer, $SMTPPort)
$SMTPClient.Credentials = New-Object System.Net.NetworkCredential($SMTPUser, $SMTPPassword);
$SMTPClient.Send($SMTPMessage)
```

## Bash

```bash
#!/bin/bash

# Swaks - Swiss Army Knife for SMTP

# brew install swaks
# sudo apt-get install swaks
# sudo dnf install swaks
```

**SMTP Test mit Authentifzierung**

```bash
SMTP_SERVER=mail.example.com
SMTP_PORT=587
SMTP_USERNAME=odoo@example.com
SMTP_PASSWORD=password
MAIL_TO=janik.vonrotz@mint-system.ch
MAIL_FROM=admin@example.com
MAIL_SUBJECT="Welcome to Odoo"
MAIL_MESSAGE="Welcome to Odoo"

echo $MAIL_MESSAGE | swaks --to $MAIL_TO --from $MAIL_FROM --server $SMTP_SERVER --port $SMTP_PORT \
    --auth LOGIN --auth-user $SMTP_USERNAME --auth-password $SMTP_PASSWORD -tls
```

**SMTP Test ohne Authentifzierung**

```bash
SMTP_SERVER=mail.example.com
SMTP_PORT=587
MAIL_TO=janik.vonrotz@mint-system.ch
MAIL_FROM=admin@example.com
MAIL_SUBJECT="Welcome to Odoo"
MAIL_MESSAGE="Welcome to Odoo"

echo $MAIL_MESSAGE | swaks --to $MAIL_TO --from $MAIL_FROM --server $SMTP_SERVER --port $SMTP_PORT -tls
```