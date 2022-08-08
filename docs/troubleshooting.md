---
id: troubleshooting
title: Troubleshooting
---

## Inspecting Errors

When developing electron apps there are two processes: `main`, and `renderer`.  In this case `main` corresponds to `electron-starter.js` and its console is wherever you called `npm run dev` or `electron .` from. `renderer` corresponds to the React App - this is everything else. The react app's console is in the electron/browser window and can be seen by using dev tools to inspect the window.  When running `npm run dev`, it should open by default.

In case you want to find out where the error is coming from when running the app locally:

* Try reviewing logs in the terminal
* Inspect element in your browser by openning your developer tools. For instance, in Chrome, this can be done via the menu View -> Developer or right-clicking and pressing inspect.

## Package not found or other error related to `npm`

Try deleting your `node_modules` folder and the `package-lock.json` then running `npm install` then `npm run rebuild`.

## Testing in Linux
When running `npm test` on Linux, you might get an error that mentions `ENOSPC`.  This is because the test runer creates "watchers" for files in the project repo in order to automatically re-run tests as the files change.  Linux limits the number of watchers that can be created at a time and the default limit may be smaller than the number of files in the repo.

This is a "known issue" with some test runners on Linux, as in discussions [here](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached) and [here](https://stackoverflow.com/questions/62206460/jest-watch-error-enospc-system-limit-for-number-of-file-watchers-reached).

One simple workaround is to increase the number of allowed watchers (100000 seems to be sufficient):
 - Command that initially fails with `ENOSPC`: `npm test`
 - Check the configured limit on "watchers": `cat /proc/sys/fs/inotify/max_user_watches`
 - Edit the relevant Linux config file: `sudo vim /etc/sysctl.conf`
 - Add a line at the end of the config file: `fs.inotify.max_user_watches=100000`
 - Save, exit, and reload the config file: `sudo sysctl -p`
 - Check that the limit has changed: `cat /proc/sys/fs/inotify/max_user_watches`
 - Retry the initial command, which should now succeed: `npm test`