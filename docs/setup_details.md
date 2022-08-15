---
id: setup_details
title: Setup Details
---

## Prerequisites

It is important that your computer is set up with the necessary packages before you begin development. You will come across a variety of errors if these prerequisites are not installed. First we need the following programs

- git (version control and GitHub integration)
- nodejs (web development - we recommend the latest long term support version)
- An Integrated Development Environment (we recommend VS Code)
  
In addition, Honeycomb relies on Electron to package the cross-platform desktop applications. Some of electron's prerequisites are platform dependant - listed below are the prerequisites for each operating system along with resources for manually installing them.

- git
- nodejs
- vscode
- electrum
- os specific

## Windows

Note that Windows occasionally requires a restart after package installations complete. If you are running into issues after installing the packages please restart your terminal and/or your entire computer. This should resolve most issues.

### chocolatey


### Python on Windows


### Manual Installation

- [Git](https://git-scm.com/download/win)
- [Node.js](https://nodejs.org/en/download/)
  - We recommend installing the "LTS" option for better stability

- Visual Studio:
  Install the latest version of [Visual Studio](https://visualstudio.microsoft.com/downloads/) with the Desktop Development for C++ Workflow.
  To add the workflow, follow [these instructions](https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160#:~:text=If%20you%20have%20Visual%20Studio,Then%2C%20choose%20Modify).

## MacOS

### Brew

### Manual Installation

- Command Line Tools: Type in the terminal

  ```terminal
  xcode-select --install
  ```

- Git 2.20.0 or later (with support for "--show-current"): [git](https://git-scm.com/downloads/)
- [Node.js](https://nodejs.org/en/download/)
- Python 3.7 or later (with support for TLS 1.2):
  Follow the guide on electron docs to [install and configure python and its modules](https://www.electronjs.org/docs/development/build-instructions-macos#python)

## Linux

We reccomend using Ubuntu 18.10 or later as your distro. Any distro new enough to support GLIBC_2.28 should work.

- Node.js:
  Dowload [Node.js source code](https://nodejs.org/en/download/) and compile it
- Git 2.20.0 or later (with support for "--show-current"):
  Install [git](https://git-scm.com/downloads/)
- Python 3.7 or later (with support for TLS 1.2):
  Install [Python](https://www.python.org/downloads/)
- Clang:
  Install [Clang](https://clang.llvm.org/get_started.html) or follow installation instructions on the [electron docs](https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites)
- Development headers of GTK 3 and libnotify:
  Follow installation instructions on the [electron docs](https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites)

## Further Help

If you are still having issues setting up your computer you can find the full instructions on the [electron documentation](https://www.electronjs.org/docs/development/build-instructions-gn) for your specific OS.
