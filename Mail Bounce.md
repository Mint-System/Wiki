---
tags:
  - Note
kind: explain
---

# Mail Bounce

When sending E-Mails the client or the server may define a `Return-Path` header. This tells the receiving mail server in case the mail cannot be delivered, where to return the mail.

A mail can be bounced hard and soft. A hard bounce means f.g. the recipient does not exist and do not try to redeliver the mail. A soft bounce means f.g. the mailbox of the recipient is full and should try to redeliver the mail.
