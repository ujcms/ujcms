import{aL as e}from"./index-0188cf50.js";const o=async a=>(await e.get("/backend/core/org",{params:a})).data,c=async a=>(await e.get(`/backend/core/org/${a}`)).data,r=async a=>(await e.post("/backend/core/org",a)).data,n=async a=>(await e.post("/backend/core/org?_method=put",a)).data,d=async a=>(await e.post("/backend/core/org/order?_method=put",a)).data,p=async a=>(await e.post("/backend/core/org?_method=delete",a)).data,i=async a=>(await e.get("/backend/core/role",{params:a})).data,u=async a=>(await e.get(`/backend/core/role/${a}`)).data,m=async a=>(await e.post("/backend/core/role",a)).data,y=async a=>(await e.post("/backend/core/role?_method=put",a)).data,l=async a=>(await e.post("/backend/core/role/permission?_method=put",a)).data,w=async a=>(await e.post("/backend/core/role/order?_method=put",a)).data,b=async a=>(await e.post("/backend/core/role?_method=delete",a)).data,g=async(a,t)=>(await e.get("/backend/core/role/article-permissions",{params:{roleId:a,siteId:t}})).data,k=async(a,t)=>(await e.get("/backend/core/role/channel-permissions",{params:{roleId:a,siteId:t}})).data,h=async a=>(await e.get("/backend/core/role/scope-not-allowed",{params:{scope:a}})).data,_=async a=>(await e.get("/backend/core/group",{params:a})).data,q=async a=>(await e.get(`/backend/core/group/${a}`)).data,O=async a=>(await e.post("/backend/core/group",a)).data,x=async a=>(await e.post("/backend/core/group?_method=put",a)).data,G=async a=>(await e.post("/backend/core/group/permission?_method=put",a)).data,U=async a=>(await e.post("/backend/core/group/order?_method=put",a)).data,P=async a=>(await e.post("/backend/core/group?_method=delete",a)).data,R=async(a,t)=>(await e.get("/backend/core/group/access-permissions",{params:{groupId:a,siteId:t}})).data,L=async a=>(await e.get("/backend/core/user",{params:a})).data,A=async a=>(await e.get(`/backend/core/user/${a}`)).data,E=async a=>(await e.post("/backend/core/user",a)).data,$=async a=>(await e.post("/backend/core/user?_method=put",a)).data,f=async a=>(await e.post("/backend/core/user/permission?_method=put",a)).data,v=async(a,t)=>(await e.post("/backend/core/user/password?_method=put",{id:a,password:t})).data,C=async(a,t)=>(await e.post("/backend/core/user/status?_method=put",{ids:a,status:t})).data,S=async a=>(await e.post("/backend/core/user?_method=delete",a)).data,j=async a=>(await e.get("/backend/core/user/username-exist",{params:{username:a}})).data,z=async a=>(await e.get("/backend/core/user/email-exist",{params:{email:a}})).data,B=async a=>(await e.get("/backend/core/user/mobile-exist",{params:{mobile:a}})).data;export{p as A,d as B,q as C,O as D,x as E,P as F,G,R as H,U as I,A as a,$ as b,E as c,S as d,z as e,_ as f,v as g,i as h,f as i,L as j,C as k,u as l,B as m,m as n,y as o,b as p,o as q,h as r,l as s,g as t,j as u,k as v,w,c as x,r as y,n as z};