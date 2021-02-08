(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(88)),a={id:"best_practices",title:"Best Practices"},c={unversionedId:"best_practices",id:"best_practices",isDocsHomePage:!1,title:"Best Practices",description:"Write good commit messages",source:"@site/docs/best_practices.md",slug:"/best_practices",permalink:"/honeycomb-docs/docs/best_practices",editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/best_practices.md",version:"current",sidebar:"someSidebar",previous:{title:"Project Organization",permalink:"/honeycomb-docs/docs/folders"},next:{title:"Troubleshooting",permalink:"/honeycomb-docs/docs/troubleshooting"}},s=[{value:"Write good commit messages",id:"write-good-commit-messages",children:[]},{value:"Use git flow (ish)",id:"use-git-flow-ish",children:[]},{value:"Keep your code style consistent",id:"keep-your-code-style-consistent",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"write-good-commit-messages"},"Write good commit messages"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/commitizen/"},"Commitizen")," is a great tool for writing angular commits - this will create a standardized commit format which makes for easier change logging and more sane messages."),Object(i.b)("h3",{id:"use-git-flow-ish"},"Use git flow (ish)"),Object(i.b)("p",null,"Your ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch should be where official releases are made (whenever code is used in real life tasks). Use branches for any new features or fixes and then use pull requests to merge those into ",Object(i.b)("inlineCode",{parentName:"p"},"main"),". After merging into ",Object(i.b)("inlineCode",{parentName:"p"},"main")," you can tag a release. This will ensure you can always go back to exactly the code that was working with a specific subject/session."),Object(i.b)("h3",{id:"keep-your-code-style-consistent"},"Keep your code style consistent"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"let")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"var")),Object(i.b)("li",{parentName:"ul"},"fat arrow functions (",Object(i.b)("inlineCode",{parentName:"li"},"const myFunc = (var) => doSomething(var)"),") instead of es5/6 functions (",Object(i.b)("inlineCode",{parentName:"li"},"function myFunc(var) { doSomething(var) }"),")"),Object(i.b)("li",{parentName:"ul"},"camel case for variable, and function names (",Object(i.b)("inlineCode",{parentName:"li"},"doSomething"),") instead of snake case (",Object(i.b)("inlineCode",{parentName:"li"},"do_something"),")"),Object(i.b)("li",{parentName:"ul"},"but snake case inside json is fine"),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"tab")," === two spaces"),Object(i.b)("li",{parentName:"ul"},"file exports at the bottom of the file in one chunk instead of exporting the function declaration"),Object(i.b)("li",{parentName:"ul"},"when in doubt, leave future you a comment (you'll never regret it)")))}u.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);