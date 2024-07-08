"use strict";(self.webpackChunkhoneycomb_docs=self.webpackChunkhoneycomb_docs||[]).push([[9818],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?t.createElement(g,s(s({ref:a},c),{},{components:n})):t.createElement(g,s({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5754:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const i={id:"variants",slug:"/variants",title:"Variants",description:"Overview of Honeycomb variants"},s=void 0,o={unversionedId:"variants",id:"version-3.3.x/variants",title:"Variants",description:"Overview of Honeycomb variants",source:"@site/versioned_docs/version-3.3.x/variants.mdx",sourceDirName:".",slug:"/variants",permalink:"/docs/3.3.x/variants",draft:!1,editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-3.3.x/variants.mdx",tags:[],version:"3.3.x",lastUpdatedAt:1720468390,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"variants",slug:"/variants",title:"Variants",description:"Overview of Honeycomb variants"}},l={},p=[{value:"Variant-specific Executables",id:"variant-specific-executables",level:2},{value:"Variant-specific Workflows",id:"variant-specific-workflows",level:2}],c={toc:p},m="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"variant-specific-executables"},"Variant-specific Executables"),(0,r.yg)("p",null,"In order to create multiple variants of a task that can be co-installed, it is necessary to add new scripts to the ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," file in addition to creating the necessary environment variables for configuration. Each variant must have a unique, lowercase name. Optionally, a unique icon can be used for each variant by saving multiple icons to the icons directories with the same names as the variants. Example scripts for Windows, Mac, and Linux are shown below."),(0,r.yg)("p",null,"Windows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"package:windows:<task_name>": "electron-packager . <task_name> --platform win32 --arch x64 --icon ./assets/icons/win/<task_name> --out dist/ --overwrite --asar"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"postpackage:windows:<task_name>": "electron-installer-windows --src dist/<task_name>-win32-x64/ --dest dist/installers/ --overwrite --homepage https://ccv.brown.edu/ --name <task_name> --exe <task_name>.exe --productName <task_name>"\n')),(0,r.yg)("p",null,"Mac:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"package:mac:,<task_name>": "electron-packager . <task_name> --platform darwin --arch x64 --out dist/ --icon ./assets/icons/mac/<task_name>.icns --overwrite"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"installer:mac:<task_name>": "electron-installer-dmg ./dist/<task_name>-darwin-x64/<task_name>.app <task_name>-${npm_package_version} --out ./dist/installers/ --icon ./assets/icons/mac/<task_name>.icns --overwrite"\n')),(0,r.yg)("p",null,"Linux:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"package:linux:<task_name>": "electron-packager . <task_name> --platform linux --arch x64 --icon ./assets/icons/mac/<task_name> --out dist/ --overwrite"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"postpackage:linux:<task_name>": "electron-installer-debian --src dist/<task_name>-linux-x64/ --dest dist/installers/ --arch x64 --overwrite --name <task_name> --productName <task_name> --genericName <task_name> --bin <task_name>"\n')),(0,r.yg)("h2",{id:"variant-specific-workflows"},"Variant-specific Workflows"),(0,r.yg)("p",null,"In order to use Github workflows to build and upload executables for each variant, the ",(0,r.yg)("inlineCode",{parentName:"p"},"build.yaml"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"package.yaml"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"release.yaml")," files must be modified as well. For all three files, a new row should be added to the matrix variable as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"variant: [<comma_separated_list_of_variant_names>]\n")),(0,r.yg)("p",null,"Add the following before ",(0,r.yg)("inlineCode",{parentName:"p"},"npm build")," in the steps section of ",(0,r.yg)("inlineCode",{parentName:"p"},"build.yaml"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"package.yaml"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"release.yaml"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"- name: Load .env file for variant\n  uses: xom9ikk/dotenv@v1.0.2\n  with:\n    path: ./env\n    mode: ${{matrix.variant}}\n")),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"package.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"release.yaml"),", replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"# Build electron app package installers")," section with the following code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"- name: package electron - windows\n  if: startsWith(matrix.os, 'windows')\n  run: npm run package:windows:${{ matrix.variant }}\n- name: package electron - linux\n  if: startsWith(matrix.os, 'ubuntu')\n  run: npm run package:linux:${{ matrix.variant }}\n- name: package electron - mac\n  if: startsWith(matrix.os, 'mac')\n  run: npm run package:mac:${{ matrix.variant }}\n- name: npm rebuild - mac\n  if: startsWith(matrix.os, 'mac')\n  run: npm rebuild\n- name: Mac installer\n  if: startsWith(matrix.os, 'mac')\n  run: npm run installer:mac:${{ matrix.variant }}\n")),(0,r.yg)("p",null,"Replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"# Upload installers to github action")," section in ",(0,r.yg)("inlineCode",{parentName:"p"},"package.yaml")," with the following code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"- name: upload win-installer\n    uses: actions/upload-artifact@master\n    if: startsWith(matrix.os, 'windows')\n    with:\n      name: ${{ format('win-installer-{0}', github.event.inputs.setting) }}\n      path: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-setup.exe\n  - name: upload mac-installer\n    uses: actions/upload-artifact@master\n    if: startsWith(matrix.os, 'mac')\n    with:\n      name: ${{ format('mac-installer-{0}', github.event.inputs.setting) }}\n      path: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}.dmg\n  - name: upload linux-installer\n    uses: actions/upload-artifact@master\n    if: startsWith(matrix.os, 'ubuntu')\n    with:\n      name: ${{ format('linux-installer-{0}', github.event.inputs.setting) }}\n      path: dist/installers/${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_x64.deb\n")),(0,r.yg)("p",null,"Replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"# Upload installers to github release")," section in ",(0,r.yg)("inlineCode",{parentName:"p"},"release.yaml")," with the following code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"- name: Upload app to release - windows\n  if: startsWith(matrix.os, 'windows')\n  uses: svenstaro/upload-release-action@v2\n  with:\n    repo_token: ${{ secrets.GITHUB_TOKEN }}\n    file: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-setup.exe\n    asset_name: ${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-${{ matrix.setting }}-setup.exe\n    tag: ${{ github.ref }}\n- name: Upload app to release - linux\n  if: startsWith(matrix.os, 'ubuntu')\n  uses: svenstaro/upload-release-action@v2\n  with:\n    repo_token: ${{ secrets.GITHUB_TOKEN }}\n    file: dist/installers/${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_x64.deb\n    asset_name: ${{ matrix.variant }}_${{ steps.package_info.outputs.package_version }}_${{ matrix.setting }}_x64.deb\n    tag: ${{ github.ref }}\n- name: Upload app to release - mac\n  if: startsWith(matrix.os, 'mac')\n  uses: svenstaro/upload-release-action@v2\n  with:\n    repo_token: ${{ secrets.GITHUB_TOKEN }}\n    file: dist/installers/${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}.dmg\n    asset_name: ${{ matrix.variant }}-${{ steps.package_info.outputs.package_version }}-${{ matrix.setting }}.dmg\n    tag: ${{ github.ref }}\n")))}u.isMDXComponent=!0}}]);