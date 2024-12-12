# man apt

List repositories.

```bash
sudo grep -rhE ^deb /etc/apt/sources.list* 
```

Remove repository.

```bash
sudo rm /etc/apt/sources.list.d/$NAME.list
```