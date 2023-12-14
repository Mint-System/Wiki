---
tags:
- HowTo
---
# Softwareentwicklung Troubleshooting

## Inotify Watcher Limit

**Problem**

With [[Obsidian]], [[VSCode]] and [[VSCodium]] you will often reach the file watcher limit of your system.

**Solution**

A good doc on this issue is <https://coder.com/docs/v1/latest/guides/troubleshooting/inotify-watch-limits>. The script [[Inotify-Consumers]] will help investigate the issues.

For VSCode and VSCodium use the [[VSCode#Files Watcher Exclude]] config.