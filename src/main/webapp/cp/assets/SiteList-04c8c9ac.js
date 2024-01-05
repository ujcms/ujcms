import{d as ae,p as ne,r as v,a5 as te,v as de,o as oe,b as p,e as i,f as c,w as l,j as m,i as e,ar as b,h as D,I as L,ag as O,l as k,t as w,af as M,u as re,c as ie,k as x,g as me,av as pe,aC as ve,E as fe,aF as be,am as R,ad as ce,aa as ye,a2 as ge}from"./index-8830bcc4.js";import{t as W,b as Ve,f as le}from"./tree-a45d03ff.js";import{k as _e,b as ee,l as $e,m as he,n as ke,o as se,p as we}from"./system-993d1b31.js";import{a as Ie,_ as De,b as qe,c as Se}from"./QueryItem.vue_vue_type_script_setup_true_lang-ecc32bb5.js";import{_ as Ce}from"./ListMove.vue_vue_type_script_setup_true_lang-71d2fb31.js";import{q as Ue}from"./config-9acdf762.js";import{q as Te}from"./user-c2635af3.js";import{_ as Fe}from"./DialogForm.vue_vue_type_script_setup_true_lang-981063b0.js";import{a as Le}from"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-452162eb.js";import"./vuedraggable.umd-82b677e0.js";/* empty css                                                                   */import"./sortable.esm-c0d7cc14.js";const ze={name:"SiteForm"},Be=ae({...ze,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0},parentId:{type:Number,default:null},showGlobalData:{type:Boolean,required:!0}},emits:{"update:modelValue":null,finished:null},setup(q,{emit:H}){const z=q,{showGlobalData:g,modelValue:B}=ne(z),V=v(),o=v({}),U=v([]),T=te(()=>Ve(U.value,o.value.id)),S=v([]),N=v([]),_=v([]),P=v([]),C=async()=>{U.value=W(await ee({current:!g.value}))},$=async()=>{S.value=W(await ee({currentOrg:!g.value}))},J=async d=>{_.value=d.id?await _e(d.id):[]},X=async()=>{await C(),H("finished")},A=async()=>{N.value=W(await Te({current:!g.value}))},E=async()=>{P.value=await Ue({type:"site"})};return de(B,()=>{B.value&&($(),C(),A())}),oe(()=>{A(),E()}),(d,u)=>{const K=p("el-tree-select"),t=p("el-form-item"),s=p("el-col"),y=p("el-checkbox"),I=p("el-checkbox-group"),h=p("el-input"),f=p("el-option"),F=p("el-select"),Y=p("el-input-number"),Z=p("el-radio"),n=p("el-radio-group"),ue=p("el-row");return i(),c(Fe,{values:o.value,"onUpdate:values":u[17]||(u[17]=r=>o.value=r),name:d.$t("menu.system.site"),"query-bean":m($e),"create-bean":m(he),"update-bean":m(ke),"delete-bean":m(se),"bean-id":q.beanId,"bean-ids":q.beanIds,focus:V.value,"init-values":r=>{var j,a,G,Q;return{status:0,pageSize:20,protocol:"http",copyData:["template","model"],theme:_.value[0],mobileTheme:_.value[0],copyFromId:(j=S.value[0])==null?void 0:j.id,parentId:(r==null?void 0:r.id)!==q.parentId&&(a=r==null?void 0:r.parentId)!=null?a:q.parentId,orgId:(Q=r==null?void 0:r.orgId)!=null?Q:(G=N.value[0])==null?void 0:G.id}},"to-values":r=>({...r}),perms:"site","model-value":q.modelValue,large:"","onUpdate:modelValue":u[18]||(u[18]=r=>d.$emit("update:modelValue",r)),onFinished:X,onBeanChange:J},{default:l(({isEdit:r})=>[e(ue,null,{default:l(()=>{var j;return[r?D("",!0):(i(),c(s,{key:0,span:12},{default:l(()=>[e(t,{prop:"copyFromId",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.copyFrom",help:""})]),default:l(()=>[e(K,{modelValue:o.value.copyFromId,"onUpdate:modelValue":u[0]||(u[0]=a=>o.value.copyFromId=a),data:S.value,"node-key":"id","default-expanded-keys":S.value.map(a=>a.id),props:{label:"name"},"render-after-expand":!1,"check-strictly":"",class:"w-full"},null,8,["modelValue","data","default-expanded-keys"])]),_:1},8,["rules"])]),_:1})),r?D("",!0):(i(),c(s,{key:1,span:12},{default:l(()=>[e(t,{prop:"copyData"},{label:l(()=>[e(b,{message:"site.copyData",help:""})]),default:l(()=>[e(I,{modelValue:o.value.copyData,"onUpdate:modelValue":u[1]||(u[1]=a=>o.value.copyData=a)},{default:l(()=>[(i(),L(M,null,O(["template","model","channel"],(a,G)=>e(y,{key:a,label:a,onChange:Q=>o.value.copyData=["template","model","channel"].slice(0,Q?G+1:G)},{default:l(()=>[k(w(d.$t("site.copyData."+a)),1)]),_:2},1032,["label","onChange"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})),!r||m(g)||o.value.id!==((j=U.value[0])==null?void 0:j.id)?(i(),c(s,{key:2,span:24},{default:l(()=>[e(t,{prop:"parentId",label:d.$t("site.parent")},{default:l(()=>[e(K,{modelValue:o.value.parentId,"onUpdate:modelValue":u[2]||(u[2]=a=>o.value.parentId=a),data:T.value,"node-key":"id","default-expanded-keys":T.value.map(a=>a.id),props:{label:"name",disabled:"disabled"},"render-after-expand":!1,"check-strictly":"",clearable:m(g),class:"w-full"},null,8,["modelValue","data","default-expanded-keys","clearable"])]),_:1},8,["label"])]),_:1})):D("",!0),e(s,{span:12},{default:l(()=>[e(t,{prop:"name",label:d.$t("site.name"),rules:{required:!0,message:()=>d.$t("v.required")}},{default:l(()=>[e(h,{ref_key:"focus",ref:V,modelValue:o.value.name,"onUpdate:modelValue":u[3]||(u[3]=a=>o.value.name=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"protocol",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.protocol",help:""})]),default:l(()=>[e(F,{modelValue:o.value.protocol,"onUpdate:modelValue":u[4]||(u[4]=a=>o.value.protocol=a),class:"w-full"},{default:l(()=>[(i(),L(M,null,O(["http","https"],a=>e(f,{key:a,label:a,value:a},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"domain",rules:[{required:!0,message:()=>d.$t("v.required")},{pattern:/^[a-z0-9-.]*$/,message:()=>d.$t("site.error.domainPattern")},{pattern:/^(?!(uploads|templates|WEB-INF|cp)$).*/i,message:()=>d.$t("site.error.excludesPattern")}]},{label:l(()=>[e(b,{message:"site.domain",help:""})]),default:l(()=>[e(h,{modelValue:o.value.domain,"onUpdate:modelValue":u[5]||(u[5]=a=>o.value.domain=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"subDir",rules:[{pattern:/^[\w-]*$/,message:()=>d.$t("site.error.subDirPattern")},{pattern:/^(?!(uploads|templates|WEB-INF|cp)$).*/i,message:()=>d.$t("site.error.excludesPattern")}]},{label:l(()=>[e(b,{message:"site.subDir",help:""})]),default:l(()=>[e(h,{modelValue:o.value.subDir,"onUpdate:modelValue":u[6]||(u[6]=a=>o.value.subDir=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"orgId",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.org",help:""})]),default:l(()=>[e(K,{modelValue:o.value.orgId,"onUpdate:modelValue":u[7]||(u[7]=a=>o.value.orgId=a),data:N.value,"node-key":"id","default-expanded-keys":N.value.map(a=>a.id),props:{label:"name"},"render-after-expand":!1,"check-strictly":"",class:"w-full"},null,8,["modelValue","data","default-expanded-keys"])]),_:1},8,["rules"])]),_:1}),r?(i(),c(s,{key:3,span:12},{default:l(()=>[e(t,{prop:"modelId",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.model",help:""})]),default:l(()=>[e(F,{modelValue:o.value.modelId,"onUpdate:modelValue":u[8]||(u[8]=a=>o.value.modelId=a),class:"w-full"},{default:l(()=>[(i(!0),L(M,null,O(P.value,a=>(i(),c(f,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1})):D("",!0),r?(i(),c(s,{key:4,span:12},{default:l(()=>[e(t,{prop:"theme",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.theme",help:""})]),default:l(()=>[e(F,{modelValue:o.value.theme,"onUpdate:modelValue":u[9]||(u[9]=a=>o.value.theme=a),class:"w-full"},{default:l(()=>[(i(!0),L(M,null,O(_.value,a=>(i(),c(f,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1})):D("",!0),r?(i(),c(s,{key:5,span:12},{default:l(()=>[e(t,{prop:"mobileTheme",rules:{required:!0,message:()=>d.$t("v.required")}},{label:l(()=>[e(b,{message:"site.mobileTheme",help:""})]),default:l(()=>[e(F,{modelValue:o.value.mobileTheme,"onUpdate:modelValue":u[10]||(u[10]=a=>o.value.mobileTheme=a),class:"w-full"},{default:l(()=>[(i(!0),L(M,null,O(_.value,a=>(i(),c(f,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1})):D("",!0),e(s,{span:24},{default:l(()=>[e(t,{prop:"logo"},{label:l(()=>[e(b,{message:"site.logo",help:""})]),default:l(()=>[e(m(Le),{modelValue:o.value.logo,"onUpdate:modelValue":u[11]||(u[11]=a=>o.value.logo=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"seoTitle"},{label:l(()=>[e(b,{message:"site.seoTitle",help:""})]),default:l(()=>[e(h,{modelValue:o.value.seoTitle,"onUpdate:modelValue":u[12]||(u[12]=a=>o.value.seoTitle=a),maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"seoKeywords"},{label:l(()=>[e(b,{message:"site.seoKeywords",help:""})]),default:l(()=>[e(h,{modelValue:o.value.seoKeywords,"onUpdate:modelValue":u[13]||(u[13]=a=>o.value.seoKeywords=a),maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:24},{default:l(()=>[e(t,{prop:"seoDescription"},{label:l(()=>[e(b,{message:"site.seoDescription",help:""})]),default:l(()=>[e(h,{modelValue:o.value.seoDescription,"onUpdate:modelValue":u[14]||(u[14]=a=>o.value.seoDescription=a),type:"textarea",rows:3,maxlength:"1000"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"pageSize"},{label:l(()=>[e(b,{message:"site.pageSize",help:""})]),default:l(()=>[e(Y,{modelValue:o.value.pageSize,"onUpdate:modelValue":u[15]||(u[15]=a=>o.value.pageSize=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(t,{prop:"status"},{label:l(()=>[e(b,{message:"site.status",help:""})]),default:l(()=>[e(n,{modelValue:o.value.status,"onUpdate:modelValue":u[16]||(u[16]=a=>o.value.status=a)},{default:l(()=>[(i(),L(M,null,O([0,1],a=>e(Z,{key:a,label:a},{default:l(()=>[k(w(d.$t(`site.status.${a}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]}),_:2},1024)]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value"])}}}),Ne={class:"mb-3"},Pe={class:"mt-3 app-block"},Oe={name:"SiteList"},Ye=ae({...Oe,setup(q){const{t:H}=re(),z=v({}),g=v(),B=v(),V=v([]),o=v([]),U=v(!1),T=v(!1),S=v(),N=te(()=>le(V.value).map(t=>t.id)),_=v(!1),P=v(),C=v(!1),$=async()=>{var t;U.value=!0;try{V.value=await ee({...pe(z.value),current:!C.value,Q_OrderBy:g.value}),_.value=Object.values(z.value).filter(s=>s!==void 0&&s!=="").length>0||g.value!==void 0,_.value||(V.value=W(V.value)),P.value=C.value||(t=V.value[0])==null?void 0:t.id}finally{U.value=!1}};oe($);const J=({column:t,prop:s,order:y})=>{var I;s&&y?g.value=((I=t.sortBy)!=null?I:s)+(y==="descending"?"_desc":""):g.value=void 0,$()},X=()=>$(),A=()=>{B.value.clearSort(),ve(z.value),g.value=void 0,$()},E=t=>{S.value=void 0,t!=null&&(P.value=t),T.value=!0},d=t=>{S.value=t,T.value=!0},u=async t=>{await se(t),$(),fe.success(H("success"))},K=async(t,s)=>{const y=be(t,le(V.value),s);await we(y),await $(),t.forEach(I=>{B.value.toggleRowSelection(V.value.find(h=>h.id===I.id))})};return(t,s)=>{const y=p("el-button"),I=p("el-popconfirm"),h=p("el-checkbox"),f=p("el-table-column"),F=p("el-tag"),Y=p("el-table"),Z=ie("loading");return i(),L("div",null,[x("div",Ne,[e(m(De),{params:z.value,onSearch:X,onReset:A},{default:l(()=>[e(m(Ie),{label:t.$t("site.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),x("div",null,[e(y,{type:"primary",disabled:m(R)("site:create"),icon:m(ce),onClick:s[0]||(s[0]=()=>E())},{default:l(()=>[k(w(t.$t("add")),1)]),_:1},8,["disabled","icon"]),e(I,{title:t.$t("confirmDelete"),onConfirm:s[1]||(s[1]=()=>u(o.value.map(n=>n.id)))},{reference:l(()=>[e(y,{disabled:o.value.length<=0||m(R)("site:delete"),icon:m(ye)},{default:l(()=>[k(w(t.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(Ce,{class:"ml-2",disabled:o.value.length<=0||_.value||m(R)("site:update"),onMove:s[2]||(s[2]=n=>K(o.value,n))},null,8,["disabled"]),m(ge).globalPermission?(i(),c(h,{key:0,modelValue:C.value,"onUpdate:modelValue":s[3]||(s[3]=n=>C.value=n),class:"ml-2 align-middle",label:t.$t("globalData"),border:!0,onChange:s[4]||(s[4]=()=>$())},null,8,["modelValue","label"])):D("",!0),e(m(qe),{name:"site",class:"ml-2"})]),x("div",Pe,[me((i(),c(Y,{ref_key:"table",ref:B,"row-key":"id","default-expand-all":"",data:V.value,onSelectionChange:s[5]||(s[5]=n=>o.value=n),onRowDblclick:s[6]||(s[6]=n=>d(n.id)),onSortChange:J},{default:l(()=>[e(m(Se),{name:"site"},{default:l(()=>[e(f,{type:"selection",width:"38"}),e(f,{property:"name",label:t.$t("site.name"),sortable:"custom","min-width":"120px","show-overflow-tooltip":""},{default:l(({row:n})=>[k(w(_.value?n.names.join(" / "):n.name),1)]),_:1},8,["label"]),e(f,{property:"url",label:t.$t("site.url"),"min-width":"120px","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"domain",label:t.$t("site.domain"),sortable:"custom",display:"none","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"subDir",label:t.$t("site.subDir"),sortable:"custom",display:"none","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"theme",label:t.$t("site.theme"),sortable:"custom",display:"none","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"mobileTheme",label:t.$t("site.mobileTheme"),sortable:"custom",display:"none","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"org.name",label:t.$t("site.org"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(f,{property:"status",label:t.$t("site.status"),sortable:"custom","show-overflow-tooltip":""},{default:l(({row:n})=>[n.status===0?(i(),c(F,{key:0,type:"success",size:"small"},{default:l(()=>[k(w(t.$t(`site.status.${n.status}`)),1)]),_:2},1024)):D("",!0),n.status===1?(i(),c(F,{key:1,type:"danger",size:"small"},{default:l(()=>[k(w(t.$t(`site.status.${n.status}`)),1)]),_:2},1024)):D("",!0)]),_:1},8,["label"]),e(f,{property:"id",label:"ID",width:"80",sortable:"custom"}),e(f,{label:t.$t("table.action")},{default:l(({row:n})=>[e(y,{type:"primary",disabled:m(R)("site:create"),size:"small",link:"",onClick:()=>E(n.id)},{default:l(()=>[k(w(t.$t("addChild")),1)]),_:2},1032,["disabled","onClick"]),e(y,{type:"primary",disabled:m(R)("site:update"),size:"small",link:"",onClick:()=>d(n.id)},{default:l(()=>[k(w(t.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(I,{title:t.$t("confirmDelete"),onConfirm:()=>u([n.id])},{reference:l(()=>[e(y,{type:"primary",disabled:m(R)("site:delete"),size:"small",link:""},{default:l(()=>[k(w(t.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[Z,U.value]])]),e(Be,{modelValue:T.value,"onUpdate:modelValue":s[7]||(s[7]=n=>T.value=n),"bean-id":S.value,"bean-ids":N.value,"parent-id":P.value,"show-global-data":C.value,onFinished:$},null,8,["modelValue","bean-id","bean-ids","parent-id","show-global-data"])])}}});export{Ye as default};
