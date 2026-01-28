---
section: guide
kind: tutorial
---
## Neues Installationsmedium (USB Stick)

Zum Einrichten von eine Rechner mit Ubuntu stellen wir eine USB Stick mit automatische Installation zur Verfügung. Ein neues Installationsmedium (z.B. mit ein neues Ubuntu Version) kann mit diese Schritte gemacht werden.

### Benötigt:

- 8 GB USB Stick
- Letzte Version von Ubuntu Desktop von www.ubuntu.com
- Packages: 7zip, xorriso

### Vorgehen:

- Download latest image from https://ubuntu.com/download/desktop
- Unpack iso using 7z package (note that 'install-iso' is the target directory in '-oinstall-iso' and there should not be a space after '-o'):

```bash
7z -y x /path/to/ubuntu-24.04.3-desktop-amd64.iso -oinstall-iso/
```

- From the unpacked iso, move the '[BOOT]' folder to its parent folder and rename [BOOT] to BOOT, for example in one command using:

```bash
mv /path/to/iso/install-iso/[BOOT] //path/to/iso/BOOT
```

- Copy the file 'autoinstall.yaml' into the unpacked iso folder (install-iso) folder (you can find the file on mint cloud -> Infrastruktur -> Rechner)
- Using the ' xorisso' package generate the parameters to create a new iso using:

```bash
xorriso -indev ~/Downloads/ubuntu-24.04.3-desktop-amd64.iso -report_el_torito as_mkisofs
```

- From the output copy all after "-V 'ubuntu ......" and now we have to adjust a few lines and add '/' at the end of each line (except the last). What needs to be changed is  added as comments. Leave the other lines alone.

```bash
xorriso -as mkisofs -r \ #add as is
-V 'Ubuntu 24.04.3 LTS amd64'  \
-o autoinstall-ubuntu-mint.iso \ #add and name the output iso
--modification-date='2025080518202600' \
--grub2-mbr BOOT/1-Boot-NoEmul.img \ # remove all after '--interval' and point to the first boot image in the moved 'BOOT' folder
--protective-msdos-label \
-partition_cyl_align off \
-partition_offset 16 \
--mbr-force-bootable \
-append_partition 2 28732ac11ff8d211ba4b00a0c93ec93b BOOT/2-Boot-NoEmul.img \ # remove all after '--interval' and point to the first boot image in the moved 'BOOT' folder
-appended_part_as_gpt \
-iso_mbr_part_type a2a0d0ebe5b9334487c068b6b72699c7 \
-c '/boot.catalog' \
-b '/boot/grub/i386-pc/eltorito.img' \
-no-emul-boot \
-boot-load-size 4 \
-boot-info-table \
--grub2-boot-info \
-eltorito-alt-boot \
-e '--interval:appended_partition_2_start_3095872s_size_10160d:all::' \
-no-emul-boot \
-boot-load-size 10160 \
install-iso # add this line, should be the folder containing the new iso content
```

- Then execute this xorriso command while being in the folder with the 'BOOT' and 'install-iso' subfolders.
- The created ISO ('autoinstall-ubuntu-mint.iso') can be flashed onto a usb drive, for example by using 'balenaEtcher'