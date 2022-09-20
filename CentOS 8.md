---
tags:
- Definition
---
# CentOS 8

## Troubleshooting

### Error: Failed to download metadata for repo 'appstream'

**Problem**

While trying to update the system. This error occurs:

```bash
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
```

**Solution**

Run these commands:

```bash
wget 'http://mirror.centos.org/centos/8-stream/BaseOS/x86_64/os/Packages/centos-gpg-keys-8-3.el8.noarch.rpm'
sudo rpm -i 'centos-gpg-keys-8-3.el8.noarch.rpm'

sudo dnf --disablerepo '*' --enablerepo=extras swap centos-linux-repos centos-stream-repos

sudo dnf distro-sync
```

Quelle: <https://stackoverflow.com/questions/70963985/error-failed-to-download-metadata-for-repo-appstream-cannot-prepare-internal>