(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=o(l);fetch(l.href,u)}})();function wr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},Zo={},Tc={exports:{}},ft={};var k1;function mf(){if(k1)return ft;k1=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,N={};function T(A,I,lt){this.props=A,this.context=I,this.refs=N,this.updater=lt||b}T.prototype.isReactComponent={},T.prototype.setState=function(A,I){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,I,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function E(){}E.prototype=T.prototype;function z(A,I,lt){this.props=A,this.context=I,this.refs=N,this.updater=lt||b}var j=z.prototype=new E;j.constructor=z,S(j,T.prototype),j.isPureReactComponent=!0;var D=Array.isArray,L=Object.prototype.hasOwnProperty,W={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function q(A,I,lt){var pt,wt={},vt=null,Ct=null;if(I!=null)for(pt in I.ref!==void 0&&(Ct=I.ref),I.key!==void 0&&(vt=""+I.key),I)L.call(I,pt)&&!U.hasOwnProperty(pt)&&(wt[pt]=I[pt]);var Tt=arguments.length-2;if(Tt===1)wt.children=lt;else if(1<Tt){for(var Rt=Array(Tt),je=0;je<Tt;je++)Rt[je]=arguments[je+2];wt.children=Rt}if(A&&A.defaultProps)for(pt in Tt=A.defaultProps,Tt)wt[pt]===void 0&&(wt[pt]=Tt[pt]);return{$$typeof:e,type:A,key:vt,ref:Ct,props:wt,_owner:W.current}}function ct(A,I){return{$$typeof:e,type:A.type,key:I,ref:A.ref,props:A.props,_owner:A._owner}}function dt(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function Nt(A){var I={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(lt){return I[lt]})}var ut=/\/+/g;function Ht(A,I){return typeof A=="object"&&A!==null&&A.key!=null?Nt(""+A.key):I.toString(36)}function nt(A,I,lt,pt,wt){var vt=typeof A;(vt==="undefined"||vt==="boolean")&&(A=null);var Ct=!1;if(A===null)Ct=!0;else switch(vt){case"string":case"number":Ct=!0;break;case"object":switch(A.$$typeof){case e:case n:Ct=!0}}if(Ct)return Ct=A,wt=wt(Ct),A=pt===""?"."+Ht(Ct,0):pt,D(wt)?(lt="",A!=null&&(lt=A.replace(ut,"$&/")+"/"),nt(wt,I,lt,"",function(je){return je})):wt!=null&&(dt(wt)&&(wt=ct(wt,lt+(!wt.key||Ct&&Ct.key===wt.key?"":(""+wt.key).replace(ut,"$&/")+"/")+A)),I.push(wt)),1;if(Ct=0,pt=pt===""?".":pt+":",D(A))for(var Tt=0;Tt<A.length;Tt++){vt=A[Tt];var Rt=pt+Ht(vt,Tt);Ct+=nt(vt,I,lt,Rt,wt)}else if(Rt=w(A),typeof Rt=="function")for(A=Rt.call(A),Tt=0;!(vt=A.next()).done;)vt=vt.value,Rt=pt+Ht(vt,Tt++),Ct+=nt(vt,I,lt,Rt,wt);else if(vt==="object")throw I=String(A),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Ct}function Mt(A,I,lt){if(A==null)return A;var pt=[],wt=0;return nt(A,pt,"","",function(vt){return I.call(lt,vt,wt++)}),pt}function kt(A){if(A._status===-1){var I=A._result;I=I(),I.then(function(lt){(A._status===0||A._status===-1)&&(A._status=1,A._result=lt)},function(lt){(A._status===0||A._status===-1)&&(A._status=2,A._result=lt)}),A._status===-1&&(A._status=0,A._result=I)}if(A._status===1)return A._result.default;throw A._result}var at={current:null},V={transition:null},J={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:V,ReactCurrentOwner:W};function H(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:Mt,forEach:function(A,I,lt){Mt(A,function(){I.apply(this,arguments)},lt)},count:function(A){var I=0;return Mt(A,function(){I++}),I},toArray:function(A){return Mt(A,function(I){return I})||[]},only:function(A){if(!dt(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ft.Component=T,ft.Fragment=o,ft.Profiler=l,ft.PureComponent=z,ft.StrictMode=s,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ft.act=H,ft.cloneElement=function(A,I,lt){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var pt=S({},A.props),wt=A.key,vt=A.ref,Ct=A._owner;if(I!=null){if(I.ref!==void 0&&(vt=I.ref,Ct=W.current),I.key!==void 0&&(wt=""+I.key),A.type&&A.type.defaultProps)var Tt=A.type.defaultProps;for(Rt in I)L.call(I,Rt)&&!U.hasOwnProperty(Rt)&&(pt[Rt]=I[Rt]===void 0&&Tt!==void 0?Tt[Rt]:I[Rt])}var Rt=arguments.length-2;if(Rt===1)pt.children=lt;else if(1<Rt){Tt=Array(Rt);for(var je=0;je<Rt;je++)Tt[je]=arguments[je+2];pt.children=Tt}return{$$typeof:e,type:A.type,key:wt,ref:vt,props:pt,_owner:Ct}},ft.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},ft.createElement=q,ft.createFactory=function(A){var I=q.bind(null,A);return I.type=A,I},ft.createRef=function(){return{current:null}},ft.forwardRef=function(A){return{$$typeof:h,render:A}},ft.isValidElement=dt,ft.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:kt}},ft.memo=function(A,I){return{$$typeof:f,type:A,compare:I===void 0?null:I}},ft.startTransition=function(A){var I=V.transition;V.transition={};try{A()}finally{V.transition=I}},ft.unstable_act=H,ft.useCallback=function(A,I){return at.current.useCallback(A,I)},ft.useContext=function(A){return at.current.useContext(A)},ft.useDebugValue=function(){},ft.useDeferredValue=function(A){return at.current.useDeferredValue(A)},ft.useEffect=function(A,I){return at.current.useEffect(A,I)},ft.useId=function(){return at.current.useId()},ft.useImperativeHandle=function(A,I,lt){return at.current.useImperativeHandle(A,I,lt)},ft.useInsertionEffect=function(A,I){return at.current.useInsertionEffect(A,I)},ft.useLayoutEffect=function(A,I){return at.current.useLayoutEffect(A,I)},ft.useMemo=function(A,I){return at.current.useMemo(A,I)},ft.useReducer=function(A,I,lt){return at.current.useReducer(A,I,lt)},ft.useRef=function(A){return at.current.useRef(A)},ft.useState=function(A){return at.current.useState(A)},ft.useSyncExternalStore=function(A,I,lt){return at.current.useSyncExternalStore(A,I,lt)},ft.useTransition=function(){return at.current.useTransition()},ft.version="18.3.1",ft}var T1;function ys(){return T1||(T1=1,Tc.exports=mf()),Tc.exports}var j1;function df(){if(j1)return Zo;j1=1;var e=ys(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(h,p,f){var y,x={},w=null,b=null;f!==void 0&&(w=""+f),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(b=p.ref);for(y in p)s.call(p,y)&&!u.hasOwnProperty(y)&&(x[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)x[y]===void 0&&(x[y]=p[y]);return{$$typeof:n,type:h,key:w,ref:b,props:x,_owner:l.current}}return Zo.Fragment=o,Zo.jsx=m,Zo.jsxs=m,Zo}var N1;function hf(){return N1||(N1=1,kc.exports=df()),kc.exports}var i=hf(),v=ys();const Xt=wr(v);var Fa={},jc={exports:{}},ke={},Nc={exports:{}},Cc={};var C1;function pf(){return C1||(C1=1,(function(e){function n(V,J){var H=V.length;V.push(J);t:for(;0<H;){var A=H-1>>>1,I=V[A];if(0<l(I,J))V[A]=J,V[H]=I,H=A;else break t}}function o(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var J=V[0],H=V.pop();if(H!==J){V[0]=H;t:for(var A=0,I=V.length,lt=I>>>1;A<lt;){var pt=2*(A+1)-1,wt=V[pt],vt=pt+1,Ct=V[vt];if(0>l(wt,H))vt<I&&0>l(Ct,wt)?(V[A]=Ct,V[vt]=H,A=vt):(V[A]=wt,V[pt]=H,A=pt);else if(vt<I&&0>l(Ct,H))V[A]=Ct,V[vt]=H,A=vt;else break t}}return J}function l(V,J){var H=V.sortIndex-J.sortIndex;return H!==0?H:V.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var m=Date,h=m.now();e.unstable_now=function(){return m.now()-h}}var p=[],f=[],y=1,x=null,w=3,b=!1,S=!1,N=!1,T=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(V){for(var J=o(f);J!==null;){if(J.callback===null)s(f);else if(J.startTime<=V)s(f),J.sortIndex=J.expirationTime,n(p,J);else break;J=o(f)}}function D(V){if(N=!1,j(V),!S)if(o(p)!==null)S=!0,kt(L);else{var J=o(f);J!==null&&at(D,J.startTime-V)}}function L(V,J){S=!1,N&&(N=!1,E(q),q=-1),b=!0;var H=w;try{for(j(J),x=o(p);x!==null&&(!(x.expirationTime>J)||V&&!Nt());){var A=x.callback;if(typeof A=="function"){x.callback=null,w=x.priorityLevel;var I=A(x.expirationTime<=J);J=e.unstable_now(),typeof I=="function"?x.callback=I:x===o(p)&&s(p),j(J)}else s(p);x=o(p)}if(x!==null)var lt=!0;else{var pt=o(f);pt!==null&&at(D,pt.startTime-J),lt=!1}return lt}finally{x=null,w=H,b=!1}}var W=!1,U=null,q=-1,ct=5,dt=-1;function Nt(){return!(e.unstable_now()-dt<ct)}function ut(){if(U!==null){var V=e.unstable_now();dt=V;var J=!0;try{J=U(!0,V)}finally{J?Ht():(W=!1,U=null)}}else W=!1}var Ht;if(typeof z=="function")Ht=function(){z(ut)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Mt=nt.port2;nt.port1.onmessage=ut,Ht=function(){Mt.postMessage(null)}}else Ht=function(){T(ut,0)};function kt(V){U=V,W||(W=!0,Ht())}function at(V,J){q=T(function(){V(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,kt(L))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return o(p)},e.unstable_next=function(V){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var H=w;w=J;try{return V()}finally{w=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,J){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=w;w=V;try{return J()}finally{w=H}},e.unstable_scheduleCallback=function(V,J,H){var A=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?A+H:A):H=A,V){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=H+I,V={id:y++,callback:J,priorityLevel:V,startTime:H,expirationTime:I,sortIndex:-1},H>A?(V.sortIndex=H,n(f,V),o(p)===null&&V===o(f)&&(N?(E(q),q=-1):N=!0,at(D,H-A))):(V.sortIndex=I,n(p,V),S||b||(S=!0,kt(L))),V},e.unstable_shouldYield=Nt,e.unstable_wrapCallback=function(V){var J=w;return function(){var H=w;w=J;try{return V.apply(this,arguments)}finally{w=H}}}})(Cc)),Cc}var S1;function ff(){return S1||(S1=1,Nc.exports=pf()),Nc.exports}var P1;function gf(){if(P1)return ke;P1=1;var e=ys(),n=ff();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){m(t,r),m(t+"Capture",r)}function m(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function w(t){return p.call(x,t)?!0:p.call(y,t)?!1:f.test(t)?x[t]=!0:(y[t]=!0,!1)}function b(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,r,a,c){if(r===null||typeof r>"u"||b(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function N(t,r,a,c,d,g,K){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=K}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];T[r]=new N(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(E,z);T[r]=new N(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(E,z);T[r]=new N(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(E,z);T[r]=new N(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,c){var d=T.hasOwnProperty(r)?T[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(S(r,a,d,c)&&(a=null),c||d===null?w(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),W=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),dt=Symbol.for("react.provider"),Nt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ht=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),at=Symbol.for("react.offscreen"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,A;function I(t){if(A===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return`
`+A+t}var lt=!1;function pt(t,r){if(!t||lt)return"";lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch($){var c=$}Reflect.construct(t,[],r)}else{try{r.call()}catch($){c=$}t.call(r.prototype)}else{try{throw Error()}catch($){c=$}t()}}catch($){if($&&c&&typeof $.stack=="string"){for(var d=$.stack.split(`
`),g=c.stack.split(`
`),K=d.length-1,k=g.length-1;1<=K&&0<=k&&d[K]!==g[k];)k--;for(;1<=K&&0<=k;K--,k--)if(d[K]!==g[k]){if(K!==1||k!==1)do if(K--,k--,0>k||d[K]!==g[k]){var C=`
`+d[K].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=K&&0<=k);break}}}finally{lt=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?I(t):""}function wt(t){switch(t.tag){case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return t=pt(t.type,!1),t;case 11:return t=pt(t.type.render,!1),t;case 1:return t=pt(t.type,!0),t;default:return""}}function vt(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case W:return"Portal";case ct:return"Profiler";case q:return"StrictMode";case Ht:return"Suspense";case nt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nt:return(t.displayName||"Context")+".Consumer";case dt:return(t._context.displayName||"Context")+".Provider";case ut:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return r=t.displayName||null,r!==null?r:vt(t.type)||"Memo";case kt:r=t._payload,t=t._init;try{return vt(t(r))}catch{}}return null}function Ct(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vt(r);case 8:return r===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Tt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rt(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function je(t){var r=Rt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(K){c=""+K,g.call(this,K)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(K){c=""+K},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ei(t){t._valueTracker||(t._valueTracker=je(t))}function P4(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=Rt(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function Ai(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zs(t,r){var a=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function z4(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Tt(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function E4(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function Es(t,r){E4(t,r);var a=Tt(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?As(t,r.type,a):r.hasOwnProperty("defaultValue")&&As(t,r.type,Tt(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function A4(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function As(t,r,a){(r!=="number"||Ai(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var po=Array.isArray;function kr(t,r,a,c){if(t=t.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=r.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Tt(a),r=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function Ms(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function M4(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(o(92));if(po(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Tt(a)}}function R4(t,r){var a=Tt(r.value),c=Tt(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function $4(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function D4(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rs(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?D4(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mi,L4=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,d)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Mi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function fo(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p2=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){p2.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),go[r]=go[t]})});function I4(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||go.hasOwnProperty(t)&&go[t]?(""+r).trim():r+"px"}function B4(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=I4(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var f2=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(t,r){if(r){if(f2[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Ds(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ls=null;function Is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Tr=null,jr=null;function O4(t){if(t=Io(t)){if(typeof Bs!="function")throw Error(o(280));var r=t.stateNode;r&&(r=na(r),Bs(t.stateNode,t.type,r))}}function F4(t){Tr?jr?jr.push(t):jr=[t]:Tr=t}function V4(){if(Tr){var t=Tr,r=jr;if(jr=Tr=null,O4(t),r)for(t=0;t<r.length;t++)O4(r[t])}}function G4(t,r){return t(r)}function W4(){}var Os=!1;function _4(t,r,a){if(Os)return t(r,a);Os=!0;try{return G4(t,r,a)}finally{Os=!1,(Tr!==null||jr!==null)&&(W4(),V4())}}function yo(t,r){var a=t.stateNode;if(a===null)return null;var c=na(a);if(c===null)return null;a=c[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var Fs=!1;if(h)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Fs=!1}function g2(t,r,a,c,d,g,K,k,C){var $=Array.prototype.slice.call(arguments,3);try{r.apply(a,$)}catch(O){this.onError(O)}}var Ko=!1,Ri=null,$i=!1,Vs=null,y2={onError:function(t){Ko=!0,Ri=t}};function x2(t,r,a,c,d,g,K,k,C){Ko=!1,Ri=null,g2.apply(y2,arguments)}function K2(t,r,a,c,d,g,K,k,C){if(x2.apply(this,arguments),Ko){if(Ko){var $=Ri;Ko=!1,Ri=null}else throw Error(o(198));$i||($i=!0,Vs=$)}}function Zn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function H4(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function U4(t){if(Zn(t)!==t)throw Error(o(188))}function w2(t){var r=t.alternate;if(!r){if(r=Zn(t),r===null)throw Error(o(188));return r!==t?null:t}for(var a=t,c=r;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return U4(d),t;if(g===c)return U4(d),r;g=g.sibling}throw Error(o(188))}if(a.return!==c.return)a=d,c=g;else{for(var K=!1,k=d.child;k;){if(k===a){K=!0,a=d,c=g;break}if(k===c){K=!0,c=d,a=g;break}k=k.sibling}if(!K){for(k=g.child;k;){if(k===a){K=!0,a=g,c=d;break}if(k===c){K=!0,c=g,a=d;break}k=k.sibling}if(!K)throw Error(o(189))}}if(a.alternate!==c)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:r}function q4(t){return t=w2(t),t!==null?Y4(t):null}function Y4(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Y4(t);if(r!==null)return r;t=t.sibling}return null}var Q4=n.unstable_scheduleCallback,X4=n.unstable_cancelCallback,v2=n.unstable_shouldYield,b2=n.unstable_requestPaint,Ut=n.unstable_now,k2=n.unstable_getCurrentPriorityLevel,Gs=n.unstable_ImmediatePriority,J4=n.unstable_UserBlockingPriority,Di=n.unstable_NormalPriority,T2=n.unstable_LowPriority,Z4=n.unstable_IdlePriority,Li=null,tn=null;function j2(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Li,t,void 0,(t.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:S2,N2=Math.log,C2=Math.LN2;function S2(t){return t>>>=0,t===0?32:31-(N2(t)/C2|0)|0}var Ii=64,Bi=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oi(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,g=t.pingedLanes,K=a&268435455;if(K!==0){var k=K&~d;k!==0?c=wo(k):(g&=K,g!==0&&(c=wo(g)))}else K=a&~d,K!==0?c=wo(K):g!==0&&(c=wo(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,g=r&-r,d>=g||d===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Ve(r),d=1<<a,c|=t[a],r&=~d;return c}function P2(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z2(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes;0<g;){var K=31-Ve(g),k=1<<K,C=d[K];C===-1?((k&a)===0||(k&c)!==0)&&(d[K]=P2(k,r)):C<=r&&(t.expiredLanes|=k),g&=~k}}function Ws(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t5(){var t=Ii;return Ii<<=1,(Ii&4194240)===0&&(Ii=64),t}function _s(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function vo(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Ve(r),t[r]=a}function E2(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;r[d]=0,c[d]=-1,t[d]=-1,a&=~g}}function Hs(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Ve(a),d=1<<c;d&r|t[c]&r&&(t[c]|=r),a&=~d}}var jt=0;function e5(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var n5,Us,r5,o5,i5,qs=!1,Fi=[],Cn=null,Sn=null,Pn=null,bo=new Map,ko=new Map,zn=[],A2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a5(t,r){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(r.pointerId)}}function To(t,r,a,c,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},r!==null&&(r=Io(r),r!==null&&Us(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function M2(t,r,a,c,d){switch(r){case"focusin":return Cn=To(Cn,t,r,a,c,d),!0;case"dragenter":return Sn=To(Sn,t,r,a,c,d),!0;case"mouseover":return Pn=To(Pn,t,r,a,c,d),!0;case"pointerover":var g=d.pointerId;return bo.set(g,To(bo.get(g)||null,t,r,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ko.set(g,To(ko.get(g)||null,t,r,a,c,d)),!0}return!1}function s5(t){var r=tr(t.target);if(r!==null){var a=Zn(r);if(a!==null){if(r=a.tag,r===13){if(r=H4(a),r!==null){t.blockedOn=r,i5(t.priority,function(){r5(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Qs(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Ls=c,a.target.dispatchEvent(c),Ls=null}else return r=Io(a),r!==null&&Us(r),t.blockedOn=a,!1;r.shift()}return!0}function l5(t,r,a){Vi(t)&&a.delete(r)}function R2(){qs=!1,Cn!==null&&Vi(Cn)&&(Cn=null),Sn!==null&&Vi(Sn)&&(Sn=null),Pn!==null&&Vi(Pn)&&(Pn=null),bo.forEach(l5),ko.forEach(l5)}function jo(t,r){t.blockedOn===r&&(t.blockedOn=null,qs||(qs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,R2)))}function No(t){function r(d){return jo(d,t)}if(0<Fi.length){jo(Fi[0],t);for(var a=1;a<Fi.length;a++){var c=Fi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Cn!==null&&jo(Cn,t),Sn!==null&&jo(Sn,t),Pn!==null&&jo(Pn,t),bo.forEach(r),ko.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)s5(a),a.blockedOn===null&&zn.shift()}var Nr=D.ReactCurrentBatchConfig,Gi=!0;function $2(t,r,a,c){var d=jt,g=Nr.transition;Nr.transition=null;try{jt=1,Ys(t,r,a,c)}finally{jt=d,Nr.transition=g}}function D2(t,r,a,c){var d=jt,g=Nr.transition;Nr.transition=null;try{jt=4,Ys(t,r,a,c)}finally{jt=d,Nr.transition=g}}function Ys(t,r,a,c){if(Gi){var d=Qs(t,r,a,c);if(d===null)hl(t,r,c,Wi,a),a5(t,c);else if(M2(d,t,r,a,c))c.stopPropagation();else if(a5(t,c),r&4&&-1<A2.indexOf(t)){for(;d!==null;){var g=Io(d);if(g!==null&&n5(g),g=Qs(t,r,a,c),g===null&&hl(t,r,c,Wi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else hl(t,r,c,null,a)}}var Wi=null;function Qs(t,r,a,c){if(Wi=null,t=Is(c),t=tr(t),t!==null)if(r=Zn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=H4(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Wi=t,null}function c5(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k2()){case Gs:return 1;case J4:return 4;case Di:case T2:return 16;case Z4:return 536870912;default:return 16}default:return 16}}var En=null,Xs=null,_i=null;function u5(){if(_i)return _i;var t,r=Xs,a=r.length,c,d="value"in En?En.value:En.textContent,g=d.length;for(t=0;t<a&&r[t]===d[t];t++);var K=a-t;for(c=1;c<=K&&r[a-c]===d[g-c];c++);return _i=d.slice(t,1<c?1-c:void 0)}function Hi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ui(){return!0}function m5(){return!1}function Ne(t){function r(a,c,d,g,K){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=K,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ui:m5,this.isPropagationStopped=m5,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),r}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=Ne(Cr),Co=H({},Cr,{view:0,detail:0}),L2=Ne(Co),Zs,tl,So,qi=H({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Zs=t.screenX-So.screenX,tl=t.screenY-So.screenY):tl=Zs=0,So=t),Zs)},movementY:function(t){return"movementY"in t?t.movementY:tl}}),d5=Ne(qi),I2=H({},qi,{dataTransfer:0}),B2=Ne(I2),O2=H({},Co,{relatedTarget:0}),el=Ne(O2),F2=H({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),V2=Ne(F2),G2=H({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W2=Ne(G2),_2=H({},Cr,{data:0}),h5=Ne(_2),H2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y2(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=q2[t])?!!r[t]:!1}function nl(){return Y2}var Q2=H({},Co,{key:function(t){if(t.key){var r=H2[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(t){return t.type==="keypress"?Hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X2=Ne(Q2),J2=H({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p5=Ne(J2),Z2=H({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),t3=Ne(Z2),e3=H({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n3=Ne(e3),r3=H({},qi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o3=Ne(r3),i3=[9,13,27,32],rl=h&&"CompositionEvent"in window,Po=null;h&&"documentMode"in document&&(Po=document.documentMode);var a3=h&&"TextEvent"in window&&!Po,f5=h&&(!rl||Po&&8<Po&&11>=Po),g5=" ",y5=!1;function x5(t,r){switch(t){case"keyup":return i3.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K5(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function s3(t,r){switch(t){case"compositionend":return K5(r);case"keypress":return r.which!==32?null:(y5=!0,g5);case"textInput":return t=r.data,t===g5&&y5?null:t;default:return null}}function l3(t,r){if(Sr)return t==="compositionend"||!rl&&x5(t,r)?(t=u5(),_i=Xs=En=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return f5&&r.locale!=="ko"?null:r.data;default:return null}}var c3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w5(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!c3[t.type]:r==="textarea"}function v5(t,r,a,c){F4(c),r=Zi(r,"onChange"),0<r.length&&(a=new Js("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var zo=null,Eo=null;function u3(t){B5(t,0)}function Yi(t){var r=Mr(t);if(P4(r))return t}function m3(t,r){if(t==="change")return r}var b5=!1;if(h){var ol;if(h){var il="oninput"in document;if(!il){var k5=document.createElement("div");k5.setAttribute("oninput","return;"),il=typeof k5.oninput=="function"}ol=il}else ol=!1;b5=ol&&(!document.documentMode||9<document.documentMode)}function T5(){zo&&(zo.detachEvent("onpropertychange",j5),Eo=zo=null)}function j5(t){if(t.propertyName==="value"&&Yi(Eo)){var r=[];v5(r,Eo,t,Is(t)),_4(u3,r)}}function d3(t,r,a){t==="focusin"?(T5(),zo=r,Eo=a,zo.attachEvent("onpropertychange",j5)):t==="focusout"&&T5()}function h3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yi(Eo)}function p3(t,r){if(t==="click")return Yi(r)}function f3(t,r){if(t==="input"||t==="change")return Yi(r)}function g3(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ge=typeof Object.is=="function"?Object.is:g3;function Ao(t,r){if(Ge(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(r,d)||!Ge(t[d],r[d]))return!1}return!0}function N5(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function C5(t,r){var a=N5(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=N5(a)}}function S5(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?S5(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function P5(){for(var t=window,r=Ai();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Ai(t.document)}return r}function al(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function y3(t){var r=P5(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&S5(a.ownerDocument.documentElement,a)){if(c!==null&&al(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!t.extend&&g>c&&(d=c,c=g,g=d),d=C5(a,g);var K=C5(a,c);d&&K&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==K.node||t.focusOffset!==K.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),t.removeAllRanges(),g>c?(t.addRange(r),t.extend(K.node,K.offset)):(r.setEnd(K.node,K.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x3=h&&"documentMode"in document&&11>=document.documentMode,Pr=null,sl=null,Mo=null,ll=!1;function z5(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ll||Pr==null||Pr!==Ai(c)||(c=Pr,"selectionStart"in c&&al(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&Ao(Mo,c)||(Mo=c,c=Zi(sl,"onSelect"),0<c.length&&(r=new Js("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Pr)))}function Qi(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var zr={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},cl={},E5={};h&&(E5=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Xi(t){if(cl[t])return cl[t];if(!zr[t])return t;var r=zr[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in E5)return cl[t]=r[a];return t}var A5=Xi("animationend"),M5=Xi("animationiteration"),R5=Xi("animationstart"),$5=Xi("transitionend"),D5=new Map,L5="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,r){D5.set(t,r),u(r,[t])}for(var ul=0;ul<L5.length;ul++){var ml=L5[ul],K3=ml.toLowerCase(),w3=ml[0].toUpperCase()+ml.slice(1);An(K3,"on"+w3)}An(A5,"onAnimationEnd"),An(M5,"onAnimationIteration"),An(R5,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An($5,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function I5(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,K2(c,r,void 0,t),t.currentTarget=null}function B5(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;t:{var g=void 0;if(r)for(var K=c.length-1;0<=K;K--){var k=c[K],C=k.instance,$=k.currentTarget;if(k=k.listener,C!==g&&d.isPropagationStopped())break t;I5(d,k,$),g=C}else for(K=0;K<c.length;K++){if(k=c[K],C=k.instance,$=k.currentTarget,k=k.listener,C!==g&&d.isPropagationStopped())break t;I5(d,k,$),g=C}}}if($i)throw t=Vs,$i=!1,Vs=null,t}function Pt(t,r){var a=r[Kl];a===void 0&&(a=r[Kl]=new Set);var c=t+"__bubble";a.has(c)||(O5(r,t,2,!1),a.add(c))}function dl(t,r,a){var c=0;r&&(c|=4),O5(a,t,c,r)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Ji]){t[Ji]=!0,s.forEach(function(a){a!=="selectionchange"&&(v3.has(a)||dl(a,!1,t),dl(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ji]||(r[Ji]=!0,dl("selectionchange",!1,r))}}function O5(t,r,a,c){switch(c5(r)){case 1:var d=$2;break;case 4:d=D2;break;default:d=Ys}a=d.bind(null,r,a,t),d=void 0,!Fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(r,a,{capture:!0,passive:d}):t.addEventListener(r,a,!0):d!==void 0?t.addEventListener(r,a,{passive:d}):t.addEventListener(r,a,!1)}function hl(t,r,a,c,d){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)t:for(;;){if(c===null)return;var K=c.tag;if(K===3||K===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(K===4)for(K=c.return;K!==null;){var C=K.tag;if((C===3||C===4)&&(C=K.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;K=K.return}for(;k!==null;){if(K=tr(k),K===null)return;if(C=K.tag,C===5||C===6){c=g=K;continue t}k=k.parentNode}}c=c.return}_4(function(){var $=g,O=Is(a),F=[];t:{var B=D5.get(t);if(B!==void 0){var Y=Js,Z=t;switch(t){case"keypress":if(Hi(a)===0)break t;case"keydown":case"keyup":Y=X2;break;case"focusin":Z="focus",Y=el;break;case"focusout":Z="blur",Y=el;break;case"beforeblur":case"afterblur":Y=el;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=d5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=B2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=t3;break;case A5:case M5:case R5:Y=V2;break;case $5:Y=n3;break;case"scroll":Y=L2;break;case"wheel":Y=o3;break;case"copy":case"cut":case"paste":Y=W2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=p5}var tt=(r&4)!==0,qt=!tt&&t==="scroll",M=tt?B!==null?B+"Capture":null:B;tt=[];for(var P=$,R;P!==null;){R=P;var G=R.stateNode;if(R.tag===5&&G!==null&&(R=G,M!==null&&(G=yo(P,M),G!=null&&tt.push(Do(P,G,R)))),qt)break;P=P.return}0<tt.length&&(B=new Y(B,Z,null,a,O),F.push({event:B,listeners:tt}))}}if((r&7)===0){t:{if(B=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",B&&a!==Ls&&(Z=a.relatedTarget||a.fromElement)&&(tr(Z)||Z[un]))break t;if((Y||B)&&(B=O.window===O?O:(B=O.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(Z=a.relatedTarget||a.toElement,Y=$,Z=Z?tr(Z):null,Z!==null&&(qt=Zn(Z),Z!==qt||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Y=null,Z=$),Y!==Z)){if(tt=d5,G="onMouseLeave",M="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(tt=p5,G="onPointerLeave",M="onPointerEnter",P="pointer"),qt=Y==null?B:Mr(Y),R=Z==null?B:Mr(Z),B=new tt(G,P+"leave",Y,a,O),B.target=qt,B.relatedTarget=R,G=null,tr(O)===$&&(tt=new tt(M,P+"enter",Z,a,O),tt.target=R,tt.relatedTarget=qt,G=tt),qt=G,Y&&Z)e:{for(tt=Y,M=Z,P=0,R=tt;R;R=Er(R))P++;for(R=0,G=M;G;G=Er(G))R++;for(;0<P-R;)tt=Er(tt),P--;for(;0<R-P;)M=Er(M),R--;for(;P--;){if(tt===M||M!==null&&tt===M.alternate)break e;tt=Er(tt),M=Er(M)}tt=null}else tt=null;Y!==null&&F5(F,B,Y,tt,!1),Z!==null&&qt!==null&&F5(F,qt,Z,tt,!0)}}t:{if(B=$?Mr($):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var et=m3;else if(w5(B))if(b5)et=f3;else{et=h3;var rt=d3}else(Y=B.nodeName)&&Y.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(et=p3);if(et&&(et=et(t,$))){v5(F,et,a,O);break t}rt&&rt(t,B,$),t==="focusout"&&(rt=B._wrapperState)&&rt.controlled&&B.type==="number"&&As(B,"number",B.value)}switch(rt=$?Mr($):window,t){case"focusin":(w5(rt)||rt.contentEditable==="true")&&(Pr=rt,sl=$,Mo=null);break;case"focusout":Mo=sl=Pr=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,z5(F,a,O);break;case"selectionchange":if(x3)break;case"keydown":case"keyup":z5(F,a,O)}var ot;if(rl)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Sr?x5(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(f5&&a.locale!=="ko"&&(Sr||st!=="onCompositionStart"?st==="onCompositionEnd"&&Sr&&(ot=u5()):(En=O,Xs="value"in En?En.value:En.textContent,Sr=!0)),rt=Zi($,st),0<rt.length&&(st=new h5(st,t,null,a,O),F.push({event:st,listeners:rt}),ot?st.data=ot:(ot=K5(a),ot!==null&&(st.data=ot)))),(ot=a3?s3(t,a):l3(t,a))&&($=Zi($,"onBeforeInput"),0<$.length&&(O=new h5("onBeforeInput","beforeinput",null,a,O),F.push({event:O,listeners:$}),O.data=ot))}B5(F,r)})}function Do(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Zi(t,r){for(var a=r+"Capture",c=[];t!==null;){var d=t,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=yo(t,a),g!=null&&c.unshift(Do(t,g,d)),g=yo(t,r),g!=null&&c.push(Do(t,g,d))),t=t.return}return c}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function F5(t,r,a,c,d){for(var g=r._reactName,K=[];a!==null&&a!==c;){var k=a,C=k.alternate,$=k.stateNode;if(C!==null&&C===c)break;k.tag===5&&$!==null&&(k=$,d?(C=yo(a,g),C!=null&&K.unshift(Do(a,C,k))):d||(C=yo(a,g),C!=null&&K.push(Do(a,C,k)))),a=a.return}K.length!==0&&t.push({event:r,listeners:K})}var b3=/\r\n?/g,k3=/\u0000|\uFFFD/g;function V5(t){return(typeof t=="string"?t:""+t).replace(b3,`
`).replace(k3,"")}function ta(t,r,a){if(r=V5(r),V5(t)!==r&&a)throw Error(o(425))}function ea(){}var pl=null,fl=null;function gl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,T3=typeof clearTimeout=="function"?clearTimeout:void 0,G5=typeof Promise=="function"?Promise:void 0,j3=typeof queueMicrotask=="function"?queueMicrotask:typeof G5<"u"?function(t){return G5.resolve(null).then(t).catch(N3)}:yl;function N3(t){setTimeout(function(){throw t})}function xl(t,r){var a=r,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),No(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);No(r)}function Mn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function W5(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),en="__reactFiber$"+Ar,Lo="__reactProps$"+Ar,un="__reactContainer$"+Ar,Kl="__reactEvents$"+Ar,C3="__reactListeners$"+Ar,S3="__reactHandles$"+Ar;function tr(t){var r=t[en];if(r)return r;for(var a=t.parentNode;a;){if(r=a[un]||a[en]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=W5(t);t!==null;){if(a=t[en])return a;t=W5(t)}return r}t=a,a=t.parentNode}return null}function Io(t){return t=t[en]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function na(t){return t[Lo]||null}var wl=[],Rr=-1;function Rn(t){return{current:t}}function zt(t){0>Rr||(t.current=wl[Rr],wl[Rr]=null,Rr--)}function St(t,r){Rr++,wl[Rr]=t.current,t.current=r}var $n={},se=Rn($n),xe=Rn(!1),er=$n;function $r(t,r){var a=t.type.contextTypes;if(!a)return $n;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=r[g];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ke(t){return t=t.childContextTypes,t!=null}function ra(){zt(xe),zt(se)}function _5(t,r,a){if(se.current!==$n)throw Error(o(168));St(se,r),St(xe,a)}function H5(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(o(108,Ct(t)||"Unknown",d));return H({},a,c)}function oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$n,er=se.current,St(se,t),St(xe,xe.current),!0}function U5(t,r,a){var c=t.stateNode;if(!c)throw Error(o(169));a?(t=H5(t,r,er),c.__reactInternalMemoizedMergedChildContext=t,zt(xe),zt(se),St(se,t)):zt(xe),St(xe,a)}var mn=null,ia=!1,vl=!1;function q5(t){mn===null?mn=[t]:mn.push(t)}function P3(t){ia=!0,q5(t)}function Dn(){if(!vl&&mn!==null){vl=!0;var t=0,r=jt;try{var a=mn;for(jt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}mn=null,ia=!1}catch(d){throw mn!==null&&(mn=mn.slice(t+1)),Q4(Gs,Dn),d}finally{jt=r,vl=!1}}return null}var Dr=[],Lr=0,aa=null,sa=0,Re=[],$e=0,nr=null,dn=1,hn="";function rr(t,r){Dr[Lr++]=sa,Dr[Lr++]=aa,aa=t,sa=r}function Y5(t,r,a){Re[$e++]=dn,Re[$e++]=hn,Re[$e++]=nr,nr=t;var c=dn;t=hn;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(r)+d;if(30<g){var K=d-d%5;g=(c&(1<<K)-1).toString(32),c>>=K,d-=K,dn=1<<32-Ve(r)+d|a<<d|c,hn=g+t}else dn=1<<g|a<<d|c,hn=t}function bl(t){t.return!==null&&(rr(t,1),Y5(t,1,0))}function kl(t){for(;t===aa;)aa=Dr[--Lr],Dr[Lr]=null,sa=Dr[--Lr],Dr[Lr]=null;for(;t===nr;)nr=Re[--$e],Re[$e]=null,hn=Re[--$e],Re[$e]=null,dn=Re[--$e],Re[$e]=null}var Ce=null,Se=null,$t=!1,We=null;function Q5(t,r){var a=Be(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function X5(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Ce=t,Se=Mn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Ce=t,Se=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=nr!==null?{id:dn,overflow:hn}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Be(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,Ce=t,Se=null,!0):!1;default:return!1}}function Tl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jl(t){if($t){var r=Se;if(r){var a=r;if(!X5(t,r)){if(Tl(t))throw Error(o(418));r=Mn(a.nextSibling);var c=Ce;r&&X5(t,r)?Q5(c,a):(t.flags=t.flags&-4097|2,$t=!1,Ce=t)}}else{if(Tl(t))throw Error(o(418));t.flags=t.flags&-4097|2,$t=!1,Ce=t}}}function J5(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ce=t}function la(t){if(t!==Ce)return!1;if(!$t)return J5(t),$t=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!gl(t.type,t.memoizedProps)),r&&(r=Se)){if(Tl(t))throw Z5(),Error(o(418));for(;r;)Q5(t,r),r=Mn(r.nextSibling)}if(J5(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Se=Mn(t.nextSibling);break t}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Se=null}}else Se=Ce?Mn(t.stateNode.nextSibling):null;return!0}function Z5(){for(var t=Se;t;)t=Mn(t.nextSibling)}function Ir(){Se=Ce=null,$t=!1}function Nl(t){We===null?We=[t]:We.push(t)}var z3=D.ReactCurrentBatchConfig;function Bo(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var c=a.stateNode}if(!c)throw Error(o(147,t));var d=c,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(K){var k=d.refs;K===null?delete k[g]:k[g]=K},r._stringRef=g,r)}if(typeof t!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,t))}return t}function ca(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function tm(t){var r=t._init;return r(t._payload)}function em(t){function r(M,P){if(t){var R=M.deletions;R===null?(M.deletions=[P],M.flags|=16):R.push(P)}}function a(M,P){if(!t)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Wn(M,P),M.index=0,M.sibling=null,M}function g(M,P,R){return M.index=R,t?(R=M.alternate,R!==null?(R=R.index,R<P?(M.flags|=2,P):R):(M.flags|=2,P)):(M.flags|=1048576,P)}function K(M){return t&&M.alternate===null&&(M.flags|=2),M}function k(M,P,R,G){return P===null||P.tag!==6?(P=yc(R,M.mode,G),P.return=M,P):(P=d(P,R),P.return=M,P)}function C(M,P,R,G){var et=R.type;return et===U?O(M,P,R.props.children,G,R.key):P!==null&&(P.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===kt&&tm(et)===P.type)?(G=d(P,R.props),G.ref=Bo(M,P,R),G.return=M,G):(G=Ma(R.type,R.key,R.props,null,M.mode,G),G.ref=Bo(M,P,R),G.return=M,G)}function $(M,P,R,G){return P===null||P.tag!==4||P.stateNode.containerInfo!==R.containerInfo||P.stateNode.implementation!==R.implementation?(P=xc(R,M.mode,G),P.return=M,P):(P=d(P,R.children||[]),P.return=M,P)}function O(M,P,R,G,et){return P===null||P.tag!==7?(P=mr(R,M.mode,G,et),P.return=M,P):(P=d(P,R),P.return=M,P)}function F(M,P,R){if(typeof P=="string"&&P!==""||typeof P=="number")return P=yc(""+P,M.mode,R),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case L:return R=Ma(P.type,P.key,P.props,null,M.mode,R),R.ref=Bo(M,null,P),R.return=M,R;case W:return P=xc(P,M.mode,R),P.return=M,P;case kt:var G=P._init;return F(M,G(P._payload),R)}if(po(P)||J(P))return P=mr(P,M.mode,R,null),P.return=M,P;ca(M,P)}return null}function B(M,P,R,G){var et=P!==null?P.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return et!==null?null:k(M,P,""+R,G);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case L:return R.key===et?C(M,P,R,G):null;case W:return R.key===et?$(M,P,R,G):null;case kt:return et=R._init,B(M,P,et(R._payload),G)}if(po(R)||J(R))return et!==null?null:O(M,P,R,G,null);ca(M,R)}return null}function Y(M,P,R,G,et){if(typeof G=="string"&&G!==""||typeof G=="number")return M=M.get(R)||null,k(P,M,""+G,et);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return M=M.get(G.key===null?R:G.key)||null,C(P,M,G,et);case W:return M=M.get(G.key===null?R:G.key)||null,$(P,M,G,et);case kt:var rt=G._init;return Y(M,P,R,rt(G._payload),et)}if(po(G)||J(G))return M=M.get(R)||null,O(P,M,G,et,null);ca(P,G)}return null}function Z(M,P,R,G){for(var et=null,rt=null,ot=P,st=P=0,ne=null;ot!==null&&st<R.length;st++){ot.index>st?(ne=ot,ot=null):ne=ot.sibling;var bt=B(M,ot,R[st],G);if(bt===null){ot===null&&(ot=ne);break}t&&ot&&bt.alternate===null&&r(M,ot),P=g(bt,P,st),rt===null?et=bt:rt.sibling=bt,rt=bt,ot=ne}if(st===R.length)return a(M,ot),$t&&rr(M,st),et;if(ot===null){for(;st<R.length;st++)ot=F(M,R[st],G),ot!==null&&(P=g(ot,P,st),rt===null?et=ot:rt.sibling=ot,rt=ot);return $t&&rr(M,st),et}for(ot=c(M,ot);st<R.length;st++)ne=Y(ot,M,st,R[st],G),ne!==null&&(t&&ne.alternate!==null&&ot.delete(ne.key===null?st:ne.key),P=g(ne,P,st),rt===null?et=ne:rt.sibling=ne,rt=ne);return t&&ot.forEach(function(_n){return r(M,_n)}),$t&&rr(M,st),et}function tt(M,P,R,G){var et=J(R);if(typeof et!="function")throw Error(o(150));if(R=et.call(R),R==null)throw Error(o(151));for(var rt=et=null,ot=P,st=P=0,ne=null,bt=R.next();ot!==null&&!bt.done;st++,bt=R.next()){ot.index>st?(ne=ot,ot=null):ne=ot.sibling;var _n=B(M,ot,bt.value,G);if(_n===null){ot===null&&(ot=ne);break}t&&ot&&_n.alternate===null&&r(M,ot),P=g(_n,P,st),rt===null?et=_n:rt.sibling=_n,rt=_n,ot=ne}if(bt.done)return a(M,ot),$t&&rr(M,st),et;if(ot===null){for(;!bt.done;st++,bt=R.next())bt=F(M,bt.value,G),bt!==null&&(P=g(bt,P,st),rt===null?et=bt:rt.sibling=bt,rt=bt);return $t&&rr(M,st),et}for(ot=c(M,ot);!bt.done;st++,bt=R.next())bt=Y(ot,M,st,bt.value,G),bt!==null&&(t&&bt.alternate!==null&&ot.delete(bt.key===null?st:bt.key),P=g(bt,P,st),rt===null?et=bt:rt.sibling=bt,rt=bt);return t&&ot.forEach(function(uf){return r(M,uf)}),$t&&rr(M,st),et}function qt(M,P,R,G){if(typeof R=="object"&&R!==null&&R.type===U&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case L:t:{for(var et=R.key,rt=P;rt!==null;){if(rt.key===et){if(et=R.type,et===U){if(rt.tag===7){a(M,rt.sibling),P=d(rt,R.props.children),P.return=M,M=P;break t}}else if(rt.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===kt&&tm(et)===rt.type){a(M,rt.sibling),P=d(rt,R.props),P.ref=Bo(M,rt,R),P.return=M,M=P;break t}a(M,rt);break}else r(M,rt);rt=rt.sibling}R.type===U?(P=mr(R.props.children,M.mode,G,R.key),P.return=M,M=P):(G=Ma(R.type,R.key,R.props,null,M.mode,G),G.ref=Bo(M,P,R),G.return=M,M=G)}return K(M);case W:t:{for(rt=R.key;P!==null;){if(P.key===rt)if(P.tag===4&&P.stateNode.containerInfo===R.containerInfo&&P.stateNode.implementation===R.implementation){a(M,P.sibling),P=d(P,R.children||[]),P.return=M,M=P;break t}else{a(M,P);break}else r(M,P);P=P.sibling}P=xc(R,M.mode,G),P.return=M,M=P}return K(M);case kt:return rt=R._init,qt(M,P,rt(R._payload),G)}if(po(R))return Z(M,P,R,G);if(J(R))return tt(M,P,R,G);ca(M,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,R),P.return=M,M=P):(a(M,P),P=yc(R,M.mode,G),P.return=M,M=P),K(M)):a(M,P)}return qt}var Br=em(!0),nm=em(!1),ua=Rn(null),ma=null,Or=null,Cl=null;function Sl(){Cl=Or=ma=null}function Pl(t){var r=ua.current;zt(ua),t._currentValue=r}function zl(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function Fr(t,r){ma=t,Cl=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(we=!0),t.firstContext=null)}function De(t){var r=t._currentValue;if(Cl!==t)if(t={context:t,memoizedValue:r,next:null},Or===null){if(ma===null)throw Error(o(308));Or=t,ma.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return r}var or=null;function El(t){or===null?or=[t]:or.push(t)}function rm(t,r,a,c){var d=r.interleaved;return d===null?(a.next=a,El(r)):(a.next=d.next,d.next=a),r.interleaved=a,pn(t,c)}function pn(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Ln=!1;function Al(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function In(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pn(t,a)}return d=c.interleaved,d===null?(r.next=r,El(c)):(r.next=d.next,d.next=r),c.interleaved=r,pn(t,a)}function da(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Hs(t,a)}}function im(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var K={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=K:g=g.next=K,a=a.next}while(a!==null);g===null?d=g=r:g=g.next=r}else d=g=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function ha(t,r,a,c){var d=t.updateQueue;Ln=!1;var g=d.firstBaseUpdate,K=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var C=k,$=C.next;C.next=null,K===null?g=$:K.next=$,K=C;var O=t.alternate;O!==null&&(O=O.updateQueue,k=O.lastBaseUpdate,k!==K&&(k===null?O.firstBaseUpdate=$:k.next=$,O.lastBaseUpdate=C))}if(g!==null){var F=d.baseState;K=0,O=$=C=null,k=g;do{var B=k.lane,Y=k.eventTime;if((c&B)===B){O!==null&&(O=O.next={eventTime:Y,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});t:{var Z=t,tt=k;switch(B=r,Y=a,tt.tag){case 1:if(Z=tt.payload,typeof Z=="function"){F=Z.call(Y,F,B);break t}F=Z;break t;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=tt.payload,B=typeof Z=="function"?Z.call(Y,F,B):Z,B==null)break t;F=H({},F,B);break t;case 2:Ln=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,B=d.effects,B===null?d.effects=[k]:B.push(k))}else Y={eventTime:Y,lane:B,tag:k.tag,payload:k.payload,callback:k.callback,next:null},O===null?($=O=Y,C=F):O=O.next=Y,K|=B;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;B=k,k=B.next,B.next=null,d.lastBaseUpdate=B,d.shared.pending=null}}while(!0);if(O===null&&(C=F),d.baseState=C,d.firstBaseUpdate=$,d.lastBaseUpdate=O,r=d.shared.interleaved,r!==null){d=r;do K|=d.lane,d=d.next;while(d!==r)}else g===null&&(d.shared.lanes=0);sr|=K,t.lanes=K,t.memoizedState=F}}function am(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(o(191,d));d.call(c)}}}var Oo={},nn=Rn(Oo),Fo=Rn(Oo),Vo=Rn(Oo);function ir(t){if(t===Oo)throw Error(o(174));return t}function Ml(t,r){switch(St(Vo,r),St(Fo,t),St(nn,Oo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Rs(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Rs(r,t)}zt(nn),St(nn,r)}function Vr(){zt(nn),zt(Fo),zt(Vo)}function sm(t){ir(Vo.current);var r=ir(nn.current),a=Rs(r,t.type);r!==a&&(St(Fo,t),St(nn,a))}function Rl(t){Fo.current===t&&(zt(nn),zt(Fo))}var Ot=Rn(0);function pa(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $l=[];function Dl(){for(var t=0;t<$l.length;t++)$l[t]._workInProgressVersionPrimary=null;$l.length=0}var fa=D.ReactCurrentDispatcher,Ll=D.ReactCurrentBatchConfig,ar=0,Ft=null,Jt=null,te=null,ga=!1,Go=!1,Wo=0,E3=0;function le(){throw Error(o(321))}function Il(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Ge(t[a],r[a]))return!1;return!0}function Bl(t,r,a,c,d,g){if(ar=g,Ft=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fa.current=t===null||t.memoizedState===null?$3:D3,t=a(c,d),Go){g=0;do{if(Go=!1,Wo=0,25<=g)throw Error(o(301));g+=1,te=Jt=null,r.updateQueue=null,fa.current=L3,t=a(c,d)}while(Go)}if(fa.current=Ka,r=Jt!==null&&Jt.next!==null,ar=0,te=Jt=Ft=null,ga=!1,r)throw Error(o(300));return t}function Ol(){var t=Wo!==0;return Wo=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Ft.memoizedState=te=t:te=te.next=t,te}function Le(){if(Jt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var r=te===null?Ft.memoizedState:te.next;if(r!==null)te=r,Jt=t;else{if(t===null)throw Error(o(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},te===null?Ft.memoizedState=te=t:te=te.next=t}return te}function _o(t,r){return typeof r=="function"?r(t):r}function Fl(t){var r=Le(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var c=Jt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var K=d.next;d.next=g.next,g.next=K}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var k=K=null,C=null,$=g;do{var O=$.lane;if((ar&O)===O)C!==null&&(C=C.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:t(c,$.action);else{var F={lane:O,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};C===null?(k=C=F,K=c):C=C.next=F,Ft.lanes|=O,sr|=O}$=$.next}while($!==null&&$!==g);C===null?K=c:C.next=k,Ge(c,r.memoizedState)||(we=!0),r.memoizedState=c,r.baseState=K,r.baseQueue=C,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do g=d.lane,Ft.lanes|=g,sr|=g,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Vl(t){var r=Le(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,g=r.memoizedState;if(d!==null){a.pending=null;var K=d=d.next;do g=t(g,K.action),K=K.next;while(K!==d);Ge(g,r.memoizedState)||(we=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,c]}function lm(){}function cm(t,r){var a=Ft,c=Le(),d=r(),g=!Ge(c.memoizedState,d);if(g&&(c.memoizedState=d,we=!0),c=c.queue,Gl(dm.bind(null,a,c,t),[t]),c.getSnapshot!==r||g||te!==null&&te.memoizedState.tag&1){if(a.flags|=2048,Ho(9,mm.bind(null,a,c,d,r),void 0,null),ee===null)throw Error(o(349));(ar&30)!==0||um(a,r,d)}return d}function um(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function mm(t,r,a,c){r.value=a,r.getSnapshot=c,hm(r)&&pm(t)}function dm(t,r,a){return a(function(){hm(r)&&pm(t)})}function hm(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Ge(t,a)}catch{return!0}}function pm(t){var r=pn(t,1);r!==null&&qe(r,t,1,-1)}function fm(t){var r=rn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},r.queue=t,t=t.dispatch=R3.bind(null,Ft,t),[r.memoizedState,t]}function Ho(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function gm(){return Le().memoizedState}function ya(t,r,a,c){var d=rn();Ft.flags|=t,d.memoizedState=Ho(1|r,a,void 0,c===void 0?null:c)}function xa(t,r,a,c){var d=Le();c=c===void 0?null:c;var g=void 0;if(Jt!==null){var K=Jt.memoizedState;if(g=K.destroy,c!==null&&Il(c,K.deps)){d.memoizedState=Ho(r,a,g,c);return}}Ft.flags|=t,d.memoizedState=Ho(1|r,a,g,c)}function ym(t,r){return ya(8390656,8,t,r)}function Gl(t,r){return xa(2048,8,t,r)}function xm(t,r){return xa(4,2,t,r)}function Km(t,r){return xa(4,4,t,r)}function wm(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function vm(t,r,a){return a=a!=null?a.concat([t]):null,xa(4,4,wm.bind(null,r,t),a)}function Wl(){}function bm(t,r){var a=Le();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Il(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function km(t,r){var a=Le();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Il(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function Tm(t,r,a){return(ar&21)===0?(t.baseState&&(t.baseState=!1,we=!0),t.memoizedState=a):(Ge(a,r)||(a=t5(),Ft.lanes|=a,sr|=a,t.baseState=!0),r)}function A3(t,r){var a=jt;jt=a!==0&&4>a?a:4,t(!0);var c=Ll.transition;Ll.transition={};try{t(!1),r()}finally{jt=a,Ll.transition=c}}function jm(){return Le().memoizedState}function M3(t,r,a){var c=Vn(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Nm(t))Cm(r,a);else if(a=rm(t,r,a,c),a!==null){var d=pe();qe(a,t,c,d),Sm(a,r,c)}}function R3(t,r,a){var c=Vn(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nm(t))Cm(r,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var K=r.lastRenderedState,k=g(K,a);if(d.hasEagerState=!0,d.eagerState=k,Ge(k,K)){var C=r.interleaved;C===null?(d.next=d,El(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}a=rm(t,r,d,c),a!==null&&(d=pe(),qe(a,t,c,d),Sm(a,r,c))}}function Nm(t){var r=t.alternate;return t===Ft||r!==null&&r===Ft}function Cm(t,r){Go=ga=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Sm(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Hs(t,a)}}var Ka={readContext:De,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},$3={readContext:De,useCallback:function(t,r){return rn().memoizedState=[t,r===void 0?null:r],t},useContext:De,useEffect:ym,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,ya(4194308,4,wm.bind(null,r,t),a)},useLayoutEffect:function(t,r){return ya(4194308,4,t,r)},useInsertionEffect:function(t,r){return ya(4,2,t,r)},useMemo:function(t,r){var a=rn();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=rn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=M3.bind(null,Ft,t),[c.memoizedState,t]},useRef:function(t){var r=rn();return t={current:t},r.memoizedState=t},useState:fm,useDebugValue:Wl,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=fm(!1),r=t[0];return t=A3.bind(null,t[1]),rn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=Ft,d=rn();if($t){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),ee===null)throw Error(o(349));(ar&30)!==0||um(c,r,a)}d.memoizedState=a;var g={value:a,getSnapshot:r};return d.queue=g,ym(dm.bind(null,c,g,t),[t]),c.flags|=2048,Ho(9,mm.bind(null,c,g,a,r),void 0,null),a},useId:function(){var t=rn(),r=ee.identifierPrefix;if($t){var a=hn,c=dn;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Wo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=E3++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},D3={readContext:De,useCallback:bm,useContext:De,useEffect:Gl,useImperativeHandle:vm,useInsertionEffect:xm,useLayoutEffect:Km,useMemo:km,useReducer:Fl,useRef:gm,useState:function(){return Fl(_o)},useDebugValue:Wl,useDeferredValue:function(t){var r=Le();return Tm(r,Jt.memoizedState,t)},useTransition:function(){var t=Fl(_o)[0],r=Le().memoizedState;return[t,r]},useMutableSource:lm,useSyncExternalStore:cm,useId:jm,unstable_isNewReconciler:!1},L3={readContext:De,useCallback:bm,useContext:De,useEffect:Gl,useImperativeHandle:vm,useInsertionEffect:xm,useLayoutEffect:Km,useMemo:km,useReducer:Vl,useRef:gm,useState:function(){return Vl(_o)},useDebugValue:Wl,useDeferredValue:function(t){var r=Le();return Jt===null?r.memoizedState=t:Tm(r,Jt.memoizedState,t)},useTransition:function(){var t=Vl(_o)[0],r=Le().memoizedState;return[t,r]},useMutableSource:lm,useSyncExternalStore:cm,useId:jm,unstable_isNewReconciler:!1};function _e(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function _l(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:H({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wa={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=pe(),d=Vn(t),g=fn(c,d);g.payload=r,a!=null&&(g.callback=a),r=In(t,g,d),r!==null&&(qe(r,t,d,c),da(r,t,d))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=pe(),d=Vn(t),g=fn(c,d);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=In(t,g,d),r!==null&&(qe(r,t,d,c),da(r,t,d))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=pe(),c=Vn(t),d=fn(a,c);d.tag=2,r!=null&&(d.callback=r),r=In(t,d,c),r!==null&&(qe(r,t,c,a),da(r,t,c))}};function Pm(t,r,a,c,d,g,K){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,K):r.prototype&&r.prototype.isPureReactComponent?!Ao(a,c)||!Ao(d,g):!0}function zm(t,r,a){var c=!1,d=$n,g=r.contextType;return typeof g=="object"&&g!==null?g=De(g):(d=Ke(r)?er:se.current,c=r.contextTypes,g=(c=c!=null)?$r(t,d):$n),r=new r(a,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wa,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=g),r}function Em(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&wa.enqueueReplaceState(r,r.state,null)}function Hl(t,r,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Al(t);var g=r.contextType;typeof g=="object"&&g!==null?d.context=De(g):(g=Ke(r)?er:se.current,d.context=$r(t,g)),d.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(_l(t,r,g,a),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&wa.enqueueReplaceState(d,d.state,null),ha(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,r){try{var a="",c=r;do a+=wt(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:d,digest:null}}function Ul(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function ql(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var I3=typeof WeakMap=="function"?WeakMap:Map;function Am(t,r,a){a=fn(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ca||(Ca=!0,cc=c),ql(t,r)},a}function Mm(t,r,a){a=fn(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ql(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ql(t,r),typeof c!="function"&&(On===null?On=new Set([this]):On.add(this));var K=r.stack;this.componentDidCatch(r.value,{componentStack:K!==null?K:""})}),a}function Rm(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new I3;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),t=J3.bind(null,t,r,a),r.then(t,t))}function $m(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Dm(t,r,a,c,d){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=fn(-1,1),r.tag=2,In(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var B3=D.ReactCurrentOwner,we=!1;function he(t,r,a,c){r.child=t===null?nm(r,null,a,c):Br(r,t.child,a,c)}function Lm(t,r,a,c,d){a=a.render;var g=r.ref;return Fr(r,d),c=Bl(t,r,a,c,g,d),a=Ol(),t!==null&&!we?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,gn(t,r,d)):($t&&a&&bl(r),r.flags|=1,he(t,r,c,d),r.child)}function Im(t,r,a,c,d){if(t===null){var g=a.type;return typeof g=="function"&&!gc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Bm(t,r,g,c,d)):(t=Ma(a.type,null,c,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&d)===0){var K=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(K,c)&&t.ref===r.ref)return gn(t,r,d)}return r.flags|=1,t=Wn(g,c),t.ref=r.ref,t.return=r,r.child=t}function Bm(t,r,a,c,d){if(t!==null){var g=t.memoizedProps;if(Ao(g,c)&&t.ref===r.ref)if(we=!1,r.pendingProps=c=g,(t.lanes&d)!==0)(t.flags&131072)!==0&&(we=!0);else return r.lanes=t.lanes,gn(t,r,d)}return Yl(t,r,a,c,d)}function Om(t,r,a){var c=r.pendingProps,d=c.children,g=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(_r,Pe),Pe|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,St(_r,Pe),Pe|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,St(_r,Pe),Pe|=c}else g!==null?(c=g.baseLanes|a,r.memoizedState=null):c=a,St(_r,Pe),Pe|=c;return he(t,r,d,a),r.child}function Fm(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Yl(t,r,a,c,d){var g=Ke(a)?er:se.current;return g=$r(r,g),Fr(r,d),a=Bl(t,r,a,c,g,d),c=Ol(),t!==null&&!we?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,gn(t,r,d)):($t&&c&&bl(r),r.flags|=1,he(t,r,a,d),r.child)}function Vm(t,r,a,c,d){if(Ke(a)){var g=!0;oa(r)}else g=!1;if(Fr(r,d),r.stateNode===null)ba(t,r),zm(r,a,c),Hl(r,a,c,d),c=!0;else if(t===null){var K=r.stateNode,k=r.memoizedProps;K.props=k;var C=K.context,$=a.contextType;typeof $=="object"&&$!==null?$=De($):($=Ke(a)?er:se.current,$=$r(r,$));var O=a.getDerivedStateFromProps,F=typeof O=="function"||typeof K.getSnapshotBeforeUpdate=="function";F||typeof K.UNSAFE_componentWillReceiveProps!="function"&&typeof K.componentWillReceiveProps!="function"||(k!==c||C!==$)&&Em(r,K,c,$),Ln=!1;var B=r.memoizedState;K.state=B,ha(r,c,K,d),C=r.memoizedState,k!==c||B!==C||xe.current||Ln?(typeof O=="function"&&(_l(r,a,O,c),C=r.memoizedState),(k=Ln||Pm(r,a,k,c,B,C,$))?(F||typeof K.UNSAFE_componentWillMount!="function"&&typeof K.componentWillMount!="function"||(typeof K.componentWillMount=="function"&&K.componentWillMount(),typeof K.UNSAFE_componentWillMount=="function"&&K.UNSAFE_componentWillMount()),typeof K.componentDidMount=="function"&&(r.flags|=4194308)):(typeof K.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),K.props=c,K.state=C,K.context=$,c=k):(typeof K.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{K=r.stateNode,om(t,r),k=r.memoizedProps,$=r.type===r.elementType?k:_e(r.type,k),K.props=$,F=r.pendingProps,B=K.context,C=a.contextType,typeof C=="object"&&C!==null?C=De(C):(C=Ke(a)?er:se.current,C=$r(r,C));var Y=a.getDerivedStateFromProps;(O=typeof Y=="function"||typeof K.getSnapshotBeforeUpdate=="function")||typeof K.UNSAFE_componentWillReceiveProps!="function"&&typeof K.componentWillReceiveProps!="function"||(k!==F||B!==C)&&Em(r,K,c,C),Ln=!1,B=r.memoizedState,K.state=B,ha(r,c,K,d);var Z=r.memoizedState;k!==F||B!==Z||xe.current||Ln?(typeof Y=="function"&&(_l(r,a,Y,c),Z=r.memoizedState),($=Ln||Pm(r,a,$,c,B,Z,C)||!1)?(O||typeof K.UNSAFE_componentWillUpdate!="function"&&typeof K.componentWillUpdate!="function"||(typeof K.componentWillUpdate=="function"&&K.componentWillUpdate(c,Z,C),typeof K.UNSAFE_componentWillUpdate=="function"&&K.UNSAFE_componentWillUpdate(c,Z,C)),typeof K.componentDidUpdate=="function"&&(r.flags|=4),typeof K.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof K.componentDidUpdate!="function"||k===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof K.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Z),K.props=c,K.state=Z,K.context=C,c=$):(typeof K.componentDidUpdate!="function"||k===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof K.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),c=!1)}return Ql(t,r,a,c,g,d)}function Ql(t,r,a,c,d,g){Fm(t,r);var K=(r.flags&128)!==0;if(!c&&!K)return d&&U5(r,a,!1),gn(t,r,g);c=r.stateNode,B3.current=r;var k=K&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&K?(r.child=Br(r,t.child,null,g),r.child=Br(r,null,k,g)):he(t,r,k,g),r.memoizedState=c.state,d&&U5(r,a,!0),r.child}function Gm(t){var r=t.stateNode;r.pendingContext?_5(t,r.pendingContext,r.pendingContext!==r.context):r.context&&_5(t,r.context,!1),Ml(t,r.containerInfo)}function Wm(t,r,a,c,d){return Ir(),Nl(d),r.flags|=256,he(t,r,a,c),r.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Jl(t){return{baseLanes:t,cachePool:null,transitions:null}}function _m(t,r,a){var c=r.pendingProps,d=Ot.current,g=!1,K=(r.flags&128)!==0,k;if((k=K)||(k=t!==null&&t.memoizedState===null?!1:(d&2)!==0),k?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),St(Ot,d&1),t===null)return jl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(K=c.children,t=c.fallback,g?(c=r.mode,g=r.child,K={mode:"hidden",children:K},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=K):g=Ra(K,c,0,null),t=mr(t,c,a,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Jl(a),r.memoizedState=Xl,t):Zl(r,K));if(d=t.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return O3(t,r,K,c,k,d,a);if(g){g=c.fallback,K=r.mode,d=t.child,k=d.sibling;var C={mode:"hidden",children:c.children};return(K&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Wn(d,C),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?g=Wn(k,g):(g=mr(g,K,a,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,K=t.child.memoizedState,K=K===null?Jl(a):{baseLanes:K.baseLanes|a,cachePool:null,transitions:K.transitions},g.memoizedState=K,g.childLanes=t.childLanes&~a,r.memoizedState=Xl,c}return g=t.child,t=g.sibling,c=Wn(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Zl(t,r){return r=Ra({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function va(t,r,a,c){return c!==null&&Nl(c),Br(r,t.child,null,a),t=Zl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function O3(t,r,a,c,d,g,K){if(a)return r.flags&256?(r.flags&=-257,c=Ul(Error(o(422))),va(t,r,K,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=c.fallback,d=r.mode,c=Ra({mode:"visible",children:c.children},d,0,null),g=mr(g,d,K,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&Br(r,t.child,null,K),r.child.memoizedState=Jl(K),r.memoizedState=Xl,g);if((r.mode&1)===0)return va(t,r,K,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(o(419)),c=Ul(g,c,void 0),va(t,r,K,c)}if(k=(K&t.childLanes)!==0,we||k){if(c=ee,c!==null){switch(K&-K){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|K))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,pn(t,d),qe(c,t,d,-1))}return fc(),c=Ul(Error(o(421))),va(t,r,K,c)}return d.data==="$?"?(r.flags|=128,r.child=t.child,r=Z3.bind(null,t),d._reactRetry=r,null):(t=g.treeContext,Se=Mn(d.nextSibling),Ce=r,$t=!0,We=null,t!==null&&(Re[$e++]=dn,Re[$e++]=hn,Re[$e++]=nr,dn=t.id,hn=t.overflow,nr=r),r=Zl(r,c.children),r.flags|=4096,r)}function Hm(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),zl(t.return,r,a)}function tc(t,r,a,c,d){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Um(t,r,a){var c=r.pendingProps,d=c.revealOrder,g=c.tail;if(he(t,r,c.children,a),c=Ot.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,a,r);else if(t.tag===19)Hm(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break t;for(;t.sibling===null;){if(t.return===null||t.return===r)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(St(Ot,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)t=a.alternate,t!==null&&pa(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),tc(r,!1,d,a,g);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&pa(t)===null){r.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}tc(r,!0,a,null,g);break;case"together":tc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ba(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function gn(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),sr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,a=Wn(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Wn(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function F3(t,r,a){switch(r.tag){case 3:Gm(r),Ir();break;case 5:sm(r);break;case 1:Ke(r.type)&&oa(r);break;case 4:Ml(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;St(ua,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(St(Ot,Ot.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_m(t,r,a):(St(Ot,Ot.current&1),t=gn(t,r,a),t!==null?t.sibling:null);St(Ot,Ot.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return Um(t,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),St(Ot,Ot.current),c)break;return null;case 22:case 23:return r.lanes=0,Om(t,r,a)}return gn(t,r,a)}var qm,ec,Ym,Qm;qm=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ec=function(){},Ym=function(t,r,a,c){var d=t.memoizedProps;if(d!==c){t=r.stateNode,ir(nn.current);var g=null;switch(a){case"input":d=zs(t,d),c=zs(t,c),g=[];break;case"select":d=H({},d,{value:void 0}),c=H({},c,{value:void 0}),g=[];break;case"textarea":d=Ms(t,d),c=Ms(t,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ea)}$s(a,c);var K;a=null;for($ in d)if(!c.hasOwnProperty($)&&d.hasOwnProperty($)&&d[$]!=null)if($==="style"){var k=d[$];for(K in k)k.hasOwnProperty(K)&&(a||(a={}),a[K]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(l.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in c){var C=c[$];if(k=d?.[$],c.hasOwnProperty($)&&C!==k&&(C!=null||k!=null))if($==="style")if(k){for(K in k)!k.hasOwnProperty(K)||C&&C.hasOwnProperty(K)||(a||(a={}),a[K]="");for(K in C)C.hasOwnProperty(K)&&k[K]!==C[K]&&(a||(a={}),a[K]=C[K])}else a||(g||(g=[]),g.push($,a)),a=C;else $==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(g=g||[]).push($,C)):$==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push($,""+C):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(l.hasOwnProperty($)?(C!=null&&$==="onScroll"&&Pt("scroll",t),g||k===C||(g=[])):(g=g||[]).push($,C))}a&&(g=g||[]).push("style",a);var $=g;(r.updateQueue=$)&&(r.flags|=4)}},Qm=function(t,r,a,c){a!==c&&(r.flags|=4)};function Uo(t,r){if(!$t)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function ce(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function V3(t,r,a){var c=r.pendingProps;switch(kl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(r),null;case 1:return Ke(r.type)&&ra(),ce(r),null;case 3:return c=r.stateNode,Vr(),zt(xe),zt(se),Dl(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(la(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,We!==null&&(dc(We),We=null))),ec(t,r),ce(r),null;case 5:Rl(r);var d=ir(Vo.current);if(a=r.type,t!==null&&r.stateNode!=null)Ym(t,r,a,c,d),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return ce(r),null}if(t=ir(nn.current),la(r)){c=r.stateNode,a=r.type;var g=r.memoizedProps;switch(c[en]=r,c[Lo]=g,t=(r.mode&1)!==0,a){case"dialog":Pt("cancel",c),Pt("close",c);break;case"iframe":case"object":case"embed":Pt("load",c);break;case"video":case"audio":for(d=0;d<Ro.length;d++)Pt(Ro[d],c);break;case"source":Pt("error",c);break;case"img":case"image":case"link":Pt("error",c),Pt("load",c);break;case"details":Pt("toggle",c);break;case"input":z4(c,g),Pt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Pt("invalid",c);break;case"textarea":M4(c,g),Pt("invalid",c)}$s(a,g),d=null;for(var K in g)if(g.hasOwnProperty(K)){var k=g[K];K==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&ta(c.textContent,k,t),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&ta(c.textContent,k,t),d=["children",""+k]):l.hasOwnProperty(K)&&k!=null&&K==="onScroll"&&Pt("scroll",c)}switch(a){case"input":Ei(c),A4(c,g,!0);break;case"textarea":Ei(c),$4(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ea)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{K=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D4(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=K.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=K.createElement(a,{is:c.is}):(t=K.createElement(a),a==="select"&&(K=t,c.multiple?K.multiple=!0:c.size&&(K.size=c.size))):t=K.createElementNS(t,a),t[en]=r,t[Lo]=c,qm(t,r,!1,!1),r.stateNode=t;t:{switch(K=Ds(a,c),a){case"dialog":Pt("cancel",t),Pt("close",t),d=c;break;case"iframe":case"object":case"embed":Pt("load",t),d=c;break;case"video":case"audio":for(d=0;d<Ro.length;d++)Pt(Ro[d],t);d=c;break;case"source":Pt("error",t),d=c;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),d=c;break;case"details":Pt("toggle",t),d=c;break;case"input":z4(t,c),d=zs(t,c),Pt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=H({},c,{value:void 0}),Pt("invalid",t);break;case"textarea":M4(t,c),d=Ms(t,c),Pt("invalid",t);break;default:d=c}$s(a,d),k=d;for(g in k)if(k.hasOwnProperty(g)){var C=k[g];g==="style"?B4(t,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&L4(t,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&fo(t,C):typeof C=="number"&&fo(t,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Pt("scroll",t):C!=null&&j(t,g,C,K))}switch(a){case"input":Ei(t),A4(t,c,!1);break;case"textarea":Ei(t),$4(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Tt(c.value));break;case"select":t.multiple=!!c.multiple,g=c.value,g!=null?kr(t,!!c.multiple,g,!1):c.defaultValue!=null&&kr(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ea)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ce(r),null;case 6:if(t&&r.stateNode!=null)Qm(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(a=ir(Vo.current),ir(nn.current),la(r)){if(c=r.stateNode,a=r.memoizedProps,c[en]=r,(g=c.nodeValue!==a)&&(t=Ce,t!==null))switch(t.tag){case 3:ta(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(c.nodeValue,a,(t.mode&1)!==0)}g&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[en]=r,r.stateNode=c}return ce(r),null;case 13:if(zt(Ot),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($t&&Se!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Z5(),Ir(),r.flags|=98560,g=!1;else if(g=la(r),c!==null&&c.dehydrated!==null){if(t===null){if(!g)throw Error(o(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(o(317));g[en]=r}else Ir(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ce(r),g=!1}else We!==null&&(dc(We),We=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Zt===0&&(Zt=3):fc())),r.updateQueue!==null&&(r.flags|=4),ce(r),null);case 4:return Vr(),ec(t,r),t===null&&$o(r.stateNode.containerInfo),ce(r),null;case 10:return Pl(r.type._context),ce(r),null;case 17:return Ke(r.type)&&ra(),ce(r),null;case 19:if(zt(Ot),g=r.memoizedState,g===null)return ce(r),null;if(c=(r.flags&128)!==0,K=g.rendering,K===null)if(c)Uo(g,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(K=pa(t),K!==null){for(r.flags|=128,Uo(g,!1),c=K.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)g=a,t=c,g.flags&=14680066,K=g.alternate,K===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=K.childLanes,g.lanes=K.lanes,g.child=K.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=K.memoizedProps,g.memoizedState=K.memoizedState,g.updateQueue=K.updateQueue,g.type=K.type,t=K.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return St(Ot,Ot.current&1|2),r.child}t=t.sibling}g.tail!==null&&Ut()>Hr&&(r.flags|=128,c=!0,Uo(g,!1),r.lanes=4194304)}else{if(!c)if(t=pa(K),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Uo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!K.alternate&&!$t)return ce(r),null}else 2*Ut()-g.renderingStartTime>Hr&&a!==1073741824&&(r.flags|=128,c=!0,Uo(g,!1),r.lanes=4194304);g.isBackwards?(K.sibling=r.child,r.child=K):(a=g.last,a!==null?a.sibling=K:r.child=K,g.last=K)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Ut(),r.sibling=null,a=Ot.current,St(Ot,c?a&1|2:a&1),r):(ce(r),null);case 22:case 23:return pc(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(Pe&1073741824)!==0&&(ce(r),r.subtreeFlags&6&&(r.flags|=8192)):ce(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function G3(t,r){switch(kl(r),r.tag){case 1:return Ke(r.type)&&ra(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vr(),zt(xe),zt(se),Dl(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Rl(r),null;case 13:if(zt(Ot),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));Ir()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return zt(Ot),null;case 4:return Vr(),null;case 10:return Pl(r.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var ka=!1,ue=!1,W3=typeof WeakSet=="function"?WeakSet:Set,X=null;function Wr(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Gt(t,r,c)}else a.current=null}function nc(t,r,a){try{a()}catch(c){Gt(t,r,c)}}var Xm=!1;function _3(t,r){if(pl=Gi,t=P5(),al(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break t}var K=0,k=-1,C=-1,$=0,O=0,F=t,B=null;e:for(;;){for(var Y;F!==a||d!==0&&F.nodeType!==3||(k=K+d),F!==g||c!==0&&F.nodeType!==3||(C=K+c),F.nodeType===3&&(K+=F.nodeValue.length),(Y=F.firstChild)!==null;)B=F,F=Y;for(;;){if(F===t)break e;if(B===a&&++$===d&&(k=K),B===g&&++O===c&&(C=K),(Y=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=Y}a=k===-1||C===-1?null:{start:k,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(fl={focusedElem:t,selectionRange:a},Gi=!1,X=r;X!==null;)if(r=X,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,X=t;else for(;X!==null;){r=X;try{var Z=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var tt=Z.memoizedProps,qt=Z.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?tt:_e(r.type,tt),qt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var R=r.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(G){Gt(r,r.return,G)}if(t=r.sibling,t!==null){t.return=r.return,X=t;break}X=r.return}return Z=Xm,Xm=!1,Z}function qo(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var g=d.destroy;d.destroy=void 0,g!==void 0&&nc(r,a,g)}d=d.next}while(d!==c)}}function Ta(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function rc(t){var r=t.ref;if(r!==null){var a=t.stateNode;t.tag,t=a,typeof r=="function"?r(t):r.current=t}}function Jm(t){var r=t.alternate;r!==null&&(t.alternate=null,Jm(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[en],delete r[Lo],delete r[Kl],delete r[C3],delete r[S3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zm(t){return t.tag===5||t.tag===3||t.tag===4}function t1(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ea));else if(c!==4&&(t=t.child,t!==null))for(oc(t,r,a),t=t.sibling;t!==null;)oc(t,r,a),t=t.sibling}function ic(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(ic(t,r,a),t=t.sibling;t!==null;)ic(t,r,a),t=t.sibling}var re=null,He=!1;function Bn(t,r,a){for(a=a.child;a!==null;)e1(t,r,a),a=a.sibling}function e1(t,r,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:ue||Wr(a,r);case 6:var c=re,d=He;re=null,Bn(t,r,a),re=c,He=d,re!==null&&(He?(t=re,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):re.removeChild(a.stateNode));break;case 18:re!==null&&(He?(t=re,a=a.stateNode,t.nodeType===8?xl(t.parentNode,a):t.nodeType===1&&xl(t,a),No(t)):xl(re,a.stateNode));break;case 4:c=re,d=He,re=a.stateNode.containerInfo,He=!0,Bn(t,r,a),re=c,He=d;break;case 0:case 11:case 14:case 15:if(!ue&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,K=g.destroy;g=g.tag,K!==void 0&&((g&2)!==0||(g&4)!==0)&&nc(a,r,K),d=d.next}while(d!==c)}Bn(t,r,a);break;case 1:if(!ue&&(Wr(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Gt(a,r,k)}Bn(t,r,a);break;case 21:Bn(t,r,a);break;case 22:a.mode&1?(ue=(c=ue)||a.memoizedState!==null,Bn(t,r,a),ue=c):Bn(t,r,a);break;default:Bn(t,r,a)}}function n1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new W3),r.forEach(function(c){var d=tf.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ue(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=t,K=r,k=K;t:for(;k!==null;){switch(k.tag){case 5:re=k.stateNode,He=!1;break t;case 3:re=k.stateNode.containerInfo,He=!0;break t;case 4:re=k.stateNode.containerInfo,He=!0;break t}k=k.return}if(re===null)throw Error(o(160));e1(g,K,d),re=null,He=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch($){Gt(d,r,$)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)r1(r,t),r=r.sibling}function r1(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ue(r,t),on(t),c&4){try{qo(3,t,t.return),Ta(3,t)}catch(tt){Gt(t,t.return,tt)}try{qo(5,t,t.return)}catch(tt){Gt(t,t.return,tt)}}break;case 1:Ue(r,t),on(t),c&512&&a!==null&&Wr(a,a.return);break;case 5:if(Ue(r,t),on(t),c&512&&a!==null&&Wr(a,a.return),t.flags&32){var d=t.stateNode;try{fo(d,"")}catch(tt){Gt(t,t.return,tt)}}if(c&4&&(d=t.stateNode,d!=null)){var g=t.memoizedProps,K=a!==null?a.memoizedProps:g,k=t.type,C=t.updateQueue;if(t.updateQueue=null,C!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&E4(d,g),Ds(k,K);var $=Ds(k,g);for(K=0;K<C.length;K+=2){var O=C[K],F=C[K+1];O==="style"?B4(d,F):O==="dangerouslySetInnerHTML"?L4(d,F):O==="children"?fo(d,F):j(d,O,F,$)}switch(k){case"input":Es(d,g);break;case"textarea":R4(d,g);break;case"select":var B=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Y=g.value;Y!=null?kr(d,!!g.multiple,Y,!1):B!==!!g.multiple&&(g.defaultValue!=null?kr(d,!!g.multiple,g.defaultValue,!0):kr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Lo]=g}catch(tt){Gt(t,t.return,tt)}}break;case 6:if(Ue(r,t),on(t),c&4){if(t.stateNode===null)throw Error(o(162));d=t.stateNode,g=t.memoizedProps;try{d.nodeValue=g}catch(tt){Gt(t,t.return,tt)}}break;case 3:if(Ue(r,t),on(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{No(r.containerInfo)}catch(tt){Gt(t,t.return,tt)}break;case 4:Ue(r,t),on(t);break;case 13:Ue(r,t),on(t),d=t.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(lc=Ut())),c&4&&n1(t);break;case 22:if(O=a!==null&&a.memoizedState!==null,t.mode&1?(ue=($=ue)||O,Ue(r,t),ue=$):Ue(r,t),on(t),c&8192){if($=t.memoizedState!==null,(t.stateNode.isHidden=$)&&!O&&(t.mode&1)!==0)for(X=t,O=t.child;O!==null;){for(F=X=O;X!==null;){switch(B=X,Y=B.child,B.tag){case 0:case 11:case 14:case 15:qo(4,B,B.return);break;case 1:Wr(B,B.return);var Z=B.stateNode;if(typeof Z.componentWillUnmount=="function"){c=B,a=B.return;try{r=c,Z.props=r.memoizedProps,Z.state=r.memoizedState,Z.componentWillUnmount()}catch(tt){Gt(c,a,tt)}}break;case 5:Wr(B,B.return);break;case 22:if(B.memoizedState!==null){a1(F);continue}}Y!==null?(Y.return=B,X=Y):a1(F)}O=O.sibling}t:for(O=null,F=t;;){if(F.tag===5){if(O===null){O=F;try{d=F.stateNode,$?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=F.stateNode,C=F.memoizedProps.style,K=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=I4("display",K))}catch(tt){Gt(t,t.return,tt)}}}else if(F.tag===6){if(O===null)try{F.stateNode.nodeValue=$?"":F.memoizedProps}catch(tt){Gt(t,t.return,tt)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break t;for(;F.sibling===null;){if(F.return===null||F.return===t)break t;O===F&&(O=null),F=F.return}O===F&&(O=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Ue(r,t),on(t),c&4&&n1(t);break;case 21:break;default:Ue(r,t),on(t)}}function on(t){var r=t.flags;if(r&2){try{t:{for(var a=t.return;a!==null;){if(Zm(a)){var c=a;break t}a=a.return}throw Error(o(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(fo(d,""),c.flags&=-33);var g=t1(t);ic(t,g,d);break;case 3:case 4:var K=c.stateNode.containerInfo,k=t1(t);oc(t,k,K);break;default:throw Error(o(161))}}catch(C){Gt(t,t.return,C)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function H3(t,r,a){X=t,o1(t)}function o1(t,r,a){for(var c=(t.mode&1)!==0;X!==null;){var d=X,g=d.child;if(d.tag===22&&c){var K=d.memoizedState!==null||ka;if(!K){var k=d.alternate,C=k!==null&&k.memoizedState!==null||ue;k=ka;var $=ue;if(ka=K,(ue=C)&&!$)for(X=d;X!==null;)K=X,C=K.child,K.tag===22&&K.memoizedState!==null?s1(d):C!==null?(C.return=K,X=C):s1(d);for(;g!==null;)X=g,o1(g),g=g.sibling;X=d,ka=k,ue=$}i1(t)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,X=g):i1(t)}}function i1(t){for(;X!==null;){var r=X;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ue||Ta(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!ue)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:_e(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&am(r,g,c);break;case 3:var K=r.updateQueue;if(K!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}am(r,K,a)}break;case 5:var k=r.stateNode;if(a===null&&r.flags&4){a=k;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var $=r.alternate;if($!==null){var O=$.memoizedState;if(O!==null){var F=O.dehydrated;F!==null&&No(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}ue||r.flags&512&&rc(r)}catch(B){Gt(r,r.return,B)}}if(r===t){X=null;break}if(a=r.sibling,a!==null){a.return=r.return,X=a;break}X=r.return}}function a1(t){for(;X!==null;){var r=X;if(r===t){X=null;break}var a=r.sibling;if(a!==null){a.return=r.return,X=a;break}X=r.return}}function s1(t){for(;X!==null;){var r=X;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ta(4,r)}catch(C){Gt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Gt(r,d,C)}}var g=r.return;try{rc(r)}catch(C){Gt(r,g,C)}break;case 5:var K=r.return;try{rc(r)}catch(C){Gt(r,K,C)}}}catch(C){Gt(r,r.return,C)}if(r===t){X=null;break}var k=r.sibling;if(k!==null){k.return=r.return,X=k;break}X=r.return}}var U3=Math.ceil,ja=D.ReactCurrentDispatcher,ac=D.ReactCurrentOwner,Ie=D.ReactCurrentBatchConfig,xt=0,ee=null,Qt=null,oe=0,Pe=0,_r=Rn(0),Zt=0,Yo=null,sr=0,Na=0,sc=0,Qo=null,ve=null,lc=0,Hr=1/0,yn=null,Ca=!1,cc=null,On=null,Sa=!1,Fn=null,Pa=0,Xo=0,uc=null,za=-1,Ea=0;function pe(){return(xt&6)!==0?Ut():za!==-1?za:za=Ut()}function Vn(t){return(t.mode&1)===0?1:(xt&2)!==0&&oe!==0?oe&-oe:z3.transition!==null?(Ea===0&&(Ea=t5()),Ea):(t=jt,t!==0||(t=window.event,t=t===void 0?16:c5(t.type)),t)}function qe(t,r,a,c){if(50<Xo)throw Xo=0,uc=null,Error(o(185));vo(t,a,c),((xt&2)===0||t!==ee)&&(t===ee&&((xt&2)===0&&(Na|=a),Zt===4&&Gn(t,oe)),be(t,c),a===1&&xt===0&&(r.mode&1)===0&&(Hr=Ut()+500,ia&&Dn()))}function be(t,r){var a=t.callbackNode;z2(t,r);var c=Oi(t,t===ee?oe:0);if(c===0)a!==null&&X4(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&X4(a),r===1)t.tag===0?P3(c1.bind(null,t)):q5(c1.bind(null,t)),j3(function(){(xt&6)===0&&Dn()}),a=null;else{switch(e5(c)){case 1:a=Gs;break;case 4:a=J4;break;case 16:a=Di;break;case 536870912:a=Z4;break;default:a=Di}a=y1(a,l1.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function l1(t,r){if(za=-1,Ea=0,(xt&6)!==0)throw Error(o(327));var a=t.callbackNode;if(Ur()&&t.callbackNode!==a)return null;var c=Oi(t,t===ee?oe:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Aa(t,c);else{r=c;var d=xt;xt|=2;var g=m1();(ee!==t||oe!==r)&&(yn=null,Hr=Ut()+500,cr(t,r));do try{Q3();break}catch(k){u1(t,k)}while(!0);Sl(),ja.current=g,xt=d,Qt!==null?r=0:(ee=null,oe=0,r=Zt)}if(r!==0){if(r===2&&(d=Ws(t),d!==0&&(c=d,r=mc(t,d))),r===1)throw a=Yo,cr(t,0),Gn(t,c),be(t,Ut()),a;if(r===6)Gn(t,c);else{if(d=t.current.alternate,(c&30)===0&&!q3(d)&&(r=Aa(t,c),r===2&&(g=Ws(t),g!==0&&(c=g,r=mc(t,g))),r===1))throw a=Yo,cr(t,0),Gn(t,c),be(t,Ut()),a;switch(t.finishedWork=d,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:ur(t,ve,yn);break;case 3:if(Gn(t,c),(c&130023424)===c&&(r=lc+500-Ut(),10<r)){if(Oi(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){pe(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=yl(ur.bind(null,t,ve,yn),r);break}ur(t,ve,yn);break;case 4:if(Gn(t,c),(c&4194240)===c)break;for(r=t.eventTimes,d=-1;0<c;){var K=31-Ve(c);g=1<<K,K=r[K],K>d&&(d=K),c&=~g}if(c=d,c=Ut()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*U3(c/1960))-c,10<c){t.timeoutHandle=yl(ur.bind(null,t,ve,yn),c);break}ur(t,ve,yn);break;case 5:ur(t,ve,yn);break;default:throw Error(o(329))}}}return be(t,Ut()),t.callbackNode===a?l1.bind(null,t):null}function mc(t,r){var a=Qo;return t.current.memoizedState.isDehydrated&&(cr(t,r).flags|=256),t=Aa(t,r),t!==2&&(r=ve,ve=a,r!==null&&dc(r)),t}function dc(t){ve===null?ve=t:ve.push.apply(ve,t)}function q3(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Ge(g(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gn(t,r){for(r&=~sc,r&=~Na,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Ve(r),c=1<<a;t[a]=-1,r&=~c}}function c1(t){if((xt&6)!==0)throw Error(o(327));Ur();var r=Oi(t,0);if((r&1)===0)return be(t,Ut()),null;var a=Aa(t,r);if(t.tag!==0&&a===2){var c=Ws(t);c!==0&&(r=c,a=mc(t,c))}if(a===1)throw a=Yo,cr(t,0),Gn(t,r),be(t,Ut()),a;if(a===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ur(t,ve,yn),be(t,Ut()),null}function hc(t,r){var a=xt;xt|=1;try{return t(r)}finally{xt=a,xt===0&&(Hr=Ut()+500,ia&&Dn())}}function lr(t){Fn!==null&&Fn.tag===0&&(xt&6)===0&&Ur();var r=xt;xt|=1;var a=Ie.transition,c=jt;try{if(Ie.transition=null,jt=1,t)return t()}finally{jt=c,Ie.transition=a,xt=r,(xt&6)===0&&Dn()}}function pc(){Pe=_r.current,zt(_r)}function cr(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,T3(a)),Qt!==null)for(a=Qt.return;a!==null;){var c=a;switch(kl(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ra();break;case 3:Vr(),zt(xe),zt(se),Dl();break;case 5:Rl(c);break;case 4:Vr();break;case 13:zt(Ot);break;case 19:zt(Ot);break;case 10:Pl(c.type._context);break;case 22:case 23:pc()}a=a.return}if(ee=t,Qt=t=Wn(t.current,null),oe=Pe=r,Zt=0,Yo=null,sc=Na=sr=0,ve=Qo=null,or!==null){for(r=0;r<or.length;r++)if(a=or[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var K=g.next;g.next=d,c.next=K}a.pending=c}or=null}return t}function u1(t,r){do{var a=Qt;try{if(Sl(),fa.current=Ka,ga){for(var c=Ft.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ga=!1}if(ar=0,te=Jt=Ft=null,Go=!1,Wo=0,ac.current=null,a===null||a.return===null){Zt=1,Yo=r,Qt=null;break}t:{var g=t,K=a.return,k=a,C=r;if(r=oe,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=C,O=k,F=O.tag;if((O.mode&1)===0&&(F===0||F===11||F===15)){var B=O.alternate;B?(O.updateQueue=B.updateQueue,O.memoizedState=B.memoizedState,O.lanes=B.lanes):(O.updateQueue=null,O.memoizedState=null)}var Y=$m(K);if(Y!==null){Y.flags&=-257,Dm(Y,K,k,g,r),Y.mode&1&&Rm(g,$,r),r=Y,C=$;var Z=r.updateQueue;if(Z===null){var tt=new Set;tt.add(C),r.updateQueue=tt}else Z.add(C);break t}else{if((r&1)===0){Rm(g,$,r),fc();break t}C=Error(o(426))}}else if($t&&k.mode&1){var qt=$m(K);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Dm(qt,K,k,g,r),Nl(Gr(C,k));break t}}g=C=Gr(C,k),Zt!==4&&(Zt=2),Qo===null?Qo=[g]:Qo.push(g),g=K;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var M=Am(g,C,r);im(g,M);break t;case 1:k=C;var P=g.type,R=g.stateNode;if((g.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(On===null||!On.has(R)))){g.flags|=65536,r&=-r,g.lanes|=r;var G=Mm(g,k,r);im(g,G);break t}}g=g.return}while(g!==null)}h1(a)}catch(et){r=et,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function m1(){var t=ja.current;return ja.current=Ka,t===null?Ka:t}function fc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),ee===null||(sr&268435455)===0&&(Na&268435455)===0||Gn(ee,oe)}function Aa(t,r){var a=xt;xt|=2;var c=m1();(ee!==t||oe!==r)&&(yn=null,cr(t,r));do try{Y3();break}catch(d){u1(t,d)}while(!0);if(Sl(),xt=a,ja.current=c,Qt!==null)throw Error(o(261));return ee=null,oe=0,Zt}function Y3(){for(;Qt!==null;)d1(Qt)}function Q3(){for(;Qt!==null&&!v2();)d1(Qt)}function d1(t){var r=g1(t.alternate,t,Pe);t.memoizedProps=t.pendingProps,r===null?h1(t):Qt=r,ac.current=null}function h1(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=V3(a,r,Pe),a!==null){Qt=a;return}}else{if(a=G3(a,r),a!==null){a.flags&=32767,Qt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=t}while(r!==null);Zt===0&&(Zt=5)}function ur(t,r,a){var c=jt,d=Ie.transition;try{Ie.transition=null,jt=1,X3(t,r,a,c)}finally{Ie.transition=d,jt=c}return null}function X3(t,r,a,c){do Ur();while(Fn!==null);if((xt&6)!==0)throw Error(o(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(E2(t,g),t===ee&&(Qt=ee=null,oe=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Sa||(Sa=!0,y1(Di,function(){return Ur(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ie.transition,Ie.transition=null;var K=jt;jt=1;var k=xt;xt|=4,ac.current=null,_3(t,a),r1(a,t),y3(fl),Gi=!!pl,fl=pl=null,t.current=a,H3(a),b2(),xt=k,jt=K,Ie.transition=g}else t.current=a;if(Sa&&(Sa=!1,Fn=t,Pa=d),g=t.pendingLanes,g===0&&(On=null),j2(a.stateNode),be(t,Ut()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ca)throw Ca=!1,t=cc,cc=null,t;return(Pa&1)!==0&&t.tag!==0&&Ur(),g=t.pendingLanes,(g&1)!==0?t===uc?Xo++:(Xo=0,uc=t):Xo=0,Dn(),null}function Ur(){if(Fn!==null){var t=e5(Pa),r=Ie.transition,a=jt;try{if(Ie.transition=null,jt=16>t?16:t,Fn===null)var c=!1;else{if(t=Fn,Fn=null,Pa=0,(xt&6)!==0)throw Error(o(331));var d=xt;for(xt|=4,X=t.current;X!==null;){var g=X,K=g.child;if((X.flags&16)!==0){var k=g.deletions;if(k!==null){for(var C=0;C<k.length;C++){var $=k[C];for(X=$;X!==null;){var O=X;switch(O.tag){case 0:case 11:case 15:qo(8,O,g)}var F=O.child;if(F!==null)F.return=O,X=F;else for(;X!==null;){O=X;var B=O.sibling,Y=O.return;if(Jm(O),O===$){X=null;break}if(B!==null){B.return=Y,X=B;break}X=Y}}}var Z=g.alternate;if(Z!==null){var tt=Z.child;if(tt!==null){Z.child=null;do{var qt=tt.sibling;tt.sibling=null,tt=qt}while(tt!==null)}}X=g}}if((g.subtreeFlags&2064)!==0&&K!==null)K.return=g,X=K;else t:for(;X!==null;){if(g=X,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:qo(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,X=M;break t}X=g.return}}var P=t.current;for(X=P;X!==null;){K=X;var R=K.child;if((K.subtreeFlags&2064)!==0&&R!==null)R.return=K,X=R;else t:for(K=P;X!==null;){if(k=X,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Ta(9,k)}}catch(et){Gt(k,k.return,et)}if(k===K){X=null;break t}var G=k.sibling;if(G!==null){G.return=k.return,X=G;break t}X=k.return}}if(xt=d,Dn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Li,t)}catch{}c=!0}return c}finally{jt=a,Ie.transition=r}}return!1}function p1(t,r,a){r=Gr(a,r),r=Am(t,r,1),t=In(t,r,1),r=pe(),t!==null&&(vo(t,1,r),be(t,r))}function Gt(t,r,a){if(t.tag===3)p1(t,t,a);else for(;r!==null;){if(r.tag===3){p1(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(On===null||!On.has(c))){t=Gr(a,t),t=Mm(r,t,1),r=In(r,t,1),t=pe(),r!==null&&(vo(r,1,t),be(r,t));break}}r=r.return}}function J3(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=pe(),t.pingedLanes|=t.suspendedLanes&a,ee===t&&(oe&a)===a&&(Zt===4||Zt===3&&(oe&130023424)===oe&&500>Ut()-lc?cr(t,0):sc|=a),be(t,r)}function f1(t,r){r===0&&((t.mode&1)===0?r=1:(r=Bi,Bi<<=1,(Bi&130023424)===0&&(Bi=4194304)));var a=pe();t=pn(t,r),t!==null&&(vo(t,r,a),be(t,a))}function Z3(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),f1(t,a)}function tf(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),f1(t,a)}var g1;g1=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||xe.current)we=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return we=!1,F3(t,r,a);we=(t.flags&131072)!==0}else we=!1,$t&&(r.flags&1048576)!==0&&Y5(r,sa,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;ba(t,r),t=r.pendingProps;var d=$r(r,se.current);Fr(r,a),d=Bl(null,r,c,t,d,a);var g=Ol();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ke(c)?(g=!0,oa(r)):g=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Al(r),d.updater=wa,r.stateNode=d,d._reactInternals=r,Hl(r,c,t,a),r=Ql(null,r,c,!0,g,a)):(r.tag=0,$t&&g&&bl(r),he(null,r,d,a),r=r.child),r;case 16:c=r.elementType;t:{switch(ba(t,r),t=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=nf(c),t=_e(c,t),d){case 0:r=Yl(null,r,c,t,a);break t;case 1:r=Vm(null,r,c,t,a);break t;case 11:r=Lm(null,r,c,t,a);break t;case 14:r=Im(null,r,c,_e(c.type,t),a);break t}throw Error(o(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:_e(c,d),Yl(t,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:_e(c,d),Vm(t,r,c,d,a);case 3:t:{if(Gm(r),t===null)throw Error(o(387));c=r.pendingProps,g=r.memoizedState,d=g.element,om(t,r),ha(r,c,null,a);var K=r.memoizedState;if(c=K.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:K.cache,pendingSuspenseBoundaries:K.pendingSuspenseBoundaries,transitions:K.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){d=Gr(Error(o(423)),r),r=Wm(t,r,c,a,d);break t}else if(c!==d){d=Gr(Error(o(424)),r),r=Wm(t,r,c,a,d);break t}else for(Se=Mn(r.stateNode.containerInfo.firstChild),Ce=r,$t=!0,We=null,a=nm(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ir(),c===d){r=gn(t,r,a);break t}he(t,r,c,a)}r=r.child}return r;case 5:return sm(r),t===null&&jl(r),c=r.type,d=r.pendingProps,g=t!==null?t.memoizedProps:null,K=d.children,gl(c,d)?K=null:g!==null&&gl(c,g)&&(r.flags|=32),Fm(t,r),he(t,r,K,a),r.child;case 6:return t===null&&jl(r),null;case 13:return _m(t,r,a);case 4:return Ml(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Br(r,null,c,a):he(t,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:_e(c,d),Lm(t,r,c,d,a);case 7:return he(t,r,r.pendingProps,a),r.child;case 8:return he(t,r,r.pendingProps.children,a),r.child;case 12:return he(t,r,r.pendingProps.children,a),r.child;case 10:t:{if(c=r.type._context,d=r.pendingProps,g=r.memoizedProps,K=d.value,St(ua,c._currentValue),c._currentValue=K,g!==null)if(Ge(g.value,K)){if(g.children===d.children&&!xe.current){r=gn(t,r,a);break t}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var k=g.dependencies;if(k!==null){K=g.child;for(var C=k.firstContext;C!==null;){if(C.context===c){if(g.tag===1){C=fn(-1,a&-a),C.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var O=$.pending;O===null?C.next=C:(C.next=O.next,O.next=C),$.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),zl(g.return,a,r),k.lanes|=a;break}C=C.next}}else if(g.tag===10)K=g.type===r.type?null:g.child;else if(g.tag===18){if(K=g.return,K===null)throw Error(o(341));K.lanes|=a,k=K.alternate,k!==null&&(k.lanes|=a),zl(K,a,r),K=g.sibling}else K=g.child;if(K!==null)K.return=g;else for(K=g;K!==null;){if(K===r){K=null;break}if(g=K.sibling,g!==null){g.return=K.return,K=g;break}K=K.return}g=K}he(t,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Fr(r,a),d=De(d),c=c(d),r.flags|=1,he(t,r,c,a),r.child;case 14:return c=r.type,d=_e(c,r.pendingProps),d=_e(c.type,d),Im(t,r,c,d,a);case 15:return Bm(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:_e(c,d),ba(t,r),r.tag=1,Ke(c)?(t=!0,oa(r)):t=!1,Fr(r,a),zm(r,c,d),Hl(r,c,d,a),Ql(null,r,c,!0,t,a);case 19:return Um(t,r,a);case 22:return Om(t,r,a)}throw Error(o(156,r.tag))};function y1(t,r){return Q4(t,r)}function ef(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,r,a,c){return new ef(t,r,a,c)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nf(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ut)return 11;if(t===Mt)return 14}return 2}function Wn(t,r){var a=t.alternate;return a===null?(a=Be(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ma(t,r,a,c,d,g){var K=2;if(c=t,typeof t=="function")gc(t)&&(K=1);else if(typeof t=="string")K=5;else t:switch(t){case U:return mr(a.children,d,g,r);case q:K=8,d|=8;break;case ct:return t=Be(12,a,r,d|2),t.elementType=ct,t.lanes=g,t;case Ht:return t=Be(13,a,r,d),t.elementType=Ht,t.lanes=g,t;case nt:return t=Be(19,a,r,d),t.elementType=nt,t.lanes=g,t;case at:return Ra(a,d,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dt:K=10;break t;case Nt:K=9;break t;case ut:K=11;break t;case Mt:K=14;break t;case kt:K=16,c=null;break t}throw Error(o(130,t==null?t:typeof t,""))}return r=Be(K,a,r,d),r.elementType=t,r.type=c,r.lanes=g,r}function mr(t,r,a,c){return t=Be(7,t,c,r),t.lanes=a,t}function Ra(t,r,a,c){return t=Be(22,t,c,r),t.elementType=at,t.lanes=a,t.stateNode={isHidden:!1},t}function yc(t,r,a){return t=Be(6,t,null,r),t.lanes=a,t}function xc(t,r,a){return r=Be(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function rf(t,r,a,c,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Kc(t,r,a,c,d,g,K,k,C){return t=new rf(t,r,a,k,C),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Be(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(g),t}function of(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function x1(t){if(!t)return $n;t=t._reactInternals;t:{if(Zn(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break t;case 1:if(Ke(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break t}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var a=t.type;if(Ke(a))return H5(t,a,r)}return r}function K1(t,r,a,c,d,g,K,k,C){return t=Kc(a,c,!0,t,d,g,K,k,C),t.context=x1(null),a=t.current,c=pe(),d=Vn(a),g=fn(c,d),g.callback=r??null,In(a,g,d),t.current.lanes=d,vo(t,d,c),be(t,c),t}function $a(t,r,a,c){var d=r.current,g=pe(),K=Vn(d);return a=x1(a),r.context===null?r.context=a:r.pendingContext=a,r=fn(g,K),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=In(d,r,K),t!==null&&(qe(t,d,K,g),da(t,d,K)),K}function Da(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function w1(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function wc(t,r){w1(t,r),(t=t.alternate)&&w1(t,r)}function af(){return null}var v1=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}La.prototype.render=vc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));$a(t,r,null,null)},La.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;lr(function(){$a(null,t,null,null)}),r[un]=null}};function La(t){this._internalRoot=t}La.prototype.unstable_scheduleHydration=function(t){if(t){var r=o5();t={blockedOn:null,target:t,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,t),a===0&&s5(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ia(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function b1(){}function sf(t,r,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var $=Da(K);g.call($)}}var K=K1(r,c,t,0,null,!1,!1,"",b1);return t._reactRootContainer=K,t[un]=K.current,$o(t.nodeType===8?t.parentNode:t),lr(),K}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var $=Da(C);k.call($)}}var C=Kc(t,0,!1,null,null,!1,!1,"",b1);return t._reactRootContainer=C,t[un]=C.current,$o(t.nodeType===8?t.parentNode:t),lr(function(){$a(r,C,a,c)}),C}function Ba(t,r,a,c,d){var g=a._reactRootContainer;if(g){var K=g;if(typeof d=="function"){var k=d;d=function(){var C=Da(K);k.call(C)}}$a(r,K,t,d)}else K=sf(a,r,t,d,c);return Da(K)}n5=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=wo(r.pendingLanes);a!==0&&(Hs(r,a|1),be(r,Ut()),(xt&6)===0&&(Hr=Ut()+500,Dn()))}break;case 13:lr(function(){var c=pn(t,1);if(c!==null){var d=pe();qe(c,t,1,d)}}),wc(t,1)}},Us=function(t){if(t.tag===13){var r=pn(t,134217728);if(r!==null){var a=pe();qe(r,t,134217728,a)}wc(t,134217728)}},r5=function(t){if(t.tag===13){var r=Vn(t),a=pn(t,r);if(a!==null){var c=pe();qe(a,t,r,c)}wc(t,r)}},o5=function(){return jt},i5=function(t,r){var a=jt;try{return jt=t,r()}finally{jt=a}},Bs=function(t,r,a){switch(r){case"input":if(Es(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var d=na(c);if(!d)throw Error(o(90));P4(c),Es(c,d)}}}break;case"textarea":R4(t,a);break;case"select":r=a.value,r!=null&&kr(t,!!a.multiple,r,!1)}},G4=hc,W4=lr;var lf={usingClientEntryPoint:!1,Events:[Io,Mr,na,F4,V4,hc]},Jo={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cf={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q4(t),t===null?null:t.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Li=Oa.inject(cf),tn=Oa}catch{}}return ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf,ke.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(r))throw Error(o(200));return of(t,r,null,a)},ke.createRoot=function(t,r){if(!bc(t))throw Error(o(299));var a=!1,c="",d=v1;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Kc(t,1,!1,null,null,a,!1,c,d),t[un]=r.current,$o(t.nodeType===8?t.parentNode:t),new vc(r)},ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=q4(r),t=t===null?null:t.stateNode,t},ke.flushSync=function(t){return lr(t)},ke.hydrate=function(t,r,a){if(!Ia(r))throw Error(o(200));return Ba(null,t,r,!0,a)},ke.hydrateRoot=function(t,r,a){if(!bc(t))throw Error(o(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",K=v1;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(K=a.onRecoverableError)),r=K1(r,null,t,1,a??null,d,!1,g,K),t[un]=r.current,$o(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new La(r)},ke.render=function(t,r,a){if(!Ia(r))throw Error(o(200));return Ba(null,t,r,!1,a)},ke.unmountComponentAtNode=function(t){if(!Ia(t))throw Error(o(40));return t._reactRootContainer?(lr(function(){Ba(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},ke.unstable_batchedUpdates=hc,ke.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!Ia(a))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Ba(t,r,a,!1,c)},ke.version="18.3.1-next-f1338f8080-20240426",ke}var z1;function b0(){if(z1)return jc.exports;z1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),jc.exports=gf(),jc.exports}var E1;function yf(){if(E1)return Fa;E1=1;var e=b0();return Fa.createRoot=e.createRoot,Fa.hydrateRoot=e.hydrateRoot,Fa}var xf=yf();const Kf=wr(xf);var A1="popstate";function wf(e={}){function n(s,l){let{pathname:u,search:m,hash:h}=s.location;return tu("",{pathname:u,search:m,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(s,l){return typeof l=="string"?l:fi(l)}return bf(n,o,null,e)}function Bt(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Xe(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function vf(){return Math.random().toString(36).substring(2,10)}function M1(e,n){return{usr:e.state,key:e.key,idx:n}}function tu(e,n,o=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?so(n):n,state:o,key:n&&n.key||s||vf()}}function fi({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function so(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let s=e.indexOf("?");s>=0&&(n.search=e.substring(s),e=e.substring(0,s)),e&&(n.pathname=e)}return n}function bf(e,n,o,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,m=l.history,h="POP",p=null,f=y();f==null&&(f=0,m.replaceState({...m.state,idx:f},""));function y(){return(m.state||{idx:null}).idx}function x(){h="POP";let T=y(),E=T==null?null:T-f;f=T,p&&p({action:h,location:N.location,delta:E})}function w(T,E){h="PUSH";let z=tu(N.location,T,E);f=y()+1;let j=M1(z,f),D=N.createHref(z);try{m.pushState(j,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(D)}u&&p&&p({action:h,location:N.location,delta:1})}function b(T,E){h="REPLACE";let z=tu(N.location,T,E);f=y();let j=M1(z,f),D=N.createHref(z);m.replaceState(j,"",D),u&&p&&p({action:h,location:N.location,delta:0})}function S(T){return kf(T)}let N={get action(){return h},get location(){return e(l,m)},listen(T){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(A1,x),p=T,()=>{l.removeEventListener(A1,x),p=null}},createHref(T){return n(l,T)},createURL:S,encodeLocation(T){let E=S(T);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:b,go(T){return m.go(T)}};return N}function kf(e,n=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Bt(o,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:fi(e);return s=s.replace(/ $/,"%20"),!n&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function k0(e,n,o="/"){return Tf(e,n,o,!1)}function Tf(e,n,o,s){let l=typeof n=="string"?so(n):n,u=Tn(l.pathname||"/",o);if(u==null)return null;let m=T0(e);jf(m);let h=null;for(let p=0;h==null&&p<m.length;++p){let f=Df(u);h=Rf(m[p],f,s)}return h}function T0(e,n=[],o=[],s="",l=!1){let u=(m,h,p=l,f)=>{let y={relativePath:f===void 0?m.path||"":f,caseSensitive:m.caseSensitive===!0,childrenIndex:h,route:m};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&p)return;Bt(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let x=vn([s,y.relativePath]),w=o.concat(y);m.children&&m.children.length>0&&(Bt(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),T0(m.children,n,w,x,p)),!(m.path==null&&!m.index)&&n.push({path:x,score:Af(x,m.index),routesMeta:w})};return e.forEach((m,h)=>{if(m.path===""||!m.path?.includes("?"))u(m,h);else for(let p of j0(m.path))u(m,h,!0,p)}),n}function j0(e){let n=e.split("/");if(n.length===0)return[];let[o,...s]=n,l=o.endsWith("?"),u=o.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let m=j0(s.join("/")),h=[];return h.push(...m.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...m),h.map(p=>e.startsWith("/")&&p===""?"/":p)}function jf(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:Mf(n.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var Nf=/^:[\w-]+$/,Cf=3,Sf=2,Pf=1,zf=10,Ef=-2,R1=e=>e==="*";function Af(e,n){let o=e.split("/"),s=o.length;return o.some(R1)&&(s+=Ef),n&&(s+=Sf),o.filter(l=>!R1(l)).reduce((l,u)=>l+(Nf.test(u)?Cf:u===""?Pf:zf),s)}function Mf(e,n){return e.length===n.length&&e.slice(0,-1).every((s,l)=>s===n[l])?e[e.length-1]-n[n.length-1]:0}function Rf(e,n,o=!1){let{routesMeta:s}=e,l={},u="/",m=[];for(let h=0;h<s.length;++h){let p=s[h],f=h===s.length-1,y=u==="/"?n:n.slice(u.length)||"/",x=os({path:p.relativePath,caseSensitive:p.caseSensitive,end:f},y),w=p.route;if(!x&&f&&o&&!s[s.length-1].route.index&&(x=os({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(l,x.params),m.push({params:l,pathname:vn([u,x.pathname]),pathnameBase:Of(vn([u,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(u=vn([u,x.pathnameBase]))}return m}function os(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,s]=$f(e.path,e.caseSensitive,e.end),l=n.match(o);if(!l)return null;let u=l[0],m=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((f,{paramName:y,isOptional:x},w)=>{if(y==="*"){let S=h[w]||"";m=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const b=h[w];return x&&!b?f[y]=void 0:f[y]=(b||"").replace(/%2F/g,"/"),f},{}),pathname:u,pathnameBase:m,pattern:e}}function $f(e,n=!1,o=!0){Xe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),s]}function Df(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Xe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Tn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,s=e.charAt(o);return s&&s!=="/"?null:e.slice(o)||"/"}var Lf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function If(e,n="/"){let{pathname:o,search:s="",hash:l=""}=typeof e=="string"?so(e):e,u;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?u=$1(o.substring(1),"/"):u=$1(o,n)):u=n,{pathname:u,search:Ff(s),hash:Vf(l)}}function $1(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?o.length>1&&o.pop():l!=="."&&o.push(l)}),o.length>1?o.join("/"):"/"}function Sc(e,n,o,s){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bf(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function zu(e){let n=Bf(e);return n.map((o,s)=>s===n.length-1?o.pathname:o.pathnameBase)}function Eu(e,n,o,s=!1){let l;typeof e=="string"?l=so(e):(l={...e},Bt(!l.pathname||!l.pathname.includes("?"),Sc("?","pathname","search",l)),Bt(!l.pathname||!l.pathname.includes("#"),Sc("#","pathname","hash",l)),Bt(!l.search||!l.search.includes("#"),Sc("#","search","hash",l)));let u=e===""||l.pathname==="",m=u?"/":l.pathname,h;if(m==null)h=o;else{let x=n.length-1;if(!s&&m.startsWith("..")){let w=m.split("/");for(;w[0]==="..";)w.shift(),x-=1;l.pathname=w.join("/")}h=x>=0?n[x]:"/"}let p=If(l,h),f=m&&m!=="/"&&m.endsWith("/"),y=(u||m===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(f||y)&&(p.pathname+="/"),p}var vn=e=>e.join("/").replace(/\/\/+/g,"/"),Of=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ff=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Gf=class{constructor(e,n,o,s=!1){this.status=e,this.statusText=n||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function _f(e){return e.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function C0(e,n){let o=e;if(typeof o!="string"||!Lf.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let s=o,l=!1;if(N0)try{let u=new URL(window.location.href),m=o.startsWith("//")?new URL(u.protocol+o):new URL(o),h=Tn(m.pathname,n);m.origin===u.origin&&h!=null?o=h+m.search+m.hash:l=!0}catch{Xe(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var S0=["POST","PUT","PATCH","DELETE"];new Set(S0);var Hf=["GET",...S0];new Set(Hf);var lo=v.createContext(null);lo.displayName="DataRouter";var xs=v.createContext(null);xs.displayName="DataRouterState";var Uf=v.createContext(!1),P0=v.createContext({isTransitioning:!1});P0.displayName="ViewTransition";var qf=v.createContext(new Map);qf.displayName="Fetchers";var Yf=v.createContext(null);Yf.displayName="Await";var Me=v.createContext(null);Me.displayName="Navigation";var ki=v.createContext(null);ki.displayName="Location";var Je=v.createContext({outlet:null,matches:[],isDataRoute:!1});Je.displayName="Route";var Au=v.createContext(null);Au.displayName="RouteError";var z0="REACT_ROUTER_ERROR",Qf="REDIRECT",Xf="ROUTE_ERROR_RESPONSE";function Jf(e){if(e.startsWith(`${z0}:${Qf}:{`))try{let n=JSON.parse(e.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Zf(e){if(e.startsWith(`${z0}:${Xf}:{`))try{let n=JSON.parse(e.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new Gf(n.status,n.statusText,n.data)}catch{}}function tg(e,{relative:n}={}){Bt(co(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=v.useContext(Me),{hash:l,pathname:u,search:m}=Ti(e,{relative:n}),h=u;return o!=="/"&&(h=u==="/"?o:vn([o,u])),s.createHref({pathname:h,search:m,hash:l})}function co(){return v.useContext(ki)!=null}function ln(){return Bt(co(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(ki).location}var E0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function A0(e){v.useContext(Me).static||v.useLayoutEffect(e)}function Mu(){let{isDataRoute:e}=v.useContext(Je);return e?hg():eg()}function eg(){Bt(co(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(lo),{basename:n,navigator:o}=v.useContext(Me),{matches:s}=v.useContext(Je),{pathname:l}=ln(),u=JSON.stringify(zu(s)),m=v.useRef(!1);return A0(()=>{m.current=!0}),v.useCallback((p,f={})=>{if(Xe(m.current,E0),!m.current)return;if(typeof p=="number"){o.go(p);return}let y=Eu(p,JSON.parse(u),l,f.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:vn([n,y.pathname])),(f.replace?o.replace:o.push)(y,f.state,f)},[n,o,u,l,e])}v.createContext(null);function M0(){let{matches:e}=v.useContext(Je),n=e[e.length-1];return n?n.params:{}}function Ti(e,{relative:n}={}){let{matches:o}=v.useContext(Je),{pathname:s}=ln(),l=JSON.stringify(zu(o));return v.useMemo(()=>Eu(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function ng(e,n){return R0(e,n)}function R0(e,n,o,s,l){Bt(co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=v.useContext(Me),{matches:m}=v.useContext(Je),h=m[m.length-1],p=h?h.params:{},f=h?h.pathname:"/",y=h?h.pathnameBase:"/",x=h&&h.route;{let z=x&&x.path||"";D0(f,!x||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let w=ln(),b;if(n){let z=typeof n=="string"?so(n):n;Bt(y==="/"||z.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${z.pathname}" was given in the \`location\` prop.`),b=z}else b=w;let S=b.pathname||"/",N=S;if(y!=="/"){let z=y.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(z.length).join("/")}let T=k0(e,{pathname:N});Xe(x||T!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Xe(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=sg(T&&T.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:vn([y,u.encodeLocation?u.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:vn([y,u.encodeLocation?u.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),m,o,s,l);return n&&E?v.createElement(ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},E):E}function rg(){let e=dg(),n=Wf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},m=null;return console.error("Error handled by React Router default ErrorBoundary:",e),m=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:u},"ErrorBoundary")," or"," ",v.createElement("code",{style:u},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),o?v.createElement("pre",{style:l},o):null,m)}var og=v.createElement(rg,null),$0=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const o=Zf(e.digest);o&&(e=o)}let n=e!==void 0?v.createElement(Je.Provider,{value:this.props.routeContext},v.createElement(Au.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(ig,{error:e},n):n}};$0.contextType=Uf;var Pc=new WeakMap;function ig({children:e,error:n}){let{basename:o}=v.useContext(Me);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let s=Jf(n.digest);if(s){let l=Pc.get(n);if(l)throw l;let u=C0(s.location,o);if(N0&&!Pc.get(n))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw Pc.set(n,m),m}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function ag({routeContext:e,match:n,children:o}){let s=v.useContext(lo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Je.Provider,{value:e},o)}function sg(e,n=[],o=null,s=null,l=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let u=e,m=o?.errors;if(m!=null){let y=u.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);Bt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let h=!1,p=-1;if(o)for(let y=0;y<u.length;y++){let x=u[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=y),x.route.id){let{loaderData:w,errors:b}=o,S=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!b||b[x.route.id]===void 0);if(x.route.lazy||S){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let f=o&&s?(y,x)=>{s(y,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:_f(o.matches),errorInfo:x})}:void 0;return u.reduceRight((y,x,w)=>{let b,S=!1,N=null,T=null;o&&(b=m&&x.route.id?m[x.route.id]:void 0,N=x.route.errorElement||og,h&&(p<0&&w===0?(D0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===w&&(S=!0,T=x.route.hydrateFallbackElement||null)));let E=n.concat(u.slice(0,w+1)),z=()=>{let j;return b?j=N:S?j=T:x.route.Component?j=v.createElement(x.route.Component,null):x.route.element?j=x.route.element:j=y,v.createElement(ag,{match:x,routeContext:{outlet:y,matches:E,isDataRoute:o!=null},children:j})};return o&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?v.createElement($0,{location:o.location,revalidation:o.revalidation,component:N,error:b,children:z(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:f}):z()},null)}function Ru(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lg(e){let n=v.useContext(lo);return Bt(n,Ru(e)),n}function cg(e){let n=v.useContext(xs);return Bt(n,Ru(e)),n}function ug(e){let n=v.useContext(Je);return Bt(n,Ru(e)),n}function $u(e){let n=ug(e),o=n.matches[n.matches.length-1];return Bt(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function mg(){return $u("useRouteId")}function dg(){let e=v.useContext(Au),n=cg("useRouteError"),o=$u("useRouteError");return e!==void 0?e:n.errors?.[o]}function hg(){let{router:e}=lg("useNavigate"),n=$u("useNavigate"),o=v.useRef(!1);return A0(()=>{o.current=!0}),v.useCallback(async(l,u={})=>{Xe(o.current,E0),o.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:n,...u}))},[e,n])}var D1={};function D0(e,n,o){!n&&!D1[e]&&(D1[e]=!0,Xe(!1,o))}v.memo(pg);function pg({routes:e,future:n,state:o,onError:s}){return R0(e,void 0,o,s,n)}function L0({to:e,replace:n,state:o,relative:s}){Bt(co(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=v.useContext(Me);Xe(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=v.useContext(Je),{pathname:m}=ln(),h=Mu(),p=Eu(e,zu(u),m,s==="path"),f=JSON.stringify(p);return v.useEffect(()=>{h(JSON.parse(f),{replace:n,state:o,relative:s})},[h,f,s,n,o]),null}function ie(e){Bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fg({basename:e="/",children:n=null,location:o,navigationType:s="POP",navigator:l,static:u=!1,unstable_useTransitions:m}){Bt(!co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),p=v.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:m,future:{}}),[h,l,u,m]);typeof o=="string"&&(o=so(o));let{pathname:f="/",search:y="",hash:x="",state:w=null,key:b="default"}=o,S=v.useMemo(()=>{let N=Tn(f,h);return N==null?null:{location:{pathname:N,search:y,hash:x,state:w,key:b},navigationType:s}},[h,f,y,x,w,b,s]);return Xe(S!=null,`<Router basename="${h}"> is not able to match the URL "${f}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:v.createElement(Me.Provider,{value:p},v.createElement(ki.Provider,{children:n,value:S}))}function gg({children:e,location:n}){return ng(eu(e),n)}function eu(e,n=[]){let o=[];return v.Children.forEach(e,(s,l)=>{if(!v.isValidElement(s))return;let u=[...n,l];if(s.type===v.Fragment){o.push.apply(o,eu(s.props.children,u));return}Bt(s.type===ie,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Bt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let m={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(m.children=eu(s.props.children,u)),o.push(m)}),o}var Xa="get",Ja="application/x-www-form-urlencoded";function Ks(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function yg(e){return Ks(e)&&e.tagName.toLowerCase()==="button"}function xg(e){return Ks(e)&&e.tagName.toLowerCase()==="form"}function Kg(e){return Ks(e)&&e.tagName.toLowerCase()==="input"}function wg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vg(e,n){return e.button===0&&(!n||n==="_self")&&!wg(e)}var Va=null;function bg(){if(Va===null)try{new FormData(document.createElement("form"),0),Va=!1}catch{Va=!0}return Va}var kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(e){return e!=null&&!kg.has(e)?(Xe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ja}"`),null):e}function Tg(e,n){let o,s,l,u,m;if(xg(e)){let h=e.getAttribute("action");s=h?Tn(h,n):null,o=e.getAttribute("method")||Xa,l=zc(e.getAttribute("enctype"))||Ja,u=new FormData(e)}else if(yg(e)||Kg(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||h.getAttribute("action");if(s=p?Tn(p,n):null,o=e.getAttribute("formmethod")||h.getAttribute("method")||Xa,l=zc(e.getAttribute("formenctype"))||zc(h.getAttribute("enctype"))||Ja,u=new FormData(h,e),!bg()){let{name:f,type:y,value:x}=e;if(y==="image"){let w=f?`${f}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else f&&u.append(f,x)}}else{if(Ks(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Xa,s=null,l=Ja,m=e}return u&&l==="text/plain"&&(m=u,u=void 0),{action:s,method:o.toLowerCase(),encType:l,formData:u,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Du(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function jg(e,n,o,s){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:n&&Tn(l.pathname,n)==="/"?l.pathname=`${n.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function Ng(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cg(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sg(e,n,o){let s=await Promise.all(e.map(async l=>{let u=n.routes[l.route.id];if(u){let m=await Ng(u,o);return m.links?m.links():[]}return[]}));return Ag(s.flat(1).filter(Cg).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function L1(e,n,o,s,l,u){let m=(p,f)=>o[f]?p.route.id!==o[f].route.id:!0,h=(p,f)=>o[f].pathname!==p.pathname||o[f].route.path?.endsWith("*")&&o[f].params["*"]!==p.params["*"];return u==="assets"?n.filter((p,f)=>m(p,f)||h(p,f)):u==="data"?n.filter((p,f)=>{let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(m(p,f)||h(p,f))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Pg(e,n,{includeHydrateFallback:o}={}){return zg(e.map(s=>{let l=n.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),o&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function zg(e){return[...new Set(e)]}function Eg(e){let n={},o=Object.keys(e).sort();for(let s of o)n[s]=e[s];return n}function Ag(e,n){let o=new Set;return new Set(n),e.reduce((s,l)=>{let u=JSON.stringify(Eg(l));return o.has(u)||(o.add(u),s.push({key:u,link:l})),s},[])}function I0(){let e=v.useContext(lo);return Du(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Mg(){let e=v.useContext(xs);return Du(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Lu=v.createContext(void 0);Lu.displayName="FrameworkContext";function B0(){let e=v.useContext(Lu);return Du(e,"You must render this element inside a <HydratedRouter> element"),e}function Rg(e,n){let o=v.useContext(Lu),[s,l]=v.useState(!1),[u,m]=v.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:f,onMouseLeave:y,onTouchStart:x}=n,w=v.useRef(null);v.useEffect(()=>{if(e==="render"&&m(!0),e==="viewport"){let N=E=>{E.forEach(z=>{m(z.isIntersecting)})},T=new IntersectionObserver(N,{threshold:.5});return w.current&&T.observe(w.current),()=>{T.disconnect()}}},[e]),v.useEffect(()=>{if(s){let N=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(N)}}},[s]);let b=()=>{l(!0)},S=()=>{l(!1),m(!1)};return o?e!=="intent"?[u,w,{}]:[u,w,{onFocus:ti(h,b),onBlur:ti(p,S),onMouseEnter:ti(f,b),onMouseLeave:ti(y,S),onTouchStart:ti(x,b)}]:[!1,w,{}]}function ti(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function $g({page:e,...n}){let{router:o}=I0(),s=v.useMemo(()=>k0(o.routes,e,o.basename),[o.routes,e,o.basename]);return s?v.createElement(Lg,{page:e,matches:s,...n}):null}function Dg(e){let{manifest:n,routeModules:o}=B0(),[s,l]=v.useState([]);return v.useEffect(()=>{let u=!1;return Sg(e,n,o).then(m=>{u||l(m)}),()=>{u=!0}},[e,n,o]),s}function Lg({page:e,matches:n,...o}){let s=ln(),{future:l,manifest:u,routeModules:m}=B0(),{basename:h}=I0(),{loaderData:p,matches:f}=Mg(),y=v.useMemo(()=>L1(e,n,f,u,s,"data"),[e,n,f,u,s]),x=v.useMemo(()=>L1(e,n,f,u,s,"assets"),[e,n,f,u,s]),w=v.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let N=new Set,T=!1;if(n.forEach(z=>{let j=u.routes[z.route.id];!j||!j.hasLoader||(!y.some(D=>D.route.id===z.route.id)&&z.route.id in p&&m[z.route.id]?.shouldRevalidate||j.hasClientLoader?T=!0:N.add(z.route.id))}),N.size===0)return[];let E=jg(e,h,l.unstable_trailingSlashAwareDataRequests,"data");return T&&N.size>0&&E.searchParams.set("_routes",n.filter(z=>N.has(z.route.id)).map(z=>z.route.id).join(",")),[E.pathname+E.search]},[h,l.unstable_trailingSlashAwareDataRequests,p,s,u,y,n,e,m]),b=v.useMemo(()=>Pg(x,u),[x,u]),S=Dg(x);return v.createElement(v.Fragment,null,w.map(N=>v.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...o})),b.map(N=>v.createElement("link",{key:N,rel:"modulepreload",href:N,...o})),S.map(({key:N,link:T})=>v.createElement("link",{key:N,nonce:o.nonce,...T,crossOrigin:T.crossOrigin??o.crossOrigin})))}function Ig(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bg&&(window.__reactRouterVersion="7.13.0")}catch{}function Og({basename:e,children:n,unstable_useTransitions:o,window:s}){let l=v.useRef();l.current==null&&(l.current=wf({window:s,v5Compat:!0}));let u=l.current,[m,h]=v.useState({action:u.action,location:u.location}),p=v.useCallback(f=>{o===!1?h(f):v.startTransition(()=>h(f))},[o]);return v.useLayoutEffect(()=>u.listen(p),[u,p]),v.createElement(fg,{basename:e,children:n,location:m.location,navigationType:m.action,navigator:u,unstable_useTransitions:o})}var O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_=v.forwardRef(function({onClick:n,discover:o="render",prefetch:s="none",relative:l,reloadDocument:u,replace:m,state:h,target:p,to:f,preventScrollReset:y,viewTransition:x,unstable_defaultShouldRevalidate:w,...b},S){let{basename:N,unstable_useTransitions:T}=v.useContext(Me),E=typeof f=="string"&&O0.test(f),z=C0(f,N);f=z.to;let j=tg(f,{relative:l}),[D,L,W]=Rg(s,b),U=Wg(f,{replace:m,state:h,target:p,preventScrollReset:y,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:w,unstable_useTransitions:T});function q(dt){n&&n(dt),dt.defaultPrevented||U(dt)}let ct=v.createElement("a",{...b,...W,href:z.absoluteURL||j,onClick:z.isExternal||u?n:q,ref:Ig(S,L),target:p,"data-discover":!E&&o==="render"?"true":void 0});return D&&!E?v.createElement(v.Fragment,null,ct,v.createElement($g,{page:j})):ct});_.displayName="Link";var Fg=v.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:s="",end:l=!1,style:u,to:m,viewTransition:h,children:p,...f},y){let x=Ti(m,{relative:f.relative}),w=ln(),b=v.useContext(xs),{navigator:S,basename:N}=v.useContext(Me),T=b!=null&&Yg(x)&&h===!0,E=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,z=w.pathname,j=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;o||(z=z.toLowerCase(),j=j?j.toLowerCase():null,E=E.toLowerCase()),j&&N&&(j=Tn(j,N)||j);const D=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let L=z===E||!l&&z.startsWith(E)&&z.charAt(D)==="/",W=j!=null&&(j===E||!l&&j.startsWith(E)&&j.charAt(E.length)==="/"),U={isActive:L,isPending:W,isTransitioning:T},q=L?n:void 0,ct;typeof s=="function"?ct=s(U):ct=[s,L?"active":null,W?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let dt=typeof u=="function"?u(U):u;return v.createElement(_,{...f,"aria-current":q,className:ct,ref:y,style:dt,to:m,viewTransition:h},typeof p=="function"?p(U):p)});Fg.displayName="NavLink";var Vg=v.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:s,replace:l,state:u,method:m=Xa,action:h,onSubmit:p,relative:f,preventScrollReset:y,viewTransition:x,unstable_defaultShouldRevalidate:w,...b},S)=>{let{unstable_useTransitions:N}=v.useContext(Me),T=Ug(),E=qg(h,{relative:f}),z=m.toLowerCase()==="get"?"get":"post",j=typeof h=="string"&&O0.test(h),D=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let W=L.nativeEvent.submitter,U=W?.getAttribute("formmethod")||m,q=()=>T(W||L.currentTarget,{fetcherKey:n,method:U,navigate:o,replace:l,state:u,relative:f,preventScrollReset:y,viewTransition:x,unstable_defaultShouldRevalidate:w});N&&o!==!1?v.startTransition(()=>q()):q()};return v.createElement("form",{ref:S,method:z,action:E,onSubmit:s?p:D,...b,"data-discover":!j&&e==="render"?"true":void 0})});Vg.displayName="Form";function Gg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F0(e){let n=v.useContext(lo);return Bt(n,Gg(e)),n}function Wg(e,{target:n,replace:o,state:s,preventScrollReset:l,relative:u,viewTransition:m,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let f=Mu(),y=ln(),x=Ti(e,{relative:u});return v.useCallback(w=>{if(vg(w,n)){w.preventDefault();let b=o!==void 0?o:fi(y)===fi(x),S=()=>f(e,{replace:b,state:s,preventScrollReset:l,relative:u,viewTransition:m,unstable_defaultShouldRevalidate:h});p?v.startTransition(()=>S()):S()}},[y,f,x,o,s,n,e,l,u,m,h,p])}var _g=0,Hg=()=>`__${String(++_g)}__`;function Ug(){let{router:e}=F0("useSubmit"),{basename:n}=v.useContext(Me),o=mg(),s=e.fetch,l=e.navigate;return v.useCallback(async(u,m={})=>{let{action:h,method:p,encType:f,formData:y,body:x}=Tg(u,n);if(m.navigate===!1){let w=m.fetcherKey||Hg();await s(w,o,m.action||h,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:y,body:x,formMethod:m.method||p,formEncType:m.encType||f,flushSync:m.flushSync})}else await l(m.action||h,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:y,body:x,formMethod:m.method||p,formEncType:m.encType||f,replace:m.replace,state:m.state,fromRouteId:o,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,l,n,o])}function qg(e,{relative:n}={}){let{basename:o}=v.useContext(Me),s=v.useContext(Je);Bt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Ti(e||".",{relative:n})},m=ln();if(e==null){u.search=m.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(x=>x).forEach(x=>h.append("index",x));let y=h.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:vn([o,u.pathname])),fi(u)}function Yg(e,{relative:n}={}){let o=v.useContext(P0);Bt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=F0("useViewTransitionState"),l=Ti(e,{relative:n});if(!o.isTransitioning)return!1;let u=Tn(o.currentLocation.pathname,s)||o.currentLocation.pathname,m=Tn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return os(l.pathname,m)!=null||os(l.pathname,u)!=null}var Iu=b0();const Qg=wr(Iu),Xg=()=>{const{pathname:e}=ln();return v.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[e]),null};var Ec={exports:{}},Ac,I1;function Jg(){if(I1)return Ac;I1=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ac=e,Ac}var Mc,B1;function Zg(){if(B1)return Mc;B1=1;var e=Jg();function n(){}function o(){}return o.resetWarningCache=n,Mc=function(){function s(m,h,p,f,y,x){if(x!==e){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:n};return u.PropTypes=u,u},Mc}var O1;function t8(){return O1||(O1=1,Ec.exports=Zg()()),Ec.exports}var e8=t8();const Dt=wr(e8);var Rc,F1;function n8(){if(F1)return Rc;F1=1;function e(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var n=ys(),o=e(n);function s(h,p,f){return p in h?Object.defineProperty(h,p,{value:f,enumerable:!0,configurable:!0,writable:!0}):h[p]=f,h}function l(h,p){h.prototype=Object.create(p.prototype),h.prototype.constructor=h,h.__proto__=p}var u=!!(typeof window<"u"&&window.document&&window.document.createElement);function m(h,p,f){if(typeof h!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof p!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof f<"u"&&typeof f!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function y(x){return x.displayName||x.name||"Component"}return function(w){if(typeof w!="function")throw new Error("Expected WrappedComponent to be a React component.");var b=[],S;function N(){S=h(b.map(function(E){return E.props})),T.canUseDOM?p(S):f&&(S=f(S))}var T=(function(E){l(z,E);function z(){return E.apply(this,arguments)||this}z.peek=function(){return S},z.rewind=function(){if(z.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var L=S;return S=void 0,b=[],L};var j=z.prototype;return j.UNSAFE_componentWillMount=function(){b.push(this),N()},j.componentDidUpdate=function(){N()},j.componentWillUnmount=function(){var L=b.indexOf(this);b.splice(L,1),N()},j.render=function(){return o.createElement(w,this.props)},z})(n.PureComponent);return s(T,"displayName","SideEffect("+y(w)+")"),s(T,"canUseDOM",u),T}}return Rc=m,Rc}var r8=n8();const o8=wr(r8);var $c,V1;function i8(){if(V1)return $c;V1=1;var e=typeof Element<"u",n=typeof Map=="function",o=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(u,m){if(u===m)return!0;if(u&&m&&typeof u=="object"&&typeof m=="object"){if(u.constructor!==m.constructor)return!1;var h,p,f;if(Array.isArray(u)){if(h=u.length,h!=m.length)return!1;for(p=h;p--!==0;)if(!l(u[p],m[p]))return!1;return!0}var y;if(n&&u instanceof Map&&m instanceof Map){if(u.size!==m.size)return!1;for(y=u.entries();!(p=y.next()).done;)if(!m.has(p.value[0]))return!1;for(y=u.entries();!(p=y.next()).done;)if(!l(p.value[1],m.get(p.value[0])))return!1;return!0}if(o&&u instanceof Set&&m instanceof Set){if(u.size!==m.size)return!1;for(y=u.entries();!(p=y.next()).done;)if(!m.has(p.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(m)){if(h=u.length,h!=m.length)return!1;for(p=h;p--!==0;)if(u[p]!==m[p])return!1;return!0}if(u.constructor===RegExp)return u.source===m.source&&u.flags===m.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof m.valueOf=="function")return u.valueOf()===m.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof m.toString=="function")return u.toString()===m.toString();if(f=Object.keys(u),h=f.length,h!==Object.keys(m).length)return!1;for(p=h;p--!==0;)if(!Object.prototype.hasOwnProperty.call(m,f[p]))return!1;if(e&&u instanceof Element)return!1;for(p=h;p--!==0;)if(!((f[p]==="_owner"||f[p]==="__v"||f[p]==="__o")&&u.$$typeof)&&!l(u[f[p]],m[f[p]]))return!1;return!0}return u!==u&&m!==m}return $c=function(m,h){try{return l(m,h)}catch(p){if((p.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw p}},$c}var a8=i8();const s8=wr(a8);var Dc,G1;function l8(){if(G1)return Dc;G1=1;var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(u){if(u==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(u)}function l(){try{if(!Object.assign)return!1;var u=new String("abc");if(u[5]="de",Object.getOwnPropertyNames(u)[0]==="5")return!1;for(var m={},h=0;h<10;h++)m["_"+String.fromCharCode(h)]=h;var p=Object.getOwnPropertyNames(m).map(function(y){return m[y]});if(p.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(y){f[y]=y}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Dc=l()?Object.assign:function(u,m){for(var h,p=s(u),f,y=1;y<arguments.length;y++){h=Object(arguments[y]);for(var x in h)n.call(h,x)&&(p[x]=h[x]);if(e){f=e(h);for(var w=0;w<f.length;w++)o.call(h,f[w])&&(p[f[w]]=h[f[w]])}}return p},Dc}var c8=l8();const u8=wr(c8);var yr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},mt={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(mt).map(function(e){return mt[e]});var Lt={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},is={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},gi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},m8=Object.keys(is).reduce(function(e,n){return e[is[n]]=n,e},{}),d8=[mt.NOSCRIPT,mt.SCRIPT,mt.STYLE],Qe="data-react-helmet",h8=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p8=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},f8=(function(){function e(n,o){for(var s=0;s<o.length;s++){var l=o[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,o,s){return o&&e(n.prototype,o),s&&e(n,s),n}})(),Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},g8=function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},W1=function(e,n){var o={};for(var s in e)n.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s]);return o},y8=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e},nu=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x8=function(n){var o=to(n,mt.TITLE),s=to(n,gi.TITLE_TEMPLATE);if(s&&o)return s.replace(/%s/g,function(){return Array.isArray(o)?o.join(""):o});var l=to(n,gi.DEFAULT_TITLE);return o||l||void 0},K8=function(n){return to(n,gi.ON_CHANGE_CLIENT_STATE)||function(){}},Lc=function(n,o){return o.filter(function(s){return typeof s[n]<"u"}).map(function(s){return s[n]}).reduce(function(s,l){return Te({},s,l)},{})},w8=function(n,o){return o.filter(function(s){return typeof s[mt.BASE]<"u"}).map(function(s){return s[mt.BASE]}).reverse().reduce(function(s,l){if(!s.length)for(var u=Object.keys(l),m=0;m<u.length;m++){var h=u[m],p=h.toLowerCase();if(n.indexOf(p)!==-1&&l[p])return s.concat(l)}return s},[])},ei=function(n,o,s){var l={};return s.filter(function(u){return Array.isArray(u[n])?!0:(typeof u[n]<"u"&&T8("Helmet: "+n+' should be of type "Array". Instead found type "'+h8(u[n])+'"'),!1)}).map(function(u){return u[n]}).reverse().reduce(function(u,m){var h={};m.filter(function(w){for(var b=void 0,S=Object.keys(w),N=0;N<S.length;N++){var T=S[N],E=T.toLowerCase();o.indexOf(E)!==-1&&!(b===Lt.REL&&w[b].toLowerCase()==="canonical")&&!(E===Lt.REL&&w[E].toLowerCase()==="stylesheet")&&(b=E),o.indexOf(T)!==-1&&(T===Lt.INNER_HTML||T===Lt.CSS_TEXT||T===Lt.ITEM_PROP)&&(b=T)}if(!b||!w[b])return!1;var z=w[b].toLowerCase();return l[b]||(l[b]={}),h[b]||(h[b]={}),l[b][z]?!1:(h[b][z]=!0,!0)}).reverse().forEach(function(w){return u.push(w)});for(var p=Object.keys(h),f=0;f<p.length;f++){var y=p[f],x=u8({},l[y],h[y]);l[y]=x}return u},[]).reverse()},to=function(n,o){for(var s=n.length-1;s>=0;s--){var l=n[s];if(l.hasOwnProperty(o))return l[o]}return null},v8=function(n){return{baseTag:w8([Lt.HREF,Lt.TARGET],n),bodyAttributes:Lc(yr.BODY,n),defer:to(n,gi.DEFER),encode:to(n,gi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Lc(yr.HTML,n),linkTags:ei(mt.LINK,[Lt.REL,Lt.HREF],n),metaTags:ei(mt.META,[Lt.NAME,Lt.CHARSET,Lt.HTTPEQUIV,Lt.PROPERTY,Lt.ITEM_PROP],n),noscriptTags:ei(mt.NOSCRIPT,[Lt.INNER_HTML],n),onChangeClientState:K8(n),scriptTags:ei(mt.SCRIPT,[Lt.SRC,Lt.INNER_HTML],n),styleTags:ei(mt.STYLE,[Lt.CSS_TEXT],n),title:x8(n),titleAttributes:Lc(yr.TITLE,n)}},ru=(function(){var e=Date.now();return function(n){var o=Date.now();o-e>16?(e=o,n(o)):setTimeout(function(){ru(n)},0)}})(),_1=function(n){return clearTimeout(n)},b8=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ru:global.requestAnimationFrame||ru,k8=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_1:global.cancelAnimationFrame||_1,T8=function(n){return console&&typeof console.warn=="function"&&console.warn(n)},ni=null,j8=function(n){ni&&k8(ni),n.defer?ni=b8(function(){H1(n,function(){ni=null})}):(H1(n),ni=null)},H1=function(n,o){var s=n.baseTag,l=n.bodyAttributes,u=n.htmlAttributes,m=n.linkTags,h=n.metaTags,p=n.noscriptTags,f=n.onChangeClientState,y=n.scriptTags,x=n.styleTags,w=n.title,b=n.titleAttributes;ou(mt.BODY,l),ou(mt.HTML,u),N8(w,b);var S={baseTag:qr(mt.BASE,s),linkTags:qr(mt.LINK,m),metaTags:qr(mt.META,h),noscriptTags:qr(mt.NOSCRIPT,p),scriptTags:qr(mt.SCRIPT,y),styleTags:qr(mt.STYLE,x)},N={},T={};Object.keys(S).forEach(function(E){var z=S[E],j=z.newTags,D=z.oldTags;j.length&&(N[E]=j),D.length&&(T[E]=S[E].oldTags)}),o&&o(),f(n,N,T)},V0=function(n){return Array.isArray(n)?n.join(""):n},N8=function(n,o){typeof n<"u"&&document.title!==n&&(document.title=V0(n)),ou(mt.TITLE,o)},ou=function(n,o){var s=document.getElementsByTagName(n)[0];if(s){for(var l=s.getAttribute(Qe),u=l?l.split(","):[],m=[].concat(u),h=Object.keys(o),p=0;p<h.length;p++){var f=h[p],y=o[f]||"";s.getAttribute(f)!==y&&s.setAttribute(f,y),u.indexOf(f)===-1&&u.push(f);var x=m.indexOf(f);x!==-1&&m.splice(x,1)}for(var w=m.length-1;w>=0;w--)s.removeAttribute(m[w]);u.length===m.length?s.removeAttribute(Qe):s.getAttribute(Qe)!==h.join(",")&&s.setAttribute(Qe,h.join(","))}},qr=function(n,o){var s=document.head||document.querySelector(mt.HEAD),l=s.querySelectorAll(n+"["+Qe+"]"),u=Array.prototype.slice.call(l),m=[],h=void 0;return o&&o.length&&o.forEach(function(p){var f=document.createElement(n);for(var y in p)if(p.hasOwnProperty(y))if(y===Lt.INNER_HTML)f.innerHTML=p.innerHTML;else if(y===Lt.CSS_TEXT)f.styleSheet?f.styleSheet.cssText=p.cssText:f.appendChild(document.createTextNode(p.cssText));else{var x=typeof p[y]>"u"?"":p[y];f.setAttribute(y,x)}f.setAttribute(Qe,"true"),u.some(function(w,b){return h=b,f.isEqualNode(w)})?u.splice(h,1):m.push(f)}),u.forEach(function(p){return p.parentNode.removeChild(p)}),m.forEach(function(p){return s.appendChild(p)}),{oldTags:u,newTags:m}},G0=function(n){return Object.keys(n).reduce(function(o,s){var l=typeof n[s]<"u"?s+'="'+n[s]+'"':""+s;return o?o+" "+l:l},"")},C8=function(n,o,s,l){var u=G0(s),m=V0(o);return u?"<"+n+" "+Qe+'="true" '+u+">"+nu(m,l)+"</"+n+">":"<"+n+" "+Qe+'="true">'+nu(m,l)+"</"+n+">"},S8=function(n,o,s){return o.reduce(function(l,u){var m=Object.keys(u).filter(function(f){return!(f===Lt.INNER_HTML||f===Lt.CSS_TEXT)}).reduce(function(f,y){var x=typeof u[y]>"u"?y:y+'="'+nu(u[y],s)+'"';return f?f+" "+x:x},""),h=u.innerHTML||u.cssText||"",p=d8.indexOf(n)===-1;return l+"<"+n+" "+Qe+'="true" '+m+(p?"/>":">"+h+"</"+n+">")},"")},W0=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(n).reduce(function(s,l){return s[is[l]||l]=n[l],s},o)},P8=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(n).reduce(function(s,l){return s[m8[l]||l]=n[l],s},o)},z8=function(n,o,s){var l,u=(l={key:o},l[Qe]=!0,l),m=W0(s,u);return[Xt.createElement(mt.TITLE,m,o)]},E8=function(n,o){return o.map(function(s,l){var u,m=(u={key:l},u[Qe]=!0,u);return Object.keys(s).forEach(function(h){var p=is[h]||h;if(p===Lt.INNER_HTML||p===Lt.CSS_TEXT){var f=s.innerHTML||s.cssText;m.dangerouslySetInnerHTML={__html:f}}else m[p]=s[h]}),Xt.createElement(n,m)})},xn=function(n,o,s){switch(n){case mt.TITLE:return{toComponent:function(){return z8(n,o.title,o.titleAttributes)},toString:function(){return C8(n,o.title,o.titleAttributes,s)}};case yr.BODY:case yr.HTML:return{toComponent:function(){return W0(o)},toString:function(){return G0(o)}};default:return{toComponent:function(){return E8(n,o)},toString:function(){return S8(n,o,s)}}}},_0=function(n){var o=n.baseTag,s=n.bodyAttributes,l=n.encode,u=n.htmlAttributes,m=n.linkTags,h=n.metaTags,p=n.noscriptTags,f=n.scriptTags,y=n.styleTags,x=n.title,w=x===void 0?"":x,b=n.titleAttributes;return{base:xn(mt.BASE,o,l),bodyAttributes:xn(yr.BODY,s,l),htmlAttributes:xn(yr.HTML,u,l),link:xn(mt.LINK,m,l),meta:xn(mt.META,h,l),noscript:xn(mt.NOSCRIPT,p,l),script:xn(mt.SCRIPT,f,l),style:xn(mt.STYLE,y,l),title:xn(mt.TITLE,{title:w,titleAttributes:b},l)}},A8=function(n){var o,s;return s=o=(function(l){g8(u,l);function u(){return p8(this,u),y8(this,l.apply(this,arguments))}return u.prototype.shouldComponentUpdate=function(h){return!s8(this.props,h)},u.prototype.mapNestedChildrenToProps=function(h,p){if(!p)return null;switch(h.type){case mt.SCRIPT:case mt.NOSCRIPT:return{innerHTML:p};case mt.STYLE:return{cssText:p}}throw new Error("<"+h.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},u.prototype.flattenArrayTypeChildren=function(h){var p,f=h.child,y=h.arrayTypeChildren,x=h.newChildProps,w=h.nestedChildren;return Te({},y,(p={},p[f.type]=[].concat(y[f.type]||[],[Te({},x,this.mapNestedChildrenToProps(f,w))]),p))},u.prototype.mapObjectTypeChildren=function(h){var p,f,y=h.child,x=h.newProps,w=h.newChildProps,b=h.nestedChildren;switch(y.type){case mt.TITLE:return Te({},x,(p={},p[y.type]=b,p.titleAttributes=Te({},w),p));case mt.BODY:return Te({},x,{bodyAttributes:Te({},w)});case mt.HTML:return Te({},x,{htmlAttributes:Te({},w)})}return Te({},x,(f={},f[y.type]=Te({},w),f))},u.prototype.mapArrayTypeChildrenToProps=function(h,p){var f=Te({},p);return Object.keys(h).forEach(function(y){var x;f=Te({},f,(x={},x[y]=h[y],x))}),f},u.prototype.warnOnInvalidChildren=function(h,p){return!0},u.prototype.mapChildrenToProps=function(h,p){var f=this,y={};return Xt.Children.forEach(h,function(x){if(!(!x||!x.props)){var w=x.props,b=w.children,S=W1(w,["children"]),N=P8(S);switch(f.warnOnInvalidChildren(x,b),x.type){case mt.LINK:case mt.META:case mt.NOSCRIPT:case mt.SCRIPT:case mt.STYLE:y=f.flattenArrayTypeChildren({child:x,arrayTypeChildren:y,newChildProps:N,nestedChildren:b});break;default:p=f.mapObjectTypeChildren({child:x,newProps:p,newChildProps:N,nestedChildren:b});break}}}),p=this.mapArrayTypeChildrenToProps(y,p),p},u.prototype.render=function(){var h=this.props,p=h.children,f=W1(h,["children"]),y=Te({},f);return p&&(y=this.mapChildrenToProps(p,y)),Xt.createElement(n,y)},f8(u,null,[{key:"canUseDOM",set:function(h){n.canUseDOM=h}}]),u})(Xt.Component),o.propTypes={base:Dt.object,bodyAttributes:Dt.object,children:Dt.oneOfType([Dt.arrayOf(Dt.node),Dt.node]),defaultTitle:Dt.string,defer:Dt.bool,encodeSpecialCharacters:Dt.bool,htmlAttributes:Dt.object,link:Dt.arrayOf(Dt.object),meta:Dt.arrayOf(Dt.object),noscript:Dt.arrayOf(Dt.object),onChangeClientState:Dt.func,script:Dt.arrayOf(Dt.object),style:Dt.arrayOf(Dt.object),title:Dt.string,titleAttributes:Dt.object,titleTemplate:Dt.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=n.peek,o.rewind=function(){var l=n.rewind();return l||(l=_0({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),l},s},M8=function(){return null},R8=o8(v8,j8,_0)(M8),Yn=A8(R8);Yn.renderStatic=Yn.rewind;const ri="https://guestpostplatform.com",$8={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${ri}/#organization`,name:"Guest Post Platform",url:ri,description:"A guest post marketplace and managed blogger outreach service for relevant editorial placements.",telephone:"+923025820230",founder:{"@type":"Person",name:"Kamran",sameAs:["https://www.linkedin.com/in/kamranofficialseo/"]},sameAs:["https://www.linkedin.com/in/kamranofficialseo/"]},{"@type":"WebSite","@id":`${ri}/#website`,url:ri,name:"Guest Post Platform",description:"Searchable guest post marketplace, blogger outreach and link insertion services with relevant publisher placements.",publisher:{"@id":`${ri}/#organization`}}]},D8=()=>i.jsx(Yn,{children:i.jsx("script",{type:"application/ld+json",children:JSON.stringify($8)})});function H0(e){var n,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(n=0;n<l;n++)e[n]&&(o=H0(e[n]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function U0(){for(var e,n,o=0,s="",l=arguments.length;o<l;o++)(e=arguments[o])&&(n=H0(e))&&(s&&(s+=" "),s+=n);return s}const Bu="-",L8=e=>{const n=B8(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:m=>{const h=m.split(Bu);return h[0]===""&&h.length!==1&&h.shift(),q0(h,n)||I8(m)},getConflictingClassGroupIds:(m,h)=>{const p=o[m]||[];return h&&s[m]?[...p,...s[m]]:p}}},q0=(e,n)=>{if(e.length===0)return n.classGroupId;const o=e[0],s=n.nextPart.get(o),l=s?q0(e.slice(1),s):void 0;if(l)return l;if(n.validators.length===0)return;const u=e.join(Bu);return n.validators.find(({validator:m})=>m(u))?.classGroupId},U1=/^\[(.+)\]$/,I8=e=>{if(U1.test(e)){const n=U1.exec(e)[1],o=n?.substring(0,n.indexOf(":"));if(o)return"arbitrary.."+o}},B8=e=>{const{theme:n,prefix:o}=e,s={nextPart:new Map,validators:[]};return F8(Object.entries(e.classGroups),o).forEach(([u,m])=>{iu(m,s,u,n)}),s},iu=(e,n,o,s)=>{e.forEach(l=>{if(typeof l=="string"){const u=l===""?n:q1(n,l);u.classGroupId=o;return}if(typeof l=="function"){if(O8(l)){iu(l(s),n,o,s);return}n.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(([u,m])=>{iu(m,q1(n,u),o,s)})})},q1=(e,n)=>{let o=e;return n.split(Bu).forEach(s=>{o.nextPart.has(s)||o.nextPart.set(s,{nextPart:new Map,validators:[]}),o=o.nextPart.get(s)}),o},O8=e=>e.isThemeGetter,F8=(e,n)=>n?e.map(([o,s])=>{const l=s.map(u=>typeof u=="string"?n+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([m,h])=>[n+m,h])):u);return[o,l]}):e,V8=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,o=new Map,s=new Map;const l=(u,m)=>{o.set(u,m),n++,n>e&&(n=0,s=o,o=new Map)};return{get(u){let m=o.get(u);if(m!==void 0)return m;if((m=s.get(u))!==void 0)return l(u,m),m},set(u,m){o.has(u)?o.set(u,m):l(u,m)}}},Y0="!",G8=e=>{const{separator:n,experimentalParseClassName:o}=e,s=n.length===1,l=n[0],u=n.length,m=h=>{const p=[];let f=0,y=0,x;for(let T=0;T<h.length;T++){let E=h[T];if(f===0){if(E===l&&(s||h.slice(T,T+u)===n)){p.push(h.slice(y,T)),y=T+u;continue}if(E==="/"){x=T;continue}}E==="["?f++:E==="]"&&f--}const w=p.length===0?h:h.substring(y),b=w.startsWith(Y0),S=b?w.substring(1):w,N=x&&x>y?x-y:void 0;return{modifiers:p,hasImportantModifier:b,baseClassName:S,maybePostfixModifierPosition:N}};return o?h=>o({className:h,parseClassName:m}):m},W8=e=>{if(e.length<=1)return e;const n=[];let o=[];return e.forEach(s=>{s[0]==="["?(n.push(...o.sort(),s),o=[]):o.push(s)}),n.push(...o.sort()),n},_8=e=>({cache:V8(e.cacheSize),parseClassName:G8(e),...L8(e)}),H8=/\s+/,U8=(e,n)=>{const{parseClassName:o,getClassGroupId:s,getConflictingClassGroupIds:l}=n,u=[],m=e.trim().split(H8);let h="";for(let p=m.length-1;p>=0;p-=1){const f=m[p],{modifiers:y,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:b}=o(f);let S=!!b,N=s(S?w.substring(0,b):w);if(!N){if(!S){h=f+(h.length>0?" "+h:h);continue}if(N=s(w),!N){h=f+(h.length>0?" "+h:h);continue}S=!1}const T=W8(y).join(":"),E=x?T+Y0:T,z=E+N;if(u.includes(z))continue;u.push(z);const j=l(N,S);for(let D=0;D<j.length;++D){const L=j[D];u.push(E+L)}h=f+(h.length>0?" "+h:h)}return h};function q8(){let e=0,n,o,s="";for(;e<arguments.length;)(n=arguments[e++])&&(o=Q0(n))&&(s&&(s+=" "),s+=o);return s}const Q0=e=>{if(typeof e=="string")return e;let n,o="";for(let s=0;s<e.length;s++)e[s]&&(n=Q0(e[s]))&&(o&&(o+=" "),o+=n);return o};function Y8(e,...n){let o,s,l,u=m;function m(p){const f=n.reduce((y,x)=>x(y),e());return o=_8(f),s=o.cache.get,l=o.cache.set,u=h,h(p)}function h(p){const f=s(p);if(f)return f;const y=U8(p,o);return l(p,y),y}return function(){return u(q8.apply(null,arguments))}}const Et=e=>{const n=o=>o[e]||[];return n.isThemeGetter=!0,n},X0=/^\[(?:([a-z-]+):)?(.+)\]$/i,Q8=/^\d+\/\d+$/,X8=new Set(["px","full","screen"]),J8=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Z8=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,t9=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,e9=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,n9=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Kn=e=>eo(e)||X8.has(e)||Q8.test(e),Hn=e=>uo(e,"length",u9),eo=e=>!!e&&!Number.isNaN(Number(e)),Ic=e=>uo(e,"number",eo),oi=e=>!!e&&Number.isInteger(Number(e)),r9=e=>e.endsWith("%")&&eo(e.slice(0,-1)),ht=e=>X0.test(e),Un=e=>J8.test(e),o9=new Set(["length","size","percentage"]),i9=e=>uo(e,o9,J0),a9=e=>uo(e,"position",J0),s9=new Set(["image","url"]),l9=e=>uo(e,s9,d9),c9=e=>uo(e,"",m9),ii=()=>!0,uo=(e,n,o)=>{const s=X0.exec(e);return s?s[1]?typeof n=="string"?s[1]===n:n.has(s[1]):o(s[2]):!1},u9=e=>Z8.test(e)&&!t9.test(e),J0=()=>!1,m9=e=>e9.test(e),d9=e=>n9.test(e),h9=()=>{const e=Et("colors"),n=Et("spacing"),o=Et("blur"),s=Et("brightness"),l=Et("borderColor"),u=Et("borderRadius"),m=Et("borderSpacing"),h=Et("borderWidth"),p=Et("contrast"),f=Et("grayscale"),y=Et("hueRotate"),x=Et("invert"),w=Et("gap"),b=Et("gradientColorStops"),S=Et("gradientColorStopPositions"),N=Et("inset"),T=Et("margin"),E=Et("opacity"),z=Et("padding"),j=Et("saturate"),D=Et("scale"),L=Et("sepia"),W=Et("skew"),U=Et("space"),q=Et("translate"),ct=()=>["auto","contain","none"],dt=()=>["auto","hidden","clip","visible","scroll"],Nt=()=>["auto",ht,n],ut=()=>[ht,n],Ht=()=>["",Kn,Hn],nt=()=>["auto",eo,ht],Mt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],kt=()=>["solid","dashed","dotted","double","none"],at=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",ht],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[eo,ht];return{cacheSize:500,separator:":",theme:{colors:[ii],spacing:[Kn,Hn],blur:["none","",Un,ht],brightness:A(),borderColor:[e],borderRadius:["none","","full",Un,ht],borderSpacing:ut(),borderWidth:Ht(),contrast:A(),grayscale:J(),hueRotate:A(),invert:J(),gap:ut(),gradientColorStops:[e],gradientColorStopPositions:[r9,Hn],inset:Nt(),margin:Nt(),opacity:A(),padding:ut(),saturate:A(),scale:A(),sepia:J(),skew:A(),space:ut(),translate:ut()},classGroups:{aspect:[{aspect:["auto","square","video",ht]}],container:["container"],columns:[{columns:[Un]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Mt(),ht]}],overflow:[{overflow:dt()}],"overflow-x":[{"overflow-x":dt()}],"overflow-y":[{"overflow-y":dt()}],overscroll:[{overscroll:ct()}],"overscroll-x":[{"overscroll-x":ct()}],"overscroll-y":[{"overscroll-y":ct()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",oi,ht]}],basis:[{basis:Nt()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ht]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",oi,ht]}],"grid-cols":[{"grid-cols":[ii]}],"col-start-end":[{col:["auto",{span:["full",oi,ht]},ht]}],"col-start":[{"col-start":nt()}],"col-end":[{"col-end":nt()}],"grid-rows":[{"grid-rows":[ii]}],"row-start-end":[{row:["auto",{span:[oi,ht]},ht]}],"row-start":[{"row-start":nt()}],"row-end":[{"row-end":nt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ht]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ht]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[z]}],px:[{px:[z]}],py:[{py:[z]}],ps:[{ps:[z]}],pe:[{pe:[z]}],pt:[{pt:[z]}],pr:[{pr:[z]}],pb:[{pb:[z]}],pl:[{pl:[z]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[U]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[U]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ht,n]}],"min-w":[{"min-w":[ht,n,"min","max","fit"]}],"max-w":[{"max-w":[ht,n,"none","full","min","max","fit","prose",{screen:[Un]},Un]}],h:[{h:[ht,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ht,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ht,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ht,n,"auto","min","max","fit"]}],"font-size":[{text:["base",Un,Hn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ic]}],"font-family":[{font:[ii]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ht]}],"line-clamp":[{"line-clamp":["none",eo,Ic]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Kn,ht]}],"list-image":[{"list-image":["none",ht]}],"list-style-type":[{list:["none","disc","decimal",ht]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...kt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Kn,Hn]}],"underline-offset":[{"underline-offset":["auto",Kn,ht]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ut()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ht]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ht]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Mt(),a9]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",i9]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},l9]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...kt(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:kt()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-s":[{"border-s":[l]}],"border-color-e":[{"border-e":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...kt()]}],"outline-offset":[{"outline-offset":[Kn,ht]}],"outline-w":[{outline:[Kn,Hn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Ht()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Kn,Hn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Un,c9]}],"shadow-color":[{shadow:[ii]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...at(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":at()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[s]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Un,ht]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[x]}],saturate:[{saturate:[j]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[m]}],"border-spacing-x":[{"border-spacing-x":[m]}],"border-spacing-y":[{"border-spacing-y":[m]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ht]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",ht]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",ht]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[oi,ht]}],"translate-x":[{"translate-x":[q]}],"translate-y":[{"translate-y":[q]}],"skew-x":[{"skew-x":[W]}],"skew-y":[{"skew-y":[W]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ht]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ht]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ut()}],"scroll-mx":[{"scroll-mx":ut()}],"scroll-my":[{"scroll-my":ut()}],"scroll-ms":[{"scroll-ms":ut()}],"scroll-me":[{"scroll-me":ut()}],"scroll-mt":[{"scroll-mt":ut()}],"scroll-mr":[{"scroll-mr":ut()}],"scroll-mb":[{"scroll-mb":ut()}],"scroll-ml":[{"scroll-ml":ut()}],"scroll-p":[{"scroll-p":ut()}],"scroll-px":[{"scroll-px":ut()}],"scroll-py":[{"scroll-py":ut()}],"scroll-ps":[{"scroll-ps":ut()}],"scroll-pe":[{"scroll-pe":ut()}],"scroll-pt":[{"scroll-pt":ut()}],"scroll-pr":[{"scroll-pr":ut()}],"scroll-pb":[{"scroll-pb":ut()}],"scroll-pl":[{"scroll-pl":ut()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ht]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Kn,Hn,Ic]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},p9=Y8(h9);function vr(...e){return p9(U0(e))}function ze(e,n,{checkForDefaultPrevented:o=!0}={}){return function(l){if(e?.(l),o===!1||!l.defaultPrevented)return n?.(l)}}function Y1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Z0(...e){return n=>{let o=!1;const s=e.map(l=>{const u=Y1(l,n);return!o&&typeof u=="function"&&(o=!0),u});if(o)return()=>{for(let l=0;l<s.length;l++){const u=s[l];typeof u=="function"?u():Y1(e[l],null)}}}}function Kr(...e){return v.useCallback(Z0(...e),e)}function th(e,n=[]){let o=[];function s(u,m){const h=v.createContext(m),p=o.length;o=[...o,m];const f=x=>{const{scope:w,children:b,...S}=x,N=w?.[e]?.[p]||h,T=v.useMemo(()=>S,Object.values(S));return i.jsx(N.Provider,{value:T,children:b})};f.displayName=u+"Provider";function y(x,w){const b=w?.[e]?.[p]||h,S=v.useContext(b);if(S)return S;if(m!==void 0)return m;throw new Error(`\`${x}\` must be used within \`${u}\``)}return[f,y]}const l=()=>{const u=o.map(m=>v.createContext(m));return function(h){const p=h?.[e]||u;return v.useMemo(()=>({[`__scope${e}`]:{...h,[e]:p}}),[h,p])}};return l.scopeName=e,[s,f9(l,...n)]}function f9(...e){const n=e[0];if(e.length===1)return n;const o=()=>{const s=e.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const m=s.reduce((h,{useScope:p,scopeName:f})=>{const x=p(u)[`__scope${f}`];return{...h,...x}},{});return v.useMemo(()=>({[`__scope${n.scopeName}`]:m}),[m])}};return o.scopeName=n.scopeName,o}var yi=v.forwardRef((e,n)=>{const{children:o,...s}=e,l=v.Children.toArray(o),u=l.find(y9);if(u){const m=u.props.children,h=l.map(p=>p===u?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:p);return i.jsx(au,{...s,ref:n,children:v.isValidElement(m)?v.cloneElement(m,void 0,h):null})}return i.jsx(au,{...s,ref:n,children:o})});yi.displayName="Slot";var au=v.forwardRef((e,n)=>{const{children:o,...s}=e;if(v.isValidElement(o)){const l=K9(o);return v.cloneElement(o,{...x9(s,o.props),ref:n?Z0(n,l):l})}return v.Children.count(o)>1?v.Children.only(null):null});au.displayName="SlotClone";var g9=({children:e})=>i.jsx(i.Fragment,{children:e});function y9(e){return v.isValidElement(e)&&e.type===g9}function x9(e,n){const o={...n};for(const s in n){const l=e[s],u=n[s];/^on[A-Z]/.test(s)?l&&u?o[s]=(...h)=>{u(...h),l(...h)}:l&&(o[s]=l):s==="style"?o[s]={...l,...u}:s==="className"&&(o[s]=[l,u].filter(Boolean).join(" "))}return{...e,...o}}function K9(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function w9(e){const n=e+"CollectionProvider",[o,s]=th(n),[l,u]=o(n,{collectionRef:{current:null},itemMap:new Map}),m=b=>{const{scope:S,children:N}=b,T=Xt.useRef(null),E=Xt.useRef(new Map).current;return i.jsx(l,{scope:S,itemMap:E,collectionRef:T,children:N})};m.displayName=n;const h=e+"CollectionSlot",p=Xt.forwardRef((b,S)=>{const{scope:N,children:T}=b,E=u(h,N),z=Kr(S,E.collectionRef);return i.jsx(yi,{ref:z,children:T})});p.displayName=h;const f=e+"CollectionItemSlot",y="data-radix-collection-item",x=Xt.forwardRef((b,S)=>{const{scope:N,children:T,...E}=b,z=Xt.useRef(null),j=Kr(S,z),D=u(f,N);return Xt.useEffect(()=>(D.itemMap.set(z,{ref:z,...E}),()=>{D.itemMap.delete(z)})),i.jsx(yi,{[y]:"",ref:j,children:T})});x.displayName=f;function w(b){const S=u(e+"CollectionConsumer",b);return Xt.useCallback(()=>{const T=S.collectionRef.current;if(!T)return[];const E=Array.from(T.querySelectorAll(`[${y}]`));return Array.from(S.itemMap.values()).sort((D,L)=>E.indexOf(D.ref.current)-E.indexOf(L.ref.current))},[S.collectionRef,S.itemMap])}return[{Provider:m,Slot:p,ItemSlot:x},w,s]}var v9=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],cn=v9.reduce((e,n)=>{const o=v.forwardRef((s,l)=>{const{asChild:u,...m}=s,h=u?yi:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(h,{...m,ref:l})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function eh(e,n){e&&Iu.flushSync(()=>e.dispatchEvent(n))}function jn(e){const n=v.useRef(e);return v.useEffect(()=>{n.current=e}),v.useMemo(()=>(...o)=>n.current?.(...o),[])}function b9(e,n=globalThis?.document){const o=jn(e);v.useEffect(()=>{const s=l=>{l.key==="Escape"&&o(l)};return n.addEventListener("keydown",s,{capture:!0}),()=>n.removeEventListener("keydown",s,{capture:!0})},[o,n])}var k9="DismissableLayer",su="dismissableLayer.update",T9="dismissableLayer.pointerDownOutside",j9="dismissableLayer.focusOutside",Q1,nh=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),rh=v.forwardRef((e,n)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:m,onDismiss:h,...p}=e,f=v.useContext(nh),[y,x]=v.useState(null),w=y?.ownerDocument??globalThis?.document,[,b]=v.useState({}),S=Kr(n,U=>x(U)),N=Array.from(f.layers),[T]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),E=N.indexOf(T),z=y?N.indexOf(y):-1,j=f.layersWithOutsidePointerEventsDisabled.size>0,D=z>=E,L=C9(U=>{const q=U.target,ct=[...f.branches].some(dt=>dt.contains(q));!D||ct||(l?.(U),m?.(U),U.defaultPrevented||h?.())},w),W=S9(U=>{const q=U.target;[...f.branches].some(dt=>dt.contains(q))||(u?.(U),m?.(U),U.defaultPrevented||h?.())},w);return b9(U=>{z===f.layers.size-1&&(s?.(U),!U.defaultPrevented&&h&&(U.preventDefault(),h()))},w),v.useEffect(()=>{if(y)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Q1=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(y)),f.layers.add(y),X1(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Q1)}},[y,w,o,f]),v.useEffect(()=>()=>{y&&(f.layers.delete(y),f.layersWithOutsidePointerEventsDisabled.delete(y),X1())},[y,f]),v.useEffect(()=>{const U=()=>b({});return document.addEventListener(su,U),()=>document.removeEventListener(su,U)},[]),i.jsx(cn.div,{...p,ref:S,style:{pointerEvents:j?D?"auto":"none":void 0,...e.style},onFocusCapture:ze(e.onFocusCapture,W.onFocusCapture),onBlurCapture:ze(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:ze(e.onPointerDownCapture,L.onPointerDownCapture)})});rh.displayName=k9;var N9="DismissableLayerBranch",oh=v.forwardRef((e,n)=>{const o=v.useContext(nh),s=v.useRef(null),l=Kr(n,s);return v.useEffect(()=>{const u=s.current;if(u)return o.branches.add(u),()=>{o.branches.delete(u)}},[o.branches]),i.jsx(cn.div,{...e,ref:l})});oh.displayName=N9;function C9(e,n=globalThis?.document){const o=jn(e),s=v.useRef(!1),l=v.useRef(()=>{});return v.useEffect(()=>{const u=h=>{if(h.target&&!s.current){let p=function(){ih(T9,o,f,{discrete:!0})};const f={originalEvent:h};h.pointerType==="touch"?(n.removeEventListener("click",l.current),l.current=p,n.addEventListener("click",l.current,{once:!0})):p()}else n.removeEventListener("click",l.current);s.current=!1},m=window.setTimeout(()=>{n.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(m),n.removeEventListener("pointerdown",u),n.removeEventListener("click",l.current)}},[n,o]),{onPointerDownCapture:()=>s.current=!0}}function S9(e,n=globalThis?.document){const o=jn(e),s=v.useRef(!1);return v.useEffect(()=>{const l=u=>{u.target&&!s.current&&ih(j9,o,{originalEvent:u},{discrete:!1})};return n.addEventListener("focusin",l),()=>n.removeEventListener("focusin",l)},[n,o]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function X1(){const e=new CustomEvent(su);document.dispatchEvent(e)}function ih(e,n,o,{discrete:s}){const l=o.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});n&&l.addEventListener(e,n,{once:!0}),s?eh(l,u):l.dispatchEvent(u)}var P9=rh,z9=oh,as=globalThis?.document?v.useLayoutEffect:()=>{},E9="Portal",ah=v.forwardRef((e,n)=>{const{container:o,...s}=e,[l,u]=v.useState(!1);as(()=>u(!0),[]);const m=o||l&&globalThis?.document?.body;return m?Qg.createPortal(i.jsx(cn.div,{...s,ref:n}),m):null});ah.displayName=E9;function A9(e,n){return v.useReducer((o,s)=>n[o][s]??o,e)}var sh=e=>{const{present:n,children:o}=e,s=M9(n),l=typeof o=="function"?o({present:s.isPresent}):v.Children.only(o),u=Kr(s.ref,R9(l));return typeof o=="function"||s.isPresent?v.cloneElement(l,{ref:u}):null};sh.displayName="Presence";function M9(e){const[n,o]=v.useState(),s=v.useRef({}),l=v.useRef(e),u=v.useRef("none"),m=e?"mounted":"unmounted",[h,p]=A9(m,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const f=Ga(s.current);u.current=h==="mounted"?f:"none"},[h]),as(()=>{const f=s.current,y=l.current;if(y!==e){const w=u.current,b=Ga(f);e?p("MOUNT"):b==="none"||f?.display==="none"?p("UNMOUNT"):p(y&&w!==b?"ANIMATION_OUT":"UNMOUNT"),l.current=e}},[e,p]),as(()=>{if(n){let f;const y=n.ownerDocument.defaultView??window,x=b=>{const N=Ga(s.current).includes(b.animationName);if(b.target===n&&N&&(p("ANIMATION_END"),!l.current)){const T=n.style.animationFillMode;n.style.animationFillMode="forwards",f=y.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=T)})}},w=b=>{b.target===n&&(u.current=Ga(s.current))};return n.addEventListener("animationstart",w),n.addEventListener("animationcancel",x),n.addEventListener("animationend",x),()=>{y.clearTimeout(f),n.removeEventListener("animationstart",w),n.removeEventListener("animationcancel",x),n.removeEventListener("animationend",x)}}else p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:v.useCallback(f=>{f&&(s.current=getComputedStyle(f)),o(f)},[])}}function Ga(e){return e?.animationName||"none"}function R9(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function $9({prop:e,defaultProp:n,onChange:o=()=>{}}){const[s,l]=D9({defaultProp:n,onChange:o}),u=e!==void 0,m=u?e:s,h=jn(o),p=v.useCallback(f=>{if(u){const x=typeof f=="function"?f(e):f;x!==e&&h(x)}else l(f)},[u,e,l,h]);return[m,p]}function D9({defaultProp:e,onChange:n}){const o=v.useState(e),[s]=o,l=v.useRef(s),u=jn(n);return v.useEffect(()=>{l.current!==s&&(u(s),l.current=s)},[s,l,u]),o}var L9="VisuallyHidden",Ou=v.forwardRef((e,n)=>i.jsx(cn.span,{...e,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Ou.displayName=L9;var Fu="ToastProvider",[Vu,I9,B9]=w9("Toast"),[lh]=th("Toast",[B9]),[O9,ws]=lh(Fu),ch=e=>{const{__scopeToast:n,label:o="Notification",duration:s=5e3,swipeDirection:l="right",swipeThreshold:u=50,children:m}=e,[h,p]=v.useState(null),[f,y]=v.useState(0),x=v.useRef(!1),w=v.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${Fu}\`. Expected non-empty \`string\`.`),i.jsx(Vu.Provider,{scope:n,children:i.jsx(O9,{scope:n,label:o,duration:s,swipeDirection:l,swipeThreshold:u,toastCount:f,viewport:h,onViewportChange:p,onToastAdd:v.useCallback(()=>y(b=>b+1),[]),onToastRemove:v.useCallback(()=>y(b=>b-1),[]),isFocusedToastEscapeKeyDownRef:x,isClosePausedRef:w,children:m})})};ch.displayName=Fu;var uh="ToastViewport",F9=["F8"],lu="toast.viewportPause",cu="toast.viewportResume",mh=v.forwardRef((e,n)=>{const{__scopeToast:o,hotkey:s=F9,label:l="Notifications ({hotkey})",...u}=e,m=ws(uh,o),h=I9(o),p=v.useRef(null),f=v.useRef(null),y=v.useRef(null),x=v.useRef(null),w=Kr(n,x,m.onViewportChange),b=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),S=m.toastCount>0;v.useEffect(()=>{const T=E=>{s.length!==0&&s.every(j=>E[j]||E.code===j)&&x.current?.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[s]),v.useEffect(()=>{const T=p.current,E=x.current;if(S&&T&&E){const z=()=>{if(!m.isClosePausedRef.current){const W=new CustomEvent(lu);E.dispatchEvent(W),m.isClosePausedRef.current=!0}},j=()=>{if(m.isClosePausedRef.current){const W=new CustomEvent(cu);E.dispatchEvent(W),m.isClosePausedRef.current=!1}},D=W=>{!T.contains(W.relatedTarget)&&j()},L=()=>{T.contains(document.activeElement)||j()};return T.addEventListener("focusin",z),T.addEventListener("focusout",D),T.addEventListener("pointermove",z),T.addEventListener("pointerleave",L),window.addEventListener("blur",z),window.addEventListener("focus",j),()=>{T.removeEventListener("focusin",z),T.removeEventListener("focusout",D),T.removeEventListener("pointermove",z),T.removeEventListener("pointerleave",L),window.removeEventListener("blur",z),window.removeEventListener("focus",j)}}},[S,m.isClosePausedRef]);const N=v.useCallback(({tabbingDirection:T})=>{const z=h().map(j=>{const D=j.ref.current,L=[D,...t6(D)];return T==="forwards"?L:L.reverse()});return(T==="forwards"?z.reverse():z).flat()},[h]);return v.useEffect(()=>{const T=x.current;if(T){const E=z=>{const j=z.altKey||z.ctrlKey||z.metaKey;if(z.key==="Tab"&&!j){const L=document.activeElement,W=z.shiftKey;if(z.target===T&&W){f.current?.focus();return}const ct=N({tabbingDirection:W?"backwards":"forwards"}),dt=ct.findIndex(Nt=>Nt===L);Bc(ct.slice(dt+1))?z.preventDefault():W?f.current?.focus():y.current?.focus()}};return T.addEventListener("keydown",E),()=>T.removeEventListener("keydown",E)}},[h,N]),i.jsxs(z9,{ref:p,role:"region","aria-label":l.replace("{hotkey}",b),tabIndex:-1,style:{pointerEvents:S?void 0:"none"},children:[S&&i.jsx(uu,{ref:f,onFocusFromOutsideViewport:()=>{const T=N({tabbingDirection:"forwards"});Bc(T)}}),i.jsx(Vu.Slot,{scope:o,children:i.jsx(cn.ol,{tabIndex:-1,...u,ref:w})}),S&&i.jsx(uu,{ref:y,onFocusFromOutsideViewport:()=>{const T=N({tabbingDirection:"backwards"});Bc(T)}})]})});mh.displayName=uh;var dh="ToastFocusProxy",uu=v.forwardRef((e,n)=>{const{__scopeToast:o,onFocusFromOutsideViewport:s,...l}=e,u=ws(dh,o);return i.jsx(Ou,{"aria-hidden":!0,tabIndex:0,...l,ref:n,style:{position:"fixed"},onFocus:m=>{const h=m.relatedTarget;!u.viewport?.contains(h)&&s()}})});uu.displayName=dh;var vs="Toast",V9="toast.swipeStart",G9="toast.swipeMove",W9="toast.swipeCancel",_9="toast.swipeEnd",hh=v.forwardRef((e,n)=>{const{forceMount:o,open:s,defaultOpen:l,onOpenChange:u,...m}=e,[h=!0,p]=$9({prop:s,defaultProp:l,onChange:u});return i.jsx(sh,{present:o||h,children:i.jsx(q9,{open:h,...m,ref:n,onClose:()=>p(!1),onPause:jn(e.onPause),onResume:jn(e.onResume),onSwipeStart:ze(e.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ze(e.onSwipeMove,f=>{const{x:y,y:x}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${x}px`)}),onSwipeCancel:ze(e.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ze(e.onSwipeEnd,f=>{const{x:y,y:x}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${x}px`),p(!1)})})})});hh.displayName=vs;var[H9,U9]=lh(vs,{onClose(){}}),q9=v.forwardRef((e,n)=>{const{__scopeToast:o,type:s="foreground",duration:l,open:u,onClose:m,onEscapeKeyDown:h,onPause:p,onResume:f,onSwipeStart:y,onSwipeMove:x,onSwipeCancel:w,onSwipeEnd:b,...S}=e,N=ws(vs,o),[T,E]=v.useState(null),z=Kr(n,nt=>E(nt)),j=v.useRef(null),D=v.useRef(null),L=l||N.duration,W=v.useRef(0),U=v.useRef(L),q=v.useRef(0),{onToastAdd:ct,onToastRemove:dt}=N,Nt=jn(()=>{T?.contains(document.activeElement)&&N.viewport?.focus(),m()}),ut=v.useCallback(nt=>{!nt||nt===1/0||(window.clearTimeout(q.current),W.current=new Date().getTime(),q.current=window.setTimeout(Nt,nt))},[Nt]);v.useEffect(()=>{const nt=N.viewport;if(nt){const Mt=()=>{ut(U.current),f?.()},kt=()=>{const at=new Date().getTime()-W.current;U.current=U.current-at,window.clearTimeout(q.current),p?.()};return nt.addEventListener(lu,kt),nt.addEventListener(cu,Mt),()=>{nt.removeEventListener(lu,kt),nt.removeEventListener(cu,Mt)}}},[N.viewport,L,p,f,ut]),v.useEffect(()=>{u&&!N.isClosePausedRef.current&&ut(L)},[u,L,N.isClosePausedRef,ut]),v.useEffect(()=>(ct(),()=>dt()),[ct,dt]);const Ht=v.useMemo(()=>T?wh(T):null,[T]);return N.viewport?i.jsxs(i.Fragment,{children:[Ht&&i.jsx(Y9,{__scopeToast:o,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:Ht}),i.jsx(H9,{scope:o,onClose:Nt,children:Iu.createPortal(i.jsx(Vu.ItemSlot,{scope:o,children:i.jsx(P9,{asChild:!0,onEscapeKeyDown:ze(h,()=>{N.isFocusedToastEscapeKeyDownRef.current||Nt(),N.isFocusedToastEscapeKeyDownRef.current=!1}),children:i.jsx(cn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":N.swipeDirection,...S,ref:z,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ze(e.onKeyDown,nt=>{nt.key==="Escape"&&(h?.(nt.nativeEvent),nt.nativeEvent.defaultPrevented||(N.isFocusedToastEscapeKeyDownRef.current=!0,Nt()))}),onPointerDown:ze(e.onPointerDown,nt=>{nt.button===0&&(j.current={x:nt.clientX,y:nt.clientY})}),onPointerMove:ze(e.onPointerMove,nt=>{if(!j.current)return;const Mt=nt.clientX-j.current.x,kt=nt.clientY-j.current.y,at=!!D.current,V=["left","right"].includes(N.swipeDirection),J=["left","up"].includes(N.swipeDirection)?Math.min:Math.max,H=V?J(0,Mt):0,A=V?0:J(0,kt),I=nt.pointerType==="touch"?10:2,lt={x:H,y:A},pt={originalEvent:nt,delta:lt};at?(D.current=lt,Wa(G9,x,pt,{discrete:!1})):J1(lt,N.swipeDirection,I)?(D.current=lt,Wa(V9,y,pt,{discrete:!1}),nt.target.setPointerCapture(nt.pointerId)):(Math.abs(Mt)>I||Math.abs(kt)>I)&&(j.current=null)}),onPointerUp:ze(e.onPointerUp,nt=>{const Mt=D.current,kt=nt.target;if(kt.hasPointerCapture(nt.pointerId)&&kt.releasePointerCapture(nt.pointerId),D.current=null,j.current=null,Mt){const at=nt.currentTarget,V={originalEvent:nt,delta:Mt};J1(Mt,N.swipeDirection,N.swipeThreshold)?Wa(_9,b,V,{discrete:!0}):Wa(W9,w,V,{discrete:!0}),at.addEventListener("click",J=>J.preventDefault(),{once:!0})}})})})}),N.viewport)})]}):null}),Y9=e=>{const{__scopeToast:n,children:o,...s}=e,l=ws(vs,n),[u,m]=v.useState(!1),[h,p]=v.useState(!1);return J9(()=>m(!0)),v.useEffect(()=>{const f=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(f)},[]),h?null:i.jsx(ah,{asChild:!0,children:i.jsx(Ou,{...s,children:u&&i.jsxs(i.Fragment,{children:[l.label," ",o]})})})},Q9="ToastTitle",ph=v.forwardRef((e,n)=>{const{__scopeToast:o,...s}=e;return i.jsx(cn.div,{...s,ref:n})});ph.displayName=Q9;var X9="ToastDescription",fh=v.forwardRef((e,n)=>{const{__scopeToast:o,...s}=e;return i.jsx(cn.div,{...s,ref:n})});fh.displayName=X9;var gh="ToastAction",yh=v.forwardRef((e,n)=>{const{altText:o,...s}=e;return o.trim()?i.jsx(Kh,{altText:o,asChild:!0,children:i.jsx(Gu,{...s,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${gh}\`. Expected non-empty \`string\`.`),null)});yh.displayName=gh;var xh="ToastClose",Gu=v.forwardRef((e,n)=>{const{__scopeToast:o,...s}=e,l=U9(xh,o);return i.jsx(Kh,{asChild:!0,children:i.jsx(cn.button,{type:"button",...s,ref:n,onClick:ze(e.onClick,l.onClose)})})});Gu.displayName=xh;var Kh=v.forwardRef((e,n)=>{const{__scopeToast:o,altText:s,...l}=e;return i.jsx(cn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...l,ref:n})});function wh(e){const n=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&n.push(s.textContent),Z9(s)){const l=s.ariaHidden||s.hidden||s.style.display==="none",u=s.dataset.radixToastAnnounceExclude==="";if(!l)if(u){const m=s.dataset.radixToastAnnounceAlt;m&&n.push(m)}else n.push(...wh(s))}}),n}function Wa(e,n,o,{discrete:s}){const l=o.originalEvent.currentTarget,u=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});n&&l.addEventListener(e,n,{once:!0}),s?eh(l,u):l.dispatchEvent(u)}var J1=(e,n,o=0)=>{const s=Math.abs(e.x),l=Math.abs(e.y),u=s>l;return n==="left"||n==="right"?u&&s>o:!u&&l>o};function J9(e=()=>{}){const n=jn(e);as(()=>{let o=0,s=0;return o=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(s)}},[n])}function Z9(e){return e.nodeType===e.ELEMENT_NODE}function t6(e){const n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const l=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||l?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n}function Bc(e){const n=document.activeElement;return e.some(o=>o===n?!0:(o.focus(),document.activeElement!==n))}var e6=ch,vh=mh,bh=hh,kh=ph,Th=fh,jh=yh,Nh=Gu;const Z1=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,td=U0,Ch=(e,n)=>o=>{var s;if(n?.variants==null)return td(e,o?.class,o?.className);const{variants:l,defaultVariants:u}=n,m=Object.keys(l).map(f=>{const y=o?.[f],x=u?.[f];if(y===null)return null;const w=Z1(y)||Z1(x);return l[f][w]}),h=o&&Object.entries(o).reduce((f,y)=>{let[x,w]=y;return w===void 0||(f[x]=w),f},{}),p=n==null||(s=n.compoundVariants)===null||s===void 0?void 0:s.reduce((f,y)=>{let{class:x,className:w,...b}=y;return Object.entries(b).every(S=>{let[N,T]=S;return Array.isArray(T)?T.includes({...u,...h}[N]):{...u,...h}[N]===T})?[...f,x,w]:f},[]);return td(e,m,p,o?.class,o?.className)};const n6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sh=(...e)=>e.filter((n,o,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===o).join(" ").trim();var r6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o6=v.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:m,...h},p)=>v.createElement("svg",{ref:p,...r6,width:n,height:n,stroke:e,strokeWidth:s?Number(o)*24/Number(n):o,className:Sh("lucide",l),...h},[...m.map(([f,y])=>v.createElement(f,y)),...Array.isArray(u)?u:[u]]));const yt=(e,n)=>{const o=v.forwardRef(({className:s,...l},u)=>v.createElement(o6,{ref:u,iconNode:n,className:Sh(`lucide-${n6(e)}`,s),...l}));return o.displayName=`${e}`,o};const ed=yt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Wt=yt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const bs=yt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Ph=yt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const Wu=yt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const i6=yt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const a6=yt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const It=yt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const no=yt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const s6=yt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const _u=yt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const l6=yt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const c6=yt("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);const Za=yt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const u6=yt("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);const m6=yt("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);const d6=yt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const zh=yt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);const h6=yt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const p6=yt("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);const Eh=yt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const f6=yt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const g6=yt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const y6=yt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);const x6=yt("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);const nd=yt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const K6=yt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);const mo=yt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const mu=yt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const Hu=yt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const ss=yt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);const w6=yt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);const ls=yt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const ji=yt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const v6=yt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);const ro=yt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const Uu=yt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const du=yt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),b6=e6,Ah=Xt.forwardRef(({className:e,...n},o)=>i.jsx(vh,{ref:o,className:vr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...n}));Ah.displayName=vh.displayName;const k6=Ch("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Mh=Xt.forwardRef(({className:e,variant:n,...o},s)=>i.jsx(bh,{ref:s,className:vr(k6({variant:n}),e),...o}));Mh.displayName=bh.displayName;const T6=Xt.forwardRef(({className:e,...n},o)=>i.jsx(jh,{ref:o,className:vr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...n}));T6.displayName=jh.displayName;const Rh=Xt.forwardRef(({className:e,...n},o)=>i.jsx(Nh,{ref:o,className:vr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...n,children:i.jsx(Uu,{className:"h-4 w-4"})}));Rh.displayName=Nh.displayName;const $h=Xt.forwardRef(({className:e,...n},o)=>i.jsx(kh,{ref:o,className:vr("text-sm font-semibold",e),...n}));$h.displayName=kh.displayName;const Dh=Xt.forwardRef(({className:e,...n},o)=>i.jsx(Th,{ref:o,className:vr("text-sm opacity-90",e),...n}));Dh.displayName=Th.displayName;const j6=1;let Oc=0;function N6(){return Oc=(Oc+1)%Number.MAX_VALUE,Oc.toString()}const fe={state:{toasts:[]},listeners:[],getState:()=>fe.state,setState:e=>{typeof e=="function"?fe.state=e(fe.state):fe.state={...fe.state,...e},fe.listeners.forEach(n=>n(fe.state))},subscribe:e=>(fe.listeners.push(e),()=>{fe.listeners=fe.listeners.filter(n=>n!==e)})},C6=({...e})=>{const n=N6(),o=l=>fe.setState(u=>({...u,toasts:u.toasts.map(m=>m.id===n?{...m,...l}:m)})),s=()=>fe.setState(l=>({...l,toasts:l.toasts.filter(u=>u.id!==n)}));return fe.setState(l=>({...l,toasts:[{...e,id:n,dismiss:s},...l.toasts].slice(0,j6)})),{id:n,dismiss:s,update:o}};function qu(){const[e,n]=v.useState(fe.getState());return v.useEffect(()=>fe.subscribe(s=>{n(s)}),[]),v.useEffect(()=>{const o=[];return e.toasts.forEach(s=>{if(s.duration===1/0)return;const l=setTimeout(()=>{s.dismiss()},s.duration||5e3);o.push(l)}),()=>{o.forEach(s=>clearTimeout(s))}},[e.toasts]),{toast:C6,toasts:e.toasts}}function S6(){const{toasts:e}=qu();return i.jsxs(b6,{children:[e.map(({id:n,title:o,description:s,action:l,...u})=>i.jsxs(Mh,{...u,children:[i.jsxs("div",{className:"grid gap-1",children:[o&&i.jsx($h,{children:o}),s&&i.jsx(Dh,{children:s})]}),l,i.jsx(Rh,{})]},n)),i.jsx(Ah,{})]})}function P6(e){if(typeof Proxy>"u")return e;const n=new Map,o=(...s)=>e(...s);return new Proxy(o,{get:(s,l)=>l==="create"?e:(n.has(l)||n.set(l,e(l)),n.get(l))})}function ks(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const hu=e=>Array.isArray(e);function Lh(e,n){if(!Array.isArray(n))return!1;const o=n.length;if(o!==e.length)return!1;for(let s=0;s<o;s++)if(n[s]!==e[s])return!1;return!0}function xi(e){return typeof e=="string"||Array.isArray(e)}function rd(e){const n=[{},{}];return e?.values.forEach((o,s)=>{n[0][s]=o.get(),n[1][s]=o.getVelocity()}),n}function Yu(e,n,o,s){if(typeof n=="function"){const[l,u]=rd(s);n=n(o!==void 0?o:e.custom,l,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[l,u]=rd(s);n=n(o!==void 0?o:e.custom,l,u)}return n}function Ts(e,n,o){const s=e.getProps();return Yu(s,n,o!==void 0?o:s.custom,e)}const Qu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xu=["initial",...Qu],Ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],br=new Set(Ni),bn=e=>e*1e3,kn=e=>e/1e3,z6={type:"spring",stiffness:500,damping:25,restSpeed:10},E6=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),A6={type:"keyframes",duration:.8},M6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R6=(e,{keyframes:n})=>n.length>2?A6:br.has(e)?e.startsWith("scale")?E6(n[1]):z6:M6;function Ju(e,n){return e?e[n]||e.default||e:void 0}const $6={useManualTiming:!1},D6=e=>e!==null;function js(e,{repeat:n,repeatType:o="loop"},s){const l=e.filter(D6),u=n&&o!=="loop"&&n%2===1?0:l.length-1;return!u||s===void 0?l[u]:s}const Ee=e=>e;let Ih=Ee;function L6(e){let n=new Set,o=new Set,s=!1,l=!1;const u=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(f){u.has(f)&&(p.schedule(f),e()),f(m)}const p={schedule:(f,y=!1,x=!1)=>{const b=x&&s?n:o;return y&&u.add(f),b.has(f)||b.add(f),f},cancel:f=>{o.delete(f),u.delete(f)},process:f=>{if(m=f,s){l=!0;return}s=!0,[n,o]=[o,n],n.forEach(h),n.clear(),s=!1,l&&(l=!1,p.process(f))}};return p}const _a=["read","resolveKeyframes","update","preRender","render","postRender"],I6=40;function Bh(e,n){let o=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,m=_a.reduce((E,z)=>(E[z]=L6(u),E),{}),{read:h,resolveKeyframes:p,update:f,preRender:y,render:x,postRender:w}=m,b=()=>{const E=performance.now();o=!1,l.delta=s?1e3/60:Math.max(Math.min(E-l.timestamp,I6),1),l.timestamp=E,l.isProcessing=!0,h.process(l),p.process(l),f.process(l),y.process(l),x.process(l),w.process(l),l.isProcessing=!1,o&&n&&(s=!1,e(b))},S=()=>{o=!0,s=!0,l.isProcessing||e(b)};return{schedule:_a.reduce((E,z)=>{const j=m[z];return E[z]=(D,L=!1,W=!1)=>(o||S(),j.schedule(D,L,W)),E},{}),cancel:E=>{for(let z=0;z<_a.length;z++)m[_a[z]].cancel(E)},state:l,steps:m}}const{schedule:At,cancel:Qn,state:ae,steps:Fc}=Bh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ee,!0),Oh=(e,n,o)=>(((1-3*o+3*n)*e+(3*o-6*n))*e+3*n)*e,B6=1e-7,O6=12;function F6(e,n,o,s,l){let u,m,h=0;do m=n+(o-n)/2,u=Oh(m,s,l)-e,u>0?o=m:n=m;while(Math.abs(u)>B6&&++h<O6);return m}function Ci(e,n,o,s){if(e===n&&o===s)return Ee;const l=u=>F6(u,0,1,e,o);return u=>u===0||u===1?u:Oh(l(u),n,s)}const Fh=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Vh=e=>n=>1-e(1-n),Gh=Ci(.33,1.53,.69,.99),Zu=Vh(Gh),Wh=Fh(Zu),_h=e=>(e*=2)<1?.5*Zu(e):.5*(2-Math.pow(2,-10*(e-1))),t4=e=>1-Math.sin(Math.acos(e)),Hh=Vh(t4),Uh=Fh(t4),qh=e=>/^0[^.\s]+$/u.test(e);function V6(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||qh(e):!0}const Yh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Qh=e=>n=>typeof n=="string"&&n.startsWith(e),Xh=Qh("--"),G6=Qh("var(--"),e4=e=>G6(e)?W6.test(e.split("/*")[0].trim()):!1,W6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function H6(e){const n=_6.exec(e);if(!n)return[,];const[,o,s,l]=n;return[`--${o??s}`,l]}function Jh(e,n,o=1){const[s,l]=H6(e);if(!s)return;const u=window.getComputedStyle(n).getPropertyValue(s);if(u){const m=u.trim();return Yh(m)?parseFloat(m):m}return e4(l)?Jh(l,n,o+1):l}const Nn=(e,n,o)=>o>n?n:o<e?e:o,ho={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ki={...ho,transform:e=>Nn(0,1,e)},Ha={...ho,default:1},Si=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),qn=Si("deg"),an=Si("%"),it=Si("px"),U6=Si("vh"),q6=Si("vw"),od={...an,parse:e=>an.parse(e)/100,transform:e=>an.transform(e*100)},Y6=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),id=e=>e===ho||e===it,ad=(e,n)=>parseFloat(e.split(", ")[n]),sd=(e,n)=>(o,{transform:s})=>{if(s==="none"||!s)return 0;const l=s.match(/^matrix3d\((.+)\)$/u);if(l)return ad(l[1],n);{const u=s.match(/^matrix\((.+)\)$/u);return u?ad(u[1],e):0}},Q6=new Set(["x","y","z"]),X6=Ni.filter(e=>!Q6.has(e));function J6(e){const n=[];return X6.forEach(o=>{const s=e.getValue(o);s!==void 0&&(n.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),n}const oo={width:({x:e},{paddingLeft:n="0",paddingRight:o="0"})=>e.max-e.min-parseFloat(n)-parseFloat(o),height:({y:e},{paddingTop:n="0",paddingBottom:o="0"})=>e.max-e.min-parseFloat(n)-parseFloat(o),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:sd(4,13),y:sd(5,14)};oo.translateX=oo.x;oo.translateY=oo.y;const Zh=e=>n=>n.test(e),Z6={test:e=>e==="auto",parse:e=>e},tp=[ho,it,an,qn,q6,U6,Z6],ld=e=>tp.find(Zh(e)),xr=new Set;let pu=!1,fu=!1;function ep(){if(fu){const e=Array.from(xr).filter(s=>s.needsMeasurement),n=new Set(e.map(s=>s.element)),o=new Map;n.forEach(s=>{const l=J6(s);l.length&&(o.set(s,l),s.render())}),e.forEach(s=>s.measureInitialState()),n.forEach(s=>{s.render();const l=o.get(s);l&&l.forEach(([u,m])=>{var h;(h=s.getValue(u))===null||h===void 0||h.set(m)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}fu=!1,pu=!1,xr.forEach(e=>e.complete()),xr.clear()}function np(){xr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(fu=!0)})}function ty(){np(),ep()}class n4{constructor(n,o,s,l,u,m=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=o,this.name=s,this.motionValue=l,this.element=u,this.isAsync=m}scheduleResolve(){this.isScheduled=!0,this.isAsync?(xr.add(this),pu||(pu=!0,At.read(np),At.resolveKeyframes(ep))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:o,element:s,motionValue:l}=this;for(let u=0;u<n.length;u++)if(n[u]===null)if(u===0){const m=l?.get(),h=n[n.length-1];if(m!==void 0)n[0]=m;else if(s&&o){const p=s.readValue(o,h);p!=null&&(n[0]=p)}n[0]===void 0&&(n[0]=h),l&&m===void 0&&l.set(n[0])}else n[u]=n[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const mi=e=>Math.round(e*1e5)/1e5,r4=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ey(e){return e==null}const ny=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,o4=(e,n)=>o=>!!(typeof o=="string"&&ny.test(o)&&o.startsWith(e)||n&&!ey(o)&&Object.prototype.hasOwnProperty.call(o,n)),rp=(e,n,o)=>s=>{if(typeof s!="string")return s;const[l,u,m,h]=s.match(r4);return{[e]:parseFloat(l),[n]:parseFloat(u),[o]:parseFloat(m),alpha:h!==void 0?parseFloat(h):1}},ry=e=>Nn(0,255,e),Vc={...ho,transform:e=>Math.round(ry(e))},fr={test:o4("rgb","red"),parse:rp("red","green","blue"),transform:({red:e,green:n,blue:o,alpha:s=1})=>"rgba("+Vc.transform(e)+", "+Vc.transform(n)+", "+Vc.transform(o)+", "+mi(Ki.transform(s))+")"};function oy(e){let n="",o="",s="",l="";return e.length>5?(n=e.substring(1,3),o=e.substring(3,5),s=e.substring(5,7),l=e.substring(7,9)):(n=e.substring(1,2),o=e.substring(2,3),s=e.substring(3,4),l=e.substring(4,5),n+=n,o+=o,s+=s,l+=l),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const gu={test:o4("#"),parse:oy,transform:fr.transform},Yr={test:o4("hsl","hue"),parse:rp("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:o,alpha:s=1})=>"hsla("+Math.round(e)+", "+an.transform(mi(n))+", "+an.transform(mi(o))+", "+mi(Ki.transform(s))+")"},me={test:e=>fr.test(e)||gu.test(e)||Yr.test(e),parse:e=>fr.test(e)?fr.parse(e):Yr.test(e)?Yr.parse(e):gu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?fr.transform(e):Yr.transform(e)},iy=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ay(e){var n,o;return isNaN(e)&&typeof e=="string"&&(((n=e.match(r4))===null||n===void 0?void 0:n.length)||0)+(((o=e.match(iy))===null||o===void 0?void 0:o.length)||0)>0}const op="number",ip="color",sy="var",ly="var(",cd="${}",cy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wi(e){const n=e.toString(),o=[],s={color:[],number:[],var:[]},l=[];let u=0;const h=n.replace(cy,p=>(me.test(p)?(s.color.push(u),l.push(ip),o.push(me.parse(p))):p.startsWith(ly)?(s.var.push(u),l.push(sy),o.push(p)):(s.number.push(u),l.push(op),o.push(parseFloat(p))),++u,cd)).split(cd);return{values:o,split:h,indexes:s,types:l}}function ap(e){return wi(e).values}function sp(e){const{split:n,types:o}=wi(e),s=n.length;return l=>{let u="";for(let m=0;m<s;m++)if(u+=n[m],l[m]!==void 0){const h=o[m];h===op?u+=mi(l[m]):h===ip?u+=me.transform(l[m]):u+=l[m]}return u}}const uy=e=>typeof e=="number"?0:e;function my(e){const n=ap(e);return sp(e)(n.map(uy))}const Xn={test:ay,parse:ap,createTransformer:sp,getAnimatableNone:my},dy=new Set(["brightness","contrast","saturate","opacity"]);function hy(e){const[n,o]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[s]=o.match(r4)||[];if(!s)return e;const l=o.replace(s,"");let u=dy.has(n)?1:0;return s!==o&&(u*=100),n+"("+u+l+")"}const py=/\b([a-z-]*)\(.*?\)/gu,yu={...Xn,getAnimatableNone:e=>{const n=e.match(py);return n?n.map(hy).join(" "):e}},fy={borderWidth:it,borderTopWidth:it,borderRightWidth:it,borderBottomWidth:it,borderLeftWidth:it,borderRadius:it,radius:it,borderTopLeftRadius:it,borderTopRightRadius:it,borderBottomRightRadius:it,borderBottomLeftRadius:it,width:it,maxWidth:it,height:it,maxHeight:it,top:it,right:it,bottom:it,left:it,padding:it,paddingTop:it,paddingRight:it,paddingBottom:it,paddingLeft:it,margin:it,marginTop:it,marginRight:it,marginBottom:it,marginLeft:it,backgroundPositionX:it,backgroundPositionY:it},gy={rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:Ha,scaleX:Ha,scaleY:Ha,scaleZ:Ha,skew:qn,skewX:qn,skewY:qn,distance:it,translateX:it,translateY:it,translateZ:it,x:it,y:it,z:it,perspective:it,transformPerspective:it,opacity:Ki,originX:od,originY:od,originZ:it},ud={...ho,transform:Math.round},i4={...fy,...gy,zIndex:ud,size:it,fillOpacity:Ki,strokeOpacity:Ki,numOctaves:ud},yy={...i4,color:me,backgroundColor:me,outlineColor:me,fill:me,stroke:me,borderColor:me,borderTopColor:me,borderRightColor:me,borderBottomColor:me,borderLeftColor:me,filter:yu,WebkitFilter:yu},a4=e=>yy[e];function lp(e,n){let o=a4(e);return o!==yu&&(o=Xn),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const xy=new Set(["auto","none","0"]);function Ky(e,n,o){let s=0,l;for(;s<e.length&&!l;){const u=e[s];typeof u=="string"&&!xy.has(u)&&wi(u).values.length&&(l=e[s]),s++}if(l&&o)for(const u of n)e[u]=lp(o,l)}class cp extends n4{constructor(n,o,s,l,u){super(n,o,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<n.length;p++){let f=n[p];if(typeof f=="string"&&(f=f.trim(),e4(f))){const y=Jh(f,o.current);y!==void 0&&(n[p]=y),p===n.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Y6.has(s)||n.length!==2)return;const[l,u]=n,m=ld(l),h=ld(u);if(m!==h)if(id(m)&&id(h))for(let p=0;p<n.length;p++){const f=n[p];typeof f=="string"&&(n[p]=parseFloat(f))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:o}=this,s=[];for(let l=0;l<n.length;l++)V6(n[l])&&s.push(l);s.length&&Ky(n,s,o)}measureInitialState(){const{element:n,unresolvedKeyframes:o,name:s}=this;if(!n||!n.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=oo[s](n.measureViewportBox(),window.getComputedStyle(n.current)),o[0]=this.measuredOrigin;const l=o[o.length-1];l!==void 0&&n.getValue(s,l).jump(l,!1)}measureEndState(){var n;const{element:o,name:s,unresolvedKeyframes:l}=this;if(!o||!o.current)return;const u=o.getValue(s);u&&u.jump(this.measuredOrigin,!1);const m=l.length-1,h=l[m];l[m]=oo[s](o.measureViewportBox(),window.getComputedStyle(o.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([p,f])=>{o.getValue(p).set(f)}),this.resolveNoneKeyframes()}}function s4(e){return typeof e=="function"}let ts;function wy(){ts=void 0}const sn={now:()=>(ts===void 0&&sn.set(ae.isProcessing||$6.useManualTiming?ae.timestamp:performance.now()),ts),set:e=>{ts=e,queueMicrotask(wy)}},md=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Xn.test(e)||e==="0")&&!e.startsWith("url("));function vy(e){const n=e[0];if(e.length===1)return!0;for(let o=0;o<e.length;o++)if(e[o]!==n)return!0}function by(e,n,o,s){const l=e[0];if(l===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],m=md(l,n),h=md(u,n);return!m||!h?!1:vy(e)||(o==="spring"||s4(o))&&s}const ky=40;class up{constructor({autoplay:n=!0,delay:o=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:m="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=sn.now(),this.options={autoplay:n,delay:o,type:s,repeat:l,repeatDelay:u,repeatType:m,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ky?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&ty(),this._resolved}onKeyframesResolved(n,o){this.resolvedAt=sn.now(),this.hasAttemptedResolve=!0;const{name:s,type:l,velocity:u,delay:m,onComplete:h,onUpdate:p,isGenerator:f}=this.options;if(!f&&!by(n,s,l,u))if(m)this.options.duration=0;else{p?.(js(n,this.options,o)),h?.(),this.resolveFinishedPromise();return}const y=this.initPlayback(n,o);y!==!1&&(this._resolved={keyframes:n,finalKeyframe:o,...y},this.onPostResolved())}onPostResolved(){}then(n,o){return this.currentFinishedPromise.then(n,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const io=(e,n,o)=>{const s=n-e;return s===0?1:(o-e)/s},mp=(e,n,o=10)=>{let s="";const l=Math.max(Math.round(n/o),2);for(let u=0;u<l;u++)s+=e(io(0,l-1,u))+", ";return`linear(${s.substring(0,s.length-2)})`};function dp(e,n){return n?e*(1e3/n):0}const Ty=5;function hp(e,n,o){const s=Math.max(n-Ty,0);return dp(o-e(s),n-s)}const _t={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gc=.001;function jy({duration:e=_t.duration,bounce:n=_t.bounce,velocity:o=_t.velocity,mass:s=_t.mass}){let l,u,m=1-n;m=Nn(_t.minDamping,_t.maxDamping,m),e=Nn(_t.minDuration,_t.maxDuration,kn(e)),m<1?(l=f=>{const y=f*m,x=y*e,w=y-o,b=xu(f,m),S=Math.exp(-x);return Gc-w/b*S},u=f=>{const x=f*m*e,w=x*o+o,b=Math.pow(m,2)*Math.pow(f,2)*e,S=Math.exp(-x),N=xu(Math.pow(f,2),m);return(-l(f)+Gc>0?-1:1)*((w-b)*S)/N}):(l=f=>{const y=Math.exp(-f*e),x=(f-o)*e+1;return-Gc+y*x},u=f=>{const y=Math.exp(-f*e),x=(o-f)*(e*e);return y*x});const h=5/e,p=Cy(l,u,h);if(e=bn(e),isNaN(p))return{stiffness:_t.stiffness,damping:_t.damping,duration:e};{const f=Math.pow(p,2)*s;return{stiffness:f,damping:m*2*Math.sqrt(s*f),duration:e}}}const Ny=12;function Cy(e,n,o){let s=o;for(let l=1;l<Ny;l++)s=s-e(s)/n(s);return s}function xu(e,n){return e*Math.sqrt(1-n*n)}const Ku=2e4;function pp(e){let n=0;const o=50;let s=e.next(n);for(;!s.done&&n<Ku;)n+=o,s=e.next(n);return n>=Ku?1/0:n}const Sy=["duration","bounce"],Py=["stiffness","damping","mass"];function dd(e,n){return n.some(o=>e[o]!==void 0)}function zy(e){let n={velocity:_t.velocity,stiffness:_t.stiffness,damping:_t.damping,mass:_t.mass,isResolvedFromDuration:!1,...e};if(!dd(e,Py)&&dd(e,Sy))if(e.visualDuration){const o=e.visualDuration,s=2*Math.PI/(o*1.2),l=s*s,u=2*Nn(.05,1,1-e.bounce)*Math.sqrt(l);n={...n,mass:_t.mass,stiffness:l,damping:u}}else{const o=jy(e);n={...n,...o,mass:_t.mass},n.isResolvedFromDuration=!0}return n}function fp(e=_t.visualDuration,n=_t.bounce){const o=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:s,restDelta:l}=o;const u=o.keyframes[0],m=o.keyframes[o.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:f,mass:y,duration:x,velocity:w,isResolvedFromDuration:b}=zy({...o,velocity:-kn(o.velocity||0)}),S=w||0,N=f/(2*Math.sqrt(p*y)),T=m-u,E=kn(Math.sqrt(p/y)),z=Math.abs(T)<5;s||(s=z?_t.restSpeed.granular:_t.restSpeed.default),l||(l=z?_t.restDelta.granular:_t.restDelta.default);let j;if(N<1){const L=xu(E,N);j=W=>{const U=Math.exp(-N*E*W);return m-U*((S+N*E*T)/L*Math.sin(L*W)+T*Math.cos(L*W))}}else if(N===1)j=L=>m-Math.exp(-E*L)*(T+(S+E*T)*L);else{const L=E*Math.sqrt(N*N-1);j=W=>{const U=Math.exp(-N*E*W),q=Math.min(L*W,300);return m-U*((S+N*E*T)*Math.sinh(q)+L*T*Math.cosh(q))/L}}const D={calculatedDuration:b&&x||null,next:L=>{const W=j(L);if(b)h.done=L>=x;else{let U=0;N<1&&(U=L===0?bn(S):hp(j,L,W));const q=Math.abs(U)<=s,ct=Math.abs(m-W)<=l;h.done=q&&ct}return h.value=h.done?m:W,h},toString:()=>{const L=Math.min(pp(D),Ku),W=mp(U=>D.next(L*U).value,L,30);return L+"ms "+W}};return D}function hd({keyframes:e,velocity:n=0,power:o=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:m,min:h,max:p,restDelta:f=.5,restSpeed:y}){const x=e[0],w={done:!1,value:x},b=q=>h!==void 0&&q<h||p!==void 0&&q>p,S=q=>h===void 0?p:p===void 0||Math.abs(h-q)<Math.abs(p-q)?h:p;let N=o*n;const T=x+N,E=m===void 0?T:m(T);E!==T&&(N=E-x);const z=q=>-N*Math.exp(-q/s),j=q=>E+z(q),D=q=>{const ct=z(q),dt=j(q);w.done=Math.abs(ct)<=f,w.value=w.done?E:dt};let L,W;const U=q=>{b(w.value)&&(L=q,W=fp({keyframes:[w.value,S(w.value)],velocity:hp(j,q,w.value),damping:l,stiffness:u,restDelta:f,restSpeed:y}))};return U(0),{calculatedDuration:null,next:q=>{let ct=!1;return!W&&L===void 0&&(ct=!0,D(q),U(q)),L!==void 0&&q>=L?W.next(q-L):(!ct&&D(q),w)}}}const Ey=Ci(.42,0,1,1),Ay=Ci(0,0,.58,1),gp=Ci(.42,0,.58,1),My=e=>Array.isArray(e)&&typeof e[0]!="number",l4=e=>Array.isArray(e)&&typeof e[0]=="number",Ry={linear:Ee,easeIn:Ey,easeInOut:gp,easeOut:Ay,circIn:t4,circInOut:Uh,circOut:Hh,backIn:Zu,backInOut:Wh,backOut:Gh,anticipate:_h},pd=e=>{if(l4(e)){Ih(e.length===4);const[n,o,s,l]=e;return Ci(n,o,s,l)}else if(typeof e=="string")return Ry[e];return e},$y=(e,n)=>o=>n(e(o)),Pi=(...e)=>e.reduce($y),Vt=(e,n,o)=>e+(n-e)*o;function Wc(e,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(n-e)*6*o:o<1/2?n:o<2/3?e+(n-e)*(2/3-o)*6:e}function Dy({hue:e,saturation:n,lightness:o,alpha:s}){e/=360,n/=100,o/=100;let l=0,u=0,m=0;if(!n)l=u=m=o;else{const h=o<.5?o*(1+n):o+n-o*n,p=2*o-h;l=Wc(p,h,e+1/3),u=Wc(p,h,e),m=Wc(p,h,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(m*255),alpha:s}}function cs(e,n){return o=>o>0?n:e}const _c=(e,n,o)=>{const s=e*e,l=o*(n*n-s)+s;return l<0?0:Math.sqrt(l)},Ly=[gu,fr,Yr],Iy=e=>Ly.find(n=>n.test(e));function fd(e){const n=Iy(e);if(!n)return!1;let o=n.parse(e);return n===Yr&&(o=Dy(o)),o}const gd=(e,n)=>{const o=fd(e),s=fd(n);if(!o||!s)return cs(e,n);const l={...o};return u=>(l.red=_c(o.red,s.red,u),l.green=_c(o.green,s.green,u),l.blue=_c(o.blue,s.blue,u),l.alpha=Vt(o.alpha,s.alpha,u),fr.transform(l))},wu=new Set(["none","hidden"]);function By(e,n){return wu.has(e)?o=>o<=0?e:n:o=>o>=1?n:e}function Oy(e,n){return o=>Vt(e,n,o)}function c4(e){return typeof e=="number"?Oy:typeof e=="string"?e4(e)?cs:me.test(e)?gd:Gy:Array.isArray(e)?yp:typeof e=="object"?me.test(e)?gd:Fy:cs}function yp(e,n){const o=[...e],s=o.length,l=e.map((u,m)=>c4(u)(u,n[m]));return u=>{for(let m=0;m<s;m++)o[m]=l[m](u);return o}}function Fy(e,n){const o={...e,...n},s={};for(const l in o)e[l]!==void 0&&n[l]!==void 0&&(s[l]=c4(e[l])(e[l],n[l]));return l=>{for(const u in s)o[u]=s[u](l);return o}}function Vy(e,n){var o;const s=[],l={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const m=n.types[u],h=e.indexes[m][l[m]],p=(o=e.values[h])!==null&&o!==void 0?o:0;s[u]=p,l[m]++}return s}const Gy=(e,n)=>{const o=Xn.createTransformer(n),s=wi(e),l=wi(n);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?wu.has(e)&&!l.values.length||wu.has(n)&&!s.values.length?By(e,n):Pi(yp(Vy(s,l),l.values),o):cs(e,n)};function xp(e,n,o){return typeof e=="number"&&typeof n=="number"&&typeof o=="number"?Vt(e,n,o):c4(e)(e,n)}function Wy(e,n,o){const s=[],l=o||xp,u=e.length-1;for(let m=0;m<u;m++){let h=l(e[m],e[m+1]);if(n){const p=Array.isArray(n)?n[m]||Ee:n;h=Pi(p,h)}s.push(h)}return s}function _y(e,n,{clamp:o=!0,ease:s,mixer:l}={}){const u=e.length;if(Ih(u===n.length),u===1)return()=>n[0];if(u===2&&e[0]===e[1])return()=>n[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const m=Wy(n,s,l),h=m.length,p=f=>{let y=0;if(h>1)for(;y<e.length-2&&!(f<e[y+1]);y++);const x=io(e[y],e[y+1],f);return m[y](x)};return o?f=>p(Nn(e[0],e[u-1],f)):p}function Hy(e,n){const o=e[e.length-1];for(let s=1;s<=n;s++){const l=io(0,n,s);e.push(Vt(o,1,l))}}function Uy(e){const n=[0];return Hy(n,e.length-1),n}function qy(e,n){return e.map(o=>o*n)}function Yy(e,n){return e.map(()=>n||gp).splice(0,e.length-1)}function us({duration:e=300,keyframes:n,times:o,ease:s="easeInOut"}){const l=My(s)?s.map(pd):pd(s),u={done:!1,value:n[0]},m=qy(o&&o.length===n.length?o:Uy(n),e),h=_y(m,n,{ease:Array.isArray(l)?l:Yy(n,l)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const Qy=e=>{const n=({timestamp:o})=>e(o);return{start:()=>At.update(n,!0),stop:()=>Qn(n),now:()=>ae.isProcessing?ae.timestamp:sn.now()}},Xy={decay:hd,inertia:hd,tween:us,keyframes:us,spring:fp},Jy=e=>e/100;class u4 extends up{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:o,motionValue:s,element:l,keyframes:u}=this.options,m=l?.KeyframeResolver||n4,h=(p,f)=>this.onKeyframesResolved(p,f);this.resolver=new m(u,h,o,s,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:o="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:m=0}=this.options,h=s4(o)?o:Xy[o]||us;let p,f;h!==us&&typeof n[0]!="number"&&(p=Pi(Jy,xp(n[0],n[1])),n=[0,100]);const y=h({...this.options,keyframes:n});u==="mirror"&&(f=h({...this.options,keyframes:[...n].reverse(),velocity:-m})),y.calculatedDuration===null&&(y.calculatedDuration=pp(y));const{calculatedDuration:x}=y,w=x+l,b=w*(s+1)-l;return{generator:y,mirroredGenerator:f,mapPercentToKeyframes:p,calculatedDuration:x,resolvedDuration:w,totalDuration:b}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,o=!1){const{resolved:s}=this;if(!s){const{keyframes:q}=this.options;return{done:!0,value:q[q.length-1]}}const{finalKeyframe:l,generator:u,mirroredGenerator:m,mapPercentToKeyframes:h,keyframes:p,calculatedDuration:f,totalDuration:y,resolvedDuration:x}=s;if(this.startTime===null)return u.next(0);const{delay:w,repeat:b,repeatType:S,repeatDelay:N,onUpdate:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-y/this.speed,this.startTime)),o?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const E=this.currentTime-w*(this.speed>=0?1:-1),z=this.speed>=0?E<0:E>y;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let j=this.currentTime,D=u;if(b){const q=Math.min(this.currentTime,y)/x;let ct=Math.floor(q),dt=q%1;!dt&&q>=1&&(dt=1),dt===1&&ct--,ct=Math.min(ct,b+1),ct%2&&(S==="reverse"?(dt=1-dt,N&&(dt-=N/x)):S==="mirror"&&(D=m)),j=Nn(0,1,dt)*x}const L=z?{done:!1,value:p[0]}:D.next(j);h&&(L.value=h(L.value));let{done:W}=L;!z&&f!==null&&(W=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return U&&l!==void 0&&(L.value=js(p,this.options,l)),T&&T(L.value),U&&this.finish(),L}get duration(){const{resolved:n}=this;return n?kn(n.calculatedDuration):0}get time(){return kn(this.currentTime)}set time(n){n=bn(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const o=this.playbackSpeed!==n;this.playbackSpeed=n,o&&(this.time=kn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=Qy,onPlay:o,startTime:s}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),o&&o();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const Zy=new Set(["opacity","clipPath","filter","transform"]);function m4(e){let n;return()=>(n===void 0&&(n=e()),n)}const t7={linearEasing:void 0};function e7(e,n){const o=m4(e);return()=>{var s;return(s=t7[n])!==null&&s!==void 0?s:o()}}const ms=e7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Kp(e){return!!(typeof e=="function"&&ms()||!e||typeof e=="string"&&(e in vu||ms())||l4(e)||Array.isArray(e)&&e.every(Kp))}const li=([e,n,o,s])=>`cubic-bezier(${e}, ${n}, ${o}, ${s})`,vu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:li([0,.65,.55,1]),circOut:li([.55,0,1,.45]),backIn:li([.31,.01,.66,-.59]),backOut:li([.33,1.53,.69,.99])};function wp(e,n){if(e)return typeof e=="function"&&ms()?mp(e,n):l4(e)?li(e):Array.isArray(e)?e.map(o=>wp(o,n)||vu.easeOut):vu[e]}function n7(e,n,o,{delay:s=0,duration:l=300,repeat:u=0,repeatType:m="loop",ease:h="easeInOut",times:p}={}){const f={[n]:o};p&&(f.offset=p);const y=wp(h,l);return Array.isArray(y)&&(f.easing=y),e.animate(f,{delay:s,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:m==="reverse"?"alternate":"normal"})}function yd(e,n){e.timeline=n,e.onfinish=null}const r7=m4(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ds=10,o7=2e4;function i7(e){return s4(e.type)||e.type==="spring"||!Kp(e.ease)}function a7(e,n){const o=new u4({...n,keyframes:e,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:e[0]};const l=[];let u=0;for(;!s.done&&u<o7;)s=o.sample(u),l.push(s.value),u+=ds;return{times:void 0,keyframes:l,duration:u-ds,ease:"linear"}}const vp={anticipate:_h,backInOut:Wh,circInOut:Uh};function s7(e){return e in vp}class xd extends up{constructor(n){super(n);const{name:o,motionValue:s,element:l,keyframes:u}=this.options;this.resolver=new cp(u,(m,h)=>this.onKeyframesResolved(m,h),o,s,l),this.resolver.scheduleResolve()}initPlayback(n,o){var s;let{duration:l=300,times:u,ease:m,type:h,motionValue:p,name:f,startTime:y}=this.options;if(!(!((s=p.owner)===null||s===void 0)&&s.current))return!1;if(typeof m=="string"&&ms()&&s7(m)&&(m=vp[m]),i7(this.options)){const{onComplete:w,onUpdate:b,motionValue:S,element:N,...T}=this.options,E=a7(n,T);n=E.keyframes,n.length===1&&(n[1]=n[0]),l=E.duration,u=E.times,m=E.ease,h="keyframes"}const x=n7(p.owner.current,f,n,{...this.options,duration:l,times:u,ease:m});return x.startTime=y??this.calcStartTime(),this.pendingTimeline?(yd(x,this.pendingTimeline),this.pendingTimeline=void 0):x.onfinish=()=>{const{onComplete:w}=this.options;p.set(js(n,this.options,o)),w&&w(),this.cancel(),this.resolveFinishedPromise()},{animation:x,duration:l,times:u,type:h,ease:m,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:o}=n;return kn(o)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:o}=n;return kn(o.currentTime||0)}set time(n){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.currentTime=bn(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:o}=n;return o.playbackRate}set speed(n){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:o}=n;return o.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:o}=n;return o.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:o}=this;if(!o)return Ee;const{animation:s}=o;yd(s,n)}return Ee}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:o,keyframes:s,duration:l,type:u,ease:m,times:h}=n;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:f,onUpdate:y,onComplete:x,element:w,...b}=this.options,S=new u4({...b,keyframes:s,duration:l,type:u,ease:m,times:h,isGenerator:!0}),N=bn(this.time);f.setWithVelocity(S.sample(N-ds).value,S.sample(N).value,ds)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:o,name:s,repeatDelay:l,repeatType:u,damping:m,type:h}=n;return r7()&&s&&Zy.has(s)&&o&&o.owner&&o.owner.current instanceof HTMLElement&&!o.owner.getProps().onUpdate&&!l&&u!=="mirror"&&m!==0&&h!=="inertia"}}const l7=m4(()=>window.ScrollTimeline!==void 0);class c7{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}then(n,o){return Promise.all(this.animations).then(n).catch(o)}getAll(n){return this.animations[0][n]}setAll(n,o){for(let s=0;s<this.animations.length;s++)this.animations[s][n]=o}attachTimeline(n,o){const s=this.animations.map(l=>l7()&&l.attachTimeline?l.attachTimeline(n):o(l));return()=>{s.forEach((l,u)=>{l&&l(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let o=0;o<this.animations.length;o++)n=Math.max(n,this.animations[o].duration);return n}runAll(n){this.animations.forEach(o=>o[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function u7({when:e,delay:n,delayChildren:o,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:m,repeatDelay:h,from:p,elapsed:f,...y}){return!!Object.keys(y).length}const d4=(e,n,o,s={},l,u)=>m=>{const h=Ju(s,e)||{},p=h.delay||s.delay||0;let{elapsed:f=0}=s;f=f-bn(p);let y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-f,onUpdate:w=>{n.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{m(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:l};u7(h)||(y={...y,...R6(e,y)}),y.duration&&(y.duration=bn(y.duration)),y.repeatDelay&&(y.repeatDelay=bn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(x=!0)),x&&!u&&n.get()!==void 0){const w=js(y.keyframes,h);if(w!==void 0)return At.update(()=>{y.onUpdate(w),y.onComplete()}),new c7([])}return!u&&xd.supports(y)?new xd(y):new u4(y)},m7=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),d7=e=>hu(e)?e[e.length-1]||0:e;function h4(e,n){e.indexOf(n)===-1&&e.push(n)}function p4(e,n){const o=e.indexOf(n);o>-1&&e.splice(o,1)}class f4{constructor(){this.subscriptions=[]}add(n){return h4(this.subscriptions,n),()=>p4(this.subscriptions,n)}notify(n,o,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](n,o,s);else for(let u=0;u<l;u++){const m=this.subscriptions[u];m&&m(n,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Kd=30,h7=e=>!isNaN(parseFloat(e));class p7{constructor(n,o={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{const u=sn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=o.owner}setCurrent(n){this.current=n,this.updatedAt=sn.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=h7(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,o){this.events[n]||(this.events[n]=new f4);const s=this.events[n].add(o);return n==="change"?()=>{s(),At.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,o){this.passiveEffect=n,this.stopPassiveEffect=o}set(n,o=!0){!o||!this.passiveEffect?this.updateAndNotify(n,o):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-s}jump(n,o=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=sn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Kd)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Kd);return dp(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(n){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=n(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function vi(e,n){return new p7(e,n)}function f7(e,n,o){e.hasValue(n)?e.getValue(n).set(o):e.addValue(n,vi(o))}function g7(e,n){const o=Ts(e,n);let{transitionEnd:s={},transition:l={},...u}=o||{};u={...u,...s};for(const m in u){const h=d7(u[m]);f7(e,m,h)}}const g4=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),y7="framerAppearId",bp="data-"+g4(y7);function kp(e){return e.props[bp]}const de=e=>!!(e&&e.getVelocity);function x7(e){return!!(de(e)&&e.add)}function bu(e,n){const o=e.getValue("willChange");if(x7(o))return o.add(n)}function K7({protectedKeys:e,needsAnimating:n},o){const s=e.hasOwnProperty(o)&&n[o]!==!0;return n[o]=!1,s}function Tp(e,n,{delay:o=0,transitionOverride:s,type:l}={}){var u;let{transition:m=e.getDefaultTransition(),transitionEnd:h,...p}=n;s&&(m=s);const f=[],y=l&&e.animationState&&e.animationState.getState()[l];for(const x in p){const w=e.getValue(x,(u=e.latestValues[x])!==null&&u!==void 0?u:null),b=p[x];if(b===void 0||y&&K7(y,x))continue;const S={delay:o,...Ju(m||{},x)};let N=!1;if(window.MotionHandoffAnimation){const E=kp(e);if(E){const z=window.MotionHandoffAnimation(E,x,At);z!==null&&(S.startTime=z,N=!0)}}bu(e,x),w.start(d4(x,w,b,e.shouldReduceMotion&&br.has(x)?{type:!1}:S,e,N));const T=w.animation;T&&f.push(T)}return h&&Promise.all(f).then(()=>{At.update(()=>{h&&g7(e,h)})}),f}function ku(e,n,o={}){var s;const l=Ts(e,n,o.type==="exit"?(s=e.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:u=e.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const m=l?()=>Promise.all(Tp(e,l,o)):()=>Promise.resolve(),h=e.variantChildren&&e.variantChildren.size?(f=0)=>{const{delayChildren:y=0,staggerChildren:x,staggerDirection:w}=u;return w7(e,n,y+f,x,w,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[f,y]=p==="beforeChildren"?[m,h]:[h,m];return f().then(()=>y())}else return Promise.all([m(),h(o.delay)])}function w7(e,n,o=0,s=0,l=1,u){const m=[],h=(e.variantChildren.size-1)*s,p=l===1?(f=0)=>f*s:(f=0)=>h-f*s;return Array.from(e.variantChildren).sort(v7).forEach((f,y)=>{f.notify("AnimationStart",n),m.push(ku(f,n,{...u,delay:o+p(y)}).then(()=>f.notify("AnimationComplete",n)))}),Promise.all(m)}function v7(e,n){return e.sortNodePosition(n)}function b7(e,n,o={}){e.notify("AnimationStart",n);let s;if(Array.isArray(n)){const l=n.map(u=>ku(e,u,o));s=Promise.all(l)}else if(typeof n=="string")s=ku(e,n,o);else{const l=typeof n=="function"?Ts(e,n,o.custom):n;s=Promise.all(Tp(e,l,o))}return s.then(()=>{e.notify("AnimationComplete",n)})}const k7=Xu.length;function jp(e){if(!e)return;if(!e.isControllingVariants){const o=e.parent?jp(e.parent)||{}:{};return e.props.initial!==void 0&&(o.initial=e.props.initial),o}const n={};for(let o=0;o<k7;o++){const s=Xu[o],l=e.props[s];(xi(l)||l===!1)&&(n[s]=l)}return n}const T7=[...Qu].reverse(),j7=Qu.length;function N7(e){return n=>Promise.all(n.map(({animation:o,options:s})=>b7(e,o,s)))}function C7(e){let n=N7(e),o=wd(),s=!0;const l=p=>(f,y)=>{var x;const w=Ts(e,y,p==="exit"?(x=e.presenceContext)===null||x===void 0?void 0:x.custom:void 0);if(w){const{transition:b,transitionEnd:S,...N}=w;f={...f,...N,...S}}return f};function u(p){n=p(e)}function m(p){const{props:f}=e,y=jp(e.parent)||{},x=[],w=new Set;let b={},S=1/0;for(let T=0;T<j7;T++){const E=T7[T],z=o[E],j=f[E]!==void 0?f[E]:y[E],D=xi(j),L=E===p?z.isActive:null;L===!1&&(S=T);let W=j===y[E]&&j!==f[E]&&D;if(W&&s&&e.manuallyAnimateOnMount&&(W=!1),z.protectedKeys={...b},!z.isActive&&L===null||!j&&!z.prevProp||ks(j)||typeof j=="boolean")continue;const U=S7(z.prevProp,j);let q=U||E===p&&z.isActive&&!W&&D||T>S&&D,ct=!1;const dt=Array.isArray(j)?j:[j];let Nt=dt.reduce(l(E),{});L===!1&&(Nt={});const{prevResolvedValues:ut={}}=z,Ht={...ut,...Nt},nt=at=>{q=!0,w.has(at)&&(ct=!0,w.delete(at)),z.needsAnimating[at]=!0;const V=e.getValue(at);V&&(V.liveStyle=!1)};for(const at in Ht){const V=Nt[at],J=ut[at];if(b.hasOwnProperty(at))continue;let H=!1;hu(V)&&hu(J)?H=!Lh(V,J):H=V!==J,H?V!=null?nt(at):w.add(at):V!==void 0&&w.has(at)?nt(at):z.protectedKeys[at]=!0}z.prevProp=j,z.prevResolvedValues=Nt,z.isActive&&(b={...b,...Nt}),s&&e.blockInitialAnimation&&(q=!1),q&&(!(W&&U)||ct)&&x.push(...dt.map(at=>({animation:at,options:{type:E}})))}if(w.size){const T={};w.forEach(E=>{const z=e.getBaseTarget(E),j=e.getValue(E);j&&(j.liveStyle=!0),T[E]=z??null}),x.push({animation:T})}let N=!!x.length;return s&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(N=!1),s=!1,N?n(x):Promise.resolve()}function h(p,f){var y;if(o[p].isActive===f)return Promise.resolve();(y=e.variantChildren)===null||y===void 0||y.forEach(w=>{var b;return(b=w.animationState)===null||b===void 0?void 0:b.setActive(p,f)}),o[p].isActive=f;const x=m(p);for(const w in o)o[w].protectedKeys={};return x}return{animateChanges:m,setActive:h,setAnimateFunction:u,getState:()=>o,reset:()=>{o=wd(),s=!0}}}function S7(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!Lh(n,e):!1}function dr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wd(){return{animate:dr(!0),whileInView:dr(),whileHover:dr(),whileTap:dr(),whileDrag:dr(),whileFocus:dr(),exit:dr()}}class Jn{constructor(n){this.isMounted=!1,this.node=n}update(){}}class P7 extends Jn{constructor(n){super(n),n.animationState||(n.animationState=C7(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();ks(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:o}=this.node.prevProps||{};n!==o&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let z7=0;class E7 extends Jn{constructor(){super(...arguments),this.id=z7++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===s)return;const l=this.node.animationState.setActive("exit",!n);o&&!n&&l.then(()=>o(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const A7={animation:{Feature:P7},exit:{Feature:E7}},Ye={x:!1,y:!1};function Np(){return Ye.x||Ye.y}function M7(e,n,o){var s;if(e instanceof Element)return[e];if(typeof e=="string"){let l=document;const u=(s=void 0)!==null&&s!==void 0?s:l.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e)}function Cp(e,n){const o=M7(e),s=new AbortController,l={passive:!0,...n,signal:s.signal};return[o,l,()=>s.abort()]}function vd(e){return n=>{n.pointerType==="touch"||Np()||e(n)}}function R7(e,n,o={}){const[s,l,u]=Cp(e,o),m=vd(h=>{const{target:p}=h,f=n(h);if(!f||!p)return;const y=vd(x=>{f(x),p.removeEventListener("pointerleave",y)});p.addEventListener("pointerleave",y,l)});return s.forEach(h=>{h.addEventListener("pointerenter",m,l)}),u}const y4=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ci=new WeakSet;function bd(e){return n=>{n.key==="Enter"&&e(n)}}function Hc(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const $7=(e,n)=>{const o=e.currentTarget;if(!o)return;const s=bd(()=>{if(ci.has(o))return;Hc(o,"down");const l=bd(()=>{Hc(o,"up")}),u=()=>Hc(o,"cancel");o.addEventListener("keyup",l,n),o.addEventListener("blur",u,n)});o.addEventListener("keydown",s,n),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),n)},D7=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function L7(e){return D7.has(e.tagName)||e.tabIndex!==-1}const Sp=(e,n)=>n?e===n?!0:Sp(e,n.parentElement):!1;function kd(e){return y4(e)&&!Np()}function I7(e,n,o={}){const[s,l,u]=Cp(e,o),m=h=>{const p=h.currentTarget;if(!kd(h)||ci.has(p))return;ci.add(p);const f=n(h),y=(b,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),!(!kd(b)||!ci.has(p))&&(ci.delete(p),f&&f(b,{success:S}))},x=b=>{y(b,o.useGlobalTarget||Sp(p,b.target))},w=b=>{y(b,!1)};window.addEventListener("pointerup",x,l),window.addEventListener("pointercancel",w,l)};return s.forEach(h=>{L7(h)||(h.tabIndex=0),(o.useGlobalTarget?window:h).addEventListener("pointerdown",m,l),h.addEventListener("focus",f=>$7(f,l),l)}),u}function B7(e){return e==="x"||e==="y"?Ye[e]?null:(Ye[e]=!0,()=>{Ye[e]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}function zi(e){return{point:{x:e.pageX,y:e.pageY}}}const O7=e=>n=>y4(n)&&e(n,zi(n));function bi(e,n,o,s={passive:!0}){return e.addEventListener(n,o,s),()=>e.removeEventListener(n,o)}function di(e,n,o,s){return bi(e,n,O7(o),s)}const Td=(e,n)=>Math.abs(e-n);function F7(e,n){const o=Td(e.x,n.x),s=Td(e.y,n.y);return Math.sqrt(o**2+s**2)}class Pp{constructor(n,o,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=qc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,b=F7(x.offset,{x:0,y:0})>=3;if(!w&&!b)return;const{point:S}=x,{timestamp:N}=ae;this.history.push({...S,timestamp:N});const{onStart:T,onMove:E}=this.handlers;w||(T&&T(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Uc(w,this.transformPagePoint),At.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:b,onSessionEnd:S,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=qc(x.type==="pointercancel"?this.lastMoveEventInfo:Uc(w,this.transformPagePoint),this.history);this.startEvent&&b&&b(x,T),S&&S(x,T)},!y4(n))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=s,this.contextWindow=l||window;const m=zi(n),h=Uc(m,this.transformPagePoint),{point:p}=h,{timestamp:f}=ae;this.history=[{...p,timestamp:f}];const{onSessionStart:y}=o;y&&y(n,qc(h,this.history)),this.removeListeners=Pi(di(this.contextWindow,"pointermove",this.handlePointerMove),di(this.contextWindow,"pointerup",this.handlePointerUp),di(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),Qn(this.updatePoint)}}function Uc(e,n){return n?{point:n(e.point)}:e}function jd(e,n){return{x:e.x-n.x,y:e.y-n.y}}function qc({point:e},n){return{point:e,delta:jd(e,zp(n)),offset:jd(e,V7(n)),velocity:G7(n,.1)}}function V7(e){return e[0]}function zp(e){return e[e.length-1]}function G7(e,n){if(e.length<2)return{x:0,y:0};let o=e.length-1,s=null;const l=zp(e);for(;o>=0&&(s=e[o],!(l.timestamp-s.timestamp>bn(n)));)o--;if(!s)return{x:0,y:0};const u=kn(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const m={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return m.x===1/0&&(m.x=0),m.y===1/0&&(m.y=0),m}function Qr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Ep=1e-4,W7=1-Ep,_7=1+Ep,Ap=.01,H7=0-Ap,U7=0+Ap;function Ae(e){return e.max-e.min}function q7(e,n,o){return Math.abs(e-n)<=o}function Nd(e,n,o,s=.5){e.origin=s,e.originPoint=Vt(n.min,n.max,e.origin),e.scale=Ae(o)/Ae(n),e.translate=Vt(o.min,o.max,e.origin)-e.originPoint,(e.scale>=W7&&e.scale<=_7||isNaN(e.scale))&&(e.scale=1),(e.translate>=H7&&e.translate<=U7||isNaN(e.translate))&&(e.translate=0)}function hi(e,n,o,s){Nd(e.x,n.x,o.x,s?s.originX:void 0),Nd(e.y,n.y,o.y,s?s.originY:void 0)}function Cd(e,n,o){e.min=o.min+n.min,e.max=e.min+Ae(n)}function Y7(e,n,o){Cd(e.x,n.x,o.x),Cd(e.y,n.y,o.y)}function Sd(e,n,o){e.min=n.min-o.min,e.max=e.min+Ae(n)}function pi(e,n,o){Sd(e.x,n.x,o.x),Sd(e.y,n.y,o.y)}function Q7(e,{min:n,max:o},s){return n!==void 0&&e<n?e=s?Vt(n,e,s.min):Math.max(e,n):o!==void 0&&e>o&&(e=s?Vt(o,e,s.max):Math.min(e,o)),e}function Pd(e,n,o){return{min:n!==void 0?e.min+n:void 0,max:o!==void 0?e.max+o-(e.max-e.min):void 0}}function X7(e,{top:n,left:o,bottom:s,right:l}){return{x:Pd(e.x,o,l),y:Pd(e.y,n,s)}}function zd(e,n){let o=n.min-e.min,s=n.max-e.max;return n.max-n.min<e.max-e.min&&([o,s]=[s,o]),{min:o,max:s}}function J7(e,n){return{x:zd(e.x,n.x),y:zd(e.y,n.y)}}function Z7(e,n){let o=.5;const s=Ae(e),l=Ae(n);return l>s?o=io(n.min,n.max-s,e.min):s>l&&(o=io(e.min,e.max-l,n.min)),Nn(0,1,o)}function tx(e,n){const o={};return n.min!==void 0&&(o.min=n.min-e.min),n.max!==void 0&&(o.max=n.max-e.min),o}const Tu=.35;function ex(e=Tu){return e===!1?e=0:e===!0&&(e=Tu),{x:Ed(e,"left","right"),y:Ed(e,"top","bottom")}}function Ed(e,n,o){return{min:Ad(e,n),max:Ad(e,o)}}function Ad(e,n){return typeof e=="number"?e:e[n]||0}const Md=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xr=()=>({x:Md(),y:Md()}),Rd=()=>({min:0,max:0}),Yt=()=>({x:Rd(),y:Rd()});function Fe(e){return[e("x"),e("y")]}function Mp({top:e,left:n,right:o,bottom:s}){return{x:{min:n,max:o},y:{min:e,max:s}}}function nx({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function rx(e,n){if(!n)return e;const o=n({x:e.left,y:e.top}),s=n({x:e.right,y:e.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}function Yc(e){return e===void 0||e===1}function ju({scale:e,scaleX:n,scaleY:o}){return!Yc(e)||!Yc(n)||!Yc(o)}function hr(e){return ju(e)||Rp(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Rp(e){return $d(e.x)||$d(e.y)}function $d(e){return e&&e!=="0%"}function hs(e,n,o){const s=e-o,l=n*s;return o+l}function Dd(e,n,o,s,l){return l!==void 0&&(e=hs(e,l,s)),hs(e,o,s)+n}function Nu(e,n=0,o=1,s,l){e.min=Dd(e.min,n,o,s,l),e.max=Dd(e.max,n,o,s,l)}function $p(e,{x:n,y:o}){Nu(e.x,n.translate,n.scale,n.originPoint),Nu(e.y,o.translate,o.scale,o.originPoint)}const Ld=.999999999999,Id=1.0000000000001;function ox(e,n,o,s=!1){const l=o.length;if(!l)return;n.x=n.y=1;let u,m;for(let h=0;h<l;h++){u=o[h],m=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Zr(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),m&&(n.x*=m.x.scale,n.y*=m.y.scale,$p(e,m)),s&&hr(u.latestValues)&&Zr(e,u.latestValues))}n.x<Id&&n.x>Ld&&(n.x=1),n.y<Id&&n.y>Ld&&(n.y=1)}function Jr(e,n){e.min=e.min+n,e.max=e.max+n}function Bd(e,n,o,s,l=.5){const u=Vt(e.min,e.max,l);Nu(e,n,o,u,s)}function Zr(e,n){Bd(e.x,n.x,n.scaleX,n.scale,n.originX),Bd(e.y,n.y,n.scaleY,n.scale,n.originY)}function Dp(e,n){return Mp(rx(e.getBoundingClientRect(),n))}function ix(e,n,o){const s=Dp(e,o),{scroll:l}=n;return l&&(Jr(s.x,l.offset.x),Jr(s.y,l.offset.y)),s}const Lp=({current:e})=>e?e.ownerDocument.defaultView:null,ax=new WeakMap;class sx{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Yt(),this.visualElement=n}start(n,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(zi(y).point)},u=(y,x)=>{const{drag:w,dragPropagation:b,onDragStart:S}=this.getProps();if(w&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=B7(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(T=>{let E=this.getAxisMotionValue(T).get()||0;if(an.test(E)){const{projection:z}=this.visualElement;if(z&&z.layout){const j=z.layout.layoutBox[T];j&&(E=Ae(j)*(parseFloat(E)/100))}}this.originPoint[T]=E}),S&&At.postRender(()=>S(y,x)),bu(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},m=(y,x)=>{const{dragPropagation:w,dragDirectionLock:b,onDirectionLock:S,onDrag:N}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:T}=x;if(b&&this.currentDirection===null){this.currentDirection=lx(T),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",x.point,T),this.updateAxis("y",x.point,T),this.visualElement.render(),N&&N(y,x)},h=(y,x)=>this.stop(y,x),p=()=>Fe(y=>{var x;return this.getAnimationState(y)==="paused"&&((x=this.getAxisMotionValue(y).animation)===null||x===void 0?void 0:x.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Pp(n,{onSessionStart:l,onStart:u,onMove:m,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:Lp(this.visualElement)})}stop(n,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=o;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&At.postRender(()=>u(n,o))}cancel(){this.isDragging=!1;const{projection:n,animationState:o}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(n,o,s){const{drag:l}=this.getProps();if(!s||!Ua(n,l,this.currentDirection))return;const u=this.getAxisMotionValue(n);let m=this.originPoint[n]+s[n];this.constraints&&this.constraints[n]&&(m=Q7(m,this.constraints[n],this.elastic[n])),u.set(m)}resolveConstraints(){var n;const{dragConstraints:o,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,u=this.constraints;o&&Qr(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&l?this.constraints=X7(l.layoutBox,o):this.constraints=!1,this.elastic=ex(s),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Fe(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=tx(l.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:o}=this.getProps();if(!n||!Qr(n))return!1;const s=n.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=ix(s,l.root,this.visualElement.getTransformPagePoint());let m=J7(l.layout.layoutBox,u);if(o){const h=o(nx(m));this.hasMutatedConstraints=!!h,h&&(m=Mp(h))}return m}startAnimation(n){const{drag:o,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:m,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},f=Fe(y=>{if(!Ua(y,o,this.currentDirection))return;let x=p&&p[y]||{};m&&(x={min:0,max:0});const w=l?200:1e6,b=l?40:1e7,S={type:"inertia",velocity:s?n[y]:0,bounceStiffness:w,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(y,S)});return Promise.all(f).then(h)}startAxisValueAnimation(n,o){const s=this.getAxisMotionValue(n);return bu(this.visualElement,n),s.start(d4(n,s,0,o,this.visualElement,!1))}stopAnimation(){Fe(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Fe(n=>{var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(n){var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(n){const o=`_drag${n.toUpperCase()}`,s=this.visualElement.getProps(),l=s[o];return l||this.visualElement.getValue(n,(s.initial?s.initial[n]:void 0)||0)}snapToCursor(n){Fe(o=>{const{drag:s}=this.getProps();if(!Ua(o,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(o);if(l&&l.layout){const{min:m,max:h}=l.layout.layoutBox[o];u.set(n[o]-Vt(m,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!Qr(o)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Fe(m=>{const h=this.getAxisMotionValue(m);if(h&&this.constraints!==!1){const p=h.get();l[m]=Z7({min:p,max:p},this.constraints[m])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Fe(m=>{if(!Ua(m,n,null))return;const h=this.getAxisMotionValue(m),{min:p,max:f}=this.constraints[m];h.set(Vt(p,f,l[m]))})}addListeners(){if(!this.visualElement.current)return;ax.set(this.visualElement,this);const n=this.visualElement.current,o=di(n,"pointerdown",p=>{const{drag:f,dragListener:y=!0}=this.getProps();f&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Qr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),At.read(s);const m=bi(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:f})=>{this.isDragging&&f&&(Fe(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=p[y].translate,x.set(x.get()+p[y].translate))}),this.visualElement.render())}));return()=>{m(),o(),u(),h&&h()}}getProps(){const n=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:m=Tu,dragMomentum:h=!0}=n;return{...n,drag:o,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:m,dragMomentum:h}}}function Ua(e,n,o){return(n===!0||n===e)&&(o===null||o===e)}function lx(e,n=10){let o=null;return Math.abs(e.y)>n?o="y":Math.abs(e.x)>n&&(o="x"),o}class cx extends Jn{constructor(n){super(n),this.removeGroupControls=Ee,this.removeListeners=Ee,this.controls=new sx(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ee}unmount(){this.removeGroupControls(),this.removeListeners()}}const Od=e=>(n,o)=>{e&&At.postRender(()=>e(n,o))};class ux extends Jn{constructor(){super(...arguments),this.removePointerDownListener=Ee}onPointerDown(n){this.session=new Pp(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lp(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:o,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:Od(n),onStart:Od(o),onMove:s,onEnd:(u,m)=>{delete this.session,l&&At.postRender(()=>l(u,m))}}}mount(){this.removePointerDownListener=di(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ns=v.createContext(null);function mx(){const e=v.useContext(Ns);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:o,register:s}=e,l=v.useId();v.useEffect(()=>s(l),[]);const u=v.useCallback(()=>o&&o(l),[l,o]);return!n&&o?[!1,u]:[!0]}const x4=v.createContext({}),Ip=v.createContext({}),es={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Fd(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const ai={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(it.test(e))e=parseFloat(e);else return e;const o=Fd(e,n.target.x),s=Fd(e,n.target.y);return`${o}% ${s}%`}},dx={correct:(e,{treeScale:n,projectionDelta:o})=>{const s=e,l=Xn.parse(e);if(l.length>5)return s;const u=Xn.createTransformer(e),m=typeof l[0]!="number"?1:0,h=o.x.scale*n.x,p=o.y.scale*n.y;l[0+m]/=h,l[1+m]/=p;const f=Vt(h,p,.5);return typeof l[2+m]=="number"&&(l[2+m]/=f),typeof l[3+m]=="number"&&(l[3+m]/=f),u(l)}},ps={};function hx(e){Object.assign(ps,e)}const{schedule:K4}=Bh(queueMicrotask,!1);class px extends v.Component{componentDidMount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=n;hx(fx),u&&(o.group&&o.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),es.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:o,visualElement:s,drag:l,isPresent:u}=this.props,m=s.projection;return m&&(m.isPresent=u,l||n.layoutDependency!==o||o===void 0?m.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?m.promote():m.relegate()||At.postRender(()=>{const h=m.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),K4.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:l}=n;l&&(l.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Bp(e){const[n,o]=mx(),s=v.useContext(x4);return i.jsx(px,{...e,layoutGroup:s,switchLayoutGroup:v.useContext(Ip),isPresent:n,safeToRemove:o})}const fx={borderRadius:{...ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ai,borderTopRightRadius:ai,borderBottomLeftRadius:ai,borderBottomRightRadius:ai,boxShadow:dx},Op=["TopLeft","TopRight","BottomLeft","BottomRight"],gx=Op.length,Vd=e=>typeof e=="string"?parseFloat(e):e,Gd=e=>typeof e=="number"||it.test(e);function yx(e,n,o,s,l,u){l?(e.opacity=Vt(0,o.opacity!==void 0?o.opacity:1,xx(s)),e.opacityExit=Vt(n.opacity!==void 0?n.opacity:1,0,Kx(s))):u&&(e.opacity=Vt(n.opacity!==void 0?n.opacity:1,o.opacity!==void 0?o.opacity:1,s));for(let m=0;m<gx;m++){const h=`border${Op[m]}Radius`;let p=Wd(n,h),f=Wd(o,h);if(p===void 0&&f===void 0)continue;p||(p=0),f||(f=0),p===0||f===0||Gd(p)===Gd(f)?(e[h]=Math.max(Vt(Vd(p),Vd(f),s),0),(an.test(f)||an.test(p))&&(e[h]+="%")):e[h]=f}(n.rotate||o.rotate)&&(e.rotate=Vt(n.rotate||0,o.rotate||0,s))}function Wd(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const xx=Fp(0,.5,Hh),Kx=Fp(.5,.95,Ee);function Fp(e,n,o){return s=>s<e?0:s>n?1:o(io(e,n,s))}function _d(e,n){e.min=n.min,e.max=n.max}function Oe(e,n){_d(e.x,n.x),_d(e.y,n.y)}function Hd(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function Ud(e,n,o,s,l){return e-=n,e=hs(e,1/o,s),l!==void 0&&(e=hs(e,1/l,s)),e}function wx(e,n=0,o=1,s=.5,l,u=e,m=e){if(an.test(n)&&(n=parseFloat(n),n=Vt(m.min,m.max,n/100)-m.min),typeof n!="number")return;let h=Vt(u.min,u.max,s);e===u&&(h-=n),e.min=Ud(e.min,n,o,h,l),e.max=Ud(e.max,n,o,h,l)}function qd(e,n,[o,s,l],u,m){wx(e,n[o],n[s],n[l],n.scale,u,m)}const vx=["x","scaleX","originX"],bx=["y","scaleY","originY"];function Yd(e,n,o,s){qd(e.x,n,vx,o?o.x:void 0,s?s.x:void 0),qd(e.y,n,bx,o?o.y:void 0,s?s.y:void 0)}function Qd(e){return e.translate===0&&e.scale===1}function Vp(e){return Qd(e.x)&&Qd(e.y)}function Xd(e,n){return e.min===n.min&&e.max===n.max}function kx(e,n){return Xd(e.x,n.x)&&Xd(e.y,n.y)}function Jd(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Gp(e,n){return Jd(e.x,n.x)&&Jd(e.y,n.y)}function Zd(e){return Ae(e.x)/Ae(e.y)}function t0(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class Tx{constructor(){this.members=[]}add(n){h4(this.members,n),n.scheduleRender()}remove(n){if(p4(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(n){const o=this.members.findIndex(l=>n===l);if(o===0)return!1;let s;for(let l=o;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(n,o){const s=this.lead;if(n!==s&&(this.prevLead=s,this.lead=n,n.show(),s)){s.instance&&s.scheduleRender(),n.scheduleRender(),n.resumeFrom=s,o&&(n.resumeFrom.preserveOpacity=!0),s.snapshot&&(n.snapshot=s.snapshot,n.snapshot.latestValues=s.animationValues||s.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:l}=n.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:o,resumingFrom:s}=n;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jx(e,n,o){let s="";const l=e.x.translate/n.x,u=e.y.translate/n.y,m=o?.z||0;if((l||u||m)&&(s=`translate3d(${l}px, ${u}px, ${m}px) `),(n.x!==1||n.y!==1)&&(s+=`scale(${1/n.x}, ${1/n.y}) `),o){const{transformPerspective:f,rotate:y,rotateX:x,rotateY:w,skewX:b,skewY:S}=o;f&&(s=`perspective(${f}px) ${s}`),y&&(s+=`rotate(${y}deg) `),x&&(s+=`rotateX(${x}deg) `),w&&(s+=`rotateY(${w}deg) `),b&&(s+=`skewX(${b}deg) `),S&&(s+=`skewY(${S}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const Nx=(e,n)=>e.depth-n.depth;class Cx{constructor(){this.children=[],this.isDirty=!1}add(n){h4(this.children,n),this.isDirty=!0}remove(n){p4(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Nx),this.isDirty=!1,this.children.forEach(n)}}function ns(e){const n=de(e)?e.get():e;return m7(n)?n.toValue():n}function Sx(e,n){const o=sn.now(),s=({timestamp:l})=>{const u=l-o;u>=n&&(Qn(s),e(u-n))};return At.read(s,!0),()=>Qn(s)}function Px(e){return e instanceof SVGElement&&e.tagName!=="svg"}function zx(e,n,o){const s=de(e)?e:vi(e);return s.start(d4("",s,n,o)),s.animation}const pr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ui=typeof window<"u"&&window.MotionDebug!==void 0,Qc=["","X","Y","Z"],Ex={visibility:"hidden"},e0=1e3;let Ax=0;function Xc(e,n,o,s){const{latestValues:l}=n;l[e]&&(o[e]=l[e],n.setStaticValue(e,0),s&&(s[e]=0))}function Wp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const o=kp(n);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:l,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(o,"transform",At,!(l||u))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&Wp(s)}function _p({attachResizeListener:e,defaultParent:n,measureScroll:o,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(m={},h=n?.()){this.id=Ax++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ui&&(pr.totalNodes=pr.resolvedTargetDeltas=pr.recalculatedProjection=0),this.nodes.forEach($x),this.nodes.forEach(Ox),this.nodes.forEach(Fx),this.nodes.forEach(Dx),ui&&window.MotionDebug.record(pr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=m,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Cx)}addEventListener(m,h){return this.eventHandlers.has(m)||this.eventHandlers.set(m,new f4),this.eventHandlers.get(m).add(h)}notifyListeners(m,...h){const p=this.eventHandlers.get(m);p&&p.notify(...h)}hasListeners(m){return this.eventHandlers.has(m)}mount(m,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Px(m),this.instance=m;const{layoutId:p,layout:f,visualElement:y}=this.options;if(y&&!y.current&&y.mount(m),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(f||p)&&(this.isLayoutDirty=!0),e){let x;const w=()=>this.root.updateBlockedByResize=!1;e(m,()=>{this.root.updateBlockedByResize=!0,x&&x(),x=Sx(w,250),es.hasAnimatedSinceResize&&(es.hasAnimatedSinceResize=!1,this.nodes.forEach(r0))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&y&&(p||f)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:w,hasRelativeTargetChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||y.getDefaultTransition()||Hx,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=y.getProps(),z=!this.targetLayout||!Gp(this.targetLayout,S)||b,j=!w&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||j||w&&(z||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(x,j);const D={...Ju(N,"layout"),onPlay:T,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else w||r0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const m=this.getStack();m&&m.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Vx),this.animationId++)}getTransformTemplate(){const{visualElement:m}=this.options;return m&&m.getProps().transformTemplate}willUpdate(m=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Wp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),m&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n0);return}this.isUpdating||this.nodes.forEach(Ix),this.isUpdating=!1,this.nodes.forEach(Bx),this.nodes.forEach(Mx),this.nodes.forEach(Rx),this.clearAllSnapshots();const h=sn.now();ae.delta=Nn(0,1e3/60,h-ae.timestamp),ae.timestamp=h,ae.isProcessing=!0,Fc.update.process(ae),Fc.preRender.process(ae),Fc.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,K4.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Lx),this.sharedNodes.forEach(Gx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,At.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const m=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,m?m.layoutBox:void 0)}updateScroll(m="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===m&&(h=!1),h){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:m,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const m=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Vp(this.projectionDelta),p=this.getTransformTemplate(),f=p?p(this.latestValues,""):void 0,y=f!==this.prevTransformTemplateValue;m&&(h||hr(this.latestValues)||y)&&(l(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(m=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return m&&(p=this.removeTransform(p)),Ux(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:h}=this.options;if(!h)return Yt();const p=h.measureViewportBox();if(!(((m=this.scroll)===null||m===void 0?void 0:m.wasRoot)||this.path.some(qx))){const{scroll:y}=this.root;y&&(Jr(p.x,y.offset.x),Jr(p.y,y.offset.y))}return p}removeElementScroll(m){var h;const p=Yt();if(Oe(p,m),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return p;for(let f=0;f<this.path.length;f++){const y=this.path[f],{scroll:x,options:w}=y;y!==this.root&&x&&w.layoutScroll&&(x.wasRoot&&Oe(p,m),Jr(p.x,x.offset.x),Jr(p.y,x.offset.y))}return p}applyTransform(m,h=!1){const p=Yt();Oe(p,m);for(let f=0;f<this.path.length;f++){const y=this.path[f];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Zr(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),hr(y.latestValues)&&Zr(p,y.latestValues)}return hr(this.latestValues)&&Zr(p,this.latestValues),p}removeTransform(m){const h=Yt();Oe(h,m);for(let p=0;p<this.path.length;p++){const f=this.path[p];if(!f.instance||!hr(f.latestValues))continue;ju(f.latestValues)&&f.updateSnapshot();const y=Yt(),x=f.measurePageBox();Oe(y,x),Yd(h,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,y)}return hr(this.latestValues)&&Yd(h,this.latestValues),h}setTargetDelta(m){this.targetDelta=m,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(m){this.options={...this.options,...m,crossfade:m.crossfade!==void 0?m.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(m=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(m||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:w}=this.options;if(!(!this.layout||!(x||w))){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),pi(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Yt(),this.targetWithTransforms=Yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Y7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Oe(this.target,this.layout.layoutBox),$p(this.target,this.targetDelta)):Oe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),pi(this.relativeTargetOrigin,this.target,b.target),Oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ui&&pr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ju(this.parent.latestValues)||Rp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var m;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let f=!0;if((this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(f=!1),f)return;const{layout:y,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||x))return;Oe(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,b=this.treeScale.y;ox(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Yt());const{target:S}=h;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Hd(this.prevProjectionDelta.x,this.projectionDelta.x),Hd(this.prevProjectionDelta.y,this.projectionDelta.y)),hi(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==w||this.treeScale.y!==b||!t0(this.projectionDelta.x,this.prevProjectionDelta.x)||!t0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),ui&&pr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(m=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),m){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xr(),this.projectionDelta=Xr(),this.projectionDeltaWithTransform=Xr()}setAnimationOrigin(m,h=!1){const p=this.snapshot,f=p?p.latestValues:{},y={...this.latestValues},x=Xr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=Yt(),b=p?p.source:void 0,S=this.layout?this.layout.source:void 0,N=b!==S,T=this.getStack(),E=!T||T.members.length<=1,z=!!(N&&!E&&this.options.crossfade===!0&&!this.path.some(_x));this.animationProgress=0;let j;this.mixTargetDelta=D=>{const L=D/1e3;o0(x.x,m.x,L),o0(x.y,m.y,L),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pi(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Wx(this.relativeTarget,this.relativeTargetOrigin,w,L),j&&kx(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=Yt()),Oe(j,this.relativeTarget)),N&&(this.animationValues=y,yx(y,f,this.latestValues,L,z,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(m){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{es.hasAnimatedSinceResize=!0,this.currentAnimation=zx(0,e0,{...m,onUpdate:h=>{this.mixTargetDelta(h),m.onUpdate&&m.onUpdate(h)},onComplete:()=>{m.onComplete&&m.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const m=this.getStack();m&&m.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const m=this.getLead();let{targetWithTransforms:h,target:p,layout:f,latestValues:y}=m;if(!(!h||!p||!f)){if(this!==m&&this.layout&&f&&Hp(this.options.animationType,this.layout.layoutBox,f.layoutBox)){p=this.target||Yt();const x=Ae(this.layout.layoutBox.x);p.x.min=m.target.x.min,p.x.max=p.x.min+x;const w=Ae(this.layout.layoutBox.y);p.y.min=m.target.y.min,p.y.max=p.y.min+w}Oe(h,p),Zr(h,y),hi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(m,h){this.sharedNodes.has(m)||this.sharedNodes.set(m,new Tx),this.sharedNodes.get(m).add(h);const f=h.options.initialPromotionConfig;h.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(h):void 0})}isLead(){const m=this.getStack();return m?m.lead===this:!0}getLead(){var m;const{layoutId:h}=this.options;return h?((m=this.getStack())===null||m===void 0?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:h}=this.options;return h?(m=this.getStack())===null||m===void 0?void 0:m.prevLead:void 0}getStack(){const{layoutId:m}=this.options;if(m)return this.root.sharedNodes.get(m)}promote({needsReset:m,transition:h,preserveFollowOpacity:p}={}){const f=this.getStack();f&&f.promote(this,p),m&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const m=this.getStack();return m?m.relegate(this):!1}resetSkewAndRotation(){const{visualElement:m}=this.options;if(!m)return;let h=!1;const{latestValues:p}=m;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const f={};p.z&&Xc("z",m,f,this.animationValues);for(let y=0;y<Qc.length;y++)Xc(`rotate${Qc[y]}`,m,f,this.animationValues),Xc(`skew${Qc[y]}`,m,f,this.animationValues);m.render();for(const y in f)m.setStaticValue(y,f[y]),this.animationValues&&(this.animationValues[y]=f[y]);m.scheduleRender()}getProjectionStyles(m){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ex;const f={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=ns(m?.pointerEvents)||"",f.transform=y?y(this.latestValues,""):"none",f;const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){const N={};return this.options.layoutId&&(N.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,N.pointerEvents=ns(m?.pointerEvents)||""),this.hasProjected&&!hr(this.latestValues)&&(N.transform=y?y({},""):"none",this.hasProjected=!1),N}const w=x.animationValues||x.latestValues;this.applyTransformsToTarget(),f.transform=jx(this.projectionDeltaWithTransform,this.treeScale,w),y&&(f.transform=y(w,f.transform));const{x:b,y:S}=this.projectionDelta;f.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,x.animationValues?f.opacity=x===this?(p=(h=w.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:f.opacity=x===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const N in ps){if(w[N]===void 0)continue;const{correct:T,applyTo:E}=ps[N],z=f.transform==="none"?w[N]:T(w[N],x);if(E){const j=E.length;for(let D=0;D<j;D++)f[E[D]]=z}else f[N]=z}return this.options.layoutId&&(f.pointerEvents=x===this?ns(m?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(m=>{var h;return(h=m.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(n0),this.root.sharedNodes.clear()}}}function Mx(e){e.updateLayout()}function Rx(e){var n;const o=((n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=e.layout,{animationType:u}=e.options,m=o.source!==e.layout.source;u==="size"?Fe(x=>{const w=m?o.measuredBox[x]:o.layoutBox[x],b=Ae(w);w.min=s[x].min,w.max=w.min+b}):Hp(u,o.layoutBox,s)&&Fe(x=>{const w=m?o.measuredBox[x]:o.layoutBox[x],b=Ae(s[x]);w.max=w.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+b)});const h=Xr();hi(h,s,o.layoutBox);const p=Xr();m?hi(p,e.applyTransform(l,!0),o.measuredBox):hi(p,s,o.layoutBox);const f=!Vp(h);let y=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:w,layout:b}=x;if(w&&b){const S=Yt();pi(S,o.layoutBox,w.layoutBox);const N=Yt();pi(N,s,b.layoutBox),Gp(S,N)||(y=!0),x.options.layoutRoot&&(e.relativeTarget=N,e.relativeTargetOrigin=S,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:o,delta:p,layoutDelta:h,hasLayoutChanged:f,hasRelativeTargetChanged:y})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function $x(e){ui&&pr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Dx(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Lx(e){e.clearSnapshot()}function n0(e){e.clearMeasurements()}function Ix(e){e.isLayoutDirty=!1}function Bx(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function r0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ox(e){e.resolveTargetDelta()}function Fx(e){e.calcProjection()}function Vx(e){e.resetSkewAndRotation()}function Gx(e){e.removeLeadSnapshot()}function o0(e,n,o){e.translate=Vt(n.translate,0,o),e.scale=Vt(n.scale,1,o),e.origin=n.origin,e.originPoint=n.originPoint}function i0(e,n,o,s){e.min=Vt(n.min,o.min,s),e.max=Vt(n.max,o.max,s)}function Wx(e,n,o,s){i0(e.x,n.x,o.x,s),i0(e.y,n.y,o.y,s)}function _x(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Hx={duration:.45,ease:[.4,0,.1,1]},a0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),s0=a0("applewebkit/")&&!a0("chrome/")?Math.round:Ee;function l0(e){e.min=s0(e.min),e.max=s0(e.max)}function Ux(e){l0(e.x),l0(e.y)}function Hp(e,n,o){return e==="position"||e==="preserve-aspect"&&!q7(Zd(n),Zd(o),.2)}function qx(e){var n;return e!==e.root&&((n=e.scroll)===null||n===void 0?void 0:n.wasRoot)}const Yx=_p({attachResizeListener:(e,n)=>bi(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jc={current:void 0},Up=_p({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jc.current){const e=new Yx({});e.mount(window),e.setOptions({layoutScroll:!0}),Jc.current=e}return Jc.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Qx={pan:{Feature:ux},drag:{Feature:cx,ProjectionNode:Up,MeasureLayout:Bp}};function c0(e,n,o){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",o==="Start");const l="onHover"+o,u=s[l];u&&At.postRender(()=>u(n,zi(n)))}class Xx extends Jn{mount(){const{current:n}=this.node;n&&(this.unmount=R7(n,o=>(c0(this.node,o,"Start"),s=>c0(this.node,s,"End"))))}unmount(){}}class Jx extends Jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Pi(bi(this.node.current,"focus",()=>this.onFocus()),bi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u0(e,n,o){const{props:s}=e;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",o==="Start");const l="onTap"+(o==="End"?"":o),u=s[l];u&&At.postRender(()=>u(n,zi(n)))}class Zx extends Jn{mount(){const{current:n}=this.node;n&&(this.unmount=I7(n,o=>(u0(this.node,o,"Start"),(s,{success:l})=>u0(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Cu=new WeakMap,Zc=new WeakMap,tK=e=>{const n=Cu.get(e.target);n&&n(e)},eK=e=>{e.forEach(tK)};function nK({root:e,...n}){const o=e||document;Zc.has(o)||Zc.set(o,{});const s=Zc.get(o),l=JSON.stringify(n);return s[l]||(s[l]=new IntersectionObserver(eK,{root:e,...n})),s[l]}function rK(e,n,o){const s=nK(n);return Cu.set(e,o),s.observe(e),()=>{Cu.delete(e),s.unobserve(e)}}const oK={some:0,all:1};class iK extends Jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:o,margin:s,amount:l="some",once:u}=n,m={root:o?o.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:oK[l]},h=p=>{const{isIntersecting:f}=p;if(this.isInView===f||(this.isInView=f,u&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),w=f?y:x;w&&w(p)};return rK(this.node.current,m,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:o}=this.node;["amount","margin","root"].some(aK(n,o))&&this.startObserver()}unmount(){}}function aK({viewport:e={}},{viewport:n={}}={}){return o=>e[o]!==n[o]}const sK={inView:{Feature:iK},tap:{Feature:Zx},focus:{Feature:Jx},hover:{Feature:Xx}},lK={layout:{ProjectionNode:Up,MeasureLayout:Bp}},w4=v.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Cs=v.createContext({}),v4=typeof window<"u",qp=v4?v.useLayoutEffect:v.useEffect,Yp=v.createContext({strict:!1});function cK(e,n,o,s,l){var u,m;const{visualElement:h}=v.useContext(Cs),p=v.useContext(Yp),f=v.useContext(Ns),y=v.useContext(w4).reducedMotion,x=v.useRef(null);s=s||p.renderer,!x.current&&s&&(x.current=s(e,{visualState:n,parent:h,props:o,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:y}));const w=x.current,b=v.useContext(Ip);w&&!w.projection&&l&&(w.type==="html"||w.type==="svg")&&uK(x.current,o,l,b);const S=v.useRef(!1);v.useInsertionEffect(()=>{w&&S.current&&w.update(o,f)});const N=o[bp],T=v.useRef(!!N&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,N))&&((m=window.MotionHasOptimisedAnimation)===null||m===void 0?void 0:m.call(window,N)));return qp(()=>{w&&(S.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),K4.render(w.render),T.current&&w.animationState&&w.animationState.animateChanges())}),v.useEffect(()=>{w&&(!T.current&&w.animationState&&w.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,N)}),T.current=!1))}),w}function uK(e,n,o,s){const{layoutId:l,layout:u,drag:m,dragConstraints:h,layoutScroll:p,layoutRoot:f}=n;e.projection=new o(e.latestValues,n["data-framer-portal-id"]?void 0:Qp(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!m||h&&Qr(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:f})}function Qp(e){if(e)return e.options.allowProjection!==!1?e.projection:Qp(e.parent)}function mK(e,n,o){return v.useCallback(s=>{s&&e.mount&&e.mount(s),n&&(s?n.mount(s):n.unmount()),o&&(typeof o=="function"?o(s):Qr(o)&&(o.current=s))},[n])}function Ss(e){return ks(e.animate)||Xu.some(n=>xi(e[n]))}function Xp(e){return!!(Ss(e)||e.variants)}function dK(e,n){if(Ss(e)){const{initial:o,animate:s}=e;return{initial:o===!1||xi(o)?o:void 0,animate:xi(s)?s:void 0}}return e.inherit!==!1?n:{}}function hK(e){const{initial:n,animate:o}=dK(e,v.useContext(Cs));return v.useMemo(()=>({initial:n,animate:o}),[m0(n),m0(o)])}function m0(e){return Array.isArray(e)?e.join(" "):e}const d0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const e in d0)ao[e]={isEnabled:n=>d0[e].some(o=>!!n[o])};function pK(e){for(const n in e)ao[n]={...ao[n],...e[n]}}const fK=Symbol.for("motionComponentSymbol");function gK({preloadedFeatures:e,createVisualElement:n,useRender:o,useVisualState:s,Component:l}){e&&pK(e);function u(h,p){let f;const y={...v.useContext(w4),...h,layoutId:yK(h)},{isStatic:x}=y,w=hK(h),b=s(h,x);if(!x&&v4){xK();const S=KK(y);f=S.MeasureLayout,w.visualElement=cK(l,b,y,n,S.ProjectionNode)}return i.jsxs(Cs.Provider,{value:w,children:[f&&w.visualElement?i.jsx(f,{visualElement:w.visualElement,...y}):null,o(l,h,mK(b,w.visualElement,p),b,x,w.visualElement)]})}const m=v.forwardRef(u);return m[fK]=l,m}function yK({layoutId:e}){const n=v.useContext(x4).id;return n&&e!==void 0?n+"-"+e:e}function xK(e,n){v.useContext(Yp).strict}function KK(e){const{drag:n,layout:o}=ao;if(!n&&!o)return{};const s={...n,...o};return{MeasureLayout:n?.isEnabled(e)||o?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const wK=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function b4(e){return typeof e!="string"||e.includes("-")?!1:!!(wK.indexOf(e)>-1||/[A-Z]/u.test(e))}function Jp(e,{style:n,vars:o},s,l){Object.assign(e.style,n,l&&l.getProjectionStyles(s));for(const u in o)e.style.setProperty(u,o[u])}const Zp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function t2(e,n,o,s){Jp(e,n,void 0,s);for(const l in n.attrs)e.setAttribute(Zp.has(l)?l:g4(l),n.attrs[l])}function e2(e,{layout:n,layoutId:o}){return br.has(e)||e.startsWith("origin")||(n||o!==void 0)&&(!!ps[e]||e==="opacity")}function k4(e,n,o){var s;const{style:l}=e,u={};for(const m in l)(de(l[m])||n.style&&de(n.style[m])||e2(m,e)||((s=o?.getValue(m))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(u[m]=l[m]);return u}function n2(e,n,o){const s=k4(e,n,o);for(const l in e)if(de(e[l])||de(n[l])){const u=Ni.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=e[l]}return s}function T4(e){const n=v.useRef(null);return n.current===null&&(n.current=e()),n.current}function vK({scrapeMotionValuesFromProps:e,createRenderState:n,onMount:o},s,l,u){const m={latestValues:bK(s,l,u,e),renderState:n()};return o&&(m.mount=h=>o(s,h,m)),m}const r2=e=>(n,o)=>{const s=v.useContext(Cs),l=v.useContext(Ns),u=()=>vK(e,n,s,l);return o?u():T4(u)};function bK(e,n,o,s){const l={},u=s(e,{});for(const w in u)l[w]=ns(u[w]);let{initial:m,animate:h}=e;const p=Ss(e),f=Xp(e);n&&f&&!p&&e.inherit!==!1&&(m===void 0&&(m=n.initial),h===void 0&&(h=n.animate));let y=o?o.initial===!1:!1;y=y||m===!1;const x=y?h:m;if(x&&typeof x!="boolean"&&!ks(x)){const w=Array.isArray(x)?x:[x];for(let b=0;b<w.length;b++){const S=Yu(e,w[b]);if(S){const{transitionEnd:N,transition:T,...E}=S;for(const z in E){let j=E[z];if(Array.isArray(j)){const D=y?j.length-1:0;j=j[D]}j!==null&&(l[z]=j)}for(const z in N)l[z]=N[z]}}}return l}const j4=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),o2=()=>({...j4(),attrs:{}}),i2=(e,n)=>n&&typeof e=="number"?n.transform(e):e,kK={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TK=Ni.length;function jK(e,n,o){let s="",l=!0;for(let u=0;u<TK;u++){const m=Ni[u],h=e[m];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(m.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||o){const f=i2(h,i4[m]);if(!p){l=!1;const y=kK[m]||m;s+=`${y}(${f}) `}o&&(n[m]=f)}}return s=s.trim(),o?s=o(n,l?"":s):l&&(s="none"),s}function N4(e,n,o){const{style:s,vars:l,transformOrigin:u}=e;let m=!1,h=!1;for(const p in n){const f=n[p];if(br.has(p)){m=!0;continue}else if(Xh(p)){l[p]=f;continue}else{const y=i2(f,i4[p]);p.startsWith("origin")?(h=!0,u[p]=y):s[p]=y}}if(n.transform||(m||o?s.transform=jK(n,e.transform,o):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:f="50%",originZ:y=0}=u;s.transformOrigin=`${p} ${f} ${y}`}}function h0(e,n,o){return typeof e=="string"?e:it.transform(n+o*e)}function NK(e,n,o){const s=h0(n,e.x,e.width),l=h0(o,e.y,e.height);return`${s} ${l}`}const CK={offset:"stroke-dashoffset",array:"stroke-dasharray"},SK={offset:"strokeDashoffset",array:"strokeDasharray"};function PK(e,n,o=1,s=0,l=!0){e.pathLength=1;const u=l?CK:SK;e[u.offset]=it.transform(-s);const m=it.transform(n),h=it.transform(o);e[u.array]=`${m} ${h}`}function C4(e,{attrX:n,attrY:o,attrScale:s,originX:l,originY:u,pathLength:m,pathSpacing:h=1,pathOffset:p=0,...f},y,x){if(N4(e,f,x),y){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:w,style:b,dimensions:S}=e;w.transform&&(S&&(b.transform=w.transform),delete w.transform),S&&(l!==void 0||u!==void 0||b.transform)&&(b.transformOrigin=NK(S,l!==void 0?l:.5,u!==void 0?u:.5)),n!==void 0&&(w.x=n),o!==void 0&&(w.y=o),s!==void 0&&(w.scale=s),m!==void 0&&PK(w,m,h,p,!1)}const S4=e=>typeof e=="string"&&e.toLowerCase()==="svg",zK={useVisualState:r2({scrapeMotionValuesFromProps:n2,createRenderState:o2,onMount:(e,n,{renderState:o,latestValues:s})=>{At.read(()=>{try{o.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}}),At.render(()=>{C4(o,s,S4(n.tagName),e.transformTemplate),t2(n,o)})}})},EK={useVisualState:r2({scrapeMotionValuesFromProps:k4,createRenderState:j4})};function a2(e,n,o){for(const s in n)!de(n[s])&&!e2(s,o)&&(e[s]=n[s])}function AK({transformTemplate:e},n){return v.useMemo(()=>{const o=j4();return N4(o,n,e),Object.assign({},o.vars,o.style)},[n])}function MK(e,n){const o=e.style||{},s={};return a2(s,o,e),Object.assign(s,AK(e,n)),s}function RK(e,n){const o={},s=MK(e,n);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=s,o}const $K=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||$K.has(e)}let s2=e=>!fs(e);function DK(e){e&&(s2=n=>n.startsWith("on")?!fs(n):e(n))}try{DK(require("@emotion/is-prop-valid").default)}catch{}function LK(e,n,o){const s={};for(const l in e)l==="values"&&typeof e.values=="object"||(s2(l)||o===!0&&fs(l)||!n&&!fs(l)||e.draggable&&l.startsWith("onDrag"))&&(s[l]=e[l]);return s}function IK(e,n,o,s){const l=v.useMemo(()=>{const u=o2();return C4(u,n,S4(s),e.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};a2(u,e.style,e),l.style={...u,...l.style}}return l}function BK(e=!1){return(o,s,l,{latestValues:u},m)=>{const p=(b4(o)?IK:RK)(s,u,m,o),f=LK(s,typeof o=="string",e),y=o!==v.Fragment?{...f,...p,ref:l}:{},{children:x}=s,w=v.useMemo(()=>de(x)?x.get():x,[x]);return v.createElement(o,{...y,children:w})}}function OK(e,n){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const m={...b4(s)?zK:EK,preloadedFeatures:e,useRender:BK(l),createVisualElement:n,Component:s};return gK(m)}}const Su={current:null},l2={current:!1};function FK(){if(l2.current=!0,!!v4)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Su.current=e.matches;e.addListener(n),n()}else Su.current=!1}function VK(e,n,o){for(const s in n){const l=n[s],u=o[s];if(de(l))e.addValue(s,l);else if(de(u))e.addValue(s,vi(l,{owner:e}));else if(u!==l)if(e.hasValue(s)){const m=e.getValue(s);m.liveStyle===!0?m.jump(l):m.hasAnimated||m.set(l)}else{const m=e.getStaticValue(s);e.addValue(s,vi(m!==void 0?m:l,{owner:e}))}}for(const s in o)n[s]===void 0&&e.removeValue(s);return n}const p0=new WeakMap,GK=[...tp,me,Xn],WK=e=>GK.find(Zh(e)),f0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _K{scrapeMotionValuesFromProps(n,o,s){return{}}constructor({parent:n,props:o,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:m},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=n4,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=sn.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,At.render(this.render,!1,!0))};const{latestValues:p,renderState:f}=m;this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=f,this.parent=n,this.props=o,this.presenceContext=s,this.depth=n?n.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=Ss(o),this.isVariantNode=Xp(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in x){const b=x[w];p[w]!==void 0&&de(b)&&b.set(p[w],!1)}}mount(n){this.current=n,p0.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),l2.current||FK(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Su.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){p0.delete(this.current),this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const o=this.features[n];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(n,o){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const s=br.has(n),l=o.on("change",h=>{this.latestValues[n]=h,this.props.onUpdate&&At.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let m;window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,n,o)),this.valueSubscriptions.set(n,()=>{l(),u(),m&&m(),o.owner&&o.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in ao){const o=ao[n];if(!o)continue;const{isEnabled:s,Feature:l}=o;if(!this.features[n]&&l&&s(this.props)&&(this.features[n]=new l(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Yt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,o){this.latestValues[n]=o}update(n,o){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<f0.length;s++){const l=f0[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,m=n[u];m&&(this.propEventSubscriptions[l]=this.on(l,m))}this.prevMotionValues=VK(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(n),()=>o.variantChildren.delete(n)}addValue(n,o){const s=this.values.get(n);o!==s&&(s&&this.removeValue(n),this.bindToMotionValue(n,o),this.values.set(n,o),this.latestValues[n]=o.get())}removeValue(n){this.values.delete(n);const o=this.valueSubscriptions.get(n);o&&(o(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,o){if(this.props.values&&this.props.values[n])return this.props.values[n];let s=this.values.get(n);return s===void 0&&o!==void 0&&(s=vi(o===null?void 0:o,{owner:this}),this.addValue(n,s)),s}readValue(n,o){var s;let l=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(s=this.getBaseTargetFromProps(this.props,n))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,n,this.options);return l!=null&&(typeof l=="string"&&(Yh(l)||qh(l))?l=parseFloat(l):!WK(l)&&Xn.test(o)&&(l=lp(n,o)),this.setBaseTarget(n,de(l)?l.get():l)),de(l)?l.get():l}setBaseTarget(n,o){this.baseTarget[n]=o}getBaseTarget(n){var o;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const m=Yu(this.props,s,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);m&&(l=m[n])}if(s&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,n);return u!==void 0&&!de(u)?u:this.initialValues[n]!==void 0&&l===void 0?void 0:this.baseTarget[n]}on(n,o){return this.events[n]||(this.events[n]=new f4),this.events[n].add(o)}notify(n,...o){this.events[n]&&this.events[n].notify(...o)}}class c2 extends _K{constructor(){super(...arguments),this.KeyframeResolver=cp}sortInstanceNodePosition(n,o){return n.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(n,o){return n.style?n.style[o]:void 0}removeValueFromRenderState(n,{vars:o,style:s}){delete o[n],delete s[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;de(n)&&(this.childSubscription=n.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function HK(e){return window.getComputedStyle(e)}class UK extends c2{constructor(){super(...arguments),this.type="html",this.renderInstance=Jp}readValueFromInstance(n,o){if(br.has(o)){const s=a4(o);return s&&s.default||0}else{const s=HK(n),l=(Xh(o)?s.getPropertyValue(o):s[o])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(n,{transformPagePoint:o}){return Dp(n,o)}build(n,o,s){N4(n,o,s.transformTemplate)}scrapeMotionValuesFromProps(n,o,s){return k4(n,o,s)}}class qK extends c2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Yt}getBaseTargetFromProps(n,o){return n[o]}readValueFromInstance(n,o){if(br.has(o)){const s=a4(o);return s&&s.default||0}return o=Zp.has(o)?o:g4(o),n.getAttribute(o)}scrapeMotionValuesFromProps(n,o,s){return n2(n,o,s)}build(n,o,s){C4(n,o,this.isSVGTag,s.transformTemplate)}renderInstance(n,o,s,l){t2(n,o,s,l)}mount(n){this.isSVGTag=S4(n.tagName),super.mount(n)}}const YK=(e,n)=>b4(e)?new qK(n):new UK(n,{allowProjection:e!==v.Fragment}),QK=OK({...A7,...sK,...Qx,...lK},YK),Q=P6(QK);class XK extends v.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=o.offsetHeight||0,s.width=o.offsetWidth||0,s.top=o.offsetTop,s.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function JK({children:e,isPresent:n}){const o=v.useId(),s=v.useRef(null),l=v.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=v.useContext(w4);return v.useInsertionEffect(()=>{const{width:m,height:h,top:p,left:f}=l.current;if(n||!s.current||!m||!h)return;s.current.dataset.motionPopId=o;const y=document.createElement("style");return u&&(y.nonce=u),document.head.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            top: ${p}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(y)}},[n]),i.jsx(XK,{isPresent:n,childRef:s,sizeRef:l,children:v.cloneElement(e,{ref:s})})}const ZK=({children:e,initial:n,isPresent:o,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:m})=>{const h=T4(tw),p=v.useId(),f=v.useCallback(x=>{h.set(x,!0);for(const w of h.values())if(!w)return;s&&s()},[h,s]),y=v.useMemo(()=>({id:p,initial:n,isPresent:o,custom:l,onExitComplete:f,register:x=>(h.set(x,!1),()=>h.delete(x))}),u?[Math.random(),f]:[o,f]);return v.useMemo(()=>{h.forEach((x,w)=>h.set(w,!1))},[o]),v.useEffect(()=>{!o&&!h.size&&s&&s()},[o]),m==="popLayout"&&(e=i.jsx(JK,{isPresent:o,children:e})),i.jsx(Ns.Provider,{value:y,children:e})};function tw(){return new Map}const qa=e=>e.key||"";function g0(e){const n=[];return v.Children.forEach(e,o=>{v.isValidElement(o)&&n.push(o)}),n}const ew=({children:e,exitBeforeEnter:n,custom:o,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:m="sync"})=>{const h=v.useMemo(()=>g0(e),[e]),p=h.map(qa),f=v.useRef(!0),y=v.useRef(h),x=T4(()=>new Map),[w,b]=v.useState(h),[S,N]=v.useState(h);qp(()=>{f.current=!1,y.current=h;for(let z=0;z<S.length;z++){const j=qa(S[z]);p.includes(j)?x.delete(j):x.get(j)!==!0&&x.set(j,!1)}},[S,p.length,p.join("-")]);const T=[];if(h!==w){let z=[...h];for(let j=0;j<S.length;j++){const D=S[j],L=qa(D);p.includes(L)||(z.splice(j,0,D),T.push(D))}m==="wait"&&T.length&&(z=T),N(g0(z)),b(h);return}const{forceRender:E}=v.useContext(x4);return i.jsx(i.Fragment,{children:S.map(z=>{const j=qa(z),D=h===S||p.includes(j),L=()=>{if(x.has(j))x.set(j,!0);else return;let W=!0;x.forEach(U=>{U||(W=!1)}),W&&(E?.(),N(y.current),l&&l())};return i.jsx(ZK,{isPresent:D,initial:!f.current||s?void 0:!1,custom:D?void 0:o,presenceAffectsLayout:u,mode:m,onExitComplete:D?void 0:L,children:z},j)})})},nw=Ch("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),gt=Xt.forwardRef(({className:e,variant:n,size:o,asChild:s=!1,...l},u)=>{const m=s?yi:"button";return i.jsx(m,{className:vr(nw({variant:n,size:o,className:e})),ref:u,...l})});gt.displayName="Button";const ge=()=>{const[e,n]=v.useState(!1),o=ln(),s=[{name:"Home",path:"/"},{name:"Buy Guest Posts",path:"/buy-guest-posts"},{name:"Blogger Outreach",path:"/blogger-outreach"},{name:"Link Insertion",path:"/link-insertion"},{name:"Pricing",path:"/pricing"},{name:"Submit Guest Post",path:"/submit-guest-post"},{name:"Blog",path:"/blog"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],l=u=>u==="/"&&o.pathname!=="/"?!1:o.pathname.startsWith(u);return i.jsxs("header",{className:"sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50",children:[i.jsx("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16",children:[i.jsxs(_,{to:"/",className:"flex items-center space-x-2 group",children:[i.jsx("img",{src:"/favicon.png",alt:"Guest Post Platform logo",width:"40",height:"40",className:"w-10 h-10 rounded-xl group-hover:scale-105 transition-transform"}),i.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent",children:"Guest Post Platform"})]}),i.jsx("div",{className:"hidden lg:flex items-center space-x-1",children:s.map(u=>i.jsx(_,{to:u.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors ${l(u.path)?"text-blue-600 bg-blue-50":"text-slate-700 hover:text-blue-600 hover:bg-slate-50"}`,children:u.name},u.path))}),i.jsx("div",{className:"hidden lg:block",children:i.jsx(_,{to:"/contact",children:i.jsx(gt,{className:"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white",children:"Get Started"})})}),i.jsx("button",{onClick:()=>n(!e),className:"lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors",children:e?i.jsx(Uu,{className:"w-6 h-6"}):i.jsx(g6,{className:"w-6 h-6"})})]})}),i.jsx(ew,{children:e&&i.jsx(Q.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"lg:hidden border-t border-slate-200 bg-white",children:i.jsxs("div",{className:"px-4 py-4 space-y-2",children:[s.map(u=>i.jsx(_,{to:u.path,onClick:()=>n(!1),className:`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${l(u.path)?"text-blue-600 bg-blue-50":"text-slate-700 hover:text-blue-600 hover:bg-slate-50"}`,children:u.name},u.path)),i.jsx(_,{to:"/contact",onClick:()=>n(!1),children:i.jsx(gt,{className:"w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white mt-2",children:"Get Started"})})]})})})]})},ye=()=>{const e=new Date().getFullYear(),n=[{name:"Home",path:"/"},{name:"Buy Guest Posts",path:"/buy-guest-posts"},{name:"Blogger Outreach",path:"/blogger-outreach"},{name:"Link Insertion",path:"/link-insertion"},{name:"Pricing",path:"/pricing"},{name:"Submit Guest Post",path:"/submit-guest-post"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"},{name:"Blog",path:"/blog"},{name:"Compare Platforms",path:"/best-guest-post-platforms"}];return i.jsx("footer",{className:"bg-white border-t border-slate-200 pt-12 pb-8",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8",children:[i.jsxs("div",{className:"flex flex-col items-center md:items-start",children:[i.jsxs(_,{to:"/",className:"flex items-center space-x-2 group mb-4",children:[i.jsx("img",{src:"/favicon.png",alt:"Guest Post Platform logo",width:"40",height:"40",loading:"lazy",className:"w-10 h-10 rounded-xl group-hover:scale-105 transition-transform"}),i.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent",children:"Guest Post Platform"})]}),i.jsx("p",{className:"text-slate-500 text-sm text-center md:text-left max-w-xs",children:"Premium guest posting and link building services to elevate your SEO strategy and drive organic growth."})]}),i.jsx("div",{className:"flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 max-w-2xl",children:n.map(o=>i.jsx(_,{to:o.path,className:"text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors",children:o.name},o.path))})]}),i.jsxs("div",{className:"pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4",children:[i.jsxs("p",{className:"text-slate-500 text-sm",children:["© ",e," Guest Post Platform. All rights reserved."]}),i.jsxs("div",{className:"flex space-x-4 text-sm text-slate-500",children:[i.jsx(_,{to:"/privacy-policy",className:"hover:text-blue-600 transition-colors",children:"Privacy Policy"}),i.jsx(_,{to:"/terms-of-services",className:"hover:text-blue-600 transition-colors",children:"Terms of Service"})]})]})]})})},rs="https://guestpostplatform.com",rw=`${rs}/images/guest-post-seo-growth.webp`,Ze=({title:e,description:n,path:o="/",type:s="website",image:l=rw,imageAlt:u="Guest Post Platform guest posting and publisher outreach services",schema:m,noindex:h=!1})=>{const p=o==="/"?"/":`/${o.replace(/^\/+|\/+$/g,"")}/`,f=`${rs}${p}`,y={"@context":"https://schema.org","@type":"WebPage","@id":`${f}#webpage`,url:f,name:e,description:n,isPartOf:{"@id":`${rs}/#website`},about:{"@id":`${rs}/#organization`}};return i.jsxs(Yn,{children:[i.jsx("title",{children:e}),i.jsx("meta",{name:"description",content:n}),i.jsx("meta",{name:"robots",content:h?"noindex,follow":"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}),i.jsx("link",{rel:"canonical",href:f}),i.jsx("meta",{property:"og:type",content:s}),i.jsx("meta",{property:"og:site_name",content:"Guest Post Platform"}),i.jsx("meta",{property:"og:title",content:e}),i.jsx("meta",{property:"og:description",content:n}),i.jsx("meta",{property:"og:url",content:f}),i.jsx("meta",{property:"og:image",content:l}),i.jsx("meta",{property:"og:image:alt",content:u}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:title",content:e}),i.jsx("meta",{name:"twitter:description",content:n}),i.jsx("meta",{name:"twitter:image",content:l}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify(y)}),m&&i.jsx("script",{type:"application/ld+json",children:JSON.stringify(m)})]})},ow=`Domains	DA	DR	Traffic	Price$\r
Techbullion.com	63	79	38.8k	40.90909091\r
Nerdbot.com	50	62	19.4k	40.90909091\r
Urbansplatter.com	46	62	6.2k	63.81818182\r
Goodmenproject.com	82	79	42.5k	54\r
Bignewsnetwork.com	66	77	548.9k	27.81818182\r
				18\r
thepinnaclelist.com	60	58	10k	63.81818182\r
Gisuser.com	49	67	10.2k	34.36363636\r
OCNJdaily.com	48	69	6.2k	40.90909091\r
BreakingAC.com	41	47	19.9k	40.90909091\r
NorthPennNow.com	36	54	10k	40.90909091\r
onpattison.com	27	28	10.5k	40.90909091\r
SeaisleNews.com	39	58	1.8k	40.90909091\r
DownBeach.com	29	48	12.3k	40.90909091\r
Artdaily.com	64	77	18k	37.63636364\r
otsnews.co.uk	42	57	14.9k	54\r
todaynews.co.uk	46	53	11.2k	57.27272727\r
reveriepage.com	33	48	8.1k	37.63636364\r
pctechmag.com	56	56	13k	47.45454545\r
programminginsider.com	58	73	43.2k	37.63636364\r
parkmagazineny.com	43	60	35.5k	54\r
portotheme.com	70	90	8k	50.72727273\r
businessoutstanders.com	33	46	1.7k	54\r
Trans4mind.com	56	73	50.8k	34.36363636\r
elevatedmagazines.com	25	51	3k	27.81818182\r
Otechworld.com	35	50	63.7k	57.27272727\r
Northiowatoday.com	42	41	3.2k	31.09090909\r
kulfiy.com	71	69	42.3k	47.45454545\r
Ourcodeworld.com	48	56	26.5k	37.63636364\r
Theluxevoyager.com	21	24	4.3k	31.09090909\r
Thehypemagazine.com	66	72	10.7k	50.72727273\r
exposedmagazine.co.uk	48	55	6.6k	54\r
tynmagazine.com	51	60	18.4k	31.09090909\r
Resident.com	47	72	17.9k	181.6363636\r
trendifymagazine.com	34	54	14k	37.63636364\r
theintelligencemagazine.com	39	54	10k	37.63636364\r
networthtv.com	41 	51	1k	37.63636364\r
howmanyofmes.com	40	42	9.2k	24.54545455\r
thankyoumessages.blog	39	51k	25k	31.09090909\r
findarticles.com	74	79	7.4k	80.18181818\r
alamdiya.com	33	29	92k	57.27272727\r
pantheonuk.org	56	49	9.7k	44.18181818\r
garyshood.com	41	29	1.5k	37.63636364\r
educba.com	59	75	228k	63.81818182\r
anationofmoms.com	70	61	2.1k	37.63636364\r
grammaticzy.com	1	52	5.8k	27.81818182\r
digitalarticleblog.com	42	42	9.5k	34.36363636\r
breakingthelines.com	47	60	144k	47.45454545\r
usjournalmagazine.co.uk	40	70	9k	27.81818182\r
uncustomary.org	39	41	3.3k	48.76363636\r
brodneil.com	54	37	6.6k	54\r
Bizzmarkblog.com	40	53	6.3k	47.45454545\r
ngscsports.com	31	17	20k	54\r
wongcw.com	49	65	1.5k	54\r
newpelican.com	30	50	2.8k	44.18181818\r
Exploringthenorth.com	51	51	6.2k	57.27272727\r
derekdemars.com	43	39	66k	47.45454545\r
Insightssuccessmagazine.com	44	43	2.5k	54\r
speedwaymedia.com	43	54	10.7k	67.09090909\r
Techworldgarage.com	2	0	7.1k	27.81818182\r
Dsnews.co.uk	46	44	19.3k	27.81818182\r
travelhubdubai.com	12	21	559k	50.72727273\r
tributemosthaunted.co.uk	28	17	23k	83.45454545\r
blooket.it.com	92	92	11k	27.81818182\r
blazingmenu.org	40	49	190.5k	40.90909091\r
Biscamagazine.co.uk	40	44	2.9K	24.54545455\r
englishrulebook.com	7	27	23k	27.81818182\r
Magazinecelebs.co.uk	40	48	4.7k	34.36363636\r
discoverreleased.com	10	13	1.3k	24.54545455\r
Englishtistic.com	41	51	25k	27.81818182\r
Grammariene.com	41	51	19k	27.81818182\r
Wordmaticz.com	41	52	7.7k	27.81818182\r
fundfireinsights.com	6	42	11.4k	27.81818182\r
matoketcs.com	40	44	3.5k	27.81818182\r
valplekar.com	40	20	2.2k	27.81818182\r
IndulgeWithIldi.com	16	27	13k	44.18181818\r
Ventsmagazine.co.uk	56	53	3.4k	47.45454545\r
Dotimes.co.uk	42	54	8.4k	31.09090909\r
latemagazine.com	40	54	39.3k	27.81818182\r
aiinsightsnews.net	19	13	35.6k	47.45454545\r
thesalfordmagazine.com	40	37	4.5k	40.90909091\r
indiacsr.in	46	68	36.5k	50.72727273\r
Secureblitz.com	54	51	3.1k	67.09090909\r
myliberla.com	53	44	48.8k	44.18181818\r
Mynewsgh.com	39	53	8.5k	50.72727273\r
teknobird.com	56	36	10.9k	44.18181818\r
SteelCurtainNetwork.com	12	7	7.5k	44.18181818\r
Sugermint.com	60	56	2.9k	37.63636364\r
spacecoastdaily.com	73	72	321.8k	181.6363636\r
markmeets.com	70	69	8.7k	109.6363636\r
gilaherald.com	39	45	9.8k	129.2727273\r
analyticsinsight.net	70	81	73.3k	234\r
calbizjournal.com	39	70	2.3k	80.18181818\r
Supanet.com	56	63	11.8k	67.09090909\r
padmagazine.co.uk	30	25	2.9k	76.90909091\r
radarro.com	38	41	28.2k	112.9090909\r
Americanspcc.org	56	68	23.9k	126\r
Mytunbridgewells.com	33	49	10.1k	76.90909091\r
programgeeks.net	45	50	7.3k	135.8181818\r
thedatascientist.com	36	64	87.4k	90\r
businessnewsthisweek.com	46	74	6.3k	63.81818182\r
businessapac.com	65	46	200	93.27272727\r
Tamaracamerablog.com	65	59	19.6k	67.09090909\r
frenchblog.fr Only French content	40	70	2.8k	37.63636364\r
promidaten.de only german content	51	40	3k	40.90909091\r
sadshayarihindi.com	43	72	8.9k	24.54545455\r
Punzlife.com	51	60	27.1k	54\r
Rarelyradiant.com 	51	60	11.7k	47.45454545\r
Pfpstack.com	54	61	11.7k	54\r
Hindishayaritext.com	50	61	27.8k	47.45454545\r
Alnewsworld.com 	54	63	2.5k	54\r
Punhour.com	52	62	13.9k	54\r
Funnnypuns.com 	55	61	19.7k	47.45454545\r
Comedybookz.com 	51	62	10.4k	47.45454545\r
Creativesimiles.com	41	61	5.9k	47.45454545\r
Pickupllines.com  	50	61	2.5k	47.45454545\r
Sloganloop.com 	40	62	5.4k	40.90909091\r
speakrj.com	41	81	6.1k	99.81818182\r
Fameimpact.com	54	80	78k	63.81818182\r
Instrumentalfx.co	73	81	75.2k	63.81818182\r
Techmistri.com	15	70	29.1k	44.18181818\r
Gramvix.com	3	10	8.3k	34.36363636\r
ipsbiography.com	42	55	32.5k	44.18181818\r
Wishregards.com	12	30	29k	63.81818182\r
Socialtricks.net	20	43	18.2k	34.36363636\r
Sizedesk.com	9	29	9.1k	34.36363636\r
Poetryskills.com	4	10	5.3k	34.36363636\r
charfen.co.uk	44	54	8.1k	27.81818182\r
businesstogen.com	42	52	3.5k	27.81818182\r
Thetanel.co.uk	42	53	3.7k	27.81818182\r
megazee.com	43	51	78k	27.81818182\r
praiseear.co.uk	43	49	2.7k	27.81818182\r
robconner.com	43	45	1.5k	27.81818182\r
okayuj.co.uk	45	46	42k	27.81818182\r
testerz.co.uk	41	42	1.4k	27.81818182\r
miguelflux.com	35	41	2.4k	27.81818182\r
tradrmom.com	40	42	4.2k	27.81818182\r
sebelles.com	42	44	5.5k	27.81818182\r
kingkendama.com	32	42	12k	27.81818182\r
ouchino.com	30	41	1.3k	27.81818182\r
pkwys.com	25	41	3.6k	27.81818182\r
lirunning.com	46	44	5.1k	27.81818182\r
Mhealer.co.uk	43	55	6.9k	37.63636364\r
travelnester.co.uk	43	54	5.2k	37.63636364\r
studywisdom.co.uk	43	53	5k	37.63636364\r
Homeella.com	42	43	1.2k	37.63636364\r
brandihomes.com	42	44	15.4k	37.63636364\r
thedippermagazine.com	40	60	19k	40.90909091\r
fawanews.org.uk	26	29	27.3k	34.36363636\r
thoughtgenic.com	43	65	13.7k	54\r
animalswildfacts.com	12	68	8.2k	54\r
Grammarmean.com	13	65	6.6k	54\r
Arenanames.com	12	68	6.4k	54\r
dailyvibs.co.uk	11	65	2.1k	44.18181818\r
Gramarz.com	13	50	3.8k	54\r
nameshives.com	2	40	5.7k	44.18181818\r
Postlypress.com	34	47	1.3k	54\r
Animeshow.io	38	52	3k	54\r
namesauras.com	8	68	2k	44.18181818\r
Jokescoff.com	26	59	3.7k	44.18181818\r
connection-hints.com	42	52	2.8k	24.54545455\r
callsbomber.com	40	54	2.1k	24.54545455\r
bulkdp.com	42	52	32.4k	24.54545455\r
starbucksmenuus.info	42	54	1.4k	24.54545455\r
www-joinmyquiz.com	40	72	4.4k	24.54545455\r
meaningvibes.com	39	72	5.4k	24.54545455\r
sportrulez.com	41	52	21.8k	24.54545455\r
grammarsguide.com	43	57	1.5k	24.54545455\r
purepfp.com	42	58	3k	24.54545455\r
gifdownloader.net	42	50	10.1k	24.54545455\r
wordorae.com	41	51	16k	24.54545455\r
etargetlimited.co.uk	39	72	3.3k	24.54545455\r
mcdsmenucanada.com	39	54	1.8k	24.54545455\r
flixbaba.org	41	72	14.2k	24.54545455\r
pickuplinne.com	42	52	2.7k	24.54545455\r
dailytrust.com	75	74	374.6k	86.72727273\r
ccr-mag.com	41	64	4.1k	54\r
upscalelivingmag.com	65	63	1.9k	50.72727273\r
businessconnectindia.in	34	66	6k	47.45454545\r
hedgethink.com	60	60	5.6k	126\r
intelligenthq.com	50	73	7.6k	126\r
businessabc.net	58	84	34.1k	126\r
fashionabc.org	57	82	8.4k	126\r
citiesabc.com	57	79	14.1k	126\r
theusaleaders.com	54	38	4.4k	90\r
mirrorreview.com	64	67	4.7k	90\r
imei.info	67	73	2M	76.90909091\r
hardreset.info	59	59	271.7k	76.90909091\r
tycoonstory.com	72	70	2.5k	80.18181818\r
ranktracker.com	40	78	45k	103.0909091\r
europeanbusinessmagazine.com	59	72	3.4k	80.18181818\r
realtytimes.com	58	74	2.5k	148.9090909\r
wheonx.com	64	62	133.3k	76.90909091\r
henof.com	66	50	526	83.45454545\r
bmmagazine.co.uk	66	77	18.1k	201.2727273\r
evpowered.co.uk	61	71	40.6k	201.2727273\r
muddyrivernews.com	46	70	89.6k	266.7272727\r
impactwealth.org	57	70	5.3k	109.6363636\r
thatericalper.com	59	61	157.4k	76.90909091\r
finance-monthly.com	52	72	10.6k	292.9090909\r
ceotodaymagazine.com	52	74	5k	292.9090909\r
lawyer-monthly.com	53	72	3.6k	292.9090909\r
supanet.com	55	61	11.9k	70.36363636\r
theclintoncourier.net	33	47	5k	63.81818182\r
emedicodiary.com	57	64	36.6k	103.0909091\r
peacequarters.com	73	46	98.1k	96.54545455\r
deadlinenews.co.uk	72	64	7.9k	139.0909091\r
theedinburghreporter.co.uk	56	66	10.1k	139.0909091\r
dailybusinessgroup.co.uk	48	58	23.8k	139.0909091\r
yourharlow.com	38	48	11.6k	139.0909091\r
yourthurrock.com	46	39	2.7k	139.0909091\r
holyroodpr.co.uk	34	20	1.7k	139.0909091\r
deeside.com	48	52	9.6k	139.0909091\r
Thewebinkey.com	41	52	2k	27.81818182\r
Myuploadarticle.com	41	51	8.4k	27.81818182\r
Thetechnorozen.com	33	17	9.4k	24.54545455\r
thealkhaleejcenter.com	41	33	9.2k	40.90909091\r
The-cashstark.com	41	51	26.2k	27.81818182\r
Thestudyxcel.com	41	51	5.4k	27.81818182\r
Eyesonhunt.com	41	53	3.7k	27.81818182\r
www-gimkit.com	36	51	2k	24.54545455\r
acftcalculator.co.uk	35	26	1.7k	27.81818182\r
thetechsslaash.com	33	51	3.8k	24.54545455\r
join-myquiz.com	35	54	8.1k	40.90909091\r
garforfans.com	37	10	11k	24.54545455\r
mixmoz.com	32	52	49.6k	24.54545455\r
the7starhd.com	31	52	6.3k	24.54545455\r
Thewheonx.com	34	52	7k	24.54545455\r
theaavot.com	34	51	6.8k	24.54545455\r
Captionsoul.com	39	52	2.8k	27.81818182\r
wayground.com.co	33	51	4.6k	24.54545455\r
candizi.org	37	34	2.4k	24.54545455\r
Twastia.com.co	35	53	11.8k	24.54545455\r
Grammartrinds.com	33	53	7.1k	34.36363636\r
Moodfordecor.com	48	60	1.7k	47.45454545\r
Getwishers.com	52	61	1.5k	47.45454545\r
Foodstampsneed.com	42	60	3.5k	47.45454545\r
Punsspark.com 	52	60	1.6k	54\r
Punwaves.com	55	61	1.5k	54\r
Lovelywishy.com 	40	61	1.2k	40.90909091\r
Thenewsmedium.com	40	71	4.4k	99.81818182\r
CeoColumn.com	56	81	3.6k	70.36363636\r
Bodysizex.com	7	71	1.7k	34.36363636\r
iclmeaning.com	4	25	3.4k	44.18181818\r
lifestylenetworth.com	13	51	2.2k	44.18181818\r
Gorillaoverview.com	56	51	1.4k	57.27272727\r
hindiyaro.org	53	52	1.5k	57.27272727\r
Coolbio.org	56	51	2.7k	57.27272727\r
Gettywallpapers.com	49	45	8.1k	34.36363636\r
Bigstarbio.com	56	50	4.8k	44.18181818\r
Instabiokick.com	11	51	5.6k	57.27272727\r
Itsbirthdayy.com	12	42	8.9k	34.36363636\r
utdxclusive.co.uk	40	56	1.6k	27.81818182\r
letmagazine.co.uk	40	25	3.9k	27.81818182\r
timelynews.co.uk	41	59	2.6k	34.36363636\r
zentmagazine.co.uk	43	60	1.7k	34.36363636\r
Marcorepublic.com	41	52	4k	34.36363636\r
zapcrest.co.uk	41	53	42.7k	34.36363636\r
raremagazine.co.uk	38	60	1.1k	44.18181818\r
constrofacilitator.com	44	54	5.5k	63.81818182\r
yonkerstimes.com	42	56	56.1k	70.36363636\r
Bratgen.io	5	23\`	30.2k	34.36363636\r
todaysmagazine.co.uk	41	54	8.1k	40.90909091\r
theprestonmagazine.com	41	47	6.7k	40.90909091\r
tuffermagazine.co.uk	52	41	4.7k	40.90909091\r
writerblog.co.uk	35	40	5.3k	27.81818182\r
Techmagazines.net	59	46	26.5k	50.72727273\r
bentsmagazine.co.uk	41	53	3.8k	40.90909091\r
balzaromagazine.co.uk	40	55	1.5k	34.36363636\r
Blogbuz.co.uk	37	50	2.6k	50.72727273\r
Plangud.com	50	55	3.1k	27.81818182\r
addmagazine.co.uk	16	34	5.8k	57.27272727\r
Inmagazine.co.uk	40	50	1.9k	37.63636364\r
cloudmagazine.co.uk	35	60	1.3k	37.63636364\r
entrepreneursbreak.com	56	62	1.2k	27.81818182\r
Mercht.com	36	43	1.6k	44.18181818\r
Engleish.com	41	66	10.6k	47.45454545\r
Romanticpickups.com	40	50	1.6k	47.45454545\r
Pureyummyrecipes.com	58	63	1.9k	40.90909091\r
Vallomagazine.com	50	61	3.9k	47.45454545\r
Thetokyotourist.com	19	1.9	1k	44.18181818\r
newsbritania.co.uk	3	62	7.3k	40.90909091\r
megavol.co.uk	38	53	4.7k	31.09090909\r
ustimemagazine.co.uk	35	50	10.4k	37.63636364\r
europeanmagazine.co.uk	35	54	2.8k	37.63636364\r
factnews.co.uk	42	71	1.6k	34.36363636\r
Sams-odisha.org	7	3	3.6k	27.81818182\r
Nestivomagazine.co.uk	40	65	4.9k	34.36363636\r
Primebreak.co.uk	39	64	1.7k	34.36363636\r
Shayaripower.com	43	72	13.9k	50.72727273\r
Viralfeed.uk	40	14	3.3K	31.09090909\r
streameast-soccer.com	4	25	1.2K	27.81818182\r
Magazine.co.com	38	90	1K	40.90909091\r
palentu.com	33	50	2.2K	24.54545455\r
newsatrack.co.uk	39	48	22.9K	40.90909091\r
sixmagazine.co.uk	34	65	4.8K	40.90909091\r
techwinks.com.in	23	42	14.4K	40.90909091\r
theridgewoodblog.net	46		4.9K	70.36363636\r
Bhoomi-rtconline.com	55	65	4.3K	40.90909091\r
Punsberry.com	61	71	2.3K	54\r
Popularmarathi.in	61	70	1.3K	40.90909091\r
Shayaritoyou.com	60	71	2.9K	47.45454545\r
Techstudify.com	4	27	18K	34.36363636\r
Thetechnotricks.in	57	56	3.7k	31.09090909\r
newsletterboxed.com	32	60	2k	34.36363636\r
wortendo.net	31	26	1.8k	31.09090909\r
Usawire.com	55	68	5.2k	27.81818182\r
futuresbytes.co.uk	40	30	2.6k	37.63636364\r
mediaclicks.co.uk	44	57	1.2k	24.54545455\r
widemagazine.co.uk	40	50	6.2k	31.09090909\r
intelligentliving.co	48	64	905	96.54545455\r
easygrader.net	16	13	2.3k	34.36363636\r
ffsn.com	29	20	979	50.72727273\r
psychreg.org	53	73	1.9k	57.27272727\r
Wnynewsnow.com	37	41	891	34.36363636\r
Powderrooms.co.uk	30	34	2.6k	50.72727273\r
Moranalytics.com	25	27	53.7k	54\r
earntuffer.com	37	29	41.9k	37.63636364\r
Shkoh.com	15	16	0	27.81818182\r
Menuspricesphl.com	25	30	3.8k	34.36363636\r
thisdaylive.com	79	78	322.6k	76.90909091\r
erone.co.uk	39	24	1.2k	57.27272727\r
rawmags.com	15	17	80.1k	44.18181818\r
1883magazine.com	51	62	31.4k	103.0909091\r
Educationalbaba.org	58	61	7k	40.90909091\r
Tamilprint2.co.uk	29	24	4.9k	31.09090909\r
Kongotech.org	50	53	3.4M	34.36363636\r
Brandedpoetry.com	17	33	1.6k	31.09090909\r
techsslaash.com	13	60	47.1k	31.09090909\r
arcarrierpoint.net	56	56	152.8k	31.09090909\r
newztalkies.com	7	56	86.7k	37.63636364\r
Yooooga.com	26	35	26.4k	40.90909091\r
bigwritehook.co.uk	39	34	14.1k	27.81818182\r
todaybignews.co.uk	48	39	2.4k	34.36363636\r
indykaila.co.uk	50	46	352	27.81818182\r
Ventsmillion.com	40	47	258	27.81818182\r
thetimelynews.com	35	32	8	31.09090909\r
puzutaska.com	35	32	441	31.09090909\r
Breakzone.co.uk	3	52	0	27.81818182\r
biliumnews.co.uk	41	44	28	31.09090909\r
Novainsights.co.uk	41	54	36	27.81818182\r
magazineinsights.co.uk	41	54	48	27.81818182\r
Usasparktime.co.uk	41	54	64	27.81818182\r
mymagazine.blog	42	41	104	40.90909091\r
tribune.co.com	30	90	263	40.90909091\r
metapress.com	76	79	444	80.18181818\r
Muichiro.co.uk	41	41	101	34.36363636\r
topcelebrities.co.uk	40	46	85	27.81818182\r
Thebigger.com	48	37	1.5k	96.54545455\r
Cropmagazine.co.uk	40	44	1k	27.81818182\r
randomdecider.com	40	0.7	846	54\r
roseslandusa.com	39	1	37	34.36363636\r
Agefact.co.uk	40	49	1.6k	37.63636364\r
Wilsondrake.com	40	10	2k	50.72727273\r
Wilsonyb.com	37	0	217	47.45454545\r
uselegance.co.uk	43	46	973	37.63636364\r
Imagezila.com	41	62	997	44.18181818\r
footballclubmenu.com	39	55	467	40.90909091\r
Synonymwave.com	10	30	738	44.18181818\r
draemmeaning.com	40	53	271	24.54545455\r
captionloving.com	38	72	258	24.54545455\r
capcutproapk.tr	43	54	297	24.54545455\r
menupricephl.com	41	72	390	24.54545455\r
thinkoora.com	40	52	849	24.54545455\r
stylevanity.com	58	52	648	50.72727273\r
globalhealthcaremagazine.com	38	45	966	90\r
Binilyaas.com	39	52	173	27.81818182\r
Moonvalleynews.org	34	53	472	24.54545455\r
Buildingbusinessnews.org	33	53	953	24.54545455\r
Themagzyminutes.com	39	51	6	27.81818182\r
BossMagazine.co.uk	41	53	32	34.36363636\r
whatutalkingboutwillis.com.co	41	52	113	27.81818182\r
Gonzay.com.co	35	51	112	24.54545455\r
lidnews.org	33	52	220	24.54545455\r
Thetechlein.com	34	52	1	24.54545455\r
newsross.org	34	52	228	24.54545455\r
thesevenseventech.com	35	50	141	24.54545455\r
TheTeckjb.com	34	51	451	24.54545455\r
weeklymag.co.uk	39	51	687	27.81818182\r
worthaura.com	39	58	581	27.81818182\r
pushwiki.com.co	41	53	0	24.54545455\r
Thebrumeblog.com	35	52	5	24.54545455\r
Thepushwiki.com	37	52	31	24.54545455\r
r6marketplace.com.co	39	53	466	27.81818182\r
celebscrest.com	39	51	518	27.81818182\r
Thequeekmag.com	41	53	56	24.54545455\r
joinmyquiz.com.co	33	20	617	24.54545455\r
tovisitvuzillfotsps.org	40	53	5	24.54545455\r
Thewayground.com	36	43	430	24.54545455\r
mahitechinfo.co.uk	33	50	65	24.54545455\r
themagfusehub.com	41	53	27	24.54545455\r
Thepuzutask.com	41	53	443	24.54545455\r
Thearticlerelease.com	40	54	9	27.81818182\r
thezingyzon.com	39	52	12	27.81818182\r
almawadahit.com.co	39	52	27	27.81818182\r
uploadwords.com.co	39	51	0	27.81818182\r
Meaningspots.com 	51	60	467	47.45454545\r
Pickuppulse.com	42	60	564	47.45454545\r
Expressnewz.co.uk	54	61	674	40.90909091\r
Restaurantsmenuusa.com	52	62	511	54\r
Widerweekly.co.uk	55	60	533	40.90909091\r
Foodiejokes.com	61	72	731	40.90909091\r
Starledgerpro.com 	51	63	623	40.90909091\r
Juggsmagazines.com	55	61	730	47.45454545\r
Effectivelaws.com	41	24	666	44.18181818\r
Marketbellions.com	5	7	8	44.18181818\r
Laptoptestguide.com	41	48	574	34.36363636\r
iasdetails.com	37	50	769	57.27272727\r
wordlehintjournal.com	43	57	1	34.36363636\r
ExclusiveMagazine.co.uk	40	24	570	27.81818182\r
Orbitalmagazine.co.uk	41	46	410	27.81818182\r
Dailybriefing.it.com	90	90	345	27.81818182\r
digitalpress.it.com	93	92	239	40.90909091\r
Sglocalnews.com	43	27	1	27.81818182\r
businessage.com	31	64	941	83.45454545\r
digitechnopost.com	48	28	57	73.63636364\r
solutionhow.com	64	40	120	122.7272727\r
digitaljournalusa.co.uk	40	32	814	34.36363636\r
flypapermagazine.com	47	26	506	31.09090909\r
nextoriaacademy.com	39	50	11	34.36363636\r
dreaming-freedom.com	7	4.5	0	27.81818182\r
Magazinebabylon.com	55	1.8k	0	27.81818182\r
bishopwcmartin.com	15	43	0	37.63636364\r
Puremagazine.co.uk	36	32	37	44.18181818\r
Eopis.co.uk	40	50	0	34.36363636\r
Zooplas.co.uk	39	51	708	27.81818182\r
Reelsmedia.co.uk	43	72	21	27.81818182\r
intelligentnews.co.uk	40	54	885	34.36363636\r
gossiply.co.uk	39	46	166	34.36363636\r
freezemagazine.co.uk	41	60	0	40.90909091\r
idiomsinsider.com	11	30	37	27.81818182\r
Truerealtyvalue.com	31	30	0	37.63636364\r
greenrecord.co.uk	53	68	355	27.81818182\r
Blogstrove.com	37	33	27	34.36363636\r
kivomind.com	35	50	0	37.63636364\r
hopestech.co.uk	35	60	1	37.63636364\r
Templeknowledge.com	9	28	1	37.63636364\r
JuliaBettencourt.com	33	30	30	44.18181818\r
jezzieg.com	2	12	0	31.09090909\r
Itsnotamerica.com	12	8	4	37.63636364\r
Dar-care.com	5	33	5	40.90909091\r
DesignViva.com	20	29	0	47.45454545\r
ssoidraj.com	7	11	1	31.09090909\r
Knifehelp.net	29	6	101	31.09090909\r
Moptech.net	19	10	0	31.09090909\r
Propsandarmor.com	14	15	0	31.09090909\r
Theyoungnarrative.com	14	7	2	31.09090909\r
Empireinfohub.com	42	63	446	40.90909091\r
Namesslection.com	55	66	181	40.90909091\r
Wordypuns.com	39	54	307	47.45454545\r
Findnamez.com	55	62	389	54\r
Zayvirx.com	51	62	0	47.45454545\r
Infobiosphere.com	35	41	133	47.45454545\r
Newsswift.co.uk	41	35	0	27.81818182\r
celebrityworldz.co.uk	39	55	0	27.81818182\r
dailycelebs.co.uk	41	54	386	27.81818182\r
marshmagazine.co.uk	2	60	4	37.63636364\r
everydaygas.co.uk	40	50	0	37.63636364\r
elightwave.co.uk	40	53	177	27.81818182\r
theopenspark.com	23	53	0	27.81818182\r
businessinside.co.uk	41	51	391	27.81818182\r
Techdailyjournal.co.uk	39	60	214	27.81818182\r
Insidefame.co.uk	36	61	537	31.09090909\r
Clockmagazine.co.uk	34	52	14	27.81818182\r
Blessifydaily.com	33	43	0	31.09090909\r
contentideators.com	42	40	437	27.81818182\r
Uploadarticle.online	43	1	47	27.81818182\r
Magaprime.co.uk	38	63	65	34.36363636\r
Techeprime.co.uk	39	62	27	34.36363636\r
Everydaymagazine.co.uk	37	60	975	34.36363636\r
Pentomagazine.com	41	73	36	57.27272727\r
Finitenames.com	42	73	237	50.72727273\r
Shayaribloom.com	41	72	566	40.90909091\r
Londonlifemagazine.co.uk	41	70	192	40.90909091\r
mybioshow.com	41	71	130	40.90909091\r
celebsbiofolio.com	42	70	0	40.90909091\r
Pioneertime.co.uk	40	60	81	27.81818182\r
Minigeneral.com	40	60	0	27.81818182\r
Newspioneer.co.uk	35	45	11	40.90909091\r
wittymagazine.co.uk	40	41	883	31.09090909\r
teddyoutready.com	20	56	22	44.18181818\r
Vivamagazine.co.uk	40	50	196	34.36363636\r
Holistickmagazine.co.uk	40	50	0	34.36363636\r
Adventuretimes.co.uk	36	72	291	40.90909091\r
Glolights.co	38	53	753	31.09090909\r
theknowledgearrow.com	32	17	0	24.54545455\r
blogflying.co.uk	39	51	195	24.54545455\r
dktimes.co.uk	2	10	962	31.09090909\r
only-professional.com	42	42	0	37.63636364\r
celebritymagazine.co.uk	3	42	0	40.90909091\r
Dippermagazine.co.uk	40	56	44	37.63636364\r
dotmagazine.co.uk	33	52	35	37.63636364\r
fourmagazine.co.uk	44	63	66	37.63636364\r
coopermagazine.co.uk	37	59	1	37.63636364\r
Westernbusiness.co.uk	42	57	211	40.90909091\r
tadaybignews.co.uk	40	60	173	34.36363636\r
Usamagazinebreak.com	41	62	0	34.36363636\r
Uktimemagazine.co.uk	41	58	231	34.36363636\r
Valplekar.co.uk	40	58	3	34.36363636\r
metamagazine.co.uk	42	68	42	34.36363636\r
soonmagazine.co.uk	46	6	0	27.81818182\r
widerweekly.co.uk	42	52	504	40.90909091\r
Crumbllineup.us	56	70	370	47.45454545\r
Boldlynames.com	55	71	160	47.45454545\r
Goldbuzz.co.uk	60	72	407	47.45454545\r
Swiftypuns.com	56	72	176	40.90909091\r
Nameslections.com	60	70	469	40.90909091\r
Wishpulses.com	60	70	402	40.90909091\r
Righter.io	60	71	0	40.90909091\r
Measurevan.com	41	70	83	40.90909091\r
Fanzynames.com	54	70	76	40.90909091\r
Techflee.co.uk	61	72	23	40.90909091\r
fozymessages.com	61	73	0	40.90909091\r
Hypeprofiles.com	42	73	18	40.90909091\r
Networthexplore.com	61	73	0	47.45454545\r
Hunkwizards.com	51	70	2	40.90909091\r
Starttostory.com	61	70	47	40.90909091\r
pureprairiefarm.com	42	62	4	34.36363636\r
psdmathletes.com	42	51	322	27.81818182\r
obsidian-ark.com	11	52	0	27.81818182\r
soldmagazine.co.uk	40	23	69	40.90909091\r
Nafarescue.org	24	14	0	37.63636364\r
Thetalearningpoint.com	40	21	0	37.63636364\r
Livemag.org.uk	40	40	57	34.36363636\r
livesmagazine.co.uk	35	40	0	27.81818182\r
livemag.blog	35	40	0	27.81818182\r
famefortunes.co.uk	30	50	0	27.81818182\r
womenstorie.co.uk	30	50	3	27.81818182\r
blogvistly.co.uk	40	30	85	31.09090909\r
gorod.it.com	88	89	38	34.36363636\r
daily.uk.com	34	92	0	40.90909091\r
blogblaster.co.uk	40	40	601	34.36363636\r
ventoxweekly.co.uk	40	41	676	27.81818182\r
fatechme.com	34	15	1	34.36363636\r
urbansplatter.uk	30	51	0	31.09090909\r
rankerblog.co.uk	41	52	303	31.09090909\r
newsblaster.co.uk	42	52	0	31.09090909\r
techfanzine.co.uk	41	53	265	24.54545455\r
techybizz.com	41	55	0	31.09090909\r
theinspirebuzz.co.uk	37	53	4	24.54545455\r
sdkblog.co.uk	2	56	0	27.81818182\r
globaltill.com	24	19	47	40.90909091\r
wissnow.com	20	8	471	44.18181818\r
ukrtime.co.ua	5	50	6	31.09090909\r
dm-team.co.uk	32	60	0	37.63636364\r
dailyodyssey.co.uk	34	7	10	31.09090909\r
1word4pics.com	22	43	28	34.36363636\r
playwordle.co.uk	23	31	24	31.09090909\r
Newsb.co.uk	42	44	48	27.81818182\r
Bionewsly.com	41	10	17	31.09090909\r
Formagazine.co.uk	33	8	734	24.54545455\r
Apexnews.co.uk	41	8	5	24.54545455\r
DailyNewsBlog.co.uk	30	29	0	57.27272727\r
really-haunted.com	5	9	0	96.54545455\r
rajasthanssologin.com	37	58	29	57.27272727\r
techtaalk.com	51	35	0	57.27272727\r
abnnews.co.uk	36	11	0	37.63636364\r
uvlack.co.uk	35	12	0	37.63636364\r
schedow.co.uk	35	11	0	37.63636364\r
hyperfiksaatio.com	35	12	0	37.63636364\r
ethlopla.com	34	11	0	37.63636364\r
thesparktime.com	37	16	0	37.63636364\r
javalava.org	9	5	0	40.90909091\r
mobmunch.com	5	0	0	37.63636364\r
phillydaily.com	19	21	562	44.18181818\r
thetipsygypsies.net	21	31	0	44.18181818\r
awarenessideas.com	25	23	42	44.18181818\r
eo-pis.com	34	33	0	40.90909091\r
merlinphysio.com	19	35	0	57.27272727\r
thepointm.com	7	9	0	40.90909091\r
braflix.org.uk	17	28	517	27.81818182\r
bracesbycaves.com	39	25	0	27.81818182\r
paytimes.co.uk	43	37	0	27.81818182\r
Livesrecords.com	40	60	0	40.90909091\r
wordstwists.com	41	71	37	54\r
Fantomagazines.com	40	70	0	47.45454545\r
Sgmenulover.org	41	60	132	40.90909091\r
Punsclick.com	41	70	1	40.90909091\r
Fantasenamegenerator.com	43	71	0	40.90909091\r
Craftypuns.com	41	70	119	54\r
Liftingmags.com	40	65	0	40.90909091\r
2amagazine.com	58	38	65	83.45454545\r
megamagazine.co.uk	36	42	0	34.36363636\r
greenecodream.com	45	55	63	76.90909091\r
itsreleased.co.uk	44	67	228	34.36363636\r
Voguevocal.com	21	19	0	50.72727273\r
International-education.com	14	11	2	40.90909091\r
Iparryeverything.com	9	0.5	15	40.90909091\r
Scope24.net	10	3.1	0	40.90909091\r
ecomagazine.co.uk	40	50	251	44.18181818\r
newsbro.co.uk	40	19	32	31.09090909\r
grandmag.co.uk	35	43	0	27.81818182\r
FintechZoom-io.com	41	51	271	34.36363636\r
coopmagazine.co.uk	40	49	6	31.09090909\r
notostechnologies.com	40	17	0	27.81818182\r
psbios.co.uk	36	33	276	57.27272727\r
jewelsgalaxywholesale.com	15	26	23	31.09090909\r
exploreclarion.co.uk	6	56	0	31.09090909\r
gmru.co.uk	37	23	69	24.54545455\r
Theurlebird.com	35	6	242	24.54545455\r
Techprimex.com	58	53	16	31.09090909\r
cordless.io	57	38	8	40.90909091\r
Rubblemagazine.co.uk	18	22	22	37.63636364\r
Streameast.org.uk	37	57	121	34.36363636\r
Myflexbot.co.uk	36	67	0	34.36363636\r
nazthrift.com	14	12	0	27.81818182\r
exploratoryglory.com	19	42	220	44.18181818\r
lakelandcurrents.com	26	39	995	44.18181818\r
Muchata.com.in	78	82	41	37.63636364\r
modern-family.tv	22	25	1	57.27272727\r
Money6x-com.us	35	37	10	24.54545455\r
glenechogolf.com	14	26	0	27.81818182\r
chas6d.com	5	34	0	24.54545455\r
fintechzoom-io.co.uk	6	5	704	27.81818182\r
Timebusinessnews.com	60	71	67	21.27272727\r
Nyweekly.com	62	76	194	129.2727273\r
hudsonfarmhouse.com	40	43	44	80.18181818\r
upbeatgeek.com	42	48	40	80.18181818\r
thegloworm.com	10	15	0	44.18181818\r
buzzblog.co.uk	30	10	0	40.90909091\r
Managementworksmedia.com	43	17	0	40.90909091\r
vehicledart.com	39	30	0	44.18181818\r
Newsprovider.co.uk	33	36	389	44.18181818\r
theusacorner.com	30	28	0	34.36363636\r
Thetechnotricks.co	37	52	9	24.54545455\r
Everytalkin.co.uk	42	50	21	40.90909091\r
Omgflix.co.uk	37	18	3	31.09090909\r
lolbeans.co.uk	35	41	38	34.36363636\r
Buzzinsider.co.uk	34	29	10	34.36363636\r
Easybib.co.uk	62	58	45	44.18181818\r
Newscooper.co.uk	58	55	51	40.90909091\r
Pressmagazine.co.uk	35	33	0	31.09090909\r
Waterwaysmagazine.com	57	38	0	96.54545455\r
Radarmagazine.com	50	70	18	96.54545455\r
travlthewestway.com	8	28	0	47.45454545\r
Londontechinsights.co.uk	41	60	0	27.81818182\r
Skywavemagazine.co.uk	12	4	0	37.63636364\r
Techsmagazine.co.uk	1	0	0	37.63636364\r
Pickuplinlove.com	42	62	0	54\r
Alltimenames.com	41	61	6	47.45454545\r
Funnyknockknockjoke.com	42	60	87	54\r
Photosvibe.in	35	46	0	47.45454545\r
Trackmasti.com	41	19	0	40.90909091\r
Sgmymenu.com	15	20	61	47.45454545\r
Empirecaption.com	34	35	116	40.90909091\r
Aniversarycaption.com	34	45	3	47.45454545\r
Azjankari.com	33	70	367	54\r
Namezorigins.com	40	61	32	40.90909091\r
Gracejabbaribio.com	43	60	0	40.90909091\r
Infotopbio.com	43	70	0	47.45454545\r
Bioscops.com	37	61	32	54\r
Allfunnypuns.com	43	67	45	54\r
Onlineinfoes.com	33	62	176	54\r
Photoscollection.in	40	70	8	54\r
Phlmenus.org	43	66	36	40.90909091\r
Hunkwhiz.com	42	61	115	54\r
techktimes.co.uk	50	60	1	47.45454545\r
Cafelam.com	35	27	1	44.18181818\r
Newsdipper.co.uk	38	38	368	57.27272727\r
Runpost.com.in	79	82	337	31.09090909\r
veganovtrichy.com	34	45	949	31.09090909\r
seventhway.net	42	17	386	31.09090909\r
Ventstimes.co.uk	35	58	0	54\r
lacelebrite.fr	22	42	177	83.45454545\r
Picuki.ca	37	53	186	27.81818182\r
Worthexplainer.com	21	18	0	24.54545455\r
Venisonmagazine.com	28	39	0	57.27272727\r
police-writers.com	38	34	0	57.27272727\r
Vamonde.com	36	45	0	50.72727273\r
Thewandererindia.com	13	33	0	34.36363636\r
healthcages.com	32	32	1	31.09090909\r
techblaster.co.uk	37	40	36	44.18181818\r
tumfweko.com	40	27	198	40.90909091\r
Techimaging.co.uk	36	41	6	31.09090909\r
Exlazy.com	54	36	0	37.63636364\r
Skopemag.com	45	68	373	31.09090909\r
Interiorredoux.com	14	7	0	37.63636364\r
iganony.co.uk	42	55	149	37.63636364\r
Mygroundbiz.co.uk	55	29	0	27.81818182\r
Tensemagazine.com	24	28	0	34.36363636\r
flaremagazine.co.uk	37	55	4	37.63636364\r
infinityelse.co.uk	28	36	25	34.36363636\r
Fizara.com	22	43	3	37.63636364\r
Veohentak.co.uk	30	30	0	31.09090909\r
Pedrovzpaulo.com	30	30	0	31.09090909\r
Primeinsider.co.uk	40	60	32	40.90909091\r
timelymagazine.co.uk	36	53	178	34.36363636\r
Novazant.co.uk	41	58	97	34.36363636\r
Capandqueen.com	9	10	5	44.18181818\r
Lasermagazine.co.uk	40	55	96	37.63636364\r
bizwell.co.uk	41	71	70	34.36363636\r
thebreakingac.co.uk	43	57	7	27.81818182\r
Mybeautifuladventures.com	55	60	2K	24.54545455\r
Techbullion.com	65	44	80K	40.90909091\r
Northiowatoday.com	43	39	3.7K	27.81818182\r
Kulfiy.com	71	69	106K	44.18181818\r
filmdaily.co	71	70	23K	31.09090909\r
Nerdbot.com	51	64	70K	44.18181818\r
Blessinsight.com	39	47	14K	27.81818182\r
Entrepreneursbreak.com	70	59	2K	27.81818182\r
Gaukurinn.is	39	38	176.1K	44.18181818\r
Goodmenproject.com	82	79	10.5K	57.27272727\r
Tynmagazine.com	33	77	200K	31.09090909\r
Artdaily.com	65	77	10K	34.36363636\r
OpenPr.com   Naked Link Only	71	79	70K	24.54545455\r
Urbansplatter.com	46	62	49k	63.81818182\r
Zapcrest.co.uk 	44	65	80K	31.09090909\r
Blessingsthere.com	40	51	23k	34.36363636\r
Theactionelite.com	52	43	58.5k	27.81818182\r
Steelcurtainnetwork.com	33	12	55K	40.90909091\r
Onpattison.com	34	59	18K	40.90909091\r
Reveriepage.com	34	48	100K	40.90909091\r
Newpelican.com	29	50	3K	44.18181818\r
Alamdiya.com	33	29	94K	57.27272727\r
Hogfurniture.co	28	27	12K	50.72727273\r
Magentoservicegonzay.au	33	13	17K	27.81818182\r
Elevatedmagazines.com	26	53	7K	24.54545455\r
Aiinsightsnews.net Rate will be 4500- 1 Aug	36	33	10k	47.45454545\r
Breakingac.com	40	50	86K	40.90909091\r
OCNJdaily.com	48	69	15K	40.90909091\r
Northpennnow.com	36	61	45K	40.90909091\r
Seaislenews.com	39	58	35K	40.90909091\r
Downbeach.com	47	47	8K	40.90909091\r
Blazingmenu.org	78	80	137k	37.63636364\r
Blooket.it.com	92	91	10.6K	27.81818182\r
Fawanews.org.uk	34	47	29K	31.09090909\r
Glownews.co.uk	41	54	11K	24.54545455\r
Ventsmagazine.co.uk	54	60	200K	47.45454545\r
Programminginsider.com	58	73	10K	37.63636364\r
Ventsmagazine.com	68	77	7K	26.50909091\r
Gisuser.com	40	65	30K	34.36363636\r
Infoimpact.co.uk	32	18	40k	27.81818182\r
Imagesplatform.com	45	53	105k	37.63636364\r
Phillyflair.com	18	10	13K	40.90909091\r
Thedatascientist.com	36	64	52K	90\r
Exploratoryglory.com	45	32	3K	#VALUE!\r
Enterprisepeak.co.uk	34	26	4.5K	31.09090909\r
Dsnews.co.uk	46	33	28K	27.81818182\r
Bentsmagazine.co.uk	41	53	50K	40.90909091\r
Gearheadgrove.com 	42	61	1K	31.09090909\r
Tuffermagazine.co.uk	40	52	241K	40.90909091\r
Newsatrack.co.uk	39	48	38K	40.90909091\r
Celebritythere.com	40	54	7.6K	34.36363636\r
Theluxevoyager.com	21	24	8K	34.36363636\r
Topcelebrities.co.uk	40	37	65K	31.09090909\r
Gossiply.co.uk	39	46	30K	31.09090909\r
Trans4mind.com	55	73	29K	50.72727273\r
Pctechmag.com	57	57	9K	50.72727273\r
Lasermagazine.co.uk	40	27	31K	37.63636364\r
Puremagazine.co.uk	37	61	13K	44.18181818\r
Viltnemnda.net	42	20	38K	27.81818182\r
Thehypemagazine.com	66	72	10K	54\r
Exposedmagazine.co.uk	48	55	7K	54\r
iemrobotics.com	10	44	49k	50.72727273\r
Influencersgonewild.co.uk	36	64	500K	44.18181818\r
Europeanmagazine.co.uk	40	53	250K	37.63636364\r
Newsbritania.co.uk	36	62	92.6K	40.90909091\r
Everydaygas.co.uk	41	45	150K	37.63636364\r
Blogbuz.co.uk	38	44	91K	50.72727273\r
Biggbvoting.com	29	35	10K	34.36363636\r
Dwellifyhome.com	41	45	1K	67.09090909\r
Thestylesmagazine.co.uk	65	69	2K	37.63636364\r
Wishemsgs.com	40	51	8K	27.81818182\r
Imagefaps.co.uk	38	18	63.7K	31.09090909\r
Raremagazine.co.uk	38	63	31K	44.18181818\r
Techkjb.com	38	10	113K	24.54545455\r
Mymagazine.blog	42	41	49k	40.90909091\r
Elitemagzine.co.uk	35	34	10k	27.81818182\r
Metamagazine.co.uk	50	70	49k	34.36363636\r
Thebreakingac.co.uk	43	39	7.4K	27.81818182\r
Cloudmagazine.co.uk	40	55	173K	37.63636364\r
Ustimemagazine.co.uk	57	54	50K	34.36363636\r
Marshmagazine.co.uk	55	53	100k	37.63636364\r
Nextoriaacademy.com	41	45	10K	31.09090909\r
Elightwave.co.uk	40	54	15K	31.09090909\r
Itechsoul.com	57	54	98K	44.18181818\r
Businessoutstanders.com	33	32	10K	50.72727273\r
Handinhandadventures.com	12	10	409k	44.18181818\r
Salconsafetydevices.com	11	7	15K	27.81818182\r
Wheonhub.com	15	20	988K	54\r
Networthon.org	40	45	37.1K	31.09090909\r
Gonzay.com	38	61	223K	31.09090909\r
Brightmagazine.co.uk	40	50	28K	27.81818182\r
Billionscope.org	10	11	25k	24.54545455\r
Instapv.co.uk 	38	54	124K	54\r
Textdefinitions.com	39	11	3.6K	24.54545455\r
Scopemagazine.co.uk	34	21	586K	37.63636364\r
Xxbritcom.co.uk	15	25	40.4K	27.81818182\r
Latemagazine.com	40	54	100K	27.81818182\r
Miajerk.co.uk	37	24	4K	27.81818182\r
Articlecontent.co.uk	43	33	207K	31.09090909\r
Synonynms.com	43	38	95K	57.27272727\r
Futuresbytes.co.uk	42	44	176K	34.36363636\r
Apexmagazine.co.uk	39	49	116K	57.27272727\r
Timeeasy.co.uk	40	58	8K	34.36363636\r
Newsletterboxed.com	30	60	4K	31.09090909\r
Factnews.co.uk	42	71	44K	34.36363636\r
Brustmagazine.com	40	49	25K	31.09090909\r
Hopestech.co.uk	32	32	200K	37.63636364\r
Sp-recycling.com	40	44	700K	31.09090909\r
Kivomind.com	44	54	25K	37.63636364\r
Holisticmagazine.co.uk	46	55	8K	31.09090909\r
Moneynewsweb.blog	15	10	75K	31.09090909\r
Vivamagazine.co.uk	47	51	40K	31.09090909\r
balzaromagazine.co.uk	40	55	35K	34.36363636\r
journalmagazine.co.uk	40	55	60K	34.36363636\r
Tamildhoms.co.uk	40	55	250K	27.81818182\r
Mymagazine.blog	42	41	49k	40.90909091\r
ExclusiveMagazine.co.uk	40	24	32.2K	27.81818182\r
Zooplas.co.uk	39	11	8K	27.81818182\r
Wordlehintjournal.com	42	41	258K	34.36363636\r
Managementworksmedia.com	40	20	200K	37.63636364\r
Viralfeed.uk	40	17	7K	27.81818182\r
Intelligentnews.co.uk	42	16	29K	34.36363636\r
Hiddenworldtour.com	40	31	14K	37.63636364\r
Otechworld.com Advance	35	33	47K	60.54545455\r
Dotmagazine.co.uk	30	50	120K	37.63636364\r
Fourmagazine.co.uk	45	60	40K	37.63636364\r
Nvtimes.co.uk 	40	47	68K	40.90909091\r
Dippermagazine.co.uk	41	42	17K	37.63636364\r
Veohentak.co.uk	33	11	24K	31.09090909\r
Fintechzom.com	43	52	243K	40.90909091\r
Celebritymagazine.co.uk	30	50	60K	40.90909091\r
Influencersgonewildcom.com	42	57	112.5K	34.36363636\r
Writerblog.co.uk	10	53	20K	27.81818182\r
Fmmagazine.co.uk	38	44	12K	34.36363636\r
Dailybusinesstime.co.uk	45	50	20K	27.81818182\r
Musaholicmag.com	35	12	82k	40.90909091\r
Flutejournal.com	18	25	80.7K	57.27272727\r
Todaysmagazine.co.uk Rate will be 3500- 1 July	36	50	127K	40.90909091\r
Thepocketjournal.com	7	25	62.6k	44.18181818\r
Purduestats.com	12	6	36k	37.63636364\r
Journalsoftheheart.com	18	43	36.1k	37.63636364\r
Parkwaydome.com	22	1	35k	37.63636364\r
Firstloveyourself.co	14	6	32k	34.36363636\r
1word4pics.com	22	43	29K	31.09090909\r
Blogstrove.com	38	33	71K	34.36363636\r
Novazant.co.uk	40	47	30K	34.36363636\r
Livemag.org.uk	40	40	66K	34.36363636\r
Truerealtyvalue.com	30	35	98K	37.63636364\r
Imagesplatform.com	45	53	105k	37.63636364\r
Newspioneer.co.uk	35	45	5.4k	40.90909091\r
Gorod.it.com	88	89	7K	34.36363636\r
Westernbusiness.co.uk	41	53	30K	40.90909091\r
Dotimes.co.uk	42	50	12K	27.81818182\r
Usblogtips.com	36	35	4K	24.54545455\r
Webpeak.org	11	38	88K	57.27272727\r
Www-modderguy.com	15	21	1M	31.09090909\r
Blogvistly.co.uk	20	35	21K	27.81818182\r
Theblockdfw.com	40	15	80.3K	37.63636364\r
Glowyp.com	10	28	108.4K	47.45454545\r
Blogblaster.co.uk	43	17	30K	34.36363636\r
Phrasecave.com	13	40	80.9K	24.54545455\r
Flypapermagazine.com	47	26	104K	31.09090909\r
Gu1vnmobile.net	30	35	12K	31.09090909\r
Celebxpress.co.uk	30	30	12K	31.09090909\r
Globleanswer.it.com	30	90	4K	24.54545455\r
Primeinsider.co.uk	20	52	23K	40.90909091\r
swifttech3.com	38	25	12K	37.63636364\r
Goodroasts.org	10	10	2.1K	24.54545455\r
Tabootube.com.au	43	52	237K	27.81818182\r
Internetchicks.ca	41	10	103K	27.81818182\r
Socialmediagirls.org.uk	41	26	107K	34.36363636\r
Sulasok.blog	32	27	12K	27.81818182\r
Mangabuddy.org.uk	32	14	30K	27.81818182\r
Runwithtrip.com	52	62	98.7k	34.36363636\r
Yousowood.com	42	60	12.3k	27.81818182\r
Wellhealthorganics.blog	30	52	1.2M	27.81818182\r
Noodlemagazines.co.uk	31	53	2K	27.81818182\r
Eopis.co.uk	40	50	65K	34.36363636\r
Omenr.co.uk	37	41	3.5K	24.54545455\r
Thetalearningpoint.com	45	30	150K	37.63636364\r
Charfen.co.uk	10	44	5.9k	27.81818182\r
Techeasily.co.uk	39	56	18K	34.36363636\r
Unsentmessageproject.com	42	38	20K	27.81818182\r
Thevictormind.com	43	51	8K	40.90909091\r
Dynamicdiaries.com	38	10	12K	40.90909091\r
Ncvtitiresult.com	8	9	240K	27.81818182\r
Idiomsinsider.com	15	17	56K	27.81818182\r
Ameisenhardt.com	25	28	31.1K	40.90909091\r
Newshabeauty.com Pure Fashion	41	15	5K	57.27272727\r
Texasparolenow.com Pure Law	45	39	1K	96.54545455\r
Teddyoutready.com	20	40	61K	44.18181818\r
Rapidmagazine.co.uk	5	12	13K	37.63636364\r
Punstersclub.com	38	57	24K	40.90909091\r
Asurascans.org.uk	45	38	2.7K	24.54545455\r
Freakbob.blog	43	34	2.4K	37.63636364\r
Baddielatina.blog	15	21	1.4k	24.54545455\r
influencersgonewildco.uk	25	39	40k	24.54545455\r
Coopmagazine.co.uk	40	14	20K	31.09090909\r
Agedinsight.com	11	25	10K	27.81818182\r
Theexplorersedit.com	41	38	2K	44.18181818\r
Thetipsygypsies.net	21	19	614K	40.90909091\r
Addmagazine.co.uk	20	25	238K	57.27272727\r
Zynotimes.com	41	40	7K	27.81818182\r
BuzzBlog.co.uk	30	10	5K	37.63636364\r
Cloudnexuslab.com	20	21	325K	40.90909091\r
Largojewelers.com	11	15	113.6K	37.63636364\r
Shkoh.com	41	47	66.1k	27.81818182\r
Windmoonmagic.com	36	52	34.6k	27.81818182\r
Jewelsgalaxywholesale.com	15	7	26K	31.09090909\r
Bishopwcmartin.com	15	20	1.6M	37.63636364\r
Moranalytics.com	25	17	200K	54\r
Heightmag.com	18	22	162.6K	31.09090909\r
Jorbina.co.uk	42	42	10K	27.81818182\r
Wcco.co.uk	35	68	22K	34.36363636\r
Onetech1.com	10	10	1M	24.54545455\r
Thecrownwings.com	9	7	30k	57.27272727\r
Leopev.com	8	33	29.3k	37.63636364\r
Spacemary.com	38	33	29.1k	37.63636364\r
Travelerproducecompany.com	38	25	22k	37.63636364\r
Newcirclemagazine.com	10	59	272K	54\r
Flashflyermagazine.com	37	53	76K	34.36363636\r
Hawkecentre.com.au	10	7	6.2K	27.81818182\r
Instafest.us	30	25	150K	27.81818182\r
Mikewolfepassionproject.com	38	33	94K	34.36363636\r
www.daily.uk.com	37	35	571.5K	40.90909091\r
Livetranslatehub.com	6	45	420K	27.81818182\r
Orangedip.com	33	37	3K	37.63636364\r
Techreels.co.uk	30	50	12K	31.09090909\r
Sfmcompileclub.org	42	54	13.7k	27.81818182\r
Thebaddiehub.uk	42	51	18.8k	27.81818182\r
Voguevocal.com	28	21	500K	50.72727273\r
Easybib.co.uk	58	54	23.4K	44.18181818\r
Newscooper.co.uk	58	55	17K	37.63636364\r
Theendoblog.com	29	15	20k	40.90909091\r
Yourhomebase.co	6	10	9.5k	37.63636364\r
Hawaiibulletin.com	11	7	1.9K	44.18181818\r
Optimumbeauty.org	3	10	1.9k	34.36363636\r
Audiosuite.me	60	63	27.7k	27.81818182\r
Adpharmaconsultant.com	42	61	27.9k	34.36363636\r
City-robots.com	51	41	45.9k	27.81818182\r
Simontokk.com	40	64	18.7k	27.81818182\r
Shopnbny.com	57	60	20.6k	27.81818182\r
Tamildhooms.org.uk	59	63	8.2k	27.81818182\r
Techgarcon.com	46	52	4M	44.18181818\r
Southwestfareway.com	26	24	255K	34.36363636\r
Newsprovider.co.uk	36	38	55K	40.90909091\r
Individualsmagazine.com	26	54	3K	27.81818182\r
Exploreclarion.co.uk	7	62	2K	27.81818182\r
Techpp.co.uk	35	57	9K	37.63636364\r
Mynextmag.com	41	54	14K	27.81818182\r
Findmagazine.co.uk	41	56	2K	27.81818182\r
Casamigos.blog	34	55	1.5K	24.54545455\r
Floridatimes.co.uk	42	48	1.2K	24.54545455\r
Losangelestimes.co.uk	42	61	1K	24.54545455\r
Usatimes.it.com	92	92	1K	24.54545455\r
Sllives.com	40	49	11K	34.36363636\r
Completelifter.com	39	18	49K	34.36363636\r
Tryhardguides.co.uk 	43	21	1k	44.18181818\r
Amf-co.com	22	28	41.3K	37.63636364\r
Influencersgonewildx.com	5	55	19K	27.81818182\r
Bigwritehook.co.uk	40	44	13K	27.81818182\r
Muchata.com.in	77	81	116K	37.63636364\r
Themysterymagazine.co.uk	33	25	70K	27.81818182\r
Baddiehub1.com	37	47	20K	27.81818182\r
Theitradercoin.com	37	33	29.7K	24.54545455\r
Moonvalleynews.org	39	31	30.4K	27.81818182\r
Thewheon.com	35	20	540.2K	27.81818182\r
2amagazine.com	58	38	150K	83.45454545\r
Nodlemagazine.org	44	51	60.7k	27.81818182\r
Chatgptbuz.com	42	52	13.4k	27.81818182\r
Heightmag.com	44	51	17.9k	27.81818182\r
Lathroprx.com	42	52	19.5k	27.81818182\r
Themahendra.com	43	52	6.7k	27.81818182\r
Newsdualmedia.com	44	51	2.8k	27.81818182\r
Pressmagazine.co.uk	37	36	21K	31.09090909\r
Techblaster.co.uk	37	43	36.4K	44.18181818\r
Earntuffer.com	40	31	80K	37.63636364\r
Wtecno.org	35	10	1.7K	24.54545455\r
Yandexgames.org	37	15	1.7K	24.54545455\r
Englishglow.com	10	10	1K	31.09090909\r
Birlor.org	10	10	3K	31.09090909\r
Gailvoice.com	19	29	10K	44.18181818\r
Moralstory.org	58	33	15K	24.54545455\r
Techhuda.com	31	10	200K	27.81818182\r
Everytalkin.co.uk	39	25	26K	40.90909091\r
Iocmkt.com	38	37	60K	27.81818182\r
Columbusperfecttintoh.com	58	60	6.6K	34.36363636\r
Sotwecom.com	55	62	10.8k	27.81818182\r
269woodwerks.com	42	61	6.7k	34.36363636\r
Businesshint.co.uk	42	42	20.1k	27.81818182\r
Mastermindescapekc.com	64	58	11.7k	34.36363636\r
Recifestorg.com	59	61	4.4k	27.81818182\r
Optincontacts.com	29	14	38K	31.09090909\r
Venuecincinnati.com	15	9	57K	96.54545455\r
Zoeperry.co.uk	35	36	2K	24.54545455\r
Sbcodez.com	15	19	20K	57.27272727\r
Thenewordermagazine.com	40	15	8K	24.54545455\r
Xiaopan.co	44	55	18K	44.18181818\r
TheWheon.com	5	3	500K	27.81818182\r
Sashmira.com	43	9	13K	44.18181818\r
Notostechnologies.com	40	12	28K	27.81818182\r
Southwestfareway.com	22	13	8K	31.09090909\r
Easygrader.net	16	13	8K	31.09090909\r
Imocan.com	34	26	20k	37.63636364\r
Classprayer.com	35	37	35K	37.63636364\r
Habitadvisors.com	15	26	19K	34.36363636\r
Partyprott.com	35	40	5K	34.36363636\r
Techimaging.co.uk	36	42	6K	27.81818182\r
Timebusinessnews.com	66	71	1K	21.27272727\r
Speromagazine.com	58	43	34k	27.81818182\r
Technotraps.com	17	51	13K	27.81818182\r
Tygiadola.net	20	45	70K	40.90909091\r
Tubegalore.uk	38	22	124K	27.81818182\r
Wilddiscs.com	18	39	180K	57.27272727\r
Gyansora.com	43	52	40K	37.63636364\r
Internet-chicks.co.uk	32	54	22.6K	27.81818182\r
Sfm-compile.com	32	54	13K	31.09090909\r
Walkermagazine.com	37	28	22K	31.09090909\r
Thetechnotricks.net	44	17	122.2k	34.36363636\r
Bsglife.com	43	36	31K	44.18181818\r
Ziskmagazine.com	15	47	3K	37.63636364\r
Growingupwell.org	7	44	20K	44.18181818\r
Streameast.org.uk	35	37	158K	34.36363636\r
Coopermagazine.co.uk	36	26	70K	37.63636364\r
Disboard.co.uk	37	56	44.3K	37.63636364\r
Totalstationplaza.com	32	11	22K	31.09090909\r
Mangabuddy.blog	36	59	45.5K	37.63636364\r
Newsdipper.co.uk	37	51	80K	57.27272727\r
Bartowfirst.com	14	20	58K	27.81818182\r
Unsentproject.net	22	15	20k	27.81818182\r
Nazthrift.com	14	50	21K	27.81818182\r
Tensemagazine.com	24	28	33K	34.36363636\r
Hackerella.com	26	31	35K	50.72727273\r
Timestech.co.uk	35	40	8K	24.54545455\r
Justweighingstuff.com	40	67	12K	40.90909091\r
Fungroupsnames.com	41	63	18K	40.90909091\r
Rizzlineshub.com	40	67	6K	40.90909091\r
Namesspark.com	40	67	3K	40.90909091\r
Nnaleb.com	28	28	27K	44.18181818\r
Blogmagazines.co.uk	34	58	46K	24.54545455\r
Sfmcompile.co.uk	40	13	30K	24.54545455\r
Gmru.co.uk	25	20	3K	24.54545455\r
Av-Tub.com	31	48	208K	24.54545455\r
VistaMagazine.com	39	30	21K	44.18181818\r
Calibermag.net	17	31	15K	47.45454545\r
Digimagazine.co.uk	54	58	80K	34.36363636\r
Pinayflix.com.in	79	27	3K	27.81818182\r
Epos-bihar.com	2	11	9.2K	27.81818182\r
Innerpreneur.blog	33	11	1.6K	27.81818182\r
Dirtyships.org	5	5	8K	31.09090909\r
2sistersgarlic.com	26	23	45K	37.63636364\r
Fitcoding.com	15			44.18181818\r
Rizzapedia.com	41	51	15K	40.90909091\r
Trendoxygen.com	37	54	4.6K	40.90909091\r
Projectleadersmagazine.com	11	11	49K	37.63636364\r
Solutionforever.com	46	42	8K	37.63636364\r
Mistyinfo.blog	1	1	76K	24.54545455\r
inflact.co.uk	58	2	10.4k	34.36363636\r
Hocmuseum.com	36	11	4K	34.36363636\r
Techbetime.com	56	17	261K	24.54545455\r
Screengamma.com	25	25	23K	34.36363636\r
Magazinecontent.co.uk	16	11	3K	34.36363636\r
Baddiehub.uk	50	27	316.7k	31.09090909\r
Bsuperb.com	25		31K	63.81818182\r
Aiyifan.co.uk	30+	50+	7k	37.63636364\r
Makonitech.com	41	38	23K	27.81818182\r
Vizaca.co.uk	40	30	36k	31.09090909\r
Www-schoology.com	70	79	15K	24.54545455\r
Avtube.org	33	33	29K	34.36363636\r
Bmtimes.co.uk	52	35	61K	37.63636364\r
Nairaland.co.uk	38	37	3K	27.81818182\r
Hypackels.com	31	30	9K	24.54545455\r
Apkek.org	35	55	1K	27.81818182\r
Techblaster.co.uk	37	43	36.4K	44.18181818\r
Mypascoconnect.co.uk	37	51	11.2K	24.54545455\r
Namesbluff.com	37	42	56K	40.90909091\r
Websauna.org	22	35	40K	40.90909091\r
Heavenhouzz.com	35	38	28K	27.81818182\r
Lolbeans.co.uk	35	50	1.3k	34.36363636\r
Dodbuzz.co.uk	36	50	50K	40.90909091\r
Everscroll.org	4	8	15K	31.09090909\r
Themorningtimes.co.uk	32	24	11K	27.81818182\r
Photosqn.com	36	14	91K	40.90909091\r
Servicesexplainer.com	27	25	12K	27.81818182\r
Jojoygta5.co.uk	37		2k	37.63636364\r
Buzzzfeed.co.uk	39	18	6.7k	31.09090909\r
Ibusinessday.co.uk	20	51	5K	27.81818182\r
M4ufree.co.uk	39$	13	3.1k	27.81818182\r
Venisonmagazine.com	28	50	150K	57.27272727\r
Espressoblog.org	17	30	39K	37.63636364\r
Rexsdeli.com	16	31	43K	37.63636364\r
Fobie.org	30	20	12.7K	37.63636364\r
Norvasen.com	31	33	50K	37.63636364\r
Heavenclick.com	37$	15	38K	40.90909091\r
Trekmag.co.uk	4	27	21K	27.81818182\r
Techymagazine.co.uk	35	12	15.3K	27.81818182\r
Manuscriptgrooming.com	36	27	2K	63.81818182\r
Infinityelse.co.uk	35	37	43k	34.36363636\r
Hsnime.co.uk	37	54	10K	27.81818182\r
Flaremagazine.co.uk	36	38	250K	37.63636364\r
Tgtube.co.uk	39	51	8.8K	24.54545455\r
Cyberkannadig.com	58	48	15.7K	24.54545455\r
Dramatale.com	58	51	10.6K	24.54545455\r
Titfees.org	58	51	2.9K	27.81818182\r
Techiwall.com	36	47	9.4K	27.81818182\r
Greencric.com	36	26	50K	27.81818182\r
Guestmagazines.co.uk	37	59	21K	31.09090909\r
Iocmkt.com.in	65		483.3k	27.81818182\r
Theexpotab.com	11		8.5k	27.81818182\r
Technotricks.com.in	67		20k	27.81818182\r
Redandwhitemags.com	34		7.8k	24.54545455\r
How2invest.mx	12		293.1k	24.54545455\r
Indiacarez.com	23	19	39K	34.36363636\r
Apnews.com	92	90	30 M	#VALUE!\r
Arcarrierpoint.net	53	30	3.7M	27.81818182\r
Vamonde.com	39	40	35K	50.72727273\r
Ziplinq.com	28	23	13K	34.36363636\r
Healthke.com	41	35	3K	27.81818182\r
Exportingofamerica.com	5		18K	24.54545455\r
Threadswire.com	5		2k	31.09090909\r
Runpost.com.in	65	77	108k	34.36363636\r
Howinsights.com	36	50	50K	31.09090909\r
Papermag.org	37	43	7K	24.54545455\r
Fabulousboobies.com	25	18	18k	37.63636364\r
Magazinepro.co.uk	33	22	18.5K	27.81818182\r
Digisimhub.com	36		40K	27.81818182\r
Kingymab.co.uk	37	13		24.54545455\r
Newsgenius.co.uk	36	28	23k	27.81818182\r
Spicemastery.com	36	51	3.5K	24.54545455\r
Suffarankers.com	38		45k	31.09090909\r
Technicalsmind.com	37	33	7.5K	24.54545455\r
Usdigitalmagazine.com	35	53	7.6K	27.81818182\r
Elephantstages.com	26	21	12.3K	31.09090909\r
Wordiply.uk	36		8.1k	24.54545455\r
Techktimes.co.uk	51	54	20K	47.45454545\r
Techsslaash.com	55	71	6K	31.09090909\r
Thefriskytimes.com	36	35	17K	40.90909091\r
Vbusiness.co.uk	36	54	41.6K	27.81818182\r
Bestmessage.in	11	14	1k	31.09090909\r
Brandedpoetry.com	18	32	42k	31.09090909\r
Kongotech.org	54	29	400K	34.36363636\r
Tanzohub.today	37	43	7K	24.54545455\r
How2invest.com.mx	37	66	300K	31.09090909\r
masan.co.uk	35	48	18K	27.81818182\r
Thebroadtrade.com	36	52	18K	27.81818182\r
Digitalnewsalerts.org	37	30	10K	24.54545455\r
Abcmagazine.org	37	53	250K	27.81818182\r
Beforeitnews.co.uk	37	20	5K	24.54545455\r
Pixwox.co.uk	38	25	4.7k	27.81818182\r
Abusinessventure.com	37	27	21.8k	34.36363636\r
Baddiehub.blog	40	44	5k	27.81818182\r
Cookape.com.in	65	77	200k	31.09090909\r
Blogangle.org	36	27	1K	31.09090909\r
Omgflix.co.uk	37	31	16K	31.09090909\r
interestingfacts.org	71	30	5K	31.09090909\r
Spacecoastdaily.co.uk	56	13	5K	37.63636364\r
Hogatoga.com.in	65	77	7K	24.54545455\r
Trendingcelebritys.com	35	17	13K	24.54545455\r
Veganovtrichy.com	2	11	4.4k	31.09090909\r
Tgtube.us	37	25	50k	27.81818182\r
Thecelebrays.com	36	32	5k	27.81818182\r
Crispme.co.uk	12	15	3k	34.36363636\r
Wrenable.com	37	32	4k	27.81818182\r
Cyberpulseltd.co.uk	37	28	3k	27.81818182\r
Picnob.uk	11	9	5.5k	27.81818182\r
Tamilprint2.co.uk	22	11	40k	27.81818182\r
Techvanguards.com	30	20	4K	31.09090909\r
Wellhealthalert.com	37	50	5.4K	24.54545455\r
Brookbtaubebox.com	36	54	9.5K	24.54545455\r
Calandrando.com	36	41	7K	24.54545455\r
Basicadvise.co.uk	37	40	4k	27.81818182\r
Thinkbomall.com	37	30	8K	27.81818182\r
Techlokesh.org	37	13	3K	27.81818182\r
Seotakeaways.com	26	35	15.8K	27.81818182\r
Flixhq.uk	37	14	28.7K	31.09090909\r
Crunchnews.org	26	28	27K	34.36363636\r
Bioscopey.com	37	33	7K	31.09090909\r
Alertecelebrites.fr	37	34	2K	31.09090909\r
Devtuc.com	34	33	1K	31.09090909\r
Menuaustralia.com	35	32	400K	40.90909091\r
Fixhq.org	38	37	5K	31.09090909\r
Jinxmanga.co.uk	39	36	1K	31.09090909\r
Howuknews.co.uk	36	34	1K	31.09090909\r
Frmenu.org	39	38	6K	40.90909091\r
Tmsimregistration.com	38	37	25K	40.90909091\r
Upbent.com	61	58	40K	31.09090909\r
Studyheals.com	37	35	7K	31.09090909\r
Betsays.com	56	55	1K	31.09090909\r
Hbtinsider.com	36	34	3K	31.09090909\r
Lunchmenualert.com	37	36	2K	31.09090909\r
7networth.com	37	36	3K	31.09090909\r
Bistrovista.com	54	51	2K	31.09090909\r
1xify.com	61	59	4K	31.09090909\r
Digitaalz.com	33	32	1K	31.09090909\r
Apexbeasts.com	39	36	3K	31.09090909\r
Thetrendzguruji.me	37	36	1K	31.09090909\r
Currentpackages.com	36	32	11K	31.09090909\r
Sgmenuprices.com	37	33	5K	31.09090909\r
Mycubatrip.com	35	33	1K	31.09090909\r
Mxmenu.org	33	36	1K	31.09090909\r
Rubmd.net	54	38	1K	31.09090909\r
Menualerteg.com	33	36	1K	31.09090909\r
Techhaumea.com	33	35	1K	31.09090909\r
Richcelebritiesnetworth.com	34	36	1K	31.09090909\r
Differencewise.com	54	33	1K	31.09090909\r
Prixdesmenus.com	57	43	12K	40.90909091\r
Pricealertbd.com	55	43	8K	31.09090909\r
Bighomesinfo.com	37	17	5k	31.09090909\r
Technewztop.com.in	69	70	1K	24.54545455\r
Ytrishi.org	37	10	19K	24.54545455\r
Techgup.org	15	10	29.3K	24.54545455\r
Biharjobportal.co.in	5	15	4.5K	24.54545455\r
Theradamm.com	56	9	1.4k	31.09090909\r
Thenewztalkies.com	62	10	36.1k	24.54545455\r
Aiotechnical.com.in	68	68	31.6k	24.54545455\r
Hindiyaro.net	36	19	70.7k	27.81818182\r
Deepcyclenews.co.uk	39	14	1.1k	27.81818182\r
Maxxfour.net	56	2	8k	24.54545455\r
Themixmoz.com	57	0	34.5k	24.54545455\r
Bblogs.uk	55	8	2k	31.09090909\r
Fintechszoom.com	23	12	16.1k	37.63636364\r
Thetechgues.com	55	11	1.7k	24.54545455\r
Bloghives.com	13	0	17.4k	24.54545455\r
Nytimer.co.uk	36	49	13.4K	24.54545455\r
Baddiehub.link	34	37	29K	27.81818182\r
Diatm.com	13	15	2K	27.81818182\r
Livemint.uk	34	37	1K	31.09090909\r
Imginn.co.uk	51	51	3k	31.09090909\r
Jboutique.co	10	17	10K	40.90909091\r
Ferretstyle.com	42	26	14K	34.36363636\r
Techuknews.com	37	40	6K	24.54545455\r
Foxfaster.com	35	30	15K	24.54545455\r
Fingerlakes1.co.uk	30	50	59k	24.54545455\r
Ventspeak.com	25	18	20K	27.81818182\r
Wordletoday.in	37$	10	5K	24.54545455\r
Americanrepost.com	37	5	3.1K	25.85454545\r
Seokingsclub.com	35	31	5k	24.54545455\r
Techprimex.com	57	31	3k	34.36363636\r
Businessesplans.co.uk	38	31	5k	24.54545455\r
Myvyvymanga.com	37	33	32k	27.81818182\r
Aio-technical.com	37	29	115k	27.81818182\r
Todayoutlook.co.uk	37	29	29k	27.81818182\r
Creativeter.com	50	35	32k	27.81818182\r
Contextoanswertoday.com	35	33	13k	31.09090909\r
Croesoffice.org	30	42	25K	40.90909091\r
Techdeck.com.in	70	81	58K	34.36363636\r
Brooktaube.org	37	26	33K	31.09090909\r
Dondodson.com	37	46	18K	27.81818182\r
Intechpro.co.uk	1$	4	15K	24.54545455\r
Techsquick.com	29	58	1.3K	24.54545455\r
Aaryaeditz.org	11	9	56K	27.81818182\r
Akedowarriors.com.au	11	8	3K	37.63636364\r
Ntdesigns.com.au	18	9	7k	37.63636364\r
Techipes.com	34	50	2.2K	27.81818182\r
Deepcyclenews.co.uk	37	36	2K	31.09090909\r
Private-delights.org	37	47	9K	27.81818182\r
Techtrending.co.uk	37	29	8.4K	27.81818182\r
Techarchived.com	35			24.54545455\r
Tubewellscreenss.com	20			34.36363636\r
Storytellershat.com	20			57.27272727\r
Tirpse.com	32			34.36363636\r
Websitesone.com	57			34.36363636\r
Neclumi.com	36			34.36363636\r
Police-writers.com	37	29	31.3K	57.27272727\r
Thegloworm.com	9	7	17.3K	44.18181818\r
Rideable.com.in	71	80	2K	31.09090909\r
Sonicshappyhour.com	37	13	4K	24.54545455\r
Sethbtaubehub.com	24	42	15K	24.54545455\r
Todayoutlook.co.uk	30	50	44.1K	24.54545455\r
Promagazinehub.com	56	10	1K	24.54545455\r
Msmagazine.co.uk	37	40	20.6K	37.63636364\r
Aaryaeditz.org	36	25	153.4K	24.54545455\r
Businessmanga.co.uk	37	10	1K	27.81818182\r
Mhinsights.co.uk	35	7	7.4K	24.54545455\r
Xvif.com.in	80	80	40.K	24.54545455\r
Nyweekly.co.uk	40	32	52.8	40.90909091\r
Nbcjournals.com	36	12	20.6K	37.63636364\r
jojoygta5.org	32	27	2.5K	24.54545455\r
Cooprat.com	9	11	7.6K	24.54545455\r
Thefluxtech.com	11	8	17K	24.54545455\r
Usalivetrend.com	42	43	13.7K	24.54545455\r
businessbond.net	39	40	1.2K	40.90909091\r
Techlokesh.org	36	28	1K	27.81818182\r
Aaryaeditz.org	33	26	1K	27.81818182\r
Hindiqoutes.com	37	28	78.6K	40.90909091\r
Biharbhumilandrecord.com	37	59	98.8K	40.90909091\r
Mpbhulekhrcms.com	37	29	76.8K	40.90909091\r
Startupsofindia.com	52	36	22.0K	40.90909091\r
Primenymedia.com	37	18	9.9K	40.90909091\r
Medianextusa.com	37	17	4.9K	40.90909091\r
Ladli-behna-yojana.com	37	15	11.1K	40.90909091\r
Vibnology.com	38	25	1.4K	40.90909091\r
Biharportalonline.com	37	27	3.3K	40.90909091\r
Thebioinfo.com	38	49	6K	40.90909091\r
Scoopwheels.com	37	19	4.4K	40.90909091\r
Thereaderstone.com	37	16	4.4K	40.90909091\r
Theunipost.com	37	21	3.2K	40.90909091\r
Thedigilocker.in	52	39	4.6k	40.90909091\r
Kedaiori.com	57	50	3.5K	40.90909091\r
Baldockvets.com	52	31	4.1K	40.90909091\r
Yourssstory.com	37	47	22.1K	40.90909091\r
Stockdalecolemanforjudge.com	52	37	6.2K	40.90909091\r
Magazinespros.com	46	48	3.1K	40.90909091\r
Coreusnews.com	37	29	2.1K	40.90909091\r
Msnpro.co.uk	36	23	1.1K	40.90909091\r
Ncrchronicle.com	37	26	2.0K	40.90909091\r
Unimarsh.com	37	30	10.6K	40.90909091\r
Theprimeport.com	39	29	1.9K	40.90909091\r
Scooptoop.com	37	15	1.8 K	40.90909091\r
Startupvirals.com	37	47	1.1K	40.90909091\r
Eindiawire.com	37	17	1.2K	40.90909091\r
Glamourglom.com	37	16	1.2K	40.90909091\r
Sportsvirals.com	37	47	5.7K	40.90909091\r
Timebuzinessnews.com	59	0	2.6K	40.90909091\r
Dailybizhunt.com	37	48	1.4K	40.90909091\r
Texanstimes.com	37	26	1.4K	40.90909091\r
Rumorster.com	37	5	1.2K	40.90909091\r
Magazinesmega.com	30	57	5.3k	40.90909091\r
Bravixo.com	37	28	2.8K	40.90909091\r
Chicagonewsupdate.com	37	27	238	40.90909091\r
Usaacemedia.com	37	32	651	40.90909091\r
iplworldcup.com	37	47	580	40.90909091\r
Thenewznation.com	37	26	534	40.90909091\r
Doofliix.com	36	32	60K	31.09090909\r
Pedrovazpaulo.net	35	27	10K	31.09090909\r
Billionfire.com	37	32	1K	31.09090909\r
Bistrover.com	38	34	1K	31.09090909\r
Famous-parenting.com	37	31	3K	31.09090909\r
Vatonlinecalculator.co.uk	60	37	2K	31.09090909\r
Cubanribs.com	37	29	2K	31.09090909\r
Pmawasgraminlist.co	11	18	50K	31.09090909\r
Sumosearch.io	38	33	4K	31.09090909\r
Openhoursguru.com	34	27	3K	31.09090909\r
Spiritmeans.com	37	31	1K	31.09090909\r
Washingtongreek.co.uk	37	28	4.3K	24.54545455\r
Contacthelp.co.uk	53	22	1K	37.63636364\r
Hamrosolarllc.com	8	30	1.1K	24.54545455\r
Klwap.com.in	73	42	35K	27.81818182\r
Naturerealytr.com	31	36	46K	31.09090909\r
Techgues.org	44	38	27K	31.09090909\r
Wbsedcl.com.in	73	38	68K	27.81818182\r
Premiumbusinesshub.com	54	37	1K	27.81818182\r
Magque.org	37	30	20K	24.54545455\r
Blooklet.net	37	31	3K	24.54545455\r
Thesun.blog	35	30	25.7K	24.54545455\r
ExpressInternal.com	34	28	1.3K	24.54545455\r
Discoverthrill.co.uk	34	30	2.1K	24.54545455\r
Flaremagazines.co.uk	34	3	6.5K	24.54545455\r
londondaily.org	34	30	1K	24.54545455\r
seofigure.com	34	27	1K	24.54545455\r
Centernewshub.com	42	30	2K	24.54545455\r
Newsface.co.uk	34	30	115.6K	27.81818182\r
Tvinsider.co.uk	38	15	45K	34.36363636\r
Vital-mag-net-blog.com	5	4	916.6K	27.81818182\r
Atfboru.co.uk	4	3	2.8K	24.54545455\r
Techu.blog	33	50	1K	24.54545455\r
Ventsmagalogue.co.uk	30	50	20K	24.54545455\r
Newspapertime.co.uk	30	50	126.2K	27.81818182\r
Vstoriginal.com	28	26	1K	47.45454545\r
Cytocom.com	23	30	28K	47.45454545\r
Geeksgyan.com	21	9	2K	40.90909091\r
Thebeverlyadams.com	26	26	31K	50.72727273\r
Kntosa.com	25	21	5K	34.36363636\r
Angerole.com	20	14	13K	40.90909091\r
Turdwords.com	19	13	7K	47.45454545\r
Clickup.com.in	78	70	14K	34.36363636\r
Runningpost.com.in	78	70	14K	34.36363636\r
Falmyhit.com	32	9	2.6K	27.81818182\r
Photosgreet.com	32	69	86K	34.36363636\r
Ncedcloud.co.uk	58	5	9K	27.81818182\r
Msnwire.co.uk	37	2	27K	24.54545455\r
Wepbound.net	31	40	20K	27.81818182\r
Thecobox.org	37	17	8K	34.36363636\r
Fintechzooms.org	28	10	1K	37.63636364\r
Deoda.pro	34	8	1K	24.54545455\r
Getbreaknews.com	4	5	1.3K	24.54545455\r
Theblogverge.com	34	41	5.7K	24.54545455\r
Wegmans.co.uk	56	15	17.7K	27.81818182\r
Classcharts.org.uk	29	50	5.7K	24.54545455\r
Voyageny.co.uk	35	8	5.6K	27.81818182\r
Tempindoors.com	14	14	2K	27.81818182\r
Thevitalmag.net	16	15	5K	27.81818182\r
Mirrornewz.com	43	17	8.1K	27.81818182\r
Brightnewz.com	43	23	5.1K	27.81818182\r
Techifuture.co.uk	40	38	4.6K	24.54545455\r
Noodlemagazineo.com	29	15	1K	24.54545455\r
Newslogicalshout.com	31	10	1K	24.54545455\r
Proxiyum.org	28	2	1K	27.81818182\r
Alvarezautosales.com	24	26	1K	27.81818182\r
Watdongmoonlek.com	23	28	5.1K	27.81818182\r
Mixtvnow.net	37	19	1.5K	27.81818182\r
Bigtechoro.org	37	19	11K	27.81818182\r
Cyberkannadig.net	37	4	1.3K	27.81818182\r
Theztec100.com	37	2	7.6K	24.54545455\r
Theworldfree4u.com			117.9K	31.09090909\r
Heardle70s.co.uk	30	55	1.8K	24.54545455\r
Publicmagazine.co.uk			7.3K	24.54545455\r
Zvideopro.com			15.2K	24.54545455\r
Wordlehinttoday.blog			2.9K	24.54545455\r
Canvaartworks.com			2.6K	24.54545455\r
Buzztum.org	13	33	18K	24.54545455\r
Examplemagazine.co.uk	30	50	66.9K	27.81818182\r
Comicfanzine.co.uk	30	50	52.7K	27.81818182\r
Techvision.com.in	74	80	5.5K	27.81818182\r
Lionswire.blog	5	4	37.2K	24.54545455\r
Techdecktrick.com	37	40	1K	24.54545455\r
Unsentproject.co.uk		53	11.3K	24.54545455\r
Techpioneer.co.uk			5.1K	24.54545455\r
Msnnewz.com			1K	24.54545455\r
Dainikshikshapro.com				24.54545455\r
Startrend.co.uk	35	51	2K	24.54545455\r
Msagears.com	35	27	50K	44.18181818\r
Repoindustry.com	35	12	81K	47.45454545\r
Missionies.com	34	15	17K	37.63636364\r
Dirtyships.org	5	5	8K	31.09090909\r
Themp4moviez.com	10	5	25K	31.09090909\r
Techweekly.com.in	83	15	40.6K	34.36363636\r
Techbullion.uk	56	37	3K	24.54545455\r
Hdhub4unit.com	18	55	4.1K	24.54545455\r
Adsypwhb3.com	32	13	1K	24.54545455\r
Bctimes.co.uk	4	2	1.1K	24.54545455\r
Timelens.co.uk	6	3	1K	24.54545455\r
Classicnews.co.uk	5	3	1K	24.54545455\r
Knowledge.com.in	77	81	10K	27.81818182\r
Fappeningblog.uk	58	28	4K	24.54545455\r
Erothot.org	34	56	70.2K	24.54545455\r
Fintechzoomcom.pro	3	1	5.1K	24.54545455\r
Vital-mag-net-blog.blog	10	11	107.1K	24.54545455\r
Wpdevshed.co.uk	40	4	12.2K	24.54545455\r
Ucatruco.com	33	52	68.7K	27.81818182\r
Ontpress.co.uk	32	3	2K	27.81818182\r
Symbolab.co.uk	30	2	5K	27.81818182\r
Thetechnotricks.com	29	28	38.1k	27.81818182\r
Idvisahub.com	22	21	7k	27.81818182\r
Radamm.net	41	18	14.7k	24.54545455\r
Thecaribloop.com	36	36	3.2k	24.54545455\r
Rare-fiedtech.com	39	2	1.4k	24.54545455\r
Fzkidd.com.in	81	12	34.9k	34.36363636\r
mdisk.com.in	81	10	2.1k	34.36363636\r
playmyworld.co.uk	57	0	1k	31.09090909\r
Bolly4upro.com	10	16	252.5K	24.54545455\r
Webdesignpostfalls.com	30	38	1K	27.81818182\r
Fin-techzoom.com	41	53	19.1K	27.81818182\r
Webdesignpostfalls.com	27	38	7.8k	27.81818182\r
Recifest.com.au	3	5	10.2K	27.81818182\r
Techyapple.co.uk	13	15	4.3K	27.81818182\r
Gnhust.uk	24	25	1.1k	31.09090909\r
Hqfix.co.uk	44	25	1k	31.09090909\r
Peerji.com	14	32	3.7K	31.09090909\r
Bloggershub.org	29	18	2.1K	31.09090909\r
Zobuz.co.uk	12	14	4.2K	27.81818182\r
Veganovtrichy.net	20	27	5.8K	27.81818182\r
Techmininghub.co.uk	7	11	1.8k	27.81818182\r
Buzzhatch.co.uk	34	53	31k	31.09090909\r
dignotech.com	40	20	13.8k	24.54545455\r
lidnews.com	41	20	12k	24.54545455\r
techsuse.com	39	20	10.8k	24.54545455\r
newspaperinsider.com	10	20	8.7k	24.54545455\r
investorweeklynews.com	41	20	8.6k	24.54545455\r
dailynewswork.com	59	15	7.6k	24.54545455\r
rockbandnews.com	41	15	7.9k	24.54545455\r
techmarsh.com	44	15	7.7k	24.54545455\r
dailydishnews.com	41	15	7.7k	24.54545455\r
newsross.com	41	15	7.5k	24.54545455\r
morningtimenews.com	41	15	8.1k	24.54545455\r
sevenseventech.com	41	20	7.1k	24.54545455\r
newscod.com	41	15	7.1k	24.54545455\r
journalnewsinfo.com	41	20	6.9k	24.54545455\r
ormetech.com	41	10	6.7k	24.54545455\r
mytecharm.com	41	10	6.7k	24.54545455\r
newsdailysources.com	41	10	6.2k	24.54545455\r
techchevy.com	41	10	6.9k	24.54545455\r
newsthere.com	44	10	6.1k	24.54545455\r
carmannews.com	41	10	5.7k	24.54545455\r
moonvalleynews.com	41	14	5.4k	24.54545455\r
honestnewsdaily.com	41	14	5.4k	24.54545455\r
greennewsdesk.com	41	14	4.9k	24.54545455\r
relatednewsnetwork.com	41	14	4.8k	24.54545455\r
dailynewslaw.com	41	14	4.8k	24.54545455\r
portalnewsletter.com	10	18	4.4k	24.54545455\r
notontech.com	41	15	3.5k	24.54545455\r
reliablenewsdaily.com	41	19	3.1k	24.54545455\r
techslassh.com	41	10	3.1k	24.54545455\r
marketmedianews.com	41	10	3k	24.54545455\r
recordnewswire.com	57	10	2.7k	24.54545455\r
newsworlddaily.com	41	10	2.8k	24.54545455\r
mediumbloggers.com	7	10	3k	24.54545455\r
newspapercast.com	41	10	2.5k	24.54545455\r
techhopes.com	41	10	2.7k	24.54545455\r
technicalways.com	40	10	2k	24.54545455\r
stocksmarkettips.com	10	10	1.5k	24.54545455\r
buildingbusinessnews.com	41	10	1.9k	24.54545455\r
moneynewsweb.com	41	10	1k	24.54545455\r
economicweeklynews.com	15	15	1k	24.54545455\r
myclassnews.com	10	15	1k	24.54545455\r
Bolly4you.net	30	35	11.9K	24.54545455\r
betterthisworldcom.com	30	35	3K	24.54545455\r
cozovmoni.net	30	35	12K	24.54545455\r
rainmakerless.org	30	35	4.6K	24.54545455\r
chandiapk.net	30	35	1.5K	24.54545455\r
hd4hub4u.net	30	35	1.2K	24.54545455\r
Techleez.net	30	35	1K	24.54545455\r
Hdhun4u.com	30	35	2K	24.54545455\r
Springhillmedgroup.net	30	35	1.7K	24.54545455\r
animedekho.org	30	35	3.3K	24.54545455\r
nice1010fun.com	30	35	4K	24.54545455\r
Kingcomix.us	24	10	5.2k	27.81818182\r
Utdplug.me.uk	34	10	3.3k	44.18181818\r
Delightlacto.com	31	10	4.2k	27.81818182\r
Tuambia.co.uk	37	28	8K	27.81818182\r
Soldmagazine.co.uk	38	53	18K	40.90909091\r
Mytecharm.org	37	54	62.5K	27.81818182\r
Breakinsight.co.uk	52	8	12K	27.81818182\r
Businessoutside.co.uk	42	38	2.8K	24.54545455\r
Celebjournal.co.uk	41	36	1.5K	24.54545455\r
Blogbuzznews.com	37	61	29.5K	24.54545455\r
Delightlacto.com	32	17	4.8K	27.81818182\r
Aaryaeditz.us	37	35	2.2K	27.81818182\r
Happymistry.net	41	31	1K	27.81818182\r
Mahitechinfo.pro	9	6	1K	27.81818182\r
Techdecktrick.com	34	31	1K	27.81818182\r
Slideinsights.com	39	31	1K	27.81818182\r
Runposts.org	6	4	1K	27.81818182\r
Ucatruco.org	41	33	1K	27.81818182\r
Rankguruji.net	7	6	1K	27.81818182\r
Thetechkeyboard.com	36	33	3.6K	27.81818182\r
Techyrams.com	36	32	10.5K	27.81818182\r
Thetoopa.com	34	31	1K	34.36363636\r
Businesstycoon.io	31	28	1K	34.36363636\r
Theincestflix.com	30	13	17.1K	24.54545455\r
Markmagazine.co.uk	58	48	10K	34.36363636\r
Smoothiepussit.com	45	50	24.4K	24.54545455\r
Teckjbcom.com	11	9	9K	37.63636364\r
Utdplug.co.uk	41	36	36.8K	44.18181818\r
Learnspreadsheet.com	16	11	1K	40.90909091\r
Theridgelinereport.com	18	11	1K	40.90909091\r
Thejujutsukaisenread.com	38	52	25K	24.54545455\r
instander-official.com	34	56	2000K	24.54545455\r
Psbios.com	35	50	2000K	24.54545455\r
Gtasanandreasapk.org	36	50	81K	24.54545455\r
Shayaristan.net	36	55	64K	24.54545455\r
Sosomodapks.com	35	53	46K	24.54545455\r
Ditosimregistration.net	36	61	47K	24.54545455\r
Winkapkgeek.com	35	51	32k	24.54545455\r
Cheeziousmenu.com	35	7	25k	24.54545455\r
Taradownloader.com	35	11	25K	24.54545455\r
Whatnetworksph.com	36	51	20K	24.54545455\r
Nytsudoku.net	35	58	19K	24.54545455\r
Sbhinter.com	36	45	17K	24.54545455\r
Cinemanaios.org	36	52	16K	24.54545455\r
inat-box-apk.com.tr	37	57	16K	24.54545455\r
Vegassweeps.io	33	54	13K	24.54545455\r
Symbolbio.com	36	58	12K	24.54545455\r
itscouriertracking.com	36	0	11K	24.54545455\r
Applicationformat.net	35	52	10K	24.54545455\r
Teraboxpro.com	35	53	10K	24.54545455\r
Groupsorlinky.com	37	61	9K	24.54545455\r
Goodwilloutlets.net	36	49	8K	24.54545455\r
Myphmenu.org	35	54	8K	24.54545455\r
Proinshots.com	36	51	8K	24.54545455\r
Sgmenuz.com	36	55	8K	24.54545455\r
Pixelabapk.com	35	61	7K	24.54545455\r
Carsimult.com	36	52	7K	24.54545455\r
Namemeup.com	37	0	5K	24.54545455\r
Universalnamegenerator.com	39	49	5K	24.54545455\r
Paintpulse.co.uk	38	47	4K	24.54545455\r
Celebhusband.com	35	26	4K	24.54545455\r
Dudemods.com	33	53	4K	24.54545455\r
Scmapk.com	34	46	3K	24.54545455\r
Travelsbird.com	34	55	3K	24.54545455\r
Hitvofficial.com	35	50	3K	24.54545455\r
Thecarxstreetpro.com	37	52	3K	24.54545455\r
Punspromax.com	35	50	3K	24.54545455\r
Rareteamnames.com	36	57	2K	24.54545455\r
Fairmoore.co.uk	37	56	2K	24.54545455\r
Literary-techniques.com	34	56	2K	24.54545455\r
Lescobillpay.pk	35	56	3K	24.54545455\r
Technewsinfoo.com	35	55	2K	24.54545455\r
Philippinesmenu.com	36	49	2K	24.54545455\r
Captionsbuzz.com	37	47	2K	24.54545455\r
Carstale.com	37	49	2K	24.54545455\r
idstatuscheck.com	35	50	2K	24.54545455\r
Anniversaryjourney.com	34	51	1.2K	24.54545455\r
Rantiethnicity.com	34	53	1.5K	24.54545455\r
Celebviki.net	33	24	1.6K	24.54545455\r
Alightmotionmodpro.com	32	46	1.4K	24.54545455\r
Duereply.com	34	51	1.3K	24.54545455\r
Menusalert.org	32	49	1.3K	24.54545455\r
Sinfuldeedsbio.com	34	53	1.1K	24.54545455\r
Drpoetry.com	34	52	1K	24.54545455\r
Animalsymbo.com	33	51	1	24.54545455\r
Luaghter.com	37	51	1K	24.54545455\r
Philhealth.cc	31	53	1K	24.54545455\r
Alightmotionmapk.com	35	46	1K	24.54545455\r
Sgmenusprice.net	31	53	1K	24.54545455\r
Wishesbirthdays.com	48	51	1K	24.54545455\r
Elrutificadorchile.cl	34	53	1K	24.54545455\r
Emiratestatusid.com	34	49	1K	24.54545455\r
Bioviki.com	32	64	1K	24.54545455\r
Whatsmb.com	33	53	1K	24.54545455\r
Menuphl.org	33	53	1K	24.54545455\r
Readjujutsukaisenmanga.net	31	50	1K	24.54545455\r
Baseballes.com	33	46	1K	24.54545455\r
Pickuplinebuzz.com	33	16	1K	24.54545455\r
Michaelleva.com	34	53	1K	24.54545455\r
Whatsjt.com	34	53	1K	24.54545455\r
Celebsafairs.net	33	52	1K	24.54545455\r
infotoptrend.com	33	53	1K	24.54545455\r
Zaraatofficial.com	37	53	1K	24.54545455\r
Fashionsquill.com	37	53	1K	24.54545455\r
Celeagenews.com	53	53	1K	24.54545455\r
Legendlifes.com	37	51	1K	24.54545455\r
Whatsgolden.com	29	53	1K	24.54545455\r
Volleyballblaze.com	36	51	1K	24.54545455\r
Wealthyhack.com	33	54	1K	24.54545455\r
Bionetworthzone.com	37	49	1K	24.54545455\r
Starsfaith.com	37	54	1K	24.54545455\r
Copyenglish.com	35	48	1K	24.54545455\r
Pikupline.net	34	49	1K	24.54545455\r
Wherepulse.com	37	49	1K	24.54545455\r
inshotspot.com	38	51	1K	24.54545455\r
Techlivo.com	38	54	1K	24.54545455\r
Smartlyreply.com	30	53	1K	24.54545455\r
Sparktime.co.uk	51	47	1K	24.54545455\r
Pickleballopinion.com	32	46	1K	24.54545455\r
Stonesmentor.com	37	40	1K	24.54545455\r
Flappymagazine.com	34	49	1K	24.54545455\r
Vnrom.cc	54	49	1K	24.54545455\r
Animalsweeble.net	34	20	1K	24.54545455\r
Englishmasterypro.net	32	12	1K	24.54545455\r
Ventmagazines.co.uk	37	48	1K	24.54545455\r
Subwaysurferapk.net	33	54	1K	24.54545455\r
Tchtrends.net	34	49	1K	24.54545455\r
infobiofusion.net	37	55	1K	24.54545455\r
Abpoetry.com	36	57	1K	24.54545455\r
Thenoobgamerz.com	35	51	1K	24.54545455\r
Knowledgemandi.com	36	51	1K	24.54545455\r
Starshistory.com	32	49	1K	24.54545455\r
infospiritual.com	35	45	1K	24.54545455\r
Talkspeaker.net	30	49	1K	24.54545455\r
Jbms360.com	29	53	1K	24.54545455\r
Beingselfish.net	33	53	1K	24.54545455\r
Snap-insta.net	33	11	1K	24.54545455\r
Celebritiezclub.com	33	53	1K	24.54545455\r
Simpcity.org.uk	37	49	1K	24.54545455\r
Chromewebextensions.com	37	50	1K	24.54545455\r
Starbeliefs.com	37	47	1K	24.54545455\r
Enfopedia.com	61	60	1K	24.54545455\r
Shaladarpans.net	38	53	1K	24.54545455\r
Mummyname.com	37	49	1K	24.54545455\r
Englishsunglish.com	35	53	1K	24.54545455\r
Husbandinfo.com	37	54	1K	24.54545455\r
Celebhatelove.com	52	55	1K	24.54545455\r
Knowillegal.com	36	49	1K	24.54545455\r
kenyasihami.com	36	51	1K	24.54545455\r
Zamenu.net	37	48	1K	24.54545455\r
Bioinfoworld.net	34	48	1K	24.54545455\r
Shayriinurdu.net	34	13	1K	24.54545455\r
Englishlush.net	32	55	1K	24.54545455\r
Newsxrocks.com	37	46	1K	24.54545455\r
Thebriefmagazine.com	35	51	1K	24.54545455\r
Gotechlingo.net	35	49	1K	24.54545455\r
Sparkstale.net	34	48	1K	24.54545455\r
Baddieshuh.com	33	53	1K	24.54545455\r
Travelpackpro.net	36	41	1K	24.54545455\r
Quotesology.com	35	56	1K	24.54545455\r
Atozpoetry.net	35	53	1K	24.54545455\r
Terabapp.com	33	34	1K	24.54545455\r
Asenquavc.com	35	51	1K	24.54545455\r
Techycubs.net	35	14	1K	24.54545455\r
Techysparkel.net	34	49	1K	24.54545455\r
Captionpulse.net	35	49	1K	24.54545455\r
Thetechinsider.co.uk	35	51	1K	24.54545455\r
Earthnatures.net	33	49	1K	24.54545455\r
Toptechsinfo.net	33	48	1K	24.54545455\r
Synonymate.net	34	49	1K	24.54545455\r
Techtendspro.net	34	48	1K	24.54545455\r
Captionsbyte.com	34	50	1K	24.54545455\r
Hexawings.net	37	54	1K	24.54545455\r
Techinfoes.com	33	16	1K	24.54545455\r
Organicblog.co.uk	33	21	1K	24.54545455\r
Mastimorning.pro	57	30	1K	24.54545455\r
Crystalsvista.net	50	49	1K	24.54545455\r
Celebrebuzz.com	37	65	58K	40.90909091\r
Applebemenu.com	41	52	14K	40.90909091\r
Thefunnypuns.com	41	51	2K	40.90909091\r
Croudmomentum.com	42	51	8K	40.90909091\r
Reptileguided.com	41	51	3K	40.90909091\r
Dunkin-donut.net	35	51	4K	40.90909091\r
Menupricesus.com	35	51	5K	40.90909091\r
Dimensionsscript.com	38	64	11K	40.90909091\r
Networthsparks.com	37	60	1K	40.90909091\r
Ajankari.com	37	55	5K	40.90909091\r
Pkr4App.Com	54	30	3.9K	24.54545455\r
Greblovz2004.Org	53	30	3.3K	24.54545455\r
Zv2Earning.Com	56	30	23.6K	24.54545455\r
Technefi.Net	51	30	28K	24.54545455\r
Cricketgateway.Org	49	30	18.8K	24.54545455\r
Gazettedupmu2.Co.Uk	44	30	26.2K	24.54545455\r
Viralapks.Com	56	30	1.6K	24.54545455\r
Bulbulnepal.Org	67	30	1K	24.54545455\r
Cozovmoni.Net	50	30	14.4K	24.54545455\r
Zetop.Org	49	30	52K	24.54545455\r
Youpak.Net	64	30	8.7K	24.54545455\r
Messiturf100.Com	48	30	4.7K	24.54545455\r
9Xfilix.Net	43	30	9.9K	24.54545455\r
4Gagnants.Com	50	30	2.9K	24.54545455\r
Donpmu.Com	49	30	7.9K	24.54545455\r
Powerturf.Org	49	30	1K	24.54545455\r
Freebookspot.Org/	50	30	1K	24.54545455\r
Mathgames67.Org	44	30	6.7K	24.54545455\r
Titfees.Net	55	30	1.5K	24.54545455\r
Poetryaddiction.Net	43	30	8.7K	24.54545455\r
Gazettepmu2.Com	54	30	9.3K	24.54545455\r
Sansar24.Org	50	30	1.1K	24.54545455\r
Wolni-Turf.Com	50	30	2.2K	24.54545455\r
Kappacoursepmu.Net	44	30	1.1K	24.54545455\r
Myliberla.Org	45	30	1K	24.54545455\r
Nice1010Fun.Com	47	30	12.3K	24.54545455\r
Filiereturf.Com	44	30	6.7K	24.54545455\r
Pkr2Earn.Com	44	30	1K	24.54545455\r
Technefi.Org	43	30	1K	24.54545455\r
Stmoro.Net/	50	30	7.9K	24.54545455\r
Ultimatestatusbar.Com	50	30	3.9K	24.54545455\r
Maryturf.Com	68	30	3.1K	24.54545455\r
Turfmillionnaire.Org	44	30	3.8K	24.54545455\r
Pmumaroc.Com	56	30	5.9K	24.54545455\r
Toptierce.Com	56	30	1.7K	24.54545455\r
Kappacourse-Gagnant.Com	56	30	2.4K	24.54545455\r
Turf-Universel.Com	54	30	1K	24.54545455\r
Rassakowska.Com	44	30	1K	24.54545455\r
Pronologiqueturf.Com	53	30	3.9K	24.54545455\r
Gazettepmu.Com	64	30	1K	24.54545455\r
Monadetcourse.Com	46	30	1.1K	24.54545455\r
Hiidude.Net	50	30	1K	24.54545455\r
Bekirturf.Org	56	30	2.3K	24.54545455\r
Thesoundstourcom.Net	43	30	1K	24.54545455\r
Cplemaire.Org	56	30	1K	24.54545455\r
Olaturf.Org	49	30	1K	24.54545455\r
Universelturf.Com	44	30	2.6K	24.54545455\r
Lillycourse.Com	43	30	1K	24.54545455\r
Mygreenbucksnet.Com	46	30	1.6K	24.54545455\r
Pronoverite.Net	44	30	2.8K	24.54545455\r
Unfgaming.Org	49	30	1K	24.54545455\r
Africpronostic.Com	44	30	1.9K	24.54545455\r
Boss-Turf.Com	50	30	2K	24.54545455\r
Kappacourse.Co.Uk	64	30	1.2K	24.54545455\r
Leblogdewolni.Com	44	30	1K	24.54545455\r
Marsturf.Com	70	30	1K	24.54545455\r
Hdhun4U.Com	56	30	1K	24.54545455\r
Kapacourse.Net	48	30	2.6K	24.54545455\r
Arcenturfgagnant.Net	56	30	2.3K	24.54545455\r
Abdellatifturf.Com	47	30	1K	24.54545455\r
Rdxhd.Org	45	30	1.9K	24.54545455\r
Cplemaire-Pmu.Com	46	30	1K	24.54545455\r
Hipposturf.Org	16	30	2.4K	24.54545455\r
Radarturf.Org	52	30	1.1K	24.54545455\r
Theboringmagazinecom.Com	50	30	3.5K	24.54545455\r
Blogsternationcom.Com	43	30	1K	24.54545455\r
Cplemaire-Lavoyeuse.Com	44	30	1K	24.54545455\r
Sumosearch.Net	46	30	1K	24.54545455\r
Kappaturf.Net	61	30	2.9K	24.54545455\r
Akanzaturf.Com	50	30	2.6K	24.54545455\r
Geniduturf.Org	50	30	2K	24.54545455\r
Pacoturf-40.Com	50	30	1.2K	24.54545455\r
Eanduturfburkina.Com	46	30	1K	24.54545455\r
Chantcourse.Org	55	30	1K	24.54545455\r
Mundo3Dprint.Net	52	30	2.7K	24.54545455\r
Worldwidesciencestories.Co.Uk	50	30	1K	24.54545455\r
Thelitenews.Org	46	30	1K	24.54545455\r
Fideleturf.Co.Uk	48	30	1K	24.54545455\r
Warrenbraithwaite.Com	43	30	1K	24.54545455\r
Pepperboy.Today	43	30	2.9K	24.54545455\r
Estoturfturf.Net	47	30	1.4K	24.54545455\r
Tuambia-Alimentos.Com	64	30	1K	24.54545455\r
Jephteturf.Net	44	30	1K	24.54545455\r
Mimyturf.Org	55	30	1K	24.54545455\r
Usaenlinea.Net	50	30	1.3K	24.54545455\r
Parivra.Com	53	30	1K	24.54545455\r
Techleez.Net	46	30	1K	24.54545455\r
Zecommentaires.Com	48	30	1K	24.54545455\r
Elanduturfpmu.Com	54	30	16K	24.54545455\r
Stmoro.Co.Uk	43	30	1K	24.54545455\r
Chandiapk.Net	46	30	1.7K	24.54545455\r
Shiinabr.Co.Uk	46	30	1K	24.54545455\r
Consolidatetimes.Com	46	30	1.1K	24.54545455\r
Consolidatetimes.Com	46	30	1K	24.54545455\r
Turffr.Net	65	30	1.4K	24.54545455\r
Casacourses.Net	47	30	1.4K	24.54545455\r
J2Earn.Net	46	30	1.4K	24.54545455\r
Planetecourse.Net	56	30	1.3K	24.54545455\r
Ordretrio.Com	50	30	1.3K	24.54545455\r
Ytrishiin.Com	55	30	1.3K	24.54545455\r
Parivraivip.Com	44	30	1.3K	24.54545455\r
Apkipl.Net/	45	30	1.3K	24.54545455\r
Force-Turf.Com	50	30	1.2k	24.54545455\r
Dataroma.Net	54	30	1.2k	24.54545455\r
Bigtechoro.Org	47	30	1.1k	24.54545455\r
Comeapk.Org/	49	30	1.1k	24.54545455\r
Animedekho.Org	44	30	1.1K	24.54545455\r
Storino2Day.Org	44	30	1.1K	24.54545455\r
Pmumondial.Com	50	30	1.1K	24.54545455\r
Miroir-Pmu.Com	47	30	1.1K	24.54545455\r
Weekturfjournal.Com	44	30	1.1K	24.54545455\r
Clairekittle.Com	49	30	1.1K	24.54545455\r
Thedailytribute.Com	43	30	1.1K	24.54545455\r
Mygreenbucks.Com.Co	68	30	1.1K	24.54545455\r
Theboringmagazine.Net	46	30	1.1K	24.54545455\r
Poetryvalley.Com	50	30	1.1K	24.54545455\r
Tunwin365.Org	43	30	1.1K	24.54545455\r
Bluesushisakegrill.Net	49	30	1.1K	24.54545455\r
Redwingnews.Com	57	30	1.1K	24.54545455\r
Pronoverite.Org	50	30	1.1K	24.54545455\r
Manhuasy.Org	49	30	1.1K	24.54545455\r
Messiturf100.Org	55	30	1.1K	24.54545455\r
Freefollowersnet.Com	54	30	1.1K	24.54545455\r
Whiitelist.Com	50	30	1.1K	24.54545455\r
Genycourses.Net	49	30	1.1K	24.54545455\r
Cplemairepmu.Com	43	30	1.1K	24.54545455\r
Gazettedupmu-2.Com	56	30	1.1K	24.54545455\r
Estoturfvip.Com	55	30	1.1K	24.54545455\r
Lenscourse.Com	43	30	1.1K	24.54545455\r
Thetechcofounder.Com	51	30	1.1K	24.54545455\r
Zc2Earning.Org	51	30	1.1K	24.54545455\r
Metapressnews.Com	44	30	1.1K	24.54545455\r
Thetravellino.Net	47	30	1.1K	24.54545455\r
Stmoro.Org/	28	30	1.1K	24.54545455\r
Homedecorchamp.Com	50	30	1.1K	24.54545455\r
Viralapks.Org/	44	30	1.1K	24.54545455\r
Aavotcom.Com	46	30	1.1K	24.54545455\r
Bolly4You.Net	52	30	1.1K	24.54545455\r
Hkrnl.Com	48	30	1.1K	24.54545455\r
Tabletwritings.Org	26	30	1.1K	24.54545455\r
Silvertakipci.Net	55	30	1.1K	24.54545455\r
Morbagh.Net	47	30	1.1K	24.54545455\r
Hippoturf.Org	49	30	1.1K	24.54545455\r
Buffalocourse.Com	44	30	1.1K	24.54545455\r
Honestdoor.Org	56	30	1.1K	24.54545455\r
Turforiginal.Com	55	30	1.1K	24.54545455\r
Grammarglow.com	42	38	1K	31.09090909\r
Semakan-mykid.my	42	36	5K	31.09090909\r
Pajskkpm.my	42	36	35K	31.09090909\r
Zaxbysmenus.com	38	29	2K	31.09090909\r
Baddies-hub.com	35	54	10.2K	27.81818182\r
Iotimes.co.uk	32	48	3K	27.81818182\r
Ukrtime.co.ua	3	50	14K	27.81818182\r
Hamariweb.co.uk	5	5	3K	24.54545455\r
Modern-family.tv	22	27	177K	37.63636364\r
Beziddi.com	22	18	85K	57.27272727\r
Tidingsmedia.org	14	32	96K	40.90909091\r
Thepillmagazine.com	25	14	9K	44.18181818\r
Ke4rx.org	21	16	8K	40.90909091\r
Icsehub.com	21	10	5K	47.45454545\r
Thithtoolwin.com	22	25	19K	47.45454545\r
Study4sure.com	21	10	25K	40.90909091\r
Viaeurasia.org	18	24	2K	40.90909091\r
Bestoftci.com	10	12	14K	47.45454545\r
Dar-care.com	4	14	8K	47.45454545\r
Temple-publications.com	18	25	10K	44.18181818\r
Yooooga.com	25	30	48K	40.90909091\r
Theblup.com	27	12	37K	57.27272727\r
Thebookseditora.com	25	9	11K	47.45454545\r
Tadworld.com	16	8	11K	44.18181818\r
Designviva.com	19	21	49K	50.72727273\r
Dailyodyssey.co.uk	34	56	1K	27.81818182\r
Imperfeed.com	47	7	41K	37.63636364\r
Mysdmcsso.us	37	30	2.2K	27.81818182\r
Newsross.org	37	32	30.5K	24.54545455\r
Www-wellhealthorganic.com	35	35	64.9K	40.90909091\r
Thekakupress.com	35	34	10.8K	24.54545455\r
Knowledgearrow.com	34	35	10.2K	24.54545455\r
Moon10.com.co	35	33	34.9K	24.54545455\r
Therome.co.uk	37	39	11.3K	24.54545455\r
Hoseasons.org.uk	38	30	1.2K	27.81818182\r
Touchcric.org.uk	37	37	1K	24.54545455\r
Gravityinternetnet.com.co	35	65	1.2K	27.81818182\r
Tribune.co.com	35	39	1.2K	40.90909091\r
www.Qiuzziz.com.co	35	65	1.6K	27.81818182\r
Thesmallbusinesstimes.com.co	35	32	1.1K	24.54545455\r
Vixencom.com	35	33	2.3K	24.54545455\r
Thewheonx.com	35	35	14K	24.54545455\r
Thelyricsbaazaar.com	35	33	12.5K	24.54545455\r
Theimagefap.com	37	32	3.7K	24.54545455\r
www.Theutdplug.co.uk	35	33	4.3K	27.81818182\r
Fappeningblog.com.co	35	37	2.9K	24.54545455\r
www.Adriaenglish.com	31	34	1.1K	27.81818182\r
Aaryaeditzorg.com	32	31	8.3K	24.54545455\r
Wheonx.com.co	32	34	7.7K	24.54545455\r
Eromecom.co	35	35	2.4K	24.54545455\r
Mahitechinfo.co.uk	35	33	5.5K	24.54545455\r
Dailynewsconsumer.org	31	36	22.2K	24.54545455\r
Joinmyquiz.com.co	35	36	1.6K	24.54545455\r
www-Wheon.com	38	35	1.5K	24.54545455\r
Newspure.co.uk	38	35	4.6K	24.54545455\r
Buildingbusinessnews.org	32	39	1.4K	24.54545455\r
Thetechnorozen.com	34	35	3.7K	24.54545455\r
Visitblog.co.uk	37	35	37	24.54545455\r
Contacthelp.co.uk	53	40	24	37.63636364\r
Nexthome.blog	39	31	115	24.54545455\r
Hamrosolarllc.com	35	9	300	24.54545455\r
Ancientartz.com.co	35	40	456	27.81818182\r
Techsslash.com.co	38	37	2.1K	24.54545455\r
Realerome.com	39	35	671	24.54545455\r
Mistyinfo.com.co	37	32	512	24.54545455\r
Teckjb.com.co	35	34	4.6K	24.54545455\r
veganovtrichy.com.co	35	39	900	24.54545455\r
Rockbandnews.org	35	35	105	24.54545455\r
Lidnews.org	39	37	103	24.54545455\r
Proxyium.com.co	37	34	246	24.54545455\r
Pinayflix.com.co	37	34	355	24.54545455\r
Themakeboth.com	35	35	1.4K	24.54545455\r
Theteckjb.com	35	37	3.7K	24.54545455\r
Thepinayflix.com	35	32	1.2K	24.54545455\r
Theknowledgearrow.com	37	39	387	24.54545455\r
Mixmoz.com	35	35	210	24.54545455\r
Theaavot.com	35	32	674	24.54545455\r
Cashstark.com.co	35	37	500	24.54545455\r
Thesfmcompile.com	37	35	671	24.54545455\r
Theinflact.com	35	35	1.5K	24.54545455\r
Theibomma1.com	35	31	341	24.54545455\r
Inventstech.com	36	37	134	24.54545455\r
PaidforArticles.com.co	31	35	241	24.54545455\r
Theyeshivaworld.com.co	37	34	106	24.54545455\r
Uploadarticle.com.co	32	35	470	24.54545455\r
Themangabuddy.com	33	32	647	24.54545455\r
Mcdfoofforthoughts.com.co	35	39	1K	24.54545455\r
Wheonx.org	32	37	1K	24.54545455\r
Theapkek.com	32	31	1K	24.54545455\r
Thetechnotricks.com.co	35	34	1K	24.54545455\r
Thedignotech.com	33	33	1K	24.54545455\r
Earntuffer.com.co	34	31	1K	24.54545455\r
Investorweeklynews.com.co	31	37	1K	24.54545455\r
Instafest.org	35	31	1K	24.54545455\r
Technewztop.com.co	32	35	1K	24.54545455\r
Thetechcrusader.com	34	35	1K	24.54545455\r
Thelookwhatmomfound.com	38	34	1K	24.54545455\r
Tamilprint.org.uk	35	31	1K	24.54545455\r
Theucatruco.com	37	39	1K	24.54545455\r
Theinfluencersgonewild.co.uk	32	36	1K	24.54545455\r
Themegapersonal.com	38	37	1K	24.54545455\r
Kuthira.com.co	35	32	1K	24.54545455\r
Ukpunting.org.uk	32	36	1K	24.54545455\r
Thegadgetfreeks.com	33	34	1K	24.54545455\r
Acknowledgement.com.co	38	32	1K	24.54545455\r
Themegapersonal.com	38	37	1K	24.54545455\r
Bronceblass.org	33	32	1K	24.54545455\r
Thesevenseventech.com	38	34	1K	24.54545455\r
Thelakewoodscoop.co.uk	35	33	25.3K	34.36363636\r
Matzav.co.uk	32	34	1K	24.54545455\r
Davidicke.org	33	31	1K	24.54545455\r
Vyvymanga.com	35	34	1K	24.54545455\r
Erome.uk.com	38	34	1K	24.54545455\r
Thedigitalconnectmag.com	39	31	1K	24.54545455\r
www-Usanewscity.com	36	35	1K	24.54545455\r
Theokhatrimaza.com	34	36	1K	24.54545455\r
Thetechjb.com	33	31	1K	24.54545455\r
Theistudyinfo.com	38	35	1K	24.54545455\r
Influencersgonewild.us.com	36	34	1K	24.54545455\r
The7starhd.com	35	39	1K	24.54545455\r
Influencersgoneswild.com	31	50	4.2K	24.54545455\r
Tododisca.co.uk	10	5	21K	27.81818182\r
Literoticahub.it.com	88	88	1K	24.54545455\r
Thehrwp.com	42	59	32K	27.81818182\r
Techtorreto.com	53	40	1K	27.81818182\r
Techysoftwares.com	36	15	1.5K	27.81818182\r
Techysgpu.com	35	14	5.5K	27.81818182\r
Thetechkeyboard.com	36	13	1K	27.81818182\r
Techyrams.com	33	12	1K	27.81818182\r
Techscamera.com	46	10	3K	27.81818182\r
Techycameras.com	35	13	1K	27.81818182\r
Nowaiotechnical.com	35	39	1K	24.54545455\r
Themindfulmirror.com	6	10	858K	54\r
Glenechogolf.com	14	27	61K	27.81818182\r
Chas6d.com	5	33	11K	27.81818182\r
Fintechzoom-io.co.uk	6	5	4K	27.81818182\r
Money6x-com.us	33	11	3K	24.54545455\r
Nbascores.co.uk	8	41	1.6K	24.54545455\r
Ecomagazine.co.uk	5	45	8.6K	44.18181818\r
Newsbro.co.uk	7	44	3.3K	27.81818182\r
Booleandreams.com	12	9	10.4K	40.90909091\r
Worldlifemag.com	36	29	2K	34.36363636\r
Worldusmagazine.com	32	28	1K	34.36363636\r
Worldachieva.com	31	29	1.1K	34.36363636\r
Markiseteppe.com	7	6	14K	24.54545455\r
Ndmag.co.uk	11	9	8.5K	24.54545455\r
Timewarptaskus.com	38	32	1K	24.54545455\r
Simplicityitself.io	19	12	9.3K	37.63636364\r
Aitrender.co.uk	37	40	24.5K	27.81818182\r
Terrazonet.com	42	59	15K	44.18181818\r
Made-magazine.com	24	20	11K	44.18181818\r
Kistodaynews.com	43	51	5K	37.63636364\r
Usa-publications.com	40	56	7K	44.18181818\r
Runninglip.com	23	50	6K	44.18181818\r
Influencersgonewilds.pro	33	46	3K	24.54545455\r
Motherlesscok.com	42	51	4.7k	24.54545455\r
Wheonhealthnews.com	29	33	1.9k	24.54545455\r
Technology.me.uk	41	43	4.5k	24.54545455\r
Hassdesign.com	29	31	41K	40.90909091\r
The-batoto.com	41	33	10.3K	27.81818182\r
Usalitemagazine.com	34	28	1K	44.18181818\r
Vucrex.com	6	50	31K	37.63636364\r
Techkou.net	26	6	11K	37.63636364\r
Mobzel.com	20	19	2K	37.63636364\r
Tempetoes.com	16	5	211K	37.63636364\r
Blockshowasia.com	35	29	13.1K	27.81818182\r
Ellendewittrealestate.blog	3	7	18K	31.09090909\r
Dgmnews.io	7	9	1K	31.09090909\r
Digitalconnectsmag.com	11	9	2.6K	31.09090909\r
Thenoodlesmagazine.com	36	28	1.2K	31.09090909\r
Techysoftwares.com	35	32	1.2K	31.09090909\r
Techysgpu.com	36	35	5K	31.09090909\r
Techyrams.com	35	29	1K	31.09090909\r
Techscamera.com	33	29	2.7K	31.09090909\r
Techycameras.com	36	32	1K	31.09090909\r
Whitelightsriot.com	35	32	1K	31.09090909\r
Usasmooths.com	34	29	1.8K	31.09090909\r
Carsnletters.com	35	38	59K	37.63636364\r
Braflix.org.uk	10	10	10K	31.09090909\r
Buzzinsider.co.uk	34	10	1K	34.36363636\r
Missav.org.uk	33	12	84.5K	34.36363636\r
Deltanative.com	10	10	150K	31.09090909\r
Pantagonar.com	10	10	17K	27.81818182\r
Blessrise.com	3	11	3.5K	27.81818182\r
Mytecharm.org	38	39	20K	27.81818182\r
Celebvalues.com	31	28	2.7K	27.81818182\r
Miegacoanmenu.com	11	9	3K	27.81818182\r
Menupriceslists.com	92	84	1K	27.81818182\r
Yg-marley.com	33	29	3K	27.81818182\r
Jujutsu-infinitecodes.com	14	12	2K	27.81818182\r
Ricepurity-tests.com	42	33	1.5K	27.81818182\r
Captification.com	1	8	1.5K	27.81818182\r
Techhopes.blog	39	29	10K	27.81818182\r
Letterboxedanswers.today	43	39	2.5K	27.81818182\r
Wendys-menuwithprices.com	1	11	2.5K	27.81818182\r
Theapplebmenupricesus.com	7	6	1.6K	27.81818182\r
Despeisekartes.org	14	7	1.5K	27.81818182\r
Ymcqs.com	42	35	2K	27.81818182\r
Foodlion-weeklyad.store	41	35	1.5K	27.81818182\r
Blessinghubs.com	1	8	1K	27.81818182\r
Bigwigbios.com	1	9	1K	27.81818182\r
Techsfixs.com	33	29	1K	27.81818182\r
Semakan-mykid.my	42	29	5K	27.81818182\r
Pajskkpm.my	42	38	11K	27.81818182\r
Sara2025.my	7	8	11K	27.81818182\r
Poslajutracking.my	9	11	1K	27.81818182\r
Phmenusking.org	41	38	20K	27.81818182\r
Menuindia.com	1	11	1K	27.81818182\r
Buffstreams.org.uk	33	27	3.4K	27.81818182\r
Somoymedia.com	10	50	17K	44.18181818\r
Paragraphsbd.com	19	50	32K	44.18181818\r
Ok-jatt.com	30	20	24.6K	44.18181818\r
Filmy4wap.pro	40	70	11K	44.18181818\r
slimchickensmenu.com	15	20	2.8K	44.18181818\r
blooketjoin.uk	55	70	6K	44.18181818\r
Cyberkannadig.in	60	69	4.7K	44.18181818\r
Calculattr.in	30	50	2.6K	44.18181818\r
Guicloud.org	15	25	3.7K	44.18181818\r
Damkotoaj.com	50	59	2.6K	44.18181818\r
Banglahunter.com	17	25	1.5K	44.18181818\r
Naztricks.com	36	50	3.7K	44.18181818\r
Gyaanduniya.in	56	59	1.2K	44.18181818\r
Kakupress.me	54	35	1.7K	44.18181818\r
Eromes.app			2K	24.54545455\r
Eroasmr.org			5K	24.54545455\r
Skinprest.com	14	11	24K	34.36363636\r
Tikcotechs.com	42	38	1K	34.36363636\r
Tymoffs.com	37	29	1K	34.36363636\r
Jdeconomics.com	9	7	114K	37.63636364\r
Vysatc.com	15	9	47K	37.63636364\r
Timemag.co.uk	35	64	1K	57.27272727\r
Anytimesmagazine.com	36	64	1K	57.27272727\r
Thematchstats.com	34	38	1K	57.27272727\r
isaiminily.com	60	35	1K	57.27272727\r
Waytob.com	24	27	25K	37.63636364\r
Silicon-insider.com.in	78	82	9K	24.54545455\r
Acubi.us	6	8	4K	24.54545455\r
Erothto.com	3	5	15.3K	27.81818182\r
Techhiscox.com	37	37	11.7K	27.81818182\r
Lamagazine.co.uk	42	51	4.7K	40.90909091\r
Truyentiki.com	19	12	5.4K	57.27272727\r
Uknewspulse.co.uk	43	11	10K	31.09090909\r
Buzblog.co.uk	32	11	34K	31.09090909\r
Uknewspulse.co.uk	43	11	10K	31.09090909\r
Buzblog.co.uk	32	11	34K	31.09090909\r
Contestshub.com	33	4	2K	44.18181818\r
Verse-mag.com	26	13	69K	47.45454545\r
Rawmags.com	15	12	51K	44.18181818\r
Psdgold.com	24	11	2K	47.45454545\r
Thebookswarm.com	24	9	51K	40.90909091\r
Thenewcub.com	10	8	110K	47.45454545\r
Uticamn.com	7	8	800K	47.45454545\r
Svtemplates.com	18	12	11K	37.63636364\r
Qisa.org	29	11	8K	47.45454545\r
Postplace.co.uk	42	10	3.1K	31.09090909\r
Technicalinterest.com	54	10	2.2K	31.09090909\r
Uknewstap.co.uk	43	10	1.3K	31.09090909\r
Theblooket.blog	4	2	59.9K	31.09090909\r
Baddiehub.lt	3	2	6.6K	27.81818182\r
Erone.co.uk	40	20	111.3K	57.27272727\r
Psbios.co.uk	37	15	65.5K	57.27272727\r
Mp4moviez.co.uk	39	18	236.7K	96.54545455\r
Techduffer.uk	58	19	2K	37.63636364\r
Eruditemeetup.co.uk	32	20	4K	44.18181818\r
Organizeblogs.com	5	45	2K	24.54545455\r
Really-haunted.com	5	9	14K	96.54545455\r
Tributemosthaunted.co.uk	28	17	120.8K	129.2727273\r
Pinayflix.co.uk	34	15	1K	34.36363636\r
Startupblog.co.uk	30	12	1K	34.36363636\r
Mmsbee.co.uk	29	10	1K	37.63636364\r
Beplauze.com	22	14	10K	37.63636364\r
Fantasiapix.com	19	33	8K	31.09090909\r
Inforecords.co.uk	3	49	6K	27.81818182\r
Thefriskytimes.co.uk	35	21	5K	27.81818182\r
www-Joinmyquiz.com	29	26	28K	27.81818182\r
Indianloveshayari.com	28	12	1K	27.81818182\r
www-Gimkitjoin.com	5	11	7K	27.81818182\r
Sllives.com	15	17	15.3K	37.63636364\r
Financialauditcpa.com	17	10	71.9K	90\r
Laaster.com	3	2	17.3K	37.63636364\r
Templateartist.com	15	12	12.7K	31.09090909\r
My.brandedpoetry.com	16	12	20K	27.81818182\r
Apktek.org	11	9	7.3K	27.81818182\r
Mixtvnow.org	8	6	6K	27.81818182\r
Dotmovie.com.in	79	71	2.7K	27.81818182\r
Barapk.org	4	9	1K	27.81818182\r
Aaryaeditz.com.in	79	63	1K	27.81818182\r
Vegamovie.com.in	61	44	8K	27.81818182\r
Okaymuz.org	4	7	1K	27.81818182\r
Baddiehubz.co.uk	4	7	1K	27.81818182\r
Ezectech.org	37	33	4.9K	27.81818182\r
Teachhubs.us	33	29	1K	27.81818182\r
Itsnewztalkies.com	37	31	15K	27.81818182\r
infoohub.org	7	7	14.7K	27.81818182\r
Naeemblogger.com	9	9	1K	27.81818182\r
Techhence.com	34	29	1.8K	27.81818182\r
Techabbey.com	35	31	37K	27.81818182\r
Furtherbusiness.com	11	9	16K	27.81818182\r
loyalpoetry.com	11	8	84K	27.81818182\r
Newsreverse.com	33	29	19.6K	27.81818182\r
Catchhealthplan.com	9	9	17.4K	27.81818182\r
Smsbombers.org	12	11	11.4K	27.81818182\r
Optimistindia.com	6	7	7.6K	27.81818182\r
Justadobe.com	7	7	5.1K	27.81818182\r
Simpackages.com.pk	11	7	4.4K	27.81818182\r
insightfulmagazine.com	11	7	3.8K	27.81818182\r
Racklegend.com	16	9	4.4K	27.81818182\r
Techsnapperz.com	13	11	1K	27.81818182\r
Structurespy.com	6	8	16.2K	27.81818182\r
Fashionlamb.com	8	7	3.5K	27.81818182\r
Denso-x.com	16	7	68K	44.18181818\r
Pet5ardas.com	41	38	4.5K	27.81818182\r
Baddieshub.co.uk	21	18	4.4K	27.81818182\r
Jemferments.com	11	9	1.1K	34.36363636\r
parkmagazineny.co.uk	4	7	7.8K	27.81818182\r
cyclerdiary.com	5	11	2.1K	27.81818182\r
Thealite.co.uk	41	39	27K	27.81818182\r
falseart.com	21	11	25K	40.90909091\r
Littleminaxo.com	41	36	2.3K	27.81818182\r
baddiehubx.co.uk	39	29	1K	24.54545455\r
joybit.co.uk	11	7	3.9K	40.90909091\r
pulsemags.co.uk	35	28	1K	31.09090909\r
everique.co.uk	35	33	1K	31.09090909\r
IHOP-menus.com	39	33	1.7K	31.09090909\r
Pyntekvister.com	31	27	13K	27.81818182\r
Ains-nilam.my	40	50	38K	27.81818182\r
Cutisekolah2025.my	40	50	6K	27.81818182\r
Semakan-mykid.my	40	50	3K	27.81818182\r
Pajskkpm.my	40	50	50K	27.81818182\r
Sara2025.my	40	50	20K	27.81818182\r
Poslajutracking.my	40	50	1K	27.81818182\r
Posstoretracking.com	40	50	3K	27.81818182\r
Mlymenus.com	40	50	1K	27.81818182\r
Celebztop.com	40	50	1.5K	27.81818182\r
Techlokesh.info	40	50	40K	27.81818182\r
Gwa-calculator.net	40	50	2K	27.81818182\r
Tojifushiguro.com	40	50	3K	27.81818182\r
Mollynoblitt.com	40	50	1K	27.81818182\r
Captification.com	40	50	4K	27.81818182\r
Theiganony.com	40	50	2K	27.81818182\r
Ricepurity-tests.com	40	50	10K	27.81818182\r
Hop-traveler.com	40	50	4K	27.81818182\r
Blessrise.com	40	50	6K	27.81818182\r
Miegacoanmenu.com	40	50	7K	27.81818182\r
Myliberlaa.com	40	50	2K	27.81818182\r
Snowballkissmeaning.com	40	50	10K	27.81818182\r
Miportalfonesepp.com	40	50	6K	27.81818182\r
Mcdonaldwrapoftheday.uk	40	50	1K	27.81818182\r
Anniversaire-texte.fr	40	50	2K	27.81818182\r
infovora.com	40	50	1K	27.81818182\r
Celebzframe.com	40	50	1.5K	27.81818182\r
Bioslates.com	40	50	1K	27.81818182\r
Worthpluse.com	40	50	1K	27.81818182\r
Blessinghubs.com	40	50	1K	27.81818182\r
Babatyping.com	40	50	1K	27.81818182\r
Sportsriser.com	40	50	1K	27.81818182\r
Mytecharm.org	40	50	20K	27.81818182\r
Techhopes.blog	40	50	10K	27.81818182\r
Wendys-menuwithprices.com	40	50	3K	27.81818182\r
Theapplebmenupricesus.com	40	50	1.5K	27.81818182\r
Tr-who.com	40	50	1K	27.81818182\r
lawsuitl.com	40	50	1K	27.81818182\r
lawsuitify.com	40	50	1K	27.81818182\r
Cheddarsmenue.com	40	50	500	27.81818182\r
Tiktokemojicodes.org	40	50	1K	27.81818182\r
www.jazzmonthlypackage.com	40	50	3K	27.81818182\r
Networthbee.com	40	50	1K	27.81818182\r
iturbogeek.org	40	50	2K	27.81818182\r
Bizhunet.io	40	50	8K	27.81818182\r
Yg-marley.com	40	50	2K	27.81818182\r
Celebvalues.com	40	50	2K	27.81818182\r
Ecoyyn.com	40	50	2K	27.81818182\r
Quickcancellation.com	40	50	1K	27.81818182\r
Curlyhairhub.com	40	50	1K	27.81818182\r
Ztech100.com	40	50	2K	27.81818182\r
Menuindia.com	40	50	1K	27.81818182\r
Bsd-brawl.com	40	50	1K	27.81818182\r
www-newztalkies.com	40	50	1K	27.81818182\r
Trendymag.co.uk	15	38	8K	27.81818182\r
Lakewoodscoop.co.uk	10	18	25.3K	34.36363636\r
Applebeesmenus.org	27	27	16K	40.90909091\r
Punscraze.com	37	59	11K	40.90909091\r
Blessingscore.com	38	52	4K	40.90909091\r
Pikupsline.com	37	39	50K	40.90909091\r
Sizecrafter.com	38	37	15K	40.90909091\r
Qaptionsstats.com	41	38	43K	40.90909091\r
Sohohindipro.in	41	24	190K	40.90909091\r
Spiritualmeaningportal.com	41	28	9K	40.90909091\r
Newsb.co.uk	42	44	6K	27.81818182\r
Zmagazine.co.uk	40	11	4K	27.81818182\r
Optifines.org	27	13	9.3K	24.54545455\r
Socialbizmmagazine.co.uk	36	11	2K	24.54545455\r
Wizzydigitals.com	26	11	3K	24.54545455\r
Myinteriorpalaces.com	31	15	2.2K	27.81818182\r
Troozerr.com	10	13	5.7K	24.54545455\r
Miocados.net	36	9	1.9K	24.54545455\r
Odishacareerportal.com	28	26	6K	31.09090909\r
Travellingaapples.co.uk	36	11	2.7K	24.54545455\r
Av19org.com	15	11	216	31.09090909\r
R6marketplace.ca	31	11	16.8K	31.09090909\r
Formotorbike.com	31	8	1K	24.54545455\r
Juntosseguros.net	10	12	32.8K	27.81818182\r
Geek-forcenetwork.co.uk	36	11	4.4K	27.81818182\r
Fashionisks.com	41	11	4.2K	27.81818182\r
Webstosociety.co.uk	35	18	5.5K	27.81818182\r
Socialfunda.net	30	12	3.4K	24.54545455\r
Etruesports.us	40	11	3.5K	34.36363636\r
Biitlands.com	37	10	1k	34.36363636\r
Technorozen.co.in	35	38	58.9K	34.36363636\r
Thejjkmanga.com	27	29	5K	24.54545455\r
Pepper0.com	36	20	21.9K	34.36363636\r
Gamemakerblogs.net	40	11	1K	24.54545455\r
Mobilesinbd.com	12	10	1.8K	24.54545455\r
Freakbobtime.com	37	11	5K	27.81818182\r
Busyarea.com.in	4	7	11.7K	31.09090909\r
celebritybio.co.uk	34	33	18.8K	34.36363636\r
realglobal.co.uk	31	28	1K	34.36363636\r
BrightMixer.com	35	27	1K	27.81818182\r
Networkesblog.com	34	29	5.4K	27.81818182\r
www.rosaftyx.com	35	36	2.1K	27.81818182\r
SpikyUsa.com	35	39	1K	27.81818182\r
Spellmistake.com	41	37	2.2K	40.90909091\r
Uploadblog.com	2	7	54K	31.09090909\r
Alaikas.com	31	27	1K	34.36363636\r
Thealite.com.au	11	9	4.5K	34.36363636\r
Uploadarticle.de	11	8	1K	31.09090909\r
Asnews.co.uk	39	19	4K	27.81818182\r
Inmagazine.co.uk	45	61	1.5K	37.63636364\r
Fintechzoom-io.com	41	50	49K	40.90909091\r
Echovibes.co.uk	5	10	11.8K	27.81818182\r
Scorelive.blog	40	10	4K	24.54545455\r
Newsreflect.co.uk	10	10	3K	24.54545455\r
Silicon-insider-com.us	40	8	18K	24.54545455\r
Jonathonspire.net	34	11	3K	24.54545455\r
Sfmcompile.us	33	10	2K	24.54545455\r
Newswell.co.uk	41	39	11K	27.81818182\r
Formagazine.co.uk	33	8	1K	24.54545455\r
Apexnews.co.uk	41	8	2K	24.54545455\r
Bionewsly.com	41	10	4K	27.81818182\r
Petdardas.com	41	39	4.2K	27.81818182\r
Baddies-hub.co.uk	42	39	6.9K	27.81818182\r
Scoresandodds.co.uk	42	33	3.2K	27.81818182\r
Thenighttimes.co.uk	41	36	1.8K	44.18181818\r
Cougarweb.uk	42	38	1.5K	27.81818182\r
Techyglow.co.uk	34	29	1.3K	27.81818182\r
Techager.com	55	41	1.3K	27.81818182\r
Betweencarpools.net	31	38	1K	31.09090909\r
Achievatrend.com	38	33	1K	31.09090909\r
Achievatrend.com	39	36	1K	31.09090909\r
Worldbrightaura.com	31	28	1K	31.09090909\r
Techitl.co.uk	40	30	30K	31.09090909\r
simbramento.com	42	31	6K	31.09090909\r
Newsswift.co.uk	42	50	6.8K	27.81818182\r
Woolrec.com	29	37	9K	44.18181818\r
Hugglys.com	5	20	13K	44.18181818\r
Blazemagazine.co.uk	38	23	6.8K	31.09090909\r
Itsmagazine.de	41		8.6K	50.72727273\r
Purehealsphere.com	39		1.1K	31.09090909\r
Worldwanderpulse.com	32		1K	31.09090909\r
Worldbrightaura.com	31		2.6K	31.09090909\r
Betweencarpools.net	32		1.7K	31.09090909\r
Techflexor.com	39		5.8K	31.09090909\r
Purehealsphere.com	39		8.2K	31.09090909\r
Granitecf.com	42		1K	27.81818182\r
Stormuring.org	39		1K	37.63636364\r
Thegaminginfos.com	41		1K	37.63636364\r
Loginarchive.com	15		1K	37.63636364\r
Yafreeka.com	6		1K	40.90909091\r
Echovibes.co.uk	11		13.4K	27.81818182\r
Doodlebaseball.co.uk	7		1.5K	27.81818182\r
Nightcloakeddeck.co.uk	60		1K	27.81818182\r
Worldpexa.com	39	31	5.6K	27.81818182\r
Purehealsphere.com	39	31	11.3K	31.09090909\r
Topicnomad.com	41	39	8.1K	31.09090909\r
Worldwanderpulse.com	32	29	4.6K	31.09090909\r
Techflexor.com	39	33	5K	31.09090909\r
lookwhatmomfoundgiveaways.org	32	29	1.4K	44.18181818\r
Amourvertsa.com	42	32	4.8K	31.09090909\r
Worldmapquest.com	39	31	7.3K	31.09090909\r
Uploadarticles.net	33	29	5.2K	31.09090909\r
Itbetterthisworld.com	34	27	2.7K	31.09090909\r
KennWhitaker.com	39	33	3.2K	31.09090909\r
Primeconceptzone.com	39	37	1.2K	31.09090909\r
Easyarticle.co.uk	33	27	1K	27.81818182\r
yourblogsubmission.com	41	39	2.2K	27.81818182\r
Troozer.net	5	9	22K	27.81818182\r
Veganovtrichy.net	40	33	1K	27.81818182\r
internetguidhub.com	11	7	1K	27.81818182\r
E-shikshakosh.com	3	7	1K	27.81818182\r
Orgasamtrix.com	11	9	11.9K	27.81818182\r
Tonztech.org	32	29	1K	27.81818182\r
Deepseekplay.org	11	7	1K	27.81818182\r
Techloomz.org	33	27	1K	27.81818182\r
Teckjbcom.com	38	33	1.2K	27.81818182\r
Fullimedia.org	11	9	1K	27.81818182\r
Newstajainfo.com	11	9	1K	27.81818182\r
Rtps2.org	9	11	1K	27.81818182\r
Tovisitvuzillfotsps.info	3	7	1K	27.81818182\r
Veohentak.com	33	29	1K	27.81818182\r
Photoacompq.com	11	7	1K	27.81818182\r
lcfgamevent.com	8	9	1K	27.81818182\r
Hmsphotovoltaik.com	7	9	10K	27.81818182\r
Techmapz.org	11	7	1K	27.81818182\r
Structurespy.org	11	7	1K	27.81818182\r
Newsgama.org	9	8	1K	27.81818182\r
Gushvolpix.com	14	11	1K	27.81818182\r
lisrctawler.com	7	11	1K	27.81818182\r
internetchocks.org	11	9	1K	27.81818182\r
Sdkblog.co.uk	5	51	1K	27.81818182\r
Streameastxyz.co.uk	5	52	65K	27.81818182\r
Afcstuff.co.uk	42	54	30K	27.81818182\r
Blogtrend.co.uk	44	26	10K	27.81818182\r
Buzzmega.co.uk	41	31	15K	31.09090909\r
Womenstorie.co.uk	32	53	6K	27.81818182\r
Famefortunes.co.uk	33	52	9K	27.81818182\r
Flippamagazine.co.uk	39	54	34K	31.09090909\r
Goldenmagazine.co.uk	40	53	10K	31.09090909\r
Doopermagazine.co.uk	36	42	4.5K	31.09090909\r
Pokemongohub.co.uk	15	35	4.5K	27.81818182\r
Gyarufashion.org	40	28	3.5K	27.81818182\r
Rankmagzine.com	40	60	2.5K	31.09090909\r
Simpcityforums.co.uk	40	28	1.5K	31.09090909\r
Pluemagazine.co.uk	30	22	11K	27.81818182\r
Sadamagazine.co.uk	42	53	2K	37.63636364\r
Blogbuz.blog	40	56	22K	24.54545455\r
Funkymoves.com	25	15	18.6K	40.90909091\r
Bikewise.io	40	15	16K	37.63636364\r
Thefuturai.net	17	21	14.7K	37.63636364\r
Dash-athletics.com	40	13	24.3K	40.90909091\r
Geekling.me	32	21	20K	37.63636364\r
Getworld.co.uk	42	29	6K	27.81818182\r
www.Rangenews.co.uk	40	25	5.1K	27.81818182\r
Quickupdate.co.uk	41	5	4.7K	27.81818182\r
Eassynews.co.uk	37	23	1.7K	27.81818182\r
Orbitly.co.uk	42	15	2.8K	27.81818182\r
Only-professional.com	42	41	14K	37.63636364\r
Digitfield.com	40	46	2K	34.36363636\r
Xfree.org.uk	41	55	63K	34.36363636\r
Headsupenglish.com	35	44	100K	#VALUE!\r
Deku.org.uk	39	33	4.6K	27.81818182\r
Lifestylesblogs.co.uk	37	31	1K	27.81818182\r
Dawrinews.com	44	39	1.7K	27.81818182\r
Petdardas.com	41	39	1K	27.81818182\r
Rightsizeproject.com	34	29	1K	27.81818182\r
joinmyquiz.uk	41	34	1K	27.81818182\r
Merlinphysio.com	23	19	4.2K	44.18181818\r
Pacificviewfunding.com	11	7	1K	96.54545455\r
Hybridoo.com	7	9	1K	34.36363636\r
Valplekar.com	41	39	1K	27.81818182\r
Myreadignamga.com	40	39	1K	27.81818182\r
Matoketcs.com	41	39	1.7K	27.81818182\r
Recipesjelly.co.uk	35	10	10.1K	27.81818182\r
Theglobeandmail.com.mx	40	5	66.5K	24.54545455\r
Thedigitalweeklycom.com	40	56	49K	24.54545455\r
Apkbuddy.net	41	56	13K	24.54545455\r
Yobangla24.com	35	56	10K	24.54545455\r
Chandigarhmetrocom.com	34	56	9K	24.54545455\r
Cloudelder.net	33	56	6K	24.54545455\r
Techehla.net	35	56	6K	24.54545455\r
Optimistindia.org	34	56	5K	24.54545455\r
Sinknews.net	36	56	5K	24.54545455\r
Thedigitalweekly.org	37	56	5K	24.54545455\r
Techsized.org	38	56	5K	24.54545455\r
Feestech.net	32	56	4K	24.54545455\r
Travelwarningnews.org	31	56	4K	24.54545455\r
Moneynewsweb.net	30	56	4K	24.54545455\r
Word4umovie.com	34	56	4K	24.54545455\r
Thunderstormnews.org	35	56	3K	24.54545455\r
Insightfulmagazine.org	34	56	3K	24.54545455\r
Settinghelp.net	34	56	3K	24.54545455\r
Techsizedcom.com	32	56	3K	24.54545455\r
Octetnews.net	32	56	3K	24.54545455\r
Tonztech.net	33	56	3K	24.54545455\r
Nicephrase.org	31	56	3K	24.54545455\r
Unfitecom.com	30	56	3K	24.54545455\r
Settinghelp.org	30	56	3K	24.54545455\r
Hijabdp.org	36	56	3K	24.54545455\r
Mindlustercom.com	39	56	3K	24.54545455\r
Uniquenicknamecom.com	32	56	2K	24.54545455\r
Gettransmac.net	34	56	2K	24.54545455\r
Techoutages.net	31	56	2K	24.54545455\r
Rightnewsletter.org	35	56	2K	24.54545455\r
Theinstanavigation.org	32	56	2K	24.54545455\r
Hijabdp.net	34	56	2K	24.54545455\r
Feestech.org	32	56	2K	24.54545455\r
Gettransmaccom.com	34	56	2K	24.54545455\r
Aglasemcom.com	37	56	2K	24.54545455\r
Sooxie.org	31	56	2K	24.54545455\r
Sinknews.org	34	56	2K	24.54545455\r
Korfiatiko.com	34	56	2K	24.54545455\r
Gettransmac.org	37	56	2K	24.54545455\r
Hijabdpcom.com	34	56	2K	24.54545455\r
Bletix.net	36	56	1K	24.54545455\r
Nafarescue.org	22	15	21K	37.63636364\r
Bokep-indo.blog	42	50	1K	27.81818182\r
Fabswingers.blog	40	45	3.2K	27.81818182\r
Lathroprx.com	40	56	324.4K	27.81818182\r
Kantorklikbantuan.com	39	41	180K	27.81818182\r
Lawhubx.com	40	41	1.8K	27.81818182\r
Techywil.com	40	38	14.3K	27.81818182\r
Techzip.com.in	31	29	2.4K	27.81818182\r
Usatechpress.com	9	7	1K	27.81818182\r
Garforfans.blog	41	39	4.9K	27.81818182\r
Travelerproducecompany.com	11	9	19.3K	40.90909091\r
Nerwey.com	37	29	45.7K	34.36363636\r
Grokaim.com	4	7	5.8K	27.81818182\r
Widemagazine.co.uk	40	14	10K	31.09090909\r
Egywheelers.com	22	25	22.2K	34.36363636\r
Thenomadicpanda.com	40	29	35.5K	47.45454545\r
Blogpioneer.co.uk	33	52	18K	27.81818182\r
Spotifknowledge.com	36	25	1K	34.36363636\r
Sllives.com	40	37	13K	34.36363636\r
Pureterminal.com	26	24	22K	37.63636364\r
Swiftdevcenter.com	17	11	11K	37.63636364\r
Eamonnkarran.co.uk	18	7	2K	24.54545455\r
Foxestates.co.uk	12	5	2K	24.54545455\r
Creative-inspiration.co.uk	22	12	2K	24.54545455\r
Grammarheist.com	37	52	5K	40.90909091\r
Myfantasynames.com	34	54	9K	40.90909091\r
Rizzlinelove.com	30	54	10K	40.90909091\r
Axprassion.com	44	54	2K	40.90909091\r
Finditname.com	42	30	10K	40.90909091\r
Punsplanet.com	32	30	9K	40.90909091\r
Meanzspot.com	36	30	34K	40.90909091\r
Punarchy.com	35	30	7K	40.90909091\r
Talksknow.com	36	55	35K	40.90909091\r
Tovisitvuzillfotsps.blog	31	11	130.3K	31.09090909\r
Businesspure.co.uk	19	8	1K	31.09090909\r
Tabootubes.co.uk	22	8	8K	31.09090909\r
Ukweeklys.co.uk	41	12	1K	31.09090909\r
Vitilinox.com	31	11	1.5K	31.09090909\r
9xflix.co.uk	33	11	17.9K	31.09090909\r
Spacetechinfo.org	11	11	3.4K	31.09090909\r
Blogstrend.co.uk	40	10	4.8K	31.09090909\r
Uploadblog.blog	10	9	7.4K	31.09090909\r
Baddiehubk.com	37	7	1.2K	31.09090909\r
Carlahallbakes.co.uk	41	10	18.5K	31.09090909\r
Softmagazine.co.uk	40	10	2.2K	31.09090909\r
Perfactwriters.co.uk	20	8	9.5K	31.09090909\r
Mathtrivia.co.uk	32	16	1.5K	31.09090909\r
Calcifypro.com	41	10	1K	31.09090909\r
Lebenslauf.blog	16	10	1.7K	31.09090909\r
Internet-chicks.us	36	10	1K	31.09090909\r
Nbalive.blog	22	10	3.5K	31.09090909\r
Techmeme.co.uk	33	10	1.4K	31.09090909\r
Cloudysocial.blog	40	10	1K	31.09090909\r
Simpcityforums.org	41	10	1.5K	31.09090909\r
Sams-odisha.co	37	7	1K	31.09090909\r
Aurorajournal.co.uk	37	6	2.7K	31.09090909\r
Xxbritsx.co.uk	15	10	1K	31.09090909\r
Maginsider.co.uk	40	10	2.2K	31.09090909\r
Thelaptopadviser.blog	20	7	1.2K	31.09090909\r
Dailyus.co.uk	10	6	1K	31.09090909\r
Sophierain.com.in	40	10	1.7K	37.63636364\r
Mcnames.net	20	25	2K	47.45454545\r
Hiddenstrengthbh.com	10	9	32.3K	47.45454545\r
Ameliorating-man.com	10	5	1.1K	34.36363636\r
Healthandfitness11.com	8	5	3.5K	40.90909091\r
Rivalfitnessstudio.com	7	15	2K	34.36363636\r
Knowingimagination.com	10	8	17.7K	40.90909091\r
Capandqueen.com	10	10	100K	47.45454545\r
Frontierinfo.com	13	20	60K	50.72727273\r
Afterbreakmag.com	12	15	20K	50.72727273\r
CoreMagazine.co.uk	40	15	4.5K	24.54545455\r
Lumerink.com	26	28	30K	34.36363636\r
Selftimes.co.uk	43	13	3K	27.81818182\r
Techlawnews.co.uk	10	16	11.4K	27.81818182\r
westernmagazine.co.uk	40	52	4K	24.54545455\r
Todayusanews.co.uk	36	12	6K	27.81818182\r
Pedrovazpaulo.pro	39	10	7K	27.81818182\r
Starsmagazine.co.uk	40	16	5K	24.54545455\r
Blogtrend.co.uk	44	12	2K	27.81818182\r
Businesstask.co.uk	42	18	2K	27.81818182\r
Fillmoretownship.com	19	13	19K	37.63636364\r
Mine-oasis.com	12	10	3K	34.36363636\r
Nowxpresso.com	20	10	25K	57.27272727\r
Gogi37.com	31	10	8K	44.18181818\r
Elixiruptown.com	37	10	16K	40.90909091\r
Madememine.com	17	10	205K	57.27272727\r
Orientodysseyny.com	40	10	13K	47.45454545\r
Therawrap.co	37	10	13K	47.45454545\r
Thedestinlifestyle.com	39	10	23K	57.27272727\r
Brentwoodtacos.com	38	10	9K	40.90909091\r
Adoptaglider.com	39	10	8K	47.45454545\r
Delta-direct.com	39	10	3K	40.90909091\r
Adornmag.com	24	17	17K	40.90909091\r
Compoinc.com	12	19	36K	40.90909091\r
Theovations.com	16	10	3K	40.90909091\r
Windowtothebeauty.com	16	10	5K	40.90909091\r
Kahanchale.com	14	13	64K	40.90909091\r
Thetimefinder.com	27	22	22K	47.45454545\r
Uitly.com	40	71	640K	24.54545455\r
Acadomi.com	41	71	174.1K	24.54545455\r
Techsslassh.com	40	60	214.3K	24.54545455\r
Techypaper.com	37	58	121.2K	24.54545455\r
Geekmill.com	40	64	121.6K	24.54545455\r
Atompace.com	39	60	53.5K	24.54545455\r
Bralad.com	40	72	40K	24.54545455\r
Itechartgroup.com	40	71	57.8K	24.54545455\r
Updatearticle.com	41	71	55.5K	24.54545455\r
Winsetupfromusb.org	40	58	15.4K	24.54545455\r
Kibeloco.com	11	60	34K	24.54545455\r
Punjabeducare.in	37	55	16.5K	24.54545455\r
Newshart.com	37	64	27.6K	24.54545455\r
Infohist.com	20	56	27.2K	24.54545455\r
Todaypk.com.in	78	72	84K	24.54545455\r
Newsgiga.com	43	10	63.1K	24.54545455\r
www.Notionblogs.com	39	60	80K	24.54545455\r
www.Daylox.com	40	71	35.3K	24.54545455\r
www.Sheend.com	10	25	10K	24.54545455\r
Veganizoo.com	39	53	74.3K	24.54545455\r
www.Blogexample.com	40	64	68.9K	24.54545455\r
Theirishmirror.com	41	57	15K	24.54545455\r
Punjabeducare.com.in	41	61	40.4K	24.54545455\r
www.Uploadinsider.com	38	70	27.6K	24.54545455\r
Hdmoviearea.com.in	78	82	49K	24.54545455\r
www.Tamilblasters.com.in	41	57	101.4K	24.54545455\r
Infoohub.net	41	59	33.5K	24.54545455\r
www.Speednewscentral.com	41	62	61.7K	24.54545455\r
Abovethink.com	35	60	34K	24.54545455\r
Figbat.com	41	70	24.3K	24.54545455\r
Jsoncompareonline.com	40	47	35.9K	24.54545455\r
Mppviewer.com	39	49	15K	24.54545455\r
Helpmotive.com	40	60	38.1K	24.54545455\r
Isaimini.com.in	40	56	94.5K	24.54545455\r
Blogsfeeds.com	39	50	33.5K	24.54545455\r
Newspagebuilder.com	40	60	36.5K	24.54545455\r
Ghidralite.com	38	46	31.6K	24.54545455\r
Gecktech.com	78	82	82.6K	24.54545455\r
Instabiostyle.net	39	64	49.3K	24.54545455\r
www.Businessnewsstory.com	42	54	41.6K	24.54545455\r
Wagehive.com	37	60	32K	24.54545455\r
Dailynewsconsumer.com	41	60	60.1K	24.54545455\r
www.Readsblogs.com	36	59	58.2K	24.54545455\r
www.Crackle.com.in	12	45	55.7K	24.54545455\r
Webinbound.com	40	64	26.9K	24.54545455\r
www.Oxpoll.com	41	60	25.9K	24.54545455\r
www.Worldnewsresearch.com	40	60	60.5K	24.54545455\r
Technnnn.com	31	53	21.7K	24.54545455\r
Newshuman.com	41	52	40.5K	24.54545455\r
Vizaca.org	78	82	18K	24.54545455\r
Myarticlescout.com	10	25	45K	24.54545455\r
www.Postnewstoday.com	40	60	53.6K	24.54545455\r
www.Randomnewsinfo.com	40	45	66.4K	24.54545455\r
www.Bloggerstopics.com	42	60	55.1K	24.54545455\r
Droidkit.org	40	64	49.7K	24.54545455\r
www.Techlawnews.com	41	57	68.1K	24.54545455\r
Flymenews.com	41	61	39K	24.54545455\r
Tempnumberonline.com	39	54	27.6K	24.54545455\r
Techlogiest.com	40	60	39K	24.54545455\r
Savemoneyweekly.com	36	56	33.8K	24.54545455\r
Glazertech.com	40	66	18.7K	24.54545455\r
www.Techsuppose.com	41	60	21.2K	24.54545455\r
www.Homesblogs.com	52	60	25.7K	24.54545455\r
www.Valleyvistanews.com	41	55	45K	24.54545455\r
Compilerutility.com	39	54	36K	24.54545455\r
Xrlinx.com	24	41	22.5K	24.54545455\r
Kongotech.com.in	40	56	19.5K	24.54545455\r
Donorstech.com	10	40	12K	24.54545455\r
Newsugly.com	40	62	34K	24.54545455\r
Dailynewsreleases.com	40	60	28.8K	24.54545455\r
Allmacworldz.com	46	41	32K	24.54545455\r
Techpora.com	30	41	127.5K	24.54545455\r
Freeblogbuilder.com	40	62	24.8K	24.54545455\r
www.Modernnewsmedia.com	40	64	29.7K	24.54545455\r
Thefilmyhit.com	40	58	67.8K	24.54545455\r
www.Theeshikshakosh.com	7	35	9K	24.54545455\r
www.Forwardingnews.com	39	56	35.9K	24.54545455\r
Windgustnews.com	39	56	28.8K	24.54545455\r
Bioofy.net	52	51	23.9K	24.54545455\r
Moviemad.com.in	42	64	278.2K	24.54545455\r
Truebusinessnews.com	40	64	14K	24.54545455\r
Rdxhd.com.in	56	54	53K	24.54545455\r
www.Onetopicnews.com	40	56	23.7K	24.54545455\r
Techhoff.com	30	64	20.5K	24.54545455\r
www.Hadlog.com	7	50	5K	24.54545455\r
www.Bloggoto.com	39	56	26K	24.54545455\r
Tamilprint.com.in	39	45	31.5K	24.54545455\r
Paperinvestment.com	39	56	21.3K	24.54545455\r
Newspostbulletin.com	39	60	20.4K	24.54545455\r
kmspicolite.com	41	57	27.8K	24.54545455\r
Fiveminutefaces.com	38	65	23K	24.54545455\r
Sidedtech.com	40	64	23.1K	24.54545455\r
www.Focusnewsnetwork.com	40	64	21.3K	24.54545455\r
Bulletinnewsdaily.com	40	64	28K	24.54545455\r
Investorcloser.com	10	45	10.2K	24.54545455\r
www.Articlerelease.com	26	70	21K	24.54545455\r
Lindaikejinews.com	38	52	5.5K	24.54545455\r
www.Newsappear.com	40	58	12K	24.54545455\r
Proxyium.com.in	39	42	24.5K	24.54545455\r
Bittermagazine.com	41	60	21.2K	24.54545455\r
Friendsdp.com	78	82	15K	24.54545455\r
Volumerider.com	39	60	12.1K	24.54545455\r
Islye.com	10	50	17.2K	24.54545455\r
Cornernewsdaily.com	40	57	14K	24.54545455\r
keepagents.com	37	57	19.6K	24.54545455\r
www.Newsheadlinesdaily.com	40	56	25.2K	24.54545455\r
Verifiedbusinessnews.com	35	60	22.9K	24.54545455\r
Newspackets.com	41	57	29.5K	24.54545455\r
Onlinehtmlcompiler.com	39	64	12K	24.54545455\r
Technarex.com	78	82	13.1K	24.54545455\r
Wrongroadmap.com	36	64	11.5K	24.54545455\r
Theproxyium.com	30	54	13.6K	24.54545455\r
Bladedocs.com	30	60	18K	24.54545455\r
Taskbarx.org	54	64	21K	24.54545455\r
www.Nationalnewsfeed.com	42	59	19.8K	24.54545455\r
Downloadmorerampro.com	41	56	22.8K	24.54545455\r
Presstrove.com	40	58	24.3K	24.54545455\r
Reibootpro.com	77	82	12.8K	24.54545455\r
Newscrane.com	52	60	30.3K	24.54545455\r
Aboutlines.org	34	47	18.6K	24.54545455\r
www.Lunchnewsletter.com	39	56	60K	24.54545455\r
Learnifica.com	5	50	8K	24.54545455\r
Theprintablestencils.com	46	56	20K	24.54545455\r
Viraltipsonline.info	41	52	47.9K	24.54545455\r
Techsized.com	41	64	18K	24.54545455\r
Businessjournalgroup.com	5	45	24K	24.54545455\r
www.Yatrucoff.com	32	53	7K	24.54545455\r
Istaunch.com.in	11	28	2.1K	24.54545455\r
www.Techsportsnews.com	37	57	22.1K	24.54545455\r
www.Arcarrierpoint.com.in	21	58	31.3K	24.54545455\r
Rightnewsletter.com	39	60	1K	24.54545455\r
Windowsterminal.com	40	64	16K	24.54545455\r
Teditonline.com	38	54	22K	24.54545455\r
Motiontechno.com	39	60	28.7K	24.54545455\r
www.Xascomplo.org	26	36	44.3K	24.54545455\r
Virtualdailynews.com	40	56	24.6K	24.54545455\r
Linkrify.com	41	61	18K	24.54545455\r
Zonapk.org	40	57	73.5K	24.54545455\r
Stelladimokoblog.com	10	57	8K	24.54545455\r
Eshikshakosh.org	30	57	13.5K	24.54545455\r
www.Irishbreakingnews.com	41	62	10.9K	24.54545455\r
Swiftrespond.com	56	38	18.1K	24.54545455\r
Shortbioideas.com	78	82	14K	24.54545455\r
Cookape.org	40	60	19.2K	24.54545455\r
Goodnewsvintage.com	40	51	14.2K	24.54545455\r
Newsunix.com	40	57	7.4K	24.54545455\r
Guiformat.com	12	52	15.9K	24.54545455\r
Theoperatormagazine.com	39	60	10.5K	24.54545455\r
Buzztricks.com	6	55	12K	24.54545455\r
Officialbusinessnews.com	78	82	16.7K	24.54545455\r
Zerobasket.com	37	56	9.9K	24.54545455\r
Winmergepro.com	78	82	11.2K	24.54545455\r
www.Singletopicnews.com	37	60	24.6K	24.54545455\r
Techspat.com	40	60	23K	24.54545455\r
Mrmeasurements.com	41	55	14.9K	24.54545455\r
9xflix.vip	40	71	15.4K	24.54545455\r
Latestroyalnews.com	39	42	14.7K	24.54545455\r
Wisememoryoptimizer.com	37	59	18.3K	24.54545455\r
Nestedmagazine.com	41	60	14.6K	24.54545455\r
Spreadsafe.com	5	57	8K	24.54545455\r
Autokeyclicker.com	51	54	10.3K	24.54545455\r
Imageflipper.com	40	64	16.5K	24.54545455\r
Technewstop.org	51	56	12.1K	24.54545455\r
Irfanviewlite.com	40	52	14K	24.54545455\r
Covermove.com	39	10	15K	24.54545455\r
Scanfolder.com	38	65	24K	24.54545455\r
Urbankong.com	51	34	3.6K	24.54545455\r
Mindluster.com.in	39	56	25.5K	24.54545455\r
Hijabdp.com	37	56	6K	24.54545455\r
Foxi.com.in	42	59	121K	24.54545455\r
Nicephrase.com	43	57	11.9K	24.54545455\r
Themp4moviez.com	10	55	34.4K	24.54545455\r
knowneeds.com	40	59	16.1K	24.54545455\r
Techremain.com	49	53	10K	24.54545455\r
Calculadoranormal.com	49	37	9.7K	24.54545455\r
Mlwbd.com.in	78	82	93.8K	24.54545455\r
Macrowebtech.com	5	54	10.5K	24.54545455\r
www.Tesoroblass.com	40	58	1.4K	24.54545455\r
Asisnews.com	41	61	14.6K	24.54545455\r
Techadaptor.com	38	60	25.1K	24.54545455\r
Qpoenergy.com	37	51	36.5K	24.54545455\r
Newsmagazineweekly.com	28	58	18.1K	24.54545455\r
Timesnewsmedia.com	39	58	8K	24.54545455\r
Newsletterissues.com	56	64	9.5K	24.54545455\r
Mixturenews.com	32	54	10K	24.54545455\r
Satkamatka.com.in	78	80	12.1K	24.54545455\r
Newsdailyforum.com	55	64	10.8K	24.54545455\r
Ueldomesquita.com	77	81	15K	24.54545455\r
Bcece.com.in	41	64	28K	24.54545455\r
Techwrote.com	41	57	7.9K	24.54545455\r
Sortbusiness.com	37	60	10K	24.54545455\r
www.Shortcutmagazine.com	39	60	14.2K	24.54545455\r
Travelwarningnews.com	40	64	17.9K	24.54545455\r
Settinghelp.com	38	44	9K	24.54545455\r
ItalicBox.com	37	59	29.1K	24.54545455\r
Microtechinfo.com	41	56	9.9K	24.54545455\r
Dnspy.org	41	37	11.5K	24.54545455\r
Myspynews.com	40	56	14K	24.54545455\r
Bronceblass.com	41	82	12.5K	24.54545455\r
Thunderstormnews.com	34	54	12.8K	24.54545455\r
Freeprintablepage.com	39	57	14.7K	24.54545455\r
Newsmediaidentity.com	40	60	15.5K	24.54545455\r
Techoutages.com	37	54	10K	24.54545455\r
Hostontech.com	41	59	9.4K	24.54545455\r
Blogbrewer.com	5	45	6K	24.54545455\r
Indexationnews.com	38	28	15K	24.54545455\r
www.Jobsearchingtips.com	41	61	9.3K	24.54545455\r
Searchingforsingles.org	31	48	13.6K	24.54545455\r
12ftladder.net	39	53	8.1K	24.54545455\r
Selfsilo.com	32	59	8.8K	24.54545455\r
Theboredpanda.com	40	64	10.5K	24.54545455\r
Bloghold.com	29	52	9.6K	24.54545455\r
Dazzcam.org	39	59	30.6K	24.54545455\r
Bloghyper.com	41	57	9.1K	24.54545455\r
www.Vigatruco.com	40	56	14.5K	24.54545455\r
Techbonny.com	5	60	12.8K	24.54545455\r
Quickprintable.com	10	52	11.2K	24.54545455\r
www.Headlinebusinessnews.com	39	60	10.2K	24.54545455\r
Investnoox.com	40	60	8K	24.54545455\r
Timesloom.com	39	70	11.1K	24.54545455\r
Resalenext.com	37	39	8.9K	24.54545455\r
Newsremove.com	41	57	8K	24.54545455\r
Genialblass.com	41	57	14.7K	24.54545455\r
www.Ikcomplo.org	30	52	41.2K	24.54545455\r
Brightnesscontrol.com	55	60	7.9K	24.54545455\r
Uniquenickname.com	37	54	7.8K	24.54545455\r
Selfcaptions.com	52	57	9.6K	24.54545455\r
Nifskope.com	40	46	2.4K	24.54545455\r
Runpost.co.in	37	22	8.1K	24.54545455\r
Tropicalcyclonenews.com	24	39	21.2K	24.54545455\r
Theexplorevenango.com	44	54	15.3K	24.54545455\r
Techdevan.com	55	54	11.2	24.54545455\r
Creaminstaller.com	40	52	10.5K	24.54545455\r
Latestukrainenews.com	12	56	6.3K	24.54545455\r
www.Globemedianews.com	39	64	8.2K	24.54545455\r
Feestech.com	78	82	10.6K	24.54545455\r
Intensitymagazine.com	40	55	10.2K	24.54545455\r
www.Technobeings.com	5	39	28.9K	24.54545455\r
Realtimebusinessnews.com	39	58	10.7K	24.54545455\r
Pannkpop.com	27	36	31.8K	44.18181818\r
Brookwoodblog.co.uk	13	17	1K	31.09090909\r
Tadaybignews.co.uk	40	60	7.4K	34.36363636\r
Freezemagazine.co.uk	43	55	75.5K	40.90909091\r
Vmagazine.blog	40	55	15K	27.81818182\r
Nlpadel.org	42	39	16.7K	27.81818182\r
Chas6d.net	41	39	1.6K	27.81818182\r
Faceinfame.com	38	27	6.7K	34.36363636\r
Globaltravelmag.com	39	33	3K	47.45454545\r
Wheon.io	7	11	540K	27.81818182\r
Therealfinancementor.com Rate will be 4000- 1 March	12	9	62K	44.18181818\r
Kichikapa.com	37	29	44K	31.09090909\r
Primetalk.co.uk	38	33	12K	24.54545455\r
Osintdefender.net	39	29	50K	27.81818182\r
Biscamagazine.co.uk	40	39	13K	24.54545455\r
Issamezz.com	39	61	267K	44.18181818\r
Smarstudent8.com	40	10	42K	34.36363636\r
Minigeneral.com	9	39	1.5K	31.09090909\r
Pioneertime.co.uk	15	40	3K	31.09090909\r
Heightfact.com	9	39	1.5K	31.09090909\r
Tyquaezpickett.com	15	40	1.1K	31.09090909\r
Hoducomics.org	21	11	24K	40.90909091\r
Git-hubmagazine.com	28	18	18K	47.45454545\r
Tamildoohl.com	40	33	2.7K	27.81818182\r
Leaproll.com	59	35	18.9K	40.90909091\r
Doctorfolk.com	53	45	52.7K	76.90909091\r
Uniindia.com	72	75	18.7K	96.54545455\r
Hollydentalcare.com	42	37	2.4K	76.90909091\r
Roctulum.com	54	52	28.6K	76.90909091\r
Wikindians.com	40	33	3.6K	40.90909091\r
Newsdatafacts.com	34	37	9.7K	40.90909091\r
Wellhealthorganick.com	40	38	82.7K	40.90909091\r
Derekdemars.com	43	33	7.1K	40.90909091\r
Thingstodonearme.in	43	38	31.6K	40.90909091\r
Newsdatainfo.com	36	41	2.1K	40.90909091\r
Wifenamebio.com	38	57	3.5K	40.90909091\r
Growveea.com	38	29	1.7K	40.90909091\r
Automobileinfoz.com	35	32	10.6K	40.90909091\r
Husbandsinfoz.com	42	38	41.6K	40.90909091\r
Seriocus.com	54	34	11.3K	40.90909091\r
Thereaderstone.com	35	38	6.5K	40.90909091\r
Trippdiary.com	42	35	98.4K	40.90909091\r
Tticketpricing.com	42	32	6.5K	40.90909091\r
Magazinesweeklys.com	34	38	3.6K	40.90909091\r
Sarkarijobcom.com	41	33	5.6K	40.90909091\r
Nobitadp.com	44	43	89.7K	40.90909091\r
Snostl.com	58	27	5.6K	40.90909091\r
Thinkofgamess.com	41	35	8.8K	40.90909091\r
Weeklyesports.com	40	35	5.7K	40.90909091\r
Chronicalheroes.com	41	40	28.6K	40.90909091\r
Thedigilocker.in	54	32	6.7K	40.90909091\r
Cookape.in	53	31	9.5K	40.90909091\r
Sportsvirals.com	34	41	24.6K	40.90909091\r
Biographyinfos.com	42	41	2.5K	40.90909091\r
Thebioinfo.com	35	37	9.6K	40.90909091\r
Greenbeltdirectory.com	42	35	3.5K	40.90909091\r
Regionalpedias.com	34	39	1.5K	40.90909091\r
Storiteller.org	40	46	4.5K	40.90909091\r
Gamapost.com	34	45	13.6K	40.90909091\r
Uniideaz.com	40	45	4.5K	40.90909091\r
Pubglitepc.com	55	42	9.7K	40.90909091\r
Gamexcodes.com	42	31	3.5K	40.90909091\r
Newzdp.com	40	45	3.5K	40.90909091\r
Newyorkcitymetro.com	43	35	1.5K	40.90909091\r
Peacewithinn.com	42	36	12.5K	40.90909091\r
Iplwc.com	39	46	10.5K	40.90909091\r
Shegossips.com	40	45	6.4K	40.90909091\r
Magazinehubz.com	42	35	10.5K	40.90909091\r
Networthdetails.org	40	45	31119	40.90909091\r
Boxercontest.com	39	36	1.6K	40.90909091\r
Fintechworldz.com	34	41	2.5K	40.90909091\r
Hkrn.co.in	39	45	8.5K	40.90909091\r
Theblindposts.com	31	32	16.6K	40.90909091\r
Biospotz.com	42	34	4.5K	40.90909091\r
Unizupdates.com	40	34	4.8K	40.90909091\r
Dailymagzines.co.uk	36	45	15.7K	40.90909091\r
Magazinesweekly.co.uk	36	45	7.3K	40.90909091\r
Megasor.com	42	34	9.9K	40.90909091\r
luascatering.com	56	40	982	40.90909091\r
Gambsino.com	34	35	31.1K	40.90909091\r
Staragepedia.com	41	43	1.1K	40.90909091\r
Instabionetwork.com	42	34	1.5K	40.90909091\r
Sportsdp.com	42	45	2.2K	40.90909091\r
Cricbuzzr.com	42	39	2.7K	40.90909091\r
Biharbhumilandrecord.com	42	36	11.2K	40.90909091\r
Sportstrendzz.com	42	36	2.9K	40.90909091\r
Startupstoryhub.com	43	24	1.6K	40.90909091\r
Sportytimeline.com	38	45	1.5K	40.90909091\r
Storyuniweek.com	42	36	21.5K	40.90909091\r
Thetrendyaura.com	40	34	3.9K	40.90909091\r
Wifeof.org	40	42	13.7K	40.90909091\r
Magazinesdata.com	42	35	2.6K	40.90909091\r
Fullhandmehandidesign.com	41	34	1.1K	40.90909091\r
Sportuniweek.com	39	45	4.7K	40.90909091\r
Magazinesbeta.com	30	0	3.4K	40.90909091\r
Genxdaily.com	37	34	687	40.90909091\r
Visitshot.com	40	41	506	40.90909091\r
Mpbhulekhrcms.com	43	35	458	40.90909091\r
Unipostwire.com	36	41	871	40.90909091\r
Lifehacksstory.com	35	43	492	40.90909091\r
Buzinessninja.com	35	36	445	40.90909091\r
Thetimespedia.com	37	39	438	40.90909091\r
Cookape.org.in	39	45	174	40.90909091\r
Theunimail.com	41	39	370	40.90909091\r
Cryptocars.me	56	38	692	40.90909091\r
Megamagzines.com	31	36	335	40.90909091\r
Metroj.com	41	37	286	40.90909091\r
Mumbaijournals.com	37	34	106	40.90909091\r
Sportscreta.com	43	41	148	40.90909091\r
Businesssinfozone.com	37	36	208	40.90909091\r
Vipbox-tv.com	32	37	791	40.90909091\r
Scoopwheels.com	37	27	191	40.90909091\r
Absolutewires.com	33	0.1	82	40.90909091\r
Shoutingtree.com	35	8	80	40.90909091\r
Cricketmach.com	40	27	76	40.90909091\r
Magazinespros.com	35	36	1	40.90909091\r
Meidilite.com	40	27	1	40.90909091\r
Primewirehub.com	36	40	19	40.90909091\r
Starssbio.com	36	44	21	40.90909091\r
Xuvola.com	37	34	5	40.90909091\r
Sineshots.com	39	41	7	40.90909091\r
Lopbet.com	56	31	11	40.90909091\r
Luxuryvillasgreecelecollectionist.com	38	50	7K	27.81818182\r
Wordstwists.com	41	72	38K	57.27272727\r
Punsberry.com	40	72	15K	57.27272727\r
Wishpulses.com	40	72	30K	40.90909091\r
Niceblessings.com	40	73	18K	76.90909091\r
Celebsbiofolio.com	38	71	11K	50.72727273\r
Fanzynames.com	40	73	5K	40.90909091\r
Mybioshow.com	41	63	9K	40.90909091\r
Fozymessages.com	40	73	4K	40.90909091\r
Techflee.co.uk	40	72	7K	40.90909091\r
Measurevan.com	40	72	4K	40.90909091\r
Pentomagazine.com	41	73	2K	57.27272727\r
Finitenames.com	42	73	7K	50.72727273\r
Shayaripower.com	43	72	46K	50.72727273\r
Shayaribloom.com	41	72	13K	40.90909091\r
Righter.io	40	72	37K	40.90909091\r
Hypeprofiles.com	42	73	1K	40.90909091\r
Educationalbaba.org	60	72	16K	40.90909091\r
Networthexplore.com	40	70	4K	50.72727273\r
Hunkwizards.com	40	70	3K	40.90909091\r
Starttostory.com	39	70	2K	40.90909091\r
Captionsskill.com	33	58	1K	40.90909091\r
Creckler.com	41	64	4K	40.90909091\r
Fulcharmnames.com	40	28	5K	50.72727273\r
Funnyknockknockjoke.com	43	61	6K	57.27272727\r
Punnyuniverse.com	41	61	2K	50.72727273\r
Infotopbio.com	43	73	5K	50.72727273\r
Gracejabbaribio.com	43	63	4K	57.27272727\r
Guestcollab.co.uk	35	55	1K	40.90909091\r
Infobiosphere.com	35	41	1K	50.72727273\r
Craftypuns.com	40	58	9K	57.27272727\r
Photosvibe.in	35	47	33K	40.90909091\r
Sgmenulover.org	41	60	14K	40.90909091\r
Fantasenamegenerator.com	40	73	4K	40.90909091\r
Punsclick.com	40	71	3K	40.90909091\r
Londonlifemagazine.co.uk	41	70	2K	40.90909091\r
Allfunnypuns.com	43	54	1K	57.27272727\r
Lordofnames.com	41	70	3K	57.27272727\r
Punnz.com	41	59	2K	50.72727273\r
Phlmenus.org	43	66	19K	40.90909091\r
Pickuplinlove.com	36	63	3K	57.27272727\r
Fantomagazines.com	40	70	4K	50.72727273\r
Namezorigins.com	41	61	3K	57.27272727\r
Grammarapex.com	41	55	1K	40.90909091\r
Prayervibe.co.uk	41	61	3K	50.72727273\r
Azjankari.com	36	70	22K	57.27272727\r
Aniversarycaption.com	42	61	1K	50.72727273\r
Trackmasti.com	39	58	3K	40.90909091\r
Photosbull.com	35	51	2K	57.27272727\r
Quickfast.blog	5	16	6K	24.54545455\r
Coomer-su.org	42	50	9K	24.54545455\r
Bizwell.co.uk	5	57	25K	31.09090909\r
Englishpuns.com	42	70	8K	40.90909091\r
Darkfantasynames.com	39	71	5K	40.90909091\r
Insightbizz.co.uk	34	11	4K	50.72727273\r
Timemags.co.uk	40	10	6K	50.72727273\r
M4uhd.co.uk	37	10	3.2K	27.81818182\r
Heardle90s.co.uk	34	10	23.5K	40.90909091\r
Reelsofmedia.co.uk	36	41	32K	34.36363636\r
Activeness.co.uk	42	24	1K	24.54545455\r
Bizimagazine.blog	38	33	8.9K	34.36363636\r
Eromelove.com	5	11	1K	27.81818182\r
Usbtypeb.com	40	38	6.8K	31.09090909\r
Technologygmt.com	40	29	1K	37.63636364\r
Krizmi.com	13	11	13.6K	34.36363636\r
Eventrockers.com	8	7	1.6K	31.09090909\r
Ehicwelding.com	1	9	1K	31.09090909\r
Thegreatamericanrealty.com	37	33	42.7K	37.63636364\r
Thecrackedeggmt.com	11	9	82.6K	44.18181818\r
Axe-shack.com	38	29	97.6K	37.63636364\r
Emmasmagicaldream.com	10	9	19.6K	37.63636364\r
Theinkonme.com	19	12	4K	37.63636364\r
Thepropia.com	40	38	22.6K	37.63636364\r
Currenthabit.com	5	9	9.6K	44.18181818\r
Magazinenyc.com	6	9	2.6K	37.63636364\r
Techstudify.com	13	12	23.5K	34.36363636\r
Embapparels.com	15	9	5.8K	37.63636364\r
Gailvocie.com	1	11	1K	44.18181818\r
Waterwaysmagazine.com	56	41	1K	103.0909091\r
Thebigger.com	46	36	5.4K	96.54545455\r
Themediamag.com	40	57	4K	27.81818182\r
Popularmarathi.in	10	71	26K	40.90909091\r
Nameslections.com	58	10	2K	40.90909091\r
Shayaritoyou.com	11	71	32K	50.72727273\r
Blessingspower.com	56	15	2K	40.90909091\r
Usa-news.co.uk	39	58	11K	27.81818182\r
Serumcu.com	40	46	9K	24.54545455\r
Uploadarticle.net	30	64	131K	24.54545455\r
Fideleturfturf.net	30	54	124K	24.54545455\r
Poetryreads.com	30	55	96K	24.54545455\r
Totoking111com.com	30	40	91K	24.54545455\r
Redeepseek.org	30	55	81K	24.54545455\r
Pragmatichoki22com.com	30	43	78K	24.54545455\r
Leboss-duturf.co.uk	30	53	48K	24.54545455\r
Crackstube.co.uk	30	35	44K	24.54545455\r
Thedigitalweekly.net	30	28	42K	24.54545455\r
Techsslaash-com.org	30	32	33K	24.54545455\r
Newsross.net	35	55	31K	24.54545455\r
Fideleturfturf.org	35	60	26K	24.54545455\r
Poetryoceans.com	35	53	23K	24.54545455\r
Vezgieclaptezims.org	35	47	20K	24.54545455\r
Herosturf.org	35	57	18K	24.54545455\r
Kappaturf.co.uk	35	54	16K	24.54545455\r
Itsnewztalkies.net	35	55	15K	24.54545455\r
Structurespy.net	35	53	14K	24.54545455\r
Fabulouspoetry.com	35	43	14K	24.54545455\r
Garudavip88com.com	35	48	14K	24.54545455\r
Cozovmoni.co.uk	35	50	14K	24.54545455\r
Techtvhub.net	35	53	13K	24.54545455\r
Lifeak.net	35	29	12K	24.54545455\r
Sv388macrovip805.com	35	32	12K	24.54545455\r
Bossturf.co.uk	35	51	12K	24.54545455\r
Realapksclub.org	35	54	12K	24.54545455\r
Financecub.net	35	65	11K	24.54545455\r
Furtherbusiness.net	35	55	11K	24.54545455\r
Cloakmagazine.net	35	65	11K	24.54545455\r
Patreonaust.com	35	53	11K	24.54545455\r
Globespro.net	35	53	11K	24.54545455\r
Techgup.net	38	54	10K	24.54545455\r
Cloakmagazine.org	38	65	10K	24.54545455\r
Furtherbusiness.org	38	29	10K	24.54545455\r
Rightnewsletter.net	38	53	9K	24.54545455\r
Poetrymushaira.com	38	55	8K	24.54545455\r
Gamevalourcom.com	38	43	8K	24.54545455\r
Myclassnews.org	38	51	8K	24.54545455\r
Mytecharm.net	38	50	8K	24.54545455\r
Morningtimenews.net	38	54	8K	24.54545455\r
Nadoprono.net	38	58	7K	24.54545455\r
Ttweakflight.net	38	50	7K	24.54545455\r
Lapzoocom.com	38	53	7K	24.54545455\r
Aavot.co.uk	38	57	7K	24.54545455\r
X6turf.org	38	55	7K	24.54545455\r
Kashyeportazza.com	38	41	7K	24.54545455\r
Newsapollo.org	38	53	7K	24.54545455\r
Fashionlamb.net	38	52	7K	24.54545455\r
Staturf.org	38	53	6K	24.54545455\r
Minarikpmu.co.uk	38	30	6K	24.54545455\r
Geekmill.net	38	53	6K	24.54545455\r
Bloghold.net	38	65	6K	24.54545455\r
Nurokindiacom.com	38	38	6K	24.54545455\r
Rdxhd.com.co	38	56	6K	24.54545455\r
Naturerealytrcom.com	38	55	6K	24.54545455\r
Smartmockups.org	38	44	6K	24.54545455\r
Le-boss-du-turf.com	38	54	6K	24.54545455\r
Goodmooddotcom.co.uk	38	31	6K	24.54545455\r
Jolieturfgagnant.com	38	51	6K	24.54545455\r
Techsslashcom.org	32	52	6K	24.54545455\r
Backstageviralcom.com	32	55	6K	24.54545455\r
Zoromia.net	32	57	6K	24.54545455\r
Mrmeasurements.org	32	53	6K	24.54545455\r
Blogsternationcom.co.uk	32	41	6K	24.54545455\r
Echoturf.net	32	53	6K	24.54545455\r
Infodost.net	32	54	5K	24.54545455\r
Victoireturf.org	32	53	5K	24.54545455\r
Rivenisnet.net	32	56	5K	24.54545455\r
Indexationnews.net	32	58	5K	24.54545455\r
Succespronos.co.uk	32	58	5K	24.54545455\r
Ueldomesquita.net	32	41	5K	24.54545455\r
Pmucontinent.org	32	55	5K	24.54545455\r
Tabletwritings.co.uk	32	44	5K	24.54545455\r
Cplemaire-pmu.co.uk	32	58	5K	24.54545455\r
Pocketmemoriesnet.org	32	43	5K	24.54545455\r
Stvurducom.com	32	52	5K	24.54545455\r
Research-snipers.com	32	42	4K	24.54545455\r
Wolniturfpmu.com	32	53	4K	24.54545455\r
Luxuryinteriorsorg.org	32	53	4K	24.54545455\r
Techloomz.net	32	65	4K	24.54545455\r
Heroturf.org	32	53	4K	24.54545455\r
Cryptopronetworkcom.com	32	36	4K	24.54545455\r
Francoistuchel.org	32	53	4K	24.54545455\r
Champion-des-courses.net	32	35	4K	24.54545455\r
X6turf.net	32	60	4K	24.54545455\r
Bellecourse.co.uk	32	43	4K	24.54545455\r
Mixandmatchjollibee.net	32	56	4K	24.54545455\r
Alonesadpoetry.com	32	52	4K	24.54545455\r
Akipthwgames.com	32	55	4K	24.54545455\r
Globeinsightblogcom.com	32	54	4K	24.54545455\r
Cricketman2.net	32	55	4K	24.54545455\r
Eyexconcom.co.uk	32	41	4K	24.54545455\r
Luxuryinteriorsorg.co.uk	32	35	4K	24.54545455\r
Turbogeekorg.net	32	40	4K	24.54545455\r
Ztech100.org	32	53	4K	24.54545455\r
Lesduels.org	32	60	4K	24.54545455\r
Deepseekplay.net	32	53	4K	24.54545455\r
Pragatizacao.org	32	43	4K	24.54545455\r
Techoutages.org	32	65	4K	24.54545455\r
Arcenturf.org	32	27	4K	24.54545455\r
Notontech.co.uk	32	53	4K	24.54545455\r
Thelakewoodscoop.net	32	55	4K	24.54545455\r
Travelwarningnewscom.com	32	52	4K	24.54545455\r
Dailynewslaw.net	32	54	4K	24.54545455\r
Nulookindiacom.com	32	53	4K	24.54545455\r
Newsworlddaily.net	32	55	4K	24.54545455\r
Lavoyantepmu.co.uk	32	54	4K	24.54545455\r
Randomgiantnet.org	32	64	4K	24.54545455\r
Nurokindia.net	32	18	3K	24.54545455\r
Acadomi.net	32	53	3K	24.54545455\r
Ytrishiin.net	32	55	3K	24.54545455\r
Linkmposlotmicrostar88.com	32	33	3K	24.54545455\r
Settinghelpcom.com	32	55	3K	24.54545455\r
Oneworldcolumnorg.org	37	55	3K	24.54545455\r
Speednewscentral.net	37	40	3K	24.54545455\r
Mixuemenu.net	37	41	3K	24.54545455\r
Honestnewsdaily.net	37	29	3K	24.54545455\r
Irishbreakingnewscom.com	37	53	3K	24.54545455\r
Relatednewsnetwork.net	37	64	3K	24.54545455\r
Jephteturf.co.uk	37	51	3K	24.54545455\r
Stmorocom.net	37	56	3K	24.54545455\r
Carmannews.net	37	55	3K	24.54545455\r
Donnacazzo69com.com	37	46	3K	24.54545455\r
Economicweeklynews.net	37	36	3K	24.54545455\r
Sv388macrovip805com.com	37	35	3K	24.54545455\r
Prono-verite.co.uk	37	65	3K	24.54545455\r
Greennewsdesk.org	37	53	3K	24.54545455\r
Informalnewz.net	37	55	3K	24.54545455\r
Francechevalturf.org	37	53	3K	24.54545455\r
Appkodseo.com	37	42	3K	24.54545455\r
Stmorocom.org	37	40	3K	24.54545455\r
Poetrysecrets.com	37	41	3K	24.54545455\r
Succespronos.org	37	54	3K	24.54545455\r
Pmugeny.com	37	43	3K	24.54545455\r
Eliebaroud23.com	37	63	3K	24.54545455\r
Bellesturf.co.uk	37	29	3K	24.54545455\r
Genycourse.org	37	51	3K	24.54545455\r
Piviturf.net	37	52	3K	24.54545455\r
Perchedor.co.uk	37	43	3K	24.54545455\r
Timeshealthmagcom.com	37	54	3K	24.54545455\r
Technewstoporg.org	37	53	3K	24.54545455\r
Journalnewsinfo.net	37	66	3K	24.54545455\r
Backstageviral.co.uk	37	46	3K	24.54545455\r
Swaggypoetry.com	37	54	3K	24.54545455\r
Mytecharm.co.uk	37	53	2K	24.54545455\r
Wolniturf.net	37	42	2K	24.54545455\r
Picnob.co.uk	37	12	2K	24.54545455\r
Israelturf.com	37	53	2K	24.54545455\r
Naturerealytr.co.uk	37	40	2K	24.54545455\r
Entamizole.com	37	55	2K	24.54545455\r
Blogsternationcom.net	37	50	2K	24.54545455\r
Theutdplug.org	37	43	2K	24.54545455\r
Gagnantsturf.org	37	54	2K	24.54545455\r
Seventhway.co.uk	37	29	2K	24.54545455\r
Myinteriorpalace.net	37	52	2K	24.54545455\r
Techiadd.net	37	53	2K	24.54545455\r
Factsreader.net	37	52	2K	24.54545455\r
Semakanmykid.com	37	55	2K	24.54545455\r
Kazwire.co.uk	37	45	2K	24.54545455\r
Fusionpowertech.com	37	57	2K	24.54545455\r
Dignotech.co.uk	37	53	2K	24.54545455\r
Thelowdownunder.net	37	54	2K	24.54545455\r
Ridelturf.co.uk	37	50	2K	24.54545455\r
Techidemics.net	37	46	2K	24.54545455\r
Dailynewslaw.co.uk	37	53	2K	24.54545455\r
Wellhealthorganiccom.net	37	30	2K	24.54545455\r
Hdhubforu.com	37	58	2K	24.54545455\r
Betpawa-rwanda.co.uk	37	43	2K	24.54545455\r
Afric-pronostic.org	37	29	2K	24.54545455\r
Tech-mistri.com	37	61	2K	24.54545455\r
Newsworlddaily.co.uk	37	38	2K	24.54545455\r
Theinstanavigation.net	37	43	2K	24.54545455\r
Marketmedianews.co.uk	37	52	2K	24.54545455\r
Mywebinsurancecom.com	37	53	2K	24.54545455\r
Miroirpmu.org	37	50	2K	24.54545455\r
Ezzocardcom.com	37	35	2K	24.54545455\r
Pragatizacao.com	37	34	2K	24.54545455\r
Echo-turf.net	37	64	2K	24.54545455\r
Fullimediacom.com	37	53	2K	24.54545455\r
Instabioreview.com	37	56	2K	24.54545455\r
Fullimedia.net	37	52	2K	24.54545455\r
Plugboxlinux.net	37	29	2K	24.54545455\r
Lionapk.net	37	53	2K	24.54545455\r
Timeshealthmag.co.uk	37	53	2K	24.54545455\r
4gagnants.net	37	55	2K	24.54545455\r
Dondupmu.net	37	52	2K	24.54545455\r
Veganovtrichy.co.uk	37	53	2K	24.54545455\r
Carladiab.org	37	55	2K	24.54545455\r
Easytonetcom.com	31	55	2K	24.54545455\r
Secrethostess.net	31	57	2K	24.54545455\r
Filmymeet5.co.uk	31	53	2K	24.54545455\r
Aviajaronlinecom.com	31	54	2K	24.54545455\r
Bellecourse.net	31	55	2K	24.54545455\r
Newznavcom.com	31	53	2K	24.54545455\r
Hoodsite.co.uk	31	38	2K	24.54545455\r
Hd4uhub.co.uk	31	45	2K	24.54545455\r
Tech-lokesh.net	31	52	2K	24.54545455\r
Zisscourseturf.org	31	48	2K	24.54545455\r
Bigtechoro.net	31	38	2K	24.54545455\r
Totoking111.net	31	44	2K	24.54545455\r
Le-don-pmu.co.uk	31	60	2K	24.54545455\r
Patcoprono.net	31	60	2K	24.54545455\r
Techjb.org	31	40	2K	24.54545455\r
Kurtperez.org	31	29	2K	24.54545455\r
Lpbpisowifi.org	31	27	2K	24.54545455\r
Bulbulnepal.net	31	56	2K	24.54545455\r
Majikkancat.com	31	55	2K	24.54545455\r
Networthvistas.com	31	53	2K	24.54545455\r
Greblovz2004.com	31	47	2K	24.54545455\r
Redeepseekcom.com	31	50	1K	24.54545455\r
Getnotesfree4u.com	31	65	1K	24.54545455\r
Clairekittle.net	31	52	1K	24.54545455\r
Albergado.com	31	30	1K	24.54545455\r
Pmumalin07.co.uk	31	29	1K	24.54545455\r
Donnacazzo69.net	31	54	1K	24.54545455\r
Arcyart.blog	31	65	1K	24.54545455\r
Webparsabcom.com	31	53	1K	24.54545455\r
Jenpharm.net	31	55	1K	24.54545455\r
Harga-mixue.com	31	52	1K	24.54545455\r
Timeshealthmag.net	31	30	1K	24.54545455\r
Marketmedianews.net	31	54	1K	24.54545455\r
Jephte-turf.co.uk	31	39	1K	24.54545455\r
Netnaijaxyz.net	31	49	1K	24.54545455\r
Techlokeshcom.com	31	29	1K	24.54545455\r
Byfsrhlu7g6ewot.com	31	50	1K	24.54545455\r
Donpmu.co.uk	31	60	1K	24.54545455\r
Hargharbijli.com	31	53	1K	24.54545455\r
Asjreflet.org	31	44	1K	24.54545455\r
Alloquinte.co.uk	36	54	1K	24.54545455\r
Modyukle.co.uk	36	44	1K	24.54545455\r
Healthsciencesforumcom.com	36	55	1K	24.54545455\r
Hindiblogindiacom.com	36	48	1K	24.54545455\r
Bloghold.org	36	52	1K	24.54545455\r
Techoelitecom.com	36	50	1K	24.54545455\r
Victoireturf.co.uk	36	29	1K	24.54545455\r
Gazette-pmu2.com	36	38	1K	24.54545455\r
Hindiblogindia.org	36	56	1K	24.54545455\r
Backstageviral.net	36	55	1K	24.54545455\r
Webparsab.org	36	53	1K	24.54545455\r
Quintechevalturf.net	36	51	1K	24.54545455\r
Zaazaturf.net	36	55	1K	24.54545455\r
Zoromia.co.uk	36	53	1K	24.54545455\r
Reply-python.org	36	55	1K	24.54545455\r
Morningtimenews.co.uk	36	53	1K	24.54545455\r
Letsbuildups.net	36	53	1K	24.54545455\r
Lebosseduturf.org	36	53	1K	24.54545455\r
Indexationnewscom.com	36	65	1K	24.54545455\r
Mrmeasurements.net	36	52	1K	24.54545455\r
Myhelpscreencom.com	36	53	1K	24.54545455\r
Filmy4cab.net	36	29	1K	24.54545455\r
Selmantech.co.uk	36	55	1K	24.54545455\r
Afric-pronostic.co.uk	36	51	1K	24.54545455\r
Herosturf.co.uk	36	56	1K	24.54545455\r
Manassegagnant.net	36	55	1K	24.54545455\r
Techlokesh.co.uk	36	51	1K	24.54545455\r
Zazaturf.org	36	29	1K	24.54545455\r
Hargharbijliyojana.net	36	53	1K	24.54545455\r
Tuambiaapp.com	36	64	1K	24.54545455\r
Insightfulmagazine.net	36	52	1K	24.54545455\r
Myliberlacom.net	36	36	1K	24.54545455\r
Thesoundstourcom.org	36	39	1K	24.54545455\r
Thetechadvice.com	36	55	1K	24.54545455\r
Zaazaturf.org	36	27	1K	24.54545455\r
G15toolscom.com	36	53	1K	24.54545455\r
Quintechevalturf.co.uk	36	29	1K	24.54545455\r
Newsapollocom.com	36	53	1K	24.54545455\r
Zeturf-commentaires.net	36	54	1K	24.54545455\r
Okaymuz.net	36	55	1K	24.54545455\r
Bolly4you.co.uk	36	53	1K	24.54545455\r
Ledonpmu.org	36	64	1K	24.54545455\r
Technewsenglish.com	36	70	1K	24.54545455\r
Techvibed.com	10	52	163K	34.36363636\r
Techbtime.de	40	11	10.5K	37.63636364\r
Smartstudent8.com	40	25	40K	34.36363636\r
Dutablemag.com	40	11	8K	24.54545455\r
Clickupmagazine.co.uk	40	11	5.5K	40.90909091\r
Livesmagazine.co.uk	40	15	14K	31.09090909\r
Veganovies.com	5	22	3K	27.81818182\r
Socialbizmagazine.co.uk	42	7	1K	27.81818182\r
Thesalfordmagazine.com Price Increased	40	6	29K	40.90909091\r
Spellie.org	30	27	5K	31.09090909\r
Dualmedianews.com	34	51	2K	31.09090909\r
Instrumentstogo.com	15	24	15K	27.81818182\r
Mybusybeehives.com	32	9	9K	34.36363636\r
Baddiehubdaily.co.uk	40	35	47K	27.81818182\r
Swiftypuns.com	38	71	2K	40.90909091\r
Crumbllineup.us	20	72	16K	50.72727273\r
Foodiejokes.com	57	72	4K	40.90909091\r
Bhoomi-rtconline.com	56	65	240K	40.90909091\r
Lovepetplace.com	31	29	8K	31.09090909\r
Magazine3.co.uk	40	60	8K	31.09090909\r
Bungleo.com	37	11	24K	37.63636364\r
Thekookoftheday.com	35	5	16K	37.63636364\r
Adamsbutler.com	40	8	28K	37.63636364\r
Elegantcreator.com	42	18	7K	37.63636364\r
Visitqueendom.com	43	14	138K	37.63636364\r
Amboutpost.com	35	5	22K	40.90909091\r
Spirit-elements.com	35	5	70K	40.90909091\r
Elegantcreator.com	43	30	15.3K	40.90909091\r
Thepropia.com	40	20	25.3K	44.18181818\r
Emmasmagicaldream.com	13	5	23.1K	37.63636364\r
Garage2global.blog	30	55	13.7K	24.54545455\r
sixmagazine.co.uk Rate will be 3500- 1 July	34	65	31.2K	40.90909091\r
Mamagazine.co.uk	50	52	5.5K	27.81818182\r
Plangud.com	40	55	11.4K	27.81818182\r
Supermaked.com	30	40	10K	27.81818182\r
Reeland.co.uk	43	52	60K	27.81818182\r
Betterthisworldmoney.org	40	39	1.1K	27.81818182\r
Beriful.com	39	38	15K	27.81818182\r
Totalsportek.org.uk	40	38	2.4K	27.81818182\r
Rojgarwithankit.org	10	9	76K	27.81818182\r
Thefilmyhit.com	34	29	16K	27.81818182\r
Eshikshakosh.org	34	27	1K	27.81818182\r
Theeshikshakosh.com	8	11	7.7K	27.81818182\r
Magazineflash.com	37	29	21.3K	27.81818182\r
Techpar.co.uk	33	31	1.1K	27.81818182\r
Thecinemapk.com	39	33	25.7K	24.54545455\r
Blessingword.com	40	39	25.9K	24.54545455\r
Subways-menu.co.uk	40	39	15.8K	24.54545455\r
Wbifms.com	39	39	6.5K	24.54545455\r
Punsfly.com	39	39	5.7K	24.54545455\r
Sweatynames.com	43	37	2.1K	24.54545455\r
Todaychickenprice.com	38	31	1.9K	24.54545455\r
Stylexroots.com	39	33	4.9K	24.54545455\r
Symbolostic.com	5	7	10.5K	24.54545455\r
Travalblogs.com	39	37	1.4K	24.54545455\r
Celestialshiny.com	39	36	6.9K	24.54545455\r
Crewcuthair.com	39	35	3.5K	24.54545455\r
Purequotezone.com	39	33	1.1K	24.54545455\r
Mcdsmenuca.com	39	38	4.1K	24.54545455\r
Touchingmessages.com	40	39	2.4K	24.54545455\r
Blessingjourney.com	39	41	1K	24.54545455\r
Spirtualglow.com	39	44	1.2K	24.54545455\r
Neoblessing.com	39	39	1K	24.54545455\r
Biblefaithtruth.com	39	39	1K	24.54545455\r
Slogansnest.com	35	10	1K	40.90909091\r
Sizesage.com	37	10	6K	40.90909091\r
Infinitespiritual.com	39	10	7K	40.90909091\r
Curiositytop.com	32	6	2K	47.45454545\r
Wonderworldspace.com	38	33	2K	54\r
Paytimes.co.uk	43	35	3K	27.81818182\r
Streameast-soccer.com	23	20	2K	27.81818182\r
Pureprairiefarm.com	42	62	262K	34.36363636\r
Psdmathletes.com	42	50	4K	27.81818182\r
Obsidian-ark.com	11	51	14K	27.81818182\r
Starbio.co.uk	42	44	1K	27.81818182\r
Veneajelu.com	4	44	6K	27.81818182\r
Spinlyx.com	33	32	1K	24.54545455\r
Ultramagazine.org	4	2	54K	27.81818182\r
Sch-nw.com	41	42	71.8K	37.63636364\r
Magazinenyc.com	10	4	1K	37.63636364\r
Esyray.com	37	17	2.8K	37.63636364\r
Magazinedreams.co.uk	40	43	4.4K	24.54545455\r
Wilsonyb.com	39	5	268K	40.90909091\r
Decordrip.com Pure Home Improvement	40	44	14K	57.27272727\r
Morigirlfeelings.com	62	60	9.4k	27.81818182\r
Gainesvillepools.com	31	51	8.1k	27.81818182\r
Lisafashions.com	42	52	6.4k	27.81818182\r
Sylviasalazarsimpson.com	40	53	19.4k	27.81818182\r
Socialmediagirl.co.uk	44	51	12.8k	27.81818182\r
Definitelymath.com	31	51	6.2k	27.81818182\r
Nullsbrawlapk.net	40	58	2.5k	27.81818182\r
Lonestarbeveragespecialist.com	58	60	116.7k	27.81818182\r
Sashaestilo.com	59	64	5.8k	27.81818182\r
Theindoexports.com	58	62	3.2k	27.81818182\r
Andreaclined64.com	41	50	11.5k	27.81818182\r
Dovabusinesses.com	42	51	13.8k	27.81818182\r
Baddiexhub.com	41	32	15.3k	27.81818182\r
Wahsonfurniture.com	44	51	6.2k	27.81818182\r
Arco-blog.com	41	50	2.7k	27.81818182\r
Baddiehub.pro	41	41	1.4k	27.81818182\r
Citizenscapture.com	44	51	12.4k	27.81818182\r
Themeaner.com	45	11	1.6K	31.09090909\r
Mhealer.co.uk	41	15	5.9K	37.63636364\r
Postplace.co.uk	40	11	3K	31.09090909\r
Businesstogen.com	42	14	1.2K	31.09090909\r
Skendri.com	40	16	1.2K	31.09090909\r
Praiseear.co.uk	45	11	1.3K	31.09090909\r
Thetanel.co.uk	45	11	2.4K	31.09090909\r
Widerweekly.co.uk	39	48	12K	40.90909091\r
Boldlynames.com	61	72	24K	50.72727273\r
Holylordsprayer.com	52	61	7K	40.90909091\r
Goldbuzz.co.uk	62	72	11K	50.72727273\r
Heartedblessings.com	38	61	7K	40.90909091\r
Hahapun.com	65	70	5K	40.90909091\r
Instabiogenerator.in	42	70	51K	40.90909091\r
Grammerway.com	65	70	29K	40.90909091\r
Smartblessings.com	60	70	13K	40.90909091\r
Techboosted.co.uk	40	45	4K	27.81818182\r
Whatmobilepriceoye.com	42	23	21K	27.81818182\r
Chatpic.co.uk	42	15	119K	34.36363636\r
Gesportals.net	38	15	28K	27.81818182\r
Shinigamiae.com	38	11	4K	24.54545455\r
Highfymagazine.com	35	37	3K	27.81818182\r
Ddooks.com	40	37	6K	24.54545455\r
Ppny.org	41	10	13K	40.90909091\r
Szechuanharrison.com	39	15	20K	40.90909091\r
Bloommarketnc.com	38	17	2K	40.90909091\r
Jeanclair.com	40	18	33K	40.90909091\r
Katieboer.com	41	20	32K	47.45454545\r
Theyardhsv.com	39	22	37K	47.45454545\r
Classiclanesne.com	39	21	20K	40.90909091\r
Smathletics.net	41	19	25K	40.90909091\r
Twotostadas.net	41	16	126K	40.90909091\r
318towing.com	39	21	40K	40.90909091\r
Bandlybands.com	41	20	27K	40.90909091\r
Floralloftsac.com	39	22	60K	47.45454545\r
Alphacordx.com	40	24	1K	40.90909091\r
Cheekyzebra.com	15	25	33K	40.90909091\r
Theboutiquemodesto.com Pure Fashion	19	21	2K	83.45454545\r
Blufx.net	39	24	6K	47.45454545\r
Eclark.net	40	23	9K	47.45454545\r
Afroliterarymagazine.com	40	20	20K	57.27272727\r
Meme-mafia.com	39	18	6K	37.63636364\r
Bryanazevedo.com	15	23	14K	37.63636364\r
3000under.com	40	15	6K	37.63636364\r
Oobrewingco.com	40	30	27K	40.90909091\r
Theplayhouselv.com	40	32	14K	47.45454545\r
Thirddcs.com	39	28	23K	40.90909091\r
Thepaintersllc.net	40	25	22K	40.90909091\r
Thesnowflo.com	40	23	2K	47.45454545\r
Teachingfromhere.com	19	22	4K	47.45454545\r
Bcorner.net	17	20	15K	40.90909091\r
Thearrc.org	15	27	26K	40.90909091\r
Punswave.com	68	57	14K	40.90909091\r
Metaphorhaven.com	42	57	35K	40.90909091\r
Vogeinsight.com	41	37	10K	37.63636364\r
Whatmobilepriceoye.com	42	27	24.5K	31.09090909\r
Yahoo-technology.com	41	30	1.9K	27.81818182\r
Digitalpress.it.com Rate will be 3500- 1 April	92	90	7.7K	40.90909091\r
celebrityworldz.co.uk Rate will be 2000- 1 May	39	61	7K	31.09090909\r
Newschannelnebraska.it.com	92	15	6.4K	24.54545455\r
Getdailyblog.com	34	10	6.9K	24.54545455\r
Kulfiy.net	40	22	2.6K	24.54545455\r
Holycrosswest.com	15	11	8.8K	27.81818182\r
Technology-brokers.com	10	9	4.2K	27.81818182\r
Todaydinehours.com	43	18	4.5K	27.81818182\r
Managementworkmedia.co.uk	5	2	2K	24.54545455\r
Streameasts.blog	40	20	2.3K	34.36363636\r
				18\r
Taboo-tube.com	42	49	1.4K	34.36363636\r
Wellhealthorganice.com	9	4	15.7K	27.81818182\r
www.Globemedianews.com	39	64	10K	24.54545455\r
Businessfrontpage.com	39	55	12K	24.54545455\r
www.Newspaperjournalist.com	39	40	9.9K	24.54545455\r
Newscloude.com	40	57	7.4K	24.54545455\r
Newsforte.com	41	57	6K	24.54545455\r
Cloudymap.com	15	45	8K	24.54545455\r
Wishes.com.in	25	64	9.7K	24.54545455\r
Greatonlinetools.org	40	70	55.7K	24.54545455\r
Newspaperpages.com	48	60	8K	24.54545455\r
Livebroadcastnews.com	41	60	10K	24.54545455\r
Remixos.org	40	53	10K	24.54545455\r
Wingetui.com	39	59	10.6K	24.54545455\r
Fourfivetech.com	46	55	9.6K	24.54545455\r
Grouplink.com.in	39	50	47.4K	24.54545455\r
Technukti.net	55	59	12K	24.54545455\r
Wiztree.co.uk	12	25	1.4K	24.54545455\r
Techbigs.co.in	38	55	6.2K	24.54545455\r
Gettransmac.com	67	58	6K	24.54545455\r
Readmighty.com	5	9	4.4K	24.54545455\r
Thetechnotrick.com	39	58	46.6K	24.54545455\r
Sohohindipro.net	58	60	16K	24.54545455\r
Anytechhub.com	5	4	9.2K	24.54545455\r
Thebloxstrap.com	37	54	12K	24.54545455\r
Openhardwaremonitors.com	40	57	9.5K	24.54545455\r
Digitalnewsreports.com	42	60	10K	24.54545455\r
Amsveltech.com	52	58	7.5K	24.54545455\r
Reciperelish.com	14	10	3.8K	24.54545455\r
Calmwires.com	40	58	4K	24.54545455\r
Seemnews.com	58	80	1K	24.54545455\r
Rodgym.com	15	45	3K	24.54545455\r
Pixelguest.com	30	56	10K	24.54545455\r
Techmindcloud.com	39	59	6K	24.54545455\r
www.Howblogs.com	55	65	12K	24.54545455\r
Oneonenews.com	31	60	8.4K	24.54545455\r
Modorganizer.com	49	60	8K	24.54545455\r
www.Technoslash.com	41	64	6.2K	24.54545455\r
Educationbeing.com	15	8	296.4K	24.54545455\r
Ssoids.com	34	45	4K	24.54545455\r
www.Newsdailyreports.com	42	65	5.7K	24.54545455\r
Protrumpnews.net	21	55	5.5K	24.54545455\r
Easybcd.org	39	54	14.7K	24.54545455\r
www.Exclusivenewstimes.com	35	56	1K	24.54545455\r
Byebyedpi.com	39	53	7.5K	24.54545455\r
Myiptv4u.com	19	30	8.7K	24.54545455\r
Theoceanofpdf.com	78	82	11.9K	24.54545455\r
Bankleave.com	10	15	6.6K	24.54545455\r
Minutebusinessnews.com	40	60	6.4K	24.54545455\r
Modeditor.org	42	25	1K	24.54545455\r
Simplegirlpic.com	8	60	3.2K	24.54545455\r
Systemsize.com	36	58	9.1K	24.54545455\r
Wifispc.org	37	54	14.8K	24.54545455\r
Iriun.org	52	64	1K	24.54545455\r
Crystaldiskmark.org	31	53	13.5K	24.54545455\r
www.Skilltechnical.com	36	60	8.6K	24.54545455\r
Wallpaperflare.net	46	57	1K	24.54545455\r
Smapidown.com	38	10	3.5K	24.54545455\r
Usaudience.com	35	50	15.7K	24.54545455\r
Technoposter.com	39	56	5.8K	24.54545455\r
Vibrancegui.org	78	80	33.1K	24.54545455\r
Sarkarisangam.net	35	44	1K	24.54545455\r
Mkvtoolnix.org	40	54	5.2K	24.54545455\r
Techdemis.org	36	53	5.9K	24.54545455\r
Eliteblassfire.com	18	52	2K	24.54545455\r
Technotram.com	40	60	9.8K	24.54545455\r
Mexicomark.com	15	9	9.2K	24.54545455\r
Stylishdp.com	39	54	4.1K	24.54545455\r
www.Queensnewsnetwork.com	20	55	7K	24.54545455\r
Mybestbio.org	40	58	3.4K	24.54545455\r
Arcarrierpoint.org	45	53	1K	24.54545455\r
www.Independentvoicenews.com	42	55	3.7K	24.54545455\r
Techkap.com	40	54	4.7K	24.54545455\r
Wintoflash.org	30	59	3.6K	24.54545455\r
Busyrush.com	31	50	8.3K	24.54545455\r
Manjarolinux.com	41	71	3.4K	24.54545455\r
Digitaldeskjournal.com	35	54	9.6K	24.54545455\r
Dotmovie.net	55	59	38.7K	24.54545455\r
Technicalpictures.com	25	60	3.6K	24.54545455\r
Techleez.co.in	39	29	5.1K	24.54545455\r
Uwatchfree.com.in	78	80	6.6K	24.54545455\r
Theresultbharat.com	30	45	5K	24.54545455\r
Redconnector.com	15	50	18K	24.54545455\r
www.Tipsform.com	40	59	4.2K	24.54545455\r
Ddlworld.com	21	25	13.3K	24.54545455\r
www.Pokewilds.com	18	55	1.7K	24.54545455\r
Weeklybusinessrecords.com	32	57	7.1K	24.54545455\r
Istaunch.net	40	53	4.2K	24.54545455\r
1Tamilmv.com.in	39	45	1.8K	24.54545455\r
Ofilmywap.com.in	38	54	2K	24.54545455\r
Eaterys101.com	40	71	1.5K	24.54545455\r
Asio4allofficial.com	75	80	1K	24.54545455\r
Usbdeview.com	38	56	4.4K	24.54545455\r
Rammap.com	41	62	12.1K	24.54545455\r
www.Stocknewsreport.com	7	4	4.6K	24.54545455\r
Freefast.co.uk	40	64	11.4K	24.54545455\r
Dropvisa.com	36	58	3K	24.54545455\r
Lankacnews.net	56	64	4.4K	24.54545455\r
Techcrude.com	10	13	12.1K	24.54545455\r
Attractivedp.com	40	54	3.4K	24.54545455\r
Sarkari-ujala.com	77	81	1K	24.54545455\r
Deskpins.com	12	10	3.4K	24.54545455\r
Toffeeshare.org	31	53	2.8K	24.54545455\r
www.Newsmakerinsider.com	36	56	8.3K	24.54545455\r
Technewstop.co.in	40	50	1.5K	24.54545455\r
Techyperfect.org	78	82	2K	24.54545455\r
Jiorockers.com.in	38	52	10.8K	24.54545455\r
Mundoapprd.org	78	81	7.9K	24.54545455\r
Bloggingnights.com	40	65	6.8K	24.54545455\r
Portcheckeronline.com	38	44	6.2K	24.54545455\r
www.Blogdoom.com	23	55	3.6K	24.54545455\r
3Dmigoto.com	35	43	3.4K	24.54545455\r
www.Dailynewsgossip.com	40	53	2.4K	24.54545455\r
Teqotech.com	5	4	5K	24.54545455\r
Fxsound.org	41	56	6.4K	24.54545455\r
Dshidmini.com	41	58	1K	24.54545455\r
Waircut.com	39	53	1K	24.54545455\r
Ddt4all.com	46	53	1.2K	24.54545455\r
51Game.com.in	15	45	27.5K	24.54545455\r
Newsblah.com	8	5	14.6K	24.54545455\r
Winpeas.com	38	54	3.2K	24.54545455\r
Filmywap.com.in	15	30	3.4K	24.54545455\r
Dustruco.org	12	34	1.6K	24.54545455\r
Vcxsrv.com	40	61	3K	24.54545455\r
Grepwin.com	5	48	2.2K	24.54545455\r
Goodbyedpi.com	41	56	1K	24.54545455\r
Dvdplay.com.in	40	55	10.6K	24.54545455\r
Mynorthwestnews.com	37	55	2.7K	24.54545455\r
www.Kidswebnews.com	75	79	1.6K	24.54545455\r
Zygisk.com	40	45	1.6K	24.54545455\r
Beautifuldp.com	78	80	6.7K	24.54545455\r
Jharupdate.net	78	82	1K	24.54545455\r
www.Seriespapaya.com.in	5	2	2.6K	24.54545455\r
www.Moviezwap.com.in	37	54	1K	24.54545455\r
Dxwnd.org	40	54	1.9K	24.54545455\r
Technicalmastermind.co.in	39	57	78.9K	24.54545455\r
Paidforarticles.org	78	82	3.5K	24.54545455\r
Officialinews.com	10	45	2.5K	24.54545455\r
Prepostseo.org	78	81	1K	24.54545455\r
Nswpolicenews.com	45	49	4.3K	24.54545455\r
Protectedtextpro.com	38	21	4.9K	24.54545455\r
Apkdone.net	78	82	1.5K	24.54545455\r
Hackintool.com	76	82	4K	24.54545455\r
Topnewsvoice.com	6	12	1.3K	24.54545455\r
Telugupalaka.com.in	39	54	4.6K	24.54545455\r
Isaidubs.com.in	41	56	1.5K	24.54545455\r
Socksdroid.com	10	15	1.5K	24.54545455\r
Czkawka.com	35	30	2.5K	24.54545455\r
Tuberankerpro.com	37	54	1.2K	24.54545455\r
Turforiginal.fr	38	39	1.2K	24.54545455\r
Istudyinfo.com.in	16	27	5.4K	24.54545455\r
Imissmycafe.net	46	51	1.3K	24.54545455\r
Tegrarcmgui.com	78	82	1.8K	24.54545455\r
Techarooma.com	6	2	5.1K	24.54545455\r
Rojgarwithankit.org	10	14	91.8K	24.54545455\r
Bluescreenview.com	39	29	6.6K	24.54545455\r
Camelcalculators.com	41	45	1.1K	24.54545455\r
Keybreach.com	41	51	4.2K	24.54545455\r
Mousecape.com	78	82	1.5K	24.54545455\r
Mobilehms.co.in	78	82	46.9K	24.54545455\r
R3nzskin.org	40	48	22.5K	24.54545455\r
Studypiece.com	5	2	4.2K	24.54545455\r
Techypure.com	37	15	43,3K	24.54545455\r
Yenzio.com	15	55	2.2K	24.54545455\r
Tamilmv.com.in	12	15	1.4K	24.54545455\r
Showkeyplus.net	78	82	1K	24.54545455\r
Moviezwaps.com.in	37	47	2K	24.54545455\r
Cuteprintablestickers.com	5	50	1.2K	24.54545455\r
Customresolutionutilities.com	41	51	1.1K	24.54545455\r
Kafdrop.com	20	32	1K	24.54545455\r
Yirafire.com	51	57	5.1K	24.54545455\r
Newasshop.com	14	23	4.2K	24.54545455\r
Simplescreenrecorder.com	37	46	1.5K	24.54545455\r
Eduuolvera.net	49	54	1K	24.54545455\r
Nohboard.com	10	15	1.6K	24.54545455\r
Dirbuster.com	5	2	1K	24.54545455\r
Steghide.com	12	28	1.4K	24.54545455\r
Soundbuttonsworld.net	40	12	1.1K	24.54545455\r
Mremoteng.com	27	34	5.5K	24.54545455\r
Uppcl.com.in	37	23	2.3K	24.54545455\r
Ibommaa.com.in	37	43	2.5K	24.54545455\r
Peaceequalizer.com	78	82	1.4K	24.54545455\r
Hoodsite.info	41	29	1K	24.54545455\r
Sshpass.com	5	3	1.2K	24.54545455\r
Technicalmastermind.com.in	78	82	1K	24.54545455\r
Ueldotech.net	13	60	3K	24.54545455\r
Loscollection.com	14	7	12.7K	34.36363636\r
Monitortribune.com	10	11	10K	37.63636364\r
Renastech.net	45	33	1K	24.54545455\r
Smoothiepussit.uk	44	36	5.6K	24.54545455\r
bbcinsider.com	41	31	3.4K	27.81818182\r
Techbombersquad.com	2	7	24K	27.81818182\r
Worldforbloggers.com	39	33	6.4K	27.81818182\r
Scoopsupdates.com	40	38	3.8K	27.81818182\r
Hyperlogicorg.com	32	29	1.3K	27.81818182\r
Childmudnets.com	40	41	1K	27.81818182\r
Beargryllsgearorg.com	40	41	1.2K	27.81818182\r
Conversationwithbianca.com	36	33	1K	27.81818182\r
Clearingdelights.com	37	36	1K	27.81818182\r
Programgeeksnets.com	36	36	1K	27.81818182\r
Somethingnewnownet.com	36	36	1.2K	27.81818182\r
Spearsstate.com	30	31	1.4K	27.81818182\r
Worldwidessciencestories.com	34	33	2.4K	27.81818182\r
Befitsnatic.com	32	31	1.4K	27.81818182\r
Forcnetorg.com	39	39	1K	27.81818182\r
Soonmagazine.co.uk	38	41	11.5K	27.81818182\r
Bodenxt.net	42	41	14.5K	24.54545455\r
Bkstone.net	42	41	13.3K	24.54545455\r
Lamps4u.net	42	41	7.8K	24.54545455\r
Renastech.net	45	37	1K	24.54545455\r
Jogezaitravertine.com	11	9	5.4K	27.81818182\r
Pokedle.us	39	41	1K	24.54545455\r
Tamildhoom.co.uk	39	41	7.6K	27.81818182\r
Buzmagazine.co.uk	42	41	9.1K	27.81818182\r
Querymagazine.co.uk	40	41	14.1K	27.81818182\r
Consolemagazine.co.uk	42	41	11.3K	27.81818182\r
Memagazine.co.uk	40	41	34.3K	27.81818182\r
Techgues.net Advance	43	38	207K	34.36363636\r
Okhatrimaza.net Advance	53	44	66.7K	34.36363636\r
Lyricsbaazaar.com Advance	37	36	241.8K	37.63636364\r
Jaalifestylelogin.com Advance	40	39	31.4K	31.09090909\r
Ddmalar.org Advance	41	39	34.7K	31.09090909\r
Now2know.com	10	10	3K	27.81818182\r
Gool24.net	21	11	21K	47.45454545\r
Globalbmicalculator.com	39	60	1.9K	27.81818182\r
Cheapguestpostingservice.com	39	60	6K	27.81818182\r
Sata-matkaa.com	40	50	4.1k	27.81818182\r
Fintechzoom.com.mx	39	49	11.5K	34.36363636\r
Itsupport-dubai.com	55	53	1K	27.81818182\r
Thefintechzoom.it.com	92	90	1K	34.36363636\r
Ventsmagazine.it.com	92	92	2.9K	31.09090909\r
Newstoday.it.com	92	40	1K	27.81818182\r
Speechfind.com	40	60	106K	24.54545455\r
Findremind.com	43	64	229.5K	24.54545455\r
Enntal.com	40	33	5.4K	24.54545455\r
Seaislenews.org	39	32	5.6K	24.54545455\r
Bigwritehook.com	39	32	2.3K	24.54545455\r
Northpennnow.org	39	32	2.3K	24.54545455\r
Uploadarticle.it.com	92	92	16.4K	27.81818182\r
Techievers.com	61	25	27.5K	27.81818182\r
Pureyummyrecipes.com	58	58	3K	40.90909091\r
Vallomagazine.com	10	57	3K	50.72727273\r
Zayvirx.com	10	58	6K	50.72727273\r
Thesaturdayblessings.com	56	60	43K	73.63636364\r
Readora.co.uk	40	57	17K	37.63636364\r
Tributeprintedpics.us	42	58	1K	34.36363636\r
Valplekar.co.uk	40	58	15K	34.36363636\r
Uktimemagazine.co.uk	41	58	24K	34.36363636\r
Usamagazinebreak.com	41	62	2K	34.36363636\r
Usamagazinebreak.co.uk	41	63	1K	34.36363636\r
Contentideators.com	14	10	105K	27.81818182\r
Uselegance.co.uk	43	26	22.8K	37.63636364\r
Nicolesteves.de	38	11	11.1K	44.18181818\r
Eduardohagn.uk	36	10	24.2K	24.54545455\r
Simple-mehndi-design.com	35	13	47.2K	24.54545455\r
Fapelli.uk	40	11	60K	24.54545455\r
Constanzemerz.com.de	33	14	20.2K	24.54545455\r
Gurumagazine.co.uk	39	10	16K	31.09090909\r
megazee.com	43	10	1K	31.09090909\r
Camocrypt.com	43	10	7.5K	44.18181818\r
Travelnester.co.uk	43	25	8.4K	37.63636364\r
Rozgamer.co.uk	42	12	7.1K	37.63636364\r
Studywisdom.co.uk	43	43	5.7K	37.63636364\r
Whatutalkingboutwilliis.com	35	10	4K	24.54545455\r
Wordhippo.org.uk	33	10	7.4K	24.54545455\r
Mufcmpb.org.uk	34	25	1K	24.54545455\r
Mufcmpb.uk	40	10	3.1K	24.54545455\r
Braflix.org.uk	40	10	7.4K	31.09090909\r
Newsbuzzz.co.uk	40	8	3.2K	31.09090909\r
Lidarmos.co.uk	38	12	6.8K	31.09090909\r
Deifokusthemen.de	41	12	5.2K	40.90909091\r
Snapinsta.fr	39	12	6.9K	40.90909091\r
Influencers-gone-wild.co.uk	37	26	6.2K	24.54545455\r
Sabiondoclub.net	35	10	9.5K	24.54545455\r
Thesimpcity.de	37	12	2.4K	44.18181818\r
Primenachrichten.de	35	8	1.9K	37.63636364\r
Bappamtv.co.uk	10	12	22K	31.09090909\r
Influencersgonewild.uk	35	10	2.2K	31.09090909\r
Total-sportek.org	40	10	1.1K	34.36363636\r
Fappeningblog.us	39	10	1.1K	31.09090909\r
Coomersu.it.com	92	92	20.9K	24.54545455\r
Performancerearends.co.uk	40	37	8.6K	24.54545455\r
Xalaflix-fr.com	40	15	1.5K	24.54545455\r
Vipbox.org.uk	1	32	3.8K	24.54545455\r
Fintechzoom-io.net	40	33	3.6K	24.54545455\r
Uniquefitscrubs.co.uk	40	37	2K	24.54545455\r
Thepropia.co.uk	40	37	3.5K	24.54545455\r
Ameisenhardt.co.uk	1	10	2.3K	24.54545455\r
Celebforum.com.de	43	89	1K	24.54545455\r
Streameastcom.de	40	33	1K	24.54545455\r
Goodmenproject.co.uk	54	2	8.5K	24.54545455\r
Altransit.co.uk	40	37	1K	24.54545455\r
Scopemagazine.co.uk	41	21	188.4K	37.63636364\r
Twirlnshapepolefitness.com	10	10	27.9K	24.54545455\r
Talkcatalyst.co.uk	16	3	8.3K	24.54545455\r
Iqwriters.com	13	10	79.1K	27.81818182\r
Konversky.co.uk	1o	2	1.1K	27.81818182\r
Primenewz.co.uk	41	56	2.1K	27.81818182\r
Sadshayariinhindi.org	40	51	5.2K	27.81818182\r
Infotechology.co.uk	42	32	5.3K	27.81818182\r
Traveljourney.blog	40	41	3K	27.81818182\r
Timespower.co.uk	40	55	24.1K	27.81818182\r
Bizzupdate.co.uk	40	55	3.3K	27.81818182\r
Itsrelease.co.uk	34	54	16.9K	27.81818182\r
Lapzoo.com	42	5	483.7K	27.81818182\r
Pearassessment.org	39	12	1.1K	27.81818182\r
Newsdescribe.com	7	2	4.7K	27.81818182\r
Therenews.com	4	2	3.8K	27.81818182\r
Techbritish.com	1	2	2.8K	27.81818182\r
Finlancespot.com	1	2	1.1K	27.81818182\r
Algeriajournal.com	39	2	5.5K	27.81818182\r
Afilmywap.com.in	12	18	1.1K	27.81818182\r
Airgeddon.com	5	6	1.4K	27.81818182\r
Antmagazine.com	5	6	6K	27.81818182\r
Apkstick.net	39	5	2K	27.81818182\r
Apkxel.net	40	8	3.4k	27.81818182\r
Appimagelauncher.com	4	10	1.1k	27.81818182\r
Bbwtech.com	39	2	2.4k	27.81818182\r
Bloglimit.com	39	2	4.6K	27.81818182\r
Boliviapost.com	39	2	2.9K	27.81818182\r
Bekirturf.fr	1	2	1.1k	27.81818182\r
Bertopic.com	6	2	1.1k	27.81818182\r
Bulgariajournal.com	40	6	6.8K	27.81818182\r
Bullshittech.com	4	9	2.6K	27.81818182\r
Zinmanga.com.in	10	8	1.2K	27.81818182\r
Xposedmagazine24.com	39	18	20.5K	27.81818182\r
Woksip.com	39	9	8.4K	27.81818182\r
Wisestocktech.com	39	2	2.4K	27.81818182\r
Visitmag.co.uk	39	55	3.3K	27.81818182\r
Londons-tv.co.uk	38	55	3.3K	27.81818182\r
Rollingloudnyc.blog	37	55	1.6K	27.81818182\r
Usabrand.co.uk	41	53	1.1K	27.81818182\r
Beaconsoft.blog	38	36	2.1K	27.81818182\r
Timespower.co.uk	40	55	15.6K	27.81818182\r
Snappyhatch.com	38	54	1K	27.81818182\r
Bloghyper.io	39	51	14.8K	27.81818182\r
Nexapulse.co.uk	42	26	16.1K	27.81818182\r
Topnetwork.blog	7	36	4.9K	27.81818182\r
Digishaktiportal.org	38	53	2.1K	27.81818182\r
Magazinewell.co.uk	39	43	8.7K	27.81818182\r
Dailyarticles.co.uk	40	43	4.3K	27.81818182\r
Techvanture.co.uk	40	45	4.5K	27.81818182\r
Littlejoyseveryday.blog	40	24	3.7K	27.81818182\r
Gracefulnews.blog	40	21	1.5K	27.81818182\r
Thoughtfullivingtoday.blog	40	25	1K	27.81818182\r
Dashgeometry.co.uk	41	31	1K	27.81818182\r
Trendlyx.co.uk	41	2	2.4K	27.81818182\r
Radianwise.com	7	10	9.2K	24.54545455\r
Vorexmedia.co.uk	10	13	3K	37.63636364\r
Thediddy.blog	15	20	52.4K	24.54545455\r
Senfic.com	6	4	18.1K	24.54545455\r
Wattspeeds.com	8	5	7.9K	24.54545455\r
Cellulogia.co.uk	12	3	8.2K	24.54545455\r
Elitefixdenture.com   Pure Dental Site	42	30	13K	57.27272727\r
Rebecca-angela.com.au	45	49	55K	57.27272727\r
Arielmagazine.co.uk	39	42	11K	24.54545455\r
Carolinatravelpop.com	40	38	25K	31.09090909\r
Thedigitalhowto.com	55	43	20K	31.09090909\r
Playerstats.org	43	45	15K	31.09090909\r
Twirlnshapepolefitness.com	16	3	31.5K	24.54545455\r
Talkcatalyst.co.uk	11	10	8.5K	24.54545455\r
Iqwriters.com	7	2	120K	27.81818182\r
Konversky.co.uk	41	21	3.1K	27.81818182\r
Baddieshun.co.uk	40	40	1k	31.09090909\r
Virtusplays.blog	38	40	5k	31.09090909\r
Smartreaderz.com	2	11	4k	31.09090909\r
Juntosseguros.info	2	12	1.2k	31.09090909\r
Britthoughts.co.uk	2	33	7.5K	27.81818182\r
Contelyx.com	1	12	1.4K	27.81818182\r
Slurmnews.co.uk	41	44	4.1K	27.81818182\r
Usaprimenews.co.uk	2	34	1.8K	27.81818182\r
Androidheadlines.co.uk	40	26	3.1K	27.81818182\r
Fashionmagzine.co.uk	1	40	2.7K	27.81818182\r
Usabuzznews.co.uk	41	17	1.1K	27.81818182\r
Journalnewsmagzine.co.uk	2	14	3.1K	27.81818182\r
Blognexa.co.uk	41	30	8.2K	27.81818182\r
Magflux.co.uk	41	30	1.9K	27.81818182\r
Techmagzines.co.uk	2	33	1K	27.81818182\r
Digitalmagaizne.co.uk	1	53	2.1K	27.81818182\r
Techinfozine.co.uk	1	36	7.5K	27.81818182\r
Magazineinsight.co.uk	41	33	1.4K	27.81818182\r
Gicozijerzu.blog	2	30	14.4K	27.81818182\r
Futurebyteblog.com	1	43	1K	27.81818182\r
Usaentirenews.co.uk	41	38	9.5K	27.81818182\r
Rtp-jostoto.com	25	16	88.8K	27.81818182\r
Koriandri.co.uk	41	47	2.5K	27.81818182\r
Turbofeast.co.uk	40	43	1.8K	27.81818182\r
Ppvlandd.co.uk	41	27	3.5K	27.81818182\r
Guidemagazines.co.uk	40	27	4.3K	27.81818182\r
Coolkingzone.co.uk	39	58	1.9K	27.81818182\r
Bigmagazines.com	39	54	1K	27.81818182\r
Uploadarticlecom.org	2	32	1.4K	27.81818182\r
Techyquora.com	38	44	1K	27.81818182\r
Bioreed.co.uk	38	42	1K	27.81818182\r
Usaweekli.com	40	3	1K	27.81818182\r
Narutosenki.blog	3	28	1.1K	27.81818182\r
Wikbuzz.co.uk	40	50	3.4K	27.81818182\r
Techyfuds.co.uk	40	50	2.3K	27.81818182\r
Sports-international.co.uk	1	50	1K	27.81818182\r
Tamildhoms.org.uk	41	31	1.3K	27.81818182\r
Theslowlanelife.blog	37	52	1.9K	27.81818182\r
Iotavalley.co.uk	32	29	1K	27.81818182\r
Okaymagazine.co.uk	2	53	5.4K	27.81818182\r
Samsodisha.co	33	28	2.8K	27.81818182\r
Thebossmagazine.co.uk	43	33	1.6K	27.81818182\r
Artaverse.co.uk	40	53	1k	27.81818182\r
Xizdouyriz0.com	37	32	2.5K	27.81818182\r
Infobuzzzone.co.uk	42	52	1K	27.81818182\r
Blogsinfos.com	37	33	1K	27.81818182\r
Explorenews.co.uk	37	34	1.1K	27.81818182\r
Wheoncricket07.com.in	41	53	1.3K	27.81818182\r
Street63.com	17	25	116K	40.90909091\r
Wikimagazines.co.uk	40	10	1K	27.81818182\r
Wixira.com	10	51	3K	40.90909091\r
Findnamez.com	10	61	8K	57.27272727\r
Prayerhopebible.com	40	44	2K	40.90909091\r
Newsharbour.co.uk	43	10	7K	31.09090909\r
Brightpulse.co.uk	42	10	3.5K	24.54545455\r
Sddmagazine.co.uk	39	12	12K	24.54545455\r
Whatutalkingboutwilis.blog	41	39	12.5K	27.81818182\r
Fameperson.com	38	11	10.1K	34.36363636\r
Worldfluxora.com	39	18	6.7K	34.36363636\r
Betterthisfacts.us	42	10	3.4K	34.36363636\r
Kourtneykardashian.co.uk	39	10	2.4K	34.36363636\r
Thekongotech.blog	40	10	2.4K	34.36363636\r
Urbanglowmatter.com	40	10	1.8K	34.36363636\r
Techfivers.com	40	10	1.8K	34.36363636\r
Theundergrowthgameline.com	39	9	1.6K	34.36363636\r
Prohomeinsight.com	39	2	2K	34.36363636\r
Mysananton.com	39	20	1.4K	34.36363636\r
Homecraftwise.com	31	10	1.6K	34.36363636\r
Ustimemag.com	42	10	1K	34.36363636\r
Worldverses.com	41	6	1.8K	34.36363636\r
Thedualmedia.com	31	10	1.2K	34.36363636\r
Feastlemagazine.com	40	9	1.1K	34.36363636\r
Worldnewsbrake.com	39	6	1K	34.36363636\r
Decoratorsadvice.net	40	19	1K	34.36363636\r
Scookievent.net	39	9	5.6K	31.09090909\r
Jalbitedrinks.org	20	17	3.2K	31.09090909\r
Theweeklyspooncom.org	21	21	1.1K	37.63636364\r
Bratishnewz.co.uk	25	26	12.5K	27.81818182\r
Usefularticle.co.uk	41	53	1K	27.81818182\r
Usnewz.co.uk	20	53	1.9K	27.81818182\r
Sams-odisha.com	41	53	3.3K	27.81818182\r
Techtimebsiness.co.uk	40	52	1.3K	27.81818182\r
Bigtrendnew.com	40	52	1K	27.81818182\r
Fourmagazine.blog	40	5	2.7K	27.81818182\r
Todayusmag.blog	41	23	1K	27.81818182\r
Twastia.co.uk	38	41	1.7K	27.81818182\r
Edittime.co.uk	3	54	8.2K	27.81818182\r
Brandpepole.co.uk	37	22	1K	27.81818182\r
Dippermag.co.uk	41	32	2.8K	27.81818182\r
Infonesthub.co.uk	1	34	1K	27.81818182\r
Magtechia.co.uk	2	40	4.8K	27.81818182\r
Fudholyvaz.org	34	37	2.4K	27.81818182\r
Fudholyvaz.co.uk	41	59	1K	27.81818182\r
Mahoragajjk.co.uk	41	39	1.1K	27.81818182\r
Ibaw.net	15	5	25K	40.90909091\r
Rawqan.com	39	29	2K	40.90909091\r
Dougmacart.com	17	5	7K	40.90909091\r
Graaldepot.com	22	5	2K	40.90909091\r
Therealcuisine.com	40	5	27K	40.90909091\r
Familyhcm.com	38	5	10K	40.90909091\r
Dreamriter.com	41	9	9K	40.90909091\r
Carolinatanplus.com	39	5	1K	40.90909091\r
Kingstreetjax.com	38	5	14K	40.90909091\r
Insiders-news.com	11	22	117K	44.18181818\r
Joltvellum.co.uk	41	44	38K	34.36363636\r
Phoneswag.co	17	21	3K	34.36363636\r
Pasonet.org	41	33	8K	34.36363636\r
Senaven.com	41	33	5.2K	31.09090909\r
Dsp-academy.com	6	18	136K	37.63636364\r
Axurbain.co.uk	42	39	40K	27.81818182\r
Infomagzinely.com	43	39	12.3K	24.54545455\r
Thegoldendoods.com	10	10	7K	37.63636364\r
Viraltips.online	39	16	45K	47.45454545\r
Tropicallyrooted.com	10	10	16K	37.63636364\r
270reasons.com	17	28	19K	57.27272727\r
Glolights.co	38	53	12K	37.63636364\r
Squishyholic.com	37	10	30K	40.90909091\r
Barreltactical.com	10	10	7K	47.45454545\r
Throwiepillow.com	40	57	5K	37.63636364\r
Billyokeyo.com	16	26	2K	47.45454545\r
Classicnailsco.com	10	10	4K	37.63636364\r
Amberkellbooks.com	12	12	3K	37.63636364\r
Alinacollective.com	35	10	19K	37.63636364\r
Chloenail.com	40	23	60K	44.18181818\r
Valentinanewyork.com	38	13	32K	37.63636364\r
Fd40.com	37	21	42K	37.63636364\r
Nestivomagazine.co.uk	39	65	10K	34.36363636\r
Magaprime.co.uk	39	65	4K	34.36363636\r
Techeprime.co.uk	39	65	1K	34.36363636\r
Primebreak.co.uk	39	65	2K	34.36363636\r
Circlemagazine.co.uk	41	48	27K	27.81818182\r
Droppost.co.uk	40	48	4K	27.81818182\r
Glorypost.co.uk	10	10	77K	27.81818182\r
Mindcarecounselling.org Pure Health	10	24	1K	57.27272727\r
Boldmagazine.co.uk	40	40	1K	27.81818182\r
Rightfuladvice.com Pure Law	39	46	2K	57.27272727\r
Uploadblog.org	11	7	15K	31.09090909\r
Redeemaibot.com	39	33	1K	31.09090909\r
itsnewztalkies.com.in	11	11	1K	31.09090909\r
Thematchplaystats.co.uk	31	28	13K	31.09090909\r
Darnouryah.com	12	11	63K	40.90909091\r
Traxsocial.com	17	17	165K	40.90909091\r
Whatutalkingboutwilis.com	38	63	42.2k	50.72727273\r
Uitly.in	40	28	665.4K	50.72727273\r
Artaverses.org	40	33	1.2K	50.72727273\r
Ollyhib.co.uk	40	49	14.2K	50.72727273\r
Qevafaginz.com	40	8	2K	50.72727273\r
Artaverse.in	32	39	34.2K	50.72727273\r
shayarime.com	40	45	2.7K	50.72727273\r
Livepostly.com	32	56	1K	50.72727273\r
Techlokeshs.com	38	45	200	50.72727273\r
Policymarketer.com	40	22	1K	50.72727273\r
Biographyainfo.com	40	27	24.8K	50.72727273\r
Gkgsinhindicom.in	40	45	1K	50.72727273\r
R0ll20armor.com	37	48	1K	50.72727273\r
Harmonicodesports.com	40	40	1K	50.72727273\r
Inarng.com	40	10	700K	27.81818182\r
Fbcblackshear.org	39	10	6K	27.81818182\r
Gleamze.com	42	42	2K	40.90909091\r
Biomagazine.co.uk	35	27	8K	27.81818182\r
Littledbrewfest.com	40	29	18K	44.18181818\r
Fortunemagazine.co.uk	41	29	3K	37.63636364\r
Vintageposts.co.uk	34	16	2K	27.81818182\r
Endeavourarticle.co.uk	42	31	3.5K	37.63636364\r
Thetoongod.us	35	55	2K	24.54545455\r
Polytrack.uk	34	31	3.2K	27.81818182\r
Biologyterminology.com	6	10	1K	27.81818182\r
Dailycelebs.co.uk	38	51	2.6K	27.81818182\r
Pressmsn.com	42	36	5.4K	31.09090909\r
Ex-press.co.uk	42	37	2K	24.54545455\r
Jernsenger.com	40	52	42K	27.81818182\r
Theopenspark.com	25	53	7.4K	27.81818182\r
Bloggrowth.co.uk	42	10	39K	27.81818182\r
Digitalpure.uk	40	10	9K	27.81818182\r
Bodenxt.org	36	29	12K	27.81818182\r
Gypsyhandmade.com	41	65	42K	44.18181818\r
Verifiedbusinessnews.org	41	45	26K	27.81818182\r
Aaryaeditzorg.net	41	55	7.1K	27.81818182\r
Mitchnewscom.com	41	55	5.2K	27.81818182\r
Tudiocaqcon.com	41	59	2.7K	27.81818182\r
Factreader.net	41	65	2.4K	27.81818182\r
Newsheadlinesdaily.org	41	50	2.1K	27.81818182\r
Wwwredandwhitemagz.com	41	50	1.7K	27.81818182\r
Newscrane.org	41	65	1.5K	27.81818182\r
Dianaandr3a.net	41	41	1.3K	27.81818182\r
Rcnguidecom.com	41	52	1.2K	27.81818182\r
Fullimediacom.org	41	52	1.1K	27.81818182\r
Fullimediacom.net	41	64	1K	27.81818182\r
Opsbarsartama.org	41	52	1.5K	27.81818182\r
Techmapzcom.org	41	42	1K	27.81818182\r
Www-rcnguide.com	41	50	1K	27.81818182\r
Digitalmhsbfirm.com	41	50	1K	27.81818182\r
Dianaandr3a.com	41	50	1K	27.81818182\r
Linknoir.com	41	50	1K	27.81818182\r
Poetryseries.com	41	52	1K	27.81818182\r
Dianaandr3a.org	41	50	1K	27.81818182\r
Digitalmhsb.com	41	52	1K	27.81818182\r
Techtvhubcom.net	41	51	1K	27.81818182\r
Cookapeorg.com	41	50	1K	27.81818182\r
Naxtalgroup.com	41	50	1K	27.81818182\r
Digitalnewsweb.com	41	55	1K	27.81818182\r
Newscrane.net	41	59	1K	27.81818182\r
Newsheadlinesdaily.net	41	55	1K	27.81818182\r
Newspagebuilder.net	41	51	1K	27.81818182\r
Cookapeorg.net	41	56	1K	27.81818182\r
Numlookup.net	41	50	1K	27.81818182\r
Techmapzcom.net	41	51	1K	27.81818182\r
Cookapeorg.org	41	50	1K	27.81818182\r
Optimistindiacom.org	41	50	1K	27.81818182\r
Cyberkannadignet.com	41	50	1K	27.81818182\r
Multinationalhub.com	41	52	1K	27.81818182\r
Technofeecom.net	41	52	1K	27.81818182\r
Technofeecom.org	41	50	1K	27.81818182\r
Factreader.org	41	41	1K	27.81818182\r
Optimistindiacom.net	41	59	1K	27.81818182\r
Verifiedbusinessnews.net	41	50	1K	27.81818182\r
Naxtal.com	41	52	1K	27.81818182\r
Weedblog.org	41	12	1K	27.81818182\r
Sinknewscom.net	41	50	1K	27.81818182\r
Sansize.com	41	50	1K	27.81818182\r
Sinknewscom.org	41	50	1K	27.81818182\r
Techmapzcom.com	41	50	1K	27.81818182\r
Disgntech.com	41	50	1K	27.81818182\r
Techofdigit.com	41	50	1.3K	27.81818182\r
Voozon.blog	41	50	5.1K	27.81818182\r
Prayergalaxys.com	42	35	10.5k	40.90909091\r
Punsnest.com	42	36	27.7K	50.72727273\r
Grammarwaves.com	44	43	10.1K	50.72727273\r
Historicallives.com	43	42	2.9K	40.90909091\r
Birthdaymarathiwish.com	43	41	127.7K	50.72727273\r
Marathicaptions.com	43	41	52.1K	40.90909091\r
Fontstylename.com	43	42	5.8K	40.90909091\r
Fscsearchtsin.com	58	35	273.7K	40.90909091\r
Theudiseplus.com	58	37	85.3K	40.90909091\r
Nudixfun.net	56	33	273.7K	40.90909091\r
Biblenests.com	40	33	4.1K	40.90909091\r
Puncrush.com	59	33	2.6K	40.90909091\r
Replymastery.com	52	33	22.4K	40.90909091\r
Suggestwave.com	40	33	10.9K	40.90909091\r
Scoopmeadow.com	40	33	18.5K	40.90909091\r
Skystarlovers.com	39	33	2.2K	40.90909091\r
Captiontap.com	39	33	2.3K	40.90909091\r
Aurawordss.com	45	37	8.6K	40.90909091\r
Celebcluch.com	54	17	2.8K	40.90909091\r
Instaglowz.com	39	33	3.5K	40.90909091\r
Shayarihubz.com	39	33	3.9K	40.90909091\r
Blessingandshine.com	39	33	2K	40.90909091\r
Prayeeeers.com	40	33	7.9K	40.90909091\r
Blessingsaura.com	40	33	4.5K	40.90909091\r
Skyavon.com	40	33	3.8K	40.90909091\r
Americagoodsky.com	56	33	2.4K	40.90909091\r
Autoguidepoint.com	43	35	21.9K	40.90909091\r
Englishwritingguide.com	43	33	53.1K	40.90909091\r
Nabannascholarship.com	41	33	2.4K	40.90909091\r
Mymagazinehub.com	43	33	3.7K	40.90909091\r
Famesmagazine.com	42	33	2.4K	40.90909091\r
Aavot.in	44	45	45.5K	50.72727273\r
Ilovebio.in	40	39	6.4K	40.90909091\r
Messagescity.com	43	40	16.2K	40.90909091\r
Msgfantacy.com	42	41	1.8K	40.90909091\r
Smartsimregistrations.ph	45	43	2.5K	40.90909091\r
Andaazshayari.com	41	50	3.9K	40.90909091\r
Twastia.com	44	44	19.6K	50.72727273\r
Milomagazine.co.uk	42	41	15.2K	40.90909091\r
Ipsaya.org	45	43	18K	50.72727273\r
Instawalabio.com	43	41	9.6K	40.90909091\r
Starsboundry.com	42	42	2.9K	50.72727273\r
Ventomagazies.com	42	42	399	40.90909091\r
Simileverse.com	58	35	886	40.90909091\r
Metacaptions.com	39	33	399	40.90909091\r
Trueheartblessings.com	39	33	341	40.90909091\r
9xfllix.com	44	38	83.9K	40.90909091\r
Synonymshack.com	39	50	3.3K	50.72727273\r
Ingleash.com	43	43	1.4K	50.72727273\r
Thealite.com	44	48	25.4K	40.90909091\r
Goofyahhpicture.com	44	50	1.8K	40.90909091\r
Commonreplies.com	43	44	1.5K	40.90909091\r
Insta-pro2.com.in	43	41	31.2K	70.36363636\r
Chiclymagazine.com	40	35	1.3K	40.90909091\r
Influncersgonewild.net	42	39	2.3K	40.90909091\r
Whatagrouplinks.com	43	51	1.2K	40.90909091\r
Pcsx2bios.com	41	51	44K	63.81818182\r
Antarj.com	40	34	11.8K	40.90909091\r
Celebritesmagazine.fr	40	34	3K	70.36363636\r
Shivchalisahindi.com	39	50	4.7K	40.90909091\r
Pngfre.com	44	44	10.1K	40.90909091\r
Aloneshayari.com	43	50	3K	40.90909091\r
Prayerfulvibes.com	42	51	2.5K	70.36363636\r
Qttar.com	44	45	3.1K	40.90909091\r
Flowersnames.info	47	44	1.9K	40.90909091\r
Photosmint.com	43	50	3K	40.90909091\r
Azimages.org	40	34	1.5K	40.90909091\r
Birthdaywishmarathi.com	44	43	2.5K	50.72727273\r
Buscadordeestatus.com.mx	41	49	1.1K	40.90909091\r
Indianshayaris.com	40	51	2.9K	40.90909091\r
Blackshayari.com	40	34	8.9K	40.90909091\r
Viscoapk.com	41	35	9.9K	40.90909091\r
Marathibabynames.com	40	34	15.5K	40.90909091\r
Haunteddormmodapk.com	41	37	1.6K	40.90909091\r
Sohohindi.org	39	51	3.7K	40.90909091\r
Bhootkikahani.com	43	42	7.6K	40.90909091\r
Sadshayri.net	42	51	7.9K	40.90909091\r
Sadgirldp.com	43	51	3.2K	40.90909091\r
Easycpstest.com	39	52	1.1K	57.27272727\r
Apnetv.com.au	42	51	8.9K	40.90909091\r
Francobuzz.fr	43	39	3.2K	40.90909091\r
Whatnetwork.ph	44	51	6.1K	50.72727273\r
Photosfile.com	45	44	2.4K	40.90909091\r
Profouadwa.com	43	50	8.5K	40.90909091\r
Valeurnette.fr	44	52	1.3K	50.72727273\r
Theurdupoetry.pk	44	39	3.2K	40.90909091\r
Mgnregajobcardlist.com	58	50	1.7K	40.90909091\r
Bollly4u.com	45	37	2.9K	40.90909091\r
Selfshayari.com	40	39	2.5K	40.90909091\r
Biostarsworld.com	43	50	1K	40.90909091\r
Honista.com.in	9	15	4.1K	40.90909091\r
Shayarihindishayari.in	42	42	1.2K	40.90909091\r
Aavotx.com	63	51	3.6K	40.90909091\r
Photosly.net	40	32	1.3K	40.90909091\r
Yaarishayari.com	44	39	16.1K	40.90909091\r
Hitnews.co.uk	39	44	12K	27.81818182\r
Romanticpickups.com	10	10	5K	40.90909091\r
Briefscope.co.uk	10	10	15K	37.63636364\r
Tamilprint.net	10	10	21K	27.81818182\r
Theflixer.net	10	10	66K	37.63636364\r
Tamilprintmob.net	10	35	10K	27.81818182\r
Tomato-apk.com	10	10	1.2K	27.81818182\r
Dotmagazine.blog	10	12	95.7K	27.81818182\r
Techypaper.blog	10	10	133K	27.81818182\r
Coinsnaps.co.uk	40	10	5K	27.81818182\r
Globaltimenews.co.uk	40	10	3.8K	27.81818182\r
Drovenio.co.uk	17	10	2.4K	27.81818182\r
Westernsk.com	4	10	2.2K	27.81818182\r
Tovisitvuzillfotsps.uk	10	10	5.2K	27.81818182\r
Melissamontagnole.com	12	10	7.6K	27.81818182\r
Newsgigas.co.uk	10	10	2.2K	27.81818182\r
Contentloop.co.uk	10	10	1K	27.81818182\r
Biztrendmag.co.uk	42	10	1.3K	27.81818182\r
Dualmedia.blog	10	10	1.1K	27.81818182\r
Newztop.co.uk	10	10	2.5K	27.81818182\r
Sparkpressfusion.us	12	10	2.8K	27.81818182\r
Nexusdigitalnews.co.uk	32	10	1k	27.81818182\r
Howtonetwork.blog	33	10	1k	27.81818182\r
Digitalinsightmedia.co.uk	10	10	3.1K	27.81818182\r
Axurbain.co.uk	43	10	1K	27.81818182\r
Sewayojanportals.com	10	10	5.6K	27.81818182\r
Jalbiteblog.pro	10	10	3.2K	27.81818182\r
8thpaycommissionsalarycalculators.org	10	20	1K	27.81818182\r
Eurogamersonline.one	10	10	5.1K	27.81818182\r
Unsentsmessageproject.com	10	10	1.3K	27.81818182\r
Roarleveraging.blog	42	10	1.1K	27.81818182\r
Traveltweak.blog	42	10	4.1K	27.81818182\r
Ptaa.co.uk	33	10	1.7K	27.81818182\r
Myupload.blog	42	12	12K	27.81818182\r
Feedbuzzard.blog	39	12	1.1K	27.81818182\r
Vezgieclaptezims.blog	42	12	1.5K	27.81818182\r
Visitlynews.com	40	12	4.2K	27.81818182\r
Diazandsonsconstruction.com	42	12	1K	27.81818182\r
Thibecsproduction.com	42	20	1.3K	27.81818182\r
Acadomi.co.uk	10	10	1.3K	27.81818182\r
Wwe-gonzay.com	40	12	1K	27.81818182\r
Bitficient.com	10	12	2.1K	27.81818182\r
Techypure.uk	41	10	1K	27.81818182\r
Audleysvillages.co.uk	34	10	1.2K	27.81818182\r
Lucknamepark.co.uk	34	10	1K	27.81818182\r
Lifesycles.co.uk	34	13	3.6K	27.81818182\r
Fencetechnj.com	10	13	2.2K	27.81818182\r
50statesblog.com	41	10	1.1K	27.81818182\r
Blogmora.co.uk	10	10	3.4K	27.81818182\r
Feedsmagazine.co.uk	10	10	1K	27.81818182\r
Worldbriefing.co.uk	41	10	4.7K	27.81818182\r
Primemagzine.co.uk	10	10	1K	27.81818182\r
Businessinfoplus.co.uk	42	14	1.8K	27.81818182\r
Techtimebusiness.co.uk	10	14	1K	27.81818182\r
Techbreaking.co.uk	41	14	1K	27.81818182\r
Magazineorbit.co.uk	40	14	15K	27.81818182\r
Webnewz.blog	33	13	7.2K	27.81818182\r
Subarru.co.uk	33	13	1.1K	27.81818182\r
Eonmusics.co.uk	30	15	1K	27.81818182\r
Quickbio.co.uk	32	15	1K	27.81818182\r
Boundsless.co.uk	32	15	1K	27.81818182\r
Bllog.co.uk	40	42	2K	27.81818182\r
Blogeen.co.uk	42	50	4K	27.81818182\r
Indranilbanerjee.co.in	37	10	4K	40.90909091\r
Petnplants.com	10	10	1K	40.90909091\r
Earthupsite.com	10	10	1K	40.90909091\r
News2world.com	10	10	1K	40.90909091\r
Wisecaption.com	10	20	6.5K	31.09090909\r
Holyserenityprayer.com	10	60	16K	50.72727273\r
Nandosmenuuk.com	12	63	4K	40.90909091\r
Smartresponces.com	15	66	6K	50.72727273\r
Prayerspeace.com	18	63	3K	40.90909091\r
Namesslection.com	25	66	5K	40.90909091\r
Engleish.com	21	66	48K	50.72727273\r
Wordypuns.com	40	64	7K	50.72727273\r
Topzeitung.de	43	65	18K	34.36363636\r
Businessesmag.com	30	35	1K	34.36363636\r
Adventureme.com.au	35	30	1K	57.27272727\r
Popbuzzarena.com	8	12	4.2K	24.54545455\r
Ftevent.it.com	93	48	5K	37.63636364\r
Bcece.com.in	39	25	440	24.54545455\r
51Game.com.in	41	19	45.1K	24.54545455\r
Situsgacorgbowin.com	40	21	1K	24.54545455\r
Slotgacorjapri138.com	39	23	1.7K	24.54545455\r
Itechgues.com	37	25	7.2K	24.54545455\r
Moviezwaps.com.in	40	17	1.2K	24.54545455\r
Kakupressapp.com	43	30	2K	24.54545455\r
Pearassessment.org	40	25	1.5K	24.54545455\r
Nexttoppers.org	12	23	1K	24.54545455\r
Wealthofceo.com	32	36	3.2K	24.54545455\r
Filmyzilla2023.net	11	7	6M	40.90909091\r
Theblogasm.com	11	12	19K	27.81818182\r
Wordleanswer.co.uk	42	33	120K	31.09090909\r
Worldnewsresearch.org	50	40+	78.8K	24.54545455\r
Newshart.org	51	40+	51.3K	24.54545455\r
Abovethink.org	30	40+	44.6K	24.54545455\r
Infohist.org	47	40+	44.2K	24.54545455\r
Tropicalcyclonenews.org	47	40+	32.6K	24.54545455\r
Virtualdailynews.org	44	40+	31.9K	24.54545455\r
Hadlog.org	38	40+	31.8K	24.54545455\r
Sidedtech.org	48	40+	25.8K	24.54545455\r
Businessjournalgroup.org	40	40+	24.9K	24.54545455\r
Motiontechno.org	48	40+	24.0K	24.54545455\r
Newsmediaidentity.org	40	40+	22.3K	24.54545455\r
Businessfrontpage.org	38	40+	21.8K	24.54545455\r
Techadaptor.org	48	40+	20.2K	24.54545455\r
Macrowebtech.org	48	40+	16.8K	24.54545455\r
Techdevan.org	38	40+	16.5K	24.54545455\r
Timesloom.org	48	40+	16.4K	24.54545455\r
Bralad.org	48	40+	14.7K	24.54545455\r
Covermove.org	38	40+	12.6K	24.54545455\r
Techsslaash-com.co.uk	48	40+	12.0K	24.54545455\r
Newsletterissues.org	38	40+	10.3K	24.54545455\r
Wrongroadmap.org	48	40+	10.3K	24.54545455\r
Newscloude.org	39	40+	10.0K	24.54545455\r
Turfmagique.co.uk	53	40+	9.7K	24.54545455\r
Photoscompangante.com	55	40+	9.4K	24.54545455\r
Newsremove.org	41	40+	9.3K	24.54545455\r
Forceoneturf.net	52	40+	8.6K	24.54545455\r
Fideleturfgagnant.org	51	40+	8.1K	24.54545455\r
Zlomecom.com	30	40+	8.1K	24.54545455\r
Jepturf-turf.co.uk	53	40+	7.1K	24.54545455\r
Gagnantturf.net	52	40+	6.5K	24.54545455\r
Pikturf.co.uk	53	40+	6.0K	24.54545455\r
Ecuriegagnant.net	54	40+	5.8K	24.54545455\r
Ueldomesquita.co.uk	46	40+	5.0K	24.54545455\r
Turflogique.net	53	40+	4.9K	24.54545455\r
Bosse-turf.org	53	40+	4.8K	24.54545455\r
Realtimebusinessnews.org	39	40+	4.6K	24.54545455\r
Openhardwaremonitors.net	30	40+	4.4K	24.54545455\r
Turfwinner.org	40	40+	4.4K	24.54545455\r
Feestechcom.com	32	40+	4.3K	24.54545455\r
Educationalroot.org	47	40+	4.3K	24.54545455\r
Systemsize.org	42	40+	4.0K	24.54545455\r
Lafiliere65.net	48	40+	3.4K	24.54545455\r
Portalnewsletter.net	32	40+	2.8K	24.54545455\r
Notontech.net	38	40+	2.7K	24.54545455\r
Technobeings.org	49	40+	2.2K	24.54545455\r
Techsslashcom.net	43	40+	2.2K	24.54545455\r
Filiereturf.co.uk	53	40+	2.2K	24.54545455\r
Turfgagnant.org	40	40+	2.2K	24.54545455\r
Hindiblogindia.co.uk	47	40+	2.1K	24.54545455\r
Turf-magique.org	44	40+	2.1K	24.54545455\r
Wolni-turf.co.uk	52	40+	1.9K	24.54545455\r
Headlinebusinessnews.org	48	40+	1.8K	24.54545455\r
Totoking111com.org	48	40+	1.8K	24.54545455\r
Chandigarhmetro.net	41	40+	1.8K	24.54545455\r
Vosizneias.net	40	40+	1.7K	24.54545455\r
Singletopicnews.org	44	40+	1.5K	24.54545455\r
Turflibre.net	44	40+	1.4K	24.54545455\r
Bosseturf.net	51	40+	1.4K	24.54545455\r
Officialbusinessnews.org	48	40+	1.4K	24.54545455\r
Teditonline.org	32	40+	1.4K	24.54545455\r
Newsmagazineweekly.org	38	40+	1.3K	24.54545455\r
Theboredpanda.org	35	40+	1.3K	24.54545455\r
Gazettedupmu-2.org	44	40+	1.2K	24.54545455\r
Esprit-turf.org	44	40+	1.1K	24.54545455\r
3gagnantspmu.org	44	40+	1.1K	24.54545455\r
Figaropmu.com	44	40+	1.1K	24.54545455\r
Taskbarx.com	39	40+	1.1K	24.54545455\r
Alaikas.org	39	40+	1K	24.54545455\r
Mangabtt.co.uk	48	40+	1K	24.54545455\r
Radammcom.com	46	40+	1K	24.54545455\r
Gazette-pmu.net	44	40+	1K	24.54545455\r
Force-turf.org	52	40+	1K	24.54545455\r
Hopetraveler.org	41	40+	1K	24.54545455\r
Lebosse-du-turf.com	44	40+	1K	24.54545455\r
Arcenturf-pro.co.uk	44	40+	1K	24.54545455\r
Proxiyum.co.uk	38	40+	1K	24.54545455\r
Yashuura.net	32	40+	1K	24.54545455\r
Belle-turf.org	48	40+	16.6K	24.54545455\r
Techguporg.org	48	40+	16.3K	24.54545455\r
Itsnewztalkies.org	53	40+	16.0K	24.54545455\r
Techguporg.com	48	40+	15.5K	24.54545455\r
Winnerturf.co.uk	53	40+	13.6K	24.54545455\r
Furtherbusinesscom.com	53	40+	10.5K	24.54545455\r
Rankmyposts.net	53	40+	10.4K	24.54545455\r
Courseoriginal.org	53	40+	8.1K	24.54545455\r
Infoordre.co.uk	48	40+	7.2K	24.54545455\r
Championdescourses.net	53	40+	5.0K	24.54545455\r
Rankmyposts.org	48	40+	4.3K	24.54545455\r
Wolni-turf.net	48	40+	4.2K	24.54545455\r
Les4gagnants.net	53	40+	3.1K	24.54545455\r
Turf-magazine.co.uk	53	40+	3.0K	24.54545455\r
Couloirgagnants.com	53	40+	3.0K	24.54545455\r
Buffalocourse.co.uk	53	40+	2.9K	24.54545455\r
Technewsmonk.net	48	40+	2.4K	24.54545455\r
4gagnants.net	53	40+	2.3K	24.54545455\r
Echoturfgagnant.net	53	40+	2.2K	24.54545455\r
Technofee.org	53	40+	2.0K	24.54545455\r
Esprit-turf.co.uk	53	40+	2.0K	24.54545455\r
Francechevalturfvip.org	48	40+	2.0K	24.54545455\r
Gazettepmu-2.com	48	40+	1.9K	24.54545455\r
Technewsmonkcom.com	48	40+	1.9K	24.54545455\r
Aaryaeditzorg.org	53	40+	1.8K	24.54545455\r
X6turf.co.uk	53	40+	1.7K	24.54545455\r
Miroir-pmu.net	53	40+	1.4K	24.54545455\r
Force-turf.net	53	40+	1.3K	24.54545455\r
Retourgagnant.net	53	40+	1.2K	24.54545455\r
La-gazettedupmu.net	46	40+	1.2K	24.54545455\r
Itsnewztalkies.co.uk	53	40+	1.1K	24.54545455\r
Techabbey.co.uk	53	40+	1K	24.54545455\r
Turf-universel.co.uk	48	40+	1K	24.54545455\r
Champion-des-courses.co.uk	53	40+	1K	24.54545455\r
Championdescourses.org	48	40+	1K	24.54545455\r
Ivanaturf-turf.co.uk	48	40+	1K	24.54545455\r
Newsgigacom.com	40	40+	8.3K	24.54545455\r
Zoromia.org	49	40+	5.1K	24.54545455\r
Nulookindiacom.org	67	40+	4.6K	24.54545455\r
Irishbreakingnews.net	54	40+	4.5K	24.54545455\r
Sattazcom.com	47	40+	4.4K	24.54545455\r
Techsized.net	39	40+	3.1K	24.54545455\r
Paksimdata.org	0	40+	2.8K	24.54545455\r
Rozunonzahon.com	53	40+	2.8K	24.54545455\r
Travelwarningnews.net	50	40+	2.8K	24.54545455\r
Earnstark.org	49	40+	2.2K	24.54545455\r
9xfllix.net	52	40+	2.1K	24.54545455\r
Techidemics.org	32	40+	1.9K	24.54545455\r
Rickkaepernick.net	52	40+	1.8K	24.54545455\r
Yatrucoff.co.uk	49	40+	1.7K	24.54545455\r
Bletixcom.com	48	40+	1.6K	24.54545455\r
Korfiatiko.net	50	40+	1.3K	24.54545455\r
Insurancemedianews.co.uk	53	40+	1.1K	24.54545455\r
Wingetui.co.uk	49	40+	1.1K	24.54545455\r
Christinacarano.net	49	40+	1.1K	24.54545455\r
Nsnewsindia.co.uk	49	40+	1K	24.54545455\r
Mediumbloggers.co.uk	50	40+	1K	24.54545455\r
Techidemicscom.com	48	40+	1K	24.54545455\r
Starmusiq.co.uk	41	40+	1K	24.54545455\r
Shayarisinhindi.com	51	40+	1K	24.54545455\r
Pajskkpm.com	54	40+	1K	24.54545455\r
Radammcomjamaica.org	50	40+	1K	24.54545455\r
Shayarimela.com	49	40+	1K	24.54545455\r
Akipthwgames.net	47	40+	1K	24.54545455\r
Myclassnews.co.uk	49	40+	1K	24.54545455\r
Factsreadercom.com	49	40+	1K	24.54545455\r
Thetechslassh.com	13	16	34K	24.54545455\r
Lifestyl.blog	42	18	10K	24.54545455\r
Heritageonthehill.co.uk	46	54	4K	24.54545455\r
Menuswall.com	42	54	1K	24.54545455\r
Net-city.co.uk	55	54	1K	24.54545455\r
Sycegameshack.com	38	15	2K	24.54545455\r
Itwordsearch.net	38	24	9K	24.54545455\r
Theprestonmagazine.com	41	52	39K	40.90909091\r
Orbitalmagazine.co.uk	10	45	2.7K	27.81818182\r
Biliumnews.co.uk	7	5	12.4K	37.63636364\r
Yourtopicsmultiplestoriess.com	43	24	9.8K	24.54545455\r
Nacht.co	43	52	59.6K	34.36363636\r
Www.Honeypainhatco.com	40	51	39.6K	37.63636364\r
Marcorepublic.com	41	52	29.4K	34.36363636\r
Promidaten.de	5	2	2.7K	40.90909091\r
www.Genxrefined.com	10	15	87.8K	44.18181818\r
Blessifydaily.com	33	15	15K	31.09090909\r
Worthinsights.com	42	39	3K	27.81818182\r
Gonzay.it.com	93	54	5K	31.09090909\r
Suppermagazines.co.uk	39	52	10K	27.81818182\r
Starstorytime.com	10	14	3K	27.81818182\r
Techdailyjournal.co.uk	39	60	7K	27.81818182\r
Businessinside.co.uk	41	51	15K	27.81818182\r
Auditraven.com	10	13	35K	34.36363636\r
Rizzpickups.com	63	61	8K	50.72727273\r
Vibeblessings.com	10	63	3K	40.90909091\r
Thepunthought.com	10	66	3K	40.90909091\r
Empireinfohub.com	10	63	2K	40.90909091\r
Learnwithah.com	10	61	8K	50.72727273\r
Parentpayapp.co.uk	22	46	10K	24.54545455\r
Globe-job.com	14	10	4K	44.18181818\r
Theredpay.com	34	10	30K	44.18181818\r
Bloghart.com	37	29	23K	44.18181818\r
Theinternetchicks.co.uk	37	27	1K	24.54545455\r
Buzzovia.com	16	22	1k	24.54545455\r
Globomint.com	14	28	1K	24.54545455\r
Frontierinfo.co.uk	10	10	1K	24.54545455\r
Wapbald.com	10	10	1K	24.54545455\r
Truewayfinance.com	41	15	5K	27.81818182\r
Grospal.com	10	10	7k	24.54545455\r
Asbestlint.com	40	51	9K	24.54545455\r
Everestbusinesscapital.com	41	53	201K	34.36363636\r
Updatearticle.net	44	40+	155.6K	24.54545455\r
Wisdompod.org	48	40+	107.2K	24.54545455\r
Myarticlescout.net	46	40+	83.8K	24.54545455\r
Arcarrierpointnet.net	49	40+	30.0K	24.54545455\r
Savemoneyweekly.net	32	40+	27.6K	24.54545455\r
Newspostbulletin.org	44	40+	27.3K	24.54545455\r
Techcrude.org	43	40+	21.8K	24.54545455\r
Newsappear.net	51	40+	19.6K	24.54545455\r
Pseintpro.net	50	40+	19.6K	24.54545455\r
Urbantimesnews.net	35	40+	18.0K	24.54545455\r
Cloudymap.net	38	40+	15.0K	24.54545455\r
Flashingtech.org	46	40+	11.5K	24.54545455\r
Hostontech.org	35	40+	11.1K	24.54545455\r
Busyrush.net	43	40+	10.7K	24.54545455\r
Realtimebusinessnews.net	41	40+	10.0K	24.54545455\r
Bloggingnights.net	41	40+	8.3K	24.54545455\r
Asisnews.org	45	40+	7.6K	24.54545455\r
Thetechnotrick.net	43	40+	7.6K	24.54545455\r
Theuploadarticlecom.com	41	40+	7.3K	24.54545455\r
Kashyeportazza.net	46	40+	6.5K	24.54545455\r
Usaudience.org	48	40+	5.4K	24.54545455\r
Oftenmagazine.net	48	40+	4.8K	24.54545455\r
Randomnewsinfo.co.uk	46	40+	4.6K	24.54545455\r
Imageflipper.org	48	40+	4.5K	24.54545455\r
Batmanmagazine.net	47	40+	4.5K	24.54545455\r
Webinboundcom.com	43	40+	4.3K	24.54545455\r
Mindluster.co.uk	44	40+	4.1K	24.54545455\r
Bolttimes.org	35	40+	3.8K	24.54545455\r
Blogbuzznewscom.com	43	40+	3.6K	24.54545455\r
Atompace.co.uk	43	40+	3.5K	24.54545455\r
Hencemagazine.org	46	40+	3.4K	24.54545455\r
Wisememoryoptimizer.org	38	40+	3.3K	24.54545455\r
Hindiyaronet.net	44	40+	3.2K	24.54545455\r
Smartbluetechnology.net	44	40+	2.9K	24.54545455\r
Scannermagazine.co.uk	38	40+	2.8K	24.54545455\r
Keybreach.org	46	40+	2.7K	24.54545455\r
Mytechstock.net	39	40+	2.6K	24.54545455\r
Newshart.net	44	40+	2.6K	24.54545455\r
Settinghelp.co.uk	46	40+	2.5K	24.54545455\r
Latestukrainenews.net	26	40+	2.4K	24.54545455\r
Gettransmac.co.uk	46	40+	2.4K	24.54545455\r
Attractivedp.org	46	40+	2.4K	24.54545455\r
Asisnews.net	48	40+	2.4K	24.54545455\r
Tipsform.net	44	40+	2.3K	24.54545455\r
Technicalways.net	39	40+	2.3K	24.54545455\r
Newsgigacom.net	50	40+	2.2K	24.54545455\r
Sevenlandnews.co.uk	43	40+	2.0K	24.54545455\r
Cambodiawire.net	48	40+	2.0K	24.54545455\r
Windgustnews.net	24	40+	1.8K	24.54545455\r
Homesblogs.net	46	40+	1.8K	24.54545455\r
Stylishdp.org	41	40+	1.8K	24.54545455\r
Shortbioideas.net	43	40+	1.8K	24.54545455\r
Kmspicolite.org	46	40+	1.7K	24.54545455\r
Oxpoll.co.uk	47	40+	1.7K	24.54545455\r
Eratechinfo.org	48	40+	1.7K	24.54545455\r
Tropicalcyclonenews.net	48	40+	1.6K	24.54545455\r
Technicalpictures.org	41	40+	1.6K	24.54545455\r
Sellerkid.net	38	40+	1.5K	24.54545455\r
Onetopicnews.net	48	40+	1.5K	24.54545455\r
Friendsdpcom.com	48	40+	1.5K	24.54545455\r
Ymovieshd.co.uk	46	40+	1.5K	24.54545455\r
Bloggoto.org	30	40+	1.5K	24.54545455\r
Educationbeingcom.org	33	40+	1.5K	24.54545455\r
Kidswebnews.org	46	40+	1.5K	24.54545455\r
Serbiapost.org	38	40+	1.4K	24.54545455\r
Windowsterminal.net	45	40+	1.4K	24.54545455\r
Brightnesscontrol.net	44	40+	1.4K	24.54545455\r
Techsuppose.net	46	40+	1.4K	24.54545455\r
Sidedtech.net	48	40+	1.3K	24.54545455\r
Bolttimes.net	48	40+	1.3K	24.54545455\r
Keepagents.net	48	40+	1.3K	24.54545455\r
Sweathouz.net	43	40+	1.3K	24.54545455\r
Asjreflet.co.uk	48	40+	1.2K	24.54545455\r
Bulgariajournal.net	46	40+	1.2K	24.54545455\r
Techsnapperz.org	38	40+	1.2K	24.54545455\r
Techandkey.org	48	40+	1.2K	24.54545455\r
Newsbrave.net	45	40+	1.2K	24.54545455\r
Croatiawire.org	38	40+	1.2K	24.54545455\r
Irfanviewlite.net	46	40+	1.2K	24.54545455\r
Tipsform.org	44	40+	1.2K	24.54545455\r
Newsstupid.net	46	40+	1.2K	24.54545455\r
Learnifica.net	48	40+	1.2K	24.54545455\r
Veltechams.net	39	40+	1.1K	24.54545455\r
Spainjournal.org	46	40+	1.1K	24.54545455\r
Nationalnewsfeed.co.uk	48	40+	1.1K	24.54545455\r
Denmarkmagazine.net	38	40+	1.1K	24.54545455\r
Newsfault.org	46	40+	1.0K	24.54545455\r
Newsfeedinfo.org	48	40+	1.0K	24.54545455\r
Buzztricks.net	46	40+	1.0K	24.54545455\r
Irishbreakingnews.org	48	40+	1K	24.54545455\r
Newsbrave.co.uk	38	40+	1K	24.54545455\r
Myspynews.co.uk	38	40+	1K	24.54545455\r
Newscivil.net	38	40+	1K	24.54545455\r
Newsludo.net	38	40+	1K	24.54545455\r
Envelopenews.org	38	40+	1K	24.54545455\r
Bulgariajournal.org	38	40+	1K	24.54545455\r
Dailynewsgossip.org	38	40+	1K	24.54545455\r
Spainjournal.net	38	40+	1K	24.54545455\r
Sellerkid.org	30	40+	1K	24.54545455\r
Microtechinfo.net	52	40+	1K	24.54545455\r
Newsendpoint.org	38	40+	1K	24.54545455\r
Shortcutmagazine.net	45	40+	1K	24.54545455\r
Journalanchor.org	38	40+	1K	24.54545455\r
Newsswing.org	35	40+	1K	24.54545455\r
Educationbeingcom.co.uk	38	40+	1K	24.54545455\r
Newsfeedinfo.net	38	40+	1K	24.54545455\r
Takipcizen.net	43	40+	1K	24.54545455\r
Serbiapost.net	38	40+	1K	24.54545455\r
Techactually.co.uk	38	40+	1K	24.54545455\r
Themagazinetoday.org	38	40+	1K	24.54545455\r
Newsiko.org	38	40+	1K	24.54545455\r
Newsludo.org	38	40+	1K	24.54545455\r
Newshyper.net	35	40+	1K	24.54545455\r
Piggynews.org	35	40+	1K	24.54545455\r
Planiumpro.com	15	51	8.7k	50.72727273\r
Innovativedentalandorthodontics.com	19	41	3.4k	50.72727273\r
Wiufamcta.net	33	37	2.6k	27.81818182\r
Traveltweaks.us	33	32	1K	27.81818182\r
Pfpways.com	42	33	1K	27.81818182\r
Blog-wizzydigital.org	11	9	1.8K	27.81818182\r
Satwaroundaboutdubai.com	7	9	6K	31.09090909\r
Refresh-laundry.com	41	33	17K	37.63636364\r
Fashionstorydress.com	36	37	33K	37.63636364\r
Celebupdatezone.com	11	9	3.1K	47.45454545\r
Dawnsky.com	15	11	1K	37.63636364\r
Blossomcloset.com	11	9	1K	37.63636364\r
Nesstaxidermy.com	12	11	1K	37.63636364\r
Midiowalock.com	7	9	1K	37.63636364\r
Seekdehub.com	39	34	12K	27.81818182\r
liftje.com	11	11	6.9K	27.81818182\r
Wollmatten.org	11	9	8K	27.81818182\r
Tsunaihaiya.org	11	9	5K	27.81818182\r
Finnorth.org	11	11	4K	27.81818182\r
Caricatronchi.org	9	9	2K	27.81818182\r
Acamento.org	11	11	2.1K	27.81818182\r
Novapg.net	9	7	2K	27.81818182\r
Peitner.org	41	34	1.6K	27.81818182\r
Afruimwagens.com	11	7	1K	27.81818182\r
Picada.org	9	11	1K	27.81818182\r
Bratgen.io  (saas base article acceptable)	7	9	14K	31.09090909\r
Englishresponse.com	43	33	53K	57.27272727\r
Pikuplin.com	44	29	14K	57.27272727\r
Tsmeaning.com	43	33	44K	57.27272727\r
Dailyinsight.blog	43	31	24K	34.36363636\r
Hypesdaily.com	11	7	145K	34.36363636\r
Punsteam.com	66	67	27K	40.90909091\r
Inchcrafter.com	62	70	21K	40.90909091\r
Punzlibrary.com	62	67	11K	40.90909091\r
Pressnetworks.co.uk	42	9	10.3K	34.36363636\r
Bbarticle.co.uk	41	10	20.2K	34.36363636\r
Dailyennews.co.uk	40	28	2.3K	24.54545455\r
Thepushwiki.com	37	52	6.3K	31.09090909\r
Thebrumeblog.com	35	52	7.1K	31.09090909\r
Themagfusehub.com	40	52	1.7K	31.09090909\r
Thequeekmag.com	37	52	1.4K	31.09090909\r
Pushwiki.com.co	39	52	2.1K	31.09090909\r
Thesnapjotz.com	35	52	5.3K	31.09090909\r
Thepuzutask.com	39	52	4.5K	31.09090909\r
Theglaadvoice.com	36	52	1.2K	31.09090909\r
Hivemindreads.com	37	34	8K	27.81818182\r
Worldpulsepost.com	35	31	3.4K	34.36363636\r
Kongotechs.net	43	33	6.4K	34.36363636\r
Worldpeakmag.com	42	32	1K	34.36363636\r
Voozons.blog	41	29	4.5K	34.36363636\r
info-activepropertycare.com	9	11	9.6K	34.36363636\r
Leo-skepi.com	5	7	1.3K	34.36363636\r
Chrisrockblogs.com	7	11	1K	34.36363636\r
Animesamafr.org	11	11	1K	34.36363636\r
Kongotechs.net	43	36	6.4K	34.36363636\r
Magazineai.co.uk	40	53	8K	24.54545455\r
Stylesium.com	35	18	1K	34.36363636\r
Pfpzen.com Rate increased	34	53	2.4K	37.63636364\r
Claritytimes.co.uk	10	23	5K	27.81818182\r
Lightmagazine.co.uk	10	17	33.6K	34.36363636\r
Megavol.co.uk	40	25	25.1K	31.09090909\r
Digijournal.co.uk	56	44	7.1K	44.18181818\r
Digijournal.es	40	33	3K	57.27272727\r
PolandBuzz.pl	41	33	1.2K	44.18181818\r
Itsmagazine.fr	40	36	15.3K	50.72727273\r
Tagesideen.de	40	31	2.7K	50.72727273\r
Itsgerman.de	40	44	1.4K	50.72727273\r
Weltikon.de	40	39	2.9K	44.18181818\r
Drovenio.us	4	11	24K	34.36363636\r
Indykaila.co.uk	38	33	7K	27.81818182\r
Trbie.co.uk	40	44	6K	27.81818182\r
Trucofax.com	38	31	51K	27.81818182\r
Unbannedg.net	40	54	18K	24.54545455\r
Infoactivepropertycare.com	26	10	3.2K	24.54545455\r
Duaforlife.com	34	58	10K	40.90909091\r
Funnnypuns.com	55	61	8K	50.72727273\r
Sloganloop.com	52	62	8K	50.72727273\r
Starledgerpro.com	51	63	2K	40.90909091\r
Beatmagazines.com	54	60	5K	50.72727273\r
Juggsmagazines.com	55	61	5K	50.72727273\r
Punsloverz.com	62	70	55K	40.90909091\r
Cleverlynames.com	62	70	19K	40.90909091\r
Punzcopy.com	67	30	7K	40.90909091\r
Pdmeasurement.com	61	70	21K	40.90909091\r
Dreameaninng.com	62	70	18K	40.90909091\r
Letmagazine.co.uk	40	43	11K	27.81818182\r
Digitalquil.com	40	22	10K	27.81818182\r
Pattachita.com	42	31	10K	24.54545455\r
Instafinsta.cc	42	31	47K	24.54545455\r
Thecoffeetimez.com	42	31	2K	24.54545455\r
Prayerglimpse.com	42	31	19K	24.54545455\r
Medicalreportchecksbd.com	42	31	31K	24.54545455\r
Tinkpro.com	42	31	2K	24.54545455\r
Chickfilmenu.com	42	31	2K	24.54545455\r
Rapperbirthday.com	42	31	4K	24.54545455\r
Allnameslab.com	42	31	4K	24.54545455\r
Alljapanesenames.com	42	31	3K	24.54545455\r
Emerfd.co.uk	10	30	9.2K	24.54545455\r
Okikacloth.com	39	10	35.8K	31.09090909\r
3dkickstech.com	40	12	16.8K	31.09090909\r
Peoplesinsider.de	41	10	1K	31.09090909\r
Funnynameslab.com	39	40	12.8K	37.63636364\r
Fantasynamesaura.com	18	43	14K	37.63636364\r
Ventsmillion.com	40	39	16K	27.81818182\r
Ventspaper.com	55	39	5.8K	31.09090909\r
Digital-newsalerts.com	42	39	8K	27.81818182\r
Infooceleb.com	42	31	14K	27.81818182\r
Fscsearchin.com	41	37	144K	27.81818182\r
Starmagz.fr	7	33	11K	27.81818182\r
Pmomeaning.com	42	31	2K	27.81818182\r
Meaningdepth.com	42	31	8K	27.81818182\r
Zyranames.com	42	31	4K	27.81818182\r
laughpuns.com	45	31	5K	27.81818182\r
Fullblessings.com	42	31	3K	27.81818182\r
Clebethncity.com	40	31	4K	27.81818182\r
Celabmagazine.com	42	29	10K	27.81818182\r
Flarearticle.com	40	39	1.3K	27.81818182\r
Tadable.com	40	29	1K	27.81818182\r
Blooperstoday.com	10	11	1K	27.81818182\r
Ciaobucks.com	40	36	1K	27.81818182\r
Ynwmellyreleasefree.com	40	36	1K	27.81818182\r
Goofyahhpicturess.com	40	36	2K	27.81818182\r
Clearnewsly.com	10	10	6.4K	24.54545455\r
Wbifms.org	10	10	5K	24.54545455\r
Theperfectd.com	22	16	31K	37.63636364\r
Caramelchic.com	19	10	9K	34.36363636\r
Everydaymagazine.co.uk	39	10	4K	34.36363636\r
Lovelywishy.com	40	61	3K	40.90909091\r
Sportsflow.co.uk	55	10	4K	27.81818182\r
Ventsmagazines.org.uk	10	38	3K	27.81818182\r
Ventoxweekly.co.uk	42	59	21K	27.81818182\r
Hourlymagazine.com	13	10	11K	24.54545455\r
Thaigernews.com	11	36	16.3K	24.54545455\r
Thenachrichten.de	40	52	1K	24.54545455\r
Quickblogs.co.uk	41	27	23.6K	27.81818182\r
Vipinsight.co.uk	34	23	10K	27.81818182\r
Funmagazine.co.uk	32	22	21K	27.81818182\r
MAXXFOUR.IT.COM	93	43	88K	31.09090909\r
Infowellhealthorganic.com	39	23	2.3K	31.09090909\r
Thesparkshopin.in	41	31	215K	31.09090909\r
Infowheongrandtheftauto.com	40	31	1.3K	31.09090909\r
Infowheoncricket07.com	31	33	1.3K	31.09090909\r
Kahanipedia.in	40	37	3.6K	31.09090909\r
College4.in	40	37	1.9K	31.09090909\r
Infothesparksshop.com.in	41	29	43K	31.09090909\r
Thesparksshop.com	40	29	8K	31.09090909\r
Dailynewsmagazine.co.uk	40	36	8K	47.45454545\r
Thepressrow.com	42	36	3.4K	47.45454545\r
Thesportie.com	39	33	26K	47.45454545\r
Newzire.co.uk	40	31	27K	47.45454545\r
Dailyinfomagaine.com	11	7	1K	47.45454545\r
Headlinemagazine.co.uk	42	31	4.3K	47.45454545\r
Finetechzoom.com	41	38	18K	27.81818182\r
Inflatom.co.uk	40	33	10K	34.36363636\r
Agyo.it.com	93	44	5.1K	27.81818182\r
Desmagazin.de	40	44	1K	27.81818182\r
Castmagazine.co.uk	40	31	15K	27.81818182\r
Manicotti.co	40	17	37.5K	27.81818182\r
88magazine.com	33	40	2.5K	27.81818182\r
Therenweb.com	40	51	2.2K	27.81818182\r
Tortellinatrice.com	40	32	20.2K	27.81818182\r
Inomyalgia.com	11	7	3.8K	27.81818182\r
Renweb.it.com	92	92	3.7K	24.54545455\r
Technical.com.in	40	59	17.5K	24.54545455\r
Techtips.com.in	31	53	24.1K	24.54545455\r
Uploadarticle.in	32	18	1K	24.54545455\r
Technorozen.in	33	7	7K	27.81818182\r
Nakrutka.in	42	36	53K	27.81818182\r
Healthsy.org	40	36	11.7K	24.54545455\r
Aspertaan.com	40	50	11.3K	24.54545455\r
Tips-wellhealthorganic.com	40	50	20.1K	27.81818182\r
lawforhuman.com	37	11	1K	24.54545455\r
Geekwire.co.uk	53	4	1K	24.54545455\r
Forbesbusinessview.com	36	8	1K	24.54545455\r
Ttsmagazines.com	40	31	11K	24.54545455\r
Theunitemagazines.com	11	7	19K	24.54545455\r
Feegeschichte.de	4	11	1K	24.54545455\r
Austakten.de	11	7	1K	24.54545455\r
5starsstockscom.blog	43	28	25K	31.09090909\r
Yearofthesnakegame.com	13	10	70.9K	40.90909091\r
Dinemenuusa.com	41	35	3K	27.81818182\r
Menufromusa.com	10	10	2K	27.81818182\r
Punwaves.com	52	61	23K	57.27272727\r
Boromags.com	51	62	17K	50.72727273\r
Newswriter.co.uk	10	45	4K	24.54545455\r
Milomagz.com	12	33	3K	27.81818182\r
Plantstylehome.com	31	10	8K	34.36363636\r
Thefactsreaders.com	35	10	2.2K	27.81818182\r
Thenewshart.com	35	13	34K	27.81818182\r
Muichiro.co.uk	41	36	50K	34.36363636\r
Dailybriefing.it.com	93	92	1.2K	27.81818182\r
Troozer.blog	20	26	24.2K	27.81818182\r
TheMagazines.co.uk	42	48	5K	27.81818182\r
Biblemaening.com	51	61	12K	40.90909091\r
Blessingalive.com	52	62	2K	40.90909091\r
Punbooth.com	38	70	14K	40.90909091\r
Lovecouplez.com	38	70	19K	40.90909091\r
Jokescopy.com	38	70	13K	40.90909091\r
Englishsharpmind.com	66	70	36K	40.90909091\r
Punaroo.com	38	70	11K	40.90909091\r
Dreamzmeaning.com	38	70	11K	40.90909091\r
Pickupdose.com	38	70	10K	40.90909091\r
Namesgamma.com	38	70	10K	40.90909091\r
Puzutaska.com	34	25	9K	31.09090909\r
Thetimelynews.com	39	32	7K	31.09090909\r
Becontentmedia.com	10	17	10K	31.09090909\r
Thezow.com	8	13	16.1K	31.09090909\r
Grammartrinds.com	33	53	23.8K	27.81818182\r
WeeklyMag.co.uk	5	48	5.6K	27.81818182\r
Acftcalculator.co.uk	35	72	1.6K	27.81818182\r
www-Noodlemagazine.com	34	10	106.4K	24.54545455\r
Blogflying.co.uk	39	51	6.6K	24.54545455\r
Relocatesouthwest.co.uk	37	53	7.5K	24.54545455\r
Brasssmiles.org	37	45	5.2K	24.54545455\r
Millennialmagazine.co.uk	43	35	6.2K	27.81818182\r
Techtimeszone.co.uk	40	52	2K	27.81818182\r
Newscora.co.uk	33	55	3K	27.81818182\r
Serlig.co.uk	42	38	7.5K	27.81818182\r
Foxtechzone.com	19	50	7K	31.09090909\r
Durostechs.com	41	36	28K	27.81818182\r
Todoandroidlive.com	41	10	1K	27.81818182\r
Xiebutous.com	35	10	1K	27.81818182\r
Bigtecshoro.com	33	12	12K	27.81818182\r
Areyoufashiones.com	34	34	1K	27.81818182\r
Fightingforfuturesorgs.com	35	34	1K	27.81818182\r
Dulcfolds.com	35	14	13K	27.81818182\r
Crocoolini.com	35	10	2K	27.81818182\r
Schedows.com	35	10	144K	27.81818182\r
Thehrwpp.com	35	10	3K	27.81818182\r
Pushwikii.com	39	47	11K	27.81818182\r
Magfusehubs.com	40	34	4K	27.81818182\r
Snowhitter.com	40	34	2K	27.81818182\r
Cnlawblogs.com	11	7	1K	27.81818182\r
Ethnicitymag.co.uk	7	11	3.9K	27.81818182\r
Fupameaning.com	15	9	1K	27.81818182\r
Wyllmean.com	7	11	1.2K	27.81818182\r
Lovereplies.com	40	33	143K	40.90909091\r
Searchenginebasics.net	39	33	90K	60.54545455\r
Prayerforest.com	24	21	4K	40.90909091\r
Messagespots.com	42	32	39K	50.72727273\r
Namesorbital.com	40	36	4.1k	40.90909091\r
Letmagazine.com	42	32	1k	24.54545455\r
Techbombers.co.uk	41	36	25K	27.81818182\r
Tannerscove.net	41	62	5K	37.63636364\r
Americaskids.net	41	61	5K	37.63636364\r
Sadshayarihindi.com	43	72	53.1K	24.54545455\r
Connection-hints.com	42	52	29.8K	24.54545455\r
Callsbomber.com	40	54	98K	24.54545455\r
Biblicalmeaningz.com	42	54	25K	24.54545455\r
Bulkdp.com	42	52	66.6K	24.54545455\r
Starbucksmenuus.info	42	54	35K	24.54545455\r
Meaningvibes.com	39	72	14K	24.54545455\r
Sportrulez.com	41	52	20.6K	24.54545455\r
Grammarsguide.com	43	57	13.7K	24.54545455\r
Purepfp.com	42	58	5K	24.54545455\r
Gifdownloader.net	42	50	11.1K	24.54545455\r
Wordorae.com	41	51	11K	24.54545455\r
Draemmeaning.com	40	53	4.9K	24.54545455\r
Captionloving.com	38	72	5.3K	24.54545455\r
Etargetlimited.co.uk	39	72	4K	24.54545455\r
Networtiq.com	42	52	1.8K	24.54545455\r
Capcutproapk.tr	43	54	5.3K	24.54545455\r
Mcdsmenucanada.com	39	54	5.4K	24.54545455\r
Menupricephl.com	41	72	10.9K	24.54545455\r
Flixbaba.org	41	72	10.5K	24.54545455\r
Pickuplinne.com	42	52	3.1K	24.54545455\r
Thinkoora.com	40	52	5.9K	24.54545455\r
Wordcomparsion.com	42	51	5K	24.54545455\r
Notejaar.com	40	53	3.4K	24.54545455\r
Shayarisad.com	39	72	2.3K	24.54545455\r
Grammifiy.com	42	51	3.1K	24.54545455\r
Worthytrix.com	42	50	1.5K	24.54545455\r
Jokestter.com	42	52	1.5K	24.54545455\r
Wishesingday.com	37	72	1K	24.54545455\r
Englishilm.com	41	72	6.6K	24.54545455\r
Twinpeakmenu.com	39	72	1.1K	24.54545455\r
Petburada.org	41	53	1K	24.54545455\r
Todaybignews.co.uk	40	59	11.4K	34.36363636\r
Wiluae.com	39	13	60.9K	57.27272727\r
Bingesaga.com	37	50	5.5K	27.81818182\r
Centnews.co.uk	42	8	2K	31.09090909\r
Seoinstantappearhighsoftware99.com	60	65	4k	31.09090909\r
Usasparktime.co.uk	40	52	7.5K	27.81818182\r
Magazineinsights.co.uk	40	52	2.7K	27.81818182\r
Novainsights.co.uk	40	51	2K	27.81818182\r
Pimpbunny.co.uk	12	1	228.2K	27.81818182\r
Melonstube.com.de	12	90	58.6K	27.81818182\r
Xgroovy.co.uk	13	2	7.5K	27.81818182\r
Lpsg.org.uk	10	8	15.3K	27.81818182\r
Baddiehub.ink	35	7	6.5K	27.81818182\r
Itsreleased.com	17	11	1K	34.36363636\r
Elevenlabsmagazine.com	8	9	1K	34.36363636\r
Perplexityaimagazine.com	15	11	143K	34.36363636\r
Pisowifipause.com	42	39	36K	27.81818182\r
Education-being.com	39	39	45K	27.81818182\r
Delimakpm.my	40	31	25K	27.81818182\r
Pilluses.com	40	33	9K	27.81818182\r
Jaalifestylelogin.co advance	40	36	64K	34.36363636\r
Finalgrowcom.com advnace	39	33	28K	34.36363636\r
Cbsetak.co  advance	39	33	116K	34.36363636\r
Blessingoftheday.net advance	42	31	4.5K	34.36363636\r
Healthnewsledger.com advance	11	7	1K	37.63636364\r
Crunchyapkpro.com	10	10	10K	31.09090909\r
www-gimkit.com	40	51	85K	31.09090909\r
Networthdaily.co.uk	42	61	18K	50.72727273\r
Hotmagazine.co.uk	40	43	58K	50.72727273\r
Ruhshayari.com	12	48	70K	40.90909091\r
Baddiehubhib.com	11	44	200K	50.72727273\r
Deenest.in	19	33	55.8K	40.90909091\r
Meezvo.com	14	47	5.3K	40.90909091\r
Synofind.com	40	37	4.7K	40.90909091\r
Chicksinfo.co.uk	40	33	8.2K	40.90909091\r
Prayerandwish.com	56	43	26.3K	40.90909091\r
Pickuppages.com	45	32	10.4K	40.90909091\r
Qatarvissastatus.com	54	38	15.4K	40.90909091\r
Pc-bottleneck.com	20	41	80.9K	63.81818182\r
Appkod.com	56	49	16.4K	50.72727273\r
Conversorsdeletra.com	64	42	10.7K	40.90909091\r
Dreammeaniing.com	60	41	1.6K	50.72727273\r
Oscarlouveau.fr	55	55	15.8K	40.90909091\r
Nexovates.com	57	39	8K	50.72727273\r
Prayerslives.com	60	53	79K	40.90909091\r
Soulwishers.com	8	53	8.6K	40.90909091\r
Messagesstar.com	37	53	11.4K	40.90909091\r
Inspirationalmsgs.com	37	49	7.9K	40.90909091\r
Cricketteamhub.com	9	41	83.4K	40.90909091\r
Attitudesheyari.com	53	43	4.3K	40.90909091\r
Cherrymagazine.fr	44	40	13.7K	40.90909091\r
Poetryfirm.com	55	38	49.3K	40.90909091\r
Msgflick.com	52	59	36K	40.90909091\r
Likenux.com	43	57	3.2K	40.90909091\r
Writeforheart.com	55	57	20.6K	40.90909091\r
Englishsyno.com	55	57	4.5K	40.90909091\r
Definesyntax.com	54	58	4.5K	40.90909091\r
Bugtong-bugtong.com	56	57	35.6K	40.90909091\r
Zingyzon.com.au	53	42	29.4K	50.72727273\r
Magentoservicegonzay.com.au	54	55	2.2K	50.72727273\r
Semakansstrs.my	52	42	62.4K	40.90909091\r
Quoethint.com	42	41	1.5K	40.90909091\r
Quotebless.com	39	43	8.1K	40.90909091\r
Buzzvista.co.uk	55	45	17.3K	40.90909091\r
Catkitty21.net	42	52	9.3K	40.90909091\r
Punposh.com	44	56	2.2K	40.90909091\r
Holymeanings.com	41	42	4.7K	40.90909091\r
Zryly.net	55	8	2.7K	40.90909091\r
Beforegood.com	61	50	4.4K	40.90909091\r
Blessingspost.com	43	53	6K	34.36363636\r
Riddleedge.com	55	54	1.2K	40.90909091\r
Captionsinfoz.com	55	54	3.5K	40.90909091\r
Blessingtide.com	43	43	5.6K	40.90909091\r
Blessingsfusion.com	54	47	2.7K	40.90909091\r
Ufutureuitms.my	53	42	13K	40.90909091\r
Pichut.in	43	42	9.8K	40.90909091\r
Bestcommenthub.com	41	5	46.7K	40.90909091\r
Royalsshayari.com	56	55	7.3K	40.90909091\r
Shayari-in-english.net	52	55	11.5K	40.90909091\r
Sapskpm.my	52	54	47.9K	40.90909091\r
Teamsmoniker.com	43	58	3.6K	40.90909091\r
Idmemurid.my	57	51	12.4K	40.90909091\r
Travellersaura.com	9	42	7.1K	40.90909091\r
Tensess.com	53	41	1K	34.36363636\r
Couriertrackingin.com	42	43	3.1K	40.90909091\r
Atkapp.in	54	40	36.3K	40.90909091\r
Zealbible.com	42	44	30.4K	40.90909091\r
Viperplayes.net	41	41	3.1K	50.72727273\r
Jobkoly.com	38	51	12.3K	40.90909091\r
Infozceleb.com	40	51	2.3K	40.90909091\r
Azaadbites.com	40	35	1K	40.90909091\r
Fixmyspeakersound.in	40	48	1K	50.72727273\r
Tmsimreg.ph	42	56	5.5K	40.90909091\r
Simregister.org	43	51	3.8K	40.90909091\r
Shayarispirit.com	43	51	6.9K	40.90909091\r
Gsmneofrp.mx	42	46	3.9K	40.90909091\r
Malaysiamenus.com	67	51	3.3K	40.90909091\r
Allofinsta.com	43	53	2.2K	40.90909091\r
Themcdomenuph.com	56	52	1.7K	40.90909091\r
Afilmywap.ltd	42	9	12.2K	63.81818182\r
Emojikitchen.pro	42	51	47.3K	50.72727273\r
Mytecharm.com.in	7	2.9	5.7K	40.90909091\r
Filmyzilla.pk	53	31	4.3K	50.72727273\r
Isaimini.ltd	54	3.9	1.6K	40.90909091\r
Naasongs.in	65	6	3.5K	40.90909091\r
Moviezwap.us	56	3	2K	40.90909091\r
Agristack.co.in	43	58	2.7K	40.90909091\r
Menuprices.my	43	51	4.6K	40.90909091\r
Globeorsmartph.com	34	3	4.4K	40.90909091\r
Ankitshayari.in	34	34	1.3K	40.90909091\r
Shayari-hindi.com	38	16	26.7K	40.90909091\r
Starmusiq.in	41	48	14.2K	40.90909091\r
Lirunning.com	45	12	8.8K	31.09090909\r
Robconner.com	43	10	5K	31.09090909\r
Testerz.co.uk	17	15	2K	31.09090909\r
Tradrmom.com	43	23	1.3K	31.09090909\r
Escasinoes.com	19	12	3K	37.63636364\r
Okayuj.co.uk	42	11	1K	31.09090909\r
Strandsanswerss.com	39	22	34.2K	24.54545455\r
Jujutsukaisenreads.com	19	7	1.5K	37.63636364\r
Thebteupindia.com	11	10	10.7K	37.63636364\r
Edistrictup.xyz	11	1	25K	37.63636364\r
Thehrmislogin.my	11	2	1.2K	37.63636364\r
Uucmslogin.online	12	2	12.5K	37.63636364\r
Megatoday.co.uk	39	47	6.7K	27.81818182\r
Hypertimes.co.uk Rate will be 1500-1 July	40	44	3.5K	27.81818182\r
Photosweek.com	41	28	41K	27.81818182\r
Mystuff.blog	39	33	3.7K	24.54545455\r
Pulsamento.us	39	33	1K	24.54545455\r
Suauqf.com	39	33	1K	24.54545455\r
Coomersu.co	39	33	2.8K	24.54545455\r
Xwheon.com	11	7	6.3K	27.81818182\r
Vistoraworld.com	39	36	2.8K	27.81818182\r
Zeinsider.com	40	39	5.4K	27.81818182\r
Cryptobushcraft.com	39	31	1K	27.81818182\r
Lidnews.uk	40	33	1K	27.81818182\r
PureGardening.org	41	31	1K	27.81818182\r
Thingsto-do.co.uk Rate will be 3500- 1 Aug	35	31	17.3K	40.90909091\r
Lux-collector.com	20	11	28K	40.90909091\r
Ordenari.co.uk	38	37	1K	27.81818182\r
Namesframe.com	58	30	18K	40.90909091\r
Manywys.com	61	51	31K	40.90909091\r
Restaurantsmenuusa.com	52	62	20K	57.27272727\r
Newspapercast.org	41	52	59.1K	24.54545455\r
Globeinsightblog.org	41	53	40.3K	24.54545455\r
Upskillgate.org	41	53	17.1K	24.54545455\r
Anytechhub.org	41	56	14.1K	24.54545455\r
Finlancespot.net	41	52	19K	24.54545455\r
Cruzdid.net	41	53	17K	24.54545455\r
Facesnews.net	41	51	17K	24.54545455\r
Newsstash.org	39	50	16.2K	24.54545455\r
Finlancespot.org	41	50	13K	24.54545455\r
Globecave.net	41	53	10K	24.54545455\r
Globeinsightblog.net	40	53	10K	24.54545455\r
Undertectaboway.com	41	53	10K	24.54545455\r
Glaadvoicecom.com	41	48	8.6K	24.54545455\r
Techquiller.org	41	52	8.3K	24.54545455\r
Globecave.org	41	51	8.1K	24.54545455\r
Uploadpaper.org	41	53	7.2K	24.54545455\r
Infofirstnews.net	40	51	7.5K	24.54545455\r
Timesoffinland.net	40	51	6.6K	24.54545455\r
Stylemintz.net	40	50	5.3K	24.54545455\r
Blooginga.net	41	51	11.1K	24.54545455\r
Farolapusaz.com	41	53	6.4K	24.54545455\r
Newscivil.org	41	51	3.2K	24.54545455\r
Techcarz.org	41	53	4.6K	24.54545455\r
Techblogin.net	41	53	1.5K	24.54545455\r
Financearray.org	41	52	11.7K	24.54545455\r
Wisestocktech.org	41	53	1.6K	24.54545455\r
Techdaytimes.net	41	52	1.3K	24.54545455\r
Newstwins.org	41	52	3.6K	24.54545455\r
Lucywellsjerseyexpress.net	41	53	4.2K	24.54545455\r
Blogangleorg.com	41	53	2.8K	24.54545455\r
Techcarz.net	41	53	3K	24.54545455\r
Puzutask.org	41	53	16.6K	24.54545455\r
Travelvnworld.org	40	53	2.2K	24.54545455\r
Globecave.co.uk	41	52	1K	24.54545455\r
Becameno.net	41	51	1.7K	24.54545455\r
Boliviapost.net	41	59	1K	24.54545455\r
Ukrainejournal.net	41	53	1K	24.54545455\r
Buyingjournal.net	40	53	2.2K	24.54545455\r
Runvra.net	42	49	1K	24.54545455\r
Mainsleep.org	40	53	1.8K	24.54545455\r
Uploadpaper.net	42	53	1.3K	24.54545455\r
E-truesports.com	41	48	2.3K	24.54545455\r
Timestribe.net	41	53	2.5K	24.54545455\r
Boliviapost.org	41	51	3.2K	24.54545455\r
Fashionbuzzvn.org	41	53	2.3K	24.54545455\r
Algeriajournal.org	41	53	1.2K	24.54545455\r
Newsming.net	41	52	1K	24.54545455\r
Imagineergames.org	41	52	3.4K	24.54545455\r
Italytribune.net	40	49	2.2k	24.54545455\r
Newerslim.org	41	52	1.3K	24.54545455\r
Wisestocktech.net	41	53	1.6K	24.54545455\r
Buyingjournal.org	41	51	1K	24.54545455\r
Algeriajournal.net	41	50	1.5K	24.54545455\r
Newswordpage.net	41	59	1K	24.54545455\r
Echoarticle.net	41	59	1.2K	24.54545455\r
Bloglimit.org	39	52	3.8K	24.54545455\r
Thebloxstrap.net	40	44	3.4K	24.54545455\r
Financeboar.org	40	50	1.2K	24.54545455\r
Usedreads.org	41	53	1K	24.54545455\r
Foxycrawn.net	40	53	1.6K	24.54545455\r
Wisestocktech.co.uk	41	52	1K	24.54545455\r
Barapkorg.com	41	53	5.5K	24.54545455\r
Newstwice.net	41	52	1.7K	24.54545455\r
Newscivil.co.uk	41	52	1K	24.54545455\r
Zamtsophol.com	41	53	2.1K	24.54545455\r
Mavishtech.co.uk	40	53	8K	24.54545455\r
Zendogtech.net	42	52	1.6K	24.54545455\r
Newsween.net	41	53	1.2K	24.54545455\r
Techcbc.org	41	52	3.1K	24.54545455\r
Ifitfashion.org	41	53	4.8K	24.54545455\r
Readmighty.net	41	52	10.8K	24.54545455\r
Scaleweekly.net	41	52	1K	24.54545455\r
Seniornewsweekly.net	41	52	1K	24.54545455\r
Techcutmedia.org	41	53	9.4K	24.54545455\r
Techarooma.org	41	51	1K	24.54545455\r
Techsportsnews.net	41	50	1.1K	24.54545455\r
Bbwtech.co.uk	41	53	1K	24.54545455\r
Techflect.org	41	53	1K	24.54545455\r
Mybusinesstimes.co.uk	41	51	1K	24.54545455\r
Techarooma.net	41	53	2.4K	24.54545455\r
Newsdescribe.org	41	51	1.7K	24.54545455\r
Technofee.net	41	28	1.5K	24.54545455\r
Protrumpnewsnet.com	42	30	2.4K	24.54545455\r
Onnamainen.com	41	51	1K	24.54545455\r
Techblogin.org	41	52	3K	24.54545455\r
Fashionbuzzvn.net	41	52	1K	24.54545455\r
Woksip.co.uk	40	52	1K	24.54545455\r
Icelandjournal.org	39	51	1.4K	24.54545455\r
Promiscope.de	41	22	1.7K	31.09090909\r
Bjudlunch.com	42	27	2.7K	27.81818182\r
Frameinsider.com	40	10	2K	27.81818182\r
Urbantimely.com	40	9	18.3K	27.81818182\r
Flexmagazines.co.uk	42	52	1K	27.81818182\r
Frameinsider.co.uk	41	1	1K	24.54545455\r
Darkerocom.com	39	28	7.6K	24.54545455\r
Diadem-bridallehe.com	39	15	13.2K	24.54545455\r
Techtvhubcom.org	40	15	3.3K	24.54545455\r
Darkero.org	39	25	1.2K	24.54545455\r
Theplaymyworld.com	11	10	3K	27.81818182\r
Ourcelebs.co.uk	41	28	11.7K	24.54545455\r
Santatrucoff.com	10	23	71.9K	24.54545455\r
Coomertimes.com	41	58	11K	27.81818182\r
Bestcompari.com	40	50	7K	31.09090909\r
Maenings.com	41	48	7K	37.63636364\r
Zorveta.co.uk	39	11	12.5K	34.36363636\r
Alltagskompass.com.de	41	11	4.4K	34.36363636\r
Foxmo.co.uk	39	52	7K	27.81818182\r
Copyfontsonline.com	43	53	75K	70.36363636\r
Shayariforyou.com	43	49	462K	70.36363636\r
Textinvisible.org	43	61	77K	70.36363636\r
Shayarlist.com	43	62	22.1K	70.36363636\r
Barbermane.com	39	48	64K	63.81818182\r
Beginingrace.com	44	53	53K	50.72727273\r
Punboom.com	44	60	29K	50.72727273\r
Candimension.com	43	51	13.1K	50.72727273\r
Vampirenames.com	40	49	18K	50.72727273\r
Englishcolege.com	35	48	16K	50.72727273\r
Dpwishes.in	43	60	89K	50.72727273\r
Birthdaywishesmarathi.net	43	49	44K	50.72727273\r
Shayarispotlight.com	43	47	28.5K	50.72727273\r
Marathishayari.com	43	62	54.6K	50.72727273\r
Marathibirthdaywish.com	38	59	2.2K	50.72727273\r
Gyangatha.com	39	48	11.8K	50.72727273\r
Opgram.com	36	59	2.1K	50.72727273\r
Alonesadshayari.com	40	49	11.9K	50.72727273\r
Suvicharwale.com	41	60	5.2K	50.72727273\r
Grammarscoope.com	44	58	35K	40.90909091\r
Englishgrammerpro.com	37	61	9.3K	40.90909091\r
Findusnames.com	43	62	25.3K	40.90909091\r
Namesroyalty.com	43	62	32K	40.90909091\r
Rizznook.com	43	48	118K	40.90909091\r
Aniversarywishez.com	42	55	32.4K	40.90909091\r
Poetrybro.com	44	61	40.4K	40.90909091\r
Marathiukhanes.com	35	57	20.4K	40.90909091\r
Newinstabio.com	37	57	31.2K	40.90909091\r
Kavithaix.com	43	61	26K	40.90909091\r
Poetryget.com	42	50	24K	40.90909091\r
Pureshayarihub.com	38	61	22K	40.90909091\r
Greetinghai.com	39	57	32K	40.90909091\r
Toxicmessages.com	39	57	13K	40.90909091\r
Stylishbios.in	13	61	7.8K	40.90909091\r
Funkeelife.com	22	48	21K	40.90909091\r
Charmingsnames.com	44	61	2.1K	40.90909091\r
Teamsnamez.com	40	61	8.1K	40.90909091\r
Starbiohub.com	42	61	2.7K	40.90909091\r
Novapicsly.com	44	61	1.1K	40.90909091\r
Bio4instagirl.com	44	61	11.7K	40.90909091\r
Captioninbangla.com	31	50	19.2K	40.90909091\r
Biosaam.com	31	60	2.2K	40.90909091\r
Quoteblessings.com	39	60	3K	40.90909091\r
Photosly.in	33	62	33.6K	40.90909091\r
Suvicharin.com	31	49	16K	40.90909091\r
Getbiohub.com	29	49	1.9K	40.90909091\r
Photosnow.org	25	47	2.7K	40.90909091\r
Sadshayar.com	41	60	244	40.90909091\r
Instakebios.com	43	50	1.8K	40.90909091\r
Jankariwalay.com	40	54	1.6K	40.90909091\r
Shayarisher.com	43	61	3.3K	40.90909091\r
Gujaratiquotes.in	43	60	10K	34.36363636\r
Bestbiowala.com	42	50	1K	34.36363636\r
Socialxgujarati.com	42	50	1.8K	34.36363636\r
Shayarigirl.com	43	52	3.7K	34.36363636\r
Greetvibe.com	42	55	4.1K	34.36363636\r
Factoquotes.com	38	55	3.6K	34.36363636\r
Shayarikitab.com	32	46	3.2K	34.36363636\r
Howinsightz.com	37	42	1.2K	34.36363636\r
Photosdp.com	25	48	2.7K	34.36363636\r
What-network.com	43	53	1.2K	34.36363636\r
Hindishayariforyou.com	36	54	366	34.36363636\r
Shayaria.com	30	49	6.7K	34.36363636\r
Mybioidea.com	35	48	11.3K	34.36363636\r
Shayari-world.com	38	53	1.6K	34.36363636\r
Rtpsbiharonline.com	41	53	4.1K	34.36363636\r
Thejazzpackages.com	40	35	3.1K	34.36363636\r
Shayarihubb.com	41	61	12.8K	34.36363636\r
Poetrykidunya.com	34	50	8.1K	34.36363636\r
Kidsnamelist.com	43	50	3.7K	34.36363636\r
Hindishayarisites.com	54	6	1.2K	34.36363636\r
Captionsblom.com	41	36	3.4K	34.36363636\r
Dailyblessinghub.com	39	36	2.8K	34.36363636\r
Thebiographywala.com	56	38	3.4K	34.36363636\r
Untoldshayari.com	36	50	5.7K	34.36363636\r
Myusernamelist.org	31	21	1.5K	34.36363636\r
Azinstabio.com	26	50	8.5K	34.36363636\r
Urdunovelz.com	39	36	2.8K	34.36363636\r
Rgbutc.com	36	9	1.1K	34.36363636\r
Snntv.co.uk	36	9	1.7K	34.36363636\r
Muskanhindi.com	42	2.1	7.2K	34.36363636\r
Socialbioguide.com	35	15	1.8K	34.36363636\r
Easter2025date.com	40	35	1.2K	34.36363636\r
Sabimages.com	34	8	6.7K	34.36363636\r
Offeredmagazine.com	41	38	2K	27.81818182\r
Townofblog.com	40	25	2K	27.81818182\r
Townofsoftware.com	42	10	1K	34.36363636\r
Thehealthmag.co.uk	40	63	1K	27.81818182\r
Bigbtimes.com	35	39	2K	27.81818182\r
Wellnest.blog	20	30	4K	27.81818182\r
Ireallyyneeda5.com	35	10	2K	27.81818182\r
Interworldsradionet.com	32	12	1K	27.81818182\r
Assimilasjon.com	39	34	5K	27.81818182\r
Soutaipassu.com	35	10	7K	27.81818182\r
Chromiumfxs.com	39	12	3K	27.81818182\r
Epickitchensolutiones.com	35	10	4K	27.81818182\r
Antarvafna.com	39	13	3K	27.81818182\r
Wheongrandtheftauto.com.in	33	12	256.9K	50.72727273\r
Ukblogspot.co.uk	41	12	4.1K	50.72727273\r
Myprovincetowncondo.com	43	26	2.8K	50.72727273\r
Honormagazine.com	15	12	2.7K	50.72727273\r
Biographynews.co.uk	38	21	4.5K	50.72727273\r
Imagefap.uk	30	23	1.7K	50.72727273\r
Statsplayer.co.uk	42	14	21K	50.72727273\r
Ayushmancard-download.org	40	13	23.8K	50.72727273\r
Sams-odisha.co	38	10	1.3K	50.72727273\r
Samagra-portal.com	40	10	1.6K	50.72727273\r
Thetechadvice.blog	41	23	2.3K	50.72727273\r
Clocktimes.co.uk	15	35	16.8K	27.81818182\r
Theorymagazine.co.uk	5	3	3K	24.54545455\r
Indiaposttrackings.com	14	25	17.8K	27.81818182\r
Thevistamagazine.com	13	10	1.4K	27.81818182\r
Thechatpic.org	28	10	2.7K	27.81818182\r
Mumblescafes.com	7	5	6K	27.81818182\r
Celebio.co.uk	37	65	8K	31.09090909\r
Vektechs.com	40	18	11K	31.09090909\r
Businessdailyvibe.com	33	52	2K	34.36363636\r
Prosuccessguide.com	31	53	5.6K	34.36363636\r
Magicalmagazine.com	31	54	1K	34.36363636\r
Pexascope.com	43	49	1.8K	34.36363636\r
Ittbetterthisworld.com	39	48	1.7K	34.36363636\r
Dailysparkmagazine.com	34	58	1.2K	34.36363636\r
Shopnaclos.net	30	40	5.1K	34.36363636\r
Fhthgoodfood.blog	30	40	1.9K	34.36363636\r
Etherions.blog	30	40	1.7K	34.36363636\r
Inventivelwmfcrafts.com	42	43	7.1K	37.63636364\r
Myfastbrokeres.com	40	29	7.2K	37.63636364\r
Worldoutclass.com	41	29	2K	37.63636364\r
Theeurogamersonline.com	41	40	1.6K	37.63636364\r
Tipsfpmomhacks.blog	41	19	2.6K	37.63636364\r
Lwmfpets.blog	43	14	1.2K	37.63636364\r
Opblog.co.uk	34	14	1.7K	31.09090909\r
Homefilling.com	30	29	11K	27.81818182\r
Westrible.com	39	29	1K	27.81818182\r
Laaster.it.com	93	81	1K	27.81818182\r
Lufanest.co.uk	43	36	2K	27.81818182\r
Vargesingapore.com	41	31	1K	34.36363636\r
Thesgnews.com	41	31	1K	34.36363636\r
Newsdailysg.com	37	26	1K	34.36363636\r
Sgmagazines.com	40	31	1K	34.36363636\r
Vtchromizer.com	10	53	21.1K	24.54545455\r
Theuploadarticleblog.com	55	35	37.7K	24.54545455\r
Aslawonline.com Pure Law Website	40	42	132K	96.54545455\r
Pyschelsea.co.uk	4	33	6.4K	27.81818182\r
Ppv-land.co.uk	40	34	4.5K	27.81818182\r
Magazinepals.com	33	10	6K	24.54545455\r
Sunswager.com	35	12	2K	24.54545455\r
Magazineswars.com	36	15	4K	24.54545455\r
Newstimees.com	10	10	3K	24.54545455\r
Thenewsgiga.com	40	43	33.2K	44.18181818\r
Teckjbcom.app	40	39	34.5K	44.18181818\r
Quikconsoles.com	40	49	31.6k	44.18181818\r
Thehakevent.com	40	33	1.6k	44.18181818\r
Playsmyworld.com	40	43	1.1K	44.18181818\r
Thebetterthisfacts.com	40	61	1.4K	44.18181818\r
Littlewishesx.com	35	52	1.6K	44.18181818\r
Xalgoenpelloz.blog	32	39	1.7k	44.18181818\r
Worthinformer.com	38	50	3.7K	44.18181818\r
Nayitayari.com	38	45	8.8K	44.18181818\r
Meaningsaura.com	55	48	3.2K	44.18181818\r
Kkcmag.co.uk	40	45	2.2K	44.18181818\r
Bracegamingcom.com	40	40	1.3k	44.18181818\r
Bongshayari.com	36	29	3.9K	63.81818182\r
Banglacaption2.com	36	52	15.5K	63.81818182\r
Techslassh.com.co	36	60	42.6K	63.81818182\r
Eduquest24.com	36	27	26.5K	63.81818182\r
Isaidub.info	35	59	1.6K	63.81818182\r
Bigitt.com	35	52	8.5K	63.81818182\r
Ibomma.cam	42	26	2.7K	63.81818182\r
Naasongs.cc	57	52	1.1K	63.81818182\r
Movierulz.us.com	54	92	27.3K	63.81818182\r
Filmymeet.org	54	25	1.8K	63.81818182\r
Bditbari.com	59	53	2.4K	63.81818182\r
Techbdinfo360.com	37	28	1.8K	63.81818182\r
Captionall.com	32	53	15.4K	63.81818182\r
Thehusbandsbio.com	35	40	100K	44.18181818\r
Mycolourtrading.com	38	52	74.7K	44.18181818\r
Nflscorestats.com	43	42	1.7K	44.18181818\r
Salaryctc.com	40	34	86.5K	44.18181818\r
Iplwinners.com	40	37	12.2K	44.18181818\r
Ticketpricenow.com	41	27	30.9K	44.18181818\r
Netsalary.in	40	34	25.6K	44.18181818\r
Vadamallicom.net	42	35	33.6K	44.18181818\r
Gamingcirclee.com	40	19	22.4K	44.18181818\r
Healthbyamla.com	38	34	14.9K	44.18181818\r
Luxuryhavenhub.com	40	27	2.3K	44.18181818\r
Allstateinsurancehub.com	32	39	6.5K	44.18181818\r
Nyxtnow.com	36	37	2.5K	44.18181818\r
Pandalogblog.com	41	0	4.3K	44.18181818\r
Fashionistatrendshub.com	42	28	2.7K	44.18181818\r
Stamfordigit.com	40	0	4.7K	44.18181818\r
Iplcricketstats.com	39	20	7.1K	44.18181818\r
Starmediazone.com	40	37	15.9K	44.18181818\r
Liqourprice.com	36	40	64.2K	44.18181818\r
Winepricetoday.com	39	41	50K	44.18181818\r
Liquorpricehub.com	35	39	12.4K	44.18181818\r
Madirastore.com	36	35	28K	44.18181818\r
Madirakprice.com	36	40	18.3K	44.18181818\r
Themadiraprice.com	31	40	10.2K	44.18181818\r
Madiraprice.com	40	27	5.9K	44.18181818\r
Cricketcupworld.com	44	62	9.7K	44.18181818\r
Lpainhandsalary.com	42	9	16K	44.18181818\r
Thepopularbio.com	40	10	12.1K	44.18181818\r
Biztechnotrends.com	39	20	1.2K	44.18181818\r
Theticketprice.com	39	25	8.9K	44.18181818\r
Thesalaryslip.com	37	39	65.5K	44.18181818\r
Madirarates.com	35	39	6.9K	44.18181818\r
Refundpolicy.org	35	21	1.4K	44.18181818\r
Ehrmsmanavsampada.com	41	18	8K	44.18181818\r
Vehiclescost.com	35	39	39.8K	44.18181818\r
Creativesimiles.com	41	61	16K	50.72727273\r
Foodstampsneed.com	42	60	4K	50.72727273\r
Punsspark.com	52	60	7K	57.27272727\r
Pickupllines.com	50	61	10K	50.72727273\r
Expressnewz.co.uk	54	61	6K	40.90909091\r
Thetechsslash.com	42	28	42.1K	40.90909091\r
Thewallpostmedia.com	40	10	37.1K	27.81818182\r
Esportzdekho.com	40	8	17K	44.18181818\r
Iplscorestats.com	41	32	41.8K	44.18181818\r
Themonthlysalary.com	40	8	28.7K	44.18181818\r
CrikT20.com	39	25	11.1K	44.18181818\r
Prokabaddileagues.com	39	8	13.3K	44.18181818\r
Cricketmatchtimelines.com	36	19	74.8K	44.18181818\r
Iplkibaat.com	39	20	6.6K	44.18181818\r
Raonelide.com	41	25	1.6K	44.18181818\r
Proqyntra.com	41	25	1K	44.18181818\r
Celebsbioage.com	40	25	2.8K	44.18181818\r
Suvichars.com	40	29	10.5K	44.18181818\r
Swagfrontier.com	38	27	1.1K	44.18181818\r
Crikrecords.com	37	2.8	2.9K	44.18181818\r
Autozoneguide.com	41	26	2.4K	44.18181818\r
Crickettimes.com.in	37	27	2.4K	44.18181818\r
Thenetworthbio.com	41	27	1.3K	44.18181818\r
Vehiclesinfos.com	41	58	1.3K	44.18181818\r
Slateeducation.com	41	20	20K	37.63636364\r
Veyrasports.com	41	23	11K	37.63636364\r
Verbanews.com	41	23	16K	37.63636364\r
Healthgloria.com	42	25	6K	37.63636364\r
Techumia.com	41	25	1.5K	37.63636364\r
Gu1vnmobile.com	15	10	25K	31.09090909\r
Instatroid.org	10	15	9.5K	31.09090909\r
Nswozlotteries.org	10	15	11.7k	31.09090909\r
Fescoonlinebillcheck.com	10	15	11.5k	31.09090909\r
Unflte.net	10	15	2.5K	31.09090909\r
Ps3romscombo.com	10	15	2.3K	31.09090909\r
Kakuprress.com	39	47	14.1K	31.09090909\r
Modderguy.info	10	15	5.1K	31.09090909\r
Capcpro.org	10	15	2.4K	31.09090909\r
Neskotruco.com	10	15	2.5K	31.09090909\r
Dainikshiksha.org	40	61	6.1K	31.09090909\r
Atkapp.net	18	59	8.1K	31.09090909\r
Tagapli.org	8	7	1.4K	31.09090909\r
Wtecno.org	38	61	2.7K	31.09090909\r
Kosalrojgar.com	10	47	5.2K	31.09090909\r
Techondicas.net	10	15	3.5K	31.09090909\r
Misaplis.org	10	15	2.3K	31.09090909\r
Raytomplo.org	10	15	1.5K	31.09090909\r
Soutaipasu.org	10	15	1.2K	31.09090909\r
Scolinfo.org	10	15	1.2K	31.09090909\r
Technicaldhiraj.org	10	15	1.2K	31.09090909\r
Blogaddanews.org	10	15	1.5K	31.09090909\r
Anfite.org	10	15	1.2K	31.09090909\r
Snowballkiss.net	10	15	1.2K	31.09090909\r
Futgg.org	10	15	1.2K	31.09090909\r
Goldzeus.org	10	15	1.5K	31.09090909\r
Techfinz.org	10	15	1.5K	31.09090909\r
Veestrit.org	10	15	1.5K	31.09090909\r
Capistech.org	10	15	1.5K	31.09090909\r
Theglossywise.co.uk	10	15	1.5K	31.09090909\r
Doms2cents.org	10	15	1.5K	31.09090909\r
Thedippermagazine.com	41	69	27K	37.63636364\r
Utdxclusive.co.uk	40	56	111K	27.81818182\r
Timelynews.co.uk	41	59	17K	34.36363636\r
Zentmagazine.co.uk	43	60	17K	34.36363636\r
Zvodeps.org	37	5	38.5K	40.90909091\r
Ftasiastock.com	33	50	8.4K	31.09090909\r
Artsthunderonthegulf.com	39	27	2.8K	37.63636364\r
Theweeklyhealthiness.net	41	70	12.3K	44.18181818\r
Pblinuxtech.com	39	48	5.1K	44.18181818\r
Jalbitehealth.net	39	67	1.6K	44.18181818\r
Zardgadjets.org	34	54	7.2K	34.36363636\r
Pblinuxtech.net	32	50	7.5K	34.36363636\r
Betterthistechs.org	39	45	4.8K	37.63636364\r
Wizzydigitalorg.org	39	46	10.5K	40.90909091\r
Whatutalkingboutfamily.com	33	56	4.5K	44.18181818\r
Blueflamepublishing.blog	39	23	9.5K	40.90909091\r
Lovelolablog.co.uk	30	29	8.7K	34.36363636\r
Lookwhatmomfound.org	37	56	1K	44.18181818\r
Undergrowthgameline.org	33	55	5K	40.90909091\r
Wavetechglobal.co.uk	8	13	17.1K	40.90909091\r
Justalittlebite.co.uk	32	5	5K	40.90909091\r
Feedworldtech.org	38	47	5K	37.63636364\r
Decoradtech.org	32	56	6.6K	40.90909091\r
Decoratorsadvice.com	25	37	10.1K	47.45454545\r
Lookwhatmomfoundgiveaways.com	39	71	12.5K	44.18181818\r
Thehometroters.com	41	55	15.4K	44.18181818\r
Sosoactive.net	41	69	46.6K	40.90909091\r
Usdailyhub.com	39	44	6.6K	27.81818182\r
Rightbloginfo.com	51	43	14.9K	27.81818182\r
Cricketgeek.it.com	93	92	50K	27.81818182\r
Bytemagazine.co.uk	40	60	5K	27.81818182\r
Flashermagazine.co.uk	25	10	15K	31.09090909\r
Mediawatcher.it.com	93	92	32.5K	31.09090909\r
Domiikyo.com	10	15	6.6K	27.81818182\r
Quickstopics.co.uk	20	27	7.4K	27.81818182\r
Wisecaption.com	4	5	1K	27.81818182\r
Magazinerate.com	27	20	3.5K	27.81818182\r
Magazinecelebs.co.uk Rate will be 2500-1 Aug	40	48	14.5K	34.36363636\r
Wollmatten.co.uk	40	35	2K	27.81818182\r
Megazee.com	43	51	65K	31.09090909\r
Praiseear.co.uk	43	49	18K	31.09090909\r
Thequeenslovelythings.com	19	16	236.7K	31.09090909\r
Madeformasons.com	15	12	6.1K	31.09090909\r
Robconner.com	43	45	4K	31.09090909\r
Okayuj.co.uk	45	46	30K	31.09090909\r
Testerz.co.uk	41	42	2K	31.09090909\r
Miguelflux.com	35	41	4K	31.09090909\r
Tradrmom.com	40	42	4K	31.09090909\r
Kingkendama.com	32	42	10.5K	31.09090909\r
Ouchino.com	30	41	1.1K	31.09090909\r
Pkwys.com	25	41	2.6K	31.09090909\r
Lirunning.com	46	44	8K	31.09090909\r
Camocrypt.com	43	49	25K	37.63636364\r
Studywisdom.co.uk	43	53	25K	37.63636364\r
Homeella.com	42	43	2K	37.63636364\r
Brandihomes.com	42	44	17K	37.63636364\r
Anonyig.co.uk	40	36	2K	27.81818182\r
Infotly.com	40	38	2.5K	24.54545455\r
Blogili.com	57	56	1K	27.81818182\r
Clearisecleaningservices.com	47	53	IK	40.90909091\r
Thecoffeetimez.com	42	54	2.8K	37.63636364\r
Stockinvesttips.org	47	50	4.8K	24.54545455\r
Hidingme.net	40	52	11.2K	24.54545455\r
Confidtech.org	40	50	2K	24.54545455\r
Bleepmedia.net	40	48	2.8K	24.54545455\r
Techpeakly.org	40	52	9.1K	24.54545455\r
Simplifydiggs.org	40	65	7.8K	24.54545455\r
Pintravels.org	48	45	2.2K	24.54545455\r
Alnewsworld.com	44	53	55K	57.27272727\r
Punhour.com	42	62	27K	57.27272727\r
Rarelyradiant.com	51	60	16K	50.72727273\r
Thefaithword.com	44	61	22K	57.27272727\r
Namazily.com	51	58	38K	50.72727273\r
Hindishayaritext.com	50	61	34K	50.72727273\r
Moodfordecor.com	48	60	2K	50.72727273\r
Comedybookz.com	51	62	10K	50.72727273\r
Getwishers.com	52	61	4K	50.72727273\r
Spiritualmeansof.com	50	60	1K	40.90909091\r
Meaningspots.com	51	60	2K	50.72727273\r
Pickuppulse.com	42	60	3K	50.72727273\r
Punzlife.com	44	58	25K	57.27272727\r
Pfpstack.com	44	58	13.2K	57.27272727\r
Letrasdiferentes.pro	42	36	5.8K	27.81818182\r
Instafinsta.cc	42	31	26.5K	27.81818182\r
Similevault.com	18	32	5.7K	27.81818182\r
Sonicmenuusa.com	40	39	8.6K	27.81818182\r
Edenemu.com	42	33	11.1K	27.81818182\r
Idmekp.my	43	23	125.7K	27.81818182\r
Piksart.one	43	31	3.3K	27.81818182\r
Anniversaryaura.com	42	28	6.2K	27.81818182\r
Mymesage.com	42	25	1K	27.81818182\r
Captionsnest.com	42	32	1K	27.81818182\r
Biblesmeaning.com	42	30	10.2K	27.81818182\r
Stworthaura.com	42	27	4.3K	27.81818182\r
Prayerspure.com	42	28	4.3K	27.81818182\r
Nullsbrawlapp.tr	43	37	23.8K	27.81818182\r
Trackspeedposts.com	42	31	37.2K	27.81818182\r
Meeaning.com	42	27	4.2K	27.81818182\r
Namesoura.com	42	27	2K	27.81818182\r
Celebreports.de	43	28	1.9K	27.81818182\r
Punroll.com	42	28	4.5K	27.81818182\r
Rulediff.com	42	30	9.7K	27.81818182\r
Punsx.com	42	26	2.5K	27.81818182\r
Compairfy.com	42	28	6.3K	27.81818182\r
Knowledgar.com	42	27	6.8K	27.81818182\r
Grammiffy.com	42	26	7.2K	27.81818182\r
Definetix.com	42	28	3.2K	27.81818182\r
Bossmagazine.co.uk	47	50	3.6K	27.81818182\r
Lawbattlefield.com	42	54	1K	27.81818182\r
Lawexpertise.net	42	65	1.8K	40.90909091\r
Thestylesmagazine.com	40	52	1K	27.81818182\r
Twilightmag.com	56	70	2.5K	40.90909091\r
Ttweakairline.com	30	51	1.5K	37.63636364\r
Thelaptopadviser.org	30	51	1.5K	37.63636364\r
Fintechasia.co.uk	30	51	1.5K	34.36363636\r
Gamificationsummit.org	30	51	1.5K	40.90909091\r
Zeromagtech.org	30	51	1.5K	40.90909091\r
Undergrowthgameline.com	30	51	2.5K	47.45454545\r
Ontpeconomy.blog	30	51	1.5K	40.90909091\r
Etsgamevent.net	30	51	1.5K	34.36363636\r
Designmode24com.com	30	51	1.5K	40.90909091\r
Dreamwithjeffcom.com	30	51	1.5K	34.36363636\r
Decoradtech.org	30	51	1.5K	40.90909091\r
Wutawhealth.org	30	51	1.5K	40.90909091\r
Undergrowthgameline.net	30	51	1.5K	34.36363636\r
Justalittlebite.co.uk	30	51	1.5K	40.90909091\r
Boring-magazine.com	30	51	1.5K	40.90909091\r
Wizzydigitalorg.org	30	51	1.5K	40.90909091\r
Sosoactive.net	30	51	5.5K	40.90909091\r
Homenumental.com	30	51	5.5K	44.18181818\r
Pblinuxtech.com	30	51	5.5K	44.18181818\r
Whatutalkingboutfamily.com	30	51	5.5K	44.18181818\r
Gamificationsummit.net	30	51	5.5K	34.36363636\r
Whitemagz.com	30	51	5.5K	44.18181818\r
Clearskinstudy.org	30	51	5.5K	44.18181818\r
Decoradhouse.org	30	51	5.5K	44.18181818\r
Lookwhatmomfoundgiveaways.com	30	51	6.7K	44.18181818\r
Ftasiaeconomy.com	30	51	3K	37.63636364\r
Etesportech.net	30	51	2K	37.63636364\r
Eurogamersonlinecom.com	30	51	5.5K	37.63636364\r
Qullnowisfap.org	30	51	7.5K	34.36363636\r
Carlahallbakes.net	30	51	2K	34.36363636\r
Whatutalkingboutwillis.co.uk	30	51	2K	44.18181818\r
Playbattlesquare.net	30	51	4.5K	40.90909091\r
Lwmfcrafts.com	30	51	2K	37.63636364\r
Alternativewaynet.net	30	51	2K	44.18181818\r
Undergrowthgameline.org	30	51	8.5K	40.90909091\r
Itwizzydigital.org	30	51	1.5K	34.36363636\r
Betterthistechs.org	30	51	5.5K	37.63636364\r
Jalbitehealth.net	30	51	4.9K	40.90909091\r
Misalignment.net	30	51	2.5K	37.63636364\r
Feedworldtech.org	30	51	2K	37.63636364\r
Plugboxlinuxorg.org	30	51	1.5K	34.36363636\r
Ftasiastock.com	30	51	7K	34.36363636\r
Thehaketech.org	30	51	1.5K	37.63636364\r
Thehometroters.com	30	51	1.9K	44.18181818\r
Whatutalkingboutwilis.org	30	51	1.5K	37.63636364\r
Blueflamepublishing.blog	30	51	2K	40.90909091\r
Jalbiteblog.org	30	51	1.5K	47.45454545\r
Etruegames.org	30	51	1.5K	37.63636364\r
Llblogkids.org	30	51	3K	37.63636364\r
Etherions.net	30	51	4.5K	40.90909091\r
Silicon-insider.net	30	51	1.3K	34.36363636\r
Nothing2hidenet.net	30	51	1.4K	34.36363636\r
Uggworldtech.org	30	51	15K	34.36363636\r
Etesportech.org	30	51	1.5K	34.36363636\r
Cwbiancamarket.org	30	51	1.5K	34.36363636\r
Thespoonathletic.org	30	51	3.5K	34.36363636\r
Ustudiobytes.com	30	51	1.5K	34.36363636\r
Zardgadjets.org	30	51	5.2K	34.36363636\r
Ttweakhotel.org	30	51	2.5K	34.36363636\r
Onpresscapital.org	30	51	1.5K	34.36363636\r
Lovelolablog.co.uk	30	51	10K	34.36363636\r
Ftasiamanagement.com	30	51	5.1K	34.36363636\r
Lcfgamevent.org	30	51	1.2K	34.36363636\r
Wutawhelp.org	30	51	3.1K	34.36363636\r
Wutawhacks.org	30	51	1.8K	34.36363636\r
Kdarchistyle.org	30	51	2.9K	34.36363636\r
Lwmftravel.org	30	51	1.6K	34.36363636\r
Famparentlife.org	30	51	1.9K	34.36363636\r
Impocoolmom.org	30	51	3.8K	34.36363636\r
Interworldradio.com	30	51	1.4K	34.36363636\r
Ontpeconomy.com	30	51	1.4K	34.36363636\r
Thehakevent.org	30	51	5.1K	34.36363636\r
Thesoundstour.co.uk	30	51	10.1K	34.36363636\r
Eurogamersonline.org	30	51	50.1K	60.54545455\r
Thehometrotterscom.com	30	51	1.4K	40.90909091\r
Drovenio.us	30	51	2.7K	34.36363636\r
Kongotechs.net	30	51	1.5K	34.36363636\r
Thekongotech.blog	30	51	1.9K	34.36363636\r
Fameperson.com	30	51	1.5K	34.36363636\r
Prosuccessguide.com	30	51	1.9K	34.36363636\r
Dailyvibesnow.com	30	51	1.8K	34.36363636\r
Hernlen.org	30	51	1.6K	40.90909091\r
Truebiohub.com	30	51	2.9K	40.90909091\r
Artthunderonthegulf.org	30	51	1.9K	40.90909091\r
Keloland.org	30	51	1K	40.90909091\r
Redandwhitemagzs.org	30	51	1K	40.90909091\r
Rcsdassk.com	30	51	4K	40.90909091\r
Hearthssgaming.net	30	51	1K	40.90909091\r
Susbluezilla.org	30	51	1K	40.90909091\r
Theserpentrogue.org	30	51	1.6K	40.90909091\r
Theturbogeek.org	30	51	1K	37.63636364\r
Disquantified.com	30	51	1K	34.36363636\r
Magazineoutstanders.com	30	51	1K	47.45454545\r
Ftasiafinance.com	30	51	1K	37.63636364\r
Worldoutstanders.com	30	51	1K	34.36363636\r
Jalbitesnacks.org	30	51	2K	34.36363636\r
Logicshout.com	30	51	1K	37.63636364\r
Webfreen.net	30	51	2K	37.63636364\r
Sendinfokit.org	30	51	1K	96.54545455\r
Thejalbiteblog.com	30	51	1K	34.36363636\r
Wisestudyspotcom.com	30	51	1.4K	44.18181818\r
Bvostfus.org	30	51	1.2K	44.18181818\r
Beaconsoftnet.net	30	51	1.7K	37.63636364\r
Lookwhatmomfound.org	30	51	1K	47.45454545\r
Mintpaldecor.com	30	51	3K	44.18181818\r
Cwbiancaparenting.net	30	51	2K	44.18181818\r
Lookwhatmomfoundgiveaway.com	30	51	4K	44.18181818\r
Feedcryptobuzz.org	30	51	2K	44.18181818\r
Fpmomlife.org	30	51	3.3K	44.18181818\r
Whatutalkingboutwillistyle.com	30	51	1K	40.90909091\r
Veohentak.org	30	51	1K	44.18181818\r
Zixyurevay.org	30	51	13K	44.18181818\r
Cilfqtacmitd.com	30	51	141K	44.18181818\r
Designmode24.info	30	51	1.4K	44.18181818\r
Wavetechglobal.co.uk	30	51	1K	40.90909091\r
Pblemulator.co.uk	30	51	5K	37.63636364\r
Traveltweaks.co.uk	30	51	1K	37.63636364\r
Myinteriorpalace.co.uk	30	51	1.1K	40.90909091\r
Betterthisfacts.com	30	51	8K	37.63636364\r
Uggcontroman.com	30	51	1.3K	60.54545455\r
Nippydrive.org	30	51	1K	60.54545455\r
Betterthistechs.net	30	51	1.3K	60.54545455\r
Lcfmodgeeks.net	30	51	11.8K	60.54545455\r
Iodaracing.org	30	51	1K	60.54545455\r
Artthunderonthegulf.com	30	51	1.6K	60.54545455\r
Theweeklyhealthiness.com	30	51	5.2K	60.54545455\r
Ttweakhotel.com	30	51	1.4K	60.54545455\r
Cyroket2585.net	30	51	1.3K	60.54545455\r
Thunderonthegulf.info	30	51	1.4K	60.54545455\r
Whatmomfound.com	30	51	2.7K	60.54545455\r
Lwmfcrafts.net	30	51	1K	60.54545455\r
Ftasiatrading.net	30	51	3.3K	60.54545455\r
Roarleveraging.com	30	51	2.5K	60.54545455\r
Whitemagz.net	30	51	9.4K	60.54545455\r
Meltingtopgames.org	30	51	2K	60.54545455\r
Decoradyard.com	30	51	2.1K	60.54545455\r
Decoradtech.net	30	51	4.9K	60.54545455\r
Etsgamevent.com	30	51	1K	60.54545455\r
Ustudiobytes.net	30	51	1K	60.54545455\r
Feedcryptobuzz.net	30	51	1.1K	60.54545455\r
Gamefallout.net	30	51	1K	60.54545455\r
Thespoonathletic.net	30	51	1K	60.54545455\r
Cwbiancavoyage.com	30	51	1K	60.54545455\r
Financeville.net	30	51	1.4K	60.54545455\r
Lcfgamevent.net	30	51	1K	60.54545455\r
Fpmomlife.com	30	51	1K	60.54545455\r
Uggcontroman.net	30	51	3K	60.54545455\r
Sffarehockey.com	30	51	1.2K	60.54545455\r
Pboxcomputers.com	30	51	12K	60.54545455\r
Ftasiafinance.net	30	51	2.3K	60.54545455\r
Teckaya.com	30	51	1K	60.54545455\r
Undergrowthgameline.info	30	51	1K	60.54545455\r
Llblogkids.com	30	51	1K	60.54545455\r
Bouncemediagroup.net	30	51	1.2K	60.54545455\r
Jalbiteblog.info	30	51	11.9K	60.54545455\r
Blueflamepublishing.org	30	51	1K	60.54545455\r
Traveltweaks.info	30	51	1K	60.54545455\r
Uggworldtech.net	30	51	1K	60.54545455\r
Ttweakairline.net	30	51	1.2K	60.54545455\r
Hssgamepad.com	30	51	2.2K	60.54545455\r
Ftasiaeconomy.info	30	51	1.2K	60.54545455\r
Wutawhealth.com	30	51	2.23.2K	60.54545455\r
Lcfgamestick.com	30	51	1K	60.54545455\r
Scookievent.org	30	51	1K	60.54545455\r
Thesoundstour.net	30	51	10K	60.54545455\r
Aajkitajikhabar.net	30	51	1K	60.54545455\r
Riproar.org	30	51	1.9K	60.54545455\r
Projectrethink.co.uk	30	51	10K	60.54545455\r
Etruegames.com	30	51	1K	60.54545455\r
Ftasiamanagement.net	30	51	1K	60.54545455\r
Lovelolablog.info	30	51	1K	60.54545455\r
Tportstick.com	30	51	1K	60.54545455\r
Jalbitehealth.com	30	51	1K	60.54545455\r
Lcftechmods.com	30	51	2.2K	60.54545455\r
Feedworldtech.com	30	51	1K	60.54545455\r
Pblinuxtech.org	30	51	1K	60.54545455\r
Wutawhacks.com	30	51	1K	60.54545455\r
Cwbiancaparenting.com	30	51	1K	60.54545455\r
Thehaketech.com	30	51	1.1K	60.54545455\r
Betterthiscosmos.net	30	51	1.9K	60.54545455\r
Etesportech.com	30	51	1.1K	60.54545455\r
Lwmftravel.com	30	51	1.6K	60.54545455\r
Conversationswithbianca.net	30	51	2.9K	60.54545455\r
Jalbiteworldfood.com	30	51	1K	60.54545455\r
Playbattlesquare.org	30	51	1K	60.54545455\r
Exploreyouraim.com	30	51	1.8K	60.54545455\r
Mygamerank.org	30	51	1K	60.54545455\r
Crewdisquantified.com	30	51	1.1K	60.54545455\r
Gamificationsummit.info	30	51	4.9K	60.54545455\r
Justalittlebite.info	30	51	4K	60.54545455\r
Fumbleboard.org	30	51	3K	60.54545455\r
Abithelp.org	30	51	1K	60.54545455\r
Theweeklyhealthiness.net	30	51	1.1K	44.18181818\r
Onpresscapital.us	30	51	8K	40.90909091\r
Myfastbrokeres.com	30	51	1K	37.63636364\r
Tgarchivegaming.net	30	51	4.6K	34.36363636\r
Etruesportscom.com	30	51	2.4K	34.36363636\r
Teamaelftech.org	30	51	3K	37.63636364\r
Kdarchistyle.org	30	51	3K	37.63636364\r
Theeurogamers.com	30	51	2K	34.36363636\r
Lwmfhotels.blog	30	51	7.1K	37.63636364\r
Parentingtipsfpmomhacks.com	30	51	2.7K	37.63636364\r
Financeville.org	30	51	1.2K	34.36363636\r
Hometrotters.org	30	51	1K	40.90909091\r
Fpmomtips.net	30	51	28K	37.63636364\r
Decoratorsadvice.com	30	51	1K	47.45454545\r
Zvodeps.org	30	51	1.3K	40.90909091\r
Wimpykid.org	30	51	1.2K	40.90909091\r
Kdarchitectsnet.com	30	51	2.9K	44.18181818\r
Myfavouriteplacesorg.org	30	51	2.1K	37.63636364\r
Pushyourdesign.co.uk	30	51	1K	37.63636364\r
Decadgarden.com	30	51	31.9K	40.90909091\r
Wutawhealth.net	30	51	1K	40.90909091\r
Mangadex.org.uk	41	53	31.9K	27.81818182\r
Theitaliancorner.com.au	15	10	10K	57.27272727\r
Wanderaustralia.com.au	10	15	1K	44.18181818\r
Supernumber.com.au	25	30	2K	57.27272727\r
Chriswatson.com.au	20	15	1K	44.18181818\r
Uplodarticle.com	11	16	87K	40.90909091\r
Mytecharm.blog	6	11	22K	27.81818182\r
Travelhubdubai.com	5	11	69K	50.72727273\r
Simplifydiggs.us	42	33	3.1K	24.54545455\r
Instapv.io	39	36	34K	34.36363636\r
Cloud-security-tips.com	42	39	50K	24.54545455\r
Droven.io	44	36	134K	40.90909091\r
Aelftech.com	38	33	10K	34.36363636\r
Uploadarticleguestposting.com	7	11	23K	34.36363636\r
Hawkecentre.com	46	36	2.2K	34.36363636\r
Almawadahit.com	11	7	4.2K	31.09090909\r
Thealitekeepsafe.com	39	36	11K	34.36363636\r
Uploadblog.de	43	33	1K	34.36363636\r
Pploadwords.com	11	9	14K	34.36363636\r
Glorvix.com	7	11	7.3K	34.36363636\r
Downgram.com Pure Social Media Website	26	10	29K	40.90909091\r
Bepviet.net	15	25	1K	40.90909091\r
Rynzaa.com	4	38	75.2K	27.81818182\r
Egambsino.com	41	8	2.2K	44.18181818\r
Bgmipubg.com	40	15	4.2K	44.18181818\r
Punsverse.com	43	25	1K	27.81818182\r
Grammaryx.com	42	28	2K	27.81818182\r
Puncafe.com	42	23	1K	27.81818182\r
Xnamez.com	42	24	1.1K	27.81818182\r
Hydrogenexec.com	44	22	1.9K	27.81818182\r
Whataburgersmenu.us	44	27	3.7K	27.81818182\r
Responshub.com	51	48	4K	50.72727273\r
Lyricblooms.com	45	47	22K	50.72727273\r
Guidenix.com	50	47	4K	50.72727273\r
Horizonemagazine.com	52	61	5K	50.72727273\r
Spellingmistake.org	10	10	37K	27.81818182\r
Bato-to.com	50	55	13.3K	37.63636364\r
Moviesda.com.in	41	55	414.7K	24.54545455\r
Movierulzs.com.in	41	53	67.2K	24.54545455\r
Matlablegend.com	30	37	49.4K	24.54545455\r
Techfillip.com	40	38	5.8K	24.54545455\r
Technazen.com	30	40	8.4K	24.54545455\r
Nacloapparel.com	41	37	9.4K	24.54545455\r
Stylemintz.com	36	37	24.8K	24.54545455\r
Usmagazine.co.uk	39	30	3.5K	27.81818182\r
The-cashstark.com	40	43	52.7K	27.81818182\r
Thewallpostmedia.com	40	50	37.1K	27.81818182\r
Thebaddiehub.blog	48	50	129.8K	27.81818182\r
www.Thetechsslash.com	48	60	20.6K	37.63636364\r
Thealkhaleejcenter.com	15	52	7.1K	40.90909091\r
Blooket.blog	30	25	1K	27.81818182\r
Onionplay.co.uk	50	51	1.8K	37.63636364\r
Sistrology.org	46	52	2.4K	37.63636364\r
Tuffermagazine.com	42	53	1.9K	27.81818182\r
Influencersgonewild.ca	36	25	7.3K	27.81818182\r
Thenexusmagazine.com	10	15	1.8K	24.54545455\r
Discoverreleased.com	10	13	3K	24.54545455\r
Fundfireinsights.com	40	42	41.5K	27.81818182\r
Wealthsplatter.com	42	33	34K	31.09090909\r
Englishtistic.com	38	31	31K	27.81818182\r
Grammariene.com	37	36	6.2K	27.81818182\r
Wordmaticz.com	4	7	8.9K	27.81818182\r
Rconnect.com.in	34	31	3.3K	24.54545455\r
Flixbaba.co.uk	43	33	34K	31.09090909\r
Baddies-hub.org.uk	42	31	8.5K	27.81818182\r
Cexuk.co.uk	7	11	7.3K	27.81818182\r
Thecoomersu.com	5	7	1.9K	27.81818182\r
Seebloghub.com	42	29	2.6K	27.81818182\r
Zippermagazine.co.uk	45	40	10.9K	27.81818182\r
Dotblessings.com	52	45	2.1K	31.09090909\r
Eathourstoday.com	41	65	11K	57.27272727\r
Grammaticzy.com	10	10	6K	27.81818182\r
Grammielearn.com	40	47	98K	27.81818182\r
Thisvid.us	42	12	36K	31.09090909\r
Meaningloop.com	59	65	20K	40.90909091\r
Grammarreader.com	37	70	19K	40.90909091\r
Rizzlantic.com	35	65	15K	40.90909091\r
Yonochomp.org	54	52	9.3K	24.54545455\r
Newsversa.net	53	35	1.9K	24.54545455\r
Brumeblogcom.com	64	40	6.6K	24.54545455\r
Thestructurespy.com	47	43	6K	24.54545455\r
Theyonochomp.com	54	57	4.2K	24.54545455\r
Bloglimit.net	57	38	2.4K	24.54545455\r
Ymydz55.com	50	56	7.1K	24.54545455\r
Techslaash.org	43	46	5.1K	24.54545455\r
Onlyworkmoods.org	50	45	7.5K	24.54545455\r
Cookape.net	43	34	2.1K	24.54545455\r
Bleepmedia.org	54	43	1.8K	24.54545455\r
Techyfreak.org	56	62	1.4K	24.54545455\r
Buntrigyoz.com	54	53	1.3K	24.54545455\r
Aaryaeditz.co.uk	43	43	3.4K	24.54545455\r
Contexto.uk	45	53	46.5K	27.81818182\r
Inflexinsight.com	52	60	2.5K	40.90909091\r
Dailydetails.org	47	50	10.6K	27.81818182\r
Novramagazine.co.uk	42	50	9.2K	27.81818182\r
Howmanyofmes.com	39	39	10K	24.54545455\r
Aisofting.com	5	43	2K	24.54545455\r
Techhubcore.com	42	15	10.8K	34.36363636\r
Insidernewz.co.uk	45	58	22.4K	31.09090909\r
Spiceweekly.co.uk	40	45	20K	27.81818182\r
Whispernames.com	31	60	2K	50.72727273\r
Globalanimalsfacts.com	35	61	4K	50.72727273\r
Zingyzon.net	43	50	7.6K	24.54545455\r
Mygamerank.net	30	39	24K	34.36363636\r
Hanisays.com	42	50	5K	31.09090909\r
Moneybetterthisworld.org	41	47	10K	47.45454545\r
Novelsnagri.com	42	50	6K	31.09090909\r
Uploadblogg.com	45	10	4K	37.63636364\r
Redeepseek.com	50	70	198K	27.81818182\r
Fantasynamerealm.com	41	65	3K	50.72727273\r
Theinsightfulmagazine.com	35	51	34K	44.18181818\r
Bloket.blog	10	10	8K	27.81818182\r
Ourcodeworld.com	48	56	20K	44.18181818\r
Cyroket2585.com	40	48	3K	34.36363636\r
Punspure.com	61	28	19K	40.90909091\r
Repllynova.com	14	35	17K	40.90909091\r
Librarypun.com	46	66	14K	40.90909091\r
Thetubegalore.com	32	61	2K	24.54545455\r
Thevyvymanga.com	39	63	2.1K	34.36363636\r
Thetgtube.com	37	62	2.6K	24.54545455\r
Shivalordimage.com	41	69	70.9K	44.18181818\r
Robthecoins.net	41	56	50.9K	44.18181818\r
Getwhocares.org	41	56	11.5K	44.18181818\r
Thestripesblog.org	41	56	7.9K	40.90909091\r
Homeydecors.com	41	56	1.9K	34.36363636\r
Theweeklyhealthiness.org	41	56	3.8K	37.63636364\r
Cookiesforlove.net	41	56	3.6K	40.90909091\r
Itdecoratoradvice.com	41	56	6K	34.36363636\r
Thefamefacts.com	41	56	2.6K	34.36363636\r
Thevibepost.com	41	56	7.8K	34.36363636\r
Skipthegerms.org	41	56	1.9K	40.90909091\r
Harmonicodecom.com	41	56	4.5K	40.90909091\r
Fhthopefood.co.uk	41	56	7.9K	34.36363636\r
Redandwhitemagzcom.com	41	56	2.7K	44.18181818\r
Etherionscom.com	41	56	4.9K	40.90909091\r
Latestdecoratoradvice.com	41	56	4.9K	40.90909091\r
Mygamerank.net	41	56	35K	34.36363636\r
Uploadblogg.com	41	56	4.1K	40.90909091\r
Whatutalkingboutwillistyle.org	41	56	3.8K	37.63636364\r
Inventivelwmfcrafts.org	41	56	2.7K	37.63636364\r
Almawadahit.org	41	56	10K	40.90909091\r
Whatutalkingboutwillisgift.com	41	56	5.8K	40.90909091\r
Betterthiscosmos.org	41	56	1.3K	44.18181818\r
Freelogopng.net	41	56	11K	44.18181818\r
Wurduxalgoilds.org	41	56	25K	31.09090909\r
Oneonenews.org	40+	40	12K	24.54545455\r
Techgroup21.net	40+	18	2K	24.54545455\r
Zasduspapkilaz.com	40+	18	1K	24.54545455\r
Techsslasshcom.com	40+	0	2K	24.54545455\r
Nestedmagazine.org	40+	18	23K	24.54545455\r
Siliconelite.net	40+	18	1K	24.54545455\r
Fitnesscrisp.net	40+	0	1K	24.54545455\r
Nexyblog.net	40+	38	2K	24.54545455\r
Fappiningblog.com	40+	38	1K	24.54545455\r
Ideafable.co.uk	40+	38	1K	24.54545455\r
Elevjihad.com	40+	38	1K	24.54545455\r
Questbe.org	40+	35	2K	24.54545455\r
Labortodaynews.net	40+	35	1K	24.54545455\r
Pixelguest.net	40+	27	1K	24.54545455\r
Bahrainmagazine.co.uk	40+	35	1K	24.54545455\r
Newscloude.net	40+	46	23K	24.54545455\r
Magazinetops.org	40+	45	12K	24.54545455\r
Newsrealtors.org	40+	45	4K	24.54545455\r
Ikcomplo.co.uk	40+	42	6K	24.54545455\r
Mitchnews.net	40+	44	13K	24.54545455\r
Totaltechdirect.org	40+	39	1K	24.54545455\r
Todaymagazineonlinecom.com	40+	46	4K	24.54545455\r
Polandmagazine.org	40+	44	6K	24.54545455\r
Mindnexy.net	40+	44	1K	24.54545455\r
Perujournal.net	40+	39	3K	24.54545455\r
Profitzentry.net	40+	45	3K	24.54545455\r
Techreeks.net	40+	40	1K	24.54545455\r
Sfyrigmatacom.com	40+	43	1K	24.54545455\r
Buzztricks.org	40+	45	21K	24.54545455\r
Wwwprojectrethink.org	40+	45	1K	24.54545455\r
Mindnexy.org	40+	47	2K	24.54545455\r
Techsslaash-com.net	40+	45	6K	24.54545455\r
Wwwshopnaclo.com	40+	42	2K	24.54545455\r
Geldnews.org	40+	45	2K	24.54545455\r
Heelnewscom.com	40+	38	2K	24.54545455\r
Newsaby.net	40+	44	1K	24.54545455\r
Techjbcom.com	40+	31	1K	24.54545455\r
Fitnesscrisp.org	40+	45	2K	24.54545455\r
Newsspek.net	40+	38	1K	24.54545455\r
Wwwdisquantified.org	40+	44	3K	24.54545455\r
Techsslassh.org	40+	47	10K	24.54545455\r
Petrusko.org	40+	46	5K	24.54545455\r
Yonosamacharcom.com	40+	28	3K	24.54545455\r
Newsbarrier.org	40+	38	1K	24.54545455\r
Newsbrass.org	40+	35	2K	24.54545455\r
Zaranews.net	40+	42	1K	24.54545455\r
Blogexample.org	40+	53	1.5K	24.54545455\r
Theoperatormagazine.net	40+	52	21K	24.54545455\r
Napbuzz.org	40+	52	14K	24.54545455\r
Techmtv.org	40+	47	1K	24.54545455\r
Techiadd.org	40+	45	2K	24.54545455\r
Investanime.org	40+	48	1K	24.54545455\r
Kuttymovies7.co.uk	40+	38	1K	24.54545455\r
Turkeyreport.org	40+	47	6K	24.54545455\r
Bugsnews.org	40+	46	9K	24.54545455\r
Totaltechdirect.net	40+	47	1K	24.54545455\r
Lowernews.org	40+	46	1K	24.54545455\r
Wwwtheboringmagazine.com	40+	38	1K	24.54545455\r
Newsfault.co.uk	40+	38	1K	24.54545455\r
Edunexas.org	40+	44	1K	24.54545455\r
Qpoenergy.net	40+	38	1K	24.54545455\r
Compilerutility.net	40+	38	3K	24.54545455\r
Modernnewsmedia.net	40+	38	2K	24.54545455\r
Glazertech.net	40+	27	17K	24.54545455\r
Magazinetops.net	40+	49	4K	24.54545455\r
Donorstech.net	40+	49	27K	24.54545455\r
Vieredbuay.com	40+	25	7K	24.54545455\r
Mtsnews.net	40+	41	2K	24.54545455\r
Bugsnewscom.com	40+	40	1K	24.54545455\r
Kulttech.org	40+	38	2K	24.54545455\r
Bikestech.org	40+	40	3K	24.54545455\r
Nurturerealytr.org	40+	48	8K	24.54545455\r
Magazinetopscom.com	40+	47	3K	24.54545455\r
Stocksmarkettips.net	40+	44	102K	24.54545455\r
Techwail.net	40+	38	3K	24.54545455\r
Figbat.net	40+	24	3K	24.54545455\r
Technobeings.net	40+	46	2K	24.54545455\r
Renewsupply.org	40+	38	2K	24.54545455\r
Techbritish.net	40+	47	2K	24.54545455\r
Buzztricks.co.uk	40+	18	1K	24.54545455\r
Newshyper.org	40+	38	1K	24.54545455\r
Newsmario.org	40+	47	2K	24.54545455\r
Reclamatomplo.org	40+	47	1K	24.54545455\r
Newsgentle.net	40+	38	6K	24.54545455\r
Piggynews.net	40+	46	3K	24.54545455\r
Omanreport.net	40+	33	1K	24.54545455\r
Newsfaa.org	40+	38	1K	24.54545455\r
Newsropecom.com	40+	31	2K	24.54545455\r
Newsgentlecom.com	40+	38	1K	24.54545455\r
Newscrackle.org	40+	38	1K	24.54545455\r
Techguporg.net	40+	37	8K	24.54545455\r
Areyoufashion.net	40+	24	12K	24.54545455\r
Pikenews.net	40+	38	16K	24.54545455\r
Newsrealtors.net	40+	47	10K	24.54545455\r
Renewsupply.net	40+	18	2K	24.54545455\r
Techbookmark.net	40+	10	1K	24.54545455\r
Techpora.co.uk	40+	53	192K	24.54545455\r
Dustruco.com	40+	48	9K	24.54545455\r
Sheend.net	40+	51	82K	24.54545455\r
Technuktinet.net	40+	38	1K	24.54545455\r
Discovertechinfo.net	40+	52	3K	24.54545455\r
Antmagazine.org	40+	47	2K	24.54545455\r
Timesofsingapore.net	40+	47	2K	24.54545455\r
Sluttech.org	40+	47	3K	24.54545455\r
Apkekorg.org	40+	15	2K	24.54545455\r
Infotechstack.net	40+	47	2K	24.54545455\r
Techactually.net	40+	47	1K	24.54545455\r
Loadedcorner.org	40+	18	5K	24.54545455\r
Techtvhubcom.com	40+	47	2K	24.54545455\r
Newsreversecom.org	40+	48	10K	24.54545455\r
Simplegirlpic.net	40+	38	1K	24.54545455\r
Shortbioideascom.com	40+	24	1K	24.54545455\r
Gamevalourcom.org	40+	45	10K	24.54545455\r
Newsslug.org	40+	38	1K	24.54545455\r
Piggynews.co.uk	40+	18	1K	24.54545455\r
Techyhittools.net	40+	46	1K	24.54545455\r
Newsreversecom.com	40+	0	12K	24.54545455\r
Newsreverse.net	40+	0	4K	24.54545455\r
Globemedianews.net	40+	49	9K	24.54545455\r
Gecktech.net	40+	41	4K	24.54545455\r
Optimistindia.net	40+	42	3K	24.54545455\r
Techaram.net	40+	45	1K	24.54545455\r
Ourbeautymagazine.com	41	51	11K	31.09090909\r
Definecorrect.com	41	40	33K	57.27272727\r
Chucklesnames.com	51	61	3K	50.72727273\r
Quoticnest.com	51	60	6K	50.72727273\r
Animaldive.com	52	62	3K	50.72727273\r
Replyideas.com	50	62	8K	50.72727273\r
Myflashyhome.com	41	45	5K	44.18181818\r
Snapjotzs.com	60	53	18.7K	27.81818182\r
Remoteworksetup.org	43	54	11.7K	27.81818182\r
Diatamagazine.com	37	40	3K	24.54545455\r
Ucaremagazine.com	45	64	101.1K	31.09090909\r
Footballclubmenu.com	40	34	4K	34.36363636\r
Strategicplannings.net	43	30	29K	63.81818182\r
Logicalshout.org	33	58	4K	34.36363636\r
Magfusehubcom.com	20	15	5K	27.81818182\r
Pocketcasts.com	89	84	300K	27.81818182\r
Linezforlife.com	39	64	24K	40.90909091\r
Relatejokes.com	37	62	4K	40.90909091\r
Punslogo.com	30	61	4K	40.90909091\r
Guestinginsider.com	38	15	4K	27.81818182\r
Viralreleased.com	20	25	8K	27.81818182\r
Cloudpfp.com	15	36	9K	40.90909091\r
Softpfp.com	15	16	3K	40.90909091\r
Voxerina.com	40	51	3K	27.81818182\r
Internetchicks.news	40	51	12K	27.81818182\r
Postinsight.co.uk	41	56	7.5K	37.63636364\r
Rollingstonenews.com	32	49	1.3K	24.54545455\r
Newspepar.net	45	34	1K	24.54545455\r
Robuxizz.com	29	40	1K	24.54545455\r
Anxietymedicationreleaf.co.uk	45	34	1K	24.54545455\r
Slotswe368.org	34	40	1K	24.54545455\r
Hammerof-thor.com	40	29	1K	24.54545455\r
Fintechzoom.com.au	29	34	1K	24.54545455\r
Arvomagazine.com	45	53	6.5K	24.54545455\r
Buonanotteimmagine.com	40	32	134K	40.90909091\r
Thethesindi.com	41	51	3K	27.81818182\r
Carridehub.com	39	52	1K	27.81818182\r
Skymoviesin.com	33	21	2.5	24.54545455\r
Thenreer.com	40	52	1.2k	27.81818182\r
Myapkprotech.com	40	52	30.3k	27.81818182\r
Myglorvix.com	40	52	1.7k	27.81818182\r
Myzavalio.com	40	51	4.9k	27.81818182\r
Blessingsprout.com	39	32	1.4k	34.36363636\r
Ohmypuns.com	41	51	4.8k	34.36363636\r
Theaavot.com	34	53	9.4k	24.54545455\r
Thewayground.com	33	0	1.2k	24.54545455\r
www-Baddiehub.com	28	20	4.9k	24.54545455\r
Thebralad.com	41	53	1k	24.54545455\r
www-Vyvymanga.com	33	54	18.6k	24.54545455\r
Theupdatearticle.com	5	53	2.3k	24.54545455\r
Mygonzay.com	40	52	10.1k	27.81818182\r
Thecamocrypt.com	1	0	50.3k	27.81818182\r
Theonlyworkmoods.com	40	53	1k	27.81818182\r
Myuploadblog.com	40	51	8.2k	27.81818182\r
Wallpostmedia.com.co	40	54	7.4k	27.81818182\r
Therenvoit.com	40	53	2.3k	27.81818182\r
Thevocalnewsmedia.com	40	55	1k	27.81818182\r
Myaelftech.com	39	53	4.7k	27.81818182\r
Decoratoradvice.com.co	40	52	1.2k	27.81818182\r
Thesilsics.com	40	54	2.9k	27.81818182\r
Thevoomixi.com	40	52	1k	27.81818182\r
Myuploadwords.com	40	53	1.9k	27.81818182\r
Theblooginga.com	40	53	1k	27.81818182\r
Mytwastia.com	39	54	1.8k	27.81818182\r
Economicweekly.news	40	55	4.6k	27.81818182\r
Mybumpdots.com	39	52	73.4k	27.81818182\r
Mybouncemediagroup.com	40	53	1.5k	27.81818182\r
Thetechiadd.com	40	53	3.2k	27.81818182\r
Myuploadarticle.com	40	51	262.4k	27.81818182\r
BossMagazine.co.uk	40	53	2.1k	34.36363636\r
Thewebinkey.com	40	52	40.3k	27.81818182\r
Xxbrit.org	40	54	20.7k	27.81818182\r
Thealkhaleejcenter.com	40	33	7.2k	40.90909091\r
The-cashstark.com	41	33	67k	27.81818182\r
Whatutalkingboutwillis.com.co	34	53	2.2k	27.81818182\r
The-wellhealthorganic.com	35	26	49.1k	24.54545455\r
Thestudyxcel.com	38	51	6.1k	27.81818182\r
Themagzyminutes.com	39	54	39.7k	27.81818182\r
Xxbrit.uk	40	53	14.7k	27.81818182\r
Thewallpostmedia.com	39	33	17.2k	27.81818182\r
Thebaddiehub.blog	42	32	17.1k	27.81818182\r
EyesOnHunt.com	41	50	5.2k	27.81818182\r
Binilyaas.com	39	52	30.6k	27.81818182\r
Readwritetips.com	55	35	72.6K	60.54545455\r
Atemuser.com	45	30	42K	50.72727273\r
Terasworld.com	44	15	8.9K	50.72727273\r
Whatitallbelike.com	63	28	4.7K	50.72727273`,iw=`Domains	DR	Traffic	PriceUSD\r
besttarahi.com	69	95k	175.0909091\r
freelogopng.com	70	75k	165.2727273\r
bookvibe.com	71	62k	204.5454545\r
turbogeek.org	70	46k	227.4545455\r
webtosociety.com	64	45k	155.4545455\r
tomoson.com	70	43k	243.8181818\r
traveltweaks.com	68	42k	217.6363636\r
playmyworld.com	70	39k	198\r
feedbuzzard.com	70	36k	243.8181818\r
thriftyevents.net	56	32k	132.5454545\r
booksummaryclub.com	72	32k	145.6363636\r
bitclassic.org	50	31k	139.0909091\r
whatutalkingboutwillis.com	70	31k	227.4545455\r
eurogamersonline.com	60	30k	165.2727273\r
exposmall.com	59	27k	175.0909091\r
imagineergames.com	60	26k	145.6363636\r
amairaskincare.com.au	60	24k	145.6363636\r
redandwhitemagz.com	65	24k	165.2727273\r
premiumjoy.com	58	23k	155.4545455\r
arcyart.com	63	23k	217.6363636\r
decoratoradvice.com	72	22k	243.8181818\r
areapatch.com	60	22k	155.4545455\r
programgeeks.net	63	21k	139.0909091\r
articoolo.com	70	21k	175.0909091\r
mywirelesscoupons.com	66	21k	155.4545455\r
playbattlesquare.com	71	19k	220.9090909\r
betterthisworld.com	71	19k	243.8181818\r
pondershort.com	59	18k	145.6363636\r
anwire.org	62	18k	165.2727273\r
letsbuildup.org	63	18k	155.4545455\r
plicabig.com	50	18k	145.6363636\r
terabytelabs.net	61	18k	145.6363636\r
etruesports.com	69	17k	175.0909091\r
venky12.com	46	17k	86.72727273\r
allaxess.com	57	17k	165.2727273\r
majinoukari.com	51	16k	93.27272727\r
bouncemediagroup.com	67	16k	175.0909091\r
aliensync.com	69	16k	198\r
lyncconf.com	70	16k	243.8181818\r
theportablegamer.com	69	16k	198\r
misumiskincare.com	70	16k	129.2727273\r
thinkofgames.com	62	15k	175.0909091\r
wizzydigital.org	67	15k	165.2727273\r
bageltechnews.com	54	15k	139.0909091\r
socialbizmagazine.com	58	15k	165.2727273\r
entretech.org	57	15k	155.4545455\r
thunderonthegulf.com	64	15k	175.0909091\r
propagatenetworks.com	43	14k	119.4545455\r
innewstoday.net	66	14k	165.2727273\r
netcurtains.org	58	14k	129.2727273\r
myfavouriteplaces.org	58	14k	165.2727273\r
naturaplug.com	56	13k	155.4545455\r
crypticstreet.com	57	13k	155.4545455\r
voicesofconservation.org	60	13k	155.4545455\r
timeshealthmag.com	60	13k	119.4545455\r
hyperlogic.org	67	13k	139.0909091\r
cryptopronetwork.com	61	13k	139.0909091\r
goldengatemax.shop	58	12k	145.6363636\r
nobullswipe.com	45	12k	155.4545455\r
befitnatic.com	60	12k	145.6363636\r
bigboxratio.com	66	12k	198\r
severedbytes.net	60	11k	145.6363636\r
nixcoders.org	70	11k	165.2727273\r
disquantified.org	70	11k	139.0909091\r
songoftruth.org	56	11k	129.2727273\r
lookwhatmomfound.com	69	10k	198\r
evolvedgross.com	60	10k	139.0909091\r
myinternetaccess.net	56	10k	129.2727273\r
hearthstats.net	59	9k	175.0909091\r
cloudysocial.com	52	9k	129.2727273\r
coststatus.com	53	9k	129.2727273\r
techidemics.com	60	9k	165.2727273\r
avstarnews.com	57	9k	145.6363636\r
homerocketrealty.com	56	9k	132.5454545\r
improveville.com	48	9k	129.2727273\r
gamificationsummit.com	69	9k	198\r
annoncetravesti.com	55	8k	139.0909091\r
fangchanxiu.com	53	8k	93.27272727\r
shortengine.com	52	8k	139.0909091\r
famousparenting.com	71	8k	204.5454545\r
fintechasia.net	65	8k	165.2727273\r
revolvertech.com	64	8k	165.2727273\r
kdarchitects.net	65	8k	207.8181818\r
thesoundstour.com	63	8k	188.1818182\r
grossoptions.com	53	8k	165.2727273\r
latestsportsbuzz.com	50	8k	103.0909091\r
canyongross.com	55	8k	132.5454545\r
webbizmagnet.com	49	8k	103.0909091\r
etherions.com	68	8k	155.4545455\r
simplyseven.net	59	7k	139.0909091\r
ninjabytezone.com	44	7k	93.27272727\r
moneysideoflife.com	55	7k	198\r
mobilehomeexteriors.com	58	7k	132.5454545\r
debsllc.org	47	7k	122.7272727\r
21strongfoundation.org	55	7k	129.2727273\r
setupseeker.xyz	45	7k	155.4545455\r
digitalnewsalerts.com	58	7k	198\r
bruneiarchitecture.com	48	7k	76.90909091\r
saharahausa.com	66	7k	139.0909091\r
freeworlder.org	51	7k	145.6363636\r
thehometrotters.com	66	7k	184.9090909\r
modernbusinesslife.com	59	6k	129.2727273\r
bitnation-blog.com	60	6k	155.4545455\r
waptirick.com	44	6k	145.6363636\r
mobilecreative.org	53	6k	132.5454545\r
bottlecrunch.com	58	6k	139.0909091\r
mygreenbucks.net	69	6k	165.2727273\r
gamerunitynet.com	49	6k	93.27272727\r
digitalrgs.org	58	6k	139.0909091\r
futuretechgirls.com	55	6k	155.4545455\r
shopnaclo.com	60	6k	129.2727273\r
sportnewsplanet.com	50	6k	103.0909091\r
elitetechspark.com	45	6k	86.72727273\r
wavetechglobal.com	56	6k	145.6363636\r
outsidedomain.com	54	6k	76.90909091\r
healthsciencesforum.com	62	6k	243.8181818\r
thegamearchives.com	59	6k	198\r
pushyourdesign.com	49	6k	198\r
moneyaisle.com	49	6k	129.2727273\r
myprintile.com	55	5k	103.0909091\r
theplaycentre.org	63	5k	175.0909091\r
axiumtech.net	55	5k	119.4545455\r
everythingnew.net	53	5k	103.0909091\r
ck2generator.com	55	5k	119.4545455\r
rightnowpath.net	44	5k	139.0909091\r
blueflamepublishing.net	58	5k	145.6363636\r
essec-kpmg.net	47	5k	93.27272727\r
beaconsoft.net	66	5k	227.4545455\r
lotterygamedevelopers.com	51	5k	198\r
topicsolutions.net	60	5k	139.0909091\r
onthisveryspot.com	56	5k	165.2727273\r
cookiesforlove.com	60	5k	93.27272727\r
bestautoxperts.com	48	5k	93.27272727\r
redwebzine.org	50	5k	116.1818182\r
ssq727.com	53	5k	129.2727273\r
areatsunami.com	50	5k	139.0909091\r
ontpress.com	50	5k	119.4545455\r
fightingforfutures.org	47	5k	129.2727273\r
unfgaming.net	63	5k	165.2727273\r
movieda2023.com	49	5k	119.4545455\r
thewritetrackpodcast.com	54	5k	129.2727273\r
getwhocares.com	53	5k	103.0909091\r
electronmagazine.com	56	5k	139.0909091\r
projectrethink.org	51	5k	145.6363636\r
lapwinglabs.com	53	5k	132.5454545\r
redzonegross.com	51	5k	129.2727273\r
phonedeck.net	55	5k	129.2727273\r
masterrealtysolutions.com	52	5k	165.2727273\r
embedtree.com	64	5k	139.0909091\r
novelteagames.com	48	4k	93.27272727\r
emersonicon.com	52	4k	145.6363636\r
val9jamusic.com	49	4k	76.90909091\r
tamilkolli.com	56	4k	93.27272727\r
latesthealthtricks.com	53	4k	116.1818182\r
greenheal.net	64	4k	198\r
seattlesportsonline.com	58	4k	155.4545455\r
gatorgross.com	62	4k	145.6363636\r
liveamoment.org	50	4k	119.4545455\r
fzetmovies.com	49	4k	93.27272727\r
g15tools.com	63	4k	145.6363636\r
adventuretwo.net	58	4k	155.4545455\r
thechannelrace.org	52	4k	119.4545455\r
diyworld4life.com	54	4k	145.6363636\r
loga.mx	51	4k	198\r
txepc.org	55	4k	139.0909091\r
travellingapples.com	54	4k	119.4545455\r
thegameland.net	61	4k	119.4545455\r
gfxmaker.com	61	4k	175.0909091\r
greenscreensystems.com	46	4k	103.0909091\r
plutoscreen.com	42	4k	93.27272727\r
theboringmagazine.com	60	4k	175.0909091\r
robthecoins.com	59	4k	155.4545455\r
goodnever.com	52	4k	165.2727273\r
gamerflicks.com	58	3k	119.4545455\r
skillsclone.com	52	3k	103.0909091\r
luxuryinteriors.org	56	3k	122.7272727\r
proxicroxy.com	50	3k	119.4545455\r
techoelite.com	65	3k	155.4545455\r
virtualaia.com	47	3k	93.27272727\r
activepropertycare.com	59	3k	188.1818182\r
tamilyogiisaimini.com	51	3k	76.90909091\r
designmode24.com	60	3k	145.6363636\r
babesproduct.com	52	3k	145.6363636\r
usefulideas.net	60	3k	93.27272727\r
pulsecolon.com	48	3k	129.2727273\r
enginefirm.com	50	3k	116.1818182\r
housereal.net	56	3k	93.27272727\r
walkingasone.net	32	3k	93.27272727\r
plugboxlinux.org	48	3k	155.4545455\r
treeleftbigshop.com	51	3k	155.4545455\r
manpuku-shop.com	51	3k	93.27272727\r
snapsource.net	52	3k	119.4545455\r
that-bites.org	50	3k	86.72727273\r
aeonscope.net	50	3k	139.0909091\r
fabricconfirm.com	44	3k	86.72727273\r
startingblockonline.com	55	3k	119.4545455\r
bddqwy.com	47	3k	129.2727273\r
theweeklyspoon.com	49	3k	119.4545455\r
codemastersconnect.com	49	3k	93.27272727\r
jun88game.org	39	3k	139.0909091\r
thelaptopadviser.com	46	3k	129.2727273\r
thestripesblog.com	65	3k	155.4545455\r
kronosshort.com	51	3k	129.2727273\r
networkfinds.com	55	3k	119.4545455\r
defstartup.org	54	3k	129.2727273\r
socceragency.net	53	3k	145.6363636\r
eyexcon.com	63	3k	198\r
middleclasshomes.net	54	3k	129.2727273\r
xiangaijiaqi.com	51	3k	103.0909091\r
depotheap.com	44	3k	139.0909091\r
conversationswithrina.com	47	3k	145.6363636\r
simcookie.com	53	3k	165.2727273\r
techgroup21.com	60	3k	129.2727273\r
essentiallast.net	46	3k	76.90909091\r
analysistheme.com	56	3k	129.2727273\r
rotkgame.com	51	3k	165.2727273\r
lotsofpower.net	61	3k	139.0909091\r
theblockchainbrief.com	52	3k	119.4545455\r
dreamwithjeff.com	53	3k	145.6363636\r
thefinalmatrix.com	58	3k	145.6363636\r
thehealthyprimate.org	51	3k	139.0909091\r
skinsidescoop.net	61	3k	145.6363636\r
harmonicode.com	56	2k	165.2727273\r
dm-gaming.com	50	2k	145.6363636\r
grosstrainer.com	48	2k	93.27272727\r
thedesperateblogger.com	52	2k	129.2727273\r
termanchor.com	53	2k	129.2727273\r
mucicallydown.com	54	2k	103.0909091\r
sportsblitzzone.com	49	2k	93.27272727\r
okayperiod.com	55	2k	103.0909091\r
nothing2hide.net	57	2k	155.4545455\r
craigscottcapital.com	59	2k	139.0909091\r
interworldradio.net	57	2k	129.2727273\r
tomtechblog.com	53	2k	103.0909091\r
emergingtechs.net	49	2k	86.72727273\r
savingtheplants.com	51	2k	139.0909091\r
songwritingidiots.com	52	2k	76.90909091\r
gamingvoyage.com	46	2k	145.6363636\r
conversationswithtea.com	51	2k	76.90909091\r
abithelp.com	53	2k	165.2727273\r
quillorg.com	47	2k	93.27272727\r
alternativeway.net	53	2k	165.2727273\r
workatshein.net	50	2k	76.90909091\r
geekforcenetwork.com	50	2k	145.6363636\r
scannerpackage.com	40	2k	86.72727273\r
labradortime.com	50	2k	116.1818182\r
mygardenandpatio.com	53	2k	155.4545455\r
wealthybyte.com	61	2k	165.2727273\r
bodyholistic.net	44	2k	132.5454545\r
emberslasvegas.com	64	2k	129.2727273\r
thelowdownunder.com	52	2k	86.72727273\r
geekgadget.net	54	2k	129.2727273\r
springhillmedgroup.com	55	2k	175.0909091\r
bracegaming.com	52	2k	116.1818182\r
rainmakerless.com	54	2k	86.72727273\r
towersget.com	51	2k	93.27272727\r
thegossipwire.com	49	2k	93.27272727\r
keezy.co	62	2k	165.2727273\r
faspe.info	57	2k	129.2727273\r
daysaver.net	58	2k	119.4545455\r
sportsfanfare.com	63	2k	165.2727273\r
freewayget.com	54	2k	129.2727273\r
roninarea.com	51	2k	129.2727273\r
cryptocrowns.org	52	2k	86.72727273\r
lews-castle.com	42	2k	139.0909091\r
helpinus.net	49	2k	103.0909091\r
justalittlebite.com	52	2k	93.27272727\r
argentstate.com	55	2k	165.2727273\r
tvtter.com	43	2k	119.4545455\r
flyarchitecture.net	49	2k	116.1818182\r
livingpristine.com	44	2k	129.2727273\r
trychitter.com	53	2k	139.0909091\r
icaiorg.net	49	2k	93.27272727\r
grosswheel.com	52	2k	119.4545455\r
fameblogs.net	54	1k	145.6363636\r
mydecine.com	59	1k	145.6363636\r
themeshgame.com	52	1k	93.27272727\r
myzimbraserver.com	59	1k	93.27272727\r
formotorbikes.com	52	1k	145.6363636\r
iloveloveloveebay.com	51	1k	93.27272727\r
ramblingsofagamer.com	44	1k	86.72727273\r
silktest.org	48	1k	129.2727273\r
zerodevice.net	50	1k	93.27272727\r
stellaresidence.net	52	1k	76.90909091\r
riproar.com	70	1k	198\r
xannytech.net	49	1k	139.0909091\r
triadscreen.com	52	1k	145.6363636\r
grosseasy.com	46	1k	129.2727273\r
agendacover.com	52	1k	129.2727273\r
onedayform.com	53	1k	129.2727273\r
aheadicon.com	53	1k	145.6363636\r
3d496.com	55	1k	103.0909091\r
triumphgross.com	50	1k	139.0909091\r
somethingnewnow.net	58	1k	119.4545455\r
importantcool.com	53	1k	119.4545455\r
logicalshout.com	62	1k	175.0909091\r
iodaracing.com	59	1k	155.4545455\r
notinthekitchenanymore.com	52	1k	139.0909091\r
acrylicgross.com	52	1k	93.27272727\r
eliteathletearena.com	49	1k	93.27272727\r
boraliato.com	65	1k	139.0909091\r
thehake.com	62	1k	145.6363636\r
technolotal.org	44	1k	129.2727273\r
jerseyexpress.net	51	1k	139.0909091\r
tabletwritings.com	51	1k	86.72727273\r
enginesharing.com	52	1k	119.4545455\r
retroplaygroundzone.com	49	1k	139.0909091\r
bcgameapp.net	56	1k	93.27272727\r
lectfect.com	53	1k	132.5454545\r
dataspike.me	48	1k	129.2727273\r
50track.com	57	1k	139.0909091\r
protontheme.com	43	1k	119.4545455\r
sportscene360.com	45	1k	119.4545455\r
ramechanic.com	50	1k	93.27272727\r
randomgiant.net	48	1k	119.4545455\r
https://goodmenproject.com/	82	79	Confirm on whatsapp\r
https://www.thehypemagazine.com/	66	72	Confirm on whatsapp\r
http://www.techbullion.com	63	79	Confirm on whatsapp\r
https://nerdbot.com	50	60	Confirm on whatsapp\r
https://www.indiehackers.com/	55	80	Confirm on whatsapp\r
https://vocal.media/	72	80	Confirm on whatsapp\r
https://www.thehansindia.com/	78	77	Confirm on whatsapp\r
https://www.thisdaylive.com/	79	78	Confirm on whatsapp\r
http://bignewsnetwork.com/	67	76	Confirm on whatsapp\r
https://ocnjdaily.com/	48	65	Confirm on whatsapp\r
https://breakingac.com/	40	39	Confirm on whatsapp\r
https://seaislenews.com/	38	50	Confirm on whatsapp\r
https://northpennnow.com/	36	45	Confirm on whatsapp\r
https://onpattison.com/	27	28	Confirm on whatsapp\r
https://www.wvgazettemail.com/	73	76	Confirm on whatsapp\r
https://www.herald-dispatch.com/	71	74	Confirm on whatsapp\r
https://www.decaturdaily.com/	65	70	Confirm on whatsapp\r
https://www.timesdaily.com/	66	69	Confirm on whatsapp\r
https://www.portsmouth-dailytimes.com/	52	58	Confirm on whatsapp\r
https://www.williamsondailynews.com/	52	50	Confirm on whatsapp\r
https://www.londondaily.news/	57	65	Confirm on whatsapp\r
https://www.findatopdoc.com/	51	75	Confirm on whatsapp\r
http://resident.com/	48	66	Confirm on whatsapp\r
http://www.programminginsider.com	59	73	Confirm on whatsapp\r
http://www.urbansplatter.com/	46	65	Confirm on whatsapp\r
https://todaynews.co.uk/	42	53	Confirm on whatsapp\r
https://www.otsnews.co.uk/	42	53	Confirm on whatsapp\r
http://businessabc.net	61	71	Confirm on whatsapp\r
emirateprestige.com	43	48	Confirm on whatsapp\r
thearmoredpatrol.com	43	31	Confirm on whatsapp\r
radarro.com	38	41	Confirm on whatsapp\r
armstrongmywire.com	34	34	Confirm on whatsapp\r
store.outrightcrm.com	37	62	Confirm on whatsapp\r
tuttotek.it	42	56	Confirm on whatsapp\r
viverepesaro.it	40	41	Confirm on whatsapp\r
theclintoncourier.net	33	47	Confirm on whatsapp\r
telenicosia.it	33	31	Confirm on whatsapp\r
nordest24.it	58	50	Confirm on whatsapp\r
newtuscia.it	44	50	Confirm on whatsapp\r
palermoviva.it	34	37	Confirm on whatsapp\r
futuroprossimo.it	62	53	Confirm on whatsapp\r
opsmatters.com	30	51	Confirm on whatsapp\r
securitysenses.com	25	47	Confirm on whatsapp\r
systemsdigest.com	16	25	Confirm on whatsapp\r
financefeeds.com	52	74	Confirm on whatsapp\r
shmag.it	31	39	Confirm on whatsapp\r
recensioneitalia.it	35	37	Confirm on whatsapp\r
leaders-in-law.com	31	54	Confirm on whatsapp\r
lawbhoomi.com	34	53	Confirm on whatsapp\r
exploringthenorth.com	51	50	Confirm on whatsapp\r
tycoonstory.com	72	70	Confirm on whatsapp\r
medindia.net	74	73	Confirm on whatsapp\r
teamrelated.com	14	7	Confirm on whatsapp\r
seedsheets.com	72	55	Confirm on whatsapp\r
constrofacilitator.com	44	54	Confirm on whatsapp\r
thematuremag.com	41	22	Confirm on whatsapp\r
exposedmagazine.co.uk	48	55	Confirm on whatsapp\r
vehicleaccidentinjury.com	45	45	Confirm on whatsapp\r
https://rumbie.co/	79	63	Confirm on whatsapp\r
https://seedsheets.com/	70	55	Confirm on whatsapp\r
http://leelynlaw.com/	56	62	Confirm on whatsapp\r
Khoffmanlaw.com	42	45	Confirm on whatsapp\r
http://lanceandrewlaw.com/	43	58	Confirm on whatsapp\r
http://craigwatkinslaw.com/	42	51	Confirm on whatsapp\r
https://www.lawsuittalks.com/	37	52	Confirm on whatsapp\r
https://stripesblog.com/	20	71	Confirm on whatsapp\r
https://Thedatascientist.com	39	64	Confirm on whatsapp\r
https://dotimes.co.uk/	42	56	Confirm on whatsapp\r
http://medicaldaily.com	86	80	Confirm on whatsapp\r
https://mannacote.net/	42	54	Confirm on whatsapp\r
https://kevinfrancisdesign.com/	28	50	Confirm on whatsapp\r
http://lawyerscorner.com	22	38	Confirm on whatsapp\r
https://www.coalvalleynews.com	41	35	Confirm on whatsapp\r
https://techbombers.co.uk/	41	54	Confirm on whatsapp\r
https://fawanews.org.uk/	26	25	Confirm on whatsapp\r
https://muddyrivernews.com/	45	70	Confirm on whatsapp\r
https://Learningtoday.net	40	33	Confirm on whatsapp\r
https://www.notion4teachers.com/	27	47	Confirm on whatsapp\r
https://finextra.com/	78	83	Confirm on whatsapp\r
https://www.oswegocountynewsnow.com	50	53	Confirm on whatsapp\r
http://elightwave.co.uk	42	38	Confirm on whatsapp\r
theupcoming.co.uk	63	71	Confirm on whatsapp\r
https://eyeonannapolis.net/	51	62	Confirm on whatsapp\r
https://Topcelebrities.co.uk	41	60	Confirm on whatsapp\r
http://phillydaily.com	23	26	Confirm on whatsapp\r
https://indykaila.co.uk/	52	59	Confirm on whatsapp\r
https://thebreakingac.co.uk	43	59	Confirm on whatsapp\r
https://itwire.com/	73	76	Confirm on whatsapp\r
https://Nvtimes.co.uk	44	36	Confirm on whatsapp\r
https://Contentideators.com	43	40	Confirm on whatsapp\r
https://elevatenew.co.uk/	44	39	Confirm on whatsapp\r
socialnews.xyz	48	66	Confirm on whatsapp\r
https://therednews.co.uk/	41	20	Confirm on whatsapp\r
https://balzaromagazine.co.uk/	38	57	Confirm on whatsapp\r
https://northiowatoday.com/	43	39	Confirm on whatsapp\r
https://futuresbytes.co.uk/	42	44	Confirm on whatsapp\r
https://sixmagazine.co.uk/	44	57	Confirm on whatsapp\r
https://kidsworldfun.com	45	51	Confirm on whatsapp\r
https://mytunbridgewells.com/	25	37	Confirm on whatsapp\r
http://thesource.com/	83	76	Confirm on whatsapp\r
http://naludamagazine.com/	59	56	Confirm on whatsapp\r
http://attireclub.org/	43	37	Confirm on whatsapp\r
http://catwalkyourself.com	42	38	Confirm on whatsapp\r
http://lovehappensmag.com	37	58	Confirm on whatsapp\r
http://rcourihay.com	43	36	Confirm on whatsapp\r
http://computertechreviews.com	61	53	Confirm on whatsapp\r
https://officepoolstop.com/	32	45	Confirm on whatsapp\r
http://dontdiewondering.com/	58	42	Confirm on whatsapp\r
https://www.fluxmagazine.com/	49	53	Confirm on whatsapp\r
https://miamiweekly.com/	59	33	Confirm on whatsapp\r
https://newskarnataka.com/	48	56	Confirm on whatsapp\r
http://tbsnews.net	65	79	Confirm on whatsapp\r
http://powderrooms.co.uk	29	30	Confirm on whatsapp\r
https://muddyrivernews.com/	44	71	Confirm on whatsapp\r
https://newzimbabwe.com/	65	63	Confirm on whatsapp\r
https://theenterpriseworld.com/	39	72	Confirm on whatsapp\r
https://betterthisworld.com/	56	71	Confirm on whatsapp\r
https://tomoson.com/	52	70	Confirm on whatsapp\r
https://www.suffolknewsherald.com/	52	61	Confirm on whatsapp\r
https://www.amountainmomma.com/	54	47	Confirm on whatsapp\r
http://aaublog.com	32	25	Confirm on whatsapp\r
https://havokjournal.com/	45	53	Confirm on whatsapp\r
https://punjabnewsexpress.com/	50	54	Confirm on whatsapp\r
http://rcourihay.com	43	36	Confirm on whatsapp\r
http://sheenmagazine.com	45	70	Confirm on whatsapp\r
http://theyesgirls.com	49	51	Confirm on whatsapp\r
http://sociallifemagazine.com/	47	51	Confirm on whatsapp\r
http://nextluxury.com/	65	62	Confirm on whatsapp\r
http://therebelchick.com/	45	49	Confirm on whatsapp\r
http://todaysmagazine.co.uk	41	53	Confirm on whatsapp\r
https://bentsmagazine.co.uk/	40	71	Confirm on whatsapp\r
http://bizwell.co.uk	41	69	Confirm on whatsapp\r
https://manicotti.co/	40		Confirm on whatsapp\r
https://moranalytics.com/	24	32	Confirm on whatsapp\r
https://myliberla.com/	54	72	Confirm on whatsapp\r
https://thecrownwings.com/			Confirm on whatsapp\r
http://peacequarters.com	72	42	Confirm on whatsapp\r
http://yonkerstimes.com	42	55	Confirm on whatsapp\r
https://www.buddymagazine.org/	41	71	Confirm on whatsapp\r
https://ameisenhardt.com/	27	30	Confirm on whatsapp\r
https://altransit.com/	41	53	Confirm on whatsapp\r
https://indubaimall.ae/	30		Confirm on whatsapp\r
https://sundayguardianlive.com/	64	72	Confirm on whatsapp\r
https://www.newsx.com/	77	67	Confirm on whatsapp\r
https://addrom.com/	30	46	Confirm on whatsapp\r
https://www.tapscape.com/	50	20	Confirm on whatsapp\r
https://www.thepaintedhinge.com/	75	59	Confirm on whatsapp\r
https://www.cleomadison.com/	32	20	Confirm on whatsapp\r
https://americanspcc.org/	55	68	Confirm on whatsapp\r
https://www.techindeep.com/	55	27	Confirm on whatsapp\r
https://lawyer-monthly.com/	52	72	Confirm on whatsapp\r
https://thesalfordmagazine.com/	41	71	Confirm on whatsapp\r
https://www.iemrobotics.com/		81	Confirm on whatsapp\r
https://theoxfordblue.co.uk/	42	44	Confirm on whatsapp\r
https://newsatrack.co.uk/	26	40	Confirm on whatsapp\r
https://www.mlritmexams.com/		49	Confirm on whatsapp\r
https://mindmybusinessnyc.com/	55	50	Confirm on whatsapp\r
https://www.thatericalper.com/	59	60	Confirm on whatsapp\r
https://filmdaily.co/	62	71	Confirm on whatsapp\r
http://similespark.com	32	70	Confirm on whatsapp\r
https://zooplas.co.uk/	39		Confirm on whatsapp\r
https://preprimaryschools.com	55		Confirm on whatsapp\r
http://ancorathemes.com	41	90	Confirm on whatsapp\r
http://clickdo.co.uk	32	56	Confirm on whatsapp\r
https://tomoson.com/	52	70	Confirm on whatsapp\r
http://articoolo.com	41	68	Confirm on whatsapp\r
http://middleclasshomes.net		54	Confirm on whatsapp\r
http://fangchanxiu.com		54	Confirm on whatsapp\r
http://agendacoverlife.com		55	Confirm on whatsapp\r
http://twotostadas.net	42		Confirm on whatsapp\r
http://learnlaughspeak.com/	54	71	Confirm on whatsapp\r
https://www.thehypemagazine.com/	66	72	Confirm on whatsapp\r
https://cloudmagazine.co.uk	38	31	Confirm on whatsapp\r
http://theblockdfw.com/	39	33	Confirm on whatsapp\r
https://bishopwcmartin.com/	43	50	Confirm on whatsapp\r
https://eopis.co.uk/	40	42	Confirm on whatsapp\r
https://ameisenhardt.com/	25	32	Confirm on whatsapp\r
https://nativenewsonline.net/	66	72	Confirm on whatsapp\r
https://www.findarticles.com/	74	79	Confirm on whatsapp\r
http://activerain.com/	76	75	Confirm on whatsapp\r
https://www.suziethefoodie.com/	74	54	Confirm on whatsapp\r
https://www.rutlandherald.com/	62	71	Confirm on whatsapp\r
https://www.indianagazette.com/	59	62	Confirm on whatsapp\r
https://www.thedailynewsonline.com/	62	73	Confirm on whatsapp\r
https://www.timesargus.com/	70	71	Confirm on whatsapp\r
https://www.newsitem.com	50	48	Confirm on whatsapp\r
https://www.standard-journal.com/	48	47	Confirm on whatsapp\r
https://www.morning-times.com/	45	40	Confirm on whatsapp\r
https://www.leadertimes.com	31	61	Confirm on whatsapp\r
https://www.huntingdondailynews.com/	42	56	Confirm on whatsapp\r
https://www.thelcn.com/	51	53	Confirm on whatsapp\r
https://centurylink.net	48	58	Confirm on whatsapp\r
https://www.thepinnaclelist.com	59	57	Confirm on whatsapp\r
https://thearchitectsdiary.com/	41	67	Confirm on whatsapp\r
https://aijourn.com	50	77	Confirm on whatsapp\r
http://thealite.com/	44	50	Confirm on whatsapp\r
https://www.diseasefix.com/	65	19	Confirm on whatsapp`,aw=`Domain	DA	Traffic	Region	Price	Overview	Category\r
re-thinkingthefuture.com	54	215.1K	California	130	Excellent Reputable	Architecture\r
illustrarch.com	22	26.5K	California	135	Very Good Healthy	Architecture\r
https://earthbuddies.net/	33	822	California	$75.50	Good Healthy	Ecology & Environment\r
https://usawire.com/	56	9.1K	-	$ 45.00	Very Good Healthy	Advertising & Marketing\r
miamilivingmagazine.com	35	14.4K	Virginia	300	Very Good Healthy	Advertising & Marketing\r
tomoson.com	51	8.2K	California	$312	Very Good Reputable	Advertising & Marketing\r
https://www.socialmediatoday.com/	84	106K	San Francisco	$850	Excellent Reputable	Advertising & Marketing\r
http://thecuriouslycreative.com	46	6K	North Carolina	$100	Good Healthy	Crafts\r
https://exploringthenorth.com/	51	10K	Arizona	$100	Good Healthy	Travel & Tourism\r
https://www.exploratoryglory.com/	18	4.9K	New York	$ 30.00	Good Reputable	Travel & Tourism\r
https://www.retireearlylifestyle.com/	42	2.5K	Virginia	108	Good Moderate	Travel & Tourism\r
https://cultmtl.com/	52	62.7K	Texas	$ 1,000.00	Good Healthy	Mass Media\r
Apnews.com	92	39.1M		$79	Industry leader Reputable	Mass Media\r
1883magazine.com	52	43K	California	80	Good Reputable	Mass Media\r
Laprogressive.com	66	12.1K	California	49	Good Reputable	Mass Media\r
Ventsmagazine.com	64	69.9K		$19	Good Reputable	Mass Media\r
Bignewsnetwork.com	66	45.8K	California	$40.79	Good Reputable	Mass Media\r
https://www.gigwise.com/	77	170K	California	$299.00	Good Healthy	Mass Media\r
https://kahawatungu.com/	49	26.6K	Arizona	$95	Good Reputable	Mass Media\r
thestripesblog.com	24	11K	California	$110	Good Healthy	Mass Media\r
theglobeandmail.com	92	4.3M	Ontario	$50	Very Good Reputable	Mass Media\r
https://ahouseinthehills.com/	54	3.5K	New Jersey	$196.00	Good Reputable	Mass Media\r
https://www.allmyfriendsaremodels.com/	38	4.8K	Virginia	$196.00	Good Reputable	Mass Media\r
http://www.prophecynewswatch.com/	46	10.4K	Florida	$62.50	Good Reputable	Mass Media\r
luxurylifestyle.com	32	4.1K	California	$95.00	Good Reputable	Mass Media\r
momooze.com	49	6K	California	$160.00	Good Reputable	Mass Media\r
http://urbansplatter.com/	46	55.3K	California	$50.00	Good Reputable	Mass Media\r
https://goodmenproject.com/	82	11.5K	California	$90	Good Reputable	Mass Media\r
https://fashionisers.com/	62	17K	Arizona	$150	Good Reputable	Mass Media\r
https://finance.yahoo.com/	93	521M	Virginia	$300	Industry Leader Reputable	Mass Media\r
https://www.harlemworldmagazine.com/	54	74.6K	Virginia	$140	Good Reputable	Mass Media\r
https://markets.businessinsider.com/	94	29.7M	Sweden	$260	Industry Leader Reputable	Mass Media\r
https://www.startmotionmedia.com	67	32.2K	Arizona	$80	Good Reputable	Mass Media\r
https://www.we-heart.com/	59	4.3K	California	$220	Good Healthy	Mass Media\r
https://beforeitsnews.com/	75	111K	California	$210	Good Reputable	Mass Media\r
https://researchsnipers.com/	74	8.7K	North Carolina	$180	Good Reputable	Mass Media\r
https://www.talkandroid.com/	76	13.5K	California	$210	Good Reputable	Mass Media\r
https://www.yahoo.com/	95	586M	Nebraska	$430	Industry Leader Reputable	Mass Media\r
https://www.washingtontimes.com/	88	363K	Virginia	$1,440	Very Good Reputable	Mass Media\r
http://www.techtimes.com	82	29.1K	Missouri	$990	Good Reputable	Mass Media\r
https://www.androidheadlines.com/	84	74.8K	California	$600	Good Reputable	Mass Media\r
https://thesource.com/	83	18K	Arizona	$770	Good Reputable	Mass Media\r
http://www.sciencetimes.com	64	4K	Missouri	$830	Good Reputable	Mass Media\r
https://bnonews.com/	68	24.7K	California	$160	Good Reputable	Mass Media\r
https://midhudsonnews.com/	59	55K	California	$492	Good Reputable	Mass Media\r
http://ourculturemag.com	59	70.5K	California	$260	Good Reputable	Mass Media\r
http://www.ilounge.com	82	26.5K	California	$200	Good Healthy	Consumer Electronics\r
https://vocal.media/	72	1M	California	$36.47	Excellent Reputable	Entertainment\r
avstarnews.com	54	16.9K	California	$100	Good Healthy	Entertainment\r
ultimatetango.com	23	8.3K	New York	500	Good Healthy	Entertainment\r
jerseyexpress.net	25	21K	California	$100	Good Reputable	Entertainment\r
https://www.thehypemagazine.com/	35	16.2K	Utah	300	Good Healthy	Entertainment\r
https://sosugary.com/	63	15.9K	Saxony	$80	Good Reputable	Entertainment\r
https://theactionelite.com/	53	90.6K	Jacksonville	$40	Good Reputable	Entertainment\r
nerdbot.com	50	35.8K	California	$30	Good Healthy	Entertainment\r
wealthybyte.com	54	9.1K	Michigan	$135	Good Reputable	Online Services\r
whatutalkingboutwillis.com	30	20.6K US/CAD	Washington	$220	Good Reputable	Online Services\r
https://somiibo.com/	29	2.7K	California	$121.00	Average Reputable	Online Services\r
https://newswatchtv.com/	48	408.9K	Missouri	$310.00	Good Reputable	Online Services\r
https://henof.com/	65	1.8K	California	$80	Average Healthy	Online Services\r
https://www.usatoday.com/	94	66.2M	Virginia	$490	Industry leader Healthy	Online Services\r
http://www.fundly.com	71	64.3K	California	$40	Good Reputable	Online Services\r
trans4mind.com	55	13.6K	MISSOURI	$30	Good Healthy	Online Services\r
hometownstation.com	64	31.4K	Virginia	250	Good Healthy	Newspapers\r
northiowatoday.com	42	3.6K	California	33	Average Healthy	Newspapers\r
granitegrok.com	55	1.4K	Texas	70	Average Healthy	Newspapers\r
theridgewoodblog.net	46	3.6K	Arizona	80	Average Healthy	Newspapers\r
freaktography.com	47	2K	Arizona	70	Average Healthy	Newspapers\r
https://www.herald-dispatch.com/	72	38.4K	New York	$130	Good Reputable	Newspapers\r
https://www.wvgazettemail.com/	73	88.2K	New Jersey	$130	Good Reputable	Newspapers\r
https://www.decaturdaily.com/	65	36.1K	New York	$130	Good Healthy	Newspapers\r
https://www.timesdaily.com/	66	118K	New York	$130	Good Reputable	Newspapers\r
https://dailyiowan.com/	72	28.3K	California	$240	Good Healthy	Newspapers\r
http://signalscv.com/	74	73.4K	California	$215	Good Healthy	Newspapers\r
https://breakingac.com/	41	17K	Virginia	$35	Good Healthy	Newspapers\r
http://www.ipsnews.net	83	14.7K	Alabama	$40	Good Healthy	Newspaper\r
https://seaislenews.com/	32	22K	California	$35	Good Healthy	Newspapers\r
https://www.portsmouth-dailytimes.com/	53	15.6K	Illinois	$130	Good Healthy	Newspapers\r
https://www.williamsondailynews.com/	52	3.3K	New York	$130	Average Reputable	Newspapers\r
https://northpennnow.com/	38	35.6K	California	$35	Good Reputable	Newspapers\r
https://greensboro.com/	77	81.5K	New York	$1,390	Good Healthy	Newspapers\r
https://vinnews.com/	48	111K	California	$371	Good Reputable	Newspapers\r
lakelandconnect.net	26	5.6K	Ontario	240	Average Healthy	Newspapers\r
https://amourvert.com/	52	34.5K	California	$170	Very Good Healthy	Apparel & Fashion\r
https://sammydvintage.com/	53	4.6K	California	$240	Good Healthy	Apparel & Fashion\r
shoebooties.com	17	7.1K	Georgia/Atlanta	$40	High traffic to backlink ratio Healthy	Retail\r
https://retail-insider.com/	55	63.6K	Quebec	$240	Very Good Reputable	Retail\r
Borkwoodblog.com	21	87.1K	North Carolina	$60.22	High traffic to backlink ratio Healthy	Retail\r
designmode24.com	29	8.5K	California	$170	Average Moderate	Retail\r
https://www.save.ca/	53	12.2K	New Jersey	$ 200.00	Good Healthy	Retail\r
mygardenandpatio.com	14	67.4K	Michigan	$ 150.00	Good Moderate	Retail\r
livingpristine.com	16	8.8K	Arizona	$ 110.00	Good Healthy	Retail\r
myinteriorpalace.com	28	8.2K	California	$ 180.00	Good Healthy	Retail\r
thebraggingmommy.com	36	8.3K	Utah	$100	Good Healthy	Retail\r
http://police-writers.com/	37	33.4K	Arizona	$34	Average Moderate	Government\r
https://durhampost.ca/	20	14K	Philadelphia	$200	Average Healthy	Government\r
thetraderchick.com	23	3.4K	District of Columbia	$127.50	Good Healthy	Distance Learning\r
worldwisetutoring.com	38	4.7K	California	$95.00	Good Healthy	Distance Learning\r
storytellershat.com	22	31.4K	Arizona	$31	High traffic to backlink ratio Healthy	Publishing\r
parkmagazineny.com	43	186K	Utah	$45	Very Good Healthy	Publishing\r
atmostfear-entertainment.com	35	3K	California	135	Average Healthy	Publishing\r
ottawalife.com	50	5.4K	Quebec	$250	Good Healthy	Publishing\r
https://www.justluxe.com/	73	32.9K	Michigan	$ 350.00	Good Moderate	Publishing\r
https://ocnjdaily.com	47	44K	San Francisco	$ 35.00	Good Moderate	Publishing\r
https://azbigmedia.com/	68	43.8K	Texas	$ 85.00	Veru Good Healthy	Publishing\r
https://www.elevatedmagazines.com/	24	1.7K	New York	$30	average Healthy	Publishing\r
http://resident.com/	49	61.8K	California	$120	Good Healthy	Publishing\r
https://impactwealth.org/	60	42.6K	California	$180	Good Healthy	Publishing\r
http://intelligenthq.com	50	28.1K	Saxony	$170	Good Healthy	Publishing\r
https://mashable.com/	93	15.8M	California	$470	Industry leader Healthy	Publishing\r
Hackerella.com	27	23.9K	Arizona	$28	High traffic to backlink ratio Moderate	Wellness\r
https://fabulousboobies.com/	20	3.6K	Atlanta	$ 45.00	Good Healthy	Wellness\r
https://anationofmoms.com/	68	3K	California	$ 70.00	Good Healthy	Wellness\r
orlaghclaire.com	25	11.6K	California	140	Good Reputable	Public Relations\r
lovelolablog.com	31	5.4K	California	$150	Good Healthy	Food & Beverages\r
https://www.japanesegreenteain.com/	35	8K	Ontario	235	Good Reputable	Food & Beverages\r
https://www.kellylynnssweetsandtreats.com/	30	2.3K	Utah	$95.00	Good Reputable	Food & Beverages\r
https://www.momknowsbest.net/	29	8.8K	Washington	$134.00	Good Reputable	Food & Beverages\r
ultimatecapper.com	33	6K	Utah	100	Good Reputable	Sports\r
coloradorunnermag.com	45	1.3K	Virginia	100	Good Reputable	Sports\r
etruesports.com	35	61.5K	California	180	Very Good Healthy	Sports\r
relevantcodes.com	29	2.1K	Arizona	$31	Very Good Reputable	Information Technology\r
https://www.mirrorreview.com/	65	47.4K	North Carolina	$ 95.00	Very Good Reputable	Information Technology\r
https://beginwithjava.com/	21	34.6K	North Carolina	$ 50.00	High traffic to backlink ratio Reputable	Information Technology\r
https://psbios.com/	38	174K	California	$ 40.00	High traffic to backlink ratio Moderate	Information Technology\r
Fitcoding.com	26	42.1K	Arizona	$42.95	High traffic to backlink ratio Healthy	Information Technology\r
https://www.technology.org/	62	86.6K	Saxony	$245.83	Very Good Healthy	Information Technology\r
theclintoncourier.net	30	5.8K	Texas	100	Good Healthy	Information Technology\r
https://www.bbntimes.com/	71	126K	California	$211.29	Very Good Healthy	Information Technology\r
Websauna.org	27	11.7K	Arizona	$45.11	Good Healthy	Information Technology\r
thebossmagazine.com	49	12.8K	Missouri	$150.00	Very Good Reputable	Information Technology\r
http://cybersecuritynews.com/	49	18.8K	California	$300.00	Very Good Reputable	Information Technology\r
https://itsupplychain.com/	39	7.3K	California	$140	Very Good Reputable	Information Technology\r
https://hackernoon.com/	88	195K	California	$570	Very Good Reputable	Information Technology\r
Techbullion.com/	66	110.5K		$25	Very Good Healthy	Computer Software & Development\r
customerservicemanager.com	46	4.7K	Ontario	$230	Good Reputable	Computer Software & Development\r
garyshood.com	38	2.1K	California	55	Average Reputable	Computer Software & Development\r
medigy.com	27	1.7K	Saxony	70	Average Healthy	Computer Software & Development\r
https://metapress.com/	77	29.2K	Oregon	$ 80.00	Good Reputable	Computer Software & Development\r
feedbuzzard.com	57	10.6K	California	$264	Good Healthy	Computer Software & Development\r
https://www.indiehackers.com/	55	38.9K Mixed	California	$100	Good Reputable	Computer Software & Development\r
http://www.programminginsider.com	58	247K	California	$30	Good Healthy	Computer Software & Development\r
familyfriendlygaming.com	42	3.1K	Missouri	180	Average Reputable	Computer & Video Games\r
https://lakelandconnect.net/	26	6K	Ontario	$250	Average Healthy	Newspaper\r
https://www.postandcourier.com/	81	450K	New York	$300.00	Very Good Moderate	Newspaper\r
https://londonincmagazine.ca/	33	1.8K	California	$100	Good Reputable	Nonprofit Organizations\r
elsalvadorinfo.net	41	2.4K	California	95	Good Healthy	Nonprofit Organizations\r
https://haligonia.ca/	37	6.1K	Quebec	$ 130.00	Good Healthy	Nonprofit Organizations\r
everydaytourist.ca	35	9.1K	New York	$160	Good Healthy	Nonprofit Organizations\r
https://greenbuildingcanada.ca/	31	12.7K	Michigan	350	Very Good Healthy	Construction & Maintenance\r
finehomesandliving.com	42	13.3K	New York	150	Very Good Healthy	Construction & Maintenance\r
decoratoradvice.com	52	39.8K	California	$250	Very Good Healthy	Construction & Maintenance\r
pushyourdesign.com	25	6.5K	California	$276	Very Good Healthy	Construction & Maintenance\r
https://www.build-review.com/	37	8.4K	California	$180	Very Good Reputable	Construction & Maintenance\r
Cytocom.com	23	1.9K	Arizona	$50.00	High traffic to backlink ratio Reputable	Finance\r
grantford.org	26	2K	Virginia	$134.00	Good Healthy	Finance\r
https://www.benzinga.com/	88	1.8M	California	$120	Excellent Reputable	Finance\r
http://thetradable.com	63	210.9K	Netherland	$150	Very Good Reputable	Finance\r
https://www.investing.com/	91	167M	California	$400	Industry leader Reputable	Finance\r
https://markets.financialcontent.com/	66	754K	New York	$130	Excellent Healthy	Finance\r
https://www.streetinsider.com/	83	58.7K	California	$80	Very Good Reputable	Finance\r
http://www.barchart.com/	62	3.2M	Virginia	$110	Very Good Healthy	Finance\r
https://kreafolk.com/	37	296k	Ontario	$115.00	Very Good Healthy	Design\r
stageandcinema.com	44	6.8K	Arizona	100	Good Reputable	Performing Arts\r
kidzfeed.com	25	1.3K	Virginia	115	Average Healthy	Museums\r
lawyersinventory.com	23	4.9K	New York	100	Average Healthy	Legal\r
http://wilddiscs.com	12	148K	California	$65.00	High traffic to backlink ratio Healthy	Sporting Goods\r
goodordering.com	38	6.9K	Ontario	170	Good Healthy	Sporting Goods\r
https://findthehomepros.com/	27	3.4K	New Jersey	$50	Good Healthy	Real Estate\r
thepinnaclelist.com	60	7.5K	California	50	Very Good Healthy	Real Estate\r
bostonapartments.com	40	2.6K	New York	100	Good Healthy	Real Estate\r
https://www.kennarealestate.com/	45	8K	-	100	Good Reputable	Real Estate\r
conversationswithbianca.com	32	13.1K	Michigan	$135	Good Healthy	Music\r
https://eartothegroundmusic.co	31	1.5K	Florida	95	Good Reputable	Music\r
https://www.pumpitupmagazine.com/	58	3.1K	North Carolina	271	Good Reputable	Music\r
http://thatdrop.com	41	1.1K	Arizona	95	Good Reputable	Music\r
https://bigcartel.com/	90	492K	California	$70	Industry leader Healthy	Music\r
femfounder.co	37	1.3K	New York	150	Good Moderate	Transportation & Logistics\r
Wicz.com	79	16.9K	Virginia	$23	Good Healthy	Market Research\r
https://www.myentertainmentworld.ca/	51	3.6K	Virginia	$ 380.00	Good Reputable	Enterteinment\r
https://thenewsgod.com/	61	12.6K	Ohio	$115	Good Healthy	Adult\r
fineartshippers.com	35	10.9K	Utah	$85	Very Good Healthy	Visual Art\r
outdoorproject.com	59	74.7K	California	21	Very Good Suspicious	Travel and Tourism\r
nyweekly.com	59	7K		69	Good Suspicious	Mass Media\r
itsreleased.co.uk	53	27.6K	Arizona	$23	Good Suspicious	Uncategorized\r
Venisonmagazine.com	29	56	Arizona	$40	High traffic to backlink ratio Reputable	Visual Art\r
copyenglish.com	49	13.8K	California	$21	Good Suspicious	Uncategorized\r
bigboxratio.com	22	6.5K	California	$ 210.00	Good Moderate	Uncategorized\r
https://myflashyhome.com/	30	2.6K	California	$ 50.00	Average Dangerous	Uncategorized\r
https://lapwinglabs.com/	36	12.1K	California	$70	Good Moderate	Uncategorized\r
activepropertycare.com	30	5.9K	California	$90	Average Moderate	Uncategorized\r
infomercial-reviews.org	26	4.3K	California	$60	Average Suspicious	Uncategorized\r
middleclasshomes.net	25	10.8K	California	$125	Average Suspicious	Uncategorized\r
transmartproject.org	24	2.3K	California	$60	Good Moderate	Uncategorized\r
kdarchitects.net	27	4.6K	California	$130	Good Moderate	Uncategorized\r
usefulideas.net	30	7K	California	$85	High traffic to backlink ratio Moderate	Uncategorized\r
baddiehub.wiki	56	1	California	$21	Fabricated domain Suspicious	Uncategorized\r
starbeliefs.com	49	3K	California	$21	Good Suspicious	Uncategorized\r
celebhunk.com	64	1.2K	California	21	Average Suspicious	Uncategorized\r
Gossips.blog/	52	5.4K	California	$19	Good Dangerous	Uncategorized\r
Fibahub.net/	52	4.8K	New Jersey	$19	Average Dangerous	Uncategorized\r
Crispme.com/	44	14.9K		$37	Good Dangerous	Uncategorized\r
Disruptmagazine.com	73	2.8K	California	46	Good Reputable	Mass Media\r
Digitalnewsalerts.org/	36	2.9K	California	$19	Average Suspicious	Uncategorized\r
decoratoradvice.com	52	16.8K	California	$170	Very Good Dangerous	Construction & Maintenance\r
Urbansplatter.com	60	21.2K	California	$26		\r
Internalinsider.com/	53	140	California	$19		\r
englishlush.com	70	5.1K ID	California	21		\r
baseballes.com	48	954	California	$21		\r
celebblink.com	67	976	California	21		\r
knowillegal.com	51	531	California	$21		\r
gearfixup.com	70	147	California	21		\r
toptechsinfo.com	69	1.6K IN	California	21		\r
bioviki.com	62	3K India	California	21		\r
Mystorieslist.com/	52	565	California	$19		\r
How2invest.com.mx/	37	2.9K		$23		\r
Ziplinq.com/	28	3.1K		$28		\r
25pr.com/	29	1.5K		$28		\r
Mytreatmentcapital.com/	32	1.7K		$21		\r
Vyvymangaa.us/	36	8.5K		$19		\r
Creativereleased.com/	37	24.2K India		$19		\r
Bloggershub.org/	15	21.6K		$30		\r
Norvasen.com/	28	31.6K		$23		\r
Intrepidfood.blog/	36	10.3K	France	$19		\r
Logicsvalley.com/	35	31.2K VN		$21		\r
Websauna.org/	24	509		$26		\r
Vamonde.com/	39	904		$33		\r
Fizara.com/	26	50.8K		$30		\r
Moralstory.org/		29		$21		\r
Kongotech.org/		66.1K India		$23		\r
Runpost.com.in/		7.8K India		$23		\r
Techsslaash.com		198 UK		$23		\r
Technicalmagzine.com/		361		$19		\r
Trendbrizz.com/		818		$21		\r
Magic-city-news.com/		41 Spain		$30		\r
Thebroadtrade.com/		606 BS		$21		\r
Topclasstrading.com/		14.6K India		$23		\r
Businessmajority.com/		0		$21		\r
Thenewordermagazine.com/		253		$19		\r
Zobuz.com/		0		$26		\r
Abcmagazine.org/		3		$21		\r
Thetechnotricks.co//		104.3K India		$21		\r
Stephilareine.com/		30		$23		\r
Techmagazines.net/		51		$30		\r
Tanzohub.today/		0		$19		\r
Chancerne.net/		0		$19		\r
Abusinessventure.com/		0		$26		\r
Baddiehub.pro/		1.4K UK		$23		\r
Techbetime.com/		2.6K India		$21		\r
Technorozen.org/		4.4K India		$21		\r
Digitoont.com/		0		$19		\r
Luvtrise.net/		0		$21		\r
Technewztop.pro/		0		$19		\r
Myskyic.com/		315		$21		\r
Fashiontimes.ltd/		322		$19		\r
theblogoti.com/		0		$21		\r
Nextweblog.com/		24		$19		\r
TribuneTribune.com/	37	3.4K		$19		\r
webofbuzz.com/	37	4.9K		$19		\r
Aoomaal.org/	37	2.2K		$19		\r
DiscoverTribune.org/	37	11.6K		$19		\r
TribuneBreaking.com/	37	1.4K		$19		\r
EssentialTribune.com/	37	5K		$19		\r
Tribunexpress.com/		14 SE		$19		\r
Theclockend.com/	25	8.5K		$23		\r
Thisismytribe.org/	22	1.6K		$21		\r
Headlines.llc/	1	21.1K		$19		\r
Chicagoheading.com/	37	10.6K		$19		\r
Hintinsider.com/	37	2.4K		$19		\r
Cavegreen.us/	14	26.9K		$23		\r
Discovertribune.org/	37	11.6K		$19		\r
Blogstorms.com/		0		$21		\r
Bicimag.com/		65		$26		\r
Mimech.com/		0		$26		\r
Iconhot.com/		5.4K DE		$26		\r
Baddiehub.blog/		367 AU		$19		\r
Ventsfashion.com/		1.6K		$19		\r
Maccablog.com/	29			$26		\r
Magazineunion.com/	31			$26		\r
Truepeoplesearch.blog/	37			$19		\r
weeklyfanzine.com/	39			$23		\r
Discovercraze.com/	38			$19		\r
Ventsfanzine.com/	51	0		$28		\r
Weekmagzine.com/	21			$23		\r
Newsbreakblog.com/	37			$19		\r
Vlineperol.org/	36			$19		\r
blooket-join.com/	37			$21		\r
Baddiehub.ca/	53	0		$19		\r
Cookape.com.in/	66	0		$23		\r
Blogangle.org/	37			$23		\r
Alevemente.org/	37			$19		\r
Techinshorts.com/	53	0		$19		\r
Geeksaroundworld.com/	50	0		$19		\r
Usatimemagazine.com/	37			$21		\r
Itsreleased.com/	21			$33		\r
interestingfacts.org/	71	83		$23		\r
Trendingcelebritys.com/	36			$23		\r
Mobilesinbd.com/	13			$33		\r
Sociallbios.com/	4			$21		\r
Washingtongreek.com/	37			$19		\r
Worthexplainer.com/	19			$21		\r
Forbesradar.com/	38			$23		\r
						\r
Duzzbuzz.com/	12			$19		\r
Lifemagazineusa.com/	52	27		$28		\r
Skelabs.com/	52	0		$28		\r
BuzzTum.com/	60	0		$28		\r
Techsslash.com/	64	0		$23		\r
Forbesblog.org/	54	0		$28		\r
Technewztop.org/	66	0		$21		\r
Businesstomark.com/	64	17		$28		\r
Mysignup.biz/	6			$21		\r
Ventspeak.com/	18			$19		\r
Elitesmindset.com/	48			$19		\r
Piticstyle.com/	53	0		$19		\r
Cruciais.com/	7			$19		\r
Milialar.org/	35			$19		\r
Rusticotv.org/	37			$19		\r
						\r
Businesshintsmagazine.com/	15			$19		\r
possiblyethereal.com/	21			$21		\r
Zeelase.com/	54	0		$19		\r
zaneym.org/	58	0		$19		\r
Evokingminds.com/	54	0		$21		\r
Mazingus.com/	54	0		$21		\r
						\r
Currishine.com/	36			$19		\r
techintag.com/	19			$19		\r
Buzzfeed.blog/	54	18		$21		\r
Glamourtribune.com/	56	5		$21		\r
Antribune.com/	52	0		$21		\r
Blogging.ltd/	51	0		$21		\r
Magazinematter.com/	51	0		$21		\r
Reader.llc/	1			$21		\r
Techtimes.blog/	54	0		$21		\r
Byteclipse.com/	35			$21		\r
Soymamicoco.com/	56	596		$19		\r
Techdentro.com/	18			$21		\r
Mindsetterz.com/	54	0		$23		\r
Techinfobusiness.com/	57	0		$21		\r
Ventsblog.org/	52	0		$21		\r
Discoverheadline.com/	52	21		$23		\r
Techdailytimes.com/	47			$23		\r
Healthke.com/	41			$23		\r
Ventsmagazine.blog/	54	30		$23		\r
Onlinedemand.net/	52	11		$18		\r
Vyvymangas.com/	52	0		$28		\r
Technologywolf.net	56	0		$21		\r
Ibommablog.com/	62	0		$19		\r
Theinscribermag.com/	54	6.6K India		$16		\r
Buzz.llc/	1			$23		\r
Manometcurrent.com/	39			$30		\r
Thetechnotricks.net/	59	861 India		$21		\r
Worldtimes.ltd/	52	0		$23		\r
Discovertribune.com/	51	44		$23		\r
Timebusinessnews.com	64	219		$16		\r
Activeblog.org/	51	0		$19		\r
						\r
Techaibard.com/	54	0		$23		\r
Stylener.com/	54	0		$19		\r
Cnbreaking.com/	52	0		$19		\r
Thedailystocks.com/	51	0		$19		\r
Thepostpoint.com/	52	0		$21		\r
Forbesport.com/	49	0		$21		\r
Actorwish.com/	49	0		$19		\r
Amirarticles.com/	62	0		$21		\r
Bigwirenews.com/	55	0		$19		\r
Calibermag.net/	21			$28		\r
Classicaltodaynews.com/	55	0		$21		\r
Drcric.com/	58	0		$21		\r
						\r
Rideable.org/	23			$28		\r
Sekho.in/	70	91 India		$21		\r
Shayarilover.org/	51	2.3K india		$21		\r
Srune.com/	26			$28		\r
Technewztop.info/	57	44		$19		\r
Theliveschedule.com/	55	440 India		$21		\r
						\r
Vigitox.org/	21			$28		\r
Takesapp.com/	58	0		$20		\r
Veganovtrichy.com/	36			$23		\r
thehometrotters. com	23			$220		\r
drhomey.com	25			$220		\r
livingpristine.com	19			$120		\r
pushyourdesign.com	23			$150		\r
thededicatedhouse.com	33			$70		\r
betterdecoratingbible.com	44			$120		\r
activepropertycare.com	30			$150		\r
https://findthehomepros.com/	27			$100		\r
Laweekly.co.uk		7.2K India		35		\r
Nyweekly.co.uk		5K AU		32		\r
Publicistpaper.com		0		$21		\r
Stylevanity.com		188 PH		44		\r
Todaynews.co.uk		14K UK		49		\r
Otsnews.co.uk		30K UK		44		\r
wheelwale.com		2.4K India		$18		\r
thenoobgamerz.com		0		$18		\r
tchtrends.com		206		$18		\r
volleyballblaze.com		110		$18		\r
abpoetry.com		833 PK		$18		\r
bytevarsity.com		1 PK		$18		\r
englishsunglish.com		10 IN		$18		\r
stonesmentor.com		263 AU		$18		\r
techlivo.com		140 PK		$18		\r
celebhatelove.com		85 KR		$18		\r
asenquavc.com		0		$18		\r
husbandinfo.com		1		18		\r
Techfocuspro.com	20	18.6K		26		\r
venisonmagazine.com	48	94.5K		69		\r
legendlifes.com	12	7.1K		$21		\r
everypetnames.com	40	5.1K		$21		\r
mummyname.net	31	8.4K		$21		\r
thebriefmagazine.com	25	2.7K		$21		\r
atozpoetry.com		3.6K IN		21		\r
kenyasihami.com		1		18		\r
quotesology.com		131 NG		$18		\r
startechbd.org		25.2K BG		21		\r
arcenturf.com		8.8K MA		$21		\r
organicblog.co.uk		36 IN		21		\r
mrcaptions.net		496 IN		21		\r
usatopicnews.com		0		21		\r
knowledgemandi.com		9.7K IN		21		\r
viralmagazine.co.uk		126		$21		\r
inshotspot.com		2.1K IN		$21		\r
gcashworld.com		4.4K PH		$21		\r
atsiritekno.com		0		$21		\r
pickleballopinion.com		116		$21		\r
celebritiezclub.com		3.6K IN		$21		\r
mostlytrend.com		6		$21		\r
sparktime.co.uk		286		$21		\r
techyjunction.co.uk		0		$21		\r
usabignetwork.com		378 CAD		21		\r
networthera.com		0		$21		\r
technicalmagzine.com		0		$21		\r
articlebullion.com		545		21		\r
Legendarynetworth.com		113		35		\r
Joinworld2.com		83		32		\r
Networthaudit.com		370		29		\r
Mediasprints.com		0		$44		\r
Strivecreatives.com		0		29		\r
Adilifestyle.com		0		26		\r
Sportstakedown.com		0		23		\r
Richlifeinsiders.com		0		23		\r
Exchangetime24.com		0		23		\r
Makeovera.com		64		23		\r
Iptvbo.com		0		23		\r
https://debsllc.org/		18K UK		100$		\r
https://mybeautifuladventures.com/		658		50$		\r
https://luxuryinteriors.org/	14	16.5K	California	140$		\r
https://attireclub.org/	43	14.7K	Georgia	200$		\r
lock-7.com		306		$90		\r
homerocketrealty.com		589		$78		\r
official-city.com		42 DE		$78		\r
importantcool.com		2.7K UK		$90		\r
lovinglifeandlivingonless.com		0		$126		\r
theweeklyspoon.com		386		$114		\r
myinteriorpalace.com		986		$174		\r
bigboxratio.com		130		$210		\r
homeandmommyblog.com		1.7K UK		$114		\r
telugupalakkad.com		549		$150		\r
towersget.com		953		$138		\r
milestonearea.com		943 AU		$168		\r
flyarchitecture.net	19	4.3K	California	$84		\r
mobilehomeexteriors.com	12	19.6K	California	$66		\r
mygardenandpatio.com	12	5K	Michigan	$138		\r
masterrealtysolutions.com	10	7.9K Canada	California	$162		\r
livingpristine.com	12	10K	Arizona	$102		\r
luxuryinteriors.org	14	16.5K	California	$114		\r
goodnever.com	12	8.5K	California	$126		\r
treeleftbigshop.com	13	4.9K	California	$162		\r
skillsclonelife.com	11	2.9K Canada	California	$150		\r
ownersicon.com	8	3.2K canada	California	$186		\r
sourcednextdoor.com	13	5.8K Canada	California	$156		\r
allaroundthe-house.com	1	2.2K Canada	California	$90		\r
refurbishhq.com	2	2.1K	California	$174		\r
hayaudio.com	8	4.3K Canada	California	$174		\r
agendacoverlife.com	5	2.5K Canada	California	$114		\r
artsusshop.com	5	4.4K Canada	California	$138		\r
desimasahub.com	5	1.6K Canada	California	$168		\r
nobullswipe.com	5	2.8K	California	$162		\r
apartamentoscholloapartamentos.com	1	2.4K Canada	California	$150		\r
votrobvotrob.com	9	4.6K Canada	California	$90		\r
applianceicon.com	2	2.5K Canada	California	$90		\r
revampabode.com	3	3.5K Canada	California	$108		\r
kalyanmatkachart.com	5	1.5K canada	California	$102		\r
						\r
https://anationofmoms.com/	68	6.1K	California	$30		\r
thededicatedhouse.com	35	1.6K	Utah	$60		\r
https://decoratoradvice.com/	52	20.7K	California	$180		\r
disquantified.org	50	9.2K	California	$100		\r
http://thehometrotters.com	24	25.5K	California	$135		\r
famousparenting.com	29	26K	Michigan	$200		\r
https://lapwinglabs.com/	36	12.1K	California	$70		\r
https://pushyourdesign.com/	23	7.9K	California	$200		\r
https://findthehomepros.com/pro-tips/	27	6K	New Jersey	$50		\r
https://retail-insider.com/	55	66.5K Canada	Quebec	$240		\r
https://kahawatungu.com/	49	19.7K	Arizona	$130		\r
https://socialbizmagazine.com/	26	6.1K	California	$130		\r
						\r
lookwhatmomfound.com	66	43.6K	Illinois	$180		\r
whatutalkingboutwillis.com	30	20.6K US/CAD	Washington	$220		\r
betterthisworld.com	56	18K	California	$200		\r
infomercial-reviews.org	26	4.3K	California	$60		\r
thestripesblog.com	24	1.9K	California	$110		\r
rapidhomedirect.com	22	6.4K	California	$130		\r
avstarnews.com	54	16.9K	California	$100		\r
activepropertycare.com	30	5.9K	California	$90	Uncategorized	\r
kdarchitects.net	27	4.6K	California	$130		\r
jerseyexpress.net	25	21K	California	$100		\r
designmode24.com	29	3.2K	California	$170		\r
middleclasshomes.net	25	10.8K	California	$125		\r
drhomey.com	25	5K	California	$160		\r
transmartproject.org	24	2.3K	California	$60		\r
fameblogs.net	42	8K Canada	California	$85		\r
home-hearted.com	24	7K	California	$85		\r
famousparenting.com	29	26K	Michigan	$200		\r
conversationswithbianca.com	32	13.1K	Michigan	$135		\r
wealthybyte.com	54	6.5K	Michigan	$135		\r
pushyourdesign.com	23	7.9K	California	$200		\r
usefulideas.net	30	7K	California	$85		\r
						\r
						\r
						\r
https://oskateboard.com						\r
						\r
https://D8Website.com/						\r
https://ArcadeBlogs.com/						\r
https://UBG247.blog/						\r
https://OglyBuzz.com/						\r
https://TheBeautyNewz.com/						\r
https://FreshTodayMagazine.com/						\r
https://UsaTrendNews.com/						\r
https://JJtoBuzz.com/						\r
https://Barkgbuddie.com/						\r
https://VexraStory.com/						\r
https://BitcoinupNews.com/						\r
https://internet-chicks.org/						\r
						\r
https://Updates4Newz.com/						\r
https://Techplantup.com/						\r
						\r
https://TheupdatesNews.com/						\r
						\r
https://SpecialUsaNews.com/						\r
https://NewsbreakAlerts.com/						\r
						\r
						\r
https://indoorinsider.com/						\r
https://VentsDiscover.com/						\r
https://VentsMagazinepro.com/						\r
https://UniqueHeadline.com/						\r
						\r
https://VentsMaster.com/						\r
https://VentstimesNews.com/						\r
						\r
						\r
						\r
https://BuzzLush.com/						\r
https://hd4hub.net/						\r
https://BlogzinMagazine.com/						\r
						\r
https://speedy-short.blog/						\r
https://felifayer.blog/						\r
https://USAbuzzing.com/						\r
						\r
https://insightoria.com/						\r
https://www.dgmnewscom.com/						\r
https://www.adn-237.com/						\r
https://www.phmhaven.com/						\r
						\r
https://MSNmag.com/						\r
https://BlogDrift.com/						\r
https://www.antarvacna.com/						\r
						\r
https://BusinessFanzine.com/						\r
						\r
https://Quirked.de/						\r
https://Blogverseit.com/						\r
https://Epicblogz.com/						\r
https://insightsmagazines.com/						\r
https://technologywire.net/						\r
https://www.techmagazines.net/						\r
http://usamagazine.net/						\r
https://europeanmagazine.net						\r
https://thewiremagazine.com/						\r
https://asiaposts.com/						\r
http://amazingviralnews.com/						\r
						\r
						\r
						\r
						\r
						\r
https://gossips.blog/						\r
https://newsbreakblog.com/						\r
https://headlines.llc/						\r
https://chicagoheading.com/						\r
https://mystorieslist.com/						\r
https://nextweblog.com/						\r
https://tribunetribune.com/						\r
https://ventsfashion.com/						\r
https://efashiontrend.net/						\r
https://webofbuzz.com/						\r
https://aoomaal.org/						\r
https://www.qiuzziz.blog/						\r
https://tribuneindian.com/						\r
https://discovertribune.org/						\r
https://fashiontimes.ltd/						\r
						\r
https://tribunebreaking.com/						\r
https://ventsbreaking.com/						\r
https://greekfashion.online/						\r
						\r
https://ventstribune.com/						\r
https://hints.ltd/						\r
https://hintinsider.com/						\r
https://www.essentialtribune.com/						\r
						\r
https://timesradar.com/						\r
https://nycitypaper.com/						\r
https://internalinsider.com/						\r
https://stylecarter.com/						\r
https://timesanalysis.com/						\r
https://franciscotribune.com/						\r
https://vyvymanga.blog/						\r
https://glamouruer.com/						\r
https://www.buzzslash.com/						\r
https://techappi.com/						\r
https://ssense.blog/						\r
						\r
						\r
https://zofianasierowska.com/						\r
https://easybib.blog/						\r
https://tribunexpress.com/						\r
https://aiyifan.us/						\r
https://spicyrranny.org/						\r
						\r
https://buzzreleased.com/						\r
https://www.verifiedzine.com/						\r
https://ventsbuzz.com/						\r
						\r
						\r
						\r
http://glamourheadline.com/						\r
						\r
https://techsky.co.uk/						\r
https://galenmetzger1.com/						\r
https://the-news.com.pk/						\r
https://techtrand.com/						\r
https://forbesindo.com/						\r
https://supperpost.com/						\r
https://www.cofeemanga.org/						\r
https://rusticotv.blog/						\r
https://bangkoktribune.com/						\r
https://hiphophiphop.org/						\r
https://www.dsnews.us/						\r
https://GlamourCrunch.com/						\r
https://www.webofblog.com/						\r
https://heraldspost.com/						\r
https://maginsight.net/						\r
https://evolvefeed.com/						\r
https://quicknewsbites.net/						\r
https://techpromagazine.com/						\r
https://wellknownfigure.com/						\r
https://forbeszine.com/						\r
https://glamourtomorrow.com/						\r
https://buzztelecast.com/						\r
https://nyheading.com/						\r
https://tamasha.blog/						\r
https://www.sort.llc/						\r
https://viprow.uk/						\r
https://nextforbes.com/						\r
https://washingtongreek.co.uk/						\r
https://washingtonglamour.com/						\r
https://buzzdiscover.co.uk/						\r
https://greekbuzz.co.uk/						\r
https://germanytribune.com/						\r
https://newslettertribune.com/						\r
https://theunitedstate.us/						\r
https://entercools.com/						\r
https://growninsider.com/						\r
https://ny-tribune.com/						\r
https://vvyvymanga.co.uk/						\r
https://www.themail.blog/						\r
https://alevemente.uk/						\r
https://mamgatoto.org/						\r
https://cavazaque.org/						\r
https://xcvpanel.us/						\r
https://huffpost.blog/						\r
https://tribuneus.com/						\r
https://vy6ys.org/						\r
https://fashionpaper.co.uk/						\r
https://fashionbirthday.com/						\r
https://thefashionstar.us/						\r
https://contacthelp.co.uk/						\r
https://latimes.blog/						\r
https://geekzillaradio.com/						\r
https://goadsonnyt.com/						\r
https://discovernew.info/						\r
https://usatechmagazine.com/						\r
https://www.newsjotechgeeks.org/						\r
https://latestfeedbuzzard.com/						\r
https://usatimemagazinepro.com/						\r
https://techfullwork.com/						\r
https://zynrewards.co.uk/						\r
https://allfindup.co.uk/						\r
https://digiblogs.org/						\r
https://toonily.co.uk/						\r
https://techbuff.us/						\r
https://diamondfairybunny.org/						\r
https://fastmagazinepro.org/						\r
https://francandelera.co.uk/						\r
https://businessupnews.com/						\r
https://supertechcity.co.uk/						\r
https://arfraierqfazdetdo.co/						\r
https://francandelera.org/						\r
https://www.come.llc/						\r
https://mopsul.org/						\r
https://www.edivawer.com/						\r
https://www.sowix.org/						\r
https://www.hamrosolarllc.com/						\r
https://www.blackboarduct.com/						\r
https://USAfastMagazine.com/						\r
https://USAupMagazine.com/						\r
Borkwoodblog.com	24	114K	Amsterdam	$40	High traffic to backlink ratio Healthy	Retail\r
http://thegloworm.com/	10	13.4K	Georgia/Atlanta	$40	Fine Suspicious	Retail\r
http://hunkwhiz.com/	33	20.5K	North Carolina	$40	Light signs of spam	Uncategorized\r
http://copperchips.com/	36	29.1K IN	North Carolina	$40	Average Healthy	Information Technology\r
https://allreview.ca/	15	1.3K	Florida	$100	Fine Suspicious	Uncategorized\r
				$250		\r
famousparenting.com	29	26K	Michigan	$200	Good Suspicious	Education\r
drhomey.com	25	4.9K	California	$160	Good Suspicious	Uncategorized\r
betterthisworld.com	56	18K	California	$200	Good Suspicious	Finance\r
http://thehometrotters.com	24	25.5K	California	$135	High traffic to backlink ratio Suspicious	Plastics & Polymers\r
famousparenting.com	29	26K	Michigan	$200	Good Suspicious	Education\r
https://pushyourdesign.com/	23	7.9K	California	$200	Good Suspicious	Construction & Maintenance\r
pushyourdesign.com	23	7.9K	California	$200	Good Suspicious	Construction & Maintenance\r
https://socialbizmagazine.com/	26	6.1K	California	$130	Good Suspicious	Uncategorized\r
lookwhatmomfound.com	66	43.6K	Illinois	$180	Very Good Dangerous	Customer Services\r
rapidhomedirect.com	22	6.4K	California	$130	Average Dangerous	Uncategorized\r
lyncconf.com				$360		\r
babesproduct.com		30.4K Germany		$216		\r
turbogeek.org				$216		\r
lotterygamedevelopers.com				$336		\r
multi-user.net		1.1K NL		$216		\r
playmyworld.com				$276		\r
wizzydigital.org				$216	Dangerous	\r
freeworlder.org				$216	Fabricated domain Suspicious	\r
hongoctan.com				$192		\r
plugboxlinux.org				$228		\r
interworldradio.net				$192	Fabricated domain	\r
bigboxratio.com				$276		Uncategorized\r
mintonsharlem.com				$216	low AS	\r
i-movement.org				$168	Suspicious	\r
ck2generator.com				$180		\r
coverselectorshop.com				$204		\r
21strongfoundation.org				$192	Fabricated domain	\r
masterrealtysolutions.com				$228		Uncategorized\r
adventuretwo.net				$228		\r
alternativeway.net				$240		\r
fintechasia.net				$240		\r
mygamerank.com				$156		\r
theportablegamer.com				$252		\r
goodnever.com				$216	Fabricated domain Suspicious	\r
formotorbikes.com				$216		\r
innewstoday.net				$204	Suspicious	\r
cowded.com				$192		\r
geekforcenetwork.com				$216		\r
embedtree.com				$180		\r
techgroup21.com				$192		\r
square-central.com				$180		\r
gamerawr.com				$180		\r
filmjila.com				$180		\r
vietnamreview.net				$240		\r
trychitter.com				$204	Suspicious	\r
treeleftbigshop.com				$228	Suspicious	\r
av19org.net				$252	Suspicious	\r
sentback.org	19	13.7K	California	$204	Good Reputable	Mass Media\r
simcookie.com	37	12.9K	California	$240	Good Moderate	Mass Media\r
greenheal.net	25	13.9K	Michigan	$252	Good Moderate	Wellness\r
programgeeks.net	31	9.5K	California	$144	Good Healthy	Advertising & Marketing\r
silicon-insider.com	57	8.3K	California	$240	Good Healthy	Computer Software & Development\r
wavetechglobal.com	30	5.2K	California	$216	Good Healthy	Computer Software & Development\r
premiumjoy.com	31	6.1K	California	$228	Good Healthy	Retail\r
undergrowthgames.com				$252		\r
techidemics.com				$192	dangerous	\r
harmonicode.com				$240		\r
goldengoalpress.com				$204		\r
pocketmemories.net				$168		uncategorized\r
txepc.org				$204		\r
spearstate.com				$252		\r
leaguechannellife.com				$240		\r
lotsofpower.net				$180		uncategorized\r
artsusshop.com				$204	suspoicious	\r
ordersbellabeat.com				$228		\r
conversationswithstephanie.com				$204		\r
rarefiedtech.com				$192		\r
formulagross.com				$228		\r
fallofmodernism.org				$228		\r
swipesparkleus.com				$252		\r
ccafs.net				$180		\r
comfortglobalhealth.com				$192		\r
phonedeck.net				$192		\r
conversationswithrina.com				$216		\r
eyexcon.com				$228		\r
thewritetrackpodcast.com				$192		\r
researchwebshelf.com				$168		\r
faspe.info				$192		\r
scannerpackage.com				$144		\r
xannytech.net				$204		\r
ytstudioyoutube.com				$216		\r
squirtgunstudios.com				$216		\r
grosswheel.com				$180		\r
americanlivewire.com				$204		\r
atsugiham.net				$180		\r
tatasec.org				$216		\r
manipedirecords.com				$156		\r
alwaysthis.com				$216		\r
hayaudio.com				$240		\r
fumbleboard.com				$192		\r
agendacover.com				$192		\r
thegamearchives.com				$276		\r
GFXMaker.com				$252		\r
javaobjects.net				$204		\r
techandgamedaze.com				$192		\r
styledfresh.com				$216		\r
defstartup.org				$192		\r
jilicitycityjili.com				$204		\r
marry-marry.com				$204		\r
onthisveryspot.com				$240		\r
android-underground.org				$216		\r
damnnngirl.com				$240		\r
we-are-dust.com				$216		\r
deckodance.com				$276		\r
skillsclone.com				$168		\r
ownersicon.com				$228		\r
ubetteme.com				$300		\r
giddygeese.com				$204		\r
lensesback.com				$192		\r
gardenrooted.com				$240		\r
another-site.com				$204		\r
eliteendure.com				$216		\r
evanita.net				$192		\r
tech-bliss.com				$216		\r
cadeaukaartbol.com				$204		\r
uptempomag.com				$192		\r
themecolon.net				$192		\r
ckihe.com				$192		\r
touristatrek.com				$216		\r
bloomstonehome.com				$192		\r
forzagold.com				$228		\r
people-friendlyplaces.org				$192		\r
thegossipwire.com				$156		\r
allcrazy.net				$192		\r
desertadvocate.org				$180		\r
bytesize-games.com				$192		\r
areatsunami.com				$204		\r
conversationswithheather.com				$156		\r
bloomingdwelling.com				$204		\r
gamingvoyage.com				$216		\r
place-project.org				$192		\r
thatswhatsgoodmedia.com				$204		\r
theinfluenceofteachers.com				$216		\r
conversationswithamber.com				$192		\r
diyworld4life.com				$216		\r
conversationswithjessica.com				$216		\r
b2btechsolutions.com				$180		\r
movieda2023.com				$180		\r
bottlecrunch.com				$204		\r
creativegaming.net				$180		\r
lillotnyc.com				$192		\r
swindletrilogy.com				$168		\r
gizmocombo.com				$228		\r
odysseystoryshop.com				$192		\r
schoolclimatelearning.com				$192		\r
limitenhancement.com				$216		\r
keepmore.net				$192		\r
dreamwithjeff.com				$216		\r
wicked-gaming.com				$180		\r
mommyempower.com				$216		\r
fortunebulletin.com				$204		\r
denemebonusuverensiteleryerliarama.org				$192		\r
elitegroupsalonspa.com				$228		\r
daysaver.net				$180		\r
conversationswithbrittany.com				$228		\r
triadscreen.com				$240		\r
jun88game.org				$204		\r
freedomforandroid.com				$228		\r
californiaforeclosurefighters.com				$168		\r
solana-summer.com				$240		\r
minpakutoushi-journal.com				$180		\r
mulemotherbooks.com				$192		\r
herbandbloomgarden.com				$216		\r
napafreerangebeef.com				$204		\r
gamedaychamp.com				$192		\r
auteluav.com				$192		\r
kjabczenski.com				$216		\r
soccermomworld.com				$216		\r
kingswayprimary.com				$180		\r
oakreative.com				$204		\r
celebrityless.com				$216		\r
playbattlemasters.net				$192		\r
naturalhavenhome.com				$192		\r
sweedishlove.com				$204		\r
smartindustrysk.com				$180		\r
flourishinggardenpath.com				$216		\r
safetyproductsmfg.com				$216		\r
prosportstrack.com				$192		\r
travel-theworld.com				$216		\r
bddqwy.com				$192		\r
styleonhigh.com				$204		\r
scarletrosefree.com				$216		\r
pinehollowridge.com				$192		\r
gamerarenapro.com				$168		\r
pixelborn.net				$204		\r
khatrimazaorg.com				$216		\r
esportsrivalry.net				$168		\r
getwildfulness.com				$204		\r
independentviewers.com				$216		\r
rainy75.com				$216		\r
memoirsofageek.com				$216		\r
blossomhavenhome.com				$192		\r
networthascend.com				$168		\r
naturerootsplace.com				$192		\r
heidestrasse.com				$180		\r
lilahanne.net				$168		\r
retroplaygroundzone.com				$204		\r
eliteesportsarena.net				$168		\r
mustardseedyear.com				$168		\r
3d496.com				$168		\r
banlarbhumi.com				$240		\r
pizzlemusic.com				$204		\r
strongerwiththyme.com				$192		\r
nicolelmichel.com				$204		\r
hustle-tech.com				$204		\r
victoryesportshub.com				$204		\r
globalnewsupdate.net				$216		\r
abundantbroth.com				$192		\r
inspiredtosave.com				$180		\r
redlohhousefabrics.com				$192		\r
lurevibe.net				$204		\r
newsstreamtracker.com				$204		\r
playmastersclub.net				$192		\r
fudbollibre.com				$228		\r
urbanherbgarden.com				$180		\r
gameproedge.net				$180		\r
boundlessscreen.com				$144		\r
herbflourishhome.com				$156		\r
mistygardenview.com				$156		\r
masimoduti.com				$192		\r
pimantle.net				$216		\r
currentaffairsupdate.net				$204		\r
verdantgardencottage.com				$204		\r
truedee.net				$228		\r
manpuku-shop.com				$156		\r
great-expectations.net				$204		\r
sanhodn.com				$168		\r
nusyaro.com				$180		\r
talk2leeloo.com				$228		\r
iwilldominate.net				$204		\r
pokedata.net				$168		\r
playarcadewars.com				$204		\r
soopydrumschool.com				$216		\r
oivotech.com				$216		\r
biztechsystem.com				$204		\r
reality-movement.org				$216		\r
adobeshowcase.com				$240		\r
cari-data.com				$204		\r
banhtrangcankiem.com				$180		\r
metacarevr.com				$204		\r
sugarylove.net				$192		\r
buydomainspremium.com				$180		\r
mpgproworkstation.com				$180		\r
wpmit.com				$192		\r
mit-education.com				$192		\r
duc-duong.com				$180		\r
waikiddigital.com				$180		\r
queenslot800.com				$216		\r
teskeys.net				$180		\r
jacobainley.com				$180		\r
50track.com				$204		\r
shrocks.net				$204		\r
lapdatcamerataigialai.com				$204		\r
						\r
adamarchives.com				$252	Suspicious	\r
exposmall.com				$252		Uncategorized\r
agendacoverlife.com				$180	Average Dangerous	Uncategorized\r
baronmag.ca		363		430		\r
grosssound.com				$276		\r
arcade-infinity.com				$192		\r
wandereater.com		228		330		\r
bestoftoronto.net		180		430		\r
casiestewart.com		75		560		\r
dailyhawker.com		0		560	Lack organic traffic	Adult\r
divine.ca	49	597	California	560	Good Moderate	Entertainment\r
torontomike.com	44	4.7K	California	560	Good Reputable	Mass Media\r
viewthevibe.com	51	2.1K	Texas	560	Good Reputable	Mass Media\r
gentspost.com	25	11.6K	Texas	330	Good Reputable	Mass Media\r
montrealguardian.com	27	1.3K	California	330	Good Healthy	Social & Charitable Organizations\r
calgaryguardian.com	34	2.6K	California	430	Good Healthy	Publishing\r
auburnlane.com	33	1.4K	Iowa	430	Average Reputable	Mass Media\r
baronmag.com	42	1.9K	California	560	Good Healthy	Entertainment\r
torontoguardian.com	44	16.6K	California	560	Good Healthy	Publishing
psychreg.org	54	3K	England	45	Very Good Healthy	Mental Health
gailvoice.com	17	22.6K	North Carolina	35	High traffic to backlink ratio Healthy	Oil & Gas
ameisenhardt.com	26	29.1K	North Carolina	30	High traffic to backlink ratio Healthy	Education
wnynewsnow.com	37	3K	California	35	Good Reputable	Mass Media
downbeach.com	29	4.7K	California	35	Average Healthy	Newspaper
geeksaroundglobe.com	62	3.7K	California	115	Good Healthy	Food & Beverages
coruzant.com	55	316K	California	100	Very Good Reputable	Information Technology
mywowhealth.com	23	2.2K	Missouri	65	Good Healthy	Healthcare
entrepreneursbreak.com	55	7.8K	California	30	Good Healthy	Computer Software & Development
shkoh.com	44	11.9K	Netherlands	25	Good Healthy	Jewelry & Luxury Products
greenecodream.com	46	10.4K	North Carolina	65	Good Reputable	Retail
lakelandcurrents.com	29	1.7K	Virginia	55	Fine Healthy	Newspapers
rawmags.com	17	62.2K	California	35	High traffic to backlink ratio Healthy	Mass Media
hudsonfarmhouse.com	40	2.6K	Missouri	60	Very Good Healthy	Design
managementworksmedia.com	44	106K	California	35	High traffic to backlink ratio Healthy	Construction & Maintenance
howeyindustries.com	28	6.5K	North Carolina	35	Fine Reputable	Automotive
mybeautifuladventures.com	35	2.5K	California	25	Good Healthy	Retail
`,u2=[["Technology",/tech|software|code|program|digital|cyber|cloud|data|computer|mobile|gadget|apk|internet|ai(?:[^a-z]|$)|analytics|linux|web/i],["Business",/business|entrepreneur|ceo|company|corporate|industry|success|leadership|management|commerce|market/i],["Finance",/financ|money|wealth|invest|stock|trading|crypto|coin|bank|fund|economic|capital|broker|insurance/i],["Health",/health|medical|medic|wellness|fitness|psych|care|healer|germ|yoga/i],["Travel",/travel|tour|voyage|hotel|airline|destination|wander|trip|places|tourist/i],["Home",/home|decor|interior|property|realty|house|garden|architect|construction|building|living/i],["Sports",/sport|football|soccer|hockey|racing|speedway|running|athletic|cricket|golf|league/i],["Education",/educ|study|school|academy|learn|grammar|english|student|knowledge|university|exam|quiz/i],["Entertainment",/entertain|celebr|fame|movie|music|magazine|gossip|anime|manga|lyrics|poetry|joke|pun|bio/i],["News",/news|daily|journal|report|press|times|today|weekly|media|herald|tribune|wire/i],["Food",/food|recipe|menu|restaurant|cook|kitchen|snack|yummy/i],["Fashion",/fashion|style|beauty|apparel|luxe|vanity/i],["Gaming",/game|gaming|gamer|blooket|robux|play|esport/i],["Marketing",/marketing|seo|social|brand|content|outreach|advertis/i],["Lifestyle",/lifestyle|family|parent|mom|relationship|wedding|wish|inspir/i],["Energy",/energy|oil|gas|solar|renewable/i],["Automotive",/automotive|vehicle|motor| car |racing/i],["Legal",/legal|lawyer| law |attorney/i],["Environment",/environment|ecology|green|sustainab/i],["Art & Design",/art|design|creative|craft|architecture/i],["Real Estate",/real estate|realty|property|realtor/i]],sw=e=>{const n=Number.parseFloat(String(e).replace(/[^\d.]/g,""));return Number.isFinite(n)?n:0},gs=e=>String(e).trim()?sw(e):null,m2=(e,n)=>{const o=`${e} ${n}`,s=u2.filter(([,l])=>l.test(o)).map(([l])=>l);return s.length?[...new Set(s)]:["General"]},y0=(e,n)=>e.split(/\r?\n/).slice(1).map(o=>{const s=o.split("	").map(S=>S.trim());if(s.length<(n?5:4))return null;const l=s[0].match(/(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}/i);if(!l)return null;const u=l[0].replace(/^www\./i,"").toLowerCase(),m=s[0].replace(l[0],"").trim(),h=/confirm/i.test(s[s.length-1]),p=n||h?gs(s[1]):null,f=gs(s[n||h?2:1]),y=h?"Not provided":s[n?3:2]||"Not provided",x=Number.parseFloat(s[s.length-1]),w=Number.isFinite(x)?Math.round(x*100)/100:null;if(!u||w===null&&!h)return null;const b=m2(u,m);return{id:u,title:u,niche:b[0],tags:b,da:p,dr:f,monthlyTraffic:y,price:w,priceLabel:w===null?"Confirm on WhatsApp":null,notes:m,features:[...b.slice(0,2),"Editorial review","Placement terms disclosed"]}}).filter(Boolean),lw=[...y0(ow,!0),...y0(iw,!1),...aw.split(/\r?\n/).slice(1).map(e=>{const n=e.split("	").map(p=>p.trim());if(n.length<7)return null;const o=n[0].match(/(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}/i);if(!o)return null;const s=o[0].replace(/^www\./i,"").toLowerCase(),l=n[6]||"General",u=n[5]||"",m=m2(s,l),h=gs(n[4]);return{id:s,title:s,niche:m[0],tags:m,da:gs(n[1]),dr:null,monthlyTraffic:n[2]||"Not provided",price:h,priceLabel:h===null?"Confirm on WhatsApp":null,notes:l,region:n[3]&&n[3]!=="-"?n[3]:null,qualityOverview:u,sourceCategory:l,features:[l,u,"Placement terms disclosed"].filter(Boolean)}}).filter(Boolean)],cw=lw.reduce((e,n)=>{const o=e.get(n.title);if(!o)return e.set(n.title,n),e;const s=[...new Set([...o.tags,...n.tags])];return e.set(n.title,{...o,...n,da:n.da??o.da,dr:n.dr??o.dr,monthlyTraffic:n.monthlyTraffic==="Not provided"?o.monthlyTraffic:n.monthlyTraffic,price:n.price??o.price,priceLabel:n.price===null&&o.price===null?n.priceLabel:o.priceLabel,region:n.region??o.region,qualityOverview:n.qualityOverview??o.qualityOverview,sourceCategory:n.sourceCategory??o.sourceCategory,notes:n.notes||o.notes,niche:s[0],tags:s,features:n.qualityOverview?[n.sourceCategory,n.qualityOverview,"Placement terms disclosed"].filter(Boolean):[...s.slice(0,2),"Editorial review","Placement terms disclosed"]}),e},new Map),gr=[...cw.values()],d2=["All",...u2.map(([e])=>e).filter(e=>gr.some(n=>n.tags.includes(e))),"General"],uw=()=>{const e=[{icon:Za,title:"Buy Guest Posts",description:"Access premium guest posting opportunities on high-authority websites across various niches.",link:"/buy-guest-posts",gradient:"from-blue-500 to-cyan-500",image:"/images/guest-post-content-placement.webp",alt:"Illustration of a quality-checked guest post article ready for publisher placement",caption:"Review relevant publishing opportunities before selecting a placement."},{icon:ro,title:"Blogger Outreach",description:"Connect with influential bloggers and secure quality backlinks through personalized outreach.",link:"/blogger-outreach",gradient:"from-purple-500 to-pink-500",image:"/images/backlink-outreach-strategy.webp",alt:"SEO professionals planning a backlink and blogger outreach campaign",caption:"Manual outreach connects campaigns with relevant editorial websites."},{icon:zh,title:"Link Insertion",description:"Get your links inserted into existing high-quality content on authoritative websites.",link:"/link-insertion",gradient:"from-orange-500 to-red-500",image:"/images/contextual-link-insertion.webp",alt:"Illustration of contextual backlinks connecting relevant web pages across devices",caption:"Contextual link insertion adds a useful citation to existing content."}],n=[{label:"Publisher listings",value:gr.length.toLocaleString(),icon:Za},{label:"Searchable categories",value:"15+",icon:ro},{label:"Opportunity review",value:"Manual",icon:ji},{label:"Ranking guarantees",value:"None",icon:bs}],o=[{title:"Publisher fit before writing",content:"Review the proposed domain, topical category and available quality information before content production begins."},{title:"Publication-ready content",content:"Content is planned around the publication’s audience and remains subject to its editorial requirements and approval."},{title:"Transparent live-link reporting",content:"Reporting separates confirmed placement facts from changing third-party metrics and broader search-performance outcomes."}],s=[{title:"SEO agencies",content:"Shortlist relevant publishers for client campaigns and use a managed workflow for content, coordination and live-link reporting."},{title:"SaaS and online brands",content:"Build topical visibility around product, category and educational pages through publications that serve an aligned audience."},{title:"Consultants and website owners",content:"Compare opportunities by niche, traffic, authority signals and budget without treating a single third-party metric as a guarantee."}],l=[{icon:mo,title:"Define the campaign fit",content:"Share your website, target page, topic, preferred market and budget so the search starts with relevance rather than link volume."},{icon:Wu,title:"Review publisher options",content:"Compare topical category, estimated traffic, authority indicators, editorial quality and price before approving an opportunity."},{icon:Za,title:"Prepare useful content",content:"The article is written for the publisher’s readers, with a contextual reference that supports the subject instead of interrupting it."},{icon:Hu,title:"Coordinate and report",content:"We manage publisher communication and share the live URL after publication. Search performance remains dependent on many factors."}],u=[{question:"How do I choose the right guest post website?",answer:"Start with topical relevance and editorial quality, then review authority metrics, organic traffic patterns, audience fit and outbound-link behaviour. A high metric alone does not guarantee a useful placement."},{question:"Can I approve a publisher before my article is written?",answer:"Yes. You can review suitable publisher opportunities before content production so the topic, target page and placement match your campaign requirements."},{question:"What is included with a guest post placement?",answer:"The workflow can include publisher research, opportunity approval, original content, editorial coordination, publication and live-link reporting. Exact inclusions depend on the selected service."},{question:"What is the difference between a guest post and link insertion?",answer:"A guest post publishes a new article, while a link insertion adds a relevant citation to a suitable existing article. The best option depends on context, editorial fit and campaign goals."},{question:"What does “high DA guest posts” mean?",answer:"It commonly describes guest posts on websites with a comparatively strong third-party Domain Authority score. DA is not a Google metric, so we recommend checking relevance, organic visibility, editorial standards and link profile alongside it."},{question:"Does Guest Post Platform guarantee rankings or indexing?",answer:"No. A legitimate provider cannot control Google rankings or guarantee when a URL will be indexed. We provide publisher research, outreach, content coordination and placement reporting without promising a specific search outcome."},{question:"Is Guest Post Platform a marketplace or a managed service?",answer:"It supports both discovery and managed execution. You can browse publisher opportunities in the marketplace, then request help with selection, content, outreach and publication coordination."},{question:"Can agencies use the service for multiple client niches?",answer:"Yes. Agencies can request publisher shortlists for different industries and campaigns. Availability, editorial rules and pricing vary by publisher, so each shortlist should be reviewed independently."}],m={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":"https://guestpostplatform.com/#guest-posting-service",name:"Guest Post Platform and Blogger Outreach",serviceType:["Guest posting service","Blogger outreach","Link insertion"],provider:{"@id":"https://guestpostplatform.com/#organization"},url:"https://guestpostplatform.com/",description:"A guest post marketplace and managed outreach service for comparing relevant publisher opportunities and coordinating editorial placements.",audience:{"@type":"Audience",audienceType:"SEO agencies, brands, consultants and website owners"}},{"@type":"FAQPage","@id":"https://guestpostplatform.com/#faq",mainEntity:u.map(({question:f,answer:y})=>({"@type":"Question",name:f,acceptedAnswer:{"@type":"Answer",text:y}}))}]},h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},p={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Guest Post Platform: Browse 6,000+ Publisher Opportunities",description:"Use Guest Post Platform to browse niche-relevant publisher opportunities by authority, traffic and price, with optional blogger outreach and content support.",path:"/",imageAlt:"SEO growth illustration for guest post and link building campaigns",schema:m}),i.jsx(ge,{}),i.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[i.jsxs("div",{className:"absolute inset-0 z-0",children:[i.jsx("img",{src:"/images/marketplace-hero.webp",alt:"Guest Post Platform marketplace and SEO growth illustration",className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"})]}),i.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center",children:[i.jsxs(Q.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[i.jsxs("h1",{className:"text-5xl md:text-7xl font-bold text-white mb-6 leading-tight",children:["Guest Post Platform for",i.jsx("span",{className:"block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"SEO Agencies & Brands"})]}),i.jsx("p",{className:"text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto",children:"Browse niche-relevant publisher opportunities or use our managed blogger outreach service for research, content coordination and transparent placement reporting."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(_,{to:"/buy-guest-posts",children:i.jsxs(gt,{size:"lg",className:"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg px-8 py-6",children:["Browse Guest Posts",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6",children:"Request Quote"})})]})]}),i.jsx(Q.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"mt-20 grid grid-cols-2 md:grid-cols-4 gap-6",children:n.map((f,y)=>i.jsxs("div",{className:"backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6",children:[i.jsx(f.icon,{className:"w-8 h-8 text-blue-400 mb-3 mx-auto"}),i.jsx("div",{className:"text-3xl font-bold text-white mb-1",children:f.value}),i.jsx("div",{className:"text-sm text-slate-300",children:f.label})]},y))})]})]}),i.jsx("section",{className:"py-24 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:"text-center mb-16",children:[i.jsx(Q.h2,{variants:p,className:"text-4xl md:text-5xl font-bold text-slate-900 mb-4",children:"Our Services"}),i.jsx(Q.p,{variants:p,className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Comprehensive link building solutions tailored to your SEO goals"})]}),i.jsx(Q.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:"grid md:grid-cols-3 gap-8",children:e.map((f,y)=>i.jsx(Q.div,{variants:p,children:i.jsx(_,{to:f.link,className:"block group",children:i.jsxs("article",{className:"bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-blue-300",children:[i.jsxs("figure",{children:[i.jsx("img",{src:f.image,alt:f.alt,width:"1800",height:"1200",loading:"lazy",decoding:"async",className:"w-full aspect-[3/2] object-cover"}),i.jsx("figcaption",{className:"px-8 pt-4 text-sm text-slate-500",children:f.caption})]}),i.jsxs("div",{className:"p-8 pt-5",children:[i.jsx("div",{className:`w-16 h-16 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,children:i.jsx(f.icon,{className:"w-8 h-8 text-white"})}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:f.title}),i.jsx("p",{className:"text-slate-600 mb-6",children:f.description}),i.jsxs("div",{className:"flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform",children:["Learn More",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})]})]})})},y))})]})}),i.jsx("section",{className:"py-24 bg-white","aria-labelledby":"guest-post-marketplace-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center",children:[i.jsxs("figure",{className:"rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50",children:[i.jsx("img",{src:"/images/guest-post-seo-growth.webp",alt:"SEO analytics and rocket illustration representing sustainable growth through guest posting",width:"1800",height:"900",loading:"lazy",decoding:"async",className:"w-full aspect-[4/3] object-cover"}),i.jsx("figcaption",{className:"px-6 py-4 text-sm text-slate-600",children:"Relevant editorial placements support authority, referral discovery and long-term organic visibility."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-bold uppercase tracking-widest text-blue-600 mb-3",children:"Built for informed placement decisions"}),i.jsx("h2",{id:"guest-post-marketplace-heading",className:"text-4xl md:text-5xl font-bold text-slate-900 mb-6",children:"More Than a List of High-DA Websites"}),i.jsxs("p",{className:"text-lg text-slate-600 leading-relaxed mb-5",children:["A professional ",i.jsx(_,{to:"/buy-guest-posts",className:"font-semibold text-blue-700 hover:underline",children:"guest post marketplace"})," should help you evaluate context—not simply sort sites by one number. The strongest opportunities align the publisher's subject, audience and editorial standards with the page you want to promote."]}),i.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mb-8",children:"Our workflow combines publisher research, site approval, original content and publication reporting. You keep visibility over the placement while our team coordinates the time-consuming outreach and editorial steps."}),i.jsx("ul",{className:"grid sm:grid-cols-2 gap-4 mb-8",children:["Topical and audience relevance","Traffic and authority signals","Editorial content quality","Clear placement reporting"].map(f=>i.jsxs("li",{className:"flex items-start gap-3 text-slate-700",children:[i.jsx(no,{className:"w-5 h-5 mt-0.5 shrink-0 text-emerald-600","aria-hidden":"true"}),i.jsx("span",{children:f})]},f))}),i.jsxs("div",{className:"flex flex-wrap gap-5",children:[i.jsxs(_,{to:"/buy-guest-posts",className:"inline-flex items-center font-semibold text-blue-700 hover:text-blue-900",children:["Explore guest post opportunities",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]}),i.jsxs(_,{to:"/pricing",className:"inline-flex items-center font-semibold text-slate-700 hover:text-slate-950",children:["Review pricing options",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]}),i.jsxs(_,{to:"/best-guest-post-platforms",className:"inline-flex items-center font-semibold text-slate-700 hover:text-slate-950",children:["Compare guest post platform models",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})]})]})]})}),i.jsx("section",{className:"py-24 bg-slate-50","aria-labelledby":"high-da-guest-posts-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"max-w-4xl mb-14",children:[i.jsx("p",{className:"text-sm font-bold uppercase tracking-widest text-blue-600 mb-3",children:"High DA guest posts, evaluated in context"}),i.jsx("h2",{id:"high-da-guest-posts-heading",className:"text-4xl md:text-5xl font-bold text-slate-900 mb-6",children:"A Guest Posting Marketplace Built Around Relevance"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"Guest Post Platform helps agencies and brands find guest posting opportunities and coordinate editorial outreach. The marketplace lets you compare available websites by niche, estimated traffic, authority indicators and price. If you need execution support, our managed service can cover publisher selection, original content and publication follow-up."}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed",children:"“High DA” is a useful discovery phrase, but Domain Authority is a third-party metric—not a score used by Google. A sound decision also considers topical relevance, traffic history, content quality, audience alignment and the way a publisher handles external contributions. That broader review is the basis of our approach."})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-7",children:s.map(f=>i.jsxs("article",{className:"rounded-2xl bg-white border border-slate-200 p-8 shadow-sm",children:[i.jsxs("h3",{className:"text-2xl font-bold text-slate-900 mb-3",children:["For ",f.title]}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:f.content})]},f.title))})]})}),i.jsx("section",{className:"py-24 bg-white","aria-labelledby":"outreach-process-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[i.jsx("p",{className:"text-sm font-bold uppercase tracking-widest text-blue-600 mb-3",children:"How the service works"}),i.jsx("h2",{id:"outreach-process-heading",className:"text-4xl md:text-5xl font-bold text-slate-900 mb-5",children:"From Publisher Research to Live Placement"}),i.jsx("p",{className:"text-xl text-slate-600",children:"A clear workflow for marketplace orders, custom outreach and white-label agency campaigns."})]}),i.jsx("ol",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-7",children:l.map((f,y)=>i.jsxs("li",{className:"relative rounded-2xl border border-slate-200 bg-slate-50 p-7",children:[i.jsxs("div",{className:"flex items-center justify-between mb-5",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center",children:i.jsx(f.icon,{className:"w-6 h-6 text-blue-700","aria-hidden":"true"})}),i.jsxs("span",{className:"text-sm font-bold text-slate-400",children:["0",y+1]})]}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:f.title}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:f.content})]},f.title))}),i.jsxs("div",{className:"mt-10 flex flex-wrap justify-center gap-5",children:[i.jsxs(_,{to:"/buy-guest-posts",className:"inline-flex items-center font-semibold text-blue-700 hover:text-blue-900",children:["Browse the publisher marketplace",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]}),i.jsxs(_,{to:"/blogger-outreach",className:"inline-flex items-center font-semibold text-slate-700 hover:text-slate-950",children:["Explore managed blogger outreach",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})]})]})}),i.jsx("section",{className:"py-24 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:"text-center mb-16",children:[i.jsx(Q.h2,{variants:p,className:"text-4xl md:text-5xl font-bold text-slate-900 mb-4",children:"What You Can Verify"}),i.jsx(Q.p,{variants:p,className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Clear checkpoints make each publisher decision easier to review"})]}),i.jsx(Q.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:"grid md:grid-cols-3 gap-8",children:o.map((f,y)=>i.jsx(Q.div,{variants:p,children:i.jsxs("div",{className:"bg-slate-50 rounded-2xl p-8 h-full border border-slate-200",children:[i.jsx(no,{className:"w-8 h-8 text-blue-600 mb-5"}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:f.title}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:f.content})]})},y))})]})}),i.jsx("section",{className:"py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50","aria-labelledby":"about-highda-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-bold uppercase tracking-widest text-blue-600 mb-3",children:"About Guest Post Platform"}),i.jsx("h2",{id:"about-highda-heading",className:"text-4xl md:text-5xl font-bold text-slate-900 mb-6",children:"Marketplace Choice With Managed Outreach Support"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"Guest Post Platform is a guest post marketplace and outreach service for SEO agencies, consultants, brands and website owners. Our role is to make publisher discovery easier and help coordinate content-led placements when a campaign needs hands-on support."}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-8",children:"We do not promise guaranteed rankings, guaranteed indexing or a fixed SEO outcome. Publisher availability, editorial acceptance and third-party metrics can change. Clients can review the proposed opportunity and choose the option that fits their topic, market and budget."}),i.jsxs("div",{className:"flex flex-wrap gap-6",children:[i.jsxs(_,{to:"/about",className:"inline-flex items-center font-semibold text-blue-700 hover:text-blue-900",children:["Learn about Guest Post Platform",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]}),i.jsxs(_,{to:"/contact",className:"inline-flex items-center font-semibold text-slate-700 hover:text-slate-950",children:["Request a relevant shortlist",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})]})]}),i.jsxs("aside",{className:"rounded-2xl border border-blue-100 bg-white p-8 shadow-xl shadow-blue-900/5","aria-label":"Publisher quality review checklist",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-6",children:"What to check beyond DA"}),i.jsx("ul",{className:"space-y-5",children:[["Niche and page relevance","Does the publisher serve an audience connected to your subject?"],["Organic visibility","Does estimated traffic appear stable and supported by relevant content?"],["Editorial standards","Are articles useful, attributable and written for readers?"],["Link profile and placement","Will the reference sit naturally inside relevant editorial context?"],["Price and campaign value","Does the opportunity fit your objective instead of merely offering a high score?"]].map(([f,y])=>i.jsxs("li",{className:"flex gap-3",children:[i.jsx(no,{className:"w-5 h-5 mt-1 shrink-0 text-blue-600","aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("strong",{className:"block text-slate-900",children:f}),i.jsx("span",{className:"text-sm text-slate-600",children:y})]})]},f))})]})]})}),i.jsx("section",{className:"py-24 bg-slate-50","aria-labelledby":"home-faq-heading",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-14",children:[i.jsx("p",{className:"text-sm font-bold uppercase tracking-widest text-blue-600 mb-3",children:"Guest post marketplace FAQ"}),i.jsx("h2",{id:"home-faq-heading",className:"text-4xl md:text-5xl font-bold text-slate-900 mb-5",children:"Questions Before You Choose a Placement"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-3xl mx-auto",children:"Straightforward answers to help you compare guest posts, blogger outreach and contextual link insertion."})]}),i.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:u.map(({question:f,answer:y})=>i.jsxs("article",{className:"rounded-2xl border border-slate-200 bg-white p-7 shadow-sm",children:[i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:f}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:y})]},f))})]})}),i.jsx("section",{className:"py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"Need Guest Post Sites That Fit Your Niche?"}),i.jsx("p",{className:"text-xl text-slate-300 mb-10",children:"Browse publisher opportunities or share your target page and campaign goals for a relevant shortlist."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(_,{to:"/buy-guest-posts",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Browse Guest Post Sites",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/pricing",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6",children:"View Pricing"})})]})]})})}),i.jsx(ye,{})]})},Pu="https://guestpostplatform.com",si=`${Pu}/buy-guest-posts/`,x0=[{question:"How do I choose a relevant guest post website?",answer:"Start with topical and audience relevance, then compare recent organic traffic, editorial activity, content quality and outbound-link patterns. DA and DR are third-party comparison metrics, not guarantees of rankings or placement quality."},{question:"Are the listed prices and metrics guaranteed?",answer:"No. Publisher availability, editorial requirements, traffic estimates and pricing can change. We reconfirm the current terms before you approve an order."},{question:"Can I approve the publisher before content is written?",answer:"Yes. You can review the domain, topic fit, available metrics and publishing requirements before content production begins."},{question:"Do guest posts guarantee higher Google rankings?",answer:"No responsible provider can guarantee rankings. Results depend on relevance, content quality, competition, technical SEO and your overall backlink profile."}],Ya=(e="")=>{const n=e.toLowerCase();let o=0;return n.includes("excellent")?o=5:n.includes("very good")||n.includes("high traffic")?o=4:n.includes("good")?o=3:n.includes("average")?o=2:n.includes("fine")&&(o=1),n.includes("reputable")&&(o+=.5),n.includes("healthy")&&(o+=.25),o},Qa=(e="")=>{const n=String(e).trim().toLowerCase(),o=Number.parseFloat(n.replace(/[^\d.]/g,""))||0;return n.includes("m")?o*1e6:n.includes("k")?o*1e3:o},mw=()=>{const[e,n]=v.useState(""),[o,s]=v.useState("All"),[l,u]=v.useState("quality-high"),[m,h]=v.useState(1),[p,f]=v.useState(null),y=12,x=d2,w=v.useMemo(()=>{let j=gr.filter(D=>{const L=e.trim().toLowerCase(),W=o==="All"||D.tags.includes(o),U=!L||[D.title,D.notes,...D.tags].join(" ").toLowerCase().includes(L);return W&&U});return j.sort((D,L)=>{switch(l){case"quality-high":return Ya(L.qualityOverview)-Ya(D.qualityOverview)||Qa(L.monthlyTraffic)-Qa(D.monthlyTraffic)||(L.da??0)-(D.da??0);case"price-low":return(D.price??Number.POSITIVE_INFINITY)-(L.price??Number.POSITIVE_INFINITY);case"price-high":return(L.price??Number.NEGATIVE_INFINITY)-(D.price??Number.NEGATIVE_INFINITY);case"da-high":return(L.da??0)-(D.da??0);case"da-low":return(D.da??0)-(L.da??0);default:return 0}}),j},[e,o,l]),b=Math.ceil(w.length/y),S=w.slice((m-1)*y,m*y),N=v.useMemo(()=>[...gr].sort((j,D)=>Ya(D.qualityOverview)-Ya(j.qualityOverview)||Qa(D.monthlyTraffic)-Qa(j.monthlyTraffic)||(D.da??0)-(j.da??0)).slice(0,12),[]),T=[...new Set([1,m-2,m-1,m,m+1,m+2,b])].filter(j=>j>=1&&j<=b).sort((j,D)=>j-D),E={"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":`${si}#collection`,url:si,name:"Guest Post Marketplace and Publisher Opportunities",description:"Filter guest post publisher opportunities by category, authority metrics, estimated traffic and price.",isPartOf:{"@id":`${Pu}/#website`},mainEntity:{"@type":"ItemList",numberOfItems:gr.length,itemListOrder:"https://schema.org/ItemListOrderDescending",itemListElement:N.map((j,D)=>({"@type":"ListItem",position:D+1,item:{"@type":"Thing",name:j.title}}))}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${Pu}/`},{"@type":"ListItem",position:2,name:"Guest Post Marketplace",item:si}]},{"@type":"FAQPage",mainEntity:x0.map(j=>({"@type":"Question",name:j.question,acceptedAnswer:{"@type":"Answer",text:j.answer}}))}]},z=j=>{const D=["Hi, I would like to request a guest post placement.","",`Website: ${j.title}`,`Categories: ${j.tags.join(", ")}`,`DA: ${j.da??"N/A"}`,`DR: ${j.dr??"N/A"}`,`Monthly traffic: ${j.monthlyTraffic}`,`Listed price: ${j.price===null?j.priceLabel:`$${j.price.toLocaleString()}`}`,"","Please share availability and the publishing requirements."].join(`
`);return`https://wa.me/923025820230?text=${encodeURIComponent(D)}`};return i.jsxs(i.Fragment,{children:[i.jsxs(Yn,{children:[i.jsx("title",{children:"Buy Guest Posts | Vetted Publisher Marketplace"}),i.jsx("meta",{name:"description",content:`Compare ${gr.length.toLocaleString()} guest post publisher opportunities by niche, DA, DR, estimated traffic, quality and price. Request a relevant, editorially reviewed placement.`}),i.jsx("meta",{name:"robots",content:"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}),i.jsx("link",{rel:"canonical",href:si}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:title",content:"Guest Post Marketplace | Vetted Publisher Opportunities"}),i.jsx("meta",{property:"og:description",content:"Search and compare relevant publisher opportunities by category, quality, authority metrics, traffic and price."}),i.jsx("meta",{property:"og:url",content:si}),i.jsx("meta",{property:"og:site_name",content:"Guest Post Platform"}),i.jsx("meta",{name:"twitter:card",content:"summary"}),i.jsx("meta",{name:"twitter:title",content:"Guest Post Marketplace | Guest Post Platform"}),i.jsx("meta",{name:"twitter:description",content:"Filter publisher opportunities by relevance, quality, traffic and price."}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify(E)})]}),i.jsx(ge,{}),i.jsxs("main",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Buy Premium Guest Posts"}),i.jsx(Q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Compare relevant publisher opportunities by topic, editorial quality, authority metrics, estimated traffic and price."})]})}),i.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 mb-8",children:[i.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[i.jsxs("div",{className:"relative",children:[i.jsx(mo,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),i.jsx("input",{type:"text",placeholder:"Search by domain or category...",value:e,onChange:j=>{n(j.target.value),h(1)},className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{className:"relative",children:[i.jsx(u6,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),i.jsx("select",{value:o,onChange:j=>{s(j.target.value),h(1)},className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900",children:x.map(j=>i.jsx("option",{value:j,children:j},j))})]}),i.jsxs("div",{className:"relative",children:[i.jsx(ji,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),i.jsxs("select",{value:l,onChange:j=>{u(j.target.value),h(1)},className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900",children:[i.jsx("option",{value:"quality-high",children:"Quality: Best First"}),i.jsx("option",{value:"da-high",children:"DA: High to Low"}),i.jsx("option",{value:"da-low",children:"DA: Low to High"}),i.jsx("option",{value:"price-low",children:"Price: Low to High"}),i.jsx("option",{value:"price-high",children:"Price: High to Low"})]})]})]}),i.jsxs("div",{className:"mt-4 text-sm text-slate-600",children:["Showing ",S.length," of ",w.length," results"]})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",children:S.map((j,D)=>i.jsx(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:D*.05},className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden",children:i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3 mb-4",children:[i.jsx("h3",{className:"text-xl font-bold text-slate-900",children:j.title}),i.jsx("div",{className:"flex flex-wrap justify-end gap-1",children:j.tags.map(L=>i.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full",children:L},L))})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Domain Authority"}),i.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:["DA ",j.da??"N/A"]})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Domain Rating"}),i.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:["DR ",j.dr??"N/A"]})]})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("div",{className:"text-sm text-slate-600 mb-1",children:"Monthly Traffic"}),i.jsx("div",{className:"text-lg font-semibold text-slate-900",children:j.monthlyTraffic})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"Features:"}),i.jsx("ul",{className:"space-y-1",children:j.features.map((L,W)=>i.jsxs("li",{className:"text-sm text-slate-700 flex items-center",children:[i.jsx("span",{className:"w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"}),L]},W))})]}),i.jsxs("div",{className:"border-t border-slate-200 pt-4 mt-4",children:[i.jsx("div",{className:"flex items-center justify-between mb-4",children:i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Price"}),i.jsx("div",{className:"text-2xl font-bold text-slate-900",children:j.price===null?j.priceLabel:`$${j.price.toFixed(2)}`})]})}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs(gt,{onClick:()=>f(j),variant:"outline",className:"flex-1",children:[i.jsx(l6,{className:"w-4 h-4 mr-2"}),"View Details"]}),i.jsx(gt,{asChild:!0,className:"flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white",children:i.jsxs("a",{href:z(j),target:"_blank",rel:"noopener noreferrer","aria-label":`Request a guest post on ${j.title} via WhatsApp`,children:[i.jsx(w6,{className:"w-4 h-4 mr-2"}),"Request Post"]})})]})]})]})},j.id))}),b>1&&i.jsxs("div",{className:"flex justify-center items-center gap-2",children:[i.jsx(gt,{onClick:()=>h(j=>Math.max(j-1,1)),disabled:m===1,variant:"outline",children:i.jsx(i6,{className:"w-4 h-4"})}),T.map((j,D)=>i.jsxs(Xt.Fragment,{children:[D>0&&j-T[D-1]>1&&i.jsx("span",{className:"px-1 text-slate-500","aria-hidden":"true",children:"…"}),i.jsx(gt,{onClick:()=>h(j),variant:m===j?"default":"outline",className:m===j?"bg-blue-600 text-white":"","aria-label":`Go to results page ${j}`,"aria-current":m===j?"page":void 0,children:j})]},j)),i.jsx(gt,{onClick:()=>h(j=>Math.min(j+1,b)),disabled:m===b,variant:"outline",children:i.jsx(a6,{className:"w-4 h-4"})})]})]}),i.jsx("section",{className:"bg-white border-t border-slate-200 py-16",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("p",{className:"text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3",children:"Publisher research before placement"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-slate-900 mb-6",children:"How to use this guest post marketplace"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{children:"Choose a category that overlaps with the audience of your target page. A contextually relevant publication is normally more defensible than an unrelated site selected only because its DA or DR is high."}),i.jsx("p",{children:"Use traffic and authority metrics as comparison signals, then review the publication's recent articles, topic consistency, editorial standards and outbound links. Metrics are estimates and may change between reviews."})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{children:"Before ordering, request confirmation of current availability, price, accepted topics, expected turnaround and link attributes. Publication remains subject to the publisher's editorial approval."}),i.jsx("p",{children:"We do not promise rankings, indexing dates or permanent control of third-party websites. A guest post should provide useful information to the publisher's readers and support a broader people-first SEO strategy."})]})]})]})}),i.jsx("section",{className:"bg-slate-50 border-t border-slate-200 py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8",children:"Guest post marketplace FAQs"}),i.jsx("div",{className:"space-y-4",children:x0.map(j=>i.jsxs("details",{className:"group bg-white border border-slate-200 rounded-xl p-5",children:[i.jsxs("summary",{className:"font-semibold text-slate-900 cursor-pointer list-none flex justify-between gap-4",children:[j.question,i.jsx("span",{className:"text-blue-600 group-open:rotate-45 transition-transform",children:"+"})]}),i.jsx("p",{className:"text-slate-600 leading-relaxed mt-4",children:j.answer})]},j.question))})]})})]}),p&&i.jsx("div",{className:"fixed inset-0 z-[70] bg-slate-950/70 p-4 flex items-center justify-center",role:"presentation",onClick:()=>f(null),children:i.jsxs("section",{role:"dialog","aria-modal":"true","aria-labelledby":"publisher-details-title",className:"bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8",onClick:j=>j.stopPropagation(),children:[i.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-semibold text-blue-600 mb-1",children:"Publisher opportunity"}),i.jsx("h2",{id:"publisher-details-title",className:"text-2xl font-bold text-slate-900",children:p.title})]}),i.jsx("button",{type:"button",onClick:()=>f(null),className:"p-2 rounded-lg hover:bg-slate-100","aria-label":"Close publisher details",children:i.jsx(Uu,{className:"w-5 h-5"})})]}),i.jsx("dl",{className:"grid sm:grid-cols-2 gap-4 mb-6",children:[["Categories",p.sourceCategory||p.tags.join(", ")],["Region",p.region||"Not provided"],["Domain Authority",p.da??"N/A"],["Domain Rating",p.dr??"N/A"],["Estimated traffic",p.monthlyTraffic],["Quality review",p.qualityOverview||"Editorial review required"],["Listed price",p.price===null?p.priceLabel:`$${p.price.toFixed(2)}`]].map(([j,D])=>i.jsxs("div",{className:"bg-slate-50 rounded-xl p-4",children:[i.jsx("dt",{className:"text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1",children:j}),i.jsx("dd",{className:"font-semibold text-slate-900",children:D})]},j))}),i.jsx("p",{className:"text-sm text-slate-600 leading-relaxed mb-6",children:"Availability, metrics, price, accepted topics, turnaround and link attributes must be reconfirmed before ordering. Publication is subject to editorial approval."}),i.jsx(gt,{asChild:!0,className:"w-full bg-green-600 hover:bg-green-700 text-white",children:i.jsx("a",{href:z(p),target:"_blank",rel:"noopener noreferrer",children:"Request current details on WhatsApp"})})]})}),i.jsx(ye,{})]})},dw=()=>{const e=[{icon:mo,title:"Identify",description:"We research and identify high-authority bloggers in your niche with engaged audiences."},{icon:Eh,title:"Pitch",description:"Our team crafts personalized outreach emails that get responses and build relationships."},{icon:m6,title:"Negotiate",description:"We handle all negotiations to secure the best placement terms and pricing for you."},{icon:K6,title:"Publish",description:"Your content goes live on authoritative blogs with quality backlinks to your site."}],n=[{icon:ls,title:"Targeted Outreach",description:"We connect you with bloggers whose audience matches your target market perfectly."},{icon:ro,title:"Relationship Building",description:"Build long-term partnerships with influential bloggers in your industry."},{icon:ji,title:"Increased Visibility",description:"Get your brand in front of thousands of engaged readers and potential customers."},{icon:bs,title:"Quality Backlinks",description:"Earn high-quality, contextual backlinks from authoritative domains."},{icon:_u,title:"Time Saving",description:"Let our experts handle the time-consuming outreach process while you focus on your business."},{icon:It,title:"Proven Results",description:"Our systematic approach delivers consistent results with measurable ROI."}],o=[{label:"Bloggers Contacted",value:"50,000+"},{label:"Response Rate",value:"45%"},{label:"Successful Placements",value:"8,500+"},{label:"Average DA",value:"68"}],s=[{name:"Starter",price:499,features:["10 blogger outreach contacts","Personalized pitch emails","Follow-up management","Monthly reporting","Email support"]},{name:"Professional",price:999,popular:!0,features:["25 blogger outreach contacts","Custom pitch templates","Relationship management","Bi-weekly reporting","Priority email support","Negotiation assistance"]},{name:"Enterprise",price:1999,features:["50+ blogger outreach contacts","Full campaign management","Dedicated account manager","Weekly reporting","24/7 priority support","Custom strategy development"]}];return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Blogger Outreach Services | Relevant Publisher Research",description:"Get managed blogger outreach with publisher research, personalized pitches, opportunity approval, original content and transparent placement reporting.",path:"/blogger-outreach"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center",children:[i.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",children:"Professional Blogger Outreach"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-3xl mx-auto mb-10",children:"Connect with influential bloggers and secure high-quality backlinks through our proven outreach process"}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Get Started",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6",children:"Schedule Demo"})})]})]})})}),i.jsx("section",{className:"py-16 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:o.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"text-center",children:[i.jsx("div",{className:"text-4xl font-bold text-purple-600 mb-2",children:l.value}),i.jsx("div",{className:"text-slate-600",children:l.label})]},u))})})}),i.jsx("section",{className:"py-16 bg-white border-b border-slate-200",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"Manual outreach based on audience fit"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"A useful outreach campaign starts with the destination page and the people it should help. We define relevant themes, research publications that already serve that audience and review recent articles, organic visibility and outbound-link patterns. A high authority score alone does not qualify a site, and a publisher is never represented as approved until its editor confirms the opportunity."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-5",children:"Each pitch is adapted to the publication rather than sent as an unrelated bulk template. Proposed topics must add something useful to the site, fit its editorial style and create a genuine reason to cite the client resource. The publisher keeps final control over acceptance, wording, link attributes, publication date and any required sponsored disclosure."}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:"Clients receive the proposed site and terms for approval, followed by the live URL and a placement check. We can report completed outreach, responses and verified links, but we do not guarantee rankings, referral traffic or a particular reply rate. Those outcomes also depend on content quality, competition, technical SEO and the publisher's audience."})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Our Proven Process"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"A systematic approach to blogger outreach that delivers results"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((l,u)=>i.jsx(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"relative",children:i.jsxs("div",{className:"bg-white rounded-xl p-8 shadow-lg h-full",children:[i.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6",children:i.jsx(l.icon,{className:"w-8 h-8 text-white"})}),i.jsx("div",{className:"absolute top-8 right-8 text-6xl font-bold text-slate-100",children:u+1}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]})},u))})]})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Why Choose Our Outreach Service"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Benefits that drive real business results"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-slate-50 rounded-xl p-6 border border-slate-200",children:[i.jsx(l.icon,{className:"w-12 h-12 text-purple-600 mb-4"}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]},u))})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Flexible Pricing Plans"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Choose the plan that fits your outreach needs"})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:s.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:`bg-white rounded-2xl p-8 shadow-lg ${l.popular?"ring-2 ring-purple-600 relative":""}`,children:[l.popular&&i.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:i.jsx("span",{className:"bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"})}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",children:l.name}),i.jsxs("div",{className:"mb-6",children:[i.jsxs("span",{className:"text-4xl font-bold text-slate-900",children:["$",l.price]}),i.jsx("span",{className:"text-slate-600",children:"/month"})]}),i.jsx("ul",{className:"space-y-3 mb-8",children:l.features.map((m,h)=>i.jsxs("li",{className:"flex items-start text-slate-700",children:[i.jsx(It,{className:"w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5"}),i.jsx("span",{children:m})]},h))}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{className:`w-full ${l.popular?"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white":"bg-slate-900 hover:bg-slate-800 text-white"}`,children:"Get Started"})})]},u))})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Ready to Start Your Outreach Campaign?"}),i.jsx("p",{className:"text-xl text-slate-300 mb-10",children:"Let our experts connect you with influential bloggers in your niche"}),i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Schedule a Consultation",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})})]})})})]}),i.jsx(ye,{})]})},hw=()=>{const e=[{icon:ls,title:"Select Content",description:"We identify high-quality existing content on authoritative websites relevant to your niche."},{icon:zh,title:"Insert Links",description:"Your links are naturally inserted into contextually relevant positions within the content."},{icon:It,title:"Quality Check",description:"We verify proper placement, anchor text optimization, and link functionality."}],n=[{icon:du,title:"Fast Turnaround",description:"Get your links live within 3-5 business days, much faster than traditional guest posting."},{icon:ss,title:"Placement Terms Confirmed",description:"Current link attributes, publisher terms and any monitoring period are confirmed before approval."},{icon:ji,title:"Existing-Article Context",description:"Evaluate whether an established article offers a natural, useful context for the destination page."},{icon:bs,title:"High-Quality Sites",description:"Links placed only on authoritative domains with genuine traffic and strong metrics."},{icon:_u,title:"Time Efficient",description:"No content creation required - leverage existing high-performing articles."},{icon:It,title:"Natural Integration",description:"Links are contextually relevant and blend seamlessly with existing content."}],o=[{name:"Standard",price:299,da:"40-60",features:["DA 40-60 websites","Contextual link placement","Placement terms confirmed","3-5 day turnaround","Detailed reporting"]},{name:"Premium",price:599,da:"60-80",popular:!0,features:["DA 60-80 websites","Prime content selection","Placement terms confirmed","2-3 day turnaround","Priority support","Monthly traffic report"]},{name:"Elite",price:999,da:"80+",features:["DA 80+ websites","Premium content placement","Placement terms confirmed","1-2 day turnaround","Dedicated account manager","Comprehensive analytics"]}],s=[{client:"Existing Article Fit",niche:"Relevance review",links:"Required",trafficIncrease:"Reviewed",rankingImprovement:"Not promised"},{client:"Publisher Quality",niche:"Editorial review",links:"Required",trafficIncrease:"Reviewed",rankingImprovement:"Not promised"},{client:"Live-Link Delivery",niche:"Placement verification",links:"Recorded",trafficIncrease:"Monitored",rankingImprovement:"Not promised"}];return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Contextual Link Insertion Services | Relevant Niche Edits",description:"Request contextual link insertions in relevant existing articles, with publisher review, destination-page matching and transparent reporting.",path:"/link-insertion"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-24",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center",children:[i.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",children:"Fast & Reliable Link Insertion"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-3xl mx-auto mb-10",children:"Request a contextual citation in a relevant existing article, subject to publisher review and confirmed placement terms"}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Get Started",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/pricing",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6",children:"View Pricing"})})]})]})})}),i.jsx("section",{className:"py-16 bg-white border-b border-slate-200",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"When an existing article is a suitable fit"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"A contextual insertion only makes sense when the destination genuinely helps a reader understand or act on the surrounding topic. Before proposing an article, we compare search intent, subject coverage, audience, publication date and the existing paragraph. We avoid forcing a commercial anchor into unrelated copy or treating third-party authority metrics as proof of quality."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-5",children:"The publisher decides whether an update is editorially acceptable. Its current price, link attribute, disclosure requirements and replacement or monitoring period are confirmed before approval. Paid placements should be identified with the appropriate sponsored or nofollow treatment when required; a dofollow link or permanent placement is never assumed merely because an article is already live."}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:"After publication we verify the exact URL, surrounding text, destination, anchor and link attribute. Existing pages can later be edited, redirected or removed by their owners, so reporting records what was checked and when. Link insertion may save writing time, but it does not guarantee indexing, rankings or traffic and should support—rather than replace—strong content and technical SEO."})]})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[i.jsxs(Q.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-6",children:"What is Link Insertion?"}),i.jsx("p",{className:"text-lg text-slate-700 mb-6",children:"Link insertion is the process of adding your backlinks to existing, high-quality content on authoritative websites. Unlike guest posting, which requires creating new content, link insertion leverages already-published articles that are ranking well and receiving traffic."}),i.jsx("p",{className:"text-lg text-slate-700 mb-6",children:"This approach provides faster results, as you benefit immediately from the existing page's authority and traffic. It's a cost-effective and efficient way to build high-quality backlinks without the time investment of content creation."}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(du,{className:"w-6 h-6 text-orange-600 mr-2"}),i.jsx("span",{className:"font-semibold text-slate-900",children:"3-5 Day Turnaround"})]}),i.jsxs("div",{className:"flex items-center",children:[i.jsx(ss,{className:"w-6 h-6 text-orange-600 mr-2"}),i.jsx("span",{className:"font-semibold text-slate-900",children:"Confirmed Placement Terms"})]})]})]}),i.jsxs(Q.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-6",children:"Key Advantages"}),i.jsxs("ul",{className:"space-y-4",children:[i.jsxs("li",{className:"flex items-start",children:[i.jsx(It,{className:"w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold text-slate-900",children:"Faster Results"}),i.jsx("div",{className:"text-slate-700",children:"No waiting for new content to rank"})]})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx(It,{className:"w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold text-slate-900",children:"Cost Effective"}),i.jsx("div",{className:"text-slate-700",children:"Lower cost than full guest posting"})]})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx(It,{className:"w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold text-slate-900",children:"Proven Authority"}),i.jsx("div",{className:"text-slate-700",children:"Links on already-ranking content"})]})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx(It,{className:"w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"}),i.jsxs("div",{children:[i.jsx("div",{className:"font-semibold text-slate-900",children:"Natural Integration"}),i.jsx("div",{className:"text-slate-700",children:"Contextually relevant placements"})]})]})]})]})]})})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"How It Works"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Simple, transparent process from start to finish"})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-white rounded-xl p-8 shadow-lg relative",children:[i.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6",children:i.jsx(l.icon,{className:"w-8 h-8 text-white"})}),i.jsx("div",{className:"absolute top-8 right-8 text-6xl font-bold text-slate-100",children:u+1}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]},u))})]})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Why Choose Link Insertion"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Benefits that accelerate your SEO success"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-slate-50 rounded-xl p-6 border border-slate-200",children:[i.jsx(l.icon,{className:"w-12 h-12 text-orange-600 mb-4"}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]},u))})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Transparent Pricing"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Choose the package that matches your needs"})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:o.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:`bg-white rounded-2xl p-8 shadow-lg ${l.popular?"ring-2 ring-orange-600 relative":""}`,children:[l.popular&&i.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:i.jsx("span",{className:"bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"})}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",children:l.name}),i.jsxs("div",{className:"mb-2",children:[i.jsxs("span",{className:"text-4xl font-bold text-slate-900",children:["$",l.price]}),i.jsx("span",{className:"text-slate-600",children:"/link"})]}),i.jsxs("div",{className:"text-sm text-slate-600 mb-6",children:["DA ",l.da]}),i.jsx("ul",{className:"space-y-3 mb-8",children:l.features.map((m,h)=>i.jsxs("li",{className:"flex items-start text-slate-700",children:[i.jsx(It,{className:"w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"}),i.jsx("span",{children:m})]},h))}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{className:`w-full ${l.popular?"bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white":"bg-slate-900 hover:bg-slate-800 text-white"}`,children:"Get Started"})})]},u))})]})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Quality Checkpoints"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"What is reviewed before and after a contextual placement"})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:s.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200",children:[i.jsx("div",{className:"text-sm text-orange-600 font-semibold mb-2",children:l.niche}),i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-6",children:l.client}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Context check"}),i.jsx("div",{className:"text-3xl font-bold text-slate-900",children:l.links})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Traffic pattern"}),i.jsx("div",{className:"text-3xl font-bold text-orange-600",children:l.trafficIncrease})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-600",children:"Ranking outcome"}),i.jsx("div",{className:"text-2xl font-bold text-slate-900",children:l.rankingImprovement})]})]})]},u))})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Ready to Review Relevant Existing Articles?"}),i.jsx("p",{className:"text-xl text-slate-300 mb-10",children:"Start building quality backlinks today with our link insertion service"}),i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Get Your Links Inserted",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})})]})})})]}),i.jsx(ye,{})]})},pw=()=>{const[e,n]=v.useState("monthly"),o=[{name:"Starter",monthlyPrice:499,annualPrice:4490,description:"Perfect for small businesses and startups",features:["5 guest posts per month","DA 40-60 websites","Basic niche targeting","Standard content review","Email support","Monthly reporting","Dofollow backlinks","30-day turnaround"],notIncluded:["Priority support","Custom content strategy","Dedicated account manager"]},{name:"Professional",monthlyPrice:999,annualPrice:8990,popular:!0,description:"Ideal for growing businesses",features:["15 guest posts per month","DA 60-80 websites","Advanced niche targeting","Premium content review","Priority email support","Bi-weekly reporting","Dofollow backlinks","14-day turnaround","Link insertion included","Blogger outreach support","Custom anchor text"],notIncluded:["Dedicated account manager","24/7 phone support"]},{name:"Enterprise",monthlyPrice:2499,annualPrice:22490,description:"For established brands and agencies",features:["Unlimited guest posts","DA 80+ websites","Full niche customization","White-glove content service","24/7 priority support","Weekly reporting","Dofollow backlinks","7-day turnaround","Link insertion included","Full blogger outreach","Custom anchor text","Dedicated account manager","Custom content strategy","Quarterly strategy calls","API access"],notIncluded:[]}],s=[{question:"What is included in each pricing tier?",answer:"Each tier includes a specific number of guest posts per month, access to websites within certain DA ranges, content review services, and support. Higher tiers offer faster turnaround times, premium website access, and additional services like link insertion and blogger outreach."},{question:"Can I upgrade or downgrade my plan?",answer:"Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to the new tier's benefits. When downgrading, changes will take effect at the start of your next billing cycle."},{question:"What is the difference between monthly and annual billing?",answer:"Annual billing offers approximately 10% savings compared to monthly billing. You pay upfront for the entire year and receive the discounted rate. Monthly billing is charged each month with no long-term commitment."},{question:"Are the backlinks permanent?",answer:"Third-party publishers control their websites, so permanent placement cannot be guaranteed. Current placement terms and any included monitoring or replacement period are confirmed in the applicable quote."},{question:"What niches do you cover?",answer:"We cover a wide range of niches including Technology, Finance, Health, E-commerce, Marketing, Travel, Lifestyle, Business, Education, and many more. Our network includes thousands of websites across virtually every industry."},{question:"How do you measure Domain Authority (DA)?",answer:"We use Moz's Domain Authority metric, which is an industry-standard measurement. All DA scores are verified before placement, and we provide detailed reports showing the exact metrics of each website where your content is published."},{question:"What if I need more posts than my plan allows?",answer:"You can purchase additional guest posts à la carte at any time. Contact your account manager or our sales team for pricing on additional posts. Alternatively, you can upgrade to a higher tier for better value if you consistently need more posts."},{question:"Do you offer refunds?",answer:"Refund and cancellation terms depend on the work completed and publisher fees already committed. The applicable terms are stated in your quote or invoice before payment."}],l=m=>e==="monthly"?m.monthlyPrice:m.annualPrice,u=m=>{const h=m.monthlyPrice*12,p=m.annualPrice;return h-p};return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Guest Post Pricing | Publisher and Outreach Options",description:"Compare guest post and outreach pricing options. Final cost depends on publisher availability, niche, editorial requirements and content scope.",path:"/pricing"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Simple, Transparent Pricing"}),i.jsx(Q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Choose the plan that fits your SEO goals. No hidden fees, cancel anytime."})]})}),i.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[i.jsxs("div",{className:"flex justify-center items-center gap-4 mb-12",children:[i.jsx("span",{className:`text-lg font-medium ${e==="monthly"?"text-slate-900":"text-slate-500"}`,children:"Monthly"}),i.jsx("button",{onClick:()=>n(e==="monthly"?"annual":"monthly"),className:"relative w-16 h-8 bg-slate-300 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.jsx("div",{className:`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${e==="annual"?"transform translate-x-8":""}`})}),i.jsx("span",{className:`text-lg font-medium ${e==="annual"?"text-slate-900":"text-slate-500"}`,children:"Annual"}),e==="annual"&&i.jsx("span",{className:"ml-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full",children:"Save 10%"})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8 mb-16",children:o.map((m,h)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},className:`bg-white rounded-2xl shadow-lg overflow-hidden ${m.popular?"ring-2 ring-blue-600 relative":""}`,children:[m.popular&&i.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:i.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"})}),i.jsxs("div",{className:"p-8",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",children:m.name}),i.jsx("p",{className:"text-slate-600 mb-6",children:m.description}),i.jsxs("div",{className:"mb-6",children:[i.jsxs("div",{className:"flex items-baseline",children:[i.jsxs("span",{className:"text-5xl font-bold text-slate-900",children:["$",l(m)]}),i.jsxs("span",{className:"text-slate-600 ml-2",children:["/",e==="monthly"?"month":"year"]})]}),e==="annual"&&i.jsxs("div",{className:"text-sm text-green-600 mt-2",children:["Save $",u(m)," per year"]})]}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{className:`w-full mb-6 ${m.popular?"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white":"bg-slate-900 hover:bg-slate-800 text-white"}`,children:m.name==="Enterprise"?"Contact Sales":"Choose Plan"})}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("div",{className:"text-sm font-semibold text-slate-900 mb-3",children:"What's included:"}),m.features.map((p,f)=>i.jsxs("div",{className:"flex items-start",children:[i.jsx(It,{className:"w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"}),i.jsx("span",{className:"text-slate-700 text-sm",children:p})]},f)),m.notIncluded.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"text-sm font-semibold text-slate-900 mt-4 mb-3",children:"Not included:"}),m.notIncluded.map((p,f)=>i.jsxs("div",{className:"flex items-start opacity-50",children:[i.jsx(It,{className:"w-5 h-5 text-slate-400 mr-2 flex-shrink-0 mt-0.5"}),i.jsx("span",{className:"text-slate-600 text-sm line-through",children:p})]},f))]})]})]})]},h))}),i.jsx("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden mb-16",children:i.jsxs("div",{className:"p-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8 text-center",children:"Feature Comparison"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("th",{className:"text-left py-4 px-4 text-slate-900 font-semibold",children:"Feature"}),i.jsx("th",{className:"text-center py-4 px-4 text-slate-900 font-semibold",children:"Starter"}),i.jsx("th",{className:"text-center py-4 px-4 text-slate-900 font-semibold",children:"Professional"}),i.jsx("th",{className:"text-center py-4 px-4 text-slate-900 font-semibold",children:"Enterprise"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Guest Posts per Month"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"5"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"15"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"Unlimited"})]}),i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Domain Authority Range"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"40-60"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"60-80"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"80+"})]}),i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Turnaround Time"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"30 days"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"14 days"}),i.jsx("td",{className:"text-center py-4 px-4 text-slate-900",children:"7 days"})]}),i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Link Insertion"}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx("span",{className:"text-slate-400",children:"—"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx(It,{className:"w-5 h-5 text-blue-600 mx-auto"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx(It,{className:"w-5 h-5 text-blue-600 mx-auto"})})]}),i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Blogger Outreach"}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx("span",{className:"text-slate-400",children:"—"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx(It,{className:"w-5 h-5 text-blue-600 mx-auto"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx(It,{className:"w-5 h-5 text-blue-600 mx-auto"})})]}),i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"py-4 px-4 text-slate-700",children:"Dedicated Account Manager"}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx("span",{className:"text-slate-400",children:"—"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx("span",{className:"text-slate-400",children:"—"})}),i.jsx("td",{className:"text-center py-4 px-4",children:i.jsx(It,{className:"w-5 h-5 text-blue-600 mx-auto"})})]})]})]})})]})}),i.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8 text-center",children:"Frequently Asked Questions"}),i.jsx("div",{className:"space-y-6",children:s.map((m,h)=>i.jsx(Q.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:h*.05},className:"border-b border-slate-200 pb-6 last:border-b-0",children:i.jsxs("div",{className:"flex items-start",children:[i.jsx(s6,{className:"w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-2",children:m.question}),i.jsx("p",{className:"text-slate-600",children:m.answer})]})]})},h))})]})]}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Still Have Questions?"}),i.jsx("p",{className:"text-xl text-slate-300 mb-10",children:"Our team is here to help you choose the perfect plan for your needs"}),i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Contact Sales",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})})]})})})]}),i.jsx(ye,{})]})},fw=()=>{const{toast:e}=qu(),[n,o]=v.useState({blogName:"",niche:"",da:"",pa:"",monthlyTraffic:"",pricing:"",contentGuidelines:"",contactEmail:""}),[s,l]=v.useState(!1),u=["Technology","Finance","Health","E-commerce","Marketing","Travel","Lifestyle","Business","Education","Food & Cooking","Fashion","Sports","Entertainment","Real Estate","Other"],m=p=>{const{name:f,value:y}=p.target;o(x=>({...x,[f]:y}))},h=p=>{if(p.preventDefault(),!n.blogName||!n.niche||!n.da||!n.contactEmail){e({title:"Validation Error",description:"Please fill in all required fields.",variant:"destructive"});return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.contactEmail)){e({title:"Invalid Email",description:"Please enter a valid email address.",variant:"destructive"});return}const y=encodeURIComponent(`Publisher application
Website: ${n.blogName}
Niche: ${n.niche}
DA: ${n.da}
PA: ${n.pa||"Not provided"}
Monthly traffic: ${n.monthlyTraffic||"Not provided"}
Price: ${n.pricing||"Not provided"}
Guidelines: ${n.contentGuidelines||"Not provided"}
Contact email: ${n.contactEmail}`);window.open(`https://wa.me/923025820230?text=${y}`,"_blank","noopener,noreferrer"),l(!0),e({title:"Submission Successful!",description:"WhatsApp has opened with your application. Please send the prepared message to complete submission."}),o({blogName:"",niche:"",da:"",pa:"",monthlyTraffic:"",pricing:"",contentGuidelines:"",contactEmail:""}),setTimeout(()=>l(!1),5e3)};return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Submit Your Website | Publisher Partnership Application",description:"Apply to list your website as a publisher opportunity. Share your niche, audience, traffic and editorial requirements for manual review.",path:"/submit-guest-post"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Submit Your Guest Post Opportunity"}),i.jsx(Q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Join our network of high-quality publishers and monetize your blog with guest posting opportunities"})]})}),i.jsx("section",{className:"bg-white border-b border-slate-200 py-12",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"Apply as a real editorial publisher"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-4",children:"Guest Post Platform is a marketplace for matching advertisers and agencies with independent publishers. An application is a request for review, not an automatic listing. Please provide accurate website, niche, traffic, pricing and contact information so we can understand the audience and publishing terms before presenting any opportunity to a buyer."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-4",children:"Quality review considers original content, topical focus, recent publishing activity, visible ownership, search visibility and the pattern of existing outbound links. We may ask for analytics evidence or editorial guidelines. Publishers always retain the right to edit or reject an article, request disclosure and decide which link attributes are appropriate."}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:"Submitting the form opens WhatsApp with your details; press send there to complete the application. Do not include passwords or private analytics access. Acceptance, order volume and earnings are not guaranteed, and inaccurate metrics can lead to removal from the marketplace."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mt-4",children:"Before applying, make sure your public contact information and recent articles are accessible without a login. State whether you accept new articles, contextual edits or both, and disclose restricted topics, turnaround time and revision rules. Clear terms reduce unsuitable enquiries and help both parties approve work without avoidable delays."})]})}),i.jsxs("section",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[i.jsx(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-2xl shadow-lg p-8",children:s?i.jsxs("div",{className:"text-center py-12",children:[i.jsx(It,{className:"w-16 h-16 text-green-600 mx-auto mb-4"}),i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Submission Received!"}),i.jsx("p",{className:"text-lg text-slate-600 mb-8",children:"Thank you for submitting your guest posting opportunity. Our team will review your submission and contact you within 2-3 business days."}),i.jsx(gt,{onClick:()=>l(!1),className:"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white",children:"Submit Another"})]}):i.jsxs("form",{onSubmit:h,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-2",children:"Blog Information"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Tell us about your blog and guest posting opportunity"})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"blogName",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Blog Name ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("input",{type:"text",id:"blogName",name:"blogName",value:n.blogName,onChange:m,required:!0,placeholder:"Enter your blog name",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"niche",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Niche Category ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsxs("select",{id:"niche",name:"niche",value:n.niche,onChange:m,required:!0,className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900",children:[i.jsx("option",{value:"",children:"Select a niche"}),u.map(p=>i.jsx("option",{value:p,children:p},p))]})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"da",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Domain Authority (DA) ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("input",{type:"number",id:"da",name:"da",value:n.da,onChange:m,required:!0,min:"1",max:"100",placeholder:"e.g., 65",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"pa",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Page Authority (PA)"}),i.jsx("input",{type:"number",id:"pa",name:"pa",value:n.pa,onChange:m,min:"1",max:"100",placeholder:"e.g., 58",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"monthlyTraffic",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Monthly Traffic"}),i.jsx("input",{type:"text",id:"monthlyTraffic",name:"monthlyTraffic",value:n.monthlyTraffic,onChange:m,placeholder:"e.g., 50,000 or 50K",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"pricing",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Pricing per Guest Post"}),i.jsx("input",{type:"text",id:"pricing",name:"pricing",value:n.pricing,onChange:m,placeholder:"e.g., $500 or negotiable",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"contentGuidelines",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Content Guidelines"}),i.jsx("textarea",{id:"contentGuidelines",name:"contentGuidelines",value:n.contentGuidelines,onChange:m,rows:"6",placeholder:"Describe your content requirements, word count, formatting preferences, etc.",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-900"})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"contactEmail",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Contact Email ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("input",{type:"email",id:"contactEmail",name:"contactEmail",value:n.contactEmail,onChange:m,required:!0,placeholder:"your@email.com",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsx("div",{className:"pt-4",children:i.jsxs(gt,{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-6",children:[i.jsx(mu,{className:"w-5 h-5 mr-2"}),"Submit Guest Post Opportunity"]})}),i.jsx("p",{className:"text-sm text-slate-600 text-center",children:"By submitting this form, you agree to our terms and conditions. We'll review your submission and contact you within 2-3 business days."})]})}),i.jsxs("div",{className:"mt-12 grid md:grid-cols-2 gap-6",children:[i.jsxs("article",{className:"bg-white border border-slate-200 rounded-2xl p-7",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Publisher eligibility"}),i.jsx("p",{className:"text-slate-600 leading-relaxed mb-4",children:"We look for an active website with a clear editorial topic, original indexed articles, a real audience and transparent ownership or contact details. Authority metrics are reference points, not automatic approval."}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:"Sites built mainly to sell links, copied content, misleading traffic claims, malware, adult or illegal material, and unrelated mass publishing may be rejected."})]}),i.jsxs("article",{className:"bg-white border border-slate-200 rounded-2xl p-7",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-4",children:"What happens after you apply"}),i.jsx("p",{className:"text-slate-600 leading-relaxed mb-4",children:"The prepared application opens in WhatsApp; you must press send to complete it. We then review niche fit, visible content quality, estimated traffic patterns, publishing terms and link attributes."}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:"Listing is not guaranteed. Publishers retain final editorial control, and paid or sponsored links should use the disclosure attributes required by the publisher and applicable search-engine guidelines."})]})]}),i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-6 text-center",children:"Why Join Our Network?"}),i.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(It,{className:"w-6 h-6 text-white"})}),i.jsx("h4",{className:"font-semibold text-slate-900 mb-2",children:"Monetize Your Blog"}),i.jsx("p",{className:"text-slate-600 text-sm",children:"Earn revenue from quality guest posts on your website"})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(It,{className:"w-6 h-6 text-white"})}),i.jsx("h4",{className:"font-semibold text-slate-900 mb-2",children:"Quality Content"}),i.jsx("p",{className:"text-slate-600 text-sm",children:"Receive well-written, relevant content for your audience"})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(It,{className:"w-6 h-6 text-white"})}),i.jsx("h4",{className:"font-semibold text-slate-900 mb-2",children:"Full Control"}),i.jsx("p",{className:"text-slate-600 text-sm",children:"You decide what gets published on your blog"})]})]})]})]})]}),i.jsx(ye,{})]})},gw=()=>{const e=[{name:"Publisher Research",role:"Opportunity qualification",icon:ls,bio:"Reviews topic fit, available traffic signals, recent publishing activity and outbound-link patterns."},{name:"Outreach Coordination",role:"Publisher communication",icon:ro,bio:"Confirms current availability, requirements, pricing and editorial expectations before work begins."},{name:"Content Review",role:"Editorial preparation",icon:It,bio:"Checks that drafts answer a real reader need and meet the selected publication’s requirements."},{name:"Placement Reporting",role:"Delivery verification",icon:ss,bio:"Records the live URL, destination, anchor and available link attributes without promising rankings."}],n=[{icon:ss,title:"Quality First",description:"We never compromise on quality. Every guest post opportunity is thoroughly vetted for authenticity and authority."},{icon:d6,title:"Client Success",description:"Your success is our success. We're committed to delivering measurable results that drive your business forward."},{icon:du,title:"Innovation",description:"We stay ahead of SEO trends and continuously improve our processes to deliver cutting-edge solutions."},{icon:ro,title:"Transparency",description:"Clear communication, honest reporting, and no hidden fees. You always know exactly what you're getting."}],o=[{icon:bs,label:"Publisher listings",value:gr.length.toLocaleString()},{icon:ro,label:"Searchable categories",value:`${d2.length-1}+`},{icon:ji,label:"Publisher approval",value:"Required"},{icon:It,label:"Ranking guarantees",value:"None"}],s=[{title:"Proven Track Record",description:"Publisher, content and delivery decisions are documented so each campaign can be reviewed clearly."},{title:"Extensive Network",description:"Search thousands of publisher listings across broad categories, then reconfirm current availability and terms."},{title:"Expert Team",description:"Research, outreach, content preparation and placement verification are treated as separate quality checkpoints."},{title:"Data-Driven Approach",description:"We use advanced analytics and metrics to identify the best opportunities and measure real results."},{title:"Clear Disclosures",description:"Link attributes and commercial terms are confirmed with the publisher instead of being presented as ranking guarantees."},{title:"Dedicated Support",description:"Responsive customer support and dedicated account managers to guide you every step of the way."}];return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"About Guest Post Platform | Publisher Outreach Process",description:"Learn how Guest Post Platform researches publishers, coordinates original content and reports guest post and link-building placements transparently.",path:"/about"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center",children:[i.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",children:"About Guest Post Platform"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-3xl mx-auto",children:"Your trusted partner for premium guest posting and link building services since 2019"})]})})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[i.jsxs(Q.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-6",children:"Our Story"}),i.jsx("p",{className:"text-lg text-slate-700 mb-6",children:"Guest Post Platform is built around a simple mission: make publisher research, content coordination and placement reporting easier to review before budget is committed."}),i.jsx("p",{className:"text-lg text-slate-700 mb-6",children:"We recognized that many businesses struggled to build quality backlinks due to the time-consuming nature of outreach and the difficulty of finding authoritative websites. Our platform solves this problem by providing a curated marketplace of verified, high-DA guest posting opportunities."}),i.jsx("p",{className:"text-lg text-slate-700",children:"The marketplace brings publisher information into one searchable workflow while keeping availability, editorial approval and search outcomes separate from unsupported guarantees."})]}),i.jsx(Q.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"relative",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa",alt:"Professional team collaborating on digital marketing strategy",className:"rounded-2xl shadow-2xl"})})]})})}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-blue-50 to-cyan-50",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[i.jsx(ls,{className:"w-16 h-16 text-blue-600 mx-auto mb-6"}),i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-6",children:"Our Mission"}),i.jsx("p",{className:"text-xl text-slate-700 leading-relaxed",children:"To empower businesses with the tools and opportunities they need to succeed in the digital landscape through ethical, effective, and transparent link building strategies that deliver measurable results."})]})})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Our Core Values"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"The principles that guide everything we do"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-slate-50 rounded-xl p-6 text-center border border-slate-200",children:[i.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(l.icon,{className:"w-8 h-8 text-white"})}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]},u))})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"How the Work Is Reviewed"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Four checkpoints from publisher research to delivery reporting"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-white rounded-xl overflow-hidden shadow-lg",children:[i.jsx("div",{className:"h-40 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center",children:i.jsx(l.icon,{className:"w-14 h-14 text-white","aria-hidden":"true"})}),i.jsxs("div",{className:"p-6",children:[i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-1",children:l.name}),i.jsx("div",{className:"text-blue-600 font-semibold mb-3",children:l.role}),i.jsx("p",{className:"text-slate-600 text-sm",children:l.bio})]})]},u))})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Our Achievements"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Numbers that reflect our commitment to excellence"})]}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:o.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"text-center",children:[i.jsx(l.icon,{className:"w-12 h-12 text-blue-400 mx-auto mb-4"}),i.jsx("div",{className:"text-4xl font-bold text-white mb-2",children:l.value}),i.jsx("div",{className:"text-slate-300",children:l.label})]},u))})]})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Why Choose Guest Post Platform"}),i.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"What sets us apart from the competition"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map((l,u)=>i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-slate-50 rounded-xl p-6 border border-slate-200",children:[i.jsx(It,{className:"w-8 h-8 text-blue-600 mb-4"}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:l.title}),i.jsx("p",{className:"text-slate-600",children:l.description})]},u))})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:i.jsxs(Q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[i.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Ready to Work With Us?"}),i.jsx("p",{className:"text-xl text-slate-300 mb-10",children:"Join thousands of satisfied clients and start building quality backlinks today"}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(_,{to:"/buy-guest-posts",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6",children:["Browse Guest Posts",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6",children:"Contact Us"})})]})]})})})]}),i.jsx(ye,{})]})},yw=()=>{const{toast:e}=qu(),[n,o]=v.useState({name:"",email:"",phone:"",company:"",serviceInterest:"",message:""}),[s,l]=v.useState(!1),u=["Buy Guest Posts","Blogger Outreach","Link Insertion","Custom Package","General Inquiry"],m=p=>{const{name:f,value:y}=p.target;o(x=>({...x,[f]:y}))},h=p=>{if(p.preventDefault(),!n.name||!n.email||!n.message){e({title:"Validation Error",description:"Please fill in all required fields.",variant:"destructive"});return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)){e({title:"Invalid Email",description:"Please enter a valid email address.",variant:"destructive"});return}const y=["Hello Guest Post Platform, I would like to discuss a project.","",`Name: ${n.name}`,`Email: ${n.email}`,`Phone: ${n.phone||"Not provided"}`,`Company: ${n.company||"Not provided"}`,`Service: ${n.serviceInterest||"General Inquiry"}`,"","Message:",n.message].join(`
`),x=`https://wa.me/923025820230?text=${encodeURIComponent(y)}`;window.open(x,"_blank","noopener,noreferrer"),l(!0),e({title:"WhatsApp Opened",description:"Please press Send in WhatsApp to share your enquiry with us."}),o({name:"",email:"",phone:"",company:"",serviceInterest:"",message:""}),setTimeout(()=>l(!1),5e3)};return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Contact Guest Post Platform | Request a Publisher Shortlist",description:"Contact Guest Post Platform with your target pages, niche and market to request a relevant publisher shortlist or discuss an outreach campaign.",path:"/contact"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Get in Touch"}),i.jsx(Q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Have questions? We're here to help you succeed with your link building strategy"})]})}),i.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:i.jsxs("div",{className:"grid lg:grid-cols-3 gap-12",children:[i.jsxs(Q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"lg:col-span-1",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-6",children:"Contact Information"}),i.jsx("p",{className:"text-slate-600 mb-8",children:"Contact founder Kamran directly for publisher shortlists, marketplace support and managed outreach campaigns."}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex items-start",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",children:i.jsx(Eh,{className:"w-6 h-6 text-blue-600"})}),i.jsxs("div",{className:"ml-4",children:[i.jsx("div",{className:"font-semibold text-slate-900 mb-1",children:"LinkedIn"}),i.jsx("a",{href:"https://www.linkedin.com/in/kamranofficialseo/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"Founder Kamran"})]})]}),i.jsxs("div",{className:"flex items-start",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",children:i.jsx(nd,{className:"w-6 h-6 text-blue-600"})}),i.jsxs("div",{className:"ml-4",children:[i.jsx("div",{className:"font-semibold text-slate-900 mb-1",children:"Phone"}),i.jsx("a",{href:"tel:+923025820230",className:"text-blue-600 hover:underline",children:"+92 302 5820230"})]})]}),i.jsxs("div",{className:"flex items-start",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",children:i.jsx(f6,{className:"w-6 h-6 text-blue-600"})}),i.jsxs("div",{className:"ml-4",children:[i.jsx("div",{className:"font-semibold text-slate-900 mb-1",children:"Service Area"}),i.jsxs("div",{className:"text-slate-600",children:["Worldwide campaigns",i.jsx("br",{}),"Remote, founder-led support"]})]})]})]}),i.jsxs("div",{className:"mt-8",children:[i.jsx("div",{className:"font-semibold text-slate-900 mb-4",children:"Follow Us"}),i.jsx("div",{className:"flex gap-4",children:i.jsx("a",{href:"https://www.linkedin.com/in/kamranofficialseo/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors",children:i.jsx(h6,{className:"w-5 h-5 text-white"})})})]})]}),i.jsx(Q.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"lg:col-span-2",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:s?i.jsxs("div",{className:"text-center py-12",children:[i.jsx(It,{className:"w-16 h-16 text-green-600 mx-auto mb-4"}),i.jsx("h3",{className:"text-3xl font-bold text-slate-900 mb-4",children:"WhatsApp Is Ready"}),i.jsx("p",{className:"text-lg text-slate-600 mb-8",children:"Your enquiry has been prepared. Please press Send in WhatsApp to deliver it to our team."}),i.jsx(gt,{onClick:()=>l(!1),className:"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white",children:"Send Another Message"})]}):i.jsxs("form",{onSubmit:h,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-2",children:"Send Us a Message"}),i.jsx("p",{className:"text-slate-600",children:"Fill out the form below and we'll get back to you as soon as possible"})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"name",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Name ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:m,required:!0,placeholder:"Your full name",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Email ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:m,required:!0,placeholder:"your@email.com",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"phone",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Phone"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:m,placeholder:"+1 (555) 123-4567",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"company",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Company"}),i.jsx("input",{type:"text",id:"company",name:"company",value:n.company,onChange:m,placeholder:"Your company name",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"serviceInterest",className:"block text-sm font-semibold text-slate-900 mb-2",children:"Service Interest"}),i.jsxs("select",{id:"serviceInterest",name:"serviceInterest",value:n.serviceInterest,onChange:m,className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900",children:[i.jsx("option",{value:"",children:"Select a service"}),u.map(p=>i.jsx("option",{value:p,children:p},p))]})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"message",className:"block text-sm font-semibold text-slate-900 mb-2",children:["Message ",i.jsx("span",{className:"text-red-600",children:"*"})]}),i.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:m,required:!0,rows:"6",placeholder:"Tell us about your project or inquiry...",className:"w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-900"})]}),i.jsx("div",{children:i.jsxs(gt,{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-6",children:[i.jsx(mu,{className:"w-5 h-5 mr-2"}),"Send via WhatsApp"]})}),i.jsx("p",{className:"text-sm text-slate-600 text-center",children:"We typically respond within 24 hours during business days"})]})})})]})}),i.jsx("section",{className:"py-16 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 text-center",children:[i.jsx("h3",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Ready to Boost Your SEO?"}),i.jsx("p",{className:"text-lg text-slate-600 mb-8 max-w-2xl mx-auto",children:"Whether you have questions about our services or want to discuss a custom package, our team is here to help you achieve your link building goals."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx("a",{href:"https://wa.me/923025820230",target:"_blank",rel:"noopener noreferrer",children:i.jsxs(gt,{size:"lg",className:"bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white",children:[i.jsx(mu,{className:"w-5 h-5 mr-2"}),"WhatsApp Us"]})}),i.jsx("a",{href:"tel:+923025820230",children:i.jsxs(gt,{size:"lg",variant:"outline",className:"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",children:[i.jsx(nd,{className:"w-5 h-5 mr-2"}),"Call Us"]})})]})]})})})]}),i.jsx(ye,{})]})},xw={title:"How to Buy Guest Posts Safely in 2026",slug:"how-to-buy-guest-posts-safely",date:"2026-02-26",updatedAt:"2026-08-30",description:"Learn how to buy guest posts safely in 2026, avoid spam, choose real sites, and get better rankings with white hat outreach.",metaTitle:"Buy Guest Posts Safely in 2026",metaDescription:"Learn how to buy guest posts safely in 2026, avoid spam, choose real sites, and get better rankings with white hat outreach.",content:i.jsxs("div",{className:"space-y-6 text-slate-700 leading-relaxed",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Introduction"}),i.jsxs("p",{children:["In 2026, the landscape of SEO and link building has evolved significantly. Search engines are smarter, algorithms are more sophisticated, and the penalties for manipulative link building are more severe than ever. If you are looking to ",i.jsx(_,{to:"/buy-guest-posts",className:"text-blue-600 hover:underline",children:"buy guest posts"}),", you must prioritize safety, quality, and relevance over sheer volume. This comprehensive guide will walk you through the exact steps to acquire high-quality backlinks without risking your website's reputation."]}),i.jsx("p",{children:"Gone are the days when you could simply purchase hundreds of low-quality links from private blog networks (PBNs) and expect to rank on the first page. Today, successful SEO requires a strategic approach to guest posting, focusing on genuine outreach, high-quality content, and authoritative placements."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Understanding Guest Post Quality"}),i.jsx("p",{children:"Not all guest posts are created equal. A high-quality guest post is published on a real website with genuine traffic, an engaged audience, and strict editorial standards. When evaluating a potential guest post opportunity, look beyond just the Domain Authority (DA). Consider the site's topical relevance to your niche, the quality of its existing content, and its organic traffic trends."}),i.jsxs("p",{children:["A single link from a highly relevant, authoritative site can carry more weight than dozens of links from unrelated, low-quality blogs. This is why professional ",i.jsx(_,{to:"/blogger-outreach",className:"text-blue-600 hover:underline",children:"blogger outreach"})," is crucial for securing placements that actually move the needle."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Red Flags to Avoid"}),i.jsx("p",{children:"When navigating the guest posting market, be on the lookout for these common red flags:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:'"Write for Us" Pages with No Standards:'})," Sites that accept any content regardless of quality are often flagged by search engines."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Unnatural Outbound Links:"})," If a site links out to gambling, adult, or pharmaceutical sites indiscriminately, stay away."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Sudden Traffic Drops:"})," Use tools like Ahrefs or Semrush to check the site's traffic history. A sudden, massive drop usually indicates a penalty."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"PBN Characteristics:"})," Sites with hidden WHOIS data, identical IP addresses to other blogs, and generic themes are likely part of a Private Blog Network."]})]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Vetting Guest Post Sites"}),i.jsx("p",{children:"Proper vetting is the cornerstone of safe link building. Start by analyzing the site's backlink profile. Are they earning links naturally, or are they participating in link schemes? Next, review their content. Is it written by real experts, or does it read like AI-generated spam? Finally, check their social media presence and audience engagement. Real sites have real followers who comment and share their content."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"White Hat Practices"}),i.jsx("p",{children:"To ensure long-term success, stick to white hat practices. This means creating exceptional content that provides real value to the host site's audience. Your links should be contextually relevant and placed naturally within the content. Avoid exact-match anchor text over-optimization, as this is a clear signal of manipulation to search engines. Instead, use branded, naked, or long-tail anchors."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Measuring ROI"}),i.jsxs("p",{children:["Tracking the return on investment (ROI) of your guest posting efforts is essential. Monitor your organic traffic, keyword rankings, and referral traffic from the guest posts. Keep in mind that SEO is a long-term game, and it may take several weeks or months to see the full impact of your links. For a detailed breakdown of costs, check out our ",i.jsx(_,{to:"/pricing",className:"text-blue-600 hover:underline",children:"pricing guide"}),"."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"FAQ"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Is buying guest posts safe?"}),i.jsx("p",{children:"Yes, if done correctly. Focus on real sites with genuine traffic and avoid PBNs or spammy link farms."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"How much should a good guest post cost?"}),i.jsx("p",{children:"Prices vary widely based on the site's authority and traffic, typically ranging from $100 to $1000+ per post."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"How long does it take to see results?"}),i.jsx("p",{children:"SEO results usually take 3 to 6 months to fully materialize after the links are indexed."})]})]}),i.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center border border-blue-100",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Ready to Build Safe, High-Quality Links?"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Let our experts handle your outreach and secure premium placements that drive real results."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[i.jsx(_,{to:"/contact",className:"inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Get a Quote"}),i.jsxs("span",{className:"text-slate-500",children:["or message us on WhatsApp: ",i.jsx("strong",{className:"text-slate-900",children:"+1 (555) 123-4567"})]})]})]})]})},Kw={title:"Guest Post vs Link Insertion: Which One Works Better",slug:"guest-post-vs-link-insertion",date:"2026-02-26",updatedAt:"2026-08-30",description:"Compare guest posts vs link insertions, pros and cons, costs, and when to use each for SEO growth.",metaTitle:"Guest Post vs Link Insertion",metaDescription:"Compare guest posts vs link insertions, pros and cons, costs, and when to use each for SEO growth.",content:i.jsxs("div",{className:"space-y-6 text-slate-700 leading-relaxed",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Introduction"}),i.jsx("p",{children:"When building a robust SEO strategy, acquiring high-quality backlinks is non-negotiable. Two of the most popular and effective methods for securing these links are guest posting and link insertions (also known as niche edits). But which strategy is right for your business? In this comprehensive guide, we'll break down the differences, pros, cons, and ideal use cases for both approaches."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"What Are Guest Posts?"}),i.jsxs("p",{children:["A ",i.jsx(_,{to:"/buy-guest-posts",className:"text-blue-600 hover:underline",children:"guest post"})," involves writing a brand-new, original article and publishing it on a third-party website within your industry. The article typically includes one or two contextual backlinks pointing back to your site. This method requires content creation, pitching, and editorial approval."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"What Are Link Insertions?"}),i.jsxs("p",{children:[i.jsx(_,{to:"/link-insertion",className:"text-blue-600 hover:underline",children:"Link insertion"})," is the process of adding your backlink to an existing, already-published article on another website. Instead of writing new content, you find a relevant post that is already indexed and ranking, and you negotiate with the webmaster to insert a link to your site within the existing text."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Pros and Cons Comparison"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 my-6",children:[i.jsxs("div",{className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[i.jsx("h3",{className:"font-bold text-lg mb-3 text-slate-900",children:"Guest Posts"}),i.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[i.jsx("li",{className:"text-green-700",children:"Pro: Complete control over content and context."}),i.jsx("li",{className:"text-green-700",children:"Pro: Great for brand awareness and thought leadership."}),i.jsx("li",{className:"text-red-700",children:"Con: Time-consuming content creation."}),i.jsx("li",{className:"text-red-700",children:"Con: Takes time for the new page to gain authority."})]})]}),i.jsxs("div",{className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[i.jsx("h3",{className:"font-bold text-lg mb-3 text-slate-900",children:"Link Insertions"}),i.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[i.jsx("li",{className:"text-green-700",children:"Pro: Immediate SEO impact from aged, authoritative pages."}),i.jsx("li",{className:"text-green-700",children:"Pro: No content creation required."}),i.jsx("li",{className:"text-red-700",children:"Con: Less control over the surrounding content."}),i.jsx("li",{className:"text-red-700",children:"Con: Webmasters may charge premium fees for high-ranking pages."})]})]})]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Cost Analysis"}),i.jsxs("p",{children:["Generally, link insertions can be slightly more cost-effective since you save on content creation costs. However, placing a link on a page that already receives thousands of monthly visitors will command a premium price. Guest posts require an investment in high-quality writing, but they offer the added benefit of brand exposure. Review our ",i.jsx(_,{to:"/pricing",className:"text-blue-600 hover:underline",children:"pricing packages"})," to see how these options fit your budget."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"When to Use Each"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Use Guest Posts when:"})," You want to establish thought leadership, control the exact narrative around your brand, and build relationships with industry publishers."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Use Link Insertions when:"})," You need faster SEO results, want to leverage existing page authority, and prefer to skip the content creation process."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Case Studies"}),i.jsx("p",{children:"In a recent campaign for a SaaS client, a mix of 70% link insertions and 30% guest posts resulted in a 150% increase in organic traffic over 4 months. The link insertions provided quick ranking boosts for target keywords, while the guest posts drove steady referral traffic and brand searches."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"FAQ"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Are link insertions safe?"}),i.jsx("p",{children:"Yes, as long as they are placed contextually on relevant, high-quality sites and not on hacked or spammy domains."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Which method is faster?"}),i.jsx("p",{children:"Link insertions typically show faster SEO results because the page is already indexed and holds authority."})]})]}),i.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center border border-blue-100",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Need Help Choosing the Right Strategy?"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Our team can analyze your site and recommend the perfect mix of guest posts and link insertions."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[i.jsx(_,{to:"/contact",className:"inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Get a Quote"}),i.jsxs("span",{className:"text-slate-500",children:["or message us on WhatsApp: ",i.jsx("strong",{className:"text-slate-900",children:"+1 (555) 123-4567"})]})]})]})]})},ww={title:"Blogger Outreach That Actually Works: A Step by Step Playbook",slug:"blogger-outreach-playbook",date:"2026-02-26",updatedAt:"2026-08-30",description:"A practical blogger outreach playbook to earn real links, improve reply rates, and build authority without spam.",metaTitle:"Blogger Outreach Playbook",metaDescription:"A practical blogger outreach playbook to earn real links, improve reply rates, and build authority without spam.",content:i.jsxs("div",{className:"space-y-6 text-slate-700 leading-relaxed",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Introduction"}),i.jsxs("p",{children:["If you've ever sent hundreds of cold emails asking for a backlink only to hear crickets, you're not alone. Modern ",i.jsx(_,{to:"/blogger-outreach",className:"text-blue-600 hover:underline",children:"blogger outreach"})," requires finesse, personalization, and a genuine value proposition. This playbook outlines the exact steps we use to secure high-authority placements for our clients."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Finding the Right Bloggers"}),i.jsx("p",{children:`The success of your campaign depends entirely on your prospect list. Don't just scrape Google for "keyword + write for us". Instead, look for active blogs in your industry that publish high-quality content. Use tools like Ahrefs Content Explorer or BuzzSumo to find authors who have recently written about topics related to your niche.`}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Building Your Outreach List"}),i.jsx("p",{children:"Once you identify target blogs, find the right contact person. Aim for the Content Manager, SEO Lead, or the Editor-in-Chief. Use tools like Hunter.io or Snov.io to find verified email addresses. Organize your list in a CRM or spreadsheet, noting specific details about their recent articles to use for personalization."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Personalization Strategies"}),i.jsx("p",{children:'"Dear Webmaster" is a guaranteed way to get your email deleted. Personalization goes beyond using their first name. Mention a specific point from a recent article they wrote, explain why you enjoyed it, and seamlessly transition into your pitch. Show them that you actually read their blog.'}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Email Templates"}),i.jsx("p",{children:"While templates are useful for scaling, they must be highly customizable. A good structure includes:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"The Hook:"})," A personalized opening referencing their work."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"The Value:"})," What you are offering (e.g., a highly researched guest post, a data-driven infographic)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"The Proof:"})," Links to your previous high-quality work."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"The Ask:"}),' A low-friction call to action (e.g., "Are you open to seeing a few topic ideas?").']})]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Follow-up Tactics"}),i.jsx("p",{children:'Most deals are closed in the follow-up. Send a polite nudge 3-4 days after your initial email. Keep it brief: "Just floating this to the top of your inbox in case you missed it." Never send more than 2 or 3 follow-ups to avoid being marked as spam.'}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Building Long-term Relationships"}),i.jsxs("p",{children:["Treat bloggers as partners, not just link targets. If you run a blog yourself, you can ",i.jsx(_,{to:"/submit-guest-post",className:"text-blue-600 hover:underline",children:"accept guest posts"})," to build reciprocal relationships. Share their content on social media, engage with their posts, and keep the lines of communication open for future collaborations."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"FAQ"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"What is a good reply rate for outreach?"}),i.jsx("p",{children:"A highly personalized campaign should see a 10-15% reply rate, with a 2-5% placement rate."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Should I pay for placements?"}),i.jsxs("p",{children:["Many high-quality blogs charge editorial or administrative fees. This is standard practice, but ensure the site's metrics justify the cost. Check our ",i.jsx(_,{to:"/pricing",className:"text-blue-600 hover:underline",children:"pricing"})," for industry benchmarks."]})]})]}),i.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center border border-blue-100",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Tired of Sending Emails into the Void?"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Leverage our established relationships with thousands of premium publishers."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[i.jsx(_,{to:"/contact",className:"inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Get a Quote"}),i.jsxs("span",{className:"text-slate-500",children:["or message us on WhatsApp: ",i.jsx("strong",{className:"text-slate-900",children:"+1 (555) 123-4567"})]})]})]})]})},vw={title:"Guest Post Pricing Guide for SEO Agencies",slug:"guest-post-pricing-guide-seo-agencies",date:"2026-02-26",updatedAt:"2026-08-30",description:"A clear guest post pricing guide for SEO agencies, what impacts cost, what to avoid, and how to choose packages.",metaTitle:"Guest Post Pricing Guide",metaDescription:"A clear guest post pricing guide for SEO agencies, what impacts cost, what to avoid, and how to choose packages.",content:i.jsxs("div",{className:"space-y-6 text-slate-700 leading-relaxed",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Introduction"}),i.jsxs("p",{children:["For SEO agencies, managing link building budgets while delivering top-tier results for clients is a constant balancing act. Understanding the true cost of guest posting is essential for pricing your own services and ensuring profitability. This guide breaks down the economics of ",i.jsx(_,{to:"/buy-guest-posts",className:"text-blue-600 hover:underline",children:"buying guest posts"})," and what factors drive the costs."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Factors Affecting Guest Post Costs"}),i.jsx("p",{children:"The price of a guest post is rarely arbitrary. It is typically determined by a combination of the publisher's administrative fees, the cost of content creation, and the intrinsic SEO value of the domain. High-demand niches like finance and technology often command higher prices than general lifestyle blogs."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Domain Authority Impact"}),i.jsx("p",{children:"Domain Authority (DA) or Domain Rating (DR) is the most common metric used to price placements. Generally:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"DA 20-40:"})," $50 - $150"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"DA 40-60:"})," $150 - $350"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"DA 60-80:"})," $350 - $800+"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"DA 80+:"})," $1,000+ (often requires PR-level outreach)"]})]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Niche and Traffic Considerations"}),i.jsx("p",{children:'A DA 50 site with 100,000 monthly organic visitors is vastly more valuable than a DA 50 site with 500 visitors. Publishers with high, verified organic traffic charge a premium because a link from their site passes more "link juice" and can drive actual referral traffic.'}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Content Quality Pricing"}),i.jsx("p",{children:"If you are outsourcing the writing, expect to pay $50 to $200+ for the article itself, depending on the required expertise. Premium publishers will reject cheap, spun content, so investing in quality writing is mandatory."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Pricing Models Explained"}),i.jsxs("p",{children:["Agencies typically use one of two models: Pay-per-placement (a flat fee per live link) or Retainer (a monthly budget for a set number of links). You can view our transparent ",i.jsx(_,{to:"/pricing",className:"text-blue-600 hover:underline",children:"pricing models"})," to see how we structure our agency partnerships."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"What to Avoid"}),i.jsx("p",{children:`Avoid providers offering "100 DA50+ links for $50." These are guaranteed to be spam networks, hacked sites, or automated web 2.0 properties that will ultimately harm your client's rankings.`}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"ROI Calculation & Budget Planning"}),i.jsxs("p",{children:["When planning budgets, factor in the lifetime value of a link. A $500 link that secures a top 3 ranking for a high-converting keyword pays for itself rapidly. Consider mixing guest posts with ",i.jsx(_,{to:"/link-insertion",className:"text-blue-600 hover:underline",children:"link insertions"})," to optimize your budget."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"FAQ"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Do you offer white-label reports for agencies?"}),i.jsx("p",{children:"Yes, we provide fully white-labeled reporting so you can present the placements directly to your clients."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Are bulk discounts available?"}),i.jsx("p",{children:"Absolutely. Agencies ordering 10+ posts per month qualify for our Enterprise tier pricing."})]})]}),i.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center border border-blue-100",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Scale Your Agency's Link Building"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Partner with us for reliable, high-quality link building at wholesale agency rates."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[i.jsx(_,{to:"/contact",className:"inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Get a Quote"}),i.jsxs("span",{className:"text-slate-500",children:["or message us on WhatsApp: ",i.jsx("strong",{className:"text-slate-900",children:"+1 (555) 123-4567"})]})]})]})]})},bw={title:"Guest Post Platform: What Matters More Than DA",slug:"high-da-guest-posts-what-matters-more-than-da",date:"2026-02-26",updatedAt:"2026-08-30",description:"DA is not everything. Learn what matters more than DA when buying guest posts and backlinks.",metaTitle:"Guest Post Platform Explained",metaDescription:"DA is not everything. Learn what matters more than DA when buying guest posts and backlinks.",content:i.jsxs("div",{className:"space-y-6 text-slate-700 leading-relaxed",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Introduction"}),i.jsxs("p",{children:["For years, Domain Authority (DA) has been the holy grail metric for SEOs looking to ",i.jsx(_,{to:"/buy-guest-posts",className:"text-blue-600 hover:underline",children:"buy guest posts"}),". While DA is a useful comparative tool, relying on it exclusively is a dangerous game in 2026. DA can be easily manipulated, and search engines like Google use far more complex signals to evaluate the true value of a backlink."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Understanding Domain Authority"}),i.jsx("p",{children:"DA is a metric created by Moz that predicts how well a website will rank on search engine result pages (SERPs). It is calculated by evaluating linking root domains, total number of links, and other factors. However, it is a third-party metric—Google does not use DA in its algorithm."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Why DA Alone Isn't Enough"}),i.jsx("p",{children:"Because DA is based heavily on backlink quantity, it can be artificially inflated using spammy link-building tactics. A site might boast a DA of 60 but have zero organic traffic and a penalized backlink profile. Buying a link on such a site is a waste of money and a risk to your own site's health."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Relevance and Topical Authority"}),i.jsx("p",{children:"Relevance is the new DA. A link from a DA 30 blog that is strictly focused on your specific niche is far more valuable than a link from a DA 70 general news site that covers everything from crypto to cooking. Search engines look for topical clusters and semantic relevance between the linking page and your target page."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Traffic Quality and Audience"}),i.jsxs("p",{children:["A website's organic traffic is the ultimate proof of its health. If Google is sending thousands of visitors to a site every month, it means Google trusts that site. When conducting ",i.jsx(_,{to:"/blogger-outreach",className:"text-blue-600 hover:underline",children:"blogger outreach"}),", always prioritize sites with steady, upward-trending organic traffic in your target geographic regions."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Engagement Metrics"}),i.jsx("p",{children:"Look at the site's engagement. Are people commenting on the posts? Are the articles being shared on social media? A vibrant, engaged community indicates a real website run by real people, which is exactly where you want your brand to be featured."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Red Flags Beyond DA"}),i.jsx("p",{children:"Watch out for sites with high DA but massive outbound link ratios (sites that link out to hundreds of different domains in every post). Also, beware of sites that have recently changed ownership and completely shifted their content focus—this is a common tactic used by expired domain buyers."}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"Evaluating Real Value"}),i.jsxs("p",{children:["When evaluating a placement, look at the whole picture: Traffic, Relevance, Trust Flow, and DA. Our ",i.jsx(_,{to:"/pricing",className:"text-blue-600 hover:underline",children:"pricing packages"})," are structured around these holistic quality metrics, ensuring you get true value for your investment."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-8 mb-4",children:"FAQ"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"Is a DA 20 link worth buying?"}),i.jsx("p",{children:"Yes, if the site is highly relevant to your niche, has real traffic, and is actively growing. It's better than a spammy DA 50 site."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900",children:"How do I check a site's real traffic?"}),i.jsx("p",{children:"Use tools like Ahrefs, Semrush, or SimilarWeb to estimate organic traffic and view historical trends."})]})]}),i.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center border border-blue-100",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Stop Chasing Vanity Metrics"}),i.jsx("p",{className:"text-slate-600 mb-6",children:"Let us help you secure links that actually drive rankings and traffic, not just high DA scores."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[i.jsx(_,{to:"/contact",className:"inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:"Get a Quote"}),i.jsxs("span",{className:"text-slate-500",children:["or message us on WhatsApp: ",i.jsx("strong",{className:"text-slate-900",children:"+1 (555) 123-4567"})]})]})]})]})},Ps=[xw,Kw,ww,vw,bw],kw=e=>Ps.find(n=>n.slug===e),Tw=()=>{const[e,n]=v.useState(""),o=Ps.filter(u=>{const m=e.toLowerCase();return u.title.toLowerCase().includes(m)||u.description.toLowerCase().includes(m)}),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Guest Posting and Link Building Guides | Guest Post Platform",description:"Read practical guides about publisher research, guest post quality, blogger outreach, contextual links, pricing and campaign measurement.",path:"/blog"}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"SEO & Link Building Insights"}),i.jsx(Q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-slate-300 max-w-2xl mx-auto",children:"Expert strategies, guides, and tips to help you dominate search rankings"})]})}),i.jsx("section",{className:"bg-white border-b border-slate-200",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Practical guides for safer guest post decisions"}),i.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mb-4",children:"These guides explain how to compare publishers, assess topical relevance, plan natural anchors and document a campaign. They are written for site owners, in-house marketers and agencies that want evidence-based decisions instead of relying on a single third-party authority score."}),i.jsxs("p",{className:"text-slate-600 leading-relaxed",children:["Start with the buying-safety checklist, then compare ",i.jsx(_,{className:"text-blue-700 font-semibold hover:underline",to:"/guest-post-vs-link-insertion",children:"guest posts and link insertions"})," or review our ",i.jsx(_,{className:"text-blue-700 font-semibold hover:underline",to:"/guest-post-pricing-guide-seo-agencies",children:"pricing guide"}),". Paid placements remain subject to publisher approval and appropriate link disclosure."]}),i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mt-9 mb-4",children:"How to use this resource library"}),i.jsx("p",{className:"text-slate-600 leading-relaxed mb-4",children:"Use the articles as decision frameworks, not promises of a specific ranking result. Record why a publisher matches your audience, examine more than DA or DR, review estimated traffic by country and topic, and confirm the live article and link terms. A strong placement cannot compensate for a weak destination page, poor search intent or serious technical problems."}),i.jsxs("p",{className:"text-slate-600 leading-relaxed",children:["Our authors distinguish verifiable deliverables from outcomes influenced by search systems, competitors and user demand. Guides are reviewed when our process changes; dates and author information on each article help readers judge context. For campaign-specific questions, use the ",i.jsx(_,{className:"text-blue-700 font-semibold hover:underline",to:"/contact",children:"contact page"})," rather than assuming a general example applies to every website."]}),i.jsx("p",{className:"text-slate-600 leading-relaxed mt-4",children:"A practical review should also check whether a proposed article overlaps existing content, whether the destination is indexable and useful, and whether the anchor reads naturally in context. Keep screenshots or exports of approved terms and recheck live placements periodically. This makes reporting more dependable for clients and helps identify publisher changes without overstating what a backlink can achieve."}),i.jsx("p",{className:"text-slate-600 leading-relaxed mt-4",children:"Relevance and reader value remain the starting point for every guide."})]})}),i.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:i.jsxs("div",{className:"max-w-2xl mx-auto relative",children:[i.jsx(mo,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),i.jsx("input",{type:"text",placeholder:"Search articles by title or keyword...",value:e,onChange:u=>n(u.target.value),className:"w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 text-lg"})]})}),i.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24",children:o.length>0?i.jsx(Q.div,{variants:s,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(u=>i.jsxs(Q.article,{variants:l,className:"bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group",children:[i.jsx(_,{to:`/${u.slug}`,className:"block overflow-hidden",children:i.jsx("img",{src:u.image||"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",alt:u.title,className:"w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[i.jsxs("div",{className:"flex items-center text-xs text-slate-500 mb-3",children:[i.jsx(Ph,{className:"w-3 h-3 mr-1"}),new Date(u.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",children:i.jsx(_,{to:`/${u.slug}`,children:u.title})}),i.jsx("p",{className:"text-sm text-slate-600 mb-6 line-clamp-2 flex-grow",children:u.description}),i.jsxs(_,{to:`/${u.slug}`,className:"inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto group-hover:translate-x-2 transition-transform text-sm",children:["Read More",i.jsx(Wt,{className:"ml-1 w-4 h-4"})]})]})]},u.slug))}):i.jsxs("div",{className:"text-center py-20",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",children:"No articles found"}),i.jsx("p",{className:"text-slate-600",children:"Try adjusting your search terms."})]})})]}),i.jsx(ye,{})]})},K0=({slug:e})=>{const{slug:n}=M0(),o=e||n;Mu();const s=kw(o),l=v.useRef(null),[u,m]=v.useState([]);v.useEffect(()=>{window.scrollTo(0,0)},[o]),v.useEffect(()=>{if(l.current){const w=Array.from(l.current.querySelectorAll("h2, h3")).map((b,S)=>(b.id||(b.id=`heading-${S}`),{id:b.id,text:b.innerText,level:b.tagName.toLowerCase()==="h2"?2:3}));m(w)}},[s]);const h="https://guestpostplatform.com",p=s?`${h}/${s.slug}/`:null,f=s?{"@context":"https://schema.org","@type":"BlogPosting",headline:s.title,description:s.metaDescription||s.description,datePublished:s.date,dateModified:s.updatedAt||s.date,author:{"@type":"Organization",name:"Guest Post Platform",url:h},publisher:{"@type":"Organization",name:"Guest Post Platform",url:h},mainEntityOfPage:{"@type":"WebPage","@id":p},url:p}:null;if(!s)return i.jsxs(i.Fragment,{children:[i.jsxs(Yn,{children:[i.jsx("title",{children:"Article Not Found | Guest Post Platform"}),i.jsx("meta",{name:"robots",content:"noindex,follow"})]}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4",children:[i.jsx("h1",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Post Not Found"}),i.jsx("p",{className:"text-slate-600 mb-8",children:"The article you're looking for doesn't exist or has been moved."}),i.jsx(_,{to:"/blog",className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Back to Blog"})]}),i.jsx(ye,{})]});const y=Ps.filter(x=>x.slug!==o).slice(0,3);return i.jsxs(i.Fragment,{children:[i.jsxs(Yn,{children:[i.jsxs("title",{children:[s.metaTitle," - Guest Post Platform"]}),i.jsx("meta",{name:"description",content:s.metaDescription}),i.jsx("meta",{name:"robots",content:"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}),i.jsx("link",{rel:"canonical",href:p}),i.jsx("meta",{property:"og:title",content:s.metaTitle}),i.jsx("meta",{property:"og:description",content:s.metaDescription}),i.jsx("meta",{property:"og:url",content:p}),i.jsx("meta",{property:"og:type",content:"article"}),i.jsx("meta",{property:"og:site_name",content:"Guest Post Platform"}),s.image&&i.jsx("meta",{property:"og:image",content:s.image.startsWith("http")?s.image:`${h}${s.image}`}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:title",content:s.metaTitle}),i.jsx("meta",{name:"twitter:description",content:s.metaDescription}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify(f)})]}),i.jsx(ge,{}),i.jsxs("div",{className:"min-h-screen bg-slate-50 pb-24",children:[i.jsxs("div",{className:"w-full h-[300px] md:h-[400px] relative",children:[i.jsx("img",{src:s.image||"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&q=80",alt:s.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-slate-900/40"})]}),i.jsxs("section",{className:"bg-white border-b border-slate-200 pt-12 pb-12 -mt-16 relative z-10 max-w-5xl mx-auto rounded-t-3xl shadow-sm px-4 sm:px-6 lg:px-8",children:[i.jsxs(_,{to:"/blog",className:"inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors",children:[i.jsx(ed,{className:"w-4 h-4 mr-2"}),"Back to Blog"]}),i.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[i.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight",children:s.title}),i.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-slate-500 text-sm",children:[s.author&&i.jsxs("div",{className:"flex items-center",children:[i.jsx(v6,{className:"w-4 h-4 mr-2"}),s.author]}),i.jsxs("div",{className:"flex items-center",children:[i.jsx(Ph,{className:"w-4 h-4 mr-2"}),"Published: ",new Date(s.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),i.jsxs("div",{className:"flex items-center",children:[i.jsx(_u,{className:"w-4 h-4 mr-2"}),"Updated: ",new Date(s.updatedAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})]})]}),i.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:i.jsxs("div",{className:"flex flex-col lg:flex-row gap-12",children:[i.jsx("div",{className:"lg:w-2/3",children:i.jsx(Q.article,{ref:l,initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl",children:s.content})}),i.jsx("div",{className:"lg:w-1/3",children:i.jsxs("div",{className:"sticky top-24 bg-white rounded-xl shadow-sm border border-slate-200 p-6",children:[i.jsxs("h3",{className:"text-lg font-bold text-slate-900 mb-4 flex items-center",children:[i.jsx(p6,{className:"w-5 h-5 mr-2 text-blue-600"}),"Table of Contents"]}),u.length>0?i.jsx("ul",{className:"space-y-3 text-sm",children:u.map(x=>i.jsx("li",{className:`${x.level===3?"ml-4 text-slate-500":"font-medium text-slate-700"}`,children:i.jsx("a",{href:`#${x.id}`,className:"hover:text-blue-600 transition-colors block",onClick:w=>{w.preventDefault(),document.getElementById(x.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:x.text})},x.id))}):i.jsx("p",{className:"text-slate-500 text-sm",children:"No headings found."})]})})]})}),y.length>0&&i.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-16 border-t border-slate-200",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8",children:"Related Articles"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:y.map(x=>i.jsx(_,{to:`/${x.slug}`,className:"block group h-full",children:i.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full",children:[i.jsx("img",{src:x.image||"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",alt:x.title,className:"w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-500"}),i.jsxs("div",{className:"p-5 flex flex-col flex-grow",children:[i.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2",children:x.title}),i.jsx("p",{className:"text-slate-600 text-sm line-clamp-2 mb-4 flex-grow",children:x.description}),i.jsxs("div",{className:"text-blue-600 font-medium text-sm mt-auto flex items-center",children:["Read more ",i.jsx(ed,{className:"w-4 h-4 ml-1 rotate-180"})]})]})]})},x.slug))})]})]}),i.jsx(ye,{})]})},Kt=(e,n,o,s,l,u="global")=>({slug:e,title:`${n} Guest Posting Service | Relevant Editorial Links`,description:`${n} guest posting with relevant publisher research, original content and transparent placement reporting for qualified campaigns.`,eyebrow:`${n} link building`,heading:`${n} Guest Posts Built for Relevance, Not Just Metrics`,intro:`Reach readers who already care about ${s[0].toLowerCase()}, ${s[1].toLowerCase()} and ${s[2].toLowerCase()}. We research real publications, match each pitch to the site’s audience and share placement details before content moves forward.`,audience:o,topics:s,review:l,market:u,deliverables:[`A prospect list filtered for ${n.toLowerCase()} relevance`,"Original article written for the publisher’s readers","Natural anchor and destination-page recommendation","Live URL, placement details and post-publication check"]}),wn=(e,n,o,s,l,u)=>({slug:e,title:n,description:`${o} with manual publisher research, relevant content, clear quality checks and transparent campaign reporting.`,eyebrow:o,heading:`${o} That Supports Sustainable Organic Growth`,intro:`${l} Every campaign starts with the pages you need to grow, the audience you need to reach and the risks you want to avoid—not a preselected list of sites.`,audience:s,topics:["Campaign planning","Publisher qualification","Editorial content"],review:u,market:"global",deliverables:["Campaign brief and destination-page mapping","Publisher research with relevance and traffic review","Original editorial content and contextual link placement","Live-link report with quality-control notes"]}),h2=[Kt("travel-guest-post","Travel","tour operators, hotels, destination brands and travel SaaS teams",["Destination guides","Hospitality trends","Responsible tourism"],"We check destination fit, seasonal relevance and whether travel traffic comes from useful informational queries."),Kt("uk-guest-post","UK","brands that need visibility with audiences in the United Kingdom",["UK business","Consumer advice","Local market trends"],"We review UK traffic share, British English editorial standards and genuine local readership.","United Kingdom"),Kt("web-design-guest-post","Web Design","design studios, developers, hosting brands and UX platforms",["UX research","Frontend performance","Conversion-focused design"],"We favour publications with practitioner audiences, visible authors and technically accurate editorial review."),Kt("canada-guest-post","Canada","companies targeting Canadian consumers and business buyers",["Canadian business","Regional consumer guides","Technology adoption"],"We validate Canadian search visibility, regional fit and locally useful editorial context.","Canada"),Kt("uae-guest-post","UAE","brands reaching buyers in Dubai, Abu Dhabi and the wider Emirates",["UAE business","Property and tourism","Regional technology"],"We check UAE audience signals, regional relevance and English or Arabic market alignment.","United Arab Emirates"),Kt("education-guest-post","Education","schools, universities, edtech products and training providers",["Learning technology","Student outcomes","Professional development"],"We avoid unsupported outcome claims and prioritise publications trusted by educators, learners or parents."),Kt("law-guest-post","Legal","law firms, legal software providers and compliance consultancies",["Legal technology","Compliance education","Practice management"],"Legal content requires careful sourcing, jurisdiction clarity and publishers that distinguish information from legal advice."),Kt("entrepreneur-guest-post","Entrepreneur","founders, startup advisors, accelerators and B2B providers",["Startup operations","Founder finance","Market validation"],"We look for active founder readership and practical editorial standards instead of broad motivational blogs."),Kt("tech-guest-post","Technology","software companies, IT providers and product-led startups",["Software engineering","Digital transformation","Product strategy"],"We verify topical depth, organic technology traffic and whether contributors demonstrate real subject knowledge."),Kt("cybersecurity-guest-post","Cybersecurity","security vendors, consultants and B2B technology teams",["Threat prevention","Identity and access","Security compliance"],"Claims must be technically defensible; we prioritise security-focused audiences and reject recycled breach-news sites."),Kt("cryptocurrency-guest-post","Cryptocurrency","blockchain products, exchanges, analytics platforms and Web3 teams",["Blockchain infrastructure","Digital asset security","Crypto regulation"],"We screen for transparent ownership, real readership and responsible financial language in a volatile, high-risk niche."),Kt("guest-post-australia","Australia","businesses seeking Australian customers and local search visibility",["Australian business","Consumer services","Regional innovation"],"We validate Australian traffic, local language conventions and editorial relevance to the intended state or national market.","Australia"),Kt("real-estate-guest-post","Real Estate","agents, property platforms, developers and proptech brands",["Home buying","Property investment","Market technology"],"We distinguish local consumer publications from generic property blogs and require careful treatment of financial claims."),Kt("beauty-guest-post","Beauty","skincare, cosmetics, salon and personal-care brands",["Skincare education","Beauty routines","Product formulation"],"We assess audience fit, disclosure practices and whether health or product claims are handled responsibly."),Kt("fitness-write-for-us-guest-post","Fitness","gyms, coaches, sports products and wellness platforms",["Training principles","Recovery","Sustainable habits"],"We prioritise evidence-aware editorial policies and avoid sites promoting unsafe or unrealistic health outcomes."),Kt("fashion-guest-post","Fashion","apparel labels, retailers, designers and fashion technology brands",["Sustainable fashion","Style guidance","Retail innovation"],"We review visual and editorial quality, audience engagement and alignment with the brand’s price point and category."),Kt("finance-guest-post","Finance","fintech companies, advisers, accounting firms and financial publishers",["Personal finance","Fintech products","Business accounting"],"Finance is a trust-sensitive niche, so we check authorship, disclosures, source quality and misleading-claim risk."),Kt("home-improvement-guest-post","Home Improvement","contractors, home-service platforms and renovation brands",["Renovation planning","Energy efficiency","Home maintenance"],"We target practical homeowner audiences and publishers with clear project expertise rather than thin décor galleries."),Kt("gadgets-guest-post","Gadgets","consumer electronics brands, accessory makers and technology retailers",["Product comparisons","Smart-home devices","Mobile accessories"],"We review real product coverage, commercial transparency and search traffic beyond one-off launch news."),Kt("guest-post-spain","Spain","brands targeting customers and companies in Spain",["Spanish business","Travel and lifestyle","Digital commerce"],"We assess Spanish audience fit, language quality and whether regional context matches the campaign.","Spain"),Kt("food-guest-post","Food","food brands, restaurants, kitchen products and hospitality businesses",["Cooking techniques","Food culture","Restaurant operations"],"We check recipe or culinary expertise, audience engagement and careful handling of nutrition or allergy claims."),Kt("automotive-guest-post","Automotive","dealers, parts brands, mobility startups and vehicle services",["Vehicle ownership","EV technology","Maintenance guidance"],"We favour publications with hands-on automotive expertise, stable buyer traffic and accurate safety information."),Kt("google-news-guest-post","Google News","brands seeking timely editorial coverage on established news publishers",["Industry commentary","Company research","Data-led stories"],"Inclusion is never promised: we verify current publication signals, editorial fit and newsworthiness before outreach."),Kt("wordpress-guest-post","WordPress","plugin developers, agencies, hosts and site owners",["WordPress performance","Plugin workflows","Site security"],"We seek technically credible WordPress publications and content that solves a specific administrator or developer problem."),Kt("ecommerce-guest-post","Ecommerce","online retailers, commerce platforms and conversion tools",["Store optimisation","Customer retention","Commerce operations"],"We qualify publishers by merchant readership, useful commercial queries and depth beyond generic dropshipping content."),Kt("german-guest-post","German","companies entering Germany or strengthening German-language visibility",["German business","B2B technology","Consumer guidance"],"We review native-language quality, German search traffic and market-specific editorial expectations.","Germany"),Kt("wedding-guest-post","Wedding","venues, planners, photographers and wedding product brands",["Wedding planning","Vendor selection","Budget and style"],"We match publishers to planning stage, geography and service category so referral visibility is commercially useful."),Kt("lifestyle-guest-post","Lifestyle","consumer brands serving clearly defined interest-based audiences",["Everyday wellbeing","Home and relationships","Personal development"],"Lifestyle is broad, so we require a close audience match and reject sites whose categories have no editorial focus."),Kt("cbd-guest-post","CBD","compliant CBD brands, education platforms and wellness retailers",["CBD education","Product quality","Responsible use"],"We consider publisher policy, local advertising rules and health-claim risk; placement availability varies by jurisdiction."),Kt("marketing-guest-post","Marketing","agencies, martech companies and in-house growth teams",["Content strategy","Demand generation","Marketing analytics"],"We prioritise practitioner readership, original examples and organic visibility for real marketing problems."),Kt("business-guest-post","Business","B2B companies, professional services and growing organisations",["Business operations","Leadership systems","Revenue strategy"],"We narrow broad business inventory by buyer role, company stage and the topic of the destination page."),Kt("sports-guest-post","Sports","sports brands, clubs, training products and fan platforms",["Performance analysis","Sports culture","Equipment guidance"],"We qualify publishers by sport, audience location and whether coverage is original rather than scraped scores or news."),Kt("health-guest-post","Health","health platforms, clinics and wellness companies with review-ready content",["Preventive health","Patient education","Healthcare technology"],"Health content needs strong sourcing, qualified review where appropriate and no exaggerated medical outcomes."),wn("guest-post-link-building","Guest Post Link Building Service | Manual Outreach","Guest post link building","SEO teams that need relevant editorial links at a controlled pace","Build links to strategically selected pages with anchors considered across the whole campaign.","We evaluate topical overlap, organic traffic patterns, outbound-link behaviour and editorial quality before approval."),wn("high-da-guest-post-sites","High DA Guest Post Sites | Quality Beyond a Single Metric","High-authority guest post placements","brands that want authority without relying on DA alone","Use authority metrics as one screening signal while prioritising relevance, real traffic and editorial trust.","Every shortlist includes context beyond DA so a high score never hides weak traffic or irrelevant content."),wn("seo-services","SEO Services for Sustainable Organic Growth","Practical SEO services","businesses that need technical, content and authority work aligned","Turn search demand into a prioritised roadmap covering crawlability, useful pages and credible off-page signals.","Recommendations are tied to measurable search problems, implementation effort and commercial relevance."),wn("guest-posting-service","Guest Posting Service | Vetted Publishers and Original Content","Managed guest posting service","brands and agencies that want placements managed end to end","Move from target-page planning to publisher research, content approval and live-link reporting through one workflow.","Clients review placement options while we handle research, outreach, writing and publication follow-up."),wn("guest-post-cost","Guest Post Cost and Pricing Guide | What Determines Value","Transparent guest post pricing","buyers comparing placements, retainers and quality levels","Understand what changes cost before buying: publisher demand, niche, traffic quality, editorial work and campaign volume.","We separate publisher fees, content requirements and management scope so quotes can be compared on equal terms."),wn("saas-guest-posting-service","SaaS Guest Posting Service | Editorial Links for Software Brands","SaaS guest posting service","B2B SaaS, product-led growth and enterprise software teams","Build relevant mentions around use cases, integrations and problems your software helps solve.","Publisher matching considers ICP, funnel stage, topical adjacency and whether the article can earn qualified referral attention."),wn("premium-guest-post","Premium Guest Posts | Selective Editorial Placements","Premium guest post placements","brands prioritising selectivity, editorial quality and stronger publications","Focus budget on fewer, better-matched opportunities with deeper publisher due diligence and custom content.","Premium means stricter qualification and editorial effort—not an unsupported promise about rankings or traffic."),wn("guest-posting-agency","Guest Posting Agency | Strategy, Outreach and Reporting","Guest posting agency","in-house marketers and SEO agencies needing scalable delivery","Coordinate planning, prospecting, writing, approvals and reporting without losing control of quality.","Our workflow keeps placement decisions visible and avoids anonymous inventory or undisclosed substitutions."),wn("white-label-guest-posting","White Label Guest Posting for SEO Agencies","White label guest posting","agencies delivering campaigns under their own client relationships","Add fulfilment capacity with client-ready reporting, defined approval stages and no supplier branding.","We protect agency relationships, follow campaign-level instructions and keep deliverables easy to hand off.")],jw=Object.fromEntries(h2.map(e=>[e.slug,e])),w0="https://guestpostplatform.com",Nw=()=>{const{slug:e}=M0(),n=jw[e];if(!n)return i.jsx(L0,{to:"/",replace:!0});const o=[{question:`How do you select publishers for ${n.eyebrow.toLowerCase()}?`,answer:`We start with topical and audience relevance, then review organic visibility, recent publishing activity, editorial consistency and outbound-link patterns. ${n.review}`},{question:`Can I approve a site before the ${n.slug.includes("service")?"campaign":"guest post"} is written?`,answer:"Yes. We share the proposed publication and available quality information before content production. You can decline an option that does not fit the brief."},{question:"Do you guarantee rankings or a specific Domain Authority?",answer:"No responsible provider can guarantee rankings. Third-party authority scores are useful filters, but relevance, real search visibility, editorial quality and the strength of your own page also matter."},{question:"What information should I send to get an accurate plan?",answer:`Share your target pages, preferred markets, topics to avoid and current link-building activity. For ${n.audience}, these details help us recommend safer anchors and more relevant publishers.`}],s=h2.filter(m=>m.slug!==n.slug).sort((m,h)=>m.slug.localeCompare(h.slug)).slice(0,6),l=`${w0}/${n.slug}/`,u={"@context":"https://schema.org","@graph":[{"@type":"Service",name:n.eyebrow,description:n.description,provider:{"@type":"Organization",name:"Guest Post Platform",url:w0},areaServed:n.market,url:l},{"@type":"FAQPage",mainEntity:o.map(m=>({"@type":"Question",name:m.question,acceptedAnswer:{"@type":"Answer",text:m.answer}}))}]};return i.jsxs(i.Fragment,{children:[i.jsxs(Yn,{children:[i.jsx("title",{children:n.title}),i.jsx("meta",{name:"description",content:n.description}),i.jsx("meta",{name:"robots",content:"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}),i.jsx("link",{rel:"canonical",href:l}),i.jsx("meta",{property:"og:title",content:n.title}),i.jsx("meta",{property:"og:description",content:n.description}),i.jsx("meta",{property:"og:url",content:l}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:site_name",content:"Guest Post Platform"}),i.jsx("meta",{name:"twitter:card",content:"summary"}),i.jsx("meta",{name:"twitter:title",content:n.title}),i.jsx("meta",{name:"twitter:description",content:n.description}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify(u)})]}),i.jsx(ge,{}),i.jsxs("main",{className:"bg-white",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28",children:i.jsxs("div",{className:"max-w-4xl",children:[i.jsx("p",{className:"text-blue-300 font-semibold tracking-wide uppercase text-sm mb-4",children:n.eyebrow}),i.jsx("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6",children:n.heading}),i.jsx("p",{className:"text-xl text-slate-300 leading-relaxed max-w-3xl",children:n.intro}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-9",children:[i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",className:"bg-blue-600 hover:bg-blue-500 text-white",children:["Request a tailored shortlist ",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/pricing",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-slate-500 bg-transparent text-white hover:bg-white hover:text-slate-900",children:"Review pricing options"})})]})]})})}),i.jsx("section",{className:"py-16 lg:py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12",children:[i.jsxs("div",{className:"lg:col-span-2",children:[i.jsx("p",{className:"text-blue-600 font-semibold mb-2",children:"Start with search intent"}),i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"A relevant placement has to make sense to a reader"}),i.jsxs("div",{className:"space-y-4 text-lg text-slate-600 leading-relaxed",children:[i.jsxs("p",{children:["Authority metrics cannot explain why a reader would trust or click a link. We begin by matching the destination page to a real editorial question, then identify publications whose existing audience overlaps with ",n.audience,"."]}),i.jsxs("p",{children:["For ",n.eyebrow.toLowerCase(),", useful editorial angles commonly include ",n.topics.join(", ").toLowerCase(),". The article must stand on its own: it should answer the publisher’s topic thoroughly even if the contextual link were removed."]}),i.jsxs("p",{children:[n.review," This makes the review slower than selecting a site from a spreadsheet, but it also exposes weak opportunities before budget is committed."]})]})]}),i.jsxs("aside",{className:"bg-blue-50 rounded-2xl p-7 border border-blue-100",children:[i.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-5",children:"What is included"}),i.jsx("ul",{className:"space-y-4",children:n.deliverables.map(m=>i.jsxs("li",{className:"flex gap-3 text-slate-700",children:[i.jsx(no,{className:"w-5 h-5 text-blue-600 shrink-0 mt-0.5"}),m]},m))})]})]})}),i.jsx("section",{className:"py-16 bg-slate-50 border-y border-slate-200",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"max-w-3xl mb-10",children:[i.jsx("p",{className:"text-blue-600 font-semibold mb-2",children:"Quality framework"}),i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Five checks before a publisher reaches your shortlist"}),i.jsx("p",{className:"text-lg text-slate-600",children:"A placement is reviewed as an editorial environment, not reduced to one score."})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-5 gap-5",children:[[mo,"Topical fit",`The site covers ${n.topics[0].toLowerCase()} with enough depth to support a natural article.`],[Wu,"Traffic pattern","We look for relevant ranking pages and stable visibility—not an impressive total with no topical overlap."],[c6,"Editorial history","Recent posts, real authorship, readable pages and consistent subject coverage are reviewed manually."],[Hu,"Link hygiene","Excessive sponsored posts, unrelated outbound links and obvious network footprints are rejection signals."],[x6,"Content standard","The proposed article must satisfy the publication while supporting your target page naturally."]].map(([m,h,p])=>i.jsxs("article",{className:"bg-white rounded-xl border border-slate-200 p-6",children:[i.jsx(m,{className:"w-7 h-7 text-blue-600 mb-4"}),i.jsx("h3",{className:"font-bold text-slate-900 mb-2",children:h}),i.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:p})]},h))})]})}),i.jsx("section",{className:"py-16 lg:py-20",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid lg:grid-cols-2 gap-14",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-blue-600 font-semibold mb-2",children:"How delivery works"}),i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-7",children:"From target page to verified live link"}),i.jsx("ol",{className:"space-y-6",children:[["Define the job of the link",`We review your target page, intended ${n.market} audience and current backlink profile before suggesting anchors.`],["Research and qualify publishers",`Potential sites are researched around ${n.topics.join(", ").toLowerCase()}, then checked against the quality framework.`],["Approve direction","You review the publication and proposed topic. Writing starts only after the direction is agreed."],["Create publication-ready content","The draft is original, useful to the publisher’s audience and edited for factual clarity and natural link context."],["Publish and verify","We confirm the live URL, anchor, destination and indexability, then include the placement in your report."]].map(([m,h],p)=>i.jsxs("li",{className:"flex gap-4",children:[i.jsx("span",{className:"w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0",children:p+1}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-slate-900 mb-1",children:m}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:h})]})]},m))})]}),i.jsxs("div",{className:"bg-slate-900 text-white rounded-2xl p-8 lg:p-10",children:[i.jsx("h2",{className:"text-3xl font-bold mb-6",children:"What we will not promise"}),i.jsxs("div",{className:"space-y-5 text-slate-300 leading-relaxed",children:[i.jsx("p",{children:"We do not guarantee a number-one ranking, referral sales or permanent publisher ownership. Search performance depends on your technical foundation, content quality, competition and the full link profile."}),i.jsx("p",{children:"We also do not substitute an unapproved domain, hide the destination URL or describe a placement as editorial when it is not. If a publication changes its requirements, you receive the choice to approve the change."}),i.jsxs("p",{children:["For ",n.eyebrow.toLowerCase(),", the goal is a defensible link that is relevant in context and useful as part of a broader SEO strategy."]})]})]})]})})}),i.jsx("section",{className:"py-16 bg-blue-50 border-y border-blue-100",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 text-center mb-10",children:"Frequently asked questions"}),i.jsx("div",{className:"space-y-4",children:o.map(m=>i.jsxs("details",{className:"group bg-white border border-slate-200 rounded-xl p-6",children:[i.jsxs("summary",{className:"font-bold text-slate-900 cursor-pointer list-none flex justify-between gap-4",children:[m.question,i.jsx("span",{className:"text-blue-600 group-open:rotate-45 transition-transform",children:"+"})]}),i.jsx("p",{className:"text-slate-600 leading-relaxed mt-4",children:m.answer})]},m.question))})]})}),i.jsx("section",{className:"py-16",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-6",children:"Explore related services"}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(m=>i.jsxs(_,{to:`/${m.slug}/`,className:"border border-slate-200 rounded-xl p-5 font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-600 transition-colors",children:[m.eyebrow,i.jsx(Wt,{className:"inline ml-2 w-4 h-4"})]},m.slug))})]})}),i.jsx("section",{className:"pb-20",children:i.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-9 lg:p-12 text-center text-white",children:[i.jsxs("h2",{className:"text-3xl font-bold mb-4",children:["Plan your first ",n.eyebrow.toLowerCase()," placement"]}),i.jsx("p",{className:"text-blue-100 text-lg mb-7",children:"Send your target page and preferred market. We will explain the fit, risks and next step before you order."}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{size:"lg",className:"bg-white text-blue-700 hover:bg-blue-50",children:"Talk to the outreach team"})})]})})})]}),i.jsx(ye,{})]})},Cw={"privacy-policy":{title:"Privacy Policy | Guest Post Platform",description:"Learn what information Guest Post Platform collects, why it is used, how it is protected and what choices you have.",heading:"Privacy Policy",updated:"August 18, 2026",sections:[["Information we collect","We may collect information you submit through contact, order or enquiry forms, including your name, business email, company, website, campaign requirements and message. Basic technical data such as browser type, referring page and device information may be recorded in server or analytics logs."],["How we use information","Information is used to answer enquiries, prepare placement recommendations, deliver requested services, maintain campaign records, prevent abuse and improve the website. We do not sell personal information or use client campaign details to market a competing business."],["Legal basis and consent","Where applicable, we process information to respond to your request, perform a contract, meet a legal obligation or pursue a legitimate business interest. Marketing messages are sent only where permitted, and you may opt out at any time."],["Service providers and disclosure","Limited information may be handled by hosting, email, analytics, payment or workflow providers that support our operations. We may also disclose information when legally required or necessary to protect users, our business or the public."],["Data retention and security","We keep information only as long as reasonably needed for the purpose collected, accounting obligations, dispute handling and security. We use appropriate access controls and operational safeguards, but no internet transmission can be guaranteed completely secure."],["Your choices","Depending on your location, you may request access, correction, deletion, restriction or a copy of personal information. You may also object to certain processing. We may need to verify your identity before completing a request."],["Cookies and external links","The website may use essential or analytics cookies. Links to third-party websites are governed by those sites’ own privacy practices, which we do not control."],["Contact","For a privacy question or data request, contact us through the website or WhatsApp at +92 302 5820230. We may update this policy when our services or legal obligations change; the latest revision date appears above."]]},"terms-of-services":{title:"Terms of Service | Guest Post Platform",description:"Review the service scope, approvals, payment terms and responsibilities that apply when working with Guest Post Platform.",heading:"Terms of Service",updated:"August 18, 2026",sections:[["Agreement and scope","By ordering or using our services, you agree to these terms and the scope confirmed in your proposal, invoice or written campaign brief. If project-specific terms conflict with this page, the written project terms control for that engagement."],["Publisher availability","Publisher rules, pricing and availability can change. A site is not reserved until confirmed. If an approved opportunity becomes unavailable, we will offer an alternative or another reasonable resolution rather than substitute a site without approval."],["Content and approvals","You are responsible for supplying accurate business information and identifying regulated claims, prohibited topics or brand restrictions. Approval confirms that names, links, claims and positioning are acceptable. Publishers retain final editorial control."],["Payments and cancellations","Payment timing and included revisions are stated in the applicable quote or invoice. Work already completed, publisher fees already committed and published placements may be non-refundable. Any cancellation request should be made promptly in writing."],["SEO outcomes","We do not guarantee rankings, traffic, leads, indexation timing or continued third-party metrics. Search engines and publishers are independent parties. Our obligation is to provide the agreed research, content or placement service with reasonable care."],["Link and publication changes","A publisher may later edit, move, nofollow or remove content outside our control. Any replacement period or monitoring commitment applies only when expressly included in the order. We will provide available evidence and assistance when an issue is reported."],["Acceptable use","You may not use the service for unlawful, deceptive, infringing or harmful content. We may reject campaigns involving impersonation, undisclosed malware, prohibited products or claims that cannot be responsibly supported."],["Liability and contact","To the extent permitted by law, liability is limited to the amount paid for the affected service, and indirect or consequential losses are excluded. Questions about these terms can be sent through the website contact page or WhatsApp."]]}},v0=({policy:e})=>{const n=Cw[e];return n?i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:n.title,description:n.description,path:`/${e}`}),i.jsx(ge,{}),i.jsxs("main",{children:[i.jsx("section",{className:"bg-slate-950 text-white py-20",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:n.heading}),i.jsxs("p",{className:"text-slate-300",children:["Last updated: ",n.updated]})]})}),i.jsx("section",{className:"py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mb-10",children:"This page explains the rules and expectations that apply when you visit our website or work with our team. Please read it together with any written proposal or order terms."}),i.jsx("div",{className:"space-y-10",children:n.sections.map(([o,s])=>i.jsxs("section",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-3",children:o}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:s})]},o))})]})})]}),i.jsx(ye,{})]}):i.jsx(L0,{to:"/",replace:!0})},Sw=()=>i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Guest Posting Case Study | Campaign Method and Reporting",description:"See how a relevance-led guest posting campaign is planned, quality-checked and measured without inflated SEO promises.",path:"/case-study"}),i.jsx(ge,{}),i.jsxs("main",{children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 lg:py-28",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("p",{className:"text-blue-300 font-semibold uppercase tracking-wide mb-4",children:"Campaign case study"}),i.jsx("h1",{className:"text-4xl md:text-6xl font-bold leading-tight mb-6",children:"How Relevance-Led Outreach Turns Placements Into Useful SEO Assets"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-3xl leading-relaxed",children:"A transparent example of campaign planning, publisher qualification and measurement. Client-identifying data and invented performance claims are intentionally excluded."})]})}),i.jsx("section",{className:"py-16",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-10",children:"The example begins with a common constraint: the client needs relevant third-party coverage, but a large generic site list would make approval difficult and could waste budget. The campaign therefore treats every placement as an editorial decision. The target page must already answer its intended query, the publisher must reach a related audience, and the proposed article must stand on its own even if the link is ignored."}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[["Challenge","A B2B software team had strong product pages but few editorial references from publications read by its buyers."],["Strategy","Map links to useful resources, segment prospects by audience and publish at a measured pace with varied, natural anchors."],["Measurement","Track live-link quality, destination-page impressions, relevant rankings and assisted conversions instead of reporting DA alone."]].map(([e,n])=>i.jsxs("article",{className:"border border-slate-200 rounded-2xl p-7",children:[i.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-3",children:e}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:n})]},e))})]})}),i.jsx("section",{className:"py-16 bg-slate-50 border-y border-slate-200",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8",children:"The campaign workflow"}),i.jsx("div",{className:"space-y-6",children:["Audit destination pages and remove targets that do not yet satisfy search intent.","Build topic clusters around buyer problems rather than forcing exact-match commercial anchors.","Reject publishers with irrelevant traffic, unstable visibility or excessive unrelated sponsored content.","Write each article for the publication’s audience and document the reason for the contextual link.","Review live URLs and compare search visibility over an appropriate period without attributing every change to links."].map(e=>i.jsxs("div",{className:"flex gap-3",children:[i.jsx(no,{className:"w-6 h-6 text-blue-600 shrink-0"}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:e})]},e))})]})}),i.jsx("section",{className:"py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"What a credible report should show"}),i.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mb-7",children:"A case study is only useful when the measurement has limits. Rankings can change because of content updates, technical fixes, competitors and search-system changes. We report placement facts separately from business outcomes and avoid presenting correlation as guaranteed causation."}),i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",children:["Discuss your campaign ",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})})]})}),i.jsx("section",{className:"py-16 bg-slate-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"Measurement framework and limitations"}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-5",children:"Before outreach begins, the campaign records baseline impressions, clicks, priority-query positions and conversions for each destination page. Every approved publisher is logged with its topic, audience fit, traffic pattern, proposed article, anchor rationale, link attribute and live URL. This creates an audit trail that distinguishes completed work from an assumed SEO outcome."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-5",children:"Reviews use sensible comparison periods because new pages and links can take time to be crawled. Branded and non-branded queries are separated, and large content or technical changes are noted. A lift that appears after publication is treated as supporting evidence, not proof that one link caused the change."}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:"This illustrative case study does not publish a client name, fabricated percentages or guaranteed rankings. Actual results depend on the starting site, competition, content quality, technical health and publisher decisions. The useful takeaway is the documented process: improve weak target pages first, prioritize relevance, reject questionable inventory and report what can be verified."})]})})]}),i.jsx(ye,{})]}),Pw=[["Publisher transparency","You should be able to review the domain, niche, estimated traffic, authority indicators, price and publishing terms before approving an order."],["Topical relevance","The publication and article should serve readers connected to your destination page. A high metric on an unrelated site is a weak substitute for audience fit."],["Editorial control","A credible platform explains that publishers can edit or reject content and that link attributes or sponsored disclosure depend on applicable editorial rules."],["Quality evidence","Traffic history, recent articles, outbound-link patterns and indexing should be reviewed alongside third-party DA or DR scores."],["Clear fulfilment","The buyer should understand who writes the article, what revisions include, expected turnaround, reporting and what happens if a placement changes."],["Realistic claims","No platform controls Google indexing or rankings. Responsible providers separate verifiable delivery from search outcomes influenced by many factors."]],zw=[{title:"Self-service marketplace",best:"Best for experienced buyers who want direct control and can assess publishers themselves.",strengths:"Large searchable inventory, visible pricing and fast shortlist creation.",tradeoff:"The buyer carries more responsibility for relevance checks, briefs and quality control."},{title:"Managed blogger outreach",best:"Best for brands that need research, pitching, content and publisher coordination handled together.",strengths:"Custom prospecting and closer alignment between the destination page, topic and publication.",tradeoff:"Usually slower and more expensive because research and editorial work are included."},{title:"Hybrid guest post platform",best:"Best for agencies that want marketplace choice plus optional campaign support.",strengths:"Buyers can browse inventory, request recommendations and add content or outreach when needed.",tradeoff:"Service scope must be confirmed per order so marketplace and managed deliverables are not confused."}],Ew=[["Is the website guaranteed to rank after buying a guest post?","No. Links can support discovery and authority, but rankings also depend on search intent, content, technical health, competition and Google systems."],["Should I choose the platform with the highest number of sites?","Not automatically. Inventory is useful only when it contains publications relevant to your audience, market and destination page."],["Are DA and DR enough to select a placement?","No. They are third-party comparative metrics. Review relevance, traffic patterns, editorial quality, indexing and outbound links as well."],["What should be approved before content is written?","Confirm the domain, proposed subject, target URL, natural anchor approach, price, turnaround, link attributes and any sponsored disclosure."]],Aw={"@context":"https://schema.org","@type":"Article",headline:"Best Guest Post Platforms: How to Compare Marketplaces",description:"A practical framework for comparing guest post marketplaces by relevance, publisher transparency, editorial standards, pricing and reporting.",author:{"@type":"Person",name:"Kamran",url:"https://www.linkedin.com/in/kamranofficialseo/"},publisher:{"@id":"https://guestpostplatform.com/#organization"},mainEntityOfPage:"https://guestpostplatform.com/best-guest-post-platforms/"},Mw=()=>i.jsxs(i.Fragment,{children:[i.jsx(Ze,{title:"Best Guest Post Platforms: Marketplace Comparison Guide",description:"Compare guest post platforms by publisher transparency, relevance, editorial quality, pricing, fulfilment and reporting before selecting a marketplace.",path:"/best-guest-post-platforms",schema:Aw}),i.jsx(ge,{}),i.jsxs("main",{className:"bg-white",children:[i.jsx("section",{className:"bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 lg:py-28",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("p",{className:"text-blue-300 font-semibold uppercase tracking-widest mb-4",children:"Independent selection framework"}),i.jsx("h1",{className:"text-4xl md:text-6xl font-bold leading-tight mb-6",children:"Best Guest Post Platforms: How to Compare Your Options"}),i.jsx("p",{className:"text-xl text-slate-300 max-w-3xl leading-relaxed mb-8",children:"The best platform is not simply the one with the biggest database or highest DA claims. Use this practical framework to compare marketplace transparency, publisher relevance, editorial safeguards, costs and reporting."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[i.jsx(_,{to:"/buy-guest-posts",children:i.jsxs(gt,{size:"lg",className:"bg-white text-slate-900 hover:bg-slate-100",children:["Browse our marketplace ",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})}),i.jsx(_,{to:"/contact",children:i.jsx(gt,{size:"lg",variant:"outline",className:"border-white text-white hover:bg-white hover:text-slate-900",children:"Request a shortlist"})})]})]})}),i.jsx("section",{className:"py-16 border-b border-slate-200",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"What “best” should mean for a buyer"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"Search results often group very different services under the phrase “guest post platform.” Some provide a self-service catalogue, some conduct custom outreach, and others combine both. A useful comparison must identify the operating model before comparing headline prices or inventory totals."}),i.jsx("p",{className:"text-slate-700 leading-relaxed mb-5",children:"Your decision should begin with the destination page and audience. If a proposed publisher has no meaningful connection to the topic, a strong authority score does not create relevance. The opportunity should also make sense to a human reader: the article needs a useful purpose, and its citation should support the surrounding information."}),i.jsx("p",{className:"text-slate-700 leading-relaxed",children:"Guest Post Platform offers searchable publisher opportunities with optional managed support. This page explains the standards we believe buyers should apply to us and to any alternative. It is a selection guide, not a claim that we independently tested or ranked every provider in the market."})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"max-w-3xl mb-12",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Six criteria for comparing guest post platforms"}),i.jsx("p",{className:"text-lg text-slate-600",children:"Use the same checklist for every provider so a low price or prominent metric does not hide an important limitation."})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Pw.map(([e,n],o)=>i.jsxs("article",{className:"bg-white rounded-2xl border border-slate-200 p-7",children:[i.jsxs("div",{className:"flex items-center justify-between mb-5",children:[i.jsx(no,{className:"w-7 h-7 text-blue-600"}),i.jsxs("span",{className:"font-bold text-slate-300",children:["0",o+1]})]}),i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:e}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:n})]},e))})]})}),i.jsx("section",{className:"py-20",children:i.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-5",children:"Marketplace, outreach agency or hybrid platform?"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-10 max-w-4xl",children:"There is no universally correct model. Choose according to your team's experience, time, approval process and need for custom prospecting."}),i.jsx("div",{className:"grid lg:grid-cols-3 gap-7",children:zw.map(e=>i.jsxs("article",{className:"rounded-2xl border border-slate-200 p-8 shadow-sm",children:[i.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-5",children:e.title}),i.jsxs("p",{className:"text-slate-700 mb-4",children:[i.jsx("strong",{children:"Best fit:"})," ",e.best]}),i.jsxs("p",{className:"text-slate-700 mb-4",children:[i.jsx("strong",{children:"Strength:"})," ",e.strengths]}),i.jsxs("p",{className:"text-slate-700",children:[i.jsx("strong",{children:"Trade-off:"})," ",e.tradeoff]})]},e.title))})]})}),i.jsx("section",{className:"py-20 bg-blue-950 text-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-4xl font-bold mb-10",children:"A safer approval workflow"}),i.jsx("ol",{className:"grid md:grid-cols-2 gap-6",children:[[mo,"Define the target","Confirm that the destination page satisfies search intent and identify the audience, topic and market you need to reach."],[Wu,"Review publisher evidence","Compare topical coverage, traffic patterns, authority indicators, recent publishing and outbound-link behaviour."],[Za,"Approve context and terms","Review the proposed topic, anchor rationale, content responsibility, link attribute, disclosure, price and turnaround."],[Hu,"Verify the live delivery","Record the final URL, article context, destination, anchor, link attribute and check date without claiming guaranteed rankings."]].map(([e,n,o],s)=>i.jsxs("li",{className:"rounded-2xl bg-white/10 border border-white/15 p-7",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[i.jsx(e,{className:"w-7 h-7 text-blue-300"}),i.jsxs("span",{className:"text-sm font-bold text-blue-300",children:["STEP ",s+1]})]}),i.jsx("h3",{className:"text-xl font-bold mb-3",children:n}),i.jsx("p",{className:"text-slate-300 leading-relaxed",children:o})]},n))})]})}),i.jsx("section",{className:"py-20 bg-slate-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-8",children:"Questions to ask before placing an order"}),i.jsx("div",{className:"space-y-5",children:Ew.map(([e,n])=>i.jsxs("article",{className:"bg-white border border-slate-200 rounded-2xl p-7",children:[i.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:e}),i.jsx("p",{className:"text-slate-600 leading-relaxed",children:n})]},e))})]})}),i.jsx("section",{className:"py-20",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-5",children:"How Guest Post Platform fits this framework"}),i.jsx("p",{className:"text-lg text-slate-700 leading-relaxed mb-5",children:"Our marketplace is designed to help agencies and brands browse niche-relevant opportunities and compare available publisher information. Buyers can request managed help with selection, content coordination and outreach when a catalogue alone is not enough."}),i.jsxs("p",{className:"text-slate-700 leading-relaxed mb-8",children:["Availability, metrics and publisher terms can change, so every order remains subject to confirmation and editorial approval. We do not guarantee indexing, traffic or rankings. Explore the ",i.jsx(_,{to:"/buy-guest-posts",className:"text-blue-700 font-semibold hover:underline",children:"guest post marketplace"}),", read the ",i.jsx(_,{to:"/guest-post-pricing-guide-seo-agencies",className:"text-blue-700 font-semibold hover:underline",children:"pricing guide"}),", or ask for help matching opportunities to your campaign."]}),i.jsx(_,{to:"/contact",children:i.jsxs(gt,{size:"lg",children:["Discuss your campaign ",i.jsx(Wt,{className:"ml-2 w-5 h-5"})]})})]})})]}),i.jsx(ye,{})]}),Rw=()=>i.jsx("a",{href:"https://wa.me/923025820230",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp Chat",className:"fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center",children:i.jsx(y6,{className:"w-6 h-6 md:w-7 md:h-7"})});function $w(){const e=window.location.hostname==="localhost"&&window.location.pathname.startsWith("/market")?"/market":"/";return i.jsxs(Og,{basename:e,children:[i.jsx(D8,{}),i.jsx(Xg,{}),i.jsxs(gg,{children:[i.jsx(ie,{path:"/",element:i.jsx(uw,{})}),i.jsx(ie,{path:"/buy-guest-posts",element:i.jsx(mw,{})}),i.jsx(ie,{path:"/blogger-outreach",element:i.jsx(dw,{})}),i.jsx(ie,{path:"/link-insertion",element:i.jsx(hw,{})}),i.jsx(ie,{path:"/pricing",element:i.jsx(pw,{})}),i.jsx(ie,{path:"/submit-guest-post",element:i.jsx(fw,{})}),i.jsx(ie,{path:"/about",element:i.jsx(gw,{})}),i.jsx(ie,{path:"/contact",element:i.jsx(yw,{})}),i.jsx(ie,{path:"/blog",element:i.jsx(Tw,{})}),i.jsx(ie,{path:"/blog/:slug",element:i.jsx(K0,{})}),Ps.map(n=>i.jsx(ie,{path:`/${n.slug}`,element:i.jsx(K0,{slug:n.slug})},n.slug)),i.jsx(ie,{path:"/privacy-policy",element:i.jsx(v0,{policy:"privacy-policy"})}),i.jsx(ie,{path:"/terms-of-services",element:i.jsx(v0,{policy:"terms-of-services"})}),i.jsx(ie,{path:"/case-study",element:i.jsx(Sw,{})}),i.jsx(ie,{path:"/best-guest-post-platforms",element:i.jsx(Mw,{})}),i.jsx(ie,{path:"/:slug",element:i.jsx(Nw,{})})]}),i.jsx(Rw,{}),i.jsx(S6,{})]})}Kf.createRoot(document.getElementById("root")).render(i.jsx($w,{}));
