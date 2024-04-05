"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4139],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,y=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={id:"version_control",title:"Version Control"},i=void 0,l={unversionedId:"version_control",id:"version-1.1.0/version_control",title:"Version Control",description:"Git Overview",source:"@site/versioned_docs/version-1.1.0/version_control.md",sourceDirName:".",slug:"/version_control",permalink:"/honeycomb-docs/docs/1.1.0/version_control",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/version_control.md",tags:[],version:"1.1.0",lastUpdatedAt:1712343346,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"version_control",title:"Version Control"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Quick Start",permalink:"/honeycomb-docs/docs/1.1.0/quick_start"},next:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/1.1.0/ci"}},s={},c=[{value:"Git Overview",id:"git-overview",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Branches",id:"branches",level:3},{value:"Comment styles",id:"comment-styles",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,n.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"git-overview"},"Git Overview"),(0,a.yg)("p",null,"Git is a version control system that enables you to track changes to files. With Git, you are able to revert files back to previous versions, restore deleted files, remove added files and even track down where a particular line of code was introduced."),(0,a.yg)("p",null,"Git creates a hidden ",(0,a.yg)("inlineCode",{parentName:"p"},".git")," folder ","(","in the current folder",")"," to store the details of the file system - this folder contains all the data required to track your files and is known as a ",(0,a.yg)("strong",{parentName:"p"},"repository"),", or repo."),(0,a.yg)("p",null,"Git tracks file changes by the user creating a ",(0,a.yg)("em",{parentName:"p"},"save point"),", or in Git terms a ",(0,a.yg)("strong",{parentName:"p"},"commit"),". Each commit takes a snapshot of the current file system. Commits are uniquely identified by a SHA\u20131 hash. This is a 40 character string which may along the lines of ",(0,a.yg)("inlineCode",{parentName:"p"},"ded7a0db6422d59e9893e975e32275fc36f853da"),"This hash can be used to track a particular commit within the repository."),(0,a.yg)("p",null,"Nearly all operations that are performed by Git are in you local computing environment, for the exception of few used purely to synchronize with a remote. Some of the most common git operations are depicted below. In summary, a typical flow consists of making changes to your files, ",(0,a.yg)("em",{parentName:"p"},"staging")," them via ",(0,a.yg)("inlineCode",{parentName:"p"},"git add"),", marking a save point via ",(0,a.yg)("inlineCode",{parentName:"p"},"git commit"),", then finally syncing to your remote ","(","e.g., GitHub",")"," via ",(0,a.yg)("inlineCode",{parentName:"p"},"git push"),". If you are pushing changes to your remote from multiple places, you can bring changes your most recent version using ",(0,a.yg)("inlineCode",{parentName:"p"},"git pull"),", which is the equivalent of doing ",(0,a.yg)("inlineCode",{parentName:"p"},"git fetch")," followed by a ",(0,a.yg)("inlineCode",{parentName:"p"},"git merge")," operation"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(9850).A,width:"874",height:"509"})),(0,a.yg)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Command"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Brief"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"git add ","<","files",">"),(0,a.yg)("td",{parentName:"tr",align:"left"},"add a file to next commit ","(","stage",")")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"git commit -m ","<","message",">"),(0,a.yg)("td",{parentName:"tr",align:"left"},"commit staged files")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"git push"),(0,a.yg)("td",{parentName:"tr",align:"left"},"upload staged commit to repo")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"git pull"),(0,a.yg)("td",{parentName:"tr",align:"left"},"get remote repo commits and download ","(","try and resolve conflicts",")")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"git clone ","<","url",">"),(0,a.yg)("td",{parentName:"tr",align:"left"},"download entire repository")))),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("h3",{id:"workflow"},"Workflow"),(0,a.yg)("p",null,"We recommend a simple flow based on following rules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use topic/feature branches, no direct commits on main."),(0,a.yg)("li",{parentName:"ul"},"Perform tests and code reviews before merges into main, not afterwards."),(0,a.yg)("li",{parentName:"ul"},"Everyone starts from main, and targets main."),(0,a.yg)("li",{parentName:"ul"},"Commit messages reflect intent.")),(0,a.yg)("h3",{id:"branches"},"Branches"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"main is the default branch and where releases are made off. This branch should be in clean/working conditions at all times. This branch is protected and can only be merged from Pull Requests for topic branches"),(0,a.yg)("li",{parentName:"ul"},"topic branches are created for new features, fixes, or really any changes")),(0,a.yg)("h3",{id:"comment-styles"},"Comment styles"),(0,a.yg)("p",null,"We encourage using ",(0,a.yg)("a",{parentName:"p",href:"http://commitizen.github.io/cz-cli/"},"Commitizen"),", a great tool for writing angular commits - this will create a standardized commit format which makes for easier change logging and more sane messages."))}p.isMDXComponent=!0},9850:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/git-basics-8ba67841533472790a3ef4038aa47323.png"}}]);