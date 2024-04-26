"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[144],{5680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>c});var n=i(6540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(i),u=a,c=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return i?n.createElement(c,l(l({ref:t},p),{},{components:i})):n.createElement(c,l({ref:t},p))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9865:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(8168),a=(i(6540),i(5680));const r={id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},l=void 0,o={unversionedId:"environment_variables",id:"version-3.1.x/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb",source:"@site/versioned_docs/version-3.1.x/environment_variables.mdx",sourceDirName:".",slug:"/environment_variables",permalink:"/honeycomb-docs/docs/3.1.x/environment_variables",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.1.x/environment_variables.mdx",tags:[],version:"3.1.x",lastUpdatedAt:1714148140,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"environment_variables",slug:"/environment_variables",title:"Environment Variables",description:"Overview of environment variables used by Honeycomb"},sidebar:"mySidebar",previous:{title:"NPM Scripts",permalink:"/honeycomb-docs/docs/3.1.x/npm_scripts"},next:{title:"Set up event triggers",permalink:"/honeycomb-docs/docs/3.1.x/event_triggers"}},s={},d=[{value:"Dev Mode Only",id:"dev-mode-only",level:3},{value:"Desktop Only",id:"desktop-only",level:2},{value:"Desktop and Online",id:"desktop-and-online",level:2},{value:"Understanding Build-Time and Run-Time Variables",id:"understanding-build-time-and-run-time-variables",level:2}],p={toc:d},g="wrapper";function m(e){let{components:t,...i}=e;return(0,a.yg)(g,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Honeycomb uses environment variables during ",(0,a.yg)("strong",{parentName:"p"},"build")," and ",(0,a.yg)("strong",{parentName:"p"},"run")," time to control the different configurations. Below we list the environment variables used by the app and indicate their properties via badges and text. Optional variables are labeled with the ",(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"})," badge and mandatory variables are labeled with the ",(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/default-%3Cdefaultvalue%3E-yellow",alt:"default <default-value>"})," badge with their default value specified. The ",(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"})," badge indicates the variable is used during the build/compilation phase (",(0,a.yg)("inlineCode",{parentName:"p"},"npm build"),") while the ",(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"})," badge indicates the variable is used during the executable run (",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev"),")."),(0,a.yg)("h3",{id:"dev-mode-only"},"Dev Mode Only"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ELECTRON_START_URL")," ",(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),": URL (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:3000"),") where the front end of the app is being hosted - also used in ",(0,a.yg)("inlineCode",{parentName:"li"},"electron.js")," to indicate the app is running in dev mode.")),(0,a.yg)("h2",{id:"desktop-only"},"Desktop Only"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"EVENT_MARKER_PRODUCT_ID"),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The product ID of the event marker (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"0487"),"). If not set, it will use the ",(0,a.yg)("inlineCode",{parentName:"li"},"productID")," set in ",(0,a.yg)("inlineCode",{parentName:"li"},"public/config/trigger.js")," if available, or attempt to connect using the com name."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"EVENT_MARKER_COM_NAME")," ",(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The com name of the event marker (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"COM3"),"). If not set, it will use the ",(0,a.yg)("inlineCode",{parentName:"li"},"comName")," set in ",(0,a.yg)("inlineCode",{parentName:"li"},"public/config/trigger.js"),". If the ",(0,a.yg)("inlineCode",{parentName:"li"},"productID")," is set (not an empty string), this field will be ignored."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_VIDEO"),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being video recorded. This can be used when the task is running as a desktop app (electron)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_USE_EEG"),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the event marker/EEG is available. This can be used when the task is running as a desktop app (electron)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_USE_PHOTODIODE"),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the photodiode is in use. This can be used when the task is running as a desktop app (electron).")),(0,a.yg)("h2",{id:"desktop-and-online"},"Desktop and Online"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_VOLUME"),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being asked to adjust volume. This can be used on both the desktop (electron) and online settings."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_PARTICIPANT_ID")," ",(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default participant id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REACT_APP_STUDY_ID")," ",(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default study id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box.")),(0,a.yg)("h2",{id:"understanding-build-time-and-run-time-variables"},"Understanding Build-Time and Run-Time Variables"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": Run-time environment variables allow for quick changes before running the task. They are convenient since they don't require building a whole different executable. For a Desktop Application, these are set at the system level and must be available at the time where the task runs. See ",(0,a.yg)("a",{parentName:"p",href:"https://www.imatest.com/docs/editing-system-environment-variables/#Windows"},"this tutorial for OS specific instructions."),". For a Firebase Application, these must be stored in the Firestore.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/-buildtime-blue",alt:"build time"}),": Build-time environment variables are configured before the application is built and cannot be changed at run-time. They are configured via ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," files before building. Instead of using a single ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file, we prefer to define separate files under the ",(0,a.yg)("inlineCode",{parentName:"p"},"env/")," directory, and use a package called ",(0,a.yg)("inlineCode",{parentName:"p"},"dotenv-cli")," before building`."))),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"dotenv-cli")," comes with the ",(0,a.yg)("inlineCode",{parentName:"p"},"dotenv")," command that can be used to properly load the needed variables. We write our npm scripts with the following format:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"[build|dev]:<env name>": "dotenv -e env/<env name> npm run [build|dev]:<env name>"\n')),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"See ",(0,a.yg)("a",{parentName:"em",href:"npm_scripts"},"NPM Scripts")," for more")))}m.isMDXComponent=!0}}]);