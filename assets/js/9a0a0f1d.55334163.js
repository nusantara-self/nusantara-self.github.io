"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[186],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,g=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="Configuration Management",l={unversionedId:"Engineering/ConfigurationManagement",id:"Engineering/ConfigurationManagement",title:"Configuration Management",description:"Summary",source:"@site/docs/Engineering/ConfigurationManagement.md",sourceDirName:"Engineering",slug:"/Engineering/ConfigurationManagement",permalink:"/docs/Engineering/ConfigurationManagement",draft:!1,tags:[],version:"current",lastUpdatedAt:1690115748,formattedLastUpdatedAt:"Jul 23, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"Disaster Recovery Plan",permalink:"/docs/Engineering/DRP"}},u={},c=[{value:"Summary",id:"summary",level:2},{value:"Tools",id:"tools",level:2},{value:"OS Hardening",id:"os-hardening",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-management"},"Configuration Management"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Used for virtual machine OS-level configuration"),(0,a.kt)("li",{parentName:"ul"},"Ex: Configuring the internals of the VMs"),(0,a.kt)("li",{parentName:"ul"},"Referring to package configuration & software maintenance")),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Puppet ",(0,a.kt)("em",{parentName:"li"},"(might be covered here later on)")),(0,a.kt)("li",{parentName:"ul"},"Ansible"),(0,a.kt)("li",{parentName:"ul"},"Chef")),(0,a.kt)("h2",{id:"os-hardening"},"OS Hardening"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ovh/debian-cis/tree/master"},"OVH Debian CIS OS Hardening helper"))))}p.isMDXComponent=!0}}]);