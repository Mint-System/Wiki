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
- a
- b
- c
Und hier geht es weiter:
```

✅

```markdown
Meine Liste:

- a
- b
- c

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

**Dateinamen als Code**

🟥

```markdown
Copy the file 'autoinstall.yaml'.
```

✅

```markdown
Copy the file `autoinstall.yaml`.
```

**Urls einklammern**

🟥

```markdown
Letzte Version von Ubuntu Desktop von www.ubuntu.com
```

✅

```markdown
Letzte Version von Ubuntu Desktop von <www.ubuntu.com>
```

**Kursiv statt Hochkomma**

🟥

```markdown
Drücken Sie auf den Knopf "Installieren".
```

✅

```markdown
Drücken Sie auf den Knopf _Installieren_.
```

**Listen immer mit Dashes**

🟥

```markdown
Meine Liste:

* a
* b
* c
```

✅

```markdown
Meine Liste:

- a
- b
- c
```

**Klare Pfadangaben**

🟥

```markdown
Navigiere nach "Einstellungen>Technisch>Datenbank".
```

✅

```markdown
Navigiere nach _Einstellungen > Technisch > Datenbank_.
```
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