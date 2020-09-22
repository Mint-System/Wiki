# Odoo Assets

Odoo führt JavaScript- und CSS-Code zusammen und speichert diese in der Tabelle `ir_attachment`. Bei einem Odoo- oder Modul-Upgrade kann es sein, dass die Assets nicht aktuell sind und JavaScript-Fehler angzeigt werden. Über die `psql`-Konsole können die Assets-Einträge gelöscht werden. 

```sql
delete from ir_attachment where res_model='ir.ui.view' and name like '%assets_%';
```

Nach Akualisierung der Website werden die Assets wieder erstellt.

Quelle: https://medium.com/@reedrehg/odoo-images-and-attachments-explaining-and-regenerating-assets-d1eb7fe8a3ed