# Ansible
Ansible ist die Technologie mit der die gesamte Mint System Infrastruktur betrieben wird. Mit Ansible beschreibt man wie eine Anzahl an Server konfiguriert wird.

## Architektur

![[Ansible Architektur.png]]

## Lessons Learned

**Tags**

Once a play matches a tag, it will also run every task that is part of that play regardless of other tags.