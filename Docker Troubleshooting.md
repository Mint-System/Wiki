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

## Cannot grab logs

**Problem**

When trying to show the docker logs you get this message:

```
error from daemon in stream: Error grabbing logs: invalid character '{' after object key:value pair
```

Or this message:

```
error from daemon in stream: Error grabbing logs: invalid character '\x00' looking for beginning of value
```

**Solution**

Clear the container logs:

```bash
docker ps -q | xargs -I {} sh -c 'truncate -s 0 $(docker inspect --format="{{.LogPath}}" {})'
```