---
tags:
  - HowTo
type: howto
---
# WAF-Log analysieren

How to analyse a core rule set log.

## Guide

Based on <https://www.oreilly.com/content/how-to-tune-your-waf-installation-to-reduce-false-positives/>.

Copy audit log from Docker container

```
ssh apollo.apland.ch docker cp waf01:/var/log/modsec_audit.log .
scp apollo.apland.ch:modsec_audit.log .
```

Set alias to get alert messages.

```
alias melidmsg='grep -o "\[id [^]]*\].*\[msg [^]]*\]" | sed -e "s/\].*\[/] [/" -e "s/\[msg //" | cut -d\  -f2- | tr -d "\]\"" | sed -e "s/(Total .*/(Total ...) .../"'
```

Get all alerts.

```
cat modsec_audit.log | melidmsg
```

Sort and group alerts.

```
cat modsec_audit.log | melidmsg | sort | uniq -c | sort -n
```

Grep anomaly alerts

```
cat modsec_audit.log | grep 980145 | egrep -o "Incoming Anomaly Score: [0-9]+" | cut -b25-
```
