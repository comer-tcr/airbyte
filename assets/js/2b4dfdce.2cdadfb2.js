"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:'This connector extracts "collections" from Webflow'},i="Webflow",l={unversionedId:"integrations/sources/webflow",id:"integrations/sources/webflow",title:"Webflow",description:'This connector extracts "collections" from Webflow',source:"@site/../docs/02-integrations/01-sources/webflow.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/webflow",permalink:"/integrations/sources/webflow",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/webflow.md",tags:[],version:"current",frontMatter:{description:'This connector extracts "collections" from Webflow'},sidebar:"tutorialSidebar",previous:{title:"VictorOps",permalink:"/integrations/sources/victorops"},next:{title:"WooCommerce",permalink:"/integrations/sources/woocommerce"}},c={},s=[],p={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webflow"},"Webflow"),(0,o.kt)("p",null,"Webflow is a CMS system that is used for publishing websites and blogs. This connector returns data that is made available by ",(0,o.kt)("a",{parentName:"p",href:"https://developers.webflow.com/"},"Webflow APIs"),". "),(0,o.kt)("p",null,"Webflow uses ",(0,o.kt)("a",{parentName:"p",href:"https://developers.webflow.com/#collections"},"Collections"),' to store different kinds of information. A collection can be "Blog Posts", or "Blog Authors", etc. Collection names are not pre-defined, the number of collections is not known in advance, and the schema for each collection may be different. '),(0,o.kt)("p",null,"This connector dynamically figures our which collections are available, creates the schema for each collection based on data extracted from Webflow, and creates an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/connector-development/cdk-python/full-refresh-stream/"},"Airbyte Stream")," for each collection. "),(0,o.kt)("h1",{id:"webflow-credentials"},"Webflow credentials"),(0,o.kt)("p",null,"You should be able to create a Webflow  ",(0,o.kt)("inlineCode",{parentName:"p"},"API key")," (aka ",(0,o.kt)("inlineCode",{parentName:"p"},"API token"),") as described in ",(0,o.kt)("a",{parentName:"p",href:"https://university.webflow.com/lesson/intro-to-the-webflow-api"},"Intro to the Webflow API"),". "),(0,o.kt)("p",null,"Once you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"API Key"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"API token"),", you can confirm a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.webflow.com/#sites"},"list of available sites")," and get their ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," by executing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl https://api.webflow.com/sites \\\n  -H "Authorization: Bearer <your API Key>" \\\n  -H "accept-version: 1.0.0"\n')),(0,o.kt)("p",null,"Which should respond with something similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[{"_id":"<redacted>","createdOn":"2021-03-26T15:46:04.032Z","name":"Airbyte","shortName":"airbyte-dev","lastPublished":"2022-06-09T12:55:52.533Z","previewUrl":"https://screenshots.webflow.com/sites/<redacted>","timezone":"America/Los_Angeles","database":"<redacted>"}]\n')),(0,o.kt)("p",null,"You will need to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"Site id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"API key")," to the Webflow connector in order for it to pull data from your Webflow site. "),(0,o.kt)("h1",{id:"related-tutorial"},"Related tutorial"),(0,o.kt)("p",null,"If you are interested in learning more about the Webflow API and implementation details of this connector, you may wish to consult the ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.com/tutorials/extract-data-from-the-webflow-api"},"tutorial about how to build a connector to extract data from the Webflow API"),". "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-06-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13617"},"13617")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial release")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-06-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13617"},"13617")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update Spec Documentation URL")))))}f.isMDXComponent=!0}}]);