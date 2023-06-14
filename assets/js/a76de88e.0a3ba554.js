"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[7624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},a=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/honeycomb-docs/docs/troubleshooting",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/troubleshooting.mdx",tags:[],version:"current",lastUpdatedAt:1686755669,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},sidebar:"mySidebar",previous:{title:"Prerequisites",permalink:"/honeycomb-docs/docs/prerequisites"}},s={},c=[{value:"Inspecting Errors",id:"inspecting-errors",level:2},{value:"Testing in Linux",id:"testing-in-linux",level:2},{value:"Common issues",id:"common-issues",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Brew Not Available",id:"brew-not-available",level:4},{value:"NPM Errors",id:"npm-errors",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inspecting-errors"},"Inspecting Errors"),(0,i.kt)("p",null,"When developing Electron apps there are two processes: ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),". In this case ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"electron-starter.js")," and its console is wherever you called ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"electron .")," from. ",(0,i.kt)("inlineCode",{parentName:"p"},"renderer")," corresponds to the React App - this is everything else. The React app's console is in the electron/browser window and can be seen by using dev tools to inspect the window. When running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev"),", it should open by default."),(0,i.kt)("p",null,"In case you want to find out where the error is coming from when running the app locally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try reviewing logs in the terminal"),(0,i.kt)("li",{parentName:"ul"},"Inspect element in your browser by opening your developer tools. For instance, in Chrome, this can be done via the menu View -> Developer or right-clicking and pressing inspect.")),(0,i.kt)("h2",{id:"testing-in-linux"},"Testing in Linux"),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test")," on Linux, you might get an error that mentions ",(0,i.kt)("inlineCode",{parentName:"p"},"ENOSPC"),'. This is because the test runner creates "watchers" for files in the project repo in order to automatically re-run tests as the files change. Linux limits the number of watchers that can be created at a time and the default limit may be smaller than the number of files in the repo.'),(0,i.kt)("p",null,'This is a "known issue" with some test runners on Linux, as in discussions ',(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62206460/jest-watch-error-enospc-system-limit-for-number-of-file-watchers-reached"},"here"),"."),(0,i.kt)("p",null,"One simple workaround is to increase the number of allowed watchers (100000 seems to be sufficient):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Command that initially fails with ",(0,i.kt)("inlineCode",{parentName:"li"},"ENOSPC"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"npm test")),(0,i.kt)("li",{parentName:"ul"},'Check the configured limit on "watchers": ',(0,i.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,i.kt)("li",{parentName:"ul"},"Edit the relevant Linux config file: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo vim /etc/sysctl.conf")),(0,i.kt)("li",{parentName:"ul"},"Add a line at the end of the config file: ",(0,i.kt)("inlineCode",{parentName:"li"},"fs.inotify.max_user_watches=100000")),(0,i.kt)("li",{parentName:"ul"},"Save, exit, and reload the config file: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo sysctl -p")),(0,i.kt)("li",{parentName:"ul"},"Check that the limit has changed: ",(0,i.kt)("inlineCode",{parentName:"li"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,i.kt)("li",{parentName:"ul"},"Retry the initial command, which should now succeed: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm test"))),(0,i.kt)("h2",{id:"common-issues"},"Common issues"),(0,i.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.kt)("h4",{id:"brew-not-available"},"Brew Not Available"),(0,i.kt)("p",null,"If you run into issues installing Homebrew in step 1 of ",(0,i.kt)("a",{parentName:"p",href:"quick_start?os=mac#installing-prerequisites"},"Installing Prerequisites")," it may be because Homebrew is not available on your shell. Older versions of macOS (under 10.14) do not do this automatically."),(0,i.kt)("p",null,"Run the following command to manually add the Homebrew installation location to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," so it is available in your shell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'PATH=\"/usr/local/bin:$PATH\"' >> ~/.bash_profile\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh"),", also add to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file.")),(0,i.kt)("h3",{id:"npm-errors"},"NPM Errors"),(0,i.kt)("p",null,"Try deleting your ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and the ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," then running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," then ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run rebuild"),". This should fix most issues."))}d.isMDXComponent=!0}}]);