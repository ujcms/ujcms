import{d as A,r as V,a as g,c as f,e as q,w as l,i as n,h as e,I as H,a8 as Q,a7 as T,g as W,k as v,t as b,u as X,X as Y,o as G,b as J,j as L,f as K,aD as Z,aI as x,E as ee,cw as le,as as S,a4 as ae,a1 as te}from"./index-07310ff6.js";import{S as ue,T as oe,U as ie,V as F,W as se,X as de,a as re,Y as ne}from"./config-e88c2eae.js";import{a as me,_ as pe,b as be,c as fe}from"./QueryItem.vue_vue_type_script_setup_true_lang-a4f060b2.js";import{_ as ve}from"./ListMove.vue_vue_type_script_setup_true_lang-94f3400b.js";import{_ as ge}from"./DialogForm.vue_vue_type_script_setup_true_lang-84cdaac8.js";import{_ as $e}from"./LabelTip.vue_vue_type_script_setup_true_lang-2883fbbc.js";const ke={name:"BlockForm"},Ve=A({...ke,props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(M){const C=V(),a=V({});return(t,u)=>{const I=g("el-input"),d=g("el-form-item"),r=g("el-col"),_=g("el-radio"),D=g("el-radio-group"),p=g("el-switch"),h=g("el-input-number"),y=g("el-row");return f(),q(ge,{name:t.$t("menu.config.block"),queryBean:n(ue),createBean:n(oe),updateBean:n(ie),deleteBean:n(F),beanId:M.beanId,beanIds:M.beanIds,focus:C.value,initValues:()=>({scope:0,withLinkUrl:!0,linkUrlRequired:!0,withSubtitle:!1,subtitleRequired:!1,withDescription:!1,descriptionRequired:!1,withImage:!1,imageRequired:!1,imageWidth:300,imageHeight:200,withMobileImage:!1,mobileImageRequired:!1,mobileImageWidth:300,mobileImageHeight:200,enabled:!0,recommendable:!0}),toValues:k=>({...k}),perms:"block",values:a.value,"onUpdate:values":u[21]||(u[21]=k=>a.value=k),"model-value":M.modelValue,"onUpdate:modelValue":u[22]||(u[22]=k=>t.$emit("update:modelValue",k)),onFinished:u[23]||(u[23]=k=>t.$emit("finished"))},{default:l(({bean:k})=>[e(y,null,{default:l(()=>[e(r,{span:24},{default:l(()=>[e(d,{prop:"name",label:t.$t("block.name"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(I,{modelValue:a.value.name,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value.name=o),ref_key:"focus",ref:C,maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(d,{prop:"alias",label:t.$t("block.alias"),rules:[{required:!0,message:()=>t.$t("v.required")},{asyncValidator:async(o,B,U)=>{if(B!==k.alias&&await n(se)(B,a.value.scope)){U(t.$t("block.error.aliasExist"));return}U()}}]},{default:l(()=>[e(I,{modelValue:a.value.alias,"onUpdate:modelValue":u[1]||(u[1]=o=>a.value.alias=o),maxlength:"50"},null,8,["modelValue"])]),_:2},1032,["label","rules"])]),_:2},1024),e(r,{span:24},{default:l(()=>[e(d,{prop:"scope",label:t.$t("block.scope"),rules:[{required:!0,message:()=>t.$t("v.required")},{asyncValidator:async(o,B,U)=>{if(B!==k.scope&&await n(de)(a.value.scope)){U(t.$t("block.error.scopeNotAllowd"));return}U()}}]},{default:l(()=>[e(D,{modelValue:a.value.scope,"onUpdate:modelValue":u[2]||(u[2]=o=>a.value.scope=o)},{default:l(()=>[(f(),H(T,null,Q([0,2],o=>e(_,{key:o,label:o},{default:l(()=>[v(b(t.$t(`block.scope.${o}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:2},1032,["label","rules"])]),_:2},1024),e(r,{span:12},{default:l(()=>[e(d,{prop:"withLinkUrl",label:t.$t("block.withLinkUrl"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withLinkUrl,"onUpdate:modelValue":u[3]||(u[3]=o=>a.value.withLinkUrl=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"linkUrlRequired",label:t.$t("block.linkUrlRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.linkUrlRequired,"onUpdate:modelValue":u[4]||(u[4]=o=>a.value.linkUrlRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withSubtitle",label:t.$t("block.withSubtitle"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withSubtitle,"onUpdate:modelValue":u[5]||(u[5]=o=>a.value.withSubtitle=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"subtitleRequired",label:t.$t("block.subtitleRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.subtitleRequired,"onUpdate:modelValue":u[6]||(u[6]=o=>a.value.subtitleRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withDescription",label:t.$t("block.withDescription"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withDescription,"onUpdate:modelValue":u[7]||(u[7]=o=>a.value.withDescription=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"descriptionRequired",label:t.$t("block.descriptionRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.descriptionRequired,"onUpdate:modelValue":u[8]||(u[8]=o=>a.value.descriptionRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withImage",label:t.$t("block.withImage"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withImage,"onUpdate:modelValue":u[9]||(u[9]=o=>a.value.withImage=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"imageRequired",label:t.$t("block.imageRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.imageRequired,"onUpdate:modelValue":u[10]||(u[10]=o=>a.value.imageRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),a.value.withImage?(f(),q(r,{key:0,span:12},{default:l(()=>[e(d,{prop:"imageWidth",label:t.$t("block.imageWidth"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(h,{modelValue:a.value.imageWidth,"onUpdate:modelValue":u[11]||(u[11]=o=>a.value.imageWidth=o),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):W("",!0),a.value.withImage?(f(),q(r,{key:1,span:12},{default:l(()=>[e(d,{prop:"imageHeight",label:t.$t("block.imageHeight"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(h,{modelValue:a.value.imageHeight,"onUpdate:modelValue":u[12]||(u[12]=o=>a.value.imageHeight=o),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):W("",!0),e(r,{span:12},{default:l(()=>[e(d,{prop:"withMobileImage",label:t.$t("block.withMobileImage"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withMobileImage,"onUpdate:modelValue":u[13]||(u[13]=o=>a.value.withMobileImage=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"mobileImageRequired",label:t.$t("block.mobileImageRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.mobileImageRequired,"onUpdate:modelValue":u[14]||(u[14]=o=>a.value.mobileImageRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),a.value.withMobileImage?(f(),q(r,{key:2,span:12},{default:l(()=>[e(d,{prop:"mobileImageWidth",label:t.$t("block.mobileImageWidth"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(h,{modelValue:a.value.mobileImageWidth,"onUpdate:modelValue":u[15]||(u[15]=o=>a.value.mobileImageWidth=o),min:16,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):W("",!0),a.value.withMobileImage?(f(),q(r,{key:3,span:12},{default:l(()=>[e(d,{prop:"mobileImageHeight",label:t.$t("block.mobileImageHeight"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(h,{modelValue:a.value.mobileImageHeight,"onUpdate:modelValue":u[16]||(u[16]=o=>a.value.mobileImageHeight=o),min:16,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):W("",!0),e(r,{span:12},{default:l(()=>[e(d,{prop:"withVideo",label:t.$t("block.withVideo"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.withVideo,"onUpdate:modelValue":u[17]||(u[17]=o=>a.value.withVideo=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"videoRequired",label:t.$t("block.videoRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.videoRequired,"onUpdate:modelValue":u[18]||(u[18]=o=>a.value.videoRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"enabled",label:t.$t("block.enabled"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(p,{modelValue:a.value.enabled,"onUpdate:modelValue":u[19]||(u[19]=o=>a.value.enabled=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"recommendable",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e($e,{message:"block.recommendable"})]),default:l(()=>[e(p,{modelValue:a.value.recommendable,"onUpdate:modelValue":u[20]||(u[20]=o=>a.value.recommendable=o)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:2},1024)]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","values","model-value"])}}}),qe={class:"mb-3"},ye={class:"app-block mt-3"},ce={key:1},we={key:1},Ie={name:"BlockList"},Se=A({...Ie,setup(M){const{t:C}=X(),a=V({}),t=V(),u=V(),I=V([]),d=V([]),r=V(!1),_=V(!1),D=V(),p=Y(()=>I.value.map(s=>s.id)),h=V(!1),y=async()=>{r.value=!0;try{I.value=await re({...Z(a.value),Q_OrderBy:t.value}),h.value=Object.values(a.value).filter(s=>s!==void 0&&s!=="").length>0||t.value!==void 0}finally{r.value=!1}};G(y);const k=({column:s,prop:m,order:c})=>{var R;m?t.value=((R=s.sortBy)!=null?R:m)+(c==="descending"?"_desc":""):t.value=void 0,y()},o=()=>y(),B=()=>{u.value.clearSort(),x(a.value),t.value=void 0,y()},U=()=>{D.value=void 0,_.value=!0},E=s=>{D.value=s,_.value=!0},N=async s=>{await F(s),y(),ee.success(C("success"))},O=async(s,m)=>{const c=le(s,I.value,m);await ne(c.map(R=>R.id))};return(s,m)=>{const c=g("el-button"),R=g("el-popconfirm"),$=g("el-table-column"),w=g("el-tag"),j=g("el-table"),P=J("loading");return f(),H("div",null,[L("div",qe,[e(n(pe),{params:a.value,onSearch:o,onReset:B},{default:l(()=>[e(n(me),{label:s.$t("block.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),L("div",null,[e(c,{type:"primary",disabled:n(S)("block:create"),icon:n(ae),onClick:m[0]||(m[0]=i=>U())},{default:l(()=>[v(b(s.$t("add")),1)]),_:1},8,["disabled","icon"]),e(R,{title:s.$t("confirmDelete"),onConfirm:m[1]||(m[1]=i=>N(d.value.map(z=>z.id)))},{reference:l(()=>[e(c,{disabled:d.value.length<=0||n(S)("block:delete"),icon:n(te)},{default:l(()=>[v(b(s.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(ve,{disabled:d.value.length<=0||h.value||n(S)("org:update"),onMove:m[2]||(m[2]=i=>O(d.value,i)),class:"ml-2"},null,8,["disabled"]),e(n(be),{name:"block",class:"ml-2"})]),L("div",ye,[K((f(),q(j,{ref_key:"table",ref:u,data:I.value,onSelectionChange:m[3]||(m[3]=i=>d.value=i),onRowDblclick:m[4]||(m[4]=i=>E(i.id)),onSortChange:k},{default:l(()=>[e(n(fe),{name:"block"},{default:l(()=>[e($,{type:"selection",width:"45"}),e($,{property:"id",label:"ID",width:"64",sortable:"custom"}),e($,{property:"name",label:s.$t("block.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e($,{property:"alias",label:s.$t("block.alias"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e($,{property:"scope",label:s.$t("block.scope"),sortable:"custom",formatter:i=>s.$t(`block.scope.${i.scope}`)},{default:l(({row:i})=>[i.scope===2?(f(),q(w,{key:0,type:"success",size:"small"},{default:l(()=>[v(b(s.$t(`block.scope.${i.scope}`)),1)]),_:2},1024)):(f(),q(w,{key:1,type:"info",size:"small"},{default:l(()=>[v(b(s.$t(`block.scope.${i.scope}`)),1)]),_:2},1024))]),_:1},8,["label","formatter"]),e($,{property:"withSubtitle",label:s.$t("block.withSubtitle"),sortable:"custom",display:"none"},{default:l(({row:i})=>[e(w,{type:i.withSubtitle?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.withSubtitle?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"withDescription",label:s.$t("block.withDescription"),display:"none",sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.withDescription?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.withDescription?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"withImage",label:s.$t("block.withImage"),sortable:"custom"},{default:l(({row:i})=>[i.withImage?(f(),H("span",ce,b(`${i.imageWidth} * ${i.imageHeight}`),1)):(f(),q(w,{key:0,type:i.withImage?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.withImage?"yes":"no")),1)]),_:2},1032,["type"]))]),_:1},8,["label"]),e($,{property:"withMobileImage",label:s.$t("block.withMobileImage"),sortable:"custom","min-width":"120",display:"none"},{default:l(({row:i})=>[i.withMobileImage?(f(),H("span",we,b(`${i.mobileImageWidth} * ${i.mobileImageHeight}`),1)):(f(),q(w,{key:0,type:i.withMobileImage?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.withMobileImage?"yes":"no")),1)]),_:2},1032,["type"]))]),_:1},8,["label"]),e($,{property:"recommendable",label:s.$t("block.recommendable"),sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.recommendable?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.recommendable?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"enabled",label:s.$t("block.enabled"),sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.enabled?"success":"info",size:"small"},{default:l(()=>[v(b(s.$t(i.enabled?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{label:s.$t("table.action")},{default:l(({row:i})=>[e(c,{type:"primary",disabled:n(S)("block:update"),onClick:z=>E(i.id),size:"small",link:""},{default:l(()=>[v(b(s.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(R,{title:s.$t("confirmDelete"),onConfirm:z=>N([i.id])},{reference:l(()=>[e(c,{type:"primary",disabled:n(S)("block:delete"),size:"small",link:""},{default:l(()=>[v(b(s.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[P,r.value]])]),e(Ve,{modelValue:_.value,"onUpdate:modelValue":m[5]||(m[5]=i=>_.value=i),beanId:D.value,beanIds:n(p),onFinished:y},null,8,["modelValue","beanId","beanIds"])])}}});export{Se as default};
