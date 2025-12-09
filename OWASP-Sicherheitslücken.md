---

---

# OWASP-Sicherheitslücken

- **Injection Flaws:** Einschleusungsfehler, insbesondere SQL-Einschleusung, sind in Webanwendungen weit verbreitet. Einschleusungen treten auf, wenn vom Benutzer bereitgestellte Daten als Teil eines Befehls oder einer Abfrage an einen Interpreter gesendet werden. Die feindlichen Daten des Angreifers verleiten den Interpreter dazu, unbeabsichtigte Befehle auszuführen oder Daten zu ändern.

- **Cross-Site-Scripting (XSS)**: XSS-Sicherheitslücken treten immer dann auf, wenn eine App vom Benutzer eingegebene Daten aufgreift und sie an einen Webbrowser sendet, ohne diese Inhalte vorher zu validieren oder zu verschlüsseln. XSS ermöglicht es Angreifern, Skripte im Browser des Opfers auszuführen, die Benutzersitzungen entführen, Websites verunstalten, möglicherweise Würmer einschleusen können.

- **Cross Site Request Forgery (CSRF):** Ein CSRF-Angriff zwingt den Browser eines angemeldeten Opfers, eine gefälschte HTTP-Anfrage mit dem Sitzungscookie des Opfers und anderen automatisch enthaltenen Authentifizierungsinformationen an eine anfällige Webanwendung zu senden. Auf diese Weise kann der Angreifer den Browser des Opfers zwingen, Anfragen zu generieren, die die anfällige Anwendung für legitime Anfragen des Opfers hält.

- **Malicious File Execution:** Code, der für die Ferneinbindung von Dateien (Remote File Inclusion, RFI) anfällig ist, ermöglicht es Angreifern, feindliche Codes und Daten einzufügen, was zu verheerenden Angriffen führt, z. B. zur vollständigen Kompromittierung des Servers.

- **Insecure Direct Object Reference:** Ein direkter Objektverweis liegt vor, wenn ein Entwickler einen Verweis auf ein internes Implementierungsobjekt wie eine Datei, ein Verzeichnis, einen Datenbankeintrag oder einen Schlüssel als URL oder Formularparameter preisgibt. Angreifer können diese Verweise manipulieren, um unbefugt auf andere Objekte zuzugreifen.

- **Insecure Cryptographic Storage:** Webanwendungen verwenden kryptografische Funktionen nur selten ordnungsgemäß, um Daten und Anmeldeinformationen zu schützen. Angreifer nutzen schwach geschützte Daten, um Identitätsdiebstahl und andere Straftaten wie Kreditkartenbetrug zu begehen.

- **Insecure Communications:** Anwendungen verschlüsseln den Netzwerkverkehr häufig nicht, wenn dies zum Schutz sensibler Kommunikation erforderlich ist.

- **Failure to Restrict URL Access:** Häufig schützt eine Anwendung sensible Funktionen nur, indem sie die Anzeige von Links oder URLs für nichtautorisierte Benutzer verhindert. Angreifer können diese Schwachstelle ausnutzen, um auf diese URLs direkt zuzugreifen und unbefugte Operationen durchzuführen.
