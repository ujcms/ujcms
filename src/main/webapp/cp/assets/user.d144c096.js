import{s as e}from"./index.e8481b3d.js";const o=async a=>(await e.get("/backend/core/org",{params:a})).data,s=async a=>(await e.get(`/backend/core/org/${a}`)).data,c=async a=>(await e.post("/backend/core/org",a)).data,r=async a=>(await e.post("/backend/core/org?_method=put",a)).data,d=async a=>(await e.post("/backend/core/org/order?_method=put",a)).data,n=async a=>(await e.post("/backend/core/org?_method=delete",a)).data,i=async a=>(await e.get("/backend/core/role",{params:a})).data,p=async a=>(await e.get(`/backend/core/role/${a}`)).data,u=async a=>(await e.post("/backend/core/role",a)).data,y=async a=>(await e.post("/backend/core/role?_method=put",a)).data,g=async a=>(await e.post("/backend/core/role/order?_method=put",a)).data,l=async a=>(await e.post("/backend/core/role?_method=delete",a)).data,b=async a=>(await e.get("/backend/core/group",{params:a})).data,k=async a=>(await e.get(`/backend/core/group/${a}`)).data,w=async a=>(await e.post("/backend/core/group",a)).data,m=async a=>(await e.post("/backend/core/group?_method=put",a)).data,h=async a=>(await e.post("/backend/core/group/order?_method=put",a)).data,_=async a=>(await e.post("/backend/core/group?_method=delete",a)).data,q=async a=>(await e.get("/backend/core/user",{params:a})).data,O=async a=>(await e.get(`/backend/core/user/${a}`)).data,G=async a=>(await e.post("/backend/core/user",a)).data,R=async a=>(await e.post("/backend/core/user?_method=put",a)).data,v=async a=>(await e.post("/backend/core/user?_method=delete",a)).data,U=async a=>(await e.get("/backend/core/user/username-validation",{params:{username:a}})).data,$=async a=>(await e.get("/backend/core/user/email-validation",{params:{email:a}})).data,L=async a=>(await e.get("/backend/core/user/mobile-validation",{params:{mobile:a}})).data;export{o as a,i as b,O as c,G as d,$ as e,R as f,v as g,q as h,p as i,u as j,y as k,l,L as m,g as n,k as o,w as p,b as q,m as r,_ as s,h as t,U as u,s as v,c as w,r as x,n as y,d as z};
