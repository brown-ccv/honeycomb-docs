"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),k=i,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"psiturk",slug:"/psiturk",title:"PsiTurk",description:"Guide for the different deploying a task to PsiTurk"},o=void 0,s={unversionedId:"deployments/psiturk",id:"deployments/psiturk",title:"PsiTurk",description:"Guide for the different deploying a task to PsiTurk",source:"@site/docs/deployments/psiturk.mdx",sourceDirName:"deployments",slug:"/psiturk",permalink:"/honeycomb-docs/docs/psiturk",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/deployments/psiturk.mdx",tags:[],version:"current",lastUpdatedAt:1701874719,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{id:"psiturk",slug:"/psiturk",title:"PsiTurk",description:"Guide for the different deploying a task to PsiTurk"},sidebar:"mySidebar",previous:{title:"Firebase",permalink:"/honeycomb-docs/docs/firebase"},next:{title:"GitHub Pages",permalink:"/honeycomb-docs/docs/gh_pages"}},l={},p=[{value:"Prebuilt version",id:"prebuilt-version",level:3},{value:"Build instructions",id:"build-instructions",level:3},{value:"Running PsiTurk",id:"running-psiturk",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While honeycomb is optimized for use on a ",(0,i.kt)("a",{parentName:"p",href:"local_application"},"local application"),", we added functionality for usage with ",(0,i.kt)("a",{parentName:"p",href:"https://psiturk.org/"},"PsiTurk"),". The application will detect if it's being used in a Turk environment and will save the data to the default PsiTurk SQLite database."),(0,i.kt)("h3",{id:"prebuilt-version"},"Prebuilt version"),(0,i.kt)("p",null,"When GitHub Actions is run, a PsiTurk build will be created automatically, and can be downloaded from its artifacts. The workflows responsible for building the PsiTurk application are ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/package.yml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/release.yml"),". The first one has to be triggered manually, the latter is triggered when you tag a release."),(0,i.kt)("p",null,"If this is all you need, the build instructions below can be skipped!"),(0,i.kt)("h3",{id:"build-instructions"},"Build instructions"),(0,i.kt)("p",null,"To set up your PsiTurk project, we provide a script that does the conversion.\nPsiTurk is a Python package used to manage HITs in Mechanical Turk. Before using the provided script, install ",(0,i.kt)("a",{parentName:"p",href:"https://psiturk.org/"},"PsiTurk"),"."),(0,i.kt)("p",null,"You'll need to follow these steps (the path to the PsiTurk project should be a directory you wish to be created):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Build the application: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"psiturkit")," directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd psiturkit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it's the first time you're running the script:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./psiturk-it -p <PATH_TO_NEW_PSITURK_PROJECT>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To update an existing PsiTurk project (the path to the PsiTurk project should already exist from the previous steps):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./psiturk-it -U -p <PATH_TO_NEW_PSITURK_PROJECT>\n")))),(0,i.kt)("h3",{id:"running-psiturk"},"Running PsiTurk"),(0,i.kt)("p",null,"After that, just navigate to your newly created PsiTurk project directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"shell> psiturk # start psiturk\npsiturk> server on # start server\npsiturk> debug # enter debug mode\n")))}d.isMDXComponent=!0}}]);