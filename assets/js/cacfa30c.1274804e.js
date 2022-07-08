"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=m(n),p=a,u=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},i="Full Refresh Streams",s={unversionedId:"connector-development/cdk-python/full-refresh-stream",id:"connector-development/cdk-python/full-refresh-stream",title:"Full Refresh Streams",description:"As mentioned in the Basic Concepts Overview, a Stream is the atomic unit for reading data from a Source. A stream can read data from anywhere: a relational database, an API, or even scrape a web page! \\(although that might be stretching the limits of what a connector should do\\).",source:"@site/../docs/08-connector-development/07-cdk-python/03-full-refresh-stream.md",sourceDirName:"08-connector-development/07-cdk-python",slug:"/connector-development/cdk-python/full-refresh-stream",permalink:"/connector-development/cdk-python/full-refresh-stream",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/08-connector-development/07-cdk-python/03-full-refresh-stream.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining Stream Schemas",permalink:"/connector-development/cdk-python/schemas"},next:{title:"Incremental Streams",permalink:"/connector-development/cdk-python/incremental-stream"}},c={},m=[{value:"Defining the stream&#39;s schema",id:"defining-the-streams-schema",level:2},{value:"Static schemas",id:"static-schemas",level:3},{value:"Dynamic schemas",id:"dynamic-schemas",level:3},{value:"Dynamically modifying static schemas",id:"dynamically-modifying-static-schemas",level:3},{value:"Reading records from the data source",id:"reading-records-from-the-data-source",level:2},{value:"Incremental Streams",id:"incremental-streams",level:2}],l={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"full-refresh-streams"},"Full Refresh Streams"),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/basic-concepts"},"Basic Concepts Overview"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream")," is the atomic unit for reading data from a Source. A stream can read data from anywhere: a relational database, an API, or even scrape a web page! ","(","although that might be stretching the limits of what a connector should do",")","."),(0,a.kt)("p",null,"To implement a stream, there are two minimum requirements: 1. Define the stream's schema 2. Implement the logic for reading records from the underlying data source"),(0,a.kt)("h2",{id:"defining-the-streams-schema"},"Defining the stream's schema"),(0,a.kt)("p",null,"Your connector must describe the schema of each stream it can output using ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSONSchema"),"."),(0,a.kt)("p",null,"The simplest way to do this is to describe the schema of your streams using one ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file per stream. You can also dynamically generate the schema of your stream in code, or you can combine both approaches: start with a ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file and dynamically add properties to it."),(0,a.kt)("p",null,"The schema of a stream is the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema"),"."),(0,a.kt)("h3",{id:"static-schemas"},"Static schemas"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," reads a ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas/")," directory whose name is equal to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.name")," property. In turn ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.name")," by default returns the name of the class in snake case. Therefore, if you have a class ",(0,a.kt)("inlineCode",{parentName:"p"},"class EmployeeBenefits(HttpStream)")," the default behavior will look for a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas/employee_benefits.json"),". You can override any of these behaviors as you need."),(0,a.kt)("p",null,"Important note: any objects referenced via ",(0,a.kt)("inlineCode",{parentName:"p"},"$ref")," should be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/")," directory in their own ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," files."),(0,a.kt)("h3",{id:"dynamic-schemas"},"Dynamic schemas"),(0,a.kt)("p",null,"If you'd rather define your schema in code, override ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," in your stream class to return a ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," describing the schema using ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSONSchema"),"."),(0,a.kt)("h3",{id:"dynamically-modifying-static-schemas"},"Dynamically modifying static schemas"),(0,a.kt)("p",null,"Place a ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas")," folder containing the basic schema like described in the static schemas section. Then, override ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," to run the default behavior, edit the returned value, then return the edited value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"def get_json_schema(self):\n    schema = super().get_json_schema()\n    schema['dynamically_determined_property'] = \"property\"\n    return schema\n")),(0,a.kt)("h2",{id:"reading-records-from-the-data-source"},"Reading records from the data source"),(0,a.kt)("p",null,"If custom functionality is required for reading a stream, you may need to override ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.read_records"),". Given some information about how the stream should be read, this method should output an iterable object containing records from the data source. We recommend using generators as they are very efficient with regards to memory requirements."),(0,a.kt)("h2",{id:"incremental-streams"},"Incremental Streams"),(0,a.kt)("p",null,"We highly recommend implementing Incremental when feasible. See the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/incremental-stream"},"incremental streams page")," for more information."))}d.isMDXComponent=!0}}]);