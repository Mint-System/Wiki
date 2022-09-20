---
tags:
- HowTo
---
# CentOS Upgrade from 7 to 8

#FIXME 

## Check

* Create a snapshot of the machine.

* Check os and distro of host

## Prepare

* Install the EPEL repository

`yum install epel-release -y`

* Install yum utils

`yum install yum-utils`

* Install rpm resolver

`yum install rpmconf`

* Cleanup packages

```bash
package-cleanup --leaves
package-cleanup --orphans
```

## Package manager

* Install dnf package manager

`yum install dnf`

* Remove yum

```bash
dnf -y remove yum yum-metadata-parser
rm -Rf /etc/yum
```

## Upgrade

* Upgrade system with dnf

`dnf upgrade`

* Install CentOS release package

```bash
dnf install http://vault.centos.org/8.5.2111/BaseOS/x86_64/os/Packages/{centos-linux-repos-8-3.el8.noarch.rpm,centos-linux-release-8.5-1.2111.el8.noarch.rpm,centos-gpg-keys-8-3.el8.noarch.rpm}
```

* Upgrade EPEL repository

`dnf -y upgrade https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm`

## Cleanup

* Remove unncessary files

`dnf clean all`

* Remove old kernel and conflicting packages

```
rpm -e `rpm -q kernel`
rpm -e --nodeps sysvinit-tools
```