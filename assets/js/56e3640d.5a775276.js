"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[1837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={id:"ci",title:"Automated Builds"},r=void 0,l={unversionedId:"ci",id:"version-1.1.0/ci",title:"Automated Builds",description:"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs.",source:"@site/versioned_docs/version-1.1.0/CI.md",sourceDirName:".",slug:"/ci",permalink:"/honeycomb-docs/docs/1.1.0/ci",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/CI.md",tags:[],version:"1.1.0",lastUpdatedAt:1685043055,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"ci",title:"Automated Builds"},sidebar:"version-1.1.0/someSidebar",previous:{title:"Version Control",permalink:"/honeycomb-docs/docs/1.1.0/version_control"},next:{title:"Configuration",permalink:"/honeycomb-docs/docs/1.1.0/configuration"}},s={},d=[{value:"What is CI/CD:",id:"what-is-cicd",level:2},{value:"What are Github Actions",id:"what-are-github-actions",level:2},{value:"Building the executables",id:"building-the-executables",level:2},{value:"Download your bundled executable to install and run your task",id:"download-your-bundled-executable-to-install-and-run-your-task",level:2},{value:"Uninstall the task",id:"uninstall-the-task",level:2},{value:"Windows",id:"windows",level:4}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs."),(0,a.kt)("h2",{id:"what-is-cicd"},"What is CI/CD:"),(0,a.kt)("p",null,"Continuous Integration, Continuous Deployment: CI/CD or CICD refers to continuous integration and either continuous delivery or continuous deployment. CI/CD enforces the automated building of bundled executables so that tasks can be easily installed without dependencies. In Honeycomb, CI/CD is managed by GitHub Actions. "),(0,a.kt)("h2",{id:"what-are-github-actions"},"What are Github Actions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"GitHub's documentation"),"."),(0,a.kt)("p",null,"GitHub Actions are written as YAML files inside a ",(0,a.kt)("inlineCode",{parentName:"p"},".github/worflows/")," folder in your repository."),(0,a.kt)("h2",{id:"building-the-executables"},"Building the executables"),(0,a.kt)("p",null,"Honeycomb includes workflows to build and create installers for Windows, Mac, and Linux. These workflows exist for two configurations of the tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Home: The app does not expect event code triggers and photodiode spots. "),(0,a.kt)("li",{parentName:"ul"},"Clinic: The app expects event code triggers and photodiode spots. ")),(0,a.kt)("p",null,"More specifically, the following workflows are included:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build.yaml"),": Every time an Pull Request (PR) is opened, or a push is made to the ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch, the software is built and tests are run for all platforms and ",(0,a.kt)("inlineCode",{parentName:"li"},"home")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clinic")," settings. This workflow does not build and upload desktop installers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.yaml"),": Create installers for any/all platforms for the ",(0,a.kt)("inlineCode",{parentName:"li"},"home")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clinic")," setting on demand ",(0,a.kt)("sup",null,"1"),". The installers/executables are uploaded as artifacts and are available for download from the GitHub Actions tab. This also builds PsiTurk version when linux or all operating systems are selected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"release.yml"),": Every time a Tag is released, installers are created and uploaded as packages. This also builds PsiTurk version, and deploys to GitHub pages a web version of the application. ")),(0,a.kt)("sup",null,"1")," On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage on private repositories. Uploading artifacts counts against your quota. You may consider configuring your workflows to only upload what you need.",(0,a.kt)("h2",{id:"download-your-bundled-executable-to-install-and-run-your-task"},"Download your bundled executable to install and run your task"),(0,a.kt)("p",null,"You can download the executable file from either the tagged release page or the GitHub actions page. To install, unzip the downloaded file and allow to run. "),(0,a.kt)("p",null,"The executable does not require installation of any additional software. "),(0,a.kt)("h2",{id:"uninstall-the-task"},"Uninstall the task"),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Go to System Settings: Add or remove programs. Look for the name of your task in the installed programs list, and Uninstall."))}p.isMDXComponent=!0}}]);