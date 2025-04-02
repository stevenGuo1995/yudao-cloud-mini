import{d as Q,D as T,g as U,r as m,f as D,C as E,G as L,_ as N,X as R,o as d,c as z,k as l,w as o,Y as S,m as c,I as g,q as _,F as O,Z as I,L as K,z as Y,N as j,O as M,P as A,Q as G,R as X}from"./index-BaY5TDP-.js";import{_ as Z}from"./index-avjYFQiD.js";import{_ as B}from"./DictTag-QtcI9ZjC.js";import{_ as H}from"./ContentWrap-DKQn7kZm.js";import{_ as J}from"./index-BAz6Gqim.js";import{d as W}from"./download-oWiM5xVU.js";import{S as q}from"./index-C5eeu8k9.js";import $ from"./SupplierForm-DtMiMIfX.js";import"./index-DrSdAlug.js";import"./color-BN7ZL7BD.js";import"./Dialog-CZSXtzfQ.js";import"./constants-CEEr2azc.js";const ee=N(Q({name:"ErpSupplier",__name:"index",setup(C,{expose:a}){a();const f=T(),{t:e}=U(),h=m(!0),v=m([]),b=m(0),s=D({pageNo:1,pageSize:10,name:void 0,mobile:void 0,telephone:void 0}),u=m(),i=m(!1),p=async()=>{h.value=!0;try{const n=await q.getSupplierPage(s);v.value=n.list,b.value=n.total}finally{h.value=!1}},x=()=>{s.pageNo=1,p()},y=m();E(()=>{p()});const r={message:f,t:e,loading:h,list:v,total:b,queryParams:s,queryFormRef:u,exportLoading:i,getList:p,handleQuery:x,resetQuery:()=>{u.value.resetFields(),x()},formRef:y,openForm:(n,w)=>{y.value.open(n,w)},handleDelete:async n=>{try{await f.delConfirm(),await q.deleteSupplier(n),f.success(e("common.delSuccess")),await p()}catch{}},handleExport:async()=>{try{await f.exportConfirm(),i.value=!0;const n=await q.exportSupplier(s);W.excel(n,"ERP \u4F9B\u5E94\u5546.xls")}catch{}finally{i.value=!1}},get DICT_TYPE(){return L},SupplierForm:$};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),[["render",function(C,a,f,e,h,v){const b=J,s=I,u=K,i=Y,p=j,x=M,y=H,r=A,n=B,w=G,k=Z,P=R("hasPermi"),V=X;return d(),z(O,null,[l(b,{title:"\u3010\u91C7\u8D2D\u3011\u91C7\u8D2D\u8BA2\u5355\u3001\u5165\u5E93\u3001\u9000\u8D27",url:"https://doc.iocoder.cn/erp/purchase/"}),l(y,null,{default:o(()=>[l(x,{class:"-mb-15px",model:e.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:o(()=>[l(u,{label:"\u540D\u79F0",prop:"name"},{default:o(()=>[l(s,{modelValue:e.queryParams.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.queryParams.name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:S(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),l(u,{label:"\u624B\u673A\u53F7\u7801",prop:"mobile"},{default:o(()=>[l(s,{modelValue:e.queryParams.mobile,"onUpdate:modelValue":a[1]||(a[1]=t=>e.queryParams.mobile=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",clearable:"",onKeyup:S(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),l(u,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"telephone"},{default:o(()=>[l(s,{modelValue:e.queryParams.telephone,"onUpdate:modelValue":a[2]||(a[2]=t=>e.queryParams.telephone=t),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",clearable:"",onKeyup:S(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(p,{onClick:e.handleQuery},{default:o(()=>[l(i,{icon:"ep:search",class:"mr-5px"}),a[6]||(a[6]=c(" \u641C\u7D22"))]),_:1}),l(p,{onClick:e.resetQuery},{default:o(()=>[l(i,{icon:"ep:refresh",class:"mr-5px"}),a[7]||(a[7]=c(" \u91CD\u7F6E"))]),_:1}),g((d(),_(p,{type:"primary",plain:"",onClick:a[3]||(a[3]=t=>e.openForm("create"))},{default:o(()=>[l(i,{icon:"ep:plus",class:"mr-5px"}),a[8]||(a[8]=c(" \u65B0\u589E "))]),_:1})),[[P,["erp:supplier:create"]]]),g((d(),_(p,{type:"success",plain:"",onClick:e.handleExport,loading:e.exportLoading},{default:o(()=>[l(i,{icon:"ep:download",class:"mr-5px"}),a[9]||(a[9]=c(" \u5BFC\u51FA "))]),_:1},8,["loading"])),[[P,["erp:supplier:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),l(y,null,{default:o(()=>[g((d(),_(w,{data:e.list,stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[l(r,{label:"\u540D\u79F0",align:"center",prop:"name"}),l(r,{label:"\u8054\u7CFB\u4EBA",align:"center",prop:"contact"}),l(r,{label:"\u624B\u673A\u53F7\u7801",align:"center",prop:"mobile"}),l(r,{label:"\u8054\u7CFB\u7535\u8BDD",align:"center",prop:"telephone"}),l(r,{label:"\u7535\u5B50\u90AE\u7BB1",align:"center",prop:"email"}),l(r,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),l(r,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),l(r,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:o(t=>[l(n,{type:e.DICT_TYPE.COMMON_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),l(r,{label:"\u64CD\u4F5C",align:"center"},{default:o(t=>[g((d(),_(p,{link:"",type:"primary",onClick:F=>e.openForm("update",t.row.id)},{default:o(()=>a[10]||(a[10]=[c(" \u7F16\u8F91 ")])),_:2},1032,["onClick"])),[[P,["erp:supplier:update"]]]),g((d(),_(p,{link:"",type:"danger",onClick:F=>e.handleDelete(t.row.id)},{default:o(()=>a[11]||(a[11]=[c(" \u5220\u9664 ")])),_:2},1032,["onClick"])),[[P,["erp:supplier:delete"]]])]),_:1})]),_:1},8,["data"])),[[V,e.loading]]),l(k,{total:e.total,page:e.queryParams.pageNo,"onUpdate:page":a[4]||(a[4]=t=>e.queryParams.pageNo=t),limit:e.queryParams.pageSize,"onUpdate:limit":a[5]||(a[5]=t=>e.queryParams.pageSize=t),onPagination:e.getList},null,8,["total","page","limit"])]),_:1}),l(e.SupplierForm,{ref:"formRef",onSuccess:e.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/erp/purchase/supplier/index.vue"]]);export{ee as default};
