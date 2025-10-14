---
tags:
  - HowTo
kind:
  - reference
section: dev
---

# docker

Enter docker container.\
`docker exec -it $CONTAINER_NAME bash`

Remove docker running containers and images.\

```bash
# Stop all containers
docker stop $(docker ps -a -q)

# Delete all containers
docker rm $(docker ps -a -q)

# Delete all images
docker rmi -f $(docker images -q)
```

List stopped containers.\
`docker ps --filter "status=exited"`

Show stats for docker containers.\
`docker stats`

Delete unused images.\
`docker image prune -a`

List containers with name and description labels.\

```
docker ps --format 'table {{.Names}}\t{{(.Label "description")}}'
```
