import{d as R,u as T,r as s,o as U,a as u,b as F,c as v,I as $,j as S,h as a,w as o,i as r,f as Q,e as q,aB as G,aH as O,E as J,ao as B,a7 as K,k as m,t as d,U as W,ac as X,ad as Z,aF as x,aG as ee}from"./index-0188cf50.js";import{c as te,d as ae}from"./system-1d083a1c.js";import{a as le,_ as oe,b as ne,c as se}from"./QueryItem.vue_vue_type_script_setup_true_lang-0e6ad83a.js";const re={class:"mb-3"},ie={class:"app-block mt-3"},ue={name:"AttachmentList"},fe=R({...ue,setup(de){const{t:P}=T(),h=s({}),p=s(),g=s(1),y=s(10),z=s(0),C=s(),D=s([]),_=s([]),w=s(!1),I=s(!1),E=s(),i=async()=>{w.value=!0;try{const{content:e,totalElements:l}=await te({...G(h.value),Q_OrderBy:p.value,page:g.value,pageSize:y.value});D.value=e,z.value=l}finally{w.value=!1}};U(i);const L=({column:e,prop:l,order:f})=>{var c;l?p.value=((c=e.sortBy)!=null?c:l)+(f==="descending"?"_desc":""):p.value=void 0,i()},M=()=>i(),V=()=>{C.value.clearSort(),O(h.value),p.value=void 0,i()},Y=e=>{E.value=e,I.value=!0},k=async e=>{await ae(e),i(),J.success(P("success"))};return(e,l)=>{const f=u("el-button"),c=u("el-popconfirm"),n=u("el-table-column"),j=u("el-tag"),A=u("el-table"),H=u("el-pagination"),N=F("loading");return v(),$("div",null,[S("div",re,[a(r(oe),{params:h.value,onSearch:M,onReset:V},{default:o(()=>[a(r(le),{label:e.$t("attachment.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),S("div",null,[a(c,{title:e.$t("confirmDelete"),onConfirm:l[0]||(l[0]=()=>k(_.value.map(t=>t.id)))},{reference:o(()=>[a(f,{disabled:_.value.length<=0||r(B)("attachment:delete"),icon:r(K)},{default:o(()=>[m(d(e.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),a(r(ne),{name:"attachment",class:"ml-2"})]),S("div",ie,[Q((v(),q(A,{ref_key:"table",ref:C,data:D.value,onSelectionChange:l[1]||(l[1]=t=>_.value=t),onRowDblclick:l[2]||(l[2]=t=>Y(t.id)),onSortChange:L},{default:o(()=>[a(r(se),{name:"attachment"},{default:o(()=>[a(n,{type:"selection",selectable:t=>!t.used,width:"45"},null,8,["selectable"]),a(n,{property:"id",label:"ID",width:"64",sortable:"custom"}),a(n,{property:"name",label:e.$t("attachment.name"),sortable:"custom","min-width":"130","show-overflow-tooltip":""},null,8,["label"]),a(n,{property:"path",label:e.$t("attachment.path"),sortable:"custom","min-width":"200",display:"none","show-overflow-tooltip":""},null,8,["label"]),a(n,{property:"url",label:e.$t("attachment.url"),sortable:"custom","min-width":"350",display:"none","show-overflow-tooltip":""},null,8,["label"]),a(n,{property:"length",label:e.$t("attachment.length"),sortable:"custom",align:"right","show-overflow-tooltip":""},{default:o(({row:t})=>[m(d(t.size),1)]),_:1},8,["label"]),a(n,{property:"created",label:e.$t("attachment.created"),sortable:"custom","min-width":"120","show-overflow-tooltip":""},{default:o(({row:t})=>[m(d(r(W)(t.created).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label"]),a(n,{property:"user.username",label:e.$t("attachment.user"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),a(n,{label:e.$t("attachment.refer"),"show-overflow-tooltip":""},{default:o(({row:t})=>[(v(!0),$(X,null,Z(t.referList,b=>(v(),$("div",{key:`${b.referType}-${b.referId}`},d(`${b.referType}-${b.referId}`),1))),128))]),_:1},8,["label"]),a(n,{property:"used",label:e.$t("attachment.used"),sortable:"custom","show-overflow-tooltip":""},{default:o(({row:t})=>[a(j,{type:t.used?"success":"info",size:"small"},{default:o(()=>[m(d(e.$t(t.used?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),a(n,{label:e.$t("table.action")},{default:o(({row:t})=>[a(c,{title:e.$t("confirmDelete"),onConfirm:()=>k([t.id])},{reference:o(()=>[a(f,{type:"primary",disabled:t.used||r(B)("attachment:delete"),size:"small",link:""},{default:o(()=>[m(d(e.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[N,w.value]]),a(H,{currentPage:g.value,"onUpdate:currentPage":l[3]||(l[3]=t=>g.value=t),pageSize:y.value,"onUpdate:pageSize":l[4]||(l[4]=t=>y.value=t),total:z.value,"page-sizes":r(x),layout:r(ee),small:"",background:"",class:"px-3 py-2 justify-end",onSizeChange:l[5]||(l[5]=()=>i()),onCurrentChange:l[6]||(l[6]=()=>i())},null,8,["currentPage","pageSize","total","page-sizes","layout"])])])}}});export{fe as default};