!function(t,e){
"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(
):"function"==typeof define&&define.amd?define(e):(
t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,function(){
function i(t,e,n){var i=String(t)
return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t}function n(t){
return t instanceof w}function s(t,e,n){var i
return t?("string"==typeof t?(c[t]&&(i=t),e&&(c[t]=e,i=t)):(e=t.name,c[e]=t,i=e)
,!n&&i&&(h=i),i||!n&&h):h}function u(t,e){return n(t)?t.clone():((
e="object"==typeof e?e:{}).date=t,e.args=arguments,new w(e))}var r="millisecond"
,f="second",d="minute",$="hour",l="day",y="week",m="month",o="quarter",M="year",
g="date",D="Invalid Date",
a=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
,
p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
,t={name:"en",
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
months:"January_February_March_April_May_June_July_August_September_October_November_December".split(
"_")},e={s:i,z:function(t){var t=-t.utcOffset(),e=Math.abs(t),n=Math.floor(e/60)
,e=e%60
return(t<=0?"+":"-")+i(n,2,"0")+":"+i(e,2,"0")},m:function t(e,n){var i,s,r
return e.date()<n.date()?-t(n,e):(i=12*(n.year()-e.year())+(n.month()-e.month())
,r=n-(s=e.clone().add(i,m))<0,e=e.clone().add(i+(r?-1:1),m),+(-(i+(n-s)/(
r?s-e:e-s))||0))},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},
p:function(t){return{M:m,y:M,w:y,d:l,D:g,h:$,m:d,s:f,ms:r,Q:o}[t]||String(t||""
).toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h="en",c={},
S=(c[h]=t,e),w=(S.l=s,S.i=n,S.w=function(t,e){return u(t,{locale:e.$L,utc:e.$u,
x:e.$x,$offset:e.$offset})},(t=O.prototype).parse=function(r){this.$d=function(
){var t=r.date,e=r.utc
if(null===t)return new Date(NaN)
if(S.u(t))return new Date
if(!(t instanceof Date||"string"!=typeof t||/Z$/i.test(t))){var n,i,s=t.match(a)
if(s)return n=s[2]-1||0,i=(s[7]||"0").substring(0,3),e?new Date(Date.UTC(s[1],n,
s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6
]||0,i)}return new Date(t)}(),this.$x=r.x||{},this.init()},t.init=function(){
var t=this.$d
this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),
this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),
this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},t.$utils=function(){
return S},t.isValid=function(){return!(this.$d.toString()===D)},
t.isSame=function(t,e){t=u(t)
return this.startOf(e)<=t&&t<=this.endOf(e)},t.isAfter=function(t,e){return u(t
)<this.startOf(e)},t.isBefore=function(t,e){return this.endOf(e)<u(t)},
t.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},t.unix=function(){
return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){
return this.$d.getTime()},t.startOf=function(t,e){function n(t,e){return e=S.w(
s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s),r?e:e.endOf(l)}function i(t,e){
return S.w(s.toDate()[t].apply(s.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(
e)),s)}var s=this,r=!!S.u(e)||e,e=S.p(t),u=this.$W,o=this.$M,a=this.$D,h="set"+(
this.$u?"UTC":"")
switch(e){case M:return r?n(1,0):n(31,11)
case m:return r?n(1,o):n(0,o+1)
case y:var c=this.$locale().weekStart||0,c=(u<c?u+7:u)-c
return n(r?a-c:a+(6-c),o)
case l:case g:return i(h+"Hours",0)
case $:return i(h+"Minutes",1)
case d:return i(h+"Seconds",2)
case f:return i(h+"Milliseconds",3)
default:return this.clone()}},t.endOf=function(t){return this.startOf(t,!1)},
t.$set=function(t,e){var t=S.p(t),n="set"+(this.$u?"UTC":""),n=((i={})[l
]=n+"Date",i[g]=n+"Date",i[m]=n+"Month",i[M]=n+"FullYear",i[$]=n+"Hours",i[d
]=n+"Minutes",i[f]=n+"Seconds",i[r]=n+"Milliseconds",i[t]),i=t===l?this.$D+(
e-this.$W):e
return t===m||t===M?((e=this.clone().set(g,1)).$d[n](i),e.init(),this.$d=e.set(g
,Math.min(this.$D,e.daysInMonth())).$d):n&&this.$d[n](i),this.init(),this},
t.set=function(t,e){return this.clone().$set(t,e)},t.get=function(t){
return this[S.p(t)]()},t.add=function(n,t){function e(t){var e=u(i)
return S.w(e.date(e.date()+Math.round(t*n)),i)}var i=this,t=(n=Number(n),S.p(t))
return t===m?this.set(m,this.$M+n):t===M?this.set(M,this.$y+n):t===l?e(1
):t===y?e(7):(t={minute:6e4,hour:36e5,second:1e3}[t]||1,t=this.$d.getTime()+n*t,
S.w(t,this))},t.subtract=function(t,e){return this.add(-1*t,e)},
t.format=function(t){var s,n,e,i,r,u,o,a,h,c,f=this,d=this.$locale()
return this.isValid()?(s=t||"YYYY-MM-DDTHH:mm:ssZ",n=S.z(this),e=this.$H,
t=this.$m,i=this.$M,r=d.weekdays,u=d.months,o=function(t,e,n,i){return t&&(t[e
]||t(f,s))||n[e].substr(0,i)},a=function(t){return S.s(e%12||12,t,"0")},
h=d.meridiem||function(t,e,n){t=t<12?"AM":"PM"
return n?t.toLowerCase():t},c={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,
MM:S.s(i+1,2,"0"),MMM:o(d.monthsShort,i,u,3),MMMM:o(u,i),D:this.$D,DD:S.s(
this.$D,2,"0"),d:String(this.$W),dd:o(d.weekdaysMin,this.$W,r,2),ddd:o(
d.weekdaysShort,this.$W,r,3),dddd:r[this.$W],H:String(e),HH:S.s(e,2,"0"),h:a(1),
hh:a(2),a:h(e,t,!0),A:h(e,t,!1),m:String(t),mm:S.s(t,2,"0"),s:String(this.$s),
ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:n},s.replace(p,function(t,e){
return e||c[t]||n.replace(":","")})):d.invalidDate||D},t.utcOffset=function(){
return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(t,e,n){
var e=S.p(e),t=u(t),i=6e4*(t.utcOffset()-this.utcOffset()),s=this-t,t=S.m(this,t
),r={}
return r[M]=t/12,r[m]=t,r[o]=t/3,r[y]=(s-i)/6048e5,r[l]=(s-i)/864e5,r[$]=s/36e5,
r[d]=s/6e4,r[f]=s/1e3,t=r[e]||s,n?t:S.a(t)},t.daysInMonth=function(){
return this.endOf(m).$D},t.$locale=function(){return c[this.$L]},
t.locale=function(t,e){var n
return t?(n=this.clone(),(t=s(t,e,!0))&&(n.$L=t),n):this.$L},t.clone=function(){
return S.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},
t.toJSON=function(){return this.isValid()?this.toISOString():null},
t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){
return this.$d.toUTCString()},O),v=w.prototype
function O(t){this.$L=s(t.locale,null,!0),this.parse(t)}return u.prototype=v,[[
"$ms",r],["$s",f],["$m",d],["$H",$],["$W",l],["$M",m],["$y",M],["$D",g]
].forEach(function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),
u.extend=function(t,e){return t.$i||(t(e,w,u),t.$i=!0),u},u.locale=s,u.isDayjs=n
,u.unix=function(t){return u(1e3*t)},u.en=c[h],u.Ls=c,u.p={},u})
