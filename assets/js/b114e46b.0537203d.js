"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[6480],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,u=m["".concat(o,".").concat(y)]||m[y]||p[y]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:r,l[1]=g;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>g,toc:()=>s});var a=n(8168),r=(n(6540),n(5680));const i={id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},l=void 0,g={unversionedId:"project_organization/environment_variables",id:"version-3.3.x/project_organization/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb",source:"@site/versioned_docs/version-3.3.x/project_organization/environment_variables.mdx",sourceDirName:"project_organization",slug:"/environment_variables",permalink:"/docs/3.3.x/environment_variables",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.3.x/project_organization/environment_variables.mdx",tags:[],version:"3.3.x",lastUpdatedAt:1719431750,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},sidebar:"mySidebar",previous:{title:"NPM Scripts",permalink:"/docs/3.3.x/npm_scripts"},next:{title:"Continuous Integration / Deployment",permalink:"/docs/3.3.x/ci_cd"}},o={},s=[{value:"Understanding the Environment Variables",id:"understanding-the-environment-variables",level:2},{value:"Run-time",id:"run-time",level:3},{value:"Build-time",id:"build-time",level:3}],d={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Honeycomb uses environment variables to control the different configurations. Below we list the environment variables used by the app and indicate their properties via badges and text."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Desktop vs Online"),(0,r.yg)("th",{parentName:"tr",align:null},"Build vs Run-time"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_FIREBASE")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.yg)("td",{parentName:"tr",align:null},"False"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.yg)("td",{parentName:"tr",align:null},"If the task is saving its data on Firebase.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_VIDEO")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.yg)("td",{parentName:"tr",align:null},"False"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.yg)("td",{parentName:"tr",align:null},"If the participant is being video recorded.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_USE_EEG")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.yg)("td",{parentName:"tr",align:null},"False"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.yg)("td",{parentName:"tr",align:null},"If the EEG (Event Marker) is available and recording.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_USE_PHOTODIODE")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.yg)("td",{parentName:"tr",align:null},"False"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.yg)("td",{parentName:"tr",align:null},"If the photodiode spot is in use.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_USE_VOLUME")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/build-blue",alt:"build"})),(0,r.yg)("td",{parentName:"tr",align:null},"False"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/bool-lightgrey",alt:"boolean"})),(0,r.yg)("td",{parentName:"tr",align:null},"If the participant should be asked to adjust their volume. (e.g. the task is using sound)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_STUDY_ID")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.yg)("td",{parentName:"tr",align:null},"The id of a study. User will enter this value in the login screen if not set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REACT_APP_PARTICIPANT_ID")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})," ",(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/online-orange",alt:"online"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.yg)("td",{parentName:"tr",align:null},"The id of a participant. User will enter this value in the login screen if not set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"EVENT_MARKER_PRODUCT_ID")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.yg)("td",{parentName:"tr",align:null},"The product ID of the event marker. If not set, it will default to the ",(0,r.yg)("inlineCode",{parentName:"td"},"productID")," set in ",(0,r.yg)("inlineCode",{parentName:"td"},"public/config/trigger.js"),". If neither are set, it will attempt to connect using the COM name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"EVENT_MARKER_COM_NAME")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/desktop-yellow",alt:"desktop"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/run-purple",alt:"run"})),(0,r.yg)("td",{parentName:"tr",align:null},'"COM3"'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://img.shields.io/badge/string-grey",alt:"string"})),(0,r.yg)("td",{parentName:"tr",align:null},"The COM name of the event marker. If not set, it will use the ",(0,r.yg)("inlineCode",{parentName:"td"},"comName")," set in ",(0,r.yg)("inlineCode",{parentName:"td"},"public/config/trigger.js"),". Field is ignored if ",(0,r.yg)("inlineCode",{parentName:"td"},"EVENT_MARKER_PRODUCT_ID")," is set.")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Note that Honeycomb does use other environment variables (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"ELECTRON_START_URL"),") but they do not effect the task itself. They can be safely ignored.")),(0,r.yg)("h2",{id:"understanding-the-environment-variables"},"Understanding the Environment Variables"),(0,r.yg)("h3",{id:"run-time"},"Run-time"),(0,r.yg)("p",null,"The ",(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/runtime-purple",alt:"run"})," badge indicates the variable is set/determined each time the executable is run. Run-time environment variables allow for quick changes when running the task. They are convenient since they don't require building a whole different executable."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Desktop deployments must set these environment variables at the system level.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"See ",(0,r.yg)("a",{parentName:"li",href:"https://www.imatest.com/docs/editing-system-environment-variables/#Windows"},"this tutorial for OS specific instructions."),"."))),(0,r.yg)("li",{parentName:"ul"},"Online deployments must use Firebase, and store the runtime environment variables in Firestore.")),(0,r.yg)("h3",{id:"build-time"},"Build-time"),(0,r.yg)("p",null,"The ",(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/buildtime-blue",alt:"build"})," badge indicates the variable is set during the build phase (",(0,r.yg)("inlineCode",{parentName:"p"},"npm run build"),") and cannot be changed at run-time. These variables are configured via ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," files in the ",(0,r.yg)("a",{parentName:"p",href:"directory_structure#env"},"env")," folder."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"dotenv-cli")," comes with the ",(0,r.yg)("inlineCode",{parentName:"p"},"dotenv")," command that can be used to properly load the needed variables. We write our npm scripts with the following format:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"[build|dev]:<env name>": "dotenv -e env/<env name> npm run [build|dev]"\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"See ",(0,r.yg)("a",{parentName:"em",href:"npm_scripts"},"NPM Scripts")," for more")))}p.isMDXComponent=!0}}]);