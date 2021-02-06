---
id: online_integration
title: Deploy online
---

## Usage with PsiTurk

While this set up is optimized for Electron, we added functionality that will make use with PsiTurk easy. The application will detect if it's being used in a Turk environment and will:  

- Save the data to the default PsiTurk SQLite database.  
- Switch the language to Turk specific, if `src/language/<locale>.mturk.json` exists.  
- Use the Turk specific timeline if different than the primary timeline.  

**Prebuilt version**
When GitHub Actions is run, a psiturk build will be created automatically, and can be downloaded from its artifacts (skip next step if using).

**Build instructions**
To set up your PsiTurk project, we provide a script that does the conversion.
PsiTurk is a Python package used to manage HITs in Mechanical Turk. Before using the provided script, install [PsiTurk](https://psiturk.org/).

You'll need to follow these steps (the path to the PsiTurk project should be a directory you wish to be created):
- Build the application: `npm run build`  
- Move to the `psiturkit` directory: `cd psiturkit`
- If it's the first time you're running the script:  
  `./psiturk-it -p <PATH_TO_NEW_PSITURK_PROJECT>`  

- To update an existing PsiTurk project (the path to the PsiTurk project should already exist from the previous steps):  
  `./psiturk-it -u -p <PATH_TO_NEW_PSITURK_PROJECT>`

**Running psiturk**
After that, just navigate to your newly created PsiTurk project directory.
```shell
shell> psiturk #start psiturk
psiturk> server on #start server
psiturk> debug #debug mode
```
