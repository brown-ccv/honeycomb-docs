"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,v=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={id:"event_triggers",title:"Set up event triggers"},a=void 0,s={unversionedId:"event_triggers",id:"version-1.1.0/event_triggers",title:"Set up event triggers",description:"BrainVision Trigger Box setup",source:"@site/versioned_docs/version-1.1.0/event_triggers.md",sourceDirName:".",slug:"/event_triggers",permalink:"/honeycomb-docs/docs/1.1.0/event_triggers",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/event_triggers.md",tags:[],version:"1.1.0",lastUpdatedAt:1658959085,formattedLastUpdatedAt:"Jul 27, 2022",frontMatter:{id:"event_triggers",title:"Set up event triggers"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Configuration",permalink:"/honeycomb-docs/docs/1.1.0/configuration"},next:{title:"Deploy online",permalink:"/honeycomb-docs/docs/1.1.0/online_integration"}},c={},u=[{value:"BrainVision Trigger Box setup",id:"brainvision-trigger-box-setup",level:2},{value:"Open Source Event Trigger setup",id:"open-source-event-trigger-setup",level:2},{value:"Send event code triggers",id:"send-event-code-triggers",level:2},{value:"Run the task with event triggers",id:"run-the-task-with-event-triggers",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brainvision-trigger-box-setup"},"BrainVision Trigger Box setup"),(0,o.kt)("p",null,"Follow the TriggerBox setup instructions in the BrainVision Trigger Box manual. Plug the TriggerBox into the computer running the task. Check your operating system\u2019s device list to identify the COM port that the TriggerBox is connected to. Create a new system environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"COMNAME\n")),(0,o.kt)("p",null,"and set to the COM port to the correct value (e.g., COM3). "),(0,o.kt)("h2",{id:"open-source-event-trigger-setup"},"Open Source Event Trigger setup"),(0,o.kt)("p",null,"Details on how to make the open source event trigger and photodiode can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neuromotion/USB-event-marker"},"https://github.com/neuromotion/USB-event-marker"),"\nConnect the open source event trigger to the computer running the task using a USB to micro-USB cable. Check your operating system\u2019s USB device list to identify the product ID of the teensyduino event marker. "),(0,o.kt)("p",null,"Create a new system environment variable: ",(0,o.kt)("inlineCode",{parentName:"p"},"EVENT_MARKER_PRODUCT_ID")," and set to the product ID of the event marker. "),(0,o.kt)("h2",{id:"send-event-code-triggers"},"Send event code triggers"),(0,o.kt)("p",null,"Change the eventCodes values listed in the src/config/trigger.js file to the desired values. Import eventCodes from\n",(0,o.kt)("inlineCode",{parentName:"p"},"./trigger")," and export as ",(0,o.kt)("inlineCode",{parentName:"p"},"eventCodes")),(0,o.kt)("p",null,"Whenever you would like to send an event code in a trial, load ",(0,o.kt)("inlineCode",{parentName:"p"},"eventCodes")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"../config/main/"),", and call ",(0,o.kt)("inlineCode",{parentName:"p"},"pdSpotEncode"),"with the proper eventCode (e.g. eventCode.Fixation) as input. "),(0,o.kt)("h2",{id:"run-the-task-with-event-triggers"},"Run the task with event triggers"),(0,o.kt)("p",null,"Honeycomb automatically checks whether your event marker is connected and running at the start of the task. If it is not connected, the task will present an error and will not be able to run."))}p.isMDXComponent=!0}}]);