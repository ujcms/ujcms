System.register(["./index-legacy-CiIiERxr.js"],(function(a,t){"use strict";var e;return{setters:[a=>{e=a.a_}],execute:function(){a("m",(async()=>(await e.get("/backend/core/site/current")).data)),a("d",(async a=>(await e.get("/backend/core/site",{params:a})).data)),a("g",(async a=>(await e.get("/backend/core/attachment",{params:a})).data)),a("h",(async a=>(await e.post("/backend/core/attachment?_method=delete",a)).data)),a("l",(async a=>(await e.get("/backend/core/task",{params:a})).data)),a("i",(async a=>(await e.get(`/backend/core/task/${a}`)).data)),a("j",(async a=>(await e.post("/backend/core/task",a)).data)),a("u",(async a=>(await e.post("/backend/core/task?_method=put",a)).data)),a("k",(async a=>(await e.post("/backend/core/task?_method=delete",a)).data)),a("e",(async a=>(await e.get("/backend/core/process-model",{params:a})).data)),a("f",(async a=>(await e.get("/backend/core/process-definition",{params:a})).data)),a("q",(async a=>(await e.get(`/backend/core/process-instance/task/${a}`)).data)),a("a",(async a=>(await e.get(`/backend/core/process-instance/back-activity/${a}`)).data)),a("c",(async a=>(await e.get("/backend/core/process-form/task-form-properties",{params:{taskId:a}})).data)),a("b",(async a=>(await e.post("/backend/core/sensitive-word/validate-sensitive-word",a)).data)),a("v",(async a=>(await e.post("/backend/core/error-word/validate-error-word",a)).data))}}}));