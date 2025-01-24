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

Copy the current directory to the new directory.

```bash
cp -av /var/lib/docker /mnt/sdb/docker
```

::: warning
Rerunning this copy command will copy the docker folder into the target docker folder.
:::

Rename the old directory.

```bash
sudo mv /var/lib/docker /var/lib/docker.old
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

If everything is good, remove the old Docker directory.

```bash
sudo rm -rf /var/lib/docker.old
```