import{d as T,D as M,g as j,r as y,f as O,C as E,_ as H,X as J,o as u,c as U,k as e,w as r,Y as C,m as g,I as x,q as w,j as P,ah as X,t as V,F,n as Q,J as Z,K as A,L as B,Z as G,M as W,z as $,N as ee,O as le,P as ae,an as te,ch as re,Q as oe,R as se}from"./index-BaY5TDP-.js";import{_ as ie}from"./index-avjYFQiD.js";import{E as ne}from"./el-image-Bg-CwbDE.js";import{_ as pe}from"./ContentWrap-DKQn7kZm.js";import{_ as ue}from"./index-BAz6Gqim.js";import{d as me}from"./formatTime-Dr6TiYYc.js";import{a as de,u as ce}from"./comment-6jOh5UFr.js";import fe from"./CommentForm-Cp2WfytY.js";import ye from"./ReplyForm-8zXQ9W8U.js";import"./index-DrSdAlug.js";import"./Dialog-CZSXtzfQ.js";import"./SpuShowcase-DyUON5OE.js";import"./spu-BVX48OKx.js";import"./SpuTableSelect-CD92PVLd.js";import"./el-tree-select-DphqCDCz.js";import"./tree-z7HkrWVC.js";import"./category-B7jjsMOS.js";import"./SkuTableSelect-CcEU9PPU.js";const we={class:"row flex items-center gap-x-4px"},he={class:"flex justify-center gap-x-4px"},ge=H(T({name:"ProductComment",__name:"index",setup(I,{expose:t}){t();const k=M(),{t:l}=j(),h=y(!0),q=y(0),v=y([]),d=O({pageNo:1,pageSize:10,replyStatus:null,spuName:null,userNickname:null,orderId:null,createTime:[]}),b=y(),s=async()=>{h.value=!0;try{const o=await de(d);o.list.forEach(i=>{i.visible||(i.visible=!1)}),v.value=o.list,q.value=o.total}finally{h.value=!1}},c=()=>{d.pageNo=1,s()},_=y(),f=y();E(()=>{s()});const m={message:k,t:l,loading:h,total:q,list:v,queryParams:d,queryFormRef:b,getList:s,handleQuery:c,resetQuery:()=>{b.value.resetFields(),c()},formRef:_,openForm:(o,i)=>{_.value.open(o,i)},replyFormRef:f,handleReply:o=>{f.value.open(o)},handleVisibleChange:async o=>{if(h.value)return;let i=o.visible;try{await k.confirm(i?"\u662F\u5426\u663E\u793A\u8BC4\u8BBA\uFF1F":"\u662F\u5426\u9690\u85CF\u8BC4\u8BBA\uFF1F"),await ce({id:o.id,visible:i}),await s()}catch{o.visible=!i}},get dateFormatter(){return me},CommentForm:fe,ReplyForm:ye};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),[["render",function(I,t,k,l,h,q){const v=ue,d=Z,b=A,s=B,c=G,_=W,f=$,m=ee,o=le,i=pe,n=ae,S=ne,L=te,Y=re,z=oe,D=ie,N=J("hasPermi"),K=se;return u(),U(F,null,[e(v,{title:"\u3010\u5546\u54C1\u3011\u5546\u54C1\u8BC4\u4EF7",url:"https://doc.iocoder.cn/mall/product-comment/"}),e(i,null,{default:r(()=>[e(o,{class:"-mb-15px",model:l.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:r(()=>[e(s,{label:"\u56DE\u590D\u72B6\u6001",prop:"replyStatus"},{default:r(()=>[e(b,{modelValue:l.queryParams.replyStatus,"onUpdate:modelValue":t[0]||(t[0]=a=>l.queryParams.replyStatus=a),class:"!w-240px"},{default:r(()=>[e(d,{label:"\u5DF2\u56DE\u590D",value:!0}),e(d,{label:"\u672A\u56DE\u590D",value:!1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u5546\u54C1\u540D\u79F0",prop:"spuName"},{default:r(()=>[e(c,{modelValue:l.queryParams.spuName,"onUpdate:modelValue":t[1]||(t[1]=a=>l.queryParams.spuName=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",onKeyup:C(l.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u7528\u6237\u540D\u79F0",prop:"userNickname"},{default:r(()=>[e(c,{modelValue:l.queryParams.userNickname,"onUpdate:modelValue":t[2]||(t[2]=a=>l.queryParams.userNickname=a),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0",onKeyup:C(l.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u8BA2\u5355\u7F16\u53F7",prop:"orderId"},{default:r(()=>[e(c,{modelValue:l.queryParams.orderId,"onUpdate:modelValue":t[3]||(t[3]=a=>l.queryParams.orderId=a),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u7F16\u53F7",onKeyup:C(l.handleQuery,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u8BC4\u8BBA\u65F6\u95F4",prop:"createTime"},{default:r(()=>[e(_,{modelValue:l.queryParams.createTime,"onUpdate:modelValue":t[4]||(t[4]=a=>l.queryParams.createTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(s,null,{default:r(()=>[e(m,{onClick:l.handleQuery},{default:r(()=>[e(f,{icon:"ep:search",class:"mr-5px"}),t[8]||(t[8]=g(" \u641C\u7D22 "))]),_:1}),e(m,{onClick:l.resetQuery},{default:r(()=>[e(f,{icon:"ep:refresh",class:"mr-5px"}),t[9]||(t[9]=g(" \u91CD\u7F6E "))]),_:1}),x((u(),w(m,{type:"primary",plain:"",onClick:t[5]||(t[5]=a=>l.openForm("create"))},{default:r(()=>[e(f,{icon:"ep:plus",class:"mr-5px"}),t[10]||(t[10]=g(" \u6DFB\u52A0\u865A\u62DF\u8BC4\u8BBA "))]),_:1})),[[N,["product:comment:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(i,null,{default:r(()=>[x((u(),w(z,{data:l.list,stripe:!0,"show-overflow-tooltip":!1},{default:r(()=>[e(n,{label:"\u8BC4\u8BBA\u7F16\u53F7",align:"center",prop:"id","min-width":"80"}),e(n,{label:"\u5546\u54C1\u4FE1\u606F",align:"center","min-width":"400"},{default:r(a=>[P("div",we,[a.row.skuPicUrl?(u(),w(S,{key:0,src:a.row.skuPicUrl,"preview-src-list":[a.row.skuPicUrl],class:"h-40px w-40px shrink-0","preview-teleported":""},null,8,["src","preview-src-list"])):X("",!0),P("div",null,V(a.row.spuName),1),(u(!0),U(F,null,Q(a.row.skuProperties,p=>(u(),w(L,{key:p.propertyId,class:"mr-10px"},{default:r(()=>[g(V(p.propertyName)+": "+V(p.valueName),1)]),_:2},1024))),128))])]),_:1}),e(n,{label:"\u7528\u6237\u540D\u79F0",align:"center",prop:"userNickname",width:"100"}),e(n,{label:"\u5546\u54C1\u8BC4\u5206",align:"center",prop:"descriptionScores",width:"90"}),e(n,{label:"\u670D\u52A1\u8BC4\u5206",align:"center",prop:"benefitScores",width:"90"}),e(n,{label:"\u8BC4\u8BBA\u5185\u5BB9",align:"center",prop:"content","min-width":"210"},{default:r(a=>[P("p",null,V(a.row.content),1),P("div",he,[(u(!0),U(F,null,Q(a.row.picUrls,(p,R)=>(u(),w(S,{key:R,src:p,"preview-src-list":a.row.picUrls,"initial-index":R,class:"h-40px w-40px","preview-teleported":""},null,8,["src","preview-src-list","initial-index"]))),128))])]),_:1}),e(n,{label:"\u56DE\u590D\u5185\u5BB9",align:"center",prop:"replyContent","min-width":"250","show-overflow-tooltip":""}),e(n,{label:"\u8BC4\u8BBA\u65F6\u95F4",align:"center",prop:"createTime",formatter:l.dateFormatter,width:"180"},null,8,["formatter"]),e(n,{label:"\u662F\u5426\u5C55\u793A",align:"center",width:"80px"},{default:r(a=>[x(e(Y,{modelValue:a.row.visible,"onUpdate:modelValue":p=>a.row.visible=p,"active-value":!0,"inactive-value":!1,onChange:p=>l.handleVisibleChange(a.row)},null,8,["modelValue","onUpdate:modelValue","onChange"]),[[N,["product:comment:update"]]])]),_:1}),e(n,{label:"\u64CD\u4F5C",align:"center","min-width":"60px",fixed:"right"},{default:r(a=>[x((u(),w(m,{link:"",type:"primary",onClick:p=>l.handleReply(a.row.id)},{default:r(()=>t[11]||(t[11]=[g(" \u56DE\u590D ")])),_:2},1032,["onClick"])),[[N,["product:comment:update"]]])]),_:1})]),_:1},8,["data"])),[[K,l.loading]]),e(D,{total:l.total,page:l.queryParams.pageNo,"onUpdate:page":t[6]||(t[6]=a=>l.queryParams.pageNo=a),limit:l.queryParams.pageSize,"onUpdate:limit":t[7]||(t[7]=a=>l.queryParams.pageSize=a),onPagination:l.getList},null,8,["total","page","limit"])]),_:1}),e(l.CommentForm,{ref:"formRef",onSuccess:l.getList},null,512),e(l.ReplyForm,{ref:"replyFormRef",onSuccess:l.getList},null,512)],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mall/product/comment/index.vue"]]);export{ge as default};
