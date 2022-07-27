"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var o=n(3117),r=(n(7294),n(3905));const i={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},a=void 0,c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/honeycomb-docs/docs/",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1658959085,formattedLastUpdatedAt:"Jul 27, 2022",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Project Organization",permalink:"/honeycomb-docs/docs/folders"}},s={},l=[{value:"Flexible deployment online and in the lab",id:"flexible-deployment-online-and-in-the-lab",level:3},{value:"Easy to install executables",id:"easy-to-install-executables",level:3},{value:"Foundation in jsPsych",id:"foundation-in-jspsych",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base."),(0,r.kt)("h3",{id:"flexible-deployment-online-and-in-the-lab"},"Flexible deployment online and in the lab"),(0,r.kt)("p",null,"Honeycomb provides the ability to write one codebase and use it flexibly across settings (with guaranteed consistency in instructions, timing, etc.). The same code-base is used to maintain and deploy the identical task on Mechanical Turk, Prolific, and in research settings during concurrent electrophysiological recordings. "),(0,r.kt)("h3",{id:"easy-to-install-executables"},"Easy to install executables"),(0,r.kt)("p",null,"Deployment specifications are abstracted as parameters that are easy to configure, and application building is automated via GitHub actions providing continuous delivery of easy-to-download executables, easing setup burden across research sites. "),(0,r.kt)("h3",{id:"foundation-in-jspsych"},"Foundation in jsPsych"),(0,r.kt)("p",null,"jsPsych 7 tasks can be converted to the Honeycomb structure to take advantage of the flexible deployment and automated GitHub Actions workflow that Honeycomb provides."))}d.isMDXComponent=!0}}]);