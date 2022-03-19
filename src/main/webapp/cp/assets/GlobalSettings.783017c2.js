import{g as O,u as z,D as p,i as Q,L as R,j as f,w as l,m as i,ai as X,o as g,n as e,q as w,A as T,F as k,aj as Y,k as M,x as Z,I as ee,J as le,y as ae,K as te}from"./vendor.831f9fe0.js";import{_ as ue,B as q,t as oe,C as se,p as ne}from"./index.e8481b3d.js";import{h as de,q as ie,j as re,k as me,l as pe}from"./config.925db2c2.js";import{_ as d}from"./LabelTip.0c3431b1.js";import{F as ge}from"./FieldItem.0d64a63b.js";import"./BaseUpload.342fe01c.js";const ve=O({setup(fe){const{t:C}=z(),U=p(),V=p({}),t=p({}),b=p(!1),y=p(!1),L=p([]),S=p(),G=Q(()=>{var o;return JSON.parse(((o=S.value)==null?void 0:o.customs)||"[]")}),_=[];q("globalSettings:base:update")&&_.push("base"),q("globalSettings:upload:update")&&_.push("upload"),q("globalSettings:customs:update")&&_.push("customs");const r=p(_[0]),x=o=>{o==="upload"?t.value=V.value.upload:o==="customs"?t.value=V.value.customs:t.value=V.value},h=async()=>{S.value=await de()},$=async()=>{V.value=await ie(),x(r.value)},I=async()=>{L.value=oe(await se())};R(async()=>{b.value=!0;try{await Promise.all([$(),h(),I()])}finally{b.value=!1}});const P=async()=>{b.value=!0;try{await $()}finally{b.value=!1}},B=()=>{U.value.validate(async o=>{if(!!o){y.value=!0;try{r.value==="upload"?await re(t.value):r.value==="customs"?await me(t.value):await pe(t.value),te.success(C("success"))}finally{y.value=!1}P()}})};return(o,u)=>{const D=i("el-tab-pane"),F=i("el-tabs"),H=i("el-aside"),m=i("el-input"),s=i("el-form-item"),n=i("el-col"),v=i("el-input-number"),c=i("el-row"),W=i("el-cascader"),j=i("el-button"),N=i("el-form"),E=i("el-main"),J=i("el-container"),A=X("loading");return g(),f(J,null,{default:l(()=>[e(H,{width:"180px",class:"pr-3"},{default:l(()=>[e(F,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=a=>r.value=a),onTabClick:u[1]||(u[1]=({paneName:a})=>x(a)),"tab-position":"left",stretch:"",class:"bg-white"},{default:l(()=>[(g(),w(k,null,T(_,a=>e(D,{key:a,name:a,label:o.$t(`global.settings.${a}`)},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),_:1}),e(E,{class:"p-3 app-block"},{default:l(()=>[Y((g(),f(N,{ref_key:"form",ref:U,model:t.value,"label-width":"150px"},{default:l(()=>[r.value==="upload"?(g(),f(c,{key:0},{default:l(()=>[e(n,{span:12},{default:l(()=>[e(s,{prop:"imageTypes",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.imageTypes"})]),default:l(()=>[e(m,{modelValue:t.value.imageTypes,"onUpdate:modelValue":u[2]||(u[2]=a=>t.value.imageTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"imageLimit",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.imageLimit"})]),default:l(()=>[e(v,{modelValue:t.value.imageLimit,"onUpdate:modelValue":u[3]||(u[3]=a=>t.value.imageLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"videoTypes",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.videoTypes"})]),default:l(()=>[e(m,{modelValue:t.value.videoTypes,"onUpdate:modelValue":u[4]||(u[4]=a=>t.value.videoTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"videoLimit",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.videoLimit"})]),default:l(()=>[e(v,{modelValue:t.value.videoLimit,"onUpdate:modelValue":u[5]||(u[5]=a=>t.value.videoLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"docTypes",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.docTypes"})]),default:l(()=>[e(m,{modelValue:t.value.docTypes,"onUpdate:modelValue":u[6]||(u[6]=a=>t.value.docTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"docLimit",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.docLimit"})]),default:l(()=>[e(v,{modelValue:t.value.docLimit,"onUpdate:modelValue":u[7]||(u[7]=a=>t.value.docLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"fileTypes",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.fileTypes"})]),default:l(()=>[e(m,{modelValue:t.value.fileTypes,"onUpdate:modelValue":u[8]||(u[8]=a=>t.value.fileTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"fileLimit",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.fileLimit"})]),default:l(()=>[e(v,{modelValue:t.value.fileLimit,"onUpdate:modelValue":u[9]||(u[9]=a=>t.value.fileLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"imageMaxWidth",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.imageMaxWidth"})]),default:l(()=>[e(v,{modelValue:t.value.imageMaxWidth,"onUpdate:modelValue":u[10]||(u[10]=a=>t.value.imageMaxWidth=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"imageMaxHeight",rules:{required:!0,message:()=>o.$t("v.required")}},{label:l(()=>[e(d,{message:"global.upload.imageMaxHeight"})]),default:l(()=>[e(v,{modelValue:t.value.imageMaxHeight,"onUpdate:modelValue":u[11]||(u[11]=a=>t.value.imageMaxHeight=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})):r.value==="customs"?(g(),f(c,{key:1},{default:l(()=>[(g(!0),w(k,null,T(M(G),a=>(g(),f(n,{key:a.code,span:a.double?12:24},{default:l(()=>[e(s,{prop:a.code,label:a.name,rules:a.required?{required:!0,message:()=>o.$t("v.required")}:void 0},{default:l(()=>[e(ge,{field:a,modelValue:t.value[a.code],"onUpdate:modelValue":K=>t.value[a.code]=K},null,8,["field","modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","label","rules"])]),_:2},1032,["span"]))),128))]),_:1})):(g(),f(c,{key:2},{default:l(()=>[e(n,{span:12},{default:l(()=>[e(s,{prop:"port",rules:{type:"number",min:0,max:65535,message:()=>o.$t("v.range",{min:0,max:65535})}},{label:l(()=>[e(d,{message:"global.port"})]),default:l(()=>[e(m,{modelValue:t.value.port,"onUpdate:modelValue":u[12]||(u[12]=a=>t.value.port=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"contextPath"},{label:l(()=>[e(d,{message:"global.contextPath"})]),default:l(()=>[e(m,{modelValue:t.value.contextPath,"onUpdate:modelValue":u[13]||(u[13]=a=>t.value.contextPath=a),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"channelUrl",rules:{pattern:/^\/[\w-]+$/,message:()=>o.$t("global.error.channelUrlPattern")}},{label:l(()=>[e(d,{message:"global.channelUrl"})]),default:l(()=>[e(m,{modelValue:t.value.channelUrl,"onUpdate:modelValue":u[14]||(u[14]=a=>t.value.channelUrl=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"articleUrl"},{label:l(()=>[e(d,{message:"global.articleUrl"})]),default:l(()=>[e(m,{modelValue:t.value.articleUrl,"onUpdate:modelValue":u[15]||(u[15]=a=>t.value.articleUrl=a),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:l(()=>[e(s,{prop:"defaultSiteId",label:o.$t("global.defaultSite")},{default:l(()=>[e(W,{modelValue:t.value.defaultSiteId,"onUpdate:modelValue":u[16]||(u[16]=a=>t.value.defaultSiteId=a),options:L.value,props:{value:"id",label:"name",checkStrictly:!0},onChange:u[17]||(u[17]=a=>t.value.defaultSiteId=a==null?void 0:a[a.length-1]),class:"w-full"},null,8,["modelValue","options"])]),_:1},8,["label"])]),_:1})]),_:1})),Z("div",null,[e(j,{disabled:M(ne)(`globalSettings:${r.value}:update`),loading:y.value,onClick:ee(B,["prevent"]),type:"primary","native-type":"submit"},{default:l(()=>[le(ae(o.$t("submit")),1)]),_:1},8,["disabled","loading","onClick"])])]),_:1},8,["model"])),[[A,b.value]])]),_:1})]),_:1})}}});var Ue=ue(ve,[["__scopeId","data-v-4c1400c5"]]);export{Ue as default};
