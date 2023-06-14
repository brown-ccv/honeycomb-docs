"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[4304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,k=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={id:"deploy_online",slug:"/deploy_online",title:"Deploy online",description:"Guide for deploying Honeycomb online"},a=void 0,l={unversionedId:"deploy_online",id:"deploy_online",title:"Deploy online",description:"Guide for deploying Honeycomb online",source:"@site/docs/online_integtration.mdx",sourceDirName:".",slug:"/deploy_online",permalink:"/honeycomb-docs/docs/deploy_online",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/online_integtration.mdx",tags:[],version:"current",lastUpdatedAt:1686755669,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"deploy_online",slug:"/deploy_online",title:"Deploy online",description:"Guide for deploying Honeycomb online"},sidebar:"mySidebar",previous:{title:"Firebase",permalink:"/honeycomb-docs/docs/firebase"},next:{title:"Continuous Integration",permalink:"/honeycomb-docs/docs/ci"}},p={},s=[{value:"Usage with PsiTurk",id:"usage-with-psiturk",level:2},{value:"Prebuilt version",id:"prebuilt-version",level:3},{value:"Build instructions",id:"build-instructions",level:3},{value:"Running PsiTurk",id:"running-psiturk",level:3},{value:"Running on the Web",id:"running-on-the-web",level:2},{value:"Using Github Pages",id:"using-github-pages",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage-with-psiturk"},"Usage with PsiTurk"),(0,r.kt)("p",null,"While this set up is optimized for Electron, we added functionality that will make use with PsiTurk easy. The application will detect if it's being used in a Turk environment and will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save the data to the default PsiTurk SQLite database."),(0,r.kt)("li",{parentName:"ul"},"Switch the language to Turk specific, if ",(0,r.kt)("inlineCode",{parentName:"li"},"src/language/<locale>.mturk.json")," exists."),(0,r.kt)("li",{parentName:"ul"},"Use the Turk-specific timeline if different than the primary timeline.")),(0,r.kt)("h3",{id:"prebuilt-version"},"Prebuilt version"),(0,r.kt)("p",null,"When GitHub Actions is run, a PsiTurk build will be created automatically, and can be downloaded from its artifacts (skip next step if using). The workflows responsible for building the PsiTurk application are ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/package-home-all.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/release-home-all.yml"),". The first one has to be triggered manually, the latter is triggered when you tag a release."),(0,r.kt)("h3",{id:"build-instructions"},"Build instructions"),(0,r.kt)("p",null,"To set up your PsiTurk project, we provide a script that does the conversion.\nPsiTurk is a Python package used to manage HITs in Mechanical Turk. Before using the provided script, install ",(0,r.kt)("a",{parentName:"p",href:"https://psiturk.org/"},"PsiTurk"),"."),(0,r.kt)("p",null,"You'll need to follow these steps (the path to the PsiTurk project should be a directory you wish to be created):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build the application: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"psiturkit")," directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"cd psiturkit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it's the first time you're running the script:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"./psiturk-it -p <PATH_TO_NEW_PSITURK_PROJECT>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To update an existing PsiTurk project (the path to the PsiTurk project should already exist from the previous steps):",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"./psiturk-it -u -p <PATH_TO_NEW_PSITURK_PROJECT>")))),(0,r.kt)("h3",{id:"running-psiturk"},"Running PsiTurk"),(0,r.kt)("p",null,"After that, just navigate to your newly created PsiTurk project directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell> psiturk #start psiturk\npsiturk> server on #start server\npsiturk> debug #debug mode\n")),(0,r.kt)("h2",{id:"running-on-the-web"},"Running on the Web"),(0,r.kt)("h3",{id:"using-github-pages"},"Using Github Pages"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," generates static content into the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory that can be served using any static contents hosting service. The workflow ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/release-home-all.yml")," uploads the build directory to the ",(0,r.kt)("inlineCode",{parentName:"p"},"gh-branch")," to serve the application on GitHub pages as an example. After a creating a tag, the workflow will run and your application will be served at ",(0,r.kt)("inlineCode",{parentName:"p"},"<github user>.github.io/<repository>"),".\nFor this step to succeed you will need to create a deploy key and enable GitHub Pages for your repository."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a new ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"SSH key"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By default, your public key should have been created in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub")," or use the name you've provided.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy key to clipboard with ",(0,r.kt)("inlineCode",{parentName:"p"},"xclip -sel clip < ~/.ssh/id_rsa.pub")," and paste it as a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys"},"deploy key")," in your repository. Copy file content if the command line doesn't work for you. Check the box for ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow write access")," before saving your deployment key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You'll need your private key as a ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub secret")," to allow the workflow to run the deployment for you.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create the secret, copy your private key (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"xclip -sel clip < ~/.ssh/id_rsa"),") and paste a GitHub secret with name ",(0,r.kt)("inlineCode",{parentName:"p"},"GH_PAGES_DEPLOY"),". Copy file content if the command line doesn't work for you. Save your secret.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"publishing source")," for your repository is configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."))))}d.isMDXComponent=!0}}]);