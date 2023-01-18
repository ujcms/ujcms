import{d as J,u as j,r as e,o as Q,q as W,a as d,b as te,c as k,e as S,w as u,f as oe,g as N,h as a,i as m,s as D,j as F,k as R,t as E,l as z,m as O,n as re,E as X,p as ue,v as ne,x as ie,y as Y,z as Z,A as ee,B as de,C as pe,D as me,F as ce,G as ve,H as fe,I as ge,J as we,K as he,L as ye,M as be,N as Ve,O as _e,P as $e,_ as Me}from"./index-07310ff6.js";const ke={name:"ChangePassword"},qe=J({...ke,props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":null},setup(B,{emit:q}){const{t:x}=j(),l=e({}),V=e(),y=e(),_=e(!1),v=e(!1),f=e(""),g=e();Q(async()=>{_.value=!0;try{f.value=await W()}finally{_.value=!1}});const C=()=>{V.value.validate(async s=>{if(s){v.value=!0;try{const i=O(l.value.password,f.value),U=O(l.value.newPassword,f.value),t=await re({...l.value,password:i,newPassword:U,passwordAgain:void 0});if(t.status!==0){g.value=t.message;return}g.value=void 0,V.value.resetFields(),X.success(x("success")),q("update:modelValue",!1)}finally{v.value=!1}}})};return(s,i)=>{const U=d("el-alert"),t=d("el-input"),n=d("el-form-item"),w=d("el-button"),P=d("el-form"),h=d("el-dialog"),L=te("loading");return k(),S(h,{title:s.$t("changePassword"),"model-value":B.modelValue,"onUpdate:modelValue":i[4]||(i[4]=p=>s.$emit("update:modelValue",p)),onOpened:i[5]||(i[5]=p=>{var $;($=y.value)==null||$.focus(),V.value.resetFields()})},{default:u(()=>[oe((k(),S(P,{ref_key:"form",ref:V,model:l.value,"label-width":"150px","label-position":"right"},{default:u(()=>[g.value?(k(),S(U,{key:0,title:g.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):N("",!0),a(n,{prop:"username",label:s.$t("user.username"),rules:[{required:!0,message:()=>s.$t("v.required")}]},{default:u(()=>[a(t,{modelValue:l.value.username,"onUpdate:modelValue":i[0]||(i[0]=p=>l.value.username=p),ref_key:"focus",ref:y,maxlength:"30"},null,8,["modelValue"])]),_:1},8,["label","rules"]),a(n,{prop:"password",label:s.$t("user.origPassword"),rules:[{required:!0,message:()=>s.$t("v.required")}]},{default:u(()=>[a(t,{modelValue:l.value.password,"onUpdate:modelValue":i[1]||(i[1]=p=>l.value.password=p),maxlength:"50","show-password":""},null,8,["modelValue"])]),_:1},8,["label","rules"]),a(n,{prop:"newPassword",label:s.$t("user.newPassword"),rules:[{required:!0,message:()=>s.$t("v.required")},{min:m(D).passwordMinLength,max:m(D).passwordMaxLength,message:()=>s.$t("user.error.passwordLength",{min:m(D).passwordMinLength,max:m(D).passwordMaxLength})},{pattern:new RegExp(m(D).passwordPattern),message:()=>s.$t(`user.error.passwordPattern.${m(D).passwordStrength}`)}]},{default:u(()=>[a(t,{modelValue:l.value.newPassword,"onUpdate:modelValue":i[2]||(i[2]=p=>l.value.newPassword=p),maxlength:m(D).passwordMaxLength,"show-password":""},null,8,["modelValue","maxlength"])]),_:1},8,["label","rules"]),a(n,{prop:"passwordAgain",label:s.$t("user.passwordAgain"),rules:[{required:!0,message:()=>s.$t("v.required")},{validator:(p,$,T)=>{if($!==l.value.newPassword){T(s.$t("user.error.passwordNotMatch"));return}T()}}]},{default:u(()=>[a(t,{modelValue:l.value.passwordAgain,"onUpdate:modelValue":i[3]||(i[3]=p=>l.value.passwordAgain=p),maxlength:"50","show-password":""},null,8,["modelValue"])]),_:1},8,["label","rules"]),F("div",null,[a(w,{loading:v.value,onClick:z(C,["prevent"]),type:"primary","native-type":"submit"},{default:u(()=>[R(E(s.$t("submit")),1)]),_:1},8,["loading","onClick"])])]),_:1},8,["model"])),[[L,_.value]])]),_:1},8,["title","model-value"])}}}),Ce={name:"GetShortMessage"},Pe=J({...Ce,props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":null,finish:null},setup(B,{emit:q}){const x=B,{modelValue:l}=ue(x),{t:V}=j(),y=e(),_=e(),v=e({}),f=e(!1),g=e(),C=e(),s=e(),i=async()=>{const{token:t,image:n}=await ee();C.value="data:image/png;base64,"+n,s.value=t};ne(l,()=>{l.value&&i()});const U=()=>{y.value.validate(async t=>{var n;if(t){f.value=!0;try{const w=await de((n=s.value)!=null?n:"",v.value.captcha,v.value.mobile,3);if(console.log(w),w.status!==0){g.value=w.message;return}g.value=void 0,y.value.resetFields(),X.success(V("success")),q("finish",w.result.shortMessageId),q("update:modelValue",!1)}finally{f.value=!1}}})};return(t,n)=>{const w=d("el-alert"),P=d("el-input"),h=d("el-form-item"),L=d("el-image"),p=d("el-button"),$=d("el-form"),T=d("el-dialog");return k(),S(T,{title:t.$t("getShortMessage"),"model-value":B.modelValue,"onUpdate:modelValue":n[3]||(n[3]=b=>t.$emit("update:modelValue",b)),onOpened:n[4]||(n[4]=b=>{var I;(I=_.value)==null||I.focus(),y.value.resetFields()}),width:"576px"},{default:u(()=>[a($,{ref_key:"form",ref:y,model:v.value,"label-width":"150px","label-position":"right"},{default:u(()=>[g.value?(k(),S(w,{key:0,title:g.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):N("",!0),a(h,{prop:"mobile",label:t.$t("mobile"),rules:[{required:!0,message:()=>t.$t("v.required")},{asyncValidator:async(b,I,o)=>{if(await m(ie)(I)){o(t.$t("mobileNotExist"));return}o()},trigger:"blur"}]},{default:u(()=>[a(P,{modelValue:v.value.mobile,"onUpdate:modelValue":n[0]||(n[0]=b=>v.value.mobile=b),ref_key:"focus",ref:_,maxlength:"30"},null,8,["modelValue"])]),_:1},8,["label","rules"]),a(h,{prop:"captcha",label:t.$t("captcha"),rules:[{required:!0,message:()=>t.$t("v.required")},{asyncValidator:async(b,I,o)=>{if(s.value==null||!await m(Y)(s.value,I)){o(t.$t("captchaIncorrect"));return}o()},trigger:"blur"}],class:"captcha"},{default:u(()=>[a(P,{modelValue:v.value.captcha,"onUpdate:modelValue":n[2]||(n[2]=b=>v.value.captcha=b),name:"captcha",placeholder:t.$t("captcha"),"prefix-icon":m(Z)},{append:u(()=>[a(L,{src:C.value,style:{height:"30px","margin-right":"1px"},class:"rounded-r cursor-pointer",onClick:n[1]||(n[1]=b=>i()),title:t.$t("clickToRetrieveCaptcha")},null,8,["src","title"])]),_:1},8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["label","rules"]),F("div",null,[a(p,{loading:f.value,onClick:z(U,["prevent"]),type:"primary","native-type":"submit"},{default:u(()=>[R(E(t.$t("submit")),1)]),_:1},8,["loading","onClick"])])]),_:1},8,["model"])]),_:1},8,["title","model-value"])}}}),Le={class:"h-full p-3 bg-gray-100"},Ie={class:"py-5 text-center text-3xl font-bold text-primary"},Se={class:"mt-2 text-right"},Ue=J({__name:"Login",setup(B){const{t:q}=j(),x=e(),l=e({}),V=e(),y=e(!1),_=e(!1),v=e(),f=e(),g=e(),C=e(),s=e(!1),i=e(),U=pe(),t=me(),n="UJCMS",w=e(!1),P=e(!1),h=e(60),L=e(q("getShortMessage"));ce(),ve();const p=async()=>{const{token:o,image:r}=await ee();v.value="data:image/png;base64,"+r,f.value=o},$=async()=>{y.value=await be(),y.value&&p()},T=async()=>{_.value=await Ve()};Q(async()=>{V.value.focus(),V.value.select(),$(),T()}),fe(()=>{i.value=U.query.redirect});const b=o=>{g.value=o,h.value-=1,L.value=String(h.value);const r=setInterval(()=>{h.value-=1,L.value=String(h.value),h.value<=0&&(L.value=q("getShortMessage"),h.value=60,clearInterval(r))},1e3)},I=()=>{x.value.validate(async o=>{if(o){s.value=!0;try{const r=await W(),K=O(l.value.password,r),M=await _e({...l.value,password:K,captchaToken:f.value,shortMessageId:g.value});if(M.status!==0){$(),C.value=M.message;return}M.result.remainingDays!=null&&$e.alert(q("passwordRemaingDays",{remainingDays:M.result.remainingDays}),{type:"warning"}),i.value?t.push(i.value):window.location.reload()}finally{s.value=!1}}})};return(o,r)=>{const K=d("el-alert"),M=d("el-input"),A=d("el-form-item"),G=d("el-button"),ae=d("el-image"),le=d("el-form");return k(),ge("div",Le,[a(le,{ref_key:"form",ref:x,model:l.value,class:"mx-auto md:max-w-xs"},{default:u(()=>[F("h3",Ie,E(m(n)),1),C.value?(k(),S(K,{key:0,title:C.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):N("",!0),a(A,{prop:"username",rules:[{required:!0,message:()=>o.$t("v.required")}]},{default:u(()=>[a(M,{ref_key:"focus",ref:V,modelValue:l.value.username,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value.username=c),name:"username",placeholder:o.$t("username"),"prefix-icon":m(we),autocomplete:"on"},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"]),a(A,{prop:"password",rules:[{required:!0,message:()=>o.$t("v.required")}]},{default:u(()=>[a(M,{ref:"password",modelValue:l.value.password,"onUpdate:modelValue":r[1]||(r[1]=c=>l.value.password=c),type:"password",name:"password",placeholder:o.$t("password"),"prefix-icon":m(he),"show-password":""},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"]),_.value?(k(),S(A,{key:1,prop:"shortMessageValue",rules:[{required:!0,message:()=>o.$t("v.required")}]},{default:u(()=>[a(M,{modelValue:l.value.shortMessageValue,"onUpdate:modelValue":r[3]||(r[3]=c=>l.value.shortMessageValue=c),name:"shortMessageValue",placeholder:o.$t("shortMessage"),"prefix-icon":m(ye)},{append:u(()=>[a(G,{disabled:h.value<60,onClick:r[2]||(r[2]=c=>P.value=!0)},{default:u(()=>[R(E(L.value),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])):N("",!0),y.value?(k(),S(A,{key:2,prop:"captcha",rules:[{required:!0,message:()=>o.$t("v.required")},{asyncValidator:async(c,se,H)=>{if(f.value==null||!await m(Y)(f.value,se)){H(o.$t("captchaIncorrect"));return}H()},trigger:"blur"}],class:"captcha"},{default:u(()=>[a(M,{modelValue:l.value.captcha,"onUpdate:modelValue":r[5]||(r[5]=c=>l.value.captcha=c),name:"captcha",placeholder:o.$t("captcha"),"prefix-icon":m(Z)},{append:u(()=>[a(ae,{src:v.value,style:{height:"30px","margin-right":"1px"},class:"rounded-r cursor-pointer",onClick:r[4]||(r[4]=c=>p()),title:o.$t("clickToRetrieveCaptcha")},null,8,["src","title"])]),_:1},8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])):N("",!0),a(G,{type:"primary","native-type":"submit",class:"w-full",loading:s.value,onClick:z(I,["prevent"])},{default:u(()=>[R(E(o.$t("login")),1)]),_:1},8,["loading","onClick"]),F("div",Se,[a(G,{type:"primary",onClick:r[6]||(r[6]=c=>w.value=!0),link:""},{default:u(()=>[R(E(o.$t("changePassword")),1)]),_:1})])]),_:1},8,["model"]),a(qe,{modelValue:w.value,"onUpdate:modelValue":r[7]||(r[7]=c=>w.value=c)},null,8,["modelValue"]),a(Pe,{modelValue:P.value,"onUpdate:modelValue":r[8]||(r[8]=c=>P.value=c),onFinish:b},null,8,["modelValue"])])}}});const xe=Me(Ue,[["__scopeId","data-v-b6e90290"]]);export{xe as default};