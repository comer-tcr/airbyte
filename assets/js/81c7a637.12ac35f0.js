"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9170],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45295:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},i="Asana",o={unversionedId:"integrations/sources/asana",id:"integrations/sources/asana",title:"Asana",description:"Sync overview",source:"@site/../docs/02-integrations/01-sources/asana.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/asana",permalink:"/integrations/sources/asana",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/asana.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appstore",permalink:"/integrations/sources/appstore"},next:{title:"AWS CloudTrail",permalink:"/integrations/sources/aws-cloudtrail"}},s={},p=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"asana"},"Asana"),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"This source can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.asana.com/docs"},"Asana API"),". It supports only Full Refresh syncs."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/custom-fields"},"Custom fields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/projects"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/sections"},"Sections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/stories"},"Stories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/tags"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/tasks"},"Tasks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/teams"},"Teams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/team-memberships"},"Team Memberships")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/users"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/workspaces"},"Workspaces"))),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by normal Asana ",(0,n.kt)("a",{parentName:"p",href:"https://developers.asana.com/docs/rate-limits"},"requests limitation"),"."),(0,n.kt)("p",null,"The Asana connector should not run into Asana API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Personal Access Token")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"Please follow these ",(0,n.kt)("a",{parentName:"p",href:"https://developers.asana.com/docs/personal-access-token"},"steps")," to obtain Personal Access Token for your account."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add oauth init flow parameters support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6402"},"6402")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix SAT tests: update schemas and invalid","_","config.json file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add entrypoint and bump version for connector")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3510"},"3510")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New Source: Asana")))))}d.isMDXComponent=!0}}]);