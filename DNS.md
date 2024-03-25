---
tags:
- Definition
---
# DNS

Dokumentation zur DNS-Konfiguration der Mint System Dienste.

## Management

Die DNS-Einträge und Domains werden mit mit [Vercel DNS](https://vercel.com/docs/cli/dns) verwaltet. Alle .ch Domains sind bei [[Infomaniak]] registriert.

## Hostnames

Jeder Server erhält einen DNS-Namen. Diese Namen werden als Alias für weitere DNS-Einträge verwendet. Dadurch sind DNS-Einträge unabhängig von der IP-Adresse des Servers. Ändert sich die IP-Adresse muss das lediglich in einem Eintrag nachgeführt werden.

## Zonen

Dokumentation der verwaltet DNS-Zonen/Domänen.
### mint-system.com

Unter dieser Domäne werden die Server registriert. Beispielsweise zeigt der Eintrag `zeus.mint-system.com` auf den Zeus Server.

Diese Einträge werden für CNAME- und ALIAS-Einträge in anderen Domains verwendet.
### mint-system.ch

Unter  dieser Zone werden die Einträge der Mint System für interne und externe Dienste verwaltet.
### mintsystem.ch

Das ist eine Alias-Domain und wird nach `www.mint-system.ch` umgeleitet.
### mint-systems.ch

Das ist eine Alias-Domain und wird nach `www.mint-system.ch` umgeleitet.
### mintsys.ch

Unter dieser Domäne werden die [[Demoumgebungen]] der Mint System gehostet.
