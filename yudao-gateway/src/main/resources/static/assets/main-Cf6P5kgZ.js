import{d as c,_ as u,o as m,c as d,k as a,w as t,j as q,m as f,t as _,E as b,z as y,v,y as k}from"./index-BaY5TDP-.js";const x=["src"],g=u(c({name:"WxLocation",__name:"main",props:{locationX:{required:!0,type:Number},locationY:{required:!0,type:Number},label:{required:!0,type:String},qqMapKey:{required:!1,type:String,default:"TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E"}},setup(n,{expose:l}){const e=n;l({locationX:e.locationX,locationY:e.locationY,label:e.label,qqMapKey:e.qqMapKey});const o={props:e};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),[["render",function(n,l,e,o,h,w){const r=b,i=y,s=v,p=k;return m(),d("div",null,[a(p,{type:"primary",target:"_blank",href:"https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx="+e.locationY+"&pointy="+e.locationX+"&name="+e.label+"&ref=yudao"},{default:t(()=>[a(s,null,{default:t(()=>[a(r,null,{default:t(()=>[q("img",{src:"https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|"+e.locationX+","+e.locationY+"&key="+e.qqMapKey+"&size=250*180"},null,8,x)]),_:1}),a(r,null,{default:t(()=>[a(i,{icon:"ep:location"}),f(" "+_(e.label),1)]),_:1})]),_:1})]),_:1},8,["href"])])}],["__file","/Users/steven/00/500_code/520_github/yudao-ui-admin-vue3/src/views/mp/components/wx-location/main.vue"]]);export{g as default};
