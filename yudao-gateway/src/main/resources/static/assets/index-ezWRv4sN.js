import{d as N,f as j,e as G,r as u,b as J,au as K,C as W,G as X,U as Z,_ as $,o as c,c as g,k as a,w as l,F as T,n as L,q as Y,m as E,M as ee,L as ae,J as re,K as le,z as te,N as ue,O as oe,A as se,B as me,v as de}from"./index-BaY5TDP-.js";import{_ as ye}from"./ContentWrap-DKQn7kZm.js";import{E as pe}from"./el-tree-select-DphqCDCz.js";import{g as ne}from"./index-dK17nfjs.js";import{g as ce}from"./index-CuAlllbQ.js";import{f as O,e as fe,g as ie,h as Ce}from"./formatTime-Dr6TiYYc.js";import{h as M,d as ve}from"./tree-z7HkrWVC.js";import qe from"./CustomerConversionStat-7Y1pNSPS.js";import be from"./CustomerDealCycleByUser-C3I5q_03.js";import Pe from"./CustomerDealCycleByArea-BFdmwuFq.js";import _e from"./CustomerDealCycleByProduct-Dks7OWaO.js";import De from"./CustomerFollowUpSummary-B_KtYoCO.js";import Se from"./CustomerFollowUpType-DRdAldRk.js";import we from"./CustomerSummary-DR1SJBB5.js";import he from"./CustomerPoolSummary-Dlig2uMh.js";import"./DictTag-QtcI9ZjC.js";import"./color-BN7ZL7BD.js";import"./el-skeleton-item-BYAIkmCs.js";import"./Echart-BQxFkezy.js";import"./echarts-DpbyC_6K.js";import"./customer-DKZgktXn.js";const Ue=$(N({name:"CrmStatisticsCustomer",__name:"index",setup(H,{expose:t}){t();const f=j({interval:2,deptId:G().getUser.deptId,userId:void 0,times:[O(fe(new Date(new Date().getTime()-6048e5))),O(ie(new Date(new Date().getTime()-864e5)))]}),e=u(),I=u([]),i=u([]),R=J(()=>f.deptId?i.value.filter(r=>r.deptId===f.deptId):[]),s=u("customerSummary"),m=u(),d=u(),C=u(),y=u(),p=u(),v=u(),q=u(),o=u(),n=()=>{var r,P,_,V,D,k,S,x,w,A,h,z,U,F,B,Q;switch(s.value){case"customerSummary":(P=(r=m.value)==null?void 0:r.loadData)==null||P.call(r);break;case"followUpSummary":(V=(_=d.value)==null?void 0:_.loadData)==null||V.call(_);break;case"followUpType":(k=(D=C.value)==null?void 0:D.loadData)==null||k.call(D);break;case"conversionStat":(x=(S=y.value)==null?void 0:S.loadData)==null||x.call(S);break;case"poolSummary":(A=(w=p.value)==null?void 0:w.loadData)==null||A.call(w);break;case"dealCycleByUser":(z=(h=v.value)==null?void 0:h.loadData)==null||z.call(h);break;case"dealCycleByArea":(F=(U=q.value)==null?void 0:U.loadData)==null||F.call(U);break;case"dealCycleByProduct":(Q=(B=o.value)==null?void 0:B.loadData)==null||Q.call(B)}};K(s,()=>{n()}),W(async()=>{I.value=M(await ne()),i.value=M(await ce())});const b={queryParams:f,queryFormRef:e,deptList:I,userList:i,userListByDeptId:R,activeTab:s,customerSummaryRef:m,followUpSummaryRef:d,followUpTypeRef:C,conversionStatRef:y,customerPoolSummaryRef:p,dealCycleByUserRef:v,dealCycleByAreaRef:q,dealCycleByProductRef:o,handleQuery:n,resetQuery:()=>{e.value.resetFields(),n()},get DICT_TYPE(){return X},get getIntDictOptions(){return Z},get defaultShortcuts(){return Ce},get defaultProps(){return ve},CustomerConversionStat:qe,CustomerDealCycleByUser:be,CustomerDealCycleByArea:Pe,CustomerDealCycleByProduct:_e,CustomerFollowUpSummary:De,CustomerFollowUpType:Se,CustomerSummary:we,CustomerPoolSummary:he};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),[["render",function(H,t,f,e,I,i){const R=ee,s=ae,m=re,d=le,C=pe,y=te,p=ue,v=oe,q=ye,o=se,n=me,b=de;return c(),g(T,null,[a(q,null,{default:l(()=>[a(v,{ref:"queryFormRef",inline:!0,model:e.queryParams,class:"-mb-15px","label-width":"68px"},{default:l(()=>[a(s,{label:"\u65F6\u95F4\u8303\u56F4",prop:"orderDate"},{default:l(()=>[a(R,{modelValue:e.queryParams.times,"onUpdate:modelValue":t[0]||(t[0]=r=>e.queryParams.times=r),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],shortcuts:e.defaultShortcuts,class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss",onChange:e.handleQuery},null,8,["modelValue","default-time","shortcuts"])]),_:1}),a(s,{label:"\u65F6\u95F4\u95F4\u9694",prop:"interval"},{default:l(()=>[a(d,{modelValue:e.queryParams.interval,"onUpdate:modelValue":t[1]||(t[1]=r=>e.queryParams.interval=r),class:"!w-240px",placeholder:"\u95F4\u9694\u7C7B\u578B",onChange:e.handleQuery},{default:l(()=>[(c(!0),g(T,null,L(e.getIntDictOptions(e.DICT_TYPE.DATE_INTERVAL),r=>(c(),Y(m,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:l(()=>[a(C,{modelValue:e.queryParams.deptId,"onUpdate:modelValue":t[2]||(t[2]=r=>e.queryParams.deptId=r),data:e.deptList,props:e.defaultProps,"check-strictly":"",class:"!w-240px","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u90E8\u95E8",onChange:t[3]||(t[3]=r=>(e.queryParams.userId=void 0,e.handleQuery()))},null,8,["modelValue","data","props"])]),_:1}),a(s,{label:"\u5458\u5DE5",prop:"userId"},{default:l(()=>[a(d,{modelValue:e.queryParams.userId,"onUpdate:modelValue":t[4]||(t[4]=r=>e.queryParams.userId=r),class:"!w-240px",clearable:"",placeholder:"\u5458\u5DE5",onChange:e.handleQuery},{default:l(()=>[(c(!0),g(T,null,L(e.userListByDeptId,(r,P)=>(c(),Y(m,{key:P,label:r.nickname,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,null,{default:l(()=>[a(p,{onClick:e.handleQuery},{default:l(()=>[a(y,{class:"mr-5px",icon:"ep:search"}),t[6]||(t[6]=E(" \u67E5\u8BE2 "))]),_:1}),a(p,{onClick:e.resetQuery},{default:l(()=>[a(y,{class:"mr-5px",icon:"ep:refresh"}),t[7]||(t[7]=E(" \u91CD\u7F6E "))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(b,null,{default:l(()=>[a(n,{modelValue:e.activeTab,"onUpdate:modelValue":t[5]||(t[5]=r=>e.activeTab=r)},{default:l(()=>[a(o,{label:"\u5BA2\u6237\u603B\u91CF\u5206\u6790",lazy:"",name:"customerSummary"},{default:l(()=>[a(e.CustomerSummary,{ref:"customerSummaryRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u5BA2\u6237\u8DDF\u8FDB\u6B21\u6570\u5206\u6790",lazy:"",name:"followUpSummary"},{default:l(()=>[a(e.CustomerFollowUpSummary,{ref:"followUpSummaryRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u5BA2\u6237\u8DDF\u8FDB\u65B9\u5F0F\u5206\u6790",lazy:"",name:"followUpType"},{default:l(()=>[a(e.CustomerFollowUpType,{ref:"followUpTypeRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u5BA2\u6237\u8F6C\u5316\u7387\u5206\u6790",lazy:"",name:"conversionStat"},{default:l(()=>[a(e.CustomerConversionStat,{ref:"conversionStatRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u516C\u6D77\u5BA2\u6237\u5206\u6790",lazy:"",name:"poolSummary"},{default:l(()=>[a(e.CustomerPoolSummary,{ref:"customerPoolSummaryRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u5458\u5DE5\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByUser"},{default:l(()=>[a(e.CustomerDealCycleByUser,{ref:"dealCycleByUserRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u5730\u533A\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByArea"},{default:l(()=>[a(e.CustomerDealCycleByArea,{ref:"dealCycleByAreaRef","query-params":e.queryParams},null,8,["query-params"])]),_:1}),a(o,{label:"\u4EA7\u54C1\u5BA2\u6237\u6210\u4EA4\u5468\u671F\u5206\u6790",lazy:"",name:"dealCycleByProduct"},{default:l(()=>[a(e.CustomerDealCycleByProduct,{ref:"dealCycleByProductRef","query-params":e.queryParams},null,8,["query-params"])]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/crm/statistics/customer/index.vue"]]);export{Ue as default};
