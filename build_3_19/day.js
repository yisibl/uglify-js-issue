!function(e,t){
"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(
):"function"==typeof define&&define.amd?define(t):(
e="undefined"!=typeof globalThis?globalThis:e||self).dayjs=t()}(this,function(){
function r(e,t,n){var r=String(e)
return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e}function n(e){
return e instanceof w}function t(e,t,n){var r
return e?("string"==typeof e?(D[e]&&(r=e),t&&(D[e]=t,r=e)):(t=e.name,D[t]=e,r=t)
,!n&&r&&(g=r),r||!n&&g):g}function a(e,t){return n(e)?e.clone():((
t="object"==typeof t?t:{}).date=e,t.args=arguments,new w(t))}var o="millisecond"
,u="second",i="minute",s="hour",f="day",d="week",c="month",l="quarter",y="year",
h="date",e="Invalid Date",
p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
,
$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
,m={name:"en",
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
months:"January_February_March_April_May_June_July_August_September_October_November_December".split(
"_")},_={s:r,z:function(e){var e=-e.utcOffset(),t=Math.abs(e),n=Math.floor(t/60)
,t=t%60
return(e<=0?"+":"-")+r(n,2,"0")+":"+r(t,2,"0")},m:function e(t,n){var r,a,o
return t.date()<n.date()?-e(n,t):(r=12*(n.year()-t.year())+(n.month()-t.month())
,o=n-(a=t.clone().add(r,c))<0,t=t.clone().add(r+(o?-1:1),c),+(-(r+(n-a)/(
o?a-t:t-a))||0))},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},
p:function(e){return{M:c,y:y,w:d,d:f,D:h,h:s,m:i,s:u,ms:o,Q:l}[e]||String(e||""
).toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",D={},
b=(D[g]=m,_),w=(b.l=t,b.i=n,b.w=function(e,t){return a(e,{locale:t.$L,utc:t.$u,
x:t.$x,$offset:t.$offset})},M.prototype.parse=function(o){this.$d=function(){
var e=o.date,t=o.utc
if(null===e)return new Date(NaN)
if(b.u(e))return new Date
if(!(e instanceof Date||"string"!=typeof e||/Z$/i.test(e))){var n,r,a=e.match(p)
if(a)return n=a[2]-1||0,r=(a[7]||"0").substring(0,3),t?new Date(Date.UTC(a[1],n,
a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6
]||0,r)}return new Date(e)}(),this.$x=o.x||{},this.init()},M),v=w.prototype
function M(e){this.$L=t(e.locale,null,!0),this.parse(e)}return a.prototype=v,[[
"$ms",o],["$s",u],["$m",i],["$H",s],["$W",f],["$M",c],["$y",y],["$D",h]
].forEach(function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),
a.extend=function(e,t){return e.$i||(e(t,w,a),e.$i=!0),a},a.locale=t,a.isDayjs=n
,a.unix=function(e){return a(1e3*e)},a.en=D[g],a.Ls=D,a.p={},a})
