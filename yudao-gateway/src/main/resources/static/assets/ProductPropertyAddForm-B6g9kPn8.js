import{d as h,r as d,f as D,au as k,g as O,D as x,_ as R,o as c,q as g,w as t,k as b,m as L,I as A,Y as j,a_ as K,c as S,F as U,n as q,J as C,K as I,L as J,O as N,N as Y,R as z}from"./index-BaY5TDP-.js";import{_ as B}from"./Dialog-CZSXtzfQ.js";import{e as E,f as G}from"./property-Ddjv43NP.js";const H=R(h({name:"ProductPropertyForm",__name:"ProductPropertyAddForm",props:{propertyList:{type:Array,default:()=>{}}},setup(w,{expose:a}){const{t:y}=O(),e=x(),m=d(!1),u=d(!1),l=d({name:""}),_=D({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=d(),s=d([]),n=d([]),p=w;k(()=>p.propertyList,o=>{o&&(s.value=o)},{deep:!0,immediate:!0});const v=async()=>{m.value=!0,r(),await V()};a({open:v});const r=()=>{var o;l.value={name:""},(o=i.value)==null||o.resetFields()},V=async()=>{u.value=!0;try{n.value=await E()}finally{u.value=!1}},F={t:y,message:e,dialogVisible:m,formLoading:u,formData:l,formRules:_,formRef:i,attributeList:s,attributeOptions:n,props:p,open:v,submitForm:async()=>{for(const f of s.value)if(f.name===l.value.name)return e.error("\u8BE5\u5C5E\u6027\u5DF2\u5B58\u5728\uFF0C\u8BF7\u52FF\u91CD\u590D\u6DFB\u52A0");if(!i||!await i.value.validate())return;const o=n.value.find(f=>f.name===l.value.name);if(o)return s.value.push({id:o.id,...l.value,values:[]}),void(m.value=!1);u.value=!0;try{const f=l.value,P=await G(f);s.value.push({id:P,...l.value,values:[]}),e.success(y("common.createSuccess")),m.value=!1}finally{u.value=!1}},resetForm:r,getAttributeOptions:V};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}),[["render",function(w,a,y,e,m,u){const l=C,_=I,i=J,s=N,n=Y,p=B,v=z;return c(),g(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[2]||(a[2]=r=>e.dialogVisible=r),title:"\u6DFB\u52A0\u5546\u54C1\u5C5E\u6027"},{footer:t(()=>[b(n,{disabled:e.formLoading,type:"primary",onClick:e.submitForm},{default:t(()=>a[3]||(a[3]=[L("\u786E \u5B9A")])),_:1},8,["disabled"]),b(n,{onClick:a[1]||(a[1]=r=>e.dialogVisible=!1)},{default:t(()=>a[4]||(a[4]=[L("\u53D6 \u6D88")])),_:1})]),default:t(()=>[A((c(),g(s,{ref:"formRef",model:e.formData,rules:e.formRules,"label-width":"80px",onKeydown:j(K(e.submitForm,["prevent"]),["enter"])},{default:t(()=>[b(i,{label:"\u5C5E\u6027\u540D\u79F0",prop:"name"},{default:t(()=>[b(_,{modelValue:e.formData.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.formData.name=r),"reserve-keyword":!1,"allow-create":"",class:"!w-360px","default-first-option":"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5C5E\u6027\u540D\u79F0\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u53EF\u624B\u52A8\u8F93\u5165\u9009\u62E9"},{default:t(()=>[(c(!0),S(U,null,q(e.attributeOptions,r=>(c(),g(l,{key:r.id,label:r.name,value:r.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules","onKeydown"])),[[v,e.formLoading]])]),_:1},8,["modelValue"])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mall/product/spu/form/ProductPropertyAddForm.vue"]]);export{H as default};
