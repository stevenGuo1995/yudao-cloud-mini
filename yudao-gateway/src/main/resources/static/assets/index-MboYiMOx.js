import{bz as a}from"./index-BaY5TDP-.js";const r=async e=>await a.get({url:"/trade/delivery/express/page",params:e}),s=async e=>await a.get({url:"/trade/delivery/express/get?id="+e}),t=()=>a.get({url:"/trade/delivery/express/list-all-simple"}),d=async e=>await a.post({url:"/trade/delivery/express/create",data:e}),l=async e=>await a.put({url:"/trade/delivery/express/update",data:e}),i=async e=>await a.delete({url:"/trade/delivery/express/delete?id="+e}),p=async e=>await a.download({url:"/trade/delivery/express/export-excel",params:e});export{s as a,r as b,d as c,i as d,p as e,t as g,l as u};
