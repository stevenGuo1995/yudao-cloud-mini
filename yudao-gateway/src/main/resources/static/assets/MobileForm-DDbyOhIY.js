import{d as O,g as R,D as U,a5 as j,u as q,r as f,b as H,a as z,f as N,au as Z,dh as A,aa as G,ab as J,ad as D,di as K,a8 as Q,_ as W,I as X,ag as Y,o as b,q as I,w as o,k as a,ah as C,c as V,t as T,L as $,v as ee,Z as ae,E as oe,O as ne}from"./index-BaY5TDP-.js";import{_ as ie}from"./XButton-BcV39lfk.js";import{u as F}from"./useIcon-BOHZRfMR.js";import{u as le,L as te,a as se,b as re}from"./LoginFormTitle-Rxr-yfvU.js";import{r as k}from"./formRules-CMjZInfO.js";const de={key:1,class:"getMobileCode",style:{cursor:"pointer"}},me=W(O({name:"MobileForm",__name:"MobileForm",setup(M,{expose:n}){n();const{t:h}=R(),e=U(),_=j(),{currentRoute:y,push:t}=q(),i=f(),r=f(!1),c=F({icon:"ep:house"}),p=F({icon:"ep:cellphone"}),v=F({icon:"ep:circle-check"}),{validForm:l}=re(i),{handleBackLogin:E,getLoginState:S}=le(),P=H(()=>z(S)===te.MOBILE),B={tenantName:[k],mobileNumber:[k],code:[k]},d=N({codeImg:"",tenantEnable:"true",token:"",loading:{signIn:!1},loginForm:{uuid:"",tenantName:"\u828B\u9053\u6E90\u7801",mobileNumber:"",code:""}}),m=N({smsCode:{mobile:"",scene:21},loginSms:{mobile:"",code:""}}),g=f(0),u=f("");Z(()=>y.value,s=>{var w;u.value=(w=s==null?void 0:s.query)==null?void 0:w.redirect},{immediate:!0});const x=async()=>{if(d.tenantEnable==="true"){const s=await G(d.loginForm.tenantName);J(s)}},L={t:h,message:e,permissionStore:_,currentRoute:y,push:t,formSmsLogin:i,loginLoading:r,iconHouse:c,iconCellphone:p,iconCircleCheck:v,validForm:l,handleBackLogin:E,getLoginState:S,getShow:P,rules:B,loginData:d,smsVO:m,mobileCodeTimer:g,redirect:u,getSmsCode:async()=>{await x(),m.smsCode.mobile=d.loginForm.mobileNumber,await A(m.smsCode).then(async()=>{e.success(h("login.SmsSendMsg")),g.value=60;let s=setInterval(()=>{g.value=g.value-1,g.value<=0&&clearInterval(s)},1e3)})},getTenantId:x,signIn:async()=>{await x(),await l()&&(D.service({lock:!0,text:"\u6B63\u5728\u52A0\u8F7D\u7CFB\u7EDF\u4E2D...",background:"rgba(0, 0, 0, 0.7)"}),r.value=!0,m.loginSms.mobile=d.loginForm.mobileNumber,m.loginSms.code=d.loginForm.code,await K(m.loginSms).then(async s=>{Q(s),u.value||(u.value="/"),t({path:u.value||_.addRouters[0].path})}).catch(()=>{}).finally(()=>{r.value=!1,setTimeout(()=>{D.service().close()},400)}))},LoginFormTitle:se};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}}),[["render",function(M,n,h,e,_,y){const t=$,i=ee,r=ae,c=oe,p=ie,v=ne;return X((b(),I(v,{ref:"formSmsLogin",model:e.loginData.loginForm,rules:e.rules,class:"login-form","label-position":"top","label-width":"120px",size:"large"},{default:o(()=>[a(c,{style:{"margin-right":"-10px","margin-left":"-10px"}},{default:o(()=>[a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[a(t,null,{default:o(()=>[a(e.LoginFormTitle,{style:{width:"100%"}})]),_:1})]),_:1}),a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[e.loginData.tenantEnable==="true"?(b(),I(t,{key:0,prop:"tenantName"},{default:o(()=>[a(r,{modelValue:e.loginData.loginForm.tenantName,"onUpdate:modelValue":n[0]||(n[0]=l=>e.loginData.loginForm.tenantName=l),placeholder:e.t("login.tenantNamePlaceholder"),"prefix-icon":e.iconHouse,type:"primary",link:""},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})):C("",!0)]),_:1}),a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[a(t,{prop:"mobileNumber"},{default:o(()=>[a(r,{modelValue:e.loginData.loginForm.mobileNumber,"onUpdate:modelValue":n[1]||(n[1]=l=>e.loginData.loginForm.mobileNumber=l),placeholder:e.t("login.mobileNumberPlaceholder"),"prefix-icon":e.iconCellphone},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[a(t,{prop:"code"},{default:o(()=>[a(c,{gutter:5,justify:"space-between",style:{width:"100%"}},{default:o(()=>[a(i,{span:24},{default:o(()=>[a(r,{modelValue:e.loginData.loginForm.code,"onUpdate:modelValue":n[2]||(n[2]=l=>e.loginData.loginForm.code=l),placeholder:e.t("login.codePlaceholder"),"prefix-icon":e.iconCircleCheck},{append:o(()=>[e.mobileCodeTimer<=0?(b(),V("span",{key:0,class:"getMobileCode",style:{cursor:"pointer"},onClick:e.getSmsCode},T(e.t("login.getSmsCode")),1)):C("",!0),e.mobileCodeTimer>0?(b(),V("span",de,T(e.mobileCodeTimer)+"\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6 ",1)):C("",!0)]),_:1},8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[a(t,null,{default:o(()=>[a(p,{loading:e.loginLoading,title:e.t("login.login"),class:"w-[100%]",type:"primary",onClick:n[3]||(n[3]=l=>e.signIn())},null,8,["loading","title"])]),_:1})]),_:1}),a(i,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:o(()=>[a(t,null,{default:o(()=>[a(p,{loading:e.loginLoading,title:e.t("login.backLogin"),class:"w-[100%]",onClick:n[4]||(n[4]=l=>e.handleBackLogin())},null,8,["loading","title"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),[[Y,e.getShow]])}],["__scopeId","data-v-badf870a"],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/Login/components/MobileForm.vue"]]);export{me as default};
