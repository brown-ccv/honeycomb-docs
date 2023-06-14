"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[3290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const l={id:"project_organization",slug:"/project_organization",title:"Project Organization",description:"Overview of Honeycomb's directory structure"},o=void 0,r={unversionedId:"project_organization",id:"project_organization",title:"Project Organization",description:"Overview of Honeycomb's directory structure",source:"@site/docs/project_organization.mdx",sourceDirName:".",slug:"/project_organization",permalink:"/honeycomb-docs/docs/project_organization",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/project_organization.mdx",tags:[],version:"current",lastUpdatedAt:1686755669,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"project_organization",slug:"/project_organization",title:"Project Organization",description:"Overview of Honeycomb's directory structure"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/honeycomb-docs/docs/quick_start"},next:{title:"NPM Scripts",permalink:"/honeycomb-docs/docs/npm_scripts"}},s={},d=[{value:"assets/",id:"assets",level:2},{value:"build/",id:"build",level:2},{value:"emulator_data/",id:"emulator_data",level:2},{value:"env/",id:"env",level:2},{value:"node_modules/",id:"node_modules",level:2},{value:"psiturkit/",id:"psiturkit",level:2},{value:"public/",id:"public",level:2},{value:"lib/",id:"lib",level:3},{value:"config/",id:"config",level:3},{value:"src/",id:"src",level:2},{value:"__tests__/",id:"__tests__",level:3},{value:"assets/",id:"assets-1",level:3},{value:"components/",id:"components",level:3},{value:"config/",id:"config-1",level:3},{value:"language/",id:"language",level:3},{value:"lib/",id:"lib-1",level:3},{value:"timelines/",id:"timelines",level:3},{value:"trials/",id:"trials",level:3},{value:"firebase.js",id:"firebasejs",level:3},{value:"index.css",id:"indexcss",level:3},{value:"index.js",id:"indexjs",level:3},{value:"Other Files",id:"other-files",level:2},{value:"Git Files",id:"git-files",level:3},{value:"Eslint Files",id:"eslint-files",level:3},{value:"Prettier Files",id:"prettier-files",level:3},{value:"Firebase Files",id:"firebase-files",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code."),(0,a.kt)("p",null,"Almost all of the changes needed for custom JsPsych tasks will be done in the ",(0,a.kt)("a",{parentName:"p",href:"#src"},(0,a.kt)("inlineCode",{parentName:"a"},"src/"))," folder."),(0,a.kt)("h2",{id:"assets"},"assets/"),(0,a.kt)("p",null,"This folder contains any static files that are used by the app. Honeycomb starts with a few images used as icons for the installed applications."),(0,a.kt)("h2",{id:"build"},"build/"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"npm_scripts#npm-build"},"build scripts")," automatically create a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder at the root of the repository and update it on subsequent builds. ",(0,a.kt)("inlineCode",{parentName:"p"},"build/")," should be left alone!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The build folder is in Honeycomb's ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," and as such should never be added to git")),(0,a.kt)("h2",{id:"emulator_data"},"emulator_data/"),(0,a.kt)("p",null,"{/",(0,a.kt)("em",{parentName:"p"}," TODO: Link to firebase:emulators:start and save in NPM Scripts "),"/}"),(0,a.kt)("p",null,"This folder contains starter data for the Firebase Emulators to use while developing locally. ",(0,a.kt)("inlineCode",{parentName:"p"},"emulator_data/")," should be left alone!"),(0,a.kt)("h2",{id:"env"},"env/"),(0,a.kt)("p",null,"This folder contains different ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files used to pass environment variables (secrets and/or settings) into Honeycomb. Honeycomb starts with presets for common use cases and is explained in greater detail in the ",(0,a.kt)("a",{parentName:"p",href:"environment_variables"},"Environment Variables")," section."),(0,a.kt)("h2",{id:"node_modules"},"node_modules/"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/")," is written to when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and should never be manually edited.")),(0,a.kt)("h2",{id:"psiturkit"},"psiturkit/"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturk-it")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturkit/")," is a bash script used to instal PsiTurk locally - see ",(0,a.kt)("a",{parentName:"p",href:"deploy_online#build-instructions"},"Deploy Online")," for more information. ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturkit/")," should be left alone!"),(0,a.kt)("h2",{id:"public"},"public/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," directory contains files that are used as assets in the built app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"favicon.ico")," is the small icon you can see in the browser tab."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index.html")," is the entry point of the website",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changing ",(0,a.kt)("inlineCode",{parentName:"li"},"<title>Honeycomb</title>")," will update the name you can see in the browser tab."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"electron.js")," contains all of the code related to the electron app.")),(0,a.kt)("h3",{id:"lib"},"lib/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/")," directory contains the files PsiTurk needs to run. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," references these files inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags"),(0,a.kt)("h3",{id:"config"},"config/"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," directory contains the config files needed for the electron app. This includes the event-marker details and event codes. ",(0,a.kt)("inlineCode",{parentName:"p"},"version.json")," keeps track of the current git commit, which Honeycomb uses to keep track of the version of your task used for a given experiment."),(0,a.kt)("p",null,"{/",(0,a.kt)("em",{parentName:"p"}," TODO "),"/}"),(0,a.kt)("h2",{id:"src"},"src/"),(0,a.kt)("p",null,"This folder contains the source code for the Honeycomb application."),(0,a.kt)("h3",{id:"__tests__"},"_","_","tests","_","_","/"),(0,a.kt)("p",null,"Automated test cases should be created in this folder."),(0,a.kt)("h3",{id:"assets-1"},"assets/"),(0,a.kt)("p",null,"Any assets used by your task should be stored here, such as images and videos."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These assets are ",(0,a.kt)("strong",{parentName:"p"},"not")," statically generated like the root ",(0,a.kt)("a",{parentName:"p",href:"#assets"},(0,a.kt)("inlineCode",{parentName:"a"},"assets/"))," folder. Only assets needed by your task should go here.")),(0,a.kt)("h3",{id:"components"},"components/"),(0,a.kt)("p",null,"The React components that make up Honeycomb are located here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"App.jsx")," initializes and maintains the state of the application. It is also where communication is set up between the ",(0,a.kt)("inlineCode",{parentName:"li"},"electron")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"psiturk")," processes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error.jsx")," displays a small error message. It is rendered when the App.jsx detects an issue in state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JsPsychExperiment.jsx")," initializes the JsPsych experiment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Login.jsx")," handles user authentication based on the environment variables passed to Honeycomb")),(0,a.kt)("h3",{id:"config-1"},"config/"),(0,a.kt)("p",null,"Each file in the config directory contains settings for a different part of the task."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main.js")," contains the global settings (e.g. whether Honeycomb is running online or in the clinic) passed from env variables and logic for loading the appropriate language file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trigger.js")," for equipment-related settings (e.g. event markers). It uses a slightly different style of javascript as it is imported both in the React app as well as the electron process.")),(0,a.kt)("p",null,"Other config files can be used to add settings for specific blocks or sub-sections of the experiment."),(0,a.kt)("h3",{id:"language"},"language/"),(0,a.kt)("p",null,"Any language that is displayed in the experiment should be stored in this folder. Usage of language json files allows for easy internationalization of the task (e.g. english and spanish) and mturk-specific language. Common phrases can be written once in a language file and re-used throughout the task."),(0,a.kt)("h3",{id:"lib-1"},"lib/"),(0,a.kt)("p",null,"The utility functions and markup used in the tasks are located here. This allows for functions and html to be re-used wherever needed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"markup")," files contain HTML templates used throughout the task. Typically this will be a function that takes in some parameters and then returns a string with html."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to look through ",(0,a.kt)("inlineCode",{parentName:"p"},"utils.js")," for functions you might be able to use in your task")),(0,a.kt)("h3",{id:"timelines"},"timelines/"),(0,a.kt)("p",null,"A timeline is a collection of trials that JsPsych displays in the given order. Timelines can contain timelines themselves; you may want to break this nesting into multiple files in this folder."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," contains the root timeline which ",(0,a.kt)("inlineCode",{parentName:"p"},"App.jsx")," loads into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<JsPsychExperiment>")," component."),(0,a.kt)("h3",{id:"trials"},"trials/"),(0,a.kt)("p",null,"A trial is the base unit of a JsPsych experiment. Each trial should be its own file within this folder - the files in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/timelines/")," will combine these trials into the full experiment."),(0,a.kt)("h3",{id:"firebasejs"},"firebase.js"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"firebase.js")," contains all of the logic for creating, reading, and updating data in Firebase. You should not have to update this file."),(0,a.kt)("h3",{id:"indexcss"},"index.css"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.css")," contains all of the styling in the application. Classes can be defined here and referenced in your markup."),(0,a.kt)("h3",{id:"indexjs"},"index.js"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," is the entry point for React in our application. Note that the id 'root' corresponds with a tag in ",(0,a.kt)("inlineCode",{parentName:"p"},"public/index.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div id="root"></div>\n')),(0,a.kt)("h2",{id:"other-files"},"Other Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/")," contains .yaml files used to build Honeycomb on a pull request (",(0,a.kt)("inlineCode",{parentName:"p"},"build.yaml"),") and create task executables either in a single instance (",(0,a.kt)("inlineCode",{parentName:"p"},"package.yaml"),") or for a full release (",(0,a.kt)("inlineCode",{parentName:"p"},"release.yaml"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," contains metadata about your project, a list of the dependencies needed for the project, and scripts to run tasks related to your task. The ",(0,a.kt)("a",{parentName:"p",href:"quick_start#4-change-name-and-description"},"Quick Start")," lists which metadata should be changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"download-response-data.js")," is the script used to download data stored in Firestore to your local machine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"version.js")," is the script used to keep track of which version of the task a given experiment is using"))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," is written to when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and should never be manually edited.")),(0,a.kt)("h3",{id:"git-files"},"Git Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," lists the folders and files that should be excluded from Git. Make sure all of your secrets and tokens are listed here!")),(0,a.kt)("h3",{id:"eslint-files"},"Eslint Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," contains the Eslint settings for Honeycomb. We recommend it's left alone but can be adjusted for personal settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".eslintignore")," lists the folders and files that eslint shouldn't touch, similar to ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore"),".")),(0,a.kt)("h3",{id:"prettier-files"},"Prettier Files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".prettierrc.js")," contains the Prettier settings for Honeycomb. We recommend it's left alone but can be adjusted for personal settings."),(0,a.kt)("h2",{id:"firebase-files"},"Firebase Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".firebaserc")," contains the name of the project Firebase should connect to. Be sure to update the default project to the one you created!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firebase.json")," contains the Firebase settings for Honeycomb. It should be left alone!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firestore.indexes.json")," contains the Firestore index settings for Honeycomb. It should be left alone!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firestore.rules")," contains the Firestore rules for creating/editing data. It should be left alone!")))}u.isMDXComponent=!0}}]);