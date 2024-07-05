---
tags:
- HowTo
---
# Odoo Troubleshooting

## Docker containers not available

**Problem**

After a server reboot or changing the data root of the Docker daemon the containers are not available.

**Solution**

Ensure that the correct data-root is set.

```bash
docker info -f '{{ .DockerRootDir}}'
```

Check if the containers exited.

```bash
docker ps -a
```

Restart all stopped containers.

```bash
docker restart $(docker ps -a -q)
```