
var webp_dec = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webp_dec) {
  webp_dec = webp_dec || {};

var c;c||(c=typeof webp_dec !== 'undefined' ? webp_dec : {});var t={},w;for(w in c)c.hasOwnProperty(w)&&(t[w]=c[w]);var x=!1,y=!1,aa=!1,ba=!1;x="object"===typeof window;y="function"===typeof importScripts;aa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ba=!x&&!aa&&!y;var z="",A,B,ca,da;
if(aa)z=y?require("path").dirname(z)+"/":__dirname+"/",A=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);return ca.readFileSync(a,b?null:"utf8")},B=function(a){a=A(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||C("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",C),c.inspect=function(){return"[Emscripten Module object]"};
else if(ba)"undefined"!=typeof read&&(A=function(a){return read(a)}),B=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||C("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(x||y)y?z=self.location.href:document.currentScript&&(z=document.currentScript.src),_scriptDir&&
(z=_scriptDir),0!==z.indexOf("blob:")?z=z.substr(0,z.lastIndexOf("/")+1):z="",A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},y&&(B=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ea=c.print||console.log.bind(console),D=c.printErr||console.warn.bind(console);for(w in t)t.hasOwnProperty(w)&&(c[w]=t[w]);t=null;var E;c.wasmBinary&&(E=c.wasmBinary);var noExitRuntime;
c.noExitRuntime&&(noExitRuntime=c.noExitRuntime);"object"!==typeof WebAssembly&&D("no native wasm support detected");var F,fa=new WebAssembly.Table({initial:130,maximum:130,element:"anyfunc"}),ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a,b,d){var e=G;if(0<d){d=b+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var q=a.charCodeAt(++f);g=65536+((g&1023)<<10)|q&1023}if(127>=g){if(b>=d)break;e[b++]=g}else{if(2047>=g){if(b+1>=d)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=d)break;e[b++]=224|g>>12}else{if(b+3>=d)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}var ka="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function la(a){var b;for(b=a>>1;H[b];)++b;b<<=1;if(32<b-a&&ka)return ka.decode(G.subarray(a,b));b=0;for(var d="";;){var e=H[a+2*b>>1];if(0==e)return d;++b;d+=String.fromCharCode(e)}}function ma(a,b,d){void 0===d&&(d=2147483647);if(2>d)return 0;d-=2;var e=b;d=d<2*a.length?d/2:a.length;for(var f=0;f<d;++f)H[b>>1]=a.charCodeAt(f),b+=2;H[b>>1]=0;return b-e}function na(a){return 2*a.length}
function oa(a){for(var b=0,d="";;){var e=I[a+4*b>>2];if(0==e)return d;++b;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}}function pa(a,b,d){void 0===d&&(d=2147483647);if(4>d)return 0;var e=b;d=e+d-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var q=a.charCodeAt(++f);g=65536+((g&1023)<<10)|q&1023}I[b>>2]=g;b+=4;if(b+4>d)break}I[b>>2]=0;return b-e}
function qa(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&++d;b+=4}return b}var J,ra,G,H,sa,I,K,ta,ua;function va(a){J=a;c.HEAP8=ra=new Int8Array(a);c.HEAP16=H=new Int16Array(a);c.HEAP32=I=new Int32Array(a);c.HEAPU8=G=new Uint8Array(a);c.HEAPU16=sa=new Uint16Array(a);c.HEAPU32=K=new Uint32Array(a);c.HEAPF32=ta=new Float32Array(a);c.HEAPF64=ua=new Float64Array(a)}var wa=c.INITIAL_MEMORY||16777216;c.wasmMemory?F=c.wasmMemory:F=new WebAssembly.Memory({initial:wa/65536});
F&&(J=F.buffer);wa=J.byteLength;va(J);I[3260]=5256080;function M(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.N;"number"===typeof d?void 0===b.J?c.dynCall_v(d):c.dynCall_vi(d,b.J):d(void 0===b.J?null:b.J)}}}var xa=[],ya=[],za=[],Aa=[];function Ba(){var a=c.preRun.shift();xa.unshift(a)}var N=0,Ca=null,O=null;c.preloadedImages={};c.preloadedAudios={};
function C(a){if(c.onAbort)c.onAbort(a);ea(a);D(a);ha=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Da(){var a=Q;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var Q="webp_dec.wasm";if(!Da()){var Ea=Q;Q=c.locateFile?c.locateFile(Ea,z):z+Ea}
function Fa(){try{if(E)return new Uint8Array(E);if(B)return B(Q);throw"both async and sync fetching of the wasm failed";}catch(a){C(a)}}function Ga(){return E||!x&&!y||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(Q,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+Q+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}ya.push({N:function(){Ha()}});function R(){return 0<R.L}
function Ia(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ja=void 0;function S(a){for(var b="";G[a];)b+=Ja[G[a++]];return b}var T={},U={},Ka={};function La(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ma(a,b){a=La(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Na(a){var b=Error,d=Ma(a,function(e){this.name=a;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(b.prototype);d.prototype.constructor=d;d.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}
var Oa=void 0;function V(a){throw new Oa(a);}var Pa=void 0;function Qa(a,b){function d(h){h=b(h);if(h.length!==e.length)throw new Pa("Mismatched type converter count");for(var k=0;k<e.length;++k)W(e[k],h[k])}var e=[];e.forEach(function(h){Ka[h]=a});var f=Array(a.length),g=[],q=0;a.forEach(function(h,k){U.hasOwnProperty(h)?f[k]=U[h]:(g.push(h),T.hasOwnProperty(h)||(T[h]=[]),T[h].push(function(){f[k]=U[h];++q;q===g.length&&d(f)}))});0===g.length&&d(f)}
function W(a,b,d){d=d||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||V('type "'+e+'" must have a positive integer typeid pointer');if(U.hasOwnProperty(a)){if(d.O)return;V("Cannot register type '"+e+"' twice")}U[a]=b;delete Ka[a];T.hasOwnProperty(a)&&(b=T[a],delete T[a],b.forEach(function(f){f()}))}var Ra=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ta(a){4<a&&0===--X[a].K&&(X[a]=void 0,Ra.push(a))}function Ua(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ra.length?Ra.pop():X.length;X[b]={K:1,value:a};return b}}function Va(a){return this.fromWireType(K[a>>2])}function Wa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Xa(a,b){switch(b){case 2:return function(d){return this.fromWireType(ta[d>>2])};case 3:return function(d){return this.fromWireType(ua[d>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ya(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var d=Ma(b.name||"unknownFunctionName",function(){});d.prototype=b.prototype;d=new d;a=b.apply(d,a);return a instanceof Object?a:d}
function Za(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function $a(a,b){var d=c;if(void 0===d[a].H){var e=d[a];d[a]=function(){d[a].H.hasOwnProperty(arguments.length)||V("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+d[a].H+")!");return d[a].H[arguments.length].apply(this,arguments)};d[a].H=[];d[a].H[e.M]=e}}
function ab(a,b,d){c.hasOwnProperty(a)?((void 0===d||void 0!==c[a].H&&void 0!==c[a].H[d])&&V("Cannot register public name '"+a+"' twice"),$a(a,a),c.hasOwnProperty(d)&&V("Cannot register multiple overloads of a function with the same number of arguments ("+d+")!"),c[a].H[d]=b):(c[a]=b,void 0!==d&&(c[a].R=d))}function bb(a,b){for(var d=[],e=0;e<a;e++)d.push(I[(b>>2)+e]);return d}
function cb(a,b){a=S(a);var d=c["dynCall_"+a];for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";d=(new Function("dynCall","rawFunction",f+"};\n"))(d,b);"function"!==typeof d&&V("unknown function pointer with signature "+a+": "+b);return d}var db=void 0;function eb(a){a=fb(a);var b=S(a);Y(a);return b}
function gb(a,b){function d(g){f[g]||U[g]||(Ka[g]?Ka[g].forEach(d):(e.push(g),f[g]=!0))}var e=[],f={};b.forEach(d);throw new db(a+": "+e.map(eb).join([", "]));}function hb(a,b,d){switch(b){case 0:return d?function(e){return ra[e]}:function(e){return G[e]};case 1:return d?function(e){return H[e>>1]}:function(e){return sa[e>>1]};case 2:return d?function(e){return I[e>>2]}:function(e){return K[e>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var ib={};
function jb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function kb(a,b){var d=U[a];void 0===d&&V(b+" has unknown type "+eb(a));return d}for(var lb={},mb=Array(256),nb=0;256>nb;++nb)mb[nb]=String.fromCharCode(nb);Ja=mb;Oa=c.BindingError=Na("BindingError");Pa=c.InternalError=Na("InternalError");c.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};
c.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};db=c.UnboundTypeError=Na("UnboundTypeError");
var pb={l:function(a){return ob(a)},k:function(a){"uncaught_exception"in R?R.L++:R.L=1;throw a;},i:function(a,b,d,e,f){var g=Ia(d);b=S(b);W(a,{name:b,fromWireType:function(q){return!!q},toWireType:function(q,h){return h?e:f},argPackAdvance:8,readValueFromPointer:function(q){if(1===d)var h=ra;else if(2===d)h=H;else if(4===d)h=I;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[q>>g])},I:null})},o:function(a,b){b=S(b);W(a,{name:b,fromWireType:function(d){var e=X[d].value;
Ta(d);return e},toWireType:function(d,e){return Ua(e)},argPackAdvance:8,readValueFromPointer:Va,I:null})},h:function(a,b,d){d=Ia(d);b=S(b);W(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Wa(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Xa(b,d),I:null})},f:function(a,b,d,e,f,g){var q=bb(b,d);a=S(a);f=cb(e,f);ab(a,function(){gb("Cannot call "+a+" due to unbound types",
q)},b-1);Qa(q,function(h){var k=[h[0],null].concat(h.slice(1)),l=h=a,n=f,p=k.length;2>p&&V("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==k[1]&&!1,v=!1,m=1;m<k.length;++m)if(null!==k[m]&&void 0===k[m].I){v=!0;break}var u="void"!==k[0].name,L="",P="";for(m=0;m<p-2;++m)L+=(0!==m?", ":"")+"arg"+m,P+=(0!==m?", ":"")+"arg"+m+"Wired";l="return function "+La(l)+"("+L+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+l+" called with ' + arguments.length + ' arguments, expected "+
(p-2)+" args!');\n}\n";v&&(l+="var destructors = [];\n");var Sa=v?"destructors":"null";L="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[V,n,g,Za,k[0],k[1]];r&&(l+="var thisWired = classParam.toWireType("+Sa+", this);\n");for(m=0;m<p-2;++m)l+="var arg"+m+"Wired = argType"+m+".toWireType("+Sa+", arg"+m+"); // "+k[m+2].name+"\n",L.push("argType"+m),n.push(k[m+2]);r&&(P="thisWired"+(0<P.length?", ":"")+P);l+=(u?"var rv = ":"")+"invoker(fn"+(0<P.length?", ":"")+P+");\n";
if(v)l+="runDestructors(destructors);\n";else for(m=r?1:2;m<k.length;++m)p=1===m?"thisWired":"arg"+(m-2)+"Wired",null!==k[m].I&&(l+=p+"_dtor("+p+"); // "+k[m].name+"\n",L.push(p+"_dtor"),n.push(k[m].I));u&&(l+="var ret = retType.fromWireType(rv);\nreturn ret;\n");L.push(l+"}\n");k=Ya(L).apply(null,n);m=b-1;if(!c.hasOwnProperty(h))throw new Pa("Replacing nonexistant public symbol");void 0!==c[h].H&&void 0!==m?c[h].H[m]=k:(c[h]=k,c[h].M=m);return[]})},b:function(a,b,d,e,f){function g(l){return l}b=
S(b);-1===f&&(f=4294967295);var q=Ia(d);if(0===e){var h=32-8*d;g=function(l){return l<<h>>>h}}var k=-1!=b.indexOf("unsigned");W(a,{name:b,fromWireType:g,toWireType:function(l,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+Wa(n)+'" to '+this.name);if(n<e||n>f)throw new TypeError('Passing a number "'+Wa(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:hb(b,
q,0!==e),I:null})},a:function(a,b,d){function e(g){g>>=2;var q=K;return new f(J,q[g+1],q[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];d=S(d);W(a,{name:d,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{O:!0})},e:function(a,b){b=S(b);var d="std::string"===b;W(a,{name:b,fromWireType:function(e){var f=K[e>>2];if(d){var g=G[e+4+f],q=0;0!=g&&(q=g,G[e+4+f]=0);var h=e+4;for(g=0;g<=f;++g){var k=e+4+g;if(0==G[k]){if(h){for(var l=G,n=h+
NaN,p=h;l[p]&&!(p>=n);)++p;if(16<p-h&&l.subarray&&ia)h=ia.decode(l.subarray(h,p));else{for(n="";h<p;){var r=l[h++];if(r&128){var v=l[h++]&63;if(192==(r&224))n+=String.fromCharCode((r&31)<<6|v);else{var m=l[h++]&63;r=224==(r&240)?(r&15)<<12|v<<6|m:(r&7)<<18|v<<12|m<<6|l[h++]&63;65536>r?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023))}}else n+=String.fromCharCode(r)}h=n}}else h="";if(void 0===u)var u=h;else u+=String.fromCharCode(0),u+=h;h=k+1}}0!=q&&(G[e+4+f]=q)}else{u=
Array(f);for(g=0;g<f;++g)u[g]=String.fromCharCode(G[e+4+g]);u=u.join("")}Y(e);return u},toWireType:function(e,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||V("Cannot pass non-string to std::string");var q=(d&&g?function(){for(var l=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++l:l=2047>=p?l+2:65535>=p?l+3:l+4}return l}:
function(){return f.length})(),h=ob(4+q+1);K[h>>2]=q;if(d&&g)ja(f,h+4,q+1);else if(g)for(g=0;g<q;++g){var k=f.charCodeAt(g);255<k&&(Y(h),V("String has UTF-16 code units that do not fit in 8 bits"));G[h+4+g]=k}else for(g=0;g<q;++g)G[h+4+g]=f[g];null!==e&&e.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:Va,I:function(e){Y(e)}})},d:function(a,b,d){d=S(d);if(2===b){var e=la;var f=ma;var g=na;var q=function(){return sa};var h=1}else 4===b&&(e=oa,f=pa,g=qa,q=function(){return K},h=2);W(a,{name:d,
fromWireType:function(k){var l=K[k>>2],n=q(),p=n[k+4+l*b>>h],r=0;0!=p&&(r=p,n[k+4+l*b>>h]=0);var v=k+4;for(p=0;p<=l;++p){var m=k+4+p*b;if(0==n[m>>h]){v=e(v);if(void 0===u)var u=v;else u+=String.fromCharCode(0),u+=v;v=m+b}}0!=r&&(n[k+4+l*b>>h]=r);Y(k);return u},toWireType:function(k,l){"string"!==typeof l&&V("Cannot pass non-string to C++ string type "+d);var n=g(l),p=ob(4+n+b);K[p>>2]=n>>h;f(l,p+4,n+b);null!==k&&k.push(Y,p);return p},argPackAdvance:8,readValueFromPointer:Va,I:function(k){Y(k)}})},
j:function(a,b){b=S(b);W(a,{P:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},p:Ta,q:function(a){if(0===a)return Ua(jb());var b=ib[a];a=void 0===b?S(a):b;return Ua(jb()[a])},m:function(a){4<a&&(X[a].K+=1)},g:function(a,b,d,e){a||V("Cannot use deleted val. handle = "+a);a=X[a].value;var f=lb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var q="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)q+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+
g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",q+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(kb,c,Ua);lb[b]=f}return f(a,d,e)},n:function(a,b,d){G.copyWithin(a,b,b+d)},c:function(a){var b=G.length;if(2147418112<a)return!1;for(var d=1;4>=d;d*=2){var e=b*(1+.2/d);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&
(e+=65536-e%65536);a:{try{F.grow(Math.min(2147418112,e)-J.byteLength+65535>>16);va(F.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},memory:F,table:fa},qb=function(){function a(f){c.asm=f.exports;N--;c.monitorRunDependencies&&c.monitorRunDependencies(N);0==N&&(null!==Ca&&(clearInterval(Ca),Ca=null),O&&(f=O,O=null,f()))}function b(f){a(f.instance)}function d(f){return Ga().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){D("failed to asynchronously prepare wasm: "+
g);C(g)})}var e={a:pb};N++;c.monitorRunDependencies&&c.monitorRunDependencies(N);if(c.instantiateWasm)try{return c.instantiateWasm(e,a)}catch(f){return D("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(E||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch)return d(b);fetch(Q,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){D("wasm streaming compile failed: "+g);D("falling back to ArrayBuffer instantiation");
d(b)})})})();return{}}();c.asm=qb;var Ha=c.___wasm_call_ctors=function(){return(Ha=c.___wasm_call_ctors=c.asm.r).apply(null,arguments)},ob=c._malloc=function(){return(ob=c._malloc=c.asm.s).apply(null,arguments)},Y=c._free=function(){return(Y=c._free=c.asm.t).apply(null,arguments)},fb=c.___getTypeName=function(){return(fb=c.___getTypeName=c.asm.u).apply(null,arguments)};
c.___embind_register_native_and_builtin_types=function(){return(c.___embind_register_native_and_builtin_types=c.asm.v).apply(null,arguments)};c.dynCall_vi=function(){return(c.dynCall_vi=c.asm.w).apply(null,arguments)};c.dynCall_iii=function(){return(c.dynCall_iii=c.asm.x).apply(null,arguments)};c.dynCall_vii=function(){return(c.dynCall_vii=c.asm.y).apply(null,arguments)};c.dynCall_ii=function(){return(c.dynCall_ii=c.asm.z).apply(null,arguments)};
c.dynCall_i=function(){return(c.dynCall_i=c.asm.A).apply(null,arguments)};c.dynCall_iiii=function(){return(c.dynCall_iiii=c.asm.B).apply(null,arguments)};c.dynCall_iiiiiii=function(){return(c.dynCall_iiiiiii=c.asm.C).apply(null,arguments)};c.dynCall_viiii=function(){return(c.dynCall_viiii=c.asm.D).apply(null,arguments)};c.dynCall_viiiii=function(){return(c.dynCall_viiiii=c.asm.E).apply(null,arguments)};c.dynCall_viiiiiiiii=function(){return(c.dynCall_viiiiiiiii=c.asm.F).apply(null,arguments)};
c.dynCall_viiiiii=function(){return(c.dynCall_viiiiii=c.asm.G).apply(null,arguments)};c.asm=qb;var Z;c.then=function(a){if(Z)a(c);else{var b=c.onRuntimeInitialized;c.onRuntimeInitialized=function(){b&&b();a(c)}}return c};O=function rb(){Z||sb();Z||(O=rb)};
function sb(){function a(){if(!Z&&(Z=!0,c.calledRun=!0,!ha)){M(ya);M(za);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();Aa.unshift(b)}M(Aa)}}if(!(0<N)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Ba();M(xa);0<N||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);a()},1)):a())}}c.run=sb;
if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();noExitRuntime=!0;sb();


  return webp_dec
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webp_dec;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webp_dec; });
    else if (typeof exports === 'object')
      exports["webp_dec"] = webp_dec;
    