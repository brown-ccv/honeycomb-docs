"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[1127],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=r,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(8168),r=(n(6540),n(5680));const i={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},a=void 0,s={unversionedId:"intro",id:"version-3.0.0/intro",title:"Introduction",description:"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base.",source:"@site/versioned_docs/version-3.0.0/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/3.0.0/",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.0.0/intro.md",tags:[],version:"3.0.0",lastUpdatedAt:1719431750,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Project Organization",permalink:"/docs/3.0.0/folders"}},c={},l=[{value:"Flexible deployment online and in the lab",id:"flexible-deployment-online-and-in-the-lab",level:3},{value:"Easy to install executables",id:"easy-to-install-executables",level:3},{value:"Foundation in jsPsych",id:"foundation-in-jspsych",level:3},{value:"Community Driven",id:"community-driven",level:3},{value:"Cite this work",id:"cite-this-work",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base."),(0,r.yg)("h3",{id:"flexible-deployment-online-and-in-the-lab"},"Flexible deployment online and in the lab"),(0,r.yg)("p",null,"Honeycomb provides the ability to write one codebase and use it flexibly across settings (with guaranteed consistency in instructions, timing, etc.). The same code-base is used to maintain and deploy the identical task on Mechanical Turk, Prolific, and in research settings during concurrent electrophysiological recordings."),(0,r.yg)("h3",{id:"easy-to-install-executables"},"Easy to install executables"),(0,r.yg)("p",null,"Deployment specifications are abstracted as parameters that are easy to configure, and application building is automated via GitHub actions providing continuous delivery of easy-to-download executables, easing setup burden across research sites."),(0,r.yg)("h3",{id:"foundation-in-jspsych"},"Foundation in jsPsych"),(0,r.yg)("p",null,"jsPsych 7 tasks can be converted to the Honeycomb structure to take advantage of the flexible deployment and automated GitHub Actions workflow that Honeycomb provides."),(0,r.yg)("h3",{id:"community-driven"},"Community Driven"),(0,r.yg)("p",null,"Honeycomb additionally provides a Behavioral Task Hub at our ",(0,r.yg)("a",{parentName:"p",href:"https://beehive.ccv.brown.edu/"},"Beehive")," website. These tasks are built in Honeycomb and are ready to be deployed."),(0,r.yg)("h3",{id:"cite-this-work"},"Cite this work"),(0,r.yg)("p",null,"If you use Honeycomb in your work, please cite"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doi.org/10.1590/1516-4446-2020-1675"},"Provenza, N.R., Gelin, L.F.F., Mahaphanit, W., McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.")))}u.isMDXComponent=!0}}]);