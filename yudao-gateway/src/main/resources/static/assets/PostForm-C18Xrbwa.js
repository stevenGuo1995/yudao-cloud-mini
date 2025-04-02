import{d as w,g as F,D as T,r as i,f as S,G as C,U as E,_ as L,o as v,q as _,w as s,k as t,m as h,I as O,c as P,F as q,n as x,Z as I,L as R,J as N,K as j,O as A,N as B,R as M}from"./index-BaY5TDP-.js";import{_ as Y}from"./Dialog-CZSXtzfQ.js";import{C as k}from"./constants-CEEr2azc.js";import{a as G,c as J,u as K}from"./index-D-_5jDBN.js";const Z=L(w({name:"SystemPostForm",__name:"PostForm",emits:["success"],setup(U,{expose:a,emit:V}){const{t:e}=F(),c=T(),f=i(!1),u=i(""),r=i(!1),n=i(""),d=i({id:void 0,name:"",code:"",sort:0,status:k.ENABLE,remark:""}),b=S({name:[{required:!0,message:"\u5C97\u4F4D\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u5C97\u4F4D\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],status:[{required:!0,message:"\u5C97\u4F4D\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],remark:[{required:!1,message:"\u5C97\u4F4D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=i(),p=async(o,y)=>{if(f.value=!0,u.value=e("action."+o),n.value=o,l(),y){r.value=!0;try{d.value=await G(y)}finally{r.value=!1}}};a({open:p});const g=V,l=()=>{var o;d.value={id:void 0,name:"",code:"",sort:void 0,status:k.ENABLE,remark:""},(o=m.value)==null||o.resetFields()},D={t:e,message:c,dialogVisible:f,dialogTitle:u,formLoading:r,formType:n,formData:d,formRules:b,formRef:m,open:p,emit:g,submitForm:async()=>{if(m&&await m.value.validate()){r.value=!0;try{const o=d.value;n.value==="create"?(await J(o),c.success(e("common.createSuccess"))):(await K(o),c.success(e("common.updateSuccess"))),f.value=!1,g("success")}finally{r.value=!1}}},resetForm:l,get DICT_TYPE(){return C},get getIntDictOptions(){return E}};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),[["render",function(U,a,V,e,c,f){const u=I,r=R,n=N,d=j,b=A,m=B,p=Y,g=M;return v(),_(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[6]||(a[6]=l=>e.dialogVisible=l),title:e.dialogTitle,width:"800"},{footer:s(()=>[t(m,{disabled:e.formLoading,type:"primary",onClick:e.submitForm},{default:s(()=>a[7]||(a[7]=[h("\u786E \u5B9A")])),_:1},8,["disabled"]),t(m,{onClick:a[5]||(a[5]=l=>e.dialogVisible=!1)},{default:s(()=>a[8]||(a[8]=[h("\u53D6 \u6D88")])),_:1})]),default:s(()=>[O((v(),_(b,{ref:"formRef",model:e.formData,rules:e.formRules,"label-width":"80px"},{default:s(()=>[t(r,{label:"\u5C97\u4F4D\u6807\u9898",prop:"name"},{default:s(()=>[t(u,{modelValue:e.formData.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.formData.name=l),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u6807\u9898"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:s(()=>[t(u,{modelValue:e.formData.code,"onUpdate:modelValue":a[1]||(a[1]=l=>e.formData.code=l),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5C97\u4F4D\u987A\u5E8F",prop:"sort"},{default:s(()=>[t(u,{modelValue:e.formData.sort,"onUpdate:modelValue":a[2]||(a[2]=l=>e.formData.sort=l),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u987A\u5E8F"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[t(d,{modelValue:e.formData.status,"onUpdate:modelValue":a[3]||(a[3]=l=>e.formData.status=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:s(()=>[(v(!0),P(q,null,x(e.getIntDictOptions(e.DICT_TYPE.COMMON_STATUS),l=>(v(),_(n,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[t(u,{modelValue:e.formData.remark,"onUpdate:modelValue":a[4]||(a[4]=l=>e.formData.remark=l),placeholder:"\u8BF7\u8F93\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[g,e.formLoading]])]),_:1},8,["modelValue","title"])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/system/post/PostForm.vue"]]);export{Z as default};
