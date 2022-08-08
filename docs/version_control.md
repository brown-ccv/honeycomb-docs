---
id: version_control
title: Version Control
---

## Git Overview

Git is a version control system that enables you to track changes to files. With Git, you are able to revert files back to previous versions, restore deleted files, remove added files and even track down where a particular line of code was introduced.

Git creates a hidden `.git` folder \(in the current folder\) to store the details of the file system - this folder contains all the data required to track your files and is known as a **repository**, or repo.

Git tracks file changes by the user creating a _save point_, or in Git terms a **commit**. Each commit takes a snapshot of the current file system. Commits are uniquely identified by a SHA–1 hash. This is a 40 character string which may along the lines of `ded7a0db6422d59e9893e975e32275fc36f853da`This hash can be used to track a particular commit within the repository.

Nearly all operations that are performed by Git are in you local computing environment, for the exception of few used purely to synchronize with a remote. Some of the most common git operations are depicted below. In summary, a typical flow consists of making changes to your files, _staging_ them via `git add`, marking a save point via `git commit`, then finally syncing to your remote \(e.g., GitHub\) via `git push`. If you are pushing changes to your remote from multiple places, you can bring changes your most recent version using `git pull`, which is the equivalent of doing `git fetch` followed by a `git merge` operation

![](assets/git-basics.png)

## Cheatsheet

| Command                       | Brief                                                              |
| :---------------------------- | :----------------------------------------------------------------- |
| git add &lt;files&gt;         | add a file to next commit \(stage\)                                |
| git commit -m &lt;message&gt; | commit staged files                                                |
| git push                      | upload staged commit to repo                                       |
| git pull                      | get remote repo commits and download \(try and resolve conflicts\) |
| git clone &lt;url&gt;         | download entire repository                                         |

## Best Practices

### Workflow

We recommend a simple flow based on following rules:

* Use topic/feature branches, no direct commits on main.
* Perform tests and code reviews before merges into main, not afterwards.
* Everyone starts from main, and targets main.
* Commit messages reflect intent.

### Branches

* main is the default branch and where releases are made off. This branch should be in clean/working conditions at all times. This branch is protected and can only be merged from Pull Requests for topic branches
* topic branches are created for new features, fixes, or really any changes

### Comment styles

We encourage using [Commitizen](http://commitizen.github.io/cz-cli/), a great tool for writing angular commits - this will create a standardized commit format which makes for easier change logging and more sane messages.

## Stay up-to-date with Honeycomb template repo

Honeycomb is an active project, and will be updated with new features over time. To bring changes from the honeycomb template repository to
 your task, follow the following steps:

### Add honeycomb as an additional remote

By default, your repository is configured to only sync with your remote. You can add Honeycomb as and 
First time only:
```
git remote add honeycomb https://github.com/brown-ccv/honeycomb.git
```
Every time: 
```
git fetch --all
```
```
git merge honeycomb/main --allow-unrelated histories
```
If there are any conflicts:
```
git stash
```
To merge:
```
git commit -a -m "merge honeycomb latest"
```