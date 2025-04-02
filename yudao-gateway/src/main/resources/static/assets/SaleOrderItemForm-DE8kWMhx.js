import{d as N,r as g,f as R,au as C,e3 as $,C as L,ey as k,e4 as y,ew as q,_ as B,o as h,c as I,I as D,q as w,w as t,k as a,F,n as O,m as S,ah as j,P as E,J as A,K as J,L as K,Z as Q,cf as Z,N as z,Q as G,O as H,E as M,R as T}from"./index-BaY5TDP-.js";import{P as W}from"./index-CJwxK5Qx.js";import{S as X}from"./index-DMn3OXs3.js";const Y=B(N({__name:"SaleOrderItemForm",props:{items:{type:null,required:!0},disabled:{type:Boolean,required:!0}},setup(v,{expose:f}){const b=v,u=g(!1),m=g([]),U=R({productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=g([]),x=g([]);C(()=>b.items,async d=>{m.value=d},{immediate:!0}),C(()=>m.value,d=>{d&&d.length!==0&&d.forEach(r=>{r.totalProductPrice=$(r.productPrice,r.count),r.taxPrice=$(r.totalProductPrice,r.taxPercent/100),r.totalProductPrice!=null?r.totalPrice=r.totalProductPrice+(r.taxPrice||0):r.totalPrice=void 0})},{deep:!0});const _=()=>{m.value.push({id:void 0,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,count:1,totalProductPrice:void 0,taxPercent:void 0,taxPrice:void 0,totalPrice:void 0,remark:void 0})},n=async d=>{if(!d.productId)return;const r=await X.getStockCount(d.productId);d.stockCount=r||0},p=()=>i.value.validate();f({validate:p}),L(async()=>{x.value=await W.getProductSimpleList(),m.value.length===0&&_()});const P={props:b,formLoading:u,formData:m,formRules:U,formRef:i,productList:x,getSummaries:d=>{const{columns:r,data:c}=d,s=[];return r.forEach((V,e)=>{if(e!==0)if(["count","totalProductPrice","taxPrice","totalPrice"].includes(V.property)){const o=q(c.map(l=>Number(l[V.property])));s[e]=V.property==="count"?k(o):y(o)}else s[e]="";else s[e]="\u5408\u8BA1"}),s},handleAdd:_,handleDelete:d=>{m.value.splice(d,1)},onChangeProduct:(d,r)=>{const c=x.value.find(s=>s.id===d);c&&(r.productUnitName=c.unitName,r.productBarCode=c.barCode,r.productPrice=c.salePrice),n(r)},setStockCount:n,validate:p,get erpCountInputFormatter(){return k},get erpPriceInputFormatter(){return y}};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}),[["render",function(v,f,b,u,m,U){const i=E,x=A,_=J,n=K,p=Q,P=Z,d=z,r=G,c=H,s=M,V=T;return h(),I(F,null,[D((h(),w(c,{ref:"formRef",model:u.formData,rules:u.formRules,"label-width":"0px","inline-message":!0,disabled:b.disabled},{default:t(()=>[a(r,{data:u.formData,"show-summary":"","summary-method":u.getSummaries,class:"-mt-10px"},{default:t(()=>[a(i,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),a(i,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.productId`,rules:u.formRules.productId,class:"mb-0px!"},{default:t(()=>[a(_,{modelValue:e.productId,"onUpdate:modelValue":l=>e.productId=l,clearable:"",filterable:"",onChange:l=>u.onChangeProduct(l,e),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:t(()=>[(h(!0),I(F,null,O(u.productList,l=>(h(),w(x,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),a(i,{label:"\u5E93\u5B58","min-width":"100"},{default:t(({row:e})=>[a(n,{class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.stockCount,"onUpdate:modelValue":o=>e.stockCount=o,formatter:u.erpCountInputFormatter},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),a(i,{label:"\u6761\u7801","min-width":"150"},{default:t(({row:e})=>[a(n,{class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.productBarCode,"onUpdate:modelValue":o=>e.productBarCode=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),a(i,{label:"\u5355\u4F4D","min-width":"80"},{default:t(({row:e})=>[a(n,{class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.productUnitName,"onUpdate:modelValue":o=>e.productUnitName=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),a(i,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"140"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.count`,rules:u.formRules.count,class:"mb-0px!"},{default:t(()=>[a(P,{modelValue:e.count,"onUpdate:modelValue":l=>e.count=l,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),a(i,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.productPrice`,class:"mb-0px!"},{default:t(()=>[a(P,{modelValue:e.productPrice,"onUpdate:modelValue":l=>e.productPrice=l,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),a(i,{label:"\u91D1\u989D",prop:"totalProductPrice",fixed:"right","min-width":"100"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.totalProductPrice`,class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.totalProductPrice,"onUpdate:modelValue":l=>e.totalProductPrice=l,formatter:u.erpPriceInputFormatter},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),a(i,{label:"\u7A0E\u7387\uFF08%\uFF09",fixed:"right","min-width":"115"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.taxPercent`,class:"mb-0px!"},{default:t(()=>[a(P,{modelValue:e.taxPercent,"onUpdate:modelValue":l=>e.taxPercent=l,"controls-position":"right",min:0,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),a(i,{label:"\u7A0E\u989D",prop:"taxPrice",fixed:"right","min-width":"120"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.taxPrice`,class:"mb-0px!"},{default:t(()=>[a(n,{prop:`${o}.taxPrice`,class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.taxPrice,"onUpdate:modelValue":l=>e.taxPrice=l,formatter:u.erpPriceInputFormatter},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:2},1032,["prop"])]),_:1}),a(i,{label:"\u7A0E\u989D\u5408\u8BA1",prop:"totalPrice",fixed:"right","min-width":"100"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.totalPrice`,class:"mb-0px!"},{default:t(()=>[a(p,{disabled:"",modelValue:e.totalPrice,"onUpdate:modelValue":l=>e.totalPrice=l,formatter:u.erpPriceInputFormatter},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),a(i,{label:"\u5907\u6CE8","min-width":"150"},{default:t(({row:e,$index:o})=>[a(n,{prop:`${o}.remark`,class:"mb-0px!"},{default:t(()=>[a(p,{modelValue:e.remark,"onUpdate:modelValue":l=>e.remark=l,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),a(i,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:t(({$index:e})=>[a(d,{onClick:o=>u.handleDelete(e),link:""},{default:t(()=>f[0]||(f[0]=[S("\u2014")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[V,u.formLoading]]),b.disabled?j("",!0):(h(),w(s,{key:0,justify:"center",class:"mt-3"},{default:t(()=>[a(d,{onClick:u.handleAdd,round:""},{default:t(()=>f[1]||(f[1]=[S("+ \u6DFB\u52A0\u91C7\u8D2D\u4EA7\u54C1")])),_:1})]),_:1}))],64)}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/erp/sale/order/components/SaleOrderItemForm.vue"]]);export{Y as default};
