System.register(["./index-legacy-2f56f3d5.js"],(function(e,a){"use strict";var l,u,t,i,d,n,s,v,o,r,c,p,f,m,b,y,g,V,h,$,S,_,k,w,B,q,F;return{setters:[e=>{l=e.d,u=e.p,t=e.u,i=e.r,d=e.a5,n=e.aM,s=e.o,v=e.v,o=e.b,r=e.c,c=e.e,p=e.f,f=e.w,m=e.l,b=e.t,y=e.j,g=e.I,V=e.h,h=e.g,$=e.am,S=e.ad,_=e.b1,k=e.i,w=e.a7,B=e.E,q=e.aa,F=e.m}],execute:function(){const a={key:0},I={key:0},D={key:1},E={class:"space-x-2"},x={key:0},C="ujcms_continuous_settings";e("_",l({__name:"DialogForm",props:{modelValue:{type:Boolean,required:!0},name:{type:String,required:!0},beanId:{type:[Number,String],default:null},beanIds:{type:Array,required:!0},values:{type:Object,required:!0},initValues:{type:Function,required:!0},toValues:{type:Function,required:!0},queryBean:{type:Function,required:!0},createBean:{type:Function,required:!0},updateBean:{type:Function,required:!0},deleteBean:{type:Function,required:!0},disableDelete:{type:Function,default:null},disableEdit:{type:Function,default:null},beforeValidate:{type:Function,default:null},preventSubmit:{type:Function,default:null},addable:{type:Boolean,default:!0},action:{type:String,default:"edit"},showId:{type:Boolean,default:!0},perms:{type:String,default:null},focus:{type:Object,default:null},large:{type:Boolean,default:!1},labelPosition:{type:String,default:"right"},labelWidth:{type:String,default:"150px"}},emits:{"update:modelValue":null,"update:values":null,finished:null,beanChange:null,beforeSubmit:null},setup(e,{expose:l,emit:O}){const j=e;function N(){const e=localStorage.getItem(C);return e?JSON.parse(e):{}}function J(e,a){const l=N();l[e]=a,function(e){localStorage.setItem(C,JSON.stringify(e))}(l)}const{name:P,beanId:U,beanIds:W,focus:z,values:A,action:M,modelValue:G}=u(j),{t:H}=t(),K=i(!1),L=i(!1),Q=i((R=P.value,N()[R]??!1));var R;const T=i(),X=i(j.initValues()),Y=i(),Z=i(),ee=i([]),ae=d((()=>null!=Z.value&&"edit"===M.value)),le=d((()=>!K.value&&!n.isEqual(Y.value,A.value))),ue=d((()=>j.disableEdit?.(X.value)??!1)),te=d((()=>`${P.value} - ${ae.value?`${H(ue.value?"detail":"edit")} (ID: ${Z.value})`:`${H("add")}`}`)),ie=async()=>{K.value=!0;try{X.value=null!=Z.value?await j.queryBean(Z.value):j.initValues(A.value),Y.value=null!=Z.value?j.toValues(X.value):X.value,O("update:values",n.cloneDeep(Y.value)),O("beanChange",X.value),T.value?.resetFields()}finally{K.value=!1}};s((()=>O("update:values",j.initValues()))),v(G,(()=>{G.value&&(ee.value=W.value,Z.value!==U.value?Z.value=U.value:ie())})),v(Z,(()=>{ie()})),v(Q,(()=>J(P.value,Q.value)));const de=d((()=>ee.value.indexOf(Z.value))),ne=d((()=>de.value>0)),se=d((()=>de.value<ee.value.length-1)),ve=()=>{ne.value&&(Z.value=ee.value[de.value-1])},oe=()=>{se.value&&(Z.value=ee.value[de.value+1])},re=()=>{z.value?.focus?.(),Z.value=void 0},ce=()=>{O("update:modelValue",!1)},pe=async()=>{L.value=!0;try{await j.deleteBean([Z.value]),Q.value||O("update:modelValue",!1),se.value?(oe(),ee.value.splice(de.value-1,1)):ne.value?(ve(),ee.value.splice(de.value+1,1)):O("update:modelValue",!1),B.success(H("success")),O("finished")}finally{L.value=!1}},fe=()=>{Y.value=j.toValues(A.value)},me=async()=>{await(j.beforeValidate?.(A.value)),T.value.validate((async e=>{if(e){L.value=!0;try{if(await(j.preventSubmit?.(A.value)))return;O("beforeSubmit",A.value),ae.value?(await j.updateBean(A.value),fe()):(await j.createBean(A.value),z.value?.focus?.(),O("update:values",j.initValues(A.value)),T.value.resetFields()),B.success(H("success")),Q.value||O("update:modelValue",!1),O("finished",X.value)}finally{L.value=!1}}}))};return l({form:T,submit:e=>{T.value.validate((async a=>{if(a){L.value=!0;try{if(await(j.preventSubmit?.(A.value)))return;O("beforeSubmit",A.value),await e(A.value,{isEdit:ae.value,continuous:Q.value,form:T.value,props:j,focus:z.value,loadBean:ie,resetOrigValues:fe,emit:O}),Q.value||O("update:modelValue",!1),O("finished",X.value)}finally{L.value=!1}}}))},remove:async e=>{L.value=!0;try{await e(A.value,{isEdit:ae.value,continuous:Q.value,form:T.value,props:j,focus:z.value,loadBean:ie,emit:O}),Q.value||O("update:modelValue",!1),se.value?(oe(),ee.value.splice(de.value-1,1)):ne.value?(ve(),ee.value.splice(de.value+1,1)):O("update:modelValue",!1),B.success(H("success")),O("finished")}finally{L.value=!1}}}),(l,u)=>{const t=o("el-button"),i=o("el-popconfirm"),d=o("el-button-group"),n=o("el-switch"),s=o("el-tooltip"),v=o("el-tag"),B=o("el-form"),C=o("el-dialog"),O=r("loading");return c(),p(C,{title:te.value,"close-on-click-modal":!le.value,"model-value":e.modelValue,width:e.large?"98%":"768px",top:e.large?"16px":"8vh","onUpdate:modelValue":u[3]||(u[3]=e=>l.$emit("update:modelValue",e)),onOpened:u[4]||(u[4]=()=>!ae.value&&y(z)?.focus())},{header:f((()=>[m(b(y(P))+" - ",1),ae.value?(c(),g("span",a,[m(b(l.$t(ue.value?"detail":"edit"))+" ",1),e.showId?(c(),g("span",I,"(ID: "+b(Z.value)+")",1)):V("",!0)])):(c(),g("span",D,b(l.$t("add")),1))])),default:f((()=>[h((c(),g("div",E,[ae.value&&e.addable?(c(),p(t,{key:0,disabled:y($)(`${e.perms}:create`),type:"primary",icon:y(S),onClick:re},{default:f((()=>[m(b(l.$t("add")),1)])),_:1},8,["disabled","icon"])):V("",!0),_(l.$slots,"header-action",{bean:X.value,isEdit:ae.value,disabled:ue.value,unsaved:le.value,disableDelete:e.disableDelete,handleDelete:pe},(()=>[ae.value?(c(),p(i,{key:0,title:l.$t("confirmDelete"),onConfirm:u[0]||(u[0]=()=>pe())},{reference:f((()=>[k(t,{disabled:e.disableDelete?.(X.value)||y($)(`${e.perms}:delete`),icon:y(q)},{default:f((()=>[m(b(l.$t("delete")),1)])),_:1},8,["disabled","icon"])])),_:1},8,["title"])):V("",!0)])),ae.value?(c(),p(d,{key:1},{default:f((()=>[k(t,{disabled:!ne.value,onClick:ve},{default:f((()=>[m(b(l.$t("form.prev")),1)])),_:1},8,["disabled"]),k(t,{disabled:!se.value,onClick:oe},{default:f((()=>[m(b(l.$t("form.next")),1)])),_:1},8,["disabled"])])),_:1})):V("",!0),k(t,{type:"primary",onClick:ce},{default:f((()=>[m(b(l.$t("back")),1)])),_:1}),k(s,{content:l.$t("form.continuous"),placement:"top"},{default:f((()=>[k(n,{modelValue:Q.value,"onUpdate:modelValue":u[1]||(u[1]=e=>Q.value=e),size:"small"},null,8,["modelValue"])])),_:1},8,["content"]),le.value?(c(),p(v,{key:2,type:"danger"},{default:f((()=>[m(b(l.$t("form.unsaved")),1)])),_:1})):V("",!0),_(l.$slots,"header-status",{bean:X.value,isEdit:ae.value,disabled:ue.value})])),[[O,K.value||L.value]]),k(B,{ref_key:"form",ref:T,class:w(["mt-5","pr-5"]),model:y(A),disabled:ue.value,"label-width":e.labelWidth,"label-position":e.labelPosition,"scroll-to-error":""},{default:f((()=>[_(l.$slots,"default",{bean:X.value,isEdit:ae.value,disabled:ue.value}),ue.value?V("",!0):h((c(),g("div",x,[_(l.$slots,"footer-action",{bean:X.value,isEdit:ae.value,disabled:ue.value,handleSubmit:me},(()=>[k(t,{disabled:y($)(ae.value?`${e.perms}:update`:`${e.perms}:create`),type:"primary","native-type":"submit",onClick:u[2]||(u[2]=F((()=>me()),["prevent"]))},{default:f((()=>[m(b(l.$t("save")),1)])),_:1},8,["disabled"])]))])),[[O,L.value]])])),_:3},8,["model","disabled","label-width","label-position"])])),_:3},8,["title","close-on-click-modal","model-value","width","top"])}}}))}}}));
