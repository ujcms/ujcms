import{aQ as t}from"./index-8830bcc4.js";const s=async()=>(await t.get("/backend/core/site/current")).data,c=async a=>(await t.get("/backend/core/site",{params:a})).data,o=async a=>(await t.get(`/backend/core/site/${a}`)).data,n=async a=>(await t.post("/backend/core/site",a)).data,d=async a=>(await t.post("/backend/core/site?_method=put",a)).data,r=async a=>(await t.post("/backend/core/site/order?_method=put",a)).data,i=async a=>(await t.post("/backend/core/site?_method=delete",a)).data,k=async a=>(await t.get(`/backend/core/site/${a}/theme`)).data,y=async a=>(await t.get("/backend/core/attachment",{params:a})).data,w=async a=>(await t.post("/backend/core/attachment?_method=delete",a)).data,p=async a=>(await t.get("/backend/core/task",{params:a})).data,b=async a=>(await t.get(`/backend/core/task/${a}`)).data,u=async a=>(await t.post("/backend/core/task",a)).data,m=async a=>(await t.post("/backend/core/task?_method=put",a)).data,h=async a=>(await t.post("/backend/core/task?_method=delete",a)).data,g=async a=>(await t.get("/backend/core/process-definition",{params:a})).data,l=async a=>(await t.get(`/backend/core/process-instance/task/${a}`)).data,q=async a=>(await t.post("/backend/core/sensitive-word/validate-sensitive-word",a)).data,v=async a=>(await t.post("/backend/core/error-word/validate-error-word",a)).data;export{q as a,c as b,g as c,y as d,w as e,b as f,u as g,h,p as i,s as j,k,o as l,n as m,d as n,i as o,r as p,l as q,m as u,v};
