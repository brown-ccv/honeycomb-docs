"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[5222],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const i={id:"npm_scripts",title:"NPM Scripts"},a=void 0,l={unversionedId:"npm_scripts",id:"version-2.x/npm_scripts",title:"NPM Scripts",description:"In the project directory, you can run:",source:"@site/versioned_docs/version-2.x/npm_scripts.md",sourceDirName:".",slug:"/npm_scripts",permalink:"/honeycomb-docs/docs/2.x/npm_scripts",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-2.x/npm_scripts.md",tags:[],version:"2.x",lastUpdatedAt:1712343346,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"npm_scripts",title:"NPM Scripts"},sidebar:"version-2.x/someSidebar",previous:{title:"Troubleshooting",permalink:"/honeycomb-docs/docs/2.x/troubleshooting"}},p={},c=[{value:"<code>npm run dev</code>",id:"npm-run-dev",level:3},{value:"<code>npm start</code>",id:"npm-start",level:3},{value:"<code>npm test</code>",id:"npm-test",level:3},{value:"<code>npm build</code>",id:"npm-build",level:3},{value:"<code>npm run package:platform</code>",id:"npm-run-packageplatform",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"<code>npm run eject</code>",id:"npm-run-eject",level:3},{value:"Run Electron",id:"run-electron",level:3},{value:"<code>npm run electron</code>",id:"npm-run-electron",level:4},{value:"<code>npm run electron-dev</code>",id:"npm-run-electron-dev",level:4}],u={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In the project directory, you can run:"),(0,o.yg)("h3",{id:"npm-run-dev"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm run dev")),(0,o.yg)("p",null,"Runs ",(0,o.yg)("inlineCode",{parentName:"p"},"npm start")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run electron-dev")," concurrently.  This may not play nicely with windows.  If it doesn't, run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm start")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run electron-dev")," from different terminal windows."),(0,o.yg)("h3",{id:"npm-start"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm start")),(0,o.yg)("p",null,"Runs the app in the development mode."),(0,o.yg)("p",null,"Open ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."),(0,o.yg)("p",null,"The page will reload if you make edits."),(0,o.yg)("p",null,"You will also see any lint errors in the console."),(0,o.yg)("h3",{id:"npm-test"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm test")),(0,o.yg)("p",null,"Launches the test runner in the interactive watch mode."),(0,o.yg)("p",null,"See the section about ",(0,o.yg)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/running-tests"},"running tests")," for more information."),(0,o.yg)("h3",{id:"npm-build"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm build")),(0,o.yg)("p",null,"Creates a production build of the app (renderer).  This must be done before running ",(0,o.yg)("inlineCode",{parentName:"p"},"package:platform")," or the psiturk build instructions."),(0,o.yg)("h3",{id:"npm-run-packageplatform"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm run package:platform")),(0,o.yg)("p",null,"It correctly bundles creates electron packages for the given platform.  It then creates an installer for that platform.  The output can be found in ",(0,o.yg)("inlineCode",{parentName:"p"},"/dist"),"\nplatforms: windows, mac, linux."),(0,o.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"If not running this command on a windows machine, must have ",(0,o.yg)("inlineCode",{parentName:"p"},"mono")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"wine")," installed."),(0,o.yg)("h3",{id:"npm-run-eject"},(0,o.yg)("inlineCode",{parentName:"h3"},"npm run eject")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note: this is a one-way operation. Once you ",(0,o.yg)("inlineCode",{parentName:"strong"},"eject"),", you can\u2019t go back!")),(0,o.yg)("p",null,"If you aren\u2019t satisfied with the build tool and configuration choices, you can ",(0,o.yg)("inlineCode",{parentName:"p"},"eject")," at any time. This command will remove the single build dependency from your project."),(0,o.yg)("p",null,"Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except ",(0,o.yg)("inlineCode",{parentName:"p"},"eject")," will still work, but they will point to the copied scripts so you can tweak them. At this point you\u2019re on your own."),(0,o.yg)("p",null,"You don\u2019t have to ever use ",(0,o.yg)("inlineCode",{parentName:"p"},"eject"),". The curated feature set is suitable for small and middle deployments, and you shouldn\u2019t feel obligated to use this feature. However we understand that this tool wouldn\u2019t be useful if you couldn\u2019t customize it when you are ready for it."),(0,o.yg)("h3",{id:"run-electron"},"Run Electron"),(0,o.yg)("h4",{id:"npm-run-electron"},(0,o.yg)("inlineCode",{parentName:"h4"},"npm run electron")),(0,o.yg)("p",null,"Run the built app."),(0,o.yg)("h4",{id:"npm-run-electron-dev"},(0,o.yg)("inlineCode",{parentName:"h4"},"npm run electron-dev")),(0,o.yg)("p",null,"Run the current state of the code (un-built)."))}d.isMDXComponent=!0}}]);