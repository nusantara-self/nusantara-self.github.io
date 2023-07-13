"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="Data Recovery Plan",l={unversionedId:"Engineering principles/DRP",id:"Engineering principles/DRP",title:"Data Recovery Plan",description:"Resources",source:"@site/docs/Engineering principles/DRP.md",sourceDirName:"Engineering principles",slug:"/Engineering principles/DRP",permalink:"/docs/Engineering principles/DRP",draft:!1,tags:[],version:"current",lastUpdatedAt:1689280475,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"Port-forwarding to localhost",permalink:"/docs/GCP/Identity-Aware Proxy/port-forwarding"}},c={},u=[{value:"Resources",id:"resources",level:2},{value:"Infrastructure as Code",id:"infrastructure-as-code",level:2},{value:"Configuration Management",id:"configuration-management",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-recovery-plan"},"Data Recovery Plan"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://c4model.com"},"C4 Model for software engineering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://googlecloudcheatsheet.withgoogle.com/architecture"},"GCP Architecture diagram"))),(0,a.kt)("h2",{id:"infrastructure-as-code"},"Infrastructure as Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Used for provisioning and managing cloud resources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Creating and provisioning a VM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Referring to all APIs used to deploy infrastructure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Declarative statements : the yaml configuration is a picture of the desired stage. Unlike CLI commands which are imperative and tells what to do : We can focus on how the infrastructure should be."))),(0,a.kt)("p",null,"Popular solution : Hashicorp Terraform, which is multi API / multi-cloud with an open-source core."),(0,a.kt)("h2",{id:"configuration-management"},"Configuration Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Used for virtual machine OS-level configuration"),(0,a.kt)("li",{parentName:"ul"},"Configuring the internals of the VMs"),(0,a.kt)("li",{parentName:"ul"},"Referring to package configuration & software maintenance")))}p.isMDXComponent=!0}}]);