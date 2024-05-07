"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[7276],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var o=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||n;return r?o.createElement(y,a(a({ref:t},p),{},{components:r})):o.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(8168),i=(r(6540),r(5680));const n={id:"prolific",slug:"/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific"},a=void 0,l={unversionedId:"external_tools/prolific",id:"version-3.3.x/external_tools/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific",source:"@site/versioned_docs/version-3.3.x/external_tools/prolific.mdx",sourceDirName:"external_tools",slug:"/prolific",permalink:"/honeycomb-docs/docs/3.3.x/prolific",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.3.x/external_tools/prolific.mdx",tags:[],version:"3.3.x",lastUpdatedAt:1715090738,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"prolific",slug:"/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific"},sidebar:"mySidebar",previous:{title:"Event Triggers",permalink:"/honeycomb-docs/docs/3.3.x/event_triggers"},next:{title:"Github Discussions",permalink:"/honeycomb-docs/docs/3.3.x/github_discussions"}},c={},s=[{value:"Prolific Setup",id:"prolific-setup",level:2},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"prolific-setup"},"Prolific Setup"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Prolific integration is only available in Honeycomb for tasks deployed to Firebase.")),(0,i.yg)("p",null,"Please follow the discussion post ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb/discussions/125"},"Configure participant and study ID in prolific")," to configure a Prolific study that integrates with Honeycomb."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'The "Prolific ID" should be set to ',(0,i.yg)("inlineCode",{parentName:"li"},"participantID")),(0,i.yg)("li",{parentName:"ul"},'The "Study ID" should be set to ',(0,i.yg)("inlineCode",{parentName:"li"},"studyID")),(0,i.yg)("li",{parentName:"ul"},'The "Session ID" should be set to ',(0,i.yg)("inlineCode",{parentName:"li"},"SESSION_ID"))),(0,i.yg)("h2",{id:"further-reading"},"Further Reading"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://www.jspsych.org/7.3/overview/prolific/"},"jsPsych Documentation")," also provides a guide for Prolific integration. Please note that this documentation will differ slightly from the Honeycomb integration."))}f.isMDXComponent=!0}}]);