"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8251],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68755:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l="TikTok Marketing",o={unversionedId:"integrations/sources/tiktok-marketing",id:"integrations/sources/tiktok-marketing",title:"TikTok Marketing",description:"This page guides you through the process of setting up the TikTok Marketing source connector.",source:"@site/../docs/02-integrations/01-sources/tiktok-marketing.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/tiktok-marketing",permalink:"/integrations/sources/tiktok-marketing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/tiktok-marketing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TiDB",permalink:"/integrations/sources/tidb"},next:{title:"3PL Central",permalink:"/integrations/sources/tplcentral"}},p={},d=[{value:"Prerequisites (Airbyte Cloud)",id:"prerequisites-airbyte-cloud",level:2},{value:"Prerequisites (Airbyte Open Source)",id:"prerequisites-airbyte-open-source",level:2},{value:"Step 1: Set up TikTok",id:"step-1-set-up-tiktok",level:2},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported streams and sync modes",id:"supported-streams-and-sync-modes",level:2},{value:"Report Aggregation",id:"report-aggregation",level:3},{value:"Output Schemas",id:"output-schemas",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tiktok-marketing"},"TikTok Marketing"),(0,r.kt)("p",null,"This page guides you through the process of setting up the TikTok Marketing source connector."),(0,r.kt)("h2",{id:"prerequisites-airbyte-cloud"},"Prerequisites (Airbyte Cloud)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Tiktok Ads Business account with permission to access data from accounts you want to sync ")),(0,r.kt)("h2",{id:"prerequisites-airbyte-open-source"},"Prerequisites (Airbyte Open Source)"),(0,r.kt)("p",null,"For the Production environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access token "),(0,r.kt)("li",{parentName:"ul"},"Secret"),(0,r.kt)("li",{parentName:"ul"},"App ID")),(0,r.kt)("p",null,"To access the Sandbox environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access token "),(0,r.kt)("li",{parentName:"ul"},"Advertiser ID")),(0,r.kt)("h2",{id:"step-1-set-up-tiktok"},"Step 1: Set up TikTok"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a TikTok For Business account: ",(0,r.kt)("a",{parentName:"li",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702715936951297"},"Link")),(0,r.kt)("li",{parentName:"ol"},"(Open source only) Create developer application: ",(0,r.kt)("a",{parentName:"li",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702716474845185"},"Link")),(0,r.kt)("li",{parentName:"ol"},"(Open source only) For a sandbox environment: create a Sandbox Ad Account ",(0,r.kt)("a",{parentName:"li",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1701890920013825"},"Link"))),(0,r.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,r.kt)("strong",{parentName:"li"},"Tiktok Marketing")," from the Source type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," Authorization method, then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,r.kt)("li",{parentName:"ol"},"Log in and Authorize to the Tiktok account"),(0,r.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,r.kt)("li",{parentName:"ol"},"click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the connector and select ",(0,r.kt)("strong",{parentName:"li"},"Tiktok Marketing")," from the Source type dropdown. "),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Production Access Token")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Sandbox Access Token")," Authorization method, then copy and paste info from step 1."),(0,r.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,r.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported streams and sync modes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Stream"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Incremental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Advertisers"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroups"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"adgroup_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ads"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"ad_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Campaigns"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"campaign_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdsReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdsReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdsReportsLifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersReportsLifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroupsReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroupsReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroupsReportsLifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CampaignsReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CampaignsReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CampaignsReportsLifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersAudienceReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersAudienceReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdvertisersAudienceReportsLifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroupAudienceReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdGroupAudienceReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdsAudienceReportsHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdsAudienceReportsDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CampaignsAudienceReportsByCountryHourly"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CampaignsAudienceReportsByCountryDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod,Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,r.kt)("h3",{id:"report-aggregation"},"Report Aggregation"),(0,r.kt)("p",null,"Reports synced by this connector can use either hourly, daily, or lifetime granularities for aggregating performance data. For example, if you select the daily-aggregation flavor of a report, the report will contain a row for each day for the duration of the report. Each row will indicate the number of impressions recorded on that day."),(0,r.kt)("h3",{id:"output-schemas"},"Output Schemas"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1708503202263042"},"Advertisers")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "contacter": "Ai***te",\n  "phonenumber": "+13*****5753",\n  "license_no": "",\n  "promotion_center_city": null,\n  "balance": 10,\n  "license_url": null,\n  "timezone": "Etc/GMT+8",\n  "reason": "",\n  "telephone": "+14*****6785",\n  "id": 7002238017842757633,\n  "language": "en",\n  "country": "US",\n  "role": "ROLE_ADVERTISER",\n  "license_province": null,\n  "display_timezone": "America/Los_Angeles",\n  "email": "i***************@**********",\n  "license_city": null,\n  "industry": "291905",\n  "create_time": 1630335591,\n  "promotion_center_province": null,\n  "address": "350 29th avenue, San Francisco",\n  "currency": "USD",\n  "promotion_area": "0",\n  "status": "STATUS_ENABLE",\n  "description": "https://",\n  "brand": null,\n  "name": "Airbyte0830",\n  "company": "Airbyte"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1708503489590273"},"AdGroups")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "placement_type": "PLACEMENT_TYPE_AUTOMATIC",\n  "budget": 20,\n  "budget_mode": "BUDGET_MODE_DAY",\n  "display_mode": null,\n  "schedule_infos": null,\n  "billing_event": "CPC",\n  "conversion_window": null,\n  "adgroup_name": "Ad Group20211020010107",\n  "interest_keywords": [],\n  "is_comment_disable": 0,\n  "rf_buy_type": null,\n  "frequency": null,\n  "bid_type": "BID_TYPE_NO_BID",\n  "placement": null,\n  "bid": 0,\n  "include_custom_actions": [],\n  "operation_system": [],\n  "pixel_id": null,\n  "dayparting": "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",\n  "app_type": null,\n  "conversion_id": 0,\n  "rf_predict_cpr": null,\n  "deep_bid_type": null,\n  "scheduled_budget": 0.0,\n  "adgroup_id": 1714125049901106,\n  "frequency_schedule": null,\n  "exclude_custom_actions": [],\n  "advertiser_id": 7002238017842757633,\n  "deep_cpabid": 0,\n  "is_new_structure": true,\n  "buy_impression": null,\n  "external_type": "WEBSITE",\n  "excluded_audience": [],\n  "deep_external_action": null,\n  "interest_category_v2": [],\n  "rf_predict_frequency": null,\n  "audience": [],\n  "pacing": "PACING_MODE_SMOOTH",\n  "brand_safety_partner": null,\n  "daily_retention_ratio": null,\n  "optimize_goal": "CLICK",\n  "enable_search_result": false,\n  "conversion_bid": 0,\n  "schedule_end_time": "2021-10-31 09:01:07",\n  "opt_status": "ENABLE",\n  "status": "ADGROUP_STATUS_CAMPAIGN_DISABLE",\n  "app_id": null,\n  "external_action": null,\n  "schedule_type": "SCHEDULE_START_END",\n  "brand_safety": "NO_BRAND_SAFETY",\n  "campaign_id": 1714125042508817,\n  "campaign_name": "Website Traffic20211020010104",\n  "split_test_adgroup_ids": [],\n  "action_v2": [],\n  "is_hfss": false,\n  "keywords": null,\n  "create_time": "2021-10-20 08:04:05",\n  "feed_type": null,\n  "languages": ["en"],\n  "enable_inventory_filter": false,\n  "device_price": [],\n  "location": [6252001],\n  "schedule_start_time": "2021-10-20 09:01:07",\n  "skip_learning_phase": 0,\n  "gender": "GENDER_UNLIMITED",\n  "creative_material_mode": "CUSTOM",\n  "app_download_url": null,\n  "device_models": [],\n  "automated_targeting": "OFF",\n  "connection_type": [],\n  "ios14_quota_type": "UNOCCUPIED",\n  "modify_time": "2022-03-24 12:06:54",\n  "category": 0,\n  "statistic_type": null,\n  "video_download": "ALLOW_DOWNLOAD",\n  "age": ["AGE_25_34", "AGE_35_44", "AGE_45_54"],\n  "buy_reach": null,\n  "is_share_disable": false\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1708572923161602"},"Ads")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "vast_moat": false,\n  "is_new_structure": true,\n  "campaign_name": "CampaignVadimTraffic",\n  "landing_page_urls": null,\n  "card_id": null,\n  "adgroup_id": 1728545385226289,\n  "campaign_id": 1728545382536225,\n  "status": "AD_STATUS_CAMPAIGN_DISABLE",\n  "brand_safety_postbid_partner": "UNSET",\n  "advertiser_id": 7002238017842757633,\n  "is_aco": false,\n  "ad_text": "Open-source\\ndata integration for modern data teams",\n  "identity_id": "7080121820963422209",\n  "display_name": "airbyte",\n  "open_url": "",\n  "external_action": null,\n  "playable_url": "",\n  "create_time": "2022-03-28 12:09:09",\n  "product_ids": [],\n  "adgroup_name": "AdGroupVadim",\n  "fallback_type": "UNSET",\n  "creative_type": null,\n  "ad_name": "AdVadim-Optimized Version 3_202203281449_2022-03-28 05:03:44",\n  "video_id": "v10033g50000c90q1d3c77ub6e96fvo0",\n  "ad_format": "SINGLE_VIDEO",\n  "profile_image": "https://p21-ad-sg.ibyteimg.com/large/ad-site-i18n-sg/202203285d0de5c114d0690a462bb6a4",\n  "open_url_type": "NORMAL",\n  "click_tracking_url": null,\n  "page_id": null,\n  "ad_texts": null,\n  "landing_page_url": "https://airbyte.com",\n  "identity_type": "CUSTOMIZED_USER",\n  "avatar_icon_web_uri": "ad-site-i18n-sg/202203285d0de5c114d0690a462bb6a4",\n  "app_name": "",\n  "modify_time": "2022-03-28 21:34:26",\n  "opt_status": "ENABLE",\n  "call_to_action_id": "7080120957230238722",\n  "image_ids": ["v0201/7f371ff6f0764f8b8ef4f37d7b980d50"],\n  "ad_id": 1728545390695442,\n  "impression_tracking_url": null,\n  "is_creative_authorized": false\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1708582970809346"},"Campaigns")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "create_time": "2021-10-19 18:18:08",\n  "campaign_id": 1714073078669329,\n  "roas_bid": 0.0,\n  "advertiser_id": 7002238017842757633,\n  "modify_time": "2022-03-28 12:01:56",\n  "campaign_type": "REGULAR_CAMPAIGN",\n  "status": "CAMPAIGN_STATUS_DISABLE",\n  "objective_type": "TRAFFIC",\n  "split_test_variable": null,\n  "opt_status": "DISABLE",\n  "budget": 50,\n  "is_new_structure": true,\n  "deep_bid_type": null,\n  "campaign_name": "Website Traffic20211019110444",\n  "budget_mode": "BUDGET_MODE_DAY",\n  "objective": "LANDING_PAGE"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdsReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957200780290"},"BasicReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dimensions": {\n    "ad_id": 1728545390695442,\n    "stat_time_day": "2022-03-29 00:00:00"\n  },\n  "metrics": {\n    "real_time_result_rate": 0.93,\n    "campaign_id": 1728545382536225,\n    "placement": "Automatic Placement",\n    "frequency": 1.17,\n    "cpc": 0.35,\n    "ctr": 0.93,\n    "cost_per_result": 0.3509,\n    "impressions": 6137,\n    "cost_per_conversion": 0,\n    "real_time_result": 57,\n    "adgroup_id": 1728545385226289,\n    "result_rate": 0.93,\n    "cost_per_1000_reached": 3.801,\n    "ad_text": "Open-source\\ndata integration for modern data teams",\n    "spend": 20,\n    "conversion_rate": 0,\n    "real_time_cost_per_conversion": 0,\n    "promotion_type": "Website",\n    "tt_app_id": 0,\n    "real_time_cost_per_result": 0.3509,\n    "conversion": 0,\n    "secondary_goal_result": null,\n    "campaign_name": "CampaignVadimTraffic",\n    "cpm": 3.26,\n    "result": 57,\n    "ad_name": "AdVadim-Optimized Version 3_202203281449_2022-03-28 05:03:44",\n    "secondary_goal_result_rate": null,\n    "clicks": 57,\n    "reach": 5262,\n    "cost_per_secondary_goal_result": null,\n    "real_time_conversion": 0,\n    "real_time_conversion_rate": 0,\n    "mobile_app_id": "0",\n    "tt_app_name": "0",\n    "adgroup_name": "AdGroupVadim",\n    "dpa_target_audience_type": null\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdvertisersReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957200780290"},"BasicReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "metrics": {\n    "cpm": 5.43,\n    "impressions": 3682,\n    "frequency": 1.17,\n    "reach": 3156,\n    "cash_spend": 20,\n    "ctr": 1.14,\n    "spend": 20,\n    "cpc": 0.48,\n    "cost_per_1000_reached": 6.337,\n    "clicks": 42,\n    "voucher_spend": 0\n  },\n  "dimensions": {\n    "stat_time_day": "2022-03-30 00:00:00",\n    "advertiser_id": 7002238017842757633\n  }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdGroupsReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957200780290"},"BasicReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "metrics": {\n    "real_time_conversion": 0,\n    "real_time_cost_per_conversion": 0,\n    "cost_per_1000_reached": 3.801,\n    "mobile_app_id": "0",\n    "reach": 5262,\n    "cpm": 3.26,\n    "conversion": 0,\n    "promotion_type": "Website",\n    "clicks": 57,\n    "real_time_result_rate": 0.93,\n    "real_time_conversion_rate": 0,\n    "cost_per_conversion": 0,\n    "dpa_target_audience_type": null,\n    "result": 57,\n    "cpc": 0.35,\n    "impressions": 6137,\n    "cost_per_result": 0.3509,\n    "tt_app_id": 0,\n    "cost_per_secondary_goal_result": null,\n    "frequency": 1.17,\n    "spend": 20,\n    "secondary_goal_result_rate": null,\n    "real_time_cost_per_result": 0.3509,\n    "real_time_result": 57,\n    "placement": "Automatic Placement",\n    "result_rate": 0.93,\n    "tt_app_name": "0",\n    "campaign_name": "CampaignVadimTraffic",\n    "secondary_goal_result": null,\n    "campaign_id": 1728545382536225,\n    "conversion_rate": 0,\n    "ctr": 0.93,\n    "adgroup_name": "AdGroupVadim"\n  },\n  "dimensions": {\n    "adgroup_id": 1728545385226289,\n    "stat_time_day": "2022-03-29 00:00:00"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CampaignsReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957200780290"},"BasicReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "metrics": {\n    "cpc": 0.43,\n    "spend": 20,\n    "clicks": 46,\n    "cost_per_1000_reached": 4.002,\n    "impressions": 5870,\n    "ctr": 0.78,\n    "frequency": 1.17,\n    "cpm": 3.41,\n    "campaign_name": "CampaignVadimTraffic",\n    "reach": 4997\n  },\n  "dimensions": {\n    "campaign_id": 1728545382536225,\n    "stat_time_day": "2022-03-28 00:00:00"\n  }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdsAudienceReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957217727489"},"AudienceReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{ \n  {\n    "result": 17,\n    "clicks": 17,\n    "real_time_conversion_rate": 0,\n    "adgroup_id": 1728545385226289,\n    "cpm": 3.01,\n    "cost_per_result": 0.4165,\n    "real_time_cost_per_result": 0.4165,\n    "mobile_app_id": 0,\n    "spend": 7.08,\n    "cpc": 0.42,\n    "placement": "Automatic Placement",\n    "real_time_conversion": 0,\n    "dpa_target_audience_type": null,\n    "real_time_result_rate": 0.72,\n    "adgroup_name": "AdGroupVadim",\n    "tt_app_id": 0,\n    "ctr": 0.72,\n    "ad_text": "Open-source\\ndata integration for modern data teams",\n    "result_rate": 0.72,\n    "ad_name": "AdVadim-Optimized Version 3_202203281449_2022-03-28 05:03:44",\n    "conversion_rate": 0,\n    "real_time_result": 17,\n    "tt_app_name": "0",\n    "cost_per_conversion": 0,\n    "real_time_cost_per_conversion": 0,\n    "conversion": 0,\n    "impressions": 2350,\n    "promotion_type": "Website",\n    "campaign_id": 1728545382536225,\n    "campaign_name": "CampaignVadimTraffic"\n  },\n  "dimensions": {\n    "gender": "MALE",\n    "age": "AGE_25_34",\n    "ad_id": 1728545390695442,\n    "stat_time_day": "2022-03-28 00:00:00"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdvertisersAudienceReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957217727489"},"AudienceReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dimensions": {\n    "stat_time_day": "2022-03-28 00:00:00",\n    "gender": "FEMALE",\n    "advertiser_id": 7002238017842757633,\n    "age": "AGE_35_44"\n  },\n  "metrics": {\n    "spend": 3.09,\n    "ctr": 0.93,\n    "cpc": 0.44,\n    "clicks": 7,\n    "cpm": 4.11,\n    "impressions": 752\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AdGroupAudienceReportsDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957217727489"},"AudienceReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dimensions": {\n    "gender": "MALE",\n    "age": "AGE_25_34",\n    "stat_time_day": "2022-03-29 00:00:00",\n    "adgroup_id": 1728545385226289\n  },\n  "metrics": {\n    "cost_per_conversion": 0,\n    "campaign_id": 1728545382536225,\n    "campaign_name": "CampaignVadimTraffic",\n    "clicks": 20,\n    "dpa_target_audience_type": null,\n    "mobile_app_id": 0,\n    "promotion_type": "Website",\n    "conversion_rate": 0,\n    "cpm": 3.9,\n    "cost_per_result": 0.3525,\n    "cpc": 0.35,\n    "real_time_cost_per_conversion": 0,\n    "ctr": 1.11,\n    "spend": 7.05,\n    "result": 20,\n    "real_time_result": 20,\n    "impressions": 1806,\n    "conversion": 0,\n    "real_time_result_rate": 1.11,\n    "real_time_conversion_rate": 0,\n    "real_time_conversion": 0,\n    "adgroup_name": "AdGroupVadim",\n    "tt_app_name": "0",\n    "placement": "Automatic Placement",\n    "real_time_cost_per_result": 0.3525,\n    "result_rate": 1.11,\n    "tt_app_id": 0\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CampaignsAudienceReportsByCountryDaily Stream - ",(0,r.kt)("a",{parentName:"strong",href:"https://ads.tiktok.com/marketing_api/docs?id=1707957217727489"},"AudienceReports"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "metrics": {\n    "impressions": 5870,\n    "campaign_name": "CampaignVadimTraffic",\n    "cpm": 3.41,\n    "clicks": 46,\n    "spend": 20,\n    "ctr": 0.78,\n    "cpc": 0.43\n  },\n  "dimensions": {\n    "stat_time_day": "2022-03-28 00:00:00",\n    "campaign_id": 1728545382536225,\n    "country_code": "US"\n  }\n}\n\n')),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The connector is restricted by ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1725359439428610"},"requests limitation"),". This connector should not run into TikTok Marketing API limitations under normal usage. Please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13890"},"13890")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removed granularity config option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13650"},"13650")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added video metrics to report streams")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-24"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13127"},"13127")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed integration test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12838"},"12838")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added end date configuration for tiktok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12545"},"12545")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removed odd production authenication method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12435"},"12435")),(0,r.kt)("td",{parentName:"tr",align:"left"},"updated spec descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12380"},"12380")),(0,r.kt)("td",{parentName:"tr",align:"left"},"fixed spec descriptions and documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11378"},"11378")),(0,r.kt)("td",{parentName:"tr",align:"left"},"updated logic for stream initializations, fixed errors in schemas, updated SAT and unit tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10398"},"10398")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add Audience reports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7636"},"7636")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add OAuth support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"8425")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8292"},"8292")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support reports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5887"},"5887")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Release TikTok Marketing CDK Connector")))))}m.isMDXComponent=!0}}]);