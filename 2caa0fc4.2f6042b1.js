(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(r),p=n,u=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?a.a.createElement(u,c(c({ref:t},s),{},{components:r})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},143:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/git-basics-8ba67841533472790a3ef4038aa47323.png"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(101)),i={id:"version_control",title:"Version Control"},c={unversionedId:"version_control",id:"version_control",isDocsHomePage:!1,title:"Version Control",description:"Git Overview",source:"@site/docs/version_control.md",slug:"/version_control",permalink:"/honeycomb-docs/docs/version_control",editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/version_control.md",version:"current",lastUpdatedAt:1612975148,sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/honeycomb-docs/docs/quick_start"},next:{title:"Set up Firebase",permalink:"/honeycomb-docs/docs/firebase"}},l=[{value:"Git Overview",id:"git-overview",children:[]},{value:"Cheatsheet",id:"cheatsheet",children:[]},{value:"Best Practices",id:"best-practices",children:[{value:"Workflow",id:"workflow",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Comment styles",id:"comment-styles",children:[]}]}],s={toc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"git-overview"},"Git Overview"),Object(o.b)("p",null,"Git is a version control system that enables you to track changes to files. With Git, you are able to revert files back to previous versions, restore deleted files, remove added files and even track down where a particular line of code was introduced."),Object(o.b)("p",null,"Git creates a hidden ",Object(o.b)("inlineCode",{parentName:"p"},".git")," folder ","(","in the current folder",")"," to store the details of the file system - this folder contains all the data required to track your files and is known as a ",Object(o.b)("strong",{parentName:"p"},"repository"),", or repo."),Object(o.b)("p",null,"Git tracks file changes by the user creating a ",Object(o.b)("em",{parentName:"p"},"save point"),", or in Git terms a ",Object(o.b)("strong",{parentName:"p"},"commit"),". Each commit takes a snapshot of the current file system. Commits are uniquely identified by a SHA\u20131 hash. This is a 40 character string which may along the lines of ",Object(o.b)("inlineCode",{parentName:"p"},"ded7a0db6422d59e9893e975e32275fc36f853da"),"This hash can be used to track a particular commit within the repository."),Object(o.b)("p",null,"Nearly all operations that are performed by Git are in you local computing environment, for the exception of few used purely to synchronize with a remote. Some of the most common git operations are depicted below. In summary, a typical flow consists of making changes to your files, ",Object(o.b)("em",{parentName:"p"},"staging")," them via ",Object(o.b)("inlineCode",{parentName:"p"},"git add"),", marking a save point via ",Object(o.b)("inlineCode",{parentName:"p"},"git commit"),", then finally syncing to your remote ","(","e.g., GitHub",")"," via ",Object(o.b)("inlineCode",{parentName:"p"},"git push"),". If you are pushing changes to your remote from multiple places, you can bring changes your most recent version using ",Object(o.b)("inlineCode",{parentName:"p"},"git pull"),", which is the equivalent of doing ",Object(o.b)("inlineCode",{parentName:"p"},"git fetch")," followed by a ",Object(o.b)("inlineCode",{parentName:"p"},"git merge")," operation"),Object(o.b)("p",null,Object(o.b)("img",{src:r(143).default})),Object(o.b)("h2",{id:"cheatsheet"},"Cheatsheet"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Command"),Object(o.b)("th",{parentName:"tr",align:"left"},"Brief"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"git add ","<","files",">"),Object(o.b)("td",{parentName:"tr",align:"left"},"add a file to next commit ","(","stage",")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"git commit -m ","<","message",">"),Object(o.b)("td",{parentName:"tr",align:"left"},"commit staged files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"git push"),Object(o.b)("td",{parentName:"tr",align:"left"},"upload staged commit to repo")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"git pull"),Object(o.b)("td",{parentName:"tr",align:"left"},"get remote repo commits and download ","(","try and resolve conflicts",")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"git clone ","<","url",">"),Object(o.b)("td",{parentName:"tr",align:"left"},"download entire repository")))),Object(o.b)("h2",{id:"best-practices"},"Best Practices"),Object(o.b)("h3",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"We recommend a simple flow based on following rules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use topic/feature branches, no direct commits on main."),Object(o.b)("li",{parentName:"ul"},"Perform tests and code reviews before merges into main, not afterwards."),Object(o.b)("li",{parentName:"ul"},"Everyone starts from main, and targets main."),Object(o.b)("li",{parentName:"ul"},"Commit messages reflect intent.")),Object(o.b)("h3",{id:"branches"},"Branches"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"main is the default branch and where releases are made off. This branch should be in clean/working conditions at all times. This branch is protected and can only be merged from Pull Requests for topic branches"),Object(o.b)("li",{parentName:"ul"},"topic branches are created for new features, fixes, or really any changes")),Object(o.b)("h3",{id:"comment-styles"},"Comment styles"),Object(o.b)("p",null,"We encourage using ",Object(o.b)("a",{parentName:"p",href:"http://commitizen.github.io/cz-cli/"},"Commitizen"),", a great tool for writing angular commits - this will create a standardized commit format which makes for easier change logging and more sane messages."))}b.isMDXComponent=!0}}]);