"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5843],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=p(a),g=r,u=k["".concat(d,".").concat(g)]||k[g]||m[g]||i;return a?n.createElement(u,l(l({ref:e},s),{},{components:a})):n.createElement(u,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},74337:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="TiDB",o={unversionedId:"integrations/sources/tidb",id:"integrations/sources/tidb",title:"TiDB",description:"Overview",source:"@site/../docs/02-integrations/01-sources/tidb.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/tidb",permalink:"/integrations/sources/tidb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/tidb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tempo",permalink:"/integrations/sources/tempo"},next:{title:"TikTok Marketing",permalink:"/integrations/sources/tiktok-marketing"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Make sure your database is accessible from the machine running Airbyte",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Create a dedicated read-only user with access to the relevant tables (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional",level:4},{value:"3. That&#39;s it!",id:"3-thats-it",level:4},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Changelog",id:"changelog",level:2}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tidb"},"TiDB"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB"),' (/\u2019ta\u026adi\u02d0bi:/, "Ti" stands for Titanium) is an open-source, distributed, NewSQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads. It is MySQL compatible and features horizontal scalability, strong consistency, and high availability. TiDB can be deployed on-premise or in-cloud.'),(0,r.kt)("p",null,"The TiDB source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,r.kt)("h3",{id:"resulting-schema"},"Resulting schema"),(0,r.kt)("p",null,"The TiDB source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Change Data Capture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TiDB ",(0,r.kt)("inlineCode",{parentName:"li"},"v4.0")," or above"),(0,r.kt)("li",{parentName:"ol"},"Allow connections from Airbyte to your TiDB database ","(","if they exist in separate VPCs",")"),(0,r.kt)("li",{parentName:"ol"},"(Optional) Create a dedicated read-only Airbyte user with access to all tables needed for replication")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h4",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte"},"1. Make sure your database is accessible from the machine running Airbyte"),(0,r.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your TiDB instance is via the check connection tool in the UI."),(0,r.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant tables ","(","Recommended but optional",")"),(0,r.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,r.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'airbyte'@'%' IDENTIFIED BY 'your_password_here';\n")),(0,r.kt)("p",null,"Then give it access to the relevant database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON <database name>.* TO 'airbyte'@'%';\n")),(0,r.kt)("h4",{id:"3-thats-it"},"3. That's it!"),(0,r.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Airbyte has the ability to connect to a TiDB instance via an SSH Tunnel. The reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to the database directly ","(","e.g. it does not have a public IP address",")","."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,r.kt)("em",{parentName:"p"},"does")," have direct access to the database. Airbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure all fields for the source as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the TiDB username."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," TiDB password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/data-type-overview"},"TiDB data types")," are mapped to the following data types when synchronizing data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"TiDB Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Resulting Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bit(1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bit(>1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tinyint(1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tinyint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"smallint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mediumint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bigint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"decimal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"binary")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 date string. ZERO-DATE value will be converted to NULL. If column is mandatory, convert to EPOCH.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"datetime"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 datetime string. ZERO-DATE value will be converted to NULL. If column is mandatory, convert to EPOCH.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 time string. Values are in range between 00:00:00 and 23:59:59.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"year")),(0,r.kt)("td",{parentName:"tr",align:"left"},"year string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.pingcap.com/tidb/stable/data-type-date-and-time#year-type"},"Doc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"varchar")," with non-binary charset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"varchar")," with binary charset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tinyblob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mediumblob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"longblob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"binary")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"varbinary")),(0,r.kt)("td",{parentName:"tr",align:"left"},"base64 binary string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tinytext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mediumtext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"longtext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"serialized json string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'{"a": 10, "b": 15}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"set")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"blue,green,yellow"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," arrays for all the above types as well as custom types are supported, although they may be de-nested depending on the destination."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14243"},"14243")),(0,r.kt)("td",{parentName:"tr",align:null},"Update JDBC string builder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,r.kt)("td",{parentName:"tr",align:null},"Updated stacktrace format for any trace message errors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,r.kt)("td",{parentName:"tr",align:null},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11283"},"11283")),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Release")))))}m.isMDXComponent=!0}}]);