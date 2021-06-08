# Service Level Agreement Hosting
Applikationen, die mit [[Mintsys Cloud]] gehostet werden, erhalten zu jederzeit diese Dienste.

## 99.9% Verfügbarkeit

* Kundendatenbanken werden in der gewählten Region gehostet: Schweiz, Deutschland
* Wir arbeiten mit verschiedenen Hosting-Anbieter, die immer mindestens 99.9% Verfügbarkeit garantieren. Deshalb garantieren wir eine monatliche Verfügbarkeit von 99.9 % für unsere Hosting-Angebote
* 99.9% monatliche Verfügbarkeit = Maximale ungeplante Ausfallzeit von 45 Minuten pro Monat

## Redundanz

* Unsere Rechenzentren

## Backup und Wiederherstellung

* Datenbanken werden täglich gesichert
* Benutzer können Datenbanken jederzeit herunterladen
* 

## Sicherheit



## Unabhängigkeit

* Der Code zum Aufbau der Infrastruktur ist Open Source
* Sie können auf Ende-Monat ihr Hosting-Vertrag kündigen und zu einem Dritt-Anbieter wechseln

#FIXME 

diesen enjoy the following services at all times.

## Uptime - 99.9%

* Customer databases are hosted in the chosen Odoo region: Switerland or Germay
* Each customer database is replicated in real-time on redundant storage located in the same data center
* We work with different hosting providers worldwide that always deliver at least 99.9% uptime guarantee, so we guarantee 99.9% uptime on a monthly basis (3 nines, excluding planned maintenance)[^1]
* 99.9% uptime monthly = maximum unplanned downtime of 45 min/month.
    We usually deliver much better uptime than this (100% most months), as our providers always deliver a much better uptime than their SLA too.

[^1]: these metrics refer to the availability of the platform itself for all customers. Individual databases may be temporarily unavailable for specific reasons, typically related to the customer's actions or customizations. Planned maintenance operations happen infrequently, typically once every couple of months, generally last less than 1 hour, and are scheduled outside of business hours in the region where the maintenance is taking place. They are announced by email.

## High Availability
* Our data centers are Tier-III certified or equivalent, with N+1 redundancy for power, network and cooling
* Each customer database is replicated in real-time on redundant storage located in the same data center, so a failover can happen quickly in case of hardware failure, with no data loss.

## Backups & Disaster Recovery

* 14 full backups for at least 3 months: 1/day for 7 days, 1/week for 4 weeks, 1/month for 3+ months (view simulation of snapshots).
* Backups replicated on at least 3 different machines in different data centers in Europe and Canada. It is not possible to choose or restrict the regions where backups are replicated.
* Users can download manual backups of their live data at any time
* For a permanent disaster impacting one server only, our Disaster Recovery Plan has the following metrics:
	* RPO (Recovery Point Objective) = 5 minutes, i.e. can lose maximum 5 minutes of work
	* RTO (Recovery Time Objective) = 30 minutes, i.e the service will be back online after maximum 30 minutes  (Standby promotion time + DNS propagation time included)
* For data center disasters (one entire data center is completely and permanently down), [[Disaster Recovery Plan]] has these metrics:
	* RPO (Recovery Point Objective) = 24h, i.e. you can lose maximum 24h of work if the data cannot be recovered and we need to restore the last daily backup
	* RTO (Recovery Time Objective) = 24h, i.e. the service will be restored from the backup within 24 hours in a different data center 

## Security
The safety of your data is very important to us, and we design our systems and procedures to guarantee it.

You can learn more about it on our [[Security]] page. Here are some highlights:

* **SSL** - All web connections to client instances are protected with 256-bit SSL encryption (HTTPS with a 2048-bit modulus SSL certificate), and running behind Grade A SSL stacks. All our certificates chains are using SHA-2 already.
* **Reliable Platform** - Servers with full hardware guarantee, redundant data storage, network and electrical supplies
* **Passwords** - Customer passwords are protected with industry-standard PBKDF2+SHA512 encryption (salted + stretched for thousands of rounds)
* **Safe Systems** - Our servers are running recent Linux distribution with up-to-date security patches, with firewall and intrusion counter-measures (not disclosed for obvious reasons)
* **Isolation** - Client data stored in dedicated databases - no sharing of data between clients, no access possible from one database to another