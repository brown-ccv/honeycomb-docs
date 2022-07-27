"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[793],{3905:function(e,t,i){i.d(t,{Zo:function(){return m},kt:function(){return c}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return i?n.createElement(g,l(l({ref:t},m),{},{components:i})):n.createElement(g,l({ref:t},m))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7819:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var n=i(3117),a=(i(7294),i(3905));const r={id:"configuration",title:"Configuration"},l=void 0,o={unversionedId:"configuration",id:"version-2.x/configuration",title:"Configuration",description:"Environment Variables",source:"@site/versioned_docs/version-2.x/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/honeycomb-docs/docs/2.x/configuration",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-2.x/configuration.md",tags:[],version:"2.x",lastUpdatedAt:1658959085,formattedLastUpdatedAt:"Jul 27, 2022",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"version-2.x/someSidebar",previous:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/2.x/ci"},next:{title:"Set up event triggers",permalink:"/honeycomb-docs/docs/2.x/event_triggers"}},s={},p=[{value:"Environment Variables",id:"environment-variables",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Honeycomb uses environment variables during build and run time to control the different configurations. Below we list the  environment variables used by the app and indicate whether they are mandatory, optional and needed during build (",(0,a.kt)("inlineCode",{parentName:"p"},"npm build"),") or run time (using the application executable or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ELECTRON_START_URL")," ",(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),": URL (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),") where the front end of the app is being hosted - also used in ",(0,a.kt)("inlineCode",{parentName:"li"},"electron.js")," to indicate the app is running in dev mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EVENT_MARKER_PRODUCT_ID"),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The product ID of the event marker (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"0487"),").  If not set, it will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"productID")," set in ",(0,a.kt)("inlineCode",{parentName:"li"},"public/config/trigger.js")," if available, or attempt to connect using the com name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EVENT_MARKER_COM_NAME")," ",(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The com name of the event marker (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"COM3"),"). If not set, it will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"comName")," set in ",(0,a.kt)("inlineCode",{parentName:"li"},"public/config/trigger.js"),".  If the ",(0,a.kt)("inlineCode",{parentName:"li"},"productID")," is set (not an empty string), this field will be ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_VOLUME"),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being asked to adjust volume. This can be used on both the desktop (electron) and online settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_VIDEO"),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being video recorded. This can be used when the task is running as a desktop app (electron). "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_USE_EEG"),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the event marker/EEG is available. This can be used when the task is running as a desktop app (electron)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_USE_PHOTODIODE"),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the photodiode is in use. This can be used when the task is running as a desktop app (electron)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_PARTICIPANT_ID")," ",(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default participant id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REACT_APP_STUDY_ID")," ",(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),(0,a.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default study id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box.")),(0,a.kt)("p",null,"Here are details on some of the badges:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": Run-time environment variable. Set at the system level. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.imatest.com/docs/editing-system-environment-variables/#Windows"},"this tutorial for OS specific instructions."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": Build-time environment variable. Set in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file before building. Can also be defined in a separate file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"env/")," directory and called with the dotenv-cli before building. ",(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"dotenv")," command will not work directly from the command line. Instead, to set build-time environment variables, either run an existing npm script (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build:clinic"),", which sets clinic variables) or add a new script to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with the following format:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"[build|dev]:<script name>": "dotenv -e env/<your env file> npm run [build|dev]"\n')),(0,a.kt)("p",null,"Or, to add your new variables to an existing environment configuration, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},".env.clinic"),", create a script in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"[build|dev]:<script name>": "dotenv -e env/<your env file> npm run [build|dev]:clinic"\n')),(0,a.kt)("p",null,"Then run the script like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run [build|dev]:<script name>"),"."))}d.isMDXComponent=!0}}]);