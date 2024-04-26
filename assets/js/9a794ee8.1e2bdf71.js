"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[2143],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,y=l["".concat(p,".").concat(d)]||l[d]||g[d]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(8168),o=(r(6540),r(5680));const i={id:"gh_pages",slug:"/gh_pages",title:"GitHub Pages",description:"Guide for deploying a task to GitHub Pages"},a=void 0,s={unversionedId:"deployments/gh_pages",id:"version-3.2.x/deployments/gh_pages",title:"GitHub Pages",description:"Guide for deploying a task to GitHub Pages",source:"@site/versioned_docs/version-3.2.x/deployments/gh_pages.mdx",sourceDirName:"deployments",slug:"/gh_pages",permalink:"/honeycomb-docs/docs/3.2.x/gh_pages",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.2.x/deployments/gh_pages.mdx",tags:[],version:"3.2.x",lastUpdatedAt:1714155016,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"gh_pages",slug:"/gh_pages",title:"GitHub Pages",description:"Guide for deploying a task to GitHub Pages"},sidebar:"mySidebar",previous:{title:"PsiTurk",permalink:"/honeycomb-docs/docs/3.2.x/psiturk"},next:{title:"Event Triggers",permalink:"/honeycomb-docs/docs/3.2.x/event_triggers"}},p={},u=[{value:"Setup",id:"setup",level:3}],c={toc:u},l="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},".github/workflows/release.yml")," workflow will automatically deploy your task to GitHub pages if you have it enabled for your repository. It uploads the built website to the ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch. You can then access your task at ",(0,o.yg)("inlineCode",{parentName:"p"},"<github user>.github.io/<repository>"),"."),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"Session data is downloaded to the user's local machine upon completion of the experiment when using GH Pages. Because of this, GH Pages is not suitable for fully online experiments.")),(0,o.yg)("h3",{id:"setup"},"Setup"),(0,o.yg)("p",null,"Please follow the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/pages/quickstart"},"GitHub documentation")," for setting up GH Pages on your repository and make sure the ",(0,o.yg)("a",{parentName:"p",href:"https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"publishing source")," for your repository is configured for ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}g.isMDXComponent=!0}}]);