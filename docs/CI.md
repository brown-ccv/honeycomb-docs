---
id: ci
title: Building and using installers
---

Honeycomb leverages Continues Integration/Deployment (CI/CD) to build the code and installers for different operating systems on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs.

## What is CI/CD: 

Continuous Integration, Continuous Deployment: CI/CD or CICD refers to continuous integration and either continuous delivery or continuous deployment. CI/CD enforces the automated building of bundled executables so that tasks can be easily installed without dependencies. In Honeycomb, CI/CD is managed by GitHub Actions. 

## What are Github Actions

[GitHub Actions](https://docs.github.com/en/actions) automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in [GitHub's documentation](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)

GitHub Actions are written as YML files inside a `.github/worflows/` folder in your repository.

## Building the executables

Honeycomb includes workflows to build and create installers for Windows. Mac and Linux. These workflows exist for two configurations of the tasks:
* Home: The app does not expect event code triggers and photodiode spots. 
* Clinic: The app expects event code triggers and photodiode spots. 


More specifically, the following workflows are included:
* `build-clinic-win.yaml`: Every time an Pull Request is open, or a push is made to the `main` branch, the software is built and tests are run (clinic version). This workflow does not build and upload desktop installers
* `build-home-win.yaml`: Every time an Pull Request is open, or a push is made to the `main` branch, the software is built and tests are run (home version). his workflow does not build and upload desktop installers
* `package-home-win.yaml`: Create home-installers for windows on demand <sup>1</sup>. The installer is uploaded as an artifact and it is available for download from the GitHub Actions tab
* `package-home-all.yml`: Create home-installers for all platforms on demand <sup>1</sup>. This workflow also builds the PsiTurk version. The installers are uploaded as an artifact and they are available for download from the GitHub Actions tab.
* `package-clinic-all.yml`: Create clinic-installers for all platforms on demand <sup>1</sup>. The installers are uploaded as an artifact and they are available for download from the GitHub Actions tab.
* `package-clinic-win.yaml`: Create clinic-installers for Windows on demand <sup>1</sup>. The installer is uploaded as an artifact and it is available for download from the GitHub Actions tab
* `release-home-all.yml`: Every time an a Tag is released, home-installers are created and uploaded as packages. This also builds PsiTurk version, and deploys to GitHub pages a web version of the application. 
* `release-clinic-all.yml`:Every time an a Tag is released, clinic-installers are created and uploaded as packages

<sup>1</sup> On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage. Uploading artifacts counts against your quota. You should configure your workflows to only upload what you need.

## Download your bundled executable to install and run your task 

You can download the executable file from either the tagged release page or the GitHub actions page. To install, unzip the downloaded file and allow to run. 

The executable does not require installation of any additional software (including the prerequisites listed in Overview: Software prerequisites). 

## Uninstall the task

#### Windows 

Go to System Settings: Add or remove programs. Look for the name of your task in the installed programs list, and Uninstall. 




