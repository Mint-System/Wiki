---
title: Github - Download binary files
section: dev
kind: howto
---

First, to get a list of the assets for the latest release:

```
curl -H "Authorization: token YOURGITHUBTOKEN" \
    https://api.github.com/repos/NAME/REPO/releases/latest
```

Then in the JSON, look up the url of the asset you want. For example it would look like:

```
"url": "https://api.github.com/repos/NAME/REPO/releases/assets/1275759"
```

Then you pass this to another curl command to retrieve the actual URL, which is actually a link to an Amazon S3 file.

```
curl -H "Authorization: token YOURGITHUBTOKEN" \
     -H "Accept:application/octet-stream" \
     -i https://api.github.com/repos/NAME/REPO/releases/assets/1275759
```

The URL will be in the "location" field of the HTTP response, and then use curl to get the file like this:

```
curl "https://github-cloud.s3.amazonaws.com...." -i -o FILENAME
```
