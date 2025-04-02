import{b as c,cx as le,bQ as ne,cy as m,bc as b,bb as z,cz as oe,d as se,bd as j,r as k,f as ie,cA as ue,a as E,au as ce,av as de,h as H,a_ as ve,bK as me,bM as pe}from"./index-BaY5TDP-.js";var K=Number.isNaN||function(e){return typeof e=="number"&&e!=e};function fe(e,a){if(e.length!==a.length)return!1;for(var l=0;l<e.length;l++)if(n=e[l],r=a[l],!(n===r||K(n)&&K(r)))return!1;var n,r;return!0}const ge=()=>{const e=ne().proxy.$props;return c(()=>{const a=(l,n,r)=>({});return e.perfMode?le(a):function(l,n){n===void 0&&(n=fe);var r=null;function p(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];if(r&&r.lastThis===this&&n(u,r.lastArgs))return r.lastResult;var f=l.apply(this,u);return r={lastResult:f,lastArgs:u,lastThis:this},f}return p.clear=function(){r=null},p}(a)})},he=50,be="itemRendered",ye="scroll",P="forward",V="backward",Se="auto",we="smart",xe="start",Ne="center",ze="end",y="horizontal",I="vertical",B="rtl",W="negative",_="positive-ascending",Q="positive-descending",Ee={[y]:"left",[I]:"top"},R=m({type:b([Number,Function]),required:!0}),T=m({type:Number}),O=m({type:Number,default:2}),Me=m({type:String,values:["ltr","rtl"],default:"ltr"}),$=m({type:Number,default:0}),M=m({type:Number,required:!0}),Y=m({type:String,values:["horizontal","vertical"],default:I}),J=z({className:{type:String,default:""},containerElement:{type:b([String,Object]),default:"div"},data:{type:b(Array),default:()=>oe([])},direction:Me,height:{type:[String,Number],required:!0},innerElement:{type:[String,Object],default:"div"},style:{type:b([Object,String,Array])},useIsScrolling:{type:Boolean,default:!1},width:{type:[Number,String],required:!1},perfMode:{type:Boolean,default:!0},scrollbarAlwaysOn:{type:Boolean,default:!1}}),Le=z({cache:O,estimatedItemSize:T,layout:Y,initScrollOffset:$,total:M,itemSize:R,...J}),q={type:Number,default:6},U={type:Number,default:0},X={type:Number,default:2},Ce=z({columnCache:O,columnWidth:R,estimatedColumnWidth:T,estimatedRowHeight:T,initScrollLeft:$,initScrollTop:$,itemKey:{type:b(Function),default:({columnIndex:e,rowIndex:a})=>`${a}:${e}`},rowCache:O,rowHeight:R,totalColumn:M,totalRow:M,hScrollbarSize:q,vScrollbarSize:q,scrollbarStartGap:U,scrollbarEndGap:X,role:String,...J}),Z=z({alwaysOn:Boolean,class:String,layout:Y,total:M,ratio:{type:Number,required:!0},clientSize:{type:Number,required:!0},scrollFrom:{type:Number,required:!0},scrollbarSize:q,startGap:U,endGap:X,visible:Boolean}),Ie=(e,a)=>e<a?P:V,Be=e=>e==="ltr"||e===B||e===y,Re=e=>e===B;let S=null;function Te(e=!1){if(S===null||e){const a=document.createElement("div"),l=a.style;l.width="50px",l.height="50px",l.overflow="scroll",l.direction="rtl";const n=document.createElement("div"),r=n.style;return r.width="100px",r.height="100px",a.appendChild(n),document.body.appendChild(a),a.scrollLeft>0?S=Q:(a.scrollLeft=1,S=a.scrollLeft===0?W:_),document.body.removeChild(a),S}return S}const Oe=se({name:"ElVirtualScrollBar",props:Z,emits:["scroll","start-move","stop-move"],setup(e,{emit:a}){const l=c(()=>e.startGap+e.endGap),n=j("virtual-scrollbar"),r=j("scrollbar"),p=k(),u=k();let d=null,f=null;const i=ie({isDragging:!1,traveled:0}),o=c(()=>ue[e.layout]),A=c(()=>e.clientSize-E(l)),ee=c(()=>({position:"absolute",width:`${y===e.layout?A.value:e.scrollbarSize}px`,height:`${y===e.layout?e.scrollbarSize:A.value}px`,[Ee[e.layout]]:"2px",right:"2px",bottom:"2px",borderRadius:"4px"})),L=c(()=>{const t=e.ratio,s=e.clientSize;if(t>=100)return Number.POSITIVE_INFINITY;if(t>=50)return t*s/100;const g=s/3;return Math.floor(Math.min(Math.max(t*s,20),g))}),te=c(()=>{if(!Number.isFinite(L.value))return{display:"none"};const t=`${L.value}px`;return function({move:g,size:N,bar:G},re){const v={},C=`translate${G.axis}(${g}px)`;return v[G.size]=N,v.transform=C,v.msTransform=C,v.webkitTransform=C,re==="horizontal"?v.height="100%":v.width="100%",v}({bar:o.value,size:t,move:i.traveled},e.layout)}),h=c(()=>Math.floor(e.clientSize-L.value-E(l))),D=()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",w),document.onselectstart=f,f=null;const t=E(u);t&&(t.removeEventListener("touchmove",x),t.removeEventListener("touchend",w))},F=t=>{t.stopImmediatePropagation(),t.ctrlKey||[1,2].includes(t.button)||(i.isDragging=!0,i[o.value.axis]=t.currentTarget[o.value.offset]-(t[o.value.client]-t.currentTarget.getBoundingClientRect()[o.value.direction]),a("start-move"),(()=>{window.addEventListener("mousemove",x),window.addEventListener("mouseup",w);const s=E(u);s&&(f=document.onselectstart,document.onselectstart=()=>!1,s.addEventListener("touchmove",x,{passive:!0}),s.addEventListener("touchend",w))})())},w=()=>{i.isDragging=!1,i[o.value.axis]=0,a("stop-move"),D()},x=t=>{const{isDragging:s}=i;if(!s||!u.value||!p.value)return;const g=i[o.value.axis];if(!g)return;me(d);const N=-1*(p.value.getBoundingClientRect()[o.value.direction]-t[o.value.client])-(u.value[o.value.offset]-g);d=pe(()=>{i.traveled=Math.max(e.startGap,Math.min(N,h.value)),a("scroll",N,h.value)})},ae=t=>{const s=Math.abs(t.target.getBoundingClientRect()[o.value.direction]-t[o.value.client])-u.value[o.value.offset]/2;i.traveled=Math.max(0,Math.min(s,h.value)),a("scroll",s,h.value)};return ce(()=>e.scrollFrom,t=>{i.isDragging||(i.traveled=Math.ceil(t*h.value))}),de(()=>{D()}),()=>H("div",{role:"presentation",ref:p,class:[n.b(),e.class,(e.alwaysOn||i.isDragging)&&"always-on"],style:ee.value,onMousedown:ve(ae,["stop","prevent"]),onTouchstartPrevent:F},H("div",{ref:u,class:r.e("thumb"),style:te.value,onMousedown:F},[]))}});export{Se as A,V as B,Ne as C,he as D,ze as E,P as F,y as H,be as I,B as R,ye as S,I as V,_ as a,W as b,Oe as c,Ie as d,Q as e,xe as f,Te as g,we as h,Be as i,Ce as j,Z as k,Re as l,ge as u,Le as v};
