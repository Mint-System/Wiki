---
title: Document Management - Archive files
---

Open the root folder in your terminal.

Create a script file with this definition:

**archive-files**

```bash
#!/bin/bash
set -e

# Settings
maxdepth=5
archive_folder_name="Archiviert"
timestamp=$(date -u +"%Y-%m-%dT%H-%M-%S")
archive_name="$timestamp-archive.tar.gz"

# Run archive task
find . -maxdepth $maxdepth -name "$archive_folder_name" -type d | awk '{print length($0), $0}' | sort -nr |  cut -d" " -f2- | while read folder
do
    pushd . > /dev/null
    echo "Check if files exists for archiving in $folder"
    cd "$folder"
    files=$(find ./ -not -name "*-archive.tar.gz")
    if [ "$files" != "./" ]; then
    	echo "Step into parent folder of $folder"
        cd ..
        echo "Archive all files into $archive_name"
        tar -czf $archive_name --exclude="*-archive.tar.gz" -C "./$archive_folder_name" .
        echo "Remove all files in $folder"
        popd > /dev/null
        pushd . > /dev/null
        cd "$folder"
        find . -not -name "*-archive.tar.gz" -delete
        echo "Move archive into folder"
        mv ../$archive_name ./
    fi
    popd > /dev/null
done
```

Make it executable `chmod +x archive-files`.

This script will look for archive folders and creates `.tar.gz` archives containing the archived files.
