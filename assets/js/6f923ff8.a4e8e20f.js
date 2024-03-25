"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[1731],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},g),{},{components:r})):n.createElement(m,a({ref:t},g))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const i={id:"event_triggers",slug:"/event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic"},a=void 0,s={unversionedId:"external_tools/event_triggers",id:"external_tools/event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic",source:"@site/docs/external_tools/event_triggers.mdx",sourceDirName:"external_tools",slug:"/event_triggers",permalink:"/honeycomb-docs/docs/event_triggers",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/external_tools/event_triggers.mdx",tags:[],version:"current",lastUpdatedAt:1711378169,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"event_triggers",slug:"/event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic"},sidebar:"mySidebar",previous:{title:"GitHub Pages",permalink:"/honeycomb-docs/docs/gh_pages"},next:{title:"Prolific",permalink:"/honeycomb-docs/docs/prolific"}},l={},c=[{value:"BrainVision Trigger Box setup",id:"brainvision-trigger-box-setup",level:2},{value:"Open Source Event Trigger setup",id:"open-source-event-trigger-setup",level:2},{value:"Send event code triggers",id:"send-event-code-triggers",level:2},{value:"Run the task with event triggers",id:"run-the-task-with-event-triggers",level:2}],g={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"brainvision-trigger-box-setup"},"BrainVision Trigger Box setup"),(0,o.yg)("p",null,"Follow the TriggerBox setup instructions in the BrainVision Trigger Box manual. Plug the TriggerBox into the computer running the task. Check your operating system\u2019s device list to identify the COM port that the TriggerBox is connected to. Create a new system environment variable:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"COMNAME\n")),(0,o.yg)("p",null,"and set the COM port to the correct value (e.g., COM3)."),(0,o.yg)("h2",{id:"open-source-event-trigger-setup"},"Open Source Event Trigger setup"),(0,o.yg)("p",null,"Details on how to make the open source event trigger and photodiode can be found ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/neuromotion/USB-event-marker"},"here"),"."),(0,o.yg)("p",null,"Connect the open source event trigger to the computer running the task using a USB to micro-USB cable. Check your operating system\u2019s USB device list to identify the product ID of the teensyduino event marker."),(0,o.yg)("p",null,"Create a new system environment variable: ",(0,o.yg)("inlineCode",{parentName:"p"},"EVENT_MARKER_PRODUCT_ID")," and set to the product ID of the event marker."),(0,o.yg)("h2",{id:"send-event-code-triggers"},"Send event code triggers"),(0,o.yg)("p",null,"Change the ",(0,o.yg)("inlineCode",{parentName:"p"},"eventCodes")," values listed in the src/config/trigger.js file to the desired values. Import eventCodes from ",(0,o.yg)("inlineCode",{parentName:"p"},"./trigger")," and export as ",(0,o.yg)("inlineCode",{parentName:"p"},"eventCodes"),"."),(0,o.yg)("p",null,"Whenever you would like to send an event code in a trial, load ",(0,o.yg)("inlineCode",{parentName:"p"},"eventCodes")," from ",(0,o.yg)("inlineCode",{parentName:"p"},"../config/main/"),", and call ",(0,o.yg)("inlineCode",{parentName:"p"},"pdSpotEncode")," with the proper code (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"eventCode.Fixation"),") as input."),(0,o.yg)("h2",{id:"run-the-task-with-event-triggers"},"Run the task with event triggers"),(0,o.yg)("p",null,"Honeycomb automatically checks whether your event marker is connected and running at the start of the task. If it is not connected, the task will present an error and will not be able to run."))}u.isMDXComponent=!0}}]);