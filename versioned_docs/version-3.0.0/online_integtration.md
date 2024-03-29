---
id: online_integration
title: Deploy online
---

## Usage with PsiTurk

While this set up is optimized for Electron, we added functionality that will make use with PsiTurk easy. The application will detect if it's being used in a Turk environment and will:  

- Save the data to the default PsiTurk SQLite database.  
- Switch the language to Turk specific, if `src/language/<locale>.mturk.json` exists.  
- Use the Turk specific timeline if different than the primary timeline.  

### Prebuilt version

When GitHub Actions is run, a psiturk build will be created automatically, and can be downloaded from its artifacts (skip next step if using). The workflows responsible for building the PsiTurk application are `.github/workflows/package-home-all.yml` and `.github/workflows/release-home-all.yml`. The first one has to be triggered manually, the latter is triggered when you tag a release.

### Build instructions

To set up your PsiTurk project, we provide a script that does the conversion.
PsiTurk is a Python package used to manage HITs in Mechanical Turk. Before using the provided script, install [PsiTurk](https://psiturk.org/).

You'll need to follow these steps (the path to the PsiTurk project should be a directory you wish to be created):

- Build the application: `npm run build`  
- Move to the `psiturkit` directory: `cd psiturkit`
- If it's the first time you're running the script:  
  `./psiturk-it -p <PATH_TO_NEW_PSITURK_PROJECT>`  

- To update an existing PsiTurk project (the path to the PsiTurk project should already exist from the previous steps):  
  `./psiturk-it -u -p <PATH_TO_NEW_PSITURK_PROJECT>`

### Running psiturk

After that, just navigate to your newly created PsiTurk project directory.

```shell
shell> psiturk #start psiturk
psiturk> server on #start server
psiturk> debug #debug mode
```

## Running on the Web

### Using Github Pages

Running `npm run build` generates static content into the `build` directory that can be served using any static contents hosting service. The workflow `.github/workflows/release-home-all.yml` uploads the build directory to the `gh-branch` to serve the application on GitHub pages as an example. After a creating a tag, the workflow will run and your application will be served at `<githubuser>.github.io/<repository>`.
For this step to succeed you will need to create a deploy key and enable GitHub Pages for your repository.

1. Generate a new [SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
2. By default, your public key should have been created in `~/.ssh/id_rsa.pub` or use the name you've provided.
3. Copy key to clipboard with `xclip -sel clip < ~/.ssh/id_rsa.pub` and paste it as a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) in your repository. Copy file content if the command line doesn't work for you. Check the box for `Allow write access` before saving your deployment key.
4. You'll need your private key as a [GitHub secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) to allow the workflow to run the deployment for you.
5. To create the secret copy your private key e.g. `xclip -sel clip < ~/.ssh/id_rsa` and paste a GitHub secret with name `GH_PAGES_DEPLOY`. Copy file content if the command line doesn't work for you. Save your secret.
6. Make sure the [publishing source](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for your repository is configured for `gh-pages` branch.

### Using Firebase

We have included methods and configurations for close integration with firebase. Before proceeding with the follwing steps, please make sure that firebase is configured by following the [Getting started with firebase section under Set Up Firebase](firebase.md).

1. Run `npm run build:firebase` in the terminal to create a production build for firebase.
2. Run `firebase deploy` in the terminal to deploy the production build.
3. The production build is now deployed to the firebase project domain.

To automate firebase deployments, we have included instructions on setting up firebase github actions on our [Automated Builds page](CI.md#github-actions-for-firebase-hosting)
