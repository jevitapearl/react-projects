function $v(l,o){for(var u=0;u<o.length;u++){const c=o[u];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in l)){const d=Object.getOwnPropertyDescriptor(c,f);d&&Object.defineProperty(l,f,d.get?d:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=u(f);fetch(f.href,d)}})();function Wv(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Pc={exports:{}},Br={};var dm;function Iv(){if(dm)return Br;dm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:c,key:h,ref:f!==void 0?f:null,props:d}}return Br.Fragment=o,Br.jsx=u,Br.jsxs=u,Br}var hm;function eb(){return hm||(hm=1,Pc.exports=Iv()),Pc.exports}var G=eb(),Fc={exports:{}},ye={};var mm;function tb(){if(mm)return ye;mm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,X={};function P(x,L,K){this.props=x,this.context=L,this.refs=X,this.updater=K||q}P.prototype.isReactComponent={},P.prototype.setState=function(x,L){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,L,"setState")},P.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Z(){}Z.prototype=P.prototype;function $(x,L,K){this.props=x,this.context=L,this.refs=X,this.updater=K||q}var ve=$.prototype=new Z;ve.constructor=$,_(ve,P.prototype),ve.isPureReactComponent=!0;var me=Array.isArray;function be(){}var M={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function fe(x,L,K){var I=K.ref;return{$$typeof:l,type:x,key:L,ref:I!==void 0?I:null,props:K}}function Be(x,L){return fe(x.type,L,x.props)}function De(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Le(x){var L={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(K){return L[K]})}var yt=/\/+/g;function Xe(x,L){return typeof x=="object"&&x!==null&&x.key!=null?Le(""+x.key):L.toString(36)}function Oe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(be,be):(x.status="pending",x.then(function(L){x.status==="pending"&&(x.status="fulfilled",x.value=L)},function(L){x.status==="pending"&&(x.status="rejected",x.reason=L)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,L,K,I,ce){var ge=typeof x;(ge==="undefined"||ge==="boolean")&&(x=null);var Ae=!1;if(x===null)Ae=!0;else switch(ge){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(x.$$typeof){case l:case o:Ae=!0;break;case O:return Ae=x._init,N(Ae(x._payload),L,K,I,ce)}}if(Ae)return ce=ce(x),Ae=I===""?"."+Xe(x,0):I,me(ce)?(K="",Ae!=null&&(K=Ae.replace(yt,"$&/")+"/"),N(ce,L,K,"",function(wa){return wa})):ce!=null&&(De(ce)&&(ce=Be(ce,K+(ce.key==null||x&&x.key===ce.key?"":(""+ce.key).replace(yt,"$&/")+"/")+Ae)),L.push(ce)),1;Ae=0;var ot=I===""?".":I+":";if(me(x))for(var et=0;et<x.length;et++)I=x[et],ge=ot+Xe(I,et),Ae+=N(I,L,K,ge,ce);else if(et=C(x),typeof et=="function")for(x=et.call(x),et=0;!(I=x.next()).done;)I=I.value,ge=ot+Xe(I,et++),Ae+=N(I,L,K,ge,ce);else if(ge==="object"){if(typeof x.then=="function")return N(Oe(x),L,K,I,ce);throw L=String(x),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function V(x,L,K){if(x==null)return x;var I=[],ce=0;return N(x,I,"","",function(ge){return L.call(K,ge,ce++)}),I}function F(x){if(x._status===-1){var L=x._result;L=L(),L.then(function(K){(x._status===0||x._status===-1)&&(x._status=1,x._result=K)},function(K){(x._status===0||x._status===-1)&&(x._status=2,x._result=K)}),x._status===-1&&(x._status=0,x._result=L)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},xe={map:V,forEach:function(x,L,K){V(x,function(){L.apply(this,arguments)},K)},count:function(x){var L=0;return V(x,function(){L++}),L},toArray:function(x){return V(x,function(L){return L})||[]},only:function(x){if(!De(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ye.Activity=S,ye.Children=xe,ye.Component=P,ye.Fragment=u,ye.Profiler=f,ye.PureComponent=$,ye.StrictMode=c,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,ye.__COMPILER_RUNTIME={__proto__:null,c:function(x){return M.H.useMemoCache(x)}},ye.cache=function(x){return function(){return x.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(x,L,K){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var I=_({},x.props),ce=x.key;if(L!=null)for(ge in L.key!==void 0&&(ce=""+L.key),L)!ne.call(L,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&L.ref===void 0||(I[ge]=L[ge]);var ge=arguments.length-2;if(ge===1)I.children=K;else if(1<ge){for(var Ae=Array(ge),ot=0;ot<ge;ot++)Ae[ot]=arguments[ot+2];I.children=Ae}return fe(x.type,ce,I)},ye.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},ye.createElement=function(x,L,K){var I,ce={},ge=null;if(L!=null)for(I in L.key!==void 0&&(ge=""+L.key),L)ne.call(L,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ce[I]=L[I]);var Ae=arguments.length-2;if(Ae===1)ce.children=K;else if(1<Ae){for(var ot=Array(Ae),et=0;et<Ae;et++)ot[et]=arguments[et+2];ce.children=ot}if(x&&x.defaultProps)for(I in Ae=x.defaultProps,Ae)ce[I]===void 0&&(ce[I]=Ae[I]);return fe(x,ge,ce)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(x){return{$$typeof:b,render:x}},ye.isValidElement=De,ye.lazy=function(x){return{$$typeof:O,_payload:{_status:-1,_result:x},_init:F}},ye.memo=function(x,L){return{$$typeof:p,type:x,compare:L===void 0?null:L}},ye.startTransition=function(x){var L=M.T,K={};M.T=K;try{var I=x(),ce=M.S;ce!==null&&ce(K,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(be,pe)}catch(ge){pe(ge)}finally{L!==null&&K.types!==null&&(L.types=K.types),M.T=L}},ye.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},ye.use=function(x){return M.H.use(x)},ye.useActionState=function(x,L,K){return M.H.useActionState(x,L,K)},ye.useCallback=function(x,L){return M.H.useCallback(x,L)},ye.useContext=function(x){return M.H.useContext(x)},ye.useDebugValue=function(){},ye.useDeferredValue=function(x,L){return M.H.useDeferredValue(x,L)},ye.useEffect=function(x,L){return M.H.useEffect(x,L)},ye.useEffectEvent=function(x){return M.H.useEffectEvent(x)},ye.useId=function(){return M.H.useId()},ye.useImperativeHandle=function(x,L,K){return M.H.useImperativeHandle(x,L,K)},ye.useInsertionEffect=function(x,L){return M.H.useInsertionEffect(x,L)},ye.useLayoutEffect=function(x,L){return M.H.useLayoutEffect(x,L)},ye.useMemo=function(x,L){return M.H.useMemo(x,L)},ye.useOptimistic=function(x,L){return M.H.useOptimistic(x,L)},ye.useReducer=function(x,L,K){return M.H.useReducer(x,L,K)},ye.useRef=function(x){return M.H.useRef(x)},ye.useState=function(x){return M.H.useState(x)},ye.useSyncExternalStore=function(x,L,K){return M.H.useSyncExternalStore(x,L,K)},ye.useTransition=function(){return M.H.useTransition()},ye.version="19.2.3",ye}var pm;function hs(){return pm||(pm=1,Fc.exports=tb()),Fc.exports}var j=hs();const dt=Wv(j),nb=$v({__proto__:null,default:dt},[j]);var $c={exports:{}},Yr={},Wc={exports:{}},Ic={};var vm;function ab(){return vm||(vm=1,(function(l){function o(N,V){var F=N.length;N.push(V);e:for(;0<F;){var pe=F-1>>>1,xe=N[pe];if(0<f(xe,V))N[pe]=V,N[F]=xe,F=pe;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var V=N[0],F=N.pop();if(F!==V){N[0]=F;e:for(var pe=0,xe=N.length,x=xe>>>1;pe<x;){var L=2*(pe+1)-1,K=N[L],I=L+1,ce=N[I];if(0>f(K,F))I<xe&&0>f(ce,K)?(N[pe]=ce,N[I]=F,pe=I):(N[pe]=K,N[L]=F,pe=L);else if(I<xe&&0>f(ce,F))N[pe]=ce,N[I]=F,pe=I;else break e}}return V}function f(N,V){var F=N.sortIndex-V.sortIndex;return F!==0?F:N.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var v=[],p=[],O=1,S=null,w=3,C=!1,q=!1,_=!1,X=!1,P=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function ve(N){for(var V=u(p);V!==null;){if(V.callback===null)c(p);else if(V.startTime<=N)c(p),V.sortIndex=V.expirationTime,o(v,V);else break;V=u(p)}}function me(N){if(_=!1,ve(N),!q)if(u(v)!==null)q=!0,be||(be=!0,Le());else{var V=u(p);V!==null&&Oe(me,V.startTime-N)}}var be=!1,M=-1,ne=5,fe=-1;function Be(){return X?!0:!(l.unstable_now()-fe<ne)}function De(){if(X=!1,be){var N=l.unstable_now();fe=N;var V=!0;try{e:{q=!1,_&&(_=!1,Z(M),M=-1),C=!0;var F=w;try{t:{for(ve(N),S=u(v);S!==null&&!(S.expirationTime>N&&Be());){var pe=S.callback;if(typeof pe=="function"){S.callback=null,w=S.priorityLevel;var xe=pe(S.expirationTime<=N);if(N=l.unstable_now(),typeof xe=="function"){S.callback=xe,ve(N),V=!0;break t}S===u(v)&&c(v),ve(N)}else c(v);S=u(v)}if(S!==null)V=!0;else{var x=u(p);x!==null&&Oe(me,x.startTime-N),V=!1}}break e}finally{S=null,w=F,C=!1}V=void 0}}finally{V?Le():be=!1}}}var Le;if(typeof $=="function")Le=function(){$(De)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Xe=yt.port2;yt.port1.onmessage=De,Le=function(){Xe.postMessage(null)}}else Le=function(){P(De,0)};function Oe(N,V){M=P(function(){N(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(N){switch(w){case 1:case 2:case 3:var V=3;break;default:V=w}var F=w;w=V;try{return N()}finally{w=F}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=w;w=N;try{return V()}finally{w=F}},l.unstable_scheduleCallback=function(N,V,F){var pe=l.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=F+xe,N={id:O++,callback:V,priorityLevel:N,startTime:F,expirationTime:xe,sortIndex:-1},F>pe?(N.sortIndex=F,o(p,N),u(v)===null&&N===u(p)&&(_?(Z(M),M=-1):_=!0,Oe(me,F-pe))):(N.sortIndex=xe,o(v,N),q||C||(q=!0,be||(be=!0,Le()))),N},l.unstable_shouldYield=Be,l.unstable_wrapCallback=function(N){var V=w;return function(){var F=w;w=V;try{return N.apply(this,arguments)}finally{w=F}}}})(Ic)),Ic}var bm;function lb(){return bm||(bm=1,Wc.exports=ab()),Wc.exports}var es={exports:{}},At={};var gm;function rb(){if(gm)return At;gm=1;var l=hs();function o(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)p+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(v,p,O){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:v,containerInfo:p,implementation:O}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,At.createPortal=function(v,p){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return d(v,p,null,O)},At.flushSync=function(v){var p=h.T,O=c.p;try{if(h.T=null,c.p=2,v)return v()}finally{h.T=p,c.p=O,c.d.f()}},At.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},At.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},At.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var O=p.as,S=b(O,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;O==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:C}):O==="script"&&c.d.X(v,{crossOrigin:S,integrity:w,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},At.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var O=b(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},At.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var O=p.as,S=b(O,p.crossOrigin);c.d.L(v,O,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},At.preloadModule=function(v,p){if(typeof v=="string")if(p){var O=b(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},At.requestFormReset=function(v){c.d.r(v)},At.unstable_batchedUpdates=function(v,p){return v(p)},At.useFormState=function(v,p,O){return h.H.useFormState(v,p,O)},At.useFormStatus=function(){return h.H.useHostTransitionStatus()},At.version="19.2.3",At}var ym;function l0(){if(ym)return es.exports;ym=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),es.exports=rb(),es.exports}var xm;function ib(){if(xm)return Yr;xm=1;var l=lb(),o=hs(),u=l0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return v(r),e;if(i===a)return v(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var s=!1,m=r.child;m;){if(m===n){s=!0,n=r,a=i;break}if(m===a){s=!0,a=r,n=i;break}m=m.sibling}if(!s){for(m=i.child;m;){if(m===n){s=!0,n=i,a=r;break}if(m===a){s=!0,a=i,n=r;break}m=m.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=De&&e[De]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case P:return"Profiler";case X:return"StrictMode";case me:return"Suspense";case be:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case $:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var Oe=Array.isArray,N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],xe=-1;function x(e){return{current:e}}function L(e){0>xe||(e.current=pe[xe],pe[xe]=null,xe--)}function K(e,t){xe++,pe[xe]=e.current,e.current=t}var I=x(null),ce=x(null),ge=x(null),Ae=x(null);function ot(e,t){switch(K(ge,t),K(ce,e),K(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jh(t),e=Hh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(I),K(I,e)}function et(){L(I),L(ce),L(ge)}function wa(e){e.memoizedState!==null&&K(Ae,e);var t=I.current,n=Hh(t,e.type);t!==n&&(K(ce,e),K(I,n))}function il(e){ce.current===e&&(L(I),L(ce)),Ae.current===e&&(L(Ae),Hr._currentValue=F)}var mt,wn;function On(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",wn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+wn}var Vl=!1;function fn(e,t){if(!e||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(H){var A=H}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(H){A=H}e.call(Y.prototype)}}else{try{throw Error()}catch(H){A=H}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(H){if(H&&A&&typeof H.stack=="string")return[H.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],m=i[1];if(s&&m){var y=s.split(`
`),R=m.split(`
`);for(r=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(a===y.length||r===R.length)for(a=y.length-1,r=R.length-1;1<=a&&0<=r&&y[a]!==R[r];)r--;for(;1<=a&&0<=r;a--,r--)if(y[a]!==R[r]){if(a!==1||r!==1)do if(a--,r--,0>r||y[a]!==R[r]){var k=`
`+y[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=r);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?On(n):""}function Lo(e,t){switch(e.tag){case 26:case 27:case 5:return On(e.type);case 16:return On("Lazy");case 13:return e.child!==t&&t!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return On("Activity");default:return""}}function li(e){try{var t="",n=null;do t+=Lo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ol=Object.prototype.hasOwnProperty,Kl=l.unstable_scheduleCallback,Jl=l.unstable_cancelCallback,ko=l.unstable_shouldYield,qo=l.unstable_requestPaint,ut=l.unstable_now,Ca=l.unstable_getCurrentPriorityLevel,Pl=l.unstable_ImmediatePriority,ul=l.unstable_UserBlockingPriority,Ut=l.unstable_NormalPriority,dn=l.unstable_LowPriority,Fl=l.unstable_IdlePriority,Bo=l.log,$l=l.unstable_setDisableYieldValue,Ua=null,tt=null;function hn(e){if(typeof Bo=="function"&&$l(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ua,e)}catch{}}var _t=Math.clz32?Math.clz32:ii,ri=Math.log,Yo=Math.LN2;function ii(e){return e>>>=0,e===0?32:31-(ri(e)/Yo|0)|0}var Cn=256,Na=262144,ta=4194304;function Un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ja(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~i,a!==0?r=Un(a):(s&=m,s!==0?r=Un(s):n||(n=m&~e,n!==0&&(r=Un(n))))):(m=a&~i,m!==0?r=Un(m):s!==0?r=Un(s):n||(n=a&~e,n!==0&&(r=Un(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function Ha(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function oi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function La(){var e=ta;return ta<<=1,(ta&62914560)===0&&(ta=4194304),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function aa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xo(e,t,n,a,r,i){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,R=e.hiddenUpdates;for(n=s&~n;0<n;){var k=31-_t(n),Y=1<<k;m[k]=0,y[k]=-1;var A=R[k];if(A!==null)for(R[k]=null,k=0;k<A.length;k++){var H=A[k];H!==null&&(H.lane&=-536870913)}n&=~Y}a!==0&&ui(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function ui(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-_t(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function g(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-_t(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function z(e,t){var n=t&-t;return n=(n&42)!==0?1:U(n),(n&(e.suspendedLanes|t))!==0?0:n}function U(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Q(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function J(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:rm(e.type))}function ie(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var ee=Math.random().toString(36).slice(2),W="__reactFiber$"+ee,te="__reactProps$"+ee,re="__reactContainer$"+ee,de="__reactEvents$"+ee,oe="__reactListeners$"+ee,He="__reactHandles$"+ee,we="__reactResources$"+ee,nt="__reactMarker$"+ee;function at(e){delete e[W],delete e[te],delete e[de],delete e[oe],delete e[He]}function lt(e){var t=e[W];if(t)return t;for(var n=e.parentNode;n;){if(t=n[re]||n[W]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gh(e);e!==null;){if(n=e[W])return n;e=Gh(e)}return t}e=n,n=e.parentNode}return null}function Ce(e){if(e=e[W]||e[re]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Nt(e){var t=e[we];return t||(t=e[we]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[nt]=!0}var mn=new Set,Yt={};function pn(e,t){$t(e,t),$t(e+"Capture",t)}function $t(e,t){for(Yt[e]=t,e=0;e<t.length;e++)mn.add(t[e])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ka={},qa={};function Ue(e){return ol.call(qa,e)?!0:ol.call(ka,e)?!1:Nn.test(e)?qa[e]=!0:(ka[e]=!0,!1)}function ct(e,t,n){if(Ue(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function vn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Tt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ba(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ci(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wl(e){if(!e._valueTracker){var t=Ba(e)?"checked":"value";e._valueTracker=ci(e,t,""+e[t])}}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ba(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z0=/[\n"\\]/g;function Wt(e){return e.replace(Z0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Go(e,t,n,a,r,i,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ne(t)):e.value!==""+Ne(t)&&(e.value=""+Ne(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Qo(e,s,Ne(t)):n!=null?Qo(e,s,Ne(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ne(m):e.removeAttribute("name")}function Rs(e,t,n,a,r,i,s,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Wl(e);return}n=n!=null?""+Ne(n):"",t=t!=null?""+Ne(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Wl(e)}function Qo(e,t,n){t==="number"&&si(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function cl(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ne(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function _s(e,t,n){if(t!=null&&(t=""+Ne(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ne(n):""}function As(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Oe(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ne(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Wl(e)}function sl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||V0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cs(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&ws(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&ws(e,i,t[i])}function Zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var K0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return J0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jn(){}var Vo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,dl=null;function Us(e){var t=Ce(e);if(t&&(e=t.stateNode)){var n=e[te]||null;e:switch(e=t.stateNode,t.type){case"input":if(Go(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[te]||null;if(!r)throw Error(c(90));Go(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ds(a)}break e;case"textarea":_s(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&cl(e,!!n.multiple,t,!1)}}}var Jo=!1;function Ns(e,t,n){if(Jo)return e(t,n);Jo=!0;try{var a=e(t);return a}finally{if(Jo=!1,(fl!==null||dl!==null)&&(Wi(),fl&&(t=fl,e=dl,dl=fl=null,Us(t),e)))for(t=0;t<e.length;t++)Us(e[t])}}function Il(e,t){var n=e.stateNode;if(n===null)return null;var a=n[te]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(Hn)try{var er={};Object.defineProperty(er,"passive",{get:function(){Po=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Po=!1}var la=null,Fo=null,di=null;function js(){if(di)return di;var e,t=Fo,n=t.length,a,r="value"in la?la.value:la.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===r[i-a];a++);return di=r.slice(e,1<a?1-a:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function Hs(){return!1}function jt(e){function t(n,a,r,i,s){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mi:Hs,this.isPropagationStopped=Hs,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=jt(Ya),tr=S({},Ya,{view:0,detail:0}),P0=jt(tr),$o,Wo,nr,vi=S({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?($o=e.screenX-nr.screenX,Wo=e.screenY-nr.screenY):Wo=$o=0,nr=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),Ls=jt(vi),F0=S({},vi,{dataTransfer:0}),$0=jt(F0),W0=S({},tr,{relatedTarget:0}),Io=jt(W0),I0=S({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=jt(I0),tp=S({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),np=jt(tp),ap=S({},Ya,{data:0}),ks=jt(ap),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function eu(){return op}var up=S({},tr,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cp=jt(up),sp=S({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=jt(sp),fp=S({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),dp=jt(fp),hp=S({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=jt(hp),pp=S({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vp=jt(pp),bp=S({},Ya,{newState:0,oldState:0}),gp=jt(bp),yp=[9,13,27,32],tu=Hn&&"CompositionEvent"in window,ar=null;Hn&&"documentMode"in document&&(ar=document.documentMode);var xp=Hn&&"TextEvent"in window&&!ar,Bs=Hn&&(!tu||ar&&8<ar&&11>=ar),Ys=" ",Xs=!1;function Gs(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hl=!1;function Sp(e,t){switch(e){case"compositionend":return Qs(t);case"keypress":return t.which!==32?null:(Xs=!0,Ys);case"textInput":return e=t.data,e===Ys&&Xs?null:e;default:return null}}function Ep(e,t){if(hl)return e==="compositionend"||!tu&&Gs(e,t)?(e=js(),di=Fo=la=null,hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Op[e.type]:t==="textarea"}function Vs(e,t,n,a){fl?dl?dl.push(a):dl=[a]:fl=a,t=ro(t,"onChange"),0<t.length&&(n=new pi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var lr=null,rr=null;function Tp(e){_h(e,0)}function bi(e){var t=Et(e);if(Ds(t))return e}function Ks(e,t){if(e==="change")return t}var Js=!1;if(Hn){var nu;if(Hn){var au="oninput"in document;if(!au){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),au=typeof Ps.oninput=="function"}nu=au}else nu=!1;Js=nu&&(!document.documentMode||9<document.documentMode)}function Fs(){lr&&(lr.detachEvent("onpropertychange",$s),rr=lr=null)}function $s(e){if(e.propertyName==="value"&&bi(rr)){var t=[];Vs(t,rr,e,Ko(e)),Ns(Tp,t)}}function zp(e,t,n){e==="focusin"?(Fs(),lr=t,rr=n,lr.attachEvent("onpropertychange",$s)):e==="focusout"&&Fs()}function Mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(rr)}function Dp(e,t){if(e==="click")return bi(t)}function Rp(e,t){if(e==="input"||e==="change")return bi(t)}function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:_p;function ir(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ol.call(t,r)||!Xt(e[r],t[r]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=Ws(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ws(n)}}function ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=si(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=si(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ap=Hn&&"documentMode"in document&&11>=document.documentMode,ml=null,ru=null,or=null,iu=!1;function nf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||ml==null||ml!==si(a)||(a=ml,"selectionStart"in a&&lu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),or&&ir(or,a)||(or=a,a=ro(ru,"onSelect"),0<a.length&&(t=new pi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ml)))}function Xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},ou={},af={};Hn&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Ga(e){if(ou[e])return ou[e];if(!pl[e])return e;var t=pl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in af)return ou[e]=t[n];return e}var lf=Ga("animationend"),rf=Ga("animationiteration"),of=Ga("animationstart"),wp=Ga("transitionrun"),Cp=Ga("transitionstart"),Up=Ga("transitioncancel"),uf=Ga("transitionend"),cf=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function bn(e,t){cf.set(e,t),pn(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],vl=0,cu=0;function yi(){for(var e=vl,t=cu=vl=0;t<e;){var n=It[t];It[t++]=null;var a=It[t];It[t++]=null;var r=It[t];It[t++]=null;var i=It[t];if(It[t++]=null,a!==null&&r!==null){var s=a.pending;s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r}i!==0&&sf(n,r,i)}}function xi(e,t,n,a){It[vl++]=e,It[vl++]=t,It[vl++]=n,It[vl++]=a,cu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function su(e,t,n,a){return xi(e,t,n,a),Si(e)}function Qa(e,t){return xi(e,null,null,t),Si(e)}function sf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-_t(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Si(e){if(50<_r)throw _r=0,yc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bl={};function Np(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,a){return new Np(e,t,n,a)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ff(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,n,a,r,i){var s=0;if(a=e,typeof e=="function")fu(e)&&(s=1);else if(typeof e=="string")s=qv(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Gt(31,n,t,r),e.elementType=fe,e.lanes=i,e;case _:return Za(n.children,r,i,t);case X:s=8,r|=24;break;case P:return e=Gt(12,n,t,r|2),e.elementType=P,e.lanes=i,e;case me:return e=Gt(13,n,t,r),e.elementType=me,e.lanes=i,e;case be:return e=Gt(19,n,t,r),e.elementType=be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:s=10;break e;case Z:s=9;break e;case ve:s=11;break e;case M:s=14;break e;case ne:s=16,a=null;break e}s=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Gt(s,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function Za(e,t,n,a){return e=Gt(7,e,a,t),e.lanes=n,e}function du(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function df(e){var t=Gt(18,null,null,0);return t.stateNode=e,t}function hu(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hf=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=hf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:li(t)},hf.set(e,t),t)}return{value:e,source:t,stack:li(t)}}var gl=[],yl=0,Oi=null,ur=0,tn=[],nn=0,ra=null,Tn=1,zn="";function kn(e,t){gl[yl++]=ur,gl[yl++]=Oi,Oi=e,ur=t}function mf(e,t,n){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=ra,ra=e;var a=Tn;e=zn;var r=32-_t(a)-1;a&=~(1<<r),n+=1;var i=32-_t(t)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Tn=1<<32-_t(t)+r|n<<r|a,zn=i+e}else Tn=1<<i|n<<r|a,zn=e}function mu(e){e.return!==null&&(kn(e,1),mf(e,1,0))}function pu(e){for(;e===Oi;)Oi=gl[--yl],gl[yl]=null,ur=gl[--yl],gl[yl]=null;for(;e===ra;)ra=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null,Tn=tn[--nn],tn[nn]=null}function pf(e,t){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=ra,Tn=t.id,zn=t.overflow,ra=e}var zt=null,Pe=null,je=!1,ia=null,an=!1,vu=Error(c(519));function oa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cr(en(t,e)),vu}function vf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[W]=e,t[te]=a,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<wr.length;n++)Me(wr[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Rs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),As(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Uh(t.textContent,n)?(a.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),a.onScroll!=null&&Me("scroll",t),a.onScrollEnd!=null&&Me("scrollend",t),a.onClick!=null&&(t.onclick=jn),t=!0):t=!1,t||oa(e,!0)}function bf(e){for(zt=e.return;zt;)switch(zt.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:zt=zt.return}}function xl(e){if(e!==zt)return!1;if(!je)return bf(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nc(e.type,e.memoizedProps)),n=!n),n&&Pe&&oa(e),bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Pe=Xh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Pe=Xh(e)}else t===27?(t=Pe,Sa(e.type)?(e=qc,qc=null,Pe=e):Pe=t):Pe=zt?rn(e.stateNode.nextSibling):null;return!0}function Va(){Pe=zt=null,je=!1}function bu(){var e=ia;return e!==null&&(qt===null?qt=e:qt.push.apply(qt,e),ia=null),e}function cr(e){ia===null?ia=[e]:ia.push(e)}var gu=x(null),Ka=null,qn=null;function ua(e,t,n){K(gu,t._currentValue),t._currentValue=n}function Bn(e){e._currentValue=gu.current,L(gu)}function yu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function xu(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var s=r.child;i=i.firstContext;e:for(;i!==null;){var m=i;i=r;for(var y=0;y<t.length;y++)if(m.context===t[y]){i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),yu(i.return,n,e),a||(s=null);break e}i=m.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(c(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),yu(s,n,e),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function Sl(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var m=r.type;Xt(r.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(r===Ae.current){if(s=r.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Hr):e=[Hr])}r=r.return}e!==null&&xu(t,e,n,a),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!Xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mt(e){return gf(Ka,e)}function zi(e,t){return Ka===null&&Ja(e),gf(e,t)}function gf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qn===null){if(e===null)throw Error(c(308));qn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qn=qn.next=t;return n}var jp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hp=l.unstable_scheduleCallback,Lp=l.unstable_NormalPriority,pt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new jp,data:new Map,refCount:0}}function sr(e){e.refCount--,e.refCount===0&&Hp(Lp,function(){e.controller.abort()})}var fr=null,Eu=0,El=0,Ol=null;function kp(e,t){if(fr===null){var n=fr=[];Eu=0,El=zc(),Ol={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Eu++,t.then(yf,yf),t}function yf(){if(--Eu===0&&fr!==null){Ol!==null&&(Ol.status="fulfilled");var e=fr;fr=null,El=0,Ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var xf=N.S;N.S=function(e,t){ah=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kp(e,t),xf!==null&&xf(e,t)};var Pa=x(null);function Ou(){var e=Pa.current;return e!==null?e:Je.pooledCache}function Mi(e,t){t===null?K(Pa,Pa.current):K(Pa,t.pool)}function Sf(){var e=Ou();return e===null?null:{parent:pt._currentValue,pool:e}}var Tl=Error(c(460)),Tu=Error(c(474)),Di=Error(c(542)),Ri={then:function(){}};function Ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Of(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jn,jn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e;default:if(typeof t.status=="string")t.then(jn,jn);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e}throw $a=t,Tl}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?($a=n,Tl):n}}var $a=null;function Tf(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function zf(e){if(e===Tl||e===Di)throw Error(c(483))}var zl=null,dr=0;function _i(e){var t=dr;return dr+=1,zl===null&&(zl=[]),Of(zl,e,t)}function hr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ai(e,t){throw t.$$typeof===w?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mf(e){function t(T,E){if(e){var D=T.deletions;D===null?(T.deletions=[E],T.flags|=16):D.push(E)}}function n(T,E){if(!e)return null;for(;E!==null;)t(T,E),E=E.sibling;return null}function a(T){for(var E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function r(T,E){return T=Ln(T,E),T.index=0,T.sibling=null,T}function i(T,E,D){return T.index=D,e?(D=T.alternate,D!==null?(D=D.index,D<E?(T.flags|=67108866,E):D):(T.flags|=67108866,E)):(T.flags|=1048576,E)}function s(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,E,D,B){return E===null||E.tag!==6?(E=du(D,T.mode,B),E.return=T,E):(E=r(E,D),E.return=T,E)}function y(T,E,D,B){var se=D.type;return se===_?k(T,E,D.props.children,B,D.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&Fa(se)===E.type)?(E=r(E,D.props),hr(E,D),E.return=T,E):(E=Ei(D.type,D.key,D.props,null,T.mode,B),hr(E,D),E.return=T,E)}function R(T,E,D,B){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=hu(D,T.mode,B),E.return=T,E):(E=r(E,D.children||[]),E.return=T,E)}function k(T,E,D,B,se){return E===null||E.tag!==7?(E=Za(D,T.mode,B,se),E.return=T,E):(E=r(E,D),E.return=T,E)}function Y(T,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=du(""+E,T.mode,D),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return D=Ei(E.type,E.key,E.props,null,T.mode,D),hr(D,E),D.return=T,D;case q:return E=hu(E,T.mode,D),E.return=T,E;case ne:return E=Fa(E),Y(T,E,D)}if(Oe(E)||Le(E))return E=Za(E,T.mode,D,null),E.return=T,E;if(typeof E.then=="function")return Y(T,_i(E),D);if(E.$$typeof===$)return Y(T,zi(T,E),D);Ai(T,E)}return null}function A(T,E,D,B){var se=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:m(T,E,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return D.key===se?y(T,E,D,B):null;case q:return D.key===se?R(T,E,D,B):null;case ne:return D=Fa(D),A(T,E,D,B)}if(Oe(D)||Le(D))return se!==null?null:k(T,E,D,B,null);if(typeof D.then=="function")return A(T,E,_i(D),B);if(D.$$typeof===$)return A(T,E,zi(T,D),B);Ai(T,D)}return null}function H(T,E,D,B,se){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return T=T.get(D)||null,m(E,T,""+B,se);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case C:return T=T.get(B.key===null?D:B.key)||null,y(E,T,B,se);case q:return T=T.get(B.key===null?D:B.key)||null,R(E,T,B,se);case ne:return B=Fa(B),H(T,E,D,B,se)}if(Oe(B)||Le(B))return T=T.get(D)||null,k(E,T,B,se,null);if(typeof B.then=="function")return H(T,E,D,_i(B),se);if(B.$$typeof===$)return H(T,E,D,zi(E,B),se);Ai(E,B)}return null}function ae(T,E,D,B){for(var se=null,ke=null,le=E,Ee=E=0,_e=null;le!==null&&Ee<D.length;Ee++){le.index>Ee?(_e=le,le=null):_e=le.sibling;var qe=A(T,le,D[Ee],B);if(qe===null){le===null&&(le=_e);break}e&&le&&qe.alternate===null&&t(T,le),E=i(qe,E,Ee),ke===null?se=qe:ke.sibling=qe,ke=qe,le=_e}if(Ee===D.length)return n(T,le),je&&kn(T,Ee),se;if(le===null){for(;Ee<D.length;Ee++)le=Y(T,D[Ee],B),le!==null&&(E=i(le,E,Ee),ke===null?se=le:ke.sibling=le,ke=le);return je&&kn(T,Ee),se}for(le=a(le);Ee<D.length;Ee++)_e=H(le,T,Ee,D[Ee],B),_e!==null&&(e&&_e.alternate!==null&&le.delete(_e.key===null?Ee:_e.key),E=i(_e,E,Ee),ke===null?se=_e:ke.sibling=_e,ke=_e);return e&&le.forEach(function(Ma){return t(T,Ma)}),je&&kn(T,Ee),se}function he(T,E,D,B){if(D==null)throw Error(c(151));for(var se=null,ke=null,le=E,Ee=E=0,_e=null,qe=D.next();le!==null&&!qe.done;Ee++,qe=D.next()){le.index>Ee?(_e=le,le=null):_e=le.sibling;var Ma=A(T,le,qe.value,B);if(Ma===null){le===null&&(le=_e);break}e&&le&&Ma.alternate===null&&t(T,le),E=i(Ma,E,Ee),ke===null?se=Ma:ke.sibling=Ma,ke=Ma,le=_e}if(qe.done)return n(T,le),je&&kn(T,Ee),se;if(le===null){for(;!qe.done;Ee++,qe=D.next())qe=Y(T,qe.value,B),qe!==null&&(E=i(qe,E,Ee),ke===null?se=qe:ke.sibling=qe,ke=qe);return je&&kn(T,Ee),se}for(le=a(le);!qe.done;Ee++,qe=D.next())qe=H(le,T,Ee,qe.value,B),qe!==null&&(e&&qe.alternate!==null&&le.delete(qe.key===null?Ee:qe.key),E=i(qe,E,Ee),ke===null?se=qe:ke.sibling=qe,ke=qe);return e&&le.forEach(function(Fv){return t(T,Fv)}),je&&kn(T,Ee),se}function Ke(T,E,D,B){if(typeof D=="object"&&D!==null&&D.type===_&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case C:e:{for(var se=D.key;E!==null;){if(E.key===se){if(se=D.type,se===_){if(E.tag===7){n(T,E.sibling),B=r(E,D.props.children),B.return=T,T=B;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&Fa(se)===E.type){n(T,E.sibling),B=r(E,D.props),hr(B,D),B.return=T,T=B;break e}n(T,E);break}else t(T,E);E=E.sibling}D.type===_?(B=Za(D.props.children,T.mode,B,D.key),B.return=T,T=B):(B=Ei(D.type,D.key,D.props,null,T.mode,B),hr(B,D),B.return=T,T=B)}return s(T);case q:e:{for(se=D.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){n(T,E.sibling),B=r(E,D.children||[]),B.return=T,T=B;break e}else{n(T,E);break}else t(T,E);E=E.sibling}B=hu(D,T.mode,B),B.return=T,T=B}return s(T);case ne:return D=Fa(D),Ke(T,E,D,B)}if(Oe(D))return ae(T,E,D,B);if(Le(D)){if(se=Le(D),typeof se!="function")throw Error(c(150));return D=se.call(D),he(T,E,D,B)}if(typeof D.then=="function")return Ke(T,E,_i(D),B);if(D.$$typeof===$)return Ke(T,E,zi(T,D),B);Ai(T,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(n(T,E.sibling),B=r(E,D),B.return=T,T=B):(n(T,E),B=du(D,T.mode,B),B.return=T,T=B),s(T)):n(T,E)}return function(T,E,D,B){try{dr=0;var se=Ke(T,E,D,B);return zl=null,se}catch(le){if(le===Tl||le===Di)throw le;var ke=Gt(29,le,null,T.mode);return ke.lanes=B,ke.return=T,ke}}}var Wa=Mf(!0),Df=Mf(!1),ca=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ye&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Si(e),sf(e,null,n),t}return xi(e,a,t,n),Si(e)}function mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,g(e,n)}}function Du(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ru=!1;function pr(){if(Ru){var e=Ol;if(e!==null)throw e}}function vr(e,t,n,a){Ru=!1;var r=e.updateQueue;ca=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var y=m,R=y.next;y.next=null,s===null?i=R:s.next=R,s=y;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==s&&(m===null?k.firstBaseUpdate=R:m.next=R,k.lastBaseUpdate=y))}if(i!==null){var Y=r.baseState;s=0,k=R=y=null,m=i;do{var A=m.lane&-536870913,H=A!==m.lane;if(H?(Re&A)===A:(a&A)===A){A!==0&&A===El&&(Ru=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ae=e,he=m;A=t;var Ke=n;switch(he.tag){case 1:if(ae=he.payload,typeof ae=="function"){Y=ae.call(Ke,Y,A);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=he.payload,A=typeof ae=="function"?ae.call(Ke,Y,A):ae,A==null)break e;Y=S({},Y,A);break e;case 2:ca=!0}}A=m.callback,A!==null&&(e.flags|=64,H&&(e.flags|=8192),H=r.callbacks,H===null?r.callbacks=[A]:H.push(A))}else H={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(R=k=H,y=Y):k=k.next=H,s|=A;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;H=m,m=H.next,H.next=null,r.lastBaseUpdate=H,r.shared.pending=null}}while(!0);k===null&&(y=Y),r.baseState=y,r.firstBaseUpdate=R,r.lastBaseUpdate=k,i===null&&(r.shared.lanes=0),va|=s,e.lanes=s,e.memoizedState=Y}}function Rf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function _f(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var Ml=x(null),wi=x(0);function Af(e,t){e=Pn,K(wi,e),K(Ml,t),Pn=e|t.baseLanes}function _u(){K(wi,Pn),K(Ml,Ml.current)}function Au(){Pn=wi.current,L(Ml),L(wi)}var Qt=x(null),ln=null;function da(e){var t=e.alternate;K(st,st.current&1),K(Qt,e),ln===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(ln=e)}function wu(e){K(st,st.current),K(Qt,e),ln===null&&(ln=e)}function wf(e){e.tag===22?(K(st,st.current),K(Qt,e),ln===null&&(ln=e)):ha()}function ha(){K(st,st.current),K(Qt,Qt.current)}function Zt(e){L(Qt),ln===e&&(ln=null),L(st)}var st=x(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lc(n)||kc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yn=0,Se=null,Ze=null,vt=null,Ui=!1,Dl=!1,Ia=!1,Ni=0,br=0,Rl=null,Bp=0;function rt(){throw Error(c(321))}function Cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function Uu(e,t,n,a,r,i){return Yn=i,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?md:Ju,Ia=!1,i=n(a,r),Ia=!1,Dl&&(i=Uf(t,n,a,r)),Cf(e),i}function Cf(e){N.H=xr;var t=Ze!==null&&Ze.next!==null;if(Yn=0,vt=Ze=Se=null,Ui=!1,br=0,Rl=null,t)throw Error(c(300));e===null||bt||(e=e.dependencies,e!==null&&Ti(e)&&(bt=!0))}function Uf(e,t,n,a){Se=e;var r=0;do{if(Dl&&(Rl=null),br=0,Dl=!1,25<=r)throw Error(c(301));if(r+=1,vt=Ze=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=pd,i=t(n,a)}while(Dl);return i}function Yp(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?gr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Se.flags|=1024),t}function Nu(){var e=Ni!==0;return Ni=0,e}function ju(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hu(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}Yn=0,vt=Ze=Se=null,Dl=!1,br=Ni=0,Rl=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Se.memoizedState=vt=e:vt=vt.next=e,vt}function ft(){if(Ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=vt===null?Se.memoizedState:vt.next;if(t!==null)vt=t,Ze=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vt===null?Se.memoizedState=vt=e:vt=vt.next=e}return vt}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gr(e){var t=br;return br+=1,Rl===null&&(Rl=[]),e=Of(Rl,e,t),t=Se,(vt===null?t.memoizedState:vt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?md:Ju),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gr(e);if(e.$$typeof===$)return Mt(e)}throw Error(c(438,String(e)))}function Lu(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Se.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ji(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Be;return t.index++,n}function Xn(e,t){return typeof t=="function"?t(e):t}function Li(e){var t=ft();return ku(t,Ze,e)}function ku(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var m=s=null,y=null,R=t,k=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(Re&Y)===Y:(Yn&Y)===Y){var A=R.revertLane;if(A===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===El&&(k=!0);else if((Yn&A)===A){R=R.next,A===El&&(k=!0);continue}else Y={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(m=y=Y,s=i):y=y.next=Y,Se.lanes|=A,va|=A;Y=R.action,Ia&&n(i,Y),i=R.hasEagerState?R.eagerState:n(i,Y)}else A={lane:Y,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(m=y=A,s=i):y=y.next=A,Se.lanes|=Y,va|=Y;R=R.next}while(R!==null&&R!==t);if(y===null?s=i:y.next=m,!Xt(i,e.memoizedState)&&(bt=!0,k&&(n=Ol,n!==null)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=y,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function qu(e){var t=ft(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Xt(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Nf(e,t,n){var a=Se,r=ft(),i=je;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var s=!Xt((Ze||r).memoizedState,n);if(s&&(r.memoizedState=n,bt=!0),r=r.queue,Xu(Lf.bind(null,a,r,e),[e]),r.getSnapshot!==t||s||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,_l(9,{destroy:void 0},Hf.bind(null,a,r,n,t),null),Je===null)throw Error(c(349));i||(Yn&127)!==0||jf(a,t,n)}return n}function jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=ji(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,a){t.value=n,t.getSnapshot=a,kf(t)&&qf(e)}function Lf(e,t,n){return n(function(){kf(t)&&qf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function qf(e){var t=Qa(e,2);t!==null&&Bt(t,e,2)}function Bu(e){var t=Ct();if(typeof e=="function"){var n=e;if(e=n(),Ia){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t}function Bf(e,t,n,a){return e.baseState=n,ku(e,Ze,typeof a=="function"?a:Xn)}function Xp(e,t,n,a,r){if(Bi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};N.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Yf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Yf(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=N.T,s={};N.T=s;try{var m=n(r,a),y=N.S;y!==null&&y(s,m),Xf(e,t,m)}catch(R){Yu(e,t,R)}finally{i!==null&&s.types!==null&&(i.types=s.types),N.T=i}}else try{i=n(r,a),Xf(e,t,i)}catch(R){Yu(e,t,R)}}function Xf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Gf(e,t,a)},function(a){return Yu(e,t,a)}):Gf(e,t,n)}function Gf(e,t,n){t.status="fulfilled",t.value=n,Qf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yf(e,n)))}function Yu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qf(t),t=t.next;while(t!==a)}e.action=null}function Qf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zf(e,t){return t}function Vf(e,t){if(je){var n=Je.formState;if(n!==null){e:{var a=Se;if(je){if(Pe){t:{for(var r=Pe,i=an;r.nodeType!==8;){if(!i){r=null;break t}if(r=rn(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Pe=rn(r.nextSibling),a=r.data==="F!";break e}}oa(a)}a=!1}a&&(t=n[0])}}return n=Ct(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zf,lastRenderedState:t},n.queue=a,n=fd.bind(null,Se,a),a.dispatch=n,a=Bu(!1),i=Ku.bind(null,Se,!1,a.queue),a=Ct(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Xp.bind(null,Se,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Kf(e){var t=ft();return Jf(t,Ze,e)}function Jf(e,t,n){if(t=ku(e,t,Zf)[0],e=Li(Xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gr(t)}catch(s){throw s===Tl?Di:s}else a=t;t=ft();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(Se.flags|=2048,_l(9,{destroy:void 0},Gp.bind(null,r,n),null)),[a,i,e]}function Gp(e,t){e.action=t}function Pf(e){var t=ft(),n=Ze;if(n!==null)return Jf(t,n,e);ft(),t=t.memoizedState,n=ft();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function _l(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Se.updateQueue,t===null&&(t=ji(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ff(){return ft().memoizedState}function ki(e,t,n,a){var r=Ct();Se.flags|=e,r.memoizedState=_l(1|t,{destroy:void 0},n,a===void 0?null:a)}function qi(e,t,n,a){var r=ft();a=a===void 0?null:a;var i=r.memoizedState.inst;Ze!==null&&a!==null&&Cu(a,Ze.memoizedState.deps)?r.memoizedState=_l(t,i,n,a):(Se.flags|=e,r.memoizedState=_l(1|t,i,n,a))}function $f(e,t){ki(8390656,8,e,t)}function Xu(e,t){qi(2048,8,e,t)}function Qp(e){Se.flags|=4;var t=Se.updateQueue;if(t===null)t=ji(),Se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Wf(e){var t=ft().memoizedState;return Qp({ref:t,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function If(e,t){return qi(4,2,e,t)}function ed(e,t){return qi(4,4,e,t)}function td(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){n=n!=null?n.concat([e]):null,qi(4,4,td.bind(null,t,e),n)}function Gu(){}function ad(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Cu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ld(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Cu(t,a[1]))return a[0];if(a=e(),Ia){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a}function Qu(e,t,n){return n===void 0||(Yn&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=rh(),Se.lanes|=e,va|=e,n)}function rd(e,t,n,a){return Xt(n,t)?n:Ml.current!==null?(e=Qu(e,n,a),Xt(e,t)||(bt=!0),e):(Yn&42)===0||(Yn&1073741824)!==0&&(Re&261930)===0?(bt=!0,e.memoizedState=n):(e=rh(),Se.lanes|=e,va|=e,t)}function id(e,t,n,a,r){var i=V.p;V.p=i!==0&&8>i?i:8;var s=N.T,m={};N.T=m,Ku(e,!1,t,n);try{var y=r(),R=N.S;if(R!==null&&R(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=qp(y,a);yr(e,t,k,Jt(e))}else yr(e,t,a,Jt(e))}catch(Y){yr(e,t,{then:function(){},status:"rejected",reason:Y},Jt())}finally{V.p=i,s!==null&&m.types!==null&&(s.types=m.types),N.T=s}}function Zp(){}function Zu(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=od(e).queue;id(e,r,t,F,n===null?Zp:function(){return ud(e),n(a)})}function od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ud(e){var t=od(e);t.next===null&&(t=e.alternate.memoizedState),yr(e,t.next.queue,{},Jt())}function Vu(){return Mt(Hr)}function cd(){return ft().memoizedState}function sd(){return ft().memoizedState}function Vp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Jt();e=sa(n);var a=fa(t,e,n);a!==null&&(Bt(a,t,n),mr(a,t,n)),t={cache:Su()},e.payload=t;return}t=t.return}}function Kp(e,t,n){var a=Jt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?dd(t,n):(n=su(e,t,n,a),n!==null&&(Bt(n,e,a),hd(n,t,a)))}function fd(e,t,n){var a=Jt();yr(e,t,n,a)}function yr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))dd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,m=i(s,n);if(r.hasEagerState=!0,r.eagerState=m,Xt(m,s))return xi(e,t,r,0),Je===null&&yi(),!1}catch{}if(n=su(e,t,r,a),n!==null)return Bt(n,e,a),hd(n,t,a),!0}return!1}function Ku(e,t,n,a){if(a={lane:2,revertLane:zc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(c(479))}else t=su(e,n,a,2),t!==null&&Bt(t,e,2)}function Bi(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function dd(e,t){Dl=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,g(e,n)}}var xr={readContext:Mt,use:Hi,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};xr.useEffectEvent=rt;var md={readContext:Mt,use:Hi,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:$f,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ki(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){ki(4,2,e,t)},useMemo:function(e,t){var n=Ct();t=t===void 0?null:t;var a=e();if(Ia){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ct();if(n!==void 0){var r=n(t);if(Ia){hn(!0);try{n(t)}finally{hn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Kp.bind(null,Se,e),[a.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Bu(e);var t=e.queue,n=fd.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gu,useDeferredValue:function(e,t){var n=Ct();return Qu(n,e,t)},useTransition:function(){var e=Bu(!1);return e=id.bind(null,Se,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Se,r=Ct();if(je){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Je===null)throw Error(c(349));(Re&127)!==0||jf(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,$f(Lf.bind(null,a,i,e),[e]),a.flags|=2048,_l(9,{destroy:void 0},Hf.bind(null,a,i,n,t),null),n},useId:function(){var e=Ct(),t=Je.identifierPrefix;if(je){var n=zn,a=Tn;n=(a&~(1<<32-_t(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Bp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vu,useFormState:Vf,useActionState:Vf,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ku.bind(null,Se,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lu,useCacheRefresh:function(){return Ct().memoizedState=Vp.bind(null,Se)},useEffectEvent:function(e){var t=Ct(),n={impl:e};return t.memoizedState=n,function(){if((Ye&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ju={readContext:Mt,use:Hi,useCallback:ad,useContext:Mt,useEffect:Xu,useImperativeHandle:nd,useInsertionEffect:If,useLayoutEffect:ed,useMemo:ld,useReducer:Li,useRef:Ff,useState:function(){return Li(Xn)},useDebugValue:Gu,useDeferredValue:function(e,t){var n=ft();return rd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=Li(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:Nf,useId:cd,useHostTransitionStatus:Vu,useFormState:Kf,useActionState:Kf,useOptimistic:function(e,t){var n=ft();return Bf(n,Ze,e,t)},useMemoCache:Lu,useCacheRefresh:sd};Ju.useEffectEvent=Wf;var pd={readContext:Mt,use:Hi,useCallback:ad,useContext:Mt,useEffect:Xu,useImperativeHandle:nd,useInsertionEffect:If,useLayoutEffect:ed,useMemo:ld,useReducer:qu,useRef:Ff,useState:function(){return qu(Xn)},useDebugValue:Gu,useDeferredValue:function(e,t){var n=ft();return Ze===null?Qu(n,e,t):rd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=qu(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:Nf,useId:cd,useHostTransitionStatus:Vu,useFormState:Pf,useActionState:Pf,useOptimistic:function(e,t){var n=ft();return Ze!==null?Bf(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:sd};pd.useEffectEvent=Wf;function Pu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Jt(),r=sa(a);r.payload=t,n!=null&&(r.callback=n),t=fa(e,r,a),t!==null&&(Bt(t,e,a),mr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Jt(),r=sa(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=fa(e,r,a),t!==null&&(Bt(t,e,a),mr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jt(),a=sa(n);a.tag=2,t!=null&&(a.callback=t),t=fa(e,a,n),t!==null&&(Bt(t,e,n),mr(t,e,n))}};function vd(e,t,n,a,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):t.prototype&&t.prototype.isPureReactComponent?!ir(n,a)||!ir(r,i):!0}function bd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Fu.enqueueReplaceState(t,t.state,null)}function el(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function gd(e){gi(e)}function yd(e){console.error(e)}function xd(e){gi(e)}function Yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Sd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $u(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){Yi(e,t)},n}function Ed(e){return e=sa(e),e.tag=3,e}function Od(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Sd(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Sd(t,n,a),typeof r!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function Jp(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Sl(t,n,r,!0),n=Qt.current,n!==null){switch(n.tag){case 31:case 13:return ln===null?Ii():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Ri?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ec(e,a,r)),!1;case 22:return n.flags|=65536,a===Ri?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ec(e,a,r)),!1}throw Error(c(435,n.tag))}return Ec(e,a,r),Ii(),!1}if(je)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==vu&&(e=Error(c(422),{cause:a}),cr(en(e,n)))):(a!==vu&&(t=Error(c(423),{cause:a}),cr(en(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=en(a,n),r=$u(e.stateNode,a,r),Du(e,r),it!==4&&(it=2)),!1;var i=Error(c(520),{cause:a});if(i=en(i,n),Rr===null?Rr=[i]:Rr.push(i),it!==4&&(it=2),t===null)return!0;a=en(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=$u(n.stateNode,a,e),Du(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ba===null||!ba.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Ed(r),Od(r,e,n,a),Du(n,r),!1}n=n.return}while(n!==null);return!1}var Wu=Error(c(461)),bt=!1;function Dt(e,t,n,a){t.child=e===null?Df(t,null,n,a):Wa(t,e.child,n,a)}function Td(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var s={};for(var m in a)m!=="ref"&&(s[m]=a[m])}else s=a;return Ja(t),a=Uu(e,t,n,s,i,r),m=Nu(),e!==null&&!bt?(ju(e,t,r),Gn(e,t,r)):(je&&m&&mu(t),t.flags|=1,Dt(e,t,a,r),t.child)}function zd(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!fu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Md(e,t,i,a,r)):(e=Ei(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ic(e,r)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(s,a)&&e.ref===t.ref)return Gn(e,t,r)}return t.flags|=1,e=Ln(i,a),e.ref=t.ref,e.return=t,t.child=e}function Md(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(ir(i,a)&&e.ref===t.ref)if(bt=!1,t.pendingProps=a=i,ic(e,r))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,Gn(e,t,r)}return Iu(e,t,n,a,r)}function Dd(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Rd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mi(t,i!==null?i.cachePool:null),i!==null?Af(t,i):_u(),wf(t);else return a=t.lanes=536870912,Rd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Mi(t,i.cachePool),Af(t,i),ha(),t.memoizedState=null):(e!==null&&Mi(t,null),_u(),ha());return Dt(e,t,r,n),t.child}function Sr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,n,a,r){var i=Ou();return i=i===null?null:{parent:pt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Mi(t,null),_u(),wf(t),e!==null&&Sl(e,t,a,!0),t.childLanes=r,null}function Xi(e,t){return t=Qi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _d(e,t,n){return Wa(t,e.child,null,n),e=Xi(t,t.pendingProps),e.flags|=2,Zt(t),t.memoizedState=null,e}function Pp(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(a.mode==="hidden")return e=Xi(t,a),t.lanes=536870912,Sr(null,e);if(wu(t),(e=Pe)?(e=Yh(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=df(e),n.return=t,t.child=n,zt=t,Pe=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return Xi(t,a)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(wu(t),r)if(t.flags&256)t.flags&=-257,t=_d(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(bt||Sl(e,t,n,!1),r=(n&e.childLanes)!==0,bt||r){if(a=Je,a!==null&&(s=z(a,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,Qa(e,s),Bt(a,e,s),Wu;Ii(),t=_d(e,t,n)}else e=i.treeContext,Pe=rn(s.nextSibling),zt=t,je=!0,ia=null,an=!1,e!==null&&pf(t,e),t=Xi(t,a),t.flags|=4096;return t}return e=Ln(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Iu(e,t,n,a,r){return Ja(t),n=Uu(e,t,n,a,void 0,r),a=Nu(),e!==null&&!bt?(ju(e,t,r),Gn(e,t,r)):(je&&a&&mu(t),t.flags|=1,Dt(e,t,n,r),t.child)}function Ad(e,t,n,a,r,i){return Ja(t),t.updateQueue=null,n=Uf(t,a,n,r),Cf(e),a=Nu(),e!==null&&!bt?(ju(e,t,i),Gn(e,t,i)):(je&&a&&mu(t),t.flags|=1,Dt(e,t,n,i),t.child)}function wd(e,t,n,a,r){if(Ja(t),t.stateNode===null){var i=bl,s=n.contextType;typeof s=="object"&&s!==null&&(i=Mt(s)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},zu(t),s=n.contextType,i.context=typeof s=="object"&&s!==null?Mt(s):bl,i.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,n,s,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Fu.enqueueReplaceState(i,i.state,null),vr(t,a,i,r),pr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var m=t.memoizedProps,y=el(n,m);i.props=y;var R=i.context,k=n.contextType;s=bl,typeof k=="object"&&k!==null&&(s=Mt(k));var Y=n.getDerivedStateFromProps;k=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||R!==s)&&bd(t,i,a,s),ca=!1;var A=t.memoizedState;i.state=A,vr(t,a,i,r),pr(),R=t.memoizedState,m||A!==R||ca?(typeof Y=="function"&&(Pu(t,n,Y,a),R=t.memoizedState),(y=ca||vd(t,n,y,a,A,R,s))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),i.props=a,i.state=R,i.context=s,a=y):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Mu(e,t),s=t.memoizedProps,k=el(n,s),i.props=k,Y=t.pendingProps,A=i.context,R=n.contextType,y=bl,typeof R=="object"&&R!==null&&(y=Mt(R)),m=n.getDerivedStateFromProps,(R=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==Y||A!==y)&&bd(t,i,a,y),ca=!1,A=t.memoizedState,i.state=A,vr(t,a,i,r),pr();var H=t.memoizedState;s!==Y||A!==H||ca||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof m=="function"&&(Pu(t,n,m,a),H=t.memoizedState),(k=ca||vd(t,n,k,a,A,H,y)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,H,y),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,H,y)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=H),i.props=a,i.state=H,i.context=y,a=k):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Gi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Wa(t,e.child,null,r),t.child=Wa(t,null,n,r)):Dt(e,t,n,r),t.memoizedState=i.state,e=t.child):e=Gn(e,t,r),e}function Cd(e,t,n,a){return Va(),t.flags|=256,Dt(e,t,n,a),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:Sf()}}function nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function Ud(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),s&&(r=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(r?da(t):ha(),(e=Pe)?(e=Yh(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=df(e),n.return=t,t.child=n,zt=t,Pe=null)):e=null,e===null)throw oa(t);return kc(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,r?(ha(),r=t.mode,m=Qi({mode:"hidden",children:m},r),a=Za(a,r,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=tc(n),a.childLanes=nc(e,s,n),t.memoizedState=ec,Sr(null,a)):(da(t),ac(t,m))}var y=e.memoizedState;if(y!==null&&(m=y.dehydrated,m!==null)){if(i)t.flags&256?(da(t),t.flags&=-257,t=lc(e,t,n)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),m=a.fallback,r=t.mode,a=Qi({mode:"visible",children:a.children},r),m=Za(m,r,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,Wa(t,e.child,null,n),a=t.child,a.memoizedState=tc(n),a.childLanes=nc(e,s,n),t.memoizedState=ec,t=Sr(null,a));else if(da(t),kc(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var R=s.dgst;s=R,a=Error(c(419)),a.stack="",a.digest=s,cr({value:a,source:null,stack:null}),t=lc(e,t,n)}else if(bt||Sl(e,t,n,!1),s=(n&e.childLanes)!==0,bt||s){if(s=Je,s!==null&&(a=z(s,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,Qa(e,a),Bt(s,e,a),Wu;Lc(m)||Ii(),t=lc(e,t,n)}else Lc(m)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Pe=rn(m.nextSibling),zt=t,je=!0,ia=null,an=!1,e!==null&&pf(t,e),t=ac(t,a.children),t.flags|=4096);return t}return r?(ha(),m=a.fallback,r=t.mode,y=e.child,R=y.sibling,a=Ln(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,R!==null?m=Ln(R,m):(m=Za(m,r,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,Sr(null,a),a=t.child,m=e.child.memoizedState,m===null?m=tc(n):(r=m.cachePool,r!==null?(y=pt._currentValue,r=r.parent!==y?{parent:y,pool:y}:r):r=Sf(),m={baseLanes:m.baseLanes|n,cachePool:r}),a.memoizedState=m,a.childLanes=nc(e,s,n),t.memoizedState=ec,Sr(e.child,a)):(da(t),n=e.child,e=n.sibling,n=Ln(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function ac(e,t){return t=Qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qi(e,t){return e=Gt(22,e,null,t),e.lanes=0,e}function lc(e,t,n){return Wa(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),yu(e.return,t,n)}function rc(e,t,n,a,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=r,s.treeForkCount=i)}function jd(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var s=st.current,m=(s&2)!==0;if(m?(s=s&1|2,t.flags|=128):s&=1,K(st,s),Dt(e,t,a,n),a=je?ur:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,n,t);else if(e.tag===19)Nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),rc(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ci(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}rc(t,!0,n,null,i,a);break;case"together":rc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Sl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function Fp(e,t,n){switch(t.tag){case 3:ot(t,t.stateNode.containerInfo),ua(t,pt,e.memoizedState.cache),Va();break;case 27:case 5:wa(t);break;case 4:ot(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(da(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ud(e,t,n):(da(t),e=Gn(e,t,n),e!==null?e.sibling:null);da(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Sl(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return jd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(st,st.current),a)break;return null;case 22:return t.lanes=0,Dd(e,t,n,t.pendingProps);case 24:ua(t,pt,e.memoizedState.cache)}return Gn(e,t,n)}function Hd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!ic(e,n)&&(t.flags&128)===0)return bt=!1,Fp(e,t,n);bt=(e.flags&131072)!==0}else bt=!1,je&&(t.flags&1048576)!==0&&mf(t,ur,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")fu(e)?(a=el(e,a),t.tag=1,t=wd(null,t,e,a,n)):(t.tag=0,t=Iu(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===ve){t.tag=11,t=Td(null,t,e,a,n);break e}else if(r===M){t.tag=14,t=zd(null,t,e,a,n);break e}}throw t=Xe(e)||e,Error(c(306,t,""))}}return t;case 0:return Iu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=el(a,t.pendingProps),wd(e,t,a,r,n);case 3:e:{if(ot(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Mu(e,t),vr(t,a,null,n);var s=t.memoizedState;if(a=s.cache,ua(t,pt,a),a!==i.cache&&xu(t,[pt],n,!0),pr(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Cd(e,t,a,n);break e}else if(a!==r){r=en(Error(c(424)),t),cr(r),t=Cd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pe=rn(e.firstChild),zt=t,je=!0,ia=null,an=!0,n=Df(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Va(),a===r){t=Gn(e,t,n);break e}Dt(e,t,a,n)}t=t.child}return t;case 26:return Gi(e,t),e===null?(n=Kh(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,a=io(ge.current).createElement(n),a[W]=t,a[te]=e,Rt(a,n,e),$e(a),t.stateNode=a):t.memoizedState=Kh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wa(t),e===null&&je&&(a=t.stateNode=Qh(t.type,t.pendingProps,ge.current),zt=t,an=!0,r=Pe,Sa(t.type)?(qc=r,Pe=rn(a.firstChild)):Pe=r),Dt(e,t,t.pendingProps.children,n),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((r=a=Pe)&&(a=Mv(a,t.type,t.pendingProps,an),a!==null?(t.stateNode=a,zt=t,Pe=rn(a.firstChild),an=!1,r=!0):r=!1),r||oa(t)),wa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Nc(r,i)?a=null:s!==null&&Nc(r,s)&&(t.flags|=32),t.memoizedState!==null&&(r=Uu(e,t,Yp,null,null,n),Hr._currentValue=r),Gi(e,t),Dt(e,t,a,n),t.child;case 6:return e===null&&je&&((e=n=Pe)&&(n=Dv(n,t.pendingProps,an),n!==null?(t.stateNode=n,zt=t,Pe=null,e=!0):e=!1),e||oa(t)),null;case 13:return Ud(e,t,n);case 4:return ot(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wa(t,null,a,n):Dt(e,t,a,n),t.child;case 11:return Td(e,t,t.type,t.pendingProps,n);case 7:return Dt(e,t,t.pendingProps,n),t.child;case 8:return Dt(e,t,t.pendingProps.children,n),t.child;case 12:return Dt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ua(t,t.type,a.value),Dt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ja(t),r=Mt(r),a=a(r),t.flags|=1,Dt(e,t,a,n),t.child;case 14:return zd(e,t,t.type,t.pendingProps,n);case 15:return Md(e,t,t.type,t.pendingProps,n);case 19:return jd(e,t,n);case 31:return Pp(e,t,n);case 22:return Dd(e,t,n,t.pendingProps);case 24:return Ja(t),a=Mt(pt),e===null?(r=Ou(),r===null&&(r=Je,i=Su(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},zu(t),ua(t,pt,r)):((e.lanes&n)!==0&&(Mu(e,t),vr(t,null,null,n),pr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ua(t,pt,a)):(a=i.cache,ua(t,pt,a),a!==r.cache&&xu(t,[pt],n,!0))),Dt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Qn(e){e.flags|=4}function oc(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(ch())e.flags|=8192;else throw $a=Ri,Tu}else e.flags&=-16777217}function Ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wh(t))if(ch())e.flags|=8192;else throw $a=Ri,Tu}function Zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?La():536870912,e.lanes|=t,Ul|=t)}function Er(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function $p(e,t,n){var a=t.pendingProps;switch(pu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bn(pt),et(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xl(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bu())),Fe(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(Qn(t),i!==null?(Fe(t),Ld(t,i)):(Fe(t),oc(t,r,null,a,n))):i?i!==e.memoizedState?(Qn(t),Fe(t),Ld(t,i)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qn(t),Fe(t),oc(t,r,e,a,n)),null;case 27:if(il(t),n=ge.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Fe(t),null}e=I.current,xl(t)?vf(t):(e=Qh(r,a,n),t.stateNode=e,Qn(t))}return Fe(t),null;case 5:if(il(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Fe(t),null}if(i=I.current,xl(t))vf(t);else{var s=io(ge.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(r,{is:a.is}):s.createElement(r)}}i[W]=t,i[te]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Rt(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qn(t)}}return Fe(t),oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ge.current,xl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=zt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[W]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Uh(e.nodeValue,n)),e||oa(t,!0)}else e=io(e).createTextNode(a),e[W]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=xl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[W]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Zt(t),t):(Zt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Fe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=xl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[W]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),r=!1}else r=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Zt(t),t):(Zt(t),null)}return Zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zi(t,t.updateQueue),Fe(t),null);case 4:return et(),e===null&&_c(t.stateNode.containerInfo),Fe(t),null;case 10:return Bn(t.type),Fe(t),null;case 19:if(L(st),a=t.memoizedState,a===null)return Fe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Er(a,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ci(e),i!==null){for(t.flags|=128,Er(a,!1),e=i.updateQueue,t.updateQueue=e,Zi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ff(n,e),n=n.sibling;return K(st,st.current&1|2),je&&kn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ut()>Fi&&(t.flags|=128,r=!0,Er(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ci(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Zi(t,e),Er(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!je)return Fe(t),null}else 2*ut()-a.renderingStartTime>Fi&&n!==536870912&&(t.flags|=128,r=!0,Er(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ut(),e.sibling=null,n=st.current,K(st,r?n&1|2:n&1),je&&kn(t,a.treeForkCount),e):(Fe(t),null);case 22:case 23:return Zt(t),Au(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&Zi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(Pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bn(pt),Fe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Wp(e,t){switch(pu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(pt),et(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return il(t),null;case 31:if(t.memoizedState!==null){if(Zt(t),t.alternate===null)throw Error(c(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(st),null;case 4:return et(),null;case 10:return Bn(t.type),null;case 22:case 23:return Zt(t),Au(),e!==null&&L(Pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bn(pt),null;case 25:return null;default:return null}}function kd(e,t){switch(pu(t),t.tag){case 3:Bn(pt),et();break;case 26:case 27:case 5:il(t);break;case 4:et();break;case 31:t.memoizedState!==null&&Zt(t);break;case 13:Zt(t);break;case 19:L(st);break;case 10:Bn(t.type);break;case 22:case 23:Zt(t),Au(),e!==null&&L(Pa);break;case 24:Bn(pt)}}function Or(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,s=n.inst;a=i(),s.destroy=a}n=n.next}while(n!==r)}}catch(m){Qe(t,t.return,m)}}function ma(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var s=a.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,r=t;var y=n,R=m;try{R()}catch(k){Qe(r,y,k)}}}a=a.next}while(a!==i)}}catch(k){Qe(t,t.return,k)}}function qd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_f(t,n)}catch(a){Qe(e,e.return,a)}}}function Bd(e,t,n){n.props=el(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Qe(e,t,a)}}function Tr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Qe(e,t,r)}}function Mn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Qe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function Yd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Qe(e,e.return,r)}}function uc(e,t,n){try{var a=e.stateNode;xv(a,e.type,n,t),a[te]=t}catch(r){Qe(e,e.return,r)}}function Xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jn));else if(a!==4&&(a===27&&Sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function Vi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Gd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Rt(t,a,n),t[W]=e,t[te]=n}catch(i){Qe(e,e.return,i)}}var Zn=!1,gt=!1,fc=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function Ip(e,t){if(e=e.containerInfo,Cc=mo,e=tf(e),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,m=-1,y=-1,R=0,k=0,Y=e,A=null;t:for(;;){for(var H;Y!==n||r!==0&&Y.nodeType!==3||(m=s+r),Y!==i||a!==0&&Y.nodeType!==3||(y=s+a),Y.nodeType===3&&(s+=Y.nodeValue.length),(H=Y.firstChild)!==null;)A=Y,Y=H;for(;;){if(Y===e)break t;if(A===n&&++R===r&&(m=s),A===i&&++k===a&&(y=s),(H=Y.nextSibling)!==null)break;Y=A,A=Y.parentNode}Y=H}n=m===-1||y===-1?null:{start:m,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:e,selectionRange:n},mo=!1,Ot=t;Ot!==null;)if(t=Ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ot=e;else for(;Ot!==null;){switch(t=Ot,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ae=el(n.type,r);e=a.getSnapshotBeforeUpdate(ae,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(he){Qe(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ot=e;break}Ot=t.return}}function Zd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(e,n),a&4&&Or(5,n);break;case 1:if(Kn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Qe(n,n.return,s)}else{var r=el(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Qe(n,n.return,s)}}a&64&&qd(n),a&512&&Tr(n,n.return);break;case 3:if(Kn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_f(e,t)}catch(s){Qe(n,n.return,s)}}break;case 27:t===null&&a&4&&Gd(n);case 26:case 5:Kn(e,n),t===null&&a&4&&Yd(n),a&512&&Tr(n,n.return);break;case 12:Kn(e,n);break;case 31:Kn(e,n),a&4&&Jd(e,n);break;case 13:Kn(e,n),a&4&&Pd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uv.bind(null,n),Rv(e,n))));break;case 22:if(a=n.memoizedState!==null||Zn,!a){t=t!==null&&t.memoizedState!==null||gt,r=Zn;var i=gt;Zn=a,(gt=t)&&!i?Jn(e,n,(n.subtreeFlags&8772)!==0):Kn(e,n),Zn=r,gt=i}break;case 30:break;default:Kn(e,n)}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&at(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ht=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Kd(e,t,n),n=n.sibling}function Kd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 26:gt||Mn(n,t),Vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gt||Mn(n,t);var a=We,r=Ht;Sa(n.type)&&(We=n.stateNode,Ht=!1),Vn(e,t,n),Ur(n.stateNode),We=a,Ht=r;break;case 5:gt||Mn(n,t);case 6:if(a=We,r=Ht,We=null,Vn(e,t,n),We=a,Ht=r,We!==null)if(Ht)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(i){Qe(n,t,i)}else try{We.removeChild(n.stateNode)}catch(i){Qe(n,t,i)}break;case 18:We!==null&&(Ht?(e=We,qh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yl(e)):qh(We,n.stateNode));break;case 4:a=We,r=Ht,We=n.stateNode.containerInfo,Ht=!0,Vn(e,t,n),We=a,Ht=r;break;case 0:case 11:case 14:case 15:ma(2,n,t),gt||ma(4,n,t),Vn(e,t,n);break;case 1:gt||(Mn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Bd(n,t,a)),Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:gt=(a=gt)||n.memoizedState!==null,Vn(e,t,n),gt=a;break;default:Vn(e,t,n)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(n){Qe(t,t.return,n)}}}function Pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(n){Qe(t,t.return,n)}}function ev(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(c(435,e.tag))}}function Ki(e,t){var n=ev(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=cv.bind(null,e,a);a.then(r,r)}})}function Lt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(Sa(m.type)){We=m.stateNode,Ht=!1;break e}break;case 5:We=m.stateNode,Ht=!1;break e;case 3:case 4:We=m.stateNode.containerInfo,Ht=!0;break e}m=m.return}if(We===null)throw Error(c(160));Kd(i,s,r),We=null,Ht=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}var gn=null;function Fd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Lt(t,e),kt(e),a&4&&(ma(3,e,e.return),Or(3,e),ma(5,e,e.return));break;case 1:Lt(t,e),kt(e),a&512&&(gt||n===null||Mn(n,n.return)),a&64&&Zn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=gn;if(Lt(t,e),kt(e),a&512&&(gt||n===null||Mn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[nt]||i[W]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Rt(i,a,n),i[W]=e,$e(i),a=i;break e;case"link":var s=Fh("link","href",r).get(a+(n.href||""));if(s){for(var m=0;m<s.length;m++)if(i=s[m],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(m,1);break t}}i=r.createElement(a),Rt(i,a,n),r.head.appendChild(i);break;case"meta":if(s=Fh("meta","content",r).get(a+(n.content||""))){for(m=0;m<s.length;m++)if(i=s[m],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(m,1);break t}}i=r.createElement(a),Rt(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[W]=e,$e(i),a=i}e.stateNode=a}else $h(r,e.type,e.stateNode);else e.stateNode=Ph(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?$h(r,e.type,e.stateNode):Ph(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Lt(t,e),kt(e),a&512&&(gt||n===null||Mn(n,n.return)),n!==null&&a&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Lt(t,e),kt(e),a&512&&(gt||n===null||Mn(n,n.return)),e.flags&32){r=e.stateNode;try{sl(r,"")}catch(ae){Qe(e,e.return,ae)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,uc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(fc=!0);break;case 6:if(Lt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ae){Qe(e,e.return,ae)}}break;case 3:if(co=null,r=gn,gn=oo(t.containerInfo),Lt(t,e),gn=r,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(ae){Qe(e,e.return,ae)}fc&&(fc=!1,$d(e));break;case 4:a=gn,gn=oo(e.stateNode.containerInfo),Lt(t,e),kt(e),gn=a;break;case 12:Lt(t,e),kt(e);break;case 31:Lt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 13:Lt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pi=ut()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 22:r=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,R=Zn,k=gt;if(Zn=R||r,gt=k||y,Lt(t,e),gt=k,Zn=R,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||y||Zn||gt||tl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(i=y.stateNode,r)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=y.stateNode;var Y=y.memoizedProps.style,A=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(ae){Qe(y,y.return,ae)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=r?"":y.memoizedProps}catch(ae){Qe(y,y.return,ae)}}}else if(t.tag===18){if(n===null){y=t;try{var H=y.stateNode;r?Bh(H,!0):Bh(y.stateNode,!1)}catch(ae){Qe(y,y.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ki(e,n))));break;case 19:Lt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 30:break;case 21:break;default:Lt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Xd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=cc(e);Vi(e,i,r);break;case 5:var s=n.stateNode;n.flags&32&&(sl(s,""),n.flags&=-33);var m=cc(e);Vi(e,m,s);break;case 3:case 4:var y=n.stateNode.containerInfo,R=cc(e);sc(e,R,y);break;default:throw Error(c(161))}}catch(k){Qe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$d(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zd(e,t.alternate,t),t=t.sibling}function tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),tl(t);break;case 1:Mn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Bd(t,t.return,n),tl(t);break;case 27:Ur(t.stateNode);case 26:case 5:Mn(t,t.return),tl(t);break;case 22:t.memoizedState===null&&tl(t);break;case 30:tl(t);break;default:tl(t)}e=e.sibling}}function Jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Jn(r,i,n),Or(4,i);break;case 1:if(Jn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){Qe(a,a.return,R)}if(a=i,r=a.updateQueue,r!==null){var m=a.stateNode;try{var y=r.shared.hiddenCallbacks;if(y!==null)for(r.shared.hiddenCallbacks=null,r=0;r<y.length;r++)Rf(y[r],m)}catch(R){Qe(a,a.return,R)}}n&&s&64&&qd(i),Tr(i,i.return);break;case 27:Gd(i);case 26:case 5:Jn(r,i,n),n&&a===null&&s&4&&Yd(i),Tr(i,i.return);break;case 12:Jn(r,i,n);break;case 31:Jn(r,i,n),n&&s&4&&Jd(r,i);break;case 13:Jn(r,i,n),n&&s&4&&Pd(r,i);break;case 22:i.memoizedState===null&&Jn(r,i,n),Tr(i,i.return);break;case 30:break;default:Jn(r,i,n)}t=t.sibling}}function dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sr(n))}function hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sr(e))}function yn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wd(e,t,n,a),t=t.sibling}function Wd(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:yn(e,t,n,a),r&2048&&Or(9,t);break;case 1:yn(e,t,n,a);break;case 3:yn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sr(e)));break;case 12:if(r&2048){yn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,m=i.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Qe(t,t.return,y)}}else yn(e,t,n,a);break;case 31:yn(e,t,n,a);break;case 13:yn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?yn(e,t,n,a):zr(e,t):i._visibility&2?yn(e,t,n,a):(i._visibility|=2,Al(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&dc(s,t);break;case 24:yn(e,t,n,a),r&2048&&hc(t.alternate,t);break;default:yn(e,t,n,a)}}function Al(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,m=n,y=a,R=s.flags;switch(s.tag){case 0:case 11:case 15:Al(i,s,m,y,r),Or(8,s);break;case 23:break;case 22:var k=s.stateNode;s.memoizedState!==null?k._visibility&2?Al(i,s,m,y,r):zr(i,s):(k._visibility|=2,Al(i,s,m,y,r)),r&&R&2048&&dc(s.alternate,s);break;case 24:Al(i,s,m,y,r),r&&R&2048&&hc(s.alternate,s);break;default:Al(i,s,m,y,r)}t=t.sibling}}function zr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:zr(n,a),r&2048&&dc(a.alternate,a);break;case 24:zr(n,a),r&2048&&hc(a.alternate,a);break;default:zr(n,a)}t=t.sibling}}var Mr=8192;function wl(e,t,n){if(e.subtreeFlags&Mr)for(e=e.child;e!==null;)Id(e,t,n),e=e.sibling}function Id(e,t,n){switch(e.tag){case 26:wl(e,t,n),e.flags&Mr&&e.memoizedState!==null&&Bv(n,gn,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,n);break;case 3:case 4:var a=gn;gn=oo(e.stateNode.containerInfo),wl(e,t,n),gn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Mr,Mr=16777216,wl(e,t,n),Mr=a):wl(e,t,n));break;default:wl(e,t,n)}}function eh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ot=a,nh(a,e)}eh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)th(e),e=e.sibling}function th(e){switch(e.tag){case 0:case 11:case 15:Dr(e),e.flags&2048&&ma(9,e,e.return);break;case 3:Dr(e);break;case 12:Dr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Dr(e);break;default:Dr(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ot=a,nh(a,e)}eh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function nh(e,t){for(;Ot!==null;){var n=Ot;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:sr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ot=a;else e:for(n=e;Ot!==null;){a=Ot;var r=a.sibling,i=a.return;if(Vd(a),a===n){Ot=null;break e}if(r!==null){r.return=i,Ot=r;break e}Ot=i}}}var tv={getCacheForType:function(e){var t=Mt(pt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Mt(pt).controller.signal}},nv=typeof WeakMap=="function"?WeakMap:Map,Ye=0,Je=null,ze=null,Re=0,Ge=0,Vt=null,pa=!1,Cl=!1,mc=!1,Pn=0,it=0,va=0,nl=0,pc=0,Kt=0,Ul=0,Rr=null,qt=null,vc=!1,Pi=0,ah=0,Fi=1/0,$i=null,ba=null,xt=0,ga=null,Nl=null,Fn=0,bc=0,gc=null,lh=null,_r=0,yc=null;function Jt(){return(Ye&2)!==0&&Re!==0?Re&-Re:N.T!==null?zc():J()}function rh(){if(Kt===0)if((Re&536870912)===0||je){var e=Na;Na<<=1,(Na&3932160)===0&&(Na=262144),Kt=e}else Kt=536870912;return e=Qt.current,e!==null&&(e.flags|=32),Kt}function Bt(e,t,n){(e===Je&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(jl(e,0),ya(e,Re,Kt,!1)),aa(e,n),((Ye&2)===0||e!==Je)&&(e===Je&&((Ye&2)===0&&(nl|=n),it===4&&ya(e,Re,Kt,!1)),Dn(e))}function ih(e,t,n){if((Ye&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ha(e,t),r=a?rv(e,t):Sc(e,t,!0),i=a;do{if(r===0){Cl&&!a&&ya(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!av(n)){r=Sc(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;r=Rr;var y=m.current.memoizedState.isDehydrated;if(y&&(jl(m,s).flags|=256),s=Sc(m,s,!1),s!==2){if(mc&&!y){m.errorRecoveryDisabledLanes|=i,nl|=i,r=4;break e}i=qt,qt=r,i!==null&&(qt===null?qt=i:qt.push.apply(qt,i))}r=s}if(i=!1,r!==2)continue}}if(r===1){jl(e,0),ya(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ya(a,t,Kt,!pa);break e;case 2:qt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Pi+300-ut(),10<r)){if(ya(a,t,Kt,!pa),ja(a,0,!0)!==0)break e;Fn=t,a.timeoutHandle=Lh(oh.bind(null,a,n,qt,$i,vc,t,Kt,nl,Ul,pa,i,"Throttled",-0,0),r);break e}oh(a,n,qt,$i,vc,t,Kt,nl,Ul,pa,i,null,-0,0)}}break}while(!0);Dn(e)}function oh(e,t,n,a,r,i,s,m,y,R,k,Y,A,H){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jn},Id(t,i,Y);var ae=(i&62914560)===i?Pi-ut():(i&4194048)===i?ah-ut():0;if(ae=Yv(Y,ae),ae!==null){Fn=i,e.cancelPendingCommit=ae(ph.bind(null,e,t,i,n,a,r,s,m,y,k,Y,null,A,H)),ya(e,i,s,!R);return}}ph(e,t,i,n,a,r,s,m,y)}function av(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Xt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ya(e,t,n,a){t&=~pc,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-_t(r),s=1<<i;a[i]=-1,r&=~s}n!==0&&ui(e,n,t)}function Wi(){return(Ye&6)===0?(Ar(0),!1):!0}function xc(){if(ze!==null){if(Ge===0)var e=ze.return;else e=ze,qn=Ka=null,Hu(e),zl=null,dr=0,e=ze;for(;e!==null;)kd(e.alternate,e),e=e.return;ze=null}}function jl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ov(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fn=0,xc(),Je=e,ze=n=Ln(e.current,null),Re=t,Ge=0,Vt=null,pa=!1,Cl=Ha(e,t),mc=!1,Ul=Kt=pc=nl=va=it=0,qt=Rr=null,vc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-_t(a),i=1<<r;t|=e[r],a&=~i}return Pn=t,yi(),n}function uh(e,t){Se=null,N.H=xr,t===Tl||t===Di?(t=Tf(),Ge=3):t===Tu?(t=Tf(),Ge=4):Ge=t===Wu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,ze===null&&(it=1,Yi(e,en(t,e.current)))}function ch(){var e=Qt.current;return e===null?!0:(Re&4194048)===Re?ln===null:(Re&62914560)===Re||(Re&536870912)!==0?e===ln:!1}function sh(){var e=N.H;return N.H=xr,e===null?xr:e}function fh(){var e=N.A;return N.A=tv,e}function Ii(){it=4,pa||(Re&4194048)!==Re&&Qt.current!==null||(Cl=!0),(va&134217727)===0&&(nl&134217727)===0||Je===null||ya(Je,Re,Kt,!1)}function Sc(e,t,n){var a=Ye;Ye|=2;var r=sh(),i=fh();(Je!==e||Re!==t)&&($i=null,jl(e,t)),t=!1;var s=it;e:do try{if(Ge!==0&&ze!==null){var m=ze,y=Vt;switch(Ge){case 8:xc(),s=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var R=Ge;if(Ge=0,Vt=null,Hl(e,m,y,R),n&&Cl){s=0;break e}break;default:R=Ge,Ge=0,Vt=null,Hl(e,m,y,R)}}lv(),s=it;break}catch(k){uh(e,k)}while(!0);return t&&e.shellSuspendCounter++,qn=Ka=null,Ye=a,N.H=r,N.A=i,ze===null&&(Je=null,Re=0,yi()),s}function lv(){for(;ze!==null;)dh(ze)}function rv(e,t){var n=Ye;Ye|=2;var a=sh(),r=fh();Je!==e||Re!==t?($i=null,Fi=ut()+500,jl(e,t)):Cl=Ha(e,t);e:do try{if(Ge!==0&&ze!==null){t=ze;var i=Vt;t:switch(Ge){case 1:Ge=0,Vt=null,Hl(e,t,i,1);break;case 2:case 9:if(Ef(i)){Ge=0,Vt=null,hh(t);break}t=function(){Ge!==2&&Ge!==9||Je!==e||(Ge=7),Dn(e)},i.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Ef(i)?(Ge=0,Vt=null,hh(t)):(Ge=0,Vt=null,Hl(e,t,i,7));break;case 5:var s=null;switch(ze.tag){case 26:s=ze.memoizedState;case 5:case 27:var m=ze;if(s?Wh(s):m.stateNode.complete){Ge=0,Vt=null;var y=m.sibling;if(y!==null)ze=y;else{var R=m.return;R!==null?(ze=R,eo(R)):ze=null}break t}}Ge=0,Vt=null,Hl(e,t,i,5);break;case 6:Ge=0,Vt=null,Hl(e,t,i,6);break;case 8:xc(),it=6;break e;default:throw Error(c(462))}}iv();break}catch(k){uh(e,k)}while(!0);return qn=Ka=null,N.H=a,N.A=r,Ye=n,ze!==null?0:(Je=null,Re=0,yi(),it)}function iv(){for(;ze!==null&&!ko();)dh(ze)}function dh(e){var t=Hd(e.alternate,e,Pn);e.memoizedProps=e.pendingProps,t===null?eo(e):ze=t}function hh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ad(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Ad(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Hu(t);default:kd(n,t),t=ze=ff(t,Pn),t=Hd(n,t,Pn)}e.memoizedProps=e.pendingProps,t===null?eo(e):ze=t}function Hl(e,t,n,a){qn=Ka=null,Hu(t),zl=null,dr=0;var r=t.return;try{if(Jp(e,r,t,n,Re)){it=1,Yi(e,en(n,e.current)),ze=null;return}}catch(i){if(r!==null)throw ze=r,i;it=1,Yi(e,en(n,e.current)),ze=null;return}t.flags&32768?(je||a===1?e=!0:Cl||(Re&536870912)!==0?e=!1:(pa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),mh(t,e)):eo(t)}function eo(e){var t=e;do{if((t.flags&32768)!==0){mh(t,pa);return}e=t.return;var n=$p(t.alternate,t,Pn);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);it===0&&(it=5)}function mh(e,t){do{var n=Wp(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);it=6,ze=null}function ph(e,t,n,a,r,i,s,m,y){e.cancelPendingCommit=null;do to();while(xt!==0);if((Ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=cu,Xo(e,n,i,s,m,y),e===Je&&(ze=Je=null,Re=0),Nl=t,ga=e,Fn=n,bc=i,gc=r,lh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sv(Ut,function(){return xh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,r=V.p,V.p=2,s=Ye,Ye|=4;try{Ip(e,t,n)}finally{Ye=s,V.p=r,N.T=a}}xt=1,vh(),bh(),gh()}}function vh(){if(xt===1){xt=0;var e=ga,t=Nl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=V.p;V.p=2;var r=Ye;Ye|=4;try{Fd(t,e);var i=Uc,s=tf(e.containerInfo),m=i.focusedElem,y=i.selectionRange;if(s!==m&&m&&m.ownerDocument&&ef(m.ownerDocument.documentElement,m)){if(y!==null&&lu(m)){var R=y.start,k=y.end;if(k===void 0&&(k=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(k,m.value.length);else{var Y=m.ownerDocument||document,A=Y&&Y.defaultView||window;if(A.getSelection){var H=A.getSelection(),ae=m.textContent.length,he=Math.min(y.start,ae),Ke=y.end===void 0?he:Math.min(y.end,ae);!H.extend&&he>Ke&&(s=Ke,Ke=he,he=s);var T=Is(m,he),E=Is(m,Ke);if(T&&E&&(H.rangeCount!==1||H.anchorNode!==T.node||H.anchorOffset!==T.offset||H.focusNode!==E.node||H.focusOffset!==E.offset)){var D=Y.createRange();D.setStart(T.node,T.offset),H.removeAllRanges(),he>Ke?(H.addRange(D),H.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),H.addRange(D))}}}}for(Y=[],H=m;H=H.parentNode;)H.nodeType===1&&Y.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Y.length;m++){var B=Y[m];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}mo=!!Cc,Uc=Cc=null}finally{Ye=r,V.p=a,N.T=n}}e.current=t,xt=2}}function bh(){if(xt===2){xt=0;var e=ga,t=Nl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=V.p;V.p=2;var r=Ye;Ye|=4;try{Zd(e,t.alternate,t)}finally{Ye=r,V.p=a,N.T=n}}xt=3}}function gh(){if(xt===4||xt===3){xt=0,qo();var e=ga,t=Nl,n=Fn,a=lh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,Nl=ga=null,yh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ba=null),Q(n),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ua,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,r=V.p,V.p=2,N.T=null;try{for(var i=e.onRecoverableError,s=0;s<a.length;s++){var m=a[s];i(m.value,{componentStack:m.stack})}}finally{N.T=t,V.p=r}}(Fn&3)!==0&&to(),Dn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===yc?_r++:(_r=0,yc=e):_r=0,Ar(0)}}function yh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sr(t)))}function to(){return vh(),bh(),gh(),xh()}function xh(){if(xt!==5)return!1;var e=ga,t=bc;bc=0;var n=Q(Fn),a=N.T,r=V.p;try{V.p=32>n?32:n,N.T=null,n=gc,gc=null;var i=ga,s=Fn;if(xt=0,Nl=ga=null,Fn=0,(Ye&6)!==0)throw Error(c(331));var m=Ye;if(Ye|=4,th(i.current),Wd(i,i.current,s,n),Ye=m,Ar(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ua,i)}catch{}return!0}finally{V.p=r,N.T=a,yh(e,t)}}function Sh(e,t,n){t=en(n,t),t=$u(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(aa(e,2),Dn(e))}function Qe(e,t,n){if(e.tag===3)Sh(e,e,n);else for(;t!==null;){if(t.tag===3){Sh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ba===null||!ba.has(a))){e=en(n,e),n=Ed(2),a=fa(t,n,2),a!==null&&(Od(n,a,t,e),aa(a,2),Dn(a));break}}t=t.return}}function Ec(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new nv;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(mc=!0,r.add(n),e=ov.bind(null,e,t,n),t.then(e,e))}function ov(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Je===e&&(Re&n)===n&&(it===4||it===3&&(Re&62914560)===Re&&300>ut()-Pi?(Ye&2)===0&&jl(e,0):pc|=n,Ul===Re&&(Ul=0)),Dn(e)}function Eh(e,t){t===0&&(t=La()),e=Qa(e,t),e!==null&&(aa(e,t),Dn(e))}function uv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eh(e,n)}function cv(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Eh(e,n)}function sv(e,t){return Kl(e,t)}var no=null,Ll=null,Oc=!1,ao=!1,Tc=!1,xa=0;function Dn(e){e!==Ll&&e.next===null&&(Ll===null?no=Ll=e:Ll=Ll.next=e),ao=!0,Oc||(Oc=!0,dv())}function Ar(e,t){if(!Tc&&ao){Tc=!0;do for(var n=!1,a=no;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var s=a.suspendedLanes,m=a.pingedLanes;i=(1<<31-_t(42|e)+1)-1,i&=r&~(s&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Mh(a,i))}else i=Re,i=ja(a,a===Je?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ha(a,i)||(n=!0,Mh(a,i));a=a.next}while(n);Tc=!1}}function fv(){Oh()}function Oh(){ao=Oc=!1;var e=0;xa!==0&&Ev()&&(e=xa);for(var t=ut(),n=null,a=no;a!==null;){var r=a.next,i=Th(a,t);i===0?(a.next=null,n===null?no=r:n.next=r,r===null&&(Ll=n)):(n=a,(e!==0||(i&3)!==0)&&(ao=!0)),a=r}xt!==0&&xt!==5||Ar(e),xa!==0&&(xa=0)}function Th(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-_t(i),m=1<<s,y=r[s];y===-1?((m&n)===0||(m&a)!==0)&&(r[s]=oi(m,t)):y<=t&&(e.expiredLanes|=m),i&=~m}if(t=Je,n=Re,n=ja(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Jl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ha(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Jl(a),Q(n)){case 2:case 8:n=ul;break;case 32:n=Ut;break;case 268435456:n=Fl;break;default:n=Ut}return a=zh.bind(null,e),n=Kl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Jl(a),e.callbackPriority=2,e.callbackNode=null,2}function zh(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(to()&&e.callbackNode!==n)return null;var a=Re;return a=ja(e,e===Je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ih(e,a,t),Th(e,ut()),e.callbackNode!=null&&e.callbackNode===n?zh.bind(null,e):null)}function Mh(e,t){if(to())return null;ih(e,t,!0)}function dv(){Tv(function(){(Ye&6)!==0?Kl(Pl,fv):Oh()})}function zc(){if(xa===0){var e=El;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),xa=e}return xa}function Dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function Rh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hv(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Dh((r[te]||null).action),s=a.submitter;s&&(t=(t=s[te]||null)?Dh(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var m=new pi("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var y=s?Rh(r,s):new FormData(r);Zu(n,{pending:!0,data:y,method:r.method,action:i},null,y)}}else typeof i=="function"&&(m.preventDefault(),y=s?Rh(r,s):new FormData(r),Zu(n,{pending:!0,data:y,method:r.method,action:i},i,y))},currentTarget:r}]})}}for(var Mc=0;Mc<uu.length;Mc++){var Dc=uu[Mc],mv=Dc.toLowerCase(),pv=Dc[0].toUpperCase()+Dc.slice(1);bn(mv,"on"+pv)}bn(lf,"onAnimationEnd"),bn(rf,"onAnimationIteration"),bn(of,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(wp,"onTransitionRun"),bn(Cp,"onTransitionStart"),bn(Up,"onTransitionCancel"),bn(uf,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wr));function _h(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var s=a.length-1;0<=s;s--){var m=a[s],y=m.instance,R=m.currentTarget;if(m=m.listener,y!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=R;try{i(r)}catch(k){gi(k)}r.currentTarget=null,i=y}else for(s=0;s<a.length;s++){if(m=a[s],y=m.instance,R=m.currentTarget,m=m.listener,y!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=R;try{i(r)}catch(k){gi(k)}r.currentTarget=null,i=y}}}}function Me(e,t){var n=t[de];n===void 0&&(n=t[de]=new Set);var a=e+"__bubble";n.has(a)||(Ah(t,e,2,!1),n.add(a))}function Rc(e,t,n){var a=0;t&&(a|=4),Ah(n,e,a,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[lo]){e[lo]=!0,mn.forEach(function(n){n!=="selectionchange"&&(vv.has(n)||Rc(n,!1,e),Rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Rc("selectionchange",!1,t))}}function Ah(e,t,n,a){switch(rm(t)){case 2:var r=Qv;break;case 8:r=Zv;break;default:r=Qc}n=r.bind(null,t,n,e),r=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ac(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var m=a.stateNode.containerInfo;if(m===r)break;if(s===4)for(s=a.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;m!==null;){if(s=lt(m),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){a=i=s;continue e}m=m.parentNode}}a=a.return}Ns(function(){var R=i,k=Ko(n),Y=[];e:{var A=cf.get(e);if(A!==void 0){var H=pi,ae=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":H=cp;break;case"focusin":ae="focus",H=Io;break;case"focusout":ae="blur",H=Io;break;case"beforeblur":case"afterblur":H=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=dp;break;case lf:case rf:case of:H=ep;break;case uf:H=mp;break;case"scroll":case"scrollend":H=P0;break;case"wheel":H=vp;break;case"copy":case"cut":case"paste":H=np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=qs;break;case"toggle":case"beforetoggle":H=gp}var he=(t&4)!==0,Ke=!he&&(e==="scroll"||e==="scrollend"),T=he?A!==null?A+"Capture":null:A;he=[];for(var E=R,D;E!==null;){var B=E;if(D=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||D===null||T===null||(B=Il(E,T),B!=null&&he.push(Cr(E,B,D))),Ke)break;E=E.return}0<he.length&&(A=new H(A,ae,null,n,k),Y.push({event:A,listeners:he}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",A&&n!==Vo&&(ae=n.relatedTarget||n.fromElement)&&(lt(ae)||ae[re]))break e;if((H||A)&&(A=k.window===k?k:(A=k.ownerDocument)?A.defaultView||A.parentWindow:window,H?(ae=n.relatedTarget||n.toElement,H=R,ae=ae?lt(ae):null,ae!==null&&(Ke=d(ae),he=ae.tag,ae!==Ke||he!==5&&he!==27&&he!==6)&&(ae=null)):(H=null,ae=R),H!==ae)){if(he=Ls,B="onMouseLeave",T="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(he=qs,B="onPointerLeave",T="onPointerEnter",E="pointer"),Ke=H==null?A:Et(H),D=ae==null?A:Et(ae),A=new he(B,E+"leave",H,n,k),A.target=Ke,A.relatedTarget=D,B=null,lt(k)===R&&(he=new he(T,E+"enter",ae,n,k),he.target=D,he.relatedTarget=Ke,B=he),Ke=B,H&&ae)t:{for(he=bv,T=H,E=ae,D=0,B=T;B;B=he(B))D++;B=0;for(var se=E;se;se=he(se))B++;for(;0<D-B;)T=he(T),D--;for(;0<B-D;)E=he(E),B--;for(;D--;){if(T===E||E!==null&&T===E.alternate){he=T;break t}T=he(T),E=he(E)}he=null}else he=null;H!==null&&wh(Y,A,H,he,!1),ae!==null&&Ke!==null&&wh(Y,Ke,ae,he,!0)}}e:{if(A=R?Et(R):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var ke=Ks;else if(Zs(A))if(Js)ke=Rp;else{ke=Mp;var le=zp}else H=A.nodeName,!H||H.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?R&&Zo(R.elementType)&&(ke=Ks):ke=Dp;if(ke&&(ke=ke(e,R))){Vs(Y,ke,n,k);break e}le&&le(e,A,R),e==="focusout"&&R&&A.type==="number"&&R.memoizedProps.value!=null&&Qo(A,"number",A.value)}switch(le=R?Et(R):window,e){case"focusin":(Zs(le)||le.contentEditable==="true")&&(ml=le,ru=R,or=null);break;case"focusout":or=ru=ml=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,nf(Y,n,k);break;case"selectionchange":if(Ap)break;case"keydown":case"keyup":nf(Y,n,k)}var Ee;if(tu)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else hl?Gs(e,n)&&(_e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_e="onCompositionStart");_e&&(Bs&&n.locale!=="ko"&&(hl||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&hl&&(Ee=js()):(la=k,Fo="value"in la?la.value:la.textContent,hl=!0)),le=ro(R,_e),0<le.length&&(_e=new ks(_e,e,null,n,k),Y.push({event:_e,listeners:le}),Ee?_e.data=Ee:(Ee=Qs(n),Ee!==null&&(_e.data=Ee)))),(Ee=xp?Sp(e,n):Ep(e,n))&&(_e=ro(R,"onBeforeInput"),0<_e.length&&(le=new ks("onBeforeInput","beforeinput",null,n,k),Y.push({event:le,listeners:_e}),le.data=Ee)),hv(Y,e,R,n,k)}_h(Y,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Il(e,n),r!=null&&a.unshift(Cr(e,r,i)),r=Il(e,t),r!=null&&a.push(Cr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function bv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wh(e,t,n,a,r){for(var i=t._reactName,s=[];n!==null&&n!==a;){var m=n,y=m.alternate,R=m.stateNode;if(m=m.tag,y!==null&&y===a)break;m!==5&&m!==26&&m!==27||R===null||(y=R,r?(R=Il(n,i),R!=null&&s.unshift(Cr(n,R,y))):r||(R=Il(n,i),R!=null&&s.push(Cr(n,R,y)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Ch(e){return(typeof e=="string"?e:""+e).replace(gv,`
`).replace(yv,"")}function Uh(e,t){return t=Ch(t),Ch(e)===t}function Ve(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||sl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&sl(e,""+a);break;case"className":vn(e,"class",a);break;case"tabIndex":vn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":vn(e,n,a);break;case"style":Cs(e,a,i);break;case"data":if(t!=="object"){vn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=fi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",r.name,r,null),Ve(e,t,"formEncType",r.formEncType,r,null),Ve(e,t,"formMethod",r.formMethod,r,null),Ve(e,t,"formTarget",r.formTarget,r,null)):(Ve(e,t,"encType",r.encType,r,null),Ve(e,t,"method",r.method,r,null),Ve(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=fi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=jn);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=fi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ct(e,"popover",a);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ct(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=K0.get(n)||n,ct(e,n,a))}}function wc(e,t,n,a,r,i){switch(n){case"style":Cs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?sl(e,a):(typeof a=="number"||typeof a=="bigint")&&sl(e,""+a);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yt.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[te]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ct(e,n,a)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,i,s,n,null)}}r&&Ve(e,t,"srcSet",n.srcSet,n,null),a&&Ve(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var m=i=s=r=null,y=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var k=n[a];if(k!=null)switch(a){case"name":r=k;break;case"type":s=k;break;case"checked":y=k;break;case"defaultChecked":R=k;break;case"value":i=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ve(e,t,a,k,n,null)}}Rs(e,i,m,y,R,s,r,!1);return;case"select":Me("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":i=m;break;case"defaultValue":s=m;break;case"multiple":a=m;default:Ve(e,t,r,m,n,null)}t=i,n=s,e.multiple=!!a,t!=null?cl(e,!!a,t,!1):n!=null&&cl(e,!!a,n,!0);return;case"textarea":Me("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(m=n[s],m!=null))switch(s){case"value":a=m;break;case"defaultValue":r=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Ve(e,t,s,m,n,null)}As(e,a,r,i);return;case"option":for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ve(e,t,y,a,n,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(a=0;a<wr.length;a++)Me(wr[a],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,R,a,n,null)}return;default:if(Zo(t)){for(k in n)n.hasOwnProperty(k)&&(a=n[k],a!==void 0&&wc(e,t,k,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Ve(e,t,m,a,n,null))}function xv(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,s=null,m=null,y=null,R=null,k=null;for(H in n){var Y=n[H];if(n.hasOwnProperty(H)&&Y!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":y=Y;default:a.hasOwnProperty(H)||Ve(e,t,H,null,a,Y)}}for(var A in a){var H=a[A];if(Y=n[A],a.hasOwnProperty(A)&&(H!=null||Y!=null))switch(A){case"type":i=H;break;case"name":r=H;break;case"checked":R=H;break;case"defaultChecked":k=H;break;case"value":s=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:H!==Y&&Ve(e,t,A,H,a,Y)}}Go(e,s,m,y,R,k,i,r);return;case"select":H=s=m=A=null;for(i in n)if(y=n[i],n.hasOwnProperty(i)&&y!=null)switch(i){case"value":break;case"multiple":H=y;default:a.hasOwnProperty(i)||Ve(e,t,i,null,a,y)}for(r in a)if(i=a[r],y=n[r],a.hasOwnProperty(r)&&(i!=null||y!=null))switch(r){case"value":A=i;break;case"defaultValue":m=i;break;case"multiple":s=i;default:i!==y&&Ve(e,t,r,i,a,y)}t=m,n=s,a=H,A!=null?cl(e,!!n,A,!1):!!a!=!!n&&(t!=null?cl(e,!!n,t,!0):cl(e,!!n,n?[]:"",!1));return;case"textarea":H=A=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ve(e,t,m,null,a,r)}for(s in a)if(r=a[s],i=n[s],a.hasOwnProperty(s)&&(r!=null||i!=null))switch(s){case"value":A=r;break;case"defaultValue":H=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&Ve(e,t,s,r,a,i)}_s(e,A,H);return;case"option":for(var ae in n)A=n[ae],n.hasOwnProperty(ae)&&A!=null&&!a.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:Ve(e,t,ae,null,a,A));for(y in a)A=a[y],H=n[y],a.hasOwnProperty(y)&&A!==H&&(A!=null||H!=null)&&(y==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ve(e,t,y,A,a,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)A=n[he],n.hasOwnProperty(he)&&A!=null&&!a.hasOwnProperty(he)&&Ve(e,t,he,null,a,A);for(R in a)if(A=a[R],H=n[R],a.hasOwnProperty(R)&&A!==H&&(A!=null||H!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ve(e,t,R,A,a,H)}return;default:if(Zo(t)){for(var Ke in n)A=n[Ke],n.hasOwnProperty(Ke)&&A!==void 0&&!a.hasOwnProperty(Ke)&&wc(e,t,Ke,void 0,a,A);for(k in a)A=a[k],H=n[k],!a.hasOwnProperty(k)||A===H||A===void 0&&H===void 0||wc(e,t,k,A,a,H);return}}for(var T in n)A=n[T],n.hasOwnProperty(T)&&A!=null&&!a.hasOwnProperty(T)&&Ve(e,t,T,null,a,A);for(Y in a)A=a[Y],H=n[Y],!a.hasOwnProperty(Y)||A===H||A==null&&H==null||Ve(e,t,Y,A,a,H)}function Nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,s=r.initiatorType,m=r.duration;if(i&&m&&Nh(s)){for(s=0,m=r.responseEnd,a+=1;a<n.length;a++){var y=n[a],R=y.startTime;if(R>m)break;var k=y.transferSize,Y=y.initiatorType;k&&Nh(Y)&&(y=y.responseEnd,s+=k*(y<m?1:(m-R)/(y-R)))}if(--a,t+=8*(i+s)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cc=null,Uc=null;function io(e){return e.nodeType===9?e:e.ownerDocument}function jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=null;function Ev(){var e=window.event;return e&&e.type==="popstate"?e===jc?!1:(jc=e,!0):(jc=null,!1)}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Ov=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Tv=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(zv)}:Lh;function zv(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function qh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),Yl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ur(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ur(n);for(var i=n.firstChild;i;){var s=i.nextSibling,m=i.nodeName;i[nt]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&Ur(e.ownerDocument.body);n=r}while(n);Yl(t)}function Bh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),at(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Mv(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[nt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function Dv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function Yh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rn(e.nextSibling),e===null))return null;return e}function Lc(e){return e.data==="$?"||e.data==="$~"}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qc=null;function Xh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qh(e,t,n){switch(t=io(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ur(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);at(e)}var on=new Map,Zh=new Set;function oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=V.d;V.d={f:_v,r:Av,D:wv,C:Cv,L:Uv,m:Nv,X:Hv,S:jv,M:Lv};function _v(){var e=$n.f(),t=Wi();return e||t}function Av(e){var t=Ce(e);t!==null&&t.tag===5&&t.type==="form"?ud(t):$n.r(e)}var kl=typeof document>"u"?null:document;function Vh(e,t,n){var a=kl;if(a&&typeof t=="string"&&t){var r=Wt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Zh.has(r)||(Zh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Rt(t,"link",e),$e(t),a.head.appendChild(t)))}}function wv(e){$n.D(e),Vh("dns-prefetch",e,null)}function Cv(e,t){$n.C(e,t),Vh("preconnect",e,t)}function Uv(e,t,n){$n.L(e,t,n);var a=kl;if(a&&e&&t){var r='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Wt(n.imageSizes)+'"]')):r+='[href="'+Wt(e)+'"]';var i=r;switch(t){case"style":i=ql(e);break;case"script":i=Bl(e)}on.has(i)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),on.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Nr(i))||t==="script"&&a.querySelector(jr(i))||(t=a.createElement("link"),Rt(t,"link",e),$e(t),a.head.appendChild(t)))}}function Nv(e,t){$n.m(e,t);var n=kl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Wt(a)+'"][href="'+Wt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!on.has(i)&&(e=S({rel:"modulepreload",href:e},t),on.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jr(i)))return}a=n.createElement("link"),Rt(a,"link",e),$e(a),n.head.appendChild(a)}}}function jv(e,t,n){$n.S(e,t,n);var a=kl;if(a&&e){var r=Nt(a).hoistableStyles,i=ql(e);t=t||"default";var s=r.get(i);if(!s){var m={loading:0,preload:null};if(s=a.querySelector(Nr(i)))m.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=on.get(i))&&Bc(e,n);var y=s=a.createElement("link");$e(y),Rt(y,"link",e),y._p=new Promise(function(R,k){y.onload=R,y.onerror=k}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,uo(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:m},r.set(i,s)}}}function Hv(e,t){$n.X(e,t);var n=kl;if(n&&e){var a=Nt(n).hoistableScripts,r=Bl(e),i=a.get(r);i||(i=n.querySelector(jr(r)),i||(e=S({src:e,async:!0},t),(t=on.get(r))&&Yc(e,t),i=n.createElement("script"),$e(i),Rt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Lv(e,t){$n.M(e,t);var n=kl;if(n&&e){var a=Nt(n).hoistableScripts,r=Bl(e),i=a.get(r);i||(i=n.querySelector(jr(r)),i||(e=S({src:e,async:!0,type:"module"},t),(t=on.get(r))&&Yc(e,t),i=n.createElement("script"),$e(i),Rt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Kh(e,t,n,a){var r=(r=ge.current)?oo(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ql(n.href),n=Nt(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ql(n.href);var i=Nt(r).hoistableStyles,s=i.get(e);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=r.querySelector(Nr(e)))&&!i._p&&(s.instance=i,s.state.loading=5),on.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},on.set(e,n),i||kv(r,e,n,s.state))),t&&a===null)throw Error(c(528,""));return s}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(n),n=Nt(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ql(e){return'href="'+Wt(e)+'"'}function Nr(e){return'link[rel="stylesheet"]['+e+"]"}function Jh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function kv(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Rt(t,"link",n),$e(t),e.head.appendChild(t))}function Bl(e){return'[src="'+Wt(e)+'"]'}function jr(e){return"script[async]"+e}function Ph(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Wt(n.href)+'"]');if(a)return t.instance=a,$e(a),a;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),$e(a),Rt(a,"style",r),uo(a,n.precedence,e),t.instance=a;case"stylesheet":r=ql(n.href);var i=e.querySelector(Nr(r));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;a=Jh(n),(r=on.get(r))&&Bc(a,r),i=(e.ownerDocument||e).createElement("link"),$e(i);var s=i;return s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),Rt(i,"link",a),t.state.loading|=4,uo(i,n.precedence,e),t.instance=i;case"script":return i=Bl(n.src),(r=e.querySelector(jr(i)))?(t.instance=r,$e(r),r):(a=n,(r=on.get(i))&&(a=S({},n),Yc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),$e(r),Rt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,uo(a,n.precedence,e));return t.instance}function uo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,s=0;s<a.length;s++){var m=a[s];if(m.dataset.precedence===t)i=m;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var co=null;function Fh(e,t,n){if(co===null){var a=new Map,r=co=new Map;r.set(n,a)}else r=co,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[nt]||i[W]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var m=a.get(s);m?m.push(i):a.set(s,[i])}}return a}function $h(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bv(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ql(a.href),i=t.querySelector(Nr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=so.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,$e(i);return}i=t.ownerDocument||t,a=Jh(a),(r=on.get(r))&&Bc(a,r),i=i.createElement("link"),$e(i);var s=i;s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),Rt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=so.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xc=0;function Yv(e,t){return e.stylesheets&&e.count===0&&ho(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ho(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*Sv());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ho(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function so(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ho(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fo=null;function ho(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fo=new Map,t.forEach(Xv,e),fo=null,so.call(e))}function Xv(e,t){if(!(t.state.loading&4)){var n=fo.get(e);if(n)var a=n.get(null);else{n=new Map,fo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var s=r[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}r=t.instance,s=r.getAttribute("data-precedence"),i=n.get(s)||a,i===a&&n.set(null,r),n.set(s,r),this.count++,a=so.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Hr={$$typeof:$,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Gv(e,t,n,a,r,i,s,m,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.hiddenUpdates=na(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Ih(e,t,n,a,r,i,s,m,y,R,k,Y){return e=new Gv(e,t,n,s,y,R,k,Y,m),t=1,i===!0&&(t|=24),i=Gt(3,null,null,t),e.current=i,i.stateNode=e,t=Su(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},zu(i),e}function em(e){return e?(e=bl,e):bl}function tm(e,t,n,a,r,i){r=em(r),a.context===null?a.context=r:a.pendingContext=r,a=sa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=fa(e,a,t),n!==null&&(Bt(n,e,t),mr(n,e,t))}function nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){nm(e,t),(e=e.alternate)&&nm(e,t)}function am(e){if(e.tag===13||e.tag===31){var t=Qa(e,67108864);t!==null&&Bt(t,e,67108864),Gc(e,67108864)}}function lm(e){if(e.tag===13||e.tag===31){var t=Jt();t=U(t);var n=Qa(e,t);n!==null&&Bt(n,e,t),Gc(e,t)}}var mo=!0;function Qv(e,t,n,a){var r=N.T;N.T=null;var i=V.p;try{V.p=2,Qc(e,t,n,a)}finally{V.p=i,N.T=r}}function Zv(e,t,n,a){var r=N.T;N.T=null;var i=V.p;try{V.p=8,Qc(e,t,n,a)}finally{V.p=i,N.T=r}}function Qc(e,t,n,a){if(mo){var r=Zc(a);if(r===null)Ac(e,t,a,po,n),im(e,a);else if(Kv(r,e,t,n,a))a.stopPropagation();else if(im(e,a),t&4&&-1<Vv.indexOf(e)){for(;r!==null;){var i=Ce(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Un(i.pendingLanes);if(s!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var y=1<<31-_t(s);m.entanglements[1]|=y,s&=~y}Dn(i),(Ye&6)===0&&(Fi=ut()+500,Ar(0))}}break;case 31:case 13:m=Qa(i,2),m!==null&&Bt(m,i,2),Wi(),Gc(i,2)}if(i=Zc(a),i===null&&Ac(e,t,a,po,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Ac(e,t,a,null,n)}}function Zc(e){return e=Ko(e),Vc(e)}var po=null;function Vc(e){if(po=null,e=lt(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return po=e,null}function rm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ca()){case Pl:return 2;case ul:return 8;case Ut:case dn:return 32;case Fl:return 268435456;default:return 32}default:return 32}}var Kc=!1,Ea=null,Oa=null,Ta=null,Lr=new Map,kr=new Map,za=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function im(e,t){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function qr(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ce(t),t!==null&&am(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Kv(e,t,n,a,r){switch(t){case"focusin":return Ea=qr(Ea,e,t,n,a,r),!0;case"dragenter":return Oa=qr(Oa,e,t,n,a,r),!0;case"mouseover":return Ta=qr(Ta,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Lr.set(i,qr(Lr.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,kr.set(i,qr(kr.get(i)||null,e,t,n,a,r)),!0}return!1}function om(e){var t=lt(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,ie(e.priority,function(){lm(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,ie(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Vo=a,n.target.dispatchEvent(a),Vo=null}else return t=Ce(n),t!==null&&am(t),e.blockedOn=n,!1;t.shift()}return!0}function um(e,t,n){vo(e)&&n.delete(t)}function Jv(){Kc=!1,Ea!==null&&vo(Ea)&&(Ea=null),Oa!==null&&vo(Oa)&&(Oa=null),Ta!==null&&vo(Ta)&&(Ta=null),Lr.forEach(um),kr.forEach(um)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Jv)))}var go=null;function cm(e){go!==e&&(go=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){go===e&&(go=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Vc(a||n)===null)continue;break}var i=Ce(n);i!==null&&(e.splice(t,3),t-=3,Zu(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Yl(e){function t(y){return bo(y,e)}Ea!==null&&bo(Ea,e),Oa!==null&&bo(Oa,e),Ta!==null&&bo(Ta,e),Lr.forEach(t),kr.forEach(t);for(var n=0;n<za.length;n++){var a=za[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<za.length&&(n=za[0],n.blockedOn===null);)om(n),n.blockedOn===null&&za.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],s=r[te]||null;if(typeof i=="function")s||cm(n);else if(s){var m=null;if(i&&i.hasAttribute("formAction")){if(r=i,s=i[te]||null)m=s.formAction;else if(Vc(r)!==null)continue}else m=s.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),cm(n)}}}function sm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Jc(e){this._internalRoot=e}yo.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Jt();tm(n,a,e,t,null,null)},yo.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tm(e.current,2,null,e,null,null),Wi(),t[re]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=J();e={blockedOn:null,target:e,priority:t};for(var n=0;n<za.length&&t!==0&&t<za[n].priority;n++);za.splice(n,0,e),n===0&&om(e)}};var fm=o.version;if(fm!=="19.2.3")throw Error(c(527,fm,"19.2.3"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var Pv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ua=xo.inject(Pv),tt=xo}catch{}}return Yr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",r=gd,i=yd,s=xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ih(e,1,!1,null,null,n,a,null,r,i,s,sm),e[re]=t.current,_c(e),new Jc(t)},Yr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,r="",i=gd,s=yd,m=xd,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=Ih(e,1,!0,t,n??null,a,r,y,i,s,m,sm),t.context=em(null),n=t.current,a=Jt(),a=U(a),r=sa(a),r.callback=null,fa(n,r,a),n=a,t.current.lanes=n,aa(t,n),Dn(t),e[re]=t.current,_c(e),new yo(t)},Yr.version="19.2.3",Yr}var Sm;function ob(){if(Sm)return $c.exports;Sm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),$c.exports=ib(),$c.exports}var ub=ob();var r0=l=>{throw TypeError(l)},cb=(l,o,u)=>o.has(l)||r0("Cannot "+u),ts=(l,o,u)=>(cb(l,o,"read from private field"),u?u.call(l):o.get(l)),sb=(l,o,u)=>o.has(l)?r0("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(l):o.set(l,u),Em="popstate";function fb(l={}){function o(f,d){let{pathname:h="/",search:b="",hash:v=""}=ea(f.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Pr("",{pathname:h,search:b,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(f,d){let h=f.document.querySelector("base"),b="";if(h&&h.getAttribute("href")){let v=f.location.href,p=v.indexOf("#");b=p===-1?v:v.slice(0,p)}return b+"#"+(typeof d=="string"?d:_n(d))}function c(f,d){ht(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return hb(o,u,c,l)}function Te(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function ht(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function db(){return Math.random().toString(36).substring(2,10)}function Om(l,o){return{usr:l.state,key:l.key,idx:o}}function Pr(l,o,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?ea(o):o,state:u,key:o&&o.key||c||db()}}function _n({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function ea(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function hb(l,o,u,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,h=f.history,b="POP",v=null,p=O();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function O(){return(h.state||{idx:null}).idx}function S(){b="POP";let X=O(),P=X==null?null:X-p;p=X,v&&v({action:b,location:_.location,delta:P})}function w(X,P){b="PUSH";let Z=Pr(_.location,X,P);u&&u(Z,X),p=O()+1;let $=Om(Z,p),ve=_.createHref(Z);try{h.pushState($,"",ve)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;f.location.assign(ve)}d&&v&&v({action:b,location:_.location,delta:1})}function C(X,P){b="REPLACE";let Z=Pr(_.location,X,P);u&&u(Z,X),p=O();let $=Om(Z,p),ve=_.createHref(Z);h.replaceState($,"",ve),d&&v&&v({action:b,location:_.location,delta:0})}function q(X){return i0(X)}let _={get action(){return b},get location(){return l(f,h)},listen(X){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(Em,S),v=X,()=>{f.removeEventListener(Em,S),v=null}},createHref(X){return o(f,X)},createURL:q,encodeLocation(X){let P=q(X);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:C,go(X){return h.go(X)}};return _}function i0(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Te(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:_n(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}var Zr,Tm=class{constructor(l){if(sb(this,Zr,new Map),l)for(let[o,u]of l)this.set(o,u)}get(l){if(ts(this,Zr).has(l))return ts(this,Zr).get(l);if(l.defaultValue!==void 0)return l.defaultValue;throw new Error("No value found for context")}set(l,o){ts(this,Zr).set(l,o)}};Zr=new WeakMap;var mb=new Set(["lazy","caseSensitive","path","id","index","children"]);function pb(l){return mb.has(l)}var vb=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function bb(l){return vb.has(l)}function gb(l){return l.index===!0}function Fr(l,o,u=[],c={},f=!1){return l.map((d,h)=>{let b=[...u,String(h)],v=typeof d.id=="string"?d.id:b.join("-");if(Te(d.index!==!0||!d.children,"Cannot specify children on an index route"),Te(f||!c[v],`Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`),gb(d)){let p={...d,id:v};return c[v]=zm(p,o(p)),p}else{let p={...d,id:v,children:void 0};return c[v]=zm(p,o(p)),d.children&&(p.children=Fr(d.children,o,b,c,f)),p}})}function zm(l,o){return Object.assign(l,{...o,...typeof o.lazy=="object"&&o.lazy!=null?{lazy:{...l.lazy,...o.lazy}}:{}})}function Ra(l,o,u="/"){return Vr(l,o,u,!1)}function Vr(l,o,u,c){let f=typeof o=="string"?ea(o):o,d=cn(f.pathname||"/",u);if(d==null)return null;let h=o0(l);xb(h);let b=null;for(let v=0;b==null&&v<h.length;++v){let p=wb(d);b=_b(h[v],p,c)}return b}function yb(l,o){let{route:u,pathname:c,params:f}=l;return{id:u.id,pathname:c,params:f,data:o[u.id],loaderData:o[u.id],handle:u.handle}}function o0(l,o=[],u=[],c="",f=!1){let d=(h,b,v=f,p)=>{let O={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};if(O.relativePath.startsWith("/")){if(!O.relativePath.startsWith(c)&&v)return;Te(O.relativePath.startsWith(c),`Absolute route path "${O.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),O.relativePath=O.relativePath.slice(c.length)}let S=Rn([c,O.relativePath]),w=u.concat(O);h.children&&h.children.length>0&&(Te(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),o0(h.children,o,w,S,v)),!(h.path==null&&!h.index)&&o.push({path:S,score:Db(S,h.index),routesMeta:w})};return l.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))d(h,b);else for(let v of u0(h.path))d(h,b,!0,v)}),o}function u0(l){let o=l.split("/");if(o.length===0)return[];let[u,...c]=o,f=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let h=u0(c.join("/")),b=[];return b.push(...h.map(v=>v===""?d:[d,v].join("/"))),f&&b.push(...h),b.map(v=>l.startsWith("/")&&v===""?"/":v)}function xb(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Rb(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Sb=/^:[\w-]+$/,Eb=3,Ob=2,Tb=1,zb=10,Mb=-2,Mm=l=>l==="*";function Db(l,o){let u=l.split("/"),c=u.length;return u.some(Mm)&&(c+=Mb),o&&(c+=Ob),u.filter(f=>!Mm(f)).reduce((f,d)=>f+(Sb.test(d)?Eb:d===""?Tb:zb),c)}function Rb(l,o){return l.length===o.length&&l.slice(0,-1).every((c,f)=>c===o[f])?l[l.length-1]-o[o.length-1]:0}function _b(l,o,u=!1){let{routesMeta:c}=l,f={},d="/",h=[];for(let b=0;b<c.length;++b){let v=c[b],p=b===c.length-1,O=d==="/"?o:o.slice(d.length)||"/",S=_o({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},O),w=v.route;if(!S&&p&&u&&!c[c.length-1].route.index&&(S=_o({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},O)),!S)return null;Object.assign(f,S.params),h.push({params:f,pathname:Rn([d,S.pathname]),pathnameBase:Nb(Rn([d,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(d=Rn([d,S.pathnameBase]))}return h}function _o(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=Ab(l.path,l.caseSensitive,l.end),f=o.match(u);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:c.reduce((p,{paramName:O,isOptional:S},w)=>{if(O==="*"){let q=b[w]||"";h=d.slice(0,d.length-q.length).replace(/(.)\/+$/,"$1")}const C=b[w];return S&&!C?p[O]=void 0:p[O]=(C||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:h,pattern:l}}function Ab(l,o=!1,u=!0){ht(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,v)=>(c.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function wb(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return ht(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function cn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}function Cb({basename:l,pathname:o}){return o==="/"?l:Rn([l,o])}var c0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=l=>c0.test(l);function Ub(l,o="/"){let{pathname:u,search:c="",hash:f=""}=typeof l=="string"?ea(l):l,d;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?d=Dm(u.substring(1),"/"):d=Dm(u,o)):d=o,{pathname:d,search:jb(c),hash:Hb(f)}}function Dm(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function ns(l,o,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function s0(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function ps(l){let o=s0(l);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function vs(l,o,u,c=!1){let f;typeof l=="string"?f=ea(l):(f={...l},Te(!f.pathname||!f.pathname.includes("?"),ns("?","pathname","search",f)),Te(!f.pathname||!f.pathname.includes("#"),ns("#","pathname","hash",f)),Te(!f.search||!f.search.includes("#"),ns("#","search","hash",f)));let d=l===""||f.pathname==="",h=d?"/":f.pathname,b;if(h==null)b=u;else{let S=o.length-1;if(!c&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),S-=1;f.pathname=w.join("/")}b=S>=0?o[S]:"/"}let v=Ub(f,b),p=h&&h!=="/"&&h.endsWith("/"),O=(d||h===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(p||O)&&(v.pathname+="/"),v}var Rn=l=>l.join("/").replace(/\/\/+/g,"/"),Nb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),jb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Hb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Ir=class{constructor(l,o,u,c=!1){this.status=l,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function $r(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function ei(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var f0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function d0(l,o){let u=l;if(typeof u!="string"||!c0.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,f=!1;if(f0)try{let d=new URL(window.location.href),h=u.startsWith("//")?new URL(d.protocol+u):new URL(u),b=cn(h.pathname,o);h.origin===d.origin&&b!=null?u=b+h.search+h.hash:f=!0}catch{ht(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:u}}var Aa=Symbol("Uninstrumented");function Lb(l,o){let u={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};l.forEach(f=>f({id:o.id,index:o.index,path:o.path,instrument(d){let h=Object.keys(u);for(let b of h)d[b]&&u[b].push(d[b])}}));let c={};if(typeof o.lazy=="function"&&u.lazy.length>0){let f=Ql(u.lazy,o.lazy,()=>{});f&&(c.lazy=f)}if(typeof o.lazy=="object"){let f=o.lazy;["middleware","loader","action"].forEach(d=>{let h=f[d],b=u[`lazy.${d}`];if(typeof h=="function"&&b.length>0){let v=Ql(b,h,()=>{});v&&(c.lazy=Object.assign(c.lazy||{},{[d]:v}))}})}return["loader","action"].forEach(f=>{let d=o[f];if(typeof d=="function"&&u[f].length>0){let h=d[Aa]??d,b=Ql(u[f],h,(...v)=>Rm(v[0]));b&&(f==="loader"&&h.hydrate===!0&&(b.hydrate=!0),b[Aa]=h,c[f]=b)}}),o.middleware&&o.middleware.length>0&&u.middleware.length>0&&(c.middleware=o.middleware.map(f=>{let d=f[Aa]??f,h=Ql(u.middleware,d,(...b)=>Rm(b[0]));return h?(h[Aa]=d,h):f})),c}function kb(l,o){let u={navigate:[],fetch:[]};if(o.forEach(c=>c({instrument(f){let d=Object.keys(f);for(let h of d)f[h]&&u[h].push(f[h])}})),u.navigate.length>0){let c=l.navigate[Aa]??l.navigate,f=Ql(u.navigate,c,(...d)=>{let[h,b]=d;return{to:typeof h=="number"||typeof h=="string"?h:h?_n(h):".",..._m(l,b??{})}});f&&(f[Aa]=c,l.navigate=f)}if(u.fetch.length>0){let c=l.fetch[Aa]??l.fetch,f=Ql(u.fetch,c,(...d)=>{let[h,,b,v]=d;return{href:b??".",fetcherKey:h,..._m(l,v??{})}});f&&(f[Aa]=c,l.fetch=f)}return l}function Ql(l,o,u){return l.length===0?null:async(...c)=>{let f=await h0(l,u(...c),()=>o(...c),l.length-1);if(f.type==="error")throw f.value;return f.value}}async function h0(l,o,u,c){let f=l[c],d;if(f){let h,b=async()=>(h?console.error("You cannot call instrumented handlers more than once"):h=h0(l,o,u,c-1),d=await h,Te(d,"Expected a result"),d.type==="error"&&d.value instanceof Error?{status:"error",error:d.value}:{status:"success",error:void 0});try{await f(b,o)}catch(v){console.error("An instrumentation function threw an error:",v)}h||await b(),await h}else try{d={type:"success",value:await u()}}catch(h){d={type:"error",value:h}}return d||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Rm(l){let{request:o,context:u,params:c,unstable_pattern:f}=l;return{request:qb(o),params:{...c},unstable_pattern:f,context:Bb(u)}}function _m(l,o){return{currentUrl:_n(l.state.location),..."formMethod"in o?{formMethod:o.formMethod}:{},..."formEncType"in o?{formEncType:o.formEncType}:{},..."formData"in o?{formData:o.formData}:{},..."body"in o?{body:o.body}:{}}}function qb(l){return{method:l.method,url:l.url,headers:{get:(...o)=>l.headers.get(...o)}}}function Bb(l){if(Xb(l)){let o={...l};return Object.freeze(o),o}else return{get:o=>l.get(o)}}var Yb=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xb(l){if(l===null||typeof l!="object")return!1;const o=Object.getPrototypeOf(l);return o===Object.prototype||o===null||Object.getOwnPropertyNames(o).sort().join("\0")===Yb}var m0=["POST","PUT","PATCH","DELETE"],Gb=new Set(m0),Qb=["GET",...m0],Zb=new Set(Qb),p0=new Set([301,302,303,307,308]),Vb=new Set([307,308]),as={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Kb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Jb=l=>({hasErrorBoundary:!!l.hasErrorBoundary}),v0="remix-router-transitions",b0=Symbol("ResetLoaderData");function Pb(l){const o=l.window?l.window:typeof window<"u"?window:void 0,u=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u";Te(l.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=l.hydrationRouteProperties||[],f=l.mapRouteProperties||Jb,d=f;if(l.unstable_instrumentations){let g=l.unstable_instrumentations;d=z=>({...f(z),...Lb(g.map(U=>U.route).filter(Boolean),z)})}let h={},b=Fr(l.routes,d,void 0,h),v,p=l.basename||"/";p.startsWith("/")||(p=`/${p}`);let O=l.dataStrategy||eg,S={...l.future},w=null,C=new Set,q=null,_=null,X=null,P=l.hydrationData!=null,Z=Ra(b,l.history.location,p),$=!1,ve=null,me;if(Z==null&&!l.patchRoutesOnNavigation){let g=un(404,{pathname:l.history.location.pathname}),{matches:z,route:U}=So(b);me=!0,Z=z,ve={[U.id]:g}}else if(Z&&!l.hydrationData&&La(Z,b,l.history.location.pathname).active&&(Z=null),Z)if(Z.some(g=>g.route.lazy))me=!1;else if(!Z.some(g=>bs(g.route)))me=!0;else{let g=l.hydrationData?l.hydrationData.loaderData:null,z=l.hydrationData?l.hydrationData.errors:null;if(z){let U=Z.findIndex(Q=>z[Q.route.id]!==void 0);me=Z.slice(0,U+1).every(Q=>!cs(Q.route,g,z))}else me=Z.every(U=>!cs(U.route,g,z))}else{me=!1,Z=[];let g=La(null,b,l.history.location.pathname);g.active&&g.matches&&($=!0,Z=g.matches)}let be,M={historyAction:l.history.action,location:l.history.location,matches:Z,initialized:me,navigation:as,restoreScrollPosition:l.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:l.hydrationData&&l.hydrationData.loaderData||{},actionData:l.hydrationData&&l.hydrationData.actionData||null,errors:l.hydrationData&&l.hydrationData.errors||ve,fetchers:new Map,blockers:new Map},ne="POP",fe=null,Be=!1,De,Le=!1,yt=new Map,Xe=null,Oe=!1,N=!1,V=new Set,F=new Map,pe=0,xe=-1,x=new Map,L=new Set,K=new Map,I=new Map,ce=new Set,ge=new Map,Ae,ot=null;function et(){if(w=l.history.listen(({action:g,location:z,delta:U})=>{if(Ae){Ae(),Ae=void 0;return}ht(ge.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=Na({currentLocation:M.location,nextLocation:z,historyAction:g});if(Q&&U!=null){let J=new Promise(ie=>{Ae=ie});l.history.go(U*-1),Cn(Q,{state:"blocked",location:z,proceed(){Cn(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),J.then(()=>l.history.go(U))},reset(){let ie=new Map(M.blockers);ie.set(Q,Xr),mt({blockers:ie})}}),fe?.resolve(),fe=null;return}return fn(g,z)}),u){gg(o,yt);let g=()=>yg(o,yt);o.addEventListener("pagehide",g),Xe=()=>o.removeEventListener("pagehide",g)}return M.initialized||fn("POP",M.location,{initialHydration:!0}),be}function wa(){w&&w(),Xe&&Xe(),C.clear(),De&&De.abort(),M.fetchers.forEach((g,z)=>$l(z)),M.blockers.forEach((g,z)=>ii(z))}function il(g){return C.add(g),()=>C.delete(g)}function mt(g,z={}){g.matches&&(g.matches=g.matches.map(J=>{let ie=h[J.route.id],ee=J.route;return ee.element!==ie.element||ee.errorElement!==ie.errorElement||ee.hydrateFallbackElement!==ie.hydrateFallbackElement?{...J,route:ie}:J})),M={...M,...g};let U=[],Q=[];M.fetchers.forEach((J,ie)=>{J.state==="idle"&&(ce.has(ie)?U.push(ie):Q.push(ie))}),ce.forEach(J=>{!M.fetchers.has(J)&&!F.has(J)&&U.push(J)}),[...C].forEach(J=>J(M,{deletedFetchers:U,newErrors:g.errors??null,viewTransitionOpts:z.viewTransitionOpts,flushSync:z.flushSync===!0})),U.forEach(J=>$l(J)),Q.forEach(J=>M.fetchers.delete(J))}function wn(g,z,{flushSync:U}={}){let Q=M.actionData!=null&&M.navigation.formMethod!=null&&wt(M.navigation.formMethod)&&M.navigation.state==="loading"&&g.state?._isRedirect!==!0,J;z.actionData?Object.keys(z.actionData).length>0?J=z.actionData:J=null:Q?J=M.actionData:J=null;let ie=z.loaderData?qm(M.loaderData,z.loaderData,z.matches||[],z.errors):M.loaderData,ee=M.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((de,oe)=>ee.set(oe,Xr)));let W=Oe?!1:oi(g,z.matches||M.matches),te=Be===!0||M.navigation.formMethod!=null&&wt(M.navigation.formMethod)&&g.state?._isRedirect!==!0;v&&(b=v,v=void 0),Oe||ne==="POP"||(ne==="PUSH"?l.history.push(g,g.state):ne==="REPLACE"&&l.history.replace(g,g.state));let re;if(ne==="POP"){let de=yt.get(M.location.pathname);de&&de.has(g.pathname)?re={currentLocation:M.location,nextLocation:g}:yt.has(g.pathname)&&(re={currentLocation:g,nextLocation:M.location})}else if(Le){let de=yt.get(M.location.pathname);de?de.add(g.pathname):(de=new Set([g.pathname]),yt.set(M.location.pathname,de)),re={currentLocation:M.location,nextLocation:g}}mt({...z,actionData:J,loaderData:ie,historyAction:ne,location:g,initialized:!0,navigation:as,revalidation:"idle",restoreScrollPosition:W,preventScrollReset:te,blockers:ee},{viewTransitionOpts:re,flushSync:U===!0}),ne="POP",Be=!1,Le=!1,Oe=!1,N=!1,fe?.resolve(),fe=null,ot?.resolve(),ot=null}async function On(g,z){if(fe?.resolve(),fe=null,typeof g=="number"){fe||(fe=Gm());let we=fe.promise;return l.history.go(g),we}let U=us(M.location,M.matches,p,g,z?.fromRouteId,z?.relative),{path:Q,submission:J,error:ie}=Am(!1,U,z),ee=M.location,W=Pr(M.location,Q,z&&z.state);W={...W,...l.history.encodeLocation(W)};let te=z&&z.replace!=null?z.replace:void 0,re="PUSH";te===!0?re="REPLACE":te===!1||J!=null&&wt(J.formMethod)&&J.formAction===M.location.pathname+M.location.search&&(re="REPLACE");let de=z&&"preventScrollReset"in z?z.preventScrollReset===!0:void 0,oe=(z&&z.flushSync)===!0,He=Na({currentLocation:ee,nextLocation:W,historyAction:re});if(He){Cn(He,{state:"blocked",location:W,proceed(){Cn(He,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),On(g,z)},reset(){let we=new Map(M.blockers);we.set(He,Xr),mt({blockers:we})}});return}await fn(re,W,{submission:J,pendingError:ie,preventScrollReset:de,replace:z&&z.replace,enableViewTransition:z&&z.viewTransition,flushSync:oe,callSiteDefaultShouldRevalidate:z&&z.unstable_defaultShouldRevalidate})}function Vl(){ot||(ot=Gm()),ul(),mt({revalidation:"loading"});let g=ot.promise;return M.navigation.state==="submitting"?g:M.navigation.state==="idle"?(fn(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),g):(fn(ne||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:Le===!0}),g)}async function fn(g,z,U){De&&De.abort(),De=null,ne=g,Oe=(U&&U.startUninterruptedRevalidation)===!0,Ha(M.location,M.matches),Be=(U&&U.preventScrollReset)===!0,Le=(U&&U.enableViewTransition)===!0;let Q=v||b,J=U&&U.overrideNavigation,ie=U?.initialHydration&&M.matches&&M.matches.length>0&&!$?M.matches:Ra(Q,z,p),ee=(U&&U.flushSync)===!0;if(ie&&M.initialized&&!N&&ug(M.location,z)&&!(U&&U.submission&&wt(U.submission.formMethod))){wn(z,{matches:ie},{flushSync:ee});return}let W=La(ie,Q,z.pathname);if(W.active&&W.matches&&(ie=W.matches),!ie){let{error:at,notFoundMatches:lt,route:Ce}=ta(z.pathname);wn(z,{matches:lt,loaderData:{},errors:{[Ce.id]:at}},{flushSync:ee});return}De=new AbortController;let te=Gl(l.history,z,De.signal,U&&U.submission),re=l.getContext?await l.getContext():new Tm,de;if(U&&U.pendingError)de=[_a(ie).route.id,{type:"error",error:U.pendingError}];else if(U&&U.submission&&wt(U.submission.formMethod)){let at=await Lo(te,z,U.submission,ie,re,W.active,U&&U.initialHydration===!0,{replace:U.replace,flushSync:ee});if(at.shortCircuited)return;if(at.pendingActionResult){let[lt,Ce]=at.pendingActionResult;if(Ft(Ce)&&$r(Ce.error)&&Ce.error.status===404){De=null,wn(z,{matches:at.matches,loaderData:{},errors:{[lt]:Ce.error}});return}}ie=at.matches||ie,de=at.pendingActionResult,J=ls(z,U.submission),ee=!1,W.active=!1,te=Gl(l.history,te.url,te.signal)}let{shortCircuited:oe,matches:He,loaderData:we,errors:nt}=await li(te,z,ie,re,W.active,J,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,U&&U.initialHydration===!0,ee,de,U&&U.callSiteDefaultShouldRevalidate);oe||(De=null,wn(z,{matches:He||ie,...Bm(de),loaderData:we,errors:nt}))}async function Lo(g,z,U,Q,J,ie,ee,W={}){ul();let te=vg(z,U);if(mt({navigation:te},{flushSync:W.flushSync===!0}),ie){let oe=await na(Q,z.pathname,g.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){if(oe.partialMatches.length===0){let{matches:we,route:nt}=So(b);return{matches:we,pendingActionResult:[nt.id,{type:"error",error:oe.error}]}}let He=_a(oe.partialMatches).route.id;return{matches:oe.partialMatches,pendingActionResult:[He,{type:"error",error:oe.error}]}}else if(oe.matches)Q=oe.matches;else{let{notFoundMatches:He,error:we,route:nt}=ta(z.pathname);return{matches:He,pendingActionResult:[nt.id,{type:"error",error:we}]}}}let re,de=Mo(Q,z);if(!de.route.action&&!de.route.lazy)re={type:"error",error:un(405,{method:g.method,pathname:z.pathname,routeId:de.route.id})};else{let oe=Zl(d,h,g,Q,de,ee?[]:c,J),He=await Ca(g,oe,J,null);if(re=He[de.route.id],!re){for(let we of Q)if(He[we.route.id]){re=He[we.route.id];break}}if(g.signal.aborted)return{shortCircuited:!0}}if(al(re)){let oe;return W&&W.replace!=null?oe=W.replace:oe=Hm(re.response.headers.get("Location"),new URL(g.url),p,l.history)===M.location.pathname+M.location.search,await ut(g,re,!0,{submission:U,replace:oe}),{shortCircuited:!0}}if(Ft(re)){let oe=_a(Q,de.route.id);return(W&&W.replace)!==!0&&(ne="PUSH"),{matches:Q,pendingActionResult:[oe.route.id,re,de.route.id]}}return{matches:Q,pendingActionResult:[de.route.id,re]}}async function li(g,z,U,Q,J,ie,ee,W,te,re,de,oe,He){let we=ie||ls(z,ee),nt=ee||W||Xm(we),at=!Oe&&!re;if(J){if(at){let ct=ol(oe);mt({navigation:we,...ct!==void 0?{actionData:ct}:{}},{flushSync:de})}let Ue=await na(U,z.pathname,g.signal);if(Ue.type==="aborted")return{shortCircuited:!0};if(Ue.type==="error"){if(Ue.partialMatches.length===0){let{matches:vn,route:Tt}=So(b);return{matches:vn,loaderData:{},errors:{[Tt.id]:Ue.error}}}let ct=_a(Ue.partialMatches).route.id;return{matches:Ue.partialMatches,loaderData:{},errors:{[ct]:Ue.error}}}else if(Ue.matches)U=Ue.matches;else{let{error:ct,notFoundMatches:vn,route:Tt}=ta(z.pathname);return{matches:vn,loaderData:{},errors:{[Tt.id]:ct}}}}let lt=v||b,{dsMatches:Ce,revalidatingFetchers:Et}=wm(g,Q,d,h,l.history,M,U,nt,z,re?[]:c,re===!0,N,V,ce,K,L,lt,p,l.patchRoutesOnNavigation!=null,oe,He);if(xe=++pe,!l.dataStrategy&&!Ce.some(Ue=>Ue.shouldLoad)&&!Ce.some(Ue=>Ue.route.middleware&&Ue.route.middleware.length>0)&&Et.length===0){let Ue=_t();return wn(z,{matches:U,loaderData:{},errors:oe&&Ft(oe[1])?{[oe[0]]:oe[1].error}:null,...Bm(oe),...Ue?{fetchers:new Map(M.fetchers)}:{}},{flushSync:de}),{shortCircuited:!0}}if(at){let Ue={};if(!J){Ue.navigation=we;let ct=ol(oe);ct!==void 0&&(Ue.actionData=ct)}Et.length>0&&(Ue.fetchers=Kl(Et)),mt(Ue,{flushSync:de})}Et.forEach(Ue=>{tt(Ue.key),Ue.controller&&F.set(Ue.key,Ue.controller)});let Nt=()=>Et.forEach(Ue=>tt(Ue.key));De&&De.signal.addEventListener("abort",Nt);let{loaderResults:$e,fetcherResults:mn}=await Pl(Ce,Et,g,Q);if(g.signal.aborted)return{shortCircuited:!0};De&&De.signal.removeEventListener("abort",Nt),Et.forEach(Ue=>F.delete(Ue.key));let Yt=Eo($e);if(Yt)return await ut(g,Yt.result,!0,{replace:te}),{shortCircuited:!0};if(Yt=Eo(mn),Yt)return L.add(Yt.key),await ut(g,Yt.result,!0,{replace:te}),{shortCircuited:!0};let{loaderData:pn,errors:$t}=km(M,U,$e,oe,Et,mn);re&&M.errors&&($t={...M.errors,...$t});let Nn=_t(),ka=ri(xe),qa=Nn||ka||Et.length>0;return{matches:U,loaderData:pn,errors:$t,...qa?{fetchers:new Map(M.fetchers)}:{}}}function ol(g){if(g&&!Ft(g[1]))return{[g[0]]:g[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function Kl(g){return g.forEach(z=>{let U=M.fetchers.get(z.key),Q=Gr(void 0,U?U.data:void 0);M.fetchers.set(z.key,Q)}),new Map(M.fetchers)}async function Jl(g,z,U,Q){tt(g);let J=(Q&&Q.flushSync)===!0,ie=v||b,ee=us(M.location,M.matches,p,U,z,Q?.relative),W=Ra(ie,ee,p),te=La(W,ie,ee);if(te.active&&te.matches&&(W=te.matches),!W){dn(g,z,un(404,{pathname:ee}),{flushSync:J});return}let{path:re,submission:de,error:oe}=Am(!0,ee,Q);if(oe){dn(g,z,oe,{flushSync:J});return}let He=l.getContext?await l.getContext():new Tm,we=(Q&&Q.preventScrollReset)===!0;if(de&&wt(de.formMethod)){await ko(g,z,re,W,He,te.active,J,we,de,Q&&Q.unstable_defaultShouldRevalidate);return}K.set(g,{routeId:z,path:re}),await qo(g,z,re,W,He,te.active,J,we,de)}async function ko(g,z,U,Q,J,ie,ee,W,te,re){ul(),K.delete(g);let de=M.fetchers.get(g);Ut(g,bg(te,de),{flushSync:ee});let oe=new AbortController,He=Gl(l.history,U,oe.signal,te);if(ie){let Ne=await na(Q,new URL(He.url).pathname,He.signal,g);if(Ne.type==="aborted")return;if(Ne.type==="error"){dn(g,z,Ne.error,{flushSync:ee});return}else if(Ne.matches)Q=Ne.matches;else{dn(g,z,un(404,{pathname:U}),{flushSync:ee});return}}let we=Mo(Q,U);if(!we.route.action&&!we.route.lazy){let Ne=un(405,{method:te.formMethod,pathname:U,routeId:z});dn(g,z,Ne,{flushSync:ee});return}F.set(g,oe);let nt=pe,at=Zl(d,h,He,Q,we,c,J),lt=await Ca(He,at,J,g),Ce=lt[we.route.id];if(!Ce){for(let Ne of at)if(lt[Ne.route.id]){Ce=lt[Ne.route.id];break}}if(He.signal.aborted){F.get(g)===oe&&F.delete(g);return}if(ce.has(g)){if(al(Ce)||Ft(Ce)){Ut(g,In(void 0));return}}else{if(al(Ce))if(F.delete(g),xe>nt){Ut(g,In(void 0));return}else return L.add(g),Ut(g,Gr(te)),ut(He,Ce,!1,{fetcherSubmission:te,preventScrollReset:W});if(Ft(Ce)){dn(g,z,Ce.error);return}}let Et=M.navigation.location||M.location,Nt=Gl(l.history,Et,oe.signal),$e=v||b,mn=M.navigation.state!=="idle"?Ra($e,M.navigation.location,p):M.matches;Te(mn,"Didn't find any matches after fetcher action");let Yt=++pe;x.set(g,Yt);let pn=Gr(te,Ce.data);M.fetchers.set(g,pn);let{dsMatches:$t,revalidatingFetchers:Nn}=wm(Nt,J,d,h,l.history,M,mn,te,Et,c,!1,N,V,ce,K,L,$e,p,l.patchRoutesOnNavigation!=null,[we.route.id,Ce],re);Nn.filter(Ne=>Ne.key!==g).forEach(Ne=>{let Ba=Ne.key,ci=M.fetchers.get(Ba),Wl=Gr(void 0,ci?ci.data:void 0);M.fetchers.set(Ba,Wl),tt(Ba),Ne.controller&&F.set(Ba,Ne.controller)}),mt({fetchers:new Map(M.fetchers)});let ka=()=>Nn.forEach(Ne=>tt(Ne.key));oe.signal.addEventListener("abort",ka);let{loaderResults:qa,fetcherResults:Ue}=await Pl($t,Nn,Nt,J);if(oe.signal.aborted)return;if(oe.signal.removeEventListener("abort",ka),x.delete(g),F.delete(g),Nn.forEach(Ne=>F.delete(Ne.key)),M.fetchers.has(g)){let Ne=In(Ce.data);M.fetchers.set(g,Ne)}let ct=Eo(qa);if(ct)return ut(Nt,ct.result,!1,{preventScrollReset:W});if(ct=Eo(Ue),ct)return L.add(ct.key),ut(Nt,ct.result,!1,{preventScrollReset:W});let{loaderData:vn,errors:Tt}=km(M,mn,qa,void 0,Nn,Ue);ri(Yt),M.navigation.state==="loading"&&Yt>xe?(Te(ne,"Expected pending action"),De&&De.abort(),wn(M.navigation.location,{matches:mn,loaderData:vn,errors:Tt,fetchers:new Map(M.fetchers)})):(mt({errors:Tt,loaderData:qm(M.loaderData,vn,mn,Tt),fetchers:new Map(M.fetchers)}),N=!1)}async function qo(g,z,U,Q,J,ie,ee,W,te){let re=M.fetchers.get(g);Ut(g,Gr(te,re?re.data:void 0),{flushSync:ee});let de=new AbortController,oe=Gl(l.history,U,de.signal);if(ie){let Ce=await na(Q,new URL(oe.url).pathname,oe.signal,g);if(Ce.type==="aborted")return;if(Ce.type==="error"){dn(g,z,Ce.error,{flushSync:ee});return}else if(Ce.matches)Q=Ce.matches;else{dn(g,z,un(404,{pathname:U}),{flushSync:ee});return}}let He=Mo(Q,U);F.set(g,de);let we=pe,nt=Zl(d,h,oe,Q,He,c,J),lt=(await Ca(oe,nt,J,g))[He.route.id];if(F.get(g)===de&&F.delete(g),!oe.signal.aborted){if(ce.has(g)){Ut(g,In(void 0));return}if(al(lt))if(xe>we){Ut(g,In(void 0));return}else{L.add(g),await ut(oe,lt,!1,{preventScrollReset:W});return}if(Ft(lt)){dn(g,z,lt.error);return}Ut(g,In(lt.data))}}async function ut(g,z,U,{submission:Q,fetcherSubmission:J,preventScrollReset:ie,replace:ee}={}){U||(fe?.resolve(),fe=null),z.response.headers.has("X-Remix-Revalidate")&&(N=!0);let W=z.response.headers.get("Location");Te(W,"Expected a Location header on the redirect Response"),W=Hm(W,new URL(g.url),p,l.history);let te=Pr(M.location,W,{_isRedirect:!0});if(u){let nt=!1;if(z.response.headers.has("X-Remix-Reload-Document"))nt=!0;else if(ms(W)){const at=i0(W,!0);nt=at.origin!==o.location.origin||cn(at.pathname,p)==null}if(nt){ee?o.location.replace(W):o.location.assign(W);return}}De=null;let re=ee===!0||z.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:de,formAction:oe,formEncType:He}=M.navigation;!Q&&!J&&de&&oe&&He&&(Q=Xm(M.navigation));let we=Q||J;if(Vb.has(z.response.status)&&we&&wt(we.formMethod))await fn(re,te,{submission:{...we,formAction:W},preventScrollReset:ie||Be,enableViewTransition:U?Le:void 0});else{let nt=ls(te,Q);await fn(re,te,{overrideNavigation:nt,fetcherSubmission:J,preventScrollReset:ie||Be,enableViewTransition:U?Le:void 0})}}async function Ca(g,z,U,Q){let J,ie={};try{J=await ng(O,g,z,Q,U,!1)}catch(ee){return z.filter(W=>W.shouldLoad).forEach(W=>{ie[W.route.id]={type:"error",error:ee}}),ie}if(g.signal.aborted)return ie;if(!wt(g.method))for(let ee of z){if(J[ee.route.id]?.type==="error")break;!J.hasOwnProperty(ee.route.id)&&!M.loaderData.hasOwnProperty(ee.route.id)&&(!M.errors||!M.errors.hasOwnProperty(ee.route.id))&&ee.shouldCallHandler()&&(J[ee.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${ee.route.id}`)})}for(let[ee,W]of Object.entries(J))if(dg(W)){let te=W.result;ie[ee]={type:"redirect",response:ig(te,g,ee,z,p)}}else ie[ee]=await rg(W);return ie}async function Pl(g,z,U,Q){let J=Ca(U,g,Q,null),ie=Promise.all(z.map(async te=>{if(te.matches&&te.match&&te.request&&te.controller){let de=(await Ca(te.request,te.matches,Q,te.key))[te.match.route.id];return{[te.key]:de}}else return Promise.resolve({[te.key]:{type:"error",error:un(404,{pathname:te.path})}})})),ee=await J,W=(await ie).reduce((te,re)=>Object.assign(te,re),{});return{loaderResults:ee,fetcherResults:W}}function ul(){N=!0,K.forEach((g,z)=>{F.has(z)&&V.add(z),tt(z)})}function Ut(g,z,U={}){M.fetchers.set(g,z),mt({fetchers:new Map(M.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function dn(g,z,U,Q={}){let J=_a(M.matches,z);$l(g),mt({errors:{[J.route.id]:U},fetchers:new Map(M.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function Fl(g){return I.set(g,(I.get(g)||0)+1),ce.has(g)&&ce.delete(g),M.fetchers.get(g)||Kb}function Bo(g,z){tt(g,z?.reason),Ut(g,In(null))}function $l(g){let z=M.fetchers.get(g);F.has(g)&&!(z&&z.state==="loading"&&x.has(g))&&tt(g),K.delete(g),x.delete(g),L.delete(g),ce.delete(g),V.delete(g),M.fetchers.delete(g)}function Ua(g){let z=(I.get(g)||0)-1;z<=0?(I.delete(g),ce.add(g)):I.set(g,z),mt({fetchers:new Map(M.fetchers)})}function tt(g,z){let U=F.get(g);U&&(U.abort(z),F.delete(g))}function hn(g){for(let z of g){let U=Fl(z),Q=In(U.data);M.fetchers.set(z,Q)}}function _t(){let g=[],z=!1;for(let U of L){let Q=M.fetchers.get(U);Te(Q,`Expected fetcher: ${U}`),Q.state==="loading"&&(L.delete(U),g.push(U),z=!0)}return hn(g),z}function ri(g){let z=[];for(let[U,Q]of x)if(Q<g){let J=M.fetchers.get(U);Te(J,`Expected fetcher: ${U}`),J.state==="loading"&&(tt(U),x.delete(U),z.push(U))}return hn(z),z.length>0}function Yo(g,z){let U=M.blockers.get(g)||Xr;return ge.get(g)!==z&&ge.set(g,z),U}function ii(g){M.blockers.delete(g),ge.delete(g)}function Cn(g,z){let U=M.blockers.get(g)||Xr;Te(U.state==="unblocked"&&z.state==="blocked"||U.state==="blocked"&&z.state==="blocked"||U.state==="blocked"&&z.state==="proceeding"||U.state==="blocked"&&z.state==="unblocked"||U.state==="proceeding"&&z.state==="unblocked",`Invalid blocker state transition: ${U.state} -> ${z.state}`);let Q=new Map(M.blockers);Q.set(g,z),mt({blockers:Q})}function Na({currentLocation:g,nextLocation:z,historyAction:U}){if(ge.size===0)return;ge.size>1&&ht(!1,"A router only supports one blocker at a time");let Q=Array.from(ge.entries()),[J,ie]=Q[Q.length-1],ee=M.blockers.get(J);if(!(ee&&ee.state==="proceeding")&&ie({currentLocation:g,nextLocation:z,historyAction:U}))return J}function ta(g){let z=un(404,{pathname:g}),U=v||b,{matches:Q,route:J}=So(U);return{notFoundMatches:Q,route:J,error:z}}function Un(g,z,U){if(q=g,X=z,_=U||null,!P&&M.navigation===as){P=!0;let Q=oi(M.location,M.matches);Q!=null&&mt({restoreScrollPosition:Q})}return()=>{q=null,X=null,_=null}}function ja(g,z){return _&&_(g,z.map(Q=>yb(Q,M.loaderData)))||g.key}function Ha(g,z){if(q&&X){let U=ja(g,z);q[U]=X()}}function oi(g,z){if(q){let U=ja(g,z),Q=q[U];if(typeof Q=="number")return Q}return null}function La(g,z,U){if(l.patchRoutesOnNavigation)if(g){if(Object.keys(g[0].params).length>0)return{active:!0,matches:Vr(z,U,p,!0)}}else return{active:!0,matches:Vr(z,U,p,!0)||[]};return{active:!1,matches:null}}async function na(g,z,U,Q){if(!l.patchRoutesOnNavigation)return{type:"success",matches:g};let J=g;for(;;){let ie=v==null,ee=v||b,W=h;try{await l.patchRoutesOnNavigation({signal:U,path:z,matches:J,fetcherKey:Q,patch:(de,oe)=>{U.aborted||Cm(de,oe,ee,W,d,!1)}})}catch(de){return{type:"error",error:de,partialMatches:J}}finally{ie&&!U.aborted&&(b=[...b])}if(U.aborted)return{type:"aborted"};let te=Ra(ee,z,p),re=null;if(te){if(Object.keys(te[0].params).length===0)return{type:"success",matches:te};if(re=Vr(ee,z,p,!0),!(re&&J.length<re.length&&aa(J,re.slice(0,J.length))))return{type:"success",matches:te}}if(re||(re=Vr(ee,z,p,!0)),!re||aa(J,re))return{type:"success",matches:null};J=re}}function aa(g,z){return g.length===z.length&&g.every((U,Q)=>U.route.id===z[Q].route.id)}function Xo(g){h={},v=Fr(g,d,void 0,h)}function ui(g,z,U=!1){let Q=v==null;Cm(g,z,v||b,h,d,U),Q&&(b=[...b],mt({}))}return be={get basename(){return p},get future(){return S},get state(){return M},get routes(){return b},get window(){return o},initialize:et,subscribe:il,enableScrollRestoration:Un,navigate:On,fetch:Jl,revalidate:Vl,createHref:g=>l.history.createHref(g),encodeLocation:g=>l.history.encodeLocation(g),getFetcher:Fl,resetFetcher:Bo,deleteFetcher:Ua,dispose:wa,getBlocker:Yo,deleteBlocker:ii,patchRoutes:ui,_internalFetchControllers:F,_internalSetRoutes:Xo,_internalSetStateDoNotUseOrYouWillBreakYourApp(g){mt(g)}},l.unstable_instrumentations&&(be=kb(be,l.unstable_instrumentations.map(g=>g.router).filter(Boolean))),be}function Fb(l){return l!=null&&("formData"in l&&l.formData!=null||"body"in l&&l.body!==void 0)}function us(l,o,u,c,f,d){let h,b;if(f){h=[];for(let p of o)if(h.push(p),p.route.id===f){b=p;break}}else h=o,b=o[o.length-1];let v=vs(c||".",ps(h),cn(l.pathname,u)||l.pathname,d==="path");if(c==null&&(v.search=l.search,v.hash=l.hash),(c==null||c===""||c===".")&&b){let p=ys(v.search);if(b.route.index&&!p)v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index";else if(!b.route.index&&p){let O=new URLSearchParams(v.search),S=O.getAll("index");O.delete("index"),S.filter(C=>C).forEach(C=>O.append("index",C));let w=O.toString();v.search=w?`?${w}`:""}}return u!=="/"&&(v.pathname=Cb({basename:u,pathname:v.pathname})),_n(v)}function Am(l,o,u){if(!u||!Fb(u))return{path:o};if(u.formMethod&&!pg(u.formMethod))return{path:o,error:un(405,{method:u.formMethod})};let c=()=>({path:o,error:un(400,{type:"invalid-body"})}),d=(u.formMethod||"get").toUpperCase(),h=O0(o);if(u.body!==void 0){if(u.formEncType==="text/plain"){if(!wt(d))return c();let S=typeof u.body=="string"?u.body:u.body instanceof FormData||u.body instanceof URLSearchParams?Array.from(u.body.entries()).reduce((w,[C,q])=>`${w}${C}=${q}
`,""):String(u.body);return{path:o,submission:{formMethod:d,formAction:h,formEncType:u.formEncType,formData:void 0,json:void 0,text:S}}}else if(u.formEncType==="application/json"){if(!wt(d))return c();try{let S=typeof u.body=="string"?JSON.parse(u.body):u.body;return{path:o,submission:{formMethod:d,formAction:h,formEncType:u.formEncType,formData:void 0,json:S,text:void 0}}}catch{return c()}}}Te(typeof FormData=="function","FormData is not available in this environment");let b,v;if(u.formData)b=fs(u.formData),v=u.formData;else if(u.body instanceof FormData)b=fs(u.body),v=u.body;else if(u.body instanceof URLSearchParams)b=u.body,v=Lm(b);else if(u.body==null)b=new URLSearchParams,v=new FormData;else try{b=new URLSearchParams(u.body),v=Lm(b)}catch{return c()}let p={formMethod:d,formAction:h,formEncType:u&&u.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(wt(p.formMethod))return{path:o,submission:p};let O=ea(o);return l&&O.search&&ys(O.search)&&b.append("index",""),O.search=`?${b}`,{path:_n(O),submission:p}}function wm(l,o,u,c,f,d,h,b,v,p,O,S,w,C,q,_,X,P,Z,$,ve){let me=$?Ft($[1])?$[1].error:$[1].data:void 0,be=f.createURL(d.location),M=f.createURL(v),ne;if(O&&d.errors){let Oe=Object.keys(d.errors)[0];ne=h.findIndex(N=>N.route.id===Oe)}else if($&&Ft($[1])){let Oe=$[0];ne=h.findIndex(N=>N.route.id===Oe)-1}let fe=$?$[1].statusCode:void 0,Be=fe&&fe>=400,De={currentUrl:be,currentParams:d.matches[0]?.params||{},nextUrl:M,nextParams:h[0].params,...b,actionResult:me,actionStatus:fe},Le=ei(h),yt=h.map((Oe,N)=>{let{route:V}=Oe,F=null;if(ne!=null&&N>ne?F=!1:V.lazy?F=!0:bs(V)?O?F=cs(V,d.loaderData,d.errors):$b(d.loaderData,d.matches[N],Oe)&&(F=!0):F=!1,F!==null)return ss(u,c,l,Le,Oe,p,o,F);let pe=!1;typeof ve=="boolean"?pe=ve:Be?pe=!1:(S||be.pathname+be.search===M.pathname+M.search||be.search!==M.search||Wb(d.matches[N],Oe))&&(pe=!0);let xe={...De,defaultShouldRevalidate:pe},x=Jr(Oe,xe);return ss(u,c,l,Le,Oe,p,o,x,xe,ve)}),Xe=[];return q.forEach((Oe,N)=>{if(O||!h.some(I=>I.route.id===Oe.routeId)||C.has(N))return;let V=d.fetchers.get(N),F=V&&V.state!=="idle"&&V.data===void 0,pe=Ra(X,Oe.path,P);if(!pe){if(Z&&F)return;Xe.push({key:N,routeId:Oe.routeId,path:Oe.path,matches:null,match:null,request:null,controller:null});return}if(_.has(N))return;let xe=Mo(pe,Oe.path),x=new AbortController,L=Gl(f,Oe.path,x.signal),K=null;if(w.has(N))w.delete(N),K=Zl(u,c,L,pe,xe,p,o);else if(F)S&&(K=Zl(u,c,L,pe,xe,p,o));else{let I;typeof ve=="boolean"?I=ve:Be?I=!1:I=S;let ce={...De,defaultShouldRevalidate:I};Jr(xe,ce)&&(K=Zl(u,c,L,pe,xe,p,o,ce))}K&&Xe.push({key:N,routeId:Oe.routeId,path:Oe.path,matches:K,match:xe,request:L,controller:x})}),{dsMatches:yt,revalidatingFetchers:Xe}}function bs(l){return l.loader!=null||l.middleware!=null&&l.middleware.length>0}function cs(l,o,u){if(l.lazy)return!0;if(!bs(l))return!1;let c=o!=null&&l.id in o,f=u!=null&&u[l.id]!==void 0;return!c&&f?!1:typeof l.loader=="function"&&l.loader.hydrate===!0?!0:!c&&!f}function $b(l,o,u){let c=!o||u.route.id!==o.route.id,f=!l.hasOwnProperty(u.route.id);return c||f}function Wb(l,o){let u=l.route.path;return l.pathname!==o.pathname||u!=null&&u.endsWith("*")&&l.params["*"]!==o.params["*"]}function Jr(l,o){if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate(o);if(typeof u=="boolean")return u}return o.defaultShouldRevalidate}function Cm(l,o,u,c,f,d){let h;if(l){let p=c[l];Te(p,`No route found to patch children into: routeId = ${l}`),p.children||(p.children=[]),h=p.children}else h=u;let b=[],v=[];if(o.forEach(p=>{let O=h.find(S=>g0(p,S));O?v.push({existingRoute:O,newRoute:p}):b.push(p)}),b.length>0){let p=Fr(b,f,[l||"_","patch",String(h?.length||"0")],c);h.push(...p)}if(d&&v.length>0)for(let p=0;p<v.length;p++){let{existingRoute:O,newRoute:S}=v[p],w=O,[C]=Fr([S],f,[],{},!0);Object.assign(w,{element:C.element?C.element:w.element,errorElement:C.errorElement?C.errorElement:w.errorElement,hydrateFallbackElement:C.hydrateFallbackElement?C.hydrateFallbackElement:w.hydrateFallbackElement})}}function g0(l,o){return"id"in l&&"id"in o&&l.id===o.id?!0:l.index===o.index&&l.path===o.path&&l.caseSensitive===o.caseSensitive?(!l.children||l.children.length===0)&&(!o.children||o.children.length===0)?!0:l.children.every((u,c)=>o.children?.some(f=>g0(u,f))):!1}var Um=new WeakMap,y0=({key:l,route:o,manifest:u,mapRouteProperties:c})=>{let f=u[o.id];if(Te(f,"No route found in manifest"),!f.lazy||typeof f.lazy!="object")return;let d=f.lazy[l];if(!d)return;let h=Um.get(f);h||(h={},Um.set(f,h));let b=h[l];if(b)return b;let v=(async()=>{let p=pb(l),S=f[l]!==void 0&&l!=="hasErrorBoundary";if(p)ht(!p,"Route property "+l+" is not a supported lazy route property. This property will be ignored."),h[l]=Promise.resolve();else if(S)ht(!1,`Route "${f.id}" has a static property "${l}" defined. The lazy property will be ignored.`);else{let w=await d();w!=null&&(Object.assign(f,{[l]:w}),Object.assign(f,c(f)))}typeof f.lazy=="object"&&(f.lazy[l]=void 0,Object.values(f.lazy).every(w=>w===void 0)&&(f.lazy=void 0))})();return h[l]=v,v},Nm=new WeakMap;function Ib(l,o,u,c,f){let d=u[l.id];if(Te(d,"No route found in manifest"),!l.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof l.lazy=="function"){let O=Nm.get(d);if(O)return{lazyRoutePromise:O,lazyHandlerPromise:O};let S=(async()=>{Te(typeof l.lazy=="function","No lazy route function found");let w=await l.lazy(),C={};for(let q in w){let _=w[q];if(_===void 0)continue;let X=bb(q),Z=d[q]!==void 0&&q!=="hasErrorBoundary";X?ht(!X,"Route property "+q+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Z?ht(!Z,`Route "${d.id}" has a static property "${q}" defined but its lazy function is also returning a value for this property. The lazy route property "${q}" will be ignored.`):C[q]=_}Object.assign(d,C),Object.assign(d,{...c(d),lazy:void 0})})();return Nm.set(d,S),S.catch(()=>{}),{lazyRoutePromise:S,lazyHandlerPromise:S}}let h=Object.keys(l.lazy),b=[],v;for(let O of h){if(f&&f.includes(O))continue;let S=y0({key:O,route:l,manifest:u,mapRouteProperties:c});S&&(b.push(S),O===o&&(v=S))}let p=b.length>0?Promise.all(b).then(()=>{}):void 0;return p?.catch(()=>{}),v?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:v}}async function jm(l){let o=l.matches.filter(f=>f.shouldLoad),u={};return(await Promise.all(o.map(f=>f.resolve()))).forEach((f,d)=>{u[o[d].route.id]=f}),u}async function eg(l){return l.matches.some(o=>o.route.middleware)?x0(l,()=>jm(l)):jm(l)}function x0(l,o){return tg(l,o,c=>{if(mg(c))throw c;return c},sg,u);function u(c,f,d){if(d)return Promise.resolve(Object.assign(d.value,{[f]:{type:"error",result:c}}));{let{matches:h}=l,b=Math.min(Math.max(h.findIndex(p=>p.route.id===f),0),Math.max(h.findIndex(p=>p.shouldCallHandler()),0)),v=_a(h,h[b].route.id).route.id;return Promise.resolve({[v]:{type:"error",result:c}})}}}async function tg(l,o,u,c,f){let{matches:d,request:h,params:b,context:v,unstable_pattern:p}=l,O=d.flatMap(w=>w.route.middleware?w.route.middleware.map(C=>[w.route.id,C]):[]);return await S0({request:h,params:b,context:v,unstable_pattern:p},O,o,u,c,f)}async function S0(l,o,u,c,f,d,h=0){let{request:b}=l;if(b.signal.aborted)throw b.signal.reason??new Error(`Request aborted: ${b.method} ${b.url}`);let v=o[h];if(!v)return await u();let[p,O]=v,S,w=async()=>{if(S)throw new Error("You may only call `next()` once per middleware");try{return S={value:await S0(l,o,u,c,f,d,h+1)},S.value}catch(C){return S={value:await d(C,p,S)},S.value}};try{let C=await O(l,w),q=C!=null?c(C):void 0;return f(q)?q:S?q??S.value:(S={value:await w()},S.value)}catch(C){return await d(C,p,S)}}function E0(l,o,u,c,f){let d=y0({key:"middleware",route:c.route,manifest:o,mapRouteProperties:l}),h=Ib(c.route,wt(u.method)?"action":"loader",o,l,f);return{middleware:d,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function ss(l,o,u,c,f,d,h,b,v=null,p){let O=!1,S=E0(l,o,u,f,d);return{...f,_lazyPromises:S,shouldLoad:b,shouldRevalidateArgs:v,shouldCallHandler(w){return O=!0,v?typeof p=="boolean"?Jr(f,{...v,defaultShouldRevalidate:p}):typeof w=="boolean"?Jr(f,{...v,defaultShouldRevalidate:w}):Jr(f,v):b},resolve(w){let{lazy:C,loader:q,middleware:_}=f.route,X=O||b||w&&!wt(u.method)&&(C||q),P=_&&_.length>0&&!q&&!C;return X&&(wt(u.method)||!P)?ag({request:u,unstable_pattern:c,match:f,lazyHandlerPromise:S?.handler,lazyRoutePromise:S?.route,handlerOverride:w,scopedContext:h}):Promise.resolve({type:"data",result:void 0})}}}function Zl(l,o,u,c,f,d,h,b=null){return c.map(v=>v.route.id!==f.route.id?{...v,shouldLoad:!1,shouldRevalidateArgs:b,shouldCallHandler:()=>!1,_lazyPromises:E0(l,o,u,v,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ss(l,o,u,ei(c),v,d,h,!0,b))}async function ng(l,o,u,c,f,d){u.some(p=>p._lazyPromises?.middleware)&&await Promise.all(u.map(p=>p._lazyPromises?.middleware));let h={request:o,unstable_pattern:ei(u),params:u[0].params,context:f,matches:u},v=await l({...h,fetcherKey:c,runClientMiddleware:p=>{let O=h;return x0(O,()=>p({...O,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(u.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return v}async function ag({request:l,unstable_pattern:o,match:u,lazyHandlerPromise:c,lazyRoutePromise:f,handlerOverride:d,scopedContext:h}){let b,v,p=wt(l.method),O=p?"action":"loader",S=w=>{let C,q=new Promise((P,Z)=>C=Z);v=()=>C(),l.signal.addEventListener("abort",v);let _=P=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${O}" [routeId: ${u.route.id}]`)):w({request:l,unstable_pattern:o,params:u.params,context:h},...P!==void 0?[P]:[]),X=(async()=>{try{return{type:"data",result:await(d?d(Z=>_(Z)):_())}}catch(P){return{type:"error",result:P}}})();return Promise.race([X,q])};try{let w=p?u.route.action:u.route.loader;if(c||f)if(w){let C,[q]=await Promise.all([S(w).catch(_=>{C=_}),c,f]);if(C!==void 0)throw C;b=q}else{await c;let C=p?u.route.action:u.route.loader;if(C)[b]=await Promise.all([S(C),f]);else if(O==="action"){let q=new URL(l.url),_=q.pathname+q.search;throw un(405,{method:l.method,pathname:_,routeId:u.route.id})}else return{type:"data",result:void 0}}else if(w)b=await S(w);else{let C=new URL(l.url),q=C.pathname+C.search;throw un(404,{pathname:q})}}catch(w){return{type:"error",result:w}}finally{v&&l.signal.removeEventListener("abort",v)}return b}async function lg(l){let o=l.headers.get("Content-Type");return o&&/\bapplication\/json\b/.test(o)?l.body==null?null:l.json():l.text()}async function rg(l){let{result:o,type:u}=l;if(gs(o)){let c;try{c=await lg(o)}catch(f){return{type:"error",error:f}}return u==="error"?{type:"error",error:new Ir(o.status,o.statusText,c),statusCode:o.status,headers:o.headers}:{type:"data",data:c,statusCode:o.status,headers:o.headers}}return u==="error"?Ym(o)?o.data instanceof Error?{type:"error",error:o.data,statusCode:o.init?.status,headers:o.init?.headers?new Headers(o.init.headers):void 0}:{type:"error",error:cg(o),statusCode:$r(o)?o.status:void 0,headers:o.init?.headers?new Headers(o.init.headers):void 0}:{type:"error",error:o,statusCode:$r(o)?o.status:void 0}:Ym(o)?{type:"data",data:o.data,statusCode:o.init?.status,headers:o.init?.headers?new Headers(o.init.headers):void 0}:{type:"data",data:o}}function ig(l,o,u,c,f){let d=l.headers.get("Location");if(Te(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!ms(d)){let h=c.slice(0,c.findIndex(b=>b.route.id===u)+1);d=us(new URL(o.url),h,f,d),l.headers.set("Location",d)}return l}function Hm(l,o,u,c){let f=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ms(l)){let d=l,h=d.startsWith("//")?new URL(o.protocol+d):new URL(d);if(f.includes(h.protocol))throw new Error("Invalid redirect location");let b=cn(h.pathname,u)!=null;if(h.origin===o.origin&&b)return h.pathname+h.search+h.hash}try{let d=c.createURL(l);if(f.includes(d.protocol))throw new Error("Invalid redirect location")}catch{}return l}function Gl(l,o,u,c){let f=l.createURL(O0(o)).toString(),d={signal:u};if(c&&wt(c.formMethod)){let{formMethod:h,formEncType:b}=c;d.method=h.toUpperCase(),b==="application/json"?(d.headers=new Headers({"Content-Type":b}),d.body=JSON.stringify(c.json)):b==="text/plain"?d.body=c.text:b==="application/x-www-form-urlencoded"&&c.formData?d.body=fs(c.formData):d.body=c.formData}return new Request(f,d)}function fs(l){let o=new URLSearchParams;for(let[u,c]of l.entries())o.append(u,typeof c=="string"?c:c.name);return o}function Lm(l){let o=new FormData;for(let[u,c]of l.entries())o.append(u,c);return o}function og(l,o,u,c=!1,f=!1){let d={},h=null,b,v=!1,p={},O=u&&Ft(u[1])?u[1].error:void 0;return l.forEach(S=>{if(!(S.route.id in o))return;let w=S.route.id,C=o[w];if(Te(!al(C),"Cannot handle redirect results in processLoaderData"),Ft(C)){let q=C.error;if(O!==void 0&&(q=O,O=void 0),h=h||{},f)h[w]=q;else{let _=_a(l,w);h[_.route.id]==null&&(h[_.route.id]=q)}c||(d[w]=b0),v||(v=!0,b=$r(C.error)?C.error.status:500),C.headers&&(p[w]=C.headers)}else d[w]=C.data,C.statusCode&&C.statusCode!==200&&!v&&(b=C.statusCode),C.headers&&(p[w]=C.headers)}),O!==void 0&&u&&(h={[u[0]]:O},u[2]&&(d[u[2]]=void 0)),{loaderData:d,errors:h,statusCode:b||200,loaderHeaders:p}}function km(l,o,u,c,f,d){let{loaderData:h,errors:b}=og(o,u,c);return f.filter(v=>!v.matches||v.matches.some(p=>p.shouldLoad)).forEach(v=>{let{key:p,match:O,controller:S}=v;if(S&&S.signal.aborted)return;let w=d[p];if(Te(w,"Did not find corresponding fetcher result"),Ft(w)){let C=_a(l.matches,O?.route.id);b&&b[C.route.id]||(b={...b,[C.route.id]:w.error}),l.fetchers.delete(p)}else if(al(w))Te(!1,"Unhandled fetcher revalidation redirect");else{let C=In(w.data);l.fetchers.set(p,C)}}),{loaderData:h,errors:b}}function qm(l,o,u,c){let f=Object.entries(o).filter(([,d])=>d!==b0).reduce((d,[h,b])=>(d[h]=b,d),{});for(let d of u){let h=d.route.id;if(!o.hasOwnProperty(h)&&l.hasOwnProperty(h)&&d.route.loader&&(f[h]=l[h]),c&&c.hasOwnProperty(h))break}return f}function Bm(l){return l?Ft(l[1])?{actionData:{}}:{actionData:{[l[0]]:l[1].data}}:{}}function _a(l,o){return(o?l.slice(0,l.findIndex(c=>c.route.id===o)+1):[...l]).reverse().find(c=>c.route.hasErrorBoundary===!0)||l[0]}function So(l){let o=l.length===1?l[0]:l.find(u=>u.index||!u.path||u.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function un(l,{pathname:o,routeId:u,method:c,type:f,message:d}={}){let h="Unknown Server Error",b="Unknown @remix-run/router error";return l===400?(h="Bad Request",c&&o&&u?b=`You made a ${c} request to "${o}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`:f==="invalid-body"&&(b="Unable to encode submission body")):l===403?(h="Forbidden",b=`Route "${u}" does not match URL "${o}"`):l===404?(h="Not Found",b=`No route matches URL "${o}"`):l===405&&(h="Method Not Allowed",c&&o&&u?b=`You made a ${c.toUpperCase()} request to "${o}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`:c&&(b=`Invalid request method "${c.toUpperCase()}"`)),new Ir(l||500,h,new Error(b),!0)}function Eo(l){let o=Object.entries(l);for(let u=o.length-1;u>=0;u--){let[c,f]=o[u];if(al(f))return{key:c,result:f}}}function O0(l){let o=typeof l=="string"?ea(l):l;return _n({...o,hash:""})}function ug(l,o){return l.pathname!==o.pathname||l.search!==o.search?!1:l.hash===""?o.hash!=="":l.hash===o.hash?!0:o.hash!==""}function cg(l){return new Ir(l.init?.status??500,l.init?.statusText??"Internal Server Error",l.data)}function sg(l){return l!=null&&typeof l=="object"&&Object.entries(l).every(([o,u])=>typeof o=="string"&&fg(u))}function fg(l){return l!=null&&typeof l=="object"&&"type"in l&&"result"in l&&(l.type==="data"||l.type==="error")}function dg(l){return gs(l.result)&&p0.has(l.result.status)}function Ft(l){return l.type==="error"}function al(l){return(l&&l.type)==="redirect"}function Ym(l){return typeof l=="object"&&l!=null&&"type"in l&&"data"in l&&"init"in l&&l.type==="DataWithResponseInit"}function gs(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.headers=="object"&&typeof l.body<"u"}function hg(l){return p0.has(l)}function mg(l){return gs(l)&&hg(l.status)&&l.headers.has("Location")}function pg(l){return Zb.has(l.toUpperCase())}function wt(l){return Gb.has(l.toUpperCase())}function ys(l){return new URLSearchParams(l).getAll("index").some(o=>o==="")}function Mo(l,o){let u=typeof o=="string"?ea(o).search:o.search;if(l[l.length-1].route.index&&ys(u||""))return l[l.length-1];let c=s0(l);return c[c.length-1]}function Xm(l){let{formMethod:o,formAction:u,formEncType:c,text:f,formData:d,json:h}=l;if(!(!o||!u||!c)){if(f!=null)return{formMethod:o,formAction:u,formEncType:c,formData:void 0,json:void 0,text:f};if(d!=null)return{formMethod:o,formAction:u,formEncType:c,formData:d,json:void 0,text:void 0};if(h!==void 0)return{formMethod:o,formAction:u,formEncType:c,formData:void 0,json:h,text:void 0}}}function ls(l,o){return o?{state:"loading",location:l,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:l,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function vg(l,o){return{state:"submitting",location:l,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function Gr(l,o){return l?{state:"loading",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function bg(l,o){return{state:"submitting",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:o?o.data:void 0}}function In(l){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function gg(l,o){try{let u=l.sessionStorage.getItem(v0);if(u){let c=JSON.parse(u);for(let[f,d]of Object.entries(c||{}))d&&Array.isArray(d)&&o.set(f,new Set(d||[]))}}catch{}}function yg(l,o){if(o.size>0){let u={};for(let[c,f]of o)u[c]=[...f];try{l.sessionStorage.setItem(v0,JSON.stringify(u))}catch(c){ht(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function Gm(){let l,o,u=new Promise((c,f)=>{l=async d=>{c(d);try{await u}catch{}},o=async d=>{f(d);try{await u}catch{}}});return{promise:u,resolve:l,reject:o}}var ll=j.createContext(null);ll.displayName="DataRouter";var ti=j.createContext(null);ti.displayName="DataRouterState";var T0=j.createContext(!1);function xg(){return j.useContext(T0)}var xs=j.createContext({isTransitioning:!1});xs.displayName="ViewTransition";var z0=j.createContext(new Map);z0.displayName="Fetchers";var Sg=j.createContext(null);Sg.displayName="Await";var sn=j.createContext(null);sn.displayName="Navigation";var Uo=j.createContext(null);Uo.displayName="Location";var An=j.createContext({outlet:null,matches:[],isDataRoute:!1});An.displayName="Route";var Ss=j.createContext(null);Ss.displayName="RouteError";var M0="REACT_ROUTER_ERROR",Eg="REDIRECT",Og="ROUTE_ERROR_RESPONSE";function Tg(l){if(l.startsWith(`${M0}:${Eg}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function zg(l){if(l.startsWith(`${M0}:${Og}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Ir(o.status,o.statusText,o.data)}catch{}}function Mg(l,{relative:o}={}){Te(ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=j.useContext(sn),{hash:f,pathname:d,search:h}=ai(l,{relative:o}),b=d;return u!=="/"&&(b=d==="/"?u:Rn([u,d])),c.createHref({pathname:b,search:h,hash:f})}function ni(){return j.useContext(Uo)!=null}function rl(){return Te(ni(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Uo).location}var D0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function R0(l){j.useContext(sn).static||j.useLayoutEffect(l)}function _0(){let{isDataRoute:l}=j.useContext(An);return l?Bg():Dg()}function Dg(){Te(ni(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(ll),{basename:o,navigator:u}=j.useContext(sn),{matches:c}=j.useContext(An),{pathname:f}=rl(),d=JSON.stringify(ps(c)),h=j.useRef(!1);return R0(()=>{h.current=!0}),j.useCallback((v,p={})=>{if(ht(h.current,D0),!h.current)return;if(typeof v=="number"){u.go(v);return}let O=vs(v,JSON.parse(d),f,p.relative==="path");l==null&&o!=="/"&&(O.pathname=O.pathname==="/"?o:Rn([o,O.pathname])),(p.replace?u.replace:u.push)(O,p.state,p)},[o,u,d,f,l])}var Rg=j.createContext(null);function _g(l){let o=j.useContext(An).outlet;return j.useMemo(()=>o&&j.createElement(Rg.Provider,{value:l},o),[o,l])}function ai(l,{relative:o}={}){let{matches:u}=j.useContext(An),{pathname:c}=rl(),f=JSON.stringify(ps(u));return j.useMemo(()=>vs(l,JSON.parse(f),c,o==="path"),[l,f,c,o])}function Ag(l,o,u,c,f){Te(ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=j.useContext(sn),{matches:h}=j.useContext(An),b=h[h.length-1],v=b?b.params:{},p=b?b.pathname:"/",O=b?b.pathnameBase:"/",S=b&&b.route;{let Z=S&&S.path||"";U0(p,!S||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let w=rl(),C;C=w;let q=C.pathname||"/",_=q;if(O!=="/"){let Z=O.replace(/^\//,"").split("/");_="/"+q.replace(/^\//,"").split("/").slice(Z.length).join("/")}let X=Ra(l,{pathname:_});return ht(S||X!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),ht(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),jg(X&&X.map(Z=>Object.assign({},Z,{params:Object.assign({},v,Z.params),pathname:Rn([O,d.encodeLocation?d.encodeLocation(Z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?O:Rn([O,d.encodeLocation?d.encodeLocation(Z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Z.pathnameBase])})),h,u,c,f)}function wg(){let l=C0(),o=$r(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:d},"ErrorBoundary")," or"," ",j.createElement("code",{style:d},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},o),u?j.createElement("pre",{style:f},u):null,h)}var Cg=j.createElement(wg,null),A0=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=zg(l.digest);u&&(l=u)}let o=l!==void 0?j.createElement(An.Provider,{value:this.props.routeContext},j.createElement(Ss.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?j.createElement(Ug,{error:l},o):o}};A0.contextType=T0;var rs=new WeakMap;function Ug({children:l,error:o}){let{basename:u}=j.useContext(sn);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=Tg(o.digest);if(c){let f=rs.get(o);if(f)throw f;let d=d0(c.location,u);if(f0&&!rs.get(o))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw rs.set(o,h),h}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function Ng({routeContext:l,match:o,children:u}){let c=j.useContext(ll);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),j.createElement(An.Provider,{value:l},u)}function jg(l,o=[],u=null,c=null,f=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,h=u?.errors;if(h!=null){let O=d.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Te(O>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,O+1))}let b=!1,v=-1;if(u)for(let O=0;O<d.length;O++){let S=d[O];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=O),S.route.id){let{loaderData:w,errors:C}=u,q=S.route.loader&&!w.hasOwnProperty(S.route.id)&&(!C||C[S.route.id]===void 0);if(S.route.lazy||q){b=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}let p=u&&c?(O,S)=>{c(O,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:ei(u.matches),errorInfo:S})}:void 0;return d.reduceRight((O,S,w)=>{let C,q=!1,_=null,X=null;u&&(C=h&&S.route.id?h[S.route.id]:void 0,_=S.route.errorElement||Cg,b&&(v<0&&w===0?(U0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,X=null):v===w&&(q=!0,X=S.route.hydrateFallbackElement||null)));let P=o.concat(d.slice(0,w+1)),Z=()=>{let $;return C?$=_:q?$=X:S.route.Component?$=j.createElement(S.route.Component,null):S.route.element?$=S.route.element:$=O,j.createElement(Ng,{match:S,routeContext:{outlet:O,matches:P,isDataRoute:u!=null},children:$})};return u&&(S.route.ErrorBoundary||S.route.errorElement||w===0)?j.createElement(A0,{location:u.location,revalidation:u.revalidation,component:_,error:C,children:Z(),routeContext:{outlet:null,matches:P,isDataRoute:!0},onError:p}):Z()},null)}function Es(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hg(l){let o=j.useContext(ll);return Te(o,Es(l)),o}function Os(l){let o=j.useContext(ti);return Te(o,Es(l)),o}function Lg(l){let o=j.useContext(An);return Te(o,Es(l)),o}function No(l){let o=Lg(l),u=o.matches[o.matches.length-1];return Te(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function kg(){return No("useRouteId")}function qg(){return Os("useNavigation").navigation}function w0(){let l=Os("useLoaderData"),o=No("useLoaderData");return l.loaderData[o]}function C0(){let l=j.useContext(Ss),o=Os("useRouteError"),u=No("useRouteError");return l!==void 0?l:o.errors?.[u]}function Bg(){let{router:l}=Hg("useNavigate"),o=No("useNavigate"),u=j.useRef(!1);return R0(()=>{u.current=!0}),j.useCallback(async(f,d={})=>{ht(u.current,D0),u.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:o,...d}))},[l,o])}var Qm={};function U0(l,o,u){!o&&!Qm[l]&&(Qm[l]=!0,ht(!1,u))}var Zm={};function Vm(l,o){!l&&!Zm[o]&&(Zm[o]=!0,console.warn(o))}var Yg="useOptimistic",Km=nb[Yg],Xg=()=>{};function Gg(l){return Km?Km(l):[l,Xg]}function Qg(l){let o={hasErrorBoundary:l.hasErrorBoundary||l.ErrorBoundary!=null||l.errorElement!=null};return l.Component&&(l.element&&ht(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(o,{element:j.createElement(l.Component),Component:void 0})),l.HydrateFallback&&(l.hydrateFallbackElement&&ht(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(o,{hydrateFallbackElement:j.createElement(l.HydrateFallback),HydrateFallback:void 0})),l.ErrorBoundary&&(l.errorElement&&ht(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(o,{errorElement:j.createElement(l.ErrorBoundary),ErrorBoundary:void 0})),o}var Zg=["HydrateFallback","hydrateFallbackElement"],Vg=class{constructor(){this.status="pending",this.promise=new Promise((l,o)=>{this.resolve=u=>{this.status==="pending"&&(this.status="resolved",l(u))},this.reject=u=>{this.status==="pending"&&(this.status="rejected",o(u))}})}};function Kg({router:l,flushSync:o,onError:u,unstable_useTransitions:c}){c=xg()||c;let[d,h]=j.useState(l.state),[b,v]=Gg(d),[p,O]=j.useState(),[S,w]=j.useState({isTransitioning:!1}),[C,q]=j.useState(),[_,X]=j.useState(),[P,Z]=j.useState(),$=j.useRef(new Map),ve=j.useCallback((ne,{deletedFetchers:fe,newErrors:Be,flushSync:De,viewTransitionOpts:Le})=>{Be&&u&&Object.values(Be).forEach(Xe=>u(Xe,{location:ne.location,params:ne.matches[0]?.params??{},unstable_pattern:ei(ne.matches)})),ne.fetchers.forEach((Xe,Oe)=>{Xe.data!==void 0&&$.current.set(Oe,Xe.data)}),fe.forEach(Xe=>$.current.delete(Xe)),Vm(De===!1||o!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let yt=l.window!=null&&l.window.document!=null&&typeof l.window.document.startViewTransition=="function";if(Vm(Le==null||yt,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Le||!yt){o&&De?o(()=>h(ne)):c===!1?h(ne):j.startTransition(()=>{c===!0&&v(Xe=>Jm(Xe,ne)),h(ne)});return}if(o&&De){o(()=>{_&&(C?.resolve(),_.skipTransition()),w({isTransitioning:!0,flushSync:!0,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation})});let Xe=l.window.document.startViewTransition(()=>{o(()=>h(ne))});Xe.finished.finally(()=>{o(()=>{q(void 0),X(void 0),O(void 0),w({isTransitioning:!1})})}),o(()=>X(Xe));return}_?(C?.resolve(),_.skipTransition(),Z({state:ne,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation})):(O(ne),w({isTransitioning:!0,flushSync:!1,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation}))},[l.window,o,_,C,c,v,u]);j.useLayoutEffect(()=>l.subscribe(ve),[l,ve]),j.useEffect(()=>{S.isTransitioning&&!S.flushSync&&q(new Vg)},[S]),j.useEffect(()=>{if(C&&p&&l.window){let ne=p,fe=C.promise,Be=l.window.document.startViewTransition(async()=>{c===!1?h(ne):j.startTransition(()=>{c===!0&&v(De=>Jm(De,ne)),h(ne)}),await fe});Be.finished.finally(()=>{q(void 0),X(void 0),O(void 0),w({isTransitioning:!1})}),X(Be)}},[p,C,l.window,c,v]),j.useEffect(()=>{C&&p&&b.location.key===p.location.key&&C.resolve()},[C,_,b.location,p]),j.useEffect(()=>{!S.isTransitioning&&P&&(O(P.state),w({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}),Z(void 0))},[S.isTransitioning,P]);let me=j.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:ne=>l.navigate(ne),push:(ne,fe,Be)=>l.navigate(ne,{state:fe,preventScrollReset:Be?.preventScrollReset}),replace:(ne,fe,Be)=>l.navigate(ne,{replace:!0,state:fe,preventScrollReset:Be?.preventScrollReset})}),[l]),be=l.basename||"/",M=j.useMemo(()=>({router:l,navigator:me,static:!1,basename:be,onError:u}),[l,me,be,u]);return j.createElement(j.Fragment,null,j.createElement(ll.Provider,{value:M},j.createElement(ti.Provider,{value:b},j.createElement(z0.Provider,{value:$.current},j.createElement(xs.Provider,{value:S},j.createElement($g,{basename:be,location:b.location,navigationType:b.historyAction,navigator:me,unstable_useTransitions:c},j.createElement(Jg,{routes:l.routes,future:l.future,state:b,onError:u})))))),null)}function Jm(l,o){return{...l,navigation:o.navigation.state!=="idle"?o.navigation:l.navigation,revalidation:o.revalidation!=="idle"?o.revalidation:l.revalidation,actionData:o.navigation.state!=="submitting"?o.actionData:l.actionData,fetchers:o.fetchers}}var Jg=j.memo(Pg);function Pg({routes:l,future:o,state:u,onError:c}){return Ag(l,void 0,u,c,o)}function Fg(l){return _g(l.context)}function $g({basename:l="/",children:o=null,location:u,navigationType:c="POP",navigator:f,static:d=!1,unstable_useTransitions:h}){Te(!ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),v=j.useMemo(()=>({basename:b,navigator:f,static:d,unstable_useTransitions:h,future:{}}),[b,f,d,h]);typeof u=="string"&&(u=ea(u));let{pathname:p="/",search:O="",hash:S="",state:w=null,key:C="default"}=u,q=j.useMemo(()=>{let _=cn(p,b);return _==null?null:{location:{pathname:_,search:O,hash:S,state:w,key:C},navigationType:c}},[b,p,O,S,w,C,c]);return ht(q!=null,`<Router basename="${b}"> is not able to match the URL "${p}${O}${S}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:j.createElement(sn.Provider,{value:v},j.createElement(Uo.Provider,{children:o,value:q}))}var Do="get",Ro="application/x-www-form-urlencoded";function jo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Wg(l){return jo(l)&&l.tagName.toLowerCase()==="button"}function Ig(l){return jo(l)&&l.tagName.toLowerCase()==="form"}function ey(l){return jo(l)&&l.tagName.toLowerCase()==="input"}function ty(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ny(l,o){return l.button===0&&(!o||o==="_self")&&!ty(l)}var Oo=null;function ay(){if(Oo===null)try{new FormData(document.createElement("form"),0),Oo=!1}catch{Oo=!0}return Oo}var ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function is(l){return l!=null&&!ly.has(l)?(ht(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ro}"`),null):l}function ry(l,o){let u,c,f,d,h;if(Ig(l)){let b=l.getAttribute("action");c=b?cn(b,o):null,u=l.getAttribute("method")||Do,f=is(l.getAttribute("enctype"))||Ro,d=new FormData(l)}else if(Wg(l)||ey(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||b.getAttribute("action");if(c=v?cn(v,o):null,u=l.getAttribute("formmethod")||b.getAttribute("method")||Do,f=is(l.getAttribute("formenctype"))||is(b.getAttribute("enctype"))||Ro,d=new FormData(b,l),!ay()){let{name:p,type:O,value:S}=l;if(O==="image"){let w=p?`${p}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else p&&d.append(p,S)}}else{if(jo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Do,c=null,f=Ro,h=l}return d&&f==="text/plain"&&(h=d,d=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ts(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function iy(l,o,u,c){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:o&&cn(f.pathname,o)==="/"?f.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function oy(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function cy(l,o,u){let c=await Promise.all(l.map(async f=>{let d=o.routes[f.route.id];if(d){let h=await oy(d,u);return h.links?h.links():[]}return[]}));return hy(c.flat(1).filter(uy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Pm(l,o,u,c,f,d){let h=(v,p)=>u[p]?v.route.id!==u[p].route.id:!0,b=(v,p)=>u[p].pathname!==v.pathname||u[p].route.path?.endsWith("*")&&u[p].params["*"]!==v.params["*"];return d==="assets"?o.filter((v,p)=>h(v,p)||b(v,p)):d==="data"?o.filter((v,p)=>{let O=c.routes[v.route.id];if(!O||!O.hasLoader)return!1;if(h(v,p)||b(v,p))return!0;if(v.route.shouldRevalidate){let S=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function sy(l,o,{includeHydrateFallback:u}={}){return fy(l.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function fy(l){return[...new Set(l)]}function dy(l){let o={},u=Object.keys(l).sort();for(let c of u)o[c]=l[c];return o}function hy(l,o){let u=new Set;return new Set(o),l.reduce((c,f)=>{let d=JSON.stringify(dy(f));return u.has(d)||(u.add(d),c.push({key:d,link:f})),c},[])}function N0(){let l=j.useContext(ll);return Ts(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function my(){let l=j.useContext(ti);return Ts(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var zs=j.createContext(void 0);zs.displayName="FrameworkContext";function j0(){let l=j.useContext(zs);return Ts(l,"You must render this element inside a <HydratedRouter> element"),l}function py(l,o){let u=j.useContext(zs),[c,f]=j.useState(!1),[d,h]=j.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:p,onMouseLeave:O,onTouchStart:S}=o,w=j.useRef(null);j.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let _=P=>{P.forEach(Z=>{h(Z.isIntersecting)})},X=new IntersectionObserver(_,{threshold:.5});return w.current&&X.observe(w.current),()=>{X.disconnect()}}},[l]),j.useEffect(()=>{if(c){let _=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(_)}}},[c]);let C=()=>{f(!0)},q=()=>{f(!1),h(!1)};return u?l!=="intent"?[d,w,{}]:[d,w,{onFocus:Qr(b,C),onBlur:Qr(v,q),onMouseEnter:Qr(p,C),onMouseLeave:Qr(O,q),onTouchStart:Qr(S,C)}]:[!1,w,{}]}function Qr(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function vy({page:l,...o}){let{router:u}=N0(),c=j.useMemo(()=>Ra(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?j.createElement(gy,{page:l,matches:c,...o}):null}function by(l){let{manifest:o,routeModules:u}=j0(),[c,f]=j.useState([]);return j.useEffect(()=>{let d=!1;return cy(l,o,u).then(h=>{d||f(h)}),()=>{d=!0}},[l,o,u]),c}function gy({page:l,matches:o,...u}){let c=rl(),{future:f,manifest:d,routeModules:h}=j0(),{basename:b}=N0(),{loaderData:v,matches:p}=my(),O=j.useMemo(()=>Pm(l,o,p,d,c,"data"),[l,o,p,d,c]),S=j.useMemo(()=>Pm(l,o,p,d,c,"assets"),[l,o,p,d,c]),w=j.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let _=new Set,X=!1;if(o.forEach(Z=>{let $=d.routes[Z.route.id];!$||!$.hasLoader||(!O.some(ve=>ve.route.id===Z.route.id)&&Z.route.id in v&&h[Z.route.id]?.shouldRevalidate||$.hasClientLoader?X=!0:_.add(Z.route.id))}),_.size===0)return[];let P=iy(l,b,f.unstable_trailingSlashAwareDataRequests,"data");return X&&_.size>0&&P.searchParams.set("_routes",o.filter(Z=>_.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[P.pathname+P.search]},[b,f.unstable_trailingSlashAwareDataRequests,v,c,d,O,o,l,h]),C=j.useMemo(()=>sy(S,d),[S,d]),q=by(S);return j.createElement(j.Fragment,null,w.map(_=>j.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...u})),C.map(_=>j.createElement("link",{key:_,rel:"modulepreload",href:_,...u})),q.map(({key:_,link:X})=>j.createElement("link",{key:_,nonce:u.nonce,...X,crossOrigin:X.crossOrigin??u.crossOrigin})))}function yy(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xy&&(window.__reactRouterVersion="7.13.0")}catch{}function Sy(l,o){return Pb({basename:o?.basename,getContext:o?.getContext,future:o?.future,history:fb({window:o?.window}),hydrationData:Ey(),routes:l,mapRouteProperties:Qg,hydrationRouteProperties:Zg,dataStrategy:o?.dataStrategy,patchRoutesOnNavigation:o?.patchRoutesOnNavigation,window:o?.window,unstable_instrumentations:o?.unstable_instrumentations}).initialize()}function Ey(){let l=window?.__staticRouterHydrationData;return l&&l.errors&&(l={...l,errors:Oy(l.errors)}),l}function Oy(l){if(!l)return null;let o=Object.entries(l),u={};for(let[c,f]of o)if(f&&f.__type==="RouteErrorResponse")u[c]=new Ir(f.status,f.statusText,f.data,f.internal===!0);else if(f&&f.__type==="Error"){if(f.__subType){let d=window[f.__subType];if(typeof d=="function")try{let h=new d(f.message);h.stack="",u[c]=h}catch{}}if(u[c]==null){let d=new Error(f.message);d.stack="",u[c]=d}}else u[c]=f;return u}var H0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ms=j.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:f,reloadDocument:d,replace:h,state:b,target:v,to:p,preventScrollReset:O,viewTransition:S,unstable_defaultShouldRevalidate:w,...C},q){let{basename:_,unstable_useTransitions:X}=j.useContext(sn),P=typeof p=="string"&&H0.test(p),Z=d0(p,_);p=Z.to;let $=Mg(p,{relative:f}),[ve,me,be]=py(c,C),M=zy(p,{replace:h,state:b,target:v,preventScrollReset:O,relative:f,viewTransition:S,unstable_defaultShouldRevalidate:w,unstable_useTransitions:X});function ne(Be){o&&o(Be),Be.defaultPrevented||M(Be)}let fe=j.createElement("a",{...C,...be,href:Z.absoluteURL||$,onClick:Z.isExternal||d?o:ne,ref:yy(q,me),target:v,"data-discover":!P&&u==="render"?"true":void 0});return ve&&!P?j.createElement(j.Fragment,null,fe,j.createElement(vy,{page:$})):fe});Ms.displayName="Link";var Wr=j.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:f=!1,style:d,to:h,viewTransition:b,children:v,...p},O){let S=ai(h,{relative:p.relative}),w=rl(),C=j.useContext(ti),{navigator:q,basename:_}=j.useContext(sn),X=C!=null&&Ay(S)&&b===!0,P=q.encodeLocation?q.encodeLocation(S).pathname:S.pathname,Z=w.pathname,$=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;u||(Z=Z.toLowerCase(),$=$?$.toLowerCase():null,P=P.toLowerCase()),$&&_&&($=cn($,_)||$);const ve=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let me=Z===P||!f&&Z.startsWith(P)&&Z.charAt(ve)==="/",be=$!=null&&($===P||!f&&$.startsWith(P)&&$.charAt(P.length)==="/"),M={isActive:me,isPending:be,isTransitioning:X},ne=me?o:void 0,fe;typeof c=="function"?fe=c(M):fe=[c,me?"active":null,be?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Be=typeof d=="function"?d(M):d;return j.createElement(Ms,{...p,"aria-current":ne,className:fe,ref:O,style:Be,to:h,viewTransition:b},typeof v=="function"?v(M):v)});Wr.displayName="NavLink";var L0=j.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:f,state:d,method:h=Do,action:b,onSubmit:v,relative:p,preventScrollReset:O,viewTransition:S,unstable_defaultShouldRevalidate:w,...C},q)=>{let{unstable_useTransitions:_}=j.useContext(sn),X=Ry(),P=_y(b,{relative:p}),Z=h.toLowerCase()==="get"?"get":"post",$=typeof b=="string"&&H0.test(b),ve=me=>{if(v&&v(me),me.defaultPrevented)return;me.preventDefault();let be=me.nativeEvent.submitter,M=be?.getAttribute("formmethod")||h,ne=()=>X(be||me.currentTarget,{fetcherKey:o,method:M,navigate:u,replace:f,state:d,relative:p,preventScrollReset:O,viewTransition:S,unstable_defaultShouldRevalidate:w});_&&u!==!1?j.startTransition(()=>ne()):ne()};return j.createElement("form",{ref:q,method:Z,action:P,onSubmit:c?v:ve,...C,"data-discover":!$&&l==="render"?"true":void 0})});L0.displayName="Form";function Ty(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k0(l){let o=j.useContext(ll);return Te(o,Ty(l)),o}function zy(l,{target:o,replace:u,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b,unstable_useTransitions:v}={}){let p=_0(),O=rl(),S=ai(l,{relative:d});return j.useCallback(w=>{if(ny(w,o)){w.preventDefault();let C=u!==void 0?u:_n(O)===_n(S),q=()=>p(l,{replace:C,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b});v?j.startTransition(()=>q()):q()}},[O,p,S,u,c,o,l,f,d,h,b,v])}var My=0,Dy=()=>`__${String(++My)}__`;function Ry(){let{router:l}=k0("useSubmit"),{basename:o}=j.useContext(sn),u=kg(),c=l.fetch,f=l.navigate;return j.useCallback(async(d,h={})=>{let{action:b,method:v,encType:p,formData:O,body:S}=ry(d,o);if(h.navigate===!1){let w=h.fetcherKey||Dy();await c(w,u,h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:O,body:S,formMethod:h.method||v,formEncType:h.encType||p,flushSync:h.flushSync})}else await f(h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:O,body:S,formMethod:h.method||v,formEncType:h.encType||p,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,f,o,u])}function _y(l,{relative:o}={}){let{basename:u}=j.useContext(sn),c=j.useContext(An);Te(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...ai(l||".",{relative:o})},h=rl();if(l==null){d.search=h.search;let b=new URLSearchParams(d.search),v=b.getAll("index");if(v.some(O=>O==="")){b.delete("index"),v.filter(S=>S).forEach(S=>b.append("index",S));let O=b.toString();d.search=O?`?${O}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:Rn([u,d.pathname])),_n(d)}function Ay(l,{relative:o}={}){let u=j.useContext(xs);Te(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=k0("useViewTransitionState"),f=ai(l,{relative:o});if(!u.isTransitioning)return!1;let d=cn(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=cn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return _o(f.pathname,h)!=null||_o(f.pathname,d)!=null}var wy=l0();function Cy(l){return j.createElement(Kg,{flushSync:wy.flushSync,...l})}function Uy(){return G.jsxs("nav",{className:"navbar",children:[G.jsx("div",{id:"logo",children:G.jsx(Wr,{to:"/",children:G.jsx("h2",{children:"JP-Flix"})})}),G.jsx("ul",{className:"nav-links",children:["Home","About","Contact","Movies"].map(l=>G.jsx("li",{children:G.jsx(Wr,{to:l==="Home"?"/":`/${l.toLowerCase()}`,children:l})},l))})]})}function Ny(){return G.jsx("header",{children:G.jsx(Uy,{})})}var q0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fm=dt.createContext&&dt.createContext(q0),jy=["attr","size","title"];function Hy(l,o){if(l==null)return{};var u=Ly(l,o),c,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(f=0;f<d.length;f++)c=d[f],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(u[c]=l[c])}return u}function Ly(l,o){if(l==null)return{};var u={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(o.indexOf(c)>=0)continue;u[c]=l[c]}return u}function Ao(){return Ao=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(l[c]=u[c])}return l},Ao.apply(this,arguments)}function $m(l,o){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);o&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,c)}return u}function wo(l){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?$m(Object(u),!0).forEach(function(c){ky(l,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):$m(Object(u)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(u,c))})}return l}function ky(l,o,u){return o=qy(o),o in l?Object.defineProperty(l,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[o]=u,l}function qy(l){var o=By(l,"string");return typeof o=="symbol"?o:o+""}function By(l,o){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var c=u.call(l,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)}function B0(l){return l&&l.map((o,u)=>dt.createElement(o.tag,wo({key:u},o.attr),B0(o.child)))}function Y0(l){return o=>dt.createElement(Yy,Ao({attr:wo({},l.attr)},o),B0(l.child))}function Yy(l){var o=u=>{var{attr:c,size:f,title:d}=l,h=Hy(l,jy),b=f||u.size||"1em",v;return u.className&&(v=u.className),l.className&&(v=(v?v+" ":"")+l.className),dt.createElement("svg",Ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,h,{className:v,style:wo(wo({color:l.color||u.color},u.style),l.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),d&&dt.createElement("title",null,d),l.children)};return Fm!==void 0?dt.createElement(Fm.Consumer,null,u=>o(u)):o(q0)}function Xy(l){return Y0({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(l)}function Gy(l){return Y0({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"},child:[]}]})(l)}function Qy(){const o=new Date().getFullYear();return G.jsxs("div",{className:"footer",children:[G.jsxs("span",{children:[G.jsx(Gy,{})," ",o]}),G.jsx("span",{children:"Creation by J.Pearl"}),G.jsx("span",{children:G.jsx("a",{href:"https://jevitapearl.github.io/",children:"Visit my portfolio here"})})]})}function St(l,o){o===void 0&&(o={});var u=o.insertAt;if(l&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",u==="top"&&c.firstChild?c.insertBefore(f,c.firstChild):c.appendChild(f),f.styleSheet?f.styleSheet.cssText=l:f.appendChild(document.createTextNode(l))}}St(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Sn=function(){return Sn=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++)for(var f in o=arguments[u])Object.prototype.hasOwnProperty.call(o,f)&&(l[f]=o[f]);return l},Sn.apply(this,arguments)};function Co(l){return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Co(l)}var Zy=/^\s+/,Vy=/\s+$/;function ue(l,o){if(o=o||{},(l=l||"")instanceof ue)return l;if(!(this instanceof ue))return new ue(l,o);var u=(function(c){var f={r:0,g:0,b:0},d=1,h=null,b=null,v=null,p=!1,O=!1;typeof c=="string"&&(c=(function(q){q=q.replace(Zy,"").replace(Vy,"").toLowerCase();var _,X=!1;if(ds[q])q=ds[q],X=!0;else if(q=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=xn.rgb.exec(q))?{r:_[1],g:_[2],b:_[3]}:(_=xn.rgba.exec(q))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=xn.hsl.exec(q))?{h:_[1],s:_[2],l:_[3]}:(_=xn.hsla.exec(q))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=xn.hsv.exec(q))?{h:_[1],s:_[2],v:_[3]}:(_=xn.hsva.exec(q))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=xn.hex8.exec(q))?{r:Pt(_[1]),g:Pt(_[2]),b:Pt(_[3]),a:a0(_[4]),format:X?"name":"hex8"}:(_=xn.hex6.exec(q))?{r:Pt(_[1]),g:Pt(_[2]),b:Pt(_[3]),format:X?"name":"hex"}:(_=xn.hex4.exec(q))?{r:Pt(_[1]+""+_[1]),g:Pt(_[2]+""+_[2]),b:Pt(_[3]+""+_[3]),a:a0(_[4]+""+_[4]),format:X?"name":"hex8"}:(_=xn.hex3.exec(q))?{r:Pt(_[1]+""+_[1]),g:Pt(_[2]+""+_[2]),b:Pt(_[3]+""+_[3]),format:X?"name":"hex"}:!1})(c)),Co(c)=="object"&&(Wn(c.r)&&Wn(c.g)&&Wn(c.b)?(S=c.r,w=c.g,C=c.b,f={r:255*Ie(S,255),g:255*Ie(w,255),b:255*Ie(C,255)},p=!0,O=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Wn(c.h)&&Wn(c.s)&&Wn(c.v)?(h=Kr(c.s),b=Kr(c.v),f=(function(q,_,X){q=6*Ie(q,360),_=Ie(_,100),X=Ie(X,100);var P=Math.floor(q),Z=q-P,$=X*(1-_),ve=X*(1-Z*_),me=X*(1-(1-Z)*_),be=P%6,M=[X,ve,$,$,me,X][be],ne=[me,X,X,ve,$,$][be],fe=[$,$,me,X,X,ve][be];return{r:255*M,g:255*ne,b:255*fe}})(c.h,h,b),p=!0,O="hsv"):Wn(c.h)&&Wn(c.s)&&Wn(c.l)&&(h=Kr(c.s),v=Kr(c.l),f=(function(q,_,X){var P,Z,$;function ve(M,ne,fe){return fe<0&&(fe+=1),fe>1&&(fe-=1),fe<1/6?M+6*(ne-M)*fe:fe<.5?ne:fe<2/3?M+(ne-M)*(2/3-fe)*6:M}if(q=Ie(q,360),_=Ie(_,100),X=Ie(X,100),_===0)P=Z=$=X;else{var me=X<.5?X*(1+_):X+_-X*_,be=2*X-me;P=ve(be,me,q+1/3),Z=ve(be,me,q),$=ve(be,me,q-1/3)}return{r:255*P,g:255*Z,b:255*$}})(c.h,h,v),p=!0,O="hsl"),c.hasOwnProperty("a")&&(d=c.a));var S,w,C;return d=X0(d),{ok:p,format:c.format||O,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:d}})(l);this._originalInput=l,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||u.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=u.ok}function Wm(l,o,u){l=Ie(l,255),o=Ie(o,255),u=Ie(u,255);var c,f,d=Math.max(l,o,u),h=Math.min(l,o,u),b=(d+h)/2;if(d==h)c=f=0;else{var v=d-h;switch(f=b>.5?v/(2-d-h):v/(d+h),d){case l:c=(o-u)/v+(o<u?6:0);break;case o:c=(u-l)/v+2;break;case u:c=(l-o)/v+4}c/=6}return{h:c,s:f,l:b}}function Im(l,o,u){l=Ie(l,255),o=Ie(o,255),u=Ie(u,255);var c,f,d=Math.max(l,o,u),h=Math.min(l,o,u),b=d,v=d-h;if(f=d===0?0:v/d,d==h)c=0;else{switch(d){case l:c=(o-u)/v+(o<u?6:0);break;case o:c=(u-l)/v+2;break;case u:c=(l-o)/v+4}c/=6}return{h:c,s:f,v:b}}function e0(l,o,u,c){var f=[En(Math.round(l).toString(16)),En(Math.round(o).toString(16)),En(Math.round(u).toString(16))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function t0(l,o,u,c){return[En(G0(c)),En(Math.round(l).toString(16)),En(Math.round(o).toString(16)),En(Math.round(u).toString(16))].join("")}function Ky(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.s-=o/100,u.s=Ho(u.s),ue(u)}function Jy(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.s+=o/100,u.s=Ho(u.s),ue(u)}function Py(l){return ue(l).desaturate(100)}function Fy(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.l+=o/100,u.l=Ho(u.l),ue(u)}function $y(l,o){o=o===0?0:o||10;var u=ue(l).toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(-o/100*255))),u.g=Math.max(0,Math.min(255,u.g-Math.round(-o/100*255))),u.b=Math.max(0,Math.min(255,u.b-Math.round(-o/100*255))),ue(u)}function Wy(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.l-=o/100,u.l=Ho(u.l),ue(u)}function Iy(l,o){var u=ue(l).toHsl(),c=(u.h+o)%360;return u.h=c<0?360+c:c,ue(u)}function e1(l){var o=ue(l).toHsl();return o.h=(o.h+180)%360,ue(o)}function n0(l,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var u=ue(l).toHsl(),c=[ue(l)],f=360/o,d=1;d<o;d++)c.push(ue({h:(u.h+d*f)%360,s:u.s,l:u.l}));return c}function t1(l){var o=ue(l).toHsl(),u=o.h;return[ue(l),ue({h:(u+72)%360,s:o.s,l:o.l}),ue({h:(u+216)%360,s:o.s,l:o.l})]}function n1(l,o,u){o=o||6,u=u||30;var c=ue(l).toHsl(),f=360/u,d=[ue(l)];for(c.h=(c.h-(f*o>>1)+720)%360;--o;)c.h=(c.h+f)%360,d.push(ue(c));return d}function a1(l,o){o=o||6;for(var u=ue(l).toHsv(),c=u.h,f=u.s,d=u.v,h=[],b=1/o;o--;)h.push(ue({h:c,s:f,v:d})),d=(d+b)%1;return h}ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,o,u,c=this.toRgb();return l=c.r/255,o=c.g/255,u=c.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))},setAlpha:function(l){return this._a=X0(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=Im(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=Im(this._r,this._g,this._b),o=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.v);return this._a==1?"hsv("+o+", "+u+"%, "+c+"%)":"hsva("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var l=Wm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=Wm(this._r,this._g,this._b),o=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.l);return this._a==1?"hsl("+o+", "+u+"%, "+c+"%)":"hsla("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHex:function(l){return e0(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return(function(o,u,c,f,d){var h=[En(Math.round(o).toString(16)),En(Math.round(u).toString(16)),En(Math.round(c).toString(16)),En(G0(f))];return d&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")})(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ie(this._r,255))+"%",g:Math.round(100*Ie(this._g,255))+"%",b:Math.round(100*Ie(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ie(this._r,255))+"%, "+Math.round(100*Ie(this._g,255))+"%, "+Math.round(100*Ie(this._b,255))+"%)":"rgba("+Math.round(100*Ie(this._r,255))+"%, "+Math.round(100*Ie(this._g,255))+"%, "+Math.round(100*Ie(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(l1[e0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var o="#"+t0(this._r,this._g,this._b,this._a),u=o,c=this._gradientType?"GradientType = 1, ":"";if(l){var f=ue(l);u="#"+t0(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+o+",endColorstr="+u+")"},toString:function(l){var o=!!l;l=l||this._format;var u=!1,c=this._a<1&&this._a>=0;return o||!c||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(u=this.toRgbString()),l==="prgb"&&(u=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(u=this.toHexString()),l==="hex3"&&(u=this.toHexString(!0)),l==="hex4"&&(u=this.toHex8String(!0)),l==="hex8"&&(u=this.toHex8String()),l==="name"&&(u=this.toName()),l==="hsl"&&(u=this.toHslString()),l==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ue(this.toString())},_applyModification:function(l,o){var u=l.apply(null,[this].concat([].slice.call(o)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(Fy,arguments)},brighten:function(){return this._applyModification($y,arguments)},darken:function(){return this._applyModification(Wy,arguments)},desaturate:function(){return this._applyModification(Ky,arguments)},saturate:function(){return this._applyModification(Jy,arguments)},greyscale:function(){return this._applyModification(Py,arguments)},spin:function(){return this._applyModification(Iy,arguments)},_applyCombination:function(l,o){return l.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(n1,arguments)},complement:function(){return this._applyCombination(e1,arguments)},monochromatic:function(){return this._applyCombination(a1,arguments)},splitcomplement:function(){return this._applyCombination(t1,arguments)},triad:function(){return this._applyCombination(n0,[3])},tetrad:function(){return this._applyCombination(n0,[4])}},ue.fromRatio=function(l,o){if(Co(l)=="object"){var u={};for(var c in l)l.hasOwnProperty(c)&&(u[c]=c==="a"?l[c]:Kr(l[c]));l=u}return ue(l,o)},ue.equals=function(l,o){return!(!l||!o)&&ue(l).toRgbString()==ue(o).toRgbString()},ue.random=function(){return ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ue.mix=function(l,o,u){u=u===0?0:u||50;var c=ue(l).toRgb(),f=ue(o).toRgb(),d=u/100;return ue({r:(f.r-c.r)*d+c.r,g:(f.g-c.g)*d+c.g,b:(f.b-c.b)*d+c.b,a:(f.a-c.a)*d+c.a})},ue.readability=function(l,o){var u=ue(l),c=ue(o);return(Math.max(u.getLuminance(),c.getLuminance())+.05)/(Math.min(u.getLuminance(),c.getLuminance())+.05)},ue.isReadable=function(l,o,u){var c,f,d=ue.readability(l,o);switch(f=!1,(c=(function(h){var b,v;return b=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),v=(h.size||"small").toLowerCase(),b!=="AA"&&b!=="AAA"&&(b="AA"),v!=="small"&&v!=="large"&&(v="small"),{level:b,size:v}})(u)).level+c.size){case"AAsmall":case"AAAlarge":f=d>=4.5;break;case"AAlarge":f=d>=3;break;case"AAAsmall":f=d>=7}return f},ue.mostReadable=function(l,o,u){var c,f,d,h,b=null,v=0;f=(u=u||{}).includeFallbackColors,d=u.level,h=u.size;for(var p=0;p<o.length;p++)(c=ue.readability(l,o[p]))>v&&(v=c,b=ue(o[p]));return ue.isReadable(l,b,{level:d,size:h})||!f?b:(u.includeFallbackColors=!1,ue.mostReadable(l,["#fff","#000"],u))};var ds=ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},l1=ue.hexNames=(function(l){var o={};for(var u in l)l.hasOwnProperty(u)&&(o[l[u]]=u);return o})(ds);function X0(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function Ie(l,o){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(l)&&(l="100%");var u=(function(c){return typeof c=="string"&&c.indexOf("%")!=-1})(l);return l=Math.min(o,Math.max(0,parseFloat(l))),u&&(l=parseInt(l*o,10)/100),Math.abs(l-o)<1e-6?1:l%o/parseFloat(o)}function Ho(l){return Math.min(1,Math.max(0,l))}function Pt(l){return parseInt(l,16)}function En(l){return l.length==1?"0"+l:""+l}function Kr(l){return l<=1&&(l=100*l+"%"),l}function G0(l){return Math.round(255*parseFloat(l)).toString(16)}function a0(l){return Pt(l)/255}var Da,To,zo,xn=(To="[\\s|\\(]+("+(Da="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")\\s*\\)?",zo="[\\s|\\(]+("+Da+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")\\s*\\)?",{CSS_UNIT:new RegExp(Da),rgb:new RegExp("rgb"+To),rgba:new RegExp("rgba"+zo),hsl:new RegExp("hsl"+To),hsla:new RegExp("hsla"+zo),hsv:new RegExp("hsv"+To),hsva:new RegExp("hsva"+zo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Wn(l){return!!xn.CSS_UNIT.exec(l)}var r1=function(l,o){var u=(typeof l=="string"?parseInt(l):l)||0;if(u>=-5&&u<=5){var c=u,f=parseFloat(o),d=f+c*(f/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:o}},i1=function(l,o){var u=l||{},c="";switch(o){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var f={};if(u.fontSize){var d=u.fontSize;f=(function(h,b){var v={};for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&b.indexOf(p)<0&&(v[p]=h[p]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(p=Object.getOwnPropertySymbols(h);O<p.length;O++)b.indexOf(p[O])<0&&Object.prototype.propertyIsEnumerable.call(h,p[O])&&(v[p[O]]=h[p[O]])}return v})(u,["fontSize"]),c=d}return{fontSize:c,styles:f}},o1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},u1=function(l){var o=l.className,u=l.text,c=l.textColor,f=l.staticText,d=l.style;return u?dt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Sn(Sn(Sn({},f&&o1),c&&{color:c,mixBlendMode:"unset"}),d&&d)},typeof u=="string"&&u.length?u:"loading"):null},Q0="rgb(50, 205, 50)";function c1(l,o){if(o===void 0&&(o=0),l.length===0)throw new Error("Input array cannot be empty!");var u=[];return(function c(f,d){return d===void 0&&(d=0),u.push.apply(u,f),u.length<d&&c(u,d),u.slice(0,d)})(l,o)}St(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ue(Q0).toRgb();Array.from({length:4},(function(l,o){return"--atom-phase".concat(o+1,"-rgb")}));St(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--commet-phase".concat(o+1,"-color")}));St(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--OP-annulus-phase".concat(o+1,"-color")}));function os(l){return l&&l.Math===Math&&l}St(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);os(typeof window=="object"&&window)||os(typeof self=="object"&&self)||os(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(l,o){return"--OP-dotted-phase".concat(o+1,"-color")}));St(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--OP-spokes-phase".concat(o+1,"-color")}));St(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(l,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")}));St(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]}));St(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--four-square-phase".concat(o+1,"-color")}));St(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);var Xl=Array.from({length:4},(function(l,o){return"--mosaic-phase".concat(o+1,"-color")})),s1=function(l){var o,u=i1(l?.style,l?.size),c=u.styles,f=u.fontSize,d=l?.easing,h=r1(l?.speedPlus,"1.5s").animationPeriod,b=Math.round(parseFloat(h)/9*100)/100;b+="s";var v=(function(p){var O={};if(p instanceof Array){for(var S=c1(p,Xl.length),w=0;w<S.length&&!(w>=4);w++)O[Xl[w]]=S[w];return O}try{if(typeof p!="string")throw new Error("Color String expected");for(var C=0;C<Xl.length;C++)O[Xl[C]]=p}catch(q){for(q instanceof Error?console.warn("[".concat(q.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),C=0;C<Xl.length;C++)O[Xl[C]]=Q0}return O})((o=l?.color)!==null&&o!==void 0?o:"");return dt.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:Sn(Sn(Sn(Sn(Sn({},f&&{fontSize:f}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),c),role:"status","aria-live":"polite","aria-label":"Loading"},dt.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:Sn({},b&&{"--mosaic-skip-interval":b})},dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),dt.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),dt.createElement(u1,{staticText:!0,text:l?.text,textColor:l?.textColor}))};St(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--riple-phase".concat(o+1,"-color")}));St(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-pulsate-phase".concat(o+1,"-color")}));St(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-brick-stack-phase".concat(o+1,"-color")}));St(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-bob-phase".concat(o+1,"-color")}));St(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-bounce-phase".concat(o+1,"-color")}));St(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--shape-phase".concat(o+1,"-color")}));St(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--trophySpin-phase".concat(o+1,"-color")}));St(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--slab-phase".concat(o+1,"-color")}));St(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--life-line-phase".concat(o+1,"-color")}));function f1(){return G.jsx("div",{className:"loading",children:G.jsx(s1,{color:"#b8b8b8",size:"small",text:"",textColor:""})})}function d1(){return G.jsxs("div",{className:"about",children:[G.jsx("h1",{children:"About Us"}),G.jsxs("div",{children:[G.jsx("p",{children:"Welcome to our movie discovery platform — a fast, simple way to explore the world of cinema. Built using the OMDb API, our goal is to make movie search effortless by providing accurate, up-to-date information including ratings, cast details, release dates, posters, and plot summaries."}),G.jsx("br",{}),G.jsx("p",{children:"Whether you're looking for a classic film, researching your favorite actors, or deciding what to watch next, our platform helps you find reliable movie data in seconds. We focus on speed, clarity, and a clean user experience so you can spend less time searching and more time discovering great films."}),G.jsx("br",{}),G.jsx("p",{children:"This project was created to demonstrate how modern web technologies and public movie databases can work together to deliver powerful search tools that are accessible to everyone. As the platform evolves, we aim to add more discovery features, smarter recommendations, and enhanced browsing experiences for movie lovers everywhere."})]})]})}function h1(){return G.jsx("div",{children:G.jsxs(L0,{method:"POST",action:"/contact",className:"contact-grid",children:[G.jsx("h1",{children:"Contact Us"}),G.jsxs("div",{className:"contact-field",children:[G.jsx("label",{htmlFor:"name",children:"Name"}),G.jsx("input",{className:"contact-input",name:"name",type:"text",id:"name",placeholder:"Enter your name"})]}),G.jsxs("div",{className:"contact-field",children:[G.jsx("label",{htmlFor:"email",children:"E-mail"}),G.jsx("input",{className:"contact-input",name:"email",type:"email",id:"email",placeholder:"Enter your e-mail"})]}),G.jsxs("div",{className:"contact-field",children:[G.jsx("label",{htmlFor:"message",children:"Message"}),G.jsx("textarea",{className:"contact-input",name:"message",id:"message",placeholder:"Enter your message"})]}),G.jsx("button",{className:"btn ",children:"Send"})]})})}const m1=async({request:l})=>{try{const o=await l.formData();console.log(o);const u=Object.fromEntries(o);return console.log(u),null}catch(o){console.log(o)}},p1="/react-projects/movies/assets/hero-img-CJvnIqJu.jpg";function v1(){return G.jsxs("div",{className:"hero",children:[G.jsxs("div",{className:"hero-text",children:[G.jsx("h1",{children:"Find Any Movie in Seconds"}),G.jsx("p",{children:"Search millions of titles, explore cast details, ratings, posters, and release information - all in one place."}),G.jsx(Ms,{to:"/movies",children:G.jsx("button",{className:"btn red",children:"Explore"})})]}),G.jsx("div",{children:G.jsx("img",{className:"hero-img",src:p1,alt:"Theatre image"})})]})}function b1(){return G.jsx("main",{children:G.jsx(v1,{})})}function g1(){const l=w0();return G.jsx("div",{children:G.jsx("ul",{className:"movie-grid",children:l.Search.map(({imdbID:o,Poster:u,Title:c,Year:f})=>G.jsxs("li",{className:"movie-card",children:[G.jsx("img",{className:"movie-poster",src:u,alt:"Movie poster"}),G.jsxs("div",{div:"movie-details",children:[G.jsx("h3",{className:"movie-title",children:c}),G.jsx("i",{children:f})]}),G.jsx(Wr,{to:"/movies/"+o,children:G.jsx("button",{className:"btn",children:"Know more"})})]},o))})})}function y1(){const l=C0();console.log(l);const o=_0();return G.jsxs("div",{children:["The page you are looking for doesn't exist.",G.jsx("button",{onClick:()=>o(-1),children:"Return to the previous page"}),G.jsx("button",{children:G.jsx(Wr,{to:"/",children:"Go to Home page"})})]})}async function x1(){try{return(await fetch('http://www.omdbapi.com/?i=tt3896198&apikey="e9b0bc61"&s=avengers&page=1')).json()}catch(l){console.log(l)}}async function S1({params:l}){try{return(await fetch(`http://www.omdbapi.com/?apikey="e9b0bc61"&i=${l.movieID}&plot=full`)).json()}catch(o){console.log(o)}}function E1(){const l=w0(),{Actors:o,Country:u,Director:c,Genre:f,Language:d,Plot:h,Poster:b,Released:v,Runtime:p,Title:O,Writer:S,Year:w,imdbRating:C,imdbVotes:q}=l;return G.jsxs("div",{className:"movie-desc",children:[G.jsx("img",{src:b,alt:"Movie Poster"}),G.jsxs("div",{children:[G.jsx("h1",{children:O}),G.jsx("br",{}),G.jsx("br",{}),G.jsxs("i",{children:[w,", ",u]}),G.jsx("br",{}),G.jsxs("i",{children:["Genre: ",f]}),G.jsx("br",{}),G.jsxs("em",{children:["Director: ",c]}),G.jsx("br",{}),G.jsx("br",{}),G.jsxs("p",{children:["Plot: ",G.jsx("br",{}),h]}),G.jsx("br",{}),G.jsx("h3",{children:"Other Details"}),G.jsxs("p",{children:["Language: ",d]}),G.jsxs("p",{children:["Actors: ",o]}),G.jsxs("p",{children:["Released: ",v]}),G.jsxs("p",{children:["Runtime: ",p]}),G.jsxs("p",{children:["Writer/s: ",S]}),G.jsxs("p",{children:["IMDB rating: ",G.jsx(Xy,{color:"goldenrod",size:12})," ",C,"/10.0 -  ",q," votes"]})]})]})}function O1(){const l=Sy([{path:"/",element:G.jsx(T1,{}),errorElement:G.jsx(y1,{}),children:[{path:"/",element:G.jsx(b1,{})},{path:"/contact",element:G.jsx(h1,{}),action:m1},{path:"/about",element:G.jsx(d1,{})},{path:"/movies",element:G.jsx(g1,{}),loader:x1},{path:"/movies/:movieID",element:G.jsx(E1,{}),loader:S1}]}]);return G.jsx(Cy,{router:l})}function T1(){const l=qg();return G.jsxs(G.Fragment,{children:[G.jsx(Ny,{}),G.jsx("div",{className:"container",children:l.state==="loading"?G.jsx(f1,{}):G.jsx(Fg,{})}),G.jsx(Qy,{})]})}ub.createRoot(document.getElementById("root")).render(G.jsx(j.StrictMode,{children:G.jsx(O1,{})}));
