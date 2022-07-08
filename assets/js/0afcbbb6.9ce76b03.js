"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Updating Gradle Dependencies",l={unversionedId:"contributing-to-airbyte/gradle-dependency-update",id:"contributing-to-airbyte/gradle-dependency-update",title:"Updating Gradle Dependencies",description:"We use Gradle Catalogs",source:"@site/../docs/09-contributing-to-airbyte/09-gradle-dependency-update.md",sourceDirName:"09-contributing-to-airbyte",slug:"/contributing-to-airbyte/gradle-dependency-update",permalink:"/contributing-to-airbyte/gradle-dependency-update",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/09-gradle-dependency-update.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gradle Cheatsheet",permalink:"/contributing-to-airbyte/gradle-cheatsheet"},next:{title:"Updating Documentation",permalink:"/contributing-to-airbyte/updating-documentation/"}},s={},p=[{value:"Setup Details",id:"setup-details",level:3},{value:"The version catalog TOML file format",id:"the-version-catalog-toml-file-format",level:4},{value:"Declaring a version catalog",id:"declaring-a-version-catalog",level:4},{value:"Sharing Catalogs",id:"sharing-catalogs",level:4},{value:"Configure the Plugin Publishing Plugin",id:"configure-the-plugin-publishing-plugin",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-gradle-dependencies"},"Updating Gradle Dependencies"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sub:central-declaration-of-dependencies"},"Gradle Catalogs"),"\nto keep dependencies synced up across different Java projects. This is particularly useful for Airbyte Cloud, and can be\nused by any project seeking to build off Airbyte."),(0,r.kt)("p",null,"Catalogs allow dependencies to be represented as dependency coordinates. A user can reference preset dependencies/versions\nwhen declaring dependencies in a build script."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Version Catalog Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n   implementation(libs.groovy.core)\n}\n")),(0,r.kt)("p",{parentName:"blockquote"},"In this context, libs is a catalog and groovy represents a dependency available in this catalog. Instead of declaring a\nspecific version, we reference the version in the Catalog.")),(0,r.kt)("p",null,"This helps reduce the chances of dependency drift and dependency hell."),(0,r.kt)("p",null,"Thus, please use the Catalog when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"declaring new common dependencies."),(0,r.kt)("li",{parentName:"ul"},"specifying new common dependencies.")),(0,r.kt)("p",null,"A common dependency is a foundational Java package e.g. Apache commons, Log4j etc that is often the basis on which libraries\nare built upon."),(0,r.kt)("p",null,"This is a relatively new addition, so devs should keep this in mind and use the top-level Catalog on a best-effort basis."),(0,r.kt)("h3",{id:"setup-details"},"Setup Details"),(0,r.kt)("p",null,"This section is for engineers wanting to understand Gradle Catalog details and how Airbyte has set this up."),(0,r.kt)("h4",{id:"the-version-catalog-toml-file-format"},"The version catalog TOML file format"),(0,r.kt)("p",null,"Gradle offers a conventional file to declare a catalog.",(0,r.kt)("br",{parentName:"p"}),"\n","It\u2019s a conventional location to declare dependencies that are both consumed and published."),(0,r.kt)("p",null,"The TOML file consists of 4 major sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ","[versions]"," section is used to declare versions which can be referenced by dependencies"),(0,r.kt)("li",{parentName:"ul"},"the ","[libraries]"," section is used to declare the aliases to coordinates"),(0,r.kt)("li",{parentName:"ul"},"the ","[bundles]"," section is used to declare dependency bundles"),(0,r.kt)("li",{parentName:"ul"},"the ","[plugins]"," section is used to declare plugins")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TOML file Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'[versions]\ngroovy = "3.0.5"\n\n[libraries]\ngroovy-core = { module = "org.codehaus.groovy:groovy", version.ref = "groovy" }\n\n[bundles]\ngroovy = ["groovy-core", "groovy-json", "groovy-nio"]\n\n[plugins]\njmh = { id = "me.champeau.jmh", version = "0.6.5" }\n')),(0,r.kt)("p",{parentName:"blockquote"},"NOTE: for more information please follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#:~:text=The%20version%20catalog%20TOML%20file%20format"},"this")," link.")),(0,r.kt)("p",null,"As described above this project contains TOML file ",(0,r.kt)("inlineCode",{parentName:"p"},"deps.toml")," which is fully fulfilled with respect to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sub::toml-dependencies-format"},"official")," documentation.\nIn case when new versions should be used please update ",(0,r.kt)("inlineCode",{parentName:"p"},"deps.toml")," accordingly."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"deps.toml"),(0,r.kt)("p",null,"[versions]",(0,r.kt)("br",{parentName:"p"}),"\n",'fasterxml_version = "2.13.0"',(0,r.kt)("br",{parentName:"p"}),"\n",'glassfish_version = "2.31"',(0,r.kt)("br",{parentName:"p"}),"\n",'commons_io = "2.7"',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j = "2.17.1"',(0,r.kt)("br",{parentName:"p"}),"\n",'slf4j = "1.7.30"',(0,r.kt)("br",{parentName:"p"}),"\n",'lombok = "1.18.22"',(0,r.kt)("br",{parentName:"p"}),"\n",'junit-jupiter = "5.7.2"'),(0,r.kt)("p",null,"[libraries]",'\nfasterxml = { module = "com.fasterxml.jackson:jackson-bom", version.ref = "fasterxml_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'glassfish = { module = "org.glassfish.jersey:jackson-bom", version.ref = "glassfish_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jackson-databind = { module = "com.fasterxml.jackson.core:jackson-databind", version.ref = "fasterxml_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jackson-annotations = { module = "com.fasterxml.jackson.core:jackson-annotations", version.ref = "fasterxml_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jackson-dataformat = { module = "com.fasterxml.jackson.dataformat:jackson-dataformat-yaml", version.ref = "fasterxml_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jackson-datatype = { module = "com.fasterxml.jackson.datatype:jackson-datatype-jsr310", version.ref = "fasterxml_version" }',(0,r.kt)("br",{parentName:"p"}),"\n",'guava = { module = "com.google.guava:guava", version = "30.1.1-jre" }',(0,r.kt)("br",{parentName:"p"}),"\n",'commons-io = { module = "commons-io:commons-io", version.ref = "commons_io" }',(0,r.kt)("br",{parentName:"p"}),"\n",'apache-commons = { module = "org.apache.commons:commons-compress", version = "1.20" }',(0,r.kt)("br",{parentName:"p"}),"\n",'apache-commons-lang = { module = "org.apache.commons:commons-lang3", version = "3.11" }',(0,r.kt)("br",{parentName:"p"}),"\n",'slf4j-api = { module = "org.slf4j:slf4j-api", version = "1.7.30" }',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j-api = { module = "org.apache.logging.log4j:log4j-api", version.ref = "log4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j-core = { module = "org.apache.logging.log4j:log4j-core", version.ref = "log4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j-impl = { module = "org.apache.logging.log4j:log4j-slf4j-impl", version.ref = "log4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j-web = { module = "org.apache.logging.log4j:log4j-web", version.ref = "log4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jul-to-slf4j = { module = "org.slf4j:jul-to-slf4j", version.ref = "slf4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'jcl-over-slf4j = { module = "org.slf4j:jcl-over-slf4j", version.ref = "slf4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'log4j-over-slf4j = { module = "org.slf4j:log4j-over-slf4j", version.ref = "slf4j" }',(0,r.kt)("br",{parentName:"p"}),"\n",'appender-log4j2 = { module = "com.therealvan:appender-log4j2", version = "3.6.0" }',(0,r.kt)("br",{parentName:"p"}),"\n",'aws-java-sdk-s3 = { module = "com.amazonaws:aws-java-sdk-s3", version = "1.12.6" }',(0,r.kt)("br",{parentName:"p"}),"\n",'google-cloud-storage = { module = "com.google.cloud:google-cloud-storage", version = "2.2.2" }',(0,r.kt)("br",{parentName:"p"}),"\n",'s3 = { module = "software.amazon.awssdk:s3", version = "2.16.84" }',(0,r.kt)("br",{parentName:"p"}),"\n",'lombok = { module = "org.projectlombok:lombok", version.ref = "lombok" }',(0,r.kt)("br",{parentName:"p"}),"\n",'junit-jupiter-engine = { module = "org.junit.jupiter:junit-jupiter-engine", version.ref = "junit-jupiter" }',(0,r.kt)("br",{parentName:"p"}),"\n",'junit-jupiter-api = { module = "org.junit.jupiter:junit-jupiter-api", version.ref = "junit-jupiter" }',(0,r.kt)("br",{parentName:"p"}),"\n",'junit-jupiter-params = { module = "org.junit.jupiter:junit-jupiter-params", version.ref = "junit-jupiter" }',(0,r.kt)("br",{parentName:"p"}),"\n",'mockito-junit-jupiter = { module = "org.mockito:mockito-junit-jupiter", version = "4.0.0" }',(0,r.kt)("br",{parentName:"p"}),"\n",'assertj-core = { module = "org.assertj:assertj-core", version = "3.21.0" }',(0,r.kt)("br",{parentName:"p"}),"\n",'junit-pioneer = { module = "org.junit-pioneer:junit-pioneer", version = "1.6.2" }',(0,r.kt)("br",{parentName:"p"}),"\n",'findsecbugs-plugin = { module = "com.h3xstream.findsecbugs:findsecbugs-plugin", version = "1.11.0" }'),(0,r.kt)("p",null,"[bundles]",(0,r.kt)("br",{parentName:"p"}),"\n","jackson = ",'["jackson-databind", "jackson-annotations", "jackson-dataformat", "jackson-datatype"]',(0,r.kt)("br",{parentName:"p"}),"\n","apache = ",'["apache-commons", "apache-commons-lang"]',(0,r.kt)("br",{parentName:"p"}),"\n","log4j = ",'["log4j-api", "log4j-core", "log4j-impl", "log4j-web"]',(0,r.kt)("br",{parentName:"p"}),"\n","slf4j = ",'["jul-to-slf4j", "jcl-over-slf4j", "log4j-over-slf4j"]',(0,r.kt)("br",{parentName:"p"}),"\n","junit = ",'["junit-jupiter-api", "junit-jupiter-params", "mockito-junit-jupiter"]')),(0,r.kt)("h4",{id:"declaring-a-version-catalog"},"Declaring a version catalog"),(0,r.kt)("p",null,"Version catalogs can be declared in the settings.gradle file.",(0,r.kt)("br",{parentName:"p"}),"\n","There should be specified section ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencyResolutionManagement")," which uses ",(0,r.kt)("inlineCode",{parentName:"p"},"deps.toml")," file as a declared catalog."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencyResolutionManagement {\n    repositories {\n        maven {\n            url 'https://airbyte.mycloudrepo.io/public/repositories/airbyte-public-jars/'\n       }\n    }\n    versionCatalogs {\n        libs {\n            from(files(\"deps.toml\"))\n        }\n    }\n}\n"))),(0,r.kt)("h4",{id:"sharing-catalogs"},"Sharing Catalogs"),(0,r.kt)("p",null,"To share this catalog for further usage by other Projects, we do the following 2 steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("inlineCode",{parentName:"li"},"version-catalog")," plugin in ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," file (ignore if this record exists)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"plugins {\n    id '...'\n    id 'version-catalog'\n"))),(0,r.kt)("li",{parentName:"ul"},"Prepare Catalog for Publishing",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'catalog {\n    versionCatalog {\n        from(files("deps.toml")) < --- declere either dependencies or specify existing TOML file\n    }\n}\n')))),(0,r.kt)("h4",{id:"configure-the-plugin-publishing-plugin"},"Configure the Plugin Publishing Plugin"),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"Publishing"),", first define the ",(0,r.kt)("inlineCode",{parentName:"p"},"maven-publish")," plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file (ignore if this already exists):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"plugins {\n    id '...'\n    id 'maven-publish'\n}\n")),(0,r.kt)("p",null,"After that, describe the publishing section. Please use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/publishing_gradle_plugins.html"},"this")," official documentation for more details."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"publishing {\n    publications {\n        maven(MavenPublication) {\n            groupId = 'io.airbyte'\n            artifactId = 'oss-catalog'\n\n                from components.versionCatalog\n        }\n    }\n\n    repositories {\n        maven {\n            url 'https://airbyte.mycloudrepo.io/repositories/airbyte-public-jars'\n            credentials {\n                name 'cloudrepo'\n                username System.getenv('CLOUDREPO_USER')\n                password System.getenv('CLOUDREPO_PASSWORD')\n            }\n        }\n\n        mavenLocal()\n    }\n}\n"))))}u.isMDXComponent=!0}}]);