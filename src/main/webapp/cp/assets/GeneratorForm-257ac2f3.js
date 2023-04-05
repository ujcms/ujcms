import{d as Q,r as y,a as v,c as b,e as _,w as a,h as e,g as $,k as f,t as i,j as w,i as d,u as G,X as ae,o as J,b as O,I as j,as as C,a2 as le,f as K,W,aH as te,aI as se,aD as ne,aJ as ue,E as U,l as T,aM as oe,a7 as de,a8 as re}from"./index-285670b0.js";import{c as ie,u as pe}from"./config-43502fd6.js";import{T as me,U as fe,V as X,W as ve,X as ce,Y as be}from"./content-214478a8.js";import{_ as Y}from"./LabelTip.vue_vue_type_script_setup_true_lang-3e1cb478.js";import{e as ye,f as _e,u as ge,g as Z,h as ke}from"./system-d8c910a1.js";import{a as $e,_ as he,b as Ve,c as we}from"./QueryItem.vue_vue_type_script_setup_true_lang-c40055fe.js";import{_ as De}from"./DialogForm.vue_vue_type_script_setup_true_lang-2cec4ef8.js";const Ce={class:"whitespace-pre-wrap"},Se={name:"TaskForm"},Ie=Q({...Se,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(B){const l=y({});return(p,t)=>{const g=v("el-input"),n=v("el-form-item"),c=v("el-col"),q=v("el-date-picker"),M=v("el-option"),z=v("el-select"),D=v("el-tag"),H=v("el-row");return b(),_(De,{values:l.value,"onUpdate:values":t[7]||(t[7]=r=>l.value=r),name:p.$t("menu.system.task"),"query-bean":d(ye),"create-bean":d(_e),"update-bean":d(ge),"delete-bean":d(Z),"bean-id":B.beanId,"bean-ids":B.beanIds,"init-values":()=>({user:{}}),"to-values":r=>({...r}),"disable-edit":()=>!0,addable:!1,perms:"task","model-value":B.modelValue,large:"","onUpdate:modelValue":t[8]||(t[8]=r=>p.$emit("update:modelValue",r)),onFinished:t[9]||(t[9]=()=>p.$emit("finished"))},{default:a(({})=>[e(H,null,{default:a(()=>[e(c,{span:12},{default:a(()=>[e(n,{prop:"name",label:p.$t("task.name")},{default:a(()=>[e(g,{modelValue:l.value.name,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value.name=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"user.username",label:p.$t("task.user")},{default:a(()=>[e(g,{modelValue:l.value.user.username,"onUpdate:modelValue":t[1]||(t[1]=r=>l.value.user.username=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"beginDate",label:p.$t("task.beginDate")},{default:a(()=>[e(q,{modelValue:l.value.beginDate,"onUpdate:modelValue":t[2]||(t[2]=r=>l.value.beginDate=r),type:"datetime"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"endDate",label:p.$t("task.endDate")},{default:a(()=>[e(q,{modelValue:l.value.endDate,"onUpdate:modelValue":t[3]||(t[3]=r=>l.value.endDate=r),type:"datetime"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"current",label:p.$t("task.current")},{default:a(()=>[e(g,{modelValue:l.value.current,"onUpdate:modelValue":t[4]||(t[4]=r=>l.value.current=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"processedIn",label:p.$t("task.processedIn")},{default:a(()=>[e(g,{modelValue:l.value.processedIn,"onUpdate:modelValue":t[5]||(t[5]=r=>l.value.processedIn=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{prop:"type",label:p.$t("task.type")},{default:a(()=>[l.value.type?(b(),_(z,{key:0,modelValue:l.value.type,"onUpdate:modelValue":t[6]||(t[6]=r=>l.value.type=r)},{default:a(()=>[e(M,{value:l.value.type,label:p.$t(`task.type.${l.value.type}`)},null,8,["value","label"])]),_:1},8,["modelValue"])):$("",!0)]),_:1},8,["label"])]),_:1}),e(c,{span:12},{default:a(()=>[e(n,{label:p.$t("task.status")},{default:a(()=>[l.value.status===0?(b(),_(D,{key:0,type:"info"},{default:a(()=>[f(i(p.$t(`task.status.${l.value.status}`)),1)]),_:1})):$("",!0),l.value.status===1?(b(),_(D,{key:1},{default:a(()=>[f(i(p.$t(`task.status.${l.value.status}`)),1)]),_:1})):$("",!0),l.value.status===2?(b(),_(D,{key:2,type:"danger"},{default:a(()=>[f(i(p.$t(`task.status.${l.value.status}`)),1)]),_:1})):$("",!0),l.value.status===3?(b(),_(D,{key:3,type:"warning"},{default:a(()=>[f(i(p.$t(`task.status.${l.value.status}`)),1)]),_:1})):$("",!0),l.value.status===4?(b(),_(D,{key:4,type:"success"},{default:a(()=>[f(i(p.$t(`task.status.${l.value.status}`)),1)]),_:1})):$("",!0)]),_:1},8,["label"])]),_:1}),l.value.errorInfo?(b(),_(c,{key:0,span:24},{default:a(()=>[e(n,{label:p.$t("task.errorInfo")},{default:a(()=>[w("pre",null,[w("code",Ce,i(l.value.errorInfo),1)])]),_:1},8,["label"])]),_:1})):$("",!0)]),_:1})]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","init-values","to-values","disable-edit","model-value"])}}}),Ue={class:"mb-3"},qe={class:"app-block mt-3"},ze={name:"TaskList"},He=Q({...ze,setup(B,{expose:l}){const{t:p}=G(),t=y({}),g=y(),n=y(1),c=y(10),q=y(0),M=y(),z=y([]),D=y([]),H=y(!1),r=y(!1),E=y(),N=ae(()=>z.value.map(s=>s.id)),o=async()=>{H.value=!0;try{const{content:s,totalElements:m}=await ke({...ne(t.value),Q_OrderBy:g.value,page:n.value,pageSize:c.value});z.value=s,q.value=m}finally{H.value=!1}};J(o);const h=({column:s,prop:m,order:P})=>{var A;m?g.value=((A=s.sortBy)!=null?A:m)+(P==="descending"?"_desc":""):g.value=void 0,o()},S=()=>o(),I=()=>{M.value.clearSort(),ue(t.value),g.value=void 0,o()},F=s=>{E.value=s,r.value=!0},L=async s=>{await Z(s),o(),U.success(p("success"))};return l({fetchData:o}),(s,m)=>{const P=v("el-button"),A=v("el-popconfirm"),V=v("el-table-column"),R=v("el-tag"),k=v("el-table"),x=v("el-pagination"),ee=O("loading");return b(),j("div",null,[w("div",Ue,[e(d(he),{params:t.value,onSearch:S,onReset:I},{default:a(()=>[e(d($e),{label:s.$t("task.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),w("div",null,[e(A,{title:s.$t("confirmDelete"),onConfirm:m[0]||(m[0]=()=>L(D.value.map(u=>u.id)))},{reference:a(()=>[e(P,{disabled:D.value.length<=0||d(C)("task:delete"),icon:d(le)},{default:a(()=>[f(i(s.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(d(Ve),{name:"task",class:"ml-2"})]),w("div",qe,[K((b(),_(k,{ref_key:"table",ref:M,data:z.value,onSelectionChange:m[1]||(m[1]=u=>D.value=u),onRowDblclick:m[2]||(m[2]=u=>F(u.id)),onSortChange:h},{default:a(()=>[e(d(we),{name:"task"},{default:a(()=>[e(V,{type:"selection",width:"45"}),e(V,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(V,{property:"name",label:s.$t("task.name"),sortable:"custom","min-width":"150","show-overflow-tooltip":""},null,8,["label"]),e(V,{property:"beginDate",label:s.$t("task.beginDate"),sortable:"custom",width:"170"},{default:a(({row:u})=>[f(i(d(W)(u.beginDate).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1},8,["label"]),e(V,{property:"endDate",label:s.$t("task.endDate"),sortable:"custom",width:"170",display:"none"},{default:a(({row:u})=>[f(i(d(W)(u.endDate).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1},8,["label"]),e(V,{property:"current",label:s.$t("task.current"),"min-width":"70",align:"right"},null,8,["label"]),e(V,{property:"processedIn",label:s.$t("task.processedIn"),"min-width":"70",align:"right"},null,8,["label"]),e(V,{property:"user.username",label:s.$t("task.user"),"sort-by":"user-username",sortable:"custom","min-width":"80",align:"right"},null,8,["label"]),e(V,{property:"status",label:s.$t("task.status"),sortable:"custom",width:"80","show-overflow-tooltip":""},{default:a(({row:u})=>[u.status===0?(b(),_(R,{key:0,type:"info",size:"small"},{default:a(()=>[f(i(s.$t(`task.status.${u.status}`)),1)]),_:2},1024)):$("",!0),u.status===1?(b(),_(R,{key:1,size:"small"},{default:a(()=>[f(i(s.$t(`task.status.${u.status}`)),1)]),_:2},1024)):$("",!0),u.status===2?(b(),_(R,{key:2,type:"danger",size:"small"},{default:a(()=>[f(i(s.$t(`task.status.${u.status}`)),1)]),_:2},1024)):$("",!0),u.status===3?(b(),_(R,{key:3,type:"warning",size:"small"},{default:a(()=>[f(i(s.$t(`task.status.${u.status}`)),1)]),_:2},1024)):$("",!0),u.status===4?(b(),_(R,{key:4,type:"success",size:"small"},{default:a(()=>[f(i(s.$t(`task.status.${u.status}`)),1)]),_:2},1024)):$("",!0)]),_:1},8,["label"]),e(V,{label:s.$t("table.action")},{default:a(({row:u})=>[e(P,{type:"primary",disabled:d(C)("task:show"),size:"small",link:"",onClick:()=>F(u.id)},{default:a(()=>[f(i(s.$t("detail")),1)]),_:2},1032,["disabled","onClick"]),e(A,{title:s.$t("confirmDelete"),onConfirm:()=>L([u.id])},{reference:a(()=>[e(P,{type:"primary",disabled:d(C)("task:delete"),size:"small",link:""},{default:a(()=>[f(i(s.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[ee,H.value]]),e(x,{currentPage:n.value,"onUpdate:currentPage":m[3]||(m[3]=u=>n.value=u),pageSize:c.value,"onUpdate:pageSize":m[4]||(m[4]=u=>c.value=u),total:q.value,"page-sizes":d(te),layout:d(se),small:"",background:"",class:"px-3 py-2 justify-end",onSizeChange:m[5]||(m[5]=()=>o()),onCurrentChange:m[6]||(m[6]=()=>o())},null,8,["currentPage","pageSize","total","page-sizes","layout"])]),e(Ie,{modelValue:r.value,"onUpdate:modelValue":m[7]||(m[7]=u=>r.value=u),"bean-id":E.value,"bean-ids":d(N),onFinished:o},null,8,["modelValue","bean-id","bean-ids"])])}}}),Pe={class:"p-3 app-block"},Ae=w("span",{class:"mx-2"},"|",-1),Re={class:"mt-3 p-3 app-block"},Te={class:"pb-2 border-b text-gray-primary"},Ye={class:"mt-3 p-3 app-block"},Me={class:"text-gray-primary"},Be={name:"GeneratorForm"},Xe=Q({...Be,setup(B){const{t:l}=G(),p=y(),t=y({}),g=y(!1),n=y(!1),c=y(),q=async()=>{t.value=await ie()};J(async()=>{g.value=!0;try{await q()}finally{g.value=!1}});const M=async()=>{n.value=!0;try{await me(),await c.value.fetchData(),U.success(l("success"))}finally{n.value=!1}},z=async()=>{n.value=!0;try{await fe(),await c.value.fetchData(),U.success(l("success"))}finally{n.value=!1}},D=async()=>{n.value=!0;try{await X(),await c.value.fetchData(),U.success(l("success"))}finally{n.value=!1}},H=async()=>{n.value=!0;try{await ve(),U.success(l("success"))}finally{n.value=!1}},r=async()=>{n.value=!0;try{await ce(),await c.value.fetchData(),U.success(l("success"))}finally{n.value=!1}},E=async()=>{n.value=!0;try{await be(),await c.value.fetchData(),U.success(l("success"))}finally{n.value=!1}},N=()=>{p.value&&p.value.validate(async o=>{if(o){g.value=!0;try{await pe(t.value),await X(),await c.value.fetchData(),U.success(l("success"))}finally{g.value=!1}}})};return(o,h)=>{const S=v("el-button"),I=v("el-form-item"),F=v("el-form"),L=v("el-switch"),s=v("el-col"),m=v("el-input"),P=v("el-option"),A=v("el-select"),V=v("el-row"),R=O("loading");return b(),j("div",null,[w("div",Pe,[e(F,{"label-width":"200px"},{default:a(()=>[e(I,null,{label:a(()=>[e(Y,{message:"generator.fulltext",help:""})]),default:a(()=>[e(S,{disabled:d(C)("generator:fulltext:reindexAll"),loading:n.value,type:"primary",plain:"",onClick:T(M,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.fulltext.reindexAll")),1)]),_:1},8,["disabled","loading","onClick"]),d(oe)("generator:fulltext:reindexSite")?(b(),_(S,{key:0,disabled:d(C)("generator:fulltext:reindexSite"),loading:n.value,type:"primary",plain:"",onClick:T(z,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.fulltext.reindexSite")),1)]),_:1},8,["disabled","loading","onClick"])):$("",!0)]),_:1}),e(I,null,{label:a(()=>[e(Y,{message:"generator.html",help:""})]),default:a(()=>[e(S,{disabled:d(C)("generator:html"),loading:n.value,type:"primary",plain:"",onClick:T(D,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.html.all")),1)]),_:1},8,["disabled","loading","onClick"]),Ae,e(S,{disabled:d(C)("generator:html"),loading:n.value,type:"primary",plain:"",onClick:T(H,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.html.home")),1)]),_:1},8,["disabled","loading","onClick"]),e(S,{disabled:d(C)("generator:html"),loading:n.value,type:"primary",plain:"",onClick:T(r,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.html.channel")),1)]),_:1},8,["disabled","loading","onClick"]),e(S,{disabled:d(C)("generator:html"),loading:n.value,type:"primary",plain:"",onClick:T(E,["prevent"])},{default:a(()=>[f(i(o.$t("generator.op.html.article")),1)]),_:1},8,["disabled","loading","onClick"])]),_:1})]),_:1})]),w("div",Re,[w("div",Te,i(o.$t("site.settings.html")),1),K((b(),_(F,{ref_key:"form",ref:p,class:"mt-3",model:t.value,disabled:d(C)("siteSettings:html:update"),"label-width":"200px"},{default:a(()=>[e(V,null,{default:a(()=>[e(s,{span:12},{default:a(()=>[e(I,{prop:"enabled",rules:{required:!0,message:()=>o.$t("v.required")}},{label:a(()=>[e(Y,{message:"site.html.enabled",help:""})]),default:a(()=>[e(L,{modelValue:t.value.enabled,"onUpdate:modelValue":h[0]||(h[0]=k=>t.value.enabled=k)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:a(()=>[e(I,{prop:"auto",rules:{required:!0,message:()=>o.$t("v.required")}},{label:a(()=>[e(Y,{message:"site.html.auto",help:""})]),default:a(()=>[e(L,{modelValue:t.value.auto,"onUpdate:modelValue":h[1]||(h[1]=k=>t.value.auto=k)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:a(()=>[e(I,{prop:"channel",rules:{required:!0,message:()=>o.$t("v.required")}},{label:a(()=>[e(Y,{message:"site.html.channel",help:""})]),default:a(()=>[e(m,{modelValue:t.value.channel,"onUpdate:modelValue":h[2]||(h[2]=k=>t.value.channel=k),maxlength:"100"},{append:a(()=>[f(".html")]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:a(()=>[e(I,{prop:"article",rules:{required:!0,message:()=>o.$t("v.required")}},{label:a(()=>[e(Y,{message:"site.html.article",help:""})]),default:a(()=>[e(m,{modelValue:t.value.article,"onUpdate:modelValue":h[3]||(h[3]=k=>t.value.article=k),maxlength:"100"},{append:a(()=>[f(".html")]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(s,{span:12},{default:a(()=>[e(I,{prop:"listPages",rules:{required:!0,message:()=>o.$t("v.required")}},{label:a(()=>[e(Y,{message:"site.html.listPages",help:""})]),default:a(()=>[e(A,{modelValue:t.value.listPages,"onUpdate:modelValue":h[4]||(h[4]=k=>t.value.listPages=k),placeholder:"Select"},{default:a(()=>[(b(),j(de,null,re([{label:"1",value:1},{label:"3",value:3},{label:"10",value:10},{label:"100",value:100},{label:"1000",value:1e3},{label:"全部",value:2147483647}],k=>e(P,{key:k.value,label:k.label,value:k.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),w("div",null,[e(S,{disabled:d(C)("siteSettings:html:update"),type:"primary","native-type":"submit",onClick:T(N,["prevent"])},{default:a(()=>[f(i(o.$t("submit")),1)]),_:1},8,["disabled","onClick"])])]),_:1},8,["model","disabled"])),[[R,g.value]])]),w("div",Ye,[w("div",Me,i(o.$t("generator.taskList")),1)]),e(He,{ref_key:"taskListRef",ref:c,class:"mt-3"},null,512)])}}});export{Xe as default};