---
id: configuration
title: Configuration
---

## Environment Variables

Honeycomb uses environment variables during build and run time to control the different configurations. Below we list the  environment variables used by the app and indicate whether they are mandatory, optional and needed during build (`npm build`) or run time (using the application executable or `npm run dev`)

* `ELECTRON_START_URL` ![](https://img.shields.io/badge/-string-grey)![](https://img.shields.io/badge/-optional-yellow): URL (e.g. `http://localhost:3000`) where the front end of the app is being hosted - also used in `electron.js` to indicate the app is running in dev mode
* `EVENT_MARKER_PRODUCT_ID`![](https://img.shields.io/badge/-string-grey)![](https://img.shields.io/badge/-optional-yellow)![](https://img.shields.io/badge/-runtime-purple): The product ID of the event marker (e.g. `0487`).  If not set, it will use the `productID` set in `public/config/trigger.js` if available, or attempt to connect using the com name.
* `EVENT_MARKER_COM_NAME` ![](https://img.shields.io/badge/-string-grey)![](https://img.shields.io/badge/-optional-yellow)![](https://img.shields.io/badge/-runtime-purple): The com name of the event marker (e.g. `COM3`). If not set, it will use the `comName` set in `public/config/trigger.js`.  If the productID is set (not an empty string), this field will be ignored.
* `REACT_APP_AT_HOME`![](https://img.shields.io/badge/-boolean-lightgrey)![](https://img.shields.io/badge/-runtime-purple)![](https://img.shields.io/badge/-buildtime-blue): whether the app is being used in home mode (true) or clinic mode (false). During development and build time, you can run `npm run dev:home`/`npm run dev:clinic` or `npm run build:home`/`npm run build:clinic` to have the npm script set the variable for you. When running the production desktop application, you need to define it. Not defining this variable is equivalent to setting it to `false`. Build-time and run-time values need to be the same.
* `REACT_APP_PATIENT_ID` ![](https://img.shields.io/badge/-string-grey)![](https://img.shields.io/badge/-optional-yellow)![](https://img.shields.io/badge/-runtime-purple): The default patient id to show when requesting a patient ID in `userID`.  If not set, no default is shown (blank input box).
