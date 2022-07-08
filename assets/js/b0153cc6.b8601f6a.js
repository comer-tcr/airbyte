"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[756],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),y=o,g=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45554:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={},a="Deploying and Reverting Docs",l={unversionedId:"contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs",id:"contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs",title:"Deploying and Reverting Docs",description:"docs are fun",source:"@site/../docs/09-contributing-to-airbyte/10-updating-documentation/03-deploying_and_reverting_docs.md",sourceDirName:"09-contributing-to-airbyte/10-updating-documentation",slug:"/contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs",permalink:"/contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/10-updating-documentation/03-deploying_and_reverting_docs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"So you want to make a redirect in docs?",permalink:"/contributing-to-airbyte/updating-documentation/making_a_redirect"},next:{title:"Locally testing your changes",permalink:"/contributing-to-airbyte/updating-documentation/locally_testing_docusaurus"}},c={},u=[],s={toc:u};function p(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-and-reverting-docs"},"Deploying and Reverting Docs"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"docs are fun",src:n(57792).Z,width:"715",height:"288"})),(0,o.kt)("p",null,"Docusaurus has a strange deployment pattern.  Luckily that pattern is abstracted away from you."),(0,o.kt)("p",null,"If you were looking for the contribution guide ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/updating-documentation/contributing_to_docs"},"check this doc out")),(0,o.kt)("p",null,"Docs will deploy from whatever branch you are in. You will probably want to deploy from master, but that is at your discretion."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/tools/bin/deploy_docusaurus"},"This is the deployment tool"),"\nYou will need a github ssh key, the tool will properly tell you if you don't have one though"),(0,o.kt)("p",null,"At it's simplest just open the airbyte repo and run ",(0,o.kt)("inlineCode",{parentName:"p"},"./tools/bin/deploy_docusaurus")),(0,o.kt)("p",null,"A typical deployment will look like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte\n# or cd airbyte-cloud  \ngit checkout master\ngit pull\n./tools/bin/deploy_docusaurus\n")),(0,o.kt)("p",null,"If docs has a problem this procedure will work the same on older branches.\nThe push to production is a force push so collisions are unlikely"),(0,o.kt)("p",null,"If you want to revert/rollback it will look something like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte\ngit checkout $SOME_OLDER_BRANCH\n./tools/bin/deploy_docusaurus\n")))}p.isMDXComponent=!0},57792:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/docs-45c35d4e949ea4f204954241e40edab2.jpg"}}]);