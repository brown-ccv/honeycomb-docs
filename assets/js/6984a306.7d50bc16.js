"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"quick_start",title:"Quick Start"},i=void 0,s={unversionedId:"quick_start",id:"quick_start",title:"Quick Start",description:"Before we can get started with Honeycomb, we must make sure our machines have the required prerequisites for Honeycomb to run.",source:"@site/docs/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/honeycomb-docs/docs/quick_start",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/quick_start.md",tags:[],version:"current",lastUpdatedAt:1660924706,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"quick_start",title:"Quick Start"},sidebar:"someSidebar",previous:{title:"Project Organization",permalink:"/honeycomb-docs/docs/folders"},next:{title:"Version Control",permalink:"/honeycomb-docs/docs/version_control"}},l={},c=[{value:"1. Install a Package Manager",id:"1-install-a-package-manager",level:3},{value:"MacOS Package Manager (Homebrew)",id:"macos-package-manager-homebrew",level:4},{value:"Set up Homebrew on your PATH",id:"set-up-homebrew-on-your-path",level:5},{value:"Windows Package Manager (Chocolatey)",id:"windows-package-manager-chocolatey",level:4},{value:"2. Start your new task from our template repository",id:"2-start-your-new-task-from-our-template-repository",level:3},{value:"3. Install Prerequisites",id:"3-install-prerequisites",level:3},{value:"Running Brewfile (macOS)",id:"running-brewfile-macos",level:4},{value:"Using Chocolatey (Windows)",id:"using-chocolatey-windows",level:4},{value:"Python on Windows",id:"python-on-windows",level:5},{value:"4. Change name and description",id:"4-change-name-and-description",level:3},{value:"5. Install NPM Packages",id:"5-install-npm-packages",level:3},{value:"Metadata",id:"metadata",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"Scripts",id:"scripts",level:4},{value:"6. Run the task in dev mode",id:"6-run-the-task-in-dev-mode",level:3},{value:"Scripts on Windows",id:"scripts-on-windows",level:4},{value:"7. Learn about configuring your task for different environments",id:"7-learn-about-configuring-your-task-for-different-environments",level:3},{value:"8. Check out the data",id:"8-check-out-the-data",level:3},{value:"9. Quit the <strong>task</strong>",id:"9-quit-the-task",level:3},{value:"10. Run automated tests",id:"10-run-automated-tests",level:3},{value:"Testing on Linux",id:"testing-on-linux",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before we can get started with Honeycomb, we must make sure our machines have the required prerequisites for Honeycomb to run."),(0,o.kt)("h3",{id:"1-install-a-package-manager"},"1. Install a Package Manager"),(0,o.kt)("p",null,"There are some prerequisites that are required across all operating systems to run Honeycomb. We will be using a package manager to install these dependencies."),(0,o.kt)("h4",{id:"macos-package-manager-homebrew"},"MacOS Package Manager (Homebrew)"),(0,o.kt)("p",null,"Paste the following in a macOS Terminal and press enter to install Homebrew, then follow the steps in the terminal screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"When this command is run, additional installations may be automatically added by Homebrew based on your machine's configurations. Homebrew will prompt you to ",(0,o.kt)("inlineCode",{parentName:"em"},"Press RETURN to continue or any other key to abort"),". Please continue with these installations by pressing ",(0,o.kt)("inlineCode",{parentName:"em"},"Return"))),(0,o.kt)("h5",{id:"set-up-homebrew-on-your-path"},"Set up Homebrew on your PATH"),(0,o.kt)("p",null,"To make Homebrew available in your shell, we need to add the Homebrew installation location to our ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". This should be done automatically on macOS 10.14 Mojave or newer. For older versions, or to do it manually run the following command in your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'PATH=\"/usr/local/bin:$PATH\"' >> ~/.bash_profile\n")),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"zsh"),", also add to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file."),(0,o.kt)("h4",{id:"windows-package-manager-chocolatey"},"Windows Package Manager (Chocolatey)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org"},"Chocolatey")," is a package manager for Windows - essentially the equivalent of Homebrew for MacOs. It installs software from the command line and makes updates much easier. Run Powershell with administrator privileges and paste the following command:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run Powershell as an admin form the start menu",src:n(6907).Z,width:"783",height:"679"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n")),(0,o.kt)("h3",{id:"2-start-your-new-task-from-our-template-repository"},"2. Start your new task from our template repository"),(0,o.kt)("p",null,"To start a new task locally, in development mode follow these steps:"),(0,o.kt)("p",null,"The simplest way to get started is creating a new repository using Honeycomb as a template. This option will allow you to generate a new repository with the same directory structure and files as an existing repository."),(0,o.kt)("p",null,"Creating a repository from a template is similar to forking a repository, but there are important differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit."),(0,o.kt)("li",{parentName:"ul"},"Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph."),(0,o.kt)("li",{parentName:"ul"},"A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb"},"https://github.com/brown-ccv/honeycomb")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this template")," on the top right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Use this template",src:n(6689).Z,width:"2408",height:"1212"})),(0,o.kt)("p",null,"Then select the organization and the name of your repository and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"create repository from template"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create repository",src:n(7443).Z,width:"2408",height:"1212"})),(0,o.kt)("p",null,"Alternatively, you can use GitHub CLI to create a new project based on the Honeycomb template repository. First, install GitHub CLI (",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"https://cli.github.com/"),"), then run on your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo create your-new-task-name --template brown-ccv/honeycomb\n")),(0,o.kt)("p",null,"You can now move into the directory that was just created"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd your-new-task-name\n")),(0,o.kt)("h3",{id:"3-install-prerequisites"},"3. Install Prerequisites"),(0,o.kt)("h4",{id:"running-brewfile-macos"},"Running Brewfile (macOS)"),(0,o.kt)("p",null,"A Brewfile is a script that developers can use to install multiple software tools that are required to run an application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew bundle\n")),(0,o.kt)("p",null,"This will call the ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," command which will install all the listed packages to your project."),(0,o.kt)("h4",{id:"using-chocolatey-windows"},"Using Chocolatey (Windows)"),(0,o.kt)("p",null,"Chocolatey will install multiple software packages if given a configuration file. The honeycomb template repository includes one! See ",(0,o.kt)("a",{parentName:"p",href:"/honeycomb-docs/docs/setup_details#chocolatey"},"Setup Details")," for more information about using chocolatey."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"choco install chocolatey.config\n")),(0,o.kt)("h5",{id:"python-on-windows"},"Python on Windows"),(0,o.kt)("p",null,"In addition to the packages installed by Chocolatey you need to complete your Python installation using ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv"),". Please complete the steps in ",(0,o.kt)("a",{parentName:"p",href:"/honeycomb-docs/docs/setup_details#python-on-windows-pyenv"},"Python on Windows")," before continuing."),(0,o.kt)("h3",{id:"4-change-name-and-description"},"4. Change name and description"),(0,o.kt)("p",null,"It's best practice to create a new branch whenever we look to make changes and/or add a new feature. Your IDE may have a way to do this or it can always be done on the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b <branch-name>\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and edit it to reflect your app name and description (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"repository"),"). Save your changes and commit them to git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m "Commit message goes here!"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Checkout the ",(0,o.kt)("a",{parentName:"em",href:"https://brown-ccv.github.io/honeycomb-docs/docs/version_control"},"Version Control")," page for more information about working with git")),(0,o.kt)("h3",{id:"5-install-npm-packages"},"5. Install NPM Packages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is a command-line utility for Node.js that makes it easy for you to install packages and maintain them throughout the lifecycle of your application. With Node.js installed in Step 0, we are now able to utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," command in the terminal."),(0,o.kt)("p",null,"Please run the following command to trigger the installation of all the dependencies relevant to this project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,o.kt)("p",null,"Honeycomb, like most applications, contains a template called ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". This file contains three distinctive parts that we interact with using a series of npm commands."),(0,o.kt)("h4",{id:"metadata"},"Metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "honeycomb",\n "description": "all-in-one task starter app with jsPsych + React + Electron + psiturk ",\n "author": {\n   "name": "Brown CCV",\n   "email": "ccv-bot@brown.edu",\n   "url": "ccv.brown.edu"\n  }\n}\n')),(0,o.kt)("p",null,"The metadata provides information about the project such as the name, author and description."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@brown-ccv/behavioral-task-trials": "^2.0.0",\n  "@fortawesome/fontawesome-free": "^5.9.0",\n  "bootstrap": "^5.2.0-beta1",\n  "electron-log": "^4.4.8",\n  "electron-squirrel-startup": "^1.0.0",\n  "event-marker": "git+https://github.com/brown-ccv/event-marker.git",\n  ...\n}\n')),(0,o.kt)("p",null,"Dependencies are packages that the project rely on for it to function properly."),(0,o.kt)("p",null,"They are formatted in specific key/value pairs where every key is a name of the package and the value is the version range that\u2019s acceptable."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("em",{parentName:"p"},"If any changes are made to the dependencies section of the ",(0,o.kt)("inlineCode",{parentName:"em"},"package.json"),", you must run ",(0,o.kt)("inlineCode",{parentName:"em"},"npm install")," again to download the newly updated list of dependencies.")),(0,o.kt)("h4",{id:"scripts"},"Scripts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "commit": "git-cz",\n  "postinstall": "node version.js && npm run rebuild",\n  "start": "cross-env BROWSER=\\"none\\" NODE_PATH=\\"./src\\" react-scripts start",\n  "start:browser": "react-scripts start",\n  "test": "react-scripts test",\n  "prebuild": "electron-rebuild",\n  "build": "react-scripts build",\n  ...\n}\n')),(0,o.kt)("p",null,"The scripts section contains a number of commands you can run."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check out the ",(0,o.kt)("a",{parentName:"em",href:"https://brown-ccv.github.io/honeycomb-docs/docs/npm_scripts"},"NPM Scripts")," page for more information about the different scripts you can run.")),(0,o.kt)("h3",{id:"6-run-the-task-in-dev-mode"},"6. Run the task in dev mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,o.kt)("p",null,"This will launch an electron window with the task and inspector open. It will hot-reload whenever changes are made to the app."),(0,o.kt)("h4",{id:"scripts-on-windows"},"Scripts on Windows"),(0,o.kt)("p",null,"Windows users must use a Git Bash terminal to execute  scripts such as ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),". This is because node scripts are designed to execute on a Unix style command line environment but neither Command Prompt nor PowerShell are Unix based."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.shanebart.com/set-default-vscode-terminal/"},"these instructions")," to set git bash as your default terminal on VS Code."),(0,o.kt)("h3",{id:"7-learn-about-configuring-your-task-for-different-environments"},"7. Learn about configuring your task for different environments"),(0,o.kt)("p",null,"HoneyComb tasks can be configured to run as a web app in Firebase, as desktop application via electron, to receive port signals from EEG, cameras, foot pedals and more. To learn more about how to configure your task for these different scenarios, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration"},"Configuration Section"),"."),(0,o.kt)("h3",{id:"8-check-out-the-data"},"8. Check out the data"),(0,o.kt)("p",null,"The data is saved throughout the task. When running as a Desktop App, data is saved to the user's app directory. When running as Web App in Firebase, data is stored in the FireStore."),(0,o.kt)("p",null,"For a Desktop App, the location of the is logged at the beginning of the task wherever you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),". Data is also stored in a folder that is generated by the app, which should be found on the desktop."),(0,o.kt)("h3",{id:"9-quit-the-task"},"9. Quit the ",(0,o.kt)("strong",{parentName:"h3"},"task")),(0,o.kt)("p",null,"If you want to quit in the middle of the task, you can use these keyboard shortcuts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shortcut"},"Ctrl+W (for PC/Windows)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shortcut"},"Cmd+Q (for Mac)\n")),(0,o.kt)("p",null,"Partial data will be saved."),(0,o.kt)("h3",{id:"10-run-automated-tests"},"10. Run automated tests"),(0,o.kt)("p",null,"Automated tests can tell a user whether the code is working as expected or if recent changes have broken previous functionality. Running automated tests is a good idea whenever you're getting started, merging updates, or making custom changes."),(0,o.kt)("p",null,"To run the tests interactively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm test\n")),(0,o.kt)("p",null,"Or non-interactively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"CI=true npm test\n")),(0,o.kt)("h4",{id:"testing-on-linux"},"Testing on Linux"),(0,o.kt)("p",null,"When running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," on Linux, you might get an error that mentions ",(0,o.kt)("inlineCode",{parentName:"p"},"ENOSPC"),'. This is because the test runner creates "watchers" for files in the project repo in order to automatically re-run tests as the files change. Linux limits the number of watchers that can be created at a time and the default limit may be smaller than the number of files in the repo.'),(0,o.kt)("p",null,'This is a "known issue" with some test runners on Linux, as in discussions ',(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62206460/jest-watch-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here"),"."),(0,o.kt)("p",null,"One simple workaround is to increase the number of allowed watchers (100000 seems to be sufficient):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command that initially fails with ",(0,o.kt)("inlineCode",{parentName:"li"},"ENOSPC"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm test")),(0,o.kt)("li",{parentName:"ul"},'Check the configured limit on "watchers": ',(0,o.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,o.kt)("li",{parentName:"ul"},"Edit the relevant Linux config file: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo vim /etc/sysctl.conf")),(0,o.kt)("li",{parentName:"ul"},"Add a line at the end of the config file: ",(0,o.kt)("inlineCode",{parentName:"li"},"fs.inotify.max_user_watches=100000")),(0,o.kt)("li",{parentName:"ul"},"Save, exit, and reload the config file: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo sysctl -p")),(0,o.kt)("li",{parentName:"ul"},"Check that the limit has changed: ",(0,o.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,o.kt)("li",{parentName:"ul"},"Retry the initial command, which should now succeed: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm test"))))}u.isMDXComponent=!0},6907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/powershell_admin-33d18a547790e540d5630c7626b766c6.png"},6689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template_0-a1b5129c7526d910bfd8ca1b78464793.png"},7443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template_1-e2b5ed212b0dc62bd3a18b45337a1872.png"}}]);