import{bz as e}from"./index-BaY5TDP-.js";const r=async a=>await e.get({url:"/crm/receivable/page",params:a}),c=async a=>await e.get({url:"/crm/receivable/page-by-customer",params:a}),t=async a=>await e.get({url:"/crm/receivable/get?id="+a}),s=async a=>await e.post({url:"/crm/receivable/create",data:a}),i=async a=>await e.put({url:"/crm/receivable/update",data:a}),l=async a=>await e.delete({url:"/crm/receivable/delete?id="+a}),u=async a=>await e.download({url:"/crm/receivable/export-excel",params:a}),m=async a=>await e.put({url:`/crm/receivable/submit?id=${a}`}),b=async()=>await e.get({url:"/crm/receivable/audit-count"});export{t as a,r as b,s as c,l as d,b as e,u as f,c as g,m as s,i as u};
