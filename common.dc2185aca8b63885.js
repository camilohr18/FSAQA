"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{2520:(y,_,i)=>{i.d(_,{c:()=>r});var a=i(8393),d=i(1086),c=i(8607);const r=(e,o)=>{let t,n;const f=(l,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,p);E&&o(E)&&!E.disabled?E!==t&&(s(),u(E,w)):s()},u=(l,p)=>{t=l,n||(n=t);const w=t;(0,a.w)(()=>w.classList.add("ion-activated")),p()},s=(l=!1)=>{if(!t)return;const p=t;(0,a.w)(()=>p.classList.remove("ion-activated")),l&&n!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>f(l.currentX,l.currentY,d.a),onMove:l=>f(l.currentX,l.currentY,d.b),onEnd:()=>{s(!0),(0,d.h)(),n=void 0}})}},8438:(y,_,i)=>{i.d(_,{g:()=>d});var a=i(8476);const d=()=>{if(void 0!==a.w)return a.w.Capacitor}},5572:(y,_,i)=>{i.d(_,{c:()=>a,i:()=>d});const a=(c,r,e)=>"function"==typeof e?e(c,r):"string"==typeof e?c[e]===r[e]:Array.isArray(r)?r.includes(c):c===r,d=(c,r,e)=>void 0!==c&&(Array.isArray(c)?c.some(o=>a(o,r,e)):a(c,r,e))},3351:(y,_,i)=>{i.d(_,{g:()=>a});const a=(o,t,n,f,u)=>c(o[1],t[1],n[1],f[1],u).map(s=>d(o[0],t[0],n[0],f[0],s)),d=(o,t,n,f,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*n*u+3*n+f*u))-o*Math.pow(u-1,3),c=(o,t,n,f,u)=>e((f-=u)-3*(n-=u)+3*(t-=u)-(o-=u),3*n-6*t+3*o,3*t-3*o,o).filter(l=>l>=0&&l<=1),e=(o,t,n,f)=>{if(0===o)return((o,t,n)=>{const f=t*t-4*o*n;return f<0?[]:[(-t+Math.sqrt(f))/(2*o),(-t-Math.sqrt(f))/(2*o)]})(t,n,f);const u=(3*(n/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*n+27*(f/=o))/27;if(0===u)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-u),-Math.sqrt(-u)];const l=Math.pow(s/2,2)+Math.pow(u/3,3);if(0===l)return[Math.pow(s/2,.5)-t/3];if(l>0)return[Math.pow(-s/2+Math.sqrt(l),1/3)-Math.pow(s/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-u/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-u/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},5083:(y,_,i)=>{i.d(_,{i:()=>a});const a=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>r});const a="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let o=[],t=!0;const n=e?e.shadowRoot:document,f=e||document.body,u=M=>{o.forEach(g=>g.classList.remove(a)),M.forEach(g=>g.classList.add(a)),o=M},s=()=>{t=!1,u([])},l=M=>{t=c.includes(M.key),t||u([])},p=M=>{if(t&&void 0!==M.composedPath){const g=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));u(g)}},w=()=>{n.activeElement===f&&u([])};return n.addEventListener("keydown",l),n.addEventListener("focusin",p),n.addEventListener("focusout",w),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",l),n.removeEventListener("focusin",p),n.removeEventListener("focusout",w),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:u}}},1086:(y,_,i)=>{i.d(_,{I:()=>d,a:()=>t,b:()=>n,c:()=>o,d:()=>u,h:()=>f});var a=i(8438),d=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(d||{});const r={getEngine(){const s=(0,a.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const l=(0,a.g)();return"web"!==(null==l?void 0:l.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const l=this.getEngine();l&&l.impact({style:s.style})},notification(s){const l=this.getEngine();l&&l.notification({type:s.type})},selection(){this.impact({style:d.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},e=()=>r.available(),o=()=>{e()&&r.selection()},t=()=>{e()&&r.selectionStart()},n=()=>{e()&&r.selectionChanged()},f=()=>{e()&&r.selectionEnd()},u=s=>{e()&&r.impact(s)}},909:(y,_,i)=>{i.d(_,{I:()=>o,a:()=>u,b:()=>e,c:()=>p,d:()=>E,f:()=>s,g:()=>f,i:()=>n,p:()=>w,r:()=>M,s:()=>l});var a=i(467),d=i(4920),c=i(4929);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,n=g=>"ION-CONTENT"===g.tagName,f=function(){var g=(0,a.A)(function*(h){return n(h)?(yield new Promise(m=>(0,d.c)(h,m)),h.getScrollElement()):h});return function(m){return g.apply(this,arguments)}}(),u=g=>g.querySelector(o)||g.querySelector(t),s=g=>g.closest(t),l=(g,h)=>n(g)?g.scrollToTop(h):Promise.resolve(g.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(g,h,m,O)=>n(g)?g.scrollByPoint(h,m,O):Promise.resolve(g.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),w=g=>(0,c.b)(g,e),E=g=>{if(n(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},M=(g,h)=>{n(g)?g.scrollY=h:g.style.removeProperty("overflow")}},3992:(y,_,i)=>{i.d(_,{a:()=>a,b:()=>p,c:()=>t,d:()=>w,e:()=>P,f:()=>o,g:()=>E,h:()=>c,i:()=>d,j:()=>v,k:()=>D,l:()=>n,m:()=>s,n:()=>M,o:()=>u,p:()=>e,q:()=>r,r:()=>C,s:()=>L,t:()=>l,u:()=>m,v:()=>O,w:()=>f,x:()=>g,y:()=>h});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,_,i)=>{i.d(_,{c:()=>r,g:()=>e});var a=i(8476),d=i(4920),c=i(4929);const r=(t,n,f)=>{let u,s;if(void 0!==a.w&&"MutationObserver"in a.w){const E=Array.isArray(n)?n:[n];u=new MutationObserver(M=>{for(const g of M)for(const h of g.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return f(),void(0,d.r)(()=>l(h))}),u.observe(t,{childList:!0,subtree:!0})}const l=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(g=>{f();for(const h of g)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&w()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),w()}}},e=(t,n,f)=>{const u=null==t?0:t.toString().length,s=o(u,n);if(void 0===f)return s;try{return f(u,n)}catch(l){return(0,c.a)("Exception in provided `counterFormatter`.",l),s}},o=(t,n)=>`${t} / ${n}`},1622:(y,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var a=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},f=!1;const u=()=>{t={},n={},f=!1},s=v=>{if(a.K.getEngine())l(v);else{if(!v.visualViewport)return;n=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?p(v):g(v)&&w(v)}}},l=v=>{v.addEventListener("keyboardDidShow",D=>p(v,D)),v.addEventListener("keyboardDidHide",()=>w(v))},p=(v,D)=>{h(v,D),f=!0},w=v=>{m(v),f=!1},E=()=>!f&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=v=>f&&!g(v),g=v=>f&&n.height===v.innerHeight,h=(v,D)=>{const P=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:v.innerHeight-n.height}});v.dispatchEvent(P)},m=v=>{const D=new CustomEvent(e);v.dispatchEvent(D)},O=v=>{t=Object.assign({},n),n=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(y,_,i)=>{i.d(_,{K:()=>r,a:()=>c});var a=i(8438),d=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(d||{}),c=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(c||{});const r={getEngine(){const e=(0,a.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==d.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,_,i)=>{i.d(_,{c:()=>o});var a=i(467),d=i(8476),c=i(4379);const r=t=>{if(void 0===d.d||t===c.a.None||void 0===t)return null;const n=d.d.querySelector("ion-app");return null!=n?n:d.d.body},e=t=>{const n=r(t);return null===n?0:n.clientHeight},o=function(){var t=(0,a.A)(function*(n){let f,u,s,l;const p=function(){var h=(0,a.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;f=()=>{void 0===l&&(l=e(O)),s=!0,w(s,O)},u=()=>{s=!1,w(s,O)},null==d.w||d.w.addEventListener("keyboardWillShow",f),null==d.w||d.w.addEventListener("keyboardWillHide",u)});return function(){return h.apply(this,arguments)}}(),w=(h,m)=>{n&&n(h,E(m))},E=h=>{if(0===l||l===e(h))return;const m=r(h);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===l&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",f),null==d.w||d.w.removeEventListener("keyboardWillHide",u),f=u=void 0},isKeyboardVisible:()=>s}});return function(f){return t.apply(this,arguments)}}()},7838:(y,_,i)=>{i.d(_,{c:()=>d});var a=i(467);const d=()=>{let c;return{lock:function(){var e=(0,a.A)(function*(){const o=c;let t;return c=new Promise(n=>t=n),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},9001:(y,_,i)=>{i.d(_,{c:()=>c});var a=i(8476),d=i(4920);const c=(r,e,o)=>{let t;const n=()=>!(void 0===e()||void 0!==r.label||null===o()),u=()=>{const l=e();if(void 0===l)return;if(!n())return void l.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==a.w&&"IntersectionObserver"in a.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(u(),w.disconnect(),t=void 0)},{threshold:.01,root:r});w.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,d.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,_,i)=>{i.d(_,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(c,r,e)=>{const o=c*r/e-c+"ms",t=2*Math.PI*r/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,e)=>{const o=r/e,t=c*o-c+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})}}},7166:(y,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>e});var a=i(4920),d=i(5083),c=i(8607);i(1970);const e=(o,t,n,f,u)=>{const s=o.ownerDocument.defaultView;let l=(0,d.i)(o);const w=m=>l?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(l=(0,d.i)(o),(m=>{const{startX:C}=m;return l?C>=s.innerWidth-50:C<=50})(m)&&t()),onStart:n,onMove:m=>{const C=w(m)/s.innerWidth;f(C)},onEnd:m=>{const O=w(m),C=s.innerWidth,v=O/C,D=(m=>l?-m.velocityX:m.velocityX)(m),P=D>=0&&(D>.2||O>C/2),b=(P?1-v:v)*C;let x=0;if(b>5){const A=b/Math.abs(D);x=Math.min(A,540)}u(P,v<=0?.01:(0,a.j)(0,v,.9999),x)}})}},2935:(y,_,i)=>{i.d(_,{w:()=>a});const a=(r,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{o(d(n,e))});return t.observe(r,{childList:!0,subtree:!0}),t},d=(r,e)=>{let o;return r.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)o=c(t.addedNodes[n],e)||o}),o},c=(r,e)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(n=>n.value===o.value)}},8195:(y,_,i)=>{i.d(_,{n:()=>r});var a=i(3953);function d(e,o){if(1&e&&(a.j41(0,"p"),a.EFF(1),a.k0s()),2&e){const t=a.XpG();a.R7$(),a.SpI(" ",t.mss,"\n")}}function c(e,o){if(1&e&&(a.j41(0,"div"),a.nrm(1,"img",1)(2,"br"),a.j41(3,"a",2),a.EFF(4,"Abrir en otra pesta\xf1a"),a.k0s()()),2&e){const t=a.XpG();a.R7$(),a.Y8G("src",t.mss,a.B4B),a.R7$(2),a.Y8G("href",t.mss,a.B4B)}}let r=(()=>{var e;class o{constructor(){this.mss="",this.inf=!1}ngOnInit(){}}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.VBU({type:e,selectors:[["app-popover-info"]],inputs:{mss:"mss",inf:"inf"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"bigImg",3,"src"],["target","_blank",1,"button",3,"href"]],template:function(n,f){1&n&&a.DNE(0,d,2,1,"p",0)(1,c,5,2,"div",0),2&n&&(a.Y8G("ngIf",f.inf),a.R7$(),a.Y8G("ngIf",!f.inf))},styles:[".bigImg[_ngcontent-%COMP%]{width:100%;display:block;margin:auto}a.button[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff;padding:5px 3px;text-decoration:none;display:block;margin:auto;text-align:center}"]}),o})()},9892:(y,_,i)=>{i.d(_,{H:()=>d});var a=i(3953);let d=(()=>{var c;class r{transform(o,t=""){return""!==t&&o?(t=t.toLowerCase(),console.log(t),o.filter(n=>n.desc.toLowerCase().includes(t))):o}}return(c=r).\u0275fac=function(o){return new(o||c)},c.\u0275pipe=a.EJ8({name:"filtro",type:c,pure:!0,standalone:!0}),r})()}}]);