"use strict";(self.webpackChunkhoneycomb=self.webpackChunkhoneycomb||[]).push([[9229],{9365:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(6540),l=a(53);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(o.tabItem,r),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(8168),l=a(6540),o=a(53),r=a(3104),i=a(6347),s=a(7485),u=a(1682),c=a(9466);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var y=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},r,{className:(0,o.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},l.createElement(f,(0,n.A)({},e,t)),l.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,y.A)();return l.createElement(w,(0,n.A)({key:String(t)},e))}},7725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(8168),l=(a(6540),a(5680)),o=a(1470),r=a(9365),i=a(2355);const s={id:"local_application",slug:"/local_application",title:"Local Application",description:"Guide for deploying a task as a local application"},u=void 0,c={unversionedId:"deployments/local_application",id:"deployments/local_application",title:"Local Application",description:"Guide for deploying a task as a local application",source:"@site/docs/deployments/local_application.mdx",sourceDirName:"deployments",slug:"/local_application",permalink:"/honeycomb-docs/docs/local_application",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/deployments/local_application.mdx",tags:[],version:"current",lastUpdatedAt:1711378169,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"local_application",slug:"/local_application",title:"Local Application",description:"Guide for deploying a task as a local application"},sidebar:"mySidebar",previous:{title:"Continuous Integration / Deployment",permalink:"/honeycomb-docs/docs/ci_cd"},next:{title:"Firebase",permalink:"/honeycomb-docs/docs/firebase"}},d={},p=[{value:"Creating a Release",id:"creating-a-release",level:2},{value:"Installing the task",id:"installing-the-task",level:2},{value:"Running the Task",id:"running-the-task",level:2},{value:"Working with Data",id:"working-with-data",level:2},{value:"Early Exits",id:"early-exits",level:3}],m={toc:p},h="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(h,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"A major feature of Honeycomb is the ability to bundle JsPsych tasks into applications that can be run on any computer in a lab or clinic. Installers for these applications can be created for Windows, Mac, and Linux. The applications can be run without an internet connection, and do not require any additional software to be installed on the computer."),(0,l.yg)("p",null,'Installers for these applications can be created on demand and/or automatically when a new release is created. This is called "Continuous Deployment" - more information about Honeycomb\'s CI/CD workflow can be found here ',(0,l.yg)("a",{parentName:"p",href:"ci_cd"},"here"),"."),(0,l.yg)("h2",{id:"creating-a-release"},"Creating a Release"),(0,l.yg)("p",null,"Follow the ",(0,l.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release"},"GitHub documentation")," for creating a release."),(0,l.yg)("p",null,"The tag should be in the format ",(0,l.yg)("inlineCode",{parentName:"p"},"vX.X.X")," where ",(0,l.yg)("inlineCode",{parentName:"p"},"X.X.X")," is the version number of the release. For example, if the release is version 1.0.0, the tag should be ",(0,l.yg)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,l.yg)("admonition",{type:"warning"},(0,l.yg)("p",{parentName:"admonition"},"Your release ",(0,l.yg)("strong",{parentName:"p"},"must")," included a new tag for the CI/CD workflow to work.")),(0,l.yg)("h2",{id:"installing-the-task"},"Installing the task"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},'Navigate to the repository\'s "Releases" tab and select the tag you created from ',(0,l.yg)("a",{parentName:"li",href:"#creating-a-release"},"above")),(0,l.yg)("li",{parentName:"ol"},"Download the correct installer for your operating system"),(0,l.yg)("li",{parentName:"ol"},"Double click the installer to run it. Follow the instructions to install the application.")),(0,l.yg)("h2",{id:"running-the-task"},"Running the Task"),(0,l.yg)("p",null,"The task can be run by double-clicking the application icon on the desktop."),(0,l.yg)("p",null,"The local application will run the task in a full-screen window. This aims to prevent study participants from doing anything else on the computer while the task is running. However, the task can be exited if needed with the following shortcut:"),(0,l.yg)(o.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,l.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,l.yg)("kbd",null,"Control")," + W"),(0,l.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,l.yg)("kbd",null,"\u2318")," + Q"),(0,l.yg)(r.A,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.yg)("kbd",null,"Control")," + W")),(0,l.yg)("h2",{id:"working-with-data"},"Working with Data"),(0,l.yg)("p",null,"Data is automatically saved throughout the task and moved to a nested folder structure on the Desktop when the task is completed. Note how the folders are organized by ",(0,l.yg)("inlineCode",{parentName:"p"},"studyID")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"participantID"),". Each session is saved as its own ",(0,l.yg)("inlineCode",{parentName:"p"},".json")," file; it's name is the timestamp of ",(0,l.yg)("inlineCode",{parentName:"p"},"start_date")," of the task."),(0,l.yg)("h3",{id:"early-exits"},"Early Exits"),(0,l.yg)("p",null,'The run-through of an experiment in which the tasks exits prematurely will NOT be sent to the desktop. However, what data was collected is available in the user\'s "userData" folder which can be found in the following location:'),(0,l.yg)(o.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,l.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,l.yg)(i.A,{language:"sh",mdxType:"CodeBlock"},"%APPDATA%\\honeycomb\\TempData")),(0,l.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,l.yg)(i.A,{language:"sh",mdxType:"CodeBlock"},"~/Library/Application Support/honeycomb/TempData")),(0,l.yg)(r.A,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.yg)(i.A,{language:"sh",mdxType:"CodeBlock"},"~/.config/honeycomb/TempData"))),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"The ",(0,l.yg)("inlineCode",{parentName:"p"},".json")," file will likely not be formatted correctly because of the early exit. Take extra care to fix the file before using it for data analysis.")))}g.isMDXComponent=!0}}]);