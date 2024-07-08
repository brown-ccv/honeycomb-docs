"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[7620],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>y});var n=o(6540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(y,r(r({ref:t},p),{},{components:o})):n.createElement(y,r({ref:t},p))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3836:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(8168),a=(o(6540),o(5680));const i={id:"ci_cd",slug:"/ci_cd",title:"Continuous Integration / Deployment",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows"},r=void 0,s={unversionedId:"project_organization/ci_cd",id:"project_organization/ci_cd",title:"Continuous Integration / Deployment",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows",source:"@site/docs/project_organization/ci_cd.mdx",sourceDirName:"project_organization",slug:"/ci_cd",permalink:"/docs/ci_cd",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/project_organization/ci_cd.mdx",tags:[],version:"current",lastUpdatedAt:1720468390,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"ci_cd",slug:"/ci_cd",title:"Continuous Integration / Deployment",description:"Descriptions of the GitHub Actions for Honeycomb's CI/CD workflows"},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/docs/environment_variables"},next:{title:"Local Application",permalink:"/docs/local_application"}},l={},c=[{value:"What are Github Actions",id:"what-are-github-actions",level:2},{value:"Honeycomb&#39;s CI/CD Workflows",id:"honeycombs-cicd-workflows",level:2},{value:"Firebase",id:"firebase",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Honeycomb leverages Continuous Integration/Deployment (CI/CD) to build the code and installers for different operating systems and settings, both on demand and automatically as code is pushed to the repository. Honeycomb's CI/CD is managed by GitHub Actions. These workflows provide Honeycomb's foundation and can easily be modified or extended to meet more needs."),(0,a.yg)("h2",{id:"what-are-github-actions"},"What are Github Actions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," automate tasks within the development life cycle of your software. GitHub Actions consist of a series of commands that run after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command to build and test your software. You can learn more about the events that trigger workflows in ",(0,a.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"},"GitHub's documentation")),(0,a.yg)("p",null,"GitHub Actions are written as YML files inside the ",(0,a.yg)("inlineCode",{parentName:"p"},".github/workflows/")," folder of your repository."),(0,a.yg)("h2",{id:"honeycombs-cicd-workflows"},"Honeycomb's CI/CD Workflows"),(0,a.yg)("p",null,"Honeycomb includes workflows to build and create installers for Windows, Mac and Linux, as well as for deploying to Firebase. These workflows exist for two configurations of the tasks:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Home"),": The app does not expect event code triggers and photodiode spots."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Clinic"),": The app expects event code triggers and photodiode spots.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Event code triggers and photodiode spots can only be used on local applications! They will not appear when Honeycomb is deployed on the web.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"pull_request.yaml"),": Every time a Pull Request (PR) is created the software is built and tests are run for all platforms with ",(0,a.yg)("inlineCode",{parentName:"p"},"home")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"clinic")," settings. This workflow does not upload desktop installers.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"release.yml"),": Every time a release is created, edited, or published installers for the Honeycomb app are created and uploaded to the release. This also builds a PsiTurk version and deploys the app to GitHub pages.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"workflow-package.yaml"),": Create installers for any/all platforms for the ",(0,a.yg)("inlineCode",{parentName:"p"},"home")," and/or ",(0,a.yg)("inlineCode",{parentName:"p"},"clinic")," setting on demand. The installers/executables are uploaded as artifacts and are available for download from the GitHub Actions tab. This also builds a PsiTurk version when linux or all operating systems are selected."),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"On-demand workflows are triggered manually from the GitHub Actions tab. Each GitHub organization/individual has a quota on storage in private repositories. Uploading artifacts counts against your quota. You may consider configuring your workflows to only upload what you need. You can learn more about GitHub's storage limits in their ",(0,a.yg)("a",{parentName:"p",href:"https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions"},"official documentation"),"."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"workflow-delete-artifacts.yaml"),": On-demand workflow for deleting artifacts form your GitHub repository. This can be useful when the ",(0,a.yg)("inlineCode",{parentName:"p"},"package.yaml")," workflow is run multiple times and you want to delete the artifacts from previous runs."))),(0,a.yg)("h3",{id:"firebase"},"Firebase"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"firebase-hosting-merge.yaml"),": Deploys the web version of the application to Firebase when a PR is merged into the ",(0,a.yg)("inlineCode",{parentName:"li"},"main")," branch."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"firebase-hosting-pull-request.yaml"),": Creates a preview version of the application with Firebase when a PR is opened.",(0,a.yg)("admonition",{parentName:"li",type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"While this workflow uses a preview link it does use the production database. Ensure you use a test study to not conflict with your participant data.")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"These workflows may be safely deleted if you are not planning to ever use Firebase.")))}u.isMDXComponent=!0}}]);