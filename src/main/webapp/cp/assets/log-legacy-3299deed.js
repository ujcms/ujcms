System.register(["./index-legacy-4bc56a93.js"],(function(a,e){"use strict";var t;return{setters:[a=>{t=a.aR}],execute:function(){a("a",(async a=>(await t.get("/backend/core/short-message",{params:a})).data)),a("q",(async a=>(await t.get(`/backend/core/short-message/${a}`)).data)),a("c",(async a=>(await t.post("/backend/core/short-message",a)).data)),a("u",(async a=>(await t.post("/backend/core/short-message?_method=put",a)).data)),a("d",(async a=>(await t.post("/backend/core/short-message?_method=delete",a)).data)),a("h",(async a=>(await t.get("/backend/core/login-log",{params:a})).data)),a("b",(async a=>(await t.get(`/backend/core/login-log/${a}`)).data)),a("e",(async a=>(await t.post("/backend/core/login-log",a)).data)),a("f",(async a=>(await t.post("/backend/core/login-log?_method=put",a)).data)),a("g",(async a=>(await t.post("/backend/core/login-log?_method=delete",a)).data)),a("m",(async a=>(await t.get("/backend/core/operation-log",{params:a})).data)),a("i",(async a=>(await t.get(`/backend/core/operation-log/${a}`)).data)),a("j",(async a=>(await t.post("/backend/core/operation-log",a)).data)),a("k",(async a=>(await t.post("/backend/core/operation-log?_method=put",a)).data)),a("l",(async a=>(await t.post("/backend/core/operation-log?_method=delete",a)).data))}}}));