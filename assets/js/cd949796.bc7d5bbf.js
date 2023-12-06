"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[8154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,c=p["".concat(s,".").concat(u)]||p[u]||g[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},l=void 0,o={unversionedId:"project_organization/environment_variables",id:"project_organization/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb",source:"@site/docs/project_organization/environment_variables.mdx",sourceDirName:"project_organization",slug:"/environment_variables",permalink:"/honeycomb-docs/docs/environment_variables",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/project_organization/environment_variables.mdx",tags:[],version:"current",lastUpdatedAt:1701874719,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},sidebar:"mySidebar",previous:{title:"NPM Scripts",permalink:"/honeycomb-docs/docs/npm_scripts"},next:{title:"Continuous Integration / Deployment",permalink:"/honeycomb-docs/docs/ci_cd"}},s={},d=[{value:"Understanding the Environment Variables",id:"understanding-the-environment-variables",level:2},{value:"Run-time",id:"run-time",level:3},{value:"Build-time",id:"build-time",level:3}],m={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Honeycomb uses environment variables to control the different configurations. Below we list the environment variables used by the app and indicate their properties via badges and text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Desktop vs Online"),(0,r.kt)("th",{parentName:"tr",align:null},"Build vs Run-time"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_FIREBASE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.kt)("td",{parentName:"tr",align:null},"If the task is saving its data on Firebase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_VIDEO")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.kt)("td",{parentName:"tr",align:null},"If the participant is being video recorded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_USE_EEG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.kt)("td",{parentName:"tr",align:null},"If the EEG (Event Marker) is available and recording.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_USE_PHOTODIODE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.kt)("td",{parentName:"tr",align:null},"If the photodiode spot is in use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_USE_VOLUME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.kt)("td",{parentName:"tr",align:null},"If the participant should be asked to adjust their volume. (e.g. the task is using sound)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_STUDY_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.kt)("td",{parentName:"tr",align:null},"The id of a study. User will enter this value in the login screen if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REACT_APP_PARTICIPANT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.kt)("td",{parentName:"tr",align:null},"The id of a participant. User will enter this value in the login screen if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EVENT_MARKER_PRODUCT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.kt)("td",{parentName:"tr",align:null},"The product ID of the event marker. If not set, it will default to the ",(0,r.kt)("inlineCode",{parentName:"td"},"productID")," set in ",(0,r.kt)("inlineCode",{parentName:"td"},"public/config/trigger.js"),". If neither are set it will attempt to connect using the COM name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EVENT_MARKER_COM_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.kt)("td",{parentName:"tr",align:null},'"COM3"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.kt)("td",{parentName:"tr",align:null},"The COM name of the event marker. If not set, it will use the ",(0,r.kt)("inlineCode",{parentName:"td"},"comName")," set in ",(0,r.kt)("inlineCode",{parentName:"td"},"public/config/trigger.js"),". Field is ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"EVENT_MARKER_PRODUCT_ID")," is set.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that Honeycomb does use other environment variables (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ELECTRON_START_URL"),") but they do not effect the task itself. They can be safely ignored.")),(0,r.kt)("h2",{id:"understanding-the-environment-variables"},"Understanding the Environment Variables"),(0,r.kt)("h3",{id:"run-time"},"Run-time"),(0,r.kt)("p",null,"The ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/runtime-purple",alt:"run"})," badge indicates the variable is set/determined each time the executable is run. Run-time environment variables allow for quick changes when running the task. They are convenient since they don't require building a whole different executable."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desktop deployments must set these environment variables at the system level.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://www.imatest.com/docs/editing-system-environment-variables/#Windows"},"this tutorial for OS specific instructions."),"."))),(0,r.kt)("li",{parentName:"ul"},"Online deployments must use Firebase, and store the runtime environment variables in Firestore.")),(0,r.kt)("h3",{id:"build-time"},"Build-time"),(0,r.kt)("p",null,"The ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/buildtime-blue",alt:"build"})," badge indicates the variable is set during the build phase (",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),") and cannot be changed at run-time. These variables are configured via ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files in the ",(0,r.kt)("a",{parentName:"p",href:"directory_structure#env"},"env")," folder."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv-cli")," comes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv")," command that can be used to properly load the needed variables. We write our npm scripts with the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"[build|dev]:<env name>": "dotenv -e env/<env name> npm run [build|dev]"\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"npm_scripts"},"NPM Scripts")," for more")))}g.isMDXComponent=!0}}]);