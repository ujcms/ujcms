import{d as h,u as w,r as C,V as x,o as O,b as y,e as p,I as f,k as d,i as m,w as v,af as V,ag as k,l as B,t as D,a0 as g,U as n}from"./index-3561018d.js";import{q as T}from"./stat-619ff814.js";const I={class:"p-3 mt-3 app-block"},N=h({__name:"VisitTrend",setup(R){const{t:s}=w(),l=C("last30day"),b=e=>{switch(e){case"now":return n().subtract(2,"hour").format();case"today":return n().startOf("day").format();case"yesterday":return n().startOf("day").subtract(1,"day").format();case"last7day":return n().startOf("day").subtract(6,"day").format();case"last30day":return n().startOf("day").subtract(29,"day").format();case"lastYear":return n().startOf("day").subtract(1,"year").format();default:return}},_=e=>e==="now"?n().format():e==="yesterday"?n().endOf("day").subtract(1,"day").format():n().endOf("day").format(),u=x(),c=async e=>{const a=await T({begin:b(e),end:_(e)}),i={tooltip:{trigger:"axis"},legend:{data:[s("visit.pv"),s("visit.uv"),s("visit.ip")]},grid:{left:16,right:24,top:40,bottom:8,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},data:a.map(r=>r.dateString)},yAxis:{type:"value",minInterval:1},series:[{name:s("visit.pv"),type:"line",symbol:a.length>30?"none":"circle",data:a.map(r=>r.pvCount)},{name:s("visit.uv"),type:"line",symbol:a.length>30?"none":"circle",data:a.map(r=>r.uvCount)},{name:s("visit.ip"),type:"line",symbol:a.length>30?"none":"circle",data:a.map(r=>r.ipCount)}]},o=u.value;if(o==null)return;let t=g.getInstanceByDom(o);t==null&&(t=g.init(o)),t.setOption(i),window.addEventListener("resize",function(){t&&t.resize()})};return O(async()=>{c(l.value)}),(e,a)=>{const i=y("el-radio-button"),o=y("el-radio-group");return p(),f("div",null,[d("div",I,[d("div",null,[m(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),onChange:a[1]||(a[1]=t=>c(t))},{default:v(()=>[(p(),f(V,null,k(["now","today","yesterday","last7day","last30day","lastYear","all"],t=>m(i,{key:t,label:t},{default:v(()=>[B(D(e.$t(`visit.${t}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),d("div",{ref_key:"trendChart",ref:u,class:"h-80"},null,512)])])}}});export{N as default};