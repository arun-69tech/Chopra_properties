(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function w(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function L(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const ee=6048e5,ne=864e5;let re={};function F(){return re}function I(e,t){const a=F(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,i=w(e),n=i.getDay(),r=(n<s?7:0)+n-s;return i.setDate(i.getDate()-r),i.setHours(0,0,0,0),i}function B(e){return I(e,{weekStartsOn:1})}function te(e){const t=w(e),a=t.getFullYear(),s=L(e,0);s.setFullYear(a+1,0,4),s.setHours(0,0,0,0);const i=B(s),n=L(e,0);n.setFullYear(a,0,4),n.setHours(0,0,0,0);const r=B(n);return t.getTime()>=i.getTime()?a+1:t.getTime()>=r.getTime()?a:a-1}function Q(e){const t=w(e);return t.setHours(0,0,0,0),t}function X(e){const t=w(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function oe(e,t){const a=Q(e),s=Q(t),i=+a-X(a),n=+s-X(s);return Math.round((i-n)/ne)}function de(e){const t=te(e),a=L(e,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),B(a)}function le(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ce(e){if(!le(e)&&typeof e!="number")return!1;const t=w(e);return!isNaN(Number(t))}function ue(e){const t=w(e),a=L(e,0);return a.setFullYear(t.getFullYear(),0,1),a.setHours(0,0,0,0),a}const me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},pe=(e,t,a)=>{let s;const i=me[e];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+s:s+" ago":s};function H(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const he={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ge={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},fe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},be={date:H({formats:he,defaultWidth:"full"}),time:H({formats:ge,defaultWidth:"full"}),dateTime:H({formats:fe,defaultWidth:"full"})},ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xe=(e,t,a,s)=>ve[e];function q(e){return(t,a)=>{const s=a?.context?String(a.context):"standalone";let i;if(s==="formatting"&&e.formattingValues){const r=e.defaultFormattingWidth||e.defaultWidth,m=a?.width?String(a.width):r;i=e.formattingValues[m]||e.formattingValues[r]}else{const r=e.defaultWidth,m=a?.width?String(a.width):e.defaultWidth;i=e.values[m]||e.values[r]}const n=e.argumentCallback?e.argumentCallback(t):t;return i[n]}}const ye={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},we={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Pe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ke={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$e={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ee=(e,t)=>{const a=Number(e),s=a%100;if(s>20||s<10)switch(s%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Se={ordinalNumber:Ee,era:q({values:ye,defaultWidth:"wide"}),quarter:q({values:we,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:Pe,defaultWidth:"wide"}),day:q({values:ke,defaultWidth:"wide"}),dayPeriod:q({values:$e,defaultWidth:"wide",formattingValues:Me,defaultFormattingWidth:"wide"})};function W(e){return(t,a={})=>{const s=a.width,i=s&&e.matchPatterns[s]||e.matchPatterns[e.defaultMatchWidth],n=t.match(i);if(!n)return null;const r=n[0],m=s&&e.parsePatterns[s]||e.parsePatterns[e.defaultParseWidth],b=Array.isArray(m)?Oe(m,o=>o.test(r)):Le(m,o=>o.test(r));let v;v=e.valueCallback?e.valueCallback(b):b,v=a.valueCallback?a.valueCallback(v):v;const h=t.slice(r.length);return{value:v,rest:h}}}function Le(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function Oe(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function Te(e){return(t,a={})=>{const s=t.match(e.matchPattern);if(!s)return null;const i=s[0],n=t.match(e.parsePattern);if(!n)return null;let r=e.valueCallback?e.valueCallback(n[0]):n[0];r=a.valueCallback?a.valueCallback(r):r;const m=t.slice(i.length);return{value:r,rest:m}}}const De=/^(\d+)(th|st|nd|rd)?/i,Ce=/\d+/i,qe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},We={any:[/^b/i,/^(a|c)/i]},je={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ie={any:[/1/i,/2/i,/3/i,/4/i]},Ae={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ne={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Be={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Fe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ye={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},He={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Re={ordinalNumber:Te({matchPattern:De,parsePattern:Ce,valueCallback:e=>parseInt(e,10)}),era:W({matchPatterns:qe,defaultMatchWidth:"wide",parsePatterns:We,defaultParseWidth:"any"}),quarter:W({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Ie,defaultParseWidth:"any",valueCallback:e=>e+1}),month:W({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),day:W({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:Ye,defaultMatchWidth:"any",parsePatterns:He,defaultParseWidth:"any"})},_e={code:"en-US",formatDistance:pe,formatLong:be,formatRelative:xe,localize:Se,match:Re,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ue(e){const t=w(e);return oe(t,ue(t))+1}function Ge(e){const t=w(e),a=+B(t)-+de(t);return Math.round(a/ee)+1}function ae(e,t){const a=w(e),s=a.getFullYear(),i=F(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,r=L(e,0);r.setFullYear(s+1,0,n),r.setHours(0,0,0,0);const m=I(r,t),b=L(e,0);b.setFullYear(s,0,n),b.setHours(0,0,0,0);const v=I(b,t);return a.getTime()>=m.getTime()?s+1:a.getTime()>=v.getTime()?s:s-1}function Qe(e,t){const a=F(),s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=ae(e,t),n=L(e,0);return n.setFullYear(i,0,s),n.setHours(0,0,0,0),I(n,t)}function Xe(e,t){const a=w(e),s=+I(a,t)-+Qe(a,t);return Math.round(s/ee)+1}function c(e,t){const a=e<0?"-":"",s=Math.abs(e).toString().padStart(t,"0");return a+s}const M={y(e,t){const a=e.getFullYear(),s=a>0?a:1-a;return c(t==="yy"?s%100:s,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):c(a+1,2)},d(e,t){return c(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];default:return a==="am"?"a.m.":"p.m."}},h(e,t){return c(e.getHours()%12||12,t.length)},H(e,t){return c(e.getHours(),t.length)},m(e,t){return c(e.getMinutes(),t.length)},s(e,t){return c(e.getSeconds(),t.length)},S(e,t){const a=t.length,s=e.getMilliseconds(),i=Math.trunc(s*Math.pow(10,a-3));return c(i,t.length)}},T={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},V={G:function(e,t,a){const s=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(s,{width:"abbreviated"});case"GGGGG":return a.era(s,{width:"narrow"});default:return a.era(s,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const s=e.getFullYear(),i=s>0?s:1-s;return a.ordinalNumber(i,{unit:"year"})}return M.y(e,t)},Y:function(e,t,a,s){const i=ae(e,s),n=i>0?i:1-i;if(t==="YY"){const r=n%100;return c(r,2)}return t==="Yo"?a.ordinalNumber(n,{unit:"year"}):c(n,t.length)},R:function(e,t){const a=te(e);return c(a,t.length)},u:function(e,t){const a=e.getFullYear();return c(a,t.length)},Q:function(e,t,a){const s=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return c(s,2);case"Qo":return a.ordinalNumber(s,{unit:"quarter"});case"QQQ":return a.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(s,{width:"narrow",context:"formatting"});default:return a.quarter(s,{width:"wide",context:"formatting"})}},q:function(e,t,a){const s=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return c(s,2);case"qo":return a.ordinalNumber(s,{unit:"quarter"});case"qqq":return a.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(s,{width:"narrow",context:"standalone"});default:return a.quarter(s,{width:"wide",context:"standalone"})}},M:function(e,t,a){const s=e.getMonth();switch(t){case"M":case"MM":return M.M(e,t);case"Mo":return a.ordinalNumber(s+1,{unit:"month"});case"MMM":return a.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(s,{width:"narrow",context:"formatting"});default:return a.month(s,{width:"wide",context:"formatting"})}},L:function(e,t,a){const s=e.getMonth();switch(t){case"L":return String(s+1);case"LL":return c(s+1,2);case"Lo":return a.ordinalNumber(s+1,{unit:"month"});case"LLL":return a.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(s,{width:"narrow",context:"standalone"});default:return a.month(s,{width:"wide",context:"standalone"})}},w:function(e,t,a,s){const i=Xe(e,s);return t==="wo"?a.ordinalNumber(i,{unit:"week"}):c(i,t.length)},I:function(e,t,a){const s=Ge(e);return t==="Io"?a.ordinalNumber(s,{unit:"week"}):c(s,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):M.d(e,t)},D:function(e,t,a){const s=Ue(e);return t==="Do"?a.ordinalNumber(s,{unit:"dayOfYear"}):c(s,t.length)},E:function(e,t,a){const s=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(s,{width:"short",context:"formatting"});default:return a.day(s,{width:"wide",context:"formatting"})}},e:function(e,t,a,s){const i=e.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return c(n,2);case"eo":return a.ordinalNumber(n,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,a,s){const i=e.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return c(n,t.length);case"co":return a.ordinalNumber(n,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,a){const s=e.getDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return c(i,t.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(s,{width:"short",context:"formatting"});default:return a.day(s,{width:"wide",context:"formatting"})}},a:function(e,t,a){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,a){const s=e.getHours();let i;switch(s===12?i=T.noon:s===0?i=T.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){const s=e.getHours();let i;switch(s>=17?i=T.evening:s>=12?i=T.afternoon:s>=4?i=T.morning:i=T.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let s=e.getHours()%12;return s===0&&(s=12),a.ordinalNumber(s,{unit:"hour"})}return M.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):M.H(e,t)},K:function(e,t,a){const s=e.getHours()%12;return t==="Ko"?a.ordinalNumber(s,{unit:"hour"}):c(s,t.length)},k:function(e,t,a){let s=e.getHours();return s===0&&(s=24),t==="ko"?a.ordinalNumber(s,{unit:"hour"}):c(s,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):M.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):M.s(e,t)},S:function(e,t){return M.S(e,t)},X:function(e,t,a){const s=e.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return J(s);case"XXXX":case"XX":return S(s);default:return S(s,":")}},x:function(e,t,a){const s=e.getTimezoneOffset();switch(t){case"x":return J(s);case"xxxx":case"xx":return S(s);default:return S(s,":")}},O:function(e,t,a){const s=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(s,":");default:return"GMT"+S(s,":")}},z:function(e,t,a){const s=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(s,":");default:return"GMT"+S(s,":")}},t:function(e,t,a){const s=Math.trunc(e.getTime()/1e3);return c(s,t.length)},T:function(e,t,a){const s=e.getTime();return c(s,t.length)}};function z(e,t=""){const a=e>0?"-":"+",s=Math.abs(e),i=Math.trunc(s/60),n=s%60;return n===0?a+String(i):a+String(i)+t+c(n,2)}function J(e,t){return e%60===0?(e>0?"-":"+")+c(Math.abs(e)/60,2):S(e,t)}function S(e,t=""){const a=e>0?"-":"+",s=Math.abs(e),i=c(Math.trunc(s/60),2),n=c(s%60,2);return a+i+t+n}const K=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},se=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Ve=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],s=a[1],i=a[2];if(!i)return K(e,t);let n;switch(s){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"});break}return n.replace("{{date}}",K(s,t)).replace("{{time}}",se(i,t))},ze={p:se,P:Ve},Je=/^D+$/,Ke=/^Y+$/,Ze=["D","DD","YY","YYYY"];function et(e){return Je.test(e)}function tt(e){return Ke.test(e)}function at(e,t,a){const s=st(e,t,a);if(console.warn(s),Ze.includes(e))throw new RangeError(s)}function st(e,t,a){const s=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${s} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,ot=/''/g,dt=/[a-zA-Z]/;function R(e,t,a){const s=F(),i=s.locale??_e,n=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,r=s.weekStartsOn??s.locale?.options?.weekStartsOn??0,m=w(e);if(!ce(m))throw new RangeError("Invalid time value");let b=t.match(nt).map(h=>{const o=h[0];if(o==="p"||o==="P"){const d=ze[o];return d(h,i.formatLong)}return h}).join("").match(it).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const o=h[0];if(o==="'")return{isToken:!1,value:lt(h)};if(V[o])return{isToken:!0,value:h};if(o.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return{isToken:!1,value:h}});i.localize.preprocessor&&(b=i.localize.preprocessor(m,b));const v={firstWeekContainsDate:n,weekStartsOn:r,locale:i};return b.map(h=>{if(!h.isToken)return h.value;const o=h.value;(tt(o)||et(o))&&at(o,t,String(e));const d=V[o[0]];return d(m,o,i.localize,v)}).join("")}function lt(e){const t=e.match(rt);return t?t[1].replace(ot,"'"):e}const k=document.getElementById("app"),ct=document.getElementById("toast-root"),Z=[{href:"/",label:"Home"},{href:"/listings",label:"Properties"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}],ut=[{value:"newest",label:"Newest First"},{value:"price_asc",label:"Price: Low to High"},{value:"price_desc",label:"Price: High to Low"},{value:"hot",label:"Most Popular"}],mt=[{icon:"map-pin",title:"Visit Us",lines:["#71-72-73 , Sector-17C, Basement , Chandigarh, India."]},{icon:"phone",title:"Call Us",lines:["9256111119","7009101336"]},{icon:"mail",title:"Email Us",lines:["rithuz@gmail.com","omchopra111119@gmail.com"]},{icon:"clock-3",title:"Working Hours",lines:["Mon - Sat: 12:00 PM - 09:00 PM","Sunday: By Appointment"]}],y=(e,t="",a=!1)=>{const s=document.createElement("div");s.className=`fixed right-4 top-4 z-[100] w-[320px] rounded-xl border p-4 shadow-xl backdrop-blur bg-white/95 ${a?"border-destructive":"border-border"}`,s.innerHTML=`
    <p class="font-semibold text-sm ${a?"text-destructive":"text-foreground"}">${l(e)}</p>
    ${t?`<p class="text-xs text-muted-foreground mt-1">${l(t)}</p>`:""}
  `,ct.appendChild(s),setTimeout(()=>{s.remove()},3200)},l=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),D=e=>`\u20B9${Number(e||0).toLocaleString("en-IN")}`,f=async(e,t={})=>{const a=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",...t.headers||{}},...t});if(a.status===204)return null;const s=await a.text(),i=s?JSON.parse(s):null;if(!a.ok)throw new Error(i?.message||`Request failed: ${a.status}`);return i},C=(e,t=!1)=>{t?history.replaceState({},"",e):history.pushState({},"",e),_()},j=e=>Array.from({length:e}).map(()=>`
      <div class="space-y-3 animate-pulse">
        <div class="h-64 w-full rounded-xl bg-muted"></div>
        <div class="h-4 w-3/4 rounded bg-muted"></div>
        <div class="h-4 w-1/2 rounded bg-muted"></div>
      </div>
    `).join(""),N=e=>{const t=e.previousPrice&&e.previousPrice>e.price,a=e.images&&e.images.length?e.images[0]:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60";return`
    <article class="group h-full overflow-hidden rounded-xl border border-border/50 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img src="${l(a)}" alt="${l(e.title)}" class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="badge shadow-sm ${e.status==="Sold"?"bg-destructive text-white":"bg-secondary/90 text-white"}">${l(e.status)}</span>
          ${t?'<span class="badge bg-green-500 text-white shadow-sm">Reduced</span>':""}
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
          <p class="text-white font-bold text-xl">${D(e.price)}</p>
          ${t?`<p class="text-white/80 text-sm line-through decoration-red-400">${D(e.previousPrice)}</p>`:""}
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center gap-2 text-xs font-medium text-primary mb-2">
          <span class="bg-primary/10 px-2 py-1 rounded-md">${l(e.category)}</span>
        </div>
        <h3 class="font-display font-semibold text-lg line-clamp-1 mb-2 group-hover:text-primary transition-colors">${l(e.title)}</h3>
        <div class="flex items-start gap-2 text-muted-foreground text-sm mb-4 min-h-[40px]">
          <i data-lucide="map-pin" class="h-4 w-4 mt-0.5 shrink-0"></i>
          <span class="line-clamp-2">${l(e.location)}</span>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div class="flex items-center gap-2 text-sm text-muted-foreground"><i data-lucide="bed" class="h-4 w-4"></i><span>4 Beds</span></div>
          <div class="flex items-center gap-2 text-sm text-muted-foreground"><i data-lucide="maximize" class="h-4 w-4"></i><span>2,400 sqft</span></div>
        </div>
      </div>
      <div class="p-5 pt-0">
        <a href="/listings/${e.id}" data-link class="btn btn-outline w-full">View Details <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i></a>
      </div>
    </article>
  `},pt=()=>{const e=location.pathname;return`
    <nav class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="/" data-link class="flex items-center gap-2">
            <div class="bg-primary/10 p-2 rounded-lg"><i data-lucide="building-2" class="h-6 w-6 text-primary"></i></div>
            <span class="font-display font-bold text-xl tracking-tight hidden sm:block">Chopra<span class="text-primary">Properties</span></span>
          </a>
          <div class="hidden md:flex items-center gap-6">
            ${Z.map(t=>`
              <a href="${t.href}" data-link class="text-sm font-medium transition-colors hover:text-primary ${e===t.href?"text-primary font-bold":"text-muted-foreground"}">${t.label}</a>
            `).join("")}
          </div>
          <div class="hidden md:flex items-center gap-4">
            <a href="/contact" data-link class="btn-primary shadow-md shadow-primary/20">Get in Touch</a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Open menu">
            <i data-lucide="menu" class="h-6 w-6"></i>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden border-t bg-background">
        <div class="container px-4 py-4 space-y-4">
          ${Z.map(t=>`<a href="${t.href}" data-link class="block text-sm font-medium py-2 hover:text-primary">${t.label}</a>`).join("")}
          <div class="pt-4 border-t">
            <a href="/contact" data-link class="btn-primary w-full">Get in Touch</a>
          </div>
        </div>
      </div>
    </nav>
  `},ht=()=>`
  <footer class="bg-slate-950 text-slate-200 pt-16 pb-8">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <a href="/" data-link class="flex items-center gap-2">
            <div class="bg-primary/20 p-2 rounded-lg"><i data-lucide="building-2" class="h-6 w-6 text-primary"></i></div>
            <span class="font-display font-bold text-xl tracking-tight text-white">Chopra<span class="text-primary">Properties</span></span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed">Premium property consultancy services. We help you find the perfect space for your domestic and commercial needs with professionalism and integrity.</p>
          <div class="flex gap-4 pt-2">
            <a href="#" class="hover:text-primary transition-colors"><i data-lucide="facebook" class="h-5 w-5"></i></a>
            <a href="#" class="hover:text-primary transition-colors"><i data-lucide="twitter" class="h-5 w-5"></i></a>
            <a href="#" class="hover:text-primary transition-colors"><i data-lucide="instagram" class="h-5 w-5"></i></a>
            <a href="#" class="hover:text-primary transition-colors"><i data-lucide="linkedin" class="h-5 w-5"></i></a>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="font-display font-semibold text-white text-lg">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" data-link class="text-slate-400 hover:text-primary transition-colors text-sm">Home</a></li>
            <li><a href="/listings" data-link class="text-slate-400 hover:text-primary transition-colors text-sm">All Properties</a></li>
            <li><a href="/listings?category=Commercial" data-link class="text-slate-400 hover:text-primary transition-colors text-sm">Commercial</a></li>
            <li><a href="/listings?category=Domestic" data-link class="text-slate-400 hover:text-primary transition-colors text-sm">Domestic</a></li>
            <li><a href="/contact" data-link class="text-slate-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="font-display font-semibold text-white text-lg">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-slate-400 text-sm"><i data-lucide="map-pin" class="h-5 w-5 text-primary shrink-0"></i><span>#71-72-73 , Sector-17C, Basement , Chandigarh, India.</span></li>
            <li class="flex items-center gap-3 text-slate-400 text-sm"><i data-lucide="phone" class="h-5 w-5 text-primary shrink-0"></i><span>9256111119</span></li>
            <li class="flex items-center gap-3 text-slate-400 text-sm"><i data-lucide="mail" class="h-5 w-5 text-primary shrink-0"></i><span>rithuz@gmail.com</span></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="font-display font-semibold text-white text-lg">Newsletter</h3>
          <p class="text-slate-400 text-sm">Subscribe to get the latest property updates and market news.</p>
          <div class="flex gap-2">
            <input type="email" placeholder="Your email" class="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary" />
            <button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Join</button>
          </div>
        </div>
      </div>
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-xs">&copy; ${new Date().getFullYear()} Chopra Property Consultancy. All rights reserved.</p>
        <div class="flex gap-6 items-center">
          <a href="#" class="text-slate-500 hover:text-white text-xs">Privacy Policy</a>
          <a href="#" class="text-slate-500 hover:text-white text-xs">Terms of Service</a>
          <a href="/admin/login" data-link class="text-slate-600 hover:text-slate-400 text-xs border border-slate-800 px-3 py-1 rounded-md transition-colors">Admin Login</a>
        </div>
      </div>
    </div>
  </footer>
`,E=e=>`
  <div class="flex flex-col min-h-screen">
    ${pt()}
    <main class="flex-grow">${e}</main>
    ${ht()}
  </div>
`,gt=async()=>{k.innerHTML=E(`
    <div class="min-h-screen bg-background">
      <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80" alt="Luxury Home" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="container relative z-10 px-4 text-center text-white">
          <h1 class="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">Find Your Dream <br /><span class="text-primary">Property Today</span></h1>
          <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Discover the most exclusive domestic and commercial properties in prime locations.</p>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl max-w-3xl mx-auto border border-white/20 shadow-2xl">
            <form id="hero-search-form" class="flex flex-col md:flex-row gap-4">
              <div class="relative flex-grow">
                <i data-lucide="search" class="absolute left-3 top-3 h-5 w-5 text-muted-foreground"></i>
                <input id="hero-search" placeholder="City, Neighborhood, or Address" class="input-base pl-10 h-12 bg-white text-foreground border-0 focus-visible:ring-2 focus-visible:ring-primary" />
              </div>
              <button class="btn-primary h-12 px-8 text-lg" type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
      <div class="container mx-auto px-4 py-20 space-y-20">
        <section>
          <div class="flex justify-between items-end mb-8">
            <div>
              <h2 class="text-3xl font-display font-bold mb-2">New Listings</h2>
              <p class="text-muted-foreground">The latest properties to hit the market</p>
            </div>
            <a href="/listings?sort=newest" data-link class="btn btn-outline gap-2 text-primary">View All <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
          <div id="home-new-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${j(4)}</div>
        </section>
        <section class="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl md:text-4xl font-display font-bold">Properties for every need</h2>
              <p class="text-muted-foreground text-lg">Whether you're looking for a cozy home for your family or a strategic location for your business, we have you covered.</p>
              <div class="flex gap-4">
                <a href="/listings?category=Domestic" data-link class="btn-primary gap-2"><i data-lucide="home" class="h-5 w-5"></i> Domestic</a>
                <a href="/listings?category=Commercial" data-link class="btn btn-outline border-2 gap-2 hover:bg-accent"><i data-lucide="building" class="h-5 w-5"></i> Commercial</a>
              </div>
            </div>
            <div class="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80" alt="Commercial Building" class="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <div class="grid lg:grid-cols-2 gap-12">
          <section>
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-display font-bold flex items-center gap-2"><i data-lucide="trending-down" class="h-6 w-6 text-green-500"></i> Price Reduced</h2>
            </div>
            <div id="home-reduced-grid" class="grid sm:grid-cols-2 gap-6">${j(2)}</div>
          </section>
          <section>
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-display font-bold flex items-center gap-2"><i data-lucide="trending-up" class="h-6 w-6 text-orange-500"></i> Hot Properties</h2>
            </div>
            <div id="home-hot-grid" class="grid sm:grid-cols-2 gap-6">${j(2)}</div>
          </section>
        </div>
      </div>
    </div>
  `),document.getElementById("hero-search-form")?.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("hero-search")?.value?.trim();t&&C(`/listings?search=${encodeURIComponent(t)}`)});try{const[e,t,a]=await Promise.all([f("/api/listings?sort=newest"),f("/api/listings?sort=hot"),f("/api/listings?isReduced=true")]);document.getElementById("home-new-grid").innerHTML=(e||[]).slice(0,4).map(N).join(""),document.getElementById("home-hot-grid").innerHTML=t?.length>0?t.slice(0,2).map(N).join(""):'<div class="col-span-2 text-center py-12 bg-muted/30 rounded-xl"><p class="text-muted-foreground">No trending properties found.</p></div>',document.getElementById("home-reduced-grid").innerHTML=a?.length>0?a.slice(0,2).map(N).join(""):'<div class="col-span-2 text-center py-12 bg-muted/30 rounded-xl"><p class="text-muted-foreground">No price reductions at the moment.</p></div>'}catch{y("Error","Unable to load listings right now.",!0)}},ft=async()=>{const e=new URLSearchParams(location.search),t={search:e.get("search")||"",category:e.get("category")||"all",sort:e.get("sort")||"newest"};k.innerHTML=E(`
    <div class="min-h-screen bg-slate-50/50 pb-20">
      <div class="bg-white border-b py-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-display font-bold mb-4">Browse Properties</h1>
          <p class="text-muted-foreground max-w-2xl">Explore our curated selection of premium properties. Filter by category or location to find exactly what you're looking for.</p>
        </div>
      </div>
      <div class="container mx-auto px-4 py-8">
        <div class="bg-white p-4 rounded-xl shadow-sm border mb-8 sticky top-20 z-30">
          <div class="flex flex-col md:flex-row gap-4 items-center">
            <div class="relative flex-grow w-full md:w-auto">
              <i data-lucide="search" class="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"></i>
              <input id="list-search" placeholder="Search by location or keyword..." class="input-base pl-9" value="${l(t.search)}" />
            </div>
            <div class="flex gap-4 w-full md:w-auto">
              <select id="list-category" class="input-base w-[180px]">
                <option value="all" ${t.category==="all"?"selected":""}>All Categories</option>
                <option value="Domestic" ${t.category==="Domestic"?"selected":""}>Domestic</option>
                <option value="Commercial" ${t.category==="Commercial"?"selected":""}>Commercial</option>
              </select>
              <select id="list-sort" class="input-base w-[180px]">
                ${ut.map(s=>`<option value="${s.value}" ${t.sort===s.value?"selected":""}>${s.label}</option>`).join("")}
              </select>
              <button id="clear-filters" class="btn btn-outline" title="Clear Filters">Clear</button>
            </div>
          </div>
        </div>
        <div id="listings-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${j(8)}</div>
      </div>
    </div>
  `);const a=async()=>{const s=new URLSearchParams;t.search.trim()&&s.set("search",t.search.trim()),t.category!=="all"&&s.set("category",t.category),t.sort&&s.set("sort",t.sort),history.replaceState({},"",`/listings${s.toString()?`?${s.toString()}`:""}`);const i=document.getElementById("listings-grid");i.innerHTML=j(8);try{const n=await f(`/api/listings${s.toString()?`?${s.toString()}`:""}`);i.innerHTML=n?.length>0?n.map(N).join(""):'<div class="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed"><i data-lucide="filter" class="h-12 w-12 mx-auto text-muted-foreground mb-4"></i><h3 class="text-lg font-semibold mb-2">No properties found</h3><p class="text-muted-foreground mb-6">Try adjusting your search filters</p><button id="no-results-clear" class="btn-primary">Clear All Filters</button></div>',document.getElementById("no-results-clear")?.addEventListener("click",()=>{t.search="",t.category="all",t.sort="newest",document.getElementById("list-search").value="",document.getElementById("list-category").value="all",document.getElementById("list-sort").value="newest",a()}),A()}catch{y("Error","Unable to load listings.",!0)}};document.getElementById("list-search")?.addEventListener("input",s=>{t.search=s.target.value,clearTimeout(window.__listingTimer),window.__listingTimer=setTimeout(a,250)}),document.getElementById("list-category")?.addEventListener("change",s=>{t.category=s.target.value,a()}),document.getElementById("list-sort")?.addEventListener("change",s=>{t.sort=s.target.value,a()}),document.getElementById("clear-filters")?.addEventListener("click",()=>{t.search="",t.category="all",t.sort="newest",document.getElementById("list-search").value="",document.getElementById("list-category").value="all",document.getElementById("list-sort").value="newest",a()}),await a()},bt=async e=>{k.innerHTML=E(`
    <div class="container mx-auto px-4 py-8 space-y-8">
      <div class="h-8 w-32 rounded bg-muted animate-pulse"></div>
      <div class="h-[500px] w-full rounded-2xl bg-muted animate-pulse"></div>
    </div>
  `);try{const t=await f(`/api/listings/${e}`);fetch(`/api/listings/${e}/view`,{method:"POST",credentials:"include"});const a=t.images&&t.images.length?t.images:["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80"],s=t.previousPrice&&t.previousPrice>t.price;k.innerHTML=E(`
      <div class="min-h-screen bg-background pb-20">
        <div class="container mx-auto px-4 py-8">
          <a href="/listings" data-link class="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"><i data-lucide="arrow-left" class="h-4 w-4 mr-2"></i> Back to Listings</a>
          <div class="grid md:grid-cols-2 gap-4 h-[500px] mb-8">
            <div class="md:col-span-1 h-full rounded-2xl overflow-hidden relative group">
              <img id="main-gallery-image" src="${l(a[0])}" alt="${l(t.title)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="badge bg-white/90 text-black text-sm px-3 py-1">${l(t.category)}</span>
                ${t.status==="Sold"?'<span class="badge bg-destructive text-white text-sm px-3 py-1">Sold</span>':""}
              </div>
            </div>
            <div class="hidden md:grid grid-cols-2 gap-4 h-full">
              ${a.slice(0,4).map((i,n)=>`
                  <button type="button" data-gallery-index="${n}" class="gallery-thumb rounded-2xl overflow-hidden cursor-pointer relative ${n===0?"ring-2 ring-primary":""}">
                    <img src="${l(i)}" alt="View ${n+1}" class="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                    ${n===3&&a.length>4?`<div class="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-xl">+${a.length-4}</div>`:""}
                  </button>
                `).join("")}
            </div>
          </div>
          <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2 space-y-8">
              <div>
                <div class="flex justify-between items-start mb-2">
                  <h1 class="text-3xl md:text-4xl font-display font-bold text-foreground">${l(t.title)}</h1>
                  <div class="flex gap-2">
                    <button class="btn btn-outline rounded-full"><i data-lucide="share-2" class="h-4 w-4"></i></button>
                    <button class="btn btn-outline rounded-full"><i data-lucide="heart" class="h-4 w-4"></i></button>
                  </div>
                </div>
                <div class="flex items-center text-muted-foreground mb-6"><i data-lucide="map-pin" class="h-5 w-5 mr-2 text-primary"></i><span class="text-lg">${l(t.location)}</span></div>
                <div class="flex flex-wrap gap-4 mb-8 pb-8 border-b">
                  <div class="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg text-secondary-foreground font-medium"><i data-lucide="bed" class="h-5 w-5"></i> 4 Beds</div>
                  <div class="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg text-secondary-foreground font-medium"><i data-lucide="maximize" class="h-5 w-5"></i> 2,400 sqft</div>
                  <div class="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg text-secondary-foreground font-medium"><i data-lucide="calendar" class="h-5 w-5"></i> Listed ${t.createdAt?R(new Date(t.createdAt),"MMM d, yyyy"):"Recently"}</div>
                </div>
                <div class="prose prose-lg max-w-none">
                  <h3 class="font-display font-semibold text-2xl mb-4">About this property</h3>
                  <p class="whitespace-pre-line text-muted-foreground leading-relaxed">${l(t.description)}</p>
                </div>
              </div>
              <div class="bg-slate-50 p-6 rounded-2xl">
                <h3 class="font-display font-semibold text-xl mb-4">Features & Amenities</h3>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  ${["Air Conditioning","Swimming Pool","Central Heating","Laundry Room","Gym","Alarm","Window Covering","Refrigerator"].map(i=>`<div class="flex items-center gap-2 text-muted-foreground"><div class="h-2 w-2 rounded-full bg-primary"></div>${i}</div>`).join("")}
                </div>
              </div>
            </div>
            <div class="lg:col-span-1">
              <div class="sticky top-24 space-y-6">
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-border/50">
                  <div class="mb-6">
                    <p class="text-sm text-muted-foreground mb-1">Price</p>
                    <div class="flex items-baseline gap-3">
                      <span class="text-4xl font-bold text-primary">${D(t.price)}</span>
                      ${s?`<span class="text-lg text-muted-foreground line-through decoration-red-400">${D(t.previousPrice)}</span>`:""}
                    </div>
                    ${s?`<div class="mt-2 inline-flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded"><i data-lucide="trending-down" class="h-3 w-3 mr-1"></i>Price reduced by ${D(t.previousPrice-t.price)}</div>`:""}
                  </div>
                  <div class="space-y-4">
                    <h3 class="font-semibold text-lg border-b pb-2">Interested? Contact Us</h3>
                    <form id="inquiry-form" class="space-y-4">
                      <input class="input-base" name="name" placeholder="Your Name" required />
                      <input class="input-base" type="email" name="email" placeholder="Email Address" required />
                      <input class="input-base" name="phone" placeholder="Phone Number" required />
                      <textarea class="textarea-base resize-none" name="message" placeholder="I'm interested in this property..."></textarea>
                      <button class="btn-primary w-full" type="submit">Send Message</button>
                    </form>
                    <p class="text-xs text-center text-muted-foreground mt-4">By sending this message, you agree to our Terms and Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `),document.querySelectorAll(".gallery-thumb").forEach(i=>{i.addEventListener("click",()=>{const n=Number(i.getAttribute("data-gallery-index")||0);document.getElementById("main-gallery-image").src=a[n],document.querySelectorAll(".gallery-thumb").forEach(r=>r.classList.remove("ring-2","ring-primary")),i.classList.add("ring-2","ring-primary")})}),document.getElementById("inquiry-form")?.addEventListener("submit",async i=>{i.preventDefault();const n=new FormData(i.target),r={propertyId:Number(e),name:n.get("name"),email:n.get("email"),phone:n.get("phone"),message:n.get("message")||""};try{await f("/api/inquiries",{method:"POST",body:JSON.stringify(r)}),i.target.reset(),y("Inquiry Sent","We'll get back to you shortly.")}catch(m){y("Error",m.message||"Failed to send inquiry.",!0)}})}catch{k.innerHTML=E(`
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-2xl font-bold mb-4">Property Not Found</h1>
        <a href="/listings" data-link class="btn-primary">Back to Listings</a>
      </div>
    `)}},vt=()=>{k.innerHTML=E(`
    <div class="min-h-screen bg-background">
      <section class="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80" alt="Our Office" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div class="container relative z-10 text-center text-white px-4">
          <h1 class="font-display font-bold text-4xl md:text-5xl mb-4">About Chopra Property Consultancy</h1>
          <p class="text-lg text-white/85 max-w-2xl mx-auto">Trusted advisors in real estate for over 15 years - helping individuals and businesses find the perfect property.</p>
        </div>
      </section>
      <section class="bg-primary py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            ${[["500+","Properties Sold"],["15+","Years Experience"],["1,200+","Happy Clients"],["98%","Client Satisfaction"]].map(([e,t])=>`<div><p class="text-4xl font-display font-bold">${e}</p><p class="text-primary-foreground/80 mt-1 text-sm font-medium">${t}</p></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="container mx-auto px-4 py-20">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <div><p class="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p><h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Built on Trust, Driven by Excellence</h2></div>
            <p class="text-muted-foreground leading-relaxed">Founded in 2009 by Raj Chopra, Chopra Property Consultancy began as a boutique firm with a simple mission: to bring honesty and professionalism to an industry often plagued by opacity.</p>
            <p class="text-muted-foreground leading-relaxed">Over 15 years, we've grown from a two-person office to a full-service consultancy with specialists in residential, commercial, and investment property across multiple cities.</p>
            <p class="text-muted-foreground leading-relaxed">What hasn't changed is our commitment: every client, every property, every deal - handled with complete integrity.</p>
            <a href="/listings" data-link class="btn-primary">Browse Our Properties</a>
          </div>
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl aspect-square"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80" alt="Our work" class="w-full h-full object-cover" /></div>
            <div class="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&auto=format&fit=crop&q=80" alt="Property" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>
      <section class="bg-slate-50 py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14"><p class="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p><h2 class="text-3xl md:text-4xl font-display font-bold">Our Core Values</h2></div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${[["check-circle","Integrity","We operate with complete transparency and honesty in every transaction."],["users","Client First","Your needs drive every decision we make - before, during, and after."],["award","Excellence","We hold ourselves to the highest professional standards in the industry."],["target","Results","We don't just advise - we deliver measurable outcomes for our clients."]].map(([e,t,a])=>`
              <div class="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div class="bg-primary/10 p-3 rounded-xl w-fit mb-4"><i data-lucide="${e}" class="h-6 w-6 text-primary"></i></div>
                <h3 class="font-display font-semibold text-lg mb-2">${t}</h3>
                <p class="text-muted-foreground text-sm leading-relaxed">${a}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="container mx-auto px-4 py-20">
        <div class="text-center mb-14"><p class="text-primary font-semibold text-sm uppercase tracking-widest mb-2">The People Behind It</p><h2 class="text-3xl md:text-4xl font-display font-bold">Meet Our Team</h2></div>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          ${[["Raj Chopra","Founder & CEO","https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80","20+ years of experience in real estate consulting across India and abroad."],["Priya Chopra","Head of Residential","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80","Specialist in luxury residential properties and client relations."],["Arjun Sharma","Commercial Director","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80","Expert in commercial real estate investment and development."]].map(([e,t,a,s])=>`
              <div class="text-center group">
                <div class="relative overflow-hidden rounded-2xl mb-4 aspect-square shadow-md"><img src="${a}" alt="${e}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                <h3 class="font-display font-semibold text-xl">${e}</h3>
                <p class="text-primary text-sm font-medium mb-2">${t}</p>
                <p class="text-muted-foreground text-sm">${s}</p>
              </div>
            `).join("")}
        </div>
      </section>
      <section class="bg-primary py-16">
        <div class="container mx-auto px-4 text-center text-white">
          <h2 class="text-3xl font-display font-bold mb-4">Ready to Find Your Perfect Property?</h2>
          <p class="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Our team of experts is ready to help you navigate the market and find exactly what you're looking for.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="/contact" data-link class="btn border border-white/30 bg-white/20 text-white hover:bg-white/30">Contact Us</a>
            <a href="/listings" data-link class="btn bg-white text-primary hover:bg-white/90">View Properties</a>
          </div>
        </div>
      </section>
    </div>
  `)},xt=()=>{k.innerHTML=E(`
    <div class="min-h-screen bg-background">
      <section class="relative h-[320px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&auto=format&fit=crop&q=80" alt="Contact" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div class="container relative z-10 text-center text-white px-4">
          <h1 class="font-display font-bold text-4xl md:text-5xl mb-4">Get In Touch</h1>
          <p class="text-lg text-white/85 max-w-xl mx-auto">Have a question about a property or need expert advice? Our team is here to help.</p>
        </div>
      </section>
      <section class="container mx-auto px-4 -mt-12 relative z-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${mt.map(e=>`
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-border/50">
              <div class="bg-primary/10 p-3 rounded-xl w-fit mb-4"><i data-lucide="${e.icon}" class="h-5 w-5 text-primary"></i></div>
              <h3 class="font-display font-semibold mb-2">${e.title}</h3>
              ${e.lines.map(t=>`<p class="text-muted-foreground text-sm">${t}</p>`).join("")}
            </div>
          `).join("")}
        </div>
      </section>
      <section class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <div class="mb-8"><p class="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Send a Message</p><h2 class="text-3xl font-display font-bold">We'd love to hear from you</h2><p class="text-muted-foreground mt-2">Fill out the form below and we'll respond within 24 hours.</p></div>
            <form id="contact-form" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-2"><label for="name" class="text-sm font-medium">Full Name <span class="text-destructive">*</span></label><input id="name" name="name" class="input-base" placeholder="Your full name" required /></div>
                <div class="space-y-2"><label for="email" class="text-sm font-medium">Email <span class="text-destructive">*</span></label><input id="email" type="email" name="email" class="input-base" placeholder="your@email.com" required /></div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-2"><label for="phone" class="text-sm font-medium">Phone Number</label><input id="phone" name="phone" class="input-base" placeholder="9256111119" /></div>
                <div class="space-y-2"><label for="subject" class="text-sm font-medium">Subject</label><input id="subject" name="subject" class="input-base" placeholder="Property inquiry, general question..." /></div>
              </div>
              <div class="space-y-2"><label for="message" class="text-sm font-medium">Message <span class="text-destructive">*</span></label><textarea id="message" name="message" rows="5" class="textarea-base" placeholder="Tell us more about what you're looking for..." required></textarea></div>
              <button id="contact-submit" type="submit" class="btn-primary w-full"><span class="inline-flex items-center gap-2"><i data-lucide="send" class="h-4 w-4"></i> Send Message</span></button>
            </form>
          </div>
          <div class="space-y-6">
            <div class="rounded-2xl overflow-hidden shadow-lg border border-border/50 aspect-[4/3]"><img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&auto=format&fit=crop&q=80" alt="Our office building" class="w-full h-full object-cover" /></div>
            <div class="bg-slate-50 rounded-2xl p-6 border border-border/50">
              <h3 class="font-display font-semibold text-lg mb-2">Schedule a Meeting</h3>
              <p class="text-muted-foreground text-sm mb-4">Prefer to meet in person? Our consultants are available for face-to-face meetings at our office.</p>
              <div class="flex items-center gap-2 text-sm text-primary font-medium"><i data-lucide="phone" class="h-4 w-4"></i><span>Call 9256111119 to book a slot</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `),document.getElementById("contact-form")?.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("contact-submit");t.disabled=!0,t.innerHTML='<span class="inline-flex items-center gap-2"><span class="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</span>',await new Promise(a=>setTimeout(a,1e3)),e.target.reset(),t.disabled=!1,t.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="send" class="h-4 w-4"></i> Send Message</span>',A(),y("Message Sent!","Thank you for reaching out. We'll get back to you within 24 hours.")})},yt=async()=>{try{if((await f("/api/admin/session"))?.isAdmin){C("/admin",!0);return}}catch{}k.innerHTML=`
    <div class="min-h-screen bg-slate-50 flex">
      <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80" alt="Property" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/60"></div>
        <div class="relative z-10 flex flex-col justify-between p-12 text-white">
          <div class="flex items-center gap-3">
            <div class="bg-white/20 p-2 rounded-xl backdrop-blur-sm"><i data-lucide="building-2" class="h-7 w-7 text-white"></i></div>
            <span class="font-display font-bold text-2xl">Chopra<span class="text-white/70">Properties</span></span>
          </div>
          <div class="space-y-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <i data-lucide="shield-check" class="h-10 w-10 text-white/80 mb-4"></i>
              <h2 class="font-display font-bold text-2xl mb-2">Admin Portal</h2>
              <p class="text-white/80 leading-relaxed">Securely manage your property listings, view inquiries, and control site content - all from one place.</p>
            </div>
          </div>
          <p class="text-white/40 text-xs">&copy; ${new Date().getFullYear()} Chopra Property Consultancy. Admin access only.</p>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div class="w-full max-w-md space-y-8">
          <div class="lg:hidden flex items-center gap-3 justify-center mb-4">
            <div class="bg-primary/10 p-2 rounded-xl"><i data-lucide="building-2" class="h-7 w-7 text-primary"></i></div>
            <span class="font-display font-bold text-2xl">Chopra<span class="text-primary">Properties</span></span>
          </div>
          <div>
            <h1 class="text-3xl font-display font-bold text-foreground">Admin Sign In</h1>
            <p class="text-muted-foreground mt-2">Enter your credentials to access the admin panel.</p>
          </div>
          <form id="admin-login-form" class="space-y-5">
            <div class="space-y-2">
              <label for="username" class="text-sm font-medium">Username</label>
              <div class="relative"><i data-lucide="user" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"></i><input id="username" name="username" class="input-base pl-10 h-12" placeholder="Enter admin username" autocomplete="username" /></div>
            </div>
            <div class="space-y-2">
              <label for="password" class="text-sm font-medium">Password</label>
              <div class="relative"><i data-lucide="lock" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"></i><input id="password" type="password" name="password" class="input-base pl-10 h-12" placeholder="Enter admin password" autocomplete="current-password" /></div>
            </div>
            <button id="admin-login-btn" type="submit" class="btn-primary w-full h-12 text-base"><span class="inline-flex items-center gap-2"><i data-lucide="shield-check" class="h-5 w-5"></i> Sign In to Admin Panel</span></button>
          </form>
          <div class="bg-slate-100 rounded-xl p-4 border border-border/50">
            <p class="text-xs text-muted-foreground text-center"><span class="font-medium">Default credentials:</span> username <code class="bg-slate-200 px-1 rounded">admin</code> / password <code class="bg-slate-200 px-1 rounded">admin123</code></p>
          </div>
          <p class="text-center text-sm text-muted-foreground">Not an admin? <a href="/" data-link class="text-primary hover:underline font-medium">Return to website</a></p>
        </div>
      </div>
    </div>
  `,document.getElementById("admin-login-form")?.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.target),a=String(t.get("username")||"").trim(),s=String(t.get("password")||"").trim();if(!a||!s){y("Missing fields","Please enter your username and password.",!0);return}const i=document.getElementById("admin-login-btn");i.disabled=!0,i.textContent="Signing in...";try{await f("/api/admin/login",{method:"POST",body:JSON.stringify({username:a,password:s})}),C("/admin",!0)}catch(n){y("Login Failed",n.message||"Invalid username or password.",!0),i.disabled=!1,i.innerHTML='<span class="inline-flex items-center gap-2"><i data-lucide="shield-check" class="h-5 w-5"></i> Sign In to Admin Panel</span>',A()}})},wt=(e=null)=>{const t=e?.images||[];return`
    <form id="admin-listing-form" data-edit-id="${e?.id||""}" class="space-y-6">
      <input class="input-base" name="title" placeholder="Modern Apartment in City Center" value="${l(e?.title||"")}" required />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input class="input-base" type="number" name="price" placeholder="Price" value="${l(e?.price||"")}" required />
        <input class="input-base" type="number" name="previousPrice" placeholder="Previous Price (optional)" value="${l(e?.previousPrice||"")}" />
      </div>
      <input class="input-base" name="location" placeholder="Location" value="${l(e?.location||"")}" required />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="category" class="input-base">
          <option value="Domestic" ${e?.category==="Domestic"?"selected":""}>Domestic</option>
          <option value="Commercial" ${e?.category==="Commercial"?"selected":""}>Commercial</option>
        </select>
        <select name="status" class="input-base">
          <option value="Available" ${e?.status!=="Sold"?"selected":""}>Available</option>
          <option value="Sold" ${e?.status==="Sold"?"selected":""}>Sold</option>
        </select>
      </div>
      <textarea class="textarea-base min-h-[120px]" name="description" placeholder="Describe the property features..." required>${l(e?.description||"")}</textarea>
      <div class="space-y-4">
        <p class="text-sm font-medium">Images</p>
        <div id="admin-image-grid" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${t.map((a,s)=>`
            <div class="relative group aspect-square" data-image-index="${s}">
              <img src="${l(a)}" class="w-full h-full object-cover rounded-md border" alt="Listing ${s+1}" />
              <button type="button" class="remove-image absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" data-image-index="${s}">X</button>
            </div>
          `).join("")}
        </div>
        <input id="admin-image-input" class="input-base" type="file" accept="image/*" multiple />
      </div>
      <button type="submit" id="admin-save-listing-btn" class="btn-primary w-full">${e?"Update Listing":"Create Listing"}</button>
    </form>
  `},Pt=async()=>{let e;try{if(e=await f("/api/admin/session"),!e?.isAdmin)throw new Error("Unauthorized")}catch{C("/admin/login",!0);return}k.innerHTML=`
    <div class="min-h-screen bg-slate-50/50 pb-20">
      <div class="bg-white border-b py-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 p-2 rounded-xl"><i data-lucide="shield" class="h-6 w-6 text-primary"></i></div>
              <div>
                <div class="flex items-center gap-2"><h1 class="text-2xl font-display font-bold">Admin Panel</h1><span class="badge bg-primary text-white text-xs">${l(e.username||"Admin")}</span></div>
                <p class="text-muted-foreground text-sm">Full site management - listings, inquiries, and users.</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button id="add-listing-btn" class="btn-primary gap-2"><i data-lucide="plus" class="h-4 w-4"></i> Add New Listing</button>
              <a href="/" data-link class="btn btn-outline gap-2"><i data-lucide="external-link" class="h-4 w-4"></i> View Site</a>
              <button id="admin-logout-btn" class="btn btn-outline gap-2 text-muted-foreground hover:text-destructive"><i data-lucide="log-out" class="h-4 w-4"></i> Sign Out</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 py-8 space-y-8">
        <div id="admin-stats" class="grid grid-cols-2 lg:grid-cols-4 gap-4"></div>
        <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div class="flex items-center gap-2 p-4 border-b">
            <button class="admin-tab btn-primary h-9" data-tab="listings">All Listings</button>
            <button class="admin-tab btn btn-outline h-9" data-tab="inquiries">All Inquiries</button>
          </div>
          <div id="admin-listings-wrap" class="overflow-x-auto"></div>
          <div id="admin-inquiries-wrap" class="overflow-x-auto hidden"></div>
        </div>
      </div>
      <div id="admin-modal" class="fixed inset-0 bg-black/50 z-50 hidden items-center justify-center p-4">
        <div class="bg-white rounded-2xl border shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 id="admin-modal-title" class="text-xl font-display font-semibold">Create New Property Listing</h2>
            <button id="close-admin-modal" class="btn btn-outline h-9">Close</button>
          </div>
          <div id="admin-modal-body"></div>
        </div>
      </div>
    </div>
  `;const[t,a,s]=await Promise.all([f("/api/admin/stats"),f("/api/admin/listings"),f("/api/admin/inquiries")]);document.getElementById("admin-stats").innerHTML=[["Total Listings",t.totalListings,"building-2","text-blue-500","bg-blue-50"],["Available",t.availableListings,"check-circle","text-green-500","bg-green-50"],["All Inquiries",t.totalInquiries,"message-square","text-purple-500","bg-purple-50"]].map(([o,d,P,g,u])=>`
      <div class="border border-border/50 shadow-sm rounded-xl p-6 bg-white">
        <div class="flex items-start justify-between">
          <div><p class="text-muted-foreground text-sm mb-1">${o}</p><p class="text-3xl font-display font-bold">${d}</p></div>
          <div class="${u} p-2 rounded-lg"><i data-lucide="${P}" class="h-5 w-5 ${g}"></i></div>
        </div>
      </div>
    `).join("");const i=()=>{const o=a.length?a.map(d=>`
          <tr class="border-b">
            <td class="p-3 font-medium max-w-[220px]"><a href="/listings/${d.id}" data-link class="hover:text-primary line-clamp-1">${l(d.title)}</a></td>
            <td class="p-3"><span class="badge">${l(d.category)}</span></td>
            <td class="p-3 font-semibold">${D(d.price)}</td>
            <td class="p-3"><span class="badge ${d.status==="Available"?"bg-primary text-white":"bg-muted"}">${l(d.status)}</span></td>
            <td class="p-3 text-sm text-muted-foreground">${d.visitCount||0}</td>
            <td class="p-3 text-sm text-muted-foreground">${d.createdAt?R(new Date(d.createdAt),"MMM d, yyyy"):"-"}</td>
            <td class="p-3 text-right">
              <div class="flex justify-end gap-1">
                <button class="btn btn-outline h-8 edit-listing" data-id="${d.id}">Edit</button>
                <button class="btn h-8 bg-destructive/10 text-destructive hover:bg-destructive/20 delete-listing" data-id="${d.id}">Delete</button>
              </div>
            </td>
          </tr>
        `).join(""):'<tr><td colspan="7" class="p-12 text-center text-muted-foreground">No listings yet.</td></tr>';document.getElementById("admin-listings-wrap").innerHTML=`
      <table class="w-full text-sm">
        <thead class="bg-muted/50 text-left">
          <tr>
            <th class="p-3">Property</th>
            <th class="p-3">Category</th>
            <th class="p-3">Price</th>
            <th class="p-3">Status</th>
            <th class="p-3">Views</th>
            <th class="p-3">Created</th>
            <th class="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>${o}</tbody>
      </table>
    `},n=()=>{const o=s.length?s.map(d=>`
          <tr class="border-b">
            <td class="p-3 font-medium text-primary">${l(d.listingTitle)}</td>
            <td class="p-3">${l(d.name)}</td>
            <td class="p-3 text-sm"><div>${l(d.email)}</div><div class="text-muted-foreground">${l(d.phone||"")}</div></td>
            <td class="p-3 max-w-xs truncate text-sm text-muted-foreground" title="${l(d.message||"")}">${l(d.message||"-")}</td>
            <td class="p-3 text-sm text-muted-foreground">${d.createdAt?R(new Date(d.createdAt),"MMM d, yyyy"):"-"}</td>
          </tr>
        `).join(""):'<tr><td colspan="5" class="p-12 text-center text-muted-foreground">No inquiries received yet.</td></tr>';document.getElementById("admin-inquiries-wrap").innerHTML=`
      <table class="w-full text-sm">
        <thead class="bg-muted/50 text-left">
          <tr>
            <th class="p-3">Property</th>
            <th class="p-3">Client Name</th>
            <th class="p-3">Contact</th>
            <th class="p-3">Message</th>
            <th class="p-3">Date</th>
          </tr>
        </thead>
        <tbody>${o}</tbody>
      </table>
    `};i(),n();const r=document.getElementById("admin-modal"),m=document.getElementById("admin-modal-body"),b=document.getElementById("admin-modal-title"),v=(o=null)=>{b.textContent=o?"Edit Listing":"Create New Property Listing",m.innerHTML=wt(o),r.classList.remove("hidden"),r.classList.add("flex");let d=[...o?.images||[]];const P=()=>{const g=document.getElementById("admin-image-grid");g.innerHTML=d.map((u,p)=>`
        <div class="relative group aspect-square">
          <img src="${l(u)}" class="w-full h-full object-cover rounded-md border" alt="Listing ${p+1}" />
          <button type="button" class="remove-image absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" data-image-index="${p}">X</button>
        </div>
      `).join(""),document.querySelectorAll(".remove-image").forEach(u=>{u.addEventListener("click",()=>{const p=Number(u.getAttribute("data-image-index"));d.splice(p,1),P()})})};P(),document.getElementById("admin-image-input")?.addEventListener("change",async g=>{const u=Array.from(g.target.files||[]);if(!u.length)return;const p=document.getElementById("admin-save-listing-btn");p.disabled=!0,p.textContent="Uploading images...";try{for(const x of u){const $=new FormData;$.append("file",x);const O=await fetch("/api/upload",{method:"POST",credentials:"include",body:$}),Y=await O.json();if(!O.ok)throw new Error(Y?.message||"Upload failed");d.push(Y.url)}P()}catch(x){y("Upload Failed",x.message||"Could not upload images.",!0)}finally{p.disabled=!1,p.textContent=o?"Update Listing":"Create Listing",g.target.value=""}}),document.getElementById("admin-listing-form")?.addEventListener("submit",async g=>{g.preventDefault();const u=new FormData(g.target),p=g.target.getAttribute("data-edit-id"),x={title:String(u.get("title")||"").trim(),description:String(u.get("description")||"").trim(),price:Number(u.get("price")||0),previousPrice:u.get("previousPrice")?Number(u.get("previousPrice")):void 0,location:String(u.get("location")||"").trim(),category:String(u.get("category")||"Domestic"),status:String(u.get("status")||"Available"),images:d},$=document.getElementById("admin-save-listing-btn");$.disabled=!0,$.textContent=p?"Updating...":"Creating...";try{const O=p?`/api/listings/${p}`:"/api/listings",U=await f(O,{method:p?"PUT":"POST",body:JSON.stringify(x)});if(p){const G=a.findIndex(ie=>ie.id===Number(p));G>=0&&(a[G]=U)}else a.unshift(U);h(),i(),A(),y("Success",p?"Listing updated successfully":"Listing created successfully")}catch(O){y("Error",O.message||"Failed to save listing.",!0)}finally{$.disabled=!1}})},h=()=>{r.classList.add("hidden"),r.classList.remove("flex"),m.innerHTML=""};document.getElementById("close-admin-modal")?.addEventListener("click",h),r.addEventListener("click",o=>{o.target===r&&h()}),document.getElementById("add-listing-btn")?.addEventListener("click",()=>v(null)),document.querySelectorAll(".admin-tab").forEach(o=>{o.addEventListener("click",()=>{const d=o.getAttribute("data-tab");document.querySelectorAll(".admin-tab").forEach(P=>{P.className="admin-tab btn btn-outline h-9"}),o.className="admin-tab btn-primary h-9",document.getElementById("admin-listings-wrap").classList.toggle("hidden",d!=="listings"),document.getElementById("admin-inquiries-wrap").classList.toggle("hidden",d!=="inquiries")})}),document.getElementById("admin-listings-wrap")?.addEventListener("click",async o=>{const d=o.target.closest(".edit-listing"),P=o.target.closest(".delete-listing");if(d){const g=Number(d.getAttribute("data-id")),u=a.find(p=>p.id===g);u&&v(u);return}if(P){const g=Number(P.getAttribute("data-id")),u=a.find(x=>x.id===g);if(!u||!confirm(`Delete "${u.title}" permanently?`))return;try{await f(`/api/listings/${g}`,{method:"DELETE"});const x=a.findIndex($=>$.id===g);x>=0&&a.splice(x,1),i(),y("Listing deleted successfully")}catch(x){y("Error",x.message||"Failed to delete listing",!0)}}}),document.getElementById("admin-logout-btn")?.addEventListener("click",async()=>{await f("/api/admin/logout",{method:"POST"}),C("/admin/login",!0)})},kt=()=>{k.innerHTML=E(`
    <div class="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-md mx-4 rounded-xl border bg-white p-6">
        <div class="flex mb-4 gap-2"><i data-lucide="alert-circle" class="h-8 w-8 text-red-500"></i><h1 class="text-2xl font-bold text-gray-900">404 Page Not Found</h1></div>
        <p class="mt-4 text-sm text-gray-600">The page you requested does not exist.</p>
      </div>
    </div>
  `)},A=async()=>{window.__lucideLoaded||(await new Promise((e,t)=>{const a=document.createElement("script");a.src="https://unpkg.com/lucide@latest",a.onload=e,a.onerror=t,document.head.appendChild(a)}),window.__lucideLoaded=!0),window.lucide?.createIcons&&window.lucide.createIcons()},$t=()=>{document.addEventListener("click",e=>{const t=e.target.closest("a[data-link]");if(!t)return;const a=t.getAttribute("href");!a||a.startsWith("http")||a.startsWith("mailto:")||a.startsWith("#")||(e.preventDefault(),C(a))}),window.addEventListener("popstate",_)},Mt=()=>{const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("mobile-menu");!e||!t||e.addEventListener("click",()=>{t.classList.toggle("hidden")})};async function _(){const e=location.pathname;if(e==="/")await gt();else if(e==="/listings")await ft();else if(/^\/listings\/\d+$/.test(e)){const t=e.split("/").pop();await bt(t)}else e==="/about"?vt():e==="/contact"?xt():e==="/admin/login"?await yt():e==="/admin"?await Pt():kt();Mt(),await A()}$t();_();






