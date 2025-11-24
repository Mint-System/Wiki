---
tags:
  - Vorlagen
section: template
kind:
  - reference
---

# Aufwandsschätzung Odoo Upgrade XX.0

Mit diesem Angebot offerieren wir ein Upgrade für die Odoo-Installation von ==KUNDE==. Das Upgrade umfasst ==zwei== Versionssprünge von Version ==XX==.0 auf ==XX==.0. Das Odoo Upgrade ist in unserem Wiki im Detail beschrieben: <https://wiki.mint-system.ch/odoo-upgrade.html>.

Die Kalkulation basiert auf folgender Aufwandsschätzung:

| Phase                       | Faktor                          | Berechnung                                                                   | Aufwand \[h\] |
| --------------------------- | ------------------------------- | :--------------------------------------------------------------------------- | ------------- |
| Bereitstellung Umgebung     | Managed oder Unmanaged Hosting  | 2h Managed Server<br>4h Unmanaged Server                                     | 2             |
| Modul-Prüfung               | Module von bekannten Dritten.   | 15min pro Modul von bekannten Providern (OCA, Mint System, Cetmix).          | 47*0.25=12    |
| Modul-Migration             | Module von unbekannten Dritten. | 1h pro Modul von unbekannten Providern.                                      | 27            |
| Upgrade Datenbank           | Versions-Sprünge                | 2h x Version (Odoo 14, 15, 16, 17, 18, 19)                                   | 6             |
| Bereinigung Anpassungen     | Snippets / Studio               | Anzahl Snippets x 5min (ohne Studio)<br>Anzahl Snippets x 15min (mit Studio) | 0             |
| Re-Implementation Workflows | Odoo-Workflow                   | 4h für Re-Implementation Odoo Workflow.                                      | 4             |
|                             |                                 | **Summe:**                                                                   | **38**        |

Liste der installierten Module von Dritten:

| account_invoice_timesheet<br>auditlog<br>auditlog_storage<br>auth_oidc<br>base_search_fuzzy<br>base_search_mail_content<br>base_technical_features<br>base_user_role<br>base_user_role_company<br>beone_sub_draft_invoice<br>bt_muk_rest<br>crm_insight<br>cx_mail_messages_filter<br>cx_mail_messages_filter_pro<br>hr_attendance_missing<br>hr_attendance_overtime_negative_hours<br>hr_attendance_reason<br>hr_timesheet_task_required<br>invoice_merging<br>mail_attach_existing_attachment<br>mail_tracking<br>mail_tracking_mailgun<br>mail_tracking_mass_mailing<br>mass_mailing_list_dynamic<br>mass_mailing_partner<br> | monitoring_status<br>muk_rest<br>nexterp_sale_update_price_auto<br>odoo/studio<br>partner_contact_access_link<br>partner_contact_in_several_companies<br>partner_contact_personal_information_page<br>partner_firstname<br>product_analytic<br>product_form_sale_link<br>project_backlog_base<br>project_crm_insight<br>project_department<br>project_task_link<br>project_task_stage_mgmt<br>project_template<br>project_type<br>prometheus_exporter<br>prt_mail_messages<br>prt_mail_messages_draft<br>prt_mail_messages_draft_pro<br>prt_mail_messages_pro<br>queue_job<br>queue_message_base<br>report_xlsx | sale_metered_usage<br>sale_order_archive<br>sale_order_line_menu<br>sale_timesheet_line_exclude<br>sale_timesheet_vshn<br>server_action_mass_edit<br>server_environment<br>sku_usage_report_vshn<br>survey_question_type_nps<br>survey_send_to_list<br>vshn_account<br>vshn_customizations<br>vshn_event_billing<br>vshn_metered_usage_event_billing<br>vshn_metered_usage_extension<br>vshn_metered_usage_queue_message<br>vshn_metered_usage_rest<br>vshn_peopleops<br>vshn_portal<br>vshn_timesheet_portal<br>web_advanced_search<br>web_environment_ribbon<br>web_refresher<br>web_widget_x2many_2d_matrix<br>wk_base_survey |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |



