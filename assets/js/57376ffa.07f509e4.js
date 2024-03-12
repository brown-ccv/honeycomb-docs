"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"firebase",title:"Set up Firebase"},o=void 0,l={unversionedId:"firebase",id:"version-3.0.0/firebase",title:"Set up Firebase",description:"Honeycomb comes with methods and configurations for easy Firebase and Cloud Firestore set up. Please use this section to configure Firebase Hosting services and Firestore cloud storage.",source:"@site/versioned_docs/version-3.0.0/firebase.md",sourceDirName:".",slug:"/firebase",permalink:"/honeycomb-docs/docs/3.0.0/firebase",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.0.0/firebase.md",tags:[],version:"3.0.0",lastUpdatedAt:1710254605,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{id:"firebase",title:"Set up Firebase"},sidebar:"someSidebar",previous:{title:"Version Control",permalink:"/honeycomb-docs/docs/3.0.0/version_control"},next:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/3.0.0/ci"}},s={},p=[{value:"Setting up Firebase",id:"setting-up-firebase",level:2},{value:"0. Installing the Firebase Command Line Interface",id:"0-installing-the-firebase-command-line-interface",level:3},{value:"1. Initializing Firebase account and project",id:"1-initializing-firebase-account-and-project",level:3},{value:"2. Linking firebase to task",id:"2-linking-firebase-to-task",level:3},{value:"3. Copying web app credentials",id:"3-copying-web-app-credentials",level:3},{value:"Setting up Firestore",id:"setting-up-firestore",level:2},{value:"Firestore security rules",id:"firestore-security-rules",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Honeycomb comes with methods and configurations for easy ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase")," and ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore"},"Cloud Firestore")," set up. Please use this section to configure ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting"},"Firebase Hosting")," services and Firestore cloud storage."),(0,r.kt)("h2",{id:"setting-up-firebase"},"Setting up Firebase"),(0,r.kt)("h3",{id:"0-installing-the-firebase-command-line-interface"},"0. Installing the Firebase Command Line Interface"),(0,r.kt)("p",null,"To check if firebase has been installed, type ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase")," into a terminal window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"firebase\n")),(0,r.kt)("p",null,'If a list of options are printed on the terminal then the firebase tool has already been installed. If not, you will get an error - something along the lines of "Command not found." The firebase-cli can then be installed using npm:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g firebase-tools\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"-g")," flag installs an npm package globally on your system, as opposed to the current project")),(0,r.kt)("h3",{id:"1-initializing-firebase-account-and-project"},"1. Initializing Firebase account and project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create and login to a Firebase account on ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"the Firebase website"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a Firebase project by clicking add project and enter a Project Name."))),(0,r.kt)("h3",{id:"2-linking-firebase-to-task"},"2. Linking firebase to task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login to Firebase using ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase login")," command in the terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},".firebaserc")," file home directory and edit the ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')," field with the project name given in part 1."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "projects": {\n        "default": "<your project name>"\n    }\n}\n')),(0,r.kt)("h3",{id:"3-copying-web-app-credentials"},"3. Copying web app credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"firebase console")," and select the project."),(0,r.kt)("li",{parentName:"ul"},"Create a new Web App by clicking on ",(0,r.kt)("inlineCode",{parentName:"li"},"Add App")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"</>")," code symbol and following the prompts."),(0,r.kt)("li",{parentName:"ul"},"Enter the a name for the Firebase app (could be the same as your Honeycomb task repo name)."),(0,r.kt)("li",{parentName:"ul"},'Check "Also set up Firebase Hosting for this app."'),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Register App"),". This should auto-generate a script with several values that you need to copy into the next step."),(0,r.kt)("li",{parentName:"ul"},"Copy the auto-generated values from the Firebase console to the corresponding variables in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env.firebase")," file in the ",(0,r.kt)("inlineCode",{parentName:"li"},"env")," folder of your Honeycomb task repo:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'REACT_APP_FIREBASE="true"\nREACT_APP_apiKey=\nREACT_APP_authDomain=\nREACT_APP_projectId=\nREACT_APP_storageBucket=\nREACT_APP_messagingSenderId=\nREACT_APP_appId=\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the auto-generated values from the Firebase console to the corresponding variables in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env.firebase")," you just created.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You only need to copy the variables referenced here. ",(0,r.kt)("em",{parentName:"li"},"If you enabled Google Analytics during project creation, additional variables may be printed in the console. You don't need to copy those."))))),(0,r.kt)("p",null,"Firebase is now set up!"),(0,r.kt)("h2",{id:"setting-up-firestore"},"Setting up Firestore"),(0,r.kt)("p",null,"Honeycomb includes cloud storage for task data using Firestore. Follow these steps to initialize Firestore:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the current project in the developer console and select ",(0,r.kt)("inlineCode",{parentName:"li"},"Firestore Database")," from the sidebar."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Database"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"production mode")," and choose the current location for the cloud storage bucket.")),(0,r.kt)("h3",{id:"firestore-security-rules"},"Firestore security rules"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/security/get-started"},"Firestore Security Rules")," provides easy server-side authorization to the database. For a honeycomb task, we use the security rules to allow access to only authorized participants for a specified study. Honeycomb's default set of rules is included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"firestore.rules")," file in the home directory. This file can be edited to change the rules. To deploy the rules in the file, type the following line of code in the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"firebase deploy --only firestore:rules\n")),(0,r.kt)("p",null,"Alternatively, Editing the rules directly in the console is also possible. To do so, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Rules")," tab in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Firestore Database")," section from the firebase console sidebar then copy and paste the code that is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"firestore.rules")," file."),(0,r.kt)("p",null,"Firestore database and rules are now both deployed. For Honeycomb's default set of rules, to add an authorized participant for a study, create a collection named ",(0,r.kt)("inlineCode",{parentName:"p"},"registered_studies"),", add a study with the study ID as the document name in that collection. For each registered study, add an array field named ",(0,r.kt)("inlineCode",{parentName:"p"},"registered_participants")," where each element in the array will be an authorized participant for that study."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example Task",src:a(5335).Z,width:"2266",height:"1152"})))}u.isMDXComponent=!0},5335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-task-e68ca81cee4c093ba7e4974575f118f9.png"}}]);