System.register([],(function(e,d){"use strict";return{execute:function(){e("t",(e=>{const d=[],n={};return e.forEach((e=>{n[e.id]=e})),e.forEach((e=>{const r=n[e.parentId];r?r.children?r.children.push(e):r.children=[e]:d.push(e)})),d}));const d=(e,n,r)=>{n.forEach((n=>{const i={...n,depth:r};e.push(i),i.children&&(d(e,i.children,r+1),i.children=void 0)}))},n=(e("f",(e=>{const n=[];return d(n,e,0),n})),e("g",((e,d)=>{for(let r=0,i=e.length;r<i;r+=1){let i;if(e[r].children&&(i=n(e[r].children,d),i))return i;if(i=e.find(d),i)return i}}))),r=(e,d,n)=>(e.forEach((e=>{(n||e.id===d)&&(e.disabled=!0),e.children&&r(e.children,d,e.disabled)})),e),i=(e("b",((e,d)=>d?r(e,d,!1):e)),e("d",(e=>(e.forEach((e=>{e.children?(e.disabled=e.children.length>0,i(e.children)):e.disabled=!1})),e)))),c=e("a",((e,d)=>(!d||d.length<=0||e.forEach((e=>{d.includes(e.id)&&(e.disabled=!0),e.children&&c(e.children,d)})),e))),l=(e,d)=>(e.forEach((e=>{d.includes(e.id)||(e.disabled=!0),e.children&&l(e.children,d)})),e),h=(e("c",((e,d)=>d?l(e,d):e)),e("e",((e,d)=>{let n=!0;return e.forEach((e=>{e.children&&e.children.length>0||d.includes(e.key)||d.includes("*")?n=!1:e.disabled=!0,e.children&&(e.disabled=h(e.children,d))})),n})))}}}));
