---
id: setup_details
title: Setup Details (Prerequisites)
---

Check out the following for additional information and help in the setup process for Honeycomb for all operating systems!

### Help With Installing [Electron Prerequisites](https://brown-ccv.github.io/honeycomb-docs/docs/quick_start#0-installing-prerequisites) 

Honeycomb relies on Electron to package the cross-platform desktop applications.
You will need to install Electron's pre-requisites below. You can find the full instructions on the [electron documentation](https://www.electronjs.org/docs/development/build-instructions-gn) for your specific OS.

Listed below are the prerequisites for each operating system along with resources for manually installing them.

#### Windows

- Visual Studio:
  Install the latest version of [Visual Studio](https://visualstudio.microsoft.com/downloads/) with the Desktop Development for C++ Workflow.
  To add the workflow, follow [these instructions](https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160#:~:text=If%20you%20have%20Visual%20Studio,Then%2C%20choose%20Modify).

- Node.js:
  Install [Node.js](https://nodejs.org/en/download/)

- Git bash (Git 2.20.0 or later with support for "--show-current"):
  Install [git bash](https://git-scm.com/downloads)

**Note: restart computer after all installs are complete**

#### MacOS

- Command Line Tools: Type in the terminal

    ```
    xcode-select --install
    ```

- Node.js:
  Install [Node.js](https://nodejs.org/en/download/)

- Git 2.20.0 or later (with support for "--show-current"):
  Install [git](https://git-scm.com/downloads/)

- Python 3.7 or later (with support for TLS 1.2):
  Follow the guide on electron docs to [install and configure python and its modules](https://www.electronjs.org/docs/development/build-instructions-macos#python)

#### Linux

- Node.js:
  Dowload [Node.js source code](https://nodejs.org/en/download/) and compile it:

- Git 2.20.0 or later (with support for "--show-current"):
  Install [git](https://git-scm.com/downloads/)

- Python 3.7 or later (with support for TLS 1.2):
  Install [Python](https://www.python.org/downloads/)

- Clang:
  Install [Clang](https://clang.llvm.org/get_started.html) or follow installation instructions on the [electron docs](https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites)

- Development headers of GTK 3 and libnotify:
  Follow installation instructions on the [electron docs](https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites)

**Note: Ubuntu 18.10 or later recommended (or another distro new enough to support GLIBC_2.28)**
