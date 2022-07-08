"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5574],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(f,i(i({ref:e},s),{},{components:a})):n.createElement(f,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63800:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="Full Refresh - Append",o={unversionedId:"understanding-airbyte/connections/full-refresh-append",id:"understanding-airbyte/connections/full-refresh-append",title:"Full Refresh - Append",description:"Overview",source:"@site/../docs/10-understanding-airbyte/05-connections/02-full-refresh-append.md",sourceDirName:"10-understanding-airbyte/05-connections",slug:"/understanding-airbyte/connections/full-refresh-append",permalink:"/understanding-airbyte/connections/full-refresh-append",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/10-understanding-airbyte/05-connections/02-full-refresh-append.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Full Refresh - Overwrite",permalink:"/understanding-airbyte/connections/full-refresh-overwrite"},next:{title:"Incremental Sync - Append",permalink:"/understanding-airbyte/connections/incremental-append"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Example Behavior",id:"example-behavior",level:2},{value:"Add new data to the same table. Do not touch existing data.",id:"add-new-data-to-the-same-table-do-not-touch-existing-data",level:2},{value:"In the future",id:"in-the-future",level:2}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"full-refresh---append"},"Full Refresh - Append"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Full Refresh")," modes are the simplest methods that Airbyte uses to sync data, as they always retrieve all available data requested from the source, regardless of whether it has been synced before. This contrasts with ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},(0,r.kt)("strong",{parentName:"a"},"Incremental sync")),", which does not sync data that has already been synced before."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Append")," variant, new syncs will take all data from the sync and append it to the destination table. Therefore, if syncing similar information multiple times, every sync will create duplicates of already existing data."),(0,r.kt)("h2",{id:"example-behavior"},"Example Behavior"),(0,r.kt)("p",null,"On the nth sync of a full refresh connection:"),(0,r.kt)("h2",{id:"add-new-data-to-the-same-table-do-not-touch-existing-data"},"Add new data to the same table. Do not touch existing data."),(0,r.kt)("p",null,"data in the destination ",(0,r.kt)("em",{parentName:"p"},"before")," the nth sync:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Languages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java")))),(0,r.kt)("p",null,"new data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Languages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ruby")))),(0,r.kt)("p",null,"data in the destination ",(0,r.kt)("em",{parentName:"p"},"after")," the nth sync:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Languages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ruby")))),(0,r.kt)("p",null,"This could be useful when we are interested to know about deletion of data in the source. This is possible if we also consider the date, or the batch id from which the data was written to the destination:"),(0,r.kt)("p",null,"new data at the n+1th sync:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Languages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ruby")))),(0,r.kt)("p",null,"data in the destination ",(0,r.kt)("em",{parentName:"p"},"after")," the n+1th sync:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Languages"),(0,r.kt)("th",{parentName:"tr",align:"left"},"batch id"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Java"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ruby"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ruby"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")))),(0,r.kt)("h2",{id:"in-the-future"},"In the future"),(0,r.kt)("p",null,"We will consider making a better detection of deletions in the source, especially with ",(0,r.kt)("inlineCode",{parentName:"p"},"Incremental"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Change Data Capture")," based sync modes for example."))}m.isMDXComponent=!0}}]);