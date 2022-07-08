"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},28155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={description:"A high level view of Airbyte's components."},o="Architecture overview",l={unversionedId:"understanding-airbyte/high-level-view",id:"understanding-airbyte/high-level-view",title:"Architecture overview",description:"A high level view of Airbyte's components.",source:"@site/../docs/10-understanding-airbyte/07-high-level-view.md",sourceDirName:"10-understanding-airbyte",slug:"/understanding-airbyte/high-level-view",permalink:"/understanding-airbyte/high-level-view",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/10-understanding-airbyte/07-high-level-view.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"A high level view of Airbyte's components."},sidebar:"tutorialSidebar",previous:{title:"Operations",permalink:"/understanding-airbyte/operations"},next:{title:"Workers & Jobs",permalink:"/understanding-airbyte/jobs"}},c={},s=[],u={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,i.kt)("p",null,"Airbyte is conceptually composed of two parts: platform and connectors. "),(0,i.kt)("p",null,"The platform provides all the horizontal services required to configure and run data movement operations e.g: the UI, configuration API, job scheduling, logging, alerting, etc. and is structured as a set of microservices. "),(0,i.kt)("p",null,"Connectors are independent modules which push/pull data to/from sources and destinations. Connectors are built in accordance with the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification"),", which describes the interface with which data can be moved between a source and a destination using Airbyte. Connectors are packaged as Docker images, which allows total flexibility over the technologies used to implement them. "),(0,i.kt)("p",null,"A more concrete diagram can be seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3.048-Kilometer view",src:r(91121).Z,width:"3338",height:"1294"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UI"),": An easy-to-use graphical interface for interacting with the Airbyte API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WebApp Server"),": Handles connection between UI and API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Config Store"),": Stores all the connections information ","(","credentials, frequency...",")","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduler Store"),": Stores statuses and job information for the scheduler bookkeeping."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Config API"),": Airbyte's main control plane. All operations in Airbyte such as creating sources, destinations, connections, managing configurations, etc.. are configured and invoked from the API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduler"),": The scheduler takes work requests from the API and sends them to the Temporal service to parallelize. It is responsible for tracking success/failure and for triggering syncs based on the configured frequency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Temporal Service"),": Manages the task queue and workflows for the Scheduler. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Worker"),": The worker connects to a source connector, pulls the data and writes it to a destination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Temporary Storage"),": A storage that workers can use whenever they need to spill data on a disk.")))}d.isMDXComponent=!0},91121:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/understanding_airbyte_high_level_architecture-ac5aa905ca8916521b41cdaecec4cd08.png"}}]);