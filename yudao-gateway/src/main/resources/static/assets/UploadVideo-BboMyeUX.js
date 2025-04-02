import{d as D,D as y,b4 as h,b as v,r as f,f as R,_ as w,o as x,q as L,w as t,k as l,m as V,j as S,N as E,bx as A,x as O,Z as P,L as k,O as q,cK as H}from"./index-BaY5TDP-.js";import{H as I,U as j,c as B}from"./upload-PNt56tCi.js";import{U as C}from"./useUpload-Dg-sFRn3.js";const F=w(D({__name:"UploadVideo",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","uploaded"],setup(g,{expose:o,emit:_}){o();const e=y(),m=h("accountId"),c=g,d=_,i=v({get:()=>c.modelValue,set(a){d("update:modelValue",a)}}),s=f([]),u=R({type:C.Video,title:"",introduction:"",accountId:m}),r=f(null),p=f(null),n={message:e,accountId:m,uploadRules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}],introduction:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0",trigger:"blur"}]},props:c,emit:d,showDialog:i,fileList:s,uploadData:u,uploadFormRef:r,uploadVideoRef:p,submitVideo:()=>{var a;(a=r.value)==null||a.validate(U=>{var b;if(!U)return!1;(b=p.value)==null||b.submit()})},onUploadSuccess:a=>{if(a.code!==0)return e.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;s.value=[],u.title="",u.introduction="",i.value=!1,e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),d("uploaded")},onUploadError:a=>e.error(`\u4E0A\u4F20\u5931\u8D25: ${a.message}`),get HEADERS(){return I},get UPLOAD_URL(){return j},get beforeVideoUpload(){return B}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),[["render",function(g,o,_,e,m,c){const d=E,i=A,s=O,u=P,r=k,p=q,n=H;return x(),L(n,{title:"\u65B0\u5EFA\u89C6\u9891",modelValue:e.showDialog,"onUpdate:modelValue":o[3]||(o[3]=a=>e.showDialog=a),width:"600px"},{footer:t(()=>[l(d,{onClick:o[2]||(o[2]=a=>e.showDialog=!1)},{default:t(()=>o[6]||(o[6]=[V("\u53D6 \u6D88")])),_:1}),l(d,{type:"primary",onClick:e.submitVideo},{default:t(()=>o[7]||(o[7]=[V("\u63D0 \u4EA4")])),_:1})]),default:t(()=>[l(i,{action:e.UPLOAD_URL,headers:e.HEADERS,multiple:"",limit:1,"file-list":e.fileList,data:e.uploadData,"before-upload":e.beforeVideoUpload,"on-error":e.onUploadError,"on-success":e.onUploadSuccess,ref:"uploadVideoRef","auto-upload":!1,class:"mb-5"},{trigger:t(()=>[l(d,{type:"primary",plain:""},{default:t(()=>o[4]||(o[4]=[V("\u9009\u62E9\u89C6\u9891")])),_:1})]),tip:t(()=>o[5]||(o[5]=[S("span",{class:"el-upload__tip",style:{"margin-left":"10px"}},"\u683C\u5F0F\u652F\u6301 MP4\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 10MB",-1)])),_:1},8,["action","headers","file-list","data","before-upload"]),l(s),l(p,{model:e.uploadData,rules:e.uploadRules,ref:"uploadFormRef"},{default:t(()=>[l(r,{label:"\u6807\u9898",prop:"title"},{default:t(()=>[l(u,{modelValue:e.uploadData.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e.uploadData.title=a),placeholder:"\u6807\u9898\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u6E05\u6670\u3001\u51C6\u786E\u3001\u751F\u52A8\u7684\u6807\u9898"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u63CF\u8FF0",prop:"introduction"},{default:t(()=>[l(u,{rows:3,type:"textarea",modelValue:e.uploadData.introduction,"onUpdate:modelValue":o[1]||(o[1]=a=>e.uploadData.introduction=a),placeholder:"\u4ECB\u7ECD\u8BED\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u7B80\u6D01\u660E\u786E\u3001\u6709\u4FE1\u606F\u91CF\u7684\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mp/material/components/UploadVideo.vue"]]);export{F as default};
