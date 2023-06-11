System.register(["./index-legacy-078dd881.js","./stat-legacy-4ef12946.js"],(function(t,e){"use strict";var a,s,l,n,u,i,r,d,o,v,c,p,f,y,x,m,g,_,b,h,w,C,k,$,j,Y;return{setters:[t=>{a=t.d,s=t.u,l=t.U,n=t.V,u=t.r,i=t.o,r=t.a,d=t.c,o=t.I,v=t.h,c=t.w,p=t.j,f=t.t,y=t.i,x=t.W,m=t.X,g=t.J,_=t.Y,b=t.Z,h=t.k,w=t.$,C=t.a0},t=>{k=t.d,$=t.q,j=t.a,Y=t.b}],execute:function(){const e={class:"p-3 app-block"},D={class:"text-sm text-gray-secondary"},S={class:"flex items-end justify-between mt-1"},V={class:"text-3xl text-primary"},M={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-primary"},P={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},O={class:"p-3 app-block"},z={class:"text-sm text-gray-secondary"},H={class:"flex items-end justify-between mt-1"},T={class:"text-3xl text-primary"},A={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-warning"},I={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},R={class:"p-3 app-block"},L={class:"text-sm text-gray-secondary"},B={class:"flex items-end justify-between mt-1"},E={class:"text-3xl text-primary"},W={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-success"},q={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},F={class:"p-3 app-block"},G={class:"text-sm text-gray-secondary"},J={class:"flex items-end justify-between mt-1"},U={class:"text-3xl text-primary"},X={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-danger"},Z={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},K={class:"px-3 py-5 mt-3 app-block"},N={class:"flex p-3 mt-3 justify-evenly app-block"},Q={class:"h-64 w-60 text-primary"},tt={class:"mt-2 text-center"},et={class:"flex items-center justify-center mt-2"},at={class:"text-3xl"},st={key:0},lt={key:1},nt={class:"mt-4 space-y-2 text-sm"},ut={key:0},it={key:1},rt={key:0},dt={key:1},ot={key:0},vt={key:1},ct={class:"h-64 w-60 text-gray-secondary"},pt={class:"mt-2 text-center"},ft={class:"flex items-center justify-center mt-2"},yt={class:"text-3xl"},xt={key:0},mt={key:1},gt={class:"mt-4 space-y-2 text-sm"},_t={key:0},bt={key:1},ht={key:0},wt={key:1},Ct={key:0},kt={key:1},$t={class:"p-3 mt-3 app-block"};t("default",a({__name:"HomePage",setup(t){const{t:a,n:jt}=s();l.extend(k);const Yt=n(),Dt=n(),St=u({}),Vt=u({}),Mt=u({});return i((async()=>{(async()=>{const t=await $({begin:l().startOf("day").subtract(1,"day").format(),end:l().endOf("day").format()}),e={tooltip:{trigger:"axis"},legend:{data:[a("visitTrend.yesterdayPv"),a("visitTrend.todayPv")]},grid:{left:16,right:16,top:40,bottom:0,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},data:Array.from(Array(24).keys())},yAxis:{type:"value",minInterval:1},series:[{name:a("visitTrend.yesterdayPv"),type:"line",symbol:"circle",color:"#a0cfff",data:t.filter((t=>l(t.date)<l().startOf("day"))).map((t=>t.pvCount))},{name:a("visitTrend.todayPv"),type:"line",symbol:"circle",color:"#409eff",areaStyle:{color:"#ecf5ff"},data:t.filter((t=>l(t.date)>=l().startOf("day"))).map((t=>t.pvCount))}]},s=Yt.value;if(null==s)return;let n=w.getInstanceByDom(s);null==n&&(n=w.init(s)),n.setOption(e),window.addEventListener("resize",(function(){n&&n.resize()}))})(),(async()=>{const t=await j({begin:l().subtract(30,"day").format("YYYY-MM-DD"),end:l().format("YYYY-MM-DD")}),e=t.reduce(((t,e)=>t+e.pvCount),0),s={title:{text:a("menu.stat.visitRegion"),textStyle:{color:"#909399",fontWeight:"normal",fontSize:16}},tooltip:{trigger:"item",valueFormatter:t=>jt(100*t/e,"decimal")+"%"},legend:{type:"scroll",orient:"vertical",right:"10%",top:16,bottom:16},series:[{name:a("menu.stat.visitRegion"),type:"pie",radius:"72%",center:["40%","56%"],data:t.map((t=>({value:t.pvCount,name:t.name})))}]},n=Dt.value;if(null==n)return;let u=w.getInstanceByDom(n);null==u&&(u=w.init(n)),u.setOption(s),window.addEventListener("resize",(function(){u&&u.resize()}))})(),(async()=>{const t=await Y({begin:l().subtract(30,"day").format("YYYY-MM-DD"),end:l().format("YYYY-MM-DD")});St.value=t.newVisitor,Vt.value=t.oldVisitor;const e=St.value.uvCount+Vt.value.uvCount;e>0?(St.value.proportion=100*St.value.uvCount/e,Vt.value.proportion=100*Vt.value.uvCount/e):(St.value.proportion=50,Vt.value.proportion=50)})(),(async()=>{Mt.value=await C()})()})),(t,a)=>{const s=r("el-icon"),n=r("el-col"),u=r("el-row");return d(),o("div",null,[v(u,{gutter:12},{default:c((()=>[v(n,{span:6},{default:c((()=>[p("div",e,[p("div",D,f(t.$t("contentStat.article")),1),p("div",S,[p("div",V,f(Mt.value.article?.total),1),p("div",M,[v(s,null,{default:c((()=>[v(y(x))])),_:1})])]),p("div",P,[p("div",null,f(t.$t("contentStat.last7day")),1),p("div",null,f(Mt.value.article?.last7day),1)])])])),_:1}),v(n,{span:6},{default:c((()=>[p("div",O,[p("div",z,f(t.$t("contentStat.channel")),1),p("div",H,[p("div",T,f(Mt.value.channel?.total),1),p("div",A,[v(s,null,{default:c((()=>[v(y(m))])),_:1})])]),p("div",I,[p("div",null,f(t.$t("contentStat.last7day")),1),p("div",null,f(Mt.value.channel?.last7day),1)])])])),_:1}),v(n,{span:6},{default:c((()=>[p("div",R,[p("div",L,f(t.$t("contentStat.user")),1),p("div",B,[p("div",E,f(Mt.value.user?.total),1),p("div",W,[v(s,null,{default:c((()=>[v(y(g))])),_:1})])]),p("div",q,[p("div",null,f(t.$t("contentStat.last7day")),1),p("div",null,f(Mt.value.user?.last7day),1)])])])),_:1}),v(n,{span:6},{default:c((()=>[p("div",F,[p("div",G,f(t.$t("contentStat.attachment")),1),p("div",J,[p("div",U,f(Mt.value.attachment?.total),1),p("div",X,[v(s,null,{default:c((()=>[v(y(_))])),_:1})])]),p("div",Z,[p("div",null,f(t.$t("contentStat.last7day")),1),p("div",null,f(Mt.value.attachment?.last7day),1)])])])),_:1})])),_:1}),p("div",K,[p("div",{ref_key:"trendChart",ref:Yt,class:"h-64"},null,512)]),v(u,{gutter:12},{default:c((()=>[v(n,{span:12},{default:c((()=>[p("div",N,[p("div",Q,[p("div",tt,f(t.$t("visitVisitor.newVisitor")),1),p("div",et,[v(s,{class:"text-5xl"},{default:c((()=>[v(y(b))])),_:1}),p("span",at,[St.value.uvCount>0?(d(),o("span",st,f(t.$n(St.value.proportion??0,"decimal")),1)):(d(),o("span",lt,"-")),h("% ")])]),p("div",nt,[v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visitVisitor.pv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[h(f(St.value.pvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visitVisitor.uv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[h(f(St.value.uvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.bounceRate")),1)])),_:1}),v(n,{span:12},{default:c((()=>[St.value.uvCount>0?(d(),o("span",ut,f(t.$n(100*St.value.bounceCount/St.value.uvCount,"decimal"))+"%",1)):(d(),o("span",it,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.averageDuration")),1)])),_:1}),v(n,{span:12},{default:c((()=>[St.value.uvCount>0?(d(),o("span",rt,f(y(l).duration(St.value.duration/St.value.uvCount,"seconds").format("HH:mm:ss")),1)):(d(),o("span",dt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.averagePv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[St.value.uvCount>0?(d(),o("span",ot,f(t.$n(St.value.pvCount/St.value.uvCount,"decimal")),1)):(d(),o("span",vt,"-"))])),_:1})])),_:1})])]),p("div",ct,[p("div",pt,f(t.$t("visitVisitor.oldVisitor")),1),p("div",ft,[v(s,{class:"text-5xl"},{default:c((()=>[v(y(b))])),_:1}),p("span",yt,[Vt.value.uvCount>0?(d(),o("span",xt,f(t.$n(Vt.value.proportion??0,"decimal")),1)):(d(),o("span",mt,"-")),h("% ")])]),p("div",gt,[v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visitVisitor.pv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[h(f(Vt.value.pvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visitVisitor.uv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[h(f(Vt.value.uvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.bounceRate")),1)])),_:1}),v(n,{span:12},{default:c((()=>[Vt.value.uvCount>0?(d(),o("span",_t,f(t.$n(100*Vt.value.bounceCount/Vt.value.uvCount,"decimal"))+"%",1)):(d(),o("span",bt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.averageDuration")),1)])),_:1}),v(n,{span:12},{default:c((()=>[St.value.uvCount>0?(d(),o("span",ht,f(y(l).duration(Vt.value.duration/Vt.value.uvCount,"seconds").format("HH:mm:ss")),1)):(d(),o("span",wt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:c((()=>[v(n,{span:12,class:"text-right"},{default:c((()=>[h(f(t.$t("visit.averagePv")),1)])),_:1}),v(n,{span:12},{default:c((()=>[Vt.value.uvCount>0?(d(),o("span",Ct,f(t.$n(Vt.value.pvCount/Vt.value.uvCount,"decimal")),1)):(d(),o("span",kt,"-"))])),_:1})])),_:1})])])])])),_:1}),v(n,{span:12},{default:c((()=>[p("div",$t,[p("div",{ref_key:"provinceChart",ref:Dt,class:"w-full h-64"},null,512)])])),_:1})])),_:1})])}}}))}}}));