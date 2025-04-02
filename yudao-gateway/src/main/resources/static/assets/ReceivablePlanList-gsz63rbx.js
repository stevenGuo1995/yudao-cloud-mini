import{d as P,D as R,g as C,r as v,f as F,au as x,e2 as N,_ as q,X as S,o as m,c as L,k as o,w as i,m as y,I,q as w,F as j,z,N as D,E as T,P as U,Q,R as E}from"./index-BaY5TDP-.js";import{_ as O}from"./ContentWrap-DKQn7kZm.js";import{_ as X}from"./index-avjYFQiD.js";import{g as A,d as B}from"./index-ndAUlMgd.js";import G from"./ReceivablePlanForm-CXCxBqXI.js";import{b as H}from"./formatTime-Dr6TiYYc.js";import"./index-DrSdAlug.js";import"./Dialog-CZSXtzfQ.js";import"./index-CuAlllbQ.js";import"./index-h6ObHKtQ.js";import"./index-B97LdofC.js";const J=q(P({name:"CrmReceivablePlanList",__name:"ReceivablePlanList",props:{customerId:{type:Number,required:!1},contractId:{type:Number,required:!1}},emits:["createReceivable"],setup(h,{expose:r,emit:k}){r();const e=h,d=R(),{t:_}=C(),n=v(!0),l=v(0),p=v([]),a=F({pageNo:1,pageSize:10,customerId:void 0,contractId:void 0}),s=async()=>{n.value=!0;try{e.customerId&&!e.contractId?a.customerId=e.customerId:e.customerId&&e.contractId&&(a.customerId=e.customerId,a.contractId=e.contractId);const t=await A(a);p.value=t.list,l.value=t.total}finally{n.value=!1}},u=()=>{a.pageNo=1,a.customerId=void 0,a.contractId=void 0,s()},f=v(),c=k;x(()=>[e.customerId,e.contractId],t=>{t[0]&&u()},{immediate:!0,deep:!0});const b={props:e,message:d,t:_,loading:n,total:l,list:p,queryParams:a,getList:s,handleQuery:u,formRef:f,openForm:(t,g)=>{f.value.open(t,g,e.customerId,e.contractId)},emits:c,createReceivable:t=>{c("createReceivable",t)},handleDelete:async t=>{try{await d.delConfirm(),await B(t),d.success(_("common.delSuccess")),await s()}catch{}},ReceivableForm:G,get dateFormatter2(){return H},get erpPriceTableColumnFormatter(){return N}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),[["render",function(h,r,k,e,d,_){const n=z,l=D,p=T,a=U,s=Q,u=X,f=O,c=S("hasPermi"),b=E;return m(),L(j,null,[o(p,{justify:"end"},{default:i(()=>[o(l,{onClick:r[0]||(r[0]=t=>e.openForm("create",void 0))},{default:i(()=>[o(n,{class:"mr-5px",icon:"icon-park:income"}),r[3]||(r[3]=y(" \u521B\u5EFA\u56DE\u6B3E\u8BA1\u5212 "))]),_:1})]),_:1}),o(f,{class:"mt-10px"},{default:i(()=>[I((m(),w(s,{data:e.list,"show-overflow-tooltip":!0,stripe:!0},{default:i(()=>[o(a,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"150px"}),o(a,{align:"center",label:"\u5408\u540C\u7F16\u53F7",prop:"contractNo",width:"200px"}),o(a,{align:"center",label:"\u671F\u6570",prop:"period"}),o(a,{align:"center",label:"\u8BA1\u5212\u56DE\u6B3E(\u5143)",prop:"price",width:"120",formatter:e.erpPriceTableColumnFormatter},null,8,["formatter"]),o(a,{formatter:e.dateFormatter2,align:"center",label:"\u8BA1\u5212\u56DE\u6B3E\u65E5\u671F",prop:"returnTime",width:"180px"},null,8,["formatter"]),o(a,{align:"center",label:"\u63D0\u524D\u51E0\u5929\u63D0\u9192",prop:"remindDays",width:"150"}),o(a,{formatter:e.dateFormatter2,align:"center",label:"\u63D0\u9192\u65E5\u671F",prop:"remindTime",width:"180px"},null,8,["formatter"]),o(a,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),o(a,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),o(a,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"200px"},{default:i(t=>[I((m(),w(l,{link:"",type:"primary",onClick:g=>e.createReceivable(t.row),disabled:t.row.receivableId},{default:i(()=>r[4]||(r[4]=[y(" \u521B\u5EFA\u56DE\u6B3E ")])),_:2},1032,["onClick","disabled"])),[[c,["crm:receivable:create"]]]),I((m(),w(l,{link:"",type:"primary",onClick:g=>e.openForm("update",t.row.id)},{default:i(()=>r[5]||(r[5]=[y(" \u7F16\u8F91 ")])),_:2},1032,["onClick"])),[[c,["crm:receivable-plan:update"]]]),I((m(),w(l,{link:"",type:"danger",onClick:g=>e.handleDelete(t.row.id)},{default:i(()=>r[6]||(r[6]=[y(" \u5220\u9664 ")])),_:2},1032,["onClick"])),[[c,["crm:receivable-plan:delete"]]])]),_:1})]),_:1},8,["data"])),[[b,e.loading]]),o(u,{limit:e.queryParams.pageSize,"onUpdate:limit":r[1]||(r[1]=t=>e.queryParams.pageSize=t),page:e.queryParams.pageNo,"onUpdate:page":r[2]||(r[2]=t=>e.queryParams.pageNo=t),total:e.total,onPagination:e.getList},null,8,["limit","page","total"])]),_:1}),o(e.ReceivableForm,{ref:"formRef",onSuccess:e.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/crm/receivable/plan/components/ReceivablePlanList.vue"]]);export{J as default};
