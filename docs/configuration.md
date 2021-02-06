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
