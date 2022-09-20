---
tags:
- Richtlinien
---
# Richtlinie - Softwareentwicklung

## Bennenung Git Branches

Das Git-Branching-Model sieht folgende Bennung vor:

`main`: Produktiver branch\
`int`: Integraton und Staging\
`dev`: Entwicklung

## Arbeitszeiten ungestört

Softwareentwicklung erfordert hohe Konzentration. Störungen bei der Arbeit sind sehr teuer. Softwareentwicklerinnen sollen jeweils am Vormittag ungestört bleiben.

## Commit Messages

Write a helpful commit message

Use a _commit tag_ in **each** message. This tag should be one of:

-   **[IMP]**
-   **[FIX]**
-   **[REF]**
-   **[ADD]**
-   **[REM]**

\[IMP]: For improvements

\[FIX]: For bug fixes

\[REF]: For refactoring (improvements of the source code, without changing the functionality or behavior. See [http://en.wikipedia.org/wiki/Refactoring](http://en.wikipedia.org/wiki/Refactoring) for further details)

\[ADD]: For adding new resources

\[REM]: For removing of resources

Always put a meaningful commit message. Commit message should be self explanatory including the name of the module that has been changed. No more _"bugfix"_ or _"improvements"_ anymore! (the only single word commit message accepted is "merge")