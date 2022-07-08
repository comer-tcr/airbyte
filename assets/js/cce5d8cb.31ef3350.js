"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="LinkedIn Ads",o={unversionedId:"integrations/sources/linkedin-ads",id:"integrations/sources/linkedin-ads",title:"LinkedIn Ads",description:"This page guides you through the process of setting up the LinkedIn Ads source connector.",source:"@site/../docs/02-integrations/01-sources/linkedin-ads.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/linkedin-ads",permalink:"/integrations/sources/linkedin-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/linkedin-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lever Hiring",permalink:"/integrations/sources/lever-hiring"},next:{title:"Linnworks",permalink:"/integrations/sources/linnworks"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"For Airbyte Cloud",id:"for-airbyte-cloud",level:3},{value:"For Airbyte Open Source",id:"for-airbyte-open-source",level:3},{value:"Step 1: Set up LinkedIn Ads",id:"step-1-set-up-linkedin-ads",level:2},{value:"Notes:",id:"notes",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported Streams and Sync Modes",id:"supported-streams-and-sync-modes",level:2},{value:"NOTE:",id:"note",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkedin-ads"},"LinkedIn Ads"),(0,r.kt)("p",null,"This page guides you through the process of setting up the LinkedIn Ads source connector.\nThe LinkedIn Ads source connector is based on a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),". Airbyte uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/marketing-integrations-overview"},"LinkedIn Marketing Developer Platform - API")," to fetch data from LinkedIn Ads."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The LinkedIn Ads account with permission to access data from accounts you want to sync.")),(0,r.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The LinkedIn Ads account with permission to access data from accounts you want to sync."),(0,r.kt)("li",{parentName:"ul"},"Authentication Options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAuth2.0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," from your ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")," from your ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Refresh Token")," obtained from successfull authorization with ",(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")))),(0,r.kt)("li",{parentName:"ul"},"Access Token:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Access Token")," obtained from successfull authorization with ",(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret"))))))),(0,r.kt)("h2",{id:"step-1-set-up-linkedin-ads"},"Step 1: Set up LinkedIn Ads"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Login to LinkedIn as the API user."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create an App")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"here"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App Name"),": airbyte-source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Company"),": search and find your company LinkedIn page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Privacy policy URL"),": link to company privacy policy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Business email"),": developer/admin email address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App logo"),": Airbyte's ","(","or Company's",")"," logo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Products"),": Select ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/developers/apps/122632736/products/marketing-developer-platform"},"Marketing Developer Platform")," ","(","checkbox",")"),(0,r.kt)("li",{parentName:"ul"},"Review/agree to legal terms and create app."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify App"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provide the verify URL to your Company's LinkedIn Admin to verify and authorize the app."),(0,r.kt)("li",{parentName:"ul"},"Once verified, select the App in the Console ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/developers/apps"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Review the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Auth")," tab"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Record ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret")," ","(","for later steps",")","."),(0,r.kt)("li",{parentName:"ul"},"Review permissions and ensure app has the permissions ","(","above",")","."),(0,r.kt)("li",{parentName:"ul"},"Oauth 2.0 settings: Provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," ","(","for later steps",")",": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://airbyte.io")),(0,r.kt)("li",{parentName:"ul"},"Review the ",(0,r.kt)("inlineCode",{parentName:"li"},"Products")," tab and ensure ",(0,r.kt)("inlineCode",{parentName:"li"},"Marketing Developer Platform")," has been added and approved ","(","listed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Products")," section/tab",")","."),(0,r.kt)("li",{parentName:"ul"},"Review the ",(0,r.kt)("inlineCode",{parentName:"li"},"Usage & limits")," tab. This shows the daily application and user/member limits with percent used for each resource endpoint."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authorize App"),":"),(0,r.kt)("p",{parentName:"li"},"(Required for Airbyte Open Source, Optional for Airbyte Cloud)"),(0,r.kt)("p",{parentName:"li"},"The authorization token ",(0,r.kt)("inlineCode",{parentName:"p"},"lasts  60-days before expiring"),". The connector app will need to be reauthorized when the authorization token expires."),(0,r.kt)("p",{parentName:"li"},"Create an Authorization URL with the following pattern:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The permissions set you need to use is: ",(0,r.kt)("inlineCode",{parentName:"li"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social")),(0,r.kt)("li",{parentName:"ul"},"URL pattern: Provide the scope from permissions above ","(","with + delimiting each permission",")"," and replace the other highlighted parameters: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social")),(0,r.kt)("li",{parentName:"ul"},"Modify and open the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," in the browser."),(0,r.kt)("li",{parentName:"ul"},"Once redirected, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Allow")," to authorize app."),(0,r.kt)("li",{parentName:"ul"},"The browser will be redirected to the ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri"),". Record the ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," parameter listed in the redirect URL in the Browser header URL."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the following curl command")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Command line")," with the parameters replaced to return your  ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," expires in 2-months."),(0,r.kt)("p",{parentName:"li"},"(Required for Airbyte Open Source, Optional for Airbyte Cloud)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},' curl -0 -v -X POST https://www.linkedin.com/oauth/v2/accessToken\\\n -H "Accept: application/json"\\\n -H "application/x-www-form-urlencoded"\\\n -d "grant_type=authorization_code"\\\n -d "code=YOUR_CODE"\\\n -d "client_id=YOUR_CLIENT_ID"\\\n -d "client_secret=YOUR_CLIENT_SECRET"\\\n -d "redirect_uri=YOUR_REDIRECT_URI"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"access_token"))," from response from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Step 5")," to autorize LinkedIn Ads connector."),(0,r.kt)("p",{parentName:"li"},"(Required for Airbyte Open Source, Optional for Airbyte Cloud)"))),(0,r.kt)("h3",{id:"notes"},"Notes:"),(0,r.kt)("p",null,"The API user account should be assigned the following permissions for the API endpoints:\nEndpoints such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Account Users"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaign Groups"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaings"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Creatives")," requires the next permissions set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_ads"),": read ads ","(","Recommended",")",", ",(0,r.kt)("inlineCode",{parentName:"li"},"rw_ads"),": read-write ads\nEndpoints such as: ",(0,r.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Campaign"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Creatives")," requires the next permissions set:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_ads_reporting"),": read ads reporting\nThe complete set of permissions is:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social"))),(0,r.kt)("p",null,"The API user account should be assigned one of the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ACCOUNT","_","BILLING","_","ADMIN"),(0,r.kt)("li",{parentName:"ul"},"ACCOUNT","_","MANAGER"),(0,r.kt)("li",{parentName:"ul"},"CAMPAIGN","_","MANAGER"),(0,r.kt)("li",{parentName:"ul"},"CREATIVE","_","MANAGER"),(0,r.kt)("li",{parentName:"ul"},"VIEWER ","(","Recommended",")")),(0,r.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads")," from the Source type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Start Date")," - the starting point for your data replication."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"Account IDs (Optional)")," if required."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,r.kt)("li",{parentName:"ol"},"Log in and Authorize to the LinkedIn Ads account"),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the connector and select ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads")," from the Source type dropdown. "),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Start Date")," - the starting point for your data replication."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"Account IDs (Optional)")," if required."),(0,r.kt)("li",{parentName:"ol"},"Choose between Authentication Options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAuth2.0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy and paste info from your ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads developer application"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")),(0,r.kt)("li",{parentName:"ul"},"Obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"Refresh Token")," using ",(0,r.kt)("strong",{parentName:"li"},"Set up LinkedIn Ads")," guide steps and paste it into corresponding field."))))),(0,r.kt)("li",{parentName:"ul"},"Access Token:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"Access Token")," using ",(0,r.kt)("strong",{parentName:"li"},"Set up LinkedIn Ads")," guide steps and paste it into corresponding field."))))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,r.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported Streams and Sync Modes"),(0,r.kt)("p",null,"This Source is capable of syncing the following data as streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts"},"Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#find-ad-account-users-by-accounts"},"Account Users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#search-for-campaign-groups"},"Campaign Groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?tabs=http#search-for-campaigns"},"Campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?tabs=http#search-for-creatives"},"Creatives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/create-and-manage-video?tabs=http#finders"},"Ad Direct Sponsored Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Campaign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Creative")," ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Sync Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,r.kt)("h3",{id:"note"},"NOTE:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents")," stream includes the information about VIDEO ADS, as well as SINGLE IMAGE ADS and other directly sponsored ads your account might have."),(0,r.kt)("p",null,"For Analytics Streams such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Analytics by Campaign"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Analytics by Creative")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"pivot")," column name is renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"_pivot")," to handle the data normalization correctly and avoid name conflicts with certain destinations."),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whole number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DDThh:mm:ss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"True/False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"There are official Rate Limits for LinkedIn Ads API Usage, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/api-guide/concepts/rate-limits?context=linkedin/marketing/context"},"more information here"),". Rate limited requests will receive a 429 response. Rate limits specify the maximum number of API calls that can be made in a 24 hour period. These limits reset at midnight UTC every day. In rare cases, LinkedIn may also return a 429 response as part of infrastructure protection. API service will return to normal automatically. In such cases you will receive the next error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,r.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. If the maximum of available API requests capacity is reached, you will have the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"Max try rate limit exceded..."\n')),(0,r.kt)("p",null,"After 5 unsuccessful attempts - the connector will stop the sync operation. In such cases check your Rate Limits ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"on this page")," ",">"," Choose you app ",">"," Analytics. "),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13495"},"13495")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"td"},"base-normalization")," issue on ",(0,r.kt)("inlineCode",{parentName:"td"},"Destination Redshift")," caused by wrong casting of ",(0,r.kt)("inlineCode",{parentName:"td"},"pivot")," column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11690"},"11690")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Small documenation corrections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8984"},"8984")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8382"},"8382")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Modify log message in rate-limit cases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7839"},"7839")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6610"},"6610")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix for  ",(0,r.kt)("inlineCode",{parentName:"td"},"Campaigns/targetingCriteria")," transformation, coerced  ",(0,r.kt)("inlineCode",{parentName:"td"},"Creatives/variables/values")," to string by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5285"},"5285")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release of Native LinkedIn Ads connector for Airbyte")))))}m.isMDXComponent=!0}}]);