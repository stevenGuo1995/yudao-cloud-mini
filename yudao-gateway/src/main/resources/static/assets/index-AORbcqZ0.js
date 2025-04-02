import{d as O,D as W,g as E,r as f,f as I,C as L,U as Q,G as R,e2 as z,_ as M,X as Y,o as u,c as k,k as a,w as o,Y as A,F,n as K,q as g,m as h,I as _,Z as j,L as G,J,K as X,z as Z,N as B,O as H,P as $,ch as ee,Q as ae,R as te}from"./index-BaY5TDP-.js";import{_ as re}from"./index-avjYFQiD.js";import{_ as le}from"./DictTag-QtcI9ZjC.js";import{_ as oe}from"./ContentWrap-DKQn7kZm.js";import{_ as se}from"./index-BAz6Gqim.js";import{d as ne}from"./formatTime-Dr6TiYYc.js";import{d as ue}from"./download-oWiM5xVU.js";import{W as P}from"./index-B0TWi7A6.js";import ie from"./WarehouseForm-BpCB8r7l.js";import"./index-DrSdAlug.js";import"./color-BN7ZL7BD.js";import"./Dialog-CZSXtzfQ.js";import"./constants-CEEr2azc.js";const pe=M(O({name:"ErpWarehouse",__name:"index",setup(T,{expose:t}){t();const m=W(),{t:e}=E(),w=f(!0),S=f([]),v=f(0),d=I({pageNo:1,pageSize:10,name:void 0,status:void 0}),c=f(),y=f(!1),i=async()=>{w.value=!0;try{const l=await P.getWarehousePage(d);S.value=l.list,v.value=l.total}finally{w.value=!1}},p=()=>{d.pageNo=1,i()},n=f();L(()=>{i()});const b={message:m,t:e,loading:w,list:S,total:v,queryParams:d,queryFormRef:c,exportLoading:y,getList:i,handleQuery:p,resetQuery:()=>{c.value.resetFields(),p()},formRef:n,openForm:(l,s)=>{n.value.open(l,s)},handleDelete:async l=>{try{await m.delConfirm(),await P.deleteWarehouse(l),m.success(e("common.delSuccess")),await i()}catch{}},handleDefaultStatusChange:async l=>{try{const s=l.defaultStatus?"\u8BBE\u7F6E":"\u53D6\u6D88";await m.confirm("\u786E\u8BA4\u8981"+s+'"'+l.name+'"\u9ED8\u8BA4\u5417?'),await P.updateWarehouseDefaultStatus(l.id,l.defaultStatus),await i()}catch{l.defaultStatus=!l.defaultStatus}},handleExport:async()=>{try{await m.exportConfirm(),y.value=!0;const l=await P.exportWarehouse(d);ue.excel(l,"\u4ED3\u5E93.xls")}catch{}finally{y.value=!1}},get getIntDictOptions(){return Q},get DICT_TYPE(){return R},get dateFormatter(){return ne},WarehouseForm:ie,get erpPriceTableColumnFormatter(){return z}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),[["render",function(T,t,m,e,w,S){const v=se,d=j,c=G,y=J,i=X,p=Z,n=B,b=H,l=oe,s=$,q=le,D=ee,U=ae,V=re,x=Y("hasPermi"),N=te;return u(),k(F,null,[a(v,{title:"\u3010\u5E93\u5B58\u3011\u4EA7\u54C1\u5E93\u5B58\u3001\u5E93\u5B58\u660E\u7EC6",url:"https://doc.iocoder.cn/erp/stock/"}),a(l,null,{default:o(()=>[a(b,{class:"-mb-15px",model:e.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:o(()=>[a(c,{label:"\u4ED3\u5E93\u540D\u79F0",prop:"name"},{default:o(()=>[a(d,{modelValue:e.queryParams.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.queryParams.name=r),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0",clearable:"",onKeyup:A(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u4ED3\u5E93\u72B6\u6001",prop:"status"},{default:o(()=>[a(i,{modelValue:e.queryParams.status,"onUpdate:modelValue":t[1]||(t[1]=r=>e.queryParams.status=r),placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u72B6\u6001",clearable:"",class:"!w-240px"},{default:o(()=>[(u(!0),k(F,null,K(e.getIntDictOptions(e.DICT_TYPE.COMMON_STATUS),r=>(u(),g(y,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:o(()=>[a(n,{onClick:e.handleQuery},{default:o(()=>[a(p,{icon:"ep:search",class:"mr-5px"}),t[5]||(t[5]=h(" \u641C\u7D22"))]),_:1}),a(n,{onClick:e.resetQuery},{default:o(()=>[a(p,{icon:"ep:refresh",class:"mr-5px"}),t[6]||(t[6]=h(" \u91CD\u7F6E"))]),_:1}),_((u(),g(n,{type:"primary",plain:"",onClick:t[2]||(t[2]=r=>e.openForm("create"))},{default:o(()=>[a(p,{icon:"ep:plus",class:"mr-5px"}),t[7]||(t[7]=h(" \u65B0\u589E "))]),_:1})),[[x,["erp:warehouse:create"]]]),_((u(),g(n,{type:"success",plain:"",onClick:e.handleExport,loading:e.exportLoading},{default:o(()=>[a(p,{icon:"ep:download",class:"mr-5px"}),t[8]||(t[8]=h(" \u5BFC\u51FA "))]),_:1},8,["loading"])),[[x,["erp:warehouse:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(l,null,{default:o(()=>[_((u(),g(U,{data:e.list,stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[a(s,{label:"\u4ED3\u5E93\u540D\u79F0",align:"center",prop:"name"}),a(s,{label:"\u4ED3\u5E93\u5730\u5740",align:"center",prop:"address"}),a(s,{label:"\u4ED3\u50A8\u8D39",align:"center",prop:"warehousePrice",formatter:e.erpPriceTableColumnFormatter},null,8,["formatter"]),a(s,{label:"\u642C\u8FD0\u8D39",align:"center",prop:"truckagePrice",formatter:e.erpPriceTableColumnFormatter},null,8,["formatter"]),a(s,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"principal"}),a(s,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),a(s,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),a(s,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:o(r=>[a(q,{type:e.DICT_TYPE.COMMON_STATUS,value:r.row.status},null,8,["type","value"])]),_:1}),a(s,{label:"\u662F\u5426\u9ED8\u8BA4",align:"center",prop:"defaultStatus"},{default:o(r=>[a(D,{modelValue:r.row.defaultStatus,"onUpdate:modelValue":C=>r.row.defaultStatus=C,"active-value":!0,"inactive-value":!1,onChange:C=>e.handleDefaultStatusChange(r.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(s,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e.dateFormatter,width:"180px"},null,8,["formatter"]),a(s,{label:"\u64CD\u4F5C",align:"center"},{default:o(r=>[_((u(),g(n,{link:"",type:"primary",onClick:C=>e.openForm("update",r.row.id)},{default:o(()=>t[9]||(t[9]=[h(" \u7F16\u8F91 ")])),_:2},1032,["onClick"])),[[x,["erp:warehouse:update"]]]),_((u(),g(n,{link:"",type:"danger",onClick:C=>e.handleDelete(r.row.id)},{default:o(()=>t[10]||(t[10]=[h(" \u5220\u9664 ")])),_:2},1032,["onClick"])),[[x,["erp:warehouse:delete"]]])]),_:1})]),_:1},8,["data"])),[[N,e.loading]]),a(V,{total:e.total,page:e.queryParams.pageNo,"onUpdate:page":t[3]||(t[3]=r=>e.queryParams.pageNo=r),limit:e.queryParams.pageSize,"onUpdate:limit":t[4]||(t[4]=r=>e.queryParams.pageSize=r),onPagination:e.getList},null,8,["total","page","limit"])]),_:1}),a(e.WarehouseForm,{ref:"formRef",onSuccess:e.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/erp/stock/warehouse/index.vue"]]);export{pe as default};
