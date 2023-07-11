(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.f0(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.f1(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cj(b)
return new t(c,this)}:function(){if(t===null)t=A.cj(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cj(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={c9:function c9(){},
dD(a){return new A.b2("Field '"+a+"' has not been initialized.")},
cL(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cm(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
dy(){return new A.bJ("No element")},
dS(a,b,c){A.b9(a,0,J.c6(a)-1,b,c)},
b9(a,b,c,d,e){if(c-b<=32)A.dR(a,b,c,d,e)
else A.dQ(a,b,c,d,e)},
dR(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.aS(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
dQ(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.d.S(a4-a3+1,6),j=a3+k,i=a4-k,h=B.d.S(a3+a4,2),g=h-k,f=h+k,e=J.aS(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}e.i(a2,j,d)
e.i(a2,h,b)
e.i(a2,i,a0)
e.i(a2,g,e.h(a2,a3))
e.i(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.bj(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.h(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
r=n
s=m
break}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.h(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
s=m}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.i(a2,a3,e.h(a2,a1))
e.i(a2,a1,c)
a1=r+1
e.i(a2,a4,e.h(a2,a1))
e.i(a2,a1,a)
A.b9(a2,a3,s-2,a5,a6)
A.b9(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.bj(a5.$2(e.h(a2,s),c),0);)++s
for(;J.bj(a5.$2(e.h(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.h(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
s=m}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)}r=n
break}}A.b9(a2,s,r,a5,a6)}else A.b9(a2,s,r,a5,a6)},
b2:function b2(a){this.a=a},
ap:function ap(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aq:function aq(a){this.$ti=a},
B:function B(){},
ad:function ad(a){this.a=a},
dw(){throw A.a(A.H("Cannot modify unmodifiable Map"))},
dd(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fi(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
j(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aV(a)
return t},
b8(a){var t,s=$.cF
if(s==null)s=$.cF=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
dK(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.c(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bE(a){return A.dI(a)},
dI(a){var t,s,r,q
if(a instanceof A.k)return A.v(A.O(a),null)
t=J.N(a)
if(t===B.ab||t===B.ae||u.C.b(a)){s=B.p(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.O(a),null)},
dL(a){if(typeof a=="number"||A.ch(a))return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Q)return a.j(0)
return"Instance of '"+A.bE(a)+"'"},
T(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.q(t,b)
r.b=""
if(c!=null&&c.a!==0)c.B(0,new A.bD(r,s,t))
return J.dl(a,new A.b0(B.ag,0,t,s,0))},
dJ(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dH(a,b,c)},
dH(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.b3(b,!0,u.z),g=h.length,f=a.$R
if(g<f)return A.T(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.N(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.T(a,h,c)
if(g===f)return p.apply(a,h)
return A.T(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.T(a,h,c)
o=f+r.length
if(g>o)return A.T(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.b3(h,!0,u.z)
B.a.q(h,n)}return p.apply(a,h)}else{if(g>f)return A.T(a,h,c)
if(h===b)h=A.b3(h,!0,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.bi)(m),++l){k=r[A.a3(m[l])]
if(B.r===k)return A.T(a,h,c)
B.a.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.bi)(m),++l){i=A.a3(m[l])
if(c.U(i)){++j
B.a.l(h,c.h(0,i))}else{k=r[i]
if(B.r===k)return A.T(a,h,c)
B.a.l(h,k)}}if(j!==c.a)return A.T(a,h,c)}return p.apply(a,h)}},
c(a,b){if(a==null)J.c6(a)
throw A.a(A.bh(a,b))},
bh(a,b){var t,s="index"
if(!A.d1(b))return new A.a5(!0,b,s,null)
t=J.c6(a)
if(b<0||b>=t)return A.dx(b,t,a,s)
return A.dN(b,s)},
eH(a){return new A.a5(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.bK()
t=new Error()
t.dartException=a
s=A.f2
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
f2(){return J.aV(this.dartException)},
aj(a){throw A.a(a)},
bi(a){throw A.a(A.aY(a))},
f_(a){if(a==null||typeof a!="object")return J.c5(a)
else return A.b8(a)},
eM(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
dv(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ba().constructor.prototype):Object.create(new A.a6(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cw(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dr(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cw(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dr(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dp)}throw A.a("Error in functionType of tearoff")},
ds(a,b,c,d){var t=A.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cw(a,b,c,d){var t,s
if(c)return A.du(a,b,d)
t=b.length
s=A.ds(t,d,a,b)
return s},
dt(a,b,c,d){var t=A.cv,s=A.dq
switch(b?-1:a){case 0:throw A.a(new A.bI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
du(a,b,c){var t,s
if($.ct==null)$.ct=A.cs("interceptor")
if($.cu==null)$.cu=A.cs("receiver")
t=b.length
s=A.dt(t,c,a,b)
return s},
cj(a){return A.dv(a)},
dp(a,b){return A.bV(v.typeUniverse,A.O(a.a),b)},
cv(a){return a.a},
dq(a){return a.b},
cs(a){var t,s,r,q=new A.a6("receiver","interceptor"),p=J.cC(Object.getOwnPropertyNames(q),u.O)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.dm("Field name "+a+" not found."))},
f0(a){throw A.a(new A.bN(a))},
eO(a){return v.getIsolateTag(a)},
dE(a,b,c){var t=new A.a0(a,b,c.k("a0<0>"))
t.c=a.e
return t},
eX(a){var t,s,r,q,p,o=A.a3($.d7.$1(a)),n=$.bZ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c2[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.ef($.d4.$2(a,o))
if(r!=null){n=$.bZ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c2[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c4(t)
$.bZ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c2[o]=t
return t}if(q==="-"){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.da(a,t)
if(q==="*")throw A.a(A.cM(o))
if(v.leafTags[o]===true){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.da(a,t)},
da(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4(a){return J.cn(a,!1,null,!!a.$iaa)},
eZ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c4(t)
else return J.cn(t,c,null,null)},
eT(){if(!0===$.cl)return
$.cl=!0
A.eU()},
eU(){var t,s,r,q,p,o,n,m
$.bZ=Object.create(null)
$.c2=Object.create(null)
A.eS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.db.$1(p)
if(o!=null){n=A.eZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eS(){var t,s,r,q,p,o,n=B.z()
n=A.ai(B.A,A.ai(B.B,A.ai(B.q,A.ai(B.q,A.ai(B.C,A.ai(B.D,A.ai(B.E(B.p),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d7=new A.c_(q)
$.d4=new A.c0(p)
$.db=new A.c1(o)},
ai(a,b){return a(b)||b},
eI(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
an:function an(a,b){this.a=a
this.$ti=b},
am:function am(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function Q(){},
aX:function aX(){},
bb:function bb(){},
ba:function ba(){},
a6:function a6(a,b){this.a=a
this.b=b},
bN:function bN(a){this.a=a},
bI:function bI(a){this.a=a},
bT:function bT(){},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bt:function bt(a){this.a=a},
bu:function bu(a,b){this.a=a
this.b=b
this.c=null},
bv:function bv(a,b){this.a=a
this.$ti=b},
a0:function a0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
bY(a){return a},
bX(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.bh(b,a))},
b6:function b6(){},
ac:function ac(){},
ay:function ay(){},
az:function az(){},
b4:function b4(){},
b5:function b5(){},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
cH(a,b){var t=b.c
return t==null?b.c=A.ce(a,b.y,!0):t},
cb(a,b){var t=b.c
return t==null?b.c=A.aN(a,"cx",[b.y]):t},
cI(a){var t=a.x
if(t===6||t===7||t===8)return A.cI(a.y)
return t===12||t===13},
dP(a){return a.at},
M(a){return A.bf(v.typeUniverse,a,!1)},
V(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.cV(a,s,!0)
case 7:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.ce(a,s,!0)
case 8:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.cU(a,s,!0)
case 9:r=b.z
q=A.aQ(a,r,c,a0)
if(q===r)return b
return A.aN(a,b.y,q)
case 10:p=b.y
o=A.V(a,p,c,a0)
n=b.z
m=A.aQ(a,n,c,a0)
if(o===p&&m===n)return b
return A.cc(a,o,m)
case 12:l=b.y
k=A.V(a,l,c,a0)
j=b.z
i=A.eD(a,j,c,a0)
if(k===l&&i===j)return b
return A.cT(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aQ(a,h,c,a0)
p=b.y
o=A.V(a,p,c,a0)
if(g===h&&o===p)return b
return A.cd(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.aW("Attempted to substitute unexpected RTI kind "+d))}},
aQ(a,b,c,d){var t,s,r,q,p=b.length,o=A.bW(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.V(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eE(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bW(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.V(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eD(a,b,c,d){var t,s=b.a,r=A.aQ(a,s,c,d),q=b.b,p=A.aQ(a,q,c,d),o=b.c,n=A.eE(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bd()
t.a=r
t.b=p
t.c=n
return t},
h(a,b){a[v.arrayRti]=b
return a},
d5(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eR(s)
t=a.$S()
return t}return null},
eV(a,b){var t
if(A.cI(b))if(a instanceof A.Q){t=A.d5(a)
if(t!=null)return t}return A.O(a)},
O(a){if(a instanceof A.k)return A.u(a)
if(Array.isArray(a))return A.ag(a)
return A.cg(J.N(a))},
ag(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
u(a){var t=a.$ti
return t!=null?t:A.cg(a)},
cg(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ep(a,t)},
ep(a,b){var t=a instanceof A.Q?a.__proto__.__proto__.constructor:b,s=A.ea(v.typeUniverse,t.name)
b.$ccache=s
return s},
eR(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bf(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eQ(a){return A.a4(A.u(a))},
eC(a){var t=a instanceof A.Q?A.d5(a):null
if(t!=null)return t
if(u.R.b(a))return J.dk(a).a
if(Array.isArray(a))return A.ag(a)
return A.O(a)},
a4(a){var t=a.w
return t==null?a.w=A.cY(a):t},
cY(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bU(a)
t=A.bf(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.cY(t):s},
dc(a){return A.a4(A.bf(v.typeUniverse,a,!1))},
eo(a){var t,s,r,q,p,o=this
if(o===u.K)return A.L(o,a,A.ev)
if(!A.P(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.L(o,a,A.ez)
t=o.x
if(t===7)return A.L(o,a,A.em)
if(t===1)return A.L(o,a,A.d2)
s=t===6?o.y:o
t=s.x
if(t===8)return A.L(o,a,A.er)
if(s===u.S)r=A.d1
else if(s===u.i||s===u.H)r=A.eu
else if(s===u.N)r=A.ex
else r=s===u.y?A.ch:null
if(r!=null)return A.L(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eW)){o.r="$i"+q
if(q==="d")return A.L(o,a,A.et)
return A.L(o,a,A.ey)}}else if(t===11){p=A.eI(s.y,s.z)
return A.L(o,a,p==null?A.d2:p)}return A.L(o,a,A.ek)},
L(a,b,c){a.b=c
return a.b(b)},
en(a){var t,s=this,r=A.ej
if(!A.P(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eg
else if(s===u.K)r=A.ee
else{t=A.aT(s)
if(t)r=A.el}s.a=r
return s.a(a)},
bg(a){var t,s=a.x
if(!A.P(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bg(a.y)))t=s===8&&A.bg(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ek(a){var t=this
if(a==null)return A.bg(t)
return A.l(v.typeUniverse,A.eV(a,t),null,t,null)},
em(a){if(a==null)return!0
return this.y.b(a)},
ey(a){var t,s=this
if(a==null)return A.bg(s)
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.N(a)[t]},
et(a){var t,s=this
if(a==null)return A.bg(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.N(a)[t]},
ej(a){var t,s=this
if(a==null){t=A.aT(s)
if(t)return a}else if(s.b(a))return a
A.cZ(a,s)},
el(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cZ(a,t)},
cZ(a,b){throw A.a(A.e_(A.cN(a,A.v(b,null))))},
cN(a,b){return A.a7(a)+": type '"+A.v(A.eC(a),null)+"' is not a subtype of type '"+b+"'"},
e_(a){return new A.be("TypeError: "+a)},
r(a,b){return new A.be("TypeError: "+A.cN(a,b))},
er(a){var t=this
return t.y.b(a)||A.cb(v.typeUniverse,t).b(a)},
ev(a){return a!=null},
ee(a){if(a!=null)return a
throw A.a(A.r(a,"Object"))},
ez(a){return!0},
eg(a){return a},
d2(a){return!1},
ch(a){return!0===a||!1===a},
f9(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.r(a,"bool"))},
fb(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool"))},
fa(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool?"))},
cf(a){if(typeof a=="number")return a
throw A.a(A.r(a,"double"))},
fd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double"))},
fc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double?"))},
d1(a){return typeof a=="number"&&Math.floor(a)===a},
ah(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.r(a,"int"))},
ff(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int"))},
fe(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int?"))},
eu(a){return typeof a=="number"},
ec(a){if(typeof a=="number")return a
throw A.a(A.r(a,"num"))},
fg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num"))},
ed(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num?"))},
ex(a){return typeof a=="string"},
a3(a){if(typeof a=="string")return a
throw A.a(A.r(a,"String"))},
fh(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String"))},
ef(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String?"))},
d3(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
eB(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d3(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d_(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.h([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=u.O,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.c(a4,k)
n=B.ac.u(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.v(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.v(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.v(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.v(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.v(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
v(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.v(a.y,b)
return t}if(m===7){s=a.y
t=A.v(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.v(a.y,b)+">"
if(m===9){q=A.eF(a.y)
p=a.z
return p.length>0?q+("<"+A.d3(p,b)+">"):q}if(m===11)return A.eB(a,b)
if(m===12)return A.d_(a,b,null)
if(m===13)return A.d_(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.c(b,o)
return b[o]}return"?"},
eF(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eb(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ea(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bf(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aO(a,5,"#")
r=A.bW(t)
for(q=0;q<t;++q)r[q]=s
p=A.aN(a,b,r)
o[b]=p
return p}else return n},
e8(a,b){return A.cW(a.tR,b)},
e7(a,b){return A.cW(a.eT,b)},
bf(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cR(A.cP(a,null,b,c))
s.set(b,t)
return t},
bV(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cR(A.cP(a,b,c,!0))
r.set(c,s)
return s},
e9(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cc(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
K(a,b){b.a=A.en
b.b=A.eo
return b},
aO(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.D(null,null)
t.x=b
t.at=c
s=A.K(a,t)
a.eC.set(c,s)
return s},
cV(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e4(a,b,s,c)
a.eC.set(s,t)
return t},
e4(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.P(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.D(null,null)
r.x=6
r.y=b
r.at=c
return A.K(a,r)},
ce(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e3(a,b,s,c)
a.eC.set(s,t)
return t},
e3(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.P(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aT(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aT(r.y))return r
else return A.cH(a,b)}}q=new A.D(null,null)
q.x=7
q.y=b
q.at=c
return A.K(a,q)},
cU(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e1(a,b,s,c)
a.eC.set(s,t)
return t},
e1(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.P(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aN(a,"cx",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.D(null,null)
r.x=8
r.y=b
r.at=c
return A.K(a,r)},
e5(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=14
t.y=b
t.at=r
s=A.K(a,t)
a.eC.set(r,s)
return s},
aM(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e0(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aN(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.D(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
cc(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.D(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.K(a,p)
a.eC.set(r,o)
return o},
e6(a,b,c){var t,s,r="+"+(b+"("+A.aM(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.K(a,t)
a.eC.set(r,s)
return s},
cT(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aM(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aM(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e0(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.D(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.K(a,q)
a.eC.set(s,p)
return p},
cd(a,b,c,d){var t,s=b.at+("<"+A.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e2(a,b,c,s,d)
a.eC.set(s,t)
return t},
e2(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bW(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.V(a,b,s,0)
n=A.aQ(a,c,s,0)
return A.cd(a,o,n,c!==n)}}m=new A.D(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.K(a,m)},
cP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cR(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dV(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cQ(a,s,m,l,!1)
else if(r===46)s=A.cQ(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.U(a.u,a.e,l.pop()))
break
case 94:l.push(A.e5(a.u,l.pop()))
break
case 35:l.push(A.aO(a.u,5,"#"))
break
case 64:l.push(A.aO(a.u,2,"@"))
break
case 126:l.push(A.aO(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dX(a,l)
break
case 38:A.dW(a,l)
break
case 42:q=a.u
l.push(A.cV(q,A.U(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.ce(q,A.U(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cU(q,A.U(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dU(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cS(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.dZ(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.U(a.u,a.e,n)},
dV(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cQ(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eb(t,p.y)[q]
if(o==null)A.aj('No "'+q+'" in "'+A.dP(p)+'"')
d.push(A.bV(t,p,o))}else d.push(q)
return n},
dX(a,b){var t,s=a.u,r=A.cO(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aN(s,q,r))
else{t=A.U(s,a.e,q)
switch(t.x){case 12:b.push(A.cd(s,t,r,a.n))
break
default:b.push(A.cc(s,t,r))
break}}},
dU(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.cO(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.U(n,a.e,m)
p=new A.bd()
p.a=r
p.b=t
p.c=s
b.push(A.cT(n,q,p))
return
case-4:b.push(A.e6(n,b.pop(),r))
return
default:throw A.a(A.aW("Unexpected state under `()`: "+A.j(m)))}},
dW(a,b){var t=b.pop()
if(0===t){b.push(A.aO(a.u,1,"0&"))
return}if(1===t){b.push(A.aO(a.u,4,"1&"))
return}throw A.a(A.aW("Unexpected extended operation "+A.j(t)))},
cO(a,b){var t=b.splice(a.p)
A.cS(a.u,a.e,t)
a.p=b.pop()
return t},
U(a,b,c){if(typeof c=="string")return A.aN(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dY(a,b,c)}else return c},
cS(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.U(a,b,c[t])},
dZ(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.U(a,b,c[t])},
dY(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.aW("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.aW("Bad index "+c+" for "+b.j(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.P(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.P(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.l(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.l(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.l(a,b.y,c,d,e)
if(s===6)return A.l(a,b.y,c,d,e)
return s!==7}if(s===6)return A.l(a,b.y,c,d,e)
if(q===6){t=A.cH(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cb(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cb(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
return t||A.l(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.I)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.d0(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d0(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.es(a,b,c,d,e)}if(p&&q===11)return A.ew(a,b,c,d,e)
return!1},
d0(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.l(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.l(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.l(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.l(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.l(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
es(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bV(a,b,s[p])
return A.cX(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cX(a,o,null,c,n,e)},
cX(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
ew(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aT(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.P(a))if(s!==7)if(!(s===6&&A.aT(a.y)))t=s===8&&A.aT(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eW(a){var t
if(!A.P(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
P(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.O},
cW(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bW(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bd:function bd(){this.c=this.b=this.a=null},
bU:function bU(a){this.a=a},
bP:function bP(){},
be:function be(a){this.a=a},
dF(a,b,c){return b.k("@<0>").M(c).k("cD<1,2>").a(A.eM(a,new A.Z(b.k("@<0>").M(c).k("Z<1,2>"))))},
bx(a){var t,s={}
if(A.cm(a))return"{...}"
t=new A.aG("")
try{B.a.l($.A,a)
t.a+="{"
s.a=!0
a.B(0,new A.by(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.c($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
w:function w(){},
ax:function ax(){},
bw:function bw(a){this.a=a},
by:function by(a,b){this.a=a
this.b=b},
aP:function aP(){},
ab:function ab(){},
aH:function aH(){},
af:function af(){},
d9(a){var t=A.dK(a,null)
if(t!=null)return t
throw A.a(new A.bq(a))},
ca(a,b,c,d){var t,s=c?J.dB(a,d):J.dA(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
b3(a,b,c){var t=A.dG(a,c)
return t},
dG(a,b){var t,s
if(Array.isArray(a))return A.h(a.slice(0),b.k("f<0>"))
t=A.h([],b.k("f<0>"))
for(s=J.ak(a);s.n();)B.a.l(t,s.gt())
return t},
cK(a,b,c){var t=J.ak(b)
if(!t.n())return a
if(c.length===0){do a+=A.j(t.gt())
while(t.n())}else{a+=A.j(t.gt())
for(;t.n();)a=a+c+A.j(t.gt())}return a},
cE(a,b){return new A.bz(a,b.gan(),b.gap(),b.gao())},
a7(a){if(typeof a=="number"||A.ch(a)||a==null)return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dL(a)},
aW(a){return new A.bl(a)},
dm(a){return new A.a5(!1,null,null,a)},
dM(a){var t=null
return new A.aF(t,t,!1,t,t,a)},
dN(a,b){return new A.aF(null,null,!0,a,b,"Value not in range")},
cG(a,b,c,d,e){return new A.aF(b,c,!0,a,d,"Invalid value")},
dx(a,b,c,d){return new A.br(b,!0,a,d,"Index out of range")},
H(a){return new A.bM(a)},
cM(a){return new A.bL(a)},
aY(a){return new A.bm(a)},
dz(a,b,c){var t,s
if(A.cm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.h([],u.s)
B.a.l($.A,a)
try{A.eA(a,t)}finally{if(0>=$.A.length)return A.c($.A,-1)
$.A.pop()}s=A.cK(b,u.V.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cz(a,b,c){var t,s
if(A.cm(a))return b+"..."+c
t=new A.aG(b)
B.a.l($.A,a)
try{s=t
s.a=A.cK(s.a,a,", ")}finally{if(0>=$.A.length)return A.c($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eA(a,b){var t,s,r,q,p,o,n,m=a.gG(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=A.j(m.gt())
B.a.l(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return A.c(b,-1)
s=b.pop()
if(0>=b.length)return A.c(b,-1)
r=b.pop()}else{q=m.gt();++k
if(!m.n()){if(k<=4){B.a.l(b,A.j(q))
return}s=A.j(q)
if(0>=b.length)return A.c(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.n();q=p,p=o){o=m.gt();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.c(b,-1)
l-=b.pop().length+2;--k}B.a.l(b,"...")
return}}r=A.j(q)
s=A.j(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.l(b,n)
B.a.l(b,r)
B.a.l(b,s)},
bA:function bA(a,b){this.a=a
this.b=b},
bO:function bO(){},
bo:function bo(){},
bl:function bl(a){this.a=a},
bK:function bK(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
br:function br(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a){this.a=a},
bL:function bL(a){this.a=a},
bJ:function bJ(a){this.a=a},
bm:function bm(a){this.a=a},
bQ:function bQ(a){this.a=a},
bq:function bq(a){this.a=a},
e:function e(){},
aD:function aD(){},
k:function k(){},
aG:function aG(a){this.a=a},
bn:function bn(){},
bR:function bR(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
C:function C(){},
a2:function a2(){},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
F(a,b,c){return new A.bc(a,b,c)},
d8(a,b,c){var t,s,r,q
for(t=$.di(),s=0;s<13;++s){r=t[s]
q=r.b
if(q==null||a<q){q=r.c
q=q==null||b<q}else q=!1
if(q)return new A.q(r.a,c,a)}throw A.a(new A.bQ("No tile type found for elevation: "+A.j(a)+", moisture: "+A.j(b)+". Fix the rules."))},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
G(a,b){return new A.aB(a,b)},
eP(a,b,c){var t,s,r,q=$.dh().h(0,a)
if(q!=null)for(t=q.length,s=0;s<q.length;q.length===t||(0,A.bi)(q),++s){r=q[s]
if(B.c.C()<r.b)return new A.aA(r.a,b,c)}return null},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b){this.c=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
eY(){self.jsregionworker=A.eG(new A.c3(),u.r)},
c3:function c3(){},
bF:function bF(a){this.a=a},
bG:function bG(){},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b:function b(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X(a,b){return new A.W(a*2-2*b,a+b)},
W:function W(a,b){this.a=a
this.b=b},
bB:function bB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
ar(a,b){var t=b.u(0,$.dg().L(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.p(s,r),p=q.u(0,$.cq().L(0,s+r)),o=t.I(0,q)
return new A.bp(a,q,b.I(0,p),o)},
o(a,b){return new A.p(a,b)},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
p:function p(a,b){this.a=a
this.b=b},
aE(a){var t,s,r,q,p=u.S,o=A.ca(256,0,!1,p),n=A.ca(256,0,!1,p)
for(t=0;t<256;++t)B.a.i(n,t,t)
s=A.d9("6364136223846793005")
r=A.d9("1442695040888963407")
a=B.d.Y(B.d.Y(B.d.Y(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.d.ab(a+31,t+1)
if(!(q<256))return A.c(n,q)
B.a.i(o,t,n[q])
n[q]=n[t]}return new A.bC(o)},
bC:function bC(a){this.a=a},
f1(a){return A.aj(new A.b2("Field '"+a+"' has been assigned during initialization."))},
aU(){return A.aj(A.dD(""))},
ei(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eh,a)
t[$.cp()]=a
a.$dart_jsFunction=t
return t},
eh(a,b){u.j.a(b)
u.Z.a(a)
return A.dJ(a,b,null)},
eG(a,b){if(typeof a=="function")return a
else return b.a(A.ei(a))},
dn(a,b){var t,s,r
u.X.a(a)
if(B.c.a9(100)<95){t=A.cr(a,b)
s=A.aR(a,b+2,B.W,B.K,B.a7,3.5*(B.c.C()+0.5),B.h,1.25)
if(0>=t.length)return A.c(t,0)
r=t[0]
if(0>=s.length)return A.c(s,0)
J.bk(r,s[0])
if(1>=t.length)return A.c(t,1)
r=t[1]
if(1>=s.length)return A.c(s,1)
J.bk(r,s[1])
return t}else return A.cr(a,b)},
cr(a,b){return A.aR(a,b+1.25,B.a1,B.a_,B.Y,2*(B.c.C()+0.5),B.h,0.3)},
dO(a,b){var t,s
u.X.a(a)
t=B.c.C()/2+0.25
s=B.c.C()
return A.aR(a,b+1,B.H,B.a8,B.a6,0.8*t,A.X(s/10,B.c.C()/10),t)},
dT(a,b){var t,s,r
u.X.a(a)
if(B.c.a9(100)<95){t=A.cJ(a,b)
s=B.c.C()
r=A.aR(a,b+2,B.T,B.aa,B.a3,3.5*(B.c.C()+0.5),B.h,s/5+1)
if(0>=t.length)return A.c(t,0)
s=t[0]
if(0>=r.length)return A.c(r,0)
J.bk(s,r[0])
if(1>=t.length)return A.c(t,1)
s=t[1]
if(1>=r.length)return A.c(r,1)
J.bk(s,r[1])
return t}else return A.cJ(a,b)},
cJ(a,b){return A.aR(a,b+1.25,B.O,B.L,B.G,2*(B.c.C()+0.5),B.h,0.25)},
aR(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.e
a8=B.e
a9=B.e}else{a7=A.co(a7,B.e,t)
a8=A.co(a8,B.e,t)
a9=A.co(a9,B.e,t)}}s=A.X(a5.a+a6,a5.b+a6).u(0,b1)
r=s.u(0,A.X(b0,b0))
q=s.u(0,A.X(0,b2))
p=r.u(0,A.X(0,b2))
o=s.u(0,A.X(b2,0))
n=r.u(0,A.X(b2,0))
m=p.u(0,A.X(b2,0))
l=s.a
k=s.b
j=r.a
i=r.b
h=q.a
g=q.b
f=p.a
e=p.b
d=m.a
c=m.b
b=n.a
a=n.b
a0=o.a
a1=o.b
a2=A.h([l,k,j,i,h,g,j,i,h,g,f,e,j,i,f,e,d,c,j,i,d,c,b,a,j,i,b,a,a0,a1,j,i,a0,a1,l,k],u.n)
a3=A.ca(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.i(a3,a4,a8.gZ())
B.a.i(a3,a4+6,a7.gZ())
B.a.i(a3,a4+12,a9.gZ())}return[a2,a3]},
co(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.b(B.b.J((t+(b.a/255-t)*c)*255),B.b.J((s+(b.b/255-s)*c)*255),B.b.J((r+(b.c/255-r)*c)*255),B.b.J((q+(b.d/255-q)*c)*255))}},J={
cn(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cl==null){A.eT()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.a(A.cM("Return interceptor for "+A.j(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bS
if(p==null)p=$.bS=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eX(a)
if(q!=null)return q
if(typeof a=="function")return B.ad
t=Object.getPrototypeOf(a)
if(t==null)return B.v
if(t===Object.prototype)return B.v
if(typeof r=="function"){p=$.bS
if(p==null)p=$.bS=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.o,enumerable:false,writable:true,configurable:true})
return B.o}return B.o},
dA(a,b){if(a>4294967295)throw A.a(A.cG(a,0,4294967295,"length",null))
return J.cB(new Array(a),b)},
cA(a,b){if(a<0||a>4294967295)throw A.a(A.cG(a,0,4294967295,"length",null))
return J.cB(new Array(a),b)},
dB(a,b){return A.h(new Array(a),b.k("f<0>"))},
cB(a,b){return J.cC(A.h(a,b.k("f<0>")),b)},
cC(a,b){a.fixed$length=Array
return a},
dC(a,b){var t=u.U
return J.dj(t.a(a),t.a(b))},
N(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.b1.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.b_.prototype
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.k)return a
return J.ck(a)},
aS(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.k)return a
return J.ck(a)},
d6(a){if(a==null)return a
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.k)return a
return J.ck(a)},
eN(a){if(typeof a=="number")return J.a9.prototype
if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ae.prototype
return a},
bj(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).E(a,b)},
bk(a,b){return J.d6(a).q(a,b)},
dj(a,b){return J.eN(a).T(a,b)},
c5(a){return J.N(a).gm(a)},
ak(a){return J.d6(a).gG(a)},
c6(a){return J.aS(a).gp(a)},
dk(a){return J.N(a).gD(a)},
dl(a,b){return J.N(a).aa(a,b)},
aV(a){return J.N(a).j(a)},
aZ:function aZ(){},
b_:function b_(){},
av:function av(){},
n:function n(){},
a_:function a_(){},
b7:function b7(){},
ae:function ae(){},
R:function R(){},
f:function f(a){this.$ti=a},
bs:function bs(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a9:function a9(){},
au:function au(){},
b1:function b1(){},
Y:function Y(){}},B={}
var w=[A,J,B]
var $={}
A.c9.prototype={}
J.aZ.prototype={
E(a,b){return a===b},
gm(a){return A.b8(a)},
j(a){return"Instance of '"+A.bE(a)+"'"},
aa(a,b){throw A.a(A.cE(a,u.o.a(b)))},
gD(a){return A.a4(A.cg(this))}}
J.b_.prototype={
j(a){return String(a)},
gm(a){return a?519018:218159},
gD(a){return A.a4(u.y)},
$iy:1,
$ici:1}
J.av.prototype={
E(a,b){return null==b},
j(a){return"null"},
gm(a){return 0},
$iy:1}
J.n.prototype={}
J.a_.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.b7.prototype={}
J.ae.prototype={}
J.R.prototype={
j(a){var t=a[$.cp()]
if(t==null)return this.ad(a)
return"JavaScript function for "+J.aV(t)},
$ia8:1}
J.f.prototype={
l(a,b){A.ag(a).c.a(b)
if(!!a.fixed$length)A.aj(A.H("add"))
a.push(b)},
q(a,b){var t
A.ag(a).k("e<1>").a(b)
if(!!a.fixed$length)A.aj(A.H("addAll"))
if(Array.isArray(b)){this.ae(a,b)
return}for(t=J.ak(b);t.n();)a.push(t.gt())},
ae(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.aY(a))
for(s=0;s<t;++s)a.push(b[s])},
j(a){return A.cz(a,"[","]")},
gG(a){return new J.al(a,a.length,A.ag(a).k("al<1>"))},
gm(a){return A.b8(a)},
gp(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.bh(a,b))
return a[b]},
i(a,b,c){A.ag(a).c.a(c)
if(!!a.immutable$list)A.aj(A.H("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.bh(a,b))
a[b]=c},
$ie:1,
$id:1}
J.bs.prototype={}
J.al.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bi(r)
throw A.a(r)}t=s.c
if(t>=q){s.sa2(null)
return!1}s.sa2(r[t]);++s.c
return!0},
sa2(a){this.d=this.$ti.k("1?").a(a)},
$iI:1}
J.a9.prototype={
T(a,b){var t
A.ec(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gW(b)
if(this.gW(a)===t)return 0
if(this.gW(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gW(a){return a===0?1/a<0:a<0},
K(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.H(""+a+".toInt()"))},
J(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.H(""+a+".round()"))},
aq(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
ab(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
S(a,b){return(a|0)===a?a/b|0:this.ai(a,b)},
ai(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.a(A.H("Result of truncating division is "+A.j(t)+": "+A.j(a)+" ~/ "+b))},
ac(a,b){if(b<0)throw A.a(A.eH(b))
return b>31?0:a<<b>>>0},
gD(a){return A.a4(u.H)},
$it:1,
$ii:1,
$iz:1}
J.au.prototype={
Y(a,b){var t=this.ac(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gD(a){return A.a4(u.S)},
$iy:1,
$im:1}
J.b1.prototype={
gD(a){return A.a4(u.i)},
$iy:1}
J.Y.prototype={
u(a,b){return a+b},
T(a,b){var t
A.a3(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
j(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gD(a){return A.a4(u.N)},
gp(a){return a.length},
h(a,b){if(b>=a.length)throw A.a(A.bh(a,b))
return a[b]},
$iy:1,
$it:1,
$iE:1}
A.b2.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.ap.prototype={}
A.aw.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=J.aS(r),p=q.gp(r)
if(s.b!==p)throw A.a(A.aY(r))
t=s.c
if(t>=p){s.sH(null)
return!1}s.sH(q.h(r,t));++s.c
return!0},
sH(a){this.d=this.$ti.k("1?").a(a)},
$iI:1}
A.as.prototype={
gG(a){var t=this.$ti
return new A.at(J.ak(this.a),this.b,B.y,t.k("@<1>").M(t.z[1]).k("at<1,2>"))}}
A.at.prototype={
gt(){var t=this.d
return t==null?this.$ti.z[1].a(t):t},
n(){var t,s,r=this
if(r.c==null)return!1
for(t=r.a,s=r.b;!r.c.n();){r.sH(null)
if(t.n()){r.sa3(null)
r.sa3(J.ak(s.$1(t.gt())))}else return!1}r.sH(r.c.gt())
return!0},
sa3(a){this.c=this.$ti.k("I<2>?").a(a)},
sH(a){this.d=this.$ti.k("2?").a(a)},
$iI:1}
A.aq.prototype={
n(){return!1},
gt(){throw A.a(A.dy())},
$iI:1}
A.B.prototype={
sp(a,b){throw A.a(A.H("Cannot change the length of a fixed-length list"))},
l(a,b){A.O(a).k("B.E").a(b)
throw A.a(A.H("Cannot add to a fixed-length list"))},
q(a,b){A.O(a).k("e<B.E>").a(b)
throw A.a(A.H("Cannot add to a fixed-length list"))}}
A.ad.prototype={
gm(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.c5(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+A.j(this.a)+'")'},
E(a,b){if(b==null)return!1
return b instanceof A.ad&&this.a==b.a},
$ia1:1}
A.an.prototype={}
A.am.prototype={
j(a){return A.bx(this)},
q(a,b){A.u(this).k("x<1,2>").a(b)
A.dw()},
$ix:1}
A.ao.prototype={
gp(a){return this.a},
U(a){return!1},
h(a,b){if(!this.U(b))return null
return this.b[A.a3(b)]},
B(a,b){var t,s,r,q,p,o=this.$ti
o.k("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.a3(t[q])
b.$2(p,o.a(r[p]))}}}
A.b0.prototype={
gan(){var t=this.a
return t},
gap(){var t,s,r,q,p=this
if(p.c===1)return B.t
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.t
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.c(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gao(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.u
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.u
p=new A.Z(u.M)
for(o=0;o<s;++o){if(!(o<t.length))return A.c(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.c(r,m)
p.i(0,new A.ad(n),r[m])}return new A.an(p,u.a)},
$icy:1}
A.bD.prototype={
$2(a,b){var t
A.a3(a)
t=this.a
t.b=t.b+"$"+a
B.a.l(this.b,a)
B.a.l(this.c,b);++t.a},
$S:1}
A.Q.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dd(s==null?"unknown":s)+"'"},
$ia8:1,
gar(){return this},
$C:"$1",
$R:1,
$D:null}
A.aX.prototype={$C:"$2",$R:2}
A.bb.prototype={}
A.ba.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dd(t)+"'"}}
A.a6.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.f_(this.a)^A.b8(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bE(this.a)+"'")}}
A.bN.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bI.prototype={
j(a){return"RuntimeError: "+this.a}}
A.bT.prototype={}
A.Z.prototype={
gp(a){return this.a},
U(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
q(a,b){A.u(this).k("x<1,2>").a(b).B(0,new A.bt(this))},
h(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.al(b)},
al(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a6(a)]
s=this.a7(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r=this,q=A.u(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.a1(t==null?r.b=r.P():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a1(s==null?r.c=r.P():s,b,c)}else r.am(b,c)},
am(a,b){var t,s,r,q,p=this,o=A.u(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.P()
s=p.a6(a)
r=t[s]
if(r==null)t[s]=[p.R(a,b)]
else{q=p.a7(r,a)
if(q>=0)r[q].b=b
else r.push(p.R(a,b))}},
B(a,b){var t,s,r=this
A.u(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.aY(r))
t=t.c}},
a1(a,b,c){var t,s=A.u(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.R(b,c)
else t.b=c},
R(a,b){var t=this,s=A.u(t),r=new A.bu(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a6(a){return J.c5(a)&0x3fffffff},
a7(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bj(a[s].a,b))return s
return-1},
j(a){return A.bx(this)},
P(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icD:1}
A.bt.prototype={
$2(a,b){var t=this.a,s=A.u(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.u(this.a).k("~(1,2)")}}
A.bu.prototype={}
A.bv.prototype={
gp(a){return this.a.a},
gG(a){var t=this.a,s=new A.a0(t,t.r,this.$ti.k("a0<1>"))
s.c=t.e
return s}}
A.a0.prototype={
gt(){return this.d},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.aY(r))
t=s.c
if(t==null){s.sa0(null)
return!1}else{s.sa0(t.a)
s.c=t.c
return!0}},
sa0(a){this.d=this.$ti.k("1?").a(a)},
$iI:1}
A.c_.prototype={
$1(a){return this.a(a)},
$S:2}
A.c0.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.c1.prototype={
$1(a){return this.a(A.a3(a))},
$S:4}
A.b6.prototype={}
A.ac.prototype={
gp(a){return a.length},
$iaa:1}
A.ay.prototype={
h(a,b){A.bX(b,a,a.length)
return a[b]},
i(a,b,c){A.cf(c)
A.bX(b,a,a.length)
a[b]=c},
$ie:1,
$id:1}
A.az.prototype={
i(a,b,c){A.ah(c)
A.bX(b,a,a.length)
a[b]=c},
$ie:1,
$id:1}
A.b4.prototype={
gD(a){return B.ah},
$iy:1,
$ic7:1}
A.b5.prototype={
gD(a){return B.ai},
h(a,b){A.bX(b,a,a.length)
return a[b]},
$iy:1,
$ic8:1}
A.aI.prototype={}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.D.prototype={
k(a){return A.bV(v.typeUniverse,this,a)},
M(a){return A.e9(v.typeUniverse,this,a)}}
A.bd.prototype={}
A.bU.prototype={
j(a){return A.v(this.a,null)}}
A.bP.prototype={
j(a){return this.a}}
A.be.prototype={}
A.w.prototype={
gG(a){return new A.aw(a,this.gp(a),A.O(a).k("aw<w.E>"))},
l(a,b){var t
A.O(a).k("w.E").a(b)
t=this.gp(a)
this.sp(a,t+1)
this.i(a,t,b)},
q(a,b){var t,s
A.O(a).k("e<w.E>").a(b)
t=this.gp(a)
for(s=J.ak(b);s.n();){this.l(a,s.gt());++t}},
j(a){return A.cz(a,"[","]")}}
A.ax.prototype={
B(a,b){var t,s,r,q=this,p=A.u(q)
p.k("~(1,2)").a(b)
for(t=A.dE(q,q.r,p.c),p=p.z[1];t.n();){s=t.d
r=q.h(0,s)
b.$2(s,r==null?p.a(r):r)}},
q(a,b){A.u(this).k("x<1,2>").a(b).B(0,new A.bw(this))},
gp(a){return this.a},
j(a){return A.bx(this)},
$ix:1}
A.bw.prototype={
$2(a,b){var t=this.a,s=A.u(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.u(this.a).k("~(1,2)")}}
A.by.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.j(a)
s.a=t+": "
s.a+=A.j(b)},
$S:5}
A.aP.prototype={
q(a,b){this.$ti.k("x<1,2>").a(b)
throw A.a(A.H("Cannot modify unmodifiable map"))}}
A.ab.prototype={
h(a,b){return this.a.h(0,b)},
q(a,b){this.a.q(0,this.$ti.k("x<1,2>").a(b))},
B(a,b){this.a.B(0,this.$ti.k("~(1,2)").a(b))},
gp(a){return this.a.a},
j(a){return A.bx(this.a)},
$ix:1}
A.aH.prototype={}
A.af.prototype={}
A.bA.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a7(b)
s.a=", "},
$S:6}
A.bO.prototype={
j(a){return this.a4()}}
A.bo.prototype={}
A.bl.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a7(t)
return"Assertion failed"}}
A.bK.prototype={}
A.a5.prototype={
gO(){return"Invalid argument"+(!this.a?"(s)":"")},
gN(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gO()+r+p
if(!t.a)return o
return o+t.gN()+": "+A.a7(t.gV())},
gV(){return this.b}}
A.aF.prototype={
gV(){return A.ed(this.b)},
gO(){return"RangeError"},
gN(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.j(r):""
else if(r==null)t=": Not greater than or equal to "+A.j(s)
else if(r>s)t=": Not in inclusive range "+A.j(s)+".."+A.j(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.j(s)
return t}}
A.br.prototype={
gV(){return A.ah(this.b)},
gO(){return"RangeError"},
gN(){if(A.ah(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bz.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aG("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a7(o)
k.a=", "}l.d.B(0,new A.bA(k,j))
n=A.a7(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bM.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bL.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bJ.prototype={
j(a){return"Bad state: "+this.a}}
A.bm.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a7(t)+"."}}
A.bQ.prototype={
j(a){return"Exception: "+this.a}}
A.bq.prototype={
j(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.e.prototype={
gp(a){var t,s=this.gG(this)
for(t=0;s.n();)++t
return t},
j(a){return A.dz(this,"(",")")}}
A.aD.prototype={
gm(a){return A.k.prototype.gm.call(this,this)},
j(a){return"null"}}
A.k.prototype={$ik:1,
E(a,b){return this===b},
gm(a){return A.b8(this)},
j(a){return"Instance of '"+A.bE(this)+"'"},
aa(a,b){throw A.a(A.cE(this,u.o.a(b)))},
gD(a){return A.eQ(this)},
toString(){return this.j(this)}}
A.aG.prototype={
gp(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bn.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.bR.prototype={
a9(a){if(a<=0||a>4294967296)throw A.a(A.dM("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
C(){return Math.random()}}
A.S.prototype={
j(a){return"Point("+A.j(this.a)+", "+A.j(this.b)+")"},
E(a,b){if(b==null)return!1
return b instanceof A.S&&this.a===b.a&&this.b===b.b},
gm(a){var t=B.b.gm(this.a),s=B.b.gm(this.b),r=A.cL(A.cL(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.C.prototype={
T(a,b){u.k.a(b)
if(this.X()>b.X())return-1
return 1},
$it:1}
A.a2.prototype={
X(){var t=this.b
return t.a+t.b+1},
a8(){return this.c<0}}
A.q.prototype={
a_(){var t=this.a
return A.aR(this.b,this.c,t.c,t.d,t.e,1,B.h,1)}}
A.bc.prototype={}
A.J.prototype={
a4(){return"TileType."+this.b}}
A.aA.prototype={
a_(){return this.a.c.$2(this.b,this.c)},
X(){var t=this.b
return t.a+t.b},
a8(){return this.c<0}}
A.aC.prototype={
a4(){return"NaturalItemType."+this.b}}
A.aB.prototype={}
A.c3.prototype={
$1(a){var t,s,r=new A.bB()
r.a=A.aE(2)
r.b=A.aE(3)
r.c=A.aE(4)
r.d=A.aE(5)
r.e=A.aE(6)
r.f=A.aE(7)
t=J.aS(a)
s=new A.bF(r).ak(new A.W(A.cf(t.h(a,0)),A.cf(t.h(a,1))),A.ah(t.h(a,2)),A.ah(t.h(a,3)),A.ah(t.h(a,4)),A.ah(t.h(a,5)))
t=s.a
return A.h([t.a,t.b,s.b,s.c,s.d,s.e,s.f],u.f)},
$S:7}
A.bF.prototype={
ak(a,b,c,d,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a.aj(b,c,d,a0),g=this.ag(b,c,d,a0,h[0],h[1]),f=this.af(b,c,d,a0,h[0],h[1]),e=A.b3(g,!0,u.k)
B.a.q(e,f)
if(!!e.immutable$list)A.aj(A.H("sort"))
A.dS(e,J.eq(),A.ag(e).c)
t=u.n
s=A.h([],t)
r=u.t
q=A.h([],r)
p=A.h([],t)
o=A.h([],r)
for(t=e.length,r=u.l,n=u.Y,m=u.j,l=0;l<e.length;e.length===t||(0,A.bi)(e),++l){k=e[l]
j=m.a(k.a_())
i=J.aS(j)
if(k.a8()){B.a.q(p,r.a(i.h(j,0)))
B.a.q(o,n.a(i.h(j,1)))}else{B.a.q(s,r.a(i.h(j,0)))
B.a.q(q,n.a(i.h(j,1)))}}return new A.bH(a,B.d.S(s.length+p.length,2),new Float32Array(A.bY(s)),new Int32Array(A.bY(q)),new Float32Array(A.bY(p)),new Int32Array(A.bY(o)))},
ag(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.h([],u.F)
for(t=u.X,s=e.length,r=f.length,q=u.q,p=0;p<a;++p){if(!(p<s))return A.c(e,p)
o=e[p]
if(!(p<r))return A.c(f,p)
n=f[p]
m=A.h([],q)
for(l=o.length,k=n.length,j=c+p,i=0;i<b;++i){if(!(i<l))return A.c(o,i)
h=o[i]
if(!(i<k))return A.c(n,i)
B.a.l(m,A.d8(h,n[i],new A.S(j,d+i,t)))}B.a.l(g,m)}t=u.B
return this.ah(A.b3(new A.as(g,u.u.a(new A.bG()),t),!0,t.k("e.E")))},
ah(a){var t,s,r
u.c.a(a)
t=A.h([],u.Q)
for(s=0;s<a.length;++s){r=a[s]
if(r.c>-5)B.a.l(t,r)}return t},
af(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.h([],u.W)
for(t=u.X,s=e.length,r=f.length,q=0;q<a;++q){if(!(q<s))return A.c(e,q)
p=e[q]
if(!(q<r))return A.c(f,q)
o=f[q]
for(n=c+q,m=p.length,l=o.length,k=0;k<b;++k){j=new A.S(n,d+k,t)
if(!(k<m))return A.c(p,k)
i=p[k]
if(!(k<l))return A.c(o,k)
h=A.eP(A.d8(i,o[k],j).a,j,p[k])
if(h!=null)B.a.l(g,h)}}return g}}
A.bG.prototype={
$1(a){return u.x.a(a)},
$S:8}
A.bH.prototype={}
A.b.prototype={
gZ(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.W.prototype={
u(a,b){return new A.W(this.a+b.a,this.b+b.b)},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.W&&b.a===this.a&&b.b===this.b},
gm(a){return B.b.gm(this.a)^B.b.gm(this.b)},
j(a){return""+B.b.K(this.a)+", "+B.b.K(this.b)}}
A.bB.prototype={
aj(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a5(a1,a2),a0=b.a5(a1,a2)
for(t=a.length,s=a0.length,r=0;r<a1;++r){if(!(r<t))return A.c(a,r)
q=a[r]
if(!(r<s))return A.c(a0,r)
p=a0[r]
for(o=a3+r,n=o*0.006,m=o*0.016,l=o*0.048,k=0;k<a2;++k){j=a4+k
i=b.a
i===$&&A.aU()
h=j*0.006
i=A.ar(i.a,new A.p(n,h)).F()
g=b.b
g===$&&A.aU()
f=j*0.016
g=A.ar(g.a,new A.p(m,f)).F()
e=b.c
e===$&&A.aU()
d=j*0.048
e=A.ar(e.a,new A.p(l,d)).F()
c=b.d
c===$&&A.aU()
h=A.ar(c.a,new A.p(n,h)).F()
c=b.e
c===$&&A.aU()
f=A.ar(c.a,new A.p(m,f)).F()
c=b.f
c===$&&A.aU()
d=A.ar(c.a,new A.p(l,d)).F()
B.a.i(q,k,B.b.aq((i+0.5*g+0.25*e-0.3)*15))
B.a.i(p,k,h+0.5*f+0.25*d)}}return A.h([a,a0],u.G)},
a5(a,b){var t,s,r,q,p=J.cA(a,u.v)
for(t=u.i,s=0;s<a;++s){r=J.cA(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.bp.prototype={
v(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.de()
if(!(a<8))return A.c(j,a)
t=j[a]
s=k.c.I(0,t).I(0,$.cq().L(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.u(0,t)
m=u.L.a(k.a)
n=m[m[B.b.K(n.a)&255]+B.b.K(n.b)&255]
l=$.df()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
F(){var t,s,r,q,p=this
p.v(0)
p.v(1)
t=p.d
s=t.a
t=t.b
r=s+t
if(r<=1){q=1-r
if(q>s||q>t)if(s>t)p.v(2)
else p.v(3)
else p.v(4)
p.v(5)}else{q=2-r
if(q<s||q<t)if(s>t)p.v(6)
else p.v(7)
else p.v(5)
p.v(4)}return p.e/47}}
A.p.prototype={
u(a,b){return new A.p(this.a+b.a,this.b+b.b)},
I(a,b){return new A.p(this.a-b.a,this.b-b.b)},
L(a,b){return new A.p(this.a*b,this.b*b)},
j(a){return A.j(this.a)+", "+A.j(this.b)}}
A.bC.prototype={};(function aliases(){var t=J.a_.prototype
t.ad=t.j})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eq","dC",9)
t(A,"eJ","dn",0)
t(A,"eK","dO",0)
t(A,"eL","dT",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.c9,J.aZ,J.al,A.bo,A.e,A.aw,A.at,A.aq,A.B,A.ad,A.ab,A.am,A.b0,A.Q,A.bT,A.ax,A.bu,A.a0,A.D,A.bd,A.bU,A.w,A.aP,A.bO,A.bQ,A.bq,A.aD,A.aG,A.bR,A.S,A.C,A.bc,A.aB,A.bF,A.bH,A.b,A.W,A.bB,A.bp,A.p,A.bC])
r(J.aZ,[J.b_,J.av,J.n,J.a9,J.Y])
r(J.n,[J.a_,J.f,A.b6,A.bn])
r(J.a_,[J.b7,J.ae,J.R])
s(J.bs,J.f)
r(J.a9,[J.au,J.b1])
r(A.bo,[A.b2,A.bN,A.bI,A.bP,A.bl,A.bK,A.a5,A.bz,A.bM,A.bL,A.bJ,A.bm])
r(A.e,[A.ap,A.as])
s(A.af,A.ab)
s(A.aH,A.af)
s(A.an,A.aH)
s(A.ao,A.am)
r(A.Q,[A.aX,A.bb,A.c_,A.c1,A.c3,A.bG])
r(A.aX,[A.bD,A.bt,A.c0,A.bw,A.by,A.bA])
r(A.bb,[A.ba,A.a6])
s(A.Z,A.ax)
s(A.bv,A.ap)
s(A.ac,A.b6)
r(A.ac,[A.aI,A.aK])
s(A.aJ,A.aI)
s(A.ay,A.aJ)
s(A.aL,A.aK)
s(A.az,A.aL)
s(A.b4,A.ay)
s(A.b5,A.az)
s(A.be,A.bP)
r(A.a5,[A.aF,A.br])
r(A.C,[A.a2,A.aA])
s(A.q,A.a2)
r(A.bO,[A.J,A.aC])
t(A.aI,A.w)
t(A.aJ,A.B)
t(A.aK,A.w)
t(A.aL,A.B)
t(A.af,A.aP)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",i:"double",z:"num",E:"String",ci:"bool",aD:"Null",d:"List"},mangledNames:{},types:["d<@>(S<i>,i)","~(E,@)","@(@)","@(@,E)","@(E)","~(k?,k?)","~(a1,@)","d<k>(@)","d<q>(d<q>)","m(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.e8(v.typeUniverse,JSON.parse('{"b7":"a_","ae":"a_","R":"a_","b_":{"ci":[],"y":[]},"av":{"y":[]},"f":{"d":["1"],"e":["1"]},"bs":{"f":["1"],"d":["1"],"e":["1"]},"al":{"I":["1"]},"a9":{"i":[],"z":[],"t":["z"]},"au":{"i":[],"m":[],"z":[],"t":["z"],"y":[]},"b1":{"i":[],"z":[],"t":["z"],"y":[]},"Y":{"E":[],"t":["E"],"y":[]},"ap":{"e":["1"]},"aw":{"I":["1"]},"as":{"e":["2"],"e.E":"2"},"at":{"I":["2"]},"aq":{"I":["1"]},"ad":{"a1":[]},"an":{"aH":["1","2"],"af":["1","2"],"ab":["1","2"],"aP":["1","2"],"x":["1","2"]},"am":{"x":["1","2"]},"ao":{"am":["1","2"],"x":["1","2"]},"b0":{"cy":[]},"Q":{"a8":[]},"aX":{"a8":[]},"bb":{"a8":[]},"ba":{"a8":[]},"a6":{"a8":[]},"Z":{"ax":["1","2"],"cD":["1","2"],"x":["1","2"]},"bv":{"e":["1"],"e.E":"1"},"a0":{"I":["1"]},"ac":{"aa":["1"]},"ay":{"w":["i"],"aa":["i"],"d":["i"],"e":["i"],"B":["i"]},"az":{"w":["m"],"aa":["m"],"d":["m"],"e":["m"],"B":["m"]},"b4":{"w":["i"],"c7":[],"aa":["i"],"d":["i"],"e":["i"],"B":["i"],"y":[],"w.E":"i","B.E":"i"},"b5":{"w":["m"],"c8":[],"aa":["m"],"d":["m"],"e":["m"],"B":["m"],"y":[],"w.E":"m","B.E":"m"},"ax":{"x":["1","2"]},"ab":{"x":["1","2"]},"aH":{"af":["1","2"],"ab":["1","2"],"aP":["1","2"],"x":["1","2"]},"i":{"z":[],"t":["z"]},"m":{"z":[],"t":["z"]},"d":{"e":["1"]},"z":{"t":["z"]},"E":{"t":["E"]},"C":{"t":["C"]},"a2":{"C":[],"t":["C"]},"q":{"a2":[],"C":[],"t":["C"]},"aA":{"C":[],"t":["C"]},"c8":{"d":["m"],"e":["m"]},"c7":{"d":["i"],"e":["i"]}}'))
A.e7(v.typeUniverse,JSON.parse('{"ap":1,"ac":1}'))
var u=(function rtii(){var t=A.M
return{U:t("t<@>"),a:t("an<a1,@>"),B:t("as<d<q>,q>"),Z:t("a8"),k:t("C"),o:t("cy"),u:t("e<q>(d<q>)"),l:t("e<i>"),V:t("e<@>"),Y:t("e<m>"),G:t("f<d<d<i>>>"),F:t("f<d<q>>"),W:t("f<aA>"),f:t("f<k>"),q:t("f<q>"),s:t("f<E>"),Q:t("f<a2>"),n:t("f<i>"),b:t("f<@>"),t:t("f<m>"),T:t("av"),g:t("R"),p:t("aa<@>"),M:t("Z<a1,@>"),r:t("d<k>(@)"),x:t("d<q>"),c:t("d<a2>"),v:t("d<i>"),j:t("d<@>"),L:t("d<m>"),P:t("aD"),K:t("k"),X:t("S<i>"),I:t("f8"),N:t("E"),h:t("a1"),R:t("y"),C:t("ae"),y:t("ci"),i:t("i"),z:t("@"),S:t("m"),A:t("0&*"),_:t("k*"),d:t("cx<aD>?"),O:t("k?"),H:t("z")}})();(function constants(){var t=hunkHelpers.makeConstList
B.ab=J.aZ.prototype
B.a=J.f.prototype
B.d=J.au.prototype
B.b=J.a9.prototype
B.ac=J.Y.prototype
B.ad=J.R.prototype
B.ae=J.n.prototype
B.v=J.b7.prototype
B.o=J.ae.prototype
B.y=new A.aq(A.M("aq<0&>"))
B.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.z=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.E=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.B=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.C=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.q=function(hooks) { return hooks; }

B.c=new A.bR()
B.r=new A.bT()
B.G=new A.b(255,101,46,4)
B.H=new A.b(255,107,129,124)
B.K=new A.b(255,10,152,44)
B.L=new A.b(255,119,53,5)
B.O=new A.b(255,126,56,5)
B.T=new A.b(255,14,145,45)
B.W=new A.b(255,15,169,52)
B.Y=new A.b(255,164,152,147)
B.a_=new A.b(255,183,173,167)
B.a1=new A.b(255,197,187,181)
B.e=new A.b(255,1,46,143)
B.a3=new A.b(255,6,101,28)
B.a6=new A.b(255,83,105,100)
B.a7=new A.b(255,8,133,38)
B.a8=new A.b(255,91,112,107)
B.aa=new A.b(255,9,122,36)
B.h=new A.W(0,0)
B.t=A.h(t([]),u.b)
B.af=A.h(t([]),A.M("f<a1>"))
B.u=new A.ao(0,{},B.af,A.M("ao<a1,@>"))
B.k=new A.aC(A.eJ(),"birch")
B.f=new A.aC(A.eK(),"rock")
B.l=new A.aC(A.eL(),"spruce")
B.ag=new A.ad("call")
B.U=new A.b(255,150,157,102)
B.Q=new A.b(255,138,145,92)
B.M=new A.b(255,121,128,80)
B.w=new A.J(B.U,B.Q,B.M,"lakeFloorVegetation")
B.J=new A.b(255,109,150,86)
B.a9=new A.b(255,92,129,72)
B.a5=new A.b(255,79,112,60)
B.m=new A.J(B.J,B.a9,B.a5,"grass")
B.Z=new A.b(255,173,162,115)
B.V=new A.b(255,159,148,103)
B.S=new A.b(255,148,138,95)
B.x=new A.J(B.Z,B.V,B.S,"lakeFloorBare")
B.R=new A.b(255,139,162,127)
B.N=new A.b(255,125,148,113)
B.I=new A.b(255,109,129,98)
B.i=new A.J(B.R,B.N,B.I,"bare")
B.a0=new A.b(255,194,178,128)
B.X=new A.b(255,161,146,100)
B.P=new A.b(255,138,124,82)
B.n=new A.J(B.a0,B.X,B.P,"sand")
B.F=new A.b(255,100,164,93)
B.a4=new A.b(255,75,140,76)
B.a2=new A.b(255,59,117,60)
B.j=new A.J(B.F,B.a4,B.a2,"taiga")
B.ah=A.dc("c7")
B.ai=A.dc("c8")})();(function staticFields(){$.bS=null
$.A=A.h([],u.f)
$.cF=null
$.cu=null
$.ct=null
$.d7=null
$.d4=null
$.db=null
$.bZ=null
$.c2=null
$.cl=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"f3","cp",()=>A.eO("_$dart_dartClosure"))
s($,"fk","di",()=>{var r=null
return A.h([A.F(B.x,0,-0.2),A.F(B.w,0,0.2),A.F(B.n,0,r),A.F(B.i,2,-0.2),A.F(B.n,2,0.35),A.F(B.m,2,r),A.F(B.i,4,-0.2),A.F(B.j,4,-0.1),A.F(B.m,4,0),A.F(B.j,4,r),A.F(B.i,10,-0.2),A.F(B.j,10,r),A.F(B.i,r,r)],A.M("f<bc>"))})
s($,"fj","dh",()=>{var r=A.M("f<aB>")
return A.dF([B.j,A.h([A.G(B.k,0.02),A.G(B.f,0.03),A.G(B.l,0.1)],r),B.m,A.h([A.G(B.f,0.02),A.G(B.l,0.02),A.G(B.k,0.04)],r),B.i,A.h([A.G(B.k,0.02),A.G(B.l,0.03),A.G(B.f,0.06)],r),B.n,A.h([A.G(B.f,0.1)],r),B.w,A.h([A.G(B.f,0.04)],r),B.x,A.h([A.G(B.f,0.06)],r)],A.M("J"),A.M("d<aB>"))})
s($,"f5","df",()=>A.h([A.o(5,2),A.o(2,5),A.o(-5,2),A.o(-2,5),A.o(5,-2),A.o(2,-5),A.o(-5,-2),A.o(-2,-5)],A.M("f<p>")))
s($,"f4","de",()=>A.h([A.o(1,0),A.o(0,1),A.o(1,-1),A.o(-1,1),A.o(1,1),A.o(0,0),A.o(2,0),A.o(0,2)],A.M("f<p>")))
t($,"f7","dg",()=>A.o(-0.211324865405187,-0.211324865405187))
t($,"f6","cq",()=>A.o(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.n,DOMError:J.n,ErrorEvent:J.n,Event:J.n,InputEvent:J.n,SubmitEvent:J.n,MediaError:J.n,NavigatorUserMediaError:J.n,OverconstrainedError:J.n,PositionError:J.n,GeolocationPositionError:J.n,SensorErrorEvent:J.n,SpeechRecognitionError:J.n,ArrayBufferView:A.b6,Float32Array:A.b4,Int32Array:A.b5,DOMException:A.bn})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,DOMException:true})
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eY
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=jsregionworker.js.map
