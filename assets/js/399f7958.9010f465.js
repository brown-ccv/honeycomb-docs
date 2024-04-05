"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[2525],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),d=o,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||n;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(8168),o=(r(6540),r(5680));const n={id:"version_control",slug:"/version_control",title:"Version Control",description:"Version control basics with Git and GitHub"},i=void 0,l={unversionedId:"further_reading/version_control",id:"version-3.2.x/further_reading/version_control",title:"Version Control",description:"Version control basics with Git and GitHub",source:"@site/versioned_docs/version-3.2.x/further_reading/version_control.mdx",sourceDirName:"further_reading",slug:"/version_control",permalink:"/honeycomb-docs/docs/3.2.x/version_control",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.2.x/further_reading/version_control.mdx",tags:[],version:"3.2.x",lastUpdatedAt:1712343346,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"version_control",slug:"/version_control",title:"Version Control",description:"Version control basics with Git and GitHub"},sidebar:"mySidebar",previous:{title:"Event Triggers",permalink:"/honeycomb-docs/docs/3.2.x/event_triggers"},next:{title:"JavaScript",permalink:"/honeycomb-docs/docs/3.2.x/javascript"}},s={},c=[{value:"Git Overview",id:"git-overview",level:2},{value:"Create a Pull Request",id:"create-a-pull-request",level:2},{value:"Stay up-to-date with Honeycomb template repo",id:"stay-up-to-date-with-honeycomb-template-repo",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Git Branches",id:"git-branches",level:3},{value:"Basic Workflow",id:"basic-workflow",level:3},{value:"Comment styles",id:"comment-styles",level:3},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Git Commands",id:"git-commands",level:3},{value:"Alternative options",id:"alternative-options",level:3},{value:"VS Code",id:"vs-code",level:4},{value:"GitHub Desktop",id:"github-desktop",level:4}],p={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"git-overview"},"Git Overview"),(0,o.yg)("p",null,"Git is a version control system that enables you to track changes to files. With Git, you are able to revert files back to previous versions, restore deleted files, remove added files and even track down where a particular line of code was introduced."),(0,o.yg)("p",null,"Nearly all operations that are performed by Git are in your local computing environment, for the exception of few used purely to synchronize with a remote. Some of the most common git operations are depicted below."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Git basics",src:r(7105).A,width:"874",height:"509"})),(0,o.yg)("p",null,"If you would like to make any changes to current repository, it is always good to start with creating a feature branch, where you can save all the changes."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Example branch",src:r(3376).A,width:"773",height:"337"})),(0,o.yg)("h2",{id:"create-a-pull-request"},"Create a Pull Request"),(0,o.yg)("p",null,"Pull requests are useful before you merge your branch with the main branch. You can request a review from your colleagues and check for any conflicts with the main branch. After you pushed all the changes to your branch, you can go to the original GitHub repository and click on the pull request."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"git pr",src:r(8175).A,width:"2408",height:"1330"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"git pr info",src:r(9435).A,width:"2408",height:"1902"})),(0,o.yg)("h2",{id:"stay-up-to-date-with-honeycomb-template-repo"},"Stay up-to-date with Honeycomb template repo"),(0,o.yg)("p",null,"Honeycomb is an active project, and will be updated with new features over time. To bring changes from the Honeycomb template repository to your task:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add Honeycomb as an additional remote as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git remote add honeycomb https://github.com/brown-ccv/honeycomb.git\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Fetch the changes made to Honeycomb"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git fetch --all\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Merge the current Honeycomb repo"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git merge honeycomb/main --allow-unrelated histories\n")))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},'There will almost certainly be many "merge conflicts" when merging in changes form the template repository. It is tedious but extremely import to not accidentally overwrite your task when resolving these conflicts')),(0,o.yg)("h2",{id:"best-practices"},"Best Practices"),(0,o.yg)("h3",{id:"git-branches"},"Git Branches"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"main")," is the default branch and where releases are made from. This branch should be in clean/working conditions at all times. This branch is protected and can only be merged from Pull Requests for topic branches.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"topic")," branches are created for new features, fixes, or really any changes. E.g, ",(0,o.yg)("inlineCode",{parentName:"p"},"fix-task-trial2-stuck-button")))),(0,o.yg)("p",null,"This flow is sometimes referred to as ",(0,o.yg)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/gitlab-basics/feature_branch_workflow.html"},"Feature Branch Workflow")),(0,o.yg)("h3",{id:"basic-workflow"},"Basic Workflow"),(0,o.yg)("p",null,"We recommend using a simple flow based on following rules:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Use topic/feature branches, no direct commits on main."),(0,o.yg)("li",{parentName:"ul"},"Perform tests and code reviews before merges into main, not afterwards."),(0,o.yg)("li",{parentName:"ul"},"Every branch starts from main, and targets main."),(0,o.yg)("li",{parentName:"ul"},"Commit messages reflect intent.")),(0,o.yg)("h3",{id:"comment-styles"},"Comment styles"),(0,o.yg)("p",null,"We encourage using ",(0,o.yg)("a",{parentName:"p",href:"http://commitizen.github.io/cz-cli/"},"Commitizen"),", a great tool for recording descriptions of commits in a standardized format which makes it easier for people to understand what changed in the code."),(0,o.yg)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,o.yg)("h3",{id:"git-commands"},"Git Commands"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"left"},"Command"),(0,o.yg)("th",{parentName:"tr",align:"left"},"Brief"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git add ","<","files",">"),(0,o.yg)("td",{parentName:"tr",align:"left"},"add a file to next commit ","(","stage",")")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git commit -m ","<","message",">"),(0,o.yg)("td",{parentName:"tr",align:"left"},"commit staged files")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git push"),(0,o.yg)("td",{parentName:"tr",align:"left"},"upload staged commit to repo")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git pull"),(0,o.yg)("td",{parentName:"tr",align:"left"},"get remote repo commits and download ","(","try and resolve conflicts",")")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git clone ","<","url",">"),(0,o.yg)("td",{parentName:"tr",align:"left"},"download entire repository")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},"git checkout ","<","branch",">"),(0,o.yg)("td",{parentName:"tr",align:"left"},"checkout and create the branch you want to use")))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'# create branch with your feature\ngit checkout -b feature_name\n# check the status of your repositoey\ngit status\n# commit file contents to the local repository\ngit commit -m "My feature is ready"\n\n# specific message\n# push file contents to the remote (i.e. cloud) repository\ngit push origin feature_name\n')),(0,o.yg)("h3",{id:"alternative-options"},"Alternative options"),(0,o.yg)("h4",{id:"vs-code"},"VS Code"),(0,o.yg)("p",null,"Most IDEs have some built in tools for working with Git and VS Code is no exception. Check out ",(0,o.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/sourcecontrol/overview"},"this overview")," of source control in VS Code!"),(0,o.yg)("h4",{id:"github-desktop"},"GitHub Desktop"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop")," is a GUI application for working with git. It is one of the programs installed as a prerequisite of Honeycomb. Check out ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop"},"this overview")," of source control in GitHub Desktop!"))}m.isMDXComponent=!0},9435:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/add_reviewers-2577687884f77e9065ba4f25a368d878.png"},8175:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/create_pull_request-5270b3148c70e4fb72dab791677df74b.png"},7105:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/git_basics-8ba67841533472790a3ef4038aa47323.png"},3376:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/git_branch-b9459ab613a299a1d693104b5f93f356.png"}}]);