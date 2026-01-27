
Read the `AGENTS.md`. The task is to move the website and/or repository link of an entry to the frontmatter/metadata. And while doing so also fix the metadata. Here is an example:

The entry `CrowdSec.md` looks like this:

```markdown
---
kind: reference
section: tool
---

# CrowdSec

Website: <https://crowdsec.net/>

## Beschreibung

Die CrowdSec Security Engine läuft. Sie sammelt Metriken in den Server-Logs und wertet diese aus (ähnlich fail2ban, aber im grösseren Stil).

Um die IP-Adressen aus den CrowdSec Blocklists zu blockieren, verwende wir den CrowdSec Firewall Bouncer: <https://docs.crowdsec.net/u/bouncers/firewall/>

Diese Komponente kommuniziert mit der CrowdSec Security Engine und konfiguriert die Blocklists mit iptables.
```

And afterwards should look like this:

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

Here is another example for `inosca.md`:

```markdown
---
tags:
  - Definition
section: contact
kind: reference
---

# inosca

Interkantonale Entwicklungsgemeinschaft für elektronische Bewilligungsprozesse

Website: <https://inosca.ch/>\
Repository: <https://github.com/inosca/ebau>

Weiterführende Links: [[eBau]]
```

Afterwards it looks like this:

```markdown
---
tags:
  - Definition
section: contact
kind: reference
website: https://inosca.ch/
repository: https://github.com/inosca/ebau
---

# inosca

Interkantonale Entwicklungsgemeinschaft für elektronische Bewilligungsprozesse

Weiterführende Links: [[eBau]]
```

Keep track of all files that have a `^Website:` and/or a `^Repository:` link.

If `section` or `kind` is not given, simply skip the key.
