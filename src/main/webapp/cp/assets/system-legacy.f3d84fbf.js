System.register(["./index-legacy.f1446c47.js"],(function(a){"use strict";var t;return{setters:[function(a){t=a.f}],execute:function(){a("f",(async a=>(await t.get("/backend/core/site",{params:a})).data)),a("q",(async a=>(await t.get("/backend/core/attachment",{params:a})).data)),a("d",(async a=>(await t.post("/backend/core/attachment?_method=delete",a)).data)),a("e",(async a=>(await t.get("/backend/core/task",{params:a})).data)),a("a",(async a=>(await t.get(`/backend/core/task/${a}`)).data)),a("c",(async a=>(await t.post("/backend/core/task",a)).data)),a("u",(async a=>(await t.post("/backend/core/task?_method=put",a)).data)),a("b",(async a=>(await t.post("/backend/core/task?_method=delete",a)).data))}}}));