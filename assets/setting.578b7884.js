import{d as w,r as c,n as D,l as b,o as m,q as f,b as u,e as a,ah as C,w as t,ai as v,aj as n,Q as d,c as N,ak as A,C as _,P as h,al as F,am as y,S,ag as x,E as o,x as g}from"./vendor.1df33794.js";var O="/pikpak/assets/aria2-tip-1.e9ebfae4.png",I="/pikpak/assets/aria2-tip-2.f3636f8d.png";const j={class:"list-page"},T=o("img",{src:O,alt:""},null,-1),J=o("br",null,null,-1),U=o("br",null,null,-1),P=o("img",{src:I,alt:""},null,-1),V=g("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),L=g("\u4FDD\u5B58"),$=o("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),q=o("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),G=o("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),H=o("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),z=w({setup(M){const l=c({host:"",token:""}),k=()=>{let r={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&r.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(r),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{e.error&&e.error.message?window.$message.error(e.error.message):e.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(e=>console.error("Error:",e))},p=c(!1),i=c({username:"",password:""}),B=D(),E=()=>{p.value?B.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(i.value))}}):window.localStorage.removeItem("pikpakLoginData")};return b(()=>{let r=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");r.host&&(l.value=r);let e=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");e.username&&e.password&&(i.value=e,p.value=!0)}),(r,e)=>(m(),f("div",j,[u(a(C),{"default-expanded-names":["0","2"]},{default:t(()=>[u(a(v),{name:"0",title:"aria2\u8BBE\u7F6E"},{default:t(()=>[u(a(F),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[u(a(n),{label:"aria2\u94FE\u63A5\uFF1A"},{default:t(()=>[u(a(d),{value:l.value.host,"onUpdate:value":e[0]||(e[0]=s=>l.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),u(a(n),{label:"aria2Token\uFF1A"},{default:t(()=>[u(a(d),{value:l.value.token,"onUpdate:value":e[1]||(e[1]=s=>l.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(m(),N(a(A),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:t(()=>[T,J,U,P]),_:1})):_("",!0),u(a(n),null,{default:t(()=>[u(a(h),{type:"primary",onClick:k},{default:t(()=>[V]),_:1})]),_:1})]),_:1})]),_:1}),u(a(v),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{default:t(()=>[u(a(F),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[u(a(n),{label:"\u662F\u5426\u5F00\u542F"},{default:t(()=>[u(a(y),{value:p.value,"onUpdate:value":e[2]||(e[2]=s=>p.value=s)},null,8,["value"])]),_:1}),p.value?(m(),f(S,{key:0},[u(a(n),{label:"\u7528\u6237\u540D"},{default:t(()=>[u(a(d),{value:i.value.username,"onUpdate:value":e[3]||(e[3]=s=>i.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),u(a(n),{label:"\u5BC6\u7801"},{default:t(()=>[u(a(d),{value:i.value.password,"onUpdate:value":e[4]||(e[4]=s=>i.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):_("",!0),u(a(n),null,{default:t(()=>[u(a(h),{type:"primary",onClick:E},{default:t(()=>[L]),_:1})]),_:1})]),_:1})]),_:1}),u(a(v),{title:"\u5173\u4E8E",name:"2"},{default:t(()=>[u(a(x),null,{default:t(()=>[$,q,G,H]),_:1})]),_:1})]),_:1})]))}});export{z as default};