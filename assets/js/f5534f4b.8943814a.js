"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,v=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"event_triggers",slug:"/event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic"},a=void 0,s={unversionedId:"event_triggers",id:"event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic",source:"@site/docs/event_triggers.mdx",sourceDirName:".",slug:"/event_triggers",permalink:"/honeycomb-docs/docs/event_triggers",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/event_triggers.mdx",tags:[],version:"current",lastUpdatedAt:1695064672,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"event_triggers",slug:"/event_triggers",title:"Event Triggers",description:"Guide for setting up ports for equipment used in the clinic"},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/honeycomb-docs/docs/environment_variables"},next:{title:"CI / CD",permalink:"/honeycomb-docs/docs/ci"}},c={},l=[{value:"BrainVision Trigger Box setup",id:"brainvision-trigger-box-setup",level:2},{value:"Open Source Event Trigger setup",id:"open-source-event-trigger-setup",level:2},{value:"Send event code triggers",id:"send-event-code-triggers",level:2},{value:"Run the task with event triggers",id:"run-the-task-with-event-triggers",level:2}],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brainvision-trigger-box-setup"},"BrainVision Trigger Box setup"),(0,o.kt)("p",null,"Follow the TriggerBox setup instructions in the BrainVision Trigger Box manual. Plug the TriggerBox into the computer running the task. Check your operating system\u2019s device list to identify the COM port that the TriggerBox is connected to. Create a new system environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"COMNAME\n")),(0,o.kt)("p",null,"and set the COM port to the correct value (e.g., COM3)."),(0,o.kt)("h2",{id:"open-source-event-trigger-setup"},"Open Source Event Trigger setup"),(0,o.kt)("p",null,"Details on how to make the open source event trigger and photodiode can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neuromotion/USB-event-marker"},"here"),"."),(0,o.kt)("p",null,"Connect the open source event trigger to the computer running the task using a USB to micro-USB cable. Check your operating system\u2019s USB device list to identify the product ID of the teensyduino event marker."),(0,o.kt)("p",null,"Create a new system environment variable: ",(0,o.kt)("inlineCode",{parentName:"p"},"EVENT_MARKER_PRODUCT_ID")," and set to the product ID of the event marker."),(0,o.kt)("h2",{id:"send-event-code-triggers"},"Send event code triggers"),(0,o.kt)("p",null,"Change the eventCodes values listed in the src/config/trigger.js file to the desired values. Import eventCodes from ",(0,o.kt)("inlineCode",{parentName:"p"},"./trigger")," and export as ",(0,o.kt)("inlineCode",{parentName:"p"},"eventCodes"),"."),(0,o.kt)("p",null,"Whenever you would like to send an event code in a trial, load ",(0,o.kt)("inlineCode",{parentName:"p"},"eventCodes")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"../config/main/"),", and call ",(0,o.kt)("inlineCode",{parentName:"p"},"pdSpotEncode")," with the proper eventCode (e.g. eventCode.Fixation) as input."),(0,o.kt)("h2",{id:"run-the-task-with-event-triggers"},"Run the task with event triggers"),(0,o.kt)("p",null,"Honeycomb automatically checks whether your event marker is connected and running at the start of the task. If it is not connected, the task will present an error and will not be able to run."))}g.isMDXComponent=!0}}]);