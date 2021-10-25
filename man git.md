# git

Squal the last three commits.
```
git rebase -i HEAD~3
```
Then use keywords `pick` to select final commit and `squash` for the once to be merged.

Remove zip files from git history.
```
git filter-branch --tree-filter 'rm -f path/to/folder/*.zip' HEAD
```
Then do a force push.
```
git push origin --force --all
```