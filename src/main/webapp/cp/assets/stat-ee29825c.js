import{al as E,aj as N,aL as v}from"./index-0188cf50.js";var j={exports:{}};(function(c,I){(function(g,u){c.exports=u()})(E,function(){var g,u,p=1e3,M=6e4,S=36e5,b=864e5,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,k=31536e6,Y=2592e6,q=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:k,months:Y,days:b,hours:S,minutes:M,seconds:p,milliseconds:1,weeks:6048e5},y=function(i){return i instanceof x},l=function(i,s,t){return new x(i,t,s.$l)},$=function(i){return u.p(i)+"s"},H=function(i){return i<0},d=function(i){return H(i)?Math.ceil(i):Math.floor(i)},O=function(i){return Math.abs(i)},f=function(i,s){return i?H(i)?{negative:!0,format:""+O(i)+s}:{negative:!1,format:""+i+s}:{negative:!1,format:""}},x=function(){function i(t,n,r){var e=this;if(this.$d={},this.$l=r,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),n)return l(t*m[$(n)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(h){e.$d[$(h)]=t[h]}),this.calMilliseconds(),this;if(typeof t=="string"){var o=t.match(q);if(o){var a=o.slice(2).map(function(h){return h!=null?Number(h):0});return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}var s=i.prototype;return s.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(n,r){return n+(t.$d[r]||0)*m[r]},0)},s.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=d(t/k),t%=k,this.$d.months=d(t/Y),t%=Y,this.$d.days=d(t/b),t%=b,this.$d.hours=d(t/S),t%=S,this.$d.minutes=d(t/M),t%=M,this.$d.seconds=d(t/p),t%=p,this.$d.milliseconds=t},s.toISOString=function(){var t=f(this.$d.years,"Y"),n=f(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var e=f(r,"D"),o=f(this.$d.hours,"H"),a=f(this.$d.minutes,"M"),h=this.$d.seconds||0;this.$d.milliseconds&&(h+=this.$d.milliseconds/1e3);var w=f(h,"S"),F=t.negative||n.negative||e.negative||o.negative||a.negative||w.negative,T=o.format||a.format||w.format?"T":"",D=(F?"-":"")+"P"+t.format+n.format+e.format+T+o.format+a.format+w.format;return D==="P"||D==="-P"?"P0D":D},s.toJSON=function(){return this.toISOString()},s.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:u.s(this.$d.years,2,"0"),YYYY:u.s(this.$d.years,4,"0"),M:this.$d.months,MM:u.s(this.$d.months,2,"0"),D:this.$d.days,DD:u.s(this.$d.days,2,"0"),H:this.$d.hours,HH:u.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:u.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:u.s(this.$d.seconds,2,"0"),SSS:u.s(this.$d.milliseconds,3,"0")};return n.replace(P,function(e,o){return o||String(r[e])})},s.as=function(t){return this.$ms/m[$(t)]},s.get=function(t){var n=this.$ms,r=$(t);return r==="milliseconds"?n%=1e3:n=r==="weeks"?d(n/m[r]):this.$d[r],n===0?0:n},s.add=function(t,n,r){var e;return e=n?t*m[$(n)]:y(t)?t.$ms:l(t,this).$ms,l(this.$ms+e*(r?-1:1),this)},s.subtract=function(t,n){return this.add(t,n,!0)},s.locale=function(t){var n=this.clone();return n.$l=t,n},s.clone=function(){return l(this.$ms,this)},s.humanize=function(t){return g().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},i}();return function(i,s,t){g=t,u=t().$utils(),t.duration=function(e,o){var a=t.locale();return l(e,{$l:a},o)},t.isDuration=y;var n=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(e,o){return y(e)&&(e=e.asMilliseconds()),n.bind(this)(e,o)},s.prototype.subtract=function(e,o){return y(e)&&(e=e.asMilliseconds()),r.bind(this)(e,o)}}})})(j);var C=j.exports;const z=N(C),A=async c=>(await v.get("/backend/core/visit/trend-stat",{params:c})).data,G=async c=>(await v.get("/backend/core/visit/visitor-stat",{params:c})).data,J=async c=>(await v.get("/backend/core/visit/country-stat",{params:c})).data,L=async c=>(await v.get("/backend/core/visit/province-stat",{params:c})).data;export{L as a,G as b,J as c,z as d,A as q};