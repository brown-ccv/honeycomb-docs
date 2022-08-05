"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[378],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(3117),i=(n(7294),n(3905));const a={id:"ci",title:"Automated Builds"},r=void 0,l={unversionedId:"ci",id:"ci",title:"Automated Builds",description:"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs.",source:"@site/docs/CI.md",sourceDirName:".",slug:"/ci",permalink:"/honeycomb-docs/docs/ci",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/CI.md",tags:[],version:"current",lastUpdatedAt:1659725350,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{id:"ci",title:"Automated Builds"},sidebar:"someSidebar",previous:{title:"Set up Firebase",permalink:"/honeycomb-docs/docs/firebase"},next:{title:"Configuration",permalink:"/honeycomb-docs/docs/configuration"}},s={},u=[{value:"What is CI/CD:",id:"what-is-cicd",level:2},{value:"What are Github Actions",id:"what-are-github-actions",level:2},{value:"Building the executables",id:"building-the-executables",level:2},{value:"Github Actions for firebase hosting",id:"github-actions-for-firebase-hosting",level:2},{value:"Download your bundled executable to install and run your task",id:"download-your-bundled-executable-to-install-and-run-your-task",level:2},{value:"Uninstall the task",id:"uninstall-the-task",level:2},{value:"Windows",id:"windows",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs."),(0,i.kt)("h2",{id:"what-is-cicd"},"What is CI/CD:"),(0,i.kt)("p",null,"Continuous Integration, Continuous Deployment: CI/CD or CICD refers to continuous integration and either continuous delivery or continuous deployment. CI/CD enforces the automated building of bundled executables so that tasks can be easily installed without dependencies. In Honeycomb, CI/CD is managed by GitHub Actions. "),(0,i.kt)("h2",{id:"what-are-github-actions"},"What are Github Actions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"GitHub's documentation")),(0,i.kt)("p",null,"GitHub Actions are written as YML files inside a ",(0,i.kt)("inlineCode",{parentName:"p"},".github/worflows/")," folder in your repository."),(0,i.kt)("h2",{id:"building-the-executables"},"Building the executables"),(0,i.kt)("p",null,"Honeycomb includes workflows to build and create installers for Windows. Mac and Linux. These workflows exist for two configurations of the tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Home: The app does not expect event code triggers and photodiode spots. "),(0,i.kt)("li",{parentName:"ul"},"Clinic: The app expects event code triggers and photodiode spots. ")),(0,i.kt)("p",null,"More specifically, the following workflows are included:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build.yaml"),": Every time an Pull Request (PR) is opened, or a push is made to the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch, the software is built and tests are run for all platforms and ",(0,i.kt)("inlineCode",{parentName:"li"},"home")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"clinic")," settings. This workflow does not build and upload desktop installers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package.yaml"),": Create installers for any/all platforms for the ",(0,i.kt)("inlineCode",{parentName:"li"},"home")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"clinic")," setting on demand ",(0,i.kt)("sup",null,"1"),". The installers/executables are uploaded as artifacts and are available for download from the GitHub Actions tab. This also builds PsiTurk version when linux or all operating systems are selected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"release.yml"),": Every time a Tag is released, installers are created and uploaded as packages. This also builds PsiTurk version, and deploys to GitHub pages a web version of the application. ")),(0,i.kt)("sup",null,"1")," On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage on private repositories. Uploading artifacts counts against your quota. You may consider configuring your workflows to only upload what you need. You can learn more about GitHub's storage limits in their [official documentation](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions).",(0,i.kt)("h2",{id:"github-actions-for-firebase-hosting"},"Github Actions for firebase hosting"),(0,i.kt)("p",null,"Automatic deployment on a firebase hosting site can also be setup with github actions. Before proceeding with the follwing steps, please make sure that firebase is configured by following the ",(0,i.kt)("a",{parentName:"p",href:"/honeycomb-docs/docs/firebase"},"Getting started with firebase section under Set Up Firebase")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase init hosting:github")," in the terminal and follow the CLI prompts to start setting up the github actions.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For the github directory question, select your task github directory."),(0,i.kt)("li",{parentName:"ul"},"When prompted with the npm command, type ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install && npm run build:firebase"))))),(0,i.kt)("p",null,"There should be two new ",(0,i.kt)("inlineCode",{parentName:"p"},".yml")," files, ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase-hosting-pull-request.yml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase-hosting-merge.yml"),", created in the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory for a deployment preview for each pull request and the official deployment when merged onto the main branch."),(0,i.kt)("h2",{id:"download-your-bundled-executable-to-install-and-run-your-task"},"Download your bundled executable to install and run your task"),(0,i.kt)("p",null,"You can download the executable file from either the tagged release page or the GitHub actions page. To install, unzip the downloaded file, install and run. "),(0,i.kt)("p",null,"The executable does not require installation of any additional software. "),(0,i.kt)("h2",{id:"uninstall-the-task"},"Uninstall the task"),(0,i.kt)("h4",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Go to System Settings: Add or remove programs. Look for the name of your task in the installed programs list, and Uninstall."))}c.isMDXComponent=!0}}]);