---
kind:
  - explain
section: product
---

# Linux Server Patching

Eine flexible Lösung um ihre [[Linux]] Server aktuell zu halten.

Das _Linux Server Patching_ umfasst die Installation von Sicherheits-, Software- und Systemupdates auf unterschiedlichen Linux-Server. Es ist ein Automatisierungs-Werkzeug, dass ohne Aufsicht Patches auf konfigurierten System installiert und den Erfolgt des Vorgangs meldet.

## Troubleshooting

### docker contains several valid graphdrivers

**Problem**

After updading the System the docker deamon is not available.

```
May 08 19:48:45 artemis dockerd[1772]: time="2023-05-08T19:48:45.542943151+02:00" level=error msg="[graphdriver] /var/lib/docker contains several valid graphdrivers: overlay2, devicemapper;
May 08 19:48:45 artemis dockerd[1772]: failed to start daemon: error initializing graphdriver: /var/lib/docker contains several valid graphdrivers: overlay2, devicemapper; cleanup or explici
May 08 19:48:45 artemis systemd[1]: docker.service: Main process exited, code=exited, status=1/FAILURE
```

**Solution**

Set `"storage-driver": "overlay2"` in `/etc/docker/daemon.json`.

Source: <https://stackoverflow.com/questions/45103803/not-able-to-start-docker-on-ubuntu-16-04-2-lts-error-initializing-graphdriver>
