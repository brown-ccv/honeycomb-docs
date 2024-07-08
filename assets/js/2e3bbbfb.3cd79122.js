"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[6367],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(8168),i=(n(6540),n(5680));const r={id:"introduction",slug:"/",title:"Introduction",description:"Basic introduction to Honeycomb"},a=void 0,c={unversionedId:"introduction",id:"version-3.1.x/introduction",title:"Introduction",description:"Basic introduction to Honeycomb",source:"@site/versioned_docs/version-3.1.x/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/3.1.x/",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.1.x/introduction.mdx",tags:[],version:"3.1.x",lastUpdatedAt:1720468390,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"introduction",slug:"/",title:"Introduction",description:"Basic introduction to Honeycomb"},sidebar:"mySidebar",next:{title:"Quick Start",permalink:"/docs/3.1.x/quick_start"}},s={},l=[{value:"Flexible deployment online and in the lab",id:"flexible-deployment-online-and-in-the-lab",level:3},{value:"Easy-to-install executables",id:"easy-to-install-executables",level:3},{value:"Foundation in jsPsych",id:"foundation-in-jspsych",level:3},{value:"Community Driven",id:"community-driven",level:3},{value:"Cite this work",id:"cite-this-work",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base."),(0,i.yg)("h3",{id:"flexible-deployment-online-and-in-the-lab"},"Flexible deployment online and in the lab"),(0,i.yg)("p",null,"Honeycomb provides the ability to write one codebase and use it flexibly across settings (with guaranteed consistency in instructions, timing, etc.). The same code-base is used to maintain and deploy the identical task on Mechanical Turk, Prolific, and in research settings during concurrent electrophysiological recordings."),(0,i.yg)("h3",{id:"easy-to-install-executables"},"Easy-to-install executables"),(0,i.yg)("p",null,"Deployment specifications are abstracted as parameters that are easy to configure, and application building is automated via GitHub actions providing continuous delivery of easy-to-download executables, easing setup burden across research sites."),(0,i.yg)("h3",{id:"foundation-in-jspsych"},"Foundation in jsPsych"),(0,i.yg)("p",null,"jsPsych 7 tasks can be converted to the Honeycomb structure to take advantage of the flexible deployment and automated GitHub Actions workflow that Honeycomb provides."),(0,i.yg)("h3",{id:"community-driven"},"Community Driven"),(0,i.yg)("p",null,"Honeycomb additionally provides a Behavioral Task Hub at our ",(0,i.yg)("a",{parentName:"p",href:"https://beehive.ccv.brown.edu/"},"Beehive")," website. These tasks are built in Honeycomb and are ready to be deployed."),(0,i.yg)("h3",{id:"cite-this-work"},"Cite this work"),(0,i.yg)("p",null,"If you use Honeycomb in your work, please cite"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://doi.org/10.1590/1516-4446-2020-1675"},"Provenza, N.R., Gelin, L.F.F., Mahaphanit, W., McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.")))}p.isMDXComponent=!0}}]);