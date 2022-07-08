"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Namespaces",l={unversionedId:"understanding-airbyte/namespaces",id:"understanding-airbyte/namespaces",title:"Namespaces",description:"High-Level Overview",source:"@site/../docs/10-understanding-airbyte/11-namespaces.md",sourceDirName:"10-understanding-airbyte",slug:"/understanding-airbyte/namespaces",permalink:"/understanding-airbyte/namespaces",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/10-understanding-airbyte/11-namespaces.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Data Capture (CDC)",permalink:"/understanding-airbyte/cdc"},next:{title:"Data Types in Records",permalink:"/understanding-airbyte/supported-data-types"}},s={},p=[{value:"High-Level Overview",id:"high-level-overview",level:2},{value:"What is a Namespace?",id:"what-is-a-namespace",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Destination namespace configuration",id:"destination-namespace-configuration",level:2},{value:"- Mirror source structure",id:"--mirror-source-structure",level:3},{value:"- Destination connector settings",id:"--destination-connector-settings",level:3},{value:"- Custom format",id:"--custom-format",level:3},{value:"Examples",id:"examples",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Current Support",id:"current-support",level:2},{value:"Sources",id:"sources",level:3},{value:"Destination",id:"destination",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"namespaces"},"Namespaces"),(0,r.kt)("h2",{id:"high-level-overview"},"High-Level Overview"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The high-level overview contains all the information you need to use Namespaces when pulling from APIs. Information past that can be read for advanced or educational purposes."))),(0,r.kt)("p",null,"When looking through our connector docs, you'll notice that some sources and destinations support \"Namespaces.\" These allow you to organize and separate your data into groups in the destination if the destination supports it. In most cases, namespaces are schemas in the database you're replicating to. If your desired destination doesn't support it, you can ignore this feature."),(0,r.kt)("p",null,"Note that this is the location that both your normalized and raw data will get written to. Your raw data will show up with the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"_airbyte_raw_")," in the namespace you define. If you don't enable basic normalization, you will only receive the raw tables."),(0,r.kt)("p",null,"If only your destination supports namespaces, you have two simple options. ",(0,r.kt)("strong",{parentName:"p"},"This is the most likely case"),", as all HTTP APIs currently don't support Namespaces."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mirror Destination Settings - Replicate to the default namespace in the destination, which will differ based on your destination."),(0,r.kt)("li",{parentName:"ol"},'Custom Format - Create a "Custom Format" to rename the namespace that your data will be replicated into.')),(0,r.kt)("p",null,"If both your desired source and destination support namespaces, you're likely using a more advanced use case with a database as a source, so continue reading."),(0,r.kt)("h2",{id:"what-is-a-namespace"},"What is a Namespace?"),(0,r.kt)("p",null,"Technical systems often group their underlying data into namespaces with each namespace's data isolated from another namespace. This isolation allows for better organisation and flexibility, leading to better usability."),(0,r.kt)("p",null,"An example of a namespace is the RDMS's ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," concept. Some common use cases for schemas are enforcing permissions, segregating test and production data and general data organisation."),(0,r.kt)("h2",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"The Airbyte Protocol supports namespaces and allows Sources to define namespaces, and Destinations to write to various namespaces."),(0,r.kt)("p",null,"If the Source does not support namespaces, the data will be replicated into the Destination's default namespace. For databases, the default namespace is the schema provided in the destination configuration."),(0,r.kt)("p",null,"If the Destination does not support namespaces, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L64"},"namespace field")," is ignored."),(0,r.kt)("h2",{id:"destination-namespace-configuration"},"Destination namespace configuration"),(0,r.kt)("p",null,"As part of the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/"},"connections sync settings"),", it is possible to configure the namespace used by: 1. destination connectors: to store the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airbyte_raw_*")," tables. 2. basic normalization: to store the final normalized tables."),(0,r.kt)("p",null,"Note that custom transformation outputs are not affected by the namespace settings from Airbyte: It is up to the configuration of the custom dbt project, and how it is written to handle its ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-custom-schemas"},"custom schemas"),". The default target schema for dbt in this case, will always be the destination namespace."),(0,r.kt)("p",null,"Available options for namespace configurations are:"),(0,r.kt)("h3",{id:"--mirror-source-structure"},"- Mirror source structure"),(0,r.kt)("p",null,"Some sources ","(","such as databases based on JDBC for example",")",' are providing namespace information from which a stream has been extracted. Whenever a source is able to fill this field in the catalog.json file, the destination will try to reproduce exactly the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will fall back to the "Destination Connector settings".'),(0,r.kt)("h3",{id:"--destination-connector-settings"},"- Destination connector settings"),(0,r.kt)("p",null,"All stream will be replicated and store in the default namespace defined on the destination settings page. In the destinations, namespace refers to:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Destination Connector"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Namespace setting"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BigQuery"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dataset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MSSQL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MySql"),(0,r.kt)("td",{parentName:"tr",align:"left"},"database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Oracle DB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Postgres"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Redshift"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"S3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"path prefix")))),(0,r.kt)("h3",{id:"--custom-format"},"- Custom format"),(0,r.kt)("p",null,"When replicating multiple sources into the same destination, conflicts on tables being overwritten by syncs can occur."),(0,r.kt)("p",null,'For example, a Github source can be replicated into a "github" schema. But if we have multiple connections to different GitHub repositories ',"(","similar in multi-tenant scenarios",")",":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we'd probably wish to keep the same table names ","(","to keep consistent queries downstream",")"),(0,r.kt)("li",{parentName:"ul"},"but store them in different namespaces ","(",'to avoid mixing data from different "tenants"',")")),(0,r.kt)("p",null,"To solve this, we can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use a specific namespace for each connection, thus this option of custom format."),(0,r.kt)("li",{parentName:"ul"},"or, use prefix to stream names as described below.")),(0,r.kt)("p",null,"Note that we can use a template format string using variables that will be resolved during replication as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${SOURCE_NAMESPACE}"),": will be replaced by the namespace provided by the source if available")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following table summarises how this works. We assume an example of replication configurations between a Postgres Source and Snowflake Destination ","(",'with settings of schema = "my',"_",'schema"',")",":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Namespace Configuration"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Source Namespace"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Source Table Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Destination Namespace"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Destination Table Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mirror source structure"),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mirror source structure"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination connector settings"),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination connector settings"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'Custom format = "custom"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"custom"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'Custom format = "${SOURCE',"_",'NAMESPACE}"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'Custom format = "my',"_","${SOURCE","_","NAMESPACE}","_",'schema"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","public","_","schema"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'Custom format = "   "'),(0,r.kt)("td",{parentName:"tr",align:"left"},"public"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,r.kt)("td",{parentName:"tr",align:"left"},"my","_","table")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both Source and Destination connectors need to support namespaces."),(0,r.kt)("li",{parentName:"ul"},"Relevant Source and Destination connectors need to be at least version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.3.0")," or later."),(0,r.kt)("li",{parentName:"ul"},"Airbyte version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.21.0-alpha")," or later.")),(0,r.kt)("h2",{id:"current-support"},"Current Support"),(0,r.kt)("h3",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MSSQL"),(0,r.kt)("li",{parentName:"ul"},"MYSQL"),(0,r.kt)("li",{parentName:"ul"},"Oracle DB"),(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"Redshift")),(0,r.kt)("h3",{id:"destination"},"Destination"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BigQuery"),(0,r.kt)("li",{parentName:"ul"},"MSSQL"),(0,r.kt)("li",{parentName:"ul"},"MySql"),(0,r.kt)("li",{parentName:"ul"},"Oracle DB"),(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"Redshift"),(0,r.kt)("li",{parentName:"ul"},"Snowflake"),(0,r.kt)("li",{parentName:"ul"},"S3")))}c.isMDXComponent=!0}}]);