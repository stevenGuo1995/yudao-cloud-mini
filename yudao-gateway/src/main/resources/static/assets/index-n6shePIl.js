import{bz as t}from"./index-BaY5TDP-.js";const e=async s=>await t.get({url:"/crm/business-status/page",params:s}),a=async s=>await t.post({url:"/crm/business-status/create",data:s}),u=async s=>await t.put({url:"/crm/business-status/update",data:s}),i=async s=>await t.get({url:"/crm/business-status/get?id="+s}),n=async s=>await t.delete({url:"/crm/business-status/delete?id="+s}),r=async()=>await t.get({url:"/crm/business-status/type-simple-list"}),c=async s=>await t.get({url:"/crm/business-status/status-simple-list",params:{typeId:s}}),l=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_STATUSES:[{endStatus:1,key:"\u7ED3\u675F",name:"\u8D62\u5355",percent:100},{endStatus:2,key:"\u7ED3\u675F",name:"\u8F93\u5355",percent:0},{endStatus:3,key:"\u7ED3\u675F",name:"\u65E0\u6548",percent:0}],createBusinessStatus:a,deleteBusinessStatus:n,getBusinessStatus:i,getBusinessStatusPage:e,getBusinessStatusSimpleList:c,getBusinessStatusTypeSimpleList:r,updateBusinessStatus:u},Symbol.toStringTag,{value:"Module"}));export{l as B,c as a,i as b,a as c,e as d,n as e,r as g,u};
