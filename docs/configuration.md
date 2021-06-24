---
id: configuration
title: Configuration
---

## Environment Variables

Honeycomb uses environment variables during build and run time to control the different configurations. Below we list the  environment variables used by the app and indicate whether they are mandatory, optional and needed during build (`npm build`) or run time (using the application executable or `npm run dev`)

* `ELECTRON_START_URL` ![string](https://img.shields.io/badge/-string-grey)![optional](https://img.shields.io/badge/-optional-yellow): URL (e.g. `http://localhost:3000`) where the front end of the app is being hosted - also used in `electron.js` to indicate the app is running in dev mode.
* `EVENT_MARKER_PRODUCT_ID`![string](https://img.shields.io/badge/-string-grey)![optional](https://img.shields.io/badge/-optional-yellow)![runtime](https://img.shields.io/badge/-runtime-purple): The product ID of the event marker (e.g. `0487`).  If not set, it will use the `productID` set in `public/config/trigger.js` if available, or attempt to connect using the com name.
* `EVENT_MARKER_COM_NAME` ![string](https://img.shields.io/badge/-string-grey)![optional](https://img.shields.io/badge/-optional-yellow)![runtime](https://img.shields.io/badge/-runtime-purple): The com name of the event marker (e.g. `COM3`). If not set, it will use the `comName` set in `public/config/trigger.js`.  If the productID is set (not an empty string), this field will be ignored.
* `REACT_APP_VOLUME`![boolean](https://img.shields.io/badge/-boolean-lightgrey)![default false](https://img.shields.io/badge/default-false-yellow)![buildtime](https://img.shields.io/badge/-buildtime-blue): whether the participant is being asked to adjust volume. This can be used on both the desktop (electron) and online settings.
* `REACT_APP_VIDEO`![boolean](https://img.shields.io/badge/-boolean-lightgrey)![default false](https://img.shields.io/badge/default-false-yellow)![buildtime](https://img.shields.io/badge/-buildtime-blue): whether the participant is being video recorded. This can be used when the task is running as a desktop app (electron). 
* `REACT_APP_USE_EEG`![boolean](https://img.shields.io/badge/-boolean-lightgrey)![default false](https://img.shields.io/badge/default-false-yellow)![buildtime](https://img.shields.io/badge/-buildtime-blue): whether the event marker/EEG is available. This can be used when the task is running as a desktop app (electron).
* `REACT_APP_USE_PHOTODIODE`![boolean](https://img.shields.io/badge/-boolean-lightgrey)![default false](https://img.shields.io/badge/default-false-yellow)![buildtime](https://img.shields.io/badge/-buildtime-blue): whether the photodiode is in use. This can be used when the task is running as a desktop app (electron).
* `REACT_APP_PARTICIPANT_ID` ![string](https://img.shields.io/badge/-string-grey)![optional](https://img.shields.io/badge/-optional-yellow)![runtime](https://img.shields.io/badge/-runtime-purple): The default participant id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box.
* `REACT_APP_STUDY_ID` ![string](https://img.shields.io/badge/-string-grey)![optional](https://img.shields.io/badge/-optional-yellow)![runtime](https://img.shields.io/badge/-runtime-purple): The default study id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box.

Here are details on some of the badges:
- ![runtime](https://img.shields.io/badge/-runtime-purple): Run-time environment variable. Set at the system level. See [this tutorial for OS specific instructions.](https://www.imatest.com/docs/editing-system-environment-variables/#Windows)

- ![buildtime](https://img.shields.io/badge/-buildtime-blue): Build-time environment variable. Set in a `.env` file before building. Can also be defined in a separate file under the `env/` directory and called with the dotenv-cli before building.
```
dotenv -e env/<your env file> npm run build
```
