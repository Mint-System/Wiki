---
lang: en
tags:
  - HowTo
section: dev
kind:
  - explain
---
# Test Odoo Mail Flow

This document explains how to setup the Odoo development environment to test the Odoo mail communication.

## Prepare

* Get access credentials for the external mailbox <test@mint-system.ch>
* Initialize the Odoo db
* Activate the external mail servers and set mail domain to `mint-system.ch`
* Configure an outgoing and incoming mail server using the <test@mint-system.ch> credentials
* Set catchall alias to `test`
* Set the default sender address to <test@mint-system.ch>

## Send

* Go to contacts and create an entry with a private mail address that you have access to, f.g. <contact@janikvonrotz.ch>
* Make sure the follower list is empty
* Use the send message tab to send a message with content `ping`
* Check the follower list in the chatter
* You should receive the message as mail in your private mail account

## Reply

* Reply to the received mail
* Make sure the receiver is the catchall alias address
* Send the mail with content `pong`

## Fetch

* Go to the incoming mail server in Odoo
* Force the fetching and processing of mails from the mailbox
* Open the contact with the private address
* Check if the mail reply is in the chatter

## Notify

* Check the follower list in the chatter
* Make sure that the reply resulted in a notification to the followers
* The notification message to the author of the `ping` message should result in an error
