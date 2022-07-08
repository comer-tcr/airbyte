"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Customer.io",s={unversionedId:"integrations/sources/customer-io",id:"integrations/sources/customer-io",title:"Customer.io",description:"Overview",source:"@site/../docs/02-integrations/01-sources/customer-io.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/customer-io",permalink:"/integrations/sources/customer-io",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/customer-io.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Confluence",permalink:"/integrations/sources/confluence"},next:{title:"Db2",permalink:"/integrations/sources/db2"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customerio"},"Customer.io"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Customer.io source is maintained by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/tree/main/sources/customer-io-source"},"Faros\nAI"),".\nPlease file any support requests on that repo to minimize response time from the\nmaintainers. The source supports both Full Refresh and Incremental syncs. You\ncan choose if this source will copy only the new or updated data, or all rows\nin the tables and columns you set up for replication, every time a sync is run."),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"Several output streams are available from this source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://customer.io/docs/api/#operation/listCampaigns"},"Campaigns")," ","(","Incremental",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://customer.io/docs/api/#operation/listCampaignActions"},"Campaign Actions")," ","(","Incremental",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://customer.io/docs/api/#operation/listNewsletters"},"Newsletters")," ","(","Incremental",")")),(0,a.kt)("p",null,"If there are more endpoints you'd like Faros AI to support, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/issues/new"},"create an\nissue.")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"The Customer.io API is divided into three different hosts, each serving a\ndifferent component of Customer.io. This source only uses the Beta API host,\nwhich enforces a rate limit of 10 requests per second.  Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/issues/new"},"create an\nissue")," if you see any\nrate limit issues."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customer.io App API Key")),(0,a.kt)("p",null,"Please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://customer.io/docs/managing-credentials/"},"their documentation for generating an App API Key"),"."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/126"},"126")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add Customer.io source")))))}p.isMDXComponent=!0}}]);