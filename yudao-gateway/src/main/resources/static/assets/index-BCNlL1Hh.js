import{bz as a}from"./index-BaY5TDP-.js";const r={getSaleReturnPage:async e=>await a.get({url:"/erp/sale-return/page",params:e}),getSaleReturn:async e=>await a.get({url:"/erp/sale-return/get?id="+e}),createSaleReturn:async e=>await a.post({url:"/erp/sale-return/create",data:e}),updateSaleReturn:async e=>await a.put({url:"/erp/sale-return/update",data:e}),updateSaleReturnStatus:async(e,t)=>await a.put({url:"/erp/sale-return/update-status",params:{id:e,status:t}}),deleteSaleReturn:async e=>await a.delete({url:"/erp/sale-return/delete",params:{ids:e.join(",")}}),exportSaleReturn:async e=>await a.download({url:"/erp/sale-return/export-excel",params:e})};export{r as S};
