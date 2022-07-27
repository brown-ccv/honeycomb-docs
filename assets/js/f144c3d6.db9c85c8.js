"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[490],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905));const o={id:"configuration",title:"Configuration"},a=void 0,l={unversionedId:"configuration",id:"version-1.1.0/configuration",title:"Configuration",description:"Environment Variables",source:"@site/versioned_docs/version-1.1.0/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/honeycomb-docs/docs/1.1.0/configuration",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/configuration.md",tags:[],version:"1.1.0",lastUpdatedAt:1658959085,formattedLastUpdatedAt:"Jul 27, 2022",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/1.1.0/ci"},next:{title:"Set up event triggers",permalink:"/honeycomb-docs/docs/1.1.0/event_triggers"}},s={},u=[{value:"Environment Variables",id:"environment-variables",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Honeycomb uses environment variables during build and run time to control the different configurations. Below we list the  environment variables used by the app and indicate whether they are mandatory, optional and needed during build (",(0,r.kt)("inlineCode",{parentName:"p"},"npm build"),") or run time (using the application executable or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ELECTRON_START_URL")," ",(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:null}),": URL (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),") where the front end of the app is being hosted - also used in ",(0,r.kt)("inlineCode",{parentName:"li"},"electron.js")," to indicate the app is running in dev mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EVENT_MARKER_PRODUCT_ID"),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:null}),": The product ID of the event marker (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"0487"),").  If not set, it will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"productID")," set in ",(0,r.kt)("inlineCode",{parentName:"li"},"public/config/trigger.js")," if available, or attempt to connect using the com name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EVENT_MARKER_COM_NAME")," ",(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:null}),": The com name of the event marker (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"COM3"),"). If not set, it will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"comName")," set in ",(0,r.kt)("inlineCode",{parentName:"li"},"public/config/trigger.js"),".  If the productID is set (not an empty string), this field will be ignored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_AT_HOME"),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:null}),": whether the app is being used in home mode (true) or clinic mode (false). During development and build time, you can run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev:home"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev:clinic")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build:home"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build:clinic")," to have the npm script set the variable for you. When running the production desktop application, you need to define it. Not defining this variable is equivalent to setting it to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),". Build-time and run-time values need to be the same."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_PATIENT_ID")," ",(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:null}),": The default patient id to show when requesting a patient ID in ",(0,r.kt)("inlineCode",{parentName:"li"},"userID"),".  If not set, no default is shown (blank input box).")))}m.isMDXComponent=!0}}]);