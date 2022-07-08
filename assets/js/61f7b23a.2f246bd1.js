"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},67111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={},i="SonarQube workflow",l={unversionedId:"contributing-to-airbyte/sonar-qube-workflow",id:"contributing-to-airbyte/sonar-qube-workflow",title:"SonarQube workflow",description:"Goals",source:"@site/../docs/09-contributing-to-airbyte/sonar-qube-workflow.md",sourceDirName:"09-contributing-to-airbyte",slug:"/contributing-to-airbyte/sonar-qube-workflow",permalink:"/contributing-to-airbyte/sonar-qube-workflow",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/sonar-qube-workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docusaurus Settings",permalink:"/contributing-to-airbyte/updating-documentation/docusaurus/docusaurus_settings"},next:{title:"Templates",permalink:"/contributing-to-airbyte/templates/"}},s={},u=[{value:"Goals",id:"goals",level:2},{value:"UML diagram",id:"uml-diagram",level:2},{value:"Used tools",id:"used-tools",level:2},{value:"Python",id:"python",level:3},{value:"Common tools",id:"common-tools",level:3},{value:"Access to SonarQube",id:"access-to-sonarqube",level:2},{value:"SonarQube settings",id:"sonarqube-settings",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sonarqube-workflow"},"SonarQube workflow"),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("p",null,"\xa0","The Airbyte monorepo receives contributions from a lot of developers, and there is no way around human errors while merging PRs.\nLikely every language has different tools for testing and validation of source files. And while it's best practice to lint and validate code before pushing to git branches, it doesn't always happen.\nBut it is optional, and as rule as we detect possible problems after launch test/publish commands only. Therefore, using of automated CI code validation can  provided the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Problem/vulnerability reports available when the PR was created. And developers would fix bugs and remove smells before code reviews."),(0,a.kt)("li",{parentName:"ul"},"Reviewers would be sure all standard checks were made and code changes satisfy the requirements."),(0,a.kt)("li",{parentName:"ul"},"Set of tools and their options can be changed anytime globally."),(0,a.kt)("li",{parentName:"ul"},"Progress of code changes are saved in SonarQube and this information helps to analyse quality of the product  integrally and also its separate parts.")),(0,a.kt)("h2",{id:"uml-diagram"},"UML diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11213273/149561440-0aceaa30-8f82-4e5b-9ee5-77bdcfd87695.png",alt:"image"})),(0,a.kt)("h2",{id:"used-tools"},"Used tools"),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://flake8.pycqa.org/en/stable/"},"flake8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mypy.readthedocs.io/en/stable/"},"mypy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pycqa.github.io/isort/"},"isort")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/en/stable/"},"black")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://coverage.readthedocs.io/en/6.2/"},"coverage"))),(0,a.kt)("p",null,"All Python tools use the common ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/pyproject.toml"},"pyproject.toml")," file."),(0,a.kt)("h3",{id:"common-tools"},"Common tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/"},"SonarQube Scanner"))),(0,a.kt)("h2",{id:"access-to-sonarqube"},"Access to SonarQube"),(0,a.kt)("p",null,"The Airbyte project uses a custom SonarQube instance. Access to it is explained ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte-cloud/wiki/IAP-tunnel-to-the-SonarQube-instance"},"here"),"."),(0,a.kt)("h2",{id:"sonarqube-settings"},"SonarQube settings"),(0,a.kt)("p",null,"The SonarQube server uses default settings. All customisations are implemented into the Github WorkFlows. More details are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/.github/actions/ci-tests-runner/action.yml"},"here")))}p.isMDXComponent=!0}}]);