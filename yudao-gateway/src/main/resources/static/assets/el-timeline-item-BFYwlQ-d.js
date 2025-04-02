import{d as m,bd as d,at as y,h as g,aS as p,bb as h,bp as k,b as w,o as l,c as o,j as c,a2 as a,a as t,aF as S,q as u,w as T,aZ as $,bs as B,ah as n,t as f,bf as E,bl as _,bm as j}from"./index-BaY5TDP-.js";const z=m({name:"ElTimeline",setup(r,{slots:i}){const e=d("timeline");return y("timeline",i),()=>g("ul",{class:[e.b()]},[p(i,"default")])}}),I=h({timestamp:{type:String,default:""},hideTimestamp:Boolean,center:Boolean,placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:k},hollow:Boolean}),q=m({name:"ElTimelineItem"});var v=E(m({...q,props:I,setup(r){const i=r,e=d("timeline-item"),b=w(()=>[e.e("node"),e.em("node",i.size||""),e.em("node",i.type||""),e.is("hollow",i.hollow)]);return(s,F)=>(l(),o("li",{class:a([t(e).b(),{[t(e).e("center")]:s.center}])},[c("div",{class:a(t(e).e("tail"))},null,2),s.$slots.dot?n("v-if",!0):(l(),o("div",{key:0,class:a(t(b)),style:S({backgroundColor:s.color})},[s.icon?(l(),u(t(B),{key:0,class:a(t(e).e("icon"))},{default:T(()=>[(l(),u($(s.icon)))]),_:1},8,["class"])):n("v-if",!0)],6)),s.$slots.dot?(l(),o("div",{key:1,class:a(t(e).e("dot"))},[p(s.$slots,"dot")],2)):n("v-if",!0),c("div",{class:a(t(e).e("wrapper"))},[s.hideTimestamp||s.placement!=="top"?n("v-if",!0):(l(),o("div",{key:0,class:a([t(e).e("timestamp"),t(e).is("top")])},f(s.timestamp),3)),c("div",{class:a(t(e).e("content"))},[p(s.$slots,"default")],2),s.hideTimestamp||s.placement!=="bottom"?n("v-if",!0):(l(),o("div",{key:1,class:a([t(e).e("timestamp"),t(e).is("bottom")])},f(s.timestamp),3))],2)],2))}}),[["__file","timeline-item.vue"]]);const x=_(z,{TimelineItem:v}),C=j(v);export{C as E,x as a};
