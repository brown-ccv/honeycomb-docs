"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[7737],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),y=p(n),m=o,d=y["".concat(s,".").concat(m)]||y[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[y]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(8168),o=(n(6540),n(5680));const l={id:"setup_details",title:"Setup Details"},i=void 0,r={unversionedId:"setup_details",id:"version-3.0.0/setup_details",title:"Setup Details",description:"Prerequisites",source:"@site/versioned_docs/version-3.0.0/setup_details.md",sourceDirName:".",slug:"/setup_details",permalink:"/docs/3.0.0/setup_details",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.0.0/setup_details.md",tags:[],version:"3.0.0",lastUpdatedAt:1719431750,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"setup_details",title:"Setup Details"},sidebar:"someSidebar",previous:{title:"NPM Scripts",permalink:"/docs/3.0.0/npm_scripts"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"MacOS",id:"macos",level:2},{value:"Brew",id:"brew",level:3},{value:"Manual Installation (MacOS)",id:"manual-installation-macos",level:3},{value:"Windows",id:"windows",level:2},{value:"chocolatey",id:"chocolatey",level:3},{value:"chocolatey.config",id:"chocolateyconfig",level:4},{value:"Python on Windows (pyenv)",id:"python-on-windows-pyenv",level:3},{value:"Manual Installation (Windows)",id:"manual-installation-windows",level:3},{value:"Linux",id:"linux",level:2},{value:"Further Help",id:"further-help",level:2}],u={toc:p},y="wrapper";function c(e){let{components:t,...l}=e;return(0,o.yg)(y,(0,a.A)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"It is important that your computer is set up with the necessary packages before you begin development. You will come across a variety of errors if these prerequisites are not installed. First we need the following programs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"git (version control and GitHub integration)"),(0,o.yg)("li",{parentName:"ul"},"nodejs (web development - we recommend the latest long term support version)"),(0,o.yg)("li",{parentName:"ul"},"python (3.7 or later)"),(0,o.yg)("li",{parentName:"ul"},"An Integrated Development Environment (we recommend VS Code)")),(0,o.yg)("p",null,"In addition, Honeycomb relies on Electron to package the cross-platform desktop applications. Some of electron's prerequisites are platform dependant - listed below are the prerequisites for each operating system along with resources for manually installing them."),(0,o.yg)("h2",{id:"macos"},"MacOS"),(0,o.yg)("h3",{id:"brew"},"Brew"),(0,o.yg)("p",null,"All of the required dependencies for honeycomb on MacOS can be installed via the brewfile. See the ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.0.0/quick_start/#installing-prerequisites-with-homebrew-for-macos"},"quick start")," for more information."),(0,o.yg)("h3",{id:"manual-installation-macos"},"Manual Installation (MacOS)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"XCode")," must be installed from the terminal:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-terminal"},"  xcode-select --install\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://git-scm.com/downloads/"},"Git 2.20.0 or later"),' with support for "--show-current"')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"To install Python (3.7 or later with support for TLS 1.2) follow the guide on electron docs to ",(0,o.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-macos#python"},"install and configure python and its modules")))),(0,o.yg)("h2",{id:"windows"},"Windows"),(0,o.yg)("p",null,"Note that Windows occasionally requires a restart after package installations complete. If you are running into issues after installing the packages please restart your terminal and/or your entire computer. This should resolve most issues."),(0,o.yg)("h3",{id:"chocolatey"},"chocolatey"),(0,o.yg)("h4",{id:"chocolateyconfig"},"chocolatey.config"),(0,o.yg)("p",null,"A Chocolatey configuration file looks something like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<packages>\n  <package id="git" />\n  <package id="nodejs-lts" />\n  <package id="vscode" />\n  <package id="pyenv-win" />\n  <package id="visualstudio2022community" />\n  <package id="visualstudio2022-workload-nativedesktop" />\n  <package id="electron" />\n</packages>\n')),(0,o.yg)("p",null,"Running ",(0,o.yg)("inlineCode",{parentName:"p"},"choco install chocolatey.config")," is the equivalent of calling ",(0,o.yg)("inlineCode",{parentName:"p"},"choco install <id>")," for every package in the file."),(0,o.yg)("h3",{id:"python-on-windows-pyenv"},"Python on Windows (pyenv)"),(0,o.yg)("p",null,"Installing and managing Python on Windows is a notoriously difficult task even for advanced developers. It is best practice to have exactly 1 tool for managing python on your system, which is a rule for most things in software development (this is what ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.0.0/quick_start/#3-install-npm-packages"},"npm")," does for node packages). ",(0,o.yg)("strong",{parentName:"p"},"We highly recommend uninstalling Python and using pyenv even if you never anticipate using python again.")," We promise the extra setup today will pay great dividends in the future!"),(0,o.yg)("p",null,'First and foremost, turn off both Python App Installers in the "App Execution Aliases" settings. ',(0,o.yg)("strong",{parentName:"p"},"Please complete this step even if you already have a Python manager")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"App execution aliases",src:n(5356).A,width:"1764",height:"1530"}),"\n",(0,o.yg)("img",{alt:"Turn off app installer",src:n(1767).A,width:"3838",height:"2070"})),(0,o.yg)("p",null,"Now we can set up our python management system",(0,o.yg)("sup",null,"1"),". We recommend ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/pyenv-win/pyenv-win"},"pyenv")," as it is small and intuitive for newer developers. It lets us install python globally AND switch between different versions for individual projects. It does this (and only this) extremely well. Complete the following steps to install ",(0,o.yg)("inlineCode",{parentName:"p"},"pyenv")," for Windows and set up your global python environment:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Ensure Python is completely uninstalled from your system",(0,o.yg)("sup",null,"2")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Type ",(0,o.yg)("inlineCode",{parentName:"p"},"python")," on the command line and ensure you get a \"Command 'python' not found\" error"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-powershell"},"python\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("em",{parentName:"p"},'If the command executes, locate the installation (check "Add or Remove programs" in the settings) and remove it. Continue until the error appears'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("em",{parentName:"p"},'If the Microsoft Store launches check again to ensure "Manage App execution aliases" is turned off for ',(0,o.yg)("inlineCode",{parentName:"em"},"python.exe")," and ",(0,o.yg)("inlineCode",{parentName:"em"},"python3.exe")))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install ",(0,o.yg)("inlineCode",{parentName:"p"},"pyenv-win")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"pyenv-win")," will install with ",(0,o.yg)("inlineCode",{parentName:"p"},"chocolatey.config")," - enter ",(0,o.yg)("inlineCode",{parentName:"p"},"pyenv")," on the command line to see if it's already on your system. You should see a list of commands printed to your terminal."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pyenv\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If not:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"choco install pyenv-win\n"))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install your python version"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-powershell"},"pyenv install <version>\n")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you're using a different Python version for another project that version will work fine so long as it is at least version ",(0,o.yg)("inlineCode",{parentName:"p"},"> 3.0.0"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Otherwise install the newest version that includes exactly 3 numbers, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"3.10.6")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-powershell"},"pyenv install --list\n"))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use that version as your global install"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-powershell"},"pyenv global <version>\n")))),(0,o.yg)("sup",null,"1"),"_If you are already using [Anaconda](https://www.anaconda.com) for Python and it's various other tools that is okay! You already have python manager installed on your system and can skip this section._",(0,o.yg)("sup",null,"2"),"_Any \"solo\" installations can and will cause major conflicts with `pyenv`. It can cause issues when you try to change your version, when another program checks for python, when you update Windows... so on and so forth. Perhaps you've already run into something unexpected like this! This is why it's essential python is completely uninstalled from your computer before beginning._",(0,o.yg)("h3",{id:"manual-installation-windows"},"Manual Installation (Windows)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'We recommend installing the "LTS" option for better stability'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code")),(0,o.yg)("li",{parentName:"ul"},"Visual Studio:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/vs/community/"},"Visual Studio 2022 Community")),(0,o.yg)("li",{parentName:"ul"},"Install the ",(0,o.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160#step-4---choose-workloads-1"},"Native C++ Workflow")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/pyenv-win/pyenv-win#installation"},"pyenv for Windows"))),(0,o.yg)("h2",{id:"linux"},"Linux"),(0,o.yg)("p",null,"We recommend using Ubuntu (18.10 or later) as your distro but any distro new enough to support GLIBC_2.28 should work."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Download the ",(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js source code")," and compile it"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads/"},"Git 2.20.0 or later"),' with support for "--show-current"'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.7 or later")," (with support for TLS 1.2)"),(0,o.yg)("li",{parentName:"ul"},"Install ",(0,o.yg)("a",{parentName:"li",href:"https://clang.llvm.org/get_started.html"},"Clang")," or follow installation instructions on the ",(0,o.yg)("a",{parentName:"li",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs")),(0,o.yg)("li",{parentName:"ul"},"Development headers of ",(0,o.yg)("inlineCode",{parentName:"li"},"GTK 3")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"libnotify")," (Follow installation instructions on the ",(0,o.yg)("a",{parentName:"li",href:"https://www.electronjs.org/docs/development/build-instructions-linux#prerequisites"},"electron docs"),")")),(0,o.yg)("h2",{id:"further-help"},"Further Help"),(0,o.yg)("p",null,"If you are still having issues setting up your computer you can find the full instructions on the ",(0,o.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/development/build-instructions-gn"},"electron documentation")," for your specific OS."))}c.isMDXComponent=!0},5356:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-win-1-b71ecf1138c3c9dd41dd60aac766c5ca.png"},1767:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python-win-2-fefde3a18dd053ca1e238b0b15587ab5.png"}}]);