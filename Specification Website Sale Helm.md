---
tags:
  - Specification
lang: en
---
# Specification Website Sale Helm

The module structure:

```mermaid
graph TD
  base --> kubectl
  kubectl --> helm
  product --> helm
  project --> project_helm
  helm --> project_helm
  helm --> website_sale_helm
  website_sale --> website_sale_helm
```

The data model:

![[attachments/Specification Website Sale Helm|Specification Website Sale Helm]]