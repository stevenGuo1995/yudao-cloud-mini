import{d as D,D as N,r as i,at as P,f as C,_ as U,X as q,o as b,c as x,k as l,w as s,I as S,q as A,m as h,F as V,L,z as k,N as z,O as F,cK as O,R as j}from"./index-BaY5TDP-.js";import{_ as B}from"./index-avjYFQiD.js";import{_ as E}from"./ContentWrap-DKQn7kZm.js";import{_ as J}from"./index-BAz6Gqim.js";import R from"./main-DuOfDTOL.js";import{g as T,c as W,u as K,d as M}from"./main-KjNEjHxK.js";import{s as X}from"./index-D0l0uLV-.js";import{N as G,c as H}from"./NewsForm-DMRXTST7.js";import Q from"./DraftTable-CAlBuDtI.js";import"./index-DrSdAlug.js";import"./index-C1v7IUC9.js";import"./tagsView-lnAkwTv2.js";import"./main-BdcmYikv.js";import"./el-image-Bg-CwbDE.js";import"./main-BdArqmip.js";import"./main-DeQxN6ve.js";import"./index-Ci6jvA8Q.js";import"./formatTime-Dr6TiYYc.js";import"./CoverSelect-BEYWDxQp.js";import"./useUpload-Dg-sFRn3.js";const Y=U(D({name:"MpDraft",__name:"index",setup(I,{expose:e}){e();const n=N(),a=i(-1);P("accountId",a);const g=i(!0),w=i([]),y=i(0),m=C({pageNo:1,pageSize:10,accountId:a}),d=i(!1),r=i([]),p=i(""),u=i(!0),f=i(!1),c=async()=>{g.value=!0;try{const t=await T(m);t.list.forEach(o=>{o.content.newsItem.forEach(_=>{_.picUrl=_.thumbUrl})}),w.value=t.list,y.value=t.total}finally{g.value=!1}},v={message:n,accountId:a,loading:g,list:w,total:y,queryParams:m,showDialog:d,newsList:r,mediaId:p,isCreating:u,isSubmitting:f,onAccountChanged:t=>{a.value=t,m.pageNo=1,c()},onBeforeDialogClose:async t=>{try{await n.confirm("\u4FEE\u6539\u5185\u5BB9\u53EF\u80FD\u8FD8\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u5173\u95ED\u5417?"),t()}catch{}},getList:c,handleAdd:()=>{u.value=!0,r.value=[H()],d.value=!0},onUpdate:t=>{p.value=t.mediaId,r.value=JSON.parse(JSON.stringify(t.content.newsItem)),u.value=!1,d.value=!0},onSubmitNewsItem:async()=>{f.value=!0;try{u.value?(await W(a.value,r.value),n.notifySuccess("\u65B0\u589E\u6210\u529F")):(await K(a.value,p.value,r.value),n.notifySuccess("\u66F4\u65B0\u6210\u529F"))}finally{d.value=!1,f.value=!1,await c()}},onPublish:async t=>{const o=t.mediaId;try{await n.confirm("\u4F60\u6B63\u5728\u901A\u8FC7\u53D1\u5E03\u7684\u65B9\u5F0F\u53D1\u8868\u5185\u5BB9\u3002 \u53D1\u5E03\u4E0D\u5360\u7528\u7FA4\u53D1\u6B21\u6570\uFF0C\u4E00\u5929\u53EF\u591A\u6B21\u53D1\u5E03\u3002\u5DF2\u53D1\u5E03\u5185\u5BB9\u4E0D\u4F1A\u63A8\u9001\u7ED9\u7528\u6237\uFF0C\u4E5F\u4E0D\u4F1A\u5C55\u793A\u5728\u516C\u4F17\u53F7\u4E3B\u9875\u4E2D\u3002 \u53D1\u5E03\u540E\uFF0C\u4F60\u53EF\u4EE5\u524D\u5F80\u53D1\u8868\u8BB0\u5F55\u83B7\u53D6\u94FE\u63A5\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u53D1\u5E03\u5185\u5BB9\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u83DC\u5355\u3001\u81EA\u52A8\u56DE\u590D\u3001\u8BDD\u9898\u548C\u9875\u9762\u6A21\u677F\u4E2D\u3002"),await X(a.value,o),n.notifySuccess("\u53D1\u5E03\u6210\u529F"),await c()}catch{}},onDelete:async t=>{const o=t.mediaId;try{await n.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u8349\u7A3F, \u662F\u5426\u7EE7\u7EED?"),await M(a.value,o),n.notifySuccess("\u5220\u9664\u6210\u529F"),await c()}catch{}},get WxAccountSelect(){return R},get NewsForm(){return G},get DraftTable(){return Q}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),[["render",function(I,e,n,a,g,w){const y=J,m=L,d=k,r=z,p=F,u=E,f=B,c=O,v=q("hasPermi"),t=j;return b(),x(V,null,[l(y,{title:"\u516C\u4F17\u53F7\u56FE\u6587",url:"https://doc.iocoder.cn/mp/article/"}),l(u,null,{default:s(()=>[l(p,{class:"-mb-15px",model:a.queryParams,ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:s(()=>[l(m,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:s(()=>[l(a.WxAccountSelect,{onChange:a.onAccountChanged})]),_:1}),l(m,null,{default:s(()=>[S((b(),A(r,{type:"primary",plain:"",onClick:a.handleAdd,disabled:a.accountId===0},{default:s(()=>[l(d,{icon:"ep:plus"}),e[5]||(e[5]=h("\u65B0\u589E "))]),_:1},8,["disabled"])),[[v,["mp:draft:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),l(u,null,{default:s(()=>[l(a.DraftTable,{loading:a.loading,list:a.list,onUpdate:a.onUpdate,onDelete:a.onDelete,onPublish:a.onPublish},null,8,["loading","list"]),l(f,{total:a.total,page:a.queryParams.pageNo,"onUpdate:page":e[0]||(e[0]=o=>a.queryParams.pageNo=o),limit:a.queryParams.pageSize,"onUpdate:limit":e[1]||(e[1]=o=>a.queryParams.pageSize=o),onPagination:a.getList},null,8,["total","page","limit"])]),_:1}),l(c,{title:a.isCreating?"\u65B0\u5EFA\u56FE\u6587":"\u4FEE\u6539\u56FE\u6587",width:"80%",modelValue:a.showDialog,"onUpdate:modelValue":e[4]||(e[4]=o=>a.showDialog=o),"before-close":a.onBeforeDialogClose,"destroy-on-close":""},{footer:s(()=>[l(r,{onClick:e[3]||(e[3]=o=>a.showDialog=!1)},{default:s(()=>e[6]||(e[6]=[h("\u53D6 \u6D88")])),_:1}),l(r,{type:"primary",onClick:a.onSubmitNewsItem},{default:s(()=>e[7]||(e[7]=[h("\u63D0 \u4EA4")])),_:1})]),default:s(()=>[S(l(a.NewsForm,{modelValue:a.newsList,"onUpdate:modelValue":e[2]||(e[2]=o=>a.newsList=o),"is-creating":a.isCreating},null,8,["modelValue","is-creating"]),[[t,a.isSubmitting]])]),_:1},8,["title","modelValue"])],64)}],["__scopeId","data-v-df550c3e"],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mp/draft/index.vue"]]);export{Y as default};
