import{d as I,p as A,u as E,a as k,r as C,a5 as c,b as d,e as p,I as L,i as _,w as N,b1 as $,j as f,ab as x,ac as z,f as M,h as O,E as T,ae as V,k as j,t as D,_ as F}from"./index-3561018d.js";import{f as H,Q as m,R,S as J,i as Q}from"./config-2049145c.js";/* empty css                                                                   */const q=I({__name:"BaseUpload",props:{type:{type:String,default:"file",validator:a=>["image","video","audio","library","doc","file","any"].includes(a)},button:{type:String,default:null},data:{type:Object,default:null},uploadAction:{type:String,default:null},fileAccept:{type:String,default:null},fileMaxSize:{type:Number,default:null},multiple:{type:Boolean},disabled:{type:Boolean,default:!1},onSuccess:{type:Function,default:null}},setup(a){const v=a,{type:r,uploadAction:l,fileAccept:o,fileMaxSize:u}=A(v),{t:y}=E(),e=k(),s=C({}),g=c(()=>{if((l==null?void 0:l.value)!=null)return l.value;switch(r.value){case"image":return Q;case"video":return J;case"audio":return R;case"library":return m;case"doc":return m;case"file":return H;default:throw new Error(`Type not support: ${r.value}`)}}),b=c(()=>{if((o==null?void 0:o.value)!=null)return o.value;switch(r.value){case"image":return e.upload.imageInputAccept;case"video":return e.upload.videoInputAccept;case"audio":return e.upload.audioInputAccept;case"library":return e.upload.libraryInputAccept;case"doc":return e.upload.docInputAccept;case"file":return e.upload.fileInputAccept;case"any":return;default:throw new Error(`Type not support: ${r.value}`)}}),n=c(()=>{if((u==null?void 0:u.value)!=null)return u.value;switch(r.value){case"image":return e.upload.imageLimitByte;case"video":return e.upload.videoLimitByte;case"audio":return e.upload.audioLimitByte;case"library":return e.upload.libraryLimitByte;case"doc":return e.upload.docLimitByte;case"file":return e.upload.fileLimitByte;default:return 0}}),B=t=>n.value>0&&t.size>n.value?(T.error(y("error.fileMaxSize",{size:`${n.value/1024/1024} MB`})),!1):!0,S=t=>{V(JSON.parse(t.message))};return(t,G)=>{const U=d("el-upload"),h=d("el-progress");return p(),L("div",null,[_(U,{action:g.value,headers:{...f(x)(),...f(z)()},data:a.data,accept:b.value,"before-upload":B,"on-success":a.onSuccess,"on-progress":(i,w)=>s.value=w,"on-error":S,"show-file-list":!1,disabled:a.disabled,multiple:a.multiple,drag:""},{default:N(()=>[$(t.$slots,"default",{},()=>{var i;return[j("span",null,D((i=a.button)!=null?i:t.$t("clickOrDragToUpload")),1)]},!0)]),_:3},8,["action","headers","data","accept","on-success","on-progress","disabled","multiple"]),s.value.status==="uploading"?(p(),M(h,{key:0,percentage:parseInt(s.value.percentage,10)},null,8,["percentage"])):O("",!0)])}}}),X=F(q,[["__scopeId","data-v-bf818630"]]);export{X as B};