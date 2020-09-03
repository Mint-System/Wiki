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

```
$ now dns ls mint-system.com
Now CLI 19.0.0
> Records found under janikvonrotz [640ms]

mint-system.com
                                          id    name        type        value                                       created
                rec_81fa269d38b4ee25cf7fcf12                ALIAS       www.mint-system.ch.                         2m ago
                rec_3b8ebef112fde3e12f90bbb2    www         ALIAS       www.mint-system.ch.                         2m ago
                                                            CAA         0 issue "letsencrypt.org"                   default
                                                            ALIAS       alias.zeit.co.                              default
                                                *           CNAME       alias.zeit.co.                              default
                rec_31ab37bd02e2021e649d7423    eris        A           95.217.162.109                              46d ago
                rec_617cf28a33af269f44fbbd01    atlas       A           49.12.42.20                                 50d ago
                rec_216e9cea61321d3f96930814    hera        A           116.203.41.151                              54d ago
                rec_459f8680e3b05ffc04cfa74c    kronos      A           78.47.53.103                                56d ago
                rec_849fd121dac29c9c99e4ccf8    zeus        A           78.47.165.13                                56d ago
                rec_722f6f1baaf52c3cdec5430e                MX          10 mta-gw.infomaniak.ch.                    56d ago
                rec_729d682728fb13cdc2c360f1    mail        TXT         v=spf1 include:spf.infomaniak.ch ?all       56d ago
                rec_86c3a964ac75d31aeba7518d    hades       A           116.203.249.55                              56d ago
```

### mint-system.ch

Unter  dieser Zone werden die Einträge der Mint System für interne und externe Dienste verwaltet.

```
now dns ls mint-system.ch
Now CLI 19.0.0
> Records found under janikvonrotz [1s]

mint-system.ch
                                          id    name                type        value                                                                       created
                rec_9b04de0a6f09d76039019f70    moodle              ALIAS       hades.mint-system.com.                                                      12s ago
                rec_af6cdc51a26238d68a6f5285    nextcloud           ALIAS       hades.mint-system.com.                                                      23s ago
                rec_9fdef88ed5eeed310764aa29    blatthirsch         ALIAS       hades.mint-system.com.                                                      36s ago
                rec_dde0ee131f1e6c2b64b26800    eliasarnold         ALIAS       hades.mint-system.com.                                                      48s ago
                rec_bd035353272bbfa0d5152407    odoo                ALIAS       hades.mint-system.com.                                                      1m ago
                rec_96df9807a14d2810e0eb2ea6                        TXT         google-site-verification=LCl72M78CcFtoOFguSCvl0rxRPCmHkpyjbwNcDARmOc        3d ago
                                                *                   CNAME       alias.zeit.co.                                                              default
                                                                    CAA         0 issue "letsencrypt.org"                                                   default
                                                                    ALIAS       alias.zeit.co.                                                              default
```

### mintsystem.ch

Das ist ein Alias-Domain und wird nach `www.mint-system.ch` umgeleitet.

```
$ now dns ls mintsystem.ch
Now CLI 19.0.0
> Records found under janikvonrotz [767ms]

mintsystem.ch
                                          id    name        type        value                               created
                rec_e2c93846c675dfc6643ea4d2    www         ALIAS       www.mint-system.ch.                 12s ago
                rec_736e9c701825e7e774cdedbe                ALIAS       www.mint-system.ch.                 20s ago
                                                            ALIAS       alias.zeit.co.                      default
                                                *           CNAME       alias.zeit.co.                      default
                                                            CAA         0 issue "letsencrypt.org"           default
```

### mint-systems.ch

Das ist ein Alias-Domain und wird nach `www.mint-system.ch` umgeleitet.

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