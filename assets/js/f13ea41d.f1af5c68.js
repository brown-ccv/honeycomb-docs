"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[9532],{9365:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(6540),i=a(53);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,r),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(8168),i=a(6540),l=a(53),r=a(3104),o=a(6347),s=a(7485),p=a(1682),u=a(9466);function m(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=c({queryString:a,groupId:n}),[m,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??m;return g({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==o&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},r,{className:(0,l.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return i.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},i.createElement(f,(0,n.A)({},e,t)),i.createElement(v,(0,n.A)({},e,t)))}function w(e){const t=(0,h.A)();return i.createElement(N,(0,n.A)({key:String(t)},e))}},9495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var n=a(8168),i=(a(6540),a(5680)),l=a(1470),r=a(9365),o=a(2355);const s=a.p+"assets/images/clone-code-button-e90c329a7e167ff0f79391cd79af8cc1.webp",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAACFCAYAAABL2gNbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABXESURBVHhe7d0PWFRlvgfwr6GojISwCP4DScAdrER9HL1JFlqxPSt2V9y6aIusqdlqulqrm6WV5WZP7Zrprj4ZZkKFm1fcFCOp/JNBq7i4WOqkkCDqCiHIxVFE3L3ve84ZHGBE0YE5Hr6fZ2fnPefAzAF3v/Ob3/ueoV1wcPB/QEREt7zbtHsiIrrFMdCJiAyCgU5EZBAMdCIig2CgExEZhO4D3ce/I+4bG4zIEYHaHiIickbXyxZlkN83to+2BVSWVSNvdwm+2nRc20NERHa6DPQ+Zh888mQ/UZ13Ura/2lSk3NvDXQb75tVHUGStVLaJiEhngS7bK488+VMl0KW83aex5d2jyliSx2XrxR7s8ris1ivLLirbRERtmS4CvWFQX6sCdwx+tmGIiFRuD3THPnlzw1l9EQhWWjMMdiJq69wW6A3bK7JPfiNh7Ky6T37tgLhnG4aI2ha3BXrC/AHoE+GjtFU2r/7+pgPYMdjlY6aIUCciakvctg49WFTm9uC9njCXgS1vsqKXNzl2JB9DVvhFhyvVqr+ddoCIqI3Q5YVFC5JHYOZSi7al9tlnLh2q3BKeH6Dc1G1LXcuGiKit0/2VovZJU9kbV/vsRcpyRVndy8lQdb16/WqdiKgtclsP/YV1I3D8e+e9blmhywBf8UwOZv7JAp9unbDi2b2o/LF+a0ZW6rJCd5xQtffmFyfuBlrsJ4vFnDfuR892p7Br3lv4IvQBPD42GmE/6YT2HuLw5WqUF+diy5pN+K5a/Y5OP3saLz3YB+0hvmfhW0jX9tcXgEfnzcXQbkDVgTV4JcUq9onnelM8l/w+8Vy7Bo7FlDFD0dO7vfIdtVWnsHdLEjbtr1K2+0Qn4rH7zAjQjuNiFU7lpiMpLRfqV1wxeNIrGN+/M6oPpWJhag3GTovD8N7eyrFT2+firQxlqPIZjNi4BzA41A/eHbXHvlyLqjOFyN3yDtLlqRKRW+m+Qj+r9dcj7w1s1F6Rk6kyzGXf3F06DJmMedMehvknIuRqa+V/AI9O8AsZjsR5iRisfhmqtx1AofKj9ER4jHoFbCP9HkCoCHOgFN9+3jghO4+Zg+cnDEdPT/FUF8VzXQbae/fE8AlzMNnSCX0emYOnRt+FAK8rx9HRGz3vGY85ifYzcaYLYp96vC7MFR20e6FP9DS8OH887u8foIS58tjyJl6evAPCEN6PExZEeuDh4+PzsjZuVUob5cxFHNhdou25Qh67eL4We7edQpH1LIb9rJeourvWrWKR94HBJnQVlbtce15y3KZ9p7o2Xe7/6m8tuR69H+55KATe7Tqjx08DUGvdhOV/fh+bM7/El1/uxjEvMwYGe+O2jn64/bYs7C2QKV+EjqH3IUIEv3dncd7ZVlw5a5X553GICuyI2qK/I2l7vghMSTxXjHgudEZgr444uXMN/rR6A7ZtF8+VY0PPu8MR0Lkz/IMtiAj3R23+Z3j/7XexQZ7LF3+HLXgwIvw7omNAILp8mw3rOeVBFT0GjcTd3Tqg9j++6N3tEvI//wgr30lF+uef4+/fa180OBGz4szi5xAvSieysWH5cnyQIR5bPr94/DPe4fC79A32X7mgl4jcRPcVuly9suKZvWolbq1UWjGydx45orsS7hOfHyDug7Wvbm2iKj/5Gd5Ym43SuhZKNfI/WYVdRZfEuL14V/GgulvIzsrH/8mBqGqjuiu7HAxGVKiskGtx0vqZeJSGRGVc+DmSMvKvHKvMxrq/WdXH9PaGd+V3+PidL5Ff9wVVyP5wL5RTgR963eW8ku4UcDtOfPoW1nxhbdCWCcDYB+7C7WJUe3IXkt7ehNx6b4aqkJsmvm+rtklEbqX7QLe3WWSPXPbbZV9dBrw95NVwD3TTMsVaFOZtdxK+1cg9rcQsYPJGmDoCDu3B8bNyEICw4QHKrjr3WBBiEvfVhcj9Qt1VXzUKc3c3fq5Dx+peTMqtGWjUqKnORYnynO3RwUvZ05itEDm7G/8UsgVkVk6zFHvXp4v3GESkZ7oOdLl6RU5yyircMbBl1S5vst0iJz5lqLtHKU5+7XzmtbRGm8D19FIqXJUVGYfVFlNA+P0i1q8YflcvyJ+i6sguZKu7GihHyT5nz3VO7duLqC8t+lHZU18pLtQ0PTtcWyZeRLRxPebuoq4XKk7g29PKHiLSMV0Hugxt+/LEMVPClWrdfoGRrMrlRwfIoJfLGFtuRYtrlWYXiIgV/MNwf13b5T7cHdxZ3DufDL1uchL0BtTaKrTRVZyvQr42JCL90n3LZfO73yuhLnvmVy4oGooxU/spAS976o4fsat7pzPwbZEsqf0QNkprxjw4AH1EeV5b9C0y9FgJe3RQ3j0Qkb7dEpOisne+5d0jyk1W4+rnoBfV9dQdddX9RUbV+Mx6EnKe0i/EgjARlQ+be6GDnAw9urNxj9ydKs6rK238eyGaiU6ke24L9OOi6pYV9pip4UoL5Vpkv1zeZDUub8rntojHsJOPoTyWspRR5y2YL3JRdEHc+4bA0v9BRPRpr06GbtNVnAO7v0WhPKX2fTB0/FBW6UQ657ZAd2yl2Jce2gNeKjysLM24LvbPepGP5coWTCdLIl58/U28uSARQ12aZtnIOSYT3Q8hMeHK5OjVJ0PdKRuf5ZxSqnTv/mMxZ9IDCHP8PXQKwNC4OZg8WtsmIrdyW6A7tlIkuaZc9shlKEsHditTh02SE6PyYwKUi5S0z3pp2IK5Gf3vCoO3vJTf5y5EjXTtusjcPQXKmm+/Xj3R/mYnQ1tQ0eZV2LS/XIR6e/j1fxjTXn0TSxYvUW8vz8Wj9/TE7R5uWTNKRA24vYcu2yjyD1LY++P23rhjO6UhZTmjCH85MSrZg/xG/kBGUw59l48quXKk8jtk7XBxD+dQBg6XaePSfGTpdllgNfZ+tASvfbQL1tNV6scNdGyv3FBbhdIDnyFj1y2yxIjI4HTxN0Ubsi9LlPcypGU177hfVuSSDH1X/HEMIiIj0G2gN/wj0JI9yOW+pv6INBFRW6TLQLeTk51qpa7OxNnD3dWtFSIiI9B1oEuyWg+J6FrXfiEiIud0H+hERHR9dH+lKBERXR8GOhGRQTDQiYgMgoFORGQQDHQiIoNgoBMRGQQDnYjIILgOXSd69FA/1qChf/2Lf5qZiK4PK3QiIoNgoBMRGQQDnYjIIBjoREQGwUAnIjIIBjoRkUEw0ImIDIKBTkRkEAx0IiKD4JWiDXj85E5EjxqKMD9PsVWFg2kf4esf1WMtiVeK3jjf6OlY+EQMzP7y38yGnD8+hpe2X+t/1r6Injwb40dFIshXfp/mQgWKrVnYuGodMk/YtJ0tQ573AnHeEXXn/She3g44PfOpy/Hp2DBt4zr8kIafP52kbbiOPOe5E6LQv4cvPD3UfTUVxcjbnopla3aiQt1FbsIK3c77Dtz73wmY8st7tTAnvTMNiMei1Rvw4bxYLcyvkykGL6z7EPPGWeqHudTZF0GDYjF71WosiDFpO13L8bzVML8VmBAz9z2sFec8sPeVMJc8fYNgGTcPa9+eArO2j9yDFbp3TwyOioalj7e6fe44Dp7xx519vMQGK3Q9Mg2IxdTJiYgJ1wLXVoCcU91hUbavVaGbEL/0Q0w0iyCtKUHellQkfZKJgjJxyD8Uwx+aiKn/Y0GgzFlbHlY+9jzS/+Oa/4tc+7ybqNDFuUUGddE2rsLTginz4hDaWTza/pV49IV07cDNC5q8AsvHhaKjGNcU7kTye+8ibV8FfMNjMP7pqYjVfqaKPcswbVEmzilb1NrafIXeNWKEGub/rkHZd5n4KDUD1qrL2lHSo/4/j9dCsQYle5Ix/9czsaP8KkHYkGk8omSYCyXbX8Tza7Qwl8oKkJ36Ep7eWqA+likYA+9VjrhE/9Hj8VCj877OFwtxbnn785q8XRwWhb4izMVPhqwPtirf5hqxmP6wGuY4lYn5M95QwlyqOJqJlb9diLQfapRt32HjMPGOdsqYWl+bD/Sz/8zD8fLj+DotGRuzjqHq39oBaiGxeO3jT/Hpp+KWvAAWba8zQbPeU7/u0w1YMlq8ndT256zfKUK4AOlvPIFJi9Yjrzmt7mG90V0bnrtQrI3qs5WdE5EreaJDB2XgEjmpO1DwozzvSVfO2zXFvxCLxBGByu+oxroNSVaXPTBMCaMQoRTgNuRtWobGD21FUso+qK9NQbA8GqnspdbHHnqNFRkbMnDwDKvy1pGO7CPaG3L/CPxsmDpsLBLxAwPVYVke0kTBWZcjhUmYOXEmVu4UZXlz/XC2rh0QFDERJifFpMUcLKJcOoeKY8rANcR5z0qU5+36qcOgGbGIVEK3Avv+uh7nXJfnGDOor/r7qDyEbY7/DnamSEz8ZST8tN9lYMhwqA0Yam0MdGp16VvytNUQvoh8JBbtnL1DHzYGkYHqgYrD25CjjFygcCNyTqhDT3McVsyNqRc+vqNfxuwRvmqlezQLaYUuTMYWE4vf3B+sjGR1/tYeZegiwxGmTCgIpcXYqY7qyAne11YuQfydDr9F30BEaUNqXQx0an170pFXog5N/aIwuq6ZcoVlVAR8ld3FyFq/T9nnGsVYuTQN+efl2BOB0bPxYdIixA8IQvTsd7B2xlDxMiNU5CF5VRKO3wJ5HjRDvPgp86U25KWniP92pe4wdVJHtvJ8daAxj3sNq/8wEQO7iY2aElgLtWf28YP68kKtjYFObpCH1H3F2sRjBKJ+oex0EIu4wWqVjB9ykOzqKtmahFlPrUT2Ka1T3tOCia+/g3kxQUprwXY0HYunzUeaVTmsc7GYHh2k/q5O7MCaHa5+BfJDF2Wi1ZEZcS+txeuTB8LXQ2Z5NlZOmYSFB85ox8ldGOjkFsXvZ8F6UY48ETEioX7PdbR4m6/sqIF1TypsLVElXyhHeYVNm/ysz+QfgYF3X2OJoE4ETY25MmH5yUoUt/Q7Cv9YvPDe65gyLFD8y8nVOkl4btJipJeJM7js7LdJrYmBTu5h24i8H5REh2ffgRjnkOhx90aoAW87jO0pNtctBNGYBkzH8nULEHunLzwv21CwdRlm/nYZ0vaXqAHvG4rYhWuxNMHspBmkJ9GYPDJUnbA8lYV1ziYsb1o5zl3QhoGPYG3SdER1F894uQJ5a57DpEVpsL+RGR7op43IXRjo5CY2JG8/rPZ7Pc2wTDBp4RmPKLOy4hm2I1lw3aUxGlMcFiyMRZi8bqwiByufeAwz/5KJgqOZSHphEh5/bj2sykmZYB7/e8wdpt9ID5o6DpFd5fmJdzK7kuqC1bXKUaMV3qYQs3rBVVkekl94EvM31n/G7ibtVbmyHPW77dRaGOjkPlszcahSHYZaEhEkssmUMBR9lTwXFeBmV14cozJNiNaW99mQ99FL2Ppj/ZrWdiAZz/wxW1tTHYjImHuU/foTjSmjtIt9yvYh9YOWujZzJ4pLtaFgO7ge838zH+sPNJx6jURoE6thqHUw0MmNdiL9QIXaJugdidiQLhg3qK92RWIOkve6voFg6WG/rKgcxSJ1nD7DntPiqMo3sL82ck5ezj/7Dyuw9KUpiPbXdrYCU8IYRPrIUQ0Kdq/Dvmb+qppz3tuO2C/AEi+y/5vs/EIuh2WmxUcylXtqfQx0cquc1CxtIi8IkWMmYmBftcor3r+xRSb4av5tn7gLRMQEbXVIA6axoeiuHagoOaQOnAmZgiWLpiNmUCjMw+Iw7+0FiHb2gC5nwewHzWrv3HYY297VVgxdr2aed/HWHBSokwsYkjAF5kZfa8aUhCHqhUU1VmStc34FLrU8BvptnvDy9oa34629/aPkPOBhcjzmBU/+xlyrcAsOnFDjKGhUDJQ8l6HwfhMhZQqCeVAkIh1ucp7OnjOe3QY4HDMjyGHCNTs7X1un7YnQsUuxfEYMzL21L/APRczkJfhzYiTUNS4lyMv8Rhk59VAkQtV2v8o3EiNHNpGMzs7b4fs9u0ViQN2x+uftyJQwHkO6qc9TvHNV8+cZmnvehUnY+A/1nZRn3zi8uky8GIQrq/WVD+ea/variFP/4VCwdTVSXHmZKjULP22x272YEHcntM9avIaW+/TFtvxpi6aEP+HD8RFqxSnUWJPxi2fWa1tOjHoZG3439DovL2/4KYYmDJ+1FPMeVtecX50N1tSFeDbFevUXltFL8PEMe/hLxUif8RRWHrvKd4xahI9/Z3H4+qZc7dMXLViQvAjDZZvEloekSc8jrbkB2tzzVogqfNkSxPVzfCWor+KbZXjy1UztBZPcgfUmuZ0tJQuH7UvjRBwc/vKv2rgl2JC9fBomvZiEzIMlsNU9r6qmsgQFe9Kw7Mlf45mmwlzauhhJO47DJj8G6HKFeAF4C6uaDMWbZ0qIxxCt512Sk4ZNN1IN39B5W5E0+1eYvy4bxRUO680v18BWYkX6G4/jcYa527FC1wl+HjoR3SxW6EREBsFAJyIyCAY6EZFBMNCJiAyCgU5EZBAMdCIig2CgExEZBAOdiMggGOhERAbBK0WpVXl5yb8sQUQtgRU6EZFBMNCJiAyCgU5EZBDsoVOrathDP3/+vDYiopvFCp2IyCAY6EREBsFAJyIyCAY6EZFBMNCJiAyCq1w0Xv1jkPBYLIaFBsCrg7az+ixOHtyOv/7lY+zlYgyX4CoXopbDQEdXxMx+BQn/FQB7jjdSXYiti+cjJZ+vfTeLgU7UcthyGf10XZif/2EHUl5/CvHx8Yif8To+/kcpLsmv6RSCmKm/Qi85JiLSKQ8fH5+XtXHbdHQfzt5xD3pY38HcNzbj0Olqdf+F0zicfQBdhoxEv64e8OjaFV2OZGBviXqYbkyHDvXfB126pLxkEpELsELHeex4cxaeXb1XjBo6iZSDJ7VxAHrdDbTTtoiI9IaB3hz8bRGRjjGirsHLw94iOI+zxQCnRYlIrxjoTeqF+Lu1qdDzx5C7Ux0SEekRA70J4QkzEd1L7ZqX7t+CTGVERKRPDPSr8Ir+PZ4dHQJPufFjFt778z+V/UREesVAd8Kr/xNY+MQgdJUb8qKit1fgn2yeE5HOMdAbkGH+4vwY3CFL80v2K0TVY0REesZAd+BlmYZXRJiHyIUtsjJf9Bwv9yeiWwYDXSPD/NVZI9HbHuaszInoFsNAF5TKXIR5L+UDXY4ibTErcyK69bT5T1u0V+ZqmBci84MU7ClTjzljO3kQhWe0DWo2ftoiUctp84Ee9bs1mDnEpG1dW+HW8XguhdX7jWKgE7UctlyIiAyCf+CCWhUrdKKWwwqdiMggGOhERAbBQCciMggGOhGRQTDQiYgMgqtcqFU1XOVCRK7DCp2IyCAY6EREBsFAJyIyCPbQiYgMghU6EZFBMNCJiAyCgU5EZBAMdCIig2CgExEZBAOdiMggGOhERAbBQCciMggGOhGRQTDQiYgMgoFORGQQDHQiIoNgoBMRGQQDnYjIEID/B504qs9kmFTXAAAAAElFTkSuQmCC",u=a.p+"assets/images/workflow-permissions-e7b2dd2b9b729493bc61a15033a45d45.png",m={id:"quick_start",slug:"/quick_start",title:"Quick Start",description:"Quick start guide for Honeycomb"},d=void 0,g={unversionedId:"quick_start",id:"version-3.2.x/quick_start",title:"Quick Start",description:"Quick start guide for Honeycomb",source:"@site/versioned_docs/version-3.2.x/quick_start.mdx",sourceDirName:".",slug:"/quick_start",permalink:"/honeycomb-docs/docs/3.2.x/quick_start",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.2.x/quick_start.mdx",tags:[],version:"3.2.x",lastUpdatedAt:1715090738,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"quick_start",slug:"/quick_start",title:"Quick Start",description:"Quick start guide for Honeycomb"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/honeycomb-docs/docs/3.2.x/"},next:{title:"Prerequisites",permalink:"/honeycomb-docs/docs/3.2.x/prerequisites"}},c={},y=[{value:"Creating Your Task Repository",id:"creating-your-task-repository",level:2},{value:"Cloning the Repository",id:"cloning-the-repository",level:2},{value:"Installing Prerequisites",id:"installing-prerequisites",level:2},{value:"Initial Install",id:"initial-install",level:3},{value:"Setting Up Node",id:"setting-up-node",level:3},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Run the Task in Development Mode",id:"run-the-task-in-development-mode",level:2},{value:"Saving data",id:"saving-data",level:3},{value:"Edit the Task",id:"edit-the-task",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:y},b="wrapper";function f(e){let{components:t,...m}=e;return(0,i.yg)(b,(0,n.A)({},h,m,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"creating-your-task-repository"},"Creating Your Task Repository"),(0,i.yg)("p",null,"The Honeycomb repository is a template and serves as the starting point for all tasks. Creating your repository from the template starts your project with the same directory structure and files as an existing repository."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Go to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/brown-ccv/honeycomb"},"Honeycomb repository"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click on ",(0,i.yg)("inlineCode",{parentName:"p"},"Use this template")," and select ",(0,i.yg)("inlineCode",{parentName:"p"},"Create a new repository"),".\n",(0,i.yg)("img",{alt:"Use this template",src:a(6396).A,width:"2408",height:"1212"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter the owner, name, and description of your repository and click on ",(0,i.yg)("inlineCode",{parentName:"p"},"Create repository from template"),".\n",(0,i.yg)("img",{alt:"Create repository",src:a(2309).A,width:"2408",height:"1212"})),(0,i.yg)("admonition",{parentName:"li",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"We recommend creating a public repository and leaving ",(0,i.yg)("inlineCode",{parentName:"p"},"Include all branches")," unchecked"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Ensure the repositories workflow permissions are set to "Read and write permissions"'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("em",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"em"},"Settings -> Actions -> General -> Workflow permissions"))),(0,i.yg)("img",{src:u,alt:"GitHub workflow permissions settings"}))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Additional details about template repositories can be found on the ",(0,i.yg)("a",{parentName:"em",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template"},"Github Docs"),".")),(0,i.yg)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),(0,i.yg)("p",null,"With the repository now setup it can be cloned onto your computer."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to the repository on ",(0,i.yg)("a",{parentName:"p",href:"https://github.com"},"GitHub"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click the ",(0,i.yg)("inlineCode",{parentName:"p"},"Code")," button and copy the URL"),(0,i.yg)("img",{src:s,alt:"GitHub clone repo button"})),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open a terminal and navigate to where you want the cloned directory"))),(0,i.yg)(l.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,i.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Powershell"',title:'"Powershell"'},"cd 'path/to/directory'\n"))),(0,i.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Terminal.app"',title:'"Terminal.app"'},"cd 'path/to/directory'\n")))),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Clone the repo with the following command")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title='Paste the URL you copied earlier'",title:"'Paste",the:!0,URL:!0,you:!0,copied:!0,"earlier'":!0}," git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY>\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Git can be downloaded ",(0,i.yg)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here")," if it is not already on your system.")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Additional details and alternative methods for cloning a repository can be found on the ",(0,i.yg)("a",{parentName:"em",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui"},"Github Docs"),".")),(0,i.yg)("h2",{id:"installing-prerequisites"},"Installing Prerequisites"),(0,i.yg)("p",null,"All of the needed programs for Honeycomb must be installed before we can develop our task. We will use a ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Package_manager"},"package manager")," to automatically install them."),(0,i.yg)("p",null,"See ",(0,i.yg)("a",{parentName:"p",href:"prerequisites"},"Prerequisites")," for more information about these programs."),(0,i.yg)("h3",{id:"initial-install"},"Initial Install"),(0,i.yg)(l.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,i.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Run Powershell as an admin from the start menu"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Powershell admin launcher",src:a(8628).A,width:"783",height:"679"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to the root directory of your cloned repository")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Paste the following command and follow the prompts to install the listed programs:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"./winget.ps1\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'The "Visual Studio Installer" will open a GUI during installation. Make sure "Desktop Development with C++" is checked before continuing.')))),(0,i.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.yg)("p",null,"The most commonly used package manager on macOS is ",(0,i.yg)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Paste the following command in a macOS Terminal and follow the prompts to install Homebrew."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Paste the following command and follow the prompts to install the listed programs:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"brew bundle\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Install Xcode (not available on Homebrew)"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")))))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you are running into issues after installing the packages please restart your terminal and/or reboot your computer. This should resolve most issues.")),(0,i.yg)("h3",{id:"setting-up-node"},"Setting Up Node"),(0,i.yg)("p",null,"NVM (Node Version Manager) is a tool for installing and using multiple versions on node on your computer. It must first be installed:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Install NVM"),(0,i.yg)(l.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,i.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,i.yg)("em",null,"The previous step installs"," ",(0,i.yg)("a",{href:"https://github.com/coreybutler/nvm-windows"},"NVM for Windows")," via the winget package manager. Note that this is a different tool than NVM with slight differences needed for compatibility with Windows.")),(0,i.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.yg)(o.A,{language:"sh",mdxType:"CodeBlock"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Copy the version number listed in ",(0,i.yg)("inlineCode",{parentName:"p"},".nvmrc"),". ",(0,i.yg)("em",{parentName:"p"},"The version may be different than the screenshot below.")),(0,i.yg)("img",{src:p,alt:".nvmrc file"})),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Install that version."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"nvm install [version]\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Use the needed version. This will automatically check the version listed in the ",(0,i.yg)("inlineCode",{parentName:"p"},".nvmrc")," file."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"nvm use\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Set the current version as your default"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"nvm alias default node\n")))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You can skip step 4 if you've already set a default node version in a different project.")),(0,i.yg)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,i.yg)("p",null,"There are many node packages used by Honeycomb that also need to be installed. Node (installed in the previous step) comes with its own package manager to install, update, and maintain these dependencies throughout the development lifecycle."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install Honeycomb\'s dependencies"',title:'"Install',"Honeycomb's":!0,'dependencies"':!0},"npm install\n")),(0,i.yg)("p",null,"Certain dependencies are best installed globally within node. These tools will be available from the command line anywhere on your system."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install Honeycomb\'s global dependencies"',title:'"Install',"Honeycomb's":!0,global:!0,'dependencies"':!0},"npm install -g electron firebase-tools dotenv-cli\n")),(0,i.yg)("h2",{id:"run-the-task-in-development-mode"},"Run the Task in Development Mode"),(0,i.yg)("p",null,"Running the task in development mode causes it to hot-reload whenever changes are made to the app. This is how you'll run the project while building your task."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run the task in dev mode"',title:'"Run',the:!0,task:!0,in:!0,dev:!0,'mode"':!0},"npm run dev\n")),(0,i.yg)("p",null,"This script launches an electron window with the task and inspector open."),(0,i.yg)("p",null,"You can quit the task in the middle of development if needed:"),(0,i.yg)(l.A,{groupId:"os",queryString:!0,defaultValue:"mac",mdxType:"Tabs"},(0,i.yg)(r.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,i.yg)("kbd",null,"Control")," + W"),(0,i.yg)(r.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.yg)("kbd",null,"\u2318")," + Q"),(0,i.yg)(r.A,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.yg)("kbd",null,"Control")," + W")),(0,i.yg)("h3",{id:"saving-data"},"Saving data"),(0,i.yg)("p",null,"Data is saved throughout the task, even when running in development mode. The location of the task is logged at the beginning of the task wherever you ran ",(0,i.yg)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,i.yg)("p",null,"Note how the data is organized by study and participant. Every run through of the task will save the data somewhere within this folder!"),(0,i.yg)("h2",{id:"edit-the-task"},"Edit the Task"),(0,i.yg)("p",null,"Now that the task is up and running we can make our first changes to the code! We'll edit the ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," file to reflect your information."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a new branch"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git checkout -b <branch-name>\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," and edit it to reflect your app:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"name")," is your task's name, generally this is the name of our repository"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"description")," should be rewritten to better match your task"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"author")," is your lab (or PIs) name, email, and website"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"honeycombVersion")," is the number currently in the ",(0,i.yg)("inlineCode",{parentName:"li"},"version")," field"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"version")," should be reset to 1.0.0"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"repository")," is the link the GitHub repository you created ",(0,i.yg)("a",{parentName:"li",href:"#2-start-your-new-task-from-our-template-repository"},"earlier"),"."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Save your changes and commit them to git:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'git commit -m "Commit message goes here!"\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a ",(0,i.yg)("a",{parentName:"p",href:"version_control#create-a-pull-request"},"pull request")," to bring your changes into the ",(0,i.yg)("inlineCode",{parentName:"p"},"main")," branch"))),(0,i.yg)("h2",{id:"next-steps"},"Next Steps"),(0,i.yg)("p",null,"Honeycomb tasks can be configured to run as a web app in Firebase, or as desktop application via electron. The desktop application can receive port signals from EEG, cameras, foot pedals, and more."),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"firebase"},"Firebase")," page explains how to set up your task with Firebase."),(0,i.yg)("p",null,"To learn more about how to configure your task for these different scenarios, see ",(0,i.yg)("a",{parentName:"p",href:"environment_variables"},"Environment Variables"),"."),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"npm_scripts"},"NPM Scripts")," page lists every script you can run and which environment they use."))}f.isMDXComponent=!0},8628:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/powershell_admin-33d18a547790e540d5630c7626b766c6.png"},6396:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/template_0-a1b5129c7526d910bfd8ca1b78464793.png"},2309:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/template_1-e2b5ed212b0dc62bd3a18b45337a1872.png"}}]);