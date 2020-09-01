# Web Application Firewall
Webapplikationen der Mint System werden mit einer Web Application Firewall (WAF) geschützt. Dazu gehören interne Dienste sowie Odoo Installation von Kunden.

![[Web Application Firewall.png]]

Die WAF wird als Teil der Mint System Infrastruktur bereitgestellt. Der Infrastruktur-Code ist auf GitHub verfügbar.

Zum Einsatz kommt Der Webserver Nginx mit der ModSecurity. Der Webserver agiert als Reverse-Proxy und filtert externe Anfrage mit dem OWASP Core Rule Set.

-> [Einführung von Janik von Rotz
Laufende Integration](https://janikvonrotz.ch/2020/02/26/nginx-waf-with-modsecurity-and-owasp-crs/)

Der Einsatz WAF erfordert kontinuierliches Training. Die sogennanten False Positives, also von der WAF als erkannte Angriffs-Muster, die aber legitime Handlungen sind, müssen identifiziert werden.

 