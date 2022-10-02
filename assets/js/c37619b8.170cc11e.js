"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>N,frontMatter:()=>k,metadata:()=>f,toc:()=>w});var o=n(7462),r=n(7294),a=n(3905),s=n(6010),l=n(2389),i=n(7392),u=n(7094),c=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:a,defaultValue:l,values:m,groupId:h,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,u.U)(),[S,N]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==S&&k.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),o=k[n].value;o!==S&&(P(t),N(o),null!=h&&w(h,String(o)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},y)},k.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:O,onClick:O},a,{className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,l.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}const y="tabItem_Ymn6";function g(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(y,o),hidden:n},t)}const k={},b="Remote SSH an IAP-secured server using a terminal or VSCode",f={unversionedId:"GCP/Identity-Aware Proxy/remote-ssh-iap",id:"GCP/Identity-Aware Proxy/remote-ssh-iap",title:"Remote SSH an IAP-secured server using a terminal or VSCode",description:"Getting started",source:"@site/docs/GCP/Identity-Aware Proxy/remote-ssh-iap.md",sourceDirName:"GCP/Identity-Aware Proxy",slug:"/GCP/Identity-Aware Proxy/remote-ssh-iap",permalink:"/docs/GCP/Identity-Aware Proxy/remote-ssh-iap",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fabien Bloume",lastUpdatedAt:1664699541,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"Resources",permalink:"/docs/Security Operations/secops-resources"}},v={},w=[{value:"Getting started",id:"getting-started",level:2},{value:"Install the gcloud CLI",id:"install-the-gcloud-cli",level:3},{value:"Authentication with the CLI",id:"gcloud-auth",level:3},{value:"Using a standard terminal",id:"using-a-standard-terminal",level:2},{value:"Using VSCode Remote Explorer",id:"using-vscode-remote-explorer",level:2},{value:"CLI Authentication",id:"cli-authentication",level:3},{value:"SSH tunnel dry run",id:"ssh-tunnel-dry-run",level:3},{value:"Updating your ~/.ssh/config",id:"updating-your-sshconfig",level:3},{value:"Connect to Host on VSCode",id:"connect-to-host-on-vscode",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"SSH issues with WSL &amp; VScode on Windows",id:"ssh-issues-with-wsl--vscode-on-windows",level:3}],S={toc:w};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-ssh-an-iap-secured-server-using-a-terminal-or-vscode"},"Remote SSH an IAP-secured server using a terminal or VSCode"),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"install-the-gcloud-cli"},"Install the gcloud CLI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install#linux"},"Official documentation")),(0,a.kt)("h3",{id:"gcloud-auth"},"Authentication with the CLI"),(0,a.kt)("p",null,"Before each session you may launch, make sure to be ",(0,a.kt)("strong",{parentName:"p"},"authenticated with your gcloud account")," within the CLI"),(0,a.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(g,{value:"Linux/mac",label:"Standard",mdxType:"TabItem"},(0,a.kt)("pre",null,"gcloud auth login")),(0,a.kt)(g,{value:"WSL",label:"WSL",mdxType:"TabItem"},(0,a.kt)("pre",null,"gcloud auth login --no-launch-browser"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"using-a-standard-terminal"},"Using a standard terminal"),(0,a.kt)("p",null,"Very straightforward, make sure to be authenticated and run the following command :"),(0,a.kt)("pre",null,"gcloud compute ssh my-instance --tunnel-through-iap "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"using-vscode-remote-explorer"},"Using VSCode Remote Explorer"),(0,a.kt)("h3",{id:"cli-authentication"},"CLI Authentication"),(0,a.kt)("p",null,"As usual, make sure to be authenticated : ",(0,a.kt)("a",{parentName:"p",href:"#gcloud-auth"},"gcloud authentication")),(0,a.kt)("h3",{id:"ssh-tunnel-dry-run"},"SSH tunnel dry run"),(0,a.kt)("p",null,"Then, make sure to ",(0,a.kt)("strong",{parentName:"p"},"dry run ssh tunnel")," to your instance : "),(0,a.kt)("pre",null,"gcloud compute ssh my-instance --tunnel-through-iap --dry-run"),(0,a.kt)("p",null,"You should get a response similar to that one : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/usr/bin/ssh -t -i /Users/YOURNAME/.ssh/google_compute_engine \n-o CheckHostIP=no \n-o HashKnownHosts=no -o HostKeyAlias=compute.XXXX -o IdentitiesOnly=yes \n-o StrictHostKeyChecking=yes \n-o UserKnownHostsFile=/Users/YOURNAME/.ssh/google_compute_known_hosts \n-o ProxyCommand="/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 -S /Applications/google-cloud-sdk/lib/gcloud.py compute start-iap-tunnel my-instance %p --listen-on-stdin --project=my-project --zone=my-zone --verbosity=warning" \n-o ProxyUseFdpass=no YOURNAME@compute.XXXX\n')),(0,a.kt)("p",null,"Now, what we are going to do is to ",(0,a.kt)("strong",{parentName:"p"},"copy the ProxyCommand")," out of it, which contains the info we need :\n",(0,a.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python [....] -verbosity=warning")),(0,a.kt)("h3",{id:"updating-your-sshconfig"},"Updating your ~/.ssh/config"),(0,a.kt)("p",null,"Now, using VScode, let's have a look at our ssh config file : "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CMD + shift + P"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Remote-SSH : Open SSH configuration file"))),(0,a.kt)("p",null,"Into this file, add the following content and make sure to ",(0,a.kt)("strong",{parentName:"p"},"replace the full ProxyCommand")," by the way copied ealier :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host my-instance-name\n  HostName my-instance-name\n  IdentityFile /Users/YOURNAME/.ssh/google_compute_engine\n  CheckHostIP no\n  HashKnownHosts no\n  HostKeyAlias my-instance-name\n  IdentitiesOnly yes\n  StrictHostKeyChecking yes\n  UserKnownHostsFile /Users/YOURNAME/.ssh/google_compute_known_hosts\n  ProxyCommand /Library/Frameworks/Python [....] -verbosity=warning\n  ProxyUseFdpass no\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Host, HostName & HostKeyAlias")," can all be replaced by whatever value you wish.\nDo not forget ",(0,a.kt)("em",{parentName:"p"},"setting the right UserKnownHostsFile")," directory as well as pasting the ",(0,a.kt)("em",{parentName:"p"},"full ProxyCommand content"))),(0,a.kt)("h3",{id:"connect-to-host-on-vscode"},"Connect to Host on VSCode"),(0,a.kt)("p",null,"Now, you should be able to remote SSH your IAP-secured instance directly on VScode."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CMD + shift + P"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Remote-SSH : Connect to Host"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pick your new entry ",(0,a.kt)("strong",{parentName:"p"},"'my-instance-name'"),", which should appear")),(0,a.kt)("p",null,"You can now use File Explorer tab to go to whatever folder you wish and edit files directly in VSCode. Saving you ton of time if you are not an avid vim programmer."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"There might be a few additional steps on a ",(0,a.kt)("strong",{parentName:"p"},"Windows")," environment where you use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Windows Subsystem for Linux")),". By default, VSCode does not use the WSL's ssh, which is a problem. See ",(0,a.kt)("a",{parentName:"p",href:"#troubleshoot"},"Troubleshoot")," below.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,a.kt)("h3",{id:"ssh-issues-with-wsl--vscode-on-windows"},"SSH issues with WSL & VScode on Windows"),(0,a.kt)("p",null,"Coming soon"))}N.isMDXComponent=!0}}]);