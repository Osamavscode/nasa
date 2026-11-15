(()=>{var dd=0,zc=1,fd=2;var pa=1,ko=2,cr=3,ri=0,Lt=1,Vt=2,_s=0,hr=1,vs=2,Hc=3,Gc=4,pd=5;var ys=100,md=101,gd=102,xd=103,_d=104,vd=200,yd=201,Md=202,Sd=203,Vc=204,Wc=205,bd=206,wd=207,Td=208,Ed=209,Ad=210,Rd=211,Cd=212,Id=213,Pd=214,po=0,mo=1,go=2,Xs=3,xo=4,_o=5,vo=6,yo=7,zo=0,Ld=1,Nd=2,ai=0,$c=1,Xc=2,qc=3,ma=4,Yc=5,Kc=6,Zc=7,Rc="attached",Dd="detached",Jc=300,Ms=301,ur=302,Ho=303,Go=304,Tn=1e3,bn=1001,qs=1002,Pt=1003,Vo=1004;var Ss=1005;var zt=1006,dr=1007;var Rn=1008;var gn=1009,jc=1010,Qc=1011,fr=1012,Wo=1013,Wn=1014,Mn=1015,$n=1016,$o=1017,Xo=1018,bs=1020,eh=35902,th=35899,nh=1021,ih=1022,Cn=1023,Mi=1026,Li=1027,qo=1028,Yo=1029,Ji=1030,Ko=1031;var Zo=1033,ga=33776,xa=33777,_a=33778,va=33779,Jo=35840,jo=35841,Qo=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37488,rl=37489,ya=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,_l=37819,vl=37820,yl=37821,Ml=36492,Sl=36494,bl=36495,wl=36283,Tl=36284,Ma=36285,El=36286;var us=2300,ds=2301,uo=2302,Cc=2303,Ic=2400,Pc=2401,Lc=2402,Fd=2500;var sh=0,Sa=1,pr=2,Ud=3200;var ba=0,Od=1,Ni="",Tt="srgb",hn="srgb-linear",Hr="linear",pt="srgb";var fo=7680;var Bd=519,kd=512,zd=513,Hd=514,rh=515,Gd=516,Vd=517,ah=518,oh=519,lh=35044;var ch="300 es",wn=2e3,Ys=2001;function wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){let i=Ks("canvas");return i.style.display="block",i}var Eu={},Zs=null;function Gr(...i){let e="THREE."+i.shift();Zs?Zs("log",e,...i):console.log(e,...i)}function $d(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=$d(i);let e="THREE."+i.shift();if(Zs)Zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=$d(i);let e="THREE."+i.shift();if(Zs)Zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in Eu||(Eu[e]=!0,Oe(...i))}function Xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qd={[po]:po,[go]:vo,[xo]:xo,[Xs]:_o,[mo]:mo,[vo]:go,[yo]:yo,[_o]:Xs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=1234567,kr=Math.PI/180,fs=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function hh(i,e){return(i%e+e)%e}function Ep(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ap(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(hh(i,e*2)-e)}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Np(i,e){return i+Math.random()*(e-i)}function Dp(i){return i*(.5-Math.random())}function Fp(i){i!==void 0&&(Au=i);let e=Au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(i){return i*kr}function Op(i){return i*fs}function Bp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),h=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),l=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,h*d,h*l,o*c);break;case"YZY":i.set(h*l,o*u,h*d,o*c);break;case"ZXZ":i.set(h*d,h*l,o*u,o*c);break;case"XZX":i.set(o*u,h*x,h*f,o*c);break;case"YXY":i.set(h*f,o*u,h*x,o*c);break;case"ZYZ":i.set(h*x,h*f,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Al(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dh(i,e){if(e.constructor===Float32Array)return i;let t=Al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function fh(i,e){if(e.constructor===Float32Array)return i;let t=Al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Rl={DEG2RAD:kr,RAD2DEG:fs,generateUUID:oi,clamp:rt,euclideanModulo:hh,mapLinear:Ep,inverseLerp:Ap,lerp:zr,damp:Rp,pingpong:Cp,smoothstep:Ip,smootherstep:Pp,randInt:Lp,randFloat:Np,randFloatSpread:Dp,seededRandom:Fp,degToRad:Up,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:kp,floorPowerOfTwo:uh,setQuaternionFromProperEuler:zp,normalize:fh,denormalize:dh},Ke=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let h=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],l=r[a+0],f=r[a+1],x=r[a+2],_=r[a+3];if(d!==_||h!==l||c!==f||u!==x){let g=h*l+c*f+u*x+d*_;g<0&&(l=-l,f=-f,x=-x,_=-_,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,h=h*p+l*o,c=c*p+f*o,u=u*p+x*o,d=d*p+_*o}else{h=h*p+l*o,c=c*p+f*o,u=u*p+x*o,d=d*p+_*o;let v=1/Math.sqrt(h*h+c*c+u*u+d*d);h*=v,c*=v,u*=v,d*=v}}e[t]=h,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],u=n[s+3],d=r[a],l=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*d+h*f-c*l,e[t+1]=h*x+u*l+c*d-o*f,e[t+2]=c*x+u*f+o*l-h*d,e[t+3]=u*x-o*d-h*l-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),l=h(n/2),f=h(s/2),x=h(r/2);switch(a){case"XYZ":this._x=l*u*d+c*f*x,this._y=c*f*d-l*u*x,this._z=c*u*x+l*f*d,this._w=c*u*d-l*f*x;break;case"YXZ":this._x=l*u*d+c*f*x,this._y=c*f*d-l*u*x,this._z=c*u*x-l*f*d,this._w=c*u*d+l*f*x;break;case"ZXY":this._x=l*u*d-c*f*x,this._y=c*f*d+l*u*x,this._z=c*u*x+l*f*d,this._w=c*u*d-l*f*x;break;case"ZYX":this._x=l*u*d-c*f*x,this._y=c*f*d+l*u*x,this._z=c*u*x-l*f*d,this._w=c*u*d+l*f*x;break;case"YZX":this._x=l*u*d+c*f*x,this._y=c*f*d+l*u*x,this._z=c*u*x-l*f*d,this._w=c*u*d-l*f*x;break;case"XZY":this._x=l*u*d-c*f*x,this._y=c*f*d-l*u*x,this._z=c*u*x+l*f*d,this._w=c*u*d+l*f*x;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],c=t[2],u=t[6],d=t[10],l=n+o+d;if(l>0){let f=.5/Math.sqrt(l+1);this._w=.25/f,this._x=(u-h)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-h)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(h+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(h+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*h,this._y=s*u+a*h+r*o-n*c,this._z=r*u+a*c+n*h-s*o,this._w=a*u-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);h=Math.sin(h*c)/u,t=Math.sin(t*c)/u,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+h*c+a*d-o*u,this.y=n+h*u+o*c-r*d,this.z=s+h*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new F,Ru=new jt,Ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,h,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c)}set(e,t,n,s,r,a,o,h,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],d=n[7],l=n[2],f=n[5],x=n[8],_=s[0],g=s[3],p=s[6],v=s[1],S=s[4],M=s[7],T=s[2],E=s[5],m=s[8];return r[0]=a*_+o*v+h*T,r[3]=a*g+o*S+h*E,r[6]=a*p+o*M+h*m,r[1]=c*_+u*v+d*T,r[4]=c*g+u*S+d*E,r[7]=c*p+u*M+d*m,r[2]=l*_+f*v+x*T,r[5]=l*g+f*S+x*E,r[8]=l*p+f*M+x*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*h+s*r*c-s*a*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8],d=u*a-o*c,l=o*h-u*r,f=c*r-a*h,x=t*d+n*l+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=l*_,e[4]=(u*t-s*h)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*h-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+e,-s*c,s*h,-s*(-c*a+h*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Ze,Cu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let i={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hn]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Cu,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Cu,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var it=Hp();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Ks("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,Js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ac(s[a].image)):r.push(ac(s[a]))}else r=ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Vp=0,oc=new F,Ht=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=zt,a=Rn,o=Cn,h=gn,c=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=oi(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Jc;Ht.DEFAULT_ANISOTROPY=1;var gt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,h=e.elements,c=h[0],u=h[4],d=h[8],l=h[1],f=h[5],x=h[9],_=h[2],g=h[6],p=h[10];if(Math.abs(u-l)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+l)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,T=(p+1)/2,E=(u+l)/4,m=(d+_)/4,y=(x+g)/4;return S>M&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=m/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=m/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(l-u)*(l-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(d-_)/v,this.z=(l-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ht({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends So{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ye=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,h,c,u,d,l,f,x,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c,u,d,l,f,x,_,g)}set(e,t,n,s,r,a,o,h,c,u,d,l,f,x,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=c,p[6]=u,p[10]=d,p[14]=l,p[3]=f,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let l=a*u,f=a*d,x=o*u,_=o*d;t[0]=h*u,t[4]=-h*d,t[8]=c,t[1]=f+x*c,t[5]=l-_*c,t[9]=-o*h,t[2]=_-l*c,t[6]=x+f*c,t[10]=a*h}else if(e.order==="YXZ"){let l=h*u,f=h*d,x=c*u,_=c*d;t[0]=l+_*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=_+l*o,t[10]=a*h}else if(e.order==="ZXY"){let l=h*u,f=h*d,x=c*u,_=c*d;t[0]=l-_*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=_-l*o,t[2]=-a*c,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){let l=a*u,f=a*d,x=o*u,_=o*d;t[0]=h*u,t[4]=x*c-f,t[8]=l*c+_,t[1]=h*d,t[5]=_*c+l,t[9]=f*c-x,t[2]=-c,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){let l=a*h,f=a*c,x=o*h,_=o*c;t[0]=h*u,t[4]=_-l*d,t[8]=x*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+x,t[10]=l-_*d}else if(e.order==="XZY"){let l=a*h,f=a*c,x=o*h,_=o*c;t[0]=h*u,t[4]=-d,t[8]=c*u,t[1]=l*d+_,t[5]=a*u,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*u,t[10]=_*d+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,$p)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(n,xn),ki.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(n,xn)),ki.normalize(),za.crossVectors(xn,ki),s[0]=ki.x,s[4]=za.x,s[8]=xn.x,s[1]=ki.y,s[5]=za.y,s[9]=xn.y,s[2]=ki.z,s[6]=za.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],d=n[5],l=n[9],f=n[13],x=n[2],_=n[6],g=n[10],p=n[14],v=n[3],S=n[7],M=n[11],T=n[15],E=s[0],m=s[4],y=s[8],C=s[12],R=s[1],N=s[5],O=s[9],W=s[13],I=s[2],B=s[6],$=s[10],V=s[14],se=s[3],H=s[7],K=s[11],ee=s[15];return r[0]=a*E+o*R+h*I+c*se,r[4]=a*m+o*N+h*B+c*H,r[8]=a*y+o*O+h*$+c*K,r[12]=a*C+o*W+h*V+c*ee,r[1]=u*E+d*R+l*I+f*se,r[5]=u*m+d*N+l*B+f*H,r[9]=u*y+d*O+l*$+f*K,r[13]=u*C+d*W+l*V+f*ee,r[2]=x*E+_*R+g*I+p*se,r[6]=x*m+_*N+g*B+p*H,r[10]=x*y+_*O+g*$+p*K,r[14]=x*C+_*W+g*V+p*ee,r[3]=v*E+S*R+M*I+T*se,r[7]=v*m+S*N+M*B+T*H,r[11]=v*y+S*O+M*$+T*K,r[15]=v*C+S*W+M*V+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],c=e[13],u=e[2],d=e[6],l=e[10],f=e[14],x=e[3],_=e[7],g=e[11],p=e[15],v=h*f-c*l,S=o*f-c*d,M=o*l-h*d,T=a*f-c*u,E=a*l-h*u,m=a*d-o*u;return t*(_*v-g*S+p*M)-n*(x*v-g*T+p*E)+s*(x*S-_*T+p*m)-r*(x*M-_*E+g*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],h=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*h)+s*(r*c-a*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8],d=e[9],l=e[10],f=e[11],x=e[12],_=e[13],g=e[14],p=e[15],v=t*o-n*a,S=t*h-s*a,M=t*c-r*a,T=n*h-s*o,E=n*c-r*o,m=s*c-r*h,y=u*_-d*x,C=u*g-l*x,R=u*p-f*x,N=d*g-l*_,O=d*p-f*_,W=l*p-f*g,I=v*W-S*O+M*N+T*R-E*C+m*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*W-h*O+c*N)*B,e[1]=(s*O-n*W-r*N)*B,e[2]=(_*m-g*E+p*T)*B,e[3]=(l*E-d*m-f*T)*B,e[4]=(h*R-a*W-c*C)*B,e[5]=(t*W-s*R+r*C)*B,e[6]=(g*M-x*m-p*S)*B,e[7]=(u*m-l*M+f*S)*B,e[8]=(a*O-o*R+c*y)*B,e[9]=(n*R-t*O-r*y)*B,e[10]=(x*E-_*M+p*v)*B,e[11]=(d*M-u*E-f*v)*B,e[12]=(o*C-a*N-h*y)*B,e[13]=(t*N-n*C+s*y)*B,e[14]=(_*S-x*T-g*v)*B,e[15]=(u*T-d*S+l*v)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,h=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,u*o+n,u*h-s*a,0,c*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,c=r+r,u=a+a,d=o+o,l=r*c,f=r*u,x=r*d,_=a*u,g=a*d,p=o*d,v=h*c,S=h*u,M=h*d,T=n.x,E=n.y,m=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+M)*T,s[2]=(x-S)*T,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(l+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(x+S)*m,s[9]=(g-v)*m,s[10]=(1-(l+_))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),h=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,u=1/o,d=1/h;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=h,this}makePerspective(e,t,n,s,r,a,o=wn,h=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),l=(t+e)/(t-e),f=(n+s)/(n-s),x,_;if(h)x=r/(a-r),_=a*r/(a-r);else if(o===wn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ys)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wn,h=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),l=-(t+e)/(t-e),f=-(n+s)/(n-s),x,_;if(h)x=1/(a-r),_=a/(a-r);else if(o===wn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ys)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=l,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ls=new F,Un=new Ye,Wp=new F(0,0,0),$p=new F(1,1,1),ki=new F,za=new F,xn=new F,Pu=new Ye,Lu=new jt,En=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],u=s[9],d=s[2],l=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(l,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,Nu=new F,Ns=new jt,pi=new Ye,Ha=new F,Ir=new F,qp=new F,Yp=new jt,Du=new F(1,0,0),Fu=new F(0,1,0),Uu=new F(0,0,1),Ou={type:"added"},Kp={type:"removed"},Ds={type:"childadded",child:null},lc={type:"childremoved",child:null},St=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new En,n=new jt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ze}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ir,Ha,this.up):pi.lookAt(Ha,Ir,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(pi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let d=h[c];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){let o=a(e.geometries),h=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),l=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new F(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zp={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],l=u.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&l>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&l<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=hh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cc(a,r,e+1/3),this.g=cc(a,r,e),this.b=cc(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return it.workingToColorSpace(rn.copy(this),e),Math.round(rt(rn.r*255,0,255))*65536+Math.round(rt(rn.g*255,0,255))*256+Math.round(rt(rn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,u=(o+a)/2;if(o===a)h=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return e.h=h,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Tt){it.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ga);let n=zr(zi.h,Ga.h,t),s=zr(zi.s,Ga.s,t),r=zr(zi.l,Ga.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ie;Ie.NAMES=Yd;var $r=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Xr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new F,mi=new F,hc=new F,gi=new F,Fs=new F,Us=new F,Bu=new F,uc=new F,dc=new F,fc=new F,pc=new gt,mc=new gt,gc=new gt,$i=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),mi.subVectors(n,t),hc.subVectors(e,t);let a=On.dot(On),o=On.dot(mi),h=On.dot(hc),c=mi.dot(mi),u=mi.dot(hc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let l=1/d,f=(c*h-o*u)*l,x=(a*u-o*h)*l;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,h){return this.getBarycoord(e,t,n,s,gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,gi.x),h.addScaledVector(a,gi.y),h.addScaledVector(o,gi.z),h)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),mi.subVectors(e,t),On.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),On.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,n),Us.subVectors(r,n),uc.subVectors(e,n);let h=Fs.dot(uc),c=Us.dot(uc);if(h<=0&&c<=0)return t.copy(n);dc.subVectors(e,s);let u=Fs.dot(dc),d=Us.dot(dc);if(u>=0&&d<=u)return t.copy(s);let l=h*d-u*c;if(l<=0&&h>=0&&u<=0&&h-u>0)return a=h/(h-u),t.copy(n).addScaledVector(Fs,a);fc.subVectors(e,r);let f=Fs.dot(fc),x=Us.dot(fc);if(x>=0&&f<=x)return t.copy(r);let _=f*c-h*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Us,o);let g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return Bu.subVectors(r,s),o=(d-u)/(d-u+(f-x)),t.copy(s).addScaledVector(Bu,o);let p=1/(g+_+l);return a=_*p,o=l*p,t.copy(n).addScaledVector(Fs,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Wa.subVectors(this.max,Pr),Os.subVectors(e.a,Pr),Bs.subVectors(e.b,Pr),ks.subVectors(e.c,Pr),Hi.subVectors(Bs,Os),Gi.subVectors(ks,Bs),as.subVectors(Os,ks);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-as.z,as.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,as.z,0,-as.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-as.y,as.x,0];return!xc(t,Os,Bs,ks,Wa)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Os,Bs,ks,Wa))?!1:($a.crossVectors(Hi,Gi),t=[$a.x,$a.y,$a.z],xc(t,Os,Bs,ks,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new F,new F,new F,new F,new F,new F,new F,new F],Bn=new F,Va=new yn,Os=new F,Bs=new F,ks=new F,Hi=new F,Gi=new F,as=new F,Pr=new F,Wa=new F,$a=new F,os=new F;function xc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),h=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var Ut=new F,Xa=new Ke,Jp=0,yt=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=e!==void 0?Al(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fh(e,this.array)}};var qr=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jp=new yn,Lr=new F,_c=new F,fn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(_c)),this.expandByPoint(Lr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qp=0,Sn=new Ye,vc=new St,zs=new F,_n=new yn,Nr=new yn,Kt=new F,xt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Yr:qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(_n.min,Nr.min),_n.expandByPoint(Kt),Kt.addVectors(_n.max,Nr.max),_n.expandByPoint(Kt)):(_n.expandByPoint(Nr.min),_n.expandByPoint(Nr.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),h&&(zs.fromBufferAttribute(e,c),Kt.add(zs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],h=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new F,h[C]=new F;let u=new F,d=new F,l=new F,f=new Ke,x=new Ke,_=new Ke,g=new F,p=new F;function v(C,R,N){c[C]=c[R]=c[N]=1,u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),l.fromBufferAttribute(n,N),f.fromBufferAttribute(r,C),x.fromBufferAttribute(r,R),_.fromBufferAttribute(r,N),d.sub(u),l.sub(u),x.sub(f),_.sub(f);let O=1/(x.x*_.y-_.x*x.y);isFinite(O)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(l,-x.y).multiplyScalar(O),p.copy(l).multiplyScalar(x.x).addScaledVector(d,-_.x).multiplyScalar(O),o[C].add(g),o[R].add(g),o[N].add(g),h[C].add(p),h[R].add(p),h[N].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,R=S.length;C<R;++C){let N=S[C],O=N.start,W=N.count;for(let I=O,B=O+W;I<B;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new F,T=new F,E=new F,m=new F;function y(C){E.fromBufferAttribute(s,C),m.copy(E);let R=o[C];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(m,R);let O=T.dot(h[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,O)}for(let C=0,R=n.count;C<R;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,f=n.count;l<f;l++)n.setXYZ(l,0,0,0);let s=new F,r=new F,a=new F,o=new F,h=new F,c=new F,u=new F,d=new F;if(e)for(let l=0,f=e.count;l<f;l+=3){let x=e.getX(l+0),_=e.getX(l+1),g=e.getX(l+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),h.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let l=0,f=t.count;l<f;l+=3)s.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),a.fromBufferAttribute(t,l+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(l+0,u.x,u.y,u.z),n.setXYZ(l+1,u.x,u.y,u.z),n.setXYZ(l+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,h){let c=o.array,u=o.itemSize,d=o.normalized,l=new c.constructor(h.length*u),f=0,x=0;for(let _=0,g=h.length;_<g;_++){o.isInterleavedBufferAttribute?f=h[_]*o.data.stride+o.offset:f=h[_]*u;for(let p=0;p<u;p++)l[x++]=c[f++]}return new yt(l,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=e(h,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let l=c[u],f=e(l,n);h.push(f)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let d=0,l=c.length;d<l;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[h]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let l=0,f=d.length;l<f;l++)u.push(d[l].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ku(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var cn=new F,er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Al(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fh(e,this.data.array)}},yc=new F,em=new F,tm=new Ze,kn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yc.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tm.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nm=0,un=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=hr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var _i=new F,Mc=new F,qa=new F,Ya=new F,ps=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),h=-Ya.dot(qa),c=Ya.lengthSq(),u=Math.abs(1-a*a),d,l,f,x;if(u>0)if(d=a*h-o,l=a*o-h,x=r*u,d>=0)if(l>=-x)if(l<=x){let _=1/u;d*=_,l*=_,f=d*(d+a*l+2*o)+l*(a*d+l+2*h)+c}else l=r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*h)+c;else l=-r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*h)+c;else l<=-x?(d=Math.max(0,-(-a*r+o)),l=d>0?-r:Math.min(Math.max(-r,-h),r),f=-d*d+l*(l+2*h)+c):l<=x?(d=0,l=Math.min(Math.max(-r,-h),r),f=l*(l+2*h)+c):(d=Math.max(0,-(a*r+o)),l=d>0?r:Math.min(Math.max(-r,-h),r),f=-d*d+l*(l+2*h)+c);else l=a>0?-r:r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(qa,l),f}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,h,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,l=this.origin;return c>=0?(n=(e.min.x-l.x)*c,s=(e.max.x-l.x)*c):(n=(e.max.x-l.x)*c,s=(e.min.x-l.x)*c),u>=0?(r=(e.min.y-l.y)*u,a=(e.max.y-l.y)*u):(r=(e.max.y-l.y)*u,a=(e.min.y-l.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-l.z)*d,h=(e.max.z-l.z)*d):(o=(e.max.z-l.z)*d,h=(e.min.z-l.z)*d),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,h=o.x,c=o.y,u=o.z,d=e.x-a.x,l=e.y-a.y,f=e.z-a.z,x=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,S=n.z-a.z,M=Math.abs(h),T=Math.abs(c),E=Math.abs(u),m,y,C,R,N,O,W,I,B,$,V,se;if(M>=T&&M>=E?(C=h,O=d,B=x,se=p,h>=0?(m=c,y=u,R=l,N=f,W=_,I=g,$=v,V=S):(m=u,y=c,R=f,N=l,W=g,I=_,$=S,V=v)):T>=E?(C=c,O=l,B=_,se=v,c>=0?(m=u,y=h,R=f,N=d,W=g,I=x,$=S,V=p):(m=h,y=u,R=d,N=f,W=x,I=g,$=p,V=S)):(C=u,O=f,B=g,se=S,u>=0?(m=h,y=c,R=d,N=l,W=x,I=_,$=p,V=v):(m=c,y=h,R=l,N=d,W=_,I=x,$=v,V=p)),C===0)return null;let H=m/C,K=y/C,ee=1/C,Ee=R-H*O,Ne=N-K*O,q=W-H*B,xe=I-K*B,we=$-H*se,Re=V-K*se,ve=we*xe-Re*q,Xe=Ee*Re-Ne*we,ae=q*Ne-xe*Ee;if(s){if(ve<0||Xe<0||ae<0)return null}else if((ve<0||Xe<0||ae<0)&&(ve>0||Xe>0||ae>0))return null;let le=ve+Xe+ae;if(le===0)return null;let Ae=ee*(ve*O+Xe*B+ae*se);return(le>0?Ae<0:Ae>0)?null:this.at(Ae/le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zu=new Ye,ls=new ps,Ka=new fn,Hu=new F,Za=new F,Ja=new F,ja=new F,Sc=new F,Qa=new F,Gu=new F,eo=new F,He=class extends St{constructor(e=new xt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=o[h],d=r[h];u!==0&&(Sc.fromBufferAttribute(d,e),a?Qa.addScaledVector(Sc,u):Qa.addScaledVector(Sc.sub(t),u))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Ka.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Ka,Hu)===null||ls.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),ls.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,l=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=l.length;x<_;x++){let g=l[x],p=a[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,T=S;M<T;M+=3){let E=o.getX(M),m=o.getX(M+1),y=o.getX(M+2);s=to(this,p,e,n,c,u,d,E,m,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=x,p=_;g<p;g+=3){let v=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);s=to(this,a,e,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,_=l.length;x<_;x++){let g=l[x],p=a[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(h.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,T=S;M<T;M+=3){let E=M,m=M+1,y=M+2;s=to(this,p,e,n,c,u,d,E,m,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let g=x,p=_;g<p;g+=3){let v=g,S=g+1,M=g+2;s=to(this,a,e,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function im(i,e,t,n,s,r,a,o){let h;if(e.side===Lt?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,e.side===ri,o),h===null)return null;eo.copy(o),eo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:i}}function to(i,e,t,n,s,r,a,o,h,c){i.getVertexPosition(o,Za),i.getVertexPosition(h,Ja),i.getVertexPosition(c,ja);let u=im(i,e,t,n,Za,Ja,ja,Gu);if(u){let d=new F;$i.getBarycoord(Gu,Za,Ja,ja,d),s&&(u.uv=$i.getInterpolatedAttribute(s,o,h,c,d,new Ke)),r&&(u.uv1=$i.getInterpolatedAttribute(r,o,h,c,d,new Ke)),a&&(u.normal=$i.getInterpolatedAttribute(a,o,h,c,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let l={a:o,b:h,c,normal:new F,materialIndex:0};$i.getNormal(Za,Ja,ja,l.normal),u.face=l,u.barycoord=d}return u}var Dr=new gt,Vu=new gt,Wu=new gt,sm=new gt,$u=new Ye,no=new F,bc=new fn,Xu=new Ye,wc=new ps,Kr=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(s),e.ray.intersectsSphere(bc)!==!1&&(Xu.copy(s).invert(),wc.copy(e.ray).applyMatrix4(Xu),!(this.boundingBox!==null&&wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Vu.fromBufferAttribute(s.attributes.skinIndex,e),Wu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Dr.copy(t),t.set(0,0,0,0)):(Dr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Wu.getComponent(r);if(a!==0){let o=Vu.getComponent(r);$u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sm.copy(Dr).applyMatrix4($u),a)}}return t.isVector4&&(t.w=Dr.w),t.applyMatrix4(this.bindMatrixInverse)}},tr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},nr=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,h,c=Pt,u=Pt,d,l){super(null,a,o,h,c,u,s,r,d,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qu=new Ye,rm=new Ye,Zr=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:rm;qu.multiplyMatrices(o,t[r]),qu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new nr(t,e,e,Cn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Oe("Skeleton: No bone found with UUID:",r),a=new tr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Si=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Ye,Yu=new Ye,io=[],Ku=new yn,am=new Ye,Fr=new He,Ur=new fn,bi=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Ku.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Ur.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Yu.multiplyMatrices(n,Hs),Fr.matrixWorld=Yu,Fr.raycast(e,io);for(let a=0,o=io.length;a<o;a++){let h=io[a];h.instanceId=r,h.object=this,t.push(h)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,qo,Mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*e;return r[h]=o,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new fn,om=new Ke(.5,.5),so=new F,Xi=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],c=r[3],u=r[4],d=r[5],l=r[6],f=r[7],x=r[8],_=r[9],g=r[10],p=r[11],v=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,p-x,T-v).normalize(),s[1].setComponents(c+a,f+u,p+x,T+v).normalize(),s[2].setComponents(c+o,f+d,p+_,T+S).normalize(),s[3].setComponents(c-o,f-d,p-_,T-S).normalize(),n)s[4].setComponents(h,l,g,M).normalize(),s[5].setComponents(c-h,f-l,p-g,T-M).normalize();else if(s[4].setComponents(c-h,f-l,p-g,T-M).normalize(),t===wn)s[5].setComponents(c+h,f+l,p+g,T+M).normalize();else if(t===Ys)s[5].setComponents(h,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=om.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zu=new Ye,wo=class i{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Zu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Xi),n[s].setFromProjectionMatrix(Zu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var qi=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new F,Eo=new F,Ju=new Ye,Or=new ps,ro=new fn,Tc=new F,ju=new F,wi=class extends St{constructor(e=new xt,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(Eo);e.setAttribute("lineDistance",new ct(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Ju.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=this.isLineSegments?2:1,u=n.index,l=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let _=f,g=x-1;_<g;_+=c){let p=u.getX(_),v=u.getX(_+1),S=ao(this,e,Or,h,p,v,_);S&&t.push(S)}if(this.isLineLoop){let _=u.getX(x-1),g=u.getX(f),p=ao(this,e,Or,h,_,g,x-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),x=Math.min(l.count,a.start+a.count);for(let _=f,g=x-1;_<g;_+=c){let p=ao(this,e,Or,h,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=ao(this,e,Or,h,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ao(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),Eo.fromBufferAttribute(o,r),t.distanceSqToSegment(To,Eo,Tc,ju)>n)return;Tc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tc);if(!(c<e.near||c>e.far))return{distance:c,point:ju.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Qu=new F,ed=new F,ir=class extends wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qu.fromBufferAttribute(t,s),ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qu.distanceTo(ed);e.setAttribute("lineDistance",new ct(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jr=class extends wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hn=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new Ye,Nc=new ps,oo=new fn,lo=new F,ti=class extends St{constructor(e=new xt,t=new Hn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;td.copy(s).invert(),Nc.copy(e.ray).applyMatrix4(td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=n.index,d=n.attributes.position;if(c!==null){let l=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=l,_=f;x<_;x++){let g=c.getX(x);lo.fromBufferAttribute(d,g),nd(lo,g,h,s,e,t,this)}}else{let l=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=l,_=f;x<_;x++)lo.fromBufferAttribute(d,x),nd(lo,x,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nd(i,e,t,n,s,r,a){let o=Nc.distanceSqToPoint(i);if(o<t){let h=new F;Nc.closestPointToPoint(i,h),h.applyMatrix4(n);let c=s.ray.origin.distanceTo(h);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var jr=class extends Ht{constructor(e=[],t=Ms,n,s,r,a,o,h,c,u){super(e,t,n,s,r,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Ht{constructor(e,t,n,s,r,a,o,h,c){super(e,t,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends Ht{constructor(e,t,n=Wn,s,r,a,o=Pt,h=Pt,c,u=Mi,d=1){if(u!==Mi&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let l={width:e,height:t,depth:d};super(l,s,r,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qr=class extends Ti{constructor(e,t=Wn,n=Ms,s,r,a=Pt,o=Pt,h,c=Mi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,h,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],d=[],l=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function x(_,g,p,v,S,M,T,E,m,y,C){let R=M/m,N=T/y,O=M/2,W=T/2,I=E/2,B=m+1,$=y+1,V=0,se=0,H=new F;for(let K=0;K<$;K++){let ee=K*N-W;for(let Ee=0;Ee<B;Ee++){let Ne=Ee*R-O;H[_]=Ne*v,H[g]=ee*S,H[p]=I,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[p]=E>0?1:-1,u.push(H.x,H.y,H.z),d.push(Ee/m),d.push(1-K/y),V+=1}}for(let K=0;K<y;K++)for(let ee=0;ee<m;ee++){let Ee=l+ee+B*K,Ne=l+ee+B*(K+1),q=l+(ee+1)+B*(K+1),xe=l+(ee+1)+B*K;h.push(Ee,Ne,xe),h.push(Ne,q,xe),se+=6}o.addGroup(f,se,C),f+=se,l+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ms=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],h=[],c=new F,u=new Ke;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let d=0,l=3;d<=t;d++,l+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[l]/e+1)/2,u.y=(a[l+1]/e+1)/2,h.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gn=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],l=[],f=[],x=0,_=[],g=n/2,p=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(f,2));function v(){let M=new F,T=new F,E=0,m=(t-e)/n;for(let y=0;y<=r;y++){let C=[],R=y/r,N=R*(t-e)+e;for(let O=0;O<=s;O++){let W=O/s,I=W*h+o,B=Math.sin(I),$=Math.cos(I);T.x=N*B,T.y=-R*n+g,T.z=N*$,d.push(T.x,T.y,T.z),M.set(B,m,$).normalize(),l.push(M.x,M.y,M.z),f.push(W,1-R),C.push(x++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let R=_[C][y],N=_[C+1][y],O=_[C+1][y+1],W=_[C][y+1];(e>0||C!==0)&&(u.push(R,N,W),E+=3),(t>0||C!==r-1)&&(u.push(N,O,W),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){let T=x,E=new Ke,m=new F,y=0,C=M===!0?e:t,R=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*R,0),l.push(0,R,0),f.push(.5,.5),x++;let N=x;for(let O=0;O<=s;O++){let I=O/s*h+o,B=Math.cos(I),$=Math.sin(I);m.x=C*$,m.y=g*R,m.z=C*B,d.push(m.x,m.y,m.z),l.push(0,R,0),E.x=B*.5+.5,E.y=$*.5*R+.5,f.push(E.x,E.y),x++}for(let O=0;O<s;O++){let W=T+O,I=N+O;M===!0?u.push(I,I+1,W):u.push(I+1,I,W),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends Gn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new F,M=new F,T=new F;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],M),f(t[E+2],T),h(S,M,T,v)}function h(v,S,M,T){let E=T+1,m=[];for(let y=0;y<=E;y++){m[y]=[];let C=v.clone().lerp(M,y/E),R=S.clone().lerp(M,y/E),N=E-y;for(let O=0;O<=N;O++)O===0&&y===E?m[y][O]=C:m[y][O]=C.clone().lerp(R,O/N)}for(let y=0;y<E;y++)for(let C=0;C<2*(E-y)-1;C++){let R=Math.floor(C/2);C%2===0?(l(m[y][R+1]),l(m[y+1][R]),l(m[y][R])):(l(m[y][R+1]),l(m[y+1][R+1]),l(m[y+1][R]))}}function c(v){let S=new F;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){let v=new F;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=g(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(M,1-T)}x(),d()}function d(){for(let v=0;v<a.length;v+=6){let S=a[v+0],M=a[v+2],T=a[v+4],E=Math.max(S,M,T),m=Math.min(S,M,T);E>.9&&m<.1&&(S<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function l(v){r.push(v.x,v.y,v.z)}function f(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function x(){let v=new F,S=new F,M=new F,T=new F,E=new Ke,m=new Ke,y=new Ke;for(let C=0,R=0;C<r.length;C+=9,R+=6){v.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),E.set(a[R+0],a[R+1]),m.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),T.copy(v).add(S).add(M).divideScalar(3);let N=g(T);_(E,R+0,v,N),_(m,R+2,S,N),_(y,R+4,M,N)}}function _(v,S,M,T){T<0&&v.x===1&&(a[S]=v.x-1),M.x===0&&M.z===0&&(a[S]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},sr=class i extends Ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yi=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),h=Math.floor(s),c=o+1,u=h+1,d=e/o,l=t/h,f=[],x=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*l-a;for(let S=0;S<c;S++){let M=S*d-r;x.push(M,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let v=0;v<o;v++){let S=v+c*p,M=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;f.push(S,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},na=class i extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],h=[],c=[],u=[],d=e,l=(t-e)/s,f=new F,x=new Ke;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),h.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}d+=l}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,S=v,M=v+n+1,T=v+n+2,E=v+1;o.push(S,M,E),o.push(M,T,E)}}this.setIndex(o),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Vn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,u=[],d=new F,l=new F,f=[],x=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],S=p/n,M=a+S*o,T=e*Math.cos(M),E=Math.sqrt(e*e-T*T),m=0;p===0&&a===0?m=.5/t:p===n&&h===Math.PI&&(m=-.5/t);for(let y=0;y<=t;y++){let C=y/t,R=s+C*r;d.x=-E*Math.cos(R),d.y=T,d.z=E*Math.sin(R),x.push(d.x,d.y,d.z),l.copy(d).normalize(),_.push(l.x,l.y,l.z),g.push(C+m,1-S),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let S=u[p][v+1],M=u[p][v],T=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&f.push(S,M,E),(p!==n-1||h<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let h=[],c=[],u=[],d=[],l=new F,f=new F,x=new F;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),x.subVectors(f,l).normalize(),u.push(x.x,x.y,x.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,S=(s+1)*(_-1)+g,M=(s+1)*_+g;h.push(p,v,M),h.push(v,S,M)}this.setIndex(h),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(id(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=ws(i[t]);for(let s in n)e[s]=n[s]}return e}function id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Kd={clone:ws,merge:an},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ut=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ia=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Co=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Io=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var sa=class extends qi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Wi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Br(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function um(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function sd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let h=0;h!==e;++h)s[a++]=i[o+h]}return s}function dm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pc:r=e,o=2*t-n;break;case Lc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Pc:a=e,h=2*n-t;break;case Lc:a=1,h=n+s[1]-s[0];break;default:a=e-1,h=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,u=this._offsetPrev,d=this._offsetNext,l=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,p=-l*g+2*l*_-l*x,v=(1+l)*g+(-1.5-2*l)*_+(-.5+l)*x+1,S=(-1-f)*g+(1.5+f)*_+.5*x,M=f*g-f*_;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+v*a[c+T]+S*a[h+T]+M*a[d+T];return r}},Lo=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,u=(n-t)/(s-t),d=1-u;for(let l=0;l!==o;++l)r[l]=a[c+l]*d+a[h+l]*u;return r}},No=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends ii{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(n-t)/(s-t),_=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[h+g]*x;return r}let l=o*2,f=e-1;for(let x=0;x!==o;++x){let _=a[c+x],g=a[h+x],p=f*l+x*2,v=d[p],S=d[p+1],M=e*l+x*2,T=u[M],E=u[M+1],m=pm(n,t,v,T,s);r[x]=Zd(m,_,S,E,g)}return r}};function Zd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function fm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function pm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let h=fm(r,e,t,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Br(e.settings)&&(n.settings={inTangents:Wi(e.settings.inTangents,Array),outTangents:Wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break;case Cc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Br(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Br(this.settings)&&(ad(this.settings.inTangents,e),ad(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){qe("KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(a!==null&&a>h){qe("KeyframeTrack: Out of order keys.",this,o,h,a),e=!1;break}a=h}if(s!==void 0&&Tp(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)h=!0;else{let d=o*n,l=d-n,f=d+n;for(let x=0;x!==n;++x){let _=t[d+x];if(_!==t[l+x]||_!==t[f+x]){h=!0;break}}}if(h){if(o!==a){e[a]=e[o];let d=o*n,l=a*n;for(let f=0;f!==n;++f)t[l+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)t[h+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Br(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ad(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ds;var Ei=class extends mn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=us;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var Ai=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Ai.prototype.ValueTypeName="number";var Fo=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)jt.slerpFlat(r,0,a,c-o,a,c,h);return r}},Ri=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends mn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=us;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Ki.prototype.ValueTypeName="vector";var aa=class{constructor(e="",t=-1,n=[],s=Fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let h=[],c=[];h.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=um(h);h=sd(h,1,u),c=sd(c,1,u),!s&&h[0]===0&&(h.push(r),c.push(c[0])),a.push(new Ai(".morphTargetInfluences["+t[o].name+"]",h,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,h=e.length;o<h;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],l=s[d];l||(s[d]=l=[]),l.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function mm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return ra;case"quaternion":return Ri;case"bool":case"boolean":return Ei;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mm(i.type);if(i.times===void 0){let n=[],s=[];dm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Br(i.settings)&&(t.settings={inTangents:Wi(i.settings.inTangents,Float32Array),outTangents:Wi(i.settings.outTangents,Float32Array)}),t}var Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(od(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!od(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function od(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Uo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,l=c.length;d<l;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new Uo,si=class{constructor(e){this.manager=e!==void 0?e:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},Dc=class extends Error{constructor(e,t){super(e),this.response=t}},ar=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,h=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=vi[e],d=c.body.getReader(),l=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=l?parseInt(l):0,x=f!==0,_=0,g=new ReadableStream({start(p){v();function v(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{_+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:f});for(let E=0,m=u.length;E<m;E++){let y=u[E];y.onProgress&&y.onProgress(T)}p.enqueue(M),v()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Dc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),l=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(l);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Qn.add(`file:${e}`,c);let u=vi[e];delete vi[e];for(let d=0,l=u.length;d<l;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let d=0,l=u.length;d<l;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=new WeakMap,Oo=class extends si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Gs.get(a);d===void 0&&(d=[],Gs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ks("img");function h(){u(),t&&t(this);let d=Gs.get(this)||[];for(let l=0;l<d.length;l++){let f=d[l];f.onLoad&&f.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Qn.remove(`image:${e}`);let l=Gs.get(this)||[];for(let f=0;f<l.length;f++){let x=l[f];x.onError&&x.onError(d)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var oa=class extends si{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,a=new Oo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zi=class extends St{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gs=class extends Zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ec=new Ye,ld=new F,cd=new F,or=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},co=new F,ho=new jt,jn=new F,la=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,ho,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(co,ho,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new F,hd=new Ke,ud=new Ke,At=class extends la{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,hd,ud),t.subVectors(ud,hd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fc=class extends or{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ca=class extends Zi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Uc=class extends or{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends Zi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends la{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oc=class extends or{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},An=class extends Zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ha=class extends Zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ac=new WeakMap,ua=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ac.has(a)===!0?(s&&s(Ac.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let h=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ac.set(h,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,h),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=-90,Ws=1,lr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Vs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new At(Vs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new At(Vs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new At(Vs,Ws,e,t);o.layers=this.layers,this.add(o);let h=new At(Vs,Ws,e,t);h.layers=this.layers,this.add(h);let c=new At(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,h]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,u]=this.children,d=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,l,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Bo=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var mh="\\[\\]\\.:\\/",xm=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",_m="[^"+mh.replace("\\.","")+"]",vm=/((?:WC+[\/:])*)/.source.replace("WC",gh),ym=/(WCOD+)?/.source.replace("WCOD",_m),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),bm=new RegExp("^"+vm+ym+Mm+Sm+"$"),wm=["material","materials","bones","map"],Bc=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let h=n(o.children);if(h)return h}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Bc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wv=new Float32Array(1);var da=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var kc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var fa=class extends ir{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ie(n),s=new Ie(s);let r=t/2,a=e/t,o=e/2,h=[],c=[];for(let l=0,f=0,x=-o;l<=t;l++,x+=a){h.push(-o,0,x,o,0,x),h.push(x,0,-o,x,0,o);let _=l===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let u=new xt;u.setAttribute("position",new ct(h,3)),u.setAttribute("color",new ct(c,3));let d=new qi({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function xh(i,e,t,n){let s=Tm(n);switch(t){case nh:return i*e;case qo:return i*e/s.components*s.byteLength;case Yo:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case ih:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case Zo:return i*e*4/s.components*s.byteLength;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:case el:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case ya:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(i){switch(i){case gn:case jc:return{byteLength:1,components:1};case fr:case Qc:case $n:return{byteLength:2,components:1};case $o:case Xo:return{byteLength:2,components:4};case Wn:case Wo:case Mn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function yf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Am(i){let e=new WeakMap;function t(o,h){let c=o.array,u=o.usage,d=c.byteLength,l=i.createBuffer();i.bindBuffer(h,l),i.bufferData(h,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:l,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,h,c){let u=h.array,d=h.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,x)=>f.start-x.start);let l=0;for(let f=1;f<d.length;f++){let x=d[l],_=d[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++l,d[l]=_)}d.length=l+1;for(let f=0,x=d.length;f<x;f++){let _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Im,alphamap_pars_fragment:Pm,alphatest_fragment:Lm,alphatest_pars_fragment:Nm,aomap_fragment:Dm,aomap_pars_fragment:Fm,batching_pars_vertex:Um,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:km,bsdfs:zm,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:Km,color_vertex:Zm,common:Jm,defaultnormal_vertex:jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:ag,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:vg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:yg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:bg,lights_physical_fragment:wg,lights_physical_pars_fragment:Tg,lights_fragment_begin:Eg,lights_fragment_maps:Ag,lights_fragment_end:Rg,lightprobes_pars_fragment:Cg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ng,map_fragment:Dg,map_pars_fragment:Fg,map_particle_fragment:Ug,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:kg,morphinstance_vertex:zg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:$g,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:Yg,normal_vertex:Kg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:x0,specularmap_pars_fragment:_0,tonemapping_fragment:v0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:w0,uv_vertex:T0,worldpos_vertex:E0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:I0,cube_vert:P0,cube_frag:L0,depth_vert:N0,depth_frag:D0,distance_vert:F0,distance_frag:U0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:H0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:W0,meshmatcap_vert:$0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ax},Se={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:an([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:an([Se.lights,Se.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Cl={r:0,b:0,g:0},ox=new Ye,Mf=new Ze;Mf.set(-1,0,0,0,1,0,0,0,1);function lx(i,e,t,n,s,r){let a=new Ie(0),o=s===!0?0:1,h,c,u=null,d=0,l=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function x(v){let S=!1,M=f(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new He(new Gt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ws(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mf),c.material.toneMapped=it.getTransfer(M.colorSpace)!==pt,(u!==M||d!==M.version||l!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,l=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new He(new Yi(2,2),new pn({name:"BackgroundMaterial",uniforms:ws(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=it.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,l=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function g(v,S){v.getRGB(Cl,ph(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:x,addToRenderList:_,dispose:p}}function cx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null),r=s,a=!1;function o(N,O,W,I,B){let $=!1,V=d(N,I,W,O);r!==V&&(r=V,c(r.object)),$=f(N,I,W,B),$&&x(N,I,W,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(N,O,W,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function h(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,O,W,I){let B=I.wireframe===!0,$=n[O.id];$===void 0&&($={},n[O.id]=$);let V=N.isInstancedMesh===!0?N.id:0,se=$[V];se===void 0&&(se={},$[V]=se);let H=se[W.id];H===void 0&&(H={},se[W.id]=H);let K=H[B];return K===void 0&&(K=l(h()),H[B]=K),K}function l(N){let O=[],W=[],I=[];for(let B=0;B<t;B++)O[B]=0,W[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,O,W,I){let B=r.attributes,$=O.attributes,V=0,se=W.getAttributes();for(let H in se)if(se[H].location>=0){let ee=B[H],Ee=$[H];if(Ee===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),ee===void 0||ee.attribute!==Ee||Ee&&ee.data!==Ee.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function x(N,O,W,I){let B={},$=O.attributes,V=0,se=W.getAttributes();for(let H in se)if(se[H].location>=0){let ee=$[H];ee===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let Ee={};Ee.attribute=ee,ee&&ee.data&&(Ee.data=ee.data),B[H]=Ee,V++}r.attributes=B,r.attributesNum=V,r.index=I}function _(){let N=r.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function g(N){p(N,0)}function p(N,O){let W=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;W[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),B[N]!==O&&(i.vertexAttribDivisor(N,O),B[N]=O)}function v(){let N=r.newAttributes,O=r.enabledAttributes;for(let W=0,I=O.length;W<I;W++)O[W]!==N[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function S(N,O,W,I,B,$,V){V===!0?i.vertexAttribIPointer(N,O,W,B,$):i.vertexAttribPointer(N,O,W,I,B,$)}function M(N,O,W,I){_();let B=I.attributes,$=W.getAttributes(),V=O.defaultAttributeValues;for(let se in $){let H=$[se];if(H.location>=0){let K=B[se];if(K===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let ee=K.normalized,Ee=K.itemSize,Ne=e.get(K);if(Ne===void 0)continue;let q=Ne.buffer,xe=Ne.type,we=Ne.bytesPerElement,Re=xe===i.INT||xe===i.UNSIGNED_INT||K.gpuType===Wo;if(K.isInterleavedBufferAttribute){let ve=K.data,Xe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,ae=K.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)p(H.location+le,ve.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);i.bindBuffer(i.ARRAY_BUFFER,q);for(let le=0;le<H.locationSize;le++)S(H.location+le,Ee/H.locationSize,xe,ee,Xe*we,(ae+Ee/H.locationSize*le)*we,Re)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)p(H.location+ve,K.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<H.locationSize;ve++)g(H.location+ve);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve,Ee/H.locationSize,xe,ee,Ee*we,Ee/H.locationSize*ve*we,Re)}}else if(V!==void 0){let ee=V[se];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}v()}function T(){C();for(let N in n){let O=n[N];for(let W in O){let I=O[W];for(let B in I){let $=I[B];for(let V in $)u($[V].object),delete $[V];delete I[B]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let W in O){let I=O[W];for(let B in I){let $=I[B];for(let V in $)u($[V].object),delete $[V];delete I[B]}}delete n[N.id]}function m(N){for(let O in n){let W=n[O];for(let I in W){let B=W[I];if(B[N.id]===void 0)continue;let $=B[N.id];for(let V in $)u($[V].object),delete $[V];delete B[N.id]}}}function y(N){for(let O in n){let W=n[O],I=N.isInstancedMesh===!0?N.id:0,B=W[I];if(B!==void 0){for(let $ in B){let V=B[$];for(let se in V)u(V[se].object),delete V[se];delete B[$]}delete W[I],Object.keys(W).length===0&&delete n[O]}}}function C(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:m,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function hx(i,e,t){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),t.update(c,n,1)}function a(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),t.update(c,n,u))}function o(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let l=0;for(let f=0;f<u;f++)l+=c[f];t.update(l,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ux(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==Cn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let y=m===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==gn&&m!==Mn&&!y&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=h(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),l=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:l,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:E}}function dx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new kn,o=new Ze,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){let f=d.length!==0||l||n!==0||s;return s=l,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,l){t=u(d,l,0)},this.setState=function(d,l,f){let x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,S=v*4,M=p.clippingState||null;h.value=M,M=u(x,l,S,f);for(let T=0;T!==S;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,l,f,x){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=h.value,x!==!0||g===null){let p=f+_*4,v=l.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,M=f;S!==_;++S,M+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ea=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Gt(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:_s});r.uniforms.tEquirect.value=t;let a=new He(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=zt),new lr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},jd=256,fx=3,px=20,Sf=256,bf=16,mx=3,gx=new F,xx=new Ie,gr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new He(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gx}=r,h=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=h.autoClear,l=h.autoClearColor,f=h.autoClearDepth,x=h.autoClearStencil,_=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,_===null&&(e.background=h.getClearColor(xx));let g=new lr(n,s,u);return g.position.copy(o),g.update(h,e),h.autoClear=d,h.autoClearColor=l,h.autoClearDepth=f,h.autoClearStencil=x,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jd,uh(e))}_fromTexture(e,t){e.mapping===Ms||e.mapping===ur?this._setSize(e.image.length===0?jd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Qd(e,!1,!1),n=Math.log2(e)-fx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ms||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ef()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_x(),this._integrationMaterial=vx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/bf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-mx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let h=o>0?Math.log2(t)+.5*Math.log2(6/(Sf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=h,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Qd(i,e,t){return new Ea(i,{minFilter:Rn,generateMipmaps:e,type:$n,colorSpace:hn,depthBuffer:t})}function Aa(i,e,t){return new pn({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:Lt,blending:_s,depthTest:!1,depthWrite:!1})}function _x(){return Aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vx(){return Aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yx(){return Aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${px}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ef(){return Aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function tf(){return Aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(l,f=!1){return l==null?null:f?a(l):r(l)}function r(l){if(l&&l.isTexture){let f=l.mapping;if(f===Ho||f===Go)if(e.has(l)){let x=e.get(l).texture;return o(x,l.mapping)}else{let x=l.image;if(x&&x.height>0){let _=new Ea(x.height);return _.fromEquirectangularTexture(i,l),e.set(l,_),l.addEventListener("dispose",c),o(_.texture,l.mapping)}else return null}}return l}function a(l){if(l&&l.isTexture&&l.isPMREMTexture!==!0){let f=l.mapping,x=f===Ho||f===Go,_=f===Ms||f===ur;if(x||_){let g=t.get(l),p=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new gr(i)),g=x?n.fromEquirectangular(l,g):n.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),g.texture;if(g!==void 0)return g.texture;{let v=l.image;return x&&v&&v.height>0||_&&v&&h(v)?(n===null&&(n=new gr(i)),g=x?n.fromEquirectangular(l):n.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),l.addEventListener("dispose",u),g.texture):null}}}return l}function o(l,f){return f===Ho?l.mapping=Ms:f===Go&&(l.mapping=ur),l}function h(l){let f=0,x=6;for(let _=0;_<x;_++)l[_]!==void 0&&f++;return f===x}function c(l){let f=l.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function u(l){let f=l.target;f.removeEventListener("dispose",u);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Sx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){h(x.target)}function h(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let _=r.get(x);_&&(e.remove(_),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(x){let _=x.attributes;for(let g in _)e.update(_[g],i.ARRAY_BUFFER)}function d(x){let _=x.index,g=x.attributes.position,p=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,S=g.count>=65535?Yr:qr,M=new S(Math.ceil(v/3)*6,1),T=M.array;if(_!==null){let m=_.array;p=_.version;for(let y=0,C=0;y<v;y+=3){let R=m[y+0],N=m[y+1],O=m[y+2];T[C++]=R,T[C++]=N,T[C++]=N,T[C++]=O,T[C++]=O,T[C++]=R}}else{p=g.version;for(let m=0,y=0;m<v;m+=3){let C=m+0,R=m+1,N=m+2;T[y++]=C,T[y++]=R,T[y++]=R,T[y++]=N,T[y++]=N,T[y++]=C}}M.version=p;let E=r.get(x);E&&e.remove(E),r.set(x,M)}function l(x){let _=r.get(x);if(_){let g=x.index;g!==null&&_.version<g.version&&d(x)}else d(x);return r.get(x)}function f(){for(let x in s){let _=s[x].deref();_!==void 0&&h(_)}}return{get:c,update:u,getWireframeAttribute:l,dispose:f}}function wx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function h(d,l){i.drawElements(n,l,r,d*a),t.update(l,n,1)}function c(d,l,f){f!==0&&(i.drawElementsInstanced(n,l,r,d*a,f),t.update(l,n,f))}function u(d,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=l[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u}function Tx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ex(i,e,t){let n=new WeakMap,s=new gt;function r(a,o,h){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,l=n.get(o);if(l===void 0||l.count!==d){let C=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",C)};l!==void 0&&l.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*d),m=new Vr(E,M,T,d);m.type=Mn,m.needsUpdate=!0;let y=S*4;for(let R=0;R<d;R++){let N=g[R],O=p[R],W=v[R],I=M*T*4*R;for(let B=0;B<N.count;B++){let $=B*y;f===!0&&(s.fromBufferAttribute(N,B),E[I+$+0]=s.x,E[I+$+1]=s.y,E[I+$+2]=s.z,E[I+$+3]=0),x===!0&&(s.fromBufferAttribute(O,B),E[I+$+4]=s.x,E[I+$+5]=s.y,E[I+$+6]=s.z,E[I+$+7]=0),_===!0&&(s.fromBufferAttribute(W,B),E[I+$+8]=s.x,E[I+$+9]=s.y,E[I+$+10]=s.z,E[I+$+11]=W.itemSize===4?s.w:1)}}l={count:d,texture:m,size:new Ke(M,T)},n.set(o,l),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let x=o.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:r}}function Ax(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,l=e.get(c,d);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return l}function o(){r=new WeakMap}function h(c){let u=c.target;u.removeEventListener("dispose",h),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Rx={[$c]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function Cx(i,e,t,n,s,r){let a=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,c=null,u=new xt;u.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ct([0,2,0,0,2,0],2));let d=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new He(u,d),f=new xs(-1,1,1,-1,0,1),x=null,_=null,g=!1,p,v=null,S=[],M=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),h!==null&&h.setSize(T,E);for(let m=0;m<S.length;m++){let y=S[m];y.setSize&&y.setSize(T,E)}},this.setEffects=function(T){S=T,M=S.length>0&&S[0].isRenderPass===!0;let E=a.width,m=a.height;S.length>0&&o===null&&(o=new vn(E,m,{type:$n,depthBuffer:!1,stencilBuffer:!1}),h=new vn(E,m,{type:$n,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ti(E,m),r===!0&&(c.format=Li,c.type=bs)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<S.length;C++){let R=S[C];R.setSize&&R.setSize(E,m),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,E){if(g||T.toneMapping===ai&&S.length===0)return!1;if(v=E,E!==null){let m=E.width,y=E.height;(a.width!==m||a.height!==y)&&this.setSize(m,y)}return M===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=ai,!0},this.hasRenderPass=function(){return M},this.end=function(T,E){T.toneMapping=p,g=!0;let m=a,y=o;for(let C=0;C<S.length;C++){let R=S[C];R.enabled!==!1&&(R.render(T,y,m,E),R.needsSwap!==!1&&(m=y,y=y===o?h:o))}if(x!==T.outputColorSpace||_!==T.toneMapping){x=T.outputColorSpace,_=T.toneMapping,d.defines={},it.getTransfer(x)===pt&&(d.defines.SRGB_TRANSFER="");let C=Rx[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,T.setRenderTarget(v),T.render(l,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var wf=new Ht,Tf=new Ti(1,1),Ef=new Qr(1),Af=new Vr,Rf=new bo,Cf=new jr,nf=[],sf=[],rf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Dx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),$t(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),$t(t,n)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,n))return;rf.set(n),i.uniformMatrix4fv(this.addr,!1,rf),$t(t,n)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Nl(i){return i.version===0&&(i.compareFunction=oh,i.needsUpdate=!0),i}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Nl(Tf):r=wf,t.setTexture2D(e||r,s)}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rf,s)}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Nl(Ef):r=Cf,t.setTextureCube(e||r,s)}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Af,s)}function Kx(i){switch(i){case 5126:return Ix;case 35664:return Px;case 35665:return Lx;case 35666:return Nx;case 35674:return Dx;case 35675:return Fx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Zx(i,e){i.uniform1fv(this.addr,e)}function Jx(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function jx(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function s_(i,e){i.uniform2iv(this.addr,e)}function r_(i,e){i.uniform3iv(this.addr,e)}function a_(i,e){i.uniform4iv(this.addr,e)}function o_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function h_(i,e){i.uniform4uiv(this.addr,e)}function u_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nl(Tf):a=wf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function d_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rf,r[a])}function f_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Nl(Ef):a=Cf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Af,r[a])}function m_(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},_h=/(\w+)(\])?(\[|\.)?/g;function lf(i,e){i.seq.push(e),i.map[e.id]=e}function g_(i,e,t){let n=i.name,s=n.length;for(_h.lastIndex=0;;){let r=_h.exec(n),a=_h.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){lf(t,c===void 0?new yh(o,i,e):new Mh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sh(o),lf(t,d)),t=d}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),h=e.getUniformLocation(t,o.name);g_(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x_=37297,__=0;function v_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hf=new Ze;function y_(i){it._getMatrix(hf,it.workingColorSpace,i);let e=`mat3( ${hf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+v_(i.getShaderSource(e),o)}else return r}function M_(i,e){let t=y_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var S_={[$c]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[ma]:"ACESFilmic",[Kc]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function b_(i,e){let t=S_[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Il=new F;function w_(){it.getLuminanceCoefficients(Il);let i=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function E_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ta(i){return i!==""}function df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(i){return i.replace(R_,C_)}function C_(i,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bh(t)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(i){return i.replace(I_,P_)}function P_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var L_={[pa]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function N_(i){return L_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[ur]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function O_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,h=N_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=F_(t),d=O_(t),l=T_(t),f=E_(r),x=s.createProgram(),_,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ta).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ta).join(`
`),g.length>0&&(g+=`
`)):(_=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),g=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?nt.tonemapping_pars_fragment:"",t.toneMapping!==ai?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),a=bh(a),a=df(a,t),a=ff(a,t),o=bh(o),o=df(o,t),o=ff(o,t),a=pf(a),o=pf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+_+a,S=p+g+o,M=cf(s,s.VERTEX_SHADER,v),T=cf(s,s.FRAGMENT_SHADER,S);s.attachShader(x,M),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(T)||"",I=N.trim(),B=O.trim(),$=W.trim(),V=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,T);else{let H=uf(s,M,"vertex"),K=uf(s,T,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+H+`
`+K)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(B===""||$==="")&&(se=!1);se&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:$,prefix:g}})}s.deleteShader(M),s.deleteShader(T),m=new mr(s,x),y=A_(s,x)}let m;this.getUniforms=function(){return m===void 0&&E(this),m};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,x_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var k_=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Th(e),t.set(e,n)),n}},Th=class{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}};function z_(i){return i===Ji||i===ya||i===Ma}function H_(i,e,t,n,s,r){let a=new Wr,o=new wh,h=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return h.add(m),m===0?"uv":`uv${m}`}function x(m,y,C,R,N,O){let W=R.fog,I=N.geometry,B=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,$=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,V=e.get(m.envMap||B,$),se=l[m.type],H=n.precision;m.precision!==null&&(H=n.getMaxPrecision(m.precision),H!==m.precision&&Oe("WebGLProgram.getParameters:",m.precision,"not supported, using",H,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=K!==void 0?K.length:0,Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let Ne,q,xe,we;if(se){let Me=ci[se];Ne=Me.vertexShader,q=Me.fragmentShader}else{Ne=m.vertexShader,q=m.fragmentShader;let Me=o.getVertexShaderStage(m),mt=o.getFragmentShaderStage(m);o.update(m,Me,mt),xe=Me.id,we=mt.id}let Re=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Xe=N.isInstancedMesh===!0,ae=N.isBatchedMesh===!0,le=!!m.map,Ae=!!m.matcap,Ge=!!V,Be=Ge&&V.isPMREMTexture===!0,Ve=!!m.aoMap,We=!!m.lightMap,wt=!!m.bumpMap&&m.wireframe===!1,dt=!!m.normalMap,Dt=!!m.displacementMap,U=!!m.emissiveMap,ce=!!m.metalnessMap,te=!!m.roughnessMap,ye=m.anisotropy>0,P=m.clearcoat>0,ke=m.diffuseRoughness>0,tt=m.dispersion>0,Je=m.retroreflectivity>0,re=m.iridescence>0,Qe=m.sheen>0,Te=m.transmission>0,Ue=ye&&!!m.anisotropyMap,A=P&&!!m.clearcoatMap,b=P&&!!m.clearcoatNormalMap,k=P&&!!m.clearcoatRoughnessMap,oe=ke&&!!m.diffuseRoughnessMap,Q=re&&!!m.iridescenceMap,ue=re&&!!m.iridescenceThicknessMap,fe=Qe&&!!m.sheenColorMap,Z=Qe&&!!m.sheenRoughnessMap,J=!!m.specularMap,me=!!m.specularColorMap,L=!!m.specularIntensityMap,j=Te&&!!m.transmissionMap,Y=Te&&!!m.thicknessMap,ne=!!m.gradientMap,he=!!m.alphaMap,de=m.alphaTest>0,De=!!m.alphaHash,$e=!!m.extensions,ie=ai;m.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let ze=Be?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,et={shaderID:se,shaderType:m.type,shaderName:m.name,vertexShader:Ne,fragmentShader:q,defines:m.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:H,batching:ae,batchingColor:ae&&N._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&N.instanceColor!==null,instancingMorph:Xe&&N.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:le,matcap:Ae,envMap:Ge,envMapMode:Ge&&V.mapping,envMapPMREM:Be,envMapMaxLod:Be?ze.length-1:null,envMapSize:Be?ze[0].width:null,aoMap:Ve,lightMap:We,bumpMap:wt,normalMap:dt,displacementMap:Dt,emissiveMap:U,normalMapObjectSpace:dt&&m.normalMapType===Od,normalMapTangentSpace:dt&&m.normalMapType===ba,packedNormalMap:dt&&m.normalMapType===ba&&z_(m.normalMap.format),metalnessMap:ce,roughnessMap:te,anisotropy:ye,anisotropyMap:Ue,clearcoat:P,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:ke,diffuseRoughnessMap:oe,dispersion:tt,retroreflection:Je,iridescence:re,iridescenceMap:Q,iridescenceThicknessMap:ue,sheen:Qe,sheenColorMap:fe,sheenRoughnessMap:Z,specularMap:J,specularColorMap:me,specularIntensityMap:L,transmission:Te,transmissionMap:j,thicknessMap:Y,gradientMap:ne,opaque:m.transparent===!1&&m.blending===hr&&m.alphaToCoverage===!1,alphaMap:he,alphaTest:de,alphaHash:De,combine:m.combine,mapUv:le&&f(m.map.channel),aoMapUv:Ve&&f(m.aoMap.channel),lightMapUv:We&&f(m.lightMap.channel),bumpMapUv:wt&&f(m.bumpMap.channel),normalMapUv:dt&&f(m.normalMap.channel),displacementMapUv:Dt&&f(m.displacementMap.channel),emissiveMapUv:U&&f(m.emissiveMap.channel),metalnessMapUv:ce&&f(m.metalnessMap.channel),roughnessMapUv:te&&f(m.roughnessMap.channel),anisotropyMapUv:Ue&&f(m.anisotropyMap.channel),clearcoatMapUv:A&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(m.sheenRoughnessMap.channel),specularMapUv:J&&f(m.specularMap.channel),specularColorMapUv:me&&f(m.specularColorMap.channel),specularIntensityMapUv:L&&f(m.specularIntensityMap.channel),transmissionMapUv:j&&f(m.transmissionMap.channel),thicknessMapUv:Y&&f(m.thicknessMap.channel),alphaMapUv:he&&f(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||ye),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(le||he),fog:!!W,useFog:m.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&dt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ee,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&m.map.isVideoTexture===!0&&it.getTransfer(m.map.colorSpace)===pt,decodeVideoTextureEmissive:U&&m.emissiveMap.isVideoTexture===!0&&it.getTransfer(m.emissiveMap.colorSpace)===pt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Vt,flipSided:m.side===Lt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:$e&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&m.extensions.multiDraw===!0||ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return et.vertexUv1s=h.has(1),et.vertexUv2s=h.has(2),et.vertexUv3s=h.has(3),h.clear(),et}function _(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let C in m.defines)y.push(C),y.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(g(y,m),p(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function g(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapPMREM),m.push(y.envMapMaxLod),m.push(y.envMapSize),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.diffuseRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.numSunLights),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numSunLightShadows),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.numLightProbeGrids),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function p(m,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function v(m){let y=l[m.type],C;if(y){let R=ci[y];C=Kd.clone(R.uniforms)}else C=m.uniforms;return C}function S(m,y){let C=u.get(y);return C!==void 0?++C.usedTimes:(C=new B_(i,y,m,s),c.push(C),u.set(y,C)),C}function M(m){if(--m.usedTimes===0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function T(m){o.remove(m)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function G_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(l){let f=0;return l.isInstancedMesh&&(f+=2),l.isSkinnedMesh&&(f+=1),f}function o(l,f,x,_,g,p){let v=i[e];return v===void 0?(v={id:l.id,object:l,geometry:f,material:x,materialVariant:a(l),groupOrder:_,renderOrder:l.renderOrder,z:g,group:p},i[e]=v):(v.id=l.id,v.object=l,v.geometry=f,v.material=x,v.materialVariant=a(l),v.groupOrder=_,v.renderOrder=l.renderOrder,v.z=g,v.group=p),e++,v}function h(l,f,x,_,g,p,v){v.reversedDepth===!0&&(g=-g);let S=o(l,f,x,_,g,p);x.transmission>0?n.push(S):x.transparent===!0?s.push(S):t.push(S)}function c(l,f,x,_,g,p){let v=o(l,f,x,_,g,p);x.transmission>0?n.unshift(v):x.transparent===!0?s.unshift(v):t.unshift(v)}function u(l,f){t.length>1&&t.sort(l||V_),n.length>1&&n.sort(f||gf),s.length>1&&s.sort(f||gf)}function d(){for(let l=e,f=i.length;l<f;l++){let x=i[l];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:h,unshift:c,finish:d,sort:u}}function W_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xf,i.set(n,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ie};break;case"SpotLight":t={position:new F,direction:new F,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var q_=0;function Y_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K_(i){let e=new $_,t=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ye,a=new Ye;function o(c){let u=0,d=0,l=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,x=0,_=0,g=0,p=0,v=0,S=0,M=0,T=0,E=0,m=0,y=0,C=0,R=0;c.sort(Y_);for(let O=0,W=c.length;O<W;O++){let I=c[O],B=I.color,$=I.intensity,V=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ji?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*$,d+=B.g*$,l+=B.b*$;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],$);R++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[x]=ee,n.sunShadowMap[x]=se;let Ee=K.getViewportCount();for(let Ne=0;Ne<Ee;Ne++)n.sunShadowMatrix[_+Ne]=K.getMatrix(Ne),n.sunShadowCascade[_+Ne]=K._cascadeData[Ne];_+=Ee,x++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=I.shadow.matrix,T++}n.directional[g]=H,g++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar($),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let K=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,K.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=se,m++}v++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(B).multiplyScalar($),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=H,S++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=H,p++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar($),H.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[M]=H,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=l;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==M||N.numSunShadows!==x||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==m||N.numSpotMaps!==y||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,N.sunLength=f,N.directionalLength=g,N.pointLength=p,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=M,N.numSunShadows=x,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=m,N.numSpotMaps=y,N.numLightProbes=R,n.version=q_++)}function h(c,u){let d=0,l=0,f=0,x=0,_=0,g=0,p=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let T=n.directional[l];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),l++}else if(M.isSpotLight){let T=n.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),x++}else if(M.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:o,setupView:h,state:n}}function _f(i){let e=new K_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function h(){e.setup(t),s.sort((d,l)=>d.priority-l.priority||d.id-l.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o}}function Z_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _f(i),e.set(s,[o])):r>=a.length?(o=new _f(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ev=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],vf=new Ye,wa=new F,vh=new F;function tv(i,e,t){let n=new Xi,s=new Ke,r=new Ke,a=new gt,o=new Co,h=new Io,c={},u=t.maxTextureSize,d={[ri]:Lt,[Lt]:ri,[Vt]:Vt},l=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:J_,fragmentShader:j_}),f=l.clone();f.defines.HORIZONTAL_PASS=1;let x=new xt;x.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(x,l),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let p=this.type;this.render=function(E,m,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ko&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);let C=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(_s),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==this.type;W&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let $=E[I],V=$.shadow;if(V===void 0){Oe("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=H,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cr){if($.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new vn(s.x,s.y,{format:Ji,type:$n,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Ti(s.x,s.y,Mn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Mi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt}else $.isPointLight?(V.map=new Ea(s.x),V.map.depthTexture=new Qr(s.x,Wn)):(V.map=new vn(s.x,s.y),V.map.depthTexture=new Ti(s.x,s.y,Wn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Mi,this.type===pa?(V.map.depthTexture.compareFunction=H?ah:rh,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,y);let ee=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:y.layers;for(let Ee=0;Ee<K;Ee++){let Ne=V.getCamera(Ee);if($.isPointLight){let q=V.camera,xe=V.matrix,we=$.distance||q.far;we!==q.far&&(q.far=we,q.updateProjectionMatrix()),wa.setFromMatrixPosition($.matrixWorld),q.position.copy(wa),vh.copy(q.position),vh.add(Q_[Ee]),q.up.copy(ev[Ee]),q.lookAt(vh),q.updateMatrixWorld(),xe.makeTranslation(-wa.x,-wa.y,-wa.z),vf.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(vf,q.coordinateSystem,q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(V.map),i.clear());let q=V.getViewport(Ee);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),O.viewport(a)}n=V.getFrustum(Ee),M(m,y,Ne,$,ee,this.type)}V.isPointLightShadow!==!0&&this.type===cr&&v(V,y),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,R,N)};function v(E,m){let y=e.update(_);l.defines.VSM_SAMPLES!==E.blurSamples&&(l.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,l.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new vn(s.x,s.y,{format:Ji,type:$n}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),l.uniforms.shadow_pass.value=E.map.depthTexture,l.uniforms.resolution.value.set(E.map.width,E.map.height),l.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(m,null,y,l,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(m,null,y,f,_,null)}function S(E,m,y,C){let R=null,N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=y.isPointLight===!0?h:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let O=R.uuid,W=m.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let B=I[W];B===void 0&&(B=R.clone(),I[W]=B,m.addEventListener("dispose",T)),R=B}if(R.visible=m.visible,R.wireframe=m.wireframe,C===cr?R.side=m.shadowSide!==null?m.shadowSide:m.side:R.side=m.shadowSide!==null?m.shadowSide:d[m.side],R.alphaMap=m.alphaMap,R.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,R.map=m.map,R.clipShadows=m.clipShadows,R.clippingPlanes=m.clippingPlanes,R.clipIntersection=m.clipIntersection,R.displacementMap=m.displacementMap,R.displacementScale=m.displacementScale,R.displacementBias=m.displacementBias,R.wireframeLinewidth=m.wireframeLinewidth,R.linewidth=m.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=y}return R}function M(E,m,y,C,R,N){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let I=e.update(E),B=E.material;if(Array.isArray(B)){let $=I.groups;for(let V=0,se=$.length;V<se;V++){let H=$[V],K=B[H.materialIndex];if(K&&K.visible){let ee=S(E,K,C,N);E.onBeforeShadow(i,E,m,y,I,ee,H),i.renderBufferDirect(y,null,I,ee,E,H),E.onAfterShadow(i,E,m,y,I,ee,H)}}}else if(B.visible){let $=S(E,B,C,N);E.onBeforeShadow(i,E,m,y,I,$,null),i.renderBufferDirect(y,null,I,$,E,null),E.onAfterShadow(i,E,m,y,I,$,null)}}let W=E.children;for(let I=0,B=W.length;I<B;I++)M(W[I],m,y,C,R,N)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let C=c[y],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function nv(i,e){function t(){let L=!1,j=new gt,Y=null,ne=new gt(0,0,0,0);return{setMask:function(he){Y!==he&&!L&&(i.colorMask(he,he,he,he),Y=he)},setLocked:function(he){L=he},setClear:function(he,de,De,$e,ie){ie===!0&&(he*=$e,de*=$e,De*=$e),j.set(he,de,De,$e),ne.equals(j)===!1&&(i.clearColor(he,de,De,$e),ne.copy(j))},reset:function(){L=!1,Y=null,ne.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,Y=null,ne=null,he=null;return{setReversed:function(de){if(j!==de){let De=e.get("EXT_clip_control");de?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),j=de;let $e=he;he=null,this.setClear($e)}},getReversed:function(){return j},setTest:function(de){de?ve(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(de){Y!==de&&!L&&(i.depthMask(de),Y=de)},setFunc:function(de){if(j&&(de=qd[de]),ne!==de){switch(de){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=de}},setLocked:function(de){L=de},setClear:function(de){he!==de&&(he=de,j&&(de=1-de),i.clearDepth(de))},reset:function(){L=!1,Y=null,ne=null,he=null,j=!1}}}function s(){let L=!1,j=null,Y=null,ne=null,he=null,de=null,De=null,$e=null,ie=null;return{setTest:function(ze){L||(ze?ve(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(ze){j!==ze&&!L&&(i.stencilMask(ze),j=ze)},setFunc:function(ze,et,Me){(Y!==ze||ne!==et||he!==Me)&&(i.stencilFunc(ze,et,Me),Y=ze,ne=et,he=Me)},setOp:function(ze,et,Me){(de!==ze||De!==et||$e!==Me)&&(i.stencilOp(ze,et,Me),de=ze,De=et,$e=Me)},setLocked:function(ze){L=ze},setClear:function(ze){ie!==ze&&(i.clearStencil(ze),ie=ze)},reset:function(){L=!1,j=null,Y=null,ne=null,he=null,de=null,De=null,$e=null,ie=null}}}let r=new t,a=new n,o=new s,h={},c=new WeakMap,u={},d={},l={},f=new WeakMap,x=[],_=null,g=!1,p=null,v=null,S=null,M=null,T=null,E=null,m=null,y=new Ie(0,0,0),C=0,R=!1,N=null,O=null,W=null,I=null,B=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=se>=1):H.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=se>=2);let K=null,ee={},Ee=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),q=new gt().fromArray(Ee),xe=new gt().fromArray(Ne);function we(L,j,Y,ne){let he=new Uint8Array(4),de=i.createTexture();i.bindTexture(L,de),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Y;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(j+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return de}let Re={};Re[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(Xs),wt(!1),dt(zc),ve(i.CULL_FACE),Ve(_s);function ve(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Xe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ae(L,j){return l[L]!==j?(i.bindFramebuffer(L,j),l[L]=j,L===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=j),L===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=j),!0):!1}function le(L,j){let Y=x,ne=!1;if(L){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let he=L.textures;if(Y.length!==he.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let de=0,De=he.length;de<De;de++)Y[de]=i.COLOR_ATTACHMENT0+de;Y.length=he.length,ne=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Y)}function Ae(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let Ge={[ys]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};Ge[xd]=i.MIN,Ge[_d]=i.MAX;let Be={[vd]:i.ZERO,[yd]:i.ONE,[Md]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,j,Y,ne,he,de,De,$e,ie,ze){if(L===_s){g===!0&&(Xe(i.BLEND),g=!1);return}if(g===!1&&(ve(i.BLEND),g=!0),L!==pd){if(L!==p||ze!==R){if((v!==ys||T!==ys)&&(i.blendEquation(i.FUNC_ADD),v=ys,T=ys),ze)switch(L){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}S=null,M=null,E=null,m=null,y.set(0,0,0),C=0,p=L,R=ze}return}he=he||j,de=de||Y,De=De||ne,(j!==v||he!==T)&&(i.blendEquationSeparate(Ge[j],Ge[he]),v=j,T=he),(Y!==S||ne!==M||de!==E||De!==m)&&(i.blendFuncSeparate(Be[Y],Be[ne],Be[de],Be[De]),S=Y,M=ne,E=de,m=De),($e.equals(y)===!1||ie!==C)&&(i.blendColor($e.r,$e.g,$e.b,ie),y.copy($e),C=ie),p=L,R=!1}function We(L,j){L.side===Vt?Xe(i.CULL_FACE):ve(i.CULL_FACE);let Y=L.side===Lt;j&&(Y=!Y),wt(Y),L.blending===hr&&L.transparent===!1?Ve(_s):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ne=L.stencilWrite;o.setTest(ne),ne&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function dt(L){L!==dd?(ve(i.CULL_FACE),L!==O&&(L===zc?i.cullFace(i.BACK):L===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),O=L}function Dt(L){L!==W&&(V&&i.lineWidth(L),W=L)}function U(L,j,Y){L?(ve(i.POLYGON_OFFSET_FILL),(I!==j||B!==Y)&&(I=j,B=Y,a.getReversed()&&(j=-j,Y=-Y),i.polygonOffset(j,Y))):Xe(i.POLYGON_OFFSET_FILL)}function ce(L){L?ve(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function te(L){L===void 0&&(L=i.TEXTURE0+$-1),K!==L&&(i.activeTexture(L),K=L)}function ye(L,j,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+$-1:Y=K);let ne=ee[Y];ne===void 0&&(ne={type:void 0,texture:void 0},ee[Y]=ne),(ne.type!==L||ne.texture!==j)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(L,j||Re[L]),ne.type=L,ne.texture=j)}function P(){let L=ee[K];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ke(){try{i.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Je(){try{i.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function re(){try{i.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Qe(){try{i.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Ue(){try{i.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function b(){try{i.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function k(){try{i.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function oe(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Q(L,j){d[L]!==j&&(i.pixelStorei(L,j),d[L]=j)}function ue(L){q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function fe(L){xe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function Z(L,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ne=Y.get(L);ne===void 0&&(ne=i.getUniformBlockIndex(j,L.name),i.uniformBlockBinding(j,ne,ne),Y.set(L,ne))}function J(L,j,Y){let he=c.get(j).get(L);h[he]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,Y),h[he]=Y)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,ee={},l={},h={},f=new WeakMap,x=[],_=null,g=!1,p=null,v=null,S=null,M=null,T=null,E=null,m=null,y=new Ie(0,0,0),C=0,R=!1,N=null,O=null,W=null,I=null,B=null,q.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Xe,bindFramebuffer:ae,drawBuffers:le,useProgram:Ae,setBlending:Ve,setMaterial:We,setFlipSided:wt,setCullFace:dt,setLineWidth:Dt,setPolygonOffset:U,setScissorTest:ce,activeTexture:te,bindTexture:ye,unbindTexture:P,compressedTexImage2D:ke,compressedTexImage3D:tt,texImage2D:b,texImage3D:k,pixelStorei:Q,getParameter:oe,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ue,texStorage3D:A,texSubImage2D:Je,texSubImage3D:re,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Te,scissor:ue,viewport:fe,reset:me}}function iv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,d=new Set,l,f=new WeakMap,x=new Set,_=new FinalizationRegistry(A=>x.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return g?new OffscreenCanvas(A,b):Ks("canvas")}function v(A,b,k){let oe=1,Q=Ue(A);if((Q.width>k||Q.height>k)&&(oe=k/Math.max(Q.width,Q.height)),oe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ue=Math.floor(oe*Q.width),fe=Math.floor(oe*Q.height);l===void 0&&(l=p(ue,fe));let Z=b?p(ue,fe):l;return Z.width=ue,Z.height=fe,Z.getContext("2d").drawImage(A,0,0,ue,fe),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),Z}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function S(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,b,k,oe,Q,ue=!1){if(A!==null){if(i[A]!==void 0)return i[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;oe&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),k===i.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),b===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),k===i.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),k===i.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){let J=ue?Hr:it.getTransfer(Q);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=J===pt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),k===i.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function m(A,b){let k;return A?b===null||b===Wn||b===bs?k=i.DEPTH24_STENCIL8:b===Mn?k=i.DEPTH32F_STENCIL8:b===fr&&(k=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wn||b===bs?k=i.DEPTH_COMPONENT24:b===Mn?k=i.DEPTH_COMPONENT32F:b===fr&&(k=i.DEPTH_COMPONENT16),k}function y(A,b){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==zt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){let b=new WeakRef(A);n.get(A).__ref=b,x.add(b),_.register(A,b,b)}function R(A){let b=n.get(A).__ref;b!==void 0&&(x.delete(b),_.unregister(b))}function N(A){W(A.target)}function O(A){I(A.target)}function W(A){A.removeEventListener("dispose",N),R(A),$(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",O),R(A),se(A)}function B(){for(let A of x){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):W(b))}x.clear(),d.clear()}function $(A){let b=n.get(A);if(b.__webglInit===void 0)return;let k=A.source,oe=f.get(k);if(oe){let Q=oe[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&V(A),Object.keys(oe).length===0&&f.delete(k)}n.remove(A)}function V(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let k=A.source,oe=f.get(k);delete oe[b.__cacheKey],a.memory.textures--}function se(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&W(k),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let ue=0;ue<b.__webglFramebuffer[Q].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[Q][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let oe=A.textures;for(let Q=0,ue=oe.length;Q<ue;Q++){let fe=n.get(oe[Q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(oe[Q])}n.remove(A)}let H=0;function K(){H=0}function ee(){return H}function Ee(A){H=A}function Ne(){let A=H;return A>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function q(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function xe(A,b){let k=n.get(A);if(A.isVideoTexture&&Qe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let oe=A.image;if(oe===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{We(k,A,b);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function we(A,b){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){We(k,A,b);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function Re(A,b){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){We(k,A,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function ve(A,b){let k=n.get(A);if(A.version>0&&k.__version!==A.version){wt(k,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let Xe={[Tn]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},ae={[Pt]:i.NEAREST,[Vo]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},le={[kd]:i.NEVER,[oh]:i.ALWAYS,[zd]:i.LESS,[rh]:i.LEQUAL,[Hd]:i.EQUAL,[ah]:i.GEQUAL,[Gd]:i.GREATER,[Vd]:i.NOTEQUAL};function Ae(A,b){if(b.type===Mn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zt||b.magFilter===dr||b.magFilter===Ss||b.magFilter===Rn||b.minFilter===zt||b.minFilter===dr||b.minFilter===Ss||b.minFilter===Rn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Xe[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Xe[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Xe[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pt||b.minFilter!==Ss&&b.minFilter!==Rn||b.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ge(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N),C(b));let oe=b.source,Q=f.get(oe);Q===void 0&&(Q={},f.set(oe,Q));let ue=q(b);if(ue!==A.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ue].usedTimes++;let fe=Q[A.__cacheKey];fe!==void 0&&(Q[A.__cacheKey].usedTimes--,fe.usedTimes===0&&V(b)),A.__cacheKey=ue,A.__webglTexture=Q[ue].texture}return k}function Be(A,b,k){return Math.floor(Math.floor(A/k)/b)}function Ve(A,b,k,oe){let ue=A.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,oe,b.data);else{ue.sort((L,j)=>L.start-j.start);let fe=0;for(let L=1;L<ue.length;L++){let j=ue[fe],Y=ue[L],ne=j.start+j.count,he=Be(Y.start,b.width,4),de=Be(j.start,b.width,4);Y.start<=ne+1&&he===de&&Be(Y.start+Y.count-1,b.width,4)===he?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++fe,ue[fe]=Y)}ue.length=fe+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,j=ue.length;L<j;L++){let Y=ue[L],ne=Math.floor(Y.start/4),he=Math.ceil(Y.count/4),de=ne%b.width,De=Math.floor(ne/b.width),$e=he,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,de,De,$e,ie,k,oe,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function We(A,b,k){let oe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=i.TEXTURE_3D);let Q=Ge(A,b),ue=b.source;t.bindTexture(oe,A.__webglTexture,i.TEXTURE0+k);let fe=n.get(ue);if(ue.version!==fe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ie=it.getPrimaries(it.workingColorSpace),ze=b.colorSpace===Ni?null:it.getPrimaries(b.colorSpace),et=b.colorSpace===Ni||ie===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let J=v(b.image,!1,s.maxTextureSize);J=Te(b,J);let me=r.convert(b.format,b.colorSpace),L=r.convert(b.type),j=E(b.internalFormat,me,L,b.normalized,b.colorSpace,b.isVideoTexture);Ae(oe,b);let Y,ne=b.mipmaps,he=b.isVideoTexture!==!0,de=fe.__version===void 0||Q===!0,De=ue.dataReady,$e=y(b,J);if(b.isDepthTexture)j=m(b.format===Li,b.type),de&&(he?t.texStorage2D(i.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,j,J.width,J.height,0,me,L,null));else if(b.isDataTexture)if(ne.length>0){he&&de&&t.texStorage2D(i.TEXTURE_2D,$e,j,ne[0].width,ne[0].height);for(let ie=0,ze=ne.length;ie<ze;ie++)Y=ne[ie],he?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,me,L,Y.data):t.texImage2D(i.TEXTURE_2D,ie,j,Y.width,Y.height,0,me,L,Y.data);b.generateMipmaps=!1}else he?(de&&t.texStorage2D(i.TEXTURE_2D,$e,j,J.width,J.height),De&&Ve(b,J,me,L)):t.texImage2D(i.TEXTURE_2D,0,j,J.width,J.height,0,me,L,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){he&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,j,ne[0].width,ne[0].height,J.depth);for(let ie=0,ze=ne.length;ie<ze;ie++)if(Y=ne[ie],b.format!==Cn)if(me!==null)if(he){if(De)if(b.layerUpdates.size>0){let et=xh(Y.width,Y.height,b.format,b.type);for(let Me of b.layerUpdates){let mt=Y.data.subarray(Me*et/Y.data.BYTES_PER_ELEMENT,(Me+1)*et/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Me,Y.width,Y.height,1,me,mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,me,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,me,L,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,j,Y.width,Y.height,J.depth,0,me,L,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{he&&de&&t.texStorage2D(i.TEXTURE_2D,$e,j,ne[0].width,ne[0].height);for(let ie=0,ze=ne.length;ie<ze;ie++)Y=ne[ie],b.format!==Cn?me!==null?he?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,me,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,j,Y.width,Y.height,0,Y.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,me,L,Y.data):t.texImage2D(i.TEXTURE_2D,ie,j,Y.width,Y.height,0,me,L,Y.data)}else if(b.isDataArrayTexture)if(he){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,j,J.width,J.height,J.depth),De)if(b.layerUpdates.size>0){let ie=xh(J.width,J.height,b.format,b.type);for(let ze of b.layerUpdates){let et=J.data.subarray(ze*ie/J.data.BYTES_PER_ELEMENT,(ze+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,J.width,J.height,1,me,L,et)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,me,L,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,me,L,J.data);else if(b.isData3DTexture)he?(de&&t.texStorage3D(i.TEXTURE_3D,$e,j,J.width,J.height,J.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,me,L,J.data)):t.texImage3D(i.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,me,L,J.data);else if(b.isFramebufferTexture){if(de)if(he)t.texStorage2D(i.TEXTURE_2D,$e,j,J.width,J.height);else{let ie=J.width,ze=J.height;for(let et=0;et<$e;et++)t.texImage2D(i.TEXTURE_2D,et,j,ie,ze,0,me,L,null),ie>>=1,ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),d.add(b),ie.onpaint=ze=>{let et=ze.changedElements;for(let Me of d)et.includes(Me.image)&&(Me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let et=i.RGBA,Me=i.RGBA,mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,Me,mt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ne.length>0){if(he&&de){let ie=Ue(ne[0]);t.texStorage2D(i.TEXTURE_2D,$e,j,ie.width,ie.height)}for(let ie=0,ze=ne.length;ie<ze;ie++)Y=ne[ie],he?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me,L,Y):t.texImage2D(i.TEXTURE_2D,ie,j,me,L,Y);b.generateMipmaps=!1}else if(he){if(de){let ie=Ue(J);t.texStorage2D(i.TEXTURE_2D,$e,j,ie.width,ie.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,L,J)}else t.texImage2D(i.TEXTURE_2D,0,j,me,L,J);S(b)&&b.mipmapsAutoUpdate===!0&&M(oe),fe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function wt(A,b,k){if(b.image.length!==6)return;let oe=Ge(A,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ue=n.get(Q);if(Q.version!==ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+k);let fe=it.getPrimaries(it.workingColorSpace),Z=b.colorSpace===Ni?null:it.getPrimaries(b.colorSpace),J=b.colorSpace===Ni||fe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let me=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,j=[];for(let Me=0;Me<6;Me++)!me&&!L?j[Me]=v(b.image[Me],!0,s.maxCubemapSize):j[Me]=L?b.image[Me].image:b.image[Me],j[Me]=Te(b,j[Me]);let Y=j[0],ne=r.convert(b.format,b.colorSpace),he=r.convert(b.type),de=E(b.internalFormat,ne,he,b.normalized,b.colorSpace),De=b.isVideoTexture!==!0,$e=ue.__version===void 0||oe===!0,ie=Q.dataReady,ze=y(b,Y);Ae(i.TEXTURE_CUBE_MAP,b);let et;if(b.isDepthTexture){if(de=m(b.format===Li,b.type),$e)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,Y.width,Y.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,Y.width,Y.height,0,ne,he,null)}else if(me){De&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,de,Y.width,Y.height);for(let Me=0;Me<6;Me++){et=j[Me].mipmaps;for(let mt=0;mt<et.length;mt++){let qt=et[mt];b.format!==Cn?ne!==null?De?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,0,0,qt.width,qt.height,ne,qt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,de,qt.width,qt.height,0,qt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,0,0,qt.width,qt.height,ne,he,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,de,qt.width,qt.height,0,ne,he,qt.data)}}}else{if(et=b.mipmaps,De&&$e){et.length>0&&ze++;let Me=Ue(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,de,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){De?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,j[Me].width,j[Me].height,ne,he,j[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,j[Me].width,j[Me].height,0,ne,he,j[Me].data);for(let mt=0;mt<et.length;mt++){let Oi=et[mt].image[Me].image;De?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,0,0,Oi.width,Oi.height,ne,he,Oi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,de,Oi.width,Oi.height,0,ne,he,Oi.data)}}else{De?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ne,he,j[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,ne,he,j[Me]);for(let mt=0;mt<et.length;mt++){let qt=et[mt];De?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,0,0,ne,he,qt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,de,ne,he,qt.image[Me])}}}S(b)&&b.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function dt(A,b,k,oe,Q,ue){let fe=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),J=E(k.internalFormat,fe,Z,k.normalized,k.colorSpace),me=n.get(b),L=n.get(k);if(L.__renderTarget=b,!me.__hasExternalTextures){let j=Math.max(1,b.width>>ue),Y=Math.max(1,b.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,J,j,Y,b.depth,0,fe,Z,null):t.texImage2D(Q,ue,J,j,Y,0,fe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Q,L.__webglTexture,0,Je(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,Q,L.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(A,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let oe=b.depthTexture,Q=oe&&oe.isDepthTexture?oe.type:null,ue=m(b.stencilBuffer,Q),fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(b),ue,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let oe=b.textures;for(let Q=0;Q<oe.length;Q++){let ue=oe[Q],fe=r.convert(ue.format,ue.colorSpace),Z=r.convert(ue.type),J=E(ue.internalFormat,fe,Z,ue.normalized,ue.colorSpace);re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(b),J,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(b),J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(A,b,k){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(b.depthTexture);Q.__renderTarget=b;let ue=oe?b.depthTexture.image[0]:b.depthTexture.image;(!Q.__webglTexture||ue.width!==b.width||ue.height!==b.height)&&(ue.width=b.width,ue.height=b.height,b.depthTexture.needsUpdate=!0),oe?ve(b.depthTexture,0):xe(b.depthTexture,0);let fe=Q.__webglTexture,Z=Je(b),J=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,me=b.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Mi)re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,J,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,me,J,fe,0);else if(b.depthTexture.format===Li)re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,J,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,me,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let b=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let oe=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",Q)};oe.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=oe}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let oe=0;oe<6;oe++)U(b.__webglFramebuffer[oe],A,oe);else A.texture.mipmaps.length>0?U(b.__webglFramebuffer[0],A,0):U(b.__webglFramebuffer,A,0);else if(k){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=i.createRenderbuffer(),Dt(b.__webglDepthbuffer[oe],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Dt(b.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,b,k){let oe=n.get(A);b!==void 0&&dt(oe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ce(A)}function ye(A){let b=A.texture,k=n.get(A),oe=n.get(b);A.addEventListener("dispose",O),C(A);let Q=A.textures,ue=A.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=b.version,a.memory.textures++),ue){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<b.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Z=0,J=Q.length;Z<J;Z++){let me=n.get(Q[Z]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let J=Q[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let me=r.convert(J.format,J.colorSpace),L=r.convert(J.type),j=E(J.internalFormat,me,L,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),Y=Je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)dt(k.__webglFramebuffer[Z][J],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else dt(k.__webglFramebuffer[Z],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(b)?M(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Z=0,J=Q.length;Z<J;Z++){let me=Q[Z],L=n.get(me),j=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,L.__webglTexture),Ae(j,me),dt(k.__webglFramebuffer,A,me,i.COLOR_ATTACHMENT0+Z,j,0),S(me)&&M(j)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,oe.__webglTexture),Ae(Z,b),b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)dt(k.__webglFramebuffer[J],A,b,i.COLOR_ATTACHMENT0,Z,J);else dt(k.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,Z,0);S(b)?M(Z):b.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&ce(A)}function P(A){let b=A.textures;for(let k=0,oe=b.length;k<oe;k++){let Q=b[k];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let ue=T(A),fe=n.get(Q).__webglTexture;t.bindTexture(ue,fe),M(ue),t.unbindTexture()}}}let ke=[];function tt(A){if(A.samples>0){if(re(A)===!1){let b=A.textures,k=A.width,oe=A.height,Q=i.COLOR_BUFFER_BIT,ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),Z=b.length>1;if(Z)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<b.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,k,oe,0,0,k,oe,Q,i.NEAREST),h===!0&&(ke.length=0,ke.push(i.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ke.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&h){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Je(A){return Math.min(s.maxSamples,A.samples)}function re(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Te(A,b){let k=A.colorSpace,oe=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==hn&&k!==Ni&&(it.getTransfer(k)===pt?(oe!==Cn||Q!==gn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",k)),b}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=Ee,this.setTexture2D=xe,this.setTexture2DArray=we,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=te,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=re,this.dispose=B}function sv(i,e){function t(n,s=Ni){let r,a=it.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===Cn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===ga||n===xa||n===_a||n===va)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===jo||n===Qo||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ya||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ya)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Tl||n===Ma||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:rv,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,u=null,d=null,l=null,f=null,x=null,_=typeof XRWebGLBinding<"u",g=new Eh,p={},v=t.getContextAttributes(),S=null,M=null,T=[],E=[],m=new Ke,y=null,C=null,R=new At;R.viewport=new gt;let N=new At;N.viewport=new gt;let O=[R,N],W=new Bo,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let xe=T[q];return xe===void 0&&(xe=new js,T[q]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(q){let xe=T[q];return xe===void 0&&(xe=new js,T[q]=xe),xe.getGripSpace()},this.getHand=function(q){let xe=T[q];return xe===void 0&&(xe=new js,T[q]=xe),xe.getHandSpace()};function $(q){let xe=E.indexOf(q.inputSource);if(xe===-1)return;let we=T[xe];we!==void 0&&(we.update(q.inputSource,q.frame,c||a),we.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",se);for(let q=0;q<T.length;q++){let xe=E[q];xe!==null&&(E[q]=null,T[q].disconnect(xe))}I=null,B=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(S),f=null,l=null,d=null,s=null,M=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(m.width,m.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return l!==null?l:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(m),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Re=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?Li:Mi,Re=v.stencil?bs:Wn);let Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),l=d.createProjectionLayer(Xe),s.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),M=new vn(l.textureWidth,l.textureHeight,{format:Cn,type:gn,depthTexture:new Ti(l.textureWidth,l.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}else{let we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new vn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(q){for(let xe=0;xe<q.removed.length;xe++){let we=q.removed[xe],Re=E.indexOf(we);Re>=0&&(E[Re]=null,T[Re].disconnect(we))}for(let xe=0;xe<q.added.length;xe++){let we=q.added[xe],Re=E.indexOf(we);if(Re===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=E.length){E.push(we),Re=Xe;break}else if(E[Xe]===null){E[Xe]=we,Re=Xe;break}if(Re===-1)break}let ve=T[Re];ve&&ve.connect(we)}}function H(q,xe){xe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(xe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let xe=q.near,we=q.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(we=g.depthFar)),W.near=N.near=R.near=xe,W.far=N.far=R.far=we,(I!==W.near||B!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,B=W.far),W.layers.mask=q.layers.mask|6,R.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Re=q.parent,ve=W.cameras;H(W,Re);for(let Xe=0;Xe<ve.length;Xe++)H(ve[Xe],Re);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),K(q,W,Re)};function K(q,xe,we){we===null?q.matrix.copy(xe.matrixWorld):(q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(xe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(xe.projectionMatrix),q.projectionMatrixInverse.copy(xe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(l===null&&f===null))return h},this.setFoveation=function(q){h=q,l!==null&&(l.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(q){return p[q]};let ee=null;function Ee(q,xe){if(u=xe.getViewerPose(c||a),x=xe,u!==null){let we=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Re=!1;we.length!==W.cameras.length&&(W.cameras.length=0,Re=!0);for(let le=0;le<we.length;le++){let Ae=we[le],Ge=null;if(f!==null)Ge=f.getViewport(Ae);else{let Ve=d.getViewSubImage(l,Ae);Ge=Ve.viewport,le===0&&(e.setRenderTargetTextures(M,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(M))}let Be=O[le];Be===void 0&&(Be=new At,Be.layers.enable(le),Be.viewport=new gt,O[le]=Be),Be.matrix.fromArray(Ae.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ae.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),le===0&&(W.matrix.copy(Be.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Re===!0&&W.cameras.push(Be)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let le=d.getDepthInformation(we[0]);le&&le.isValid&&le.texture&&g.init(le,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let le=0;le<we.length;le++){let Ae=we[le].camera;if(Ae){let Ge=p[Ae];Ge||(Ge=new ea,p[Ae]=Ge);let Be=d.getCameraImage(Ae);Ge.sourceTexture=Be}}}}for(let we=0;we<T.length;we++){let Re=E[we],ve=T[we];Re!==null&&ve!==void 0&&ve.update(Re,xe,c||a)}ee&&ee(q,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),x=null}let Ne=new yf;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}},ov=new Ye,If=new Ze;If.set(-1,0,0,0,1,0,0,0,1);function lv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),l(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?h(g,p,v,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Lt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Lt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),S=v.envMap,M=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(If),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function l(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cv(i,e,t,n){let s={},r={};function a(v,S){let M=S.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,S){let M=s[v.id];M===void 0&&(x(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",g));let T=S.program;n.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function h(v){let S=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],M=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,m=M.length;E<m;E++){let y=M[E];if(Array.isArray(y))for(let C=0,R=y.length;C<R;C++)u(y[C],E,C,T);else u(y,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,S,M,T){if(l(v,S,M,T)===!0){let E=v.__offset,m=v.value;if(Array.isArray(m)){let y=0;for(let C=0;C<m.length;C++){let R=m[C],N=_(R,!0);d(R,v.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function d(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function l(v,S,M,T){let E=v.value,m=S+"_"+M;if(Array.isArray(E)){T[m]===void 0&&(T[m]=[]);let y=T[m],C=!1;for(let R=0;R<E.length;R++)f(E[R],y,R)===!0&&(C=!0);return C}return f(E,T,m)}function f(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let T=S[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function x(v){let S=v.uniforms,M=0,T=16;for(let m=0,y=S.length;m<y;m++){let C=Array.isArray(S[m])?S[m]:[S[m]];for(let R=0,N=C.length;R<N;R++){let O=C[R],W=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(S[m])||Array.isArray(O.value),B=M;for(let V=0,se=W.length;V<se;V++){let H=W[V],K=_(H,I),ee=M%T,Ee=ee%K.boundary,Ne=ee+Ee;M+=Ee,Ne!==0&&T-Ne<K.storage&&(M+=T-Ne),V===0&&(B=M),M+=K.storage}let $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((M-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let E=M%T;return E>0&&(M+=T-E),v.__size=M,v.__cache={},this}function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let S=v.target;S.removeEventListener("dispose",g),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function uv(){return li===null&&(li=new nr(hv,16,16,Ji,$n),li.name="DFG_LUT",li.minFilter=zt,li.magFilter=zt,li.wrapS=bn,li.wrapT=bn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Pl=class{constructor(e={}){let{canvas:t=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:l=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let _=f,g=new Set([Zo,Ko,Yo]),p=new Set([gn,Wn,fr,bs,$o,Xo]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,E=null,m=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,W=null,I=null,B=null;this._outputColorSpace=Tt;let $=0,V=0,se=null,H=-1,K=null,ee=new gt,Ee=new gt,Ne=null,q=new Ie(0),xe=0,we=t.width,Re=t.height,ve=1,Xe=null,ae=null,le=new gt(0,0,we,Re),Ae=new gt(0,0,we,Re),Ge=!1,Be=new Xi,Ve=new wo,We=!1,wt=!1,dt=new Ye,Dt=new F,U=new gt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ye(){return se===null?ve:1}let P=n;function ke(w,D){return t.getContext(w,D)}let tt,Je,re,Qe,Te,Ue,A,b,k,oe,Q,ue,fe,Z,J,me,L,j,Y,ne,he,de,De;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){let D="webgl2";if(P=ke(D,w),P===null)throw ke(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),qe("WebGLRenderer: "+w.message),w}function $e(){tt=new Sx(P),tt.init(),he=new sv(P,tt),Je=new ux(P,tt,e,he),re=new nv(P,tt),Je.reversedDepthBuffer&&l&&re.buffers.depth.setReversed(!0),W=P.createFramebuffer(),I=P.createFramebuffer(),B=P.createFramebuffer(),Qe=new Tx(P),Te=new G_,Ue=new iv(P,tt,re,Te,Je,he,Qe),A=new Mx(R),b=new Am(P),de=new cx(P,b),k=new bx(P,b,Qe,de),oe=new Ax(P,k,b,de,Qe),j=new Ex(P,Je,Ue),J=new dx(Te),Q=new H_(R,A,tt,Je,de,J),ue=new lv(R,Te),fe=new W_,Z=new Z_(tt),L=new lx(R,A,re,oe,x,h),me=new tv(R,oe,Je),De=new cv(P,Qe,Je,re),Y=new hx(P,tt,Qe),ne=new wx(P,tt,Qe),Qe.programs=Q.programs,R.capabilities=Je,R.extensions=tt,R.properties=Te,R.renderLists=fe,R.shadowMap=me,R.state=re,R.info=Qe}_!==gn&&(C=new Cx(_,t.width,t.height,o,s,r));let ie=new Ah(R,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(we,Re,!1))},this.getSize=function(w){return w.set(we,Re)},this.setSize=function(w,D,X=!0){if(ie.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}we=w,Re=D,t.width=Math.floor(w*ve),t.height=Math.floor(D*ve),X===!0&&(t.style.width=w+"px",t.style.height=D+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(we*ve,Re*ve).floor()},this.setDrawingBufferSize=function(w,D,X){we=w,Re=D,ve=X,t.width=Math.floor(w*X),t.height=Math.floor(D*X),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(_===gn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,D,X,z){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,D,X,z),re.viewport(ee.copy(le).multiplyScalar(ye()).round())},this.getScissor=function(w){return w.copy(Ae)},this.setScissor=function(w,D,X,z){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,D,X,z),re.scissor(Ee.copy(Ae).multiplyScalar(ye()).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(w){re.setScissorTest(Ge=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,X=!0){let z=0;if(w){let G=!1;if(se!==null){let _e=se.texture.format;G=g.has(_e)}if(G){let _e=se.texture.type,Ce=p.has(_e),ge=L.getClearColor(),be=L.getClearAlpha(),Fe=ge.r,je=ge.g,at=ge.b;Ce?(v[0]=Fe,v[1]=je,v[2]=at,v[3]=be,P.clearBufferuiv(P.COLOR,0,v)):(S[0]=Fe,S[1]=je,S[2]=at,S[3]=be,P.clearBufferiv(P.COLOR,0,S))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),fe.dispose(),Z.dispose(),Ue.dispose(),Te.dispose(),A.dispose(),oe.dispose(),k.dispose(),de.dispose(),De.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",gu),ie.removeEventListener("sessionend",xu),is.stop()};function ze(w){w.preventDefault(),Gr("WebGLRenderer: Context Lost."),N=!0}function et(){Gr("WebGLRenderer: Context Restored."),N=!1;let w=Qe.autoReset,D=me.enabled,X=me.autoUpdate,z=me.needsUpdate,G=me.type;$e(),Qe.autoReset=w,me.enabled=D,me.autoUpdate=X,me.needsUpdate=z,me.type=G}function Me(w){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mt(w){let D=w.target;D.removeEventListener("dispose",mt),qt(D)}function qt(w){Oi(w),Te.remove(w)}function Oi(w){let D=Te.get(w).programs;D!==void 0&&(D.forEach(function(X){Q.releaseProgram(X)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,X,z,G,_e){D===null&&(D=ce);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Mp(w,D,X,z,G);re.setMaterial(z,Ce);let be=X.index,Fe=1;if(z.wireframe===!0){if(be=k.getWireframeAttribute(X),be===void 0)return;Fe=2}let je=X.drawRange,at=X.attributes.position,Pe=je.start*Fe,ot=(je.start+je.count)*Fe;_e!==null&&(Pe=Math.max(Pe,_e.start*Fe),ot=Math.min(ot,(_e.start+_e.count)*Fe)),be!==null?(Pe=Math.max(Pe,0),ot=Math.min(ot,be.count)):at!=null&&(Pe=Math.max(Pe,0),ot=Math.min(ot,at.count));let Ft=ot-Pe;if(Ft<0||Ft===1/0)return;de.setup(G,z,ge,X,be);let Mt,_t=Y;if(be!==null&&(Mt=b.get(be),_t=ne,_t.setIndex(Mt)),G.isMesh)z.wireframe===!0?(re.setLineWidth(z.wireframeLinewidth*ye()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(G.isLine){let tn=z.linewidth;tn===void 0&&(tn=1),re.setLineWidth(tn*ye()),G.isLineSegments?_t.setMode(P.LINES):G.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else G.isPoints?_t.setMode(P.POINTS):G.isSprite&&_t.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let tn=G._multiDrawStarts,Le=G._multiDrawCounts,ln=G._multiDrawCount,ft=be?b.get(be).bytesPerElement:1,ss=Te.get(z).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)ss.setValue(P,"_gl_DrawID",nn),_t.render(tn[nn]/ft,Le[nn])}else if(G.isInstancedMesh)_t.renderInstances(Pe,Ft,G.count);else if(X.isInstancedBufferGeometry){let tn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,tn);_t.renderInstances(Pe,Ft,Le)}else _t.render(Pe,Ft)};function mu(w,D,X,z){O!==null&&w.isNodeMaterial&&O.setObject(z,w),We===!0&&J.setState(w,X,!1),w.transparent===!0&&w.side===Vt&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,Cr(w,D,z),w.side=ri,w.needsUpdate=!0,Cr(w,D,z),w.side=Vt):Cr(w,D,z)}this.compile=function(w,D,X=null){X===null&&(X=w),O!==null&&O.renderStart(w,D,X),E=Z.get(X),E.init(D),y.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),wt=this.localClippingEnabled,We=J.init(this.clippingPlanes,wt),We===!0&&J.setGlobalState(this.clippingPlanes,D),O!==null&&me.render(E.state.shadowsArray,X,D);let z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _e=G.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let ge=_e[Ce];mu(ge,X,D,G),z.add(ge)}else mu(_e,X,D,G),z.add(_e)}),E=y.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(w,D,X=null){let z=this.compile(w,D,X);return new Promise(G=>{function _e(){if(z.forEach(function(Ce){let be=Te.get(Ce).currentProgram;(be===void 0||be.isReady())&&z.delete(Ce)}),z.size===0){G(w);return}setTimeout(_e,10)}tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let nc=null;function vp(w){nc&&nc(w)}function gu(){is.stop()}function xu(){is.start()}let is=new yf;is.setAnimationLoop(vp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(w){nc=w,ie.setAnimationLoop(w),w===null?is.stop():is.start()},ie.addEventListener("sessionstart",gu),ie.addEventListener("sessionend",xu),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(w,D);let X=ie.enabled===!0&&ie.isPresenting===!0,z=C!==null&&(se===null||X)&&C.begin(R,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,D,se),E=Z.get(w,y.length),E.init(D),E.state.textureUnits=Ue.getTextureUnits(),y.push(E),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ve.setFromArrayCamera(D):Be.setFromProjectionMatrix(dt,wn,D.reversedDepth),wt=this.localClippingEnabled,We=J.init(this.clippingPlanes,wt),T=fe.get(w,m.length),T.init(),m.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&ic(Ce,D,-1/0,R.sortObjects)}ic(w,D,0,R.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Xe,ae),te=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,te&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),We===!0&&J.beginShadows();let G=E.state.shadowsArray;if(me.render(G,w,D),We===!0&&J.endShadows(),(z&&C.hasRenderPass())===!1){let Ce=T.opaque,ge=T.transmissive;if(E.setupLights(),D.isArrayCamera){let be=D.cameras;if(ge.length>0)for(let Fe=0,je=be.length;Fe<je;Fe++){let at=be[Fe];vu(Ce,ge,w,at)}te&&L.render(w);for(let Fe=0,je=be.length;Fe<je;Fe++){let at=be[Fe];_u(T,w,at,at.viewport)}}else ge.length>0&&vu(Ce,ge,w,D),te&&L.render(w),_u(T,w,D)}se!==null&&V===0&&(Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se)),z&&C.end(R),w.isScene===!0&&w.onAfterRender(R,w,D),de.resetDefaultState(),H=-1,K=null,y.pop(),y.length>0?(E=y[y.length-1],Ue.setTextureUnits(E.state.textureUnits),We===!0&&J.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?T=m[m.length-1]:T=null,O!==null&&O.renderEnd()};function ic(w,D,X,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Ce=D.isArrayCamera?Ve:Be;if(!w.frustumCulled||w.intersectsFrustum(Ce)){z&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let ge=oe.update(w),be=w.material;be.visible&&T.push(w,ge,be,X,U.z,null,D)}}else if(w.isMesh||w.isLine||w.isPoints){let Ce=D.isArrayCamera?Ve:Be;if(!w.frustumCulled||w.intersectsFrustum(Ce)){let ge=oe.update(w),be=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),U.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),U.copy(ge.boundingSphere.center)),U.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(be)){let Fe=ge.groups;for(let je=0,at=Fe.length;je<at;je++){let Pe=Fe[je],ot=be[Pe.materialIndex];ot&&ot.visible&&T.push(w,ge,ot,X,U.z,Pe,D)}}else be.visible&&T.push(w,ge,be,X,U.z,null,D)}}}let _e=w.children;for(let Ce=0,ge=_e.length;Ce<ge;Ce++)ic(_e[Ce],D,X,z)}function _u(w,D,X,z){let{opaque:G,transmissive:_e,transparent:Ce}=w;E.setupLightsView(X),We===!0&&J.setGlobalState(R.clippingPlanes,X),z&&re.viewport(ee.copy(z)),G.length>0&&Ba(G,D,X),_e.length>0&&Ba(_e,D,X),Ce.length>0&&Ba(Ce,D,X),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function vu(w,D,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Pe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new vn(1,1,{generateMipmaps:!0,type:Pe?$n:gn,minFilter:Rn,samples:Math.max(4,Je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let _e=E.state.transmissionRenderTarget[z.id],Ce=z.viewport||ee;_e.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let ge=R.getRenderTarget(),be=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(q),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),te&&L.render(X);let je=R.toneMapping;R.toneMapping=ai;let at=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),We===!0&&J.setGlobalState(R.clippingPlanes,z),Ba(w,X,z),Ue.updateMultisampleRenderTarget(_e),Ue.updateRenderTargetMipmap(_e),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ot=0,Ft=D.length;ot<Ft;ot++){let Mt=D[ot],{object:_t,geometry:tn,material:Le,group:ln}=Mt;if(Le.side===Vt&&_t.layers.test(z.layers)){let ft=Le.side;Le.side=Lt,Le.needsUpdate=!0,yu(_t,X,z,tn,Le,ln),Le.side=ft,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ue.updateMultisampleRenderTarget(_e),Ue.updateRenderTargetMipmap(_e))}R.setRenderTarget(ge,be,Fe),R.setClearColor(q,xe),at!==void 0&&(z.viewport=at),R.toneMapping=je}function Ba(w,D,X){let z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,_e=w.length;G<_e;G++){let Ce=w[G],{object:ge,geometry:be,group:Fe}=Ce,je=Ce.material;je.allowOverride===!0&&z!==null&&(je=z),ge.layers.test(X.layers)&&yu(ge,D,X,be,je,Fe)}}function yu(w,D,X,z,G,_e){O!==null&&G.isNodeMaterial&&O.setObject(w,G),w.onBeforeRender(R,D,X,z,G,_e),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,D,X,z,w,_e),G.transparent===!0&&G.side===Vt&&G.forceSinglePass===!1?(G.side=Lt,G.needsUpdate=!0,R.renderBufferDirect(X,D,z,G,w,_e),G.side=ri,G.needsUpdate=!0,R.renderBufferDirect(X,D,z,G,w,_e),G.side=Vt):R.renderBufferDirect(X,D,z,G,w,_e),w.onAfterRender(R,D,X,z,G,_e)}function Mu(w){let D=0;for(let X of w)X.texture!==null&&D++;return D}function Cr(w,D,X){D.isScene!==!0&&(D=ce);let z=Te.get(w),G=E.state.lights,_e=E.state.shadowsArray,Ce=G.state.version,ge=Q.getParameters(w,G.state,_e,D,X,E.state.lightProbeGridArray),be=Q.getProgramCacheKey(ge),Fe=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=A.get(w.envMap||z.environment,je),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",mt),Fe=new Map,z.programs=Fe,z.programVariants=new Map);let at=Fe.get(be);if(at!==void 0){if(z.currentProgram===at&&z.lightsStateVersion===Ce)return bu(w,ge),at}else ge.uniforms=Q.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,X,ge),w.onBeforeCompile(ge,R),at=Q.acquireProgram(ge,be),Fe.set(be,at),z.uniforms=ge.uniforms;let Pe=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=J.uniform),bu(w,ge),z.needsLights=bp(w),z.lightsStateVersion=Ce,z.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Mu(E.state.lightProbeGridArray),z.currentProgram=at,z.uniformsList=null,at}function yp(w,D,X,z,G){let _e=Te.get(w),Ce=_e.currentProgram.id+","+z+","+G,ge=_e.programVariants.get(Ce);return ge===void 0?(ge=Cr(w,D,X),_e.programVariants.set(Ce,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=z,_e.toneMapping=G),ge}function Su(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=mr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function bu(w,D){let X=Te.get(w);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Mp(w,D,X,z,G){D.isScene!==!0&&(D=ce),Ue.resetTextureUnits();let _e=D.fog,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ge=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:it.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Fe=A.get(z.envMap||Ce,be),je=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,at=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,Ft=!!X.morphAttributes.color,Mt=ai;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tn=_t!==void 0?_t.length:0,Le=Te.get(z),ln=E.state.lights;if(We===!0&&(wt===!0||w!==K)){let Et=w===K&&z.id===H;J.setState(z,w,Et)}let ft=!1,ss=!1;z.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==ln.state.version||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Fe||z.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==J.numPlanes||Le.numIntersection!==J.numIntersection)||Le.vertexAlphas!==je||Le.vertexTangents!==at||Le.morphTargets!==Pe||Le.morphNormals!==ot||Le.morphColors!==Ft||Le.morphTargetsCount!==tn||Le.numLightProbeGrids!==Mu(E.state.lightProbeGridArray)?ft=!0:(Le.outputColorSpace!==ge||Le.toneMapping!==Mt)&&(ss=!0):(ft=!0,Le.__version=z.version);let nn=Le.currentProgram;(ft===!0||ss===!0)&&(nn=ss===!0?yp(z,D,G,ge,Mt):Cr(z,D,G),O&&z.isNodeMaterial&&O.onUpdateProgram(z,nn,Le));let ka=!1,Bi=!1,rs=!1,ht=nn.getUniforms(),Jt=Le.uniforms;if(re.useProgram(nn.program)&&(ka=!0,Bi=!0,rs=!0),z.id!==H&&(H=z.id,Bi=!0),ka||K!==w){re.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",w.projectionMatrix),ht.setValue(P,"viewMatrix",w.matrixWorldInverse);let Yt=ht.map.cameraPosition;Yt!==void 0&&Yt.setValue(P,Dt.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,Bi=!0,rs=!0)}if(Le.needsLights&&(ln.state.sunShadowMap.length>0&&ht.setValue(P,"sunShadowMap",ln.state.sunShadowMap,Ue),ln.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",ln.state.directionalShadowMap,Ue),ln.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",ln.state.spotShadowMap,Ue),ln.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",ln.state.pointShadowMap,Ue)),G.isSkinnedMesh){ht.setOptional(P,G,"bindMatrix"),ht.setOptional(P,G,"bindMatrixInverse");let Et=G.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ht.setValue(P,"boneTexture",Et.boneTexture,Ue))}G.isBatchedMesh&&(ht.setOptional(P,G,"batchingTexture"),ht.setValue(P,"batchingTexture",G._matricesTexture,Ue),ht.setOptional(P,G,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",G._indirectTexture,Ue),ht.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",G._colorsTexture,Ue));let Fn=X.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&j.update(G,X,nn),(Bi||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,ht.setValue(P,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Jt.envMapIntensity.value=D.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=uv()),Bi){if(ht.setValue(P,"toneMappingExposure",R.toneMappingExposure),Le.needsLights&&Sp(Jt,rs),_e&&z.fog===!0&&ue.refreshFogUniforms(Jt,_e),ue.refreshMaterialUniforms(Jt,z,ve,Re,E.state.transmissionRenderTarget[w.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Et=M,Yt=0;for(let fi of E.state.lightProbeGridArray)fi.texture!==null&&(Et.textures[Yt]=fi.texture,Et.min[Yt]=fi.boundingBox.min,Et.max[Yt]=fi.boundingBox.max,Et.resolution[Yt]=fi.resolution,Yt++);for(let fi in Et)Et[fi].length=Yt;Jt.probesSH.value=Et.textures,Jt.probesMin.value=Et.min,Jt.probesMax.value=Et.max,Jt.probesResolution.value=Et.resolution}mr.upload(P,Su(Le),Jt,Ue)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mr.upload(P,Su(Le),Jt,Ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(P,"center",G.center),ht.setValue(P,"modelViewMatrix",G.modelViewMatrix),ht.setValue(P,"normalMatrix",G.normalMatrix),ht.setValue(P,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Et=z.uniformsGroups;for(let Yt=0,fi=Et.length;Yt<fi;Yt++){let Tu=Et[Yt];De.update(Tu,nn),De.bind(Tu,nn)}}return nn}function Sp(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function bp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,D,X){let z=Te.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Te.get(w.texture).__webglTexture=D,Te.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let X=Te.get(w);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,X=0){se=w,$=D,V=X;let z=null,G=!1,_e=!1;if(w){let ge=Te.get(w);if(ge.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(P.FRAMEBUFFER,ge.__webglFramebuffer),ee.copy(w.viewport),Ee.copy(w.scissor),Ne=w.scissorTest,re.viewport(ee),re.scissor(Ee),re.setScissorTest(Ne),H=-1;return}else if(ge.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(ge.__hasExternalTextures)Ue.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let je=w.depthTexture;if(ge.__boundDepthTexture!==je){if(je!==null&&Te.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);let Fe=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?z=Fe[D][X]:z=Fe[D],G=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?z=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[X]:z=Fe,ee.copy(w.viewport),Ee.copy(w.scissor),Ne=w.scissorTest}else ee.copy(le).multiplyScalar(ve).floor(),Ee.copy(Ae).multiplyScalar(ve).floor(),Ne=Ge;if(X!==0&&(z=W),re.bindFramebuffer(P.FRAMEBUFFER,z)&&re.drawBuffers(w,z),re.viewport(ee),re.scissor(Ee),re.setScissorTest(Ne),G){let ge=Te.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,X)}else if(_e){let ge=D;for(let be=0;be<w.textures.length;be++){let Fe=Te.get(w.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Fe.__webglTexture,X,ge)}}else if(w!==null&&X!==0){let ge=Te.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,X)}H=-1};function wu(w){let D=Te.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=Je.textureFormatReadable(w.format),D.__typeReadable=Je.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,X,z,G,_e,Ce,ge=0){if(!(w&&w.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be){re.bindFramebuffer(P.FRAMEBUFFER,be);try{let Fe=w.textures[ge],je=Fe.format,at=Fe.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge);let Pe=wu(Fe);if(Pe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&X>=0&&X<=w.height-G&&P.readPixels(D,X,z,G,he.convert(je),he.convert(at),_e)}finally{let Fe=se!==null?Te.get(se).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,D,X,z,G,_e,Ce,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=w.width-z&&X>=0&&X<=w.height-G){re.bindFramebuffer(P.FRAMEBUFFER,be);let Fe=w.textures[ge],je=Fe.format,at=Fe.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge);let Pe=wu(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),P.readPixels(D,X,z,G,he.convert(je),he.convert(at),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ft=se!==null?Te.get(se).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,Ft);let Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xd(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ot),P.deleteSync(Mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,X=0){let z=Math.pow(2,-X),G=Math.floor(w.image.width*z),_e=Math.floor(w.image.height*z),Ce=D!==null?D.x:0,ge=D!==null?D.y:0;Ue.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Ce,ge,G,_e),re.unbindTexture()},this.copyTextureToTexture=function(w,D,X=null,z=null,G=0,_e=0){let Ce,ge,be,Fe,je,at,Pe,ot,Ft,Mt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(X!==null)Ce=X.max.x-X.min.x,ge=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,je=X.min.y,at=X.isBox3?X.min.z:0;else{let ht=Math.pow(2,-G);Ce=Math.floor(Mt.width*ht),ge=Math.floor(Mt.height*ht),w.isDataArrayTexture?be=Mt.depth:w.isData3DTexture?be=Math.floor(Mt.depth*ht):be=1,Fe=0,je=0,at=0}z!==null?(Pe=z.x,ot=z.y,Ft=z.z):(Pe=0,ot=0,Ft=0);let _t=he.convert(D.format),tn=he.convert(D.type),Le;D.isData3DTexture?(Ue.setTexture3D(D,0),Le=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ue.setTexture2DArray(D,0),Le=P.TEXTURE_2D_ARRAY):(Ue.setTexture2D(D,0),Le=P.TEXTURE_2D),re.activeTexture(P.TEXTURE0),re.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),re.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),re.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let ln=re.getParameter(P.UNPACK_ROW_LENGTH),ft=re.getParameter(P.UNPACK_IMAGE_HEIGHT),ss=re.getParameter(P.UNPACK_SKIP_PIXELS),nn=re.getParameter(P.UNPACK_SKIP_ROWS),ka=re.getParameter(P.UNPACK_SKIP_IMAGES);re.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),re.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),re.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),re.pixelStorei(P.UNPACK_SKIP_ROWS,je),re.pixelStorei(P.UNPACK_SKIP_IMAGES,at);let Bi=w.isDataArrayTexture||w.isData3DTexture,rs=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let ht=Te.get(w),Jt=Te.get(D),Fn=Te.get(ht.__renderTarget),Et=Te.get(Jt.__renderTarget);re.bindFramebuffer(P.READ_FRAMEBUFFER,Fn.__webglFramebuffer),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Yt=0;Yt<be;Yt++)Bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,G,at+Yt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,_e,Ft+Yt)),P.blitFramebuffer(Fe,je,Fe+Ce,je+ge,Pe,ot,Pe+Ce,ot+ge,P.DEPTH_BUFFER_BIT,P.NEAREST);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Te.has(w)){let ht=Te.get(w),Jt=Te.get(D);re.bindFramebuffer(P.READ_FRAMEBUFFER,I),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let Fn=0;Fn<be;Fn++)Bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ht.__webglTexture,G,at+Fn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ht.__webglTexture,G),rs?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,_e,Ft+Fn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jt.__webglTexture,_e),G!==0?P.blitFramebuffer(Fe,je,Fe+Ce,je+ge,Pe,ot,Pe+Ce,ot+ge,P.COLOR_BUFFER_BIT,P.NEAREST):rs?P.copyTexSubImage3D(Le,_e,Pe,ot,Ft+Fn,Fe,je,Ce,ge):P.copyTexSubImage2D(Le,_e,Pe,ot,Fe,je,Ce,ge);re.bindFramebuffer(P.READ_FRAMEBUFFER,null),re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rs?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Le,_e,Pe,ot,Ft,Ce,ge,be,_t,tn,Mt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,_e,Pe,ot,Ft,Ce,ge,be,_t,Mt.data):P.texSubImage3D(Le,_e,Pe,ot,Ft,Ce,ge,be,_t,tn,Mt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_e,Pe,ot,Ce,ge,_t,tn,Mt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_e,Pe,ot,Mt.width,Mt.height,_t,Mt.data):P.texSubImage2D(P.TEXTURE_2D,_e,Pe,ot,Ce,ge,_t,tn,Mt);re.pixelStorei(P.UNPACK_ROW_LENGTH,ln),re.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),re.pixelStorei(P.UNPACK_SKIP_PIXELS,ss),re.pixelStorei(P.UNPACK_SKIP_ROWS,nn),re.pixelStorei(P.UNPACK_SKIP_IMAGES,ka),_e===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&P.generateMipmap(Le),re.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),re.unbindTexture()},this.resetState=function(){$=0,V=0,se=null,re.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Ts={title:"RED FRONTIER",subtitle:"Mars Mission Designer",tagline:"Design it. Simulate it. Explore it. Learn from it.",version:"Demo v1.0 \u2014 NASA Space Apps Challenge"},It={g:3.721,solarConstant:586,solDurationH:24.66,pressureMinPa:685,pressureMaxPa:780,airTempMinC:-70,airTempMaxC:6,radiation_mSv_day:.64,radiation_mGy_day:.21,latitudeDeg:-4.5},Pf=[["Radiation 0.64 mSv/day, 0.21 mGy/day","NASA open data \u2014 MSL RAD surface measurements (NASA Planetary Data System)"],["Pressure 685\u2013780 Pa daily cycle","NASA open data \u2014 MSL REMS environmental records (NASA PDS Atmospheres Node)"],["Air temperature \u221270 \xB0C pre-dawn to +6 \xB0C afternoon","NASA open data \u2014 MSL REMS environmental records (NASA PDS Atmospheres Node)"],["MMRTG 110 W electric, 45 kg, ~2,000 W thermal","NASA open data \u2014 MMRTG fact sheet (NASA Science)"],["Rover loads: 45\u201370 W asleep, \u2265150 W awake, up to 500 W driving","NASA/JPL open data \u2014 Mars Science Laboratory mission documentation"],["Top speed 0.04 m/s, 50 cm wheels, 30\xB0 tilt limit","NASA/JPL open data \u2014 MSL rover overview"],["Mars surface gravity 3.721 m/s\xB2, solar constant ~586 W/m\xB2","NASA open data \u2014 Mars Fact Sheet (NSSDCA)"],["Rock composition (SiO\u2082 ~41\u201346 %, FeO ~18\u201320 %) of Gale mudstone/sand","NASA open data \u2014 MSL ChemCam & APXS results (NASA PDS Geosciences Node)"],["Subsurface water-equivalent hydrogen ~2\u20135 wt%","NASA open data \u2014 MSL DAN results (NASA PDS Geosciences Node)"]],Xt={bedrock:{name:"Bedrock",crr:.05,mu:.8,damage:.1,color:[.62,.46,.36]},gravel:{name:"Gravel plain",crr:.09,mu:.65,damage:.12,color:[.55,.33,.21]},sand:{name:"Loose sand",crr:.2,mu:.45,damage:0,color:[.7,.42,.24]},rocky:{name:"Rock field",crr:.12,mu:.7,damage:1.6,color:[.4,.27,.2]}},Di={chassis:{label:"Chassis",icon:"\u25A3",single:!0,help:"The body, computer and thermal box. Bigger chassis carry more payload but weigh more \u2014 and weight costs energy on every metre.",options:[{id:"light",name:"Scout (MER-class)",mass:140,cost:150,baseLoad:70,sleepLoad:25,payload:50,scale:.62,desc:"Small & efficient like Spirit/Opportunity (185 kg). Very limited payload."},{id:"medium",name:"Explorer",mass:360,cost:330,baseLoad:110,sleepLoad:40,payload:130,scale:.82,desc:"Balanced mid-size platform."},{id:"heavy",name:"Laboratory (MSL-class)",mass:640,cost:520,baseLoad:150,sleepLoad:55,payload:260,scale:1,doc:!0,desc:"Curiosity-class (899 kg total). Carries a full lab \u2014 but needs \u2265150 W just to stay awake."}]},wheels:{label:"Wheels",icon:"\u25CE",single:!0,help:"Wheels decide rolling resistance (energy), grip (max slope) and how well you survive sharp rocks.",options:[{id:"std",name:"Aluminium 50 cm",mass:24,cost:20,sandCrr:1,grip:1,durability:1,speed:.04,radius:1,width:1,color:10132122,doc:!0,desc:"Curiosity heritage. Good all-rounder, but thin skin gets punctured by sharp rocks."},{id:"grouser",name:"Large grouser 70 cm",mass:42,cost:35,sandCrr:.65,grip:1.25,durability:1.3,speed:.05,radius:1.35,width:1.2,color:7171437,desc:"Big cleated wheels float on sand and climb steep slopes. Heavy and power hungry to turn."},{id:"narrow",name:"Narrow light 40 cm",mass:12,cost:12,sandCrr:1.6,grip:.85,durability:.7,speed:.045,radius:.8,width:.65,color:12105912,desc:"Lightest option. Sinks in sand and struggles on slopes."},{id:"mesh",name:"Shape-memory mesh tyre",mass:30,cost:60,sandCrr:.8,grip:1.15,durability:2,speed:.045,radius:1.1,width:1,color:13220234,desc:'NASA Glenn "superelastic" tyre concept. Flexes over sharp rocks without damage. Expensive.'}]},solar:{label:"Solar Panels",icon:"\u25A4",single:!0,help:"Free energy from the Sun \u2014 but output drops with sun angle and dust in the air (optical depth \u03C4).",options:[{id:"none",name:"No solar panels",mass:0,cost:0,area:0,desc:"Rely on battery and/or RTG only."},{id:"s2",name:"Solar array 2 m\xB2",mass:9,cost:25,area:2,desc:"~160 W at noon in clear skies."},{id:"s4",name:"Solar array 4 m\xB2",mass:18,cost:45,area:4,desc:"~330 W at noon in clear skies."},{id:"s6",name:"Solar array 6 m\xB2",mass:28,cost:70,area:6,desc:"~490 W at noon. Large wings add mass."}]},rtg:{label:"Nuclear Power",icon:"\u2622",single:!0,help:"An MMRTG makes steady power day & night, in any dust storm, and its waste heat keeps electronics warm.",options:[{id:"none",name:"No RTG",mass:0,cost:0,power:0,heat:!1,desc:"Lighter and cheaper."},{id:"mmrtg",name:"MMRTG (110 W)",mass:45,cost:110,power:110,heat:!0,doc:!0,desc:"110 W electric + ~2,000 W of heat from plutonium-238 decay. 45 kg."}]},battery:{label:"Battery",icon:"\u25AE",single:!0,help:"Lithium-ion batteries (~100 Wh/kg at pack level) buffer peaks like driving (up to 500 W).",options:[{id:"b06",name:"Li-ion 0.6 kWh",mass:6,cost:8,capacity:600,desc:"Light. Little margin."},{id:"b12",name:"Li-ion 1.2 kWh",mass:12,cost:14,capacity:1200,desc:"Similar to one Curiosity battery (42 Ah \xD7 28 V)."},{id:"b24",name:"Li-ion 2.4 kWh",mass:24,cost:26,capacity:2400,doc:!0,desc:"Curiosity-like pair of 42 Ah batteries."},{id:"b36",name:"Li-ion 3.6 kWh",mass:36,cost:38,capacity:3600,desc:"Big reserve, heavy."}]},cameras:{label:"Cameras",icon:"\u25C9",single:!1,help:"Cameras support navigation and imaging science. Hazcams detect dangerous rocks automatically.",options:[{id:"navcam",name:"Navcam (stereo B/W)",mass:1.5,cost:6,power:8,payloadUse:!0,desc:"Wide-angle stereo. Basic images of targets."},{id:"hazcam",name:"Hazcams (4\xD7)",mass:2.5,cost:8,power:10,payloadUse:!0,desc:"Detects hazardous rocks \u2014 reduces wheel damage and shows hazards on the HUD."},{id:"mastcam",name:"Mastcam (colour zoom)",mass:4,cost:20,power:20,payloadUse:!0,desc:"High-res colour panoramas. Needed for full imaging science."}]},instruments:{label:"Science Sensors",icon:"\u2726",single:!1,help:"Each science target needs specific instruments. No instrument = no data.",options:[{id:"rems",name:"Weather station (REMS-type)",mass:1.3,cost:10,power:15,payloadUse:!0,desc:"Air temperature, pressure, wind, humidity, UV."},{id:"rad",name:"Radiation detector (RAD-type)",mass:1.6,cost:15,power:4,payloadUse:!0,desc:"Cosmic-ray & solar-particle dose."},{id:"chemcam",name:"Laser spectrometer (ChemCam-type)",mass:10,cost:40,power:60,payloadUse:!0,desc:"Zaps rocks up to 7 m away and reads elemental composition."},{id:"dan",name:"Neutron detector (DAN-type)",mass:4.5,cost:15,power:15,payloadUse:!0,desc:"Measures hydrogen (water) down to ~60 cm below the surface."},{id:"gpr",name:"Ground radar (RIMFAX-type)",mass:3,cost:25,power:10,payloadUse:!0,desc:"Images rock layers up to 10 m underground."}]},comms:{label:"Communication",icon:"\u2301",single:!0,help:"Science only counts once it reaches Earth. Relay via orbiters is fast but only during passes.",options:[{id:"uhf",name:"UHF relay antenna",mass:2,cost:10,txPower:15,relay:!0,dte:!1,desc:"Sends up to 250 Mb per orbiter pass (MRO 11:30, MAVEN 16:00 daily). 15 W."},{id:"hga",name:"High-gain dish (X-band)",mass:30,cost:30,txPower:100,relay:!1,dte:!0,desc:"Direct-to-Earth any time, but slow (~40 Mb/hour) and draws 100 W while sending."},{id:"both",name:"UHF + High-gain (like Curiosity)",mass:32,cost:38,txPower:100,relay:!0,dte:!0,doc:!0,desc:"Best coverage, highest mass."}]},arm:{label:"Robotic Arm",icon:"\u27DF",single:!0,help:"Physical samples need an arm. Drilling rock cores needs the heavy arm with a drill.",options:[{id:"none",name:"No arm",mass:0,cost:0,power:0,scoop:!1,drill:!1,apxs:!1,payloadUse:!0,desc:"No samples possible."},{id:"scoop",name:"Light arm + scoop",mass:12,cost:25,power:40,scoop:!0,drill:!1,apxs:!0,payloadUse:!0,desc:"Collects loose soil/sand. Carries an APXS contact spectrometer."},{id:"drill",name:"Heavy arm + drill (MSL-type)",mass:34,cost:60,power:120,scoop:!0,drill:!0,apxs:!0,payloadUse:!0,doc:!0,desc:"2.1 m arm with percussion drill, scoop and APXS. Heavy."}]}},Lf=["chassis","wheels","solar","rtg","battery","cameras","instruments","comms","arm"],Nf={chassis:"medium",wheels:"std",solar:"s4",rtg:"none",battery:"b12",cameras:["navcam"],instruments:["rems"],comms:"uhf",arm:"scoop"},Dl=900,pe={id:"mars-gale",name:"Operation Aeolis",site:"Gale Crater \u2014 Aeolis Palus (4.5\xB0 S, 137.4\xB0 E)",sols:3,startHour:9,endHour:17.5,secPerHour:3699,timeScale:100,landing:{x:-300,z:280},dust:{tauStart:.6,tauStorm:1.6,stormStart:13,stormPeak:15,clearBy:63},relayPasses:[{t:11.5,name:"MRO",capacityMb:250},{t:16,name:"MAVEN",capacityMb:200}],targets:[{id:"T1",name:"Yellowknife Layers",x:-110,z:120,kind:"Ancient lakebed mudstone",blurb:"Fine-grained layered rock that formed at the bottom of an ancient lake.",tasks:[{id:"img",label:"Image the layers",needs:["mastcam|navcam"],dataMb:60,points:10},{id:"chem",label:"Rock composition",needs:["chemcam|apxs"],dataMb:12,points:20},{id:"core",label:"Drill a rock core",needs:["drill"],dataMb:20,points:30,sample:!0}]},{id:"T2",name:"Bagnold Dunes",x:150,z:210,kind:"Active basaltic sand dunes",blurb:"Dark, wind-blown sand. Loose and dangerous to drive in.",tasks:[{id:"wx",label:"Weather & wind record",needs:["rems"],dataMb:4,points:15},{id:"scoop",label:"Scoop a sand sample",needs:["scoop"],dataMb:10,points:25,sample:!0},{id:"img",label:"Image ripple pattern",needs:["mastcam|navcam"],dataMb:40,points:10}]},{id:"T3",name:"Vera Rubin Ridge",x:170,z:-130,kind:"Hematite-bearing ridge",blurb:"A resistant ridge that hints at water flowing through the rock long ago.",tasks:[{id:"h2o",label:"Subsurface water scan",needs:["dan|gpr"],dataMb:15,points:25},{id:"chem",label:"Rock composition",needs:["chemcam|apxs"],dataMb:12,points:20}]},{id:"T4",name:"Rim Overlook",x:-190,z:-210,kind:"Elevated crater rim",blurb:"High ground with a view across the crater floor.",tasks:[{id:"rad",label:"Radiation dose",needs:["rad"],dataMb:2,points:20},{id:"pano",label:"360\xB0 colour panorama",needs:["mastcam"],dataMb:90,points:15},{id:"wx",label:"Weather record",needs:["rems"],dataMb:4,points:10}]}]},Df=[{id:"earth",name:"Earth Observation",diff:"Easy",locked:!0,planet:"earth",desc:"Design a satellite to monitor climate & land use.",skills:["Orbits","Remote sensing"]},{id:"moon",name:"Lunar South Pole",diff:"Medium",locked:!0,planet:"moon",desc:"Prospect for water ice in permanently shadowed craters.",skills:["Thermal design","Power"]},{id:"mars",name:"Mars Exploration",diff:"Hard",locked:!1,planet:"mars",desc:"Design a rover, plan a traverse in Gale Crater and return science.",skills:["Power budget","Mobility","Science ops"]}];function Rh(i,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pr||e===Sa){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===pr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Ff(i){let e=new Map,t=new Map,n=i.clone();return Uf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(h){return t.get(h)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Uf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Uf(i.children[n],e.children[n],t)}var Fl=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Ul(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ul(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(e);a=Pi.resolveURL(c,this.path)}else a=Pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},h=new ar(this.manager);h.setPriority(this.priority),h.setCache(this.cache),h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},h=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===Hf){try{a[st.KHR_BINARY_GLTF]=new Zh(e)}catch(d){s&&s(d);return}r=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(h.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new iu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],l=r.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:a[d]=new Nh;break;case st.KHR_DRACO_MESH_COMPRESSION:a[d]=new Jh(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[d]=new jh;break;case st.KHR_MESH_QUANTIZATION:a[d]=new Qh;break;default:l.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function dv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Rt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lh=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,h=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);h.color!==void 0&&u.setRGB(h.color[0],h.color[1],h.color[2],hn);let d=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new An(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ii(u),c.distance=d;break;case"spot":c=new ca(u),c.distance=d,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),hi(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return n._getNodeRef(t.cache,o,h)})}},Nh=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},Dh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(r,r)}return Promise.all(s)}},Uh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Oh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],hn),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],hn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},$h=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},qh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],h=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(h=c)}return n.loadTextureImage(e,a.source,h)}},Yh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],h=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(h=c)}return n.loadTextureImage(e,a.source,h)}},Ul=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let h=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,l=new Uint8Array(o,h,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,l,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,l,s.mode,s.filter),f})})}else return null}},Kh=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],h={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(h[c]=u,h[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],l=c[0].count,f=[];for(let x of d){let _=new Ye,g=new F,p=new jt,v=new F(1,1,1),S=new bi(x.geometry,x.material,l);for(let T=0;T<l;T++)h.TRANSLATION&&g.fromBufferAttribute(h.TRANSLATION,T),h.ROTATION&&p.fromBufferAttribute(h.ROTATION,T),h.SCALE&&v.fromBufferAttribute(h.SCALE,T),S.setMatrixAt(T,_.compose(g,p,v));let M=null;for(let T in h)if(T==="_COLOR_0"){let E=h[T];S.instanceColor=new Si(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(M===null){let m=S.geometry;M=new xt,M.name=m.name;for(let y in m.attributes)M.setAttribute(y,m.attributes[y]);for(let y in m.morphAttributes)M.morphAttributes[y]=m.morphAttributes[y];m.index!==null&&M.setIndex(m.index),M.morphTargetsRelative=m.morphTargetsRelative;for(let y of m.groups)M.addGroup(y.start,y.count,y.materialIndex);m.boundingBox!==null&&(M.boundingBox=m.boundingBox.clone()),m.boundingSphere!==null&&(M.boundingSphere=m.boundingSphere.clone()),M.drawRange.start=m.drawRange.start,M.drawRange.count=m.drawRange.count,M.userData=Object.assign({},m.userData),S.geometry=M}let E=h[T];M.setAttribute(T,new Si(E.array,E.itemSize,E.normalized))}St.prototype.copy.call(S,x),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Hf="glTF",Ra=12,Of={JSON:1313821514,BIN:5130562},Zh=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ra,r=new DataView(e,Ra),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let h=r.getUint32(a,!0);if(a+=4,h===Of.JSON){let c=new Uint8Array(e,Ra+a,o);this.content=n.decode(c)}else if(h===Of.BIN){let c=Ra+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},h={},c={};for(let u in a){let d=tu[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=tu[u]||u.toLowerCase();if(a[u]!==void 0){let l=n.accessors[e.attributes[u]],f=vr[l.componentType];c[d]=f.name,h[d]=l.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,l){s.decodeDracoFile(u,function(f){for(let x in f.attributes){let _=f.attributes[x],g=h[x];g!==void 0&&(_.normalized=g)}d(f)},o,c,hn,l)})})}},jh=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qh=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Ol=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=o*2,c=o*3,u=s-t,d=(n-t)/u,l=d*d,f=l*d,x=e*c,_=x-c,g=-2*f+3*l,p=f-l,v=1-g,S=p-l+d;for(let M=0;M!==o;M++){let T=a[_+M+o],E=a[_+M+h]*u,m=a[x+M+o],y=a[x+M]*u;r[M]=v*T+S*E+g*m+p*y}return r}},fv=new jt,eu=class extends Ol{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return fv.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:Pt,9729:zt,9984:Vo,9985:dr,9986:Ss,9987:Rn},kf={33071:bn,33648:qs,10497:Tn},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pv={CUBICSPLINE:void 0,LINEAR:ds,STEP:us},Ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function Es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],h=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let l=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(l)}if(s){let l=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(l)}if(r){let l=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;h.push(l)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h)]).then(function(c){let u=c[0],d=c[1],l=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=l),i.morphTargetsRelative=!0,i})}function xv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _v(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ph(t.attributes):e=i.indices+":"+Ph(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ph(i.targets[n]);return e}function Ph(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yv=new Ye,iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let h=o.match(/Version\/(\d+)/);s=n&&h?parseInt(h[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new oa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ua(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ar(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Es(r,o,s),hi(o,s),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){for(let h of o.scenes)h.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,h=a.length;o<h;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let h=this.associations.get(a);h!=null&&this.associations.set(o,h);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Pi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ch[s.type],o=vr[s.componentType],h=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new yt(c,a,h))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],h=Ch[s.type],c=vr[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*h,l=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,_,g;if(f&&f!==d){let p=Math.floor(l/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(v);S||(_=new c(o,p*f,s.count*f/u),S=new Qs(_,f/u),t.cache.add(v,S)),g=new er(S,h,l%f/u,x)}else o===null?_=new c(s.count*h):_=new c(o,l,s.count*h),g=new yt(_,h,x);if(s.sparse!==void 0){let p=Ch.SCALAR,v=vr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,T=new v(a[1],S,s.sparse.count*p),E=new c(a[2],M,s.sparse.count*h);o!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let m=0,y=T.length;m<y;m++){let C=T[m];if(g.setX(C,E[m*h]),h>=2&&g.setY(C,E[m*h+1]),h>=3&&g.setZ(C,E[m*h+2]),h>=4&&g.setW(C,E[m*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let h=n.manager.getHandler(a.uri);h!==null&&(o=h)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],h=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let l=(r.samplers||{})[a.sampler]||{};return u.magFilter=Bf[l.magFilter]||zt,u.minFilter=Bf[l.minFilter]||Rn,u.wrapS=kf[l.wrapS]||Tn,u.wrapT=kf[l.wrapT]||Tn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pt&&u.minFilter!==zt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());let a=s.images[e],o=self.URL||self.webkitURL,h=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(l){return new Promise(function(f,x){t.parse(l,f,x)})});else{if(a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(l){c=!0;let f=new Blob([l],{type:a.mimeType});return h=o.createObjectURL(f),h});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(h).then(function(l){return new Promise(function(f,x){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let p=new Ht(g);p.needsUpdate=!0,f(p)}),t.load(Pi.resolveURL(l,r.path),_,void 0,x)})})}let d=u.then(function(l){return c===!0&&o.revokeObjectURL(h),hi(l,a),l.userData.mimeType=a.mimeType||vv(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),l});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=r.associations.get(a);a=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,h)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,h=this.cache.get(o);h||(h=new Hn,un.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(o,h)),n=h}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,h=this.cache.get(o);h||(h=new qi,un.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(o,h)),n=h}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=n.clone(),r&&(h.vertexColors=!0),a&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return ut}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},h=r.extensions||{},c=[];if(h[st.KHR_MATERIALS_UNLIT]){let d=s[st.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let l=d.baseColorFactor;o.color.setRGB(l[0],l[1],l[2],hn),o.opacity=l[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Tt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(l){return l.getMaterialType&&l.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(l){return l.extendMaterialParams&&l.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let u=r.alphaMode||Ih.OPAQUE;if(u===Ih.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ih.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ot){let d=r.emissiveFactor;o.emissive=new Ie().setRGB(d[0],d[1],d[2],hn)}return r.emissiveTexture!==void 0&&a!==Ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),hi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Es(s,d,r),d})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(h){return zf(h,o,t)})}let a=[];for(let o=0,h=e.length;o<h;o++){let c=e[o],u=_v(c),d=s[u];if(d)a.push(d.promise);else{let l;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?l=r(c):l=zf(new xt,c,t),c.mode===In.TRIANGLE_STRIP?l=l.then(f=>Rh(f,Sa)):c.mode===In.TRIANGLE_FAN&&(l=l.then(f=>Rh(f,pr))),s[u]={primitive:c,promise:l},a.push(l)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let h=0,c=a.length;h<c;h++){let u=a[h].material===void 0?mv(this.cache):this.getDependency("material",a[h].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(h){let c=h.slice(0,h.length-1),u=h[h.length-1],d=[];for(let f=0,x=u.length;f<x;f++){let _=u[f],g=a[f],p,v=c[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&M?new Kr(_,v):new He(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===In.LINES)p=new ir(_,v);else if(g.mode===In.LINE_STRIP)p=new wi(_,v);else if(g.mode===In.LINE_LOOP)p=new Jr(_,v);else if(g.mode===In.POINTS)p=new ti(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&xv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),g.extensions&&Es(s,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,x=d.length;f<x;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Es(s,d[0],r),d[0];let l=new kt;r.extensions&&Es(s,l,r),t.associations.set(l,{meshes:e});for(let f=0,x=d.length;f<x;f++)l.add(d[f]);return l})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(Rl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new xs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],h=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let l=new Ye;r!==null&&l.fromArray(r.array,c*16),h.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zr(o,h)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],h=[],c=[],u=[];for(let d=0,l=s.channels.length;d<l;d++){let f=s.channels[d],x=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),h.push(this.getDependency("accessor",v)),c.push(x),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h),Promise.all(c),Promise.all(u)]).then(function(d){let l=d[0],f=d[1],x=d[2],_=d[3],g=d[4],p=[];for(let S=0,M=l.length;S<M;S++){let T=l[S],E=f[S],m=x[S],y=_[S],C=g[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,E,m,y,C);if(R)for(let N=0;N<R.length;N++)p.push(R[N])}let v=new aa(r,void 0,p);return hi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let h=0,c=s.weights.length;h<c;h++)o.morphTargetInfluences[h]=s.weights[h]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let h=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),h]).then(function(c){let u=c[0],d=c[1],l=c[2];l!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(l,yv)});for(let f=0,x=d.length;f<x;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){let f=u.userData.pivot,x=d[0];u.pivot=new F().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],x.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],h=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return h&&o.push(h),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new tr:c.length>1?u=new kt:c.length===1?u=c[0]:u=new St,u!==c[0])for(let d=0,l=c.length;d<l;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),hi(u,r),r.extensions&&Es(n,u,r),r.matrix!==void 0){let d=new Ye;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),hi(r,n),n.extensions&&Es(t,r,n);let a=n.nodes||[],o=[];for(let h=0,c=a.length;h<c;h++)o.push(s.getDependency("node",a[h]));return Promise.all(o).then(function(h){for(let u=0,d=h.length;u<d;u++){let l=h[u];l.parent!==null?r.add(Ff(l)):r.add(l)}let c=u=>{let d=new Map;for(let[l,f]of s.associations)(l instanceof un||l instanceof Ht)&&d.set(l,f);return u.traverse(l=>{let f=s.associations.get(l);f!=null&&d.set(l,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,h=[];function c(f){f.morphTargetInfluences&&h.push(f.name?f.name:f.uuid)}ji[r.path]===ji.weights?(c(e),e.isGroup&&e.children.forEach(c)):h.push(o);let u;switch(ji[r.path]){case ji.weights:u=Ai;break;case ji.rotation:u=Ri;break;case ji.translation:case ji.scale:u=Ki;break;default:n.itemSize===1?u=Ai:u=Ki;break}let d=s.interpolation!==void 0?pv[s.interpolation]:ds,l=this._getArrayFromAccessor(n);for(let f=0,x=h.length;f<x;f++){let _=new u(h[f]+"."+ji[r.path],t.array,l,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ri?eu:Ol;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Mv(i,e,t){let n=e.attributes,s=new yn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],h=o.min,c=o.max;if(h!==void 0&&c!==void 0){if(s.set(new F(h[0],h[1],h[2]),new F(c[0],c[1],c[2])),o.normalized){let u=nu(vr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,h=new F;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let l=t.json.accessors[d.POSITION],f=l.min,x=l.max;if(f!==void 0&&x!==void 0){if(h.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),h.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),h.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),l.normalized){let _=nu(vr[l.componentType]);h.multiplyScalar(_)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function zf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(h){i.setAttribute(o,h)})}for(let a in n){let o=tu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return it.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),hi(i,e),Mv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?gv(i,e.targets,t):i})}var yr=.2,Sv=.5,Gf=30,bv=-40,wv=.6,qn=3699/3600,Pn=i=>(i%24+24)%24,Ct=i=>Math.floor(i/24)+1,Fi=(i,e)=>Di[i].options.find(t=>t.id===e);function Yn(i){return{chassis:Fi("chassis",i.chassis),wheels:Fi("wheels",i.wheels),solar:Fi("solar",i.solar),rtg:Fi("rtg",i.rtg),battery:Fi("battery",i.battery),cameras:i.cameras.map(e=>Fi("cameras",e)),instruments:i.instruments.map(e=>Fi("instruments",e)),comms:Fi("comms",i.comms),arm:Fi("arm",i.arm)}}function ui(i){let e=Yn(i),t=new Set([...i.cameras,...i.instruments]);return e.arm.scoop&&t.add("scoop"),e.arm.drill&&t.add("drill"),e.arm.apxs&&t.add("apxs"),t}function Ln(i,e){return e.split("|").some(t=>i.has(t))}function su(i){let e=Pn(i),t=It.latitudeDeg*Math.PI/180,n=(e-12)*15*Math.PI/180;return Math.max(0,Math.cos(t)*Math.cos(n))}function Kn(i){let e=pe.dust;if(i<e.stormStart)return e.tauStart;if(i<e.stormPeak)return e.tauStart+(e.tauStorm-e.tauStart)*(i-e.stormStart)/(e.stormPeak-e.stormStart);let t=Math.min(1,(i-e.stormPeak)/(e.clearBy-e.stormPeak));return e.tauStorm+(.8-e.tauStorm)*t}function Xn(i,e=Kn(i)){let t=su(i);if(t<=.02)return 0;let n=Math.exp(-e/t);return It.solarConstant*t*(n+.35*(1-n))}function As(i){let e=Pn(i),{airTempMinC:t,airTempMaxC:n}=It,s;if(e>=5.5&&e<=14)s=(1-Math.cos(Math.PI*(e-5.5)/8.5))/2;else{let r=e>14?e-14:e+24-14;s=Math.exp(-r/3.2)*(1-r/15.5*.15)}return t+(n-t)*Math.max(0,s)}function Bl(i){let e=Pn(i),{pressureMinPa:t,pressureMaxPa:n}=It;return(t+n)/2+(n-t)/2*Math.cos((e-6)/24*2*Math.PI*1.2)}function Rs(i){let e=Yn(i),t=[...e.cameras,...e.instruments,e.arm,e.comms],n=t.reduce((B,$)=>B+$.mass,0),s=e.solar.mass+e.rtg.mass+e.battery.mass,r=e.chassis.mass+e.wheels.mass+s+n,a=[e.chassis,e.wheels,e.solar,e.rtg,e.battery,...t].reduce((B,$)=>B+$.cost,0),o=r*It.g,h=e.solar.area*Xn(12,pe.dust.tauStart)*yr,c=e.solar.area*Xn(12,pe.dust.tauStorm)*yr,u=e.rtg.power,d=e.instruments.filter(B=>B.id==="rems"||B.id==="rad").reduce((B,$)=>B+$.power,0),l=e.chassis.baseLoad+d,f=e.cameras.filter(B=>B.id!=="mastcam").reduce((B,$)=>B+$.power,0),x=Mr(i,e,"gravel",0,e.wheels.speed),_=Mr(i,e,"sand",0,e.wheels.speed),g=l+x.total,p=0,v=0,S=0,M=0;for(let B=pe.startHour;B<pe.endHour;B+=.1)p+=(e.solar.area*Xn(B,pe.dust.tauStart)*yr+u)*.1*qn,v+=(l+Qi(e,B))*.1*qn;for(let B=pe.endHour;B<24+pe.startHour;B+=.1){let $=e.chassis.sleepLoad+Qi(e,B)-(e.solar.area*Xn(B,.8)*yr+u);S=Math.max(S,M+=$*.1*qn)}let T=pe.endHour-pe.startHour,E=p/T,m=g-C(),y=m<=0?1/0:e.battery.capacity/m/qn*e.wheels.speed*3.699;function C(){return u+e.solar.area*Xn(12,pe.dust.tauStart)*yr*.7}let R={};for(let B of Object.keys(Xt))R[B]=ru(e,B);let N=ui(i),O=0,W=0;for(let B of pe.targets)for(let $ of B.tasks)O+=$.points,$.needs.every(V=>Ln(N,V))&&(W+=$.points);let I=[];return n>e.chassis.payload&&I.push({lvl:"err",msg:`Payload ${n.toFixed(0)} kg exceeds chassis capacity ${e.chassis.payload} kg`}),a>Dl&&I.push({lvl:"err",msg:`Over budget: $${a}M of $${Dl}M`}),e.solar.area===0&&u===0&&I.push({lvl:"warn",msg:"No power generation \u2014 battery only"}),E<l&&I.push({lvl:"warn",msg:`Average generation ${E.toFixed(0)} W < idle load ${l.toFixed(0)} W`}),!e.comms.relay&&!e.comms.dte&&I.push({lvl:"err",msg:"No communication system"}),R.sand<12&&I.push({lvl:"warn",msg:`Weak in sand: max ${R.sand.toFixed(0)}\xB0 slope`}),W<O*.4&&I.push({lvl:"warn",msg:"Few instruments \u2014 most science targets cannot be measured"}),S>e.battery.capacity*.9&&I.push({lvl:"warn",msg:`Night needs ~${S.toFixed(0)} Wh \u2014 battery ${e.battery.capacity} Wh may not survive`}),e.solar.area>0&&u===0&&I.push({lvl:"info",msg:"Solar-only: watch the afternoon dust forecast (\u03C4 \u2192 1.6)"}),{mass:r,payloadMass:n,payloadCap:e.chassis.payload,powerMass:s,cost:a,budget:Dl,weight:o,solarNoon:h,solarStorm:c,rtgPower:u,avgGen:E,idleLoad:l,driveLoad:g,driveMech:x.mech,sandDrive:_.total,battery:e.battery.capacity,genWh:p,idleWh:v,rangeKm:y,topSpeed:e.wheels.speed,maxSlope:R,scienceMax:O,scienceAvail:W,durability:e.wheels.durability,hazcam:i.cameras.includes("hazcam"),nightNeed:S,sleepLoad:e.chassis.sleepLoad,issues:I,valid:!I.some(B=>B.lvl==="err"),driveCams:f,hours:T}}function Sr(i,e){let n=Xt[e].crr;e==="sand"&&(n*=i.wheels.sandCrr);let s=Math.pow(Vf(i)/500,.25)/Math.sqrt(i.wheels.width*i.wheels.radius);return e==="sand"&&(n*=s),n}function Vf(i){return i.chassis.mass+i.wheels.mass+i.solar.mass+i.rtg.mass+i.battery.mass+[...i.cameras,...i.instruments,i.arm,i.comms].reduce((e,t)=>e+t.mass,0)}function ru(i,e){let n=Xt[e].mu*i.wheels.grip-Sr(i,e);return Math.min(Gf,Math.max(0,Math.atan(n)*180/Math.PI))}function Mr(i,e,t,n,s){let r=Vf(e),a=n*Math.PI/180,o=Sr(e,t),h=r*It.g*(o*Math.cos(a)+Math.max(0,Math.sin(a))),c=Math.max(0,h*s/Sv),u=30+e.wheels.mass*1.2,d=35+e.cameras.filter(l=>l.id!=="mastcam").reduce((l,f)=>l+f.power,0);return{mech:c,motors:u,nav:d,total:c+u+d,force:h,crr:o}}function Qi(i,e){if(i.rtg.heat)return 0;let t=As(e),n=i.chassis.scale;return Math.max(0,(bv+10-t)*wv*n*2)}function Ca(i,e,t){return i.solar.area*Xn(e,t)*yr}function kl(i,e,t){let n=Xt[e],s=Math.abs(t)*Math.PI/180,r=Sr(i,e)+(t>0?Math.tan(s):0),a=n.mu*i.wheels.grip,o=Math.min(1.2,r/a),h=o<.6?1:o>=1?0:1-Math.pow((o-.6)/.4,2);return Math.abs(t)>Gf&&(h=0),{slip:o,speedFrac:h}}function zl(i,e,t){let n=i.cameras.includes("hazcam")?.45:1;return Xt[t].damage*.15/e.wheels.durability*n}var br={img:{hours:.25,power:20},pano:{hours:.6,power:25},chem:{hours:.4,power:60},core:{hours:1.2,power:120},scoop:{hours:.5,power:40},wx:{hours:.3,power:15},h2o:{hours:.4,power:15},rad:{hours:.3,power:5}};function on(i){let e=Pn(i),t=Math.floor(e),n=Math.floor((e-t)*60);return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}var es=null,Hl=null;function Tv(i){let e=atob(i),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return n.buffer}function $f(i){return Hl||(Hl=new Promise((e,t)=>{let n=new Fl,s=r=>{es=Ev(r.scene),e(es)};window.ROVER_GLB?(i?.(.6),setTimeout(()=>{try{n.parse(Tv(window.ROVER_GLB),"",r=>{i?.(1),s(r)},t)}catch(r){t(r)}},30)):n.load("assets/rover.glb",s,r=>i?.(r.total?r.loaded/r.total:.5),t)}),Hl)}function Ev(i){i.updateMatrixWorld(!0);let e=null;i.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.name==="part8"&&(e=n),n.material&&(n.material.envMapIntensity=.9))});let t=[];if(e){let n=e.geometry.clone();n.applyMatrix4(e.matrixWorld);let s=n.index?n.toNonIndexed():n,r=s.attributes.position,a=r.count/3,o=[];for(let l=0;l<r.count;l++)o.push(r.getZ(l));let h=Math.min(...o),c=Math.max(...o),u=Array.from({length:6},()=>[]);for(let l=0;l<a;l++){let f=0,x=0;for(let g=0;g<3;g++)f+=r.getX(l*3+g),x+=r.getZ(l*3+g);f/=3,x/=3;let _=Math.min(2,Math.floor((x-h)/(c-h+1e-6)*3));u[(f>0?3:0)+_].push(l)}let d=Object.keys(s.attributes);for(let l of u){if(!l.length)continue;let f=new xt;for(let _ of d){let g=s.attributes[_],p=new g.array.constructor(l.length*3*g.itemSize);l.forEach((v,S)=>{for(let M=0;M<3;M++)for(let T=0;T<g.itemSize;T++)p[(S*3+M)*g.itemSize+T]=g.array[(v*3+M)*g.itemSize+T]}),f.setAttribute(_,new yt(p,g.itemSize,g.normalized))}f.computeBoundingBox();let x=new F;f.boundingBox.getCenter(x),f.translate(-x.x,-x.y,-x.z),t.push({geo:f,center:x})}return e.parent.remove(e),{scene:i,wheels:t,wheelMat:e.material,wheelRadius:t[0]?t[0].center.y:.25}}return{scene:i,wheels:t,wheelMat:null,wheelRadius:.25}}function Av(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#0a1a3a",e.fillRect(0,0,128,128);for(let n=0;n<8;n++)for(let s=0;s<8;s++){let r=e.createLinearGradient(n*16,s*16,n*16+16,s*16+16);r.addColorStop(0,"#1d3f8a"),r.addColorStop(1,"#0f2556"),e.fillStyle=r,e.fillRect(n*16+1,s*16+1,14,14)}let t=new ni(i);return t.wrapS=t.wrapT=Tn,t.colorSpace=Tt,t}var Wf;function Gl(i){let e=Yn(i),t=new kt,n=new kt;t.add(n);let s=es.scene.clone(!0);n.add(s);let r=e.wheels.radius,a=e.wheels.width,o=es.wheelMat?es.wheelMat.clone():new ut;o.color=new Ie(e.wheels.color);let h=[];for(let f of es.wheels){let x=new He(f.geo,o);x.castShadow=!0,x.position.copy(f.center),x.position.y=f.center.y*r,x.scale.set(a,r,r),n.add(x),h.push(x)}s.position.y=es.wheelRadius*(r-1);let c=e.chassis.scale;if(e.solar.area>0){Wf||=Av();let f=1.5/c,x=e.solar.area/2/1.5/c,_=Wf.clone();_.needsUpdate=!0,_.repeat.set(x*1.5,f*1.5);let g=new ut({map:_,metalness:.6,roughness:.25,emissive:397354}),p=new ut({color:13158600,metalness:.8,roughness:.4});for(let v of[-1,1]){let S=new kt,M=new He(new Gt(x,.03,f),g);M.position.x=v*x/2,M.castShadow=!0;let T=new He(new Gt(x+.04,.02,f+.04),p);T.position.copy(M.position),T.position.y=-.02,S.add(M,T),S.position.set(v*.55,1.42+s.position.y,-.35),S.rotation.z=v*.06,n.add(S)}}let u=Math.round(e.battery.capacity/600),d=new ut({color:16742959,metalness:.3,roughness:.5,emissive:2755840});for(let f=0;f<u;f++){let x=new He(new Gt(.22,.14,.3),d);x.position.set(-.75+f%3*.25,1.2+s.position.y+Math.floor(f/3)*.15,-1.05),x.castShadow=!0,n.add(x)}if(e.comms.dte){let f=new He(new Vn(.42,24,8,0,Math.PI*2,0,.7),new ut({color:15658734,side:Vt,metalness:.4,roughness:.3}));f.rotation.x=Math.PI,f.position.set(.85,1.95+s.position.y,-.7),f.rotation.z=.5;let x=new He(new Gn(.03,.03,.4),new ut({color:8947848}));x.position.set(.85,1.6+s.position.y,-.7),n.add(f,x)}if(e.comms.relay){let f=new He(new Gn(.05,.05,.45,8),new ut({color:16765562,metalness:.7}));f.position.set(-.6,1.6+s.position.y,-.9),n.add(f)}if(i.cameras.includes("hazcam")){let f=new Ot({color:3721471});for(let x of[-.3,.3]){let _=new He(new Vn(.05),f);_.position.set(x,.75+s.position.y,1.35),n.add(_)}}t.scale.setScalar(c);let l=0;return{root:t,body:n,wheels:h,update(f,x){l+=x*f/(es.wheelRadius*r*c);for(let _ of h)_.rotation.x=l}}}var lt=null,Ia=null,Tr=null,Vl=null,ts=null,La=null,Pa=null,wr={master:.7,sfx:.8,music:.5};function Wl(){if(lt)return lt;try{lt=new(window.AudioContext||window.webkitAudioContext),Ia=lt.createGain(),Ia.connect(lt.destination),Tr=lt.createGain(),Tr.connect(Ia),Vl=lt.createGain(),Vl.connect(Ia),au()}catch{lt=null}return lt}function au(){lt&&(Ia.gain.value=wr.master,Tr.gain.value=wr.sfx,Vl.gain.value=wr.music*.35)}function Xf(){Wl(),lt?.state==="suspended"&&lt.resume()}function Ui(i=880,e=.06,t="sine",n=.15){if(!Wl())return;let s=lt.createOscillator(),r=lt.createGain();s.type=t,s.frequency.value=i,r.gain.setValueAtTime(n,lt.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,lt.currentTime+e),s.connect(r),r.connect(Tr),s.start(),s.stop(lt.currentTime+e+.02)}var Nt={click:()=>Ui(1200,.05,"triangle",.12),hover:()=>Ui(1800,.025,"sine",.04),select:()=>{Ui(660,.06,"triangle"),setTimeout(()=>Ui(990,.08,"triangle"),60)},error:()=>{Ui(220,.15,"sawtooth",.08)},success:()=>{[523,659,784,1047].forEach((i,e)=>setTimeout(()=>Ui(i,.18,"triangle",.12),e*110))},fail:()=>{[392,311,262].forEach((i,e)=>setTimeout(()=>Ui(i,.3,"sawtooth",.07),e*180))},scan:()=>{for(let i=0;i<6;i++)setTimeout(()=>Ui(1400+i*120,.04,"square",.04),i*70)},data:()=>Ui(2400,.08,"sine",.08)};function Rv(){let i=lt.createBuffer(1,lt.sampleRate*2,lt.sampleRate),e=i.getChannelData(0),t=0;for(let n=0;n<e.length;n++)t=(t+.02*(Math.random()*2-1))/1.02,e[n]=t*3.5;return i}function qf(){if(!Wl()||ts)return;let i=lt.createBufferSource();i.buffer=Rv(),i.loop=!0;let e=lt.createBiquadFilter();e.type="lowpass",e.frequency.value=500;let t=lt.createGain();t.gain.value=.25,i.connect(e),e.connect(t),t.connect(Tr),i.start();let n=lt.createOscillator(),s=lt.createGain(),r=lt.createBiquadFilter();n.type="sawtooth",n.frequency.value=55,r.type="lowpass",r.frequency.value=300,s.gain.value=0,n.connect(r),r.connect(s),s.connect(Tr),n.start(),ts={src:i,g:t,f:e},La={mo:n,mg:s}}function Yf(i,e){ts&&(ts.g.gain.setTargetAtTime(.12+i*.35,lt.currentTime,.3),ts.f.frequency.setTargetAtTime(350+i*600,lt.currentTime,.3),La.mg.gain.setTargetAtTime(e*.06,lt.currentTime,.1),La.mo.frequency.setTargetAtTime(45+e*35,lt.currentTime,.1))}function ou(){if(ts){try{ts.src.stop(),La.mo.stop()}catch{}ts=La=null}}function $l(){if(!Wl()||Pa)return;Pa=[110,164.81,220,246.94,329.63].map((t,n)=>{let s=lt.createOscillator(),r=lt.createGain(),a=lt.createOscillator(),o=lt.createGain();return s.type=n%2?"sine":"triangle",s.frequency.value=t,r.gain.value=0,a.frequency.value=.05+n*.03,o.gain.value=.05,a.connect(o),o.connect(r.gain),r.gain.setTargetAtTime(.06,lt.currentTime,3),s.connect(r),r.connect(Vl),s.start(),a.start(),{o:s,l:a,g:r}})}function Kf(){Pa&&(Pa.forEach(({o:i,l:e,g:t})=>{t.gain.setTargetAtTime(0,lt.currentTime,.5),setTimeout(()=>{try{i.stop(),e.stop()}catch{}},1500)}),Pa=null)}var Qt={size:1e3,half:500};function Xl(i,e,t){let n=i*374761393+e*668265263+t*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n&16777215)/16777215}var Zf=i=>i*i*(3-2*i);function Na(i,e,t=1){let n=Math.floor(i),s=Math.floor(e),r=Zf(i-n),a=Zf(e-s),o=Xl(n,s,t),h=Xl(n+1,s,t),c=Xl(n,s+1,t),u=Xl(n+1,s+1,t);return(o+(h-o)*r+(c-o)*a+(o-h-c+u)*r*a)*2-1}function Zt(i,e,t=4,n=1){let s=0,r=.5,a=1,o=0;for(let h=0;h<t;h++)s+=r*Na(i*a,e*a,n+h*17),o+=r,r*=.5,a*=2.03;return s/o}function Cv(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ar=Object.fromEntries(pe.targets.map(i=>[i.id,i])),ql=(i,e)=>Math.exp(-i/(e*e)),Cs={x:Ar.T3.x,z:Ar.T3.z,ang:.55,len:150,wid:42,h:20},Er={x:-265,z:-300,r:112,rim:34},lu={x:Ar.T2.x,z:Ar.T2.z,r:115},cu={x:Ar.T1.x,z:Ar.T1.z,r:75};function Jf(i,e){let t=(i-lu.x)**2+(e-lu.z)**2;return Math.max(0,ql(t,lu.r)*1.25+Zt(i/60,e/60,2,9)*.25)}function jf(i,e){let t=Math.hypot(i-cu.x,e-cu.z)*(1+.35*Zt(i/40,e/40,2,41));return ql(t*t,cu.r)}function bt(i,e){let t=Zt(i/220,e/220,4,3)*9+Zt(i/55,e/55,3,5)*1.6+Zt(i/9,e/9,2,7)*.18,n=Math.cos(Cs.ang),s=Math.sin(Cs.ang),r=i-Cs.x,a=e-Cs.z,o=r*n+a*s,h=-r*s+a*n,c=Math.max(0,1-(o/Cs.len)**4);t+=Cs.h*c*ql(h*h,Cs.wid)*(.85+.15*Zt(o/30,0,2,11));let u=Math.hypot(i-Er.x,e-Er.z);t+=Er.rim*ql((u-Er.r)**2,u>Er.r?75:38)-18*Math.max(0,1-u/Er.r)**1.5;let d=Math.min(1,Jf(i,e));if(d>0){let _=(i*.82+e*.57+Zt(i/40,e/40,2,13)*18)/26%1,g=_<0?_+1:_,p=g<.62?g/.62:(1-g)/.38;t+=d*(p*2.4+1)}let l=jf(i,e);t=t*(1-l*.85)+-3*l*.85;let f=Math.max(Math.abs(i),Math.abs(e));return f>420&&(t+=((f-420)/80)**2*35),t}function Yl(i,e){let n=(bt(i+1.5,e)-bt(i-1.5,e))/3,s=(bt(i,e+1.5)-bt(i,e-1.5))/(2*1.5);return{gx:n,gz:s,deg:Math.atan(Math.hypot(n,s))*180/Math.PI}}function Iv(i,e){return Zt(i/45+100,e/45-50,3,21)}function Zn(i,e,t){let n=t??Yl(i,e).deg;return Jf(i,e)>.45?"sand":jf(i,e)>.35||n>13?"bedrock":Iv(i,e)>.3?"rocky":Zt(i/70-30,e/70+80,2,31)>.42?"sand":"gravel"}var hu=null;function uu(){if(hu)return hu;let i=Cv(1234),e=[],t=[pe.landing,...pe.targets],n=(s,r,a)=>t.every(o=>Math.hypot(o.x-s,o.z-r)>a);for(let s=0;s<9e3&&e.length<1700;s++){let r=(i()-.5)*860,a=(i()-.5)*860,o=Zn(r,a),h=o==="rocky"?.9:o==="gravel"?.18:o==="bedrock"?.12:.02;if(i()>h)continue;let c=o==="rocky"?i()<.16:i()<.04,u=c?.9+i()*1:.12+i()*.35;c&&!n(r,a,18)||e.push({x:r,z:a,size:u,big:c,rot:i()*6.28,sq:.55+i()*.4,seed:Math.floor(i()*1e3)})}return hu=e,e}var Qf=()=>uu().filter(i=>i.big);var Pv=["Briefing","Design","Plan","Mission","Results"];function Nn(i,e,t){let n=e==null?"":`<div class="steps">${Pv.map((s,r)=>`<span class="${r===e?"on":r<e?"done":""}">${r+1}. ${s}</span>`).join("")}</div>`;return`<div class="topbar glass corner">
    ${t?`<button class="btn iconbtn ghost" data-back="${t}" title="Back">\u2190</button>`:'<div style="width:44px"></div>'}
    <h2>${i}</h2>${n}</div>`}function di(i,e){e.querySelectorAll("[data-back]").forEach(t=>t.addEventListener("click",()=>i.go(t.dataset.back)))}var Zl=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Kl=null;function Lv(){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),s=n.createImageData(1024,512);for(let a=0;a<512;a++)for(let o=0;o<1024;o++){let h=o/1024*Math.PI*2,c=(a/512-.5)*Math.PI,u=Math.cos(c)*Math.cos(h),d=Math.sin(c),l=Math.cos(c)*Math.sin(h),f=Zt(u*3+10,l*3+d*2.3,6,5),x=Zt(u*9+d*4,l*9,4,8),_=Math.abs(Zt(u*14,l*14+d*9,3,12)),g=.72+f*.3-_*.1,p=.36+f*.16-_*.06,v=.2+f*.08;x>.25&&(g*=.7,p*=.65,v*=.7);let S=Math.abs(d)>.93?(Math.abs(d)-.93)*14:0;g=g*(1-S)+S,p=p*(1-S)+S*.95,v=v*(1-S)+S*.95;let M=(a*1024+o)*4;s.data[M]=g*255,s.data[M+1]=p*255,s.data[M+2]=v*255,s.data[M+3]=255}n.putImageData(s,0,0);let r=new ni(t);return r.colorSpace=Tt,r}function Jn(){if(Kl)return Kl;let i=new zn,e=new At(40,innerWidth/innerHeight,.1,2e3);e.position.set(0,0,9);let t=4e3,n=new Float32Array(t*3),s=new Float32Array(t*3);for(let p=0;p<t;p++){let v=new F().randomDirection().multiplyScalar(400+Math.random()*400);n.set([v.x,v.y,v.z],p*3);let S=.6+Math.random()*.4,M=Math.random();s.set([S*(M>.8?1:.85),S*.9,S*(M<.3?1:.95)],p*3)}let r=new xt;r.setAttribute("position",new yt(n,3)),r.setAttribute("color",new yt(s,3)),i.add(new ti(r,new Hn({size:1.4,vertexColors:!0,sizeAttenuation:!1})));let a=new He(new Vn(3,96,64),new ut({map:Lv(),roughness:1}));a.position.set(3.2,-.6,0),a.rotation.z=.44,i.add(a);let o=new He(new Vn(3.12,64,48),new pn({transparent:!0,side:Lt,blending:vs,depthWrite:!1,vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = (modelViewMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*vec4(vP,1.);}",fragmentShader:"varying vec3 vN; varying vec3 vP; void main(){ float f = pow(0.75 - dot(vN, normalize(-vP)), 3.0); gl_FragColor = vec4(1.0,0.55,0.3,1.0)*f*1.6; }"}));o.position.copy(a.position),i.add(o);let h=new kt,c=new He(new Gt(.12,.12,.18),new ut({color:14205562,metalness:.8,roughness:.3})),u=new ut({color:1719695,metalness:.6,roughness:.3,emissive:331568}),d=new He(new Gt(.5,.01,.14),u);d.position.x=.32;let l=d.clone();l.position.x=-.32;let f=new He(new ta(.08,.05,16,1,!0),new ut({color:16777215,side:Vt}));f.position.z=.12,f.rotation.x=Math.PI/2,h.add(c,d,l,f),i.add(h);let x=new An(16777215,3.2);x.position.set(-6,3,5),i.add(x),i.add(new ha(2241365,.4));let _=0;return Kl={scene:i,camera:e,tick:p=>{_+=p,a.rotation.y+=p*.03,h.position.set(3.2+Math.cos(_*.25)*4.2,-.6+Math.sin(_*.25)*1.2,Math.sin(_*.25)*3.2),h.rotation.y=_*.2,h.rotation.x=_*.1,e.position.x=Math.sin(_*.05)*.3,e.lookAt(.6,0,0)},mars:a},Kl}function Da(i,e,t={}){let n=Math.min(2,devicePixelRatio||1),s=i.clientWidth||400,r=i.clientHeight||170;i.width=s*n,i.height=r*n;let a=i.getContext("2d");a.scale(n,n);let o={l:44,r:10,t:22,b:22},h=e.flatMap(p=>p.data.map(v=>v[0])),c=e.flatMap(p=>p.data.map(v=>v[1]));if(h.length<2){a.fillStyle="#8296c2",a.font="12px sans-serif",a.fillText("Collecting data\u2026",s/2-40,r/2),t.title&&(a.fillStyle="#3fd0ff",a.font="600 11px Orbitron, sans-serif",a.fillText(t.title,44,13));return}let u=Math.min(...h),d=Math.max(...h),l=t.yMin??Math.min(...c),f=t.yMax??Math.max(...c);f-l<1e-6&&(f+=1,l-=1),d-u<1e-6&&(d+=1);let x=p=>o.l+(p-u)/(d-u)*(s-o.l-o.r),_=p=>r-o.b-(p-l)/(f-l)*(r-o.t-o.b);a.strokeStyle="rgba(80,170,255,.15)",a.fillStyle="#8296c2",a.font="10px JetBrains Mono, monospace",a.lineWidth=1;for(let p=0;p<=4;p++){let v=l+(f-l)*p/4,S=_(v);a.beginPath(),a.moveTo(o.l,S),a.lineTo(s-o.r,S),a.stroke(),a.fillText(v.toFixed(Math.abs(f-l)<10?1:0),2,S+3)}for(let p=0;p<=4;p++){let v=u+(d-u)*p/4,S=t.xfmt?t.xfmt(v):v.toFixed(1),M=a.measureText(S).width;a.fillText(S,Math.min(s-o.r-M,Math.max(o.l,x(v)-M/2)),r-6)}t.title&&(a.fillStyle="#3fd0ff",a.font="600 11px Orbitron, sans-serif",a.fillText(t.title,o.l,13));let g=s-o.r;for(let p of[...e].reverse()){a.font="10px sans-serif";let v=a.measureText(p.name).width;g-=v+22,a.fillStyle=p.color,a.fillRect(g,6,10,3),a.fillStyle="#c6d4f3",a.fillText(p.name,g+14,11)}for(let p of e)a.strokeStyle=p.color,a.lineWidth=1.8,a.beginPath(),p.data.forEach((v,S)=>S?a.lineTo(x(v[0]),_(v[1])):a.moveTo(x(v[0]),_(v[1]))),a.stroke(),p.fill&&(a.lineTo(x(p.data.at(-1)[0]),_(l)),a.lineTo(x(p.data[0][0]),_(l)),a.closePath(),a.fillStyle=p.fill,a.fill())}var ep={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick),$l();let t=i.html(`<div class="screen menu">
      <div>
        <div class="logo"><div class="mark"></div>
          <h1>${Ts.title}</h1><div class="sub">${Ts.subtitle.toUpperCase()}</div>
          <div class="tag">${Ts.tagline}</div></div>
        <nav>
          <button class="btn primary" data-a="play"><span class="ic">\u25B6</span> Play</button>
          <button class="btn" data-a="settings"><span class="ic">\u2699</span> Settings</button>
          <button class="btn" data-a="credits"><span class="ic">\u2605</span> Credits</button>
          <button class="btn" data-a="exit"><span class="ic">\u23FB</span> Exit</button>
        </nav>
      </div>
      <div class="ver muted">${Ts.version}</div>
      <div class="ver2 muted">Built with real Mars mission data<br>Curiosity \xB7 REMS \xB7 RAD \xB7 MMRTG</div>
    </div>`);t.querySelector("[data-a=play]").onclick=()=>i.go("missions"),t.querySelector("[data-a=settings]").onclick=()=>i.go("settings",{back:"menu"}),t.querySelector("[data-a=credits]").onclick=()=>i.go("credits"),t.querySelector("[data-a=exit]").onclick=()=>{window.desktop?.quit?window.desktop.quit():(window.close(),setTimeout(()=>alert("You can close this browser tab to exit."),200))}},exit(){}},tp={enter(i,e={}){let t=Jn();i.setView(t.scene,t.camera,t.tick);let n=i.settings,s=(o,h)=>`<div class="seg" data-k="${o}">${h.map(([c,u])=>`<button data-v="${c}" class="${String(n[o])===String(c)?"on":""}">${u}</button>`).join("")}</div>`,r=(o,h,c,u)=>`<div class="row"><input type="range" data-k="${o}" min="${h}" max="${c}" step="${u}" value="${n[o]}"><span class="mono" data-o="${o}">${Math.round(n[o]*100)}%</span></div>`,a=i.html(`<div class="screen">${Nn("Settings",null,e.back||"menu")}
      <div class="page glass" style="width:min(760px,92vw)">
        <div class="hd" style="font-size:12px;color:var(--neon);margin-bottom:6px">GRAPHICS</div>
        <div class="set-row"><span>Quality</span>${s("quality",[["low","Low"],["medium","Medium"],["high","High"]])}</div>
        <div class="set-row"><span>Resolution scale</span>${s("resScale",[[.75,"75%"],[1,"100%"]])}</div>
        <div class="set-row"><span>Show FPS</span>${s("showFps",[[!1,"Off"],[!0,"On"]])}</div>
        <div class="hd" style="font-size:12px;color:var(--neon);margin:22px 0 6px">AUDIO</div>
        <div class="set-row"><span>Master volume</span>${r("master",0,1,.05)}</div>
        <div class="set-row"><span>Effects</span>${r("sfx",0,1,.05)}</div>
        <div class="set-row"><span>Music</span>${r("music",0,1,.05)}</div>
        <div class="hd" style="font-size:12px;color:var(--neon);margin:22px 0 6px">CONTROLS</div>
        <div class="set-row"><span>Mouse sensitivity</span>${r("sensitivity",.3,2,.1)}</div>
        <div class="set-row"><span>Invert camera Y</span>${s("invertY",[[!1,"Off"],[!0,"On"]])}</div>
        <div class="set-row" style="align-items:start"><span>Key bindings</span><div class="col" style="gap:7px;font-size:13px">
          <div><span class="kbd">W A S D</span> / arrows \u2014 drive &amp; steer (turn in place)</div>
          <div><span class="kbd">Space</span> brake \xB7 <span class="kbd">R</span> AutoNav along your route</div>
          <div><span class="kbd">E</span> science at a target \xB7 <span class="kbd">Tab</span> data dashboard</div>
          <div><span class="kbd">C</span> Navcam view \xB7 <span class="kbd">M</span> map \xB7 <span class="kbd">T</span> time warp</div>
          <div><span class="kbd">Right-drag</span> orbit camera \xB7 <span class="kbd">Wheel</span> zoom \xB7 <span class="kbd">Esc</span> pause</div>
        </div></div>
      </div></div>`);di(i,a),a.querySelectorAll(".seg").forEach(o=>o.addEventListener("click",h=>{let c=h.target.closest("button");if(!c)return;o.querySelectorAll("button").forEach(d=>d.classList.toggle("on",d===c));let u=c.dataset.v;n[o.dataset.k]=u==="true"?!0:u==="false"?!1:isNaN(+u)?u:+u,i.saveSettings()})),a.querySelectorAll("input[type=range]").forEach(o=>o.addEventListener("input",()=>{n[o.dataset.k]=+o.value,a.querySelector(`[data-o=${o.dataset.k}]`).textContent=Math.round(o.value*100)+"%",i.saveSettings(),o.dataset.k!=="sensitivity"&&Nt.hover()}))}},np={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick);let t=i.html(`<div class="screen">${Nn("Credits",null,"menu")}
      <div class="page glass">
        <div class="grid2">
          <div>
            <h3 style="font-size:14px;color:var(--neon);margin-bottom:10px">TEAM</h3>
            <p style="line-height:1.7">${Ts.title} \u2014 ${Ts.subtitle}<br>Made for the <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener" style="color:var(--neon)"><b>NASA International Space Apps Challenge</b></a>.<br><b>Osama Mohammed</b> \u00B7 <b>Eyad Ahmad Salah</b> \u00B7 <b>Rojeh Samy</b></p>
            <h3 style="font-size:14px;color:var(--neon);margin:22px 0 10px">BUILT WITH</h3>
            <p class="muted" style="line-height:1.7">Three.js (MIT) \xB7 Electron (MIT) \xB7 Orbitron, Exo 2 &amp; JetBrains Mono fonts (SIL OFL)<br>
            Rover 3D model: Mars Curiosity rover model supplied by the team \u2014 please credit its original author per its licence.</p>
            <h3 style="font-size:14px;color:var(--neon);margin:22px 0 10px">DISCLAIMER</h3>
            <p class="muted" style="line-height:1.7">Educational fan project. Not affiliated with or endorsed by NASA. Mission data are simplified for gameplay; values marked <span class="doc">DATA</span> come from published sources.</p>
          </div>
          <div>
            <h3 style="font-size:14px;color:var(--neon);margin-bottom:10px">SCIENTIFIC DATA SOURCES</h3>
            ${Pf.map(([n,s])=>`<div style="padding:8px 0;border-bottom:1px solid rgba(80,170,255,.12)"><div style="font-size:13px">${n}</div><div class="muted" style="font-size:12px;margin-top:2px">${s}</div></div>`).join("")}
          </div>
        </div>
      </div></div>`);di(i,t)}};var Nv={bedrock:[176,128,98],gravel:[150,88,56],sand:[196,120,64],rocky:[110,72,56]};function ip(i=512){let e=new Uint8ClampedArray(i*i*4),t=Qt.size/i,n=new Float32Array((i+1)*(i+1));for(let a=0;a<=i;a++)for(let o=0;o<=i;o++)n[a*(i+1)+o]=bt(-Qt.half+o*t,-Qt.half+a*t);let s=1/0,r=-1/0;for(let a of n)a<s&&(s=a),a>r&&(r=a);r=Math.min(r,45);for(let a=0;a<i;a++)for(let o=0;o<i;o++){let h=-Qt.half+(o+.5)*t,c=-Qt.half+(a+.5)*t,u=n[a*(i+1)+o],d=n[a*(i+1)+o+1],l=n[(a+1)*(i+1)+o],f=(d-u)/t,x=(l-u)/t,_=Math.atan(Math.hypot(f,x))*180/Math.PI,g=Zn(h,c,_),p=-f,v=1,S=-x,M=Math.hypot(p,v,S),T=Math.max(0,(p*-.6+v*.7+S*-.4)/M)*.75+.35,E=(u-s)/(r-s+1e-6),m=Nv[g],y=T*(.8+.35*E),C=(a*i+o)*4;e[C]=m[0]*y,e[C+1]=m[1]*y,e[C+2]=m[2]*y,e[C+3]=255;let R=Math.floor(u/5),N=Math.floor(d/5),O=Math.floor(l/5);(R!==N||R!==O)&&(e[C]*=.78,e[C+1]*=.78,e[C+2]*=.78)}return e}function Dn(i,e,t){return[(i+Qt.half)/Qt.size*t,(e+Qt.half)/Qt.size*t]}function sp(i,e,t){return[i/t*Qt.size-Qt.half,e/t*Qt.size-Qt.half]}var rp={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick);let t=i.html(`<div class="screen">${Nn("Select Your Mission",null,"menu")}
      <div class="mcards">${Df.map(n=>`
        <div class="mcard glass ${n.locked?"locked":""}" data-id="${n.id}">
          <div class="art"><div class="planet ${n.planet}"></div>${n.locked?'<span class="chip lockbadge">\u{1F512} COMING IN v2</span>':'<span class="chip lockbadge" style="color:var(--ok);border-color:var(--ok)">PLAYABLE</span>'}</div>
          <div class="body"><h3>${n.name}</h3><div class="muted" style="font-size:13px;line-height:1.5;min-height:40px">${n.desc}</div>
            <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">${n.skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div>
            <div class="diff"><span class="chip d-${n.diff}">\u2605 ${n.diff.toUpperCase()}</span>${n.locked?"":'<button class="btn primary small">Select \u25B6</button>'}</div>
          </div></div>`).join("")}
      </div></div>`);di(i,t),t.querySelectorAll(".mcard").forEach(n=>n.addEventListener("click",()=>{if(n.classList.contains("locked")){Nt.error();return}i.go("briefing")}))}},Jl=null;function Fa(){if(Jl)return Jl;let i=512,e=document.createElement("canvas");return e.width=e.height=i,e.getContext("2d").putImageData(new ImageData(ip(i),i,i),0,0),Jl=e.toDataURL(),Jl}function Ua(i,e,t=1){let[n,s]=Dn(pe.landing.x,pe.landing.z,e);i.save(),i.fillStyle="#3fd0ff",i.strokeStyle="#fff",i.lineWidth=2*t,i.beginPath(),i.moveTo(n,s-9*t),i.lineTo(n+8*t,s+6*t),i.lineTo(n-8*t,s+6*t),i.closePath(),i.fill(),i.stroke(),i.font=`600 ${11*t}px Orbitron, sans-serif`,i.fillStyle="#fff",i.fillText("LANDING",n+12*t,s+4*t);for(let r of pe.targets){let[a,o]=Dn(r.x,r.z,e);i.strokeStyle="#ffb067",i.lineWidth=2.5*t,i.beginPath(),i.arc(a,o,10*t,0,Math.PI*2),i.stroke(),i.fillStyle="#ffb067",i.beginPath(),i.arc(a,o,3.5*t,0,Math.PI*2),i.fill(),i.fillStyle="#fff",i.shadowColor="#000",i.shadowBlur=4,i.fillText(`${r.id} ${r.name}`,a+14*t,o+4*t),i.shadowBlur=0}i.restore()}var ap={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick);let t=[["Surface gravity",`${It.g} m/s\xB2 (38% of Earth)`,!0],["Sol (Mars day)","24 h 39 min",!0],["Air temperature",`${It.airTempMinC} \xB0C pre-dawn \u2192 +${It.airTempMaxC} \xB0C afternoon`,!0],["Air pressure",`${It.pressureMinPa}\u2013${It.pressureMaxPa} Pa (\u22480.7% of Earth)`,!0],["Radiation at surface",`${It.radiation_mSv_day} mSv/day`,!0],["Sunlight at Mars orbit",`${It.solarConstant} W/m\xB2 (43% of Earth)`,!0],["Noon sunlight, clear (\u03C4 0.6)",`${Xn(12,.6).toFixed(0)} W/m\xB2 on the ground`,!1],["Noon sunlight, dusty (\u03C4 1.6)",`${Xn(12,1.6).toFixed(0)} W/m\xB2 on the ground`,!1]],n=i.html(`<div class="screen">${Nn("Mission Briefing",0,"missions")}
      <div class="page glass corner">
        <div class="brief">
          <div>
            <div class="chip" style="color:var(--mars2);border-color:var(--mars2);display:inline-block">MISSION DIRECTIVE \xB7 ${pe.name.toUpperCase()}</div>
            <h1 style="font-size:28px;margin:12px 0 4px">Mars Exploration</h1>
            <div class="muted" style="font-size:13px">${pe.site}</div>
            <p>The mission team needs a rover that can land in Gale Crater, cross <b>${pe.sols} sols</b> of Martian terrain and return data from four science sites that tell the story of water on ancient Mars.</p>
            <p>You are the lead engineer. <b>You</b> choose every part. Every kilogram, watt and dollar has a cost \u2014 there is no perfect rover, only good trade-offs.</p>
            <h3>OBJECTIVES</h3>
            ${pe.targets.map(h=>`<div class="target-li"><b>${h.id}</b><div><div style="font-weight:600">${h.name} <span class="muted" style="font-weight:400">\u2014 ${h.kind}</span></div><div class="muted" style="font-size:12.5px">${h.blurb} Tasks: ${h.tasks.map(c=>c.label).join(" \xB7 ")}</div></div></div>`).join("")}
            <h3>CHALLENGES</h3>
            <ul>
              <li><b>Power:</b> the rover needs \u2265 its idle load all day, and must survive ${pe.sols-1} nights at \u221270 \xB0C.</li>
              <li><b>Dust forecast:</b> a regional dust event begins sol 1 ~13:00 \u2014 optical depth \u03C4 rises 0.6 \u2192 1.6, cutting sunlight.</li>
              <li><b>Terrain:</b> loose sand at the dunes, sharp rock fields (wheel damage!), and slopes up to ~25\xB0 on the ridge and crater rim.</li>
              <li><b>Communication:</b> science only counts once it reaches Earth \u2014 orbiter relay passes at 11:30 &amp; 16:00 daily.</li>
              <li><b>Budget:</b> $900M hardware cap and each chassis has a payload limit.</li>
            </ul>
          </div>
          <div>
            <img class="mapthumb" id="mt">
            <div class="muted" style="font-size:11px;margin:6px 0 14px;text-align:center">Orbital map of the landing region (1 km \xD7 1 km) \xB7 north is up</div>
            <h3 style="margin-top:0">ENVIRONMENT AT GALE CRATER</h3>
            <table class="envtable">${t.map(([h,c,u])=>`<tr><td>${h}${u?'<span class="doc">DATA</span>':""}</td><td>${c}</td></tr>`).join("")}</table>
            <div style="display:flex;justify-content:flex-end;margin-top:22px"><button class="btn mars" id="go">Design the rover \u25B6</button></div>
          </div>
        </div>
      </div></div>`);di(i,n);let s=n.querySelector("#mt"),r=document.createElement("canvas");r.width=r.height=512;let a=r.getContext("2d"),o=new Image;o.onload=()=>{a.drawImage(o,0,0),Ua(a,512),s.src=r.toDataURL()},o.src=Fa(),n.querySelector("#go").onclick=()=>i.go("design")}};var jl=class extends zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Gt;e.deleteAttribute("uv");let t=new ut({side:Lt}),n=new ut,s=new Ii(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new He(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new bi(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let h=new He(e,Rr(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let c=new He(e,Rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new He(e,Rr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new He(e,Rr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let l=new He(e,Rr(20));l.position.set(3.235,11.486,-12.541),l.scale.set(2.5,2,.1),this.add(l);let f=new He(e,Rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Rr(i){return new ia({color:0,emissive:16777215,emissiveIntensity:i})}var Ql=null;function Dv(i){if(Ql)return Ql;let e=new zn;e.background=new Ie(330522),e.fog=new Xr(330522,14,40);let t=new gr(i);e.environment=t.fromScene(new jl,.04).texture,e.environmentIntensity=.55;let n=new At(38,innerWidth/innerHeight,.1,200),s=new He(new ms(30,64),new ut({color:660264,metalness:.6,roughness:.35}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);let r=new fa(60,60,2068479,1192026);r.material.transparent=!0,r.material.opacity=.25,r.position.y=.002,e.add(r);let a=new He(new Gn(3.6,3.8,.12,64),new ut({color:1713216,metalness:.8,roughness:.3}));a.position.y=.06,a.receiveShadow=!0,e.add(a);let o=new He(new rr(3.7,.025,8,128),new Ot({color:16747068}));o.rotation.x=Math.PI/2,o.position.y=.125,e.add(o);let h=new He(new rr(3.3,.012,8,128),new Ot({color:4182271}));h.rotation.x=Math.PI/2,h.position.y=.125,e.add(h);for(let l=0;l<9;l++){let f=new He(new Gt(.08,6,.08),new Ot({color:l%2?2068479:4182271})),x=-.9+l*.22;f.position.set(Math.sin(x)*16,3,-Math.cos(x)*16),e.add(f)}e.add(new gs(9419007,1054768,.8));let c=new An(16777215,2.4);c.position.set(4,8,5),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-5,right:5,top:5,bottom:-5}),e.add(c);let u=new An(16747088,1.6);u.position.set(-5,3,-6),e.add(u);let d=new Ii(4182271,8,12);return d.position.set(-3,1.5,3),e.add(d),Ql={scene:e,camera:n,ring:o,ring2:h},Ql}var en=(i,e=0)=>Number(i).toFixed(e),op={enter(i){Kf();let e=Dv(i.renderer),t=i.state,n="chassis",s=null,r=.7,a=.32,o=8.5,h=!0,c=null,u=()=>{s&&e.scene.remove(s.root),s=Gl(t.design),s.root.position.y=.12,e.scene.add(s.root)};u();let d=m=>{h&&(r+=m*.15);let y=e.camera;y.position.set(Math.sin(r)*Math.cos(a)*o,1.1+Math.sin(a)*o,Math.cos(r)*Math.cos(a)*o),y.lookAt(0,1,0),e.ring.rotation.z+=m*.2,e.ring2.rotation.z-=m*.3};i.setView(e.scene,e.camera,d);let l=i.html(`<div class="screen design passthrough">${Nn("Design Your Rover",1,"briefing")}
      <div class="left glass corner"><div class="cats"></div><div class="opts scroll"></div></div>
      <div class="right glass corner"><div class="scroll" style="overflow:auto;flex:1" id="stats"></div></div>
      <div class="center-hint muted"><div class="namebig">ROVER PREVIEW</div>drag to rotate \xB7 scroll to zoom</div>
      <div class="bottom"><button class="btn" id="reset">\u21BA Reset</button><button class="btn mars" id="next">Plan the route \u25B6</button></div>
    </div>`);di(i,l);let f=l.querySelector(".cats"),x=l.querySelector(".opts"),_=l.querySelector("#stats"),g=(m,y)=>{let C=[];return y.mass&&C.push(`${y.mass} kg`),y.cost&&C.push(`$${y.cost}M`),m==="chassis"&&C.push(`payload ${y.payload} kg`,`awake ${y.baseLoad} W`,`asleep ${y.sleepLoad} W`),m==="wheels"&&C.push(`${y.speed.toFixed(3)} m/s`,`grip \xD7${y.grip}`,`sand drag \xD7${y.sandCrr}`,`toughness \xD7${y.durability}`),m==="solar"&&y.area&&C.push(`${y.area} m\xB2`),m==="rtg"&&y.power&&C.push(`${y.power} W 24/7`,"heat"),m==="battery"&&C.push(`${y.capacity} Wh`),y.power&&m!=="rtg"&&C.push(`${y.power} W`),y.txPower&&C.push(`tx ${y.txPower} W`),C.map(R=>`<span>${R}</span>`).join("")},p=()=>{f.innerHTML=Lf.map(m=>`<button data-c="${m}" class="${m===n?"on":""}"><span class="i">${Di[m].icon}</span>${Di[m].label}</button>`).join("")},v=()=>{let m=Di[n],y=t.design[n];x.innerHTML=`<p class="help">${m.help}${m.single?"":" <b>Select any number.</b>"}</p>`+m.options.map(C=>{let R=m.single?y===C.id:y.includes(C.id);return`<div class="opt ${R?"on":""}" data-id="${C.id}"><div class="t"><span>${m.single?"":`<span class="ck">${R?"\u2713":""}</span>`}${C.name}${C.doc?'<span class="doc">REAL</span>':""}</span></div>
          <div class="d">${C.desc}</div><div class="specs">${g(n,C)}</div></div>`}).join("")},S=(m,y,C="")=>`<div class="meter ${C}"><i style="width:${Math.max(2,Math.min(100,m/y*100))}%"></i></div>`,M=()=>{let m=Rs(t.design),y=ui(t.design),C=pe.targets.map(R=>{let N=R.tasks.filter(O=>O.needs.every(W=>Ln(y,W))).length;return`<div class="stat"><div class="l"><span>${R.id} ${R.name}</span><b style="color:${N===R.tasks.length?"var(--ok)":N?"var(--warn)":"var(--err)"}">${N}/${R.tasks.length} tasks</b></div></div>`}).join("");_.innerHTML=`
        <div class="sec-h">MASS &amp; BUDGET</div>
        <div class="stat"><div class="l"><span>Total mass</span><b>${en(m.mass)} kg</b></div>${S(m.mass,1e3)}<div class="l" style="margin-top:4px"><span>Weight on Mars (m\xB7g)</span><b>${en(m.weight)} N</b></div></div>
        <div class="stat"><div class="l"><span>Payload used</span><b>${en(m.payloadMass,1)} / ${m.payloadCap} kg</b></div>${S(m.payloadMass,m.payloadCap,m.payloadMass>m.payloadCap?"err":m.payloadMass>m.payloadCap*.85?"warn":"")}</div>
        <div class="stat"><div class="l"><span>Hardware cost</span><b>$${m.cost}M / $${m.budget}M</b></div>${S(m.cost,m.budget,m.cost>m.budget?"err":m.cost>m.budget*.9?"warn":"")}</div>
        <div class="sec-h">POWER</div>
        <div class="stat"><div class="l"><span>Solar @ noon (clear / dusty)</span><b>${en(m.solarNoon)} / ${en(m.solarStorm)} W</b></div>
          <div class="l"><span>RTG (day &amp; night)</span><b>${en(m.rtgPower)} W</b></div>
          <div class="l"><span>Avg generation 09:00\u201317:30</span><b>${en(m.avgGen)} W</b></div>${S(m.avgGen,Math.max(m.avgGen,m.driveLoad)*1.1)}</div>
        <div class="stat"><div class="l"><span>Load: awake / driving</span><b>${en(m.idleLoad)} / ${en(m.driveLoad)} W</b></div>${S(m.driveLoad,Math.max(m.avgGen,m.driveLoad)*1.1,m.driveLoad>m.avgGen+m.battery/8?"warn":"")}
          <div class="l" style="margin-top:4px"><span>\u2026of which rolling resistance</span><b>${en(m.driveMech,1)} W</b></div></div>
        <div class="stat"><div class="l"><span>Battery</span><b>${m.battery} Wh</b></div>
          <div class="l"><span>Night energy need (sleep ${m.sleepLoad} W + heaters)</span><b style="color:${m.nightNeed>m.battery*.7?"var(--err)":"inherit"}">${en(Math.max(0,m.nightNeed))} Wh</b></div>${S(Math.max(0,m.nightNeed),m.battery,m.nightNeed>m.battery*.7?"err":"")}</div>
        <div class="sec-h">MOBILITY</div>
        <div class="stat"><div class="l"><span>Top speed</span><b>${en(m.topSpeed,3)} m/s \xB7 ${en(m.topSpeed*3600)} m/h</b></div>
          <div class="l"><span>Max slope: sand / gravel / bedrock</span><b>${en(m.maxSlope.sand)}\xB0 / ${en(m.maxSlope.gravel)}\xB0 / ${en(m.maxSlope.bedrock)}\xB0</b></div>${S(m.maxSlope.sand,30,m.maxSlope.sand<12?"err":"")}
          <div class="l" style="margin-top:4px"><span>Wheel toughness${m.hazcam?" (+hazcam)":""}</span><b>\xD7${m.durability}${m.hazcam?" \xD72.2":""}</b></div>
          <div class="l"><span>Driving range on battery (gravel)</span><b>${isFinite(m.rangeKm)?en(m.rangeKm,2)+" km":"unlimited in daylight"}</b></div></div>
        <div class="sec-h">SCIENCE COVERAGE \xB7 ${m.scienceAvail}/${m.scienceMax} pts</div>${C}
        <div class="sec-h">ENGINEERING CHECKS</div>
        <div class="issues">${m.issues.length?m.issues.map(R=>`<div class="issue ${R.lvl}">${R.lvl==="err"?"\u2716":R.lvl==="warn"?"\u26A0":"\u2139"} ${R.msg}</div>`).join(""):'<div class="issue info">\u2714 No problems detected</div>'}</div>`,l.querySelector("#next").disabled=!m.valid},T=()=>{p(),v(),M()};T(),f.addEventListener("click",m=>{let y=m.target.closest("button");y&&(n=y.dataset.c,T())}),x.addEventListener("click",m=>{let y=m.target.closest(".opt");if(!y)return;if(Di[n].single)t.design[n]=y.dataset.id;else{let R=t.design[n],N=R.indexOf(y.dataset.id);N>=0?R.splice(N,1):R.push(y.dataset.id)}Nt.select(),u(),T()}),l.querySelector("#reset").onclick=()=>{t.design={chassis:"medium",wheels:"std",solar:"s4",rtg:"none",battery:"b12",cameras:["navcam"],instruments:["rems"],comms:"uhf",arm:"scoop"},u(),T()},l.querySelector("#next").onclick=()=>i.go("planning");let E=i.renderer.domElement;this._down=m=>{m.target!==E&&!m.target.classList.contains("passthrough")||(c={x:m.clientX,y:m.clientY},h=!1)},this._move=m=>{c&&(r-=(m.clientX-c.x)*.006,a=Math.max(.02,Math.min(1.2,a+(m.clientY-c.y)*.004)),c={x:m.clientX,y:m.clientY})},this._up=()=>{c=null},this._wheel=m=>{m.target.closest(".glass")||(o=Math.max(4,Math.min(16,o+m.deltaY*.005)))},addEventListener("pointerdown",this._down),addEventListener("pointermove",this._move),addEventListener("pointerup",this._up),addEventListener("wheel",this._wheel)},exit(){removeEventListener("pointerdown",this._down),removeEventListener("pointermove",this._move),removeEventListener("pointerup",this._up),removeEventListener("wheel",this._wheel)}};function lp(i,e){let t=Yn(i),n=ui(i),s=t.instruments.filter(y=>y.id==="rems"||y.id==="rad").reduce((y,C)=>y+C.power,0),r=t.chassis.baseLoad+s,a=pe.startHour,o=t.battery.capacity,h=o,c=0,u=0,d=[],l=[],f=0,x=null,_=null,g=4,p={bedrock:0,gravel:0,sand:0,rocky:0},v=new Set,S=1/0,M=(y,C)=>{let R=Ca(t,a,Kn(a))+t.rtg.power;o=Math.min(t.battery.capacity,o+(R-C)*y*qn),a+=y,o<h&&(h=o),o<=0&&_===null&&(_=a)},T=()=>{if(Pn(a)<pe.endHour&&Pn(a)>=pe.startHour)return;let y=(Ct(a)-(Pn(a)<pe.startHour?1:0))*24+pe.startHour;for(;a<y;)M(.1,t.chassis.sleepLoad+Qi(t,a)),S=Math.min(S,o)},E=(y,C)=>{let R=Math.max(1,Math.ceil(y/.05));for(let N=0;N<R;N++)T(),M(y/R,r+Qi(t,a)+C)};for(let y=0;y<e.length-1;y++){let C=e[y],R=e[y+1],N=Math.hypot(R.x-C.x,R.z-C.z),O=Math.max(1,Math.ceil(N/g)),W={from:C,to:R,dist:N,maxSlope:0,bad:!1,samples:[]};for(let I=0;I<O;I++){let B=I/O,$=(I+1)/O,V=C.x+(R.x-C.x)*B,se=C.z+(R.z-C.z)*B,H=C.x+(R.x-C.x)*$,K=C.z+(R.z-C.z)*$,ee=N/O,Ee=bt(H,K)-bt(V,se),Ne=Math.atan2(Ee,ee)*180/Math.PI,q=Zn((V+H)/2,(se+K)/2);p[q]+=ee;let xe=kl(t,q,Ne),we=ru(t,q),Re=Ne>we||xe.speedFrac<=.02;W.samples.push({x:V,z:se,x1:H,z1:K,bad:Re,ty:q}),Re&&(W.bad=!0,f++,x||(x={x:V,z:se,slope:Ne,ty:q,lim:we})),W.maxSlope=Math.max(W.maxSlope,Ne);let ve=t.wheels.speed*Math.max(.15,xe.speedFrac),Xe=Mr(i,t,q,Ne,ve).total;E(ee/ve/pe.secPerHour,Xe),c+=ee,u+=zl(i,t,q)*ee}d.push(W);for(let I of pe.targets)if(!v.has(I.id)&&Math.hypot(I.x-R.x,I.z-R.z)<14){v.add(I.id);for(let B of I.tasks)B.needs.every($=>Ln(n,$))&&E(br[B.id].hours,br[B.id].power)}}f&&l.push(`${f*g} m of route too steep or soft for your wheels`),_&&l.push(`Battery runs out on sol ${Ct(_)} around ${on(_)}`);let m=pe.sols*24-24+pe.endHour;return a>m&&l.push(`Route needs more than ${pe.sols} sols`),u>70&&l.push(`Wheel wear ${u.toFixed(0)}% \u2014 risky`),{segs:d,dist:c,endHour:a,endSol:Ct(a),nightMin:S,endBattery:o,minBattery:h,capacity:t.battery.capacity,damage:u,problems:l,visited:[...v],terrainDist:p,deadAt:_,stuckAt:x}}function cp(){let i={x:pe.landing.x,z:pe.landing.z},e=[...pe.targets],t=[i],n=i;for(;e.length;){e.sort((r,a)=>Math.hypot(r.x-n.x,r.z-n.z)-Math.hypot(a.x-n.x,a.z-n.z));let s=e.shift();t.push({x:s.x,z:s.z,target:s.id}),n=s}return t}var hp={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick);let t=i.state;(!t.route||t.route.length<1)&&(t.route=[{x:pe.landing.x,z:pe.landing.z}]);let n=900,s=i.html(`<div class="screen plan">${Nn("Mission Planning",2,"design")}
      <div class="mapwrap glass corner"><canvas width="${n}" height="${n}"></canvas></div>
      <div class="side glass corner">
        <div class="sec-h">TRAVERSE PLAN</div>
        <div class="muted" style="font-size:12px;padding:0 16px 8px;line-height:1.5">Click the map to add waypoints from the landing site. Click near a target to snap to it. Right-click removes the last point. Red sections are too steep or too soft for <b>your</b> wheels.</div>
        <div class="row" style="padding:0 16px 10px;gap:8px"><button class="btn small" id="auto">\u2726 Auto-plan</button><button class="btn small" id="undo">\u21B6 Undo</button><button class="btn small" id="clear">\u2716 Clear</button></div>
        <div class="legend">${Object.entries(Xt).map(([l,f])=>`<span><i style="background:rgb(${f.color.map(x=>x*255|0)})"></i>${f.name}</span>`).join("")}</div>
        <div id="est" class="scroll" style="overflow:auto;flex:1"></div>
        <div id="hover" class="muted mono" style="font-size:11px;padding:8px 16px;border-top:1px solid var(--line)">Hover the map for terrain info</div>
        <div style="padding:14px 16px;border-top:1px solid var(--line)"><button class="btn mars" id="go" style="width:100%">Launch mission \u25B6</button></div>
      </div></div>`);di(i,s);let r=s.querySelector("canvas"),a=r.getContext("2d"),o=new Image;o.src=Fa();let h=null,c=()=>{if(a.clearRect(0,0,n,n),a.imageSmoothingEnabled=!0,a.drawImage(o,0,0,n,n),Ua(a,n,1.3),h)for(let l of h.segs)for(let f of l.samples){let[x,_]=Dn(f.x,f.z,n),[g,p]=Dn(f.x1,f.z1,n);a.strokeStyle=f.bad?"#ff3b4e":"#46e0ff",a.lineWidth=f.bad?5:3.5,a.shadowColor=f.bad?"#ff3b4e":"#3fd0ff",a.shadowBlur=8,a.beginPath(),a.moveTo(x,_),a.lineTo(g,p),a.stroke()}if(a.shadowBlur=0,t.route.forEach((l,f)=>{if(!f)return;let[x,_]=Dn(l.x,l.z,n);a.fillStyle="#04122a",a.strokeStyle="#46e0ff",a.lineWidth=2,a.beginPath(),a.arc(x,_,9,0,Math.PI*2),a.fill(),a.stroke(),a.fillStyle="#fff",a.font="600 10px Orbitron, sans-serif",a.textAlign="center",a.fillText(f,x,_+3.5),a.textAlign="left"}),h?.stuckAt){let[l,f]=Dn(h.stuckAt.x,h.stuckAt.z,n);a.fillStyle="#ff3b4e",a.font="600 12px Exo 2, sans-serif",a.fillText(`\u26A0 ${h.stuckAt.slope.toFixed(0)}\xB0 ${Xt[h.stuckAt.ty].name.toLowerCase()} \u2014 limit ${h.stuckAt.lim.toFixed(0)}\xB0`,l+12,f-10)}},u=()=>{h=t.route.length>1?lp(t.design,t.route):null;let l=Rs(t.design),f=s.querySelector("#est");if(!h){f.innerHTML='<div class="muted" style="padding:16px;font-size:13px">No route yet. Add waypoints or press Auto-plan.</div>',c();return}let x=g=>Math.max(0,g/h.capacity*100),_=!h.problems.length;f.innerHTML=`
        <div class="stat"><div class="l"><span>Distance</span><b>${h.dist.toFixed(0)} m</b></div>
          <div class="l"><span>Targets on route</span><b>${h.visited.length}/${pe.targets.length} ${h.visited.join(" ")}</b></div>
          <div class="l"><span>Estimated finish</span><b>Sol ${h.endSol} \xB7 ${on(h.endHour)}</b></div>
          <div class="l"><span>Lowest battery (incl. nights)</span><b style="color:${h.minBattery<0?"var(--err)":h.minBattery<h.capacity*.2?"var(--warn)":"var(--ok)"}">${x(h.minBattery).toFixed(0)}%</b></div>
          <div class="meter ${h.minBattery<0?"err":h.minBattery<h.capacity*.2?"warn":""}"><i style="width:${Math.min(100,x(h.minBattery))}%"></i></div>
          <div class="l" style="margin-top:6px"><span>Estimated wheel wear</span><b>${h.damage.toFixed(0)}%</b></div>
          <div class="meter ${h.damage>70?"err":h.damage>40?"warn":""}"><i style="width:${Math.min(100,h.damage)}%"></i></div></div>
        <div class="sec-h">TERRAIN MIX</div>
        ${Object.entries(h.terrainDist).map(([g,p])=>`<div class="wp"><span>${Xt[g].name}</span><span>${p.toFixed(0)} m</span></div>`).join("")}
        <div class="sec-h">FLIGHT DIRECTOR CHECK</div>
        <div class="issues">${_?'<div class="issue info">\u2714 Plan looks feasible for your rover.</div>':h.problems.map(g=>`<div class="issue warn">\u26A0 ${g}</div>`).join("")}
        <div class="issue info" style="margin-top:8px">\u2139 Estimates assume full speed and running every task your instruments allow. Real driving will differ!</div></div>
        <div class="sec-h">WAYPOINTS</div>
        ${t.route.map((g,p)=>`<div class="wp"><span>${p?"#"+p:"Landing"} ${g.target?"\xB7 "+g.target:""}</span><span>${g.x.toFixed(0)}, ${g.z.toFixed(0)} \xB7 ${bt(g.x,g.z).toFixed(0)} m</span></div>`).join("")}`,c()};o.onload=u,o.complete&&u();let d=l=>{let f=r.getBoundingClientRect();return sp((l.clientX-f.left)/f.width*n,(l.clientY-f.top)/f.height*n,n)};r.addEventListener("click",l=>{let[f,x]=d(l),_;for(let g of pe.targets)Math.hypot(g.x-f,g.z-x)<22&&(f=g.x,x=g.z,_=g.id);if(Math.abs(f)>430||Math.abs(x)>430){Nt.error();return}t.route.push({x:f,z:x,target:_}),Nt.select(),u()}),r.addEventListener("contextmenu",l=>{l.preventDefault(),t.route.length>1&&(t.route.pop(),u())}),r.addEventListener("mousemove",l=>{let[f,x]=d(l);s.querySelector("#hover").textContent=`x ${f.toFixed(0)} z ${x.toFixed(0)} \xB7 elev ${bt(f,x).toFixed(1)} m \xB7 slope ${Yl(f,x).deg.toFixed(1)}\xB0 \xB7 ${Xt[Zn(f,x)].name}`}),s.querySelector("#auto").onclick=()=>{t.route=cp(),u()},s.querySelector("#undo").onclick=()=>{t.route.length>1&&(t.route.pop(),u())},s.querySelector("#clear").onclick=()=>{t.route=[{x:pe.landing.x,z:pe.landing.z}],u()},s.querySelector("#go").onclick=()=>{if(!Rs(t.design).valid){Nt.error();return}i.go("sim")}}};function Fv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=.75+.25*(Na(a/6,r/6,3)*.5+Na(a/2,r/2,4)*.35+Math.random()*.3),h=(r*256+a)*4;n.data[h]=n.data[h+1]=n.data[h+2]=Math.min(255,o*255),n.data[h+3]=255}t.putImageData(n,0,0);let s=new ni(e);return s.wrapS=s.wrapT=Tn,s.repeat.set(220,220),s.anisotropy=4,s}function Uv(){let i=new Vn(9e3,32,16),e=new pn({side:Lt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:new F(0,1,0)},tau:{value:.6}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`uniform vec3 sunDir; uniform float tau; varying vec3 vDir;
      void main(){
        float h = max(vDir.y, 0.0);
        vec3 zen = mix(vec3(0.42,0.30,0.24), vec3(0.55,0.42,0.33), clamp(tau-0.5,0.0,1.0));
        vec3 hor = mix(vec3(0.86,0.66,0.48), vec3(0.78,0.58,0.42), clamp(tau-0.5,0.0,1.0));
        vec3 col = mix(hor, zen, pow(h, 0.55));
        float sd = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
        col += vec3(0.55,0.65,0.85) * pow(sd, 40.0) * 0.5 / (1.0+tau);   // blue-ish halo (Mars forward scattering)
        col += vec3(1.0,0.95,0.85) * smoothstep(0.9993, 0.9998, sd) * 1.5 / (0.6+tau);
        col *= mix(0.05, 1.0, smoothstep(-0.08, 0.25, sunDir.y));
        if (vDir.y < 0.0) col = hor * 0.8 * mix(0.05, 1.0, smoothstep(-0.08, 0.25, sunDir.y));
        gl_FragColor = vec4(col, 1.0);
      }`});return new He(i,e)}function up(i,e="medium"){let t={low:{seg:220,rocks:.45,shadow:1024},medium:{seg:320,rocks:.8,shadow:2048},high:{seg:420,rocks:1,shadow:4096}}[e],n=new zn,s=new Ie(13081462);n.fog=new $r(s,.0016);let r=Uv();n.add(r);let a=new gs(16766896,7027234,.9);n.add(a);let o=new An(16773341,2.6);o.castShadow=e!=="low",o.shadow.mapSize.set(t.shadow,t.shadow);let h=o.shadow.camera;h.left=-30,h.right=30,h.top=30,h.bottom=-30,h.near=1,h.far=400,o.shadow.bias=-5e-4,o.shadow.normalBias=.04,n.add(o,o.target);let c=new Yi(Qt.size,Qt.size,t.seg,t.seg);c.rotateX(-Math.PI/2);let u=c.attributes.position,d=new Float32Array(u.count*3);for(let ae=0;ae<u.count;ae++){let le=u.getX(ae),Ae=u.getZ(ae),Ge=bt(le,Ae);u.setY(ae,Ge);let Be=Zn(le,Ae),Ve=Xt[Be].color,We=.9+.18*Zt(le/8,Ae/8,2,77),wt=.92+Math.min(.15,Ge*.004);d[ae*3]=Ve[0]*We*wt,d[ae*3+1]=Ve[1]*We*wt,d[ae*3+2]=Ve[2]*We*wt}c.setAttribute("color",new yt(d,3)),c.computeVertexNormals();let l=new ut({vertexColors:!0,roughness:.96,metalness:0,map:Fv()}),f=new He(c,l);f.receiveShadow=!0,n.add(f);let x=new Yi(16e3,16e3,160,160);x.rotateX(-Math.PI/2);let _=x.attributes.position,g=new Float32Array(_.count*3);for(let ae=0;ae<_.count;ae++){let le=_.getX(ae),Ae=_.getZ(ae),Ge=Math.max(Math.abs(le),Math.abs(Ae)),Be=Ge<520?-60:20+Zt(le/600,Ae/600,4,91)*60+Math.max(0,Ge-600)*.02,Ve=Math.hypot(le-300,Ae-4200);Be+=1400*Math.exp(-(Ve*Ve)/(1900*1900))*(.85+.25*Zt(le/400,Ae/400,3,92)),Math.hypot(le,Ae)>6500&&(Be+=(Math.hypot(le,Ae)-6500)*.35),_.setY(ae,Be);let We=.75+.15*Zt(le/300,Ae/300,2,93);g[ae*3]=.66*We,g[ae*3+1]=.42*We,g[ae*3+2]=.28*We}x.setAttribute("color",new yt(g,3)),x.computeVertexNormals();let p=new He(x,new ut({vertexColors:!0,roughness:1}));n.add(p);let v=new sr(1,1),S=v.attributes.position;for(let ae=0;ae<S.count;ae++){let le=new F().fromBufferAttribute(S,ae);le.multiplyScalar(1+.22*Na(le.x*2.1+5,le.z*2.1+le.y*1.7,61)),S.setXYZ(ae,le.x,le.y,le.z)}v.computeVertexNormals();let M=uu().filter((ae,le)=>ae.big||le%100/100<t.rocks),T=new bi(v,new ut({color:8014387,roughness:.9,flatShading:!0}),M.length),E=new Ye,m=new jt,y=new En;M.forEach((ae,le)=>{y.set(ae.rot*.3,ae.rot,ae.rot*.2),m.setFromEuler(y),E.compose(new F(ae.x,bt(ae.x,ae.z)+ae.size*.25,ae.z),m,new F(ae.size,ae.size*ae.sq,ae.size*(.8+ae.sq*.3))),T.setMatrixAt(le,E);let Ae=new Ie().setHSL(.05+ae.seed%7*.004,.45,.22+ae.seed%13*.012);T.setColorAt(le,Ae)}),T.castShadow=!0,T.receiveShadow=!0,n.add(T);let C={};for(let ae of pe.targets){let le=new kt,Ae=bt(ae.x,ae.z);le.position.set(ae.x,Ae,ae.z);let Ge=new He(new Gn(.6,1.4,60,16,1,!0),new Ot({color:4182271,transparent:!0,opacity:.22,blending:vs,depthWrite:!1,side:Vt,fog:!1}));Ge.position.y=30,le.add(Ge);let Be=new He(new na(7.5,8.2,64),new Ot({color:4182271,transparent:!0,opacity:.7,side:Vt,depthWrite:!1}));if(Be.rotation.x=-Math.PI/2,Be.position.y=.4,le.add(Be),ae.id==="T1")for(let Ve=0;Ve<6;Ve++){let We=new He(new Gt(5-Ve*.5,.35,3.2-Ve*.3),new ut({color:new Ie().setHSL(.06,.35,.42-Ve*.03),roughness:.9}));We.position.set(3,.18+Ve*.35,-2),We.rotation.y=.3+Ve*.03,We.castShadow=We.receiveShadow=!0,le.add(We)}if(ae.id==="T3")for(let Ve=0;Ve<12;Ve++){let We=new He(new sr(.35+Ve%3*.2,0),new ut({color:5908e3,roughness:.6,metalness:.2,flatShading:!0}));We.position.set(Math.cos(Ve*2.4)*(2+Ve*.25),.2,Math.sin(Ve*2.4)*(2+Ve*.25)),We.castShadow=!0,le.add(We)}n.add(le),C[ae.id]={group:le,beam:Ge,ring:Be}}let R=new He(new ms(9,48),new Ot({color:3809300,transparent:!0,opacity:.35,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.set(pe.landing.x,bt(pe.landing.x,pe.landing.z)+.15,pe.landing.z),n.add(R);let N=null;function O(ae){if(N&&(n.remove(N),N.geometry.dispose()),!ae||ae.length<2)return;let le=[];for(let Be=0;Be<ae.length-1;Be++){let Ve=ae[Be],We=ae[Be+1],wt=Math.hypot(We.x-Ve.x,We.z-Ve.z),dt=Math.max(2,Math.ceil(wt/3));for(let Dt=0;Dt<dt;Dt++){let U=Dt/dt,ce=Ve.x+(We.x-Ve.x)*U,te=Ve.z+(We.z-Ve.z)*U;le.push(new F(ce,bt(ce,te)+.35,te))}}let Ae=ae[ae.length-1];le.push(new F(Ae.x,bt(Ae.x,Ae.z)+.35,Ae.z));let Ge=new xt().setFromPoints(le);N=new wi(Ge,new sa({color:4645119,dashSize:2,gapSize:1.6,transparent:!0,opacity:.85})),N.computeLineDistances(),n.add(N)}let W=e==="low"?600:1500,I=new xt,B=new Float32Array(W*3);for(let ae=0;ae<W;ae++)B[ae*3]=(Math.random()-.5)*120,B[ae*3+1]=Math.random()*25,B[ae*3+2]=(Math.random()-.5)*120;I.setAttribute("position",new yt(B,3));let $=document.createElement("canvas");$.width=$.height=32;let V=$.getContext("2d"),se=V.createRadialGradient(16,16,0,16,16,16);se.addColorStop(0,"rgba(255,255,255,1)"),se.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=se,V.fillRect(0,0,32,32);let H=new ni($),K=new ti(I,new Hn({color:14264186,size:.14,map:H,transparent:!0,opacity:.35,depthWrite:!1}));n.add(K);let ee=200,Ee=new xt,Ne=new Float32Array(ee*3),q=new Float32Array(ee);Ee.setAttribute("position",new yt(Ne,3));let xe=new ti(Ee,new Hn({color:12946012,size:.5,map:H,transparent:!0,opacity:.5,depthWrite:!1}));n.add(xe);let we=0,Re=new F;function ve(ae,le,Ae,Ge,Be){let Ve=(le-12)*15*Math.PI/180,We=su(le),wt=Math.asin(Math.min(1,We));Re.set(-Math.sin(Ve)*Math.cos(wt),Math.sin(wt),-.08).normalize(),r.material.uniforms.sunDir.value.copy(Re),r.material.uniforms.tau.value=Ae,r.position.copy(Ge);let dt=Math.exp(-Ae/Math.max(.15,We)),Dt=Math.min(1,Math.max(0,(Re.y+.05)/.25));o.intensity=(.4+2.6*dt*Math.min(1,We*3))*Dt,a.intensity=(.55+.6*(1-dt)+.3*We)*(.12+.88*Dt),o.position.copy(Ge).addScaledVector(Re,150),o.target.position.copy(Ge),s.setRGB(.78-(Ae-.6)*.05,.6-(Ae-.6)*.06,.46-(Ae-.6)*.06),s.multiplyScalar(.1+.9*Dt),n.fog.color.copy(s),n.fog.density=.0011+.0026*Math.max(0,Ae-.5),K.position.set(Ge.x,Ge.y-3,Ge.z),K.material.opacity=.18+.35*Math.min(1,Ae-.5);let U=I.attributes.position;for(let te=0;te<W;te++){let ye=U.getX(te)+ae*(2+Ae*4);ye>60&&(ye-=120),U.setX(te,ye)}U.needsUpdate=!0;for(let te=0;te<ee;te++)q[te]>0?(q[te]-=ae,Ne[te*3+1]+=ae*.6):Ne[te*3+1]=-999;if(Be>.5)for(let te=0;te<2;te++){let ye=we=(we+1)%ee;Ne[ye*3]=Ge.x+(Math.random()-.5)*2.2,Ne[ye*3+2]=Ge.z+(Math.random()-.5)*2.2,Ne[ye*3+1]=bt(Ne[ye*3],Ne[ye*3+2])+.1,q[ye]=1.2}Ee.attributes.position.needsUpdate=!0;let ce=performance.now()/1e3;for(let te in C)C[te].ring.material.opacity=.45+.3*Math.sin(ce*2),C[te].beam.material.opacity=.15+.08*Math.sin(ce*1.3)}function Xe(){n.traverse(ae=>{ae.geometry&&ae.geometry.dispose(),ae.material&&(Array.isArray(ae.material)?ae.material:[ae.material]).forEach(Ae=>{Ae.map?.dispose(),Ae.dispose()})})}return{scene:n,sun:o,update:ve,setRoute:O,targets:C,dispose:Xe,ground:f}}var Ov={T1:{SiO2:41.1,FeOT:20.1,Al2O3:8.5,MgO:9.3,CaO:7,Na2O:3,SO3:5.6,TiO2:1.1},T2:{SiO2:42.9,FeOT:19.2,Al2O3:9.4,MgO:8.7,CaO:7.3,Na2O:2.7,SO3:5.5,TiO2:1.2},T3:{SiO2:44.2,FeOT:22.4,Al2O3:8.9,MgO:6.1,CaO:5.8,Na2O:2.5,SO3:4.7,TiO2:1},T4:{SiO2:45.5,FeOT:18,Al2O3:10.2,MgO:7.5,CaO:6.6,Na2O:3.1,SO3:3.9,TiO2:1}},du=7,Is=(i,e)=>(du=(du*9301+49297)%233280,i*(1+(du/233280-.5)*2*e));function Bv(i){return Object.entries(i).map(([e,t])=>`<div class="comp"><span style="width:44px">${e}</span><i style="width:${t*2.4}px"></i><span>${t.toFixed(1)}%</span></div>`).join("")}function dp(i,e,t,n){let s=n.t,r=e.points,a=e.dataMb,o="",h="",c="",u="";switch(e.id){case"img":{let d=t.has("mastcam");o=d?"Mastcam":"Navcam",d||(r=Math.round(r*.5),a=Math.round(a*.4));let l=d?24:8;h=`${l} ${d?"colour":"B/W"} frames`,c=`${l} ${d?"colour zoom (Mastcam)":"black-and-white stereo (Navcam)"} images of ${i.name}.
`+(i.id==="T1"?"Visible: thin, flat layers 1\u20135 mm thick \u2014 typical of fine mud settling in still lake water.":"Visible: ripple crests ~1\u20133 m apart, oriented by the prevailing wind.")+(d?"":`
(Navcam only: half science value \u2014 colour imaging needs Mastcam.)`);break}case"pano":{o="Mastcam",h="142-frame 360\xB0 colour mosaic",c=`142-frame colour panorama from the rim at ${on(s)}.
Aeolis Mons (Mount Sharp, ~5.5 km tall) dominates the southern horizon; layered sediments visible on its lower slopes.
Atmospheric optical depth \u03C4 \u2248 ${Kn(s).toFixed(2)} (estimated from sky brightness).`;break}case"chem":{let d=t.has("chemcam");o=d?"ChemCam (LIBS)":"APXS (arm)";let l=Object.fromEntries(Object.entries(Ov[i.id]).map(([f,x])=>[f,+Is(x,d?.06:.03).toFixed(1)]));h=`SiO\u2082 ${l.SiO2}% \xB7 FeOT ${l.FeOT}% \xB7 MgO ${l.MgO}%`,c=`${d?"30 laser shots at 3.2 m distance":"APXS contact measurement, 20 min integration"} \u2192 oxide wt%:
`+Object.entries(l).map(([f,x])=>`${f.padEnd(6)} ${x.toFixed(1)}%`).join("   ")+`
Interpretation: ${i.id==="T3"?"iron enrichment consistent with hematite deposited by groundwater.":i.id==="T1"?"basaltic composition, altered by water \u2014 elevated sulfur in veins.":"basaltic material similar to the average Martian crust."}`,u=Bv(l);break}case"core":{o="Drill + onboard lab",h="6.4 cm core \xB7 ~20% smectite clay",c=`Drilled 6.4 cm deep, 1.6 cm wide hole. Powder delivered to onboard X-ray diffraction lab:
~20% smectite clay, plagioclase feldspar, pyroxene, magnetite, minor sulfates.
Interpretation: the lake water was fresh and pH-neutral \u2014 this environment could once have supported microbial life.`;break}case"scoop":{o="Scoop arm",h="Basaltic sand, grains ~150 \xB5m",c=`Scooped ~45 cm\xB3 of dune sand, sieved to < 1 mm.
Dark basaltic sand with olivine; median grain size ~150 \xB5m; very little dust (actively moved by wind).`;break}case"wx":{o="REMS-type weather station";let d=Is(As(s),.03),l=Is(Bl(s),.01),f=Math.abs(Is(5,.6));h=`${d.toFixed(1)} \xB0C \xB7 ${l.toFixed(0)} Pa \xB7 wind ${f.toFixed(1)} m/s`,c=`Sol ${Ct(s)} ${on(s)} \u2014 air temperature ${d.toFixed(1)} \xB0C, pressure ${l.toFixed(0)} Pa, wind ${f.toFixed(1)} m/s, relative humidity < 5%, UV flux ${(Xn(s)*.04).toFixed(1)} W/m\xB2.
For comparison: Earth sea-level pressure is 101,325 Pa (~${(101325/l).toFixed(0)}\xD7 more).`;break}case"rad":{o="RAD-type detector";let d=Is(It.radiation_mGy_day*1e3/24,.08),l=Is(It.radiation_mSv_day*1e3/24,.08);h=`${d.toFixed(1)} \xB5Gy/h \xB7 ${l.toFixed(1)} \xB5Sv/h`,c=`Absorbed dose rate ${d.toFixed(1)} \xB5Gy/h (tissue), dose equivalent ${l.toFixed(1)} \xB5Sv/h \u2192 \u2248${(l*24/1e3).toFixed(2)} mSv per sol.
Mostly galactic cosmic rays. A 500-sol stay would give ~${(l*24*500/1e3).toFixed(0)} mSv \u2014 important data for future astronauts.
(Reference: Curiosity RAD measured 0.64 mSv/day.)`;break}case"h2o":{let d=t.has("dan");o=d?"DAN neutron detector":"Ground radar";let l=Is(i.id==="T3"?3.1:2.4,.1);h=d?`${l.toFixed(1)} wt% water-equivalent hydrogen`:"Layered reflectors at 2.1, 4.8, 7.5 m",c=d?`Active neutron pulses: ${l.toFixed(1)} wt% water-equivalent hydrogen in the top ~60 cm.
Water is locked in hydrated minerals \u2014 evidence that water once soaked this rock.`:`Radar section to 10 m depth: three dipping reflectors at ~2.1, 4.8 and 7.5 m \u2014 stacked sedimentary layers deposited by water.
(Radar shows structure, but not water content \u2014 a neutron detector would measure hydrogen.)`,d||(r=Math.round(r*.8));break}}return{points:r,dataMb:a,instrument:o,summary:h,detail:c,html:u}}var fp=40,pp={enter(i){let e=i.state.design,t=Yn(e),n=Rs(e),s=ui(e),r=up(i.renderer,i.settings.quality),a=Gl(e);r.scene.add(a.root);let o=(i.state.route||[]).length>1?i.state.route:null;r.setRoute(o);let h=new At(55,innerWidth/innerHeight,.1,2e4),c=t.chassis.scale,u=1.45*c,d=Qf();i.state.attempts++;let l=this.S={t:pe.startHour,x:pe.landing.x,z:pe.landing.z,yaw:Math.atan2(o?o[1].x-pe.landing.x:1,o?o[1].z-pe.landing.z:0),speed:0,throttle:0,steer:0,battery:t.battery.capacity,wheel:100,odo:0,E:{gen:0,solar:0,rtg:0,idle:0,heat:0,drive:0,science:0,comms:0,wasted:0},buffer:0,sent:0,points:0,samples:0,done:{},measurements:[],log:[],tele:[],teleT:0,task:null,queue:[],autopilot:!1,wp:1,slipEvents:0,slipTimer:0,collisions:0,dmgByTerrain:{bedrock:0,gravel:0,sand:0,rocky:0},distByTerrain:{bedrock:0,gravel:0,sand:0,rocky:0},warp:1,passes:new Set,paused:!1,ended:!1,night:null,dose:0,minBattery:t.battery.capacity,lastSlip:0,dteOn:!0,visited:new Set,missingNeeds:new Set,noRelayWarned:!1,heaterWh:0,rtgHeatSavedWh:0,stormSolarLossWh:0,cam:{yaw:0,pitch:.32,dist:16*Math.max(.75,c),mode:"chase"},hazard:!1,power:{gen:0,load:0,solar:0},slope:0,slip:0,ty:"gravel"},f=new F,x=new jt,_=new Ye,g={},p=(U,ce="info")=>{l.log.push({t:l.t,msg:U,kind:ce})},v=i.html(`<div class="screen hud passthrough">
      <div class="hud-tl glass corner">
        <div class="row" style="justify-content:space-between"><div><div class="lbl">MISSION TIME</div><div class="big" id="h-time">SOL 1 \xB7 09:00</div></div>
          <div style="text-align:right"><div class="lbl">BATTERY</div><div class="big" id="h-bp">100%</div></div></div>
        <div class="batt" id="h-batt"><i></i></div>
        <div class="kv"><span>Generation</span><b id="h-gen">0 W</b></div>
        <div class="kv"><span>Consumption</span><b id="h-load">0 W</b></div>
        <div class="kv"><span>Net power</span><b id="h-net">0 W</b></div>
        <div class="kv"><span>Air temp \xB7 \u03C4 dust</span><b id="h-env">\u2013</b></div>
        <div class="kv"><span>Data onboard \xB7 sent</span><b id="h-data">0 \xB7 0 Mb</b></div>
      </div>
      <div class="hud-tc glass"><div class="lbl" id="h-mode">MANUAL DRIVE</div><div class="mono" style="font-size:12px;margin-top:3px" id="h-link">\u2013</div></div>
      <div class="hud-tr glass corner"><canvas id="mini" width="420" height="420" style="width:210px;height:210px;border-radius:8px;display:block"></canvas></div>
      <div class="hud-bl glass corner">
        <div class="row" style="justify-content:space-between;align-items:flex-end"><div><div class="lbl">SPEED</div><div class="big" id="h-spd">0.000 m/s</div></div><div style="text-align:right"><div class="lbl">ODOMETER</div><div class="big" id="h-odo">0 m</div></div></div>
        <div class="kv" style="margin-top:8px"><span>Terrain</span><b id="h-ter">\u2013</b></div>
        <div class="kv"><span>Slope \xB7 wheel slip</span><b id="h-slope">\u2013</b></div>
        <div class="kv"><span>Wheel health</span><b id="h-wh">100%</b></div>
        <div class="batt" id="h-whb" style="height:6px;margin:4px 0 0"><i></i></div>
      </div>
      <div class="hud-br glass"><div class="lbl" style="margin-bottom:6px">OBJECTIVES</div><div id="h-obj"></div>
        <div style="margin-top:8px;border-top:1px solid var(--line);padding-top:6px"><span class="kbd">WASD</span> drive <span class="kbd">R</span> AutoNav <span class="kbd">E</span> science <span class="kbd">Tab</span> data <span class="kbd">M</span> map <span class="kbd">C</span> cam <span class="kbd">T</span> warp <span class="kbd">Esc</span> pause</div>
        <button class="btn small mars" id="endbtn" style="margin-top:8px;width:100%">End mission &amp; report</button></div>
      <div class="toast-wrap" id="toasts"></div>
      <div class="prompt glass" id="prompt" style="display:none"></div>
      <div id="haz" class="glass" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-140px);padding:6px 16px;color:var(--warn);font-family:var(--h);font-size:12px;letter-spacing:.15em">\u26A0 HAZARD AHEAD</div>
      <div id="navov" class="navcam-overlay" style="display:none"><div class="lbl">NAVCAM \xB7 STEREO B/W \xB7 LIVE</div><div class="crosshair"></div></div>
      <div id="modal"></div>
    </div>`),S=U=>v.querySelector("#"+U),M=(U,ce="")=>{let te=document.createElement("div");for(te.className=`toast ${ce}`,te.textContent=U,S("toasts").appendChild(te),setTimeout(()=>te.remove(),4200);S("toasts").children.length>4;)S("toasts").firstChild.remove()},T=new Image;T.src=Fa();let E=S("mini").getContext("2d");p(`Touchdown at ${pe.site}. Rover mass ${n.mass.toFixed(0)} kg.`),M("Touchdown confirmed! Drive with WASD or press R for AutoNav","ok"),o||M("No route planned \u2014 drive manually to the beacons","warn"),qf();let m=()=>{let U=null,ce=1e9;for(let te of pe.targets){let ye=Math.hypot(te.x-l.x,te.z-l.z);ye<ce&&(ce=ye,U=te)}return{t:U,d:ce}},y=U=>U.needs.every(ce=>Ln(s,ce)),C=()=>pe.targets.map(U=>{let ce=U.tasks.filter(te=>l.done[U.id]?.[te.id]).length;return`<div class="obj ${ce===U.tasks.length?"done":""}"><span class="s">${ce===U.tasks.length?"\u2714":ce?"\u25D0":"\u25CB"}</span>${U.id} ${U.name} <span class="muted">${ce}/${U.tasks.length}</span></div>`}).join(""),R=U=>{if(l.ended)return;l.ended=!0,l.paused=!0,ou();let ce={power:"Battery depleted \u2014 the rover entered a low-power fault and went silent.",night:"Battery depleted overnight \u2014 electronics froze at \u221270 \xB0C.",wheels:"Wheels destroyed \u2014 the rover is immobilised.",time:`End of sol ${pe.sols} \u2014 mission operations complete.`,player:"Mission ended by the flight director."}[U];p(ce,U==="power"||U==="night"||U==="wheels"?"bad":"info"),i.state.result={reason:U,reasonTxt:ce,design:structuredClone(e),stats:n,S:{...l,passes:[...l.passes],visited:[...l.visited],missingNeeds:[...l.missingNeeds]}},U==="time"||U==="player"?Nt.success():Nt.fail(),setTimeout(()=>i.go("results"),1600),M(ce,U==="time"||U==="player"?"ok":"err")},N=t.instruments.filter(U=>U.id==="rems"||U.id==="rad").reduce((U,ce)=>U+ce.power,0);function O(U,ce,te,ye){let P=Kn(l.t),ke=Ca(t,l.t,P),tt=Ca(t,l.t,pe.dust.tauStart),Je=ke+t.rtg.power,re=Qi(t,l.t);t.rtg.heat&&(l.rtgHeatSavedWh+=Qi({...t,rtg:{heat:!1},chassis:t.chassis},l.t)*U*qn);let Qe=0;if(!ye&&t.comms.dte&&l.buffer>.01&&l.dteOn&&l.battery>t.battery.capacity*.25){let k=Math.min(l.buffer,fp*U);l.buffer-=k,l.sent+=k,Qe=t.comms.txPower}let Te=ye?t.chassis.sleepLoad:t.chassis.baseLoad+N,Ue=Te+re+ce+te+Qe,A=qn*U;l.E.gen+=Je*A,l.E.solar+=ke*A,l.E.rtg+=t.rtg.power*A,l.E.idle+=Te*A,l.E.heat+=re*A,l.E.drive+=ce*A,l.E.science+=te*A,l.E.comms+=Qe*A,l.heaterWh+=re*A,l.t>pe.dust.stormStart&&(l.stormSolarLossWh+=Math.max(0,tt-ke)*A);let b=l.battery+(Je-Ue)*A;b>t.battery.capacity&&(l.E.wasted+=b-t.battery.capacity,b=t.battery.capacity),l.battery=b,l.minBattery=Math.min(l.minBattery,l.battery),l.power={gen:Je,load:Ue,solar:ke,heat:re,drive:ce,comms:Qe,idle:Te},l.dose+=It.radiation_mGy_day/24*U*1e3,l.t+=U}function W(){l.t-l.teleT<.1||(l.teleT=l.t,l.tele.push({t:l.t,x:l.x,z:l.z,batt:l.battery/t.battery.capacity*100,gen:l.power.gen,load:l.power.load,temp:As(l.t),p:Bl(l.t),tau:Kn(l.t),elev:bt(l.x,l.z),dose:l.dose,odo:l.odo}))}function I(){let U=Ct(l.t),ce=Pn(l.t);pe.relayPasses.forEach((te,ye)=>{let P=`${U}-${ye}`;if(ce>=te.t&&!l.passes.has(P))if(l.passes.add(P),t.comms.relay){let ke=Math.min(l.buffer,te.capacityMb);l.buffer-=ke,l.sent+=ke,l.battery-=t.comms.txPower*.17*qn,l.E.comms+=t.comms.txPower*.17*qn,M(`\u{1F4E1} ${te.name} relay pass: ${ke.toFixed(0)} Mb sent to Earth`,"ok"),Nt.data(),p(`${te.name} relay pass \u2014 ${ke.toFixed(0)} Mb downlinked.`,"good")}else l.noRelayWarned||(l.noRelayWarned=!0,M(`${te.name} overhead, but no UHF radio onboard`,"warn"),p(`${te.name} relay pass missed \u2014 no UHF antenna.`,"bad"))})}let B=()=>{let U=Pn(l.t),ce=Ct(l.t),te=pe.relayPasses.map((P,ke)=>({...P,i:ke})).find(P=>!l.passes.has(`${ce}-${P.i}`)&&P.t>U),ye=[];return t.comms.relay&&ye.push(te?`UHF: ${te.name} pass in ${$(te.t-U)}`:"UHF: next pass tomorrow"),t.comms.dte&&ye.push(l.buffer>.01&&l.dteOn&&l.battery>t.battery.capacity*.25?`X-band: sending ${fp} Mb/h`:"X-band: idle"),ye.join(" \xB7 ")},$=U=>`${Math.floor(U)}h ${String(Math.floor(U%1*60)).padStart(2,"0")}m`,V=(U,ce)=>{if(l.task||l.done[U.id]?.[ce.id])return;if(!y(ce)){Nt.error(),ce.needs.filter(ye=>!Ln(s,ye)).forEach(ye=>l.missingNeeds.add(`${U.id}:${ce.label}`));return}let te=br[ce.id];l.task={tg:U,tk:ce,remaining:te.hours,total:te.hours,power:te.power},l.throttle=0,l.autopilot=!1,Nt.scan()};function se(){let{tg:U,tk:ce}=l.task,te=dp(U,ce,s,l);if(l.done[U.id]||={},l.done[U.id][ce.id]=te,l.buffer+=te.dataMb,l.points+=te.points,ce.sample&&l.samples++,l.measurements.push({t:l.t,target:U.id,targetName:U.name,task:ce.label,...te}),p(`${U.id} ${ce.label}: ${te.summary}`,"good"),M(`\u2714 ${ce.label} complete (+${te.points} pts, ${te.dataMb} Mb)`,"ok"),Nt.data(),l.task=null,l.queue.length){let ye=l.queue.shift();V(ye.tg,ye.tk)}H==="science"&&ee()}let H=null,K=()=>{S("modal").innerHTML="",H=null};function ee(){let{t:U,d:ce}=m();if(ce>16){K();return}H="science",l.visited.add(U.id),S("modal").innerHTML=`<div class="modal-bg"><div class="modal glass corner">
        <div class="row" style="justify-content:space-between"><div><div class="chip" style="color:var(--mars2);border-color:var(--mars2);display:inline-block">${U.id} \xB7 ${U.kind.toUpperCase()}</div><h2 style="margin-top:8px">${U.name}</h2></div><button class="btn iconbtn ghost" data-x>\u2715</button></div>
        <p class="muted" style="font-size:13px">${U.blurb}</p>
        ${U.tasks.map((te,ye)=>{let P=l.done[U.id]?.[te.id],ke=y(te),tt=l.task?.tk===te&&l.task?.tg===U,Je=br[te.id];return`<div class="task"><div class="num">${ye+1}</div><div><div style="font-weight:600">${te.label}</div>
            <div class="req">${te.needs.map(re=>re.split("|").map(Qe=>`<span class="${s.has(Qe)?"y":"n"}">${s.has(Qe)?"\u2713":"\u2717"} ${Ee(Qe)}</span>`).join(" or ")).join(" \xB7 ")}
            <span class="muted"> \xB7 ${Math.round(Je.hours*60)} min \xB7 ${Je.power} W \xB7 ${te.dataMb} Mb</span></div>
            ${tt?`<div class="progress"><i id="tprog" style="width:${(1-l.task.remaining/l.task.total)*100}%"></i></div>`:""}
            ${P?`<div class="result-box">${Zl(P.detail)}</div>`:""}</div>
            <div>${P?'<span class="chip" style="color:var(--ok);border-color:var(--ok)">DONE</span>':tt?'<span class="chip">RUNNING\u2026</span>':ke?`<button class="btn small primary" data-run="${ye}">Run</button>`:'<span class="chip" style="color:var(--err);border-color:var(--err)">MISSING</span>'}</div></div>`}).join("")}
        <div class="row" style="justify-content:space-between;margin-top:14px"><span class="muted" style="font-size:12px">Battery ${(l.battery/t.battery.capacity*100).toFixed(0)}% \xB7 rover must stay parked while instruments work</span>
        <button class="btn small" data-all>Run all available</button></div>
      </div></div>`,S("modal").querySelector("[data-x]").onclick=K,S("modal").querySelectorAll("[data-run]").forEach(te=>te.onclick=()=>{V(U,U.tasks[+te.dataset.run]),ee()}),S("modal").querySelector("[data-all]").onclick=()=>{let te=U.tasks.filter(ye=>!l.done[U.id]?.[ye.id]&&y(ye)&&l.task?.tk!==ye);U.tasks.filter(ye=>!y(ye)).forEach(ye=>l.missingNeeds.add(`${U.id}:${ye.label}`)),!l.task&&te.length&&V(U,te.shift()),l.queue.push(...te.map(ye=>({tg:U,tk:ye}))),ee()}}let Ee=U=>({mastcam:"Mastcam",navcam:"Navcam",chemcam:"ChemCam",apxs:"APXS (arm)",drill:"Drill arm",scoop:"Scoop arm",rems:"Weather stn",rad:"RAD",dan:"DAN",gpr:"Radar"})[U]||U;function Ne(U="live"){H="dash",S("modal").innerHTML=`<div class="modal-bg"><div class="modal wide glass corner">
        <div class="row" style="justify-content:space-between"><h2>Scientific Data Dashboard</h2><button class="btn iconbtn ghost" data-x>\u2715</button></div>
        <div id="dash" style="margin-top:14px"></div></div></div>`,S("modal").querySelector("[data-x]").onclick=K,ec(S("modal").querySelector("#dash"),l,t,s,U)}function q(){H="map",S("modal").innerHTML=`<div class="modal-bg"><div class="modal glass corner" style="width:min(720px,92vw)"><div class="row" style="justify-content:space-between"><h2>Traverse Map</h2><button class="btn iconbtn ghost" data-x>\u2715</button></div>
        <canvas width="800" height="800" style="width:100%;margin-top:12px;border-radius:10px"></canvas></div></div>`,S("modal").querySelector("[data-x]").onclick=K,we(S("modal").querySelector("canvas").getContext("2d"),800,!0)}function xe(){H="pause",l.paused=!0,S("modal").innerHTML=`<div class="modal-bg"><div class="modal glass corner" style="width:380px;text-align:center">
        <h2 style="margin-bottom:20px">Paused</h2>
        <div class="col"><button class="btn primary" data-a="resume">\u25B6 Resume</button><button class="btn" data-a="restart">\u21BA Restart mission</button>
        <button class="btn" data-a="design">\u2699 Redesign rover</button><button class="btn" data-a="plan">\u270E Re-plan route</button><button class="btn" data-a="menu">\u2302 Main menu</button></div>
        <div class="muted" style="font-size:12px;margin-top:16px">Sol ${Ct(l.t)} \xB7 ${on(l.t)} \xB7 ${l.points} science points</div></div></div>`,S("modal").querySelectorAll("[data-a]").forEach(U=>U.onclick=()=>{let ce=U.dataset.a;K(),l.paused=!1,ce==="restart"?i.go("sim"):ce==="design"?i.go("design"):ce==="plan"?i.go("planning"):ce==="menu"&&i.go("menu")})}function we(U,ce,te){T.complete&&U.drawImage(T,0,0,ce,ce),Ua(U,ce,te?1.1:.75),o&&(U.strokeStyle="rgba(70,224,255,.85)",U.lineWidth=te?3:2,U.setLineDash([6,5]),U.beginPath(),o.forEach((tt,Je)=>{let[re,Qe]=Dn(tt.x,tt.z,ce);Je?U.lineTo(re,Qe):U.moveTo(re,Qe)}),U.stroke(),U.setLineDash([])),U.strokeStyle="#3dffa2",U.lineWidth=te?2.5:2,U.beginPath(),l.tele.forEach((tt,Je)=>{if(tt.x===void 0)return;let[re,Qe]=Dn(tt.x,tt.z,ce);Je?U.lineTo(re,Qe):U.moveTo(re,Qe)}),U.stroke();let[ye,P]=Dn(l.x,l.z,ce);U.save(),U.translate(ye,P),U.rotate(-l.yaw+Math.PI),U.fillStyle="#fff",U.strokeStyle="#000",U.lineWidth=1.5;let ke=te?1.4:1;U.beginPath(),U.moveTo(0,-10*ke),U.lineTo(7*ke,8*ke),U.lineTo(0,4*ke),U.lineTo(-7*ke,8*ke),U.closePath(),U.fill(),U.stroke(),U.restore()}this._kd=U=>{if(U.code==="Tab"&&U.preventDefault(),!l.ended&&(g[U.code]=!0,!U.repeat&&(U.code==="Escape"&&(H&&H!=="pause"?K():H==="pause"?(K(),l.paused=!1):xe()),!(l.paused||l.night)))){if(U.code==="KeyE"&&(H==="science"?K():m().d<16?(l.throttle=0,ee()):M("No science target within range (get inside the blue ring)","warn")),U.code==="Tab"&&(H==="dash"?K():Ne()),U.code==="KeyM"&&(H==="map"?K():q()),U.code==="KeyC"&&(l.cam.mode=l.cam.mode==="chase"?"navcam":"chase",S("navov").style.display=l.cam.mode==="navcam"?"block":"none"),U.code==="KeyT"&&(l.warp=l.warp===1?2:l.warp===2?4:1,M(`Time warp \xD7${l.warp}`)),U.code==="KeyR"){if(!o){M("No planned route \u2014 go to Planning to create one","warn");return}l.autopilot=!l.autopilot,M(l.autopilot?`AutoNav engaged \u2192 waypoint ${l.wp}`:"AutoNav off \u2014 manual control")}if(H==="science"&&/^Digit[1-3]$/.test(U.code)){let ce=m().t,te=ce.tasks[+U.code.slice(5)-1];te&&(V(ce,te),ee())}}},this._ku=U=>{g[U.code]=!1};let Re=null;this._pd=U=>{U.target===i.renderer.domElement&&(Re={x:U.clientX,y:U.clientY})},this._pm=U=>{if(!Re)return;let ce=.005*i.settings.sensitivity;l.cam.yaw-=(U.clientX-Re.x)*ce,l.cam.pitch=Math.max(.05,Math.min(1.3,l.cam.pitch+(U.clientY-Re.y)*ce*(i.settings.invertY?-1:1))),Re={x:U.clientX,y:U.clientY}},this._pu=()=>Re=null,this._wh=U=>{U.target===i.renderer.domElement&&(l.cam.dist=Math.max(5,Math.min(60,l.cam.dist*(1+U.deltaY*.001))))},this._cm=U=>U.preventDefault(),addEventListener("keydown",this._kd),addEventListener("keyup",this._ku),addEventListener("pointerdown",this._pd),addEventListener("pointermove",this._pm),addEventListener("pointerup",this._pu),addEventListener("wheel",this._wh),addEventListener("contextmenu",this._cm),S("endbtn").onclick=()=>{S("modal").innerHTML=`<div class="modal-bg"><div class="modal glass corner" style="width:420px;text-align:center"><h2>End the mission?</h2>
        <p class="muted">Data still onboard (${l.buffer.toFixed(0)} Mb) will be counted at half value as "delayed".</p>
        <div class="row" style="justify-content:center"><button class="btn" data-n>Continue</button><button class="btn mars" data-y>End &amp; report</button></div></div></div>`,H="confirm",l.paused=!0,S("modal").querySelector("[data-n]").onclick=()=>{K(),l.paused=!1},S("modal").querySelector("[data-y]").onclick=()=>{K(),l.paused=!1,R("player")}};function ve(){l.night={start:l.t,wake:Ct(l.t)*24+pe.startHour,sol:Ct(l.t)},l.autopilot=!1,l.throttle=0,l.task=null,l.queue=[],p(`Sol ${l.night.sol} ops complete. Rover going to sleep.`),S("modal").innerHTML=`<div class="modal-bg"><div class="modal glass corner" style="width:520px;text-align:center">
        <div class="lbl hd" style="color:var(--neon);font-size:12px">SOL ${l.night.sol} COMPLETE</div><h2 style="margin:10px 0">Rover sleeping through the Martian night</h2>
        <div class="mono" id="nt" style="font-size:28px;margin:12px 0">17:30</div>
        <div class="kpis" style="grid-template-columns:repeat(3,1fr)"><div class="kpi"><div class="lbl">BATTERY</div><div class="v" id="nb">\u2013</div></div><div class="kpi"><div class="lbl">AIR TEMP</div><div class="v" id="ntemp">\u2013</div></div><div class="kpi"><div class="lbl">HEATERS</div><div class="v" id="nh">\u2013</div></div></div>
        <div class="batt" id="nbatt"><i></i></div>
        <p class="muted" style="font-size:12.5px">Sleep load ${t.chassis.sleepLoad} W ${t.rtg.heat?"\xB7 RTG heat keeps the electronics warm":"+ electric heaters to keep electronics above \u221240 \xB0C"}${t.rtg.power?` \xB7 RTG charging ${t.rtg.power} W`:""}</p></div></div>`,H="night"}function Xe(U){let ce=l.night.wake-l.night.start,te=Math.min(ce/4.5*U,l.night.wake-l.t);for(let ke=0;ke<8;ke++)O(te/8,0,0,!0);W();let ye=S("modal");ye.querySelector("#nt").textContent=`${on(l.t)}`,ye.querySelector("#nb").textContent=`${Math.max(0,l.battery/t.battery.capacity*100).toFixed(0)}%`,ye.querySelector("#ntemp").textContent=`${As(l.t).toFixed(0)}\xB0C`,ye.querySelector("#nh").textContent=`${l.power.heat.toFixed(0)} W`;let P=ye.querySelector("#nbatt");if(P.querySelector("i").style.width=`${Math.max(0,l.battery/t.battery.capacity*100)}%`,P.className="batt "+(l.battery<t.battery.capacity*.2?"low":l.battery<t.battery.capacity*.5?"mid":""),l.battery<=0){l.battery=0,l.night=null,K(),R("night");return}l.t>=l.night.wake-1e-6&&(l.t=l.night.wake,l.night=null,K(),M(`\u2600 Good morning \u2014 Sol ${Ct(l.t)} begins. Battery ${(l.battery/t.battery.capacity*100).toFixed(0)}%`,"ok"),p(`Sol ${Ct(l.t)} wake-up. Battery ${(l.battery/t.battery.capacity*100).toFixed(0)}%.`))}let ae=new F,le=new F,Ae=new F,Ge=0,Be=0,Ve=new F(l.x,bt(l.x,l.z)+10,l.z+20),We=new F,wt=U=>{if(l.night)Xe(U);else if(!l.paused&&!l.ended){let Te=window.__turbo||1;for(let Ue=0;Ue<Te&&!l.ended&&!l.night;Ue++)dt(U)}let ce=(Te,Ue)=>bt(Te,Ue),te=Math.sin(l.yaw),ye=Math.cos(l.yaw),P=1.4*c,ke=1*c,tt=ce(l.x+te*P,l.z+ye*P),Je=ce(l.x-te*P,l.z-ye*P),re=ce(l.x+ye*ke,l.z-te*ke),Qe=ce(l.x-ye*ke,l.z+te*ke);if(ae.set(te*2*P,tt-Je,ye*2*P).normalize(),Ae.set(ye*2*ke,re-Qe,-te*2*ke).normalize(),le.crossVectors(ae,Ae).normalize(),le.y<0&&le.negate(),Ae.crossVectors(le,ae).normalize(),_.makeBasis(Ae,le,ae),x.setFromRotationMatrix(_),a.root.quaternion.slerp(x,Math.min(1,U*8)),f.set(l.x,(tt+Je+Qe+re)/4,l.z),a.root.position.lerp(f,Math.min(1,U*12)),a.update(U,l.speed*pe.timeScale*l.warp),l.cam.mode==="navcam"){h.fov=50;let Te=new F(0,2.15*c,.6*c).applyQuaternion(a.root.quaternion).add(a.root.position);h.position.copy(Te),We.set(l.x+te*30,ce(l.x+te*30,l.z+ye*30)+.5,l.z+ye*30),h.lookAt(We),a.root.visible=!1}else{a.root.visible=!0,h.fov=55;let Te=l.yaw+Math.PI+l.cam.yaw,Ue=l.cam.dist,A=new F(l.x-Math.sin(Te)*-Ue*Math.cos(l.cam.pitch),0,l.z-Math.cos(Te)*-Ue*Math.cos(l.cam.pitch));A.y=Math.max(ce(A.x,A.z)+1.5,a.root.position.y+1.5+Math.sin(l.cam.pitch)*Ue),Ve.lerp(A,Math.min(1,U*4)),h.position.copy(Ve),We.set(l.x,a.root.position.y+1.4*c,l.z),h.lookAt(We)}if(h.updateProjectionMatrix(),r.update(U,l.t,Kn(l.t),a.root.position,Math.abs(l.speed)*pe.timeScale),Yf(Math.min(1,Kn(l.t)-.5),Math.min(1,Math.abs(l.speed)/t.wheels.speed)),Ge+=U,Ge>.12&&(Ge=0,Dt()),Be+=U,Be>.3&&(Be=0,E.clearRect(0,0,420,420),we(E,420,!1)),l.task&&H==="science"){let Te=v.querySelector("#tprog");Te&&(Te.style.width=`${(1-l.task.remaining/l.task.total)*100}%`)}};function dt(U){let ce=l.task?Math.max(l.warp,4):l.warp,te=U*pe.timeScale*ce,ye=te/pe.secPerHour,P=0,ke=0;if(!(H&&H!=="science")&&!l.task&&((g.KeyW||g.ArrowUp)&&(P+=1),(g.KeyS||g.ArrowDown)&&(P-=1),(g.KeyA||g.ArrowLeft)&&(ke+=1),(g.KeyD||g.ArrowRight)&&(ke-=1),g.Space&&(P=0),(P||ke)&&l.autopilot&&(l.autopilot=!1,M("Manual override \u2014 AutoNav off")),l.autopilot&&o)){let ne=o[l.wp];if(!ne)l.autopilot=!1,M("Route complete!","ok");else{let he=ne.x-l.x,de=ne.z-l.z;if(Math.hypot(he,de)<5){l.wp++;let $e=pe.targets.find(ie=>Math.hypot(ie.x-ne.x,ie.z-ne.z)<3);$e&&$e.tasks.some(ie=>!l.done[$e.id]?.[ie.id])&&(l.autopilot=!1,M(`Arrived at ${$e.id} ${$e.name} \u2014 press E for science`,"ok"))}else{let $e=Math.atan2(he,de);l.hazard&&l.hazardSide&&($e+=l.hazardSide*.9);let ie=$e-l.yaw;for(;ie>Math.PI;)ie-=2*Math.PI;for(;ie<-Math.PI;)ie+=2*Math.PI;ke=Math.max(-1,Math.min(1,ie*2.5)),P=Math.abs(ie)>.6?0:1}}}l.yaw+=ke*.55*U*Math.min(ce,2);let Je=Math.sin(l.yaw),re=Math.cos(l.yaw),Qe=P>=0?1:-1,Te=bt(l.x+Je*2*Qe,l.z+re*2*Qe),Ue=bt(l.x-Je*2*Qe,l.z-re*2*Qe),A=Math.atan2(Te-Ue,4)*180/Math.PI,b=Zn(l.x,l.z),k=kl(t,b,A);l.slope=A,l.ty=b,l.slip=k.slip;let oe=P*t.wheels.speed*k.speedFrac*(l.battery>0?1:0);l.speed+=(oe-l.speed)*Math.min(1,U*3),P&&k.speedFrac<.15?(l.slipTimer+=U,l.slipTimer>1.2&&performance.now()-l.lastSlip>4e3&&(l.lastSlip=performance.now(),l.slipEvents++,M(`\u26A0 Wheels slipping: ${A.toFixed(0)}\xB0 on ${Xt[b].name.toLowerCase()} is beyond your traction limit`,"warn"),p(`Stuck: ${A.toFixed(0)}\xB0 slope on ${Xt[b].name.toLowerCase()} (slip ${(k.slip*100).toFixed(0)}%).`,"bad")),l.autopilot&&l.slipTimer>3&&(l.autopilot=!1,M("AutoNav halted \u2014 terrain beyond traction limits. Back up and drive around it.","err"))):l.slipTimer=0;let Q=l.speed*te,ue=l.x+Je*Q,fe=l.z+re*Q,Z=null;l.hazard=!1,l.hazardSide=0;for(let ne of d)if(Math.hypot(ne.x-ue,ne.z-fe)<ne.size*.85+u&&(Z=ne),n.hazcam){let de=ne.x-l.x,De=ne.z-l.z,$e=de*Je+De*re,ie=de*re-De*Je;$e>0&&$e<12&&Math.abs(ie)<ne.size+u+.6&&(l.hazard=!0,l.hazardSide=ie>0?-1:1)}if((Math.abs(ue)>440||Math.abs(fe)>440)&&(ue=l.x,fe=l.z),Z){if(Math.abs(l.speed)>t.wheels.speed*.3){l.collisions++;let ne=3/t.wheels.durability;l.wheel-=ne,l.dmgByTerrain.rocky+=ne,M(`\u{1F4A5} Collision with a boulder! Wheel damage \u2212${ne.toFixed(1)}%`,"err"),Nt.error(),p(`Collision with boulder (${Z.size.toFixed(1)} m).`,"bad")}l.speed=0,ue=l.x,fe=l.z}let J=Math.hypot(ue-l.x,fe-l.z);l.x=ue,l.z=fe,l.odo+=J,l.distByTerrain[b]+=J;let me=zl(e,t,b)*J;l.wheel-=me,l.dmgByTerrain[b]+=me;let j=Math.abs(P)>0||Math.abs(ke)>0?Mr(e,t,b,A*Math.sign(P||1),Math.abs(l.speed)).total:0,Y=0;if(l.task&&(Y=l.task.power,l.task.remaining-=ye,l.task.remaining<=0&&se()),O(ye,j,Y,!1),l.lastDrive=j,I(),W(),l.battery<=0){l.battery=0,R("power");return}if(l.wheel<=0){l.wheel=0,R("wheels");return}l.wheel<25&&!l.wheelWarned&&(l.wheelWarned=!0,M("\u26A0 Wheel health below 25% \u2014 avoid rock fields!","err")),l.battery<t.battery.capacity*.15&&!l.lowWarned&&(l.lowWarned=!0,M("\u26A0 Battery below 15% \u2014 park in the sun or reduce activity","err")),l.battery>t.battery.capacity*.3&&(l.lowWarned=!1),l.t>pe.dust.stormStart&&!l.stormWarned&&(l.stormWarned=!0,M("\u{1F32A} Dust storm arriving \u2014 solar output dropping","warn"),p("Dust storm onset: \u03C4 rising toward 1.6.","bad"));for(let ne of pe.targets)!l.visited.has(ne.id)&&Math.hypot(ne.x-l.x,ne.z-l.z)<16&&(l.visited.add(ne.id),M(`\u{1F3AF} Reached ${ne.id} ${ne.name} \u2014 press E`,"ok"),p(`Arrived at ${ne.id} ${ne.name}.`));Pn(l.t)>=pe.endHour&&(Ct(l.t)>=pe.sols?R("time"):ve())}function Dt(){let U=Math.max(0,l.battery/t.battery.capacity*100);S("h-time").textContent=`SOL ${Ct(l.t)} \xB7 ${on(l.t)}`,S("h-bp").textContent=`${U.toFixed(0)}%`;let ce=S("h-batt");ce.querySelector("i").style.width=U+"%",ce.className="batt "+(U<20?"low":U<50?"mid":""),S("h-gen").textContent=`${l.power.gen.toFixed(0)} W${t.solar.area?` (\u2600 ${l.power.solar.toFixed(0)})`:""}`,S("h-load").textContent=`${l.power.load.toFixed(0)} W`;let te=l.power.gen-l.power.load;S("h-net").innerHTML=`<span style="color:${te>=0?"var(--ok)":"var(--err)"}">${te>=0?"+":""}${te.toFixed(0)} W</span>`,S("h-env").textContent=`${As(l.t).toFixed(0)}\xB0C \xB7 ${Kn(l.t).toFixed(2)}`,S("h-data").textContent=`${l.buffer.toFixed(0)} \xB7 ${l.sent.toFixed(0)} Mb`,S("h-spd").textContent=`${Math.abs(l.speed).toFixed(3)} m/s`,S("h-odo").textContent=`${l.odo.toFixed(0)} m`,S("h-ter").textContent=Xt[l.ty].name,S("h-slope").innerHTML=`${l.slope.toFixed(1)}\xB0 \xB7 <span style="color:${l.slip>.85?"var(--err)":l.slip>.6?"var(--warn)":"inherit"}">${Math.min(100,l.slip*100).toFixed(0)}%</span>`,S("h-wh").textContent=`${Math.max(0,l.wheel).toFixed(0)}%`;let ye=S("h-whb");ye.querySelector("i").style.width=Math.max(0,l.wheel)+"%",ye.className="batt "+(l.wheel<25?"low":l.wheel<55?"mid":""),S("h-mode").textContent=l.task?`SCIENCE: ${l.task.tk.label.toUpperCase()} \xB7 \xD7${Math.max(l.warp,4)}`:`${l.autopilot?`AUTONAV \u2192 WP ${l.wp}`:"MANUAL DRIVE"} \xB7 TIME \xD7${l.warp}`,S("h-link").textContent=B(),S("h-obj").innerHTML=C();let P=m(),ke=S("prompt");P.d<16&&!H?(ke.style.display="block",ke.innerHTML=`<span class="kbd">E</span> Start science at <b>${P.t.id} ${P.t.name}</b>`):ke.style.display="none",S("haz").style.display=l.hazard?"block":"none"}i.setView(r.scene,h,wt),this._cleanup=()=>{r.scene.remove(a.root),r.dispose(),ou()}},exit(){removeEventListener("keydown",this._kd),removeEventListener("keyup",this._ku),removeEventListener("pointerdown",this._pd),removeEventListener("pointermove",this._pm),removeEventListener("pointerup",this._pu),removeEventListener("wheel",this._wh),removeEventListener("contextmenu",this._cm),this._cleanup?.()}};function ec(i,e,t,n,s="live"){let r=e.tele,a=[["live","Telemetry"],["science",`Science log (${e.measurements.length})`],["energy","Energy budget"],["events","Mission log"]];i.innerHTML=`<div class="tabs">${a.map(([c,u])=>`<button class="btn small ${c===s?"primary":""}" data-tab="${c}">${u}</button>`).join("")}</div><div id="dbody"></div>`,i.querySelectorAll("[data-tab]").forEach(c=>c.onclick=()=>ec(i,e,t,n,c.dataset.tab));let o=i.querySelector("#dbody"),h=c=>`S${Ct(c)} ${on(c)}`;if(s==="live")o.innerHTML=`<div class="grid2"><canvas class="chart" id="c1"></canvas><canvas class="chart" id="c2"></canvas><canvas class="chart" id="c3"></canvas><canvas class="chart" id="c4"></canvas></div>
      <div class="muted" style="font-size:11px;margin-top:8px">${n.has("rems")?"Weather data measured by your REMS-type station.":"\u26A0 No weather station: temperature &amp; pressure shown are mission-control forecasts, not rover measurements."} ${n.has("rad")?`Radiation dose so far: ${e.dose.toFixed(0)} \xB5Gy (RAD).`:"No radiation detector onboard."}</div>`,requestAnimationFrame(()=>{Da(o.querySelector("#c1"),[{name:"Battery %",color:"#3dffa2",data:r.map(c=>[c.t,c.batt]),fill:"rgba(61,255,162,.08)"}],{title:"BATTERY STATE OF CHARGE",yMin:0,yMax:100,xfmt:h}),Da(o.querySelector("#c2"),[{name:"Generation W",color:"#ffc24a",data:r.map(c=>[c.t,c.gen])},{name:"Load W",color:"#ff6a2b",data:r.map(c=>[c.t,c.load])}],{title:"POWER",yMin:0,xfmt:h}),Da(o.querySelector("#c3"),[{name:"Air temp \xB0C",color:"#3fd0ff",data:r.map(c=>[c.t,c.temp])}],{title:"TEMPERATURE",xfmt:h}),Da(o.querySelector("#c4"),[{name:"Pressure Pa",color:"#b58cff",data:r.map(c=>[c.t,c.p])}],{title:"ATMOSPHERIC PRESSURE",xfmt:h})});else if(s==="science")o.innerHTML=e.measurements.length?`<table class="datatable"><tr><th>Time</th><th>Target</th><th>Measurement</th><th>Instrument</th><th>Result</th><th>Data</th></tr>
      ${e.measurements.map(c=>`<tr><td class="mono">S${Ct(c.t)} ${on(c.t)}</td><td>${c.target}<div class="muted">${c.targetName}</div></td><td>${c.task}</td><td>${c.instrument}</td><td>${c.html||Zl(c.summary)}</td><td class="mono">${c.dataMb} Mb</td></tr>`).join("")}</table>`:'<div class="muted" style="padding:20px">No measurements yet. Drive to a target beacon and press E.</div>';else if(s==="energy"){let c=e.E,u=c.idle+c.heat+c.drive+c.science+c.comms,d=(l,f,x)=>`<div class="stat"><div class="l"><span>${l}</span><b>${f.toFixed(0)} Wh</b></div><div class="meter"><i style="width:${Math.min(100,f/Math.max(1,u,c.gen)*100)}%;background:${x}"></i></div></div>`;o.innerHTML=`<div class="grid2"><div><div class="sec-h">GENERATED \xB7 ${c.gen.toFixed(0)} Wh</div>${d("Solar arrays",c.solar,"#ffc24a")}${d("RTG",c.rtg,"#ff6a2b")}${d("Wasted (battery full)",c.wasted,"#666")}</div>
      <div><div class="sec-h">CONSUMED \xB7 ${u.toFixed(0)} Wh</div>${d("Avionics & thermal (idle)",c.idle,"#3fd0ff")}${d("Heaters",c.heat,"#ff4d5e")}${d("Driving (motors, AutoNav, F\xB7v/\u03B7)",c.drive,"#3dffa2")}${d("Science instruments",c.science,"#b58cff")}${d("Communication",c.comms,"#ffffff")}</div></div>
      <div class="muted" style="font-size:12px;margin-top:12px;line-height:1.6">Battery: <span class="mono">E(t+\u0394t) = E(t) + (P<sub>gen</sub> \u2212 P<sub>load</sub>)\xB7\u0394t</span> \xB7 Driving force: <span class="mono">F = m\xB7g\xB7(C<sub>rr</sub>\xB7cos\u03B8 + sin\u03B8)</span>, g = 3.721 m/s\xB2 \xB7 Solar: <span class="mono">P = A\xB7\u03B7\xB7S\xB7\u03BC\xB7(e<sup>\u2212\u03C4/\u03BC</sup> + 0.35(1\u2212e<sup>\u2212\u03C4/\u03BC</sup>))</span></div>`}else o.innerHTML=`<div style="max-height:52vh;overflow:auto" class="scroll">${[...e.log].reverse().map(c=>`<div class="insight ${c.kind==="bad"?"bad":c.kind==="good"?"good":"tip"}" style="margin-bottom:6px"><span class="mono" style="min-width:90px">S${Ct(c.t)} ${on(c.t)}</span><span>${Zl(c.msg)}</span></div>`).join("")}</div>`}function kv(i){let{S:e,stats:t,design:n,reason:s}=i,r=Yn(n),a=ui(n),o=e.sent+e.buffer,h=o>0?(e.sent+.5*e.buffer)/o:0,c=e.points*h,u=c/t.scienceMax,d=pe.targets.filter(m=>e.done[m.id]&&Object.keys(e.done[m.id]).length).length,l=["power","night","wheels"].includes(s),f,x;l?(f=u>=.5?"PARTIAL SUCCESS":"MISSION FAILED",x=u>=.5?"partial":"fail"):u>=.6&&d>=3?(f="MISSION SUCCESS",x="ok"):u>=.25?(f="PARTIAL SUCCESS",x="partial"):(f="MISSION FAILED",x="fail");let _=u*(l?.85:1),g=_>=.9?"S":_>=.75?"A":_>=.55?"B":_>=.35?"C":"D",p=[],v=e.E,S=v.idle+v.heat+v.drive+v.science+v.comms,M=e.t-pe.startHour;if(s==="power"&&p.push(["bad","\u{1F50B}",`Battery ran out on sol ${Ct(e.t)} at ${on(e.t)}. Over the mission the rover used ${S.toFixed(0)} Wh but generated only ${v.gen.toFixed(0)} Wh. A bigger battery, more solar area, an RTG, or a smaller chassis (lower idle load: ${r.chassis.baseLoad} W) would have helped.`]),s==="night"&&p.push(["bad","\u{1F319}",`The rover froze overnight. Sleeping needs ${r.chassis.sleepLoad} W plus heaters (\u221270 \xB0C outside) for ~15 hours with ${r.rtg.power?"only":"no"} ${r.rtg.power?r.rtg.power+" W of":""} night-time generation. Spirit & Opportunity survived nights with insulation, small radioisotope heaters and careful battery budgets \u2014 try a larger battery or an RTG.`]),s==="wheels"&&p.push(["bad","\u2699",`Wheels destroyed after ${e.odo.toFixed(0)} m. Damage by terrain: ${Object.entries(e.dmgByTerrain).filter(([,m])=>m>.5).map(([m,y])=>`${Xt[m].name} ${y.toFixed(0)}%`).join(", ")}. Curiosity's thin aluminium wheels were punctured by sharp rocks too \u2014 mesh tyres or hazcams reduce damage.`]),r.rtg.power&&p.push(["good","\u2622",`The MMRTG produced ${v.rtg.toFixed(0)} Wh day and night, and its waste heat saved about ${e.rtgHeatSavedWh.toFixed(0)} Wh of electric heating.`]),r.solar.area&&e.stormSolarLossWh>50&&p.push([e.stormSolarLossWh>400?"bad":"tip","\u{1F32A}",`The dust storm (\u03C4 up to ${pe.dust.tauStorm}) cost your ${r.solar.area} m\xB2 arrays ~${e.stormSolarLossWh.toFixed(0)} Wh. Sunlight through dust falls as e^(\u2212\u03C4/\u03BC) \u2014 solar-only rovers must plan for dusty seasons.`]),v.heat>S*.12&&p.push(["bad","\u{1F525}",`Heaters used ${v.heat.toFixed(0)} Wh (${(v.heat/S*100).toFixed(0)}% of all energy) to keep electronics above \u221240 \xB0C. An RTG provides that heat for free.`]),e.minBattery>r.battery.capacity*.3&&!["power","night"].includes(s)&&p.push(["good","\u{1F50B}",`Healthy power margins \u2014 battery never dropped below ${(e.minBattery/r.battery.capacity*100).toFixed(0)}%.${e.minBattery>r.battery.capacity*.7?" You might save mass/cost with a smaller battery.":""}`]),e.slipEvents){let m=Sr(r,"sand");p.push(["bad","\u26F0",`The rover got stuck ${e.slipEvents}\xD7 on slopes beyond its traction. Climbing needs tan\u03B8 \u2264 \u03BC\xB7grip \u2212 Crr; on sand your wheels had Crr \u2248 ${m.toFixed(2)} (limit ${t.maxSlope.sand.toFixed(0)}\xB0). Bigger/grouser wheels or a lighter rover raise the limit.`])}else e.distByTerrain.sand>40&&p.push(["good","\u{1F3DC}",`Your ${r.wheels.name} wheels crossed ${e.distByTerrain.sand.toFixed(0)} m of loose sand without getting stuck.`]);e.collisions?p.push(["bad","\u{1F4A5}",`${e.collisions} boulder collision${e.collisions>1?"s":""}.${n.cameras.includes("hazcam")?"":" Hazcams detect hazards and let AutoNav steer around them."}`]):n.cameras.includes("hazcam")&&e.distByTerrain.rocky>20&&p.push(["good","\u25C9",`Hazcams kept you clear of boulders across ${e.distByTerrain.rocky.toFixed(0)} m of rock fields and halved wheel wear there.`]);let T=[];for(let m of pe.targets)if(e.visited.includes(m.id))for(let y of m.tasks)y.needs.every(C=>Ln(a,C))||T.push(`${m.id} ${y.label} (${y.points} pts)`);T.length&&p.push(["bad","\u2726",`You reached targets but lacked instruments for: ${T.join(", ")}.`]);let E=pe.targets.filter(m=>!e.visited.includes(m.id));if(E.length&&p.push(["tip","\u{1F9ED}",`Targets not reached: ${E.map(m=>m.id+" "+m.name).join(", ")}.`]),e.buffer>1?p.push(["bad","\u{1F4E1}",`${e.buffer.toFixed(0)} Mb of data never reached Earth (counted at 50%). ${r.comms.dte?"":"A high-gain antenna can send data directly to Earth any time."}${r.comms.relay?" Time science before the 11:30 / 16:00 relay passes.":""}`]):e.sent>1&&p.push(["good","\u{1F4E1}",`All ${e.sent.toFixed(0)} Mb of science data reached Earth.`]),t.mass>600){let m=t.mass*It.g*Sr(r,"gravel");p.push(["tip","\u2696",`At ${t.mass.toFixed(0)} kg your rover needs ${m.toFixed(0)} N just to roll on gravel (F = m\xB7g\xB7Crr). Every kilogram also raises sand sinkage.`])}return t.cost<t.budget*.6&&u<.6&&p.push(["tip","\u{1F4B0}",`You used only $${t.cost}M of the $${t.budget}M budget \u2014 there was room for more instruments or power.`]),{score:c,completion:u,status:f,cls:x,grade:g,targetsDone:d,lost:l,insights:p,returnFactor:h,hours:M}}var mp={enter(i){let e=Jn();i.setView(e.scene,e.camera,e.tick),$l();let t=i.state.result;if(!t){i.go("menu");return}let n=kv(t),{S:s,stats:r,design:a}=t,o=Yn(a),h=ui(a),c=s.E.idle+s.E.heat+s.E.drive+s.E.science+s.E.comms,u=(x,_,g)=>`<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">${x}</div><div class="v">${_}</div><div class="u">${g}</div></div>`,d=i.html(`<div class="screen">${Nn("Mission Results",4,null)}
      <div class="page glass corner" style="width:min(1180px,94vw)">
        <div class="row" style="justify-content:space-between;align-items:center">
          <div class="res-hero" style="text-align:left"><h1 class="${n.cls}">${n.status}</h1><div class="muted" style="margin-top:6px">${t.reasonTxt}</div></div>
          <div style="text-align:center"><div class="lbl hd" style="font-size:10px;color:var(--muted)">GRADE</div><div class="grade" style="color:${n.cls==="ok"?"var(--ok)":n.cls==="partial"?"var(--warn)":"var(--err)"}">${n.grade}</div></div>
        </div>
        <div class="kpis">
          ${u("MISSION COMPLETION",`${(n.completion*100).toFixed(0)}%`,`${n.score.toFixed(0)} of ${r.scienceMax} science pts`)}
          ${u("DISTANCE",`${s.odo.toFixed(0)} m`,`over ${Ct(s.t)} sol${Ct(s.t)>1?"s":""}`)}
          ${u("ENERGY",`${c.toFixed(0)} Wh`,`used \xB7 ${s.E.gen.toFixed(0)} Wh generated`)}
          ${u("SAMPLES",`${s.samples}`,`${s.measurements.length} measurements`)}
          ${u("DATA RETURNED",`${s.sent.toFixed(0)} Mb`,`${s.buffer.toFixed(0)} Mb still onboard`)}
          ${u("TARGETS",`${n.targetsDone}/${pe.targets.length}`,"with science completed")}
          ${u("WHEEL HEALTH",`${Math.max(0,s.wheel).toFixed(0)}%`,`${s.collisions} collisions \xB7 ${s.slipEvents} stuck`)}
          ${u("ROVER",`${r.mass.toFixed(0)} kg`,`$${r.cost}M \xB7 ${o.chassis.name}`)}
        </div>
        <div class="tabs"><button class="btn small primary" data-t="report">Engineering report</button><button class="btn small" data-t="data">Scientific data dashboard</button><button class="btn small" data-t="design">Rover configuration</button></div>
        <div id="tab"></div>
        <div class="row" style="justify-content:flex-end;margin-top:22px;gap:10px;flex-wrap:wrap">
          <button class="btn" data-go="menu">\u2302 Main menu</button><button class="btn" data-go="planning">\u270E Re-plan route</button>
          <button class="btn" data-go="sim">\u21BA Fly again</button><button class="btn mars" data-go="design">\u2699 Improve the design</button></div>
      </div></div>`),l=d.querySelector("#tab"),f=x=>{d.querySelectorAll("[data-t]").forEach(_=>_.classList.toggle("primary",_.dataset.t===x)),x==="report"?l.innerHTML=`<div class="grid2" style="grid-template-columns:1.4fr 1fr">
          <div><div class="sec-h" style="padding-left:0">WHAT HELPED \xB7 WHAT HURT</div>${n.insights.map(([_,g,p])=>`<div class="insight ${_}"><span class="ic">${g}</span><span>${p}</span></div>`).join("")||'<div class="muted">No notable events.</div>'}</div>
          <div><div class="sec-h" style="padding-left:0">SCIENCE BY TARGET</div>${pe.targets.map(_=>`<div class="stat" style="padding-left:0"><div class="l"><span>${_.id} ${_.name}</span><b>${_.tasks.filter(g=>s.done[_.id]?.[g.id]).length}/${_.tasks.length}</b></div>
            ${_.tasks.map(g=>`<div style="font-size:12px;margin-top:3px;color:${s.done[_.id]?.[g.id]?"var(--ok)":g.needs.every(p=>Ln(h,p))?"var(--muted)":"var(--err)"}">${s.done[_.id]?.[g.id]?"\u2714":g.needs.every(p=>Ln(h,p))?"\u25CB":"\u2717"} ${g.label}</div>`).join("")}</div>`).join("")}
            <div class="muted" style="font-size:11.5px;margin-top:10px;line-height:1.5">\u2714 done \xB7 \u25CB possible but not done \xB7 \u2717 your rover lacked the instrument</div></div></div>`:x==="data"?ec(l,s,o,h,"live"):l.innerHTML=`<div class="grid3">${["chassis","wheels","solar","rtg","battery","comms","arm"].map(_=>{let g=o[_];return`<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">${Di[_].label.toUpperCase()}</div><div style="margin-top:6px;font-weight:600">${g.name}</div><div class="u">${g.mass} kg \xB7 $${g.cost}M</div></div>`}).join("")}<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">CAMERAS</div><div style="margin-top:6px">${o.cameras.map(_=>_.name).join("<br>")||"\u2014"}</div></div>
        <div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">INSTRUMENTS</div><div style="margin-top:6px">${o.instruments.map(_=>_.name).join("<br>")||"\u2014"}</div></div></div>`};d.querySelectorAll("[data-t]").forEach(x=>x.onclick=()=>f(x.dataset.t)),d.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>i.go(x.dataset.go)),f("report")}};var gp={menu:ep,settings:tp,credits:np,missions:rp,briefing:ap,design:op,planning:hp,sim:pp,results:mp};var xp={quality:"medium",resScale:1,master:.7,sfx:.8,music:.5,sensitivity:1,invertY:!1,showFps:!1,units:"metric"};function zv(){try{return{...xp,...JSON.parse(localStorage.getItem("rf-settings")||"{}")}}catch{return{...xp}}}var Bt={settings:zv(),state:{design:structuredClone(Nf),route:null,result:null,attempts:0},renderer:null,ui:document.getElementById("ui"),current:null,scene:null,camera:null,tick:null,saveSettings(){try{localStorage.setItem("rf-settings",JSON.stringify(this.settings))}catch{}Object.assign(wr,{master:this.settings.master,sfx:this.settings.sfx,music:this.settings.music}),au(),this.applyQuality()},applyQuality(){let i=Math.min(window.devicePixelRatio,2)*this.settings.resScale*(this.settings.quality==="low"?.75:1);this.renderer.setPixelRatio(i),this.renderer.shadowMap.enabled=this.settings.quality!=="low"},setView(i,e,t){this.scene=i,this.camera=e,this.tick=t},async go(i,e){let t=document.getElementById("fader");this.current&&(t.classList.add("on"),await new Promise(s=>setTimeout(s,300)));try{this.current?.exit?.()}catch(s){console.error(s)}this.ui.innerHTML="",this.setView(null,null,null);let n=gp[i];this.current=n,this.currentName=i,await n.enter(this,e),t.classList.remove("on")},html(i){let e=document.createElement("div");e.innerHTML=i.trim();let t=e.firstElementChild;return this.ui.appendChild(t),t}};window.__app=Bt;var Hv=document.getElementById("gl"),ns;try{ns=new Pl({canvas:Hv,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.getElementById("ui").innerHTML=`<div class="screen loading"><div class="hd" style="font-size:24px">3D graphics unavailable</div>
    <div class="muted" style="max-width:560px;text-align:center;line-height:1.6">This game needs WebGL 2. Please update your graphics driver, or enable "hardware acceleration" in your browser settings, then restart.<br><br><span class="mono" style="font-size:11px">${i.message}</span></div></div>`,i}ns.outputColorSpace=Tt;ns.toneMapping=ma;ns.toneMappingExposure=1.05;ns.shadowMap.type=ko;Bt.renderer=ns;Bt.applyQuality();Object.assign(wr,{master:Bt.settings.master,sfx:Bt.settings.sfx,music:Bt.settings.music});function pu(){ns.setSize(window.innerWidth,window.innerHeight,!1),Bt.camera&&(Bt.camera.aspect=window.innerWidth/window.innerHeight,Bt.camera.updateProjectionMatrix())}window.addEventListener("resize",pu);pu();document.addEventListener("pointerdown",()=>Xf(),{once:!1});document.addEventListener("click",i=>{i.target.closest(".btn, .opt, .cats button, .seg button, .mcard")&&Nt.click()});document.addEventListener("mouseover",i=>{let e=i.target.closest(".btn");e&&!e.contains(i.relatedTarget)&&Nt.hover()});var Gv=new da,Oa=null,fu=0,tc=0;function _p(){requestAnimationFrame(_p);let i=Math.min(Gv.getDelta(),.1);try{Bt.tick?.(i)}catch(e){console.error(e),Bt.tick=null}Bt.scene&&Bt.camera&&(Bt.camera.aspect!==window.innerWidth/window.innerHeight&&pu(),ns.render(Bt.scene,Bt.camera)),fu++,tc+=i,tc>.5&&(Bt.settings.showFps?(Oa||=Object.assign(document.body.appendChild(document.createElement("div")),{style:"position:fixed;bottom:4px;left:50%;font:11px monospace;color:#7f7;z-index:99"}),Oa.textContent=`${Math.round(fu/tc)} FPS`):Oa&&(Oa.remove(),Oa=null),fu=0,tc=0)}async function Vv(){let i=Bt.html(`<div class="screen loading"><div class="hd" style="font-size:28px;letter-spacing:.3em">RED FRONTIER</div>
    <div class="bar"><i></i></div><div class="muted" id="lt">Loading rover model\u2026</div></div>`),e=i.querySelector(".bar i");e.style.width="15%";try{await $f(t=>e.style.width=`${15+t*80}%`)}catch(t){console.error(t),i.querySelector("#lt").textContent="Could not load rover model: "+t.message;return}e.style.width="100%",await new Promise(t=>setTimeout(t,250)),Bt.current={exit(){}},Bt.go("menu")}_p();Vv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
