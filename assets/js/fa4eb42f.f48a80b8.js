"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[1323],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,g=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(8168),a=(t(6540),t(5680));const o={id:"folders",title:"Project Organization"},r=void 0,s={unversionedId:"folders",id:"version-1.1.0/folders",title:"Project Organization",description:"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders.",source:"@site/versioned_docs/version-1.1.0/folders.md",sourceDirName:".",slug:"/folders",permalink:"/docs/1.1.0/folders",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/folders.md",tags:[],version:"1.1.0",lastUpdatedAt:1720468390,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"folders",title:"Project Organization"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Introduction",permalink:"/docs/1.1.0/"},next:{title:"Quick Start",permalink:"/docs/1.1.0/quick_start"}},l={},d=[{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"<code>assets/</code>",id:"assets",level:3},{value:"<code>public/</code>",id:"public",level:3},{value:"<code>electron.js</code>",id:"electronjs",level:4},{value:"<code>config/</code>",id:"config",level:4},{value:"<code>src/</code>",id:"src",level:3},{value:"<code>App.js</code>",id:"appjs",level:4},{value:"<code>App.css</code>",id:"appcss",level:4},{value:"<code>assets/</code>",id:"assets-1",level:4},{value:"<code>config/</code>",id:"config-1",level:4},{value:"<code>language/</code>",id:"language",level:4},{value:"<code>lib/</code>",id:"lib",level:4},{value:"<code>lib/markup</code>",id:"libmarkup",level:4},{value:"<code>timelines</code>",id:"timelines",level:4},{value:"<code>trials</code>",id:"trials",level:4}],p={toc:d},c="wrapper";function h(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders."),(0,a.yg)("h3",{id:"packagejson"},(0,a.yg)("inlineCode",{parentName:"h3"},"package.json")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," file contains metadata about your project and scripts to run tasks related to your task. The ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," should be updated to your task's name and ",(0,a.yg)("inlineCode",{parentName:"p"},"scripts")," can be added as desired, but otherwise this file should not be edited manually.  To remove or add a dependency use ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"npm uninstall")," with the ",(0,a.yg)("inlineCode",{parentName:"p"},"-D")," flag if installing a dev dependency."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"package-lock.json")," contains metadata about the package installation. It should never be manually updated."),(0,a.yg)("h3",{id:"assets"},(0,a.yg)("inlineCode",{parentName:"h3"},"assets/")),(0,a.yg)("p",null,"The icons used for the installed applications are put here."),(0,a.yg)("h3",{id:"public"},(0,a.yg)("inlineCode",{parentName:"h3"},"public/")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"public")," directory contains files that are used as assets in the built app. The ",(0,a.yg)("inlineCode",{parentName:"p"},"favicon.ico")," is the small icon you can see in the browser tab (on Chrome) - it is set to Brown's logo in the project. The ",(0,a.yg)("inlineCode",{parentName:"p"},"index.html")," contains the shell of your website - the name displayed on the tab can be changed here, otherwise it shouldn't need to be edited. The scripts included in the file are for ",(0,a.yg)("inlineCode",{parentName:"p"},"psiturk")," as are the files in the ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory."),(0,a.yg)("h4",{id:"electronjs"},(0,a.yg)("inlineCode",{parentName:"h4"},"electron.js")),(0,a.yg)("p",null,"This file contains all of the code relating to the electron app. This includes the event-marker, throwing errors via dialog windows, saving data, and reading files."),(0,a.yg)("h4",{id:"config"},(0,a.yg)("inlineCode",{parentName:"h4"},"config/")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"config")," directory contains the config files needed for the electron app.  This includes the event-marker details and event codes."),(0,a.yg)("p",null,"Note: the productId can be overwritten by the environment variable EVENT_MARKER_PRODUCT_ID"),(0,a.yg)("h3",{id:"src"},(0,a.yg)("inlineCode",{parentName:"h3"},"src/")),(0,a.yg)("p",null,"This folder contains the code for the app, the vast majority of changes and code should go here."),(0,a.yg)("h4",{id:"appjs"},(0,a.yg)("inlineCode",{parentName:"h4"},"App.js")),(0,a.yg)("p",null,"This is the starting point for the app. The ",(0,a.yg)("inlineCode",{parentName:"p"},"<Experiment>")," component initializes a ",(0,a.yg)("inlineCode",{parentName:"p"},"jspsych")," experiment. This is also where communication is set up with the ",(0,a.yg)("inlineCode",{parentName:"p"},"electron")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"psiturk")," processes."),(0,a.yg)("h4",{id:"appcss"},(0,a.yg)("inlineCode",{parentName:"h4"},"App.css")),(0,a.yg)("p",null,"This is where styling for the app is housed. If colors, fonts, spacing, etc. need to be set, do it here."),(0,a.yg)("h4",{id:"assets-1"},(0,a.yg)("inlineCode",{parentName:"h4"},"assets/")),(0,a.yg)("p",null,"This folder contains any static files that are used by the app, such as images."),(0,a.yg)("h4",{id:"config-1"},(0,a.yg)("inlineCode",{parentName:"h4"},"config/")),(0,a.yg)("p",null,"In the ",(0,a.yg)("inlineCode",{parentName:"p"},"config/")," directory, there are ",(0,a.yg)("inlineCode",{parentName:"p"},".js")," files which contain settings for the different parts of the task.  Every task should have a ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," config and a ",(0,a.yg)("inlineCode",{parentName:"p"},"trigger")," config (assuming use of the event marker). The ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," config has all global settings for the task (such as whether it is in mturk mode or not), load the appropriate language file, and set up a default (or only) configuration object for the task. The ",(0,a.yg)("inlineCode",{parentName:"p"},"trigger")," config has settings specific to the event marker and uses a slightly different style of javascript as it is imported both in the React app as well as the electron process."),(0,a.yg)("p",null,"Other config files can be used to add settings for specific blocks or sub-sections of the experiment."),(0,a.yg)("h4",{id:"language"},(0,a.yg)("inlineCode",{parentName:"h4"},"language/")),(0,a.yg)("p",null,"Any language that is displayed in the experiment should be stored in this folder. Usage of language json files allows for easy internationalization of the task (e.g. english and spanish) as well as allows for mturk specific language. This also makes it easy to re-use common phrases in many places in the task."),(0,a.yg)("h4",{id:"lib"},(0,a.yg)("inlineCode",{parentName:"h4"},"lib/")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory contains utility functions and markup that is used in the tasks.  This allows for functions and html to be re-used wherever needed. The ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/utils.js")," file contains functions that are generally useful across many tasks, whereas ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/taskUtils.js")," contains functions specific to this task."),(0,a.yg)("h4",{id:"libmarkup"},(0,a.yg)("inlineCode",{parentName:"h4"},"lib/markup")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"markup")," files should contain primarily templates for HTML that is used throughout the task. Typically this will be a function that takes in some parameters and then returns a string with html."),(0,a.yg)("h4",{id:"timelines"},(0,a.yg)("inlineCode",{parentName:"h4"},"timelines")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"jspsych")," uses ",(0,a.yg)("inlineCode",{parentName:"p"},"timelines")," to control what ",(0,a.yg)("inlineCode",{parentName:"p"},"trials")," are displayed in what order.  ",(0,a.yg)("inlineCode",{parentName:"p"},"timelines")," can contain other ",(0,a.yg)("inlineCode",{parentName:"p"},"timelines"),", which is why there may be several files in this directory.  The ",(0,a.yg)("inlineCode",{parentName:"p"},"main.js")," file should have the timeline that is called by ",(0,a.yg)("inlineCode",{parentName:"p"},"App.js"),"."),(0,a.yg)("h4",{id:"trials"},(0,a.yg)("inlineCode",{parentName:"h4"},"trials")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"jspsych")," uses ",(0,a.yg)("inlineCode",{parentName:"p"},"trials")," as its base unit of an experiment. These trials do things such as display some stimulus or request a response."))}h.isMDXComponent=!0}}]);