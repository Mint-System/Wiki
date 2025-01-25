---
tags:
  - Troubleshooting
---
# Hetzner Troubleshooting

## Cannot connect after server rebuild

**Problem**

After the server rebuild I can no longer connect with ssh.

**Cause**

The server still uses the ssh key form the time of the first initialization.

**Solution**

Restore your old ssh key.