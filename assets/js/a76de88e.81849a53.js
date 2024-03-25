"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4895],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(8168),r=(t(6540),t(5680));const i={id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},a=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/honeycomb-docs/docs/troubleshooting",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/troubleshooting.mdx",tags:[],version:"current",lastUpdatedAt:1711378169,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting",description:"Guide to troubleshooting some known errors and contacting the CCV with questions"},sidebar:"mySidebar",previous:{title:"JavaScript",permalink:"/honeycomb-docs/docs/javascript"}},s={},p=[{value:"Inspecting Errors",id:"inspecting-errors",level:2},{value:"Common issues",id:"common-issues",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Brew Not Available",id:"brew-not-available",level:4},{value:"NPM Errors",id:"npm-errors",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"inspecting-errors"},"Inspecting Errors"),(0,r.yg)("p",null,"When running any of the ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run dev"),' commands you may encounter errors. These may display over the window itself or may may exist in the developer tools. These tools can be accessed by right clicking the window and selecting "Inspect" or by pressing ',(0,r.yg)("kbd",null,"Ctrl+Shift+I")," (",(0,r.yg)("kbd",null,"Cmd+Option+I")," on Mac). The errors, as well as any ",(0,r.yg)("inlineCode",{parentName:"p"},"console.log"),'s, will be displayed in the "Console" tab of the developer tools.'),(0,r.yg)("p",null,"When developing Electron apps there are two processes: ",(0,r.yg)("inlineCode",{parentName:"p"},"main"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"renderer"),". In this case, ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," corresponds to ",(0,r.yg)("inlineCode",{parentName:"p"},"public/electron/main.js")," and its console is in the terminal where ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run dev"),"was run. ",(0,r.yg)("inlineCode",{parentName:"p"},"renderer")," corresponds to the React App - this is everything else. This console can be found using the same steps as above - note that running ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run dev")," should open the developer console by default."),(0,r.yg)("h2",{id:"common-issues"},"Common issues"),(0,r.yg)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,r.yg)("h4",{id:"brew-not-available"},"Brew Not Available"),(0,r.yg)("p",null,"If you run into issues installing Homebrew in step 1 of ",(0,r.yg)("a",{parentName:"p",href:"quick_start?os=mac#installing-prerequisites"},"Installing Prerequisites")," it may be because Homebrew is not available on your shell. Older versions of macOS (under 10.14) do not do this automatically."),(0,r.yg)("p",null,"Run the following command to manually add the Homebrew installation location to your ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," so it is available in your shell."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"echo 'PATH=\"/usr/local/bin:$PATH\"' >> ~/.bash_profile\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you're using ",(0,r.yg)("inlineCode",{parentName:"p"},"zsh"),", also add to your ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.zshrc")," file.")),(0,r.yg)("h3",{id:"npm-errors"},"NPM Errors"),(0,r.yg)("p",null,"Most npm issues can be resolved by re-installing dependencies. This can be done by running the following commands in the root directory of the project:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Delete the ",(0,r.yg)("inlineCode",{parentName:"li"},"node_modules/")," folder"),(0,r.yg)("li",{parentName:"ol"},"Delete hte ",(0,r.yg)("inlineCode",{parentName:"li"},"package-lock.json")," file"),(0,r.yg)("li",{parentName:"ol"},"Reinstall dependencies",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"npm install\n")))))}u.isMDXComponent=!0}}]);