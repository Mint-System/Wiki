# Docker: Migrate bind mount to volume mount

Assuming we have a container that is storing data on bind mount, proceed as followed:

* Configure a volume for the container
* Mount the volume to /mnt/volume
* Start the container
* Copy the data from bind mount to volume; e.g. docker cp /usr/share/nextcloud nextcloud01:/mnt/volume
* Remove bind mount and attach volume instead
* Start container and check if everything worked properly

## Troubleshotting

### Permission

After migration you container might not have access to the files. Message like this one show up in the Docker log: You don't have permission to access this resource.

If you have a look at the folders you see that user and group might differ.

```
root@zeus:/usr/share/nextcloud# ls -ls /var/lib/docker/volumes/nextcloud_data01/_data/
total 152
 4 drwxr-xr-x 33 root     root  4096 Mar 24 11:11 3rdparty
...
root@zeus:/usr/share/nextcloud# ls -ls /usr/share/nextcloud/
total 148
 4 drwxr-xr-x 33 www-data root  4096 Feb 17 22:36 3rdparty
...
```

Fix the permissions with chown.

`docker exec -it nextcloud01 chown -R www-data:root /mnt/volume`