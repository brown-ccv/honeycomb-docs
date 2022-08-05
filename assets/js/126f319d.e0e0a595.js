"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[976],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(3117),a=(n(7294),n(3905));const o={id:"folders",title:"Project Organization"},r=void 0,s={unversionedId:"folders",id:"folders",title:"Project Organization",description:"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders.",source:"@site/docs/folders.md",sourceDirName:".",slug:"/folders",permalink:"/honeycomb-docs/docs/folders",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/folders.md",tags:[],version:"current",lastUpdatedAt:1659725350,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{id:"folders",title:"Project Organization"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/honeycomb-docs/docs/"},next:{title:"Quick Start",permalink:"/honeycomb-docs/docs/quick_start"}},l={},d=[{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"<code>assets/</code>",id:"assets",level:3},{value:"<code>env/</code>",id:"env",level:3},{value:"<code>public/</code>",id:"public",level:3},{value:"<code>electron.js</code>",id:"electronjs",level:4},{value:"<code>config/</code>",id:"config",level:4},{value:"<code>src/</code>",id:"src",level:3},{value:"<code>App.jsx</code>",id:"appjsx",level:4},{value:"<code>App.css</code>",id:"appcss",level:4},{value:"<code>assets/</code>",id:"assets-1",level:4},{value:"<code>components/</code>",id:"components",level:4},{value:"<code>config/</code>",id:"config-1",level:4},{value:"<code>language/</code>",id:"language",level:4},{value:"<code>lib/</code>",id:"lib",level:4},{value:"<code>lib/markup</code>",id:"libmarkup",level:4},{value:"<code>timelines</code>",id:"timelines",level:4},{value:"<code>trials</code>",id:"trials",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders."),(0,a.kt)("h3",{id:"packagejson"},(0,a.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file contains metadata about your project and scripts to run tasks related to your task. The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," should be updated to your task's name and ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," can be added as desired, but otherwise this file should not be edited manually.  To remove or add a dependency use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm uninstall")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-D")," flag if installing a dev dependency."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," contains metadata about the package installation. It should never be manually updated."),(0,a.kt)("h3",{id:"assets"},(0,a.kt)("inlineCode",{parentName:"h3"},"assets/")),(0,a.kt)("p",null,"The icons used for the installed applications are put here."),(0,a.kt)("h3",{id:"env"},(0,a.kt)("inlineCode",{parentName:"h3"},"env/")),(0,a.kt)("p",null,"This folder contains different .env files with presets for common use cases. These files can be loaded with ",(0,a.kt)("inlineCode",{parentName:"p"},"dotenv"),", which is explained in greater detail in the ",(0,a.kt)("a",{parentName:"p",href:"/honeycomb-docs/docs/configuration"},"Configuration")," section."),(0,a.kt)("h3",{id:"public"},(0,a.kt)("inlineCode",{parentName:"h3"},"public/")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," directory contains files that are used as assets in the built app. The ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon.ico")," is the small icon you can see in the browser tab (on Chrome) - it is set to Brown's logo in the project. The ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," contains the shell of your website - the name displayed on the tab can be changed here, otherwise it shouldn't need to be edited. The scripts included in the file are for ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturk")," as are the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/")," directory."),(0,a.kt)("h4",{id:"electronjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"electron.js")),(0,a.kt)("p",null,"This file contains all of the code relating to the electron app. This includes the event-marker, throwing errors via dialog windows, saving data, and reading files."),(0,a.kt)("h4",{id:"config"},(0,a.kt)("inlineCode",{parentName:"h4"},"config/")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," directory contains the config files needed for the electron app.  This includes the event-marker details and event codes."),(0,a.kt)("p",null,"Note: the productId can be overwritten by the environment variable EVENT_MARKER_PRODUCT_ID"),(0,a.kt)("h3",{id:"src"},(0,a.kt)("inlineCode",{parentName:"h3"},"src/")),(0,a.kt)("p",null,"This folder contains the code for the app, the vast majority of changes and code should go here."),(0,a.kt)("h4",{id:"appjsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"App.jsx")),(0,a.kt)("p",null,"This is the starting point for the app. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Login>")," component handles user authentication in the different use cases and the ",(0,a.kt)("inlineCode",{parentName:"p"},"<JsPsychExperiment>")," component initializes the ",(0,a.kt)("inlineCode",{parentName:"p"},"jspsych")," 7 experiment. This is also where communication is set up with the ",(0,a.kt)("inlineCode",{parentName:"p"},"electron")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"psiturk")," processes."),(0,a.kt)("h4",{id:"appcss"},(0,a.kt)("inlineCode",{parentName:"h4"},"App.css")),(0,a.kt)("p",null,"This is where styling for the app is housed. If colors, fonts, spacing, etc. need to be set, do it here."),(0,a.kt)("h4",{id:"assets-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"assets/")),(0,a.kt)("p",null,"This folder contains any static files that are used by the app, such as images."),(0,a.kt)("h4",{id:"components"},(0,a.kt)("inlineCode",{parentName:"h4"},"components/")),(0,a.kt)("p",null,"This folder contains the components referenced in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.jsx"),".  This includes the Honeycomb ",(0,a.kt)("inlineCode",{parentName:"p"},"<JsPsychExperiment>")," component which connects the Honyecomb login page to your ",(0,a.kt)("inlineCode",{parentName:"p"},"jspsych")," 7 experiment."),(0,a.kt)("h4",{id:"config-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"config/")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/")," directory, there are ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," files which contain settings for the different parts of the task.  Every task should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," config and a ",(0,a.kt)("inlineCode",{parentName:"p"},"trigger")," config (assuming use of the event marker). The ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," config has all global settings for the task (such as whether it is in mturk mode or not), load the appropriate language file, and set up a default (or only) configuration object for the task. Different in-task features can be loaded from .env files and is set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," config. For example, we have included some of these files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"env.clinic")," file enables event marker, photodiode and volume adjustment). The ",(0,a.kt)("inlineCode",{parentName:"p"},"trigger")," config has settings specific to the event marker and uses a slightly different style of javascript as it is imported both in the React app as well as the electron process."),(0,a.kt)("p",null,"Other config files can be used to add settings for specific blocks or sub-sections of the experiment."),(0,a.kt)("h4",{id:"language"},(0,a.kt)("inlineCode",{parentName:"h4"},"language/")),(0,a.kt)("p",null,"Any language that is displayed in the experiment should be stored in this folder. Usage of language json files allows for easy internationalization of the task (e.g. english and spanish) as well as allows for mturk specific language. This also makes it easy to re-use common phrases in many places in the task."),(0,a.kt)("h4",{id:"lib"},(0,a.kt)("inlineCode",{parentName:"h4"},"lib/")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/")," directory contains utility functions and markup that is used in the tasks.  This allows for functions and html to be re-used wherever needed. The ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/utils.js")," file contains functions that are generally useful across many tasks, whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/taskUtils.js")," contains functions specific to this task."),(0,a.kt)("h4",{id:"libmarkup"},(0,a.kt)("inlineCode",{parentName:"h4"},"lib/markup")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"markup")," files should contain primarily templates for HTML that is used throughout the task. Typically this will be a function that takes in some parameters and then returns a string with html."),(0,a.kt)("h4",{id:"timelines"},(0,a.kt)("inlineCode",{parentName:"h4"},"timelines")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jspsych")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"timelines")," to control what ",(0,a.kt)("inlineCode",{parentName:"p"},"trials")," are displayed in what order.  ",(0,a.kt)("inlineCode",{parentName:"p"},"timelines")," can contain other ",(0,a.kt)("inlineCode",{parentName:"p"},"timelines"),", which is why there may be several files in this directory.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," file should have the timeline that is called by ",(0,a.kt)("inlineCode",{parentName:"p"},"App.jsx")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<JsPsychExperiment>")," component."),(0,a.kt)("h4",{id:"trials"},(0,a.kt)("inlineCode",{parentName:"h4"},"trials")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jspsych")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"trials")," as its base unit of an experiment. These trials do things such as display some stimulus or request a response."))}p.isMDXComponent=!0}}]);