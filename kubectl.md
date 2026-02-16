---
kind: reference
section: dev
---

Delete all pods in failed state.

```bash
kubectl get pods --field-selector=status.phase=Failed -o jsonpath='{range .items[*]}{.metadata.name}{"\n"}{end}' | \
while read pod; do
    echo "Deleting pod: $pod"
    kubectl delete pod "$pod"
done
```