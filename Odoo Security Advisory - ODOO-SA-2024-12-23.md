# Odoo Security Advisory - ODOO-SA-2024-12-23

## CVE-2024-12368

Affects: Odoo 15.0 (Community and Enterprise Editions)
Severity :: High :: 8.1 :: CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N
Databases with OAuth enabled are vulnerable to session hijacking by malicious
internal users, limited to the users who are actually authenticated via OAuth.
This exploit is only possible within the brief window of the OAuth token's
validity, which is controlled by the OAuth provider. During this window
a user could hijack the session of a more privileged user, resulting in a
privilege escalation.

## CVE-2024-36259

Affects: Odoo 17.0 (Community and Enterprise Editions)
Severity :: High :: 7.5 :: CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N
Improper access control in mail module of Odoo Community 17.0 and Odoo Enterprise
17.0 allows remote authenticated attackers to extract sensitive information via
an oracle-based (yes/no response) crafted attack.

## CVE-2024-45840

Affects: Odoo 15.0 and earlier (Community and Enterprise Editions)
Severity :: Medium :: 5.8 :: CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:N/A:N
Improper access control in Odoo Community 15.0 and earlier and Odoo Enterprise
15.0 and earlier allows remote authenticated users to download arbitrary server-
side source code files.

## CVE-2024-45681

Affects: Odoo 17.0 and earlier (Community and Enterprise Editions)
Severity :: Critical :: 9.1 :: CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N
Improper input validation in Odoo Community 17.0 and earlier and Odoo
Enterprise version 17.0 and earlier may allow remote authenticated attackers to
create arbitrary records via crafted RPC requests.

## CVE-2024-36490

Affects: Odoo 16.0 (Community and Enterprise Editions)
Severity :: High :: 8.1 :: CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N
Improper access control in the mail template edition of Odoo Community 16.0 and
Odoo Enterprise 16.0 allows internal users to escalate privileges.

## CVE-2024-12865

Affects: Odoo 15.0 through 16.0 (Community and Enterprise Editions)
Severity :: Medium :: 5.9 :: CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N
Improper access control in Project App of Odoo Community 15.0 through 16.0
and Odoo Enterprise 15.0 through 16.0 allows a portal user to alter the email
address of other users.

## CVE-2024-12887

Affects: Odoo 16.0 and later (Community and Enterprise Editions)
Severity :: Medium :: 5.3 :: CVSS:3.0/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:N/A:N
Improper origin validation for WebSocket requests in Odoo Community 16.0 and
later and Odoo Enterprise version 16.0 and later allows WebSocket cross-origin
requests.

## CVE-2024-49575

Affects: Odoo 16.0 and earlier (Community and Enterprise Editions)
Severity :: Critical :: 9.1 :: CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N
Improper input validation in OAuth module of Odoo Community 16.0 and earlier
and Odoo Enterprise 16.0 and earlier allows an attacker authenticated via OAuth
to escalate privileges by sending crafted HTTP requests.
