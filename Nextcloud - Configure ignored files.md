# Nextcloud: Configure ignored files

Open the nextcloud client window and click on *Edit ignored files* of a selected sync configuration.

![[Nextcloud client ignored files.png]]

Enter these default patterns:
* .~lock*
* workspace (for Obsidian users)
* .DS_Store (for Mac users)
* .git (for developers)
* default.vim (for developers)
* node_modules (for developers)
* .now (for developers)
* .vercel (for developers)

The list of ignored files is saved to `.sync-exclude.lst`.

Alternatively you can run the script `update-sync-exclude-list` in the shared root folder.