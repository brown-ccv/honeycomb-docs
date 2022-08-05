"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[382],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7105:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var n=r(3117),i=(r(7294),r(3905));const a={id:"firebase",title:"Set up Firebase"},o=void 0,s={unversionedId:"firebase",id:"version-2.x/firebase",title:"Set up Firebase",description:"Honeycomb comes with methods and configurations for easy Firebase and Cloud Firestore set up. Please use this section to configure Firebase Hosting services and firestore cloud storage.",source:"@site/versioned_docs/version-2.x/firebase.md",sourceDirName:".",slug:"/firebase",permalink:"/honeycomb-docs/docs/2.x/firebase",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-2.x/firebase.md",tags:[],version:"2.x",lastUpdatedAt:1659725350,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{id:"firebase",title:"Set up Firebase"},sidebar:"version-2.x/someSidebar",previous:{title:"Version Control",permalink:"/honeycomb-docs/docs/2.x/version_control"},next:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/2.x/ci"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"1. Initializing firebase account and project",id:"1-initializing-firebase-account-and-project",level:4},{value:"2. Linking firebase to task",id:"2-linking-firebase-to-task",level:4},{value:"3. Copying web app credentials.",id:"3-copying-web-app-credentials",level:4},{value:"Setting up firestore.",id:"setting-up-firestore",level:2},{value:"Firestore security rules.",id:"firestore-security-rules",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Honeycomb comes with methods and configurations for easy ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase")," and ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore"},"Cloud Firestore")," set up. Please use this section to configure ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting"},"Firebase Hosting")," services and firestore cloud storage."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Follow these steps to create a firebase project and link it with the current task."),(0,i.kt)("h4",{id:"1-initializing-firebase-account-and-project"},"1. Initializing firebase account and project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create and login to a firebase account on ",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"the Firebase website"),"."),(0,i.kt)("li",{parentName:"ul"},"Create a firebase project by clicking add project and enter a Project Name.")),(0,i.kt)("h4",{id:"2-linking-firebase-to-task"},"2. Linking firebase to task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"Firebase CLI")," on your local computer."),(0,i.kt)("li",{parentName:"ul"},"Login to firebase using ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase login")," command in the terminal."),(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},".firebaserc")," file home directory and edit the ",(0,i.kt)("inlineCode",{parentName:"li"},'"default"')," field with the project name given in part 1.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "projects": {\n        "default": "<your project name>"\n    }\n}   \n')))),(0,i.kt)("h4",{id:"3-copying-web-app-credentials"},"3. Copying web app credentials."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"firebase console")," and select the project."),(0,i.kt)("li",{parentName:"ul"},"Create a new Web App by clicking on ",(0,i.kt)("inlineCode",{parentName:"li"},"Add App")," or the ",(0,i.kt)("inlineCode",{parentName:"li"},"</>")," code symbol and following the prompts."),(0,i.kt)("li",{parentName:"ul"},"Enter the a name for the Firebase app (could be the same as your Honeycomb task repo name)."),(0,i.kt)("li",{parentName:"ul"},'Check "Also set up Firebase Hosting for this app."'),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Register App"),".  This should auto-generate a script with several values that you need to copy into the next step."),(0,i.kt)("li",{parentName:"ul"},"Copy the auto-generated values from the Firebase console to the corresponding variables in the ",(0,i.kt)("inlineCode",{parentName:"li"},".env.firebase")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"env")," folder of your Honeycomb task repo:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  REACT_APP_apiKey=\n  REACT_APP_authDomain=\n  REACT_APP_projectId=\n  REACT_APP_storageBucket=\n  REACT_APP_messagingSenderId=\n  REACT_APP_appId=\n"))),(0,i.kt)("li",{parentName:"ul"},"You can skip running ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase init")," if prompted to do so.  The results of ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase init")," are already saved into the Honeycomb template repo.")),(0,i.kt)("p",null,"Firebase is now set up!"),(0,i.kt)("h2",{id:"setting-up-firestore"},"Setting up firestore."),(0,i.kt)("p",null,"Honeycomb includes cloud storage for task data using Firestore. Follow these steps to initialize firestore:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the current project in the developer console and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Firestore Database")," from the sidebar."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Database"),", select ",(0,i.kt)("inlineCode",{parentName:"li"},"production mode")," and choose the current location for the cloud storage bucket.")),(0,i.kt)("h3",{id:"firestore-security-rules"},"Firestore security rules."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/security/get-started"},"Firestore Security Rules")," provides easy server-side authorization to the database. For a honeycomb task, we use the security rules to allow access to only authorized participants for a specified study. Honeycomb's default set of rules is included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firestore.rules")," file in the home directory. This file can be edited to change the rules. To deploy the rules in the file, type the following line of code in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebase deploy --only firestore:rules\n")),(0,i.kt)("p",null,"Alternatively, Editing the rules directly in the console is also possible. To do so, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rules")," tab in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Firestore Database")," section from the firebase console sidebar then copy and paste the code that is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firestore.rules")," file."),(0,i.kt)("p",null,"Firestore database and rules are now both deployed. For Honeycomb's default set of rules, to add an authorized participant for a study, create a collection named ",(0,i.kt)("inlineCode",{parentName:"p"},"registered_studies"),", add a study with the study ID as the document name in that collection. For each registered study, add an array field named ",(0,i.kt)("inlineCode",{parentName:"p"},"registered_participants")," where each element in the array will be an authorized participant for that study."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5472).Z,width:"2266",height:"1152"})))}u.isMDXComponent=!0},5472:function(e,t,r){t.Z=r.p+"assets/images/test-task-e68ca81cee4c093ba7e4974575f118f9.png"}}]);