---
lang: en
tags:
- HowTo
---
# Test Odoo Mail Flow

This document explains how to setup the Odoo development environment to test the Odoo mail communication.
## Prepare

* Get access credentials to the external mailbox `test@mint-system.ch`
* Initialize the Odoo db
* Activate the external mail servers and set the mail domain to `mint-system.ch`
* Configure an outgoing and incoming mail server using the `test@mint-system.ch` credentials
* Set the catchall alias to `test@mint-system.com`

## Send

* Go to contacts and create an entry with a private mail address that you have access to, f.g. `contact@janikvonrotz.ch`
* Use the send message tab to send a message with content `ping`
* You should receive the mail to your private mail account

## Reply

* Reply to the received mail
* Make sure the receiver is the catchall alias address
* Send the mail with content `pong`

## Fetch

* Go to the incoming mail server in Odoo
* Force the fetching and processing of mails in the mailbox
* Open the contact with the private address
* Check if the mail reply is in the chatter

## Notification

* Check the subscriber list in the chatter
* Make sure that the reply of the private address resulted in a notification
* Check if the sender of `ping` message has received a notification