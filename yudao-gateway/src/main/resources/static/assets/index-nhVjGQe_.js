import{d as E,D as Y,g as N,r as p,f as Q,C as R,U as z,G as W,ez as A,e2 as O,_ as K,X as H,o as t,c as P,k as r,w as o,Y as I,F as C,n as U,q as n,m,I as f,Z as j,L as G,J,K as X,M as Z,z as $,N as B,O as ee,P as ae,Q as le,R as re}from"./index-BaY5TDP-.js";import{_ as oe}from"./index-avjYFQiD.js";import{_ as te}from"./DictTag-QtcI9ZjC.js";import{_ as se}from"./ContentWrap-DKQn7kZm.js";import{_ as ue}from"./index-BAz6Gqim.js";import{b as ie}from"./formatTime-Dr6TiYYc.js";import{d as ne}from"./download-oWiM5xVU.js";import{S as L,a as de}from"./StockMoveForm-B1UYJtqI.js";import{P as pe}from"./index-CJwxK5Qx.js";import{W as me}from"./index-B0TWi7A6.js";import{g as ce}from"./index-CuAlllbQ.js";import"./index-DrSdAlug.js";import"./color-BN7ZL7BD.js";import"./Dialog-CZSXtzfQ.js";import"./StockMoveItemForm-CDo2YOW8.js";import"./index-DMn3OXs3.js";const fe=K(E({name:"ErpStockMove",__name:"index",setup(D,{expose:l}){l();const h=Y(),{t:e}=N(),x=p(!0),F=p([]),S=p(0),k=Q({pageNo:1,pageSize:10,no:void 0,productId:void 0,fromWarehouseId:void 0,moveTime:[],status:void 0,remark:void 0,creator:void 0}),d=p(),y=p(!1),b=p([]),q=p([]),v=p([]),s=async()=>{x.value=!0;try{const u=await L.getStockMovePage(k);F.value=u.list,S.value=u.total}finally{x.value=!1}},T=()=>{k.pageNo=1,s()},w=p(),i=p([]);R(async()=>{await s(),b.value=await pe.getProductSimpleList(),q.value=await me.getWarehouseSimpleList(),v.value=await ce()});const V={message:h,t:e,loading:x,list:F,total:S,queryParams:k,queryFormRef:d,exportLoading:y,productList:b,warehouseList:q,userList:v,getList:s,handleQuery:T,resetQuery:()=>{d.value.resetFields(),T()},formRef:w,openForm:(u,c)=>{w.value.open(u,c)},handleDelete:async u=>{try{await h.delConfirm(),await L.deleteStockMove(u),h.success(e("common.delSuccess")),await s(),i.value=i.value.filter(c=>!u.includes(c.id))}catch{}},handleUpdateStatus:async(u,c)=>{try{await h.confirm(`\u786E\u5B9A${c===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8C03\u5EA6\u5355\u5417\uFF1F`),await L.updateStockMoveStatus(u,c),h.success((c===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await s()}catch{}},handleExport:async()=>{try{await h.exportConfirm(),y.value=!0;const u=await L.exportStockMove(k);ne.excel(u,"\u5E93\u5B58\u8C03\u5EA6\u5355.xls")}catch{}finally{y.value=!1}},selectionList:i,handleSelectionChange:u=>{i.value=u},get getIntDictOptions(){return z},get DICT_TYPE(){return W},get dateFormatter2(){return ie},StockMoveForm:de,get erpCountTableColumnFormatter(){return A},get erpPriceTableColumnFormatter(){return O}};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}),[["render",function(D,l,h,e,x,F){const S=ue,k=j,d=G,y=J,b=X,q=Z,v=$,s=B,T=ee,w=se,i=ae,V=te,u=le,c=oe,g=H("hasPermi"),M=re;return t(),P(C,null,[r(S,{title:"\u3010\u5E93\u5B58\u3011\u5E93\u5B58\u8C03\u62E8\u3001\u5E93\u5B58\u76D8\u70B9",url:"https://doc.iocoder.cn/erp/stock-move-check/"}),r(w,null,{default:o(()=>[r(T,{class:"-mb-15px",model:e.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:o(()=>[r(d,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:o(()=>[r(k,{modelValue:e.queryParams.no,"onUpdate:modelValue":l[0]||(l[0]=a=>e.queryParams.no=a),placeholder:"\u8BF7\u8F93\u5165\u8C03\u5EA6\u5355\u53F7",clearable:"",onKeyup:I(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u4EA7\u54C1",prop:"productId"},{default:o(()=>[r(b,{modelValue:e.queryParams.productId,"onUpdate:modelValue":l[1]||(l[1]=a=>e.queryParams.productId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:o(()=>[(t(!0),P(C,null,U(e.productList,a=>(t(),n(y,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(d,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:o(()=>[r(q,{modelValue:e.queryParams.moveTime,"onUpdate:modelValue":l[2]||(l[2]=a=>e.queryParams.moveTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),r(d,{label:"\u4ED3\u5E93",prop:"fromWarehouseId"},{default:o(()=>[r(b,{modelValue:e.queryParams.fromWarehouseId,"onUpdate:modelValue":l[3]||(l[3]=a=>e.queryParams.fromWarehouseId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:o(()=>[(t(!0),P(C,null,U(e.warehouseList,a=>(t(),n(y,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(d,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:o(()=>[r(b,{modelValue:e.queryParams.creator,"onUpdate:modelValue":l[4]||(l[4]=a=>e.queryParams.creator=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:o(()=>[(t(!0),P(C,null,U(e.userList,a=>(t(),n(y,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(d,{label:"\u72B6\u6001",prop:"status"},{default:o(()=>[r(b,{modelValue:e.queryParams.status,"onUpdate:modelValue":l[5]||(l[5]=a=>e.queryParams.status=a),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:o(()=>[(t(!0),P(C,null,U(e.getIntDictOptions(e.DICT_TYPE.ERP_AUDIT_STATUS),a=>(t(),n(y,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(d,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[r(k,{modelValue:e.queryParams.remark,"onUpdate:modelValue":l[6]||(l[6]=a=>e.queryParams.remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:I(e.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),r(d,null,{default:o(()=>[r(s,{onClick:e.handleQuery},{default:o(()=>[r(v,{icon:"ep:search",class:"mr-5px"}),l[11]||(l[11]=m(" \u641C\u7D22"))]),_:1}),r(s,{onClick:e.resetQuery},{default:o(()=>[r(v,{icon:"ep:refresh",class:"mr-5px"}),l[12]||(l[12]=m(" \u91CD\u7F6E"))]),_:1}),f((t(),n(s,{type:"primary",plain:"",onClick:l[7]||(l[7]=a=>e.openForm("create"))},{default:o(()=>[r(v,{icon:"ep:plus",class:"mr-5px"}),l[13]||(l[13]=m(" \u65B0\u589E "))]),_:1})),[[g,["erp:stock-move:create"]]]),f((t(),n(s,{type:"success",plain:"",onClick:e.handleExport,loading:e.exportLoading},{default:o(()=>[r(v,{icon:"ep:download",class:"mr-5px"}),l[14]||(l[14]=m(" \u5BFC\u51FA "))]),_:1},8,["loading"])),[[g,["erp:stock-move:export"]]]),f((t(),n(s,{type:"danger",plain:"",onClick:l[8]||(l[8]=a=>e.handleDelete(e.selectionList.map(_=>_.id))),disabled:e.selectionList.length===0},{default:o(()=>[r(v,{icon:"ep:delete",class:"mr-5px"}),l[15]||(l[15]=m(" \u5220\u9664 "))]),_:1},8,["disabled"])),[[g,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),r(w,null,{default:o(()=>[f((t(),n(u,{data:e.list,stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:e.handleSelectionChange},{default:o(()=>[r(i,{width:"30",label:"\u9009\u62E9",type:"selection"}),r(i,{"min-width":"180",label:"\u8C03\u5EA6\u5355\u53F7",align:"center",prop:"no"}),r(i,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),r(i,{label:"\u8C03\u5EA6\u65F6\u95F4",align:"center",prop:"moveTime",formatter:e.dateFormatter2,width:"120px"},null,8,["formatter"]),r(i,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),r(i,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:e.erpCountTableColumnFormatter},null,8,["formatter"]),r(i,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:e.erpPriceTableColumnFormatter},null,8,["formatter"]),r(i,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:o(a=>[r(V,{type:e.DICT_TYPE.ERP_AUDIT_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),r(i,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:o(a=>[f((t(),n(s,{link:"",onClick:_=>e.openForm("detail",a.row.id)},{default:o(()=>l[16]||(l[16]=[m(" \u8BE6\u60C5 ")])),_:2},1032,["onClick"])),[[g,["erp:stock-move:query"]]]),f((t(),n(s,{link:"",type:"primary",onClick:_=>e.openForm("update",a.row.id),disabled:a.row.status===20},{default:o(()=>l[17]||(l[17]=[m(" \u7F16\u8F91 ")])),_:2},1032,["onClick","disabled"])),[[g,["erp:stock-move:update"]]]),a.row.status===10?f((t(),n(s,{key:0,link:"",type:"primary",onClick:_=>e.handleUpdateStatus(a.row.id,20)},{default:o(()=>l[18]||(l[18]=[m(" \u5BA1\u6279 ")])),_:2},1032,["onClick"])),[[g,["erp:stock-move:update-status"]]]):f((t(),n(s,{key:1,link:"",type:"danger",onClick:_=>e.handleUpdateStatus(a.row.id,10)},{default:o(()=>l[19]||(l[19]=[m(" \u53CD\u5BA1\u6279 ")])),_:2},1032,["onClick"])),[[g,["erp:stock-move:update-status"]]]),f((t(),n(s,{link:"",type:"danger",onClick:_=>e.handleDelete([a.row.id])},{default:o(()=>l[20]||(l[20]=[m(" \u5220\u9664 ")])),_:2},1032,["onClick"])),[[g,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["data"])),[[M,e.loading]]),r(c,{total:e.total,page:e.queryParams.pageNo,"onUpdate:page":l[9]||(l[9]=a=>e.queryParams.pageNo=a),limit:e.queryParams.pageSize,"onUpdate:limit":l[10]||(l[10]=a=>e.queryParams.pageSize=a),onPagination:e.getList},null,8,["total","page","limit"])]),_:1}),r(e.StockMoveForm,{ref:"formRef",onSuccess:e.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/erp/stock/move/index.vue"]]);export{fe as default};
