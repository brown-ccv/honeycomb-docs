---
id: configuration
title: Configuration
---

## Environment Variables

The following are environment variables used by the app:

* `ELECTRON_START_URL` [string]: URL (e.g. `http://localhost:3000`) where the front end of the app is being hosted - also used in `electron.js` to indicate the app is running in dev mode
* `EVENT_MARKER_PRODUCT_ID` [string]: The product ID of the event marker (e.g. `0487`).  If not set, it will use the `productID` set in `public/config/trigger.js`.
* `REACT_APP_AT_HOME` [boolean]: whether the app is being used in home mode (true) or clinic mode (false)
* `REACT_APP_PATIENT_ID` [string]: The default patient id to show when requesting a patient ID in `userID`.  If not set, no default is shown (blank input box).

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