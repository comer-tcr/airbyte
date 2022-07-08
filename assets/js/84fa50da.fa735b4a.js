"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2275],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80978:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="Contributions to docs",l={unversionedId:"contributing-to-airbyte/updating-documentation/contributing_to_docs",id:"contributing-to-airbyte/updating-documentation/contributing_to_docs",title:"Contributions to docs",description:"hide easter egg text for images in these thingies",source:"@site/../docs/09-contributing-to-airbyte/10-updating-documentation/01-contributing_to_docs.md",sourceDirName:"09-contributing-to-airbyte/10-updating-documentation",slug:"/contributing-to-airbyte/updating-documentation/contributing_to_docs",permalink:"/contributing-to-airbyte/updating-documentation/contributing_to_docs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/10-updating-documentation/01-contributing_to_docs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating Documentation",permalink:"/contributing-to-airbyte/updating-documentation/"},next:{title:"So you want to make a redirect in docs?",permalink:"/contributing-to-airbyte/updating-documentation/making_a_redirect"}},u={},c=[{value:"Did you just learn something?!",id:"did-you-just-learn-something",level:2},{value:"Where to put stuff",id:"where-to-put-stuff",level:2},{value:"Testing your changes locally",id:"testing-your-changes-locally",level:2}],s={toc:c};function d(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributions-to-docs"},"Contributions to docs"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hide easter egg text for images in these thingies",src:n(43213).Z,width:"900",height:"359"})),(0,o.kt)("h2",{id:"did-you-just-learn-something"},"Did you just learn something?!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"maybe write a doc for it!")),(0,o.kt)("h2",{id:"where-to-put-stuff"},"Where to put stuff"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try and utilize existing folder structure"),(0,o.kt)("li",{parentName:"ul"},"If it fits in an existing category: great!"),(0,o.kt)("li",{parentName:"ul"},"If it doesn't add it to ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/")," top level",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If it makes sense to make a new category with other top level make a new directory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"images")," and other assets live in ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/assets/")),(0,o.kt)("li",{parentName:"ul"},"New folders ",(0,o.kt)("strong",{parentName:"li"},"need at least 2 markdown files")," for docusarus to recognise the folder in the sidebar")),(0,o.kt)("h2",{id:"testing-your-changes-locally"},"Testing your changes locally"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/updating-documentation/locally_testing_docusaurus"},"more in depth local change guide here")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can see what the docs website will look like locally try:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd docusaurus\nyarn build && yarn serve\n# press control-c to exit the server\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you change ",(0,o.kt)("strong",{parentName:"li"},"anything at all")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your changes will not show up on the website until you re-run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn build && yarn serve"))))))}d.isMDXComponent=!0},43213:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/docs-contribution-keyboard-67b6c23ce68eaa0eedf1225a6fef1cc5.jpg"}}]);