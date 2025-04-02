import{d as I,g as K,D as U,r as h,G as q,cP as R,_ as F,o as f,c as v,k as o,w as t,m as u,I as P,q as D,j as w,F as S,n as A,t as N,ah as C,Z as T,L as O,ak as B,al as L,z,N as E,bx as j,O as M,R as W}from"./index-BaY5TDP-.js";import{_ as J}from"./Dialog-CZSXtzfQ.js";import{C as Y}from"./constants-CEEr2azc.js";import{g as G,c as Z,u as H}from"./index-pf8i-b2A.js";const Q={key:0},X={key:1},$=F(I({name:"WeixinChannelForm",__name:"WeixinChannelForm",emits:["success"],setup(k,{expose:e,emit:x}){const{t:a}=K(),c=U(),V=h(!1),d=h(""),i=h(!1),p=h({appId:"",code:"",status:void 0,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",certSerialNo:"",apiV3Key:""}}),s=h(),g=async(r,l)=>{V.value=!0,i.value=!0,y(r,l);try{const n=await G(r,l);n&&n.id&&(p.value=n,p.value.config=JSON.parse(n.config)),d.value=p.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{i.value=!1}};e({open:g});const m=x,y=(r,l)=>{var n;p.value={appId:r,code:l,status:Y.ENABLE,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",certSerialNo:"",apiV3Key:""}},(n=s.value)==null||n.resetFields()},b=(r,l)=>{if("."+r.name.split(".")[1]!==l)return c.error('\u8BF7\u4E0A\u4F20\u6307\u5B9A\u683C\u5F0F"'+l+'"\u6587\u4EF6'),!1;let n=r.size/1024/1024<2;return n||c.error("\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 2MB"),n},_={t:a,message:c,dialogVisible:V,dialogTitle:d,formLoading:i,formData:p,formRules:{feeRate:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",trigger:"blur"}],status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchId":[{required:!0,message:"\u8BF7\u4F20\u5165\u5546\u6237\u53F7",trigger:"blur"}],"config.appId":[{required:!0,message:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7APPID",trigger:"blur"}],"config.apiVersion":[{required:!0,message:"API\u7248\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchKey":[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5",trigger:"blur"}],"config.keyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",trigger:"blur"}],"config.privateKeyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",trigger:"blur"}],"config.certSerialNo":[{required:!0,message:"\u8BF7\u8F93\u5165\u8BC1\u4E66\u5E8F\u5217\u53F7",trigger:"blur"}],"config.apiV3Key":[{required:!0,message:"\u8BF7\u4E0A\u4F20 api V3 \u5BC6\u94A5\u503C",trigger:"blur"}]},formRef:s,open:g,emit:m,submitForm:async()=>{if(s&&await s.value.validate()){i.value=!0;try{const r={...p.value};r.config=JSON.stringify(p.value.config),r.id?(await H(r),c.success(a("common.updateSuccess"))):(await Z(r),c.success(a("common.createSuccess"))),V.value=!1,m("success")}finally{i.value=!1}}},resetForm:y,fileBeforeUpload:b,p12FileBeforeUpload:r=>{b(r,".p12")},pemFileBeforeUpload:r=>{b(r,".pem")},privateKeyContentUpload:async r=>{const l=new FileReader;l.onload=n=>{p.value.config.privateKeyContent=n.target.result},l.readAsText(r.file)},keyContentUpload:async r=>{const l=new FileReader;l.onload=n=>{p.value.config.keyContent=n.target.result.split(",")[1]},l.readAsDataURL(r.file)},get DICT_TYPE(){return q},get getDictOptions(){return R}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),[["render",function(k,e,x,a,c,V){const d=T,i=O,p=B,s=L,g=z,m=E,y=j,b=M,_=J,r=W;return f(),v("div",null,[o(_,{modelValue:a.dialogVisible,"onUpdate:modelValue":e[12]||(e[12]=l=>a.dialogVisible=l),title:a.dialogTitle,width:"800px"},{footer:t(()=>[o(m,{disabled:a.formLoading,type:"primary",onClick:a.submitForm},{default:t(()=>e[21]||(e[21]=[u("\u786E \u5B9A")])),_:1},8,["disabled"]),o(m,{onClick:e[11]||(e[11]=l=>a.dialogVisible=!1)},{default:t(()=>e[22]||(e[22]=[u("\u53D6 \u6D88")])),_:1})]),default:t(()=>[P((f(),D(b,{ref:"formRef",model:a.formData,rules:a.formRules,"label-width":"120px"},{default:t(()=>[o(i,{label:"\u6E20\u9053\u8D39\u7387","label-width":"180px",prop:"feeRate"},{default:t(()=>[o(d,{modelValue:a.formData.feeRate,"onUpdate:modelValue":e[0]||(e[0]=l=>a.formData.feeRate=l),style:{width:"100%"},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387"},{append:t(()=>e[13]||(e[13]=[u("%")])),_:1},8,["modelValue"])]),_:1}),o(i,{label:"\u5FAE\u4FE1 APPID","label-width":"180px",prop:"config.appId"},{default:t(()=>[o(d,{modelValue:a.formData.config.appId,"onUpdate:modelValue":e[1]||(e[1]=l=>a.formData.config.appId=l),style:{width:"100%"},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5FAE\u4FE1 APPID"},null,8,["modelValue"])]),_:1}),o(i,{"label-width":"180px"},{default:t(()=>e[14]||(e[14]=[w("a",{href:"https://pay.weixin.qq.com/index.php/extend/merchant_appid/mapay_platform/account_manage",target:"_blank"}," \u524D\u5F80\u5FAE\u4FE1\u5546\u6237\u5E73\u53F0\u67E5\u770B APPID ",-1)])),_:1}),o(i,{label:"\u5546\u6237\u53F7","label-width":"180px",prop:"config.mchId"},{default:t(()=>[o(d,{modelValue:a.formData.config.mchId,"onUpdate:modelValue":e[2]||(e[2]=l=>a.formData.config.mchId=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),o(i,{"label-width":"180px"},{default:t(()=>e[15]||(e[15]=[w("a",{href:"https://pay.weixin.qq.com/index.php/extend/pay_setting",target:"_blank"}," \u524D\u5F80\u5FAE\u4FE1\u5546\u6237\u5E73\u53F0\u67E5\u770B\u5546\u6237\u53F7 ",-1)])),_:1}),o(i,{label:"\u6E20\u9053\u72B6\u6001","label-width":"180px",prop:"status"},{default:t(()=>[o(s,{modelValue:a.formData.status,"onUpdate:modelValue":e[3]||(e[3]=l=>a.formData.status=l)},{default:t(()=>[(f(!0),v(S,null,A(a.getDictOptions(a.DICT_TYPE.COMMON_STATUS),l=>(f(),D(p,{key:parseInt(l.value),value:parseInt(l.value)},{default:t(()=>[u(N(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"API \u7248\u672C","label-width":"180px",prop:"config.apiVersion"},{default:t(()=>[o(s,{modelValue:a.formData.config.apiVersion,"onUpdate:modelValue":e[4]||(e[4]=l=>a.formData.config.apiVersion=l)},{default:t(()=>[o(p,{value:"v2"},{default:t(()=>e[16]||(e[16]=[u("v2")])),_:1}),o(p,{value:"v3"},{default:t(()=>e[17]||(e[17]=[u("v3")])),_:1})]),_:1},8,["modelValue"])]),_:1}),a.formData.config.apiVersion==="v2"?(f(),v("div",Q,[o(i,{label:"\u5546\u6237\u5BC6\u94A5","label-width":"180px",prop:"config.mchKey"},{default:t(()=>[o(d,{modelValue:a.formData.config.mchKey,"onUpdate:modelValue":e[5]||(e[5]=l=>a.formData.config.mchKey=l),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),o(i,{label:"apiclient_cert.p12 \u8BC1\u4E66","label-width":"180px",prop:"config.keyContent"},{default:t(()=>[o(d,{modelValue:a.formData.config.keyContent,"onUpdate:modelValue":e[6]||(e[6]=l=>a.formData.config.keyContent=l),autosize:{minRows:8,maxRows:8},style:{width:"100%"},placeholder:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",readonly:"",type:"textarea"},null,8,["modelValue"])]),_:1}),o(i,{label:"","label-width":"180px"},{default:t(()=>[o(y,{"before-upload":a.p12FileBeforeUpload,"http-request":a.keyContentUpload,limit:1,accept:".p12",action:""},{default:t(()=>[o(m,{type:"primary"},{default:t(()=>[o(g,{class:"mr-5px",icon:"ep:upload"}),e[18]||(e[18]=u(" \u70B9\u51FB\u4E0A\u4F20 "))]),_:1})]),_:1})]),_:1})])):C("",!0),a.formData.config.apiVersion==="v3"?(f(),v("div",X,[o(i,{label:"API V3 \u5BC6\u94A5","label-width":"180px",prop:"config.apiV3Key"},{default:t(()=>[o(d,{modelValue:a.formData.config.apiV3Key,"onUpdate:modelValue":e[7]||(e[7]=l=>a.formData.config.apiV3Key=l),clearable:"",placeholder:"\u8BF7\u8F93\u5165 API V3 \u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),o(i,{label:"apiclient_key.pem \u8BC1\u4E66","label-width":"180px",prop:"config.privateKeyContent"},{default:t(()=>[o(d,{modelValue:a.formData.config.privateKeyContent,"onUpdate:modelValue":e[8]||(e[8]=l=>a.formData.config.privateKeyContent=l),autosize:{minRows:8,maxRows:8},style:{width:"100%"},placeholder:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",readonly:"",type:"textarea"},null,8,["modelValue"])]),_:1}),o(i,{label:"","label-width":"180px",prop:"privateKeyContentFile"},{default:t(()=>[o(y,{ref:"privateKeyContentFile","before-upload":a.pemFileBeforeUpload,"http-request":a.privateKeyContentUpload,limit:1,accept:".pem",action:""},{default:t(()=>[o(m,{type:"primary"},{default:t(()=>[o(g,{class:"mr-5px",icon:"ep:upload"}),e[19]||(e[19]=u(" \u70B9\u51FB\u4E0A\u4F20 "))]),_:1})]),_:1},512)]),_:1}),o(i,{label:"\u8BC1\u4E66\u5E8F\u5217\u53F7","label-width":"180px",prop:"config.certSerialNo"},{default:t(()=>[o(d,{modelValue:a.formData.config.certSerialNo,"onUpdate:modelValue":e[9]||(e[9]=l=>a.formData.config.certSerialNo=l),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8BC1\u4E66\u5E8F\u5217\u53F7"},null,8,["modelValue"])]),_:1}),o(i,{"label-width":"180px"},{default:t(()=>e[20]||(e[20]=[w("a",{href:"https://pay.weixin.qq.com/index.php/core/cert/api_cert#/api-cert-manage",target:"_blank"}," \u524D\u5F80\u5FAE\u4FE1\u5546\u6237\u5E73\u53F0\u67E5\u770B\u8BC1\u4E66\u5E8F\u5217\u53F7 ",-1)])),_:1})])):C("",!0),o(i,{label:"\u5907\u6CE8","label-width":"180px",prop:"remark"},{default:t(()=>[o(d,{modelValue:a.formData.remark,"onUpdate:modelValue":e[10]||(e[10]=l=>a.formData.remark=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[r,a.formLoading]])]),_:1},8,["modelValue","title"])])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/pay/app/components/channel/WeixinChannelForm.vue"]]);export{$ as default};
