"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[8425],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),o=(n(6540),n(5680));const a={id:"quick_start",title:"Quick Start"},i=void 0,l={unversionedId:"quick_start",id:"version-1.1.0/quick_start",title:"Quick Start",description:"To start a new task locally, in development mode follow these steps:",source:"@site/versioned_docs/version-1.1.0/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/honeycomb-docs/docs/1.1.0/quick_start",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/quick_start.md",tags:[],version:"1.1.0",lastUpdatedAt:1714148140,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"quick_start",title:"Quick Start"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Project Organization",permalink:"/honeycomb-docs/docs/1.1.0/folders"},next:{title:"Version Control",permalink:"/honeycomb-docs/docs/1.1.0/version_control"}},p={},s=[{value:"1. Start your new task from our template repository",id:"1-start-your-new-task-from-our-template-repository",level:3},{value:"2. Change name and description",id:"2-change-name-and-description",level:3},{value:"3. Install the dependencies.",id:"3-install-the-dependencies",level:3},{value:"4. Run the task in dev mode",id:"4-run-the-task-in-dev-mode",level:3},{value:"5. Check out the data",id:"5-check-out-the-data",level:3},{value:"6. Quit The Task",id:"6-quit-the-task",level:3},{value:"7. Merge updates from honeycomb template repo",id:"7-merge-updates-from-honeycomb-template-repo",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To start a new task locally, in development mode follow these steps:"),(0,o.yg)("h3",{id:"1-start-your-new-task-from-our-template-repository"},"1. Start your new task from our template repository"),(0,o.yg)("p",null,"The simplest way to get started is creating a new repository using Honeycomb as a template."),(0,o.yg)("p",null,"Go to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb"},"https://github.com/brown-ccv/honeycomb")," and click on ",(0,o.yg)("inlineCode",{parentName:"p"},"Use this template")," on the top right. Then select the organization and the name of your repository and click on ",(0,o.yg)("inlineCode",{parentName:"p"},"create repository from template")),(0,o.yg)("p",null,"Alternatively, you can use GitHub CLI to create a new project based on the Honeycomb template repository. First, install GitHub CLI (",(0,o.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"https://cli.github.com/"),"), then simply run on your terminal: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"gh repo create your-new-task-name --template brown-ccv/honeycomb\n")),(0,o.yg)("p",null,"You can now move into the directory that was just created"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd your-new-task-name\n")),(0,o.yg)("h3",{id:"2-change-name-and-description"},"2. Change name and description"),(0,o.yg)("p",null,"Update the ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json")," fields to reflect your app name and description, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"author"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"repository")),(0,o.yg)("h3",{id:"3-install-the-dependencies"},"3. Install the dependencies."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Electron Dependencies"),"\nHoneycomb relies on Electron to package the cross-platform desktop applications. Before starting, you will need to install Electron's pre-requisites. You can find instructions ",(0,o.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development"},"here")," for your specific OS"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Honeycomb npm packages"),"\nOnce ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," is installed you will able to use ",(0,o.yg)("inlineCode",{parentName:"p"},"npm")," commands in the terminal. To install the dependencies for HoneyComb run the following command at the terminal (remember you need ",(0,o.yg)("inlineCode",{parentName:"p"},"cd your-new-task-name")," before)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm install\n")),(0,o.yg)("h3",{id:"4-run-the-task-in-dev-mode"},"4. Run the task in dev mode"),(0,o.yg)("p",null,"To launch an electron window with the task with the inspector open to the console and will hot-reload when changes are made to the app"),(0,o.yg)("p",null,"**For Mac and Linux:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm run dev\n")),(0,o.yg)("p",null,"**For Windows:\nYou will need to open 2 terminals. In the first -and make sure you are in the ",(0,o.yg)("inlineCode",{parentName:"p"},"task-<TASK NAME>")," repo directory- run the command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm start\n")),(0,o.yg)("p",null,"In the second terminal -  make sure you are in the ",(0,o.yg)("inlineCode",{parentName:"p"},"task-<TASK NAME>")," repo directory-, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm run electron-dev\n")),(0,o.yg)("h3",{id:"5-check-out-the-data"},"5. Check out the data"),(0,o.yg)("p",null,"The data is saved throughout the task to the users's app directory.  This is logged at the beginning of the task wherever you ran ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run dev")," (for windows, instead in two different terminals ran ",(0,o.yg)("inlineCode",{parentName:"p"},"npm start")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run electron-dev"),"). It is also stored in a folder that is generated by the app, which should be found on the desktop."),(0,o.yg)("h3",{id:"6-quit-the-task"},"6. Quit The Task"),(0,o.yg)("p",null,"If you want to quit in the middle of the task, you can use these keyboard shortcuts:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Ctrl+W (for PC/Windows)\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Cmd+Q (for Mac)\n")),(0,o.yg)("p",null,"Partial data will be saved."),(0,o.yg)("h3",{id:"7-merge-updates-from-honeycomb-template-repo"},"7. Merge updates from honeycomb template repo"),(0,o.yg)("p",null,"Honeycomb is an active project, and will be updated with new features over time. To merge the honeycomb template repository updates with your task, follow the following steps:\nFirst time only:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git remote add honeycomb https://github.com/brown-ccv/honeycomb.git\n")),(0,o.yg)("p",null,"Every time: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git fetch --all\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git merge honeycomb/main --allow-unrelated histories\n")),(0,o.yg)("p",null,"If there are any conflicts:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git stash\n")),(0,o.yg)("p",null,"To merge:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'git commit -a -m "merge honeycomb latest"\n')))}m.isMDXComponent=!0}}]);