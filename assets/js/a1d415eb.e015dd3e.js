"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[3817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={id:"version_control",title:"Version Control"},i=void 0,l={unversionedId:"version_control",id:"version-3.0.0/version_control",title:"Version Control",description:"Git Overview",source:"@site/versioned_docs/version-3.0.0/version_control.md",sourceDirName:".",slug:"/version_control",permalink:"/honeycomb-docs/docs/3.0.0/version_control",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.0.0/version_control.md",tags:[],version:"3.0.0",lastUpdatedAt:1710254605,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{id:"version_control",title:"Version Control"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/honeycomb-docs/docs/3.0.0/quick_start"},next:{title:"Set up Firebase",permalink:"/honeycomb-docs/docs/3.0.0/firebase"}},s={},c=[{value:"Git Overview",id:"git-overview",level:2},{value:"Comment styles",id:"comment-styles",level:3},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Alternative options",id:"alternative-options",level:3},{value:"Clone repository",id:"clone-repository",level:4},{value:"Select a branch or create a new branch",id:"select-a-branch-or-create-a-new-branch",level:4},{value:"Commit changes and push",id:"commit-changes-and-push",level:4},{value:"Create a Pull Request",id:"create-a-pull-request",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Git Workflow",id:"git-workflow",level:3},{value:"Git Branches",id:"git-branches",level:4},{value:"Stay up-to-date with Honeycomb template repo",id:"stay-up-to-date-with-honeycomb-template-repo",level:2},{value:"Add honeycomb as an additional remote",id:"add-honeycomb-as-an-additional-remote",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"git-overview"},"Git Overview"),(0,n.kt)("p",null,"Git is a version control system that enables you to track changes to files. With Git, you are able to revert files back to previous versions, restore deleted files, remove added files and even track down where a particular line of code was introduced."),(0,n.kt)("p",null,"Nearly all operations that are performed by Git are in you local computing environment, for the exception of few used purely to synchronize with a remote. Some of the most common git operations are depicted below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Git basics",src:a(1241).Z,width:"874",height:"509"})),(0,n.kt)("p",null,"If you would like to make any changes to current repository, it is always good to start with creating a feature branch, where you can save all the changes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example branch",src:a(6802).Z,width:"773",height:"337"})),(0,n.kt)("h3",{id:"comment-styles"},"Comment styles"),(0,n.kt)("p",null,"We encourage using ",(0,n.kt)("a",{parentName:"p",href:"http://commitizen.github.io/cz-cli/"},"Commitizen"),", a great tool for recording descriptions of commits in a standardized format which makes it easier for people to understand what changed in the code."),(0,n.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Brief"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git add ","<","files",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"add a file to next commit ","(","stage",")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git commit -m ","<","message",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"commit staged files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git push"),(0,n.kt)("td",{parentName:"tr",align:"left"},"upload staged commit to repo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git pull"),(0,n.kt)("td",{parentName:"tr",align:"left"},"get remote repo commits and download ","(","try and resolve conflicts",")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git clone ","<","url",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"download entire repository")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"git checkout ","<","branch",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"checkout and create the branch you want to use")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# create branch with your feature\ngit checkout -b feature_name\n# check the status of your repositoey\ngit status\n# commit file contents to the local repository\ngit commit -am "My feature is ready"\n# specific message\n# push file contents to the remote (i.e. cloud) repository\ngit push origin feature_name\n')),(0,n.kt)("h3",{id:"alternative-options"},"Alternative options"),(0,n.kt)("p",null,"Instead of using commands in the terminal, you can also download ",(0,n.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub desktop"),". It is very intuitive to use."),(0,n.kt)("h4",{id:"clone-repository"},"Clone repository"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git clone",src:a(1347).Z,width:"2144",height:"1544"})),(0,n.kt)("h4",{id:"select-a-branch-or-create-a-new-branch"},"Select a branch or create a new branch"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git branch",src:a(6796).Z,width:"2144",height:"1544"})),(0,n.kt)("h4",{id:"commit-changes-and-push"},"Commit changes and push"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git commit",src:a(656).Z,width:"2144",height:"1544"})),(0,n.kt)("h2",{id:"create-a-pull-request"},"Create a Pull Request"),(0,n.kt)("p",null,"Pull requests are useful before you merge your branch with the main branch. You can request a review from your colleagues and check for any conflicts with the main branch. After you pushed all the changes to your branch, you can go to the original GitHub repository and click on the pull request."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git pr",src:a(3191).Z,width:"2408",height:"1330"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git pr info",src:a(7919).Z,width:"2408",height:"1902"})),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("h3",{id:"git-workflow"},"Git Workflow"),(0,n.kt)("p",null,"We recommend using a simple flow based on following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use topic/feature branches, no direct commits on main."),(0,n.kt)("li",{parentName:"ul"},"Perform tests and code reviews before merges into main, not afterwards."),(0,n.kt)("li",{parentName:"ul"},"Every branch starts from main, and targets main."),(0,n.kt)("li",{parentName:"ul"},"Commit messages reflect intent.")),(0,n.kt)("h4",{id:"git-branches"},"Git Branches"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"main")," is the default branch and where releases are made off. This branch should be in clean/working conditions at all times. This branch is protected and can only be merged from Pull Requests for topic branches"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"topic")," branches are created for new features, fixes, or really any changes. E.g, ",(0,n.kt)("inlineCode",{parentName:"li"},"fix-task-trial2-stuck-button"))),(0,n.kt)("p",null,"This flow is sometimes referred to as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/gitlab-basics/feature_branch_workflow.html"},"Feature Branch Workflow")),(0,n.kt)("h2",{id:"stay-up-to-date-with-honeycomb-template-repo"},"Stay up-to-date with Honeycomb template repo"),(0,n.kt)("p",null,"Honeycomb is an active project, and will be updated with new features over time. To bring changes from the honeycomb template repository to\nyour task, follow the following steps:"),(0,n.kt)("h3",{id:"add-honeycomb-as-an-additional-remote"},"Add honeycomb as an additional remote"),(0,n.kt)("p",null,"By default, your repository is configured to only sync with your remote, which typically is referred to as ",(0,n.kt)("inlineCode",{parentName:"p"},"origin"),". You can add Honeycomb as an additional remote as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add honeycomb https://github.com/brown-ccv/honeycomb.git\n")),(0,n.kt)("p",null,"Adding a remote is a one time operation. At that point you can pull content from the ",(0,n.kt)("inlineCode",{parentName:"p"},"honeycomb")," remote as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --all\ngit merge honeycomb/main --allow-unrelated histories\n")),(0,n.kt)("p",null,"If there are any conflicts, you'll need to resolve those, then commit the merge:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -a -m "merge honeycomb latest"\n')))}p.isMDXComponent=!0},6802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/branch_1-b9459ab613a299a1d693104b5f93f356.png"},1241:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/git-basics-8ba67841533472790a3ef4038aa47323.png"},6796:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/git_branch-46e9d0f3d958474b86000c33dd2dac62.png"},1347:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/git_clone-b9cbac3c2138e580410d5d92ac0c533a.png"},656:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/git_commit-c49d8fbfa8f3f8555a77776c607d32ed.png"},3191:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pull_request_1-5270b3148c70e4fb72dab791677df74b.png"},7919:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pull_request_info_1-2577687884f77e9065ba4f25a368d878.png"}}]);