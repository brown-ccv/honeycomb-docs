"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[8600],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const o={id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},a=void 0,s={unversionedId:"troubleshooting",id:"version-3.1.x/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions",source:"@site/versioned_docs/version-3.1.x/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/honeycomb-docs/docs/3.1.x/troubleshooting",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.1.x/troubleshooting.mdx",tags:[],version:"3.1.x",lastUpdatedAt:1714155016,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},sidebar:"mySidebar",previous:{title:"Prerequisites",permalink:"/honeycomb-docs/docs/3.1.x/prerequisites"}},l={},c=[{value:"Inspecting Errors",id:"inspecting-errors",level:2},{value:"Testing in Linux",id:"testing-in-linux",level:2},{value:"Common issues",id:"common-issues",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Brew Not Available",id:"brew-not-available",level:4},{value:"NPM Errors",id:"npm-errors",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"inspecting-errors"},"Inspecting Errors"),(0,i.yg)("p",null,"When developing Electron apps there are two processes: ",(0,i.yg)("inlineCode",{parentName:"p"},"main"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"renderer"),". In this case ",(0,i.yg)("inlineCode",{parentName:"p"},"main")," corresponds to ",(0,i.yg)("inlineCode",{parentName:"p"},"electron-starter.js")," and its console is wherever you called ",(0,i.yg)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"electron .")," from. ",(0,i.yg)("inlineCode",{parentName:"p"},"renderer")," corresponds to the React App - this is everything else. The React app's console is in the electron/browser window and can be seen by using dev tools to inspect the window. When running ",(0,i.yg)("inlineCode",{parentName:"p"},"npm run dev"),", it should open by default."),(0,i.yg)("p",null,"In case you want to find out where the error is coming from when running the app locally:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Try reviewing logs in the terminal"),(0,i.yg)("li",{parentName:"ul"},"Inspect element in your browser by opening your developer tools. For instance, in Chrome, this can be done via the menu View -> Developer or right-clicking and pressing inspect.")),(0,i.yg)("h2",{id:"testing-in-linux"},"Testing in Linux"),(0,i.yg)("p",null,"When running ",(0,i.yg)("inlineCode",{parentName:"p"},"npm test")," on Linux, you might get an error that mentions ",(0,i.yg)("inlineCode",{parentName:"p"},"ENOSPC"),'. This is because the test runner creates "watchers" for files in the project repo in order to automatically re-run tests as the files change. Linux limits the number of watchers that can be created at a time and the default limit may be smaller than the number of files in the repo.'),(0,i.yg)("p",null,'This is a "known issue" with some test runners on Linux, as in discussions ',(0,i.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here")," and ",(0,i.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62206460/jest-watch-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here"),"."),(0,i.yg)("p",null,"One simple workaround is to increase the number of allowed watchers (100000 seems to be sufficient):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Command that initially fails with ",(0,i.yg)("inlineCode",{parentName:"li"},"ENOSPC"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"npm test")),(0,i.yg)("li",{parentName:"ul"},'Check the configured limit on "watchers": ',(0,i.yg)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,i.yg)("li",{parentName:"ul"},"Edit the relevant Linux config file: ",(0,i.yg)("inlineCode",{parentName:"li"},"sudo vim /etc/sysctl.conf")),(0,i.yg)("li",{parentName:"ul"},"Add a line at the end of the config file: ",(0,i.yg)("inlineCode",{parentName:"li"},"fs.inotify.max_user_watches=100000")),(0,i.yg)("li",{parentName:"ul"},"Save, exit, and reload the config file: ",(0,i.yg)("inlineCode",{parentName:"li"},"sudo sysctl -p")),(0,i.yg)("li",{parentName:"ul"},"Check that the limit has changed: ",(0,i.yg)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,i.yg)("li",{parentName:"ul"},"Retry the initial command, which should now succeed: ",(0,i.yg)("inlineCode",{parentName:"li"},"npm test"))),(0,i.yg)("h2",{id:"common-issues"},"Common issues"),(0,i.yg)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.yg)("h4",{id:"brew-not-available"},"Brew Not Available"),(0,i.yg)("p",null,"If you run into issues installing Homebrew in step 1 of ",(0,i.yg)("a",{parentName:"p",href:"quick_start?os=mac#installing-prerequisites"},"Installing Prerequisites")," it may be because Homebrew is not available on your shell. Older versions of macOS (under 10.14) do not do this automatically."),(0,i.yg)("p",null,"Run the following command to manually add the Homebrew installation location to your ",(0,i.yg)("inlineCode",{parentName:"p"},"PATH")," so it is available in your shell."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"echo 'PATH=\"/usr/local/bin:$PATH\"' >> ~/.bash_profile\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you're using ",(0,i.yg)("inlineCode",{parentName:"p"},"zsh"),", also add to your ",(0,i.yg)("inlineCode",{parentName:"p"},"~/.zshrc")," file.")),(0,i.yg)("h3",{id:"npm-errors"},"NPM Errors"),(0,i.yg)("p",null,"Try deleting your ",(0,i.yg)("inlineCode",{parentName:"p"},"node_modules")," folder and the ",(0,i.yg)("inlineCode",{parentName:"p"},"package-lock.json")," then running ",(0,i.yg)("inlineCode",{parentName:"p"},"npm install")," then ",(0,i.yg)("inlineCode",{parentName:"p"},"npm run rebuild"),". This should fix most issues."))}d.isMDXComponent=!0}}]);