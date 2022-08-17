"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"npm_scripts",title:"NPM Scripts"},a=void 0,l={unversionedId:"npm_scripts",id:"version-2.x/npm_scripts",title:"NPM Scripts",description:"In the project directory, you can run:",source:"@site/versioned_docs/version-2.x/npm_scripts.md",sourceDirName:".",slug:"/npm_scripts",permalink:"/honeycomb-docs/docs/2.x/npm_scripts",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-2.x/npm_scripts.md",tags:[],version:"2.x",lastUpdatedAt:1660761808,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{id:"npm_scripts",title:"NPM Scripts"},sidebar:"version-2.x/someSidebar",previous:{title:"Troubleshooting",permalink:"/honeycomb-docs/docs/2.x/troubleshooting"}},p={},c=[{value:"<code>npm run dev</code>",id:"npm-run-dev",level:3},{value:"<code>npm start</code>",id:"npm-start",level:3},{value:"<code>npm test</code>",id:"npm-test",level:3},{value:"<code>npm build</code>",id:"npm-build",level:3},{value:"<code>npm run package:platform</code>",id:"npm-run-packageplatform",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"<code>npm run eject</code>",id:"npm-run-eject",level:3},{value:"Run Electron",id:"run-electron",level:3},{value:"<code>npm run electron</code>",id:"npm-run-electron",level:4},{value:"<code>npm run electron-dev</code>",id:"npm-run-electron-dev",level:4}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the project directory, you can run:"),(0,o.kt)("h3",{id:"npm-run-dev"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm run dev")),(0,o.kt)("p",null,"Runs ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run electron-dev")," concurrently.  This may not play nicely with windows.  If it doesn't, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run electron-dev")," from different terminal windows."),(0,o.kt)("h3",{id:"npm-start"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm start")),(0,o.kt)("p",null,"Runs the app in the development mode."),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."),(0,o.kt)("p",null,"The page will reload if you make edits."),(0,o.kt)("p",null,"You will also see any lint errors in the console."),(0,o.kt)("h3",{id:"npm-test"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm test")),(0,o.kt)("p",null,"Launches the test runner in the interactive watch mode."),(0,o.kt)("p",null,"See the section about ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/running-tests"},"running tests")," for more information."),(0,o.kt)("h3",{id:"npm-build"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm build")),(0,o.kt)("p",null,"Creates a production build of the app (renderer).  This must be done before running ",(0,o.kt)("inlineCode",{parentName:"p"},"package:platform")," or the psiturk build instructions."),(0,o.kt)("h3",{id:"npm-run-packageplatform"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm run package:platform")),(0,o.kt)("p",null,"It correctly bundles creates electron packages for the given platform.  It then creates an installer for that platform.  The output can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/dist"),"\nplatforms: windows, mac, linux."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"If not running this command on a windows machine, must have ",(0,o.kt)("inlineCode",{parentName:"p"},"mono")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wine")," installed."),(0,o.kt)("h3",{id:"npm-run-eject"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm run eject")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: this is a one-way operation. Once you ",(0,o.kt)("inlineCode",{parentName:"strong"},"eject"),", you can\u2019t go back!")),(0,o.kt)("p",null,"If you aren\u2019t satisfied with the build tool and configuration choices, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"eject")," at any time. This command will remove the single build dependency from your project."),(0,o.kt)("p",null,"Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except ",(0,o.kt)("inlineCode",{parentName:"p"},"eject")," will still work, but they will point to the copied scripts so you can tweak them. At this point you\u2019re on your own."),(0,o.kt)("p",null,"You don\u2019t have to ever use ",(0,o.kt)("inlineCode",{parentName:"p"},"eject"),". The curated feature set is suitable for small and middle deployments, and you shouldn\u2019t feel obligated to use this feature. However we understand that this tool wouldn\u2019t be useful if you couldn\u2019t customize it when you are ready for it."),(0,o.kt)("h3",{id:"run-electron"},"Run Electron"),(0,o.kt)("h4",{id:"npm-run-electron"},(0,o.kt)("inlineCode",{parentName:"h4"},"npm run electron")),(0,o.kt)("p",null,"Run the built app."),(0,o.kt)("h4",{id:"npm-run-electron-dev"},(0,o.kt)("inlineCode",{parentName:"h4"},"npm run electron-dev")),(0,o.kt)("p",null,"Run the current state of the code (un-built)."))}s.isMDXComponent=!0}}]);