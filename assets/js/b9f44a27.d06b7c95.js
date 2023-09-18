"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={id:"directory_structure",slug:"/directory_structure",title:"Directory Structure",description:"Overview of Honeycomb's directory structure"},l=void 0,r={unversionedId:"project_organization/directory_structure",id:"project_organization/directory_structure",title:"Directory Structure",description:"Overview of Honeycomb's directory structure",source:"@site/docs/project_organization/directory_structure.mdx",sourceDirName:"project_organization",slug:"/directory_structure",permalink:"/honeycomb-docs/docs/directory_structure",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/project_organization/directory_structure.mdx",tags:[],version:"current",lastUpdatedAt:1695066333,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"directory_structure",slug:"/directory_structure",title:"Directory Structure",description:"Overview of Honeycomb's directory structure"},sidebar:"mySidebar",previous:{title:"Prerequisites",permalink:"/honeycomb-docs/docs/prerequisites"},next:{title:"NPM Scripts",permalink:"/honeycomb-docs/docs/npm_scripts"}},s={},d=[{value:"assets/",id:"assets",level:2},{value:"build/",id:"build",level:2},{value:"emulator_data/",id:"emulator_data",level:2},{value:"env/",id:"env",level:2},{value:"node_modules/",id:"node_modules",level:2},{value:"psiturkit/",id:"psiturkit",level:2},{value:"public/",id:"public",level:2},{value:"assets/",id:"assets-1",level:3},{value:"lib/",id:"lib",level:3},{value:"config/",id:"config",level:3},{value:"src/",id:"src",level:2},{value:"App/",id:"app",level:3},{value:"components/",id:"components",level:4},{value:"deployments/",id:"deployments",level:4},{value:"config/",id:"config-1",level:3},{value:"lib/",id:"lib-1",level:3},{value:"timelines/",id:"timelines",level:3},{value:"trials/",id:"trials",level:3},{value:"index.js",id:"indexjs",level:3},{value:"Other Folders/Files",id:"other-foldersfiles",level:2},{value:"Firebase Files",id:"firebase-files",level:3},{value:"Git Files",id:"git-files",level:3},{value:"Eslint Files",id:"eslint-files",level:3},{value:"Prettier Files",id:"prettier-files",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code."),(0,a.kt)("h2",{id:"assets"},"assets/"),(0,a.kt)("p",null,"This folder contains any static files that are used by the app. Honeycomb starts with a few images used as icons for the installed applications."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Assets that pertain to your specific task should be added to the ",(0,a.kt)("a",{parentName:"p",href:"#assets-1"},"public/assets/")," folder, not here!")),(0,a.kt)("h2",{id:"build"},"build/"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"npm_scripts#npm-build"},"build scripts")," automatically create a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder at the root of the repository and update it on subsequent builds. ",(0,a.kt)("inlineCode",{parentName:"p"},"build/")," should be left alone!"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The build folder is in Honeycomb's ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," and should never be added to git")),(0,a.kt)("h2",{id:"emulator_data"},"emulator_data/"),(0,a.kt)("p",null,"This folder contains starter data for the Firebase Emulators to use while developing locally. See the ",(0,a.kt)("a",{parentName:"p",href:"npm_scripts#firebase"},"Firebase Scripts")," to use the data."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"emulator_data/")," is written to when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run firebase:emulators:save")," and should never be manually edited.")),(0,a.kt)("h2",{id:"env"},"env/"),(0,a.kt)("p",null,"This folder contains different files used to pass environment variables (settings) into Honeycomb. Honeycomb starts with presets for common use cases and is explained in greater detail in the ",(0,a.kt)("a",{parentName:"p",href:"environment_variables"},"Environment Variables")," section."),(0,a.kt)("h2",{id:"node_modules"},"node_modules/"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/")," is written to when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and should never be manually edited.")),(0,a.kt)("h2",{id:"psiturkit"},"psiturkit/"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturk-it")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturkit/")," is a bash script used to instal PsiTurk locally - see ",(0,a.kt)("a",{parentName:"p",href:"psiturk#build-instructions"},"PsiTurk")," for more information."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Nothing in this folder should ever need to be manually edited.")),(0,a.kt)("h2",{id:"public"},"public/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," directory contains files that are used as assets in the built app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index.html")," is the entry point of the website",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changing ",(0,a.kt)("inlineCode",{parentName:"li"},"<title>Honeycomb</title>")," will update the name you can see in the browser tab."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"favicon.ico")," is the small icon you can see in the browser tab."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"electron.js")," contains all of the code related to the electron app.")),(0,a.kt)("h3",{id:"assets-1"},"assets/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public/assets/")," directory contains all of the images and videos needed to run your task."),(0,a.kt)("h3",{id:"lib"},"lib/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public/lib/")," directory contains the files PsiTurk needs to run. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," references these files inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"These files are minified versions of dependencies and should never be manually edited.")),(0,a.kt)("h3",{id:"config"},"config/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public/config/")," directory contains the config files needed for the electron app. This includes the event-marker details and event codes. ",(0,a.kt)("inlineCode",{parentName:"p"},"version.json")," keeps track of the current git commit, which Honeycomb uses to keep track of the version of your task used for a given experiment."),(0,a.kt)("h2",{id:"src"},"src/"),(0,a.kt)("p",null,"This folder contains the source code for the Honeycomb application."),(0,a.kt)("h3",{id:"app"},"App/"),(0,a.kt)("p",null,"Files relating to the React application. This is the code that runs your JsPsych task and shouldn't need to be changed."),(0,a.kt)("h4",{id:"components"},"components/"),(0,a.kt)("p",null,"The React components that make up Honeycomb are located here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"App.jsx")," initializes and maintains the state of the application. It is also where communication is set up between the ",(0,a.kt)("inlineCode",{parentName:"li"},"electron")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"psiturk")," processes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error.jsx")," displays a small error message. It is rendered when the App.jsx detects an issue in state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JsPsychExperiment.jsx")," initializes the JsPsych experiment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Login.jsx")," handles user authentication based on the environment variables passed to Honeycomb")),(0,a.kt)("h4",{id:"deployments"},"deployments/"),(0,a.kt)("p",null,"Custom code used by the various deployments such as Firebase."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Changes to these files will change how Honeycomb handles data and should be done with great caution.")),(0,a.kt)("h3",{id:"config-1"},"config/"),(0,a.kt)("p",null,"Each file in the config directory contains settings for a different part of the task."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main.js")," contains the global settings (e.g. whether Honeycomb is running online or in the clinic) passed from env variables and logic for loading the appropriate language file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trigger.js")," for equipment-related settings (e.g. event markers). It uses a slightly different style of javascript as it is imported both in the React app as well as the electron process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config.json")," contains the settings for your task. Usage of the config file allows for easy updating of task settings. Common settings can be written once in the config file and re-used throughout the task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"language.json")," contains the language used in your task. Usage of language json files allows for easy internationalization of the task (e.g. english and spanish) and mturk-specific language. Common phrases can be written once in a language file and re-used throughout the task.")),(0,a.kt)("h3",{id:"lib-1"},"lib/"),(0,a.kt)("p",null,"Utility functions and markup are located here. This allows for functions and html to be re-used wherever needed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/lib/markup/")," files contain HTML templates used throughout the task. Typically this will be a function that takes in some parameters and then returns a string with html."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to look through ",(0,a.kt)("inlineCode",{parentName:"p"},"utils.js")," for functions you might be able to use in your task!")),(0,a.kt)("h3",{id:"timelines"},"timelines/"),(0,a.kt)("p",null,"A timeline is a collection of trials that JsPsych displays in the given order. Timelines can contain timelines themselves; you may want to break this nesting into multiple files in this folder."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main.js")," contains the JsPsych options and root timeline which ",(0,a.kt)("inlineCode",{parentName:"li"},"App.jsx")," uses to run the experiment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"honeycombBlock.js"),' contains the timeline for the Honeycomb block - the "meat" the example reaction-time task. It uses the task settings from ',(0,a.kt)("a",{parentName:"li",href:"#config-1"},"config.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"honeycombTimeline.js")," contains the timeline for the entire Honeycomb task. This includes the block timeline from ",(0,a.kt)("inlineCode",{parentName:"li"},"honeycombBlock.js"),", as well as individual trials such as the welcome screen, full screen trial, and instructions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"honeycombTrials.js")," contains the individual trials used in the Honeycomb task. These trials are imported into ",(0,a.kt)("inlineCode",{parentName:"li"},"honeycombBlock.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"honeycombTimeline.js"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"preamble.js")," contains a base timeline for showing the name and welcome screen of an experiment, as well as automatically entering fullscreen mode. It adds the photodiode instructions to the timeline if Honeycomb is using the photodiode.")),(0,a.kt)("h3",{id:"trials"},"trials/"),(0,a.kt)("p",null,"A trial is the base unit of a JsPsych experiment. Each trial should be its own file within this folder - the files in ",(0,a.kt)("a",{parentName:"p",href:"#timelines"},"src/timelines/")," will combine these trials into the full experiment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"adjustVolume.js")," prompts the user to adjust the volume on their computer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"camera.js")," contains trials for beginning and ending a camera recording."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fullscreen.js")," contains trials for entering and exiting fullscreen mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holdUpMarker.js")," prompts the user to connect their event marker and hold it up to the camera."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quizTrial.js")," contains trials for a quiz/survey."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startCode.js")," emits a start code to a photodiode spot and audible beep")),(0,a.kt)("h3",{id:"indexjs"},"index.js"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," is the entry point for React in our application. Note that the id 'root' corresponds with a tag in ",(0,a.kt)("inlineCode",{parentName:"p"},"public/index.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div id="root"></div>\n')),(0,a.kt)("h2",{id:"other-foldersfiles"},"Other Folders/Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows/")," contains .yaml files used to build Honeycomb on a pull request (",(0,a.kt)("inlineCode",{parentName:"li"},"build.yaml"),") and create task executables either in a single instance (",(0,a.kt)("inlineCode",{parentName:"li"},"package.yaml"),") or for a full release (",(0,a.kt)("inlineCode",{parentName:"li"},"release.yaml"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," contains metadata about your project, a list of the dependencies needed for the project, and scripts to run tasks related to your task. The ",(0,a.kt)("a",{parentName:"li",href:"quick_start#4-change-name-and-description"},"Quick Start")," lists which metadata should be changed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cli.mjs")," is the script used to download and delete data stored in Firestore."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version.js")," is the script used to keep track of which version of the task a given experiment is using")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," is written to when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and should never be manually edited.")),(0,a.kt)("h3",{id:"firebase-files"},"Firebase Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".firebaserc")," contains the name of the project Firebase should connect to. Be sure to update the default project to the one you created!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firebase.json")," contains the Firebase settings for Honeycomb."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firestore.indexes.json")," contains the Firestore index settings for Honeycomb."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firestore.rules")," contains the Firestore rules for creating/editing data.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"firebase.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firestore.indexes.json"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"firestore.rules")," shouldn't need to be manually edited.")),(0,a.kt)("h3",{id:"git-files"},"Git Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," lists the folders and files that should be excluded from Git.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Any secrets and/or tokens must be added to ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," or they will be visible to anyone with access to the repository!")),(0,a.kt)("h3",{id:"eslint-files"},"Eslint Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," contains the Eslint settings for Honeycomb. We recommend it's left alone but can be adjusted for personal settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".eslintignore")," lists the folders and files that eslint shouldn't touch, similar to ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore"),".")),(0,a.kt)("h3",{id:"prettier-files"},"Prettier Files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".prettierrc.js")," contains the Prettier settings for Honeycomb. We recommend it's left alone but can be adjusted for personal settings."))}c.isMDXComponent=!0}}]);