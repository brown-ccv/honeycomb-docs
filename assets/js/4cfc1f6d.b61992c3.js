"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[5238],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,y=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?i.createElement(y,l(l({ref:n},d),{},{components:t})):i.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(8168),a=(t(6540),t(5680));const r={id:"npm_scripts",slug:"/npm_scripts",title:"NPM Scripts",description:"Guide to using the npm scripts needed for Honeycomb"},l=void 0,o={unversionedId:"project_organization/npm_scripts",id:"project_organization/npm_scripts",title:"NPM Scripts",description:"Guide to using the npm scripts needed for Honeycomb",source:"@site/docs/project_organization/npm_scripts.mdx",sourceDirName:"project_organization",slug:"/npm_scripts",permalink:"/honeycomb-docs/docs/npm_scripts",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/project_organization/npm_scripts.mdx",tags:[],version:"current",lastUpdatedAt:1714155016,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"npm_scripts",slug:"/npm_scripts",title:"NPM Scripts",description:"Guide to using the npm scripts needed for Honeycomb"},sidebar:"mySidebar",previous:{title:"Directory Structure",permalink:"/honeycomb-docs/docs/directory_structure"},next:{title:"Environment Variables",permalink:"/honeycomb-docs/docs/environment_variables"}},p={},s=[{value:"Start",id:"start",level:2},{value:"Dev",id:"dev",level:2},{value:"Firebase Development",id:"firebase-development",level:3},{value:"Build",id:"build",level:2},{value:"Package",id:"package",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],d={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Custom scripts for common shell commands can be written in ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," and run via the node package manager (NPM). All of the commands needed to develop, build, and deploy Honeycomb are written as scripts."),(0,a.yg)("p",null,"Additional scripts can be created if desired but we generally recommend against changing or deleting the scripts Honeycomb ships with."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Executing an NPM Script"',title:'"Executing',an:!0,NPM:!0,'Script"':!0},"npm run <script>\n")),(0,a.yg)("h2",{id:"start"},"Start"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"start")," runs the app in development mode and does NOT open a browser. This makes working with Electron easier as it creates its own browser for development."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"start:browser")," runs the app in development mode and automatically opens a new browser tab. It uses your system's default browser. The page will reload if you make edits."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"start:electron"),": Waits for the app to be running (from ",(0,a.yg)("inlineCode",{parentName:"li"},"start"),") and then starts an electron process.")),(0,a.yg)("h2",{id:"dev"},"Dev"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," runs the app in development mode on Electron. It executes ",(0,a.yg)("inlineCode",{parentName:"p"},"start")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"start:electron")," concurrently."),(0,a.yg)("p",null,"Note that this is a base script that other scripts build on top of - you should always run one of the scripts below while developing your app. The additional scripts execute ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," with different ",(0,a.yg)("a",{parentName:"p",href:"environment_variables"},"environment variables"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:home")," runs the app with equipment disabled."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:home:video")," runs the app with equipment disabled and video enabled."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:clinic")," runs the app with equipment enabled."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:clinic:video")," runs the app with equipment enabled and video enabled."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:turk-prolific")," runs the app with prolific and PsiTurk enabled.")),(0,a.yg)("h3",{id:"firebase-development"},"Firebase Development"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dev:firebase")," runs the app with Firebase enabled."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"firebase:emulators:start")," starts the Firebase emulators with the data found in ",(0,a.yg)("inlineCode",{parentName:"li"},"emulator_data/"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"firebase:emulators:save")," saves the current state of the Firebase emulators into ",(0,a.yg)("inlineCode",{parentName:"li"},"emulator_data/"),".")),(0,a.yg)("p",null,"Working with Firebase is slightly different as it is meant to be run on the browser. ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev:firebase")," executes ",(0,a.yg)("inlineCode",{parentName:"p"},"start:browser")," with Firebase enabled, which will automatically launch the running app in your default browser. It can be found on other browsers by navigating to ",(0,a.yg)("a",{parentName:"p",href:"https://localhost:3000"},"localhost:3000"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dev:firebase")," must be run in conjunction with ",(0,a.yg)("inlineCode",{parentName:"p"},"firebase:emulators:start")," to work properly. This runs the Firebase Emulators locally with some dummy data. The emulator data can be viewed at ",(0,a.yg)("a",{parentName:"p",href:"https://localhost:4000"},"localhost:4000"),"."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"npm run firebase:emulators:start")," must be run in a separate terminal window that stays during development.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The dummy study is ",(0,a.yg)("inlineCode",{parentName:"p"},"s1")," and the dummy participant is ",(0,a.yg)("inlineCode",{parentName:"p"},"p1"),".")),(0,a.yg)("h2",{id:"build"},"Build"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"npm run build")," creates a production build of the app in the ",(0,a.yg)("inlineCode",{parentName:"p"},"build/")," folder."),(0,a.yg)("p",null,"Note that this is a base script that other scripts build on top of - you should always run one of the scripts below while developing your app. The additional scripts execute ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run build")," with different ",(0,a.yg)("a",{parentName:"p",href:"environment_variables"},"environment variables"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:home")," builds the app with equipment disabled"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:home:video")," builds the app with equipment disabled and video enabled"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:clinic")," builds the app with equipment enabled"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:clinic:video")," builds the app with equipment enabled and video enabled"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:firebase")," builds the app with Firebase enabled"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:turk-prolific")," builds the app with prolific and PsiTurk enabled")),(0,a.yg)("h2",{id:"package"},"Package"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"npm run package:[platform]")," creates a standalone installer for the given platform using electron-forge. The installer is created in ",(0,a.yg)("inlineCode",{parentName:"p"},"out/"),". Note that the scripts build the app before creating the installers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm run package:windows")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm run package:linux")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm run package:mac"))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Packaging for Windows on a non-Windows machine requires ",(0,a.yg)("inlineCode",{parentName:"p"},"mono")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"wine")," to be installed.")),(0,a.yg)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cli")," runs the ",(0,a.yg)("a",{parentName:"li",href:"firebase#using-the-cli-script"},"Firebase CLI")," script."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"commit")," runs ",(0,a.yg)("a",{parentName:"li",href:"https://commitizen-tools.github.io/commitizen/"},"Commitizen")," in the console. It is useful for ensuring your Git commit messages are easy to follow."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"format")," uses ",(0,a.yg)("a",{parentName:"li",href:"https://prettier.io"},"Prettier")," to style code in a consistent format."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lint")," uses ",(0,a.yg)("a",{parentName:"li",href:"https://eslint.org/"},"Eslint")," to find problems in the code."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"postinstall")," is run automatically after ",(0,a.yg)("inlineCode",{parentName:"li"},"npm install")," and is used to rebuild the Electron dependencies"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"prepare")," is run automatically before the project is packaged/installed and is used to set up the project's pre-commit hooks"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"prebuild")," is run automatically before ",(0,a.yg)("inlineCode",{parentName:"li"},"npm run build")," and is used to rebuild the Electron dependencies")))}u.isMDXComponent=!0}}]);