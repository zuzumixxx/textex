(function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=2)})({"04f8":function(t,n,e){var r=e("2d00"),o=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"06cf":function(t,n,e){var r=e("83ab"),o=e("c65b"),c=e("d1e7"),i=e("5c6c"),a=e("fc6a"),u=e("a04b"),f=e("1a2d"),s=e("0cfb"),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=a(t),n=u(n),s)try{return l(t,n)}catch(e){}if(f(t,n))return i(!o(c.f,t,n),t[n])}},"07fa":function(t,n,e){var r=e("50c4");t.exports=function(t){return r(t.length)}},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),c=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,n){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},"13d2":function(t,n,e){var r=e("d039"),o=e("1626"),c=e("1a2d"),i=e("83ab"),a=e("5e77").CONFIGURABLE,u=e("8925"),f=e("69f3"),s=f.enforce,l=f.get,d=Object.defineProperty,p=i&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),b=String(String).split("String"),y=t.exports=function(t,n,e){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!c(t,"name")||a&&t.name!==n)&&(i?d(t,"name",{value:n,configurable:!0}):t.name=n),p&&e&&c(e,"arity")&&t.length!==e.arity&&d(t,"length",{value:e.arity});try{e&&c(e,"constructor")&&e.constructor?i&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=s(t);return c(r,"source")||(r.source=b.join("string"==typeof n?n:"")),t};Function.prototype.toString=y((function(){return o(this)&&l(this).source||u(this)}),"toString")},"14d9":function(t,n,e){"use strict";var r=e("23e7"),o=e("7b0b"),c=e("07fa"),i=e("3a34"),a=e("3511"),u=e("d039"),f=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:f||s},{push:function(t){var n=o(this),e=c(n),r=arguments.length;a(e+r);for(var u=0;u<r;u++)n[e]=arguments[u],e++;return i(n,e),e}})},1626:function(t,n,e){var r=e("8ea1"),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},"1a2d":function(t,n,e){var r=e("e330"),o=e("7b0b"),c=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return c(o(t),n)}},"1d80":function(t,n,e){var r=e("7234"),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},2:function(t,n,e){t.exports=e("ecea")},"23cb":function(t,n,e){var r=e("5926"),o=Math.max,c=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):c(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,c=e("9112"),i=e("cb2d"),a=e("6374"),u=e("e893"),f=e("94ca");t.exports=function(t,n){var e,s,l,d,p,b,y=t.target,v=t.global,h=t.stat;if(s=v?r:h?r[y]||a(y,{}):(r[y]||{}).prototype,s)for(l in n){if(p=n[l],t.dontCallGetSet?(b=o(s,l),d=b&&b.value):d=s[l],e=f(v?l:y+(h?".":"#")+l,t.forced),!e&&void 0!==d){if(typeof p==typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&c(p,"sham",!0),i(s,l,p,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),c=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},"2d00":function(t,n,e){var r,o,c=e("da84"),i=e("342f"),a=c.process,u=c.Deno,f=a&&a.versions||u&&u.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},"342f":function(t,n,e){var r=e("d066");t.exports=r("navigator","userAgent")||""},3511:function(t,n){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},"3a34":function(t,n,e){"use strict";var r=e("83ab"),o=e("e8b5"),c=TypeError,i=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,n){if(o(t)&&!i(t,"length").writable)throw c("Cannot set read only .length");return t.length=n}:function(t,n){return t.length=n}},"3a9b":function(t,n,e){var r=e("e330");t.exports=r({}.isPrototypeOf)},"40d5":function(t,n,e){var r=e("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"44ad":function(t,n,e){var r=e("e330"),o=e("d039"),c=e("c6b6"),i=Object,a=r("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):i(t)}:i},"485a":function(t,n,e){var r=e("c65b"),o=e("1626"),c=e("861d"),i=TypeError;t.exports=function(t,n){var e,a;if("string"===n&&o(e=t.toString)&&!c(a=r(e,t)))return a;if(o(e=t.valueOf)&&!c(a=r(e,t)))return a;if("string"!==n&&o(e=t.toString)&&!c(a=r(e,t)))return a;throw i("Can't convert object to primitive value")}},"4d64":function(t,n,e){var r=e("fc6a"),o=e("23cb"),c=e("07fa"),i=function(t){return function(n,e,i){var a,u=r(n),f=c(u),s=o(i,f);if(t&&e!=e){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,n,e){var r=e("5926"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.27.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,n,e){var r=e("d066"),o=e("e330"),c=e("241c"),i=e("7418"),a=e("825a"),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=c.f(a(t)),e=i.f;return e?u(n,e(t)):n}},5926:function(t,n,e){var r=e("b42e");t.exports=function(t){var n=+t;return n!==n||0===n?0:r(n)}},"59ed":function(t,n,e){var r=e("1626"),o=e("0d51"),c=TypeError;t.exports=function(t){if(r(t))return t;throw c(o(t)+" is not a function")}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"5e77":function(t,n,e){var r=e("83ab"),o=e("1a2d"),c=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,a=o(c,"name"),u=a&&"something"===function(){}.name,f=a&&(!r||r&&i(c,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:f}},6374:function(t,n,e){var r=e("da84"),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},"69f3":function(t,n,e){var r,o,c,i=e("cdce"),a=e("da84"),u=e("861d"),f=e("9112"),s=e("1a2d"),l=e("c6cd"),d=e("f772"),p=e("d012"),b="Object already initialized",y=a.TypeError,v=a.WeakMap,h=function(t){return c(t)?o(t):r(t,{})},O=function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}};if(i||l.state){var m=l.state||(l.state=new v);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,n){if(m.has(t))throw y(b);return n.facade=t,m.set(t,n),n},o=function(t){return m.get(t)||{}},c=function(t){return m.has(t)}}else{var g=d("state");p[g]=!0,r=function(t,n){if(s(t,g))throw y(b);return n.facade=t,f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},c=function(t){return s(t,g)}}t.exports={set:r,get:o,has:c,enforce:h,getterFor:O}},7234:function(t,n){t.exports=function(t){return null===t||void 0===t}},7418:function(t,n){n.f=Object.getOwnPropertySymbols},"76f4":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));const r={GET_COOKIE:"IG_DM_GET_COOKIE",MONITOR_NEW_FOLLOWER_OR_LIKE:"MONITOR_NEW_FOLLOWER_OR_LIKE",START_MONITOR_NEW_FOLLOWER_OR_LIKE:"START_MONITOR_NEW_FOLLOWER_OR_LIKE",STOP_POLLING_MONITOR_SCHEDULE:"STOP_POLLING_MONITOR_SCHEDULE",STOP_DM:"STOP_DM",NEXT_DM:"NEXT_DM"};function o(t="",n={},e){chrome.runtime.sendMessage({type:t,data:n},e)}},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80"),o=Object;t.exports=function(t){return o(r(t))}},"825a":function(t,n,e){var r=e("861d"),o=String,c=TypeError;t.exports=function(t){if(r(t))return t;throw c(o(t)+" is not an object")}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n,e){var r=e("1626"),o=e("8ea1"),c=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===c}:function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,n,e){var r=e("e330"),o=e("1626"),c=e("c6cd"),i=r(Function.toString);o(c.inspectSource)||(c.inspectSource=function(t){return i(t)}),t.exports=c.inspectSource},"8ea1":function(t,n){var e="object"==typeof document&&document.all,r="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},"90b9":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const r="https://www.instagram.com/direct/inbox/?ig_dm";function o(t=""){return t.startsWith(r)}},"90e3":function(t,n,e){var r=e("e330"),o=0,c=Math.random(),i=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+c,36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),c=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),o=e("1626"),c=/#|\.prototype\./,i=function(t,n){var e=u[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=i.normalize=function(t){return String(t).replace(c,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),c=e("aed9"),i=e("825a"),a=e("a04b"),u=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",d="configurable",p="writable";n.f=r?c?function(t,n,e){if(i(t),n=a(n),i(e),"function"===typeof t&&"prototype"===n&&"value"in e&&p in e&&!e[p]){var r=s(t,n);r&&r[p]&&(t[n]=e.value,e={configurable:d in e?e[d]:r[d],enumerable:l in e?e[l]:r[l],writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(i(t),n=a(n),i(e),o)try{return f(t,n,e)}catch(r){}if("get"in e||"set"in e)throw u("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},a04b:function(t,n,e){var r=e("c04e"),o=e("d9b5");t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},aed9:function(t,n,e){var r=e("83ab"),o=e("d039");t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},b622:function(t,n,e){var r=e("da84"),o=e("5692"),c=e("1a2d"),i=e("90e3"),a=e("04f8"),u=e("fdbf"),f=o("wks"),s=r.Symbol,l=s&&s["for"],d=u?s:s&&s.withoutSetter||i;t.exports=function(t){if(!c(f,t)||!a&&"string"!=typeof f[t]){var n="Symbol."+t;a&&c(s,t)?f[t]=s[t]:f[t]=u&&l?l(n):d(n)}return f[t]}},c04e:function(t,n,e){var r=e("c65b"),o=e("861d"),c=e("d9b5"),i=e("dc4a"),a=e("485a"),u=e("b622"),f=TypeError,s=u("toPrimitive");t.exports=function(t,n){if(!o(t)||c(t))return t;var e,u=i(t,s);if(u){if(void 0===n&&(n="default"),e=r(u,t,n),!o(e)||c(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},c430:function(t,n){t.exports=!1},c65b:function(t,n,e){var r=e("40d5"),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},c6b6:function(t,n,e){var r=e("e330"),o=r({}.toString),c=r("".slice);t.exports=function(t){return c(o(t),8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("6374"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},ca84:function(t,n,e){var r=e("e330"),o=e("1a2d"),c=e("fc6a"),i=e("4d64").indexOf,a=e("d012"),u=r([].push);t.exports=function(t,n){var e,r=c(t),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&u(s,e);while(n.length>f)o(r,e=n[f++])&&(~i(s,e)||u(s,e));return s}},ca8f:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"a",(function(){return a})),e.d(n,"h",(function(){return u})),e.d(n,"d",(function(){return f})),e.d(n,"f",(function(){return s})),e.d(n,"b",(function(){return l})),e.d(n,"g",(function(){return d})),e.d(n,"c",(function(){return p}));const r={AutoReplySetting:"autoReplySetting",MONITOR_INBOX_POOL:"monitor_inbox_pool",DM_USER_HISTORY_POOL:"dm_user_history_pool",IG_HEADER:"ig_header"};async function o(t={}){return new Promise((n,e)=>{try{chrome.storage.local.set(t,(function(){n()}))}catch(r){console.error("error: ",r),e(r)}})}async function c(t=""){return new Promise((n,e)=>{try{chrome.storage.local.get([t],(function(e){n(e[t])}))}catch(r){console.error("error: ",r),e(r)}})}async function i(t={}){try{const n=await c(r.AutoReplySetting)||{};Object.assign(n,t),await o({[r.AutoReplySetting]:n})}catch(n){console.error("error: ",n)}}async function a(){try{const t=await c(r.AutoReplySetting)||{};return t}catch(t){console.error("error: ",t)}}async function u(t=[]){try{await o({[r.MONITOR_INBOX_POOL]:[...t]})}catch(n){console.error("error: ",n)}}async function f(){try{const t=await c(r.MONITOR_INBOX_POOL)||[];return t}catch(t){console.error("error: ",t)}}async function s(t=[]){try{await o({[r.DM_USER_HISTORY_POOL]:[...t]})}catch(n){console.error("error: ",n)}}async function l(){try{const t=await c(r.DM_USER_HISTORY_POOL)||[];return t}catch(t){console.error("error: ",t)}}async function d(t={}){try{await o({[r.IG_HEADER]:t})}catch(n){console.error("error: ",n)}}async function p(){try{const t=await c(r.IG_HEADER)||{};return t}catch(t){console.error("error: ",t)}}},cb2d:function(t,n,e){var r=e("1626"),o=e("9bf2"),c=e("13d2"),i=e("6374");t.exports=function(t,n,e,a){a||(a={});var u=a.enumerable,f=void 0!==a.name?a.name:n;if(r(e)&&c(e,f,a),a.global)u?t[n]=e:i(n,e);else{try{a.unsafe?t[n]&&(u=!0):delete t[n]}catch(s){}u?t[n]=e:o.f(t,n,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},cdce:function(t,n,e){var r=e("da84"),o=e("1626"),c=r.WeakMap;t.exports=o(c)&&/native code/.test(String(c))},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,e){var r=e("da84"),o=e("1626"),c=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?c(r[t]):r[t]&&r[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d9b5:function(t,n,e){var r=e("d066"),o=e("1626"),c=e("3a9b"),i=e("fdbf"),a=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&c(n.prototype,a(t))}},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dc4a:function(t,n,e){var r=e("59ed"),o=e("7234");t.exports=function(t,n){var e=t[n];return o(e)?void 0:r(e)}},e330:function(t,n,e){var r=e("40d5"),o=Function.prototype,c=o.call,i=r&&o.bind.bind(c,c);t.exports=r?i:function(t){return function(){return c.apply(t,arguments)}}},e488:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return i})),e.d(n,"g",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"h",(function(){return d})),e.d(n,"e",(function(){return y})),e.d(n,"d",(function(){return v})),e.d(n,"f",(function(){return h}));e("14d9");var r=e("ca8f"),o=e("f121");async function c(t=[]){const n=await Object(r["d"])()||[];for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){const o=t[e],{type:c,story_type:i,args:a}=o,u=null===a||void 0===a?void 0:a.profile_id;if(!u)return;const f={id:u,username:null===a||void 0===a?void 0:a.profile_name,profile_img:null===a||void 0===a?void 0:a.profile_image,timestamp:null===a||void 0===a?void 0:a.timestamp};if(3===c&&101===i||1==c&&60==i){f.type=3===c&&101===i?0:1;const t=await Object(r["a"])(),e=t["isAutoReplyFollower"],o=t["isAutoReplyLike"];if(3===c&&101===i&&"0"===e)continue;if(1==c&&60==i&&"0"===o)continue;if((null===n||void 0===n?void 0:n.length)>0){let t=n.find(t=>t.id===u);if(t)continue}n.push(f)}}await Object(r["h"])(n)}async function i(t){let n="https://i.instagram.com/api/v1/news/inbox/";const e=await fetch(n,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t,"x-requested-with":"XMLHttpRequest","x-instagram-ajax":1,"x-asbd-id":"437806","X-IG-App-ID":"936619743392459"},credentials:"include"}).then((function(t){return t.json()}));return e}async function a(t,n){let e="https://i.instagram.com/api/v1/direct_v2/create_group_thread/";const r=n.id,o={recipient_users:'["'.concat(r,'"]')},c=new URLSearchParams([...Object.entries(o)]).toString(),i=await fetch(e,{method:"post",credentials:"include",body:c,headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t,"x-requested-with":"XMLHttpRequest","x-instagram-ajax":1,"x-asbd-id":"437806","X-IG-App-ID":"936619743392459"}}).then((function(t){return t.json()})),a=null===i||void 0===i?void 0:i.thread_id;if(a){const t=await p(n.type);u(a,n,t)}return i}function u(t,n,e){window.postMessage({type:"IG_DM_INJECT_DISPATCH_DM_REQUEST",thread_id:t,user:n,text:e},"*")}let f;async function s(t){const{MIN:n,MAX:e}=o["a"].DELAY_BETWEEN_DM,c=b(n,e);clearTimeout(f);let i="";t||(i=await Object(r["c"])());try{const n=await Object(r["d"])()||[];let e;while("undefined"!==typeof(e=n.shift())){let n=await Object(r["b"])()||[];if((null===n||void 0===n?void 0:n.length)>0){let t=n.filter(t=>{var n;return t.id===(null===(n=e)||void 0===n?void 0:n.id)});if(t&&t.length>0)continue}console.log("next dm on: ",new Date((new Date).getTime()+c).toLocaleString(),i),f=setTimeout(async()=>{a(t,e)},c);break}await Object(r["h"])(n)}catch(u){console.error(u)}}function l(){return f}function d(){clearTimeout(f),f=null}async function p(t=0){const n=await Object(r["a"])();if(!n)return;const e=n[0===t?"autoReplyFollowerTextList":"autoReplyLikeTextList"]||[],o=null===e||void 0===e?void 0:e.length;return o?e[b(0,o-1)]:void 0}function b(t,n){return Math.floor(Math.random()*(n-t+1)+t)}function y(){var t=document.createElement("script");t.src=chrome.runtime.getURL("js/ijsource.js"),t.onload=function(){this.remove()},document.body.append(t)}function v(){var t=document.createElement("link");t.href=chrome.runtime.getURL("inject/style.css"),t.type="text/css",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)}function h(t=""){if(t){var n=document.createElement("script");n.src=chrome.runtime.getURL(t),n.onload=function(){this.remove()},document.body.append(n)}}},e893:function(t,n,e){var r=e("1a2d"),o=e("56ef"),c=e("06cf"),i=e("9bf2");t.exports=function(t,n,e){for(var a=o(n),u=i.f,f=c.f,s=0;s<a.length;s++){var l=a[s];r(t,l)||e&&r(e,l)||u(t,l,f(n,l))}}},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ecea:function(t,n,e){"use strict";e.r(n);e("14d9");var r=e("76f4"),o=e("ca8f"),c=e("90b9"),i=e("e488");const a="https://www.instagram.com",u=location.href;let f;Object(c["a"])(u)&&Object(i["e"])(),chrome.runtime.onConnect.addListener((function(t){Object(c["a"])(u)&&"iframe_connect"==t.name&&(console.log("%c content: connect bg.","color:#0f0;"),t.onMessage.addListener((async function(n){const{type:e,data:c}=n||{};if(e===r["a"].MONITOR_NEW_FOLLOWER_OR_LIKE&&t.postMessage({type:r["a"].GET_COOKIE,data:{url:a,name:"csrftoken"}}),e===r["a"].GET_COOKIE){f=c.value;try{Object(i["c"])()||await Object(o["h"])([]);const t=await Object(i["b"])(f);if(!t)return;await Object(i["a"])(null===t||void 0===t?void 0:t.new_stories),Object(i["c"])()||await Object(i["g"])(f)}catch(u){console.error(u)}}e===r["a"].STOP_DM&&(console.log("%c stop dm.","color:#ff1515;"),Object(i["h"])())})))})),window.addEventListener("message",async t=>{const{type:n}=t.data||{};try{if("IG_DM_INJECT_DISPATCH_DM_RESPONSE"===n){const{user:n,text:e}=t.data,r=await Object(o["b"])()||[],c={...n,text:e,st_time:(new Date).getTime()};r.push(c),await Object(o["f"])(r),await Object(i["g"])(f)}}catch(e){console.error("Inject Error: ",e)}}),chrome.runtime.sendMessage(chrome.runtime.id)},f121:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r={POLLING_MONITOR_INTERVAL:1,DELAY_BETWEEN_DM:{MIN:18e4,MAX:36e4}}},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,n,e){var r=e("04f8");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}});