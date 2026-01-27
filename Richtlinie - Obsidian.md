---
title: Richtlinie - Obsidian
kind: explain
section: policy
---

## Formatierung 

Alle Dokumente müssen nach diesen Regeln formatiert werden:

**Vor und nach jeder Liste ein Absatz**

🟥

```markdown
Meine Liste:
-a
-b
-c
Und hier geht es weiter:
```

✅

```markdown
Meine Liste:

-a
-b
-c

Und hier geht es weiter:
```

**Nach jeder Überschrift ein Absatz**

🟥

```markdown
## Überschrift 2
Mehr Text.
```

✅

```markdown
## Überschrift 2

Mehr Text.
```

**Code-Fences mit Typen**

🟥

````markdown
~~~
x = 1
~~~
````

✅

````markdown
```python
x = 1
```
````

## Metadaten festlegen

Alle Einträge brauchen Metadaten:

```markdown
---
kind: explain
section: policy
---

# Titel

...
```

Mindestens `kind` und `section` müssen gesetzt sein.