"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[7664],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var i=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?i.createElement(y,l(l({ref:t},p),{},{components:r})):i.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:n,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=r(8168),n=(r(6540),r(5680));const o={id:"prolific",slug:"/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific"},l=void 0,a={unversionedId:"external_tools/prolific",id:"external_tools/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific",source:"@site/docs/external_tools/prolific.mdx",sourceDirName:"external_tools",slug:"/prolific",permalink:"/docs/prolific",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/external_tools/prolific.mdx",tags:[],version:"current",lastUpdatedAt:1720468390,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"prolific",slug:"/prolific",title:"Prolific",description:"Guide for integrating Honeycomb with Prolific"},sidebar:"mySidebar",previous:{title:"Event Triggers",permalink:"/docs/event_triggers"},next:{title:"Github Discussions",permalink:"/docs/github_discussions"}},c={},s=[{value:"Prolific Setup",id:"prolific-setup",level:2},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,i.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"prolific-setup"},"Prolific Setup"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Prolific integration is only available in Honeycomb for tasks deployed to Firebase.")),(0,n.yg)("p",null,"Please follow the discussion post ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb/discussions/125"},"Configure participant and study ID in prolific")," to configure a Prolific study that integrates with Honeycomb."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'The "Prolific ID" should be set to ',(0,n.yg)("inlineCode",{parentName:"li"},"participantID")),(0,n.yg)("li",{parentName:"ul"},'The "Study ID" should be set to ',(0,n.yg)("inlineCode",{parentName:"li"},"studyID")),(0,n.yg)("li",{parentName:"ul"},'The "Session ID" should be set to ',(0,n.yg)("inlineCode",{parentName:"li"},"SESSION_ID"))),(0,n.yg)("h2",{id:"further-reading"},"Further Reading"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://www.jspsych.org/7.3/overview/prolific/"},"jsPsych Documentation")," also provides a guide for Prolific integration. Please note that this documentation will differ slightly from the Honeycomb integration."))}f.isMDXComponent=!0}}]);