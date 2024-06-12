import{d as Ye,p as al,r as h,ac as x,Z as j,v as we,b as y,e as m,f,w as a,i as e,j as p,aq as K,l as T,t as _,h as w,I as q,a9 as C,aa as L,k as ne,_ as nl,u as tl,o as ul,c as ol,g as He,aE as sl,E as rl,aL as dl,aM as il,at as Y,ak as ml,ah as pl,aN as vl,aD as cl}from"./index-DgUB5rOh.js";import{c as fl,d as hl,t as xe}from"./tree-MP4T2jDQ.js";import{g as ge,H as yl,I as bl,J as wl,K as gl,L as el,M as Vl,h as $l,N as ll,O as kl}from"./content-DyUbEBXm.js";import{e as ql,f as Cl}from"./system-NfXIedzB.js";import{_ as Tl,a as Je,b as _l,c as Ml}from"./QueryItem.vue_vue_type_script_setup_true_lang-B3tRvAfo.js";import{_ as Ul}from"./ListMove.vue_vue_type_script_setup_true_lang-DT7t1Mfu.js";import{b as Il,q as We}from"./config-1OSOhRPa.js";import{a as Ze,m as Ge,g as Xe}from"./data-BuK_qNWa.js";import{_ as Dl}from"./FieldItem.vue_vue_type_script_setup_true_lang-CPZnZMpH.js";import{_ as Sl}from"./DialogForm.vue_vue_type_script_setup_true_lang-Judg_DCV.js";import{T as Kl}from"./Tinymce-OJzILWl4.js";import{T as Ll}from"./TuiEditor-3GdzJjkt.js";import{a as Pl}from"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-DxiKxktv.js";import"./vuedraggable.umd-Bo6dCesC.js";/* empty css                                                                   */import"./BaseUpload-iLwxKSlM.js";import"./index-Uqvazc4q.js";import"./sortable.esm-BmjBFecF.js";const zl={class:"w-full"},Bl=Ye({name:"ChannelForm",__name:"ChannelForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},beanIds:{type:Array,required:!0},parent:{type:Object,default:null}},emits:{"update:modelValue":null,finished:null},setup(ee,{emit:ie}){const Q=ee,B=ie,{modelValue:H,parent:b}=al(Q),P=h(),o=h({}),E=h([]),J=h([]),W=h([]),M=h([]),F=h([]),Z=h([]),G=h([]),U=h([]),I=h(),R=x(()=>M.value.find(n=>n.id===I.value)),s=x(()=>{var n;return Ze(Ge(Xe().channel.mains,(n=R.value)==null?void 0:n.mains,"channel"))}),g=x(()=>{var n;return Ze(Ge(Xe().channel.asides,(n=R.value)==null?void 0:n.asides,"channel"))}),N=x(()=>{var n;return JSON.parse(((n=R.value)==null?void 0:n.customs)||"[]")}),me=x(()=>{const n=fl(W.value,o.value.id);return j.allChannelPermission?n:hl(n,Z.value)}),X=async()=>{W.value=xe(await ge())},O=async()=>{j.epRank>0&&(E.value=await ql({category:"sys_article",deployed:!0}))},pe=async()=>{j.epRank>=3&&(J.value=await Il())},te=async()=>{await X(),B("finished")},ve=async()=>{M.value=await We({type:"channel"}),I.value==null&&M.value.length>0&&(I.value=M.value[0].id)},ce=async()=>{F.value=await We({type:"article"})},le=async()=>{G.value=await Vl()},fe=async()=>{U.value=await $l()},ue=async()=>{Z.value=await ll()};we(H,()=>{var n,t,d;H.value&&(I.value=(d=(n=b.value)==null?void 0:n.articleModelId)!=null?d:(t=M.value[0])==null?void 0:t.id,ue(),ve(),ce(),le(),fe(),O(),pe())}),we(N,()=>{oe(o.value.customs)});const oe=n=>(N.value.forEach(t=>{n[t.code]==null&&(n[t.code]=t.defaultValue,t.defaultValueKey!=null&&(n[t.code+"Key"]=t.defaultValueKey))}),n);return(n,t)=>{const d=y("el-input"),i=y("el-form-item"),v=y("el-col"),V=y("el-checkbox"),D=y("el-option"),S=y("el-select"),A=y("el-switch"),se=y("el-radio"),$=y("el-radio-group"),re=y("el-row"),he=y("el-tree-select"),ye=y("el-input-number"),be=y("el-tab-pane"),de=y("el-tabs");return m(),f(Sl,{values:o.value,"onUpdate:values":t[28]||(t[28]=u=>o.value=u),name:n.$t("menu.content.channel"),"query-bean":p(bl),"create-bean":p(wl),"update-bean":p(gl),"delete-bean":p(el),"bean-id":ee.beanId,"bean-ids":ee.beanIds,focus:P.value,"init-values":u=>{var l,r,k,z,ae,c,Ve,$e,ke,qe,Ce,Te,_e,Me,Ue,Ie,De,Se,Ke,Le,Pe,ze,Be,Ee,Fe,Re,Ne,Oe,Ae,je,Qe;return{parentId:(r=u==null?void 0:u.parentId)!=null?r:(l=p(b))==null?void 0:l.id,type:1,channelModelId:(c=(z=u==null?void 0:u.channelModelId)!=null?z:(k=p(b))==null?void 0:k.channelModelId)!=null?c:(ae=M.value[0])==null?void 0:ae.id,articleModelId:(qe=($e=u==null?void 0:u.articleModelId)!=null?$e:(Ve=p(b))==null?void 0:Ve.articleModelId)!=null?qe:(ke=F.value[0])==null?void 0:ke.id,nav:(_e=(Te=u==null?void 0:u.nav)!=null?Te:(Ce=p(b))==null?void 0:Ce.nav)!=null?_e:!0,channelTemplate:(Ie=(Ue=u==null?void 0:u.channelTemplate)!=null?Ue:(Me=p(b))==null?void 0:Me.channelTemplate)!=null?Ie:G.value[0],articleTemplate:(Ke=(Se=u==null?void 0:u.articleTemplate)!=null?Se:(De=p(b))==null?void 0:De.articleTemplate)!=null?Ke:U.value[0],pageSize:20,allowComment:(ze=(Pe=u==null?void 0:u.allowComment)!=null?Pe:(Le=p(b))==null?void 0:Le.allowComment)!=null?ze:!0,allowContribute:(Fe=(Ee=u==null?void 0:u.allowContribute)!=null?Ee:(Be=p(b))==null?void 0:Be.allowContribute)!=null?Fe:!0,allowSearch:(Oe=(Ne=u==null?void 0:u.allowSearch)!=null?Ne:(Re=p(b))==null?void 0:Re.allowSearch)!=null?Oe:!0,orderDesc:(Qe=(je=u==null?void 0:u.orderDesc)!=null?je:(Ae=p(b))==null?void 0:Ae.orderDesc)!=null?Qe:!0,customs:{}}},"to-values":u=>({...u}),perms:"channel","model-value":ee.modelValue,"disable-edit":u=>!p(j).allChannelPermission&&u.id!=null&&!Z.value.includes(u.id),"label-width":"120px",large:"","onUpdate:modelValue":t[29]||(t[29]=u=>n.$emit("update:modelValue",u)),onFinished:te,onBeanChange:t[30]||(t[30]=async u=>{var l,r,k,z;I.value=(z=(r=u==null?void 0:u.channelModelId)!=null?r:(l=p(b))==null?void 0:l.channelModelId)!=null?z:(k=F.value[0])==null?void 0:k.id,await X()})},{default:a(({bean:u})=>[e(re,null,{default:a(()=>[e(v,{span:18},{default:a(()=>[e(re,null,{default:a(()=>[e(v,{span:s.value.name.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"name",label:(l=s.value.name.name)!=null?l:n.$t("channel.name"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(d,{ref_key:"focus",ref:P,modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value.name=r),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"]),e(v,{span:s.value.alias.double?12:24},{default:a(()=>[e(i,{prop:"alias",rules:[{required:!0,message:()=>n.$t("v.required")},{pattern:/^[\w-]*$/,message:()=>n.$t("channel.error.aliasPattern")},{asyncValidator:async(l,r,k)=>{if(r!==u.alias&&await p(yl)(r)){k(n.$t("channel.error.aliasExist"));return}k()}}]},{label:a(()=>{var l;return[e(K,{label:(l=s.value.alias.name)!=null?l:n.$t("channel.alias"),message:"channel.alias",help:""},null,8,["label"])]}),default:a(()=>[e(d,{modelValue:o.value.alias,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.alias=l),maxlength:"50"},null,8,["modelValue"])]),_:2},1032,["rules"])]),_:2},1032,["span"]),o.value.type===3?(m(),f(v,{key:0,span:s.value.linkUrl.double?12:24},{default:a(()=>[e(i,{prop:"linkUrl",rules:[{required:!0,message:()=>n.$t("v.required")},{pattern:/^(http|\/).*$/,message:()=>n.$t("channel.error.linkUrl")}]},{label:a(()=>{var l;return[e(K,{label:(l=s.value.linkUrl.name)!=null?l:n.$t("channel.linkUrl"),message:"channel.linkUrl",help:""},null,8,["label"])]}),default:a(()=>[e(d,{modelValue:o.value.linkUrl,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value.linkUrl=l),maxlength:"255"},{append:a(()=>[e(V,{modelValue:o.value.targetBlank,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.targetBlank=l)},{default:a(()=>[T(_(n.$t("channel.targetBlank")),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0),o.value.type<3?(m(),q(C,{key:1},[s.value.seoTitle.show?(m(),f(v,{key:0,span:s.value.seoTitle.double?12:24},{default:a(()=>[e(i,{prop:"seoTitle",rules:s.value.seoTitle.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var l;return[e(K,{label:(l=s.value.seoTitle.name)!=null?l:n.$t("channel.seoTitle"),message:"channel.seoTitle",help:""},null,8,["label"])]}),default:a(()=>[e(d,{modelValue:o.value.seoTitle,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value.seoTitle=l),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0),s.value.seoKeywords.show?(m(),f(v,{key:1,span:s.value.seoKeywords.double?12:24},{default:a(()=>[e(i,{prop:"seoKeywords",rules:s.value.seoKeywords.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var l;return[e(K,{label:(l=s.value.seoKeywords.name)!=null?l:n.$t("channel.seoKeywords"),message:"channel.seoKeywords",help:""},null,8,["label"])]}),default:a(()=>[e(d,{modelValue:o.value.seoKeywords,"onUpdate:modelValue":t[5]||(t[5]=l=>o.value.seoKeywords=l),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0),s.value.seoDescription.show?(m(),f(v,{key:2,span:s.value.seoDescription.double?12:24},{default:a(()=>[e(i,{prop:"seoDescription",rules:s.value.seoDescription.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var l;return[e(K,{label:(l=s.value.seoDescription.name)!=null?l:n.$t("channel.seoDescription"),message:"channel.seoDescription",help:""},null,8,["label"])]}),default:a(()=>[e(d,{modelValue:o.value.seoDescription,"onUpdate:modelValue":t[6]||(t[6]=l=>o.value.seoDescription=l),maxlength:"1000"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0)],64)):w("",!0),s.value.image.show?(m(),f(v,{key:2,span:s.value.image.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"image",label:(l=s.value.image.name)!=null?l:n.$t("channel.image"),rules:s.value.image.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(p(Pl),{modelValue:o.value.image,"onUpdate:modelValue":t[7]||(t[7]=r=>o.value.image=r),height:s.value.image.imageHeight,width:s.value.image.imageWidth,mode:s.value.image.imageMode},null,8,["modelValue","height","width","mode"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),s.value.channelModel.show?(m(),f(v,{key:3,span:s.value.channelModel.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"channelModelId",label:(l=s.value.channelModel.name)!=null?l:n.$t("channel.channelModel"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(S,{modelValue:o.value.channelModelId,"onUpdate:modelValue":t[8]||(t[8]=r=>o.value.channelModelId=r),class:"w-full",onChange:t[9]||(t[9]=r=>{I.value=r})},{default:a(()=>[(m(!0),q(C,null,L(M.value,r=>(m(),f(D,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),s.value.articleModel.show?(m(),f(v,{key:4,span:s.value.articleModel.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"articleModelId",label:(l=s.value.articleModel.name)!=null?l:n.$t("channel.articleModel"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(S,{modelValue:o.value.articleModelId,"onUpdate:modelValue":t[10]||(t[10]=r=>o.value.articleModelId=r),class:"w-full"},{default:a(()=>[(m(!0),q(C,null,L(F.value,r=>(m(),f(D,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),[3,4,5].includes(o.value.type)?w("",!0):(m(),q(C,{key:5},[s.value.channelTemplate.show?(m(),f(v,{key:0,span:s.value.channelTemplate.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"channelTemplate",label:(l=s.value.channelTemplate.name)!=null?l:n.$t("channel.channelTemplate"),rules:s.value.channelTemplate.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(S,{modelValue:o.value.channelTemplate,"onUpdate:modelValue":t[11]||(t[11]=r=>o.value.channelTemplate=r),class:"w-full"},{default:a(()=>[(m(!0),q(C,null,L(G.value,r=>(m(),f(D,{key:r,label:r+".html",value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),s.value.articleTemplate.show?(m(),f(v,{key:1,span:s.value.articleTemplate.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"articleTemplate",label:(l=s.value.articleTemplate.name)!=null?l:n.$t("channel.articleTemplate"),rules:s.value.articleTemplate.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(S,{modelValue:o.value.articleTemplate,"onUpdate:modelValue":t[12]||(t[12]=r=>o.value.articleTemplate=r),class:"w-full"},{default:a(()=>[(m(!0),q(C,null,L(U.value,r=>(m(),f(D,{key:r,label:r+".html",value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0)],64)),s.value.allowComment.show?(m(),f(v,{key:6,span:s.value.allowComment.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"allowComment",label:(l=s.value.allowComment.name)!=null?l:n.$t("channel.allowComment"),rules:s.value.allowComment.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(A,{modelValue:o.value.allowComment,"onUpdate:modelValue":t[13]||(t[13]=r=>o.value.allowComment=r)},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),s.value.allowContribute.show?(m(),f(v,{key:7,span:s.value.allowContribute.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"allowContribute",label:(l=s.value.allowContribute.name)!=null?l:n.$t("channel.allowContribute"),rules:s.value.allowContribute.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(A,{modelValue:o.value.allowContribute,"onUpdate:modelValue":t[14]||(t[14]=r=>o.value.allowContribute=r)},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0),s.value.nav.show?(m(),f(v,{key:8,span:s.value.nav.double?12:24},{default:a(()=>[e(i,{prop:"nav",rules:s.value.nav.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var l;return[e(K,{label:(l=s.value.nav.name)!=null?l:n.$t("channel.nav"),message:"channel.nav",help:""},null,8,["label"])]}),default:a(()=>[e(A,{modelValue:o.value.nav,"onUpdate:modelValue":t[15]||(t[15]=l=>o.value.nav=l)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0),s.value.allowSearch.show?(m(),f(v,{key:9,span:s.value.allowSearch.double?12:24},{default:a(()=>[e(i,{prop:"allowSearch",rules:s.value.allowSearch.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var l;return[e(K,{label:(l=s.value.allowSearch.name)!=null?l:n.$t("channel.allowSearch"),message:"channel.allowSearch",help:""},null,8,["label"])]}),default:a(()=>[e(A,{modelValue:o.value.allowSearch,"onUpdate:modelValue":t[16]||(t[16]=l=>o.value.allowSearch=l)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):w("",!0),(m(!0),q(C,null,L(N.value,l=>(m(),f(v,{key:l.code,span:l.double?12:24},{default:a(()=>[e(i,{prop:"customs.".concat(l.code),rules:l.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>[e(K,{label:l.name},null,8,["label"])]),default:a(()=>[e(Dl,{modelValue:o.value.customs[l.code],"onUpdate:modelValue":r=>o.value.customs[l.code]=r,"model-key":o.value.customs[l.code+"Key"],"onUpdate:modelKey":r=>o.value.customs[l.code+"Key"]=r,field:l},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["prop","rules"])]),_:2},1032,["span"]))),128)),o.value.type===2?(m(),f(v,{key:10,span:s.value.text.double?12:24},{default:a(()=>{var l;return[e(i,{prop:"text",label:(l=s.value.text.name)!=null?l:n.$t("channel.text"),rules:s.value.text.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[ne("div",zl,[s.value.text.editorSwitch?(m(),f($,{key:0,modelValue:o.value.editorType,"onUpdate:modelValue":t[17]||(t[17]=r=>o.value.editorType=r),class:"mr-6",onChange:t[18]||(t[18]=()=>o.value.markdown="")},{default:a(()=>[(m(),q(C,null,L([1,2],r=>e(se,{key:r,value:r},{default:a(()=>[T(_(n.$t("model.field.editorType.".concat(r))),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])):w("",!0),o.value.editorType===2?(m(),f(p(Ll),{key:1,modelValue:o.value.markdown,"onUpdate:modelValue":t[19]||(t[19]=r=>o.value.markdown=r),html:o.value.text,"onUpdate:html":t[20]||(t[20]=r=>o.value.text=r),class:"leading-6"},null,8,["modelValue","html"])):(m(),f(p(Kl),{key:2,ref:"tinyText",modelValue:o.value.text,"onUpdate:modelValue":t[21]||(t[21]=r=>o.value.text=r)},null,8,["modelValue"]))])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):w("",!0)]),_:2},1024)]),_:2},1024),e(v,{span:6,class:"el-form--label-top label-top"},{default:a(()=>[e(de,{type:"border-card",class:"ml-5"},{default:a(()=>[e(be,{label:n.$t("channel.tabs.setting")},{default:a(()=>{var l,r,k,z,ae;return[e(i,{prop:"parentId",label:(l=g.value.parent.name)!=null?l:n.$t("channel.parent")},{default:a(()=>[e(he,{modelValue:o.value.parentId,"onUpdate:modelValue":t[22]||(t[22]=c=>o.value.parentId=c),data:me.value,"node-key":"id",props:{label:"name",disabled:"disabled"},"render-after-expand":!1,"check-strictly":"",clearable:"",class:"w-full"},null,8,["modelValue","data"])]),_:1},8,["label"]),e(i,{prop:"type",label:(r=g.value.type.name)!=null?r:n.$t("channel.type"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(S,{modelValue:o.value.type,"onUpdate:modelValue":t[23]||(t[23]=c=>o.value.type=c),class:"w-full"},{default:a(()=>[(m(),q(C,null,L([1,2,3,4],c=>e(D,{key:c,label:n.$t("channel.type.".concat(c)),value:c},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"]),e(i,{prop:"processKey",label:(k=g.value.processKey.name)!=null?k:n.$t("channel.processKey"),rules:g.value.processKey.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(S,{modelValue:o.value.processKey,"onUpdate:modelValue":t[24]||(t[24]=c=>o.value.processKey=c),clearable:"",class:"w-full"},{default:a(()=>[(m(!0),q(C,null,L(E.value,c=>(m(),f(D,{key:c.key,label:c.name,value:c.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"]),p(j).epRank>=3&&g.value.performanceType.show?(m(),f(i,{key:0,prop:"performanceType",label:(z=g.value.performanceType.name)!=null?z:n.$t("channel.performanceType"),rules:g.value.performanceType.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[e(S,{modelValue:o.value.performanceTypeId,"onUpdate:modelValue":t[25]||(t[25]=c=>o.value.performanceTypeId=c),clearable:"",class:"w-full"},{default:a(()=>[(m(!0),q(C,null,L(J.value,c=>(m(),f(D,{key:c.id,label:c.name,value:c.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])):w("",!0),e(i,{prop:"pageSize",label:(ae=g.value.pageSize.name)!=null?ae:n.$t("channel.pageSize"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(ye,{modelValue:o.value.pageSize,"onUpdate:modelValue":t[26]||(t[26]=c=>o.value.pageSize=c),min:1,max:200},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(i,{prop:"orderDesc",rules:{required:!0,message:()=>n.$t("v.required")}},{label:a(()=>{var c;return[e(K,{label:(c=g.value.orderDesc.name)!=null?c:n.$t("channel.orderDesc"),message:"channel.orderDesc",help:""},null,8,["label"])]}),default:a(()=>[e(A,{modelValue:o.value.orderDesc,"onUpdate:modelValue":t[27]||(t[27]=c=>o.value.orderDesc=c)},null,8,["modelValue"])]),_:1},8,["rules"])]}),_:1},8,["label"])]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value","disable-edit"])}}}),El=nl(Bl,[["__scopeId","data-v-e1490852"]]),Fl={class:"my-1 ml-2"},Rl={class:"mb-3"},Nl={class:"mt-3 app-block"},oa=Ye({name:"ChannelList",__name:"ChannelList",setup(ee){const{t:ie}=tl(),Q=h({}),B=h(),H=h(),b=h([]),P=h([]),o=h(!1),E=h(!1),J=h(),W=h(),M=x(()=>b.value.map(d=>d.id)),F=h(!1),Z=h([]),G=h([]),U=h(),I=h([]),R=h(!1),s=h(),g=h(),N=d=>j.allChannelPermission||Z.value.includes(d.id);we(s,d=>{U.value.filter(d)});const me=async()=>{R.value=!0;try{I.value=xe(await ge({isOnlyParent:!0})),vl(()=>{var d;s.value!=null&&U.value.filter(s.value),U.value.setCurrentKey((d=g.value)==null?void 0:d.id)})}finally{R.value=!1}},X=async()=>{var d;o.value=!0;try{const i=Object.values(Q.value).filter(v=>v!==void 0&&v!=="").length>0;b.value=await ge({...cl(Q.value),parentId:(d=g.value)==null?void 0:d.id,isIncludeChildren:i,Q_OrderBy:B.value}),F.value=i||B.value!==void 0}finally{o.value=!1}},O=()=>{me(),X()},pe=async()=>{j.epRank>0&&(G.value=await Cl({category:"sys_article",latestVersion:!0}))},te=async()=>{Z.value=await ll()};ul(()=>{O(),pe(),te()});const ve=({column:d,prop:i,order:v})=>{var V;i&&v?B.value=((V=d.sortBy)!=null?V:i)+(v==="descending"?"_desc":""):B.value=void 0,O()},ce=()=>{O(),te()},le=()=>X(),fe=()=>{H.value.clearSort(),sl(Q.value),B.value=void 0,X()},ue=d=>{W.value=void 0,J.value=d!=null?d:g.value,E.value=!0},oe=d=>{W.value=d,J.value=null,E.value=!0},n=async d=>{await el(d),O(),rl.success(ie("success"))},t=async(d,i)=>{const v=dl(d,b.value,i);await kl(v),await O(),d.forEach(()=>{H.value.toggleRowSelection(b.value)})};return(d,i)=>{const v=y("el-input"),V=y("el-button"),D=y("el-tree"),S=y("el-scrollbar"),A=y("el-aside"),se=y("el-popconfirm"),$=y("el-table-column"),re=y("el-tag"),he=y("el-table"),ye=y("el-main"),be=y("el-container"),de=ol("loading");return m(),f(be,null,{default:a(()=>[e(A,{width:"220px",class:"pr-3"},{default:a(()=>[e(S,{class:"p-2 bg-white rounded-sm"},{default:a(()=>[e(v,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=u=>s.value=u),"suffix-icon":p(il),size:"small"},null,8,["modelValue","suffix-icon"]),ne("div",Fl,[e(V,{type:g.value==null?"primary":void 0,link:"",onClick:i[1]||(i[1]=()=>{U.value.setCurrentKey(null),g.value=void 0,le()})},{default:a(()=>[T(_(d.$t("channel.root")),1)]),_:1},8,["type"])]),He(e(D,{ref_key:"channelTree",ref:U,data:I.value,props:{label:"name"},"expand-on-click-node":!1,"node-key":"id","highlight-current":"","filter-node-method":(u,l)=>u?l.name.includes(u):!0,onNodeClick:i[2]||(i[2]=u=>{g.value=u,le()})},null,8,["data","filter-node-method"]),[[de,R.value]])]),_:1})]),_:1}),e(ye,{class:"p-0"},{default:a(()=>[ne("div",Rl,[e(p(Tl),{params:Q.value,onSearch:le,onReset:fe},{default:a(()=>[e(p(Je),{label:d.$t("channel.name"),name:"Q_Contains_name"},null,8,["label"]),e(p(Je),{label:d.$t("channel.alias"),name:"Q_Contains_alias"},null,8,["label"])]),_:1},8,["params"])]),ne("div",null,[e(V,{type:"primary",disabled:p(Y)("channel:create"),icon:p(ml),onClick:i[3]||(i[3]=()=>ue(void 0))},{default:a(()=>[T(_(d.$t("add")),1)]),_:1},8,["disabled","icon"]),e(se,{title:d.$t("confirmDelete"),onConfirm:i[4]||(i[4]=()=>n(P.value.map(u=>u.id)))},{reference:a(()=>[e(V,{disabled:P.value.length<=0||p(Y)("channel:delete"),icon:p(pl)},{default:a(()=>[T(_(d.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(Ul,{disabled:P.value.length<=0||F.value||p(Y)("channel:update"),class:"ml-2",onMove:i[5]||(i[5]=u=>t(P.value,u))},null,8,["disabled"]),e(p(_l),{name:"channel",class:"ml-2"})]),ne("div",Nl,[He((m(),f(he,{ref_key:"table",ref:H,"row-key":"id",data:b.value,onSelectionChange:i[6]||(i[6]=u=>P.value=u),onRowDblclick:i[7]||(i[7]=u=>oe(u.id)),onSortChange:ve},{default:a(()=>[e(p(Ml),{name:"channel"},{default:a(()=>[e($,{type:"selection",selectable:N,width:"45"}),e($,{property:"name",label:d.$t("channel.name"),"min-width":"120",sortable:"custom"},null,8,["label"]),e($,{property:"alias",label:d.$t("channel.alias"),"min-width":"80",sortable:"custom"},null,8,["label"]),e($,{property:"channelModel.name",label:d.$t("channel.channelModel"),"sort-by":"channelModel@model-name",display:"none",sortable:"custom","min-width":"60"},null,8,["label"]),e($,{property:"articleModel.name",label:d.$t("channel.articleModel"),"sort-by":"articleModel@model-name",sortable:"custom","min-width":"60"},null,8,["label"]),e($,{property:"processKey",label:d.$t("channel.processKey"),"min-width":"60",sortable:"custom","show-overflow-tooltip":""},{default:a(({row:u})=>{var l;return[T(_(u.processKey!=null?(l=G.value.find(r=>r.key===u.processKey))==null?void 0:l.name:void 0),1)]}),_:1},8,["label"]),e($,{property:"nav",label:d.$t("channel.nav"),"min-width":"40"},{default:a(({row:u})=>[e(re,{type:u.nav?"success":"info",size:"small"},{default:a(()=>[T(_(d.$t(u.nav?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"id",label:"ID",width:"170",sortable:"custom"}),e($,{label:d.$t("table.action")},{default:a(({row:u})=>[e(V,{type:"primary",disabled:p(Y)("channel:create")||!N(u),size:"small",link:"",onClick:()=>ue(u)},{default:a(()=>[T(_(d.$t("addChild")),1)]),_:2},1032,["disabled","onClick"]),e(V,{type:"primary",disabled:p(Y)("channel:update"),size:"small",link:"",onClick:()=>oe(u.id)},{default:a(()=>[T(_(d.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(se,{title:d.$t("confirmDelete"),onConfirm:()=>n([u.id])},{reference:a(()=>[e(V,{type:"primary",disabled:p(Y)("channel:delete")||!N(u),size:"small",link:""},{default:a(()=>[T(_(d.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[de,o.value]])]),e(El,{modelValue:E.value,"onUpdate:modelValue":i[8]||(i[8]=u=>E.value=u),"bean-id":W.value,"bean-ids":M.value,parent:J.value,onFinished:ce},null,8,["modelValue","bean-id","bean-ids","parent"])]),_:1})]),_:1})}}});export{oa as default};