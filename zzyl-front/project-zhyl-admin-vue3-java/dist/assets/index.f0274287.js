import{d as E,u as L,a as T,r as n,b as J,c as M,o as O,e as i,f as p,g as x,w as r,h as A,i as B,j as u,k as l,l as P,F as G,n as H,m as K,p as Q,M as b,q as W,_ as k,s as S,t as I,v as X}from"./index.2854391f.js";const Y=t=>(S("data-v-00a39d7a"),t=t(),I(),t),Z={class:"check-container remember-pwd"},ee={key:1,class:"bt",type:"submit"},ae=Y(()=>l("div",{class:"gentleReminder"}," \u4EC5\u7528\u4E8EIT\u57F9\u8BAD\u6559\u5B66\u4F7F\u7528\uFF0C\u4E3A\u4FDD\u969C\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5B89\u5168\uFF0C\u8BF7\u52FF\u5411 \u5E73\u53F0\u5F55\u5165\u4EFB\u4F55\u4E2A\u4EBA\u654F\u611F\u4FE1\u606F(\u5982\u624B\u673A\u53F7\u3001\u8EAB\u4EFD\u8BC1\u53F7\u7B49) ! ",-1)),te=E({__name:"Login",setup(t){const v=L(),y=T(),f=n(!1),e=n({username:"fyz@qq.com",password:"888itcast.CN764%..."}),V={username:[{required:!0,message:"\u8D26\u53F7\u4E3A\u7A7A\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",type:"error"}],password:[{required:!0,message:"\u5BC6\u7801\u4E3A\u7A7A\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",type:"error"}]},C=n(2),R=n(),N=n(!1),j=J(),U=M(),_=n(!1),F=n(JSON.parse(localStorage.getItem("userdata")));O(()=>{F.value&&(_.value=F.value.checkbox,e.value.username=F.value.username,e.value.password=F.value.password)});const q=async({validateResult:s})=>{const a={...e.value,checkbox:_.value};_.value?localStorage.setItem("userdata",JSON.stringify(a)):localStorage.removeItem("userdata"),s===!0&&(f.value=!0,await K(e.value).then(async c=>{c.code===200&&(await v.login(c.data.userToken),v.setUserInfo(c.data),f.value=!1,await Q().then(async o=>{if(o.code===200){o.data.length||b.error("\u672A\u914D\u7F6E\u83DC\u5355\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),await y.setRouters(o.data);const d=U.query.redirect,g=d?decodeURIComponent(d):o.data&&o.data.length&&o.data[0].path;j.push(g),await W().then(async h=>{await v.setRouteButton(h.data)}),b.success("\u767B\u5F55\u6210\u529F")}}))}),setTimeout(()=>{f.value=!1},1e3))},z=s=>{if(!s){const a={...e.value,checkbox:s};localStorage.setItem("userdata",JSON.stringify(a))}},w=s=>s.replace(/\s/g,"");return(s,a)=>{const c=i("t-icon"),o=i("t-input"),d=i("t-form-item"),g=i("t-checkbox"),h=i("t-loading"),$=i("t-form");return p(),x($,{ref_key:"form",ref:R,class:H(["item-container",`login-${C.value}`]),data:e.value,rules:V,"label-width":"0",onSubmit:q},{default:r(()=>[A(" \u5BC6\u7801\u767B\u5F55 "),C.value==2?(p(),B(G,{key:0},[u(d,{name:"username"},{default:r(()=>[u(o,{modelValue:e.value.username,"onUpdate:modelValue":a[0]||(a[0]=m=>e.value.username=m),size:"large",placeholder:"\u8D26\u6237",autocomplete:"both",format:w,clearable:""},{"prefix-icon":r(()=>[u(c,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),u(d,{name:"password"},{default:r(()=>[u(o,{modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=m=>e.value.password=m),size:"large",type:N.value?"text":"password",clearable:"",placeholder:"\u5BC6\u7801",format:w,onkeyup:"this.value=this.value.replace(/[^\\w_]/g,'');",autocomplete:"both"},{"prefix-icon":r(()=>[u(c,{name:"lock-on"})]),_:1},8,["modelValue","type"])]),_:1}),l("div",Z,[u(g,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=m=>_.value=m),onChange:z},{default:r(()=>[P("\u81EA\u52A8\u767B\u5F55")]),_:1},8,["modelValue"])])],64)):A("v-if",!0),u(d,{class:"btn-container"},{default:r(()=>[f.value?(p(),x(h,{key:0,indicator:"",class:"bt load"})):(p(),B("button",ee,"\u767B\u5F55"))]),_:1}),ae]),_:1},8,["class","data"])}}});var oe=k(te,[["__scopeId","data-v-00a39d7a"],["__file","D:/project/2023/project-zhyl-admin-vue3-java/src/pages/login/components/Login.vue"]]);const D=t=>(S("data-v-247e7dd8"),t=t(),I(),t),ue={class:"login-wrapper"},se={class:"login-container"},ne=D(()=>l("div",{class:"title-container"},[l("h1",{class:"title"},[l("img",{src:X,alt:"",class:"logo"})])],-1)),re=D(()=>l("div",{class:"companyFooter"}," Copyright @ 2019-2020 Tencent. All Rights Reserved ",-1)),le=E({__name:"index",setup(t){return(v,y)=>(p(),B("div",ue,[l("div",se,[ne,u(oe)]),re]))}});var de=k(le,[["__scopeId","data-v-247e7dd8"],["__file","D:/project/2023/project-zhyl-admin-vue3-java/src/pages/login/index.vue"]]);export{de as default};
