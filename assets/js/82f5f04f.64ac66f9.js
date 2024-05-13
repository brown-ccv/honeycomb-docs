"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[1598],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,y=g["".concat(l,".").concat(u)]||g[u]||d[u]||r;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>g,toc:()=>u});var n=a(8168),i=(a(6540),a(5680));const r=a.p+"assets/images/firebase-console-settings-0a6f9d645eb45de659a7b4b784467625.png",o=a.p+"assets/images/firebase-web-credentials-2fe52b2547f94448997f6d311c76412f.png",s=a.p+"assets/images/firestore-create-study-1e75d836c67200b199878dcf4772fe50.png",l=a.p+"assets/images/firestore-example-study-8c600c7203ca68515ab663645af36874.png",p={id:"firebase",slug:"/firebase",title:"Firebase",description:"Guide for connecting Honeycomb to a Firebase project"},c=void 0,g={unversionedId:"deployments/firebase",id:"deployments/firebase",title:"Firebase",description:"Guide for connecting Honeycomb to a Firebase project",source:"@site/docs/deployments/firebase.mdx",sourceDirName:"deployments",slug:"/firebase",permalink:"/honeycomb-docs/docs/firebase",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/deployments/firebase.mdx",tags:[],version:"current",lastUpdatedAt:1715609384,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{id:"firebase",slug:"/firebase",title:"Firebase",description:"Guide for connecting Honeycomb to a Firebase project"},sidebar:"mySidebar",previous:{title:"Local Application",permalink:"/honeycomb-docs/docs/local_application"},next:{title:"PsiTurk",permalink:"/honeycomb-docs/docs/psiturk"}},d={},u=[{value:"Setting up Firebase",id:"setting-up-firebase",level:2},{value:"Adding Products",id:"adding-products",level:3},{value:"Installing the Command Line Interface",id:"installing-the-command-line-interface",level:3},{value:"Connecting Your Firebase Project",id:"connecting-your-firebase-project",level:3},{value:"Developing With Firebase",id:"developing-with-firebase",level:2},{value:"Deploying on Firebase",id:"deploying-on-firebase",level:2},{value:"Managing Data",id:"managing-data",level:2},{value:"Setting up a Service Account",id:"setting-up-a-service-account",level:3},{value:"Using the CLI Script",id:"using-the-cli-script",level:3},{value:"Further Reading",id:"further-reading",level:2},{value:"Security Rules",id:"security-rules",level:3},{value:"Registering Studies",id:"registering-studies",level:4}],y={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Honeycomb comes with methods and configurations to deploy tasks with ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase"),". These tools make it possible to reach a wider audience by hosting your task online."),(0,i.yg)("h2",{id:"setting-up-firebase"},"Setting up Firebase"),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Members of Brown University should submit a support ticket to have their Firebase project created. Members of other institutions should check to see if their university has access to Google Cloud."),(0,i.yg)("p",{parentName:"admonition"},"Otherwise, a ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/"},"personal Firebase account")," can be created for free. Please follow the ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/projects/learn-more#setting_up_a_firebase_project_and_registering_apps"},"firebase documentation")," for creating a new project.")),(0,i.yg)("h3",{id:"adding-products"},"Adding Products"),(0,i.yg)("p",null,"First we'll configure ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting"},"Firebase Hosting")," and ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore"},"Cloud Firestore")," on your project."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log in to Firebase with your Google account on the ",(0,i.yg)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase console"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to your project from the console")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Register a new web app to your project (",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/web/setup#register-app"},"Register your app"),")"),(0,i.yg)("admonition",{parentName:"li",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"We recommend giving your web app the same name as your task's repository"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add Firestore Database to your project (",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/quickstart#create"},"Create a Cloud Firestore database"),")"),(0,i.yg)("admonition",{parentName:"li",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Choose ",(0,i.yg)("inlineCode",{parentName:"p"},"production mode"),' for the starting mode and the default "Cloud Firestore Location"')))),(0,i.yg)("p",null,"The Firebase project is now fully set up! Now we'll connect your task to that project from your computer."),(0,i.yg)("h3",{id:"installing-the-command-line-interface"},"Installing the Command Line Interface"),(0,i.yg)("p",null,"The Firebase CLI is installed with the node package manager just like the rest of Honeycomb's dependencies. Be sure to log in with same account you used when logging into the console!"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Login to Firebase"',title:'"Login',to:!0,'Firebase"':!0},"firebase login\n")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"A ",(0,i.yg)("inlineCode",{parentName:"em"},"command not found")," error usually indicates firebase-tools has not been installed correctly. Re-running ",(0,i.yg)("inlineCode",{parentName:"em"},"npm install -g firebase-tools")," should fix this issue.")),(0,i.yg)("h3",{id:"connecting-your-firebase-project"},"Connecting Your Firebase Project"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Change the default project name of your task in ",(0,i.yg)("inlineCode",{parentName:"li"},".firebaserc"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title=".firebaserc" showLineNumbers',title:'".firebaserc"',showLineNumbers:!0},'{\n  "projects": {\n    "default": "<your project name>"\n  }\n}\n')),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Copy the web app credentials from the Firebase console to the corresponding variables in ",(0,i.yg)("inlineCode",{parentName:"p"},".env.firebase")),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Return to your project on the ",(0,i.yg)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase console"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to your project setting"),(0,i.yg)("img",{src:r,alt:"Firebase project settings"})),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Scroll down and copy the auto-generated values from the Firebase console to the corresponding variables in the ",(0,i.yg)("inlineCode",{parentName:"p"},".env.firebase")," file in the ",(0,i.yg)("inlineCode",{parentName:"p"},"env")," folder of your Honeycomb task repo"),(0,i.yg)("img",{src:o,alt:"Firebase web credentials"}),(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="env/.env.firebase"',title:'"env/.env.firebase"'},'REACT_APP_FIREBASE="true"\nREACT_APP_API_KEY=\nREACT_APP_AUTH_DOMAIN=\nREACT_APP_PROJECT_ID=\nREACT_APP_STORAGE_BUCKET=\nREACT_APP_MESSAGING_SENDER_ID=\nREACT_APP_APP_ID=\n')),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("em",{parentName:"p"},"Additional variables may be present in the console, they do not need to be copied."))))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Deploy the default ",(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/security/get-started"},"Firestore security rules")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Deploy Firestore rules"',title:'"Deploy',Firestore:!0,'rules"':!0},"firebase deploy --only firestore:rules\n")),(0,i.yg)("p",null,"Your task is now connected to an initialized Firebase project!"),(0,i.yg)("h2",{id:"developing-with-firebase"},"Developing With Firebase"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Two terminal windows must be used while developing for Firebase. See ",(0,i.yg)("a",{parentName:"em",href:"https://code.visualstudio.com/docs/terminal/basics#_groups-split-panes"},"here")," for instructions on splitting terminals in VSCode.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run Honeycomb with Firebase Enabled"',title:'"Run',Honeycomb:!0,with:!0,Firebase:!0,'Enabled"':!0},"npm run dev:firebase\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Start the Firebase Emulators"',title:'"Start',the:!0,Firebase:!0,'Emulators"':!0},"npm run firebase:emulators:start\n")),(0,i.yg)("p",null,"Honeycomb is now running in the browser and connected to data on an emulated instance of Firestore. It may be viewed on ",(0,i.yg)("a",{parentName:"p",href:"http://localhost:4000/firestore"},"localhost:4000"),"."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Honeycomb populates the Firestore emulators with the study ",(0,i.yg)("inlineCode",{parentName:"p"},"s1")," and participant ",(0,i.yg)("inlineCode",{parentName:"p"},"p1"),".")),(0,i.yg)("h2",{id:"deploying-on-firebase"},"Deploying on Firebase"),(0,i.yg)("p",null,"Firebase deployments are handled automatically following ",(0,i.yg)("a",{parentName:"p",href:"ci_cd"},"Continuous Integration Continuous Development (CI/CD)")," practices using GitHub Actions. Here we will create custom actions that are connected to the task's Firebase project."),(0,i.yg)("p",null,"Execute the following command to begin initializing Firebase hosting via GitHub actions. Be sure to follow the instructions below as the prompts appear."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Initialize Firebase hosting via Github actions"',title:'"Initialize',Firebase:!0,hosting:!0,via:!0,Github:!0,'actions"':!0},"firebase init hosting:github\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The window should log you in automatically; if not, follow the prompts to log in with the same account you used in the console"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"<username>/<repository name>")," refers to the name of your repository in Github - be sure it's typed correctly!"),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"y"),' for the prompt "Set up the workflow to run a build script before every deploy?"'),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"npm ci && npm run build:firebase"),' for the prompt "What script should be run before every deploy?"'),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"y")," to overwrite the current workflow file"),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"y"),' for the prompt "Set up automatic deployment to your site\'s live channel when a PR is merged?"'),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"main"),' for the prompt "What is the name of the GitHub branch associated with your site\'s live channel?"'),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("inlineCode",{parentName:"li"},"y")," to overwrite the current workflow file")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Firebase will update the files ",(0,i.yg)("inlineCode",{parentName:"p"},"firebase-hosting-pull-request.yml")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"firebase-hosting-merge.yml")," inside the ",(0,i.yg)("inlineCode",{parentName:"p"},".github/workflows/"),' directory. Please ensure the "run" step is ',(0,i.yg)("inlineCode",{parentName:"p"},"npm ci && npm run build:firebase")," in both files!")),(0,i.yg)("h2",{id:"managing-data"},"Managing Data"),(0,i.yg)("p",null,"Honeycomb ships with a CLI script for managing data in Firebase. A local service account must be created in order to use it."),(0,i.yg)("h3",{id:"setting-up-a-service-account"},"Setting up a Service Account"),(0,i.yg)("p",null,"Service accounts are accounts that are not attached to a human user. They authorize access to a Firebase project without someone physically logging in online. We use a service account to give the download script access to the Firestore database automatically."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Return to the project settings your project on the ",(0,i.yg)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase console")),(0,i.yg)("img",{src:r,alt:"Firebase project settings"})),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click on the "Service accounts" tab')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Near the bottom, click "Generate new Private key" and "Generate Key"')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Rename the key ",(0,i.yg)("inlineCode",{parentName:"p"},"firebase-service-account.json")," and move it to the root directory of your task - be sure the file looks grayed out and is not picked up by git!"))),(0,i.yg)("admonition",{type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"A service account has total administrative access to ts Firebase project. The file and keys inside should never be shared and ",(0,i.yg)("strong",{parentName:"p"},"never committed to GitHub."))),(0,i.yg)("h3",{id:"using-the-cli-script"},"Using the CLI Script"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Script Usage"',title:'"Script','Usage"':!0},"npm run cli\n")),(0,i.yg)("p",null,"The CLI script will guide you through the steps needed to manage your data appropriately:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Whether you wish to download or delete data")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Entering the ID of a given study")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Entering the ID of a given participant on that study")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Selecting the sessions to download/delete"),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("kbd",null,"SPACE")," selects a single session and ",(0,i.yg)("kbd",null,"A")," toggles every session"))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The download script will prompt you for where the data should be saved. It defaults to ",(0,i.yg)("inlineCode",{parentName:"p"},"."),", which is your current folder. The folder must exist before running the script.")),(0,i.yg)("h2",{id:"further-reading"},"Further Reading"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"The ",(0,i.yg)("a",{parentName:"em",href:"https://firebase.google.com/docs/emulator-suite"},"Firebase Documentation")," details its Emulator Suite in much greater detail.")),(0,i.yg)("h3",{id:"security-rules"},"Security Rules"),(0,i.yg)("p",null,"Honeycomb uses security rules to authenticate participants and studies for each task. By default participants must be registered to each study in order to complete the task."),(0,i.yg)("p",null,"Firestore rules are defined in the ",(0,i.yg)("inlineCode",{parentName:"p"},"firestore.rules")," file in the home directory. Note the highlighted lines:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-firestore-security-rules",metastring:'title="firestore.rules" showLineNumbers',title:'"firestore.rules"',showLineNumbers:!0},"rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /participant_responses/{studyID}/participants/{participantID} {\n      allow create, read:\n      // highlight-start\n      if\n        // Allows any combination of studyID and participantID to be created in Firebase\n        true\n        // participantID must be in the registered_participants array in the registered_studies/{studyID} document\n        // participantID in get(/databases/$(database)/documents/registered_studies/$(studyID)).data.registered_participants;\n      // highlight-end\n\n      // experimentID must be in the data subcollection\n      match /data/{experimentID} {\n        allow create, read: if true\n\n        // trialID must be in the trials subcollection\n        match /trials/{trialID} {\n          allow create, read: if true\n        }\n      }\n    }\n  }\n}\n")),(0,i.yg)("p",null,"Lines 3 and 4 indicate that Honeycomb attempts to connect to a document at ",(0,i.yg)("inlineCode",{parentName:"p"},"/databases/{database}/documents/participant_responses/{studyID}/participants/{participantID}")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"studyID")," is a given study and ",(0,i.yg)("inlineCode",{parentName:"p"},"participantID")," is a given participant within that study."),(0,i.yg)("p",null,"Line 5 indicates how Honeycomb can interact with that document. Note that Honeycomb cannot update or delete data! You must use the ",(0,i.yg)("a",{parentName:"p",href:"#using-the-cli-script"},"CLI script")," to delete data."),(0,i.yg)("p",null,"Lines 6 through 10 defines our rule for creating a document for a given participant at ",(0,i.yg)("inlineCode",{parentName:"p"},"participant_responses/{studyID}/participants/{participantID}"),". Honeycomb ships with two possible rules:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Line 8 specifies ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," which allows any combination of ",(0,i.yg)("inlineCode",{parentName:"p"},"studyID")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"participantID")," to be created in Firebase."),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"This is the default rule Honeycomb ships with. It is recommended to leave this rule as is and handle the registration of studies in another tool such as ",(0,i.yg)("a",{parentName:"p",href:"prolific"},"Prolific"),"."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Line 10 only allows a ",(0,i.yg)("inlineCode",{parentName:"p"},"participantID")," to be created if the value is in an array called ",(0,i.yg)("inlineCode",{parentName:"p"},"registered_participants")," inside of a document at ",(0,i.yg)("inlineCode",{parentName:"p"},"registered_studies/{studyID}"),". This ensures pre-registration of every study and participant - the ",(0,i.yg)("a",{parentName:"p",href:"#registering-studies"},"next section")," explains how to register studies."))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Firestore rules define every valid path for data in your project. Attempting to connect anywhere besides the paths in your Firestore rules will be automatically denied, even if you have manually saved data elsewhere. This is why ",(0,i.yg)("inlineCode",{parentName:"p"},"firestore.rules")," contains the nested rules in lines 12 - 20. These should be left alone.")),(0,i.yg)("h4",{id:"registering-studies"},"Registering Studies"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to your Firestore Database in the ",(0,i.yg)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase console"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Start collection"')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter ",(0,i.yg)("inlineCode",{parentName:"p"},"registered_studies")," as the collection ID")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter the id of your study as the document id")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Add Field".')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter ",(0,i.yg)("inlineCode",{parentName:"p"},"registered_participants"),' as the field name, and set the type "array"')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Add the id of each study participant to the array as type "string"'),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:s,alt:"Create a study",style:{maxHeight:"600px"}})))),(0,i.yg)("p",null,"The study should look like this when you're finished:"),(0,i.yg)("img",{src:l,alt:"Example study"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Additional studies are created as documents inside the ",(0,i.yg)("inlineCode",{parentName:"strong"},"registered_studies")," collection")))}h.isMDXComponent=!0}}]);