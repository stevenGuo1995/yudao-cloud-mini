import{d as x,D as b,r as y,au as v,ax as P,aE as C,_ as A,o as S,q as L,w as p,k as i,aS as D,m as _,t as q,ah as I,P as E,N as R,Q as T}from"./index-BaY5TDP-.js";import{E as U}from"./el-image-Bg-CwbDE.js";import F from"./SkuList-LfTbtJ44.js";const K=A(x({name:"PromotionSpuAndSkuList",__name:"SpuAndSkuList",props:{spuList:{type:Array,required:!0},ruleConfig:{type:Array,required:!0},spuPropertyListP:{type:Array,required:!0},deletable:{type:Boolean,required:!1}},emits:["delete"],setup(k,{expose:l,emit:d}){const t=b(),c=k,n=y([]),r=y(),u=y([]),m=y([]),f=e=>{r.value.validateSku();const s=[];return u.value.forEach(w=>{var g;(g=w.spuDetail.skus)==null||g.forEach(h=>{s.push(h[e])})}),s};l({getSkuConfigs:f});const a=d;v(()=>c.spuList,e=>{e&&(n.value=e)},{deep:!0,immediate:!0}),v(()=>c.spuPropertyListP,e=>{e&&(u.value=e,setTimeout(()=>{m.value=e.map(s=>s.spuId+"")},200))},{deep:!0,immediate:!0});const o={message:t,props:c,spuData:n,skuListRef:r,spuPropertyList:u,expandRowKeys:m,getSkuConfigs:f,imagePreview:e=>{C({zIndex:99999999,urlList:[e]})},emits:a,deleteSpu:async e=>{await t.confirm("\u662F\u5426\u5220\u9664\u5546\u54C1\u7F16\u53F7\u4E3A"+e+"\u7684\u6570\u636E\uFF1F");const s=n.value.findIndex(w=>w.id==e);n.value.splice(s,1),a("delete",e)},get formatToFraction(){return P},get SkuList(){return F}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),[["render",function(k,l,d,t,c,n){const r=E,u=U,m=R,f=T;return S(),L(f,{data:t.spuData,"expand-row-keys":t.expandRowKeys,"row-key":"id"},{default:p(()=>[i(r,{type:"expand",width:"30"},{default:p(({row:a})=>{var o,e;return[i(t.SkuList,{ref:"skuListRef","is-activity-component":!0,"prop-form-data":(o=t.spuPropertyList.find(s=>s.spuId===a.id))==null?void 0:o.spuDetail,"property-list":(e=t.spuPropertyList.find(s=>s.spuId===a.id))==null?void 0:e.propertyList,"rule-config":d.ruleConfig},{extension:p(()=>[D(k.$slots,"default")]),_:2},1032,["prop-form-data","property-list","rule-config"])]}),_:3}),i(r,{key:"id",align:"center",label:"\u5546\u54C1\u7F16\u53F7",prop:"id"}),i(r,{label:"\u5546\u54C1\u56FE","min-width":"80"},{default:p(({row:a})=>[i(u,{src:a.picUrl,class:"h-30px w-30px",onClick:o=>t.imagePreview(a.picUrl)},null,8,["src","onClick"])]),_:1}),i(r,{"show-overflow-tooltip":!0,label:"\u5546\u54C1\u540D\u79F0","min-width":"300",prop:"name"}),i(r,{align:"center",label:"\u5546\u54C1\u552E\u4EF7","min-width":"90",prop:"price"},{default:p(({row:a})=>[_(q(t.formatToFraction(a.price)),1)]),_:1}),i(r,{align:"center",label:"\u9500\u91CF","min-width":"90",prop:"salesCount"}),i(r,{align:"center",label:"\u5E93\u5B58","min-width":"90",prop:"stock"}),t.spuData.length>1&&d.deletable?(S(),L(r,{key:0,align:"center",label:"\u64CD\u4F5C","min-width":"90"},{default:p(a=>[i(m,{link:"",type:"primary",onClick:o=>t.deleteSpu(a.row.id)},{default:p(()=>l[0]||(l[0]=[_(" \u5220\u9664")])),_:2},1032,["onClick"])]),_:1})):I("",!0)]),_:3},8,["data","expand-row-keys"])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mall/promotion/components/SpuAndSkuList.vue"]]);export{K as default};
