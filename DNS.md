# DNS

Dokumentation zur DNS-Konfiguration der Mint System Dienste.

## Management

Die DNS-Einträge und Domains werden mit mit [Vercel Now](https://vercel.com/docs/now-cli#commands/dns) verwaltet.

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

## Mail

Die E-Mail Integration von Odoo erfordert bestimmte DNS-Einträge:

```
➜  ~ git:(master) now dns ls mint-system.ch | grep odoo
Now CLI 17.1.1
> 23 Records found under janikvonrotz [1s]
         rec_bd035353272bbfa0d5152407    odoo                        ALIAS    hades.mint-system.com.                                                      2d ago
         rec_c3328617335bca98c31dd668    autoconfig.odoo             CNAME    infomaniak.com.                                                             5m ago
         rec_7c00c5c29dcca21e726c4e6c    autodiscover.odoo           CNAME    infomaniak.com.                                                             4m ago
         rec_a7e31b64b0954e9d274c7073    odoo                        MX       5 mta-gw.infomaniak.ch.                                                     1m ago
         rec_28ee20de78fd57c55b1050b6    odoo                        TXT      v=spf1 include:spf.infomaniak.ch ?all   
```