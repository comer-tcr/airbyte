"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={description:"Delighted is a proprietary self-serve experience management platform that allows collecting feedback from customers and employees through surveys."},o="Delighted",l={unversionedId:"integrations/sources/delighted",id:"integrations/sources/delighted",title:"Delighted",description:"Delighted is a proprietary self-serve experience management platform that allows collecting feedback from customers and employees through surveys.",source:"@site/../docs/02-integrations/01-sources/delighted.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/delighted",permalink:"/integrations/sources/delighted",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/delighted.md",tags:[],version:"current",frontMatter:{description:"Delighted is a proprietary self-serve experience management platform that allows collecting feedback from customers and employees through surveys."},sidebar:"tutorialSidebar",previous:{title:"Db2",permalink:"/integrations/sources/db2"},next:{title:"Dixa",permalink:"/integrations/sources/dixa"}},p={},s=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Connect using <code>API PASSWORD</code> option:",id:"connect-using-api-password-option",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delighted"},"Delighted"),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"The Delighted source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,a.kt)("p",null,"This source can sync data for the ",(0,a.kt)("a",{parentName:"p",href:"https://app.delighted.com/docs/api"},"Delighted API"),"."),(0,a.kt)("p",null,"This Source Connector is based on a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.delighted.com/docs/api/listing-survey-responses"},"Survey Responses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.delighted.com/docs/api/listing-people"},"People")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.delighted.com/docs/api/listing-bounced-people"},"Bounced People")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.delighted.com/docs/api/listing-unsubscribed-people"},"Unsubscribed People"))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"This connector supports ",(0,a.kt)("inlineCode",{parentName:"p"},"API PASSWORD")," as the authentication method."),(0,a.kt)("h3",{id:"connect-using-api-password-option"},"Connect using ",(0,a.kt)("inlineCode",{parentName:"h3"},"API PASSWORD")," option:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://delighted.com/account/api")),(0,a.kt)("li",{parentName:"ol"},"Copy your Delighted API key."),(0,a.kt)("li",{parentName:"ol"},"You're ready to set up Delighted in Airbyte!")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-06-10"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13439"},"13439")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Change since parameter input to iso date")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-01-31"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9550"},"9550")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Output only records in which cursor field is greater than the value in state for incremental streams")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-01-06"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9333"},"9333")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add incremental sync mode to streams in ",(0,a.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-01-04"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9275"},"9275")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fix pagination handling for ",(0,a.kt)("inlineCode",{parentName:"td"},"survey_responses"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"bounces")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"unsubscribes")," streams")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4551"},"4551")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add Delighted source connector")))))}d.isMDXComponent=!0}}]);