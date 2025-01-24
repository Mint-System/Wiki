---
tags:
- HowTo
---
# Docker: Move Docker data directory to new location

The standard data directory used for docker is `/var/lib/docker`, and since this directory will store all your images, volumes, etc. it can become quite large.

Follow the steps below to move the Docker data directory to a new location. This makes especially sense if you want to avoid running out of disk space on your root partition.

Stop the Docker daemon.

```bash
sudo service docker stop
```

Edit the config file:

```bash
sudo vi /etc/docker/daemon.json
```

And set the data root:

```json
{ 
   "data-root": "/mnt/sdb/docker"
}
```

Move the current docker directory to the new directory.

```bash
sudo mv /var/lib/docker /mnt/sdb/docker
```

Restart the Docker deamon.

```bash
sudo service docker start
```

Test if all services work as expected.

```bash
docker ps -a
docker info -f '{{ .DockerRootDir}}'
```
