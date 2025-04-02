import{d as F,g as R,D as T,r as i,f as w,G as S,U as q,_ as C,o as v,q as _,w as s,k as r,m as h,I as E,c as L,F as O,n as I,Z as x,L as N,J as A,K as P,O as j,N as B,R as M}from"./index-BaY5TDP-.js";import{_ as Y}from"./Dialog-CZSXtzfQ.js";import{C as k}from"./constants-CEEr2azc.js";import{a as G,c as J,u as K}from"./index-C7Vgvn4F.js";const Z=C(F({name:"SystemRoleForm",__name:"RoleForm",emits:["success"],setup(U,{expose:a,emit:V}){const{t:e}=R(),c=T(),f=i(!1),u=i(""),t=i(!1),n=i(""),d=i({id:void 0,name:"",code:"",sort:void 0,status:k.ENABLE,remark:""}),b=w({name:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u89D2\u8272\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],sort:[{required:!0,message:"\u663E\u793A\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],remark:[{required:!1,message:"\u5907\u6CE8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=i(),p=async(o,y)=>{if(f.value=!0,u.value=e("action."+o),n.value=o,g(),y){t.value=!0;try{d.value=await G(y)}finally{t.value=!1}}},g=()=>{var o;d.value={id:void 0,name:"",code:"",sort:void 0,status:k.ENABLE,remark:""},(o=m.value)==null||o.resetFields()};a({open:p});const l=V,D={t:e,message:c,dialogVisible:f,dialogTitle:u,formLoading:t,formType:n,formData:d,formRules:b,formRef:m,open:p,resetForm:g,emit:l,submitForm:async()=>{if(m&&await m.value.validate()){t.value=!0;try{const o=d.value;n.value==="create"?(await J(o),c.success(e("common.createSuccess"))):(await K(o),c.success(e("common.updateSuccess"))),f.value=!1,l("success")}finally{t.value=!1}}},get DICT_TYPE(){return S},get getIntDictOptions(){return q}};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),[["render",function(U,a,V,e,c,f){const u=x,t=N,n=A,d=P,b=j,m=B,p=Y,g=M;return v(),_(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[6]||(a[6]=l=>e.dialogVisible=l),title:e.dialogTitle},{footer:s(()=>[r(m,{disabled:e.formLoading,type:"primary",onClick:e.submitForm},{default:s(()=>a[7]||(a[7]=[h("\u786E \u5B9A")])),_:1},8,["disabled"]),r(m,{onClick:a[5]||(a[5]=l=>e.dialogVisible=!1)},{default:s(()=>a[8]||(a[8]=[h("\u53D6 \u6D88")])),_:1})]),default:s(()=>[E((v(),_(b,{ref:"formRef",model:e.formData,rules:e.formRules,"label-width":"80px"},{default:s(()=>[r(t,{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{default:s(()=>[r(u,{modelValue:e.formData.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.formData.name=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u89D2\u8272\u6807\u8BC6",prop:"code"},{default:s(()=>[r(u,{modelValue:e.formData.code,"onUpdate:modelValue":a[1]||(a[1]=l=>e.formData.code=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u663E\u793A\u987A\u5E8F",prop:"sort"},{default:s(()=>[r(u,{modelValue:e.formData.sort,"onUpdate:modelValue":a[2]||(a[2]=l=>e.formData.sort=l),placeholder:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[r(d,{modelValue:e.formData.status,"onUpdate:modelValue":a[3]||(a[3]=l=>e.formData.status=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:s(()=>[(v(!0),L(O,null,I(e.getIntDictOptions(e.DICT_TYPE.COMMON_STATUS),l=>(v(),_(n,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(t,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[r(u,{modelValue:e.formData.remark,"onUpdate:modelValue":a[4]||(a[4]=l=>e.formData.remark=l),placeholder:"\u8BF7\u8F93\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[g,e.formLoading]])]),_:1},8,["modelValue","title"])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/system/role/RoleForm.vue"]]);export{Z as default};
