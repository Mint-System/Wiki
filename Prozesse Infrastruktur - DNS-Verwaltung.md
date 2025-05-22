---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - DNS-Verwaltung

## Externe DNS-Einträge definieren

Arbeitsschritte:

* Zusammenstellen benötigte DNS-Einträge

Beispiel:

| Key               | Type    | Value                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `erp`             | `CNAME` | `nyx.mint-system.com`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `erp-dev`         | `CNAME` | `nyx.mint-system.com`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `.`               | `TXT`   | `v=spf1 include:spf.infomaniak.ch include:nyx.mint-system.com -all`                                                                                                                                                                                                                                                                                                                                                                                                          |
| `mail._domainkey` | `TXT`   | `"v=DKIM1; h=sha256; k=rsa; s=email; "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuo74UUktkyZxJ6MPwYu+O+AfJutLreWr8Om25xUwxnkjpOmW1+LxGgPBABp4MSbC3fjI/BAQTXLHMxhUuFfio5jHWyGHlJVQpUJR2TBR4OABjC+OnsztlwueEYoRiF4tBTb/BHO1wcN5lJ62ewmifGoVACGeHisaeFcsEqqInHbIXgepClcsYOVKSH3m3DhT71eiICTaeZAHIb4qNSpVmmme+9h22HoH/2pfw0QjtCV3yJllKTlRn8WmROUGsrVFpO157e11pRuFg5JYg9xQtrIhYCAeu/0+Mu8EofGU9hVojYBPRxek2/hzXTx7nPDBsmCqbo943MR6AHfq7WzafwIDAQAB"` |
| `.`               | `MX`    | `mta-gw.infomaniak.ch`                                                                                                                                                                                                                                                                                                                                                                                                                             |

* Zustellen der Liste an Kunde
* Bei Erhalt Zugangsdaten die Einträge selber erstellen

## DNS-Einträge mit Vercel erstellen

Arbeitsschritte:

* Installation [[Vercel#Client]]
* Zugriff auf das Mint System anfordern
* DNS-Einträge mit `vercel dns` erstellen

## Wildcard-Zertifikat mit Ansible erneuern

Arbeitsschritte:

* Delete certificate with `docker-certbot-delete`
* Run proxy plabook with `--extra-vars "certbot_preferred_challenges=dns"` and run proxy playbook
* Copy the proposed command and run it
* Update DNS records and complete challenge