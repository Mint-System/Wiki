# Odoo Revisions

Manage Odoo Revisions with git and docker tags.

```bash
# Create tag on the enterprise repo
# git tag -a 13.0 -m "13.0"

# Show hash for tag
# git rev-list -n 1 13.0

# Enterprise repo tag and hash list
# 13.0 b2bef9525fe5c51e0f5c8c7ae5d680b39b7c4ad8
# 14.0 264e7bb9e1420fc9384352eb9c1f210c1c4ac8e7

# Odoo Docker repo tag and hash list
# 13.0 odoo@sha256:27098953285743cdf4152b0c6f3678d573327b7d9acb61a2dffeb3224bcaa852 
# 14.0 odoo@sha256:ed98410e34aa509a9ac15e0b3b70e72f20af71cddcf9da8b72aa27771bc3410a

# Tag the docker image
# docker tag b073a2f2d68c odoo:b073a2f2d68c
# docker tag 6640ab6622b9 odoo:6640ab6622b9
```