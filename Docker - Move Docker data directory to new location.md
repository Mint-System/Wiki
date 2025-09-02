---
tags:
  - HowTo
kind: howto
section: product
---
# Docker - Move Docker data directory to new location

The standard data directory used for docker is `/var/lib/docker`, and since this directory will store all your images, volumes, etc. it can become quite large.

Follow the steps below to move the Docker data directory to a new location. This makes especially sense if you want to avoid running out of disk space on your root partition.

Stop the Docker service and containers.

```bash
sudo systemctl stop docker
docker stop $(docker ps -aq)
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

Verify the available disk space.

```bash
df -h
```

Move the current docker directory to the new directory.

```bash
sudo mv /var/lib/docker/ /mnt/sdb/docker/
```

Or copy the directory.

```bash
sudo rsync -avz /var/lib/docker/ /mnt/sdb/docker/
sudo mv /var/lib/docker/ /var/lib/docker.old
```

Restart the Docker deamon.

```bash
sudo systemctl restart docker
```

Test containers are running.

```bash
docker ps -a
docker info -f '{{ .DockerRootDir}}'
```

Start the containers.

```bash
docker start $(docker ps -aq -f status=exited)
```