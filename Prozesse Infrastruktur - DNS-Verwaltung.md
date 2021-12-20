# Prozess DNS-Verwaltung

## Externe DNS-Einträge erstellen

Arbeitsschritte:
* Zusammenstellen benötigte DNS-Einträge
* Zustellen der Liste an Kunde
* Bei Erhalt Zugangsdaten die Einträge selber erstellen

## DNS-Einträge erstellen

Arbeitsschritte:
* Installation [[Vercel#Client]]
* Zugriff auf das Mint System anfordern
* DNS-Einträge mit `vercel dns` erstellen

## Wildcard-Zertifikat erneuern

Arbeitsschritte:
* Delete certificate with `docker-certbot-delete`
* Run proxy plabook with `--extra-vars "certbot_preferred_challenges=dns"` and run proxy playbook
* Copy the proposed command and run it
* Update DNS records and complete challenge