import{d as y,D as S,ee as w,b as D,b4 as x,r as b,f as M,_ as j,o as f,c as E,j as p,q as _,a2 as V,k as i,w as l,m as I,z as L,N as A,bx as k,cK as z}from"./index-BaY5TDP-.js";import{E as B}from"./el-image-Bg-CwbDE.js";import{W as O}from"./main-KjNEjHxK.js";import{U,u as R}from"./useUpload-Dg-sFRn3.js";import"./index-avjYFQiD.js";import"./index-DrSdAlug.js";import"./main-BdcmYikv.js";import"./main-BdArqmip.js";import"./main-DeQxN6ve.js";import"./index-Ci6jvA8Q.js";import"./index-D0l0uLV-.js";import"./formatTime-Dr6TiYYc.js";const q=y({__name:"CoverSelect",props:{modelValue:{type:Object,required:!0},isFirst:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(g,{expose:a,emit:n}){a();const e=S(),v={Authorization:"Bearer "+w()},c=g,s=n,o=D({get:()=>c.modelValue,set(t){s("update:modelValue",t)}}),r=x("accountId"),u=b(!1),d=b([]),m=M({type:U.Image,accountId:r}),h={message:e,UPLOAD_URL:"http://localhost:48080/admin-api/mp/material/upload-permanent",HEADERS:v,props:c,emit:s,newsItem:o,accountId:r,showImageDialog:u,fileList:d,uploadData:m,onMaterialSelected:t=>{u.value=!1,o.value.thumbMediaId=t.mediaId,o.value.thumbUrl=t.url},onBeforeUpload:t=>R(U.Image,2)(t),onUploadSuccess:t=>{if(t.code!==0)return e.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;d.value=[],o.value.thumbMediaId=t.data.mediaId,o.value.thumbUrl=t.data.url},onUploadError:t=>{e.error("\u4E0A\u4F20\u5931\u8D25: "+t.message)},get WxMaterialSelect(){return O}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),C={class:"thumb-div"},P={class:"thumb-but"},W=j(q,[["render",function(g,a,n,e,v,c){const s=B,o=L,r=A,u=k,d=z;return f(),E("div",null,[a[5]||(a[5]=p("p",null,"\u5C01\u9762:",-1)),p("div",C,[e.newsItem.thumbUrl?(f(),_(s,{key:0,style:{width:"300px","max-height":"300px"},src:e.newsItem.thumbUrl,fit:"contain"},null,8,["src"])):(f(),_(o,{key:1,icon:"ep:plus",class:V(["avatar-uploader-icon",n.isFirst?"avatar":"avatar1"])},null,8,["class"])),p("div",P,[i(u,{action:e.UPLOAD_URL,headers:e.HEADERS,multiple:"",limit:1,"file-list":e.fileList,data:e.uploadData,"before-upload":e.onBeforeUpload,"on-error":e.onUploadError,"on-success":e.onUploadSuccess},{trigger:l(()=>[i(r,{size:"small",type:"primary"},{default:l(()=>a[2]||(a[2]=[I("\u672C\u5730\u4E0A\u4F20")])),_:1})]),tip:l(()=>a[4]||(a[4]=[p("div",{class:"el-upload__tip"},"\u652F\u6301 bmp/png/jpeg/jpg/gif \u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M",-1)])),default:l(()=>[i(r,{size:"small",type:"primary",onClick:a[0]||(a[0]=m=>e.showImageDialog=!0),style:{"margin-left":"5px"}},{default:l(()=>a[3]||(a[3]=[I(" \u7D20\u6750\u5E93\u9009\u62E9 ")])),_:1})]),_:1},8,["file-list","data"])]),i(d,{title:"\u9009\u62E9\u56FE\u7247",modelValue:e.showImageDialog,"onUpdate:modelValue":a[1]||(a[1]=m=>e.showImageDialog=m),width:"80%","append-to-body":"","destroy-on-close":""},{default:l(()=>[i(e.WxMaterialSelect,{type:"image","account-id":e.accountId,onSelectMaterial:e.onMaterialSelected},null,8,["account-id"])]),_:1},8,["modelValue"])])])}],["__scopeId","data-v-09ea8c50"],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mp/draft/components/CoverSelect.vue"]]);export{W as default};
