"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[8503],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var o=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=i,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(8168),i=(n(6540),n(5680));const a={id:"ci",slug:"/ci",title:"Continuous Integration",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows"},r=void 0,l={unversionedId:"ci",id:"version-3.1.x/ci",title:"Continuous Integration",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows",source:"@site/versioned_docs/version-3.1.x/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/docs/3.1.x/ci",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.1.x/ci.mdx",tags:[],version:"3.1.x",lastUpdatedAt:1719431750,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"ci",slug:"/ci",title:"Continuous Integration",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows"},sidebar:"mySidebar",previous:{title:"Deploy online",permalink:"/docs/3.1.x/deploy_online"},next:{title:"Version Control",permalink:"/docs/3.1.x/version_control"}},s={},u=[{value:"What is CI/CD?",id:"what-is-cicd",level:2},{value:"What are Github Actions",id:"what-are-github-actions",level:2},{value:"Building the executables",id:"building-the-executables",level:2},{value:"Download your bundled executable to install and run your task",id:"download-your-bundled-executable-to-install-and-run-your-task",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings on demand or automatically as the code is pushed to the repository. In this section, we provide a short introduction to definitions. We explain the GitHub Actions included with Honeycomb. These workflows should provide a foundation but can easily be modified or extended to meet more needs."),(0,i.yg)("h2",{id:"what-is-cicd"},"What is CI/CD?"),(0,i.yg)("p",null,"CI/CD refers to Continuous Integration and either Continuous Delivery or Continuous Deployment. CI/CD enforces the automated building of bundled executables so that tasks can be easily installed without dependencies. In Honeycomb, CI/CD is managed by GitHub Actions."),(0,i.yg)("h2",{id:"what-are-github-actions"},"What are Github Actions"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"GitHub's documentation")),(0,i.yg)("p",null,"GitHub Actions are written as YML files inside a ",(0,i.yg)("inlineCode",{parentName:"p"},".github/workflows/")," folder in your repository."),(0,i.yg)("h2",{id:"building-the-executables"},"Building the executables"),(0,i.yg)("p",null,"Honeycomb includes workflows to build and create installers for Windows, Mac and Linux. These workflows exist for two configurations of the tasks:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Home: The app does not expect event code triggers and photodiode spots."),(0,i.yg)("li",{parentName:"ul"},"Clinic: The app expects event code triggers and photodiode spots.")),(0,i.yg)("p",null,"More specifically, the following workflows are included:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"build.yaml"),": Every time an Pull Request (PR) is opened, or a push is made to the ",(0,i.yg)("inlineCode",{parentName:"li"},"main")," branch, the software is built and tests are run for all platforms and ",(0,i.yg)("inlineCode",{parentName:"li"},"home")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"clinic")," settings. This workflow does not build and upload desktop installers"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"package.yaml"),": Create installers for any/all platforms for the ",(0,i.yg)("inlineCode",{parentName:"li"},"home")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"clinic")," setting on demand ",(0,i.yg)("sup",null,"1"),". The installers/executables are uploaded as artifacts and are available for download from the GitHub Actions tab. This also builds a PsiTurk version when linux or all operating systems are selected."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"release.yml"),": Every time a Tag is released, installers are created and uploaded as packages. This also builds a PsiTurk version, and deploys to GitHub pages a web version of the application.")),(0,i.yg)("sup",null,"1")," On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage in private repositories. Uploading artifacts counts against your quota. You may consider configuring your workflows to only upload what you need. You can learn more about GitHub's storage limits in their [official documentation](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions).",(0,i.yg)("h3",{id:"download-your-bundled-executable-to-install-and-run-your-task"},"Download your bundled executable to install and run your task"),(0,i.yg)("p",null,"You can download the executable file from either the tagged release page or the GitHub actions page. To install, unzip the downloaded file, install, and run."),(0,i.yg)("p",null,"The executable does not require installation of any additional software."))}p.isMDXComponent=!0}}]);