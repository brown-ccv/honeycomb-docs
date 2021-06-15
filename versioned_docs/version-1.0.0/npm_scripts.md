---
id: npm_scripts
title: NPM Scripts
---


In the project directory, you can run:

### `npm run dev`

Runs `npm start` and `npm run electron-dev` concurrently.  This may not play nicely with windows.  If it doesn't, run `npm start` and `npm run electron-dev` from different terminal windows.

### `npm start`

Runs the app in the development mode.


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Creates a production build of the app (renderer).  This must be done before running `package:platform` or the psiturk build instructions.


### `npm run package:platform`

It correctly bundles creates electron packages for the given platform.  It then creates an installer for that platform.  The output can be found in `/dist`
platforms: windows, mac, linux.


#### Prerequisites

If not running this command on a windows machine, must have `mono` and `wine` installed.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Run Electron

#### `npm run electron`

Run the built app.

#### `npm run electron-dev`

Run the current state of the code (un-built).