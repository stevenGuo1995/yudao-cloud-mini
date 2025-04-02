import{_ as N}from"./ContentWrap-DKQn7kZm.js";import{d as U,S as L,u as x,r as Y,C as O,g as V,D as M,a as j,aA as q,G as h,aB as W,aC as B,aD as G,aE as H,_ as Q,c as w,k as e,w as t,F as C,o as d,m as r,t as o,n as R,q as y,ah as b,j as E,aF as z,N as J,an as K,P as X,Q as Z,v as $,E as aa}from"./index-BaY5TDP-.js";import{E as ea,a as ta}from"./el-timeline-item-BFYwlQ-d.js";import{E as la}from"./el-image-Bg-CwbDE.js";import{E as sa,a as ra}from"./el-descriptions-item-CRF_CO88.js";import{_ as oa}from"./DictTag-QtcI9ZjC.js";import{g as ua,a as na,r as ia,b as fa,c as da}from"./index-BuZFavTY.js";import{f as ma}from"./formatTime-Dr6TiYYc.js";import ca from"./AfterSaleDisagreeForm-Dq8UW8K0.js";import{u as pa}from"./tagsView-lnAkwTv2.js";import"./color-BN7ZL7BD.js";import"./Dialog-CZSXtzfQ.js";const _a={class:"el-timeline-right-content"},ya=Q(U({name:"TradeAfterSaleDetail",__name:"index",setup(k,{expose:s}){s();const{t:T}=V(),a=M(),{params:g}=L(),{push:A,currentRoute:l}=x(),n=Y({order:{},logs:[]}),m=Y(),c=async()=>{const i=g.id;if(i){const f=await ua(i);f==null&&(a.notifyError("\u552E\u540E\u8BA2\u5355\u4E0D\u5B58\u5728"),v()),n.value=f}},{delView:p}=pa(),v=()=>{p(j(l)),A({name:"TradeAfterSale"})};O(async()=>{await c()});const D={t:T,message:a,params:g,push:A,currentRoute:l,formData:n,updateAuditReasonFormRef:m,getUserTypeColor:i=>{const f=B(h.USER_TYPE,i);switch(f==null?void 0:f.colorType){case"success":return"#67C23A";case"info":return"#909399";case"warning":return"#E6A23C";case"danger":return"#F56C6C"}return"#409EFF"},getDetail:c,agree:async()=>{try{await a.confirm("\u662F\u5426\u540C\u610F\u552E\u540E\uFF1F"),await na(n.value.id),a.success(T("common.success")),await c()}catch{}},disagree:async()=>{var i;(i=m.value)==null||i.open(n.value)},receive:async()=>{try{await a.confirm("\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F"),await ia(n.value.id),a.success(T("common.success")),await c()}catch{}},refuse:async()=>{try{await a.confirm("\u662F\u5426\u62D2\u7EDD\u6536\u8D27\uFF1F"),await fa(n.value.id),a.success(T("common.success")),await c()}catch{}},refund:async()=>{try{await a.confirm("\u662F\u5426\u786E\u8BA4\u9000\u6B3E\uFF1F"),await da(n.value.id),a.success(T("common.success")),await c()}catch{}},imagePreview:i=>{const f=[];G(i)?i.forEach(P=>{f.push(P.url)}):f.push(i),H({urlList:f})},delView:p,close:v,get fenToYuan(){return q},get DICT_TYPE(){return h},get getDictLabel(){return W},get formatDate(){return ma},UpdateAuditReasonForm:ca};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),[["render",function(k,s,T,a,g,A){const l=sa,n=oa,m=ra,c=la,p=J,v=K,D=X,i=Z,f=$,P=aa,I=ea,S=ta,F=N;return d(),w(C,null,[e(F,null,{default:t(()=>[e(m,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:t(()=>[e(l,{label:"\u8BA2\u5355\u53F7: "},{default:t(()=>[r(o(a.formData.orderNo),1)]),_:1}),e(l,{label:"\u914D\u9001\u65B9\u5F0F: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TRADE_DELIVERY_TYPE,value:a.formData.order.deliveryType},null,8,["type","value"])]),_:1}),e(l,{label:"\u8BA2\u5355\u7C7B\u578B: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TRADE_ORDER_TYPE,value:a.formData.order.type},null,8,["type","value"])]),_:1}),e(l,{label:"\u6536\u8D27\u4EBA: "},{default:t(()=>[r(o(a.formData.order.receiverName),1)]),_:1}),e(l,{label:"\u4E70\u5BB6\u7559\u8A00: "},{default:t(()=>[r(o(a.formData.order.userRemark),1)]),_:1}),e(l,{label:"\u8BA2\u5355\u6765\u6E90: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TERMINAL,value:a.formData.order.terminal},null,8,["type","value"])]),_:1}),e(l,{label:"\u8054\u7CFB\u7535\u8BDD: "},{default:t(()=>[r(o(a.formData.order.receiverMobile),1)]),_:1}),e(l,{label:"\u5546\u5BB6\u5907\u6CE8: "},{default:t(()=>[r(o(a.formData.order.remark),1)]),_:1}),e(l,{label:"\u652F\u4ED8\u5355\u53F7: "},{default:t(()=>[r(o(a.formData.order.payOrderId),1)]),_:1}),e(l,{label:"\u4ED8\u6B3E\u65B9\u5F0F: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.PAY_CHANNEL_CODE,value:a.formData.order.payChannelCode},null,8,["type","value"])]),_:1}),e(l,{label:"\u4E70\u5BB6: "},{default:t(()=>{var u,_;return[r(o((_=(u=a.formData)==null?void 0:u.user)==null?void 0:_.nickname),1)]}),_:1})]),_:1}),e(m,{title:"\u552E\u540E\u4FE1\u606F"},{default:t(()=>[e(l,{label:"\u9000\u6B3E\u7F16\u53F7: "},{default:t(()=>[r(o(a.formData.no),1)]),_:1}),e(l,{label:"\u7533\u8BF7\u65F6\u95F4: "},{default:t(()=>[r(o(a.formatDate(a.formData.auditTime)),1)]),_:1}),e(l,{label:"\u552E\u540E\u7C7B\u578B: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TRADE_AFTER_SALE_TYPE,value:a.formData.type},null,8,["type","value"])]),_:1}),e(l,{label:"\u552E\u540E\u65B9\u5F0F: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TRADE_AFTER_SALE_WAY,value:a.formData.way},null,8,["type","value"])]),_:1}),e(l,{label:"\u9000\u6B3E\u91D1\u989D: "},{default:t(()=>[r(o(a.fenToYuan(a.formData.refundPrice)),1)]),_:1}),e(l,{label:"\u9000\u6B3E\u539F\u56E0: "},{default:t(()=>[r(o(a.formData.applyReason),1)]),_:1}),e(l,{label:"\u8865\u5145\u63CF\u8FF0: "},{default:t(()=>[r(o(a.formData.applyDescription),1)]),_:1}),e(l,{label:"\u51ED\u8BC1\u56FE\u7247: "},{default:t(()=>[(d(!0),w(C,null,R(a.formData.applyPicUrls,(u,_)=>(d(),y(c,{key:_,src:u.url,class:"mr-10px h-60px w-60px",onClick:s[0]||(s[0]=Da=>a.imagePreview(a.formData.applyPicUrls))},null,8,["src"]))),128))]),_:1})]),_:1}),e(m,{column:1,title:"\u9000\u6B3E\u72B6\u6001"},{default:t(()=>[e(l,{label:"\u9000\u6B3E\u72B6\u6001: "},{default:t(()=>[e(n,{type:a.DICT_TYPE.TRADE_AFTER_SALE_STATUS,value:a.formData.status},null,8,["type","value"])]),_:1}),e(l,{"label-class-name":"no-colon"},{default:t(()=>[a.formData.status===10?(d(),y(p,{key:0,type:"primary",onClick:a.agree},{default:t(()=>s[1]||(s[1]=[r("\u540C\u610F\u552E\u540E")])),_:1})):b("",!0),a.formData.status===10?(d(),y(p,{key:1,type:"primary",onClick:a.disagree},{default:t(()=>s[2]||(s[2]=[r(" \u62D2\u7EDD\u552E\u540E ")])),_:1})):b("",!0),a.formData.status===30?(d(),y(p,{key:2,type:"primary",onClick:a.receive},{default:t(()=>s[3]||(s[3]=[r(" \u786E\u8BA4\u6536\u8D27 ")])),_:1})):b("",!0),a.formData.status===30?(d(),y(p,{key:3,type:"primary",onClick:a.refuse},{default:t(()=>s[4]||(s[4]=[r("\u62D2\u7EDD\u6536\u8D27")])),_:1})):b("",!0),a.formData.status===40?(d(),y(p,{key:4,type:"primary",onClick:a.refund},{default:t(()=>s[5]||(s[5]=[r("\u786E\u8BA4\u9000\u6B3E")])),_:1})):b("",!0)]),_:1}),e(l,null,{label:t(()=>s[6]||(s[6]=[E("span",{style:{color:"red"}},"\u63D0\u9192: ",-1)])),default:t(()=>[s[7]||(s[7]=r(" \u5982\u679C\u672A\u53D1\u8D27\uFF0C\u8BF7\u70B9\u51FB\u540C\u610F\u9000\u6B3E\u7ED9\u4E70\u5BB6\u3002")),s[8]||(s[8]=E("br",null,null,-1)),s[9]||(s[9]=r(" \u5982\u679C\u5B9E\u9645\u5DF2\u53D1\u8D27\uFF0C\u8BF7\u4E3B\u52A8\u4E0E\u4E70\u5BB6\u8054\u7CFB\u3002")),s[10]||(s[10]=E("br",null,null,-1)),s[11]||(s[11]=r(" \u5982\u679C\u8BA2\u5355\u6574\u4F53\u9000\u6B3E\u540E\uFF0C\u4F18\u60E0\u5238\u548C\u4F59\u989D\u4F1A\u9000\u8FD8\u7ED9\u4E70\u5BB6. "))]),_:1})]),_:1}),e(m,{title:"\u5546\u54C1\u4FE1\u606F"},{default:t(()=>[e(l,{labelClassName:"no-colon"},{default:t(()=>[e(P,{gutter:20},{default:t(()=>[e(f,{span:15},{default:t(()=>[e(i,{data:[a.formData.orderItem],border:""},{default:t(()=>[e(D,{label:"\u5546\u54C1",prop:"spuName",width:"auto"},{default:t(({row:u})=>[r(o(u.spuName)+" ",1),(d(!0),w(C,null,R(u.properties,_=>(d(),y(v,{key:_.propertyId},{default:t(()=>[r(o(_.propertyName)+": "+o(_.valueName),1)]),_:2},1024))),128))]),_:1}),e(D,{label:"\u5546\u54C1\u539F\u4EF7",prop:"price",width:"150"},{default:t(({row:u})=>[r(o(a.fenToYuan(u.price))+" \u5143",1)]),_:1}),e(D,{label:"\u6570\u91CF",prop:"count",width:"100"}),e(D,{label:"\u5408\u8BA1",prop:"payPrice",width:"150"},{default:t(({row:u})=>[r(o(a.fenToYuan(u.payPrice))+" \u5143",1)]),_:1})]),_:1},8,["data"])]),_:1}),e(f,{span:10})]),_:1})]),_:1})]),_:1}),e(m,{title:"\u552E\u540E\u65E5\u5FD7"},{default:t(()=>[e(l,{labelClassName:"no-colon"},{default:t(()=>[e(S,null,{default:t(()=>[(d(!0),w(C,null,R(a.formData.logs,u=>(d(),y(I,{key:u.id,timestamp:a.formatDate(u.createTime),placement:"top"},{dot:t(()=>[E("span",{style:z({backgroundColor:a.getUserTypeColor(u.userType)}),class:"dot-node-style"},o(a.getDictLabel(a.DICT_TYPE.USER_TYPE,u.userType)[0]||"\u7CFB"),5)]),default:t(()=>[E("div",_a,[E("span",null,o(u.content),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(a.UpdateAuditReasonForm,{ref:"updateAuditReasonFormRef",onSuccess:a.getDetail},null,512)],64)}],["__scopeId","data-v-279d17b0"],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mall/trade/afterSale/detail/index.vue"]]);export{ya as default};
