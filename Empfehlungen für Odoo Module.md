---
title: Empfehlungen für Odoo Module
section: blog
kind: reference
---

Mit Odoo-Modulen können Lücken zwischen Anforderungen und dem was Odoo out-of-the-box leistet, geschlossen werden. Odoo "Erweiterungen" und "Apps" werden synonym zu "Module" verwendet.

Im folgenden eine Liste der Module, die wir auf fast jeder Odoo-Datenbank installieren. Einige dieser Module dienen der technischen Administration und dienen den Odoo-Anwendern nur indirekt.

**Partner first name and last name**

Personennamen bestehen nicht immer aus Vor- und Nachnamen und deshalb macht Odoo keine Trennung. Jedoch ist es gang und gäbe die Namen in europäischen Ländern aufzuteilen. Dieses Modul macht genau das. Man hat auf dem Kontakt zwei neue Felder. Im Anzeigenamen werden die Felder Vor- und Nachname wieder zusammengeführt.

Link: https://www.odoo-wiki.org/partner-firstname.html

**User roles**

Link: https://www.odoo-wiki.org/base-user-role.html

**Auth Impersonate User**

Link: https://www.odoo-wiki.org/auth-impersonate-user.html


**Module Auto Update**

Link: https://www.odoo-wiki.org/module-auto-update.html

**Prometheus Exporter**

Link: https://www.odoo-wiki.org/prometheus-exporter.html

**Mass Editing**

Link: https://www.odoo-wiki.org/server-action-mass-edit.html

**Audit Log**

Link: https://www.odoo-wiki.org/auditlog.html

**Odoo Studio**

Wir eine Empfehlung für ein Modul, dass man **nicht verwenden sollte**. Mit Odoo Studio kann man alles, was im Odoo UI sichtbar ist, anpassen. Ein sehr mächtiges Werkzeug. Doch es gibt einen grossen Hackend. Für alle gemachten Anpassungen ist man selber Verantwortlich. Was diese Verantwortung genau bedeutet ist nicht klar.

Klarer wird die Verantwortung bei einem Odoo Upgrade. Dann ist es aber of zu spät. Bei einem Odoo Upgrade wir die Odoo-Datenbank für die neue Odoo Version vorbereitet. Davon ausgenommen, sind alle mit Odoo Studio gemachten Anpassungen. Was dann vorher ganz einfach zusammen-geklickt wurde wird zu einer anspruchsvollen technischer Arbeit. Alle gemachten Anpassungen müssen analysiert und korrigiert werden.

