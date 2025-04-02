import{d as V,D,g as E,r as d,f as Q,C as U,H as A,G as L,_ as Y,X as z,o as p,c as S,k as a,w as o,Y as q,F as R,n as B,q as y,m as g,I as v,Z as K,L as G,J as M,K as j,z as H,N as J,O as X,P as Z,Q as W,R as $}from"./index-BaY5TDP-.js";import{_ as ee}from"./index-avjYFQiD.js";import{_ as ae}from"./DictTag-QtcI9ZjC.js";import{E as le}from"./el-image-Bg-CwbDE.js";import{_ as re}from"./ContentWrap-DKQn7kZm.js";import{C as x,a as oe}from"./ChatRoleForm-CkDSrpdx.js";import"./index-DrSdAlug.js";import"./color-BN7ZL7BD.js";import"./Dialog-CZSXtzfQ.js";import"./constants-CEEr2azc.js";import"./index-Cz_ljQ_t.js";const te=Y(V({name:"AiChatRole",__name:"index",setup(N,{expose:r}){r();const f=D(),{t:e}=E(),_=d(!0),P=d([]),m=d(0),u=Q({pageNo:1,pageSize:10,name:void 0,category:void 0,publicStatus:!0}),b=d(),i=async()=>{_.value=!0;try{const s=await x.getChatRolePage(u);P.value=s.list,m.value=s.total}finally{_.value=!1}},c=()=>{u.pageNo=1,i()},n=d();U(()=>{i()});const h={message:f,t:e,loading:_,list:P,total:m,queryParams:u,queryFormRef:b,getList:i,handleQuery:c,resetQuery:()=>{b.value.resetFields(),c()},formRef:n,openForm:(s,t)=>{n.value.open(s,t)},handleDelete:async s=>{try{await f.delConfirm(),await x.deleteChatRole(s),f.success(e("common.delSuccess")),await i()}catch{}},get getBoolDictOptions(){return A},get DICT_TYPE(){return L},ChatRoleForm:oe};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),[["render",function(N,r,f,e,_,P){const m=K,u=G,b=M,i=j,c=H,n=J,h=X,s=re,t=Z,T=le,w=ae,k=W,F=ee,C=z("hasPermi"),O=$;return p(),S(R,null,[a(s,null,{default:o(()=>[a(h,{class:"-mb-15px",model:e.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:o(()=>[a(u,{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{default:o(()=>[a(m,{modelValue:e.queryParams.name,"onUpdate:modelValue":r[0]||(r[0]=l=>e.queryParams.name=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:"",onKeyup:q(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u89D2\u8272\u7C7B\u522B",prop:"category"},{default:o(()=>[a(m,{modelValue:e.queryParams.category,"onUpdate:modelValue":r[1]||(r[1]=l=>e.queryParams.category=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7C7B\u522B",clearable:"",onKeyup:q(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u662F\u5426\u516C\u5F00",prop:"publicStatus"},{default:o(()=>[a(i,{modelValue:e.queryParams.publicStatus,"onUpdate:modelValue":r[2]||(r[2]=l=>e.queryParams.publicStatus=l),placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u516C\u5F00",clearable:"",class:"!w-240px"},{default:o(()=>[(p(!0),S(R,null,B(e.getBoolDictOptions(e.DICT_TYPE.INFRA_BOOLEAN_STRING),l=>(p(),y(b,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,null,{default:o(()=>[a(n,{onClick:e.handleQuery},{default:o(()=>[a(c,{icon:"ep:search",class:"mr-5px"}),r[6]||(r[6]=g(" \u641C\u7D22"))]),_:1}),a(n,{onClick:e.resetQuery},{default:o(()=>[a(c,{icon:"ep:refresh",class:"mr-5px"}),r[7]||(r[7]=g(" \u91CD\u7F6E"))]),_:1}),v((p(),y(n,{type:"primary",plain:"",onClick:r[3]||(r[3]=l=>e.openForm("create"))},{default:o(()=>[a(c,{icon:"ep:plus",class:"mr-5px"}),r[8]||(r[8]=g(" \u65B0\u589E "))]),_:1})),[[C,["ai:chat-role:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(s,null,{default:o(()=>[v((p(),y(k,{data:e.list,stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[a(t,{label:"\u89D2\u8272\u540D\u79F0",align:"center",prop:"name"}),a(t,{label:"\u7ED1\u5B9A\u6A21\u578B",align:"center",prop:"modelName"}),a(t,{label:"\u89D2\u8272\u5934\u50CF",align:"center",prop:"avatar"},{default:o(l=>[a(T,{src:l==null?void 0:l.row.avatar,class:"w-32px h-32px"},null,8,["src"])]),_:1}),a(t,{label:"\u89D2\u8272\u7C7B\u522B",align:"center",prop:"category"}),a(t,{label:"\u89D2\u8272\u63CF\u8FF0",align:"center",prop:"description"}),a(t,{label:"\u89D2\u8272\u8BBE\u5B9A",align:"center",prop:"systemMessage"}),a(t,{label:"\u662F\u5426\u516C\u5F00",align:"center",prop:"publicStatus"},{default:o(l=>[a(w,{type:e.DICT_TYPE.INFRA_BOOLEAN_STRING,value:l.row.publicStatus},null,8,["type","value"])]),_:1}),a(t,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:o(l=>[a(w,{type:e.DICT_TYPE.COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),a(t,{label:"\u89D2\u8272\u6392\u5E8F",align:"center",prop:"sort"}),a(t,{label:"\u64CD\u4F5C",align:"center"},{default:o(l=>[v((p(),y(n,{link:"",type:"primary",onClick:I=>e.openForm("update",l.row.id)},{default:o(()=>r[9]||(r[9]=[g(" \u7F16\u8F91 ")])),_:2},1032,["onClick"])),[[C,["ai:chat-role:update"]]]),v((p(),y(n,{link:"",type:"danger",onClick:I=>e.handleDelete(l.row.id)},{default:o(()=>r[10]||(r[10]=[g(" \u5220\u9664 ")])),_:2},1032,["onClick"])),[[C,["ai:chat-role:delete"]]])]),_:1})]),_:1},8,["data"])),[[O,e.loading]]),a(F,{total:e.total,page:e.queryParams.pageNo,"onUpdate:page":r[4]||(r[4]=l=>e.queryParams.pageNo=l),limit:e.queryParams.pageSize,"onUpdate:limit":r[5]||(r[5]=l=>e.queryParams.pageSize=l),onPagination:e.getList},null,8,["total","page","limit"])]),_:1}),a(e.ChatRoleForm,{ref:"formRef",onSuccess:e.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/ai/model/chatRole/index.vue"]]);export{te as default};
