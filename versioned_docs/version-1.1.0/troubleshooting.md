---
id: troubleshooting
title: Troubleshooting
---


When developing electron apps there are two processes: `main`, and `renderer`.  In this case `main` corresponds to `electron-starter.js` and its console is wherever you called `npm run dev` or `electron .` from. `renderer` corresponds to the React App - this is everything else. The react app's console is in the electron/browser window and can be seen by using dev tools to inspect the window.  When running `npm run dev`, it should open by default.

### Potential Issues

#### Package not found or other error related to `npm`

Try deleting your `node_modules` folder and the `package-lock.json` then running `npm install` then `npm run rebuild`.


