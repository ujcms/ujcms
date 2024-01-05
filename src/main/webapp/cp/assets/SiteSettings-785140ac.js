import{d as ve,u as ge,al as fe,r as b,a5 as N,a_ as U,a2 as c,v as be,o as ye,b as d,c as _e,e as r,f,w as a,i as e,I as p,ag as g,af as v,g as Ve,ar as i,j as h,k as D,l as W,t as H,am as we,m as Se,h as ke,Q as he,R as qe,E as $e,_ as Ue}from"./index-8830bcc4.js";import{t as ce}from"./tree-a45d03ff.js";import{C as Ce,q as Ie,D as E,E as Le,F as Be,G as Te,H as We,I as He}from"./config-9acdf762.js";import{q as De}from"./user-c2635af3.js";import{a as P}from"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-452162eb.js";import"./vuedraggable.umd-82b677e0.js";/* empty css                                                                   */import{_ as Fe}from"./FieldItem.vue_vue_type_script_setup_true_lang-b0cac297.js";import"./sortable.esm-c0d7cc14.js";import"./content-8945637b.js";import"./Tinymce-556e5ec8.js";import"./BaseUpload-0417a4df.js";const Me=C=>(he("data-v-daa666ab"),C=C(),qe(),C),ze={class:"watermark-position"},Re=Me(()=>D("span",null,null,-1)),Ae=["innerHTML"],Ke={key:6},Ne={name:"SiteSettings"},Ee=ve({...Ne,emits:{"update:modelValue":null,finished:null},setup(C){const{t:x}=ge(),O=fe(),F=b(),w=b(),t=b({}),q=b(!1),I=b(!1),j=b([]),L=b([]),B=b([]),M=b(),G=N(()=>B.value.find(s=>s.id===M.value)),J=N(()=>{var s;return JSON.parse(((s=G.value)==null?void 0:s.customs)||"[]")}),S=[];U("siteSettings:base:update")&&S.push("base"),U("siteSettings:watermark:update")&&S.push("watermark"),U("siteSettings:editor:update")&&(c.epRank>=2||c.epDisplay)&&S.push("editor"),U("siteSettings:messageBoard:update")&&S.push("messageBoard"),U("siteSettings:customs:update")&&S.push("customs");const m=b(S[0]),z=()=>{m.value==="watermark"?t.value=w.value.watermark:m.value==="editor"?(t.value=w.value.editor,t.value.typesetting==null&&(t.value.typesetting={fontFamily:"",fontSize:"",lineHeight:"",textIndent:!1,imageCenterAlign:!0,tableFullWidth:!0,emptyLine:"one",halfWidthCharConversion:!0})):m.value==="messageBoard"?t.value=w.value.messageBoard:m.value==="customs"?t.value=w.value.customs:t.value=w.value};be(m,()=>z());const Q=async()=>{L.value=await Ce()},Y=async()=>{j.value=ce(await De())},X=async()=>{B.value=await Ie({type:"site"})},R=async()=>{w.value=await E(),M.value=w.value.modelId};ye(async()=>{q.value=!0;try{await Promise.all([Q(),Y(),X(),R()]),z()}finally{q.value=!1}});const Z=async()=>{q.value=!0;try{await R()}finally{q.value=!1}},ee=()=>{F.value.validate(async s=>{if(s){I.value=!0;try{m.value==="watermark"?await Le(t.value):m.value==="editor"?await Be(t.value):m.value==="messageBoard"?await Te(t.value):m.value==="customs"?await We(t.value):await He(t.value),O.currentSite=await E(),$e.success(x("success"))}finally{I.value=!1}Z()}})};return(s,u)=>{const le=d("el-tab-pane"),ae=d("el-tabs"),te=d("el-aside"),k=d("el-switch"),o=d("el-form-item"),n=d("el-col"),A=d("el-radio"),K=d("el-radio-group"),ue=d("el-slider"),y=d("el-input"),$=d("el-row"),se=d("el-alert"),oe=d("el-divider"),_=d("el-option"),V=d("el-select"),ne=d("el-input-number"),ie=d("el-button"),re=d("el-form"),de=d("el-main"),me=d("el-container"),pe=_e("loading");return r(),f(me,null,{default:a(()=>[e(te,{width:"180px",class:"pr-3"},{default:a(()=>[e(ae,{modelValue:m.value,"onUpdate:modelValue":u[0]||(u[0]=l=>m.value=l),"tab-position":"left",stretch:"",class:"bg-white"},{default:a(()=>[(r(),p(v,null,g(S,l=>e(le,{key:l,name:l,label:s.$t(`site.settings.${l}`)},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),_:1}),e(de,{class:"p-3 app-block"},{default:a(()=>[Ve((r(),f(re,{ref_key:"form",ref:F,model:t.value,"label-width":"150px"},{default:a(()=>[m.value==="watermark"?(r(),f($,{key:0},{default:a(()=>[e(n,{span:24},{default:a(()=>[e(o,{prop:"enabled",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.watermark.enabled",help:""})]),default:a(()=>[e(k,{modelValue:t.value.enabled,"onUpdate:modelValue":u[1]||(u[1]=l=>t.value.enabled=l)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"overlay",label:s.$t("site.watermark.overlay"),rules:t.value.enabled?{required:!0,message:()=>s.$t("v.required")}:{}},{default:a(()=>[e(h(P),{modelValue:t.value.overlay,"onUpdate:modelValue":u[2]||(u[2]=l=>t.value.overlay=l)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"position",label:s.$t("site.watermark.position"),rules:{required:!0,message:()=>s.$t("v.required")}},{default:a(()=>[e(K,{modelValue:t.value.position,"onUpdate:modelValue":u[3]||(u[3]=l=>t.value.position=l)},{default:a(()=>[D("div",ze,[(r(),p(v,null,g(9,l=>e(A,{key:l,label:l,title:s.$t(`site.watermark.position.${l}`)},{default:a(()=>[Re]),_:2},1032,["label","title"])),64))])]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(n,{span:24},{default:a(()=>[e(o,{prop:"dissolve",label:s.$t("site.watermark.dissolve"),rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.watermark.dissolve",help:""})]),default:a(()=>[e(ue,{modelValue:t.value.dissolve,"onUpdate:modelValue":u[4]||(u[4]=l=>t.value.dissolve=l),min:0,max:100,"show-input":""},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"minWidth",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.watermark.minWidth",help:""})]),default:a(()=>[e(y,{modelValue:t.value.minWidth,"onUpdate:modelValue":u[5]||(u[5]=l=>t.value.minWidth=l),modelModifiers:{number:!0},min:1,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"minHeight",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.watermark.minHeight",help:""})]),default:a(()=>[e(y,{modelValue:t.value.minHeight,"onUpdate:modelValue":u[6]||(u[6]=l=>t.value.minHeight=l),modelModifiers:{number:!0},min:1,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})):m.value==="editor"&&h(c).epRank<2?(r(),f(se,{key:1,type:"warning",closable:!1,"show-icon":!0},{title:a(()=>[D("span",{innerHTML:s.$t("error.enterprise")},null,8,Ae)]),_:1})):m.value==="editor"&&h(c).epRank>=2?(r(),p(v,{key:2},[e(oe,null,{default:a(()=>[W(H(s.$t("site.editor.typesetting")),1)]),_:1}),e($,null,{default:a(()=>[e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.fontFamily"},{label:a(()=>[e(i,{message:"site.editor.typesetting.fontFamily"})]),default:a(()=>[e(V,{modelValue:t.value.typesetting.fontFamily,"onUpdate:modelValue":u[7]||(u[7]=l=>t.value.typesetting.fontFamily=l)},{default:a(()=>[(r(),p(v,null,g([{value:"",label:"默认"},{value:"SimSun",label:"宋体"},{value:"Microsoft YaHei",label:"微软雅黑"},{value:"SimKai,KaiTi",label:"楷体"},{value:"SimHei",label:"黑体"},{value:"SimLi,LiSu",label:"隶书"},{value:"andale mono,times",label:"Andale Mono"},{value:"arial,helvetica,sans-serif",label:"Arial"},{value:"arial black,avant garde",label:"Arial Black"},{value:"comic sans ms,sans-serif",label:"Comic Sans MS"},{value:"helvetica",label:"Helvetica"},{value:"impact,chicago",label:"Impact"},{value:"times new roman,times",label:"Times New Roman"}],l=>e(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.fontSize"},{label:a(()=>[e(i,{message:"site.editor.typesetting.fontSize"})]),default:a(()=>[e(V,{modelValue:t.value.typesetting.fontSize,"onUpdate:modelValue":u[8]||(u[8]=l=>t.value.typesetting.fontSize=l)},{default:a(()=>[(r(),p(v,null,g([{value:"",label:"默认"},{value:"12px",label:"小五"},{value:"14px",label:"五号"},{value:"16px",label:"小四"},{value:"18px",label:"四号"},{value:"20px",label:"小三"},{value:"22px",label:"三号"},{value:"24px",label:"小二"},{value:"28px",label:"二号"}],l=>e(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.lineHeight"},{label:a(()=>[e(i,{message:"site.editor.typesetting.lineHeight"})]),default:a(()=>[e(V,{modelValue:t.value.typesetting.lineHeight,"onUpdate:modelValue":u[9]||(u[9]=l=>t.value.typesetting.lineHeight=l)},{default:a(()=>[(r(),p(v,null,g([{value:"",label:"默认"},{value:"1.0",label:"1.0"},{value:"1.1",label:"1.1"},{value:"1.2",label:"1.2"},{value:"1.3",label:"1.3"},{value:"1.4",label:"1.4"},{value:"1.5",label:"1.5"},{value:"2.0",label:"2.0"}],l=>e(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.emptyLine"},{label:a(()=>[e(i,{message:"site.editor.typesetting.emptyLine"})]),default:a(()=>[e(V,{modelValue:t.value.typesetting.emptyLine,"onUpdate:modelValue":u[10]||(u[10]=l=>t.value.typesetting.emptyLine=l)},{default:a(()=>[(r(),p(v,null,g([{value:"remain",label:"保留空行"},{value:"one",label:"合并为一行"},{value:"remove",label:"删除空行"}],l=>e(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.textIndent"},{label:a(()=>[e(i,{message:"site.editor.typesetting.textIndent"})]),default:a(()=>[e(k,{modelValue:t.value.typesetting.textIndent,"onUpdate:modelValue":u[11]||(u[11]=l=>t.value.typesetting.textIndent=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.imageCenterAlign"},{label:a(()=>[e(i,{message:"site.editor.typesetting.imageCenterAlign"})]),default:a(()=>[e(k,{modelValue:t.value.typesetting.imageCenterAlign,"onUpdate:modelValue":u[12]||(u[12]=l=>t.value.typesetting.imageCenterAlign=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.tableFullWidth"},{label:a(()=>[e(i,{message:"site.editor.typesetting.tableFullWidth"})]),default:a(()=>[e(k,{modelValue:t.value.typesetting.tableFullWidth,"onUpdate:modelValue":u[13]||(u[13]=l=>t.value.typesetting.tableFullWidth=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"typesetting.halfWidthCharConversion"},{label:a(()=>[e(i,{message:"site.editor.typesetting.halfWidthCharConversion"})]),default:a(()=>[e(k,{modelValue:t.value.typesetting.halfWidthCharConversion,"onUpdate:modelValue":u[14]||(u[14]=l=>t.value.typesetting.halfWidthCharConversion=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)):m.value==="messageBoard"?(r(),f($,{key:3},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(o,{prop:"enabled",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.messageBoard.enabled"})]),default:a(()=>[e(k,{modelValue:t.value.enabled,"onUpdate:modelValue":u[15]||(u[15]=l=>t.value.enabled=l)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"loginRequired",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.messageBoard.loginRequired"})]),default:a(()=>[e(k,{modelValue:t.value.loginRequired,"onUpdate:modelValue":u[16]||(u[16]=l=>t.value.loginRequired=l)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})):m.value==="customs"?(r(),f($,{key:4},{default:a(()=>[(r(!0),p(v,null,g(J.value,l=>(r(),f(n,{key:l.code,span:l.double?12:24},{default:a(()=>[e(o,{prop:l.code,rules:l.required?{required:!0,message:()=>s.$t("v.required")}:void 0},{label:a(()=>[e(i,{label:l.name},null,8,["label"])]),default:a(()=>[e(Fe,{modelValue:t.value[l.code],"onUpdate:modelValue":T=>t.value[l.code]=T,"model-key":t.value[l.code+"_key"],"onUpdate:modelKey":T=>t.value[l.code+"_key"]=T,field:l},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["prop","rules"])]),_:2},1032,["span"]))),128))]),_:1})):(r(),f($,{key:5},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(o,{prop:"name",label:s.$t("site.name"),rules:{required:!0,message:()=>s.$t("v.required")}},{default:a(()=>[e(y,{ref:"focus",modelValue:t.value.name,"onUpdate:modelValue":u[17]||(u[17]=l=>t.value.name=l),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"protocol",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.protocol",help:""})]),default:a(()=>[e(V,{modelValue:t.value.protocol,"onUpdate:modelValue":u[18]||(u[18]=l=>t.value.protocol=l),class:"w-full"},{default:a(()=>[(r(),p(v,null,g(["http","https"],l=>e(_,{key:l,label:l,value:l},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"domain",rules:[{required:!0,message:()=>s.$t("v.required")},{pattern:/^[a-z0-9-.]*$/,message:()=>s.$t("site.error.domainPattern")},{pattern:/^(?!(uploads|templates|WEB-INF|cp)$).*/i,message:()=>s.$t("site.error.excludesPattern")}]},{label:a(()=>[e(i,{message:"site.domain",help:""})]),default:a(()=>[e(y,{modelValue:t.value.domain,"onUpdate:modelValue":u[19]||(u[19]=l=>t.value.domain=l),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"subDir",rules:[{pattern:/^[\w-]*$/,message:()=>s.$t("site.error.subDirPattern")},{pattern:/^(?!(uploads|templates|WEB-INF|cp)$).*/i,message:()=>s.$t("site.error.excludesPattern")}]},{label:a(()=>[e(i,{message:"site.subDir",help:""})]),default:a(()=>[e(y,{modelValue:t.value.subDir,"onUpdate:modelValue":u[20]||(u[20]=l=>t.value.subDir=l),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"theme",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.theme",help:""})]),default:a(()=>[e(V,{modelValue:t.value.theme,"onUpdate:modelValue":u[21]||(u[21]=l=>t.value.theme=l),class:"w-full"},{default:a(()=>[(r(!0),p(v,null,g(L.value,l=>(r(),f(_,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"mobileTheme",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.mobileTheme",help:""})]),default:a(()=>[e(V,{modelValue:t.value.mobileTheme,"onUpdate:modelValue":u[22]||(u[22]=l=>t.value.mobileTheme=l),class:"w-full"},{default:a(()=>[(r(!0),p(v,null,g(L.value,l=>(r(),f(_,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"modelId",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.model",help:""})]),default:a(()=>[e(V,{modelValue:t.value.modelId,"onUpdate:modelValue":u[23]||(u[23]=l=>t.value.modelId=l),class:"w-full"},{default:a(()=>[(r(!0),p(v,null,g(B.value,l=>(r(),f(_,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:24},{default:a(()=>[e(o,{prop:"logo"},{label:a(()=>[e(i,{message:"site.logo",help:""})]),default:a(()=>[e(h(P),{modelValue:t.value.logo,"onUpdate:modelValue":u[24]||(u[24]=l=>t.value.logo=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"seoTitle"},{label:a(()=>[e(i,{message:"site.seoTitle",help:""})]),default:a(()=>[e(y,{modelValue:t.value.seoTitle,"onUpdate:modelValue":u[25]||(u[25]=l=>t.value.seoTitle=l),maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"seoKeywords"},{label:a(()=>[e(i,{message:"site.seoKeywords",help:""})]),default:a(()=>[e(y,{modelValue:t.value.seoKeywords,"onUpdate:modelValue":u[26]||(u[26]=l=>t.value.seoKeywords=l),maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:a(()=>[e(o,{prop:"seoDescription"},{label:a(()=>[e(i,{message:"site.seoDescription",help:""})]),default:a(()=>[e(y,{modelValue:t.value.seoDescription,"onUpdate:modelValue":u[27]||(u[27]=l=>t.value.seoDescription=l),type:"textarea",rows:3,maxlength:"1000"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"pageSize",rules:{required:!0,message:()=>s.$t("v.required")}},{label:a(()=>[e(i,{message:"site.pageSize",help:""})]),default:a(()=>[e(ne,{modelValue:t.value.pageSize,"onUpdate:modelValue":u[28]||(u[28]=l=>t.value.pageSize=l),min:1,max:200},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(n,{span:12},{default:a(()=>[e(o,{prop:"status"},{label:a(()=>[e(i,{message:"site.status",help:""})]),default:a(()=>[e(K,{modelValue:t.value.status,"onUpdate:modelValue":u[29]||(u[29]=l=>t.value.status=l)},{default:a(()=>[(r(),p(v,null,g([0,1],l=>e(A,{key:l,label:l},{default:a(()=>[W(H(s.$t(`site.status.${l}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})),m.value!=="editor"||h(c).epRank>=2?(r(),p("div",Ke,[e(ie,{disabled:h(we)(`siteSettings:${m.value}:update`),loading:I.value,type:"primary","native-type":"submit",onClick:Se(ee,["prevent"])},{default:a(()=>[W(H(s.$t("save")),1)]),_:1},8,["disabled","loading","onClick"])])):ke("",!0)]),_:1},8,["model"])),[[pe,q.value]])]),_:1})]),_:1})}}});const al=Ue(Ee,[["__scopeId","data-v-daa666ab"]]);export{al as default};
