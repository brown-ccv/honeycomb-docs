"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4226],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(6540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(8168),o=(a(6540),a(5680));const i={id:"prerequisites",slug:"/prerequisites",title:"Prerequisites",description:"Overview of prerequisite software and how to install them"},l=void 0,r={unversionedId:"prerequisites",id:"version-3.2.x/prerequisites",title:"Prerequisites",description:"Overview of prerequisite software and how to install them",source:"@site/versioned_docs/version-3.2.x/prerequisites.mdx",sourceDirName:".",slug:"/prerequisites",permalink:"/honeycomb-docs/docs/3.2.x/prerequisites",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.2.x/prerequisites.mdx",tags:[],version:"3.2.x",lastUpdatedAt:1712343346,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"prerequisites",slug:"/prerequisites",title:"Prerequisites",description:"Overview of prerequisite software and how to install them"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/honeycomb-docs/docs/3.2.x/quick_start"},next:{title:"Directory Structure",permalink:"/honeycomb-docs/docs/3.2.x/directory_structure"}},s={},p=[{value:"OS Independent",id:"os-independent",level:2},{value:"Git",id:"git",level:3},{value:"Node Version Manager",id:"node-version-manager",level:3},{value:"Python",id:"python",level:3},{value:"Oracle JDk",id:"oracle-jdk",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Mac-specific Installs",id:"mac-specific-installs",level:2},{value:"X-Code",id:"x-code",level:3},{value:"Rosetta",id:"rosetta",level:3},{value:"Windows-specific Install",id:"windows-specific-install",level:2},{value:"Visual Studio",id:"visual-studio",level:3},{value:"Manual Installation (macOS)",id:"manual-installation-macos",level:2},{value:"Manual Installation (Windows)",id:"manual-installation-windows",level:2},{value:"Manual Installation (Linux)",id:"manual-installation-linux",level:2},{value:"Further Help",id:"further-help",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"It is important that your computer is set up with the necessary packages before you begin development. You will come across a variety of errors if these prerequisites are not installed. ",(0,o.yg)("strong",{parentName:"p"},"The ",(0,o.yg)("a",{parentName:"strong",href:"quick_start#installing-prerequisites"},"quick start")," guide explains how to run an automated install"),", this page details what programs and packages are needed to run and build Honeycomb. There are some OS specific prerequisites needed to build a task as a desktop application."),(0,o.yg)("h2",{id:"os-independent"},"OS Independent"),(0,o.yg)("h3",{id:"git"},"Git"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://git-scm.com"},"git")," is an open-sourced version control system. It is used to track changes, revert mistakes, and enable peer code reviews!"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://desktop.github.com"},"GitHub Desktop")," is a GUI application used to interact with git and GitHub directly from your computer. It is not strictly needed but many folks find it easier to work with than using git directly from the command line."),(0,o.yg)("h3",{id:"node-version-manager"},"Node Version Manager"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en"},"NodeJS")," is a cross-platform runtime environment for JavaScript code. Almost every web application today builds on top of node. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," manages running multiple versions of node on the same system. The ",(0,o.yg)("inlineCode",{parentName:"p"},".nvmrc")," denotes the version of node that Honeycomb uses."),(0,o.yg)("h3",{id:"python"},"Python"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.python.org"},"Python"),' is a high-level programming language. Some "under the hood" tools needed by Honeycomb are written in python so it must be installed on your system.'),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Honeycomb needs version 3.7 or later to run - the installers use version 3.11.")),(0,o.yg)("h3",{id:"oracle-jdk"},"Oracle JDk"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.oracle.com/java/"},"Java")," is another high-level programming languages that some tools are written in (namely, the Firebase Emulators). We must install a JDK (Java Development Kit) for it to run."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Honeycomb needs version 11 or later to run - the installers use version 18.")),(0,o.yg)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," is a well-loved and easy to use integrated development environment (IDE). This is the program you'll use to write your task."),(0,o.yg)("h2",{id:"mac-specific-installs"},"Mac-specific Installs"),(0,o.yg)("h3",{id:"x-code"},"X-Code"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"XCode")," is a special IDE for the Apple platform. It comes with everything needed to compile desktop applications from an Apple computer. It must be installed from the terminal:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Installing XCode"',title:'"Installing','XCode"':!0},"  xcode-select --install\n")),(0,o.yg)("h3",{id:"rosetta"},"Rosetta"),(0,o.yg)("p",null,"Rosetta is a translation layer built for Mac computers with Apple Silicon. It should ask to be installed if any of the prerequisite tools need it. Otherwise, ",(0,o.yg)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211861"},"this guide")," can be used to make sure it is on your Apple silicon system."),(0,o.yg)("h2",{id:"windows-specific-install"},"Windows-specific Install"),(0,o.yg)("h3",{id:"visual-studio"},"Visual Studio"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://visualstudio.microsoft.com"},"Visual Studio")," is a special IDE for the Windows platform. It comes with everything needed to compile desktop applications from a PC. Visual Studio Community is a free to use platform."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},'The "Desktop development with C++" workload must also be installed with Visual Studio. The automated installers should preselect this but you should double check to be certain!')),(0,o.yg)("h2",{id:"manual-installation-macos"},"Manual Installation (macOS)"),(0,o.yg)("p",null,"The links below will take you to each project installation page should you prefer to manually install the prerequisite software."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/download/mac"},"Git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://desktop.github.com"},"GitHub Desktop")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.python.org/downloads/macos/"},"Python")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/#jdk20-windows"},"Oracle JDK")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12"},"Xcode"))),(0,o.yg)("h2",{id:"manual-installation-windows"},"Manual Installation (Windows)"),(0,o.yg)("p",null,"The links below will take you to each project installation page should you prefer to manually install the prerequisite software."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://desktop.github.com"},"GitHub Desktop")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows#installation--upgrades"},"NVM")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.python.org/downloads/windows/"},"Python")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/#jdk20-mac"},"Oracle JDK")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code")),(0,o.yg)("li",{parentName:"ul"},"Visual Studio:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/vs/community/"},"Visual Studio 2022 Community")),(0,o.yg)("li",{parentName:"ul"},"Install the ",(0,o.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160#step-4---choose-workloads-1"},"Native C++ Workflow"))))),(0,o.yg)("h2",{id:"manual-installation-linux"},"Manual Installation (Linux)"),(0,o.yg)("p",null,"The links below will take you to each project installation page should you prefer to manually install the prerequisite software. Your preferred installation method for the programs listed ",(0,o.yg)("a",{parentName:"p",href:"#os-independent"},"above")," should get you up and running on any Linux distro new enough to support GLIBC_2.28."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/download/linux"},"Git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://desktop.github.com"},"GitHub Desktop")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.python.org/downloads/source/"},"Python")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/#jdk20-linux"},"Oracle JDK")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code")),(0,o.yg)("li",{parentName:"ul"},"Install ",(0,o.yg)("a",{parentName:"li",href:"https://clang.llvm.org/get_started.html"},"Clang")," or follow installation instructions on the ",(0,o.yg)("a",{parentName:"li",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs")),(0,o.yg)("li",{parentName:"ul"},"Development headers of ",(0,o.yg)("inlineCode",{parentName:"li"},"GTK 3")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"libnotify")," (Follow installation instructions on the ",(0,o.yg)("a",{parentName:"li",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs"),")")),(0,o.yg)("h2",{id:"further-help"},"Further Help"),(0,o.yg)("p",null,"If you are still having issues setting up your computer you can find the full instructions on the ",(0,o.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-gn"},"electron documentation")," for your specific OS."))}c.isMDXComponent=!0}}]);