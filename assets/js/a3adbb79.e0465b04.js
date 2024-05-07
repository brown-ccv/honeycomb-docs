"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[3992],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,m=c["".concat(s,".").concat(y)]||c[y]||p[y]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(8168),a=(n(6540),n(5680));const i={id:"ci",title:"Automated Builds"},r=void 0,l={unversionedId:"ci",id:"version-3.0.0/ci",title:"Automated Builds",description:"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs.",source:"@site/versioned_docs/version-3.0.0/CI.md",sourceDirName:".",slug:"/ci",permalink:"/honeycomb-docs/docs/3.0.0/ci",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.0.0/CI.md",tags:[],version:"3.0.0",lastUpdatedAt:1715090738,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"ci",title:"Automated Builds"},sidebar:"someSidebar",previous:{title:"Set up Firebase",permalink:"/honeycomb-docs/docs/3.0.0/firebase"},next:{title:"Configuration",permalink:"/honeycomb-docs/docs/3.0.0/configuration"}},s={},u=[{value:"What is CI/CD?",id:"what-is-cicd",level:2},{value:"What are Github Actions",id:"what-are-github-actions",level:2},{value:"Building the executables",id:"building-the-executables",level:2},{value:"Download your bundled executable to install and run your task",id:"download-your-bundled-executable-to-install-and-run-your-task",level:3},{value:"Uninstall the task",id:"uninstall-the-task",level:3},{value:"Windows",id:"windows",level:4},{value:"Firebase Hosting",id:"firebase-hosting",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...i}=e;return(0,a.yg)(c,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs."),(0,a.yg)("h2",{id:"what-is-cicd"},"What is CI/CD?"),(0,a.yg)("p",null,"CI/CD refers to Continuous Integration and either Continuous Delivery or Continuous Deployment. CI/CD enforces the automated building of bundled executables so that tasks can be easily installed without dependencies. In Honeycomb, CI/CD is managed by GitHub Actions."),(0,a.yg)("h2",{id:"what-are-github-actions"},"What are Github Actions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in ",(0,a.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"GitHub's documentation")),(0,a.yg)("p",null,"GitHub Actions are written as YML files inside a ",(0,a.yg)("inlineCode",{parentName:"p"},".github/worflows/")," folder in your repository."),(0,a.yg)("h2",{id:"building-the-executables"},"Building the executables"),(0,a.yg)("p",null,"Honeycomb includes workflows to build and create installers for Windows. Mac and Linux. These workflows exist for two configurations of the tasks:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Home: The app does not expect event code triggers and photodiode spots."),(0,a.yg)("li",{parentName:"ul"},"Clinic: The app expects event code triggers and photodiode spots.")),(0,a.yg)("p",null,"More specifically, the following workflows are included:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build.yaml"),": Every time an Pull Request (PR) is opened, or a push is made to the ",(0,a.yg)("inlineCode",{parentName:"li"},"main")," branch, the software is built and tests are run for all platforms and ",(0,a.yg)("inlineCode",{parentName:"li"},"home")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"clinic")," settings. This workflow does not build and upload desktop installers"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"package.yaml"),": Create installers for any/all platforms for the ",(0,a.yg)("inlineCode",{parentName:"li"},"home")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"clinic")," setting on demand ",(0,a.yg)("sup",null,"1"),". The installers/executables are uploaded as artifacts and are available for download from the GitHub Actions tab. This also builds PsiTurk version when linux or all operating systems are selected"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"release.yml"),": Every time a Tag is released, installers are created and uploaded as packages. This also builds PsiTurk version, and deploys to GitHub pages a web version of the application.")),(0,a.yg)("sup",null,"1")," On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage on private repositories. Uploading artifacts counts against your quota. You may consider configuring your workflows to only upload what you need. You can learn more about GitHub's storage limits in their [official documentation](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions).",(0,a.yg)("h3",{id:"download-your-bundled-executable-to-install-and-run-your-task"},"Download your bundled executable to install and run your task"),(0,a.yg)("p",null,"You can download the executable file from either the tagged release page or the GitHub actions page. To install, unzip the downloaded file, install and run."),(0,a.yg)("p",null,"The executable does not require installation of any additional software."),(0,a.yg)("h3",{id:"uninstall-the-task"},"Uninstall the task"),(0,a.yg)("h4",{id:"windows"},"Windows"),(0,a.yg)("p",null,"Go to System Settings: Add or remove programs. Look for the name of your task in the installed programs list, and Uninstall."),(0,a.yg)("p",null,"The executable does not require installation of any additional software."),(0,a.yg)("h2",{id:"firebase-hosting"},"Firebase Hosting"),(0,a.yg)("p",null,"Automatic deployment on a firebase hosting site can also be setup with github actions. Before proceeding with the following steps, please make sure that firebase is configured by following the ",(0,a.yg)("a",{parentName:"p",href:"/honeycomb-docs/docs/3.0.0/firebase"},"Getting started with firebase section under Set Up Firebase"),". Then run the following command in the terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"firebase init hosting:github\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Be sure to type "',(0,a.yg)("inlineCode",{parentName:"p"},"<username>/<repository name>"),'" exactly as it appears in GitHub when the prompt "For which GitHub repository would you like to set up a GitHub workflow?" appears.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'When you see the prompt "Set up the workflow to run a build script before every deploy?" enter ',(0,a.yg)("inlineCode",{parentName:"p"},"y"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Enter the following command for the prompt "What script should be run before every deploy?":'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-console"},"npm install && npm run build:firebase\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'When you see the prompt "Set up automatic deployment to your site\'s live channel when a PR is merged?" enter ',(0,a.yg)("inlineCode",{parentName:"p"},"y"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Enter "',(0,a.yg)("inlineCode",{parentName:"p"},"main"),'" for the prompt "What is the name of the GitHub branch associated with your site\'s live channel?"'))),(0,a.yg)("p",null,"There should be two new ",(0,a.yg)("inlineCode",{parentName:"p"},".yml")," files, ",(0,a.yg)("inlineCode",{parentName:"p"},"firebase-hosting-pull-request.yml")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"firebase-hosting-merge.yml"),", created in the ",(0,a.yg)("inlineCode",{parentName:"p"},".github/workflows")," directory for a deployment preview for each pull request and the official deployment when merged onto the main branch. Double check that the correct run script is present in both files."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Firebase actions",src:n(6092).A,width:"1921",height:"1042"})))}p.isMDXComponent=!0},6092:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/firebase-actions-1987798b3a8512df9a5c16bd8aa5f1c5.png"}}]);