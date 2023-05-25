"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[7044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"quick_start",title:"Quick Start"},l=void 0,i={unversionedId:"quick_start",id:"version-2.x/quick_start",title:"Quick Start",description:"To start a new task locally, in development mode follow these steps:",source:"@site/versioned_docs/version-2.x/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/honeycomb-docs/docs/2.x/quick_start",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-2.x/quick_start.md",tags:[],version:"2.x",lastUpdatedAt:1685043055,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"quick_start",title:"Quick Start"},sidebar:"version-2.x/someSidebar",previous:{title:"Project Organization",permalink:"/honeycomb-docs/docs/2.x/folders"},next:{title:"Version Control",permalink:"/honeycomb-docs/docs/2.x/version_control"}},s={},p=[{value:"1. Start your new task from our template repository",id:"1-start-your-new-task-from-our-template-repository",level:3},{value:"2. Change name and description",id:"2-change-name-and-description",level:3},{value:"3. Install the dependencies.",id:"3-install-the-dependencies",level:3},{value:"Windows",id:"windows",level:4},{value:"Note: restart computer after all installs are complete",id:"note-restart-computer-after-all-installs-are-complete",level:5},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"4. Run the task in dev mode",id:"4-run-the-task-in-dev-mode",level:3},{value:"5. Run the task with preset environment variables",id:"5-run-the-task-with-preset-environment-variables",level:3},{value:"6. Check out the data",id:"6-check-out-the-data",level:3},{value:"7. Quit The Task",id:"7-quit-the-task",level:3},{value:"7. Merge updates from honeycomb template repo",id:"7-merge-updates-from-honeycomb-template-repo",level:3},{value:"8. Run automated tests",id:"8-run-automated-tests",level:3},{value:"Linux",id:"linux-1",level:4}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To start a new task locally, in development mode follow these steps:"),(0,r.kt)("h3",{id:"1-start-your-new-task-from-our-template-repository"},"1. Start your new task from our template repository"),(0,r.kt)("p",null,"The simplest way to get started is creating a new repository using Honeycomb as a template."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb"},"https://github.com/brown-ccv/honeycomb")," and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Use this template")," on the top right. Then select the organization and the name of your repository and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"create repository from template")),(0,r.kt)("p",null,"Alternatively, you can use GitHub CLI to create a new project based on the Honeycomb template repository. First, install GitHub CLI (",(0,r.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"https://cli.github.com/"),"), then simply run on your terminal: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gh repo create your-new-task-name --template brown-ccv/honeycomb\n")),(0,r.kt)("p",null,"You can now move into the directory that was just created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd your-new-task-name\n")),(0,r.kt)("h3",{id:"2-change-name-and-description"},"2. Change name and description"),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," fields to reflect your app name and description, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"repository")),(0,r.kt)("h3",{id:"3-install-the-dependencies"},"3. Install the dependencies."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Electron Dependencies"),"\nHoneycomb relies on Electron to package the cross-platform desktop applications. Before starting, you will need to install Electron's pre-requisites below. You can find the full instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-gn"},"electron documentation")," for your specific OS."),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visual Studio:\nInstall the latest version of ",(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/downloads/"},"Visual Studio")," with the Desktop Development for C++ Workflow.\nTo add the workflow, follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160#:~:text=If%20you%20have%20Visual%20Studio,Then%2C%20choose%20Modify"},"these instructions"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Node.js:\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Git bash (Git 2.20.0 or later with support for "--show-current"):\nInstall ',(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git bash")))),(0,r.kt)("h5",{id:"note-restart-computer-after-all-installs-are-complete"},"Note: restart computer after all installs are complete"),(0,r.kt)("h4",{id:"macos"},"MacOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command Line Tools: Type in the terminal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"xcode-select --install\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Node.js:\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Git 2.20.0 or later (with support for "--show-current"):\nInstall ',(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads/"},"git"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Python 3.7 or later (with support for TLS 1.2):\nFollow the guide on electron docs to ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-macos#python"},"install and configure python and its modules")," "))),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Node.js:\nDowload ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js source code")," and compile it: ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Git 2.20.0 or later (with support for "--show-current"):\nInstall ',(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads/"},"git"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Python 3.7 or later (with support for TLS 1.2):\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clang:\nInstall ",(0,r.kt)("a",{parentName:"p",href:"https://clang.llvm.org/get_started.html"},"Clang")," or follow installation instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Development headers of GTK 3 and libnotify:\nFollow installation instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Honeycomb npm packages"),"\nOnce ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," is installed you will able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," commands in the terminal. To install the dependencies for HoneyComb run the following command at the terminal (remember you need ",(0,r.kt)("inlineCode",{parentName:"p"},"cd your-new-task-name")," before)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install\n")),(0,r.kt)("h3",{id:"4-run-the-task-in-dev-mode"},"4. Run the task in dev mode"),(0,r.kt)("p",null,"To launch an electron window with the task with the inspector open to the console and will hot-reload when changes are made to the app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Mac and Linux:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm run dev\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Windows:\nYou will need to open 2 terminals. In the first -and make sure you are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"task-<TASK NAME>")," repo directory- run the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm start\n")),(0,r.kt)("p",{parentName:"li"},"  In the second terminal -  make sure you are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"task-<TASK NAME>")," repo directory-, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm run electron-dev\n")))),(0,r.kt)("h3",{id:"5-run-the-task-with-preset-environment-variables"},"5. Run the task with preset environment variables"),(0,r.kt)("p",null,"We have provided various ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files and npm scripts to run the task in common settings like home or clinic. Here are the possible commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev:home\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev:home:video\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev:clinic\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev:clinic:video\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev:firebase\n")),(0,r.kt)("h3",{id:"6-check-out-the-data"},"6. Check out the data"),(0,r.kt)("p",null,"The data is saved throughout the task to the users's app directory.  This is logged at the beginning of the task wherever you ran ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," (for windows, instead in two different terminals ran ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run electron-dev"),"). It is also stored in a folder that is generated by the app, which should be found on the desktop."),(0,r.kt)("h3",{id:"7-quit-the-task"},"7. Quit The Task"),(0,r.kt)("p",null,"If you want to quit in the middle of the task, you can use these keyboard shortcuts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl+W (for PC/Windows)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Cmd+Q (for Mac)\n")),(0,r.kt)("p",null,"Partial data will be saved."),(0,r.kt)("h3",{id:"7-merge-updates-from-honeycomb-template-repo"},"7. Merge updates from honeycomb template repo"),(0,r.kt)("p",null,"Honeycomb is an active project, and will be updated with new features over time. To merge the honeycomb template repository updates with your task, follow the following steps:\nFirst time only:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git remote add honeycomb https://github.com/brown-ccv/honeycomb.git\n")),(0,r.kt)("p",null,"Every time: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git fetch --all\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git merge honeycomb/main --allow-unrelated histories\n")),(0,r.kt)("p",null,"If there are any conflicts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git stash\n")),(0,r.kt)("p",null,"To merge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git commit -a -m "merge honeycomb latest"\n')),(0,r.kt)("h3",{id:"8-run-automated-tests"},"8. Run automated tests"),(0,r.kt)("p",null,"When getting started, merging updates, or making custom changes, it's a good idea to run automated tests.  These can tell you if things are working or if recent changes broke something that previously worked."),(0,r.kt)("p",null,"To run the tests interactively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm test\n")),(0,r.kt)("p",null,"Or non-interactively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CI=true npm test\n")),(0,r.kt)("h4",{id:"linux-1"},"Linux"),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," on Linux, you might get an error that mentions ",(0,r.kt)("inlineCode",{parentName:"p"},"ENOSPC"),'.  This is because the test runer creates "watchers" for files in the project repo in order to automatically re-run tests as the files change.  Linux limits the number of watchers that can be created at a time and the default limit may be smaller than the number of files in the repo.'),(0,r.kt)("p",null,'This is a "known issue" with some test runners on Linux, as in discussions ',(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62206460/jest-watch-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here"),"."),(0,r.kt)("p",null,"One simple workaround is to increase the number of allowed watchers (100000 seems to be sufficient):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command that initially fails with ",(0,r.kt)("inlineCode",{parentName:"li"},"ENOSPC"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"npm test")),(0,r.kt)("li",{parentName:"ul"},'Check the configured limit on "watchers": ',(0,r.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,r.kt)("li",{parentName:"ul"},"Edit the relevant Linux config file: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo vim /etc/sysctl.conf")),(0,r.kt)("li",{parentName:"ul"},"Add a line at the end of the config file: ",(0,r.kt)("inlineCode",{parentName:"li"},"fs.inotify.max_user_watches=100000")),(0,r.kt)("li",{parentName:"ul"},"Save, exit, and reload the config file: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo sysctl -p")),(0,r.kt)("li",{parentName:"ul"},"Check that the limit has changed: ",(0,r.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,r.kt)("li",{parentName:"ul"},"Retry the initial command, which should now succeed: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm test"))))}u.isMDXComponent=!0}}]);