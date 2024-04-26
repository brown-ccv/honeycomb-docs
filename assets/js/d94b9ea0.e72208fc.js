"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[3389],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(8168),o=(n(6540),n(5680));const r={id:"local_application",slug:"/local_application",title:"Local Application",description:"Guide for deploying a task as a local application"},i=void 0,l={unversionedId:"deployments/local_application",id:"version-3.2.x/deployments/local_application",title:"Local Application",description:"Guide for deploying a task as a local application",source:"@site/versioned_docs/version-3.2.x/deployments/local_application.mdx",sourceDirName:"deployments",slug:"/local_application",permalink:"/honeycomb-docs/docs/3.2.x/local_application",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.2.x/deployments/local_application.mdx",tags:[],version:"3.2.x",lastUpdatedAt:1714148140,formattedLastUpdatedAt:"Apr 26, 2024",frontMatter:{id:"local_application",slug:"/local_application",title:"Local Application",description:"Guide for deploying a task as a local application"},sidebar:"mySidebar",previous:{title:"Continuous Integration / Deployment",permalink:"/honeycomb-docs/docs/3.2.x/ci_cd"},next:{title:"Firebase",permalink:"/honeycomb-docs/docs/3.2.x/firebase"}},c={},s=[{value:"Creating a Release",id:"creating-a-release",level:2},{value:"Running the task",id:"running-the-task",level:2},{value:"Working with Data",id:"working-with-data",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"A major feature of Honeycomb is the ability to bundle JsPsych tasks into applications that can be run on any computer in a lab or clinic. Installers for these applications can be created for Windows, Mac, and Linux. The applications can be run without an internet connection, and do not require any additional software to be installed on the computer."),(0,o.yg)("p",null,'Installers for these application can be created on demand and/or automatically when a new release is created. This is called "Continuous Deployment" - more information about Honeycomb\'s CI/CD workflow can be found here ',(0,o.yg)("a",{parentName:"p",href:"ci_cd"},"here"),"."),(0,o.yg)("h2",{id:"creating-a-release"},"Creating a Release"),(0,o.yg)("p",null,"Follow the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release"},"GitHub documentation")," for creating a release."),(0,o.yg)("p",null,"The tag should be in the format ",(0,o.yg)("inlineCode",{parentName:"p"},"vX.X.X")," where ",(0,o.yg)("inlineCode",{parentName:"p"},"X.X.X")," is the version number of the release. For example, if the release is version 1.0.0, the tag should be ",(0,o.yg)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Your release ",(0,o.yg)("strong",{parentName:"p"},"must")," included a new tag for the CI/CD workflow to work.")),(0,o.yg)("h2",{id:"running-the-task"},"Running the task"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Navigate to the repository\'s "Releases" tab and select the tag you just created.'),(0,o.yg)("li",{parentName:"ol"},"Download the installer for your operating system."),(0,o.yg)("li",{parentName:"ol"},"Double click the installer to run it. Follow the instructions to install the application."),(0,o.yg)("li",{parentName:"ol"},"The application will automatically start after the first instillation.")),(0,o.yg)("p",null,"The executable does not require installation of any additional software!"),(0,o.yg)("h2",{id:"working-with-data"},"Working with Data"),(0,o.yg)("p",null,"Data is automatically saved to a nested folder structure on the Desktop. Each session will be saved as its own ",(0,o.yg)("inlineCode",{parentName:"p"},".json")," file nested under the id of the study and participant."))}u.isMDXComponent=!0}}]);