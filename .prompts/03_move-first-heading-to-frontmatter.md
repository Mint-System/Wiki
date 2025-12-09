
Read the `AGENTS.md` to get an understanding of the project. The task is to move the first heading which is the name of the file and the title of the document to the frontmatter/metadata. Here is an example:

The entry `CrowdSec.md` looks like this:

```markdown
---
kind: reference
section: tool
website: https://crowdsec.net/
---

# CrowdSec

## Beschreibung

Die CrowdSec Security Engine läuft. Sie sammelt Metriken in den Server-Logs und wertet diese aus (ähnlich fail2ban, aber im grösseren Stil).

Um die IP-Adressen aus den CrowdSec Blocklists zu blockieren, verwende wir den CrowdSec Firewall Bouncer: <https://docs.crowdsec.net/u/bouncers/firewall/>

Diese Komponente kommuniziert mit der CrowdSec Security Engine und konfiguriert die Blocklists mit iptables.

```

And afterwards should look like this:

```markdown
---
title: CrowdSec
kind: reference
section: tool
website: https://crowdsec.net/
---

## Beschreibung

Die CrowdSec Security Engine läuft. Sie sammelt Metriken in den Server-Logs und wertet diese aus (ähnlich fail2ban, aber im grösseren Stil).

Um die IP-Adressen aus den CrowdSec Blocklists zu blockieren, verwende wir den CrowdSec Firewall Bouncer: <https://docs.crowdsec.net/u/bouncers/firewall/>

Diese Komponente kommuniziert mit der CrowdSec Security Engine und konfiguriert die Blocklists mit iptables.

```

Keep track of all files that start with a `^# Heading`.

If `website, tags, repository, section or kind` is not given. Do not add it.