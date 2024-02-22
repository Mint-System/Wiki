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

Create a config file **/etc/docker/daemon.json**

```json
{ 
   "data-root": "/mnt/server-disk2/docker" 
}
```

Copy the current directory to the new directory.

```bash
sudo cp -rp /var/lib/docker /mnt/server-disk2/docker
```

Rename the old directory.

```bash
sudo mv /var/lib/docker /var/lib/docker.old
```

Restart the Docker deamon.

```bash
sudo service docker start
```

Test if all services work as expected.

If everything is good, remove the old Docker directory.

```bash
sudo rm -rf /var/lib/docker.old
```