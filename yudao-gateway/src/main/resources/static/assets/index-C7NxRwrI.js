import{d as x,D as q,g as S,r as g,f as C,_ as N,X as W,o as c,c as p,k as a,w as n,I as _,F as y,n as k,q as z,ag as A,L as D,O as F,z as j,N as L,E as U,R as O}from"./index-BaY5TDP-.js";import{_ as R}from"./index-avjYFQiD.js";import{_ as E}from"./ContentWrap-DKQn7kZm.js";import{_ as M}from"./index-BAz6Gqim.js";import{g as X,d as B}from"./index-D0l0uLV-.js";import G from"./main-BdcmYikv.js";import H from"./main-DuOfDTOL.js";import"./index-DrSdAlug.js";import"./el-image-Bg-CwbDE.js";import"./index-C1v7IUC9.js";import"./tagsView-lnAkwTv2.js";const J={class:"waterfall"},K=N(x({name:"MpFreePublish",__name:"index",setup(w,{expose:r}){r();const u=q(),{t:e}=S(),m=g(!0),f=g(0),d=g([]),o=C({pageNo:1,pageSize:10,accountId:-1}),i=async()=>{try{m.value=!0;const l=await X(o);d.value=l.list,f.value=l.total}finally{m.value=!1}},s={message:u,t:e,loading:m,total:f,list:d,queryParams:o,onAccountChanged:l=>{o.accountId=l,o.pageNo=1,i()},getList:i,handleDelete:async l=>{try{await u.delConfirm("\u5220\u9664\u540E\u7528\u6237\u5C06\u65E0\u6CD5\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F"),await B(o.accountId,l.articleId),u.success(e("common.delSuccess")),await i()}catch{}},get WxNews(){return G},get WxAccountSelect(){return H}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),[["render",function(w,r,u,e,m,f){const d=M,o=D,i=F,s=E,l=j,h=L,v=U,I=R,P=W("hasPermi"),b=O;return c(),p(y,null,[a(d,{title:"\u516C\u4F17\u53F7\u56FE\u6587",url:"https://doc.iocoder.cn/mp/article/"}),a(s,null,{default:n(()=>[a(i,{class:"-mb-15px",model:e.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:n(()=>[a(o,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:n(()=>[a(e.WxAccountSelect,{onChange:e.onAccountChanged})]),_:1})]),_:1},8,["model"])]),_:1}),a(s,null,{default:n(()=>[_((c(),p("div",J,[(c(!0),p(y,null,k(e.list,t=>_((c(),p("div",{class:"waterfall-item",key:t.articleId},[a(e.WxNews,{articles:t.content.newsItem},null,8,["articles"]),a(v,{justify:"center",class:"ope-row"},{default:n(()=>[_((c(),z(h,{type:"danger",circle:"",onClick:Q=>e.handleDelete(t)},{default:n(()=>[a(l,{icon:"ep:delete"})]),_:2},1032,["onClick"])),[[P,["mp:free-publish:delete"]]])]),_:2},1024)])),[[A,t.content&&t.content.newsItem]])),128))])),[[b,e.loading]]),a(I,{total:e.total,page:e.queryParams.pageNo,"onUpdate:page":r[0]||(r[0]=t=>e.queryParams.pageNo=t),limit:e.queryParams.pageSize,"onUpdate:limit":r[1]||(r[1]=t=>e.queryParams.pageSize=t),onPagination:e.getList},null,8,["total","page","limit"])]),_:1})],64)}],["__scopeId","data-v-41e0b8ed"],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mp/freePublish/index.vue"]]);export{K as default};
