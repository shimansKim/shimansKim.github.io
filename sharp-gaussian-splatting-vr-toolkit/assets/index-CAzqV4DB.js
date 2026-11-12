(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const yl="180",Ki={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,Yl=1,Af=2,Mh=1,Rf=2,Fn=3,oi=0,Ot=1,En=2,si=0,Zi=1,jl=2,Kl=3,Zl=4,Cf=5,Si=100,Pf=101,Lf=102,Df=103,If=104,Uf=200,Nf=201,Ff=202,Of=203,va=204,xa=205,kf=206,Bf=207,zf=208,Hf=209,Vf=210,Gf=211,Wf=212,$f=213,Xf=214,ya=0,Sa=1,ba=2,es=3,Ma=4,Ea=5,Ta=6,wa=7,Eh=0,qf=1,Yf=2,ri=0,jf=1,Kf=2,Zf=3,Jf=4,Qf=5,ep=6,tp=7,Th=300,ts=301,ns=302,Aa=303,Ra=304,ro=306,Ca=1e3,Mi=1001,Pa=1002,rn=1003,np=1004,Ks=1005,Ct=1006,yo=1007,ni=1008,gE=1008,Gn=1009,wh=1010,Ah=1011,Ds=1012,Sl=1013,Ei=1014,zn=1015,Hs=1016,bl=1017,Ml=1018,Is=1020,Rh=35902,Ch=35899,Ph=1021,Lh=1022,Sn=1023,Us=1026,Ns=1027,Dh=1028,El=1029,Ih=1030,Tl=1031,wl=1033,Ir=33776,Ur=33777,Nr=33778,Fr=33779,La=35840,Da=35841,Ia=35842,Ua=35843,Na=36196,Fa=37492,Oa=37496,ka=37808,Ba=37809,za=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,$a=37815,Xa=37816,qa=37817,Ya=37818,ja=37819,Ka=37820,Za=37821,Ja=36492,Qa=36494,el=36495,tl=36283,nl=36284,il=36285,sl=36286,ip=3200,sp=3201,Uh=0,rp=1,ei="",yt="srgb",is="srgb-linear",$r="linear",st="srgb",Ri=7680,Jl=519,op=512,ap=513,lp=514,Nh=515,cp=516,up=517,hp=518,dp=519,Ql=35044,_E=35048,ec="300 es",Tn=2e3,Xr=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,rl=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function fp(n,e){return(n%e+e)%e}function So(n,e,t){return(1-t)*n+t*e}function ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pp={DEG2RAD:Or};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),R=Math.atan2(E,p*S);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const v=a*S;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new O,tc=new $t;class Ge{constructor(e,t,i,s,r,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],v=s[7],E=s[2],R=s[5],P=s[8];return r[0]=o*_+a*S+c*E,r[3]=o*m+a*x+c*R,r[6]=o*p+a*v+c*P,r[1]=l*_+u*S+h*E,r[4]=l*m+u*x+h*R,r[7]=l*p+u*v+h*P,r[2]=d*_+f*S+g*E,r[5]=d*m+f*x+g*R,r[8]=d*p+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Ge;function Fh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mp(){const n=qr("canvas");return n.style.display="block",n}const nc={};function Fs(n){n in nc||(nc[n]=!0,console.warn(n))}function gp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ic=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){const n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}const et=_p();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class vp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ci===void 0&&(Ci=qr("canvas")),Ci.width=e.width,Ci.height=e.height;const s=Ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xp=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;const To=new O;class Rt extends Ti{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Mi,s=Mi,r=Ct,o=ni,a=Sn,c=Gn,l=Rt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Vs(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Th;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,E=(p+1)/2,R=(u+d)/4,P=(h+_)/4,k=(g+m)/4;return x>v&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=P/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=k/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=k/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sp extends Ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Rt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Sp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rl extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends ai{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Rl(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class bp extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Js.subVectors(this.max,ms),Pi.subVectors(e.a,ms),Li.subVectors(e.b,ms),Di.subVectors(e.c,ms),Xn.subVectors(Li,Pi),qn.subVectors(Di,Li),pi.subVectors(Pi,Di);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!wo(t,Pi,Li,Di,Js)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Pi,Li,Di,Js))?!1:(Qs.crossVectors(Xn,qn),t=[Qs.x,Qs.y,Qs.z],wo(t,Pi,Li,Di,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,Zs=new Gs,Pi=new O,Li=new O,Di=new O,Xn=new O,qn=new O,pi=new O,ms=new O,Js=new O,Qs=new O,mi=new O;function wo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){mi.fromArray(n,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Mp=new Gs,gs=new O,Ao=new O;class oo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Ao)),this.expandByPoint(gs.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new O,Ro=new O,er=new O,Yn=new O,Co=new O,tr=new O,Po=new O;class ao{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ro.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ro);const r=e.distanceTo(t)*.5,o=-this.direction.dot(er),a=Yn.dot(this.direction),c=-Yn.dot(er),l=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ro).addScaledVector(er,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,s,r){Co.subVectors(t,e),tr.subVectors(i,e),Po.crossVectors(Co,tr);let o=this.direction.dot(Po),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const c=a*this.direction.dot(tr.crossVectors(Yn,tr));if(c<0)return null;const l=a*this.direction.dot(Co.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot(Po);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,Tp)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(i,Jt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(i,Jt)),jn.normalize(),nr.crossVectors(Jt,jn),s[0]=jn.x,s[4]=nr.x,s[8]=Jt.x,s[1]=jn.y,s[5]=nr.y,s[9]=Jt.y,s[2]=jn.z,s[6]=nr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],E=i[15],R=s[0],P=s[4],k=s[8],A=s[12],w=s[1],D=s[5],$=s[9],F=s[13],W=s[2],te=s[6],I=s[10],G=s[14],C=s[3],X=s[7],q=s[11],oe=s[15];return r[0]=o*R+a*w+c*W+l*C,r[4]=o*P+a*D+c*te+l*X,r[8]=o*k+a*$+c*I+l*q,r[12]=o*A+a*F+c*G+l*oe,r[1]=u*R+h*w+d*W+f*C,r[5]=u*P+h*D+d*te+f*X,r[9]=u*k+h*$+d*I+f*q,r[13]=u*A+h*F+d*G+f*oe,r[2]=g*R+_*w+m*W+p*C,r[6]=g*P+_*D+m*te+p*X,r[10]=g*k+_*$+m*I+p*q,r[14]=g*A+_*F+m*G+p*oe,r[3]=S*R+x*w+v*W+E*C,r[7]=S*P+x*D+v*te+E*X,r[11]=S*k+x*$+v*I+E*q,r[15]=S*A+x*F+v*G+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,E=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*S+i*x+s*v+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=S*P,e[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*P,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*P,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*P,e[4]=x*P,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=v*P,e[9]=(g*h*r-u*_*r-g*i*f+t*_*f+u*i*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*P,e[12]=E*P,e[13]=(u*_*s-g*h*s+g*i*d-t*_*d-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=c*l,x=c*u,v=c*h,E=i.x,R=i.y,P=i.z;return s[0]=(1-(_+p))*E,s[1]=(f+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+x)*P,s[9]=(m-S)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,u=1/o,h=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Tn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Tn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Tn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Xr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new O,vn=new lt,Ep=new O(0,0,0),Tp=new O(1,1,1),jn=new O,nr=new O,Jt=new O,rc=new lt,oc=new $t;class fn{constructor(e=0,t=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const ac=new O,Ui=new $t,Ln=new lt,ir=new O,_s=new O,Ap=new O,Rp=new $t,lc=new O(1,0,0),cc=new O(0,1,0),uc=new O(0,0,1),hc={type:"added"},Cp={type:"removed"},Ni={type:"childadded",child:null},Lo={type:"childremoved",child:null};class qt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new O,t=new fn,i=new $t,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ge}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(_s,ir,this.up):Ln.lookAt(ir,_s,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}qt.DEFAULT_UP=new O(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new O,Dn=new O,Do=new O,In=new O,Fi=new O,Oi=new O,dc=new O,Io=new O,Uo=new O,No=new O,Fo=new mt,Oo=new mt,ko=new mt;class yn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Dn.subVectors(i,t),Do.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Dn),c=xn.dot(Do),l=Dn.dot(Dn),u=Dn.dot(Do),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fo.setScalar(0),Oo.setScalar(0),ko.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,i),ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(ko,r.z),o}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Dn.subVectors(e,t),xn.cross(Dn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),xn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fi.subVectors(s,i),Oi.subVectors(r,i),Io.subVectors(e,i);const c=Fi.dot(Io),l=Oi.dot(Io);if(c<=0&&l<=0)return t.copy(i);Uo.subVectors(e,s);const u=Fi.dot(Uo),h=Oi.dot(Uo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Fi,o);No.subVectors(e,r);const f=Fi.dot(No),g=Oi.dot(No);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Oi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return dc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(dc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=fp(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Bo(o,r,e+1/3),this.g=Bo(o,r,e),this.b=Bo(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=Oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return et.workingToColorSpace(Ut.copy(this),e),Math.round(qe(Ut.r*255,0,255))*65536+Math.round(qe(Ut.g*255,0,255))*256+Math.round(qe(Ut.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=yt){et.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(sr);const i=So(Kn.h,sr.h,t),s=So(Kn.s,sr.s,t),r=So(Kn.l,sr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ze;Ze.NAMES=Oh;let Pp=0;class ls extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Zi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==va&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,rr=new We;let Lp=0;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class kh extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bh extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dp=0;const cn=new lt,zo=new qt,ki=new O,Qt=new Gs,vs=new Gs,wt=new O;class Yt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Bh:kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Qt.min,vs.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,vs.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(vs.min),Qt.expandByPoint(vs.max))}Qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(e,l),wt.add(ki)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<i.count;k++)a[k]=new O,c[k]=new O;const l=new O,u=new O,h=new O,d=new We,f=new We,g=new We,_=new O,m=new O;function p(k,A,w){l.fromBufferAttribute(i,k),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,w),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[k].add(_),a[A].add(_),a[w].add(_),c[k].add(m),c[A].add(m),c[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let k=0,A=S.length;k<A;++k){const w=S[k],D=w.start,$=w.count;for(let F=D,W=D+$;F<W;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new O,v=new O,E=new O,R=new O;function P(k){E.fromBufferAttribute(s,k),R.copy(E);const A=a[k];x.copy(A),x.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(R,A);const D=v.dot(c[k])<0?-1:1;o.setXYZW(k,x.x,x.y,x.z,D)}for(let k=0,A=S.length;k<A;++k){const w=S[k],D=w.start,$=w.count;for(let F=D,W=D+$;F<W;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new lt,gi=new ao,or=new oo,pc=new O,ar=new O,lr=new O,cr=new O,Ho=new O,ur=new O,mc=new O,hr=new O;class Xt extends qt{constructor(e=new Yt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ho.fromBufferAttribute(h,e),o?ur.addScaledVector(Ho,u):ur.addScaledVector(Ho.sub(t),u))}t.add(ur)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(or.containsPoint(gi.origin)===!1&&(gi.intersectSphere(or,pc)===null||gi.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(fc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=x;v<E;v+=3){const R=a.getX(v),P=a.getX(v+1),k=a.getX(v+2);s=dr(this,p,e,i,l,u,h,R,P,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=dr(this,o,e,i,l,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=x;v<E;v+=3){const R=v,P=v+1,k=v+2;s=dr(this,p,e,i,l,u,h,R,P,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;s=dr(this,o,e,i,l,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ip(n,e,t,i,s,r,o,a){let c;if(e.side===Ot?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===oi,a),c===null)return null;hr.copy(a),hr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(hr);return l<t.near||l>t.far?null:{distance:l,point:hr.clone(),object:n}}function dr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ar),n.getVertexPosition(c,lr),n.getVertexPosition(l,cr);const u=Ip(n,e,t,i,ar,lr,cr,mc);if(u){const h=new O;yn.getBarycoord(mc,ar,lr,cr,h),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,h,new We)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,h,new We)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};yn.getNormal(ar,lr,cr,d.normal),u.face=d,u.barycoord=h}return u}class Ws extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function g(_,m,p,S,x,v,E,R,P,k,A){const w=v/P,D=E/k,$=v/2,F=E/2,W=R/2,te=P+1,I=k+1;let G=0,C=0;const X=new O;for(let q=0;q<I;q++){const oe=q*D-F;for(let de=0;de<te;de++){const Ee=de*w-$;X[_]=Ee*S,X[m]=oe*x,X[p]=W,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=R>0?1:-1,u.push(X.x,X.y,X.z),h.push(de/P),h.push(1-q/k),G+=1}}for(let q=0;q<k;q++)for(let oe=0;oe<P;oe++){const de=d+oe+te*q,Ee=d+oe+te*(q+1),ye=d+(oe+1)+te*(q+1),Pe=d+(oe+1)+te*q;c.push(de,Ee,Pe),c.push(Ee,ye,Pe),C+=6}a.addGroup(f,C,A),f+=C,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function Up(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Np={clone:ss,merge:Bt};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new O,gc=new We,_c=new We;class hn extends Hh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,_c),t.subVectors(_c,gc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class kp extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Bi,zi,e,t);s.layers=this.layers,this.add(s);const r=new hn(Bi,zi,e,t);r.layers=this.layers,this.add(r);const o=new hn(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new hn(Bi,zi,e,t);a.layers=this.layers,this.add(a);const c=new hn(Bi,zi,e,t);c.layers=this.layers,this.add(c);const l=new hn(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vh extends Rt{constructor(e=[],t=ts,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:si});r.uniforms.tEquirect.value=t;const o=new Xt(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=Ct),new kp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class wn extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Hp extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xE extends Rt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=rn,u=rn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yE extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Go=new O,Vp=new O,Gp=new Ge;class Qn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Go.subVectors(i,t).cross(Vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Go),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gp.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new oo,Wp=new We(.5,.5),fr=new O;class Gh{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],x=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,f-u,p-g,E-S).normalize(),s[1].setComponents(l+o,f+u,p+g,E+S).normalize(),s[2].setComponents(l+a,f+h,p+_,E+x).normalize(),s[3].setComponents(l-a,f-h,p-_,E-x).normalize(),i)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===Tn)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===Xr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=Wp.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(fr.x=s.normal.x>0?e.max.x:e.min.x,fr.y=s.normal.y>0?e.max.y:e.min.y,fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lo extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new O,jr=new O,vc=new lt,xs=new ao,pr=new oo,Wo=new O,xc=new O;class Pl extends qt{constructor(e=new Yt,t=new lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Yr.fromBufferAttribute(t,s-1),jr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Yr.distanceTo(jr);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;vc.copy(s).invert(),xs.copy(e.ray).applyMatrix4(vc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),S=u.getX(_+1),x=mr(this,e,xs,c,p,S,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=mr(this,e,xs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=mr(this,e,xs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=mr(this,e,xs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Yr.fromBufferAttribute(a,s),jr.fromBufferAttribute(a,r),t.distanceSqToSegment(Yr,jr,Wo,xc)>i)return;Wo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wo);if(!(l<e.near||l>e.far))return{distance:l,point:xc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const yc=new O,Sc=new O;class $p extends Pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)yc.fromBufferAttribute(t,s),Sc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yc.distanceTo(Sc);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xp extends Rt{constructor(e,t,i,s,r=Ct,o=Ct,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class $s extends Rt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wh extends Rt{constructor(e,t,i=Ei,s,r,o,a=rn,c=rn,l,u=Us,h=1){if(u!==Us&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $h extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ui extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let x=0;x<l;x++){const v=x*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,v=S+l*(p+1),E=S+1+l*(p+1),R=S+1+l*p;f.push(x,v,R),f.push(v,E,R)}this.setIndex(f),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}class SE extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bE extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qp extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yp extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Kp=new jp;class Xh{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Zp extends Error{constructor(e,t){super(e),this.response=t}}class ME extends Xh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bc.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:i,onError:s});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Un[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,P=u.length;R<P;R++){const k=u[R];k.onProgress&&k.onProgress(E)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Zp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{bc.add(`file:${e}`,l);const u=Un[e];delete Un[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),l;delete Un[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jp extends Hh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EE extends Yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class TE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Mc=new lt;class Ll{constructor(e,t,i=0,s=1/0){this.ray=new ao(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,i=[]){return ol(e,this,i,t),i.sort(Ec),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ol(e[s],this,i,t);return i.sort(Ec),i}}function Ec(n,e){return n.distance-e.distance}function ol(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ol(r[o],e,t,!0)}}class Tc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qh{constructor(e,t,i,s){qh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}class em extends $p{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ze(i),s=new Ze(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Yt;u.setAttribute("position",new dn(c,3)),u.setAttribute("color",new dn(l,3));const h=new lo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tm extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wc(n,e,t,i){const s=nm(i);switch(t){case Ph:return n*e;case Dh:return n*e/s.components*s.byteLength;case El:return n*e/s.components*s.byteLength;case Ih:return n*e*2/s.components*s.byteLength;case Tl:return n*e*2/s.components*s.byteLength;case Lh:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case wl:return n*e*4/s.components*s.byteLength;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case La:case Ia:return Math.max(n,8)*Math.max(e,8)/2;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Qa:case el:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case il:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(n){switch(n){case Gn:case wh:return{byteLength:1,components:1};case Ds:case Ah:case Hs:return{byteLength:2,components:1};case bl:case Ml:return{byteLength:2,components:4};case Ei:case Sl:case zn:return{byteLength:4,components:1};case Rh:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function Yh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function im(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Am=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ig=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
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
}`,u_=`#if DEPTH_PACKING == 3200
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
}`,h_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S_=`#define MATCAP
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
}`,b_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
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
}`,w_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,A_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,C_=`#define TOON
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
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L_=`uniform float size;
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
}`,D_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:um,aomap_pars_fragment:hm,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:bm,color_fragment:Mm,color_pars_fragment:Em,color_pars_vertex:Tm,color_vertex:wm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Im,colorspace_fragment:Um,colorspace_pars_fragment:Nm,envmap_fragment:Fm,envmap_common_pars_fragment:Om,envmap_pars_fragment:km,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Km,envmap_vertex:zm,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:jm,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:ug,map_pars_fragment:hg,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:_g,morphnormal_vertex:vg,morphtarget_pars_vertex:xg,morphtarget_vertex:yg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:Mg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ig,project_vertex:Ug,dithering_fragment:Ng,dithering_pars_fragment:Fg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:$g,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:jg,tonemapping_pars_fragment:Kg,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:o_,cube_vert:a_,cube_frag:l_,depth_vert:c_,depth_frag:u_,distanceRGBA_vert:h_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:v_,meshlambert_vert:x_,meshlambert_frag:y_,meshmatcap_vert:S_,meshmatcap_frag:b_,meshnormal_vert:M_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:w_,meshphysical_vert:A_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:L_,points_frag:D_,shadow_vert:I_,shadow_frag:U_,sprite_vert:N_,sprite_frag:F_},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Mn={basic:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Bt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Bt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Bt([Se.points,Se.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Bt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Bt([Se.common,Se.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Bt([Se.sprite,Se.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Bt([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Bt([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Mn.physical={uniforms:Bt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const gr={r:0,b:0,g:0},vi=new fn,O_=new lt;function k_(n,e,t,i,s,r,o){const a=new Ze(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?p(a,c):E&&E.isColor&&(p(E,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===ro)?(u===void 0&&(u=new Xt(new Ws(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ss(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(vi)),u.material.toneMapped=et.getTransfer(E.colorSpace)!==st,(h!==E||d!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Xt(new ui(2,2),new Wn({name:"BackgroundMaterial",uniforms:ss(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(gr,zh(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:S}}function B_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(w,D,$,F,W){let te=!1;const I=h(F,$,D);r!==I&&(r=I,l(r.object)),te=f(w,F,$,W),te&&g(w,F,$,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,v(w,D,$,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,D,$){const F=$.wireframe===!0;let W=i[w.id];W===void 0&&(W={},i[w.id]=W);let te=W[D.id];te===void 0&&(te={},W[D.id]=te);let I=te[F];return I===void 0&&(I=d(c()),te[F]=I),I}function d(w){const D=[],$=[],F=[];for(let W=0;W<t;W++)D[W]=0,$[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:F,object:w,attributes:{},index:null}}function f(w,D,$,F){const W=r.attributes,te=D.attributes;let I=0;const G=$.getAttributes();for(const C in G)if(G[C].location>=0){const q=W[C];let oe=te[C];if(oe===void 0&&(C==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),C==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;I++}return r.attributesNum!==I||r.index!==F}function g(w,D,$,F){const W={},te=D.attributes;let I=0;const G=$.getAttributes();for(const C in G)if(G[C].location>=0){let q=te[C];q===void 0&&(C==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),C==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),W[C]=oe,I++}r.attributes=W,r.attributesNum=I,r.index=F}function _(){const w=r.newAttributes;for(let D=0,$=w.length;D<$;D++)w[D]=0}function m(w){p(w,0)}function p(w,D){const $=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;$[w]=1,F[w]===0&&(n.enableVertexAttribArray(w),F[w]=1),W[w]!==D&&(n.vertexAttribDivisor(w,D),W[w]=D)}function S(){const w=r.newAttributes,D=r.enabledAttributes;for(let $=0,F=D.length;$<F;$++)D[$]!==w[$]&&(n.disableVertexAttribArray($),D[$]=0)}function x(w,D,$,F,W,te,I){I===!0?n.vertexAttribIPointer(w,D,$,W,te):n.vertexAttribPointer(w,D,$,F,W,te)}function v(w,D,$,F){_();const W=F.attributes,te=$.getAttributes(),I=D.defaultAttributeValues;for(const G in te){const C=te[G];if(C.location>=0){let X=W[G];if(X===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),X!==void 0){const q=X.normalized,oe=X.itemSize,de=e.get(X);if(de===void 0)continue;const Ee=de.buffer,ye=de.type,Pe=de.bytesPerElement,Y=ye===n.INT||ye===n.UNSIGNED_INT||X.gpuType===Sl;if(X.isInterleavedBufferAttribute){const j=X.data,ge=j.stride,Re=X.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<C.locationSize;be++)p(C.location+be,j.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<C.locationSize;be++)m(C.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let be=0;be<C.locationSize;be++)x(C.location+be,oe/C.locationSize,ye,q,ge*Pe,(Re+oe/C.locationSize*be)*Pe,Y)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<C.locationSize;j++)p(C.location+j,X.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<C.locationSize;j++)m(C.location+j);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let j=0;j<C.locationSize;j++)x(C.location+j,oe/C.locationSize,ye,q,oe*Pe,oe/C.locationSize*j*Pe,Y)}}else if(I!==void 0){const q=I[G];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(C.location,q);break;case 3:n.vertexAttrib3fv(C.location,q);break;case 4:n.vertexAttrib4fv(C.location,q);break;default:n.vertexAttrib1fv(C.location,q)}}}}S()}function E(){k();for(const w in i){const D=i[w];for(const $ in D){const F=D[$];for(const W in F)u(F[W].object),delete F[W];delete D[$]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const D=i[w.id];for(const $ in D){const F=D[$];for(const W in F)u(F[W].object),delete F[W];delete D[$]}delete i[w.id]}function P(w){for(const D in i){const $=i[D];if($[w.id]===void 0)continue;const F=$[w.id];for(const W in F)u(F[W].object),delete F[W];delete $[w.id]}}function k(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function z_(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Sn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const k=P===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!k)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:R}}function V_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Qn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,x=S*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let E=0;E!==x;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function G_(n){let e=new WeakMap;function t(o,a){return a===Aa?o.mapping=ts:a===Ra&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Aa||a===Ra)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Yi=4,Ac=[.125,.215,.35,.446,.526,.582],bi=20,$o=new Jp,Rc=new Ze;let Xo=null,qo=0,Yo=0,jo=!1;const yi=(1+Math.sqrt(5))/2,Hi=1/yi,Cc=[new O(-yi,Hi,0),new O(yi,Hi,0),new O(-Hi,0,yi),new O(Hi,0,yi),new O(0,yi,-Hi),new O(0,yi,Hi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],W_=new O;class Pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=W_}=r;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=jo,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Hs,format:Sn,colorSpace:is,depthBuffer:!1},s=Lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(r)),this._blurMaterial=X_(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,s,r){const c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rc),h.toneMapping=ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new li({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new Xt(new Ws,_);let p=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(Rc),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const E=this._cubeSize;_r(s,v*E,x>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ts||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cc[(s-r-1)%Cc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let S=0;for(let P=0;P<bi;++P){const k=P/_,A=Math.exp(-k*k/2);p.push(A),P===0?S+=A:P<m&&(S+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const v=this._sizeLods[s],E=3*v*(s>x-Yi?s-x+Yi:0),R=4*(this._cubeSize-v);_r(t,E,R,3*v,2*v),c.setRenderTarget(t),c.render(h,$o)}}function $_(n){const e=[],t=[],i=[];let s=n;const r=n-Yi+1+Ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Yi?c=Ac[o-n+Yi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,k=R>2?0:-1,A=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];S.set(A,_*g*R),x.set(d,m*g*R);const w=[R,R,R,R,R,R];v.set(w,p*g*R)}const E=new Yt;E.setAttribute("position",new Pt(S,_)),E.setAttribute("uv",new Pt(x,m)),E.setAttribute("faceIndex",new Pt(v,p)),e.push(E),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lc(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function X_(n,e,t){const i=new Float32Array(bi),s=new O(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ic(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Aa||c===Ra,u=c===ts||c===ns;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pc(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Pc(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Y_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function j_(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,v=S.length;x<v;x+=3){const E=S[x+0],R=S[x+1],P=S[x+2];d.push(E,R,R,P,P,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const E=x+0,R=x+1,P=x+2;d.push(E,R,R,P,P,E)}}else return;const m=new(Fh(d)?Bh:kh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function K_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function J_(n,e,t){const i=new WeakMap,s=new mt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*E*4*h),P=new Rl(R,v,E,h);P.type=zn,P.needsUpdate=!0;const k=x*4;for(let w=0;w<h;w++){const D=m[w],$=p[w],F=S[w],W=v*E*4*w;for(let te=0;te<D.count;te++){const I=te*k;f===!0&&(s.fromBufferAttribute(D,te),R[W+I+0]=s.x,R[W+I+1]=s.y,R[W+I+2]=s.z,R[W+I+3]=0),g===!0&&(s.fromBufferAttribute($,te),R[W+I+4]=s.x,R[W+I+5]=s.y,R[W+I+6]=s.z,R[W+I+7]=0),_===!0&&(s.fromBufferAttribute(F,te),R[W+I+8]=s.x,R[W+I+9]=s.y,R[W+I+10]=s.z,R[W+I+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new We(v,E)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Q_(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const jh=new Rt,Uc=new Wh(1,1),Kh=new Rl,Zh=new bp,Jh=new Vh,Nc=[],Fc=[],Oc=new Float32Array(16),kc=new Float32Array(9),Bc=new Float32Array(4);function cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nc[s];if(r===void 0&&(r=new Float32Array(s),Nc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function co(n,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function s0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Bc.set(i),n.uniformMatrix2fv(this.addr,!1,Bc),Tt(t,i)}}function r0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;kc.set(i),n.uniformMatrix3fv(this.addr,!1,kc),Tt(t,i)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Oc.set(i),n.uniformMatrix4fv(this.addr,!1,Oc),Tt(t,i)}}function a0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function m0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Uc.compareFunction=Nh,r=Uc):r=jh,t.setTexture2D(e||r,s)}function g0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zh,s)}function _0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jh,s)}function v0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kh,s)}function x0(n){switch(n){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(n,e){n.uniform1fv(this.addr,e)}function S0(n,e){const t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function b0(n,e){const t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function M0(n,e){const t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function E0(n,e){const t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T0(n,e){const t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function w0(n,e){const t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A0(n,e){n.uniform1iv(this.addr,e)}function R0(n,e){n.uniform2iv(this.addr,e)}function C0(n,e){n.uniform3iv(this.addr,e)}function P0(n,e){n.uniform4iv(this.addr,e)}function L0(n,e){n.uniform1uiv(this.addr,e)}function D0(n,e){n.uniform2uiv(this.addr,e)}function I0(n,e){n.uniform3uiv(this.addr,e)}function U0(n,e){n.uniform4uiv(this.addr,e)}function N0(n,e,t){const i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jh,r[o])}function F0(n,e,t){const i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zh,r[o])}function O0(n,e,t){const i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jh,r[o])}function k0(n,e,t){const i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kh,r[o])}function B0(n){switch(n){case 5126:return y0;case 35664:return S0;case 35665:return b0;case 35666:return M0;case 35674:return E0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return I0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return k0}}class z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class H0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function zc(n,e){n.seq.push(e),n.map[e.id]=e}function G0(n,e,t){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),o=Ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zc(t,l===void 0?new z0(a,n,e):new H0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new V0(a),zc(t,h)),t=h}}}class kr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);G0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const W0=37297;let $0=0;function X0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vc=new Ge;function q0(n){et._getMatrix(Vc,et.workingColorSpace,n);const e=`mat3( ${Vc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+X0(n.getShaderSource(e),a)}else return r}function Y0(n,e){const t=q0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(n,e){let t;switch(e){case jf:t="Linear";break;case Kf:t="Reinhard";break;case Zf:t="Cineon";break;case Jf:t="ACESFilmic";break;case ep:t="AgX";break;case tp:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new O;function K0(){et.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function J0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ts(n){return n!==""}function Wc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(ev,nv)}const tv=new Map;function nv(n,e){let t=$e[e];if(t===void 0){const i=tv.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(n){return n.replace(iv,sv)}function sv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function ov(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function av(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function lv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eh:e="ENVMAP_BLENDING_MULTIPLY";break;case qf:e="ENVMAP_BLENDING_MIX";break;case Yf:e="ENVMAP_BLENDING_ADD";break}return e}function cv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=rv(t),l=ov(t),u=av(t),h=lv(t),d=cv(t),f=Z0(t),g=J0(r),_=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?$e.tonemapping_pars_fragment:"",t.toneMapping!==ri?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=al(o),o=Wc(o,t),o=$c(o,t),a=al(a),a=Wc(a,t),a=$c(a,t),o=Xc(o),a=Xc(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,E=Hc(s,s.VERTEX_SHADER,x),R=Hc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(R)||"",te=$.trim(),I=F.trim(),G=W.trim();let C=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(C=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,R);else{const q=Gc(s,E,"vertex"),oe=Gc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+q+`
`+oe)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||G==="")&&(X=!1);X&&(D.diagnostics={runnable:C,programLog:te,vertexShader:{log:I,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(E),s.deleteShader(R),k=new kr(s,_),A=Q0(s,_)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,W0)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let hv=0;class dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fv(e),t.set(e,i)),i}}class fv{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}}function pv(n,e,t,i,s,r,o){const a=new Cl,c=new dv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,w,D,$,F){const W=$.fog,te=F.geometry,I=A.isMeshStandardMaterial?$.environment:null,G=(A.isMeshStandardMaterial?t:e).get(A.envMap||I),C=G&&G.mapping===ro?G.image.height:null,X=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const q=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,oe=q!==void 0?q.length:0;let de=0;te.morphAttributes.position!==void 0&&(de=1),te.morphAttributes.normal!==void 0&&(de=2),te.morphAttributes.color!==void 0&&(de=3);let Ee,ye,Pe,Y;if(X){const tt=Mn[X];Ee=tt.vertexShader,ye=tt.fragmentShader}else Ee=A.vertexShader,ye=A.fragmentShader,c.update(A),Pe=c.getVertexShaderID(A),Y=c.getFragmentShaderID(A);const j=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Ve=!!A.map,Ye=!!A.matcap,L=!!G,Xe=!!A.aoMap,De=!!A.lightMap,Ie=!!A.bumpMap,_e=!!A.normalMap,Ke=!!A.displacementMap,we=!!A.emissiveMap,Fe=!!A.metalnessMap,se=!!A.roughnessMap,me=A.anisotropy>0,T=A.clearcoat>0,y=A.dispersion>0,z=A.iridescence>0,ee=A.sheen>0,le=A.transmission>0,b=me&&!!A.anisotropyMap,N=T&&!!A.clearcoatMap,B=T&&!!A.clearcoatNormalMap,K=T&&!!A.clearcoatRoughnessMap,re=z&&!!A.iridescenceMap,J=z&&!!A.iridescenceThicknessMap,ae=ee&&!!A.sheenColorMap,xe=ee&&!!A.sheenRoughnessMap,ne=!!A.specularMap,he=!!A.specularColorMap,Le=!!A.specularIntensityMap,U=le&&!!A.transmissionMap,ue=le&&!!A.thicknessMap,fe=!!A.gradientMap,ve=!!A.alphaMap,ce=A.alphaTest>0,ie=!!A.alphaHash,Te=!!A.extensions;let Oe=ri;A.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const nt={shaderID:X,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:ye,defines:A.defines,customVertexShaderID:Pe,customFragmentShaderID:Y,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:is,alphaToCoverage:!!A.alphaToCoverage,map:Ve,matcap:Ye,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:C,aoMap:Xe,lightMap:De,bumpMap:Ie,normalMap:_e,displacementMap:d&&Ke,emissiveMap:we,normalMapObjectSpace:_e&&A.normalMapType===rp,normalMapTangentSpace:_e&&A.normalMapType===Uh,metalnessMap:Fe,roughnessMap:se,anisotropy:me,anisotropyMap:b,clearcoat:T,clearcoatMap:N,clearcoatNormalMap:B,clearcoatRoughnessMap:K,dispersion:y,iridescence:z,iridescenceMap:re,iridescenceThicknessMap:J,sheen:ee,sheenColorMap:ae,sheenRoughnessMap:xe,specularMap:ne,specularColorMap:he,specularIntensityMap:Le,transmission:le,transmissionMap:U,thicknessMap:ue,gradientMap:fe,opaque:A.transparent===!1&&A.blending===Zi&&A.alphaToCoverage===!1,alphaMap:ve,alphaTest:ce,alphaHash:ie,combine:A.combine,mapUv:Ve&&_(A.map.channel),aoMapUv:Xe&&_(A.aoMap.channel),lightMapUv:De&&_(A.lightMap.channel),bumpMapUv:Ie&&_(A.bumpMap.channel),normalMapUv:_e&&_(A.normalMap.channel),displacementMapUv:Ke&&_(A.displacementMap.channel),emissiveMapUv:we&&_(A.emissiveMap.channel),metalnessMapUv:Fe&&_(A.metalnessMap.channel),roughnessMapUv:se&&_(A.roughnessMap.channel),anisotropyMapUv:b&&_(A.anisotropyMap.channel),clearcoatMapUv:N&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:B&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(A.sheenRoughnessMap.channel),specularMapUv:ne&&_(A.specularMap.channel),specularColorMapUv:he&&_(A.specularColorMap.channel),specularIntensityMapUv:Le&&_(A.specularIntensityMap.channel),transmissionMapUv:U&&_(A.transmissionMap.channel),thicknessMapUv:ue&&_(A.thicknessMap.channel),alphaMapUv:ve&&_(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(_e||me),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(Ve||ve),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&A.map.isVideoTexture===!0&&et.getTransfer(A.map.colorSpace)===st,decodeVideoTextureEmissive:we&&A.emissiveMap.isVideoTexture===!0&&et.getTransfer(A.emissiveMap.colorSpace)===st,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===En,flipSided:A.side===Ot,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Te&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&A.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function p(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)w.push(D),w.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(S(w,A),x(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function S(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function x(A,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){const w=g[A.type];let D;if(w){const $=Mn[w];D=Np.clone($.uniforms)}else D=A.uniforms;return D}function E(A,w){let D;for(let $=0,F=u.length;$<F;$++){const W=u[$];if(W.cacheKey===w){D=W,++D.usedTimes;break}}return D===void 0&&(D=new uv(n,w,A,r),u.push(D)),D}function R(A){if(--A.usedTimes===0){const w=u.indexOf(A);u[w]=u[u.length-1],u.pop(),A.destroy()}}function P(A){c.remove(A)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:k}}function mv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||gv),i.length>1&&i.sort(d||Yc),s.length>1&&s.sort(d||Yc)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function _v(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new jc,n.set(i,[o])):s>=r.length?(o=new jc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ze};break;case"SpotLight":t={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yv=0;function Sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bv(n){const e=new vv,t=xv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const s=new O,r=new lt,o=new lt;function a(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,E=0,R=0,P=0;l.sort(Sv);for(let A=0,w=l.length;A<w;A++){const D=l[A],$=D.color,F=D.intensity,W=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=$.r*F,h+=$.g*F,d+=$.b*F;else if(D.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],F);P++}else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,C=t.get(D);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,i.directionalShadow[f]=C,i.directionalShadowMap[f]=te,i.directionalShadowMatrix[f]=D.shadow.matrix,S++}i.directional[f]=I,f++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy($).multiplyScalar(F),I.distance=W,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,i.spot[_]=I;const G=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,G.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[_]=G.matrix,D.castShadow){const C=t.get(D);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=te,v++}_++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy($).multiplyScalar(F),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=I,m++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const G=D.shadow,C=t.get(D);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,C.shadowCameraNear=G.camera.near,C.shadowCameraFar=G.camera.far,i.pointShadow[g]=C,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=I,g++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar(F),I.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[p]=I,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const k=i.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==S||k.numPointShadows!==x||k.numSpotShadows!==v||k.numSpotMaps!==E||k.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,k.directionalLength=f,k.pointLength=g,k.spotLength=_,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=S,k.numPointShadows=x,k.numSpotShadows=v,k.numSpotMaps=E,k.numLightProbes=P,i.version=yv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Kc(n){const e=new bv(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kc(n),e.set(s,[a])):r>=o.length?(a=new Kc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(n,e,t){let i=new Gh;const s=new We,r=new We,o=new mt,a=new qp({depthPacking:sp}),c=new Yp,l={},u=t.maxTextureSize,h={[oi]:Ot,[Ot]:oi,[En]:En},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(R,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const A=n.getRenderTarget(),w=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),$=n.state;$.setBlending(si),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const F=p!==Fn&&this.type===Fn,W=p===Fn&&this.type!==Fn;for(let te=0,I=R.length;te<I;te++){const G=R[te],C=G.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);const X=C.getFrameExtents();if(s.multiply(X),r.copy(C.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,C.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,C.mapSize.y=r.y)),C.map===null||F===!0||W===!0){const oe=this.type!==Fn?{minFilter:rn,magFilter:rn}:{};C.map!==null&&C.map.dispose(),C.map=new ai(s.x,s.y,oe),C.map.texture.name=G.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const q=C.getViewportCount();for(let oe=0;oe<q;oe++){const de=C.getViewport(oe);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),$.viewport(o),C.updateMatrices(G,oe),i=C.getFrustum(),v(P,k,C.camera,G,this.type)}C.isPointLightShadow!==!0&&this.type===Fn&&S(C,k),C.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,w,D)};function S(R,P){const k=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,k,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,k,f,_,null)}function x(R,P,k,A){let w=null;const D=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)w=D;else if(w=k.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=w.uuid,F=P.uuid;let W=l[$];W===void 0&&(W={},l[$]=W);let te=W[F];te===void 0&&(te=w.clone(),W[F]=te,P.addEventListener("dispose",E)),w=te}if(w.visible=P.visible,w.wireframe=P.wireframe,A===Fn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=n.properties.get(w);$.light=k}return w}function v(R,P,k,A,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Fn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const F=e.update(R),W=R.material;if(Array.isArray(W)){const te=F.groups;for(let I=0,G=te.length;I<G;I++){const C=te[I],X=W[C.materialIndex];if(X&&X.visible){const q=x(R,X,A,w);R.onBeforeShadow(n,R,P,k,F,q,C),n.renderBufferDirect(k,null,F,q,R,C),R.onAfterShadow(n,R,P,k,F,q,C)}}}else if(W.visible){const te=x(R,W,A,w);R.onBeforeShadow(n,R,P,k,F,te,null),n.renderBufferDirect(k,null,F,te,R,null),R.onAfterShadow(n,R,P,k,F,te,null)}}const $=R.children;for(let F=0,W=$.length;F<W;F++)v($[F],P,k,A,w)}function E(R){R.target.removeEventListener("dispose",E);for(const k in l){const A=l[k],w=R.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const Av={[ya]:Sa,[ba]:Ta,[Ma]:wa,[es]:Ea,[Sa]:ya,[Ta]:ba,[wa]:Ma,[Ea]:es};function Rv(n,e){function t(){let U=!1;const ue=new mt;let fe=null;const ve=new mt(0,0,0,0);return{setMask:function(ce){fe!==ce&&!U&&(n.colorMask(ce,ce,ce,ce),fe=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ie,Te,Oe,nt){nt===!0&&(ce*=Oe,ie*=Oe,Te*=Oe),ue.set(ce,ie,Te,Oe),ve.equals(ue)===!1&&(n.clearColor(ce,ie,Te,Oe),ve.copy(ue))},reset:function(){U=!1,fe=null,ve.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,fe=null,ve=null,ce=null;return{setReversed:function(ie){if(ue!==ie){const Te=e.get("EXT_clip_control");ie?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Oe=ce;ce=null,this.setClear(Oe)}},getReversed:function(){return ue},setTest:function(ie){ie?j(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!U&&(n.depthMask(ie),fe=ie)},setFunc:function(ie){if(ue&&(ie=Av[ie]),ve!==ie){switch(ie){case ya:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case ba:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case Ma:n.depthFunc(n.EQUAL);break;case Ea:n.depthFunc(n.GEQUAL);break;case Ta:n.depthFunc(n.GREATER);break;case wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ce!==ie&&(ue&&(ie=1-ie),n.clearDepth(ie),ce=ie)},reset:function(){U=!1,fe=null,ve=null,ce=null,ue=!1}}}function s(){let U=!1,ue=null,fe=null,ve=null,ce=null,ie=null,Te=null,Oe=null,nt=null;return{setTest:function(tt){U||(tt?j(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!U&&(n.stencilMask(tt),ue=tt)},setFunc:function(tt,on,jt){(fe!==tt||ve!==on||ce!==jt)&&(n.stencilFunc(tt,on,jt),fe=tt,ve=on,ce=jt)},setOp:function(tt,on,jt){(ie!==tt||Te!==on||Oe!==jt)&&(n.stencilOp(tt,on,jt),ie=tt,Te=on,Oe=jt)},setLocked:function(tt){U=tt},setClear:function(tt){nt!==tt&&(n.clearStencil(tt),nt=tt)},reset:function(){U=!1,ue=null,fe=null,ve=null,ce=null,ie=null,Te=null,Oe=null,nt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,E=null,R=null,P=new Ze(0,0,0),k=0,A=!1,w=null,D=null,$=null,F=null,W=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(C)[1]),I=G>=1):C.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),I=G>=2);let X=null,q={};const oe=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ee=new mt().fromArray(oe),ye=new mt().fromArray(de);function Pe(U,ue,fe,ve){const ce=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<fe;Te++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ue+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ie}const Y={};Y[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(es),Ie(!1),_e(Yl),j(n.CULL_FACE),Xe(si);function j(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Re(U,ue){return h[U]!==ue?(n.bindFramebuffer(U,ue),h[U]=ue,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(U,ue){let fe=f,ve=!1;if(U){fe=d.get(ue),fe===void 0&&(fe=[],d.set(ue,fe));const ce=U.textures;if(fe.length!==ce.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Te=ce.length;ie<Te;ie++)fe[ie]=n.COLOR_ATTACHMENT0+ie;fe.length=ce.length,ve=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,ve=!0);ve&&n.drawBuffers(fe)}function Ve(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Ye={[Si]:n.FUNC_ADD,[Pf]:n.FUNC_SUBTRACT,[Lf]:n.FUNC_REVERSE_SUBTRACT};Ye[Df]=n.MIN,Ye[If]=n.MAX;const L={[Uf]:n.ZERO,[Nf]:n.ONE,[Ff]:n.SRC_COLOR,[va]:n.SRC_ALPHA,[Vf]:n.SRC_ALPHA_SATURATE,[zf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[Of]:n.ONE_MINUS_SRC_COLOR,[xa]:n.ONE_MINUS_SRC_ALPHA,[Hf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Gf]:n.CONSTANT_COLOR,[Wf]:n.ONE_MINUS_CONSTANT_COLOR,[$f]:n.CONSTANT_ALPHA,[Xf]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,ue,fe,ve,ce,ie,Te,Oe,nt,tt){if(U===si){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),U!==Cf){if(U!==m||tt!==A){if((p!==Si||v!==Si)&&(n.blendEquation(n.FUNC_ADD),p=Si,v=Si),tt)switch(U){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,E=null,R=null,P.set(0,0,0),k=0,m=U,A=tt}return}ce=ce||ue,ie=ie||fe,Te=Te||ve,(ue!==p||ce!==v)&&(n.blendEquationSeparate(Ye[ue],Ye[ce]),p=ue,v=ce),(fe!==S||ve!==x||ie!==E||Te!==R)&&(n.blendFuncSeparate(L[fe],L[ve],L[ie],L[Te]),S=fe,x=ve,E=ie,R=Te),(Oe.equals(P)===!1||nt!==k)&&(n.blendColor(Oe.r,Oe.g,Oe.b,nt),P.copy(Oe),k=nt),m=U,A=!1}function De(U,ue){U.side===En?ge(n.CULL_FACE):j(n.CULL_FACE);let fe=U.side===Ot;ue&&(fe=!fe),Ie(fe),U.blending===Zi&&U.transparent===!1?Xe(si):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ve=U.stencilWrite;a.setTest(ve),ve&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){w!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),w=U)}function _e(U){U!==wf?(j(n.CULL_FACE),U!==D&&(U===Yl?n.cullFace(n.BACK):U===Af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),D=U}function Ke(U){U!==$&&(I&&n.lineWidth(U),$=U)}function we(U,ue,fe){U?(j(n.POLYGON_OFFSET_FILL),(F!==ue||W!==fe)&&(n.polygonOffset(ue,fe),F=ue,W=fe)):ge(n.POLYGON_OFFSET_FILL)}function Fe(U){U?j(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function se(U){U===void 0&&(U=n.TEXTURE0+te-1),X!==U&&(n.activeTexture(U),X=U)}function me(U,ue,fe){fe===void 0&&(X===null?fe=n.TEXTURE0+te-1:fe=X);let ve=q[fe];ve===void 0&&(ve={type:void 0,texture:void 0},q[fe]=ve),(ve.type!==U||ve.texture!==ue)&&(X!==fe&&(n.activeTexture(fe),X=fe),n.bindTexture(U,ue||Y[U]),ve.type=U,ve.texture=ue)}function T(){const U=q[X];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function b(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(U){Ee.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ee.copy(U))}function xe(U){ye.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ye.copy(U))}function ne(U,ue){let fe=l.get(ue);fe===void 0&&(fe=new WeakMap,l.set(ue,fe));let ve=fe.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(ue,U.name),fe.set(U,ve))}function he(U,ue){const ve=l.get(ue).get(U);c.get(ue)!==ve&&(n.uniformBlockBinding(ue,ve,U.__bindingPointIndex),c.set(ue,ve))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,q={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,E=null,R=null,P=new Ze(0,0,0),k=0,A=!1,w=null,D=null,$=null,F=null,W=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ge,bindFramebuffer:Re,drawBuffers:be,useProgram:Ve,setBlending:Xe,setMaterial:De,setFlipSided:Ie,setCullFace:_e,setLineWidth:Ke,setPolygonOffset:we,setScissorTest:Fe,activeTexture:se,bindTexture:me,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:re,texImage3D:J,updateUBOMapping:ne,uniformBlockBinding:he,texStorage2D:B,texStorage3D:K,texSubImage2D:ee,texSubImage3D:le,compressedTexSubImage2D:b,compressedTexSubImage3D:N,scissor:ae,viewport:xe,reset:Le}}function Cv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):qr("canvas")}function _(T,y,z){let ee=1;const le=me(T);if((le.width>z||le.height>z)&&(ee=z/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const b=Math.floor(ee*le.width),N=Math.floor(ee*le.height);h===void 0&&(h=g(b,N));const B=y?g(b,N):h;return B.width=b,B.height=N,B.getContext("2d").drawImage(T,0,0,b,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+b+"x"+N+")."),B}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,y,z,ee,le=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let b=y;if(y===n.RED&&(z===n.FLOAT&&(b=n.R32F),z===n.HALF_FLOAT&&(b=n.R16F),z===n.UNSIGNED_BYTE&&(b=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(b=n.R8UI),z===n.UNSIGNED_SHORT&&(b=n.R16UI),z===n.UNSIGNED_INT&&(b=n.R32UI),z===n.BYTE&&(b=n.R8I),z===n.SHORT&&(b=n.R16I),z===n.INT&&(b=n.R32I)),y===n.RG&&(z===n.FLOAT&&(b=n.RG32F),z===n.HALF_FLOAT&&(b=n.RG16F),z===n.UNSIGNED_BYTE&&(b=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(b=n.RG8UI),z===n.UNSIGNED_SHORT&&(b=n.RG16UI),z===n.UNSIGNED_INT&&(b=n.RG32UI),z===n.BYTE&&(b=n.RG8I),z===n.SHORT&&(b=n.RG16I),z===n.INT&&(b=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(b=n.RGB8UI),z===n.UNSIGNED_SHORT&&(b=n.RGB16UI),z===n.UNSIGNED_INT&&(b=n.RGB32UI),z===n.BYTE&&(b=n.RGB8I),z===n.SHORT&&(b=n.RGB16I),z===n.INT&&(b=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(b=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(b=n.RGBA16UI),z===n.UNSIGNED_INT&&(b=n.RGBA32UI),z===n.BYTE&&(b=n.RGBA8I),z===n.SHORT&&(b=n.RGBA16I),z===n.INT&&(b=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(b=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(b=n.R11F_G11F_B10F)),y===n.RGBA){const N=le?$r:et.getTransfer(ee);z===n.FLOAT&&(b=n.RGBA32F),z===n.HALF_FLOAT&&(b=n.RGBA16F),z===n.UNSIGNED_BYTE&&(b=N===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(b=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(b=n.RGB5_A1)}return(b===n.R16F||b===n.R32F||b===n.RG16F||b===n.RG32F||b===n.RGBA16F||b===n.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function v(T,y){let z;return T?y===null||y===Ei||y===Is?z=n.DEPTH24_STENCIL8:y===zn?z=n.DEPTH32F_STENCIL8:y===Ds&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===Is?z=n.DEPTH_COMPONENT24:y===zn?z=n.DEPTH_COMPONENT32F:y===Ds&&(z=n.DEPTH_COMPONENT16),z}function E(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),k(y),y.isVideoTexture&&u.delete(y)}function P(T){const y=T.target;y.removeEventListener("dispose",P),w(y)}function k(T){const y=i.get(T);if(y.__webglInit===void 0)return;const z=T.source,ee=d.get(z);if(ee){const le=ee[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(T),Object.keys(ee).length===0&&d.delete(z)}i.remove(T)}function A(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const z=T.source,ee=d.get(z);delete ee[y.__cacheKey],o.memory.textures--}function w(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let le=0;le<y.__webglFramebuffer[ee].length;le++)n.deleteFramebuffer(y.__webglFramebuffer[ee][le]);else n.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[ee]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=T.textures;for(let ee=0,le=z.length;ee<le;ee++){const b=i.get(z[ee]);b.__webglTexture&&(n.deleteTexture(b.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(T)}let D=0;function $(){D=0}function F(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function te(T,y){const z=i.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,y);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function I(T,y){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Y(z,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function G(T,y){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Y(z,T,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function C(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){j(z,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const X={[Ca]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},q={[rn]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},oe={[op]:n.NEVER,[dp]:n.ALWAYS,[ap]:n.LESS,[Nh]:n.LEQUAL,[lp]:n.EQUAL,[hp]:n.GEQUAL,[cp]:n.GREATER,[up]:n.NOTEQUAL};function de(T,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===yo||y.magFilter===Ks||y.magFilter===ni||y.minFilter===Ct||y.minFilter===yo||y.minFilter===Ks||y.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,X[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,X[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,X[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,q[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Ks&&y.minFilter!==ni||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ee(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const ee=y.source;let le=d.get(ee);le===void 0&&(le={},d.set(ee,le));const b=W(y);if(b!==T.__cacheKey){le[b]===void 0&&(le[b]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),le[b].usedTimes++;const N=le[T.__cacheKey];N!==void 0&&(le[T.__cacheKey].usedTimes--,N.usedTimes===0&&A(y)),T.__cacheKey=b,T.__webglTexture=le[b].texture}return z}function ye(T,y,z){return Math.floor(Math.floor(T/z)/y)}function Pe(T,y,z,ee){const b=T.updateRanges;if(b.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,ee,y.data);else{b.sort((J,ae)=>J.start-ae.start);let N=0;for(let J=1;J<b.length;J++){const ae=b[N],xe=b[J],ne=ae.start+ae.count,he=ye(xe.start,y.width,4),Le=ye(ae.start,y.width,4);xe.start<=ne+1&&he===Le&&ye(xe.start+xe.count-1,y.width,4)===he?ae.count=Math.max(ae.count,xe.start+xe.count-ae.start):(++N,b[N]=xe)}b.length=N+1;const B=n.getParameter(n.UNPACK_ROW_LENGTH),K=n.getParameter(n.UNPACK_SKIP_PIXELS),re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let J=0,ae=b.length;J<ae;J++){const xe=b[J],ne=Math.floor(xe.start/4),he=Math.ceil(xe.count/4),Le=ne%y.width,U=Math.floor(ne/y.width),ue=he,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Le,U,ue,fe,z,ee,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,B),n.pixelStorei(n.UNPACK_SKIP_PIXELS,K),n.pixelStorei(n.UNPACK_SKIP_ROWS,re)}}function Y(T,y,z){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);const le=Ee(T,y),b=y.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+z);const N=i.get(b);if(b.version!==N.__version||le===!0){t.activeTexture(n.TEXTURE0+z);const B=et.getPrimaries(et.workingColorSpace),K=y.colorSpace===ei?null:et.getPrimaries(y.colorSpace),re=y.colorSpace===ei||B===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let J=_(y.image,!1,s.maxTextureSize);J=se(y,J);const ae=r.convert(y.format,y.colorSpace),xe=r.convert(y.type);let ne=x(y.internalFormat,ae,xe,y.colorSpace,y.isVideoTexture);de(ee,y);let he;const Le=y.mipmaps,U=y.isVideoTexture!==!0,ue=N.__version===void 0||le===!0,fe=b.dataReady,ve=E(y,J);if(y.isDepthTexture)ne=v(y.format===Ns,y.type),ue&&(U?t.texStorage2D(n.TEXTURE_2D,1,ne,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ne,J.width,J.height,0,ae,xe,null));else if(y.isDataTexture)if(Le.length>0){U&&ue&&t.texStorage2D(n.TEXTURE_2D,ve,ne,Le[0].width,Le[0].height);for(let ce=0,ie=Le.length;ce<ie;ce++)he=Le[ce],U?fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,he.width,he.height,ae,xe,he.data):t.texImage2D(n.TEXTURE_2D,ce,ne,he.width,he.height,0,ae,xe,he.data);y.generateMipmaps=!1}else U?(ue&&t.texStorage2D(n.TEXTURE_2D,ve,ne,J.width,J.height),fe&&Pe(y,J,ae,xe)):t.texImage2D(n.TEXTURE_2D,0,ne,J.width,J.height,0,ae,xe,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ne,Le[0].width,Le[0].height,J.depth);for(let ce=0,ie=Le.length;ce<ie;ce++)if(he=Le[ce],y.format!==Sn)if(ae!==null)if(U){if(fe)if(y.layerUpdates.size>0){const Te=wc(he.width,he.height,y.format,y.type);for(const Oe of y.layerUpdates){const nt=he.data.subarray(Oe*Te/he.data.BYTES_PER_ELEMENT,(Oe+1)*Te/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Oe,he.width,he.height,1,ae,nt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,he.width,he.height,J.depth,ae,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ne,he.width,he.height,J.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,he.width,he.height,J.depth,ae,xe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ne,he.width,he.height,J.depth,0,ae,xe,he.data)}else{U&&ue&&t.texStorage2D(n.TEXTURE_2D,ve,ne,Le[0].width,Le[0].height);for(let ce=0,ie=Le.length;ce<ie;ce++)he=Le[ce],y.format!==Sn?ae!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,he.width,he.height,ae,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ne,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,he.width,he.height,ae,xe,he.data):t.texImage2D(n.TEXTURE_2D,ce,ne,he.width,he.height,0,ae,xe,he.data)}else if(y.isDataArrayTexture)if(U){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ne,J.width,J.height,J.depth),fe)if(y.layerUpdates.size>0){const ce=wc(J.width,J.height,y.format,y.type);for(const ie of y.layerUpdates){const Te=J.data.subarray(ie*ce/J.data.BYTES_PER_ELEMENT,(ie+1)*ce/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,J.width,J.height,1,ae,xe,Te)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,J.width,J.height,J.depth,0,ae,xe,J.data);else if(y.isData3DTexture)U?(ue&&t.texStorage3D(n.TEXTURE_3D,ve,ne,J.width,J.height,J.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,ne,J.width,J.height,J.depth,0,ae,xe,J.data);else if(y.isFramebufferTexture){if(ue)if(U)t.texStorage2D(n.TEXTURE_2D,ve,ne,J.width,J.height);else{let ce=J.width,ie=J.height;for(let Te=0;Te<ve;Te++)t.texImage2D(n.TEXTURE_2D,Te,ne,ce,ie,0,ae,xe,null),ce>>=1,ie>>=1}}else if(Le.length>0){if(U&&ue){const ce=me(Le[0]);t.texStorage2D(n.TEXTURE_2D,ve,ne,ce.width,ce.height)}for(let ce=0,ie=Le.length;ce<ie;ce++)he=Le[ce],U?fe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ae,xe,he):t.texImage2D(n.TEXTURE_2D,ce,ne,ae,xe,he);y.generateMipmaps=!1}else if(U){if(ue){const ce=me(J);t.texStorage2D(n.TEXTURE_2D,ve,ne,ce.width,ce.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,ne,ae,xe,J);m(y)&&p(ee),N.__version=b.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function j(T,y,z){if(y.image.length!==6)return;const ee=Ee(T,y),le=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const b=i.get(le);if(le.version!==b.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const N=et.getPrimaries(et.workingColorSpace),B=y.colorSpace===ei?null:et.getPrimaries(y.colorSpace),K=y.colorSpace===ei||N===B?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const re=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let ie=0;ie<6;ie++)!re&&!J?ae[ie]=_(y.image[ie],!0,s.maxCubemapSize):ae[ie]=J?y.image[ie].image:y.image[ie],ae[ie]=se(y,ae[ie]);const xe=ae[0],ne=r.convert(y.format,y.colorSpace),he=r.convert(y.type),Le=x(y.internalFormat,ne,he,y.colorSpace),U=y.isVideoTexture!==!0,ue=b.__version===void 0||ee===!0,fe=le.dataReady;let ve=E(y,xe);de(n.TEXTURE_CUBE_MAP,y);let ce;if(re){U&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Le,xe.width,xe.height);for(let ie=0;ie<6;ie++){ce=ae[ie].mipmaps;for(let Te=0;Te<ce.length;Te++){const Oe=ce[Te];y.format!==Sn?ne!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Oe.width,Oe.height,ne,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Le,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Oe.width,Oe.height,ne,he,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Le,Oe.width,Oe.height,0,ne,he,Oe.data)}}}else{if(ce=y.mipmaps,U&&ue){ce.length>0&&ve++;const ie=me(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Le,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(J){U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ae[ie].width,ae[ie].height,ne,he,ae[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,ae[ie].width,ae[ie].height,0,ne,he,ae[ie].data);for(let Te=0;Te<ce.length;Te++){const nt=ce[Te].image[ie].image;U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,nt.width,nt.height,ne,he,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Le,nt.width,nt.height,0,ne,he,nt.data)}}else{U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ne,he,ae[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,ne,he,ae[ie]);for(let Te=0;Te<ce.length;Te++){const Oe=ce[Te];U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,ne,he,Oe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Le,ne,he,Oe.image[ie])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),b.__version=le.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ge(T,y,z,ee,le,b){const N=r.convert(z.format,z.colorSpace),B=r.convert(z.type),K=x(z.internalFormat,N,B,z.colorSpace),re=i.get(y),J=i.get(z);if(J.__renderTarget=y,!re.__hasExternalTextures){const ae=Math.max(1,y.width>>b),xe=Math.max(1,y.height>>b);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,b,K,ae,xe,y.depth,0,N,B,null):t.texImage2D(le,b,K,ae,xe,0,N,B,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,le,J.__webglTexture,0,Ke(y)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,le,J.__webglTexture,b),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(T,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const ee=y.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,b=v(y.stencilBuffer,le),N=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=Ke(y);we(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,b,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,b,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,b,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,T)}else{const ee=y.textures;for(let le=0;le<ee.length;le++){const b=ee[le],N=r.convert(b.format,b.colorSpace),B=r.convert(b.type),K=x(b.internalFormat,N,B,b.colorSpace),re=Ke(y);z&&we(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,K,y.width,y.height):we(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(y.depthTexture);ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te(y.depthTexture,0);const le=ee.__webglTexture,b=Ke(y);if(y.depthTexture.format===Us)we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,b):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(y.depthTexture.format===Ns)we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,b):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const y=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const ee=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=ee}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const ee=T.texture.mipmaps;ee&&ee.length>0?be(y.__webglFramebuffer[0],T):be(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=n.createRenderbuffer(),Re(y.__webglDepthbuffer[ee],T,!1);else{const le=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,b=y.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,b),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,b)}}else{const ee=T.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Re(y.__webglDepthbuffer,T,!1);else{const le=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,b=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,b),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,b)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(T,y,z){const ee=i.get(T);y!==void 0&&ge(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ve(T)}function L(T){const y=T.texture,z=i.get(T),ee=i.get(y);T.addEventListener("dispose",P);const le=T.textures,b=T.isWebGLCubeRenderTarget===!0,N=le.length>1;if(N||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,o.memory.textures++),b){z.__webglFramebuffer=[];for(let B=0;B<6;B++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[B]=[];for(let K=0;K<y.mipmaps.length;K++)z.__webglFramebuffer[B][K]=n.createFramebuffer()}else z.__webglFramebuffer[B]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let B=0;B<y.mipmaps.length;B++)z.__webglFramebuffer[B]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(N)for(let B=0,K=le.length;B<K;B++){const re=i.get(le[B]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&we(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let B=0;B<le.length;B++){const K=le[B];z.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[B]);const re=r.convert(K.format,K.colorSpace),J=r.convert(K.type),ae=x(K.internalFormat,re,J,K.colorSpace,T.isXRRenderTarget===!0),xe=Ke(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,z.__webglColorRenderbuffer[B])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(b){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),de(n.TEXTURE_CUBE_MAP,y);for(let B=0;B<6;B++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ge(z.__webglFramebuffer[B][K],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,K);else ge(z.__webglFramebuffer[B],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){for(let B=0,K=le.length;B<K;B++){const re=le[B],J=i.get(re);let ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),de(ae,re),ge(z.__webglFramebuffer,T,re,n.COLOR_ATTACHMENT0+B,ae,0),m(re)&&p(ae)}t.unbindTexture()}else{let B=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(B=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(B,ee.__webglTexture),de(B,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ge(z.__webglFramebuffer[K],T,y,n.COLOR_ATTACHMENT0,B,K);else ge(z.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,B,0);m(y)&&p(B),t.unbindTexture()}T.depthBuffer&&Ve(T)}function Xe(T){const y=T.textures;for(let z=0,ee=y.length;z<ee;z++){const le=y[z];if(m(le)){const b=S(T),N=i.get(le).__webglTexture;t.bindTexture(b,N),p(b),t.unbindTexture()}}}const De=[],Ie=[];function _e(T){if(T.samples>0){if(we(T)===!1){const y=T.textures,z=T.width,ee=T.height;let le=n.COLOR_BUFFER_BIT;const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=i.get(T),B=y.length>1;if(B)for(let re=0;re<y.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);const K=T.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let re=0;re<y.length;re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),B){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const J=i.get(y[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,z,ee,0,0,z,ee,le,n.NEAREST),c===!0&&(De.length=0,Ie.length=0,De.push(n.COLOR_ATTACHMENT0+re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(b),Ie.push(b),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),B)for(let re=0;re<y.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const J=i.get(y[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,N.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ke(T){return Math.min(s.maxSamples,T.samples)}function we(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Fe(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function se(T,y){const z=T.colorSpace,ee=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==is&&z!==ei&&(et.getTransfer(z)===st?(ee!==Sn||le!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=C,this.rebindTextures=Ye,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=we}function Pv(n,e){function t(i,s=ei){let r;const o=et.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wh)return n.BYTE;if(i===Ah)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Hs)return n.HALF_FLOAT;if(i===Ph)return n.ALPHA;if(i===Lh)return n.RGB;if(i===Sn)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Dh)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Ih)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===Ir||i===Ur||i===Nr||i===Fr)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Ia||i===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Fa||i===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Na||i===Fa)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ka||i===Ba||i===za||i===Ha||i===Va||i===Ga||i===Wa||i===$a||i===Xa||i===qa||i===Ya||i===ja||i===Ka||i===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ka)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ga)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$a)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Qa||i===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===nl||i===il||i===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends Ti{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Iv,p={},S=t.getContextAttributes();let x=null,v=null;const E=[],R=[],P=new We;let k=null;const A=new hn;A.viewport=new mt;const w=new hn;w.viewport=new mt;const D=[A,w],$=new Qp;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=E[Y];return j===void 0&&(j=new Vo,E[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=E[Y];return j===void 0&&(j=new Vo,E[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=E[Y];return j===void 0&&(j=new Vo,E[Y]=j),j.getHandSpace()};function te(Y){const j=R.indexOf(Y.inputSource);if(j===-1)return;const ge=E[j];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<E.length;Y++){const j=R[Y];j!==null&&(R[Y]=null,E[Y].disconnect(j))}F=null,W=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(x),f=null,d=null,h=null,s=null,v=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",I),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Re=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?Ns:Us,Re=S.stencil?Is:Ei);const Ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ai(d.textureWidth,d.textureHeight,{format:Sn,type:Gn,depthTexture:new Wh(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ai(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let j=0;j<Y.removed.length;j++){const ge=Y.removed[j],Re=R.indexOf(ge);Re>=0&&(R[Re]=null,E[Re].disconnect(ge))}for(let j=0;j<Y.added.length;j++){const ge=Y.added[j];let Re=R.indexOf(ge);if(Re===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=R.length){R.push(ge),Re=Ve;break}else if(R[Ve]===null){R[Ve]=ge,Re=Ve;break}if(Re===-1)break}const be=E[Re];be&&be.connect(ge)}}const C=new O,X=new O;function q(Y,j,ge){C.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const Re=C.distanceTo(X),be=j.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,Ye=be[14]/(be[10]-1),L=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],De=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],_e=(Ve[8]+1)/Ve[0],Ke=Ye*Ie,we=Ye*_e,Fe=Re/(-Ie+_e),se=Fe*-Ie;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(se),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const me=Ye+Fe,T=L+Fe,y=Ke-se,z=we+(Re-se),ee=Xe*L/T*me,le=De*L/T*me;Y.projectionMatrix.makePerspective(y,z,ee,le,me,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,ge=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),$.near=w.near=A.near=j,$.far=w.far=A.far=ge,(F!==$.near||W!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,W=$.far),$.layers.mask=Y.layers.mask|6,A.layers.mask=$.layers.mask&3,w.layers.mask=$.layers.mask&5;const Re=Y.parent,be=$.cameras;oe($,Re);for(let Ve=0;Ve<be.length;Ve++)oe(be[Ve],Re);be.length===2?q($,A,w):$.projectionMatrix.copy(A.projectionMatrix),de(Y,$,Re)};function de(Y,j,ge){ge===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(Y){return p[Y]};let Ee=null;function ye(Y,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Re=!1;ge.length!==$.cameras.length&&($.cameras.length=0,Re=!0);for(let L=0;L<ge.length;L++){const Xe=ge[L];let De=null;if(f!==null)De=f.getViewport(Xe);else{const _e=h.getViewSubImage(d,Xe);De=_e.viewport,L===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let Ie=D[L];Ie===void 0&&(Ie=new hn,Ie.layers.enable(L),Ie.viewport=new mt,D[L]=Ie),Ie.matrix.fromArray(Xe.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Xe.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(De.x,De.y,De.width,De.height),L===0&&($.matrix.copy(Ie.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Re===!0&&$.cameras.push(Ie)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const L=h.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<ge.length;L++){const Xe=ge[L].camera;if(Xe){let De=p[Xe];De||(De=new $h,p[Xe]=De);const Ie=h.getCameraImage(Xe);De.sourceTexture=Ie}}}}for(let ge=0;ge<E.length;ge++){const Re=R[ge],be=E[ge];Re!==null&&be!==void 0&&be.update(Re,j,l||o)}Ee&&Ee(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Pe=new Yh;Pe.setAnimationLoop(ye),this.setAnimationLoop=function(Y){Ee=Y},this.dispose=function(){}}}const xi=new fn,Nv=new lt;function Fv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,xi.copy(v),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(xi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ov(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function l(S,x){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(S,E);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const x=h();S.__bindingPointIndex=x;const v=n.createBuffer(),E=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],v=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,P=v.length;R<P;R++){const k=Array.isArray(v[R])?v[R]:[v[R]];for(let A=0,w=k.length;A<w;A++){const D=k[A];if(f(D,R,A,E)===!0){const $=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let te=0;te<F.length;te++){const I=F[te],G=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,$+W,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,x,v,E){const R=S.value,P=x+"_"+v;if(E[P]===void 0)return typeof R=="number"||typeof R=="boolean"?E[P]=R:E[P]=R.clone(),!0;{const k=E[P];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return E[P]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function g(S){const x=S.uniforms;let v=0;const E=16;for(let P=0,k=x.length;P<k;P++){const A=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,D=A.length;w<D;w++){const $=A[w],F=Array.isArray($.value)?$.value:[$.value];for(let W=0,te=F.length;W<te;W++){const I=F[W],G=_(I),C=v%E,X=C%G.boundary,q=C+X;v+=X,q!==0&&E-q<G.storage&&(v+=E-q),$.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=v,v+=G.storage}}}const R=v%E;return R>0&&(v+=E-R),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class kv{constructor(e={}){const{canvas:t=mp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=yt;let R=0,P=0,k=null,A=-1,w=null;const D=new mt,$=new mt;let F=null;const W=new Ze(0);let te=0,I=t.width,G=t.height,C=1,X=null,q=null;const oe=new mt(0,0,I,G),de=new mt(0,0,I,G);let Ee=!1;const ye=new Gh;let Pe=!1,Y=!1;const j=new lt,ge=new O,Re=new mt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ye(){return k===null?C:1}let L=i;function Xe(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const H="webgl2";if(L=Xe(H,M),L===null)throw Xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let De,Ie,_e,Ke,we,Fe,se,me,T,y,z,ee,le,b,N,B,K,re,J,ae,xe,ne,he,Le;function U(){De=new Y_(L),De.init(),ne=new Pv(L,De),Ie=new H_(L,De,e,ne),_e=new Rv(L,De),Ie.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),Ke=new Z_(L),we=new mv,Fe=new Cv(L,De,_e,we,Ie,ne,Ke),se=new G_(v),me=new q_(v),T=new im(L),he=new B_(L,T),y=new j_(L,T,Ke,he),z=new Q_(L,y,T,Ke),J=new J_(L,Ie,Fe),B=new V_(we),ee=new pv(v,se,me,De,Ie,he,B),le=new Fv(v,we),b=new _v,N=new Mv(De),re=new k_(v,se,me,_e,z,f,c),K=new wv(v,z,Ie),Le=new Ov(L,Ke,Ie,_e),ae=new z_(L,De,Ke),xe=new K_(L,De,Ke),Ke.programs=ee.programs,v.capabilities=Ie,v.extensions=De,v.properties=we,v.renderLists=b,v.shadowMap=K,v.state=_e,v.info=Ke}U();const ue=new Uv(v,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=De.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=De.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(M){M!==void 0&&(C=M,this.setSize(I,G,!1))},this.getSize=function(M){return M.set(I,G)},this.setSize=function(M,H,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=M,G=H,t.width=Math.floor(M*C),t.height=Math.floor(H*C),Z===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(I*C,G*C).floor()},this.setDrawingBufferSize=function(M,H,Z){I=M,G=H,C=Z,t.width=Math.floor(M*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,H,Z,Q){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,H,Z,Q),_e.viewport(D.copy(oe).multiplyScalar(C).round())},this.getScissor=function(M){return M.copy(de)},this.setScissor=function(M,H,Z,Q){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,H,Z,Q),_e.scissor($.copy(de).multiplyScalar(C).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){_e.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,Z=!0){let Q=0;if(M){let V=!1;if(k!==null){const pe=k.texture.format;V=pe===wl||pe===Tl||pe===El}if(V){const pe=k.texture.type,Me=pe===Gn||pe===Ei||pe===Ds||pe===Is||pe===bl||pe===Ml,Ce=re.getClearColor(),Ae=re.getClearAlpha(),Be=Ce.r,ze=Ce.g,Ue=Ce.b;Me?(g[0]=Be,g[1]=ze,g[2]=Ue,g[3]=Ae,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=Ue,_[3]=Ae,L.clearBufferiv(L.COLOR,0,_))}else Q|=L.COLOR_BUFFER_BIT}H&&(Q|=L.DEPTH_BUFFER_BIT),Z&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),re.dispose(),b.dispose(),N.dispose(),we.dispose(),se.dispose(),me.dispose(),z.dispose(),he.dispose(),Le.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",jt),ue.removeEventListener("sessionend",ds),mn.stop()};function fe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Ke.autoReset,H=K.enabled,Z=K.autoUpdate,Q=K.needsUpdate,V=K.type;U(),Ke.autoReset=M,K.enabled=H,K.autoUpdate=Z,K.needsUpdate=Q,K.type=V}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){const H=M.target;H.removeEventListener("dispose",ie),Te(H)}function Te(M){Oe(M),we.remove(M)}function Oe(M){const H=we.get(M).programs;H!==void 0&&(H.forEach(function(Z){ee.releaseProgram(Z)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,Z,Q,V,pe){H===null&&(H=be);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Ce=Rn(M,H,Z,Q,V);_e.setMaterial(Q,Me);let Ae=Z.index,Be=1;if(Q.wireframe===!0){if(Ae=y.getWireframeAttribute(Z),Ae===void 0)return;Be=2}const ze=Z.drawRange,Ue=Z.attributes.position;let je=ze.start*Be,it=(ze.start+ze.count)*Be;pe!==null&&(je=Math.max(je,pe.start*Be),it=Math.min(it,(pe.start+pe.count)*Be)),Ae!==null?(je=Math.max(je,0),it=Math.min(it,Ae.count)):Ue!=null&&(je=Math.max(je,0),it=Math.min(it,Ue.count));const pt=it-je;if(pt<0||pt===1/0)return;he.setup(V,Q,Ce,Z,Ae);let ct,at=ae;if(Ae!==null&&(ct=T.get(Ae),at=xe,at.setIndex(ct)),V.isMesh)Q.wireframe===!0?(_e.setLineWidth(Q.wireframeLinewidth*Ye()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(V.isLine){let Ne=Q.linewidth;Ne===void 0&&(Ne=1),_e.setLineWidth(Ne*Ye()),V.isLineSegments?at.setMode(L.LINES):V.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else V.isPoints?at.setMode(L.POINTS):V.isSprite&&at.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,dt=V._multiDrawCounts,Qe=V._multiDrawCount,Kt=Ae?T.get(Ae).bytesPerElement:1,Ai=we.get(Q).currentProgram.getUniforms();for(let Zt=0;Zt<Qe;Zt++)Ai.setValue(L,"_gl_DrawID",Zt),at.render(Ne[Zt]/Kt,dt[Zt])}else if(V.isInstancedMesh)at.renderInstances(je,pt,V.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,dt=Math.min(Z.instanceCount,Ne);at.renderInstances(je,pt,dt)}else at.render(je,pt)};function nt(M,H,Z){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,Lt(M,H,Z),M.side=oi,M.needsUpdate=!0,Lt(M,H,Z),M.side=En):Lt(M,H,Z)}this.compile=function(M,H,Z=null){Z===null&&(Z=M),p=N.get(Z),p.init(H),x.push(p),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),M!==Z&&M.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Q=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Ce=pe[Me];nt(Ce,Z,V),Q.add(Ce)}else nt(pe,Z,V),Q.add(pe)}),p=x.pop(),Q},this.compileAsync=function(M,H,Z=null){const Q=this.compile(M,H,Z);return new Promise(V=>{function pe(){if(Q.forEach(function(Me){we.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size===0){V(M);return}setTimeout(pe,10)}De.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function on(M){tt&&tt(M)}function jt(){mn.stop()}function ds(){mn.start()}const mn=new Yh;mn.setAnimationLoop(on),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(M){tt=M,ue.setAnimationLoop(M),M===null?mn.stop():mn.start()},ue.addEventListener("sessionstart",jt),ue.addEventListener("sessionend",ds),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,H,k),p=N.get(M,x.length),p.init(H),x.push(p),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ye.setFromProjectionMatrix(j,Tn,H.reversedDepth),Y=this.localClippingEnabled,Pe=B.init(this.clippingPlanes,Y),m=b.get(M,S.length),m.init(),S.push(m),ue.enabled===!0&&ue.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&hi(pe,H,-1/0,v.sortObjects)}hi(M,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,q),Ve=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ve&&re.addToRenderList(m,M),this.info.render.frame++,Pe===!0&&B.beginShadows();const Z=p.state.shadowsArray;K.render(Z,M,H),Pe===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const pe=H.cameras;if(V.length>0)for(let Me=0,Ce=pe.length;Me<Ce;Me++){const Ae=pe[Me];wi(Q,V,M,Ae)}Ve&&re.render(M);for(let Me=0,Ce=pe.length;Me<Ce;Me++){const Ae=pe[Me];vo(m,M,Ae,Ae.viewport)}}else V.length>0&&wi(Q,V,M,H),Ve&&re.render(M),vo(m,M,H);k!==null&&P===0&&(Fe.updateMultisampleRenderTarget(k),Fe.updateRenderTargetMipmap(k)),M.isScene===!0&&M.onAfterRender(v,M,H),he.resetDefaultState(),A=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],Pe===!0&&B.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function hi(M,H,Z,Q){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ye.intersectsSprite(M)){Q&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Me=z.update(M),Ce=M.material;Ce.visible&&m.push(M,Me,Ce,Z,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ye.intersectsObject(M))){const Me=z.update(M),Ce=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Re.copy(Me.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Ce)){const Ae=Me.groups;for(let Be=0,ze=Ae.length;Be<ze;Be++){const Ue=Ae[Be],je=Ce[Ue.materialIndex];je&&je.visible&&m.push(M,Me,je,Z,Re.z,Ue)}}else Ce.visible&&m.push(M,Me,Ce,Z,Re.z,null)}}const pe=M.children;for(let Me=0,Ce=pe.length;Me<Ce;Me++)hi(pe[Me],H,Z,Q)}function vo(M,H,Z,Q){const V=M.opaque,pe=M.transmissive,Me=M.transparent;p.setupLightsView(Z),Pe===!0&&B.setGlobalState(v.clippingPlanes,Z),Q&&_e.viewport(D.copy(Q)),V.length>0&&ke(V,H,Z),pe.length>0&&ke(pe,H,Z),Me.length>0&&ke(Me,H,Z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function wi(M,H,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new ai(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Hs:Gn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Q.id],Me=Q.viewport||D;pe.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Ae=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(W),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&re.render(Z);const ze=v.toneMapping;v.toneMapping=ri;const Ue=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Pe===!0&&B.setGlobalState(v.clippingPlanes,Q),ke(M,Z,Q),Fe.updateMultisampleRenderTarget(pe),Fe.updateRenderTargetMipmap(pe),De.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,pt=H.length;it<pt;it++){const ct=H[it],at=ct.object,Ne=ct.geometry,dt=ct.material,Qe=ct.group;if(dt.side===En&&at.layers.test(Q.layers)){const Kt=dt.side;dt.side=Ot,dt.needsUpdate=!0,ut(at,Z,Q,Ne,dt,Qe),dt.side=Kt,dt.needsUpdate=!0,je=!0}}je===!0&&(Fe.updateMultisampleRenderTarget(pe),Fe.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ce,Ae,Be),v.setClearColor(W,te),Ue!==void 0&&(Q.viewport=Ue),v.toneMapping=ze}function ke(M,H,Z){const Q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pe=M.length;V<pe;V++){const Me=M[V],Ce=Me.object,Ae=Me.geometry,Be=Me.group;let ze=Me.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ce.layers.test(Z.layers)&&ut(Ce,H,Z,Ae,ze,Be)}}function ut(M,H,Z,Q,V,pe){M.onBeforeRender(v,H,Z,Q,V,pe),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(v,H,Z,Q,M,pe),V.transparent===!0&&V.side===En&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,v.renderBufferDirect(Z,H,Q,V,M,pe),V.side=oi,V.needsUpdate=!0,v.renderBufferDirect(Z,H,Q,V,M,pe),V.side=En):v.renderBufferDirect(Z,H,Q,V,M,pe),M.onAfterRender(v,H,Z,Q,V,pe)}function Lt(M,H,Z){H.isScene!==!0&&(H=be);const Q=we.get(M),V=p.state.lights,pe=p.state.shadowsArray,Me=V.state.version,Ce=ee.getParameters(M,V.state,pe,H,Z),Ae=ee.getProgramCacheKey(Ce);let Be=Q.programs;Q.environment=M.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(M.isMeshStandardMaterial?me:se).get(M.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",ie),Be=new Map,Q.programs=Be);let ze=Be.get(Ae);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Me)return Dt(M,Ce),ze}else Ce.uniforms=ee.getUniforms(M),M.onBeforeCompile(Ce,v),ze=ee.acquireProgram(Ce,Ae),Be.set(Ae,ze),Q.uniforms=Ce.uniforms;const Ue=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=B.uniform),Dt(M,Ce),Q.needsLights=bf(M),Q.lightsStateVersion=Me,Q.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function gn(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=kr.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Dt(M,H){const Z=we.get(M);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Rn(M,H,Z,Q,V){H.isScene!==!0&&(H=be),Fe.resetTextureUnits();const pe=H.fog,Me=Q.isMeshStandardMaterial?H.environment:null,Ce=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:is,Ae=(Q.isMeshStandardMaterial?me:se).get(Q.envMap||Me),Be=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ue=!!Z.morphAttributes.position,je=!!Z.morphAttributes.normal,it=!!Z.morphAttributes.color;let pt=ri;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pt=v.toneMapping);const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=ct!==void 0?ct.length:0,Ne=we.get(Q),dt=p.state.lights;if(Pe===!0&&(Y===!0||M!==w)){const kt=M===w&&Q.id===A;B.setState(Q,M,kt)}let Qe=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==dt.state.version||Ne.outputColorSpace!==Ce||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Ae||Q.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==B.numPlanes||Ne.numIntersection!==B.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==Ue||Ne.morphNormals!==je||Ne.morphColors!==it||Ne.toneMapping!==pt||Ne.morphTargetsCount!==at)&&(Qe=!0):(Qe=!0,Ne.__version=Q.version);let Kt=Ne.currentProgram;Qe===!0&&(Kt=Lt(Q,H,V));let Ai=!1,Zt=!1,fs=!1;const ft=Kt.getUniforms(),an=Ne.uniforms;if(_e.useProgram(Kt.program)&&(Ai=!0,Zt=!0,fs=!0),Q.id!==A&&(A=Q.id,Zt=!0),Ai||w!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(L,"projectionMatrix",M.projectionMatrix),ft.setValue(L,"viewMatrix",M.matrixWorldInverse);const Ht=ft.map.cameraPosition;Ht!==void 0&&Ht.setValue(L,ge.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ft.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Zt=!0,fs=!0)}if(V.isSkinnedMesh){ft.setOptional(L,V,"bindMatrix"),ft.setOptional(L,V,"bindMatrixInverse");const kt=V.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ft.setValue(L,"boneTexture",kt.boneTexture,Fe))}V.isBatchedMesh&&(ft.setOptional(L,V,"batchingTexture"),ft.setValue(L,"batchingTexture",V._matricesTexture,Fe),ft.setOptional(L,V,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",V._indirectTexture,Fe),ft.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",V._colorsTexture,Fe));const ln=Z.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&J.update(V,Z,Kt),(Zt||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,ft.setValue(L,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(an.envMap.value=Ae,an.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(an.envMapIntensity.value=H.environmentIntensity),Zt&&(ft.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&di(an,fs),pe&&Q.fog===!0&&le.refreshFogUniforms(an,pe),le.refreshMaterialUniforms(an,Q,C,G,p.state.transmissionRenderTarget[M.id]),kr.upload(L,gn(Ne),an,Fe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(kr.upload(L,gn(Ne),an,Fe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ft.setValue(L,"center",V.center),ft.setValue(L,"modelViewMatrix",V.modelViewMatrix),ft.setValue(L,"normalMatrix",V.normalMatrix),ft.setValue(L,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const kt=Q.uniformsGroups;for(let Ht=0,xo=kt.length;Ht<xo;Ht++){const fi=kt[Ht];Le.update(fi,Kt),Le.bind(fi,Kt)}}return Kt}function di(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function bf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,H,Z){const Q=we.get(M);Q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),we.get(M.texture).__webglTexture=H,we.get(M.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const Z=we.get(M);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Mf=L.createFramebuffer();this.setRenderTarget=function(M,H=0,Z=0){k=M,R=H,P=Z;let Q=!0,V=null,pe=!1,Me=!1;if(M){const Ae=we.get(M);if(Ae.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(Ae.__webglFramebuffer===void 0)Fe.setupRenderTarget(M);else if(Ae.__hasExternalTextures)Fe.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(Ae.__boundDepthTexture!==Ue){if(Ue!==null&&we.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const ze=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?V=ze[H][Z]:V=ze[H],pe=!0):M.samples>0&&Fe.useMultisampledRTT(M)===!1?V=we.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[Z]:V=ze,D.copy(M.viewport),$.copy(M.scissor),F=M.scissorTest}else D.copy(oe).multiplyScalar(C).floor(),$.copy(de).multiplyScalar(C).floor(),F=Ee;if(Z!==0&&(V=Mf),_e.bindFramebuffer(L.FRAMEBUFFER,V)&&Q&&_e.drawBuffers(M,V),_e.viewport(D),_e.scissor($),_e.setScissorTest(F),pe){const Ae=we.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,Z)}else if(Me){const Ae=H;for(let Be=0;Be<M.textures.length;Be++){const ze=we.get(M.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,ze.__webglTexture,Z,Ae)}}else if(M!==null&&Z!==0){const Ae=we.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,Z)}A=-1},this.readRenderTargetPixels=function(M,H,Z,Q,V,pe,Me,Ce=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){_e.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Be=M.textures[Ce],ze=Be.format,Ue=Be.type;if(!Ie.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-Q&&Z>=0&&Z<=M.height-V&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),L.readPixels(H,Z,Q,V,ne.convert(ze),ne.convert(Ue),pe))}finally{const Be=k!==null?we.get(k).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,H,Z,Q,V,pe,Me,Ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(H>=0&&H<=M.width-Q&&Z>=0&&Z<=M.height-V){_e.bindFramebuffer(L.FRAMEBUFFER,Ae);const Be=M.textures[Ce],ze=Be.format,Ue=Be.type;if(!Ie.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),L.readPixels(H,Z,Q,V,ne.convert(ze),ne.convert(Ue),0);const it=k!==null?we.get(k).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,it);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gp(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(je),L.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,Z=0){const Q=Math.pow(2,-Z),V=Math.floor(M.image.width*Q),pe=Math.floor(M.image.height*Q),Me=H!==null?H.x:0,Ce=H!==null?H.y:0;Fe.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Me,Ce,V,pe),_e.unbindTexture()};const Ef=L.createFramebuffer(),Tf=L.createFramebuffer();this.copyTextureToTexture=function(M,H,Z=null,Q=null,V=0,pe=null){pe===null&&(V!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let Me,Ce,Ae,Be,ze,Ue,je,it,pt;const ct=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(Z!==null)Me=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,ze=Z.min.y,Ue=Z.isBox3?Z.min.z:0;else{const ln=Math.pow(2,-V);Me=Math.floor(ct.width*ln),Ce=Math.floor(ct.height*ln),M.isDataArrayTexture?Ae=ct.depth:M.isData3DTexture?Ae=Math.floor(ct.depth*ln):Ae=1,Be=0,ze=0,Ue=0}Q!==null?(je=Q.x,it=Q.y,pt=Q.z):(je=0,it=0,pt=0);const at=ne.convert(H.format),Ne=ne.convert(H.type);let dt;H.isData3DTexture?(Fe.setTexture3D(H,0),dt=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Fe.setTexture2DArray(H,0),dt=L.TEXTURE_2D_ARRAY):(Fe.setTexture2D(H,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),fs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);const ft=M.isDataArrayTexture||M.isData3DTexture,an=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const ln=we.get(M),kt=we.get(H),Ht=we.get(ln.__renderTarget),xo=we.get(kt.__renderTarget);_e.bindFramebuffer(L.READ_FRAMEBUFFER,Ht.__webglFramebuffer),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let fi=0;fi<Ae;fi++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(M).__webglTexture,V,Ue+fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(H).__webglTexture,pe,pt+fi)),L.blitFramebuffer(Be,ze,Me,Ce,je,it,Me,Ce,L.DEPTH_BUFFER_BIT,L.NEAREST);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||we.has(M)){const ln=we.get(M),kt=we.get(H);_e.bindFramebuffer(L.READ_FRAMEBUFFER,Ef),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tf);for(let Ht=0;Ht<Ae;Ht++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,V,Ue+Ht):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,V),an?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,pe,pt+Ht):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,pe),V!==0?L.blitFramebuffer(Be,ze,Me,Ce,je,it,Me,Ce,L.COLOR_BUFFER_BIT,L.NEAREST):an?L.copyTexSubImage3D(dt,pe,je,it,pt+Ht,Be,ze,Me,Ce):L.copyTexSubImage2D(dt,pe,je,it,Be,ze,Me,Ce);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else an?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(dt,pe,je,it,pt,Me,Ce,Ae,at,Ne,ct.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,pe,je,it,pt,Me,Ce,Ae,at,ct.data):L.texSubImage3D(dt,pe,je,it,pt,Me,Ce,Ae,at,Ne,ct):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,je,it,Me,Ce,at,Ne,ct.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,je,it,ct.width,ct.height,at,ct.data):L.texSubImage2D(L.TEXTURE_2D,pe,je,it,Me,Ce,at,Ne,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fs),pe===0&&H.generateMipmaps&&L.generateMipmap(dt),_e.unbindTexture()},this.initRenderTarget=function(M){we.get(M).__webglFramebuffer===void 0&&Fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Fe.setTextureCube(M,0):M.isData3DTexture?Fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Fe.setTexture2DArray(M,0):Fe.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){R=0,P=0,k=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Zc="/sharp-gaussian-splatting-vr-toolkit/",Bv={clientId:"",apiKey:"",appId:""},ll=new Map;function Je(n,e){let t=ll.get(n);return t||(t=new Set,ll.set(n,t)),t.add(e),()=>t.delete(e)}function xt(n,e){const t=ll.get(n);if(t)for(const i of[...t])try{i(e)}catch(s){console.error(`[events] ${n} handler failed`,s)}}const Qh=new Set(["ply","splat","spz","ksplat"]),zv=new Set(["mp4","m4v","webm","mov","mkv","ogv"]),Hv=new Set(["jpg","jpeg","png","webp","avif","bmp","gif"]);function rs(n){const e=/\.([^.\/]+)$/.exec(n);return e?e[1].toLowerCase():""}function Vv(n,e=""){const t=rs(n);return Qh.has(t)?"splat":e.startsWith("video/")||zv.has(t)?"video":e.startsWith("image/")||Hv.has(t)?"image":null}function Gv(n){const e=rs(n);return Qh.has(e)?e:void 0}function bn(n){return Number.isFinite(n)?n>=1024**3?`${(n/1024**3).toFixed(2)} GB`:n>=1024**2?`${(n/1024**2).toFixed(1)} MB`:n>=1024?`${Math.round(n/1024)} KB`:`${n} B`:""}const Wv=.9;function $v(n,e){const t=n.size;if(!e||!Number.isFinite(t)||!t||!(e.quota>0))return null;const i=Math.max(0,e.quota-e.usage);if(t<=i*Wv)return null;const s=`보관하려면 ${bn(t)}가 필요한데 앱 저장 공간은 ${bn(i)}만 남았습니다.`;return n.kind!=="splat"&&n.sourceId!=="session"?`${s} 영상·사진은 보관하지 않아도 목록에서 눌러 바로 재생(스트리밍)할 수 있습니다.`:`${s} 보관함에서 다른 파일을 지운 뒤 다시 시도하세요.`}const Jc="sharp.input.bindings.v1",Ls=2,ed=["left","right","either"],td=["trigger","grip","primary","secondary","stick"],nd=["press","hold"],id=["x","y"],cl={common:"모든 화면",media:"영상·사진",splat:"PLY"},us=[{id:"common.prev",scope:"common",kind:"button",label:"이전 파일",default:{hand:"left",button:"primary",mode:"press"}},{id:"common.next",scope:"common",kind:"button",label:"다음 파일(끝에서는 처음으로)",default:{hand:"left",button:"primary",mode:"hold"}},{id:"common.openList",scope:"common",kind:"button",label:"파일 선택 화면 열기·닫기",default:{hand:"right",button:"primary",mode:"press"}},{id:"common.uiToggle",scope:"common",kind:"button",label:"UI 켜기·끄기(위치는 그대로)",default:{hand:"either",button:"secondary",mode:"press"},required:!0,avoidButtons:["trigger"]},{id:"common.uiMove",scope:"common",kind:"button",label:"UI를 지금 보는 곳으로 옮기기",default:{hand:"either",button:"secondary",mode:"hold"}},{id:"media.turn",scope:"media",kind:"stick",label:"화면 회전(민 쪽으로 장면이 움직임)",default:{hand:"left"}},{id:"media.zoom",scope:"media",kind:"axis",label:"줌(위·오른쪽으로 밀면 확대)",default:{hand:"right",axis:"y"}},{id:"media.scrub",scope:"media",kind:"axis",label:"영상 10초 되감기·빨리감기 / 사진 이전·다음(한 번 튕기기)",default:{hand:"right",axis:"x"}},{id:"media.recenter",scope:"media",kind:"button",label:"화면을 지금 보는 방향 앞으로 맞추기",default:{hand:"left",button:"stick",mode:"press"}},{id:"media.controls",scope:"media",kind:"button",label:"재생 컨트롤 표시·숨김",default:{hand:"right",button:"trigger",mode:"press"},note:"트리거로 지정하면 레이가 패널을 가리킬 때는 패널 선택이 우선이다"},{id:"media.playPause",scope:"media",kind:"button",label:"재생·일시정지(사진: 컨트롤 표시·숨김)",default:null,note:"기본은 지정 안 함: 재생 컨트롤의 ▶/❚❚ 버튼으로 한다"},{id:"splat.move",scope:"splat",kind:"stick",label:"이동(앞뒤·좌우)",default:{hand:"left"}},{id:"splat.turn",scope:"splat",kind:"axis",label:"30° 스냅 회전",default:{hand:"right",axis:"x"}},{id:"splat.height",scope:"splat",kind:"axis",label:"높이(민 쪽으로 장면이 움직임)",default:{hand:"right",axis:"y"}},{id:"splat.fit",scope:"splat",kind:"button",label:"크기·위치 맞춤(한 번 더: 1:1 몰입)",default:{hand:"right",button:"stick",mode:"press"}},{id:"splat.resetSize",scope:"splat",kind:"button",label:"크기만 맞춤 크기로 되돌리기",default:{hand:"left",button:"stick",mode:"press"}}],Os=[{id:"fixed.select",scope:"common",label:"선택(레이로 패널 버튼을 가리키고)",text:"트리거"},{id:"fixed.scroll",scope:"common",label:"목록 넘기기(패널이 열려 있을 때만, 뷰어 조작은 멈춤)",text:"두 스틱 위·아래"},{id:"splat.grab",scope:"splat",label:"장면 잡고 이동·돌리기 / 양손으로 확대·축소",text:"그립(양손)",reserves:[{kind:"button",hand:"either",button:"grip",mode:"*"}]}],Xs=new Map(us.map(n=>[n.id,n]));function ti(n){return Xs.get(n)??null}const Xv=n=>n==null?null:{...n};function Il(n,e){if(e===null)return null;if(!(!e||typeof e!="object")){if(n==="button"){if(!ed.includes(e.hand)||!td.includes(e.button))return;const t=e.mode??"press";return nd.includes(t)?{hand:e.hand,button:e.button,mode:t}:void 0}if(n==="axis")return e.hand!=="left"&&e.hand!=="right"||!id.includes(e.axis)?void 0:{hand:e.hand,axis:e.axis};if(n==="stick")return e.hand!=="left"&&e.hand!=="right"?void 0:{hand:e.hand}}}function uo(n,e){return n?e===null?!n.required:!(n.kind==="button"&&n.avoidButtons?.includes(e?.button)):!1}function Qc(n,e=1){const t={...n};if(e>=Ls||!Object.keys(t).length)return t;const i=e<2?["common.openList","common.next","media.controls"]:[],s=new Set(Object.keys(t)),r={...sd(),...t};for(const o of i){if(s.has(o))continue;ks(r).some(c=>c.a===o&&s.has(c.b)||c.b===o&&s.has(c.a))&&(t[o]=null,r[o]=null)}return t}function sd(){return Object.fromEntries(us.map(n=>[n.id,Xv(n.default)]))}function eu(n){const e={};if(!n||typeof n!="object")return e;for(const[t,i]of Object.entries(n)){const s=Xs.get(t);if(!s)continue;const r=Il(s.kind,i);r===void 0||!uo(s,r)||Ul(r,s.default)||(e[t]=r)}return e}function Ul(n,e){return n==null||e==null?n==null&&e==null:n.hand===e.hand&&n.button===e.button&&(n.mode??"press")===(e.mode??"press")&&n.axis===e.axis}const rd=(n,e)=>n==="common"||e==="common"||n===e,od=(n,e)=>n===e||n==="either"||e==="either";function qv(n,e){return e==null?[]:n==="button"?[{type:"button",hand:e.hand,button:e.button,mode:e.mode??"press"}]:n==="axis"?[{type:"axis",hand:e.hand,axis:e.axis}]:n==="stick"?[{type:"axis",hand:e.hand,axis:"x"},{type:"axis",hand:e.hand,axis:"y"}]:[]}function Yv(n,e){return n.type!==e.type||!od(n.hand,e.hand)?!1:n.type==="axis"?n.axis===e.axis:n.button!==e.button?!1:n.mode==="*"||e.mode==="*"||n.mode===e.mode}function ks(n){const e=us.map(i=>({id:i.id,scope:i.scope,slots:qv(i.kind,n[i.id]),describe:()=>kn(i.kind,n[i.id])}));for(const i of Os)i.reserves&&e.push({id:i.id,scope:i.scope,slots:i.reserves.map(s=>({type:"button",...s})),describe:()=>i.text});const t=[];for(let i=0;i<e.length;i++)for(let s=i+1;s<e.length;s++){const r=e[i],o=e[s];rd(r.scope,o.scope)&&r.slots.some(a=>o.slots.some(c=>Yv(a,c)))&&t.push({a:r.id,b:o.id,input:r.describe()})}return t}function jv(n,e){const t=Xs.get(e),i=n[e];return!t||t.kind!=="button"||i==null||i.mode==="hold"?!1:us.some(s=>{if(s.id===e||s.kind!=="button"||!rd(s.scope,t.scope))return!1;const r=n[s.id];return r!=null&&r.mode==="hold"&&r.button===i.button&&od(r.hand,i.hand)})}const xr={left:"왼쪽",right:"오른쪽",either:"양손"},Kv={primary:{left:"X",right:"A",either:"X/A"},secondary:{left:"Y",right:"B",either:"B/Y"}};function kn(n,e){if(e==null)return"지정 안 함";if(n==="stick")return`${xr[e.hand]} 스틱`;if(n==="axis")return`${xr[e.hand]} 스틱 ${e.axis==="x"?"좌우":"상하"}`;let t;return e.button==="primary"||e.button==="secondary"?t=Kv[e.button][e.hand]:e.button==="stick"?t=e.hand==="either"?"스틱 누르기(L3/R3)":`${xr[e.hand]} 스틱 누르기(${e.hand==="left"?"L3":"R3"})`:t=`${xr[e.hand]} ${e.button==="trigger"?"트리거":"그립"}`,e.mode==="hold"?`${t} 길게`:t}function Bs(n,e){const t=Xs.get(e);return t?kn(t.kind,n[e]):""}function Zv(n,e=null){const t=[null];if(n==="button")for(const i of ed)for(const s of td)for(const r of nd)t.push({hand:i,button:s,mode:r});else if(n==="axis")for(const i of["left","right"])for(const s of id)t.push({hand:i,axis:s});else if(n==="stick")for(const i of["left","right"])t.push({hand:i});return t.filter(i=>!e||uo(e,i)).map(i=>({value:JSON.stringify(i),label:kn(n,i)}))}function Jv(){try{return globalThis.localStorage??null}catch{return null}}function Qv({storage:n=Jv,now:e=()=>Date.now()}={}){let t=!1,i={},s={updatedAt:0,source:"default"},r=null;const o=new Set;function a(){if(!t){t=!0;try{const h=n()?.getItem(Jc),d=h?JSON.parse(h):null;d&&typeof d=="object"&&(i=Qc(eu(d.bindings),Number(d.version)||1),s={updatedAt:Number(d.updatedAt)||0,source:d.source==="pc"?"pc":Object.keys(i).length?"device":"default"},(Number(d.version)||1)<Ls&&c())}catch{i={}}}}function c(){try{n()?.setItem(Jc,JSON.stringify({version:Ls,updatedAt:s.updatedAt,source:s.source,bindings:i}))}catch{}}function l(){r=null,c();const h=u.get();for(const d of[...o])try{d(h,{...s})}catch{}}const u={get(){return a(),r??=Object.freeze({...sd(),...i}),r},overrides(){return a(),{...i}},meta(){return a(),{...s}},set(h,d){a();const f=Xs.get(h);if(!f)return!1;const g=Il(f.kind,d);return g===void 0||!uo(f,g)?!1:(Ul(g,f.default)?delete i[h]:i[h]=g,s={updatedAt:e(),source:"device"},l(),!0)},reset(h){a(),h?delete i[h]:i={},s={updatedAt:e(),source:Object.keys(i).length?"device":"default"},l()},replace(h,{source:d="pc",updatedAt:f=e(),version:g=Ls}={}){a(),i=Qc(eu(h),Number(g)||1),s={updatedAt:Number(f)||e(),source:d},l()},conflicts(){return ks(u.get())},subscribe(h){return o.add(h),()=>o.delete(h)}};return u}const pn=Qv();function ex(n){const e=r=>Bs(n,r),t=["스틱: 목록 넘기기"],i=n["common.prev"],s=n["common.next"];return(i||s)&&t.push(`${i?e("common.prev"):"-"}/${s?e("common.next"):"-"}: 이전·다음`),n["common.openList"]&&t.push(`${e("common.openList")}: 파일 선택`),n["common.uiToggle"]&&t.push(`${e("common.uiToggle")}: UI 끄기`),n["common.uiMove"]&&t.push(`${e("common.uiMove")}: 옮기기`),t.join(" · ")}const Nl=800,tu=.6,ad=n=>n==="either"?["left","right"]:[n];function ul(n,e){return e?ad(e.hand).some(t=>{const i=n?.[t];return i?e.button==="trigger"?(i.trigger??0)>tu:e.button==="grip"?(i.grip??0)>tu:!!i[e.button]:!1}):!1}function tx(n,e){return e?ad(e.hand).some(t=>!!n?.[t]?.[`${e.button}Pressed`]):!1}function $i(n,e){return e?n?.[e.hand]?.[e.axis]??0:0}function nu(n,e){if(!e)return 0;const t=$i(n,e);return e.axis==="y"?-t:t}function ld(n,e){if(!e)return{x:0,y:0};const t=n?.[e.hand];return{x:t?.x??0,y:t?.y??0}}function cd(n,e){return!!n&&!!e&&n.hand===e.hand&&n.axis!==e.axis}function ud(n,e=pn.get()){const t=e["media.scrub"],i=e["media.zoom"];let s=nu(n,t),r=nu(n,i);if(cd(t,i)){const o=t.axis==="x"?s:r,a=t.axis==="x"?r:s,c=Math.abs(o)>Math.abs(a),l=t.axis==="x";c===l?r=0:s=0}return{scrub:s,zoom:r}}function ho(n,{getBindings:e=()=>pn.get(),now:t=()=>performance.now(),holdMs:i=Nl}={}){const s=new Map(n.map(r=>[r,nx({holdMs:i,now:t})]));return{update(r){const o=new Set;if(!r?.presenting){for(const c of s.values())c.reset();return o}const a=e();for(const c of n){const l=a[c],u=s.get(c);if(!l){u.reset();continue}l.mode==="hold"?u.update(ul(r,l))==="hold"&&o.add(c):jv(a,c)?u.update(ul(r,l))==="tap"&&o.add(c):(u.reset(),tx(r,l)&&o.add(c))}return o},reset(){for(const r of s.values())r.reset()}}}function nx({holdMs:n=Nl,now:e=()=>performance.now()}={}){let t=0,i=!1;return{update(s){const r=e();if(s)return t?!i&&r-t>=n?(i=!0,"hold"):null:(t=r||1,i=!1,null);if(!t)return null;const o=i;return t=0,i=!1,o?null:"tap"},reset(){t=0,i=!1},get holding(){return t!==0&&!i}}}function ix({on:n=.7,off:e=.4,cooldownMs:t=350,now:i=()=>performance.now()}={}){let s=!0,r=0;return{update(o){return Math.abs(o)<e?(s=!0,0):s&&i()>=r&&Math.abs(o)>n?(s=!1,r=i()+t,o>0?1:-1):0},reset(){s=!0,r=0}}}const Kr=[{value:"all",label:"전체"},{value:"splat",label:"PLY"},{value:"video",label:"영상"},{value:"image",label:"사진"}],Zr=[{value:"recent",label:"최신순"},{value:"name",label:"이름순"},{value:"size",label:"크기순"},{value:"ext",label:"확장자순"}],Bn=200,yr=100,hl=Object.freeze({kind:"all",sort:"recent"}),hd="sharp.listView",dd=new Intl.Collator("ko",{numeric:!0,sensitivity:"base"}),ws=(n,e)=>dd.compare(n.name,e.name);function fo(n){const e=Kr.some(i=>i.value===n?.kind)?n.kind:hl.kind,t=Zr.some(i=>i.value===n?.sort)?n.sort:hl.sort;return{kind:e,sort:t}}function sx(n,e){const{kind:t,sort:i}=fo(e),s=t==="all"?n.slice():n.filter(o=>o.kind===t),r={recent:(o,a)=>(a.mtime??0)-(o.mtime??0)||ws(o,a),name:ws,size:(o,a)=>(a.size??0)-(o.size??0)||ws(o,a),ext:(o,a)=>dd.compare(rs(o.name),rs(a.name))||ws(o,a)}[i];return s.sort(r)}function rx(n,e,t=-1){let i=Math.max(0,Math.min(n.start,Math.max(0,e-1))),s=Math.min(e,Math.max(n.end,i+Bn));return t>=0&&(t<i||t>=s)&&(i=Math.max(0,Math.min(t-Bn/2,e-Bn)),s=Math.min(e,i+Bn)),{start:i,end:s}}function iu(n,e){const t=n.findIndex(i=>i.value===e);return n[(t+1)%n.length].value}const su=(n,e)=>n.find(t=>t.value===e)?.label??"";function dl(n=[]){return n.map(e=>({path:e,name:e.split("/").filter(Boolean).pop()??e})).sort(ws)}function ox(n){return String(n??"").split("/").filter(Boolean).slice(0,-1).join("/")}function ax(n){const e=String(n??"").split("/").filter(Boolean);return e.map((t,i)=>({name:t,path:e.slice(0,i+1).join("/")}))}function fd(n){const e=ax(n);return e.length?e.map(t=>t.name).join(" / "):"최근 파일"}function lx(n=globalThis.localStorage){try{return fo(JSON.parse(n.getItem(hd)??"null"))}catch{return{...hl}}}function cx(n,e=globalThis.localStorage){try{e.setItem(hd,JSON.stringify(fo(n)))}catch{}}function ru(n){if(!Number.isFinite(n))return"";const e=new Date(n),t=i=>String(i).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}`}const Fl=new Map,Ol=[];function po(n){Fl.set(n.id,n)}function sn(n){return Fl.get(n)}function fl(){return[...Fl.values()]}function pd(n){Ol.push(n)}function Zo(n){return Ol.find(e=>e.kinds.includes(n))}function ux(){return[...Ol]}const md=new Map;function gd(n,e){md.set(n,e)}function hx(n){return md.get(n)??0}const dx=new Set(["pc","gdrive"]);function fx({getSource:n,viewerFor:e=()=>{},limitFor:t=hx}){let i=null;const s=new Set;function r(l){if(!(!l||!s.delete(l)))try{l.file.release()}catch{}}function o(l){if(!l||!dx.has(l.sourceId))return!1;const u=t(l.kind);return!u||typeof l.size=="number"&&l.size>u?!1:!!n(l.sourceId)}function a(){if(!i)return;const l=i;if(i=null,l.controller.abort(),l.viewer)try{l.viewer.discardPrefetch?.()}catch(u){console.warn("[prefetch] discardPrefetch 실패",u)}l.promise.then(u=>u?.release()).catch(()=>{}).finally(()=>r(l.record))}async function c(l,u,h){const d=[];let f=0;if(l.stream){const g=(await l.stream()).getReader();for(h.addEventListener("abort",()=>g.cancel().catch(()=>{}),{once:!0});;){const{done:_,value:m}=await g.read();if(_)break;if(f+=m.byteLength,f>u)return g.cancel().catch(()=>{}),null;d.push(m)}}else{const g=await fetch(l.url,{signal:h});if(!g.ok||Number(g.headers.get("content-length"))>u)return null;const m=await g.blob();return m.size>u?null:m}return new Blob(d,l.mime?{type:l.mime}:void 0)}return{eligible:o,schedule(l){if(!o(l)){a();return}if(i&&i.item.id===l.id)return;a();const u=new AbortController,h=e(l.kind),d=typeof h?.prefetch=="function"?h:null,f={item:l,viewer:d,controller:u,promise:Promise.resolve(null),file:null,done:!1};f.promise=(async()=>{const g=n(l.sourceId);let _=null;try{if(_=await g.open(l),u.signal.aborted)return null;if(d){const x={file:_};f.record=x,s.add(x);const v=_;return _=null,await d.prefetch(l,v),u.signal.aborted&&d.discardPrefetch?.(),null}const m=await c(_,t(l.kind),u.signal);if(!m||u.signal.aborted)return null;const p=URL.createObjectURL(m),S={url:p,stream:async()=>m.stream(),size:m.size,name:_.name??l.name,mime:_.mime??l.mime,release:()=>URL.revokeObjectURL(p)};if(f.file=S,l.kind==="image"&&typeof Image<"u"){const x=new Image;x.src=p,f.decoded=x,await x.decode?.().catch(()=>{})}return S}catch(m){return u.signal.aborted||console.warn("[prefetch] 포기",l.name,m?.message??m),null}finally{f.done=!0;try{_?.release()}catch{}}})(),i=f},async take(l){if(i&&i.item.id!==l.id&&a(),!i)return null;const u=i;return i=null,u.promise},cancel:a,flush(){for(const l of[...s])l!==i?.record&&r(l)},get state(){return i?{itemId:i.item.id,done:i.done,ready:!!i.file}:null}}}function px({prefetchDelayMs:n=1200,prefetcher:e=fx({getSource:sn,viewerFor:Zo})}={}){let t="session",i=[],s=[],r=[],o=[],a=null,c=!1,l=!1,u="",h=lx(),d=null,f=[],g=null,_=null,m=0,p=!1,S=1,x=0;const v=C=>!!Zo(C.kind);function E(){i=[],r=[],o=[],a=null,c=!1}const R=()=>{s=sx(i,h)};let P=0;async function k(C=t,{path:X}={}){const q=C!==t;t=C,q&&(u=""),X!==void 0&&(u=X),(q||X!==void 0)&&(l=!1);const oe=++P;(q||X!==void 0)&&(E(),R(),xt("library:changed",{sourceId:C,items:s,folder:u,loading:!0}));const de=sn(C);let Ee=!1;if(!de)E();else try{const ye=u===""&&h.kind!=="all"?h.kind:void 0,Pe=await de.list(u,ye?{kind:ye}:void 0);if(oe!==P)return s;i=Pe.items,r=Pe.dirs??[],o=u===""?Pe.sequences??[]:[],a=u===""?Pe.counts??null:null,c=!!Pe.truncated}catch(ye){if(oe!==P)return s;E(),Ee=!0,xt("library:error",{sourceId:C,error:ye})}return R(),d&&d.sourceId===t&&(f=s),xt("library:changed",{sourceId:t,items:s,folder:u,failed:Ee,dirs:r}),s}function A(C){const X=h.kind;h=fo({...h,...C}),cx(h),R(),d&&d.sourceId===t&&(f=s),xt("library:changed",{sourceId:t,items:s,folder:u}),h.kind!==X&&u===""&&k(t)}function w(){if(g){try{g.unload()}catch(C){console.error("[library] unload failed",C)}g=null}if(_){try{_.release()}catch(C){console.error("[library] release failed",C)}_=null}}async function D(C,{playlist:X}={}){const q=++m,oe=sn(C.sourceId),de=Zo(C.kind);if(!oe)return W(C,new Error(`소스 '${C.sourceId}'를 찾을 수 없습니다.`),q);if(!de)return W(C,new Error(`'${C.kind}' 형식 뷰어가 아직 없습니다.`),q);clearTimeout(x),p=!0,xt("item:loading",{item:C}),w(),d=C,f=X??(C.sourceId===t?s:[C]);let Ee=null;try{if(Ee=await e.take(C),$(C,de),q===m&&!Ee&&(Ee=await oe.open(C)),q!==m){Ee?.release(),d?.id!==C.id&&F(C,de);return}if(_=Ee,g=de,await de.load(C,Ee),q!==m)return;p=!1,xt("item:opened",{item:C}),e.flush?.(),te()}catch(ye){if(F(C,de),q!==m)return;w(),W(C,ye,q)}}function $(C,X){for(const q of ux())q.prefetchedItemId!==null&&(q!==X||q.prefetchedItemId!==C.id)&&q.discardPrefetch?.()}function F(C,X){X?.prefetchedItemId===C.id&&X.discardPrefetch?.()}function W(C,X,q){q===m&&(p=!1,console.error("[library] open failed",C,X),xt("item:error",{item:C,error:X}))}function te(){if(clearTimeout(x),!(n<0)){if(!d||d.kind==="video"){e.cancel();return}x=setTimeout(()=>{const C=d?G(S):null;C&&C.id!==d?.id?e.schedule(C):e.cancel()},n)}}function I(){clearTimeout(x),e.cancel(),m++,w(),d=null,p=!1,xt("item:closed",{})}function G(C){if(!f.length)return null;const X=Math.max(0,f.findIndex(q=>d&&q.id===d.id));for(let q=1;q<=f.length;q++){const oe=f.length,de=f[((X+C*q)%oe+oe)%oe];if(de.id!==d?.id&&v(de))return de}return null}return{refresh:k,open:D,close:I,canOpen:v,setListSource:C=>k(C),setView:A,openFolder:(C,X=t)=>k(X,{path:C}),upFolder:()=>u?k(t,{path:ox(u)}):Promise.resolve(s),next(){const C=G(1);if(C)return S=1,D(C,{playlist:f})},prev(){const C=G(-1);if(C)return S=-1,D(C,{playlist:f})},get canStep(){return G(1)!==null},get prefetchState(){return e.state},get listSourceId(){return t},get items(){return s},get sequences(){return o},get sequencesExpanded(){return l},toggleSequences(){l=!l,xt("library:changed",{sourceId:t,items:s,folder:u})},get hiddenCount(){if(!a)return 0;const C=h.kind==="all"?Object.values(a).reduce((X,q)=>X+(q||0),0):a[h.kind]||0;return Math.max(0,C-i.length)},get truncated(){return c},get allItems(){return i},get folders(){return dl(r)},get folder(){return u},get canBrowse(){return r.length>0||o.length>0||u!==""},get view(){return h},get current(){return d},get playlist(){return f},get loading(){return p},get activeViewer(){return g}}}const mx=["vr","viewer","folder"];function gx({win:n=window,layers:e,pop:t}){const i=n.history;let s=!1,r=!1;const o=()=>mx.find(c=>e().includes(c))??null;function a(){if(r)return;const c=o()!==null;if(c&&!s)try{i.pushState({sharpGuard:!0},""),s=!0}catch{}else!c&&s&&(r=!0,i.back())}n.addEventListener("popstate",()=>{if(r){r=!1,s=!1,a();return}if(!s)return;s=!1;const c=o();if(c)try{const l=t[c]();l&&typeof l.catch=="function"&&l.catch(u=>console.error("[nav] 되돌리기 실패",c,u))}catch(l){console.error("[nav] 되돌리기 실패",c,l)}a()});try{i.state?.sharpGuard&&i.replaceState(null,"")}catch{}return{sync:a,get guarded(){return s}}}const Jo="sharp-quest.chunk-reload",ou=6e4;function _x(n){const e=`${n?.message??n??""}`;return/dynamically imported module|Importing a module script failed|Unable to preload CSS|Failed to load module script/i.test(e)}function vx(n,e=()=>Date.now()){return{tryReload(){if(!n)return!1;try{const t=Number(n.getItem(Jo)??0);return t&&e()-t<ou?!1:(n.setItem(Jo,String(e())),!0)}catch{return!1}},reloadedRecently(){try{const t=Number(n?.getItem(Jo)??0);return!!t&&e()-t<ou}catch{return!1}}}}function xx(n){const e=()=>{try{const t=JSON.parse(n.name||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}};return{getItem:t=>e()[t]??null,setItem:(t,i)=>{n.name=JSON.stringify({...e(),[t]:i})}}}function yx(){try{const n=globalThis.sessionStorage;if(n){const e="sharp-quest.probe";return n.setItem(e,"1"),n.removeItem(e),n}}catch{}return globalThis.window?xx(globalThis.window):null}function Sx({win:n=window,storage:e=yx(),reload:t=()=>n.location.reload(),notify:i=()=>{},canReloadNow:s}){const r=vx(e);let o=!1;function a(h){return r.tryReload()?(i(h),t(),!0):!1}n.addEventListener("vite:preloadError",h=>{h.preventDefault?.(),a("새 버전을 받아 다시 시작합니다…")}),n.addEventListener("unhandledrejection",h=>{_x(h.reason)&&a("새 버전을 받아 다시 시작합니다…")});const c=n.navigator?.serviceWorker,l=!!c?.controller;function u(){s()?a("새 버전이 적용되어 다시 시작합니다…"):o=!0}return l&&(c.addEventListener("controllerchange",u),c.addEventListener("message",h=>{h.data?.type==="sharp:updated"&&u()})),{flush(){o&&s()&&(o=!1,a("새 버전이 적용되어 다시 시작합니다…"))},get pending(){return o},wasReloaded:()=>r.reloadedRecently(),reloadFor:a}}const au="sharp-quest.last-source",lu=["library","pc","gdrive"],bx="pc";function _d(n){const e=n?.name??"",t=n?.message??String(n??""),i=e&&e!=="Error"?`${e}: ${t}`:t;return e==="NotSupportedError"?`${i} — 이 화면(2D 앱·창)에서는 VR을 열 수 없습니다. 'SHARP VR' 앱 또는 Quest 브라우저 탭에서 열어 주세요.`:e==="SecurityError"||e==="NotAllowedError"?`${i} — 사용자 동작(버튼 누르기)이 필요합니다. 'VR 보기' 버튼을 눌러 주세요.`:i}function Mx(n){try{return new URLSearchParams(n).get("vr")==="1"}catch{return!1}}function Ex(n=globalThis.localStorage){return{load(){try{const e=n?.getItem(au);return lu.includes(e)?e:null}catch{return null}},save(e){try{lu.includes(e)&&n?.setItem(au,e)}catch{}}}}function Tx({stage:n,library:e,panel:t,status:i,memory:s,on:r,win:o=window}){e.setListSource(s.load()??bx),i("VR로 시작하는 중…");let a=!1;async function c(d){if(!(a||n.isPresenting())){a=!0;try{await n.enterVR()}catch(f){i(`VR을 시작하지 못했습니다(${d}): ${_d(f)}`,"error"),h()}finally{a=!1}}}const l=["pointerdown","keydown","click"];let u=!1;function h(){if(u)return;u=!0;const d=()=>{for(const f of l)o.removeEventListener(f,d);u=!1,c("입력으로 다시 시도")};for(const f of l)o.addEventListener(f,d)}return r("xr:sessionstart",()=>{i(""),!e.current&&!t.isOpen&&t.openAfterPose()}),n.isVRSupported().then(d=>d?c("자동").then(()=>!0):(i("이 앱에서는 VR을 시작할 수 없습니다. 'SHARP VR'(몰입) 앱으로 열었는지 확인하세요.","error"),h(),!1))}const ji=[3,5,10,30],cu=5,vd="sharp-quest.slideshow-interval";function wx(n){try{const e=Number(n?.getItem(vd));return ji.includes(e)?e:cu}catch{return cu}}function Ax({isRunning:n,notify:e}){let t="";return(i,s)=>{if(!i||i.kind!=="video"){t="";return}if(!s){t="";return}t===i.id||!n()||(t=i.id,e(i.id))}}function Rx({library:n,storage:e=globalThis.localStorage,timers:t={set:(...s)=>setTimeout(...s),clear:s=>clearTimeout(s)},subscribe:i=Je}){let s=!1,r=wx(e),o=0;const a=()=>xt("slideshow:changed",{running:s,interval:r});function c(){t.clear(o),o=0}function l(){c();const g=n.current;!s||!g||n.loading||g.kind!=="video"&&(o=t.set(u,r*1e3))}function u(){if(o=0,!!s){if(!n.canStep){d();return}n.next()}}function h(){if(!s)if(s=!0,a(),n.current)l();else{const g=n.items.find(_=>n.canOpen(_));g?n.open(g,{playlist:n.items}):d()}}function d(){c(),s&&(s=!1,a())}i("item:opened",()=>l()),i("item:loading",c),i("item:error",()=>d()),i("item:closed",()=>d());function f(g){if(ji.includes(g)){r=g;try{e?.setItem(vd,String(g))}catch{}a(),l()}}return{start:h,stop:d,toggle:()=>s?d():h(),cycleInterval:()=>f(ji[(ji.indexOf(r)+1)%ji.length]),setInterval:f,notifyEnded(g){!s||n.current?.id!==g||u()},get running(){return s},get interval(){return r}}}const Cx="sharp-quest-app",Px=1,Lx="library";let ys=null;function Dx(){return ys||(ys=new Promise((n,e)=>{const t=indexedDB.open(Cx,Px);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains("library")||i.createObjectStore("library",{keyPath:"id"}),i.objectStoreNames.contains("kv")||i.createObjectStore("kv"),i.objectStoreNames.contains("blobs")||i.createObjectStore("blobs")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),ys.catch(()=>{ys=null})),ys}async function hs(n,e,t){const i=await Dx();return new Promise((s,r)=>{const o=i.transaction(n,e),a=t(o.objectStore(n));o.oncomplete=()=>s(a.result),o.onerror=()=>r(o.error),o.onabort=()=>r(o.error)})}function Ix(){return hs("library","readonly",n=>n.getAll())}function uu(n){return hs("library","readwrite",e=>e.put(n))}function Ux(n){return hs("library","readwrite",e=>e.delete(n))}function Nx(){return typeof navigator<"u"&&!!navigator.storage?.getDirectory}async function kl(){return(await navigator.storage.getDirectory()).getDirectoryHandle(Lx,{create:!0})}async function Fx(n,e,{onProgress:t,type:i}={}){let s=0;const r=e.pipeThrough(new TransformStream({transform(a,c){s+=a.byteLength,t?.(s),c.enqueue(a)}}));if(Nx()){const a=await kl(),c=await a.getFileHandle(n,{create:!0});try{const l=await c.createWritable();return await r.pipeTo(l),{backend:"opfs",written:s}}catch(l){throw await a.removeEntry(n).catch(()=>{}),l}}const o=await new Response(r,{headers:i?{"content-type":i}:{}}).blob();return await hs("blobs","readwrite",a=>a.put(o,n)),{backend:"idb",written:s}}async function Ox(n,e){if(e==="opfs")return(await(await kl()).getFileHandle(n)).getFile();const t=await hs("blobs","readonly",i=>i.get(n));if(!t)throw new Error("보관된 파일을 찾을 수 없습니다.");return t}async function hu(n,e){if(e==="opfs"){await(await kl()).removeEntry(n).catch(()=>{});return}await hs("blobs","readwrite",t=>t.delete(n))}async function kx(){try{return navigator.storage?.persisted&&await navigator.storage.persisted()?!0:await navigator.storage?.persist?.()??!1}catch{return!1}}async function xd(){try{const n=await navigator.storage.estimate(),e=await navigator.storage.persisted?.()??!1;return{usage:n.usage??0,quota:n.quota??0,persisted:e}}catch{return null}}const du={type:"change"},Bl={type:"start"},yd={type:"end"},Sr=new ao,fu=new Qn,Bx=Math.cos(70*pp.DEG2RAD),Mt=new O,Gt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qo=1e-6;class zx extends tm{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new $t,this._lastTargetPosition=new O,this._quat=new $t().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tc,this._sphericalDelta=new Tc,this._scale=1,this._panOffset=new O,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new O,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=Gx.bind(this),this._onContextMenu=Kx.bind(this),this._onMouseWheel=Xx.bind(this),this._onKeyDown=qx.bind(this),this._onTouchStart=Yx.bind(this),this._onTouchMove=jx.bind(this),this._onMouseDown=Wx.bind(this),this._onMouseMove=$x.bind(this),this._interceptControlDown=Zx.bind(this),this._interceptControlUp=Jx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),s<-Math.PI?s+=Gt:s>Math.PI&&(s-=Gt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<Bx?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qo||this._lastTargetPosition.distanceToSquared(this.target)>Qo?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Vx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Gx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yd),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case Ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case Ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Bl)}function $x(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Xx(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yd))}function qx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Yx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Bl)}function jx(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function Kx(n){this.enabled!==!1&&n.preventDefault()}function Zx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qx=.16,br=.6,pu=1119770;function Jr(){return{connected:!1,x:0,y:0,trigger:0,grip:0,primary:!1,secondary:!1,stick:!1,stickPressed:!1,primaryPressed:!1,secondaryPressed:!1,triggerPressed:!1,gripPressed:!1}}function zl(){return{presenting:!1,left:Jr(),right:Jr()}}const mu=n=>Math.abs(n)>Qx?n:0;function ey({container:n,pixelRatio:e=i=>Math.min(i,1.5),precision:t="highp"}){const i=new Hp;i.background=new Ze(pu);const s=new hn(65,1,.001,1e3);s.position.set(0,0,2.2);const r=new kv({antialias:!1,alpha:!1,powerPreference:"high-performance",precision:t});r.outputColorSpace=yt,r.setClearColor(pu,1),r.setPixelRatio(e(window.devicePixelRatio)),r.xr.enabled=!0,n.appendChild(r.domElement);const o=new zx(s,r.domElement);o.target.set(0,0,0),o.enableDamping=!0,o.dampingFactor=.05,o.minDistance=.2,o.maxDistance=8;const a=new wn;a.add(s),i.add(a);const c=new wn;i.add(c);const l={left:null,right:null};for(let S=0;S<2;S++){const x=r.xr.getController(S);x.addEventListener("connected",v=>{const E=v.data?.handedness;(E==="left"||E==="right")&&(l[E]=x)}),x.addEventListener("disconnected",()=>{l.left===x&&(l.left=null),l.right===x&&(l.right=null)}),a.add(x)}const u=zl(),h={left:Jr(),right:Jr()};let d=null,f=performance.now();function g(){const S=Math.max(1,n.clientWidth),x=Math.max(1,n.clientHeight);r.xr.isPresenting||(s.aspect=S/x,s.updateProjectionMatrix(),r.setSize(S,x,!1),r.domElement.style.width="100%",r.domElement.style.height="100%")}new ResizeObserver(g).observe(n),g();function _(){const S=r.xr.getSession();u.presenting=!!S&&r.xr.isPresenting;for(const x of["left","right"]){const v=u[x],E=h[x];E.primary=v.primary,E.secondary=v.secondary,E.stick=v.stick,E.trigger=v.trigger,E.grip=v.grip,v.connected=!1,v.x=v.y=v.trigger=v.grip=0,v.primary=v.secondary=v.stick=!1}if(S)for(const x of S.inputSources){const v=x.gamepad;if(!v||x.handedness!=="left"&&x.handedness!=="right")continue;const E=u[x.handedness];E.connected=!0,v.axes.length>=4&&(E.x=mu(v.axes[2]),E.y=mu(v.axes[3])),E.trigger=v.buttons[0]?.value??0,E.grip=v.buttons[1]?.value??0,E.primary=v.buttons[4]?.pressed??!1,E.secondary=v.buttons[5]?.pressed??!1,E.stick=v.buttons[3]?.pressed??!1}for(const x of["left","right"]){const v=u[x],E=h[x];v.primaryPressed=v.primary&&!E.primary,v.secondaryPressed=v.secondary&&!E.secondary,v.stickPressed=v.stick&&!E.stick,v.triggerPressed=v.trigger>br&&E.trigger<=br,v.gripPressed=v.grip>br&&E.grip<=br}}r.setAnimationLoop(()=>{const S=performance.now(),x=Math.min((S-f)/1e3,.05);f=S,_(),u.presenting||o.update(),d?.(x,u),r.render(i,s)}),r.xr.addEventListener("sessionstart",()=>{o.enabled=!1,m(),xt("xr:sessionstart")}),r.xr.addEventListener("sessionend",()=>{o.enabled=!0,m(),g(),xt("xr:sessionend")});function m(){a.position.set(0,0,0),a.rotation.set(0,0,0)}async function p(){try{return!!navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}}return{renderer:r,scene:i,camera:s,player:a,content:c,controls:o,controllers:l,input:u,isVRSupported:p,isPresenting:()=>r.xr.isPresenting,async enterVR(){if(r.xr.isPresenting)return;if(!navigator.xr)throw new Error("이 브라우저는 WebXR을 지원하지 않습니다.");const S=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]});await r.xr.setSession(S)},async exitVR(){const S=r.xr.getSession();S&&await S.end()},resetPlayer:m,setFrameHandler(S){d=S}}}function Sd(n,e){let t="";return{get url(){return t||(t=URL.createObjectURL(n)),t},stream:async()=>n.stream(),size:n.size,name:e,mime:n.type||void 0,release(){t&&URL.revokeObjectURL(t),t=""}}}function bd(n,e){return n.name.localeCompare(e.name,void 0,{numeric:!0,sensitivity:"base"})||(e.mtime??0)-(n.mtime??0)}function ty(){const n=new Map;let e=0;return{id:"session",label:"이번에 연 파일",addFiles(t){const i=[],s=[];for(const r of t){const o=Vv(r.name,r.type);if(!o){s.push(r.name);continue}const a=`session:${++e}:${r.name}`,c={id:a,sourceId:"session",name:r.name,kind:o,size:r.size,mime:r.type||void 0,mtime:r.lastModified};n.set(a,{item:c,file:r}),i.push(c)}return{added:i,skipped:s}},getFile(t){return n.get(t)?.file},clear(){n.clear()},async list(){return{items:[...n.values()].map(t=>t.item).sort(bd)}},async open(t){const i=n.get(t.id)?.file;if(!i)throw new Error("이번에 연 파일이 아닙니다. 다시 선택해 주세요.");return Sd(i,t.name)}}}function ny(){const n=t=>`${t.sourceId}|${t.name}|${t.size??""}|${t.mtime??""}`;async function e(){return(await Ix()).filter(t=>t.id.startsWith("library:"))}return{id:"library",label:"보관함",async list(){return{items:(await e()).map(ea).sort(bd)}},async open(t){const i=(await e()).find(r=>r.id===t.id);if(!i)throw new Error("보관함에서 파일을 찾을 수 없습니다.");const s=await Ox(i.body.name,i.body.backend);return Sd(s,i.name)},async find(t){const i=n(t),s=(await e()).find(r=>r.originKey===i);return s?ea(s):void 0},async keep(t,i,s){const r=await this.find(t);if(r)return r;await kx();const o=crypto.randomUUID(),a=i.stream?await i.stream():(await fetch(i.url)).body;if(!a)throw new Error("파일을 읽을 수 없습니다.");const{backend:c,written:l}=await Fx(o,a,{onProgress:s,type:i.mime}),u={id:`library:${o}`,sourceId:"library",name:t.name,kind:t.kind,size:l,mime:t.mime,mtime:t.mtime??Date.now(),layout:t.layout,originKey:n(t),addedAt:Date.now(),body:{name:o,backend:c}};try{await uu(u)}catch(h){throw await hu(o,c),h}return ea(u)},async remove(t){const i=(await e()).find(s=>s.id===t.id);i&&(await hu(i.body.name,i.body.backend),await Ux(i.id))},async update(t,i){const s=(await e()).find(r=>r.id===t);s&&await uu({...s,...i,id:s.id,sourceId:"library",body:s.body})}}}function ea(n){return{id:n.id,sourceId:"library",name:n.name,kind:n.kind,size:n.size,mime:n.mime,mtime:n.mtime,layout:n.layout}}function iy({accept:n="",multiple:e=!0}={}){return new Promise(t=>{const i=document.createElement("input");i.type="file",i.multiple=e,n&&(i.accept=n),i.style.display="none";const s=r=>{i.remove(),t(r)};i.addEventListener("change",()=>s([...i.files??[]])),i.addEventListener("cancel",()=>s([])),document.body.appendChild(i),i.click()})}const sy="__src/";function ry(){return"/sharp-gaussian-splatting-vr-toolkit/"}function Md(n){return String(n).split("/").filter(e=>e!=="").map(encodeURIComponent).join("/")}function Qr(n,e,t=ry()){return`${t.endsWith("/")?t:`${t}/`}${sy}${n}/${Md(e)}`}function Ed(){return typeof navigator<"u"&&!!navigator.serviceWorker?.controller}async function oy(n=5e3,e=typeof navigator<"u"?navigator.serviceWorker:void 0){if(!e)return!1;if(e.controller)return!0;try{if(e.getRegistration&&!await e.getRegistration())return!1}catch{return!1}return e.controller?!0:new Promise(t=>{const i=o=>{clearTimeout(r),e.removeEventListener?.("controllerchange",s),t(o)},s=()=>{e.controller&&i(!0)},r=setTimeout(()=>i(!!e.controller),n);e.addEventListener?.("controllerchange",s),e.ready?.then(()=>{e.controller&&i(!0)},()=>{})})}async function Td(n,e,t=2e3){const i=typeof navigator<"u"?navigator.serviceWorker?.controller:null;return i?new Promise(s=>{const r=new MessageChannel,o=setTimeout(()=>s(!1),t);r.port1.onmessage=a=>{clearTimeout(o),s(a.data?.ok===!0)},i.postMessage({type:"sharp-src-config",sourceId:n,config:e},[r.port2])}):!1}const ay="https://www.googleapis.com/auth/drive.file",ly="https://accounts.google.com/gsi/client",cy="https://apis.google.com/js/api.js",gu="sharp.gdrive.picked",ta="sharp.gdrive.token",_u=6e4,uy=300*1024*1024,vu={ply:"splat",splat:"splat",spz:"splat",mp4:"video",m4v:"video",webm:"video",mov:"video",mkv:"video",jpg:"image",jpeg:"image",png:"image",webp:"image",avif:"image"};function xu(n,e){const t=String(n??"").split(".").pop().toLowerCase();return vu[t]?vu[t]:/^video\//.test(e??"")?"video":/^image\//.test(e??"")?"image":null}class nn extends Error{constructor(e,t){super(t),this.name="GdriveError",this.code=e}}function hy(){return{get(n){try{return globalThis.localStorage?.getItem(n)??null}catch{return null}},set(n,e){try{e==null?globalThis.localStorage?.removeItem(n):globalThis.localStorage?.setItem(n,e)}catch{}}}}function dy(n){return new Promise((e,t)=>{const i=document.createElement("script");i.src=n,i.async=!0,i.onload=()=>e(),i.onerror=()=>t(new nn("network",`스크립트를 불러오지 못했습니다: ${n}`)),document.head.append(i)})}function fy(n={}){const e=n.config??{},t=n.fetch??((...F)=>globalThis.fetch(...F)),i=n.loadScript??dy,s=n.google??(()=>globalThis.google),r=n.gapi??(()=>globalThis.gapi),o=n.storage??hy(),a=n.now??(()=>Date.now());let c=h(),l=null;const u=new Set;function h(){try{const F=JSON.parse(o.get(ta)??"null");if(F?.token&&F.expiresAt>(n.now??Date.now)()+_u)return F}catch{}return null}function d(){const F=$.state;for(const W of u)try{W(F)}catch{}}function f(){return!!(e.clientId&&e.apiKey&&e.appId)}function g(){if(!f())throw new nn("not-configured","구글 드라이브 설정(클라이언트 ID·API 키·프로젝트 번호)이 비어 있습니다")}function _(){return c!==null&&c.expiresAt>a()+_u}async function m(){s()?.accounts?.oauth2||await i(ly);const F=s()?.accounts?.oauth2;if(!F)throw new nn("network","구글 로그인 모듈을 불러오지 못했습니다. 인터넷 연결을 확인하세요.");return F}async function p(){if(!s()?.picker){r()||await i(cy);const F=r();if(!F)throw new nn("network","구글 파일 선택 모듈을 불러오지 못했습니다. 인터넷 연결을 확인하세요.");await new Promise((W,te)=>F.load("picker",{callback:W,onerror:()=>te(new nn("network","파일 선택 모듈 로딩 실패"))}))}return s().picker}function S(){if(clearTimeout(l),!c)return;const F=Math.max(1e4,c.expiresAt-a()-5*6e4);l=setTimeout(()=>{x({silent:!0}).catch(()=>{})},F),l.unref?.()}async function x(F={}){g();const W=await m(),te=await new Promise((I,G)=>{W.initTokenClient({client_id:e.clientId,scope:ay,callback:X=>{X?.error?G(new nn("auth",`로그인에 실패했습니다 (${X.error})`)):I(X)},error_callback:X=>{const q=X?.type??"unknown",oe=q==="popup_failed_to_open"||q==="popup_closed";G(new nn(oe?"popup":"auth",q==="popup_failed_to_open"?"로그인 창을 열지 못했습니다. 팝업 차단을 해제하세요.":"로그인 창이 닫혔습니다."))}}).requestAccessToken({prompt:F.silent?"none":""})});return c={token:te.access_token,expiresAt:a()+Number(te.expires_in??3600)*1e3},o.set(ta,JSON.stringify(c)),S(),d(),c}async function v(){return _()?c:x()}function E(){try{const F=JSON.parse(o.get(gu)??"[]");return Array.isArray(F)?F.filter(W=>W&&typeof W.id=="string"):[]}catch{return[]}}function R(F){o.set(gu,JSON.stringify(F)),d()}function P(F){return{id:`gdrive:${F.id}`,sourceId:"gdrive",name:F.name,kind:xu(F.name,F.mimeType),size:F.size?Number(F.size):void 0,mime:F.mimeType,mtime:F.lastEdited?Number(F.lastEdited):void 0,path:F.id}}async function k(){g();const{token:F}=await v(),W=await p();return new Promise((te,I)=>{try{const G=new W.DocsView(W.ViewId.DOCS).setIncludeFolders(!0).setSelectFolderEnabled(!1);new W.PickerBuilder().setAppId(e.appId).setDeveloperKey(e.apiKey).setOAuthToken(F).setLocale("ko").enableFeature(W.Feature.MULTISELECT_ENABLED).enableFeature(W.Feature.SUPPORT_DRIVES).addView(G).setCallback(X=>{const q=X?.[W.Response.ACTION];if(q===W.Action.CANCEL)return te(null);if(q!==W.Action.PICKED)return;const oe=X[W.Response.DOCUMENTS]??[],de=E(),Ee=[],ye=[];for(const Pe of[...oe].reverse()){const Y={id:Pe[W.Document.ID],name:Pe[W.Document.NAME],mimeType:Pe[W.Document.MIME_TYPE],size:Pe[W.Document.SIZE_BYTES],lastEdited:Pe[W.Document.LAST_EDITED_UTC]};if(!Y.id)continue;if(!xu(Y.name,Y.mimeType)){ye.unshift(Y.name??Y.id);continue}const j=de.findIndex(ge=>ge.id===Y.id);j>=0&&de.splice(j,1),de.unshift(Y),Ee.unshift(Y)}R(de),te({added:Ee.map(P),skipped:ye})}).build().setVisible(!0)}catch(G){I(new nn("picker",`파일 선택 창을 열지 못했습니다: ${G?.message??G}`))}})}function A(F){R(E().filter(W=>W.id!==F))}function w(){const F=c?.token;c=null,clearTimeout(l),o.set(ta,null);try{F&&s()?.accounts?.oauth2?.revoke?.(F,()=>{})}catch{}d()}async function D(F){g();const W=F.path??String(F.id).replace(/^gdrive:/,""),{token:te,expiresAt:I}=await v(),G=await Td("gdrive",{token:te,expiresAt:I})&&Ed(),C=`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(W)}?alt=media&supportsAllDrives=true`;async function X(){const ye=await t(C,{headers:{Authorization:`Bearer ${te}`},cache:"no-store"});if(ye.status===401||ye.status===403||ye.status===404)throw new nn("auth",`드라이브가 파일을 열어 주지 않았습니다 (HTTP ${ye.status}). 로그인이 만료됐거나 이 파일을 다시 골라야 합니다.`);if(!ye.ok||!ye.body)throw new nn("network",`파일을 읽지 못했습니다 (HTTP ${ye.status})`);return ye}const q=async()=>{if(G){const ye=await t(Qr("gdrive",W,n.baseUrl),{cache:"no-store"});if(!ye.ok||!ye.body)throw new nn(ye.status===401?"auth":"network",`파일을 읽지 못했습니다 (HTTP ${ye.status})`);return ye.body}return(await X()).body},oe={name:F.name,size:F.size,mime:F.mime,stream:q};if(G)return{...oe,url:Qr("gdrive",W,n.baseUrl),release(){}};if(F.kind==="splat")return{...oe,url:"",release(){}};if(F.size&&F.size>uy)throw new nn("too-large","서비스 워커가 아직 켜지지 않아 큰 파일은 열 수 없습니다. 앱을 새로고침한 뒤 다시 시도하세요.");const de=await(await X()).blob(),Ee=URL.createObjectURL(de);return{...oe,url:Ee,release:()=>URL.revokeObjectURL(Ee)}}const $={id:"gdrive",label:"드라이브",isConfigured:f,signIn:x,signOut:w,pick:k,remove:A,open:D,async list(){return{items:E().map(P).filter(F=>F.kind),dirs:[]}},subscribe(F){return u.add(F),()=>u.delete(F)},get state(){return{configured:f(),signedIn:_(),count:E().length}}};return c&&S(),$}const py=["192.168.0","192.168.1","192.168.50","192.168.219","172.30.1"],my=["10.0.0","192.168.2","192.168.3","192.168.10","192.168.31","192.168.43","192.168.86","192.168.100","192.168.123","192.168.137","192.168.199","192.168.200","10.0.1","10.1.1","172.16.0"],gy=22e3,_y=150,wd=/^(10\.\d{1,3}|192\.168|172\.(1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}$/,vy=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;function xy(n){const e=vy.exec(String(n??""));return!!e&&wd.test(`${n}.1`)&&[e[1],e[2],e[3]].every(t=>Number(t)<=255)}function Ad(n){const e=/^https?:\/\/(\d{1,3}\.\d{1,3}\.\d{1,3})\.(\d{1,3})(?::\d+)?$/.exec(String(n??""));return!e||!wd.test(`${e[1]}.${e[2]}`)||[...e[1].split("."),e[2]].some(t=>Number(t)>255)?null:e[1]}const yy=2;function yu({hints:n=[],primary:e=py,secondary:t=my}={}){const i=new Set,s=c=>c.filter(l=>l&&!i.has(l)&&i.add(l)),r=s(n.map(c=>xy(c)?c:Ad(c)).filter(Boolean)).slice(0,yy);i.clear();for(const c of r)i.add(c);const o=s(e),a=s(t);return r.length?{stage1:r,stage2:[...o,...a]}:{stage1:o,stage2:a}}const Rd=[[100,199],[2,99],[200,254],[1,1]];function Sy(n,e=Rd){const t=[];for(const[i,s]of e)for(let r=i;r<=s;r+=1)t.push(`${n}.${r}`);return t}const Cd=(n,e)=>`http://${n}:${e}`;function by({budget:n=_y,lingerMs:e=gy,now:t=()=>Date.now()}={}){let i=[];const s=()=>{const r=t()-e;i=i.filter(o=>o>r)};return{budget:n,lingerMs:e,recordTimeout(){i.push(t())},get lingering(){return s(),i.length},waitMs(r=0){return s(),i.length+r<n?0:i.length?Math.max(25,i[0]+e-t()):25},clear(){i=[]}}}const Pd=by(),My=n=>new Promise(e=>setTimeout(e,n));async function Ey({prefixes:n,port:e,probe:t,concurrency:i=24,signal:s,onProgress:r,baseFor:o=Cd,ledger:a=Pd}){const c=n.length*254,l=new AbortController,u=()=>l.abort();s?.aborted?l.abort():s?.addEventListener("abort",u,{once:!0});let h=0,d=0,f=null;const g=[];async function _(m,p){const S=Sy(m,[p]).map(E=>o(E,e));let x=0;async function v(){for(;!l.signal.aborted&&x<S.length;){for(let P=a.waitMs(d);P>0&&!l.signal.aborted;P=a.waitMs(d))await My(Math.min(P,250));if(l.signal.aborted||x>=S.length)return;const E=S[x++];d+=1;let R;try{R=await t(E,l.signal)}catch{R={ok:!1}}d-=1,h+=1,R?.timedOut&&!l.signal.aborted&&a.recordTimeout(),R?.ok&&!f?(f={base:E,info:R.info},l.abort()):R?.kind==="wrong-server"&&g.push(E),r?.({done:h,total:c,prefix:m})}}await Promise.all(Array.from({length:Math.min(i,S.length)},v))}try{for(const m of Rd)for(const p of n){if(l.signal.aborted)break;await _(p,m)}}finally{s?.removeEventListener("abort",u)}return{found:f,tried:h,wrongServers:g}}const Ty="sharp-quest-server",wy=3;function Ay(n){return!(Number(n?.version)>=wy)}function Ry(n){return n?.status!=="connected"||!Ay(n.info)?"":`PC 서버가 옛 버전입니다(${Number(n.info?.version)>=2?"PC에서 버튼 지정 페이지가 열리지 않고 앱과 버튼 배정을 주고받지 못합니다":"목록이 덜 보이고 PC 주소 기억·버튼 지정이 안 됩니다"}). PC 프로젝트 폴더에서 update_quest_pc_server.bat를 더블클릭해 갱신한 뒤(없으면 notes/quest-pc-connect-ko.md의 '서버를 최신으로 바꾸기' 참고) run_quest_pc_server.bat를 다시 실행하세요(열려 있는 서버 창은 먼저 닫기).`}const Hl=8787,Cy="sharp-vr.local",Mr="sharp.pc.lastBase",Er="sharp.pc.manualBase",Su="sharp.pc.prefixes";function Py(){return{get(n){try{return globalThis.localStorage?.getItem(n)??null}catch{return null}},set(n,e){try{e==null?globalThis.localStorage?.removeItem(n):globalThis.localStorage?.setItem(n,e)}catch{}}}}function eo(n,e={}){return/^http:/i.test(String(n))?{targetAddressSpace:"local",...e}:{...e}}function Ly(n){return/^https?:\/\/(localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d+)?$/i.test(String(n??""))}const Dy=["192.168.255.254","10.255.255.254","172.31.255.254","192.168.254.253","10.254.254.254","172.30.255.254","192.168.253.252","10.253.253.253"];async function Iy(n={}){if((n.protocol??globalThis.location?.protocol)!=="https:")return!1;const t=n.fetch??((...u)=>globalThis.fetch(...u)),i=n.waitMs??250,s=n.hosts??Dy,r=n.port??Hl,o=new AbortController,a=Date.now(),c=setTimeout(()=>o.abort(),i+300),l=async u=>{try{return await t(u,{cache:"no-store",targetAddressSpace:"local",signal:o.signal}),!1}catch(h){return h?.name==="AbortError"?!1:Date.now()-a<=i}};try{const[u,h]=await Promise.all([Promise.all(s.map(d=>l(`http://${d}:${r}/api/info`))),Promise.all(s.slice(0,2).map(d=>l(`https://${d}:${r}/api/info`)))]);return u.length>0&&u.every(Boolean)&&!h.some(Boolean)}finally{clearTimeout(c)}}function Tr(n,e=Hl){const t=String(n??"").trim();if(!t)return null;try{const i=new URL(/^[a-z]+:\/\//i.test(t)?t:`http://${t}`);if(i.protocol!=="http:"&&i.protocol!=="https:"||!i.hostname)return null;const s=i.port||(i.protocol==="http:"?String(e):"");return`${i.protocol}//${i.hostname}${s?`:${s}`:""}`}catch{return null}}function Uy(n={}){const e=n.port??Hl,t=n.mdnsHost??Cy,i=n.fetch??((...I)=>globalThis.fetch(...I)),s=n.storage??Py(),r=n.quickTimeoutMs??4e3,o=n.promptTimeoutMs??2e4,a=n.mdnsTimeoutMs??Math.max(r,8e3),c=n.permissionState??Ld,l=n.scan===!1?null:n.scan??{},u=n.permissionPollMs??250,h=n.mixedContentProbe??(()=>Iy({fetch:i}));let d={status:"idle",base:null,via:null,info:null,attempts:[],reason:null},f=null;const g=new Set;n.onChange&&g.add(n.onChange);function _(I){d={...d,...I};for(const G of g)try{G(d)}catch{}}async function m(I,G,C){const X=new AbortController;let q=!1;const oe=setTimeout(()=>{q=!0,X.abort()},G),de=()=>X.abort();C?.aborted?X.abort():C?.addEventListener("abort",de,{once:!0});try{const Ee=await i(`${I}/api/info`,eo(I,{cache:"no-store",signal:X.signal}));if(!Ee.ok)return{ok:!1,error:`HTTP ${Ee.status}`,kind:"wrong-server"};let ye;try{ye=await Ee.json()}catch{return{ok:!1,error:"JSON이 아닌 응답",kind:"wrong-server"}}return ye?.app!==Ty?{ok:!1,error:"SHARP 서버가 아님",kind:"wrong-server"}:{ok:!0,info:ye}}catch(Ee){const ye=Ee?.name==="AbortError";return{ok:!1,error:ye?"시간 초과":String(Ee?.message??Ee),kind:"unreachable",timedOut:ye&&q}}finally{clearTimeout(oe),C?.removeEventListener("abort",de)}}function p(){const I=[],G=(C,X)=>{C&&!I.some(q=>q.base===C)&&I.push({base:C,via:X})};return G(Tr(s.get(Mr),e),"last"),G(`http://${t}:${e}`,"mdns"),G(Tr(s.get(Er),e),"manual"),I}function S(I){return new Promise(G=>{let C=I.length;C||G(null);const X=()=>{C-=1,C===0&&G(null)};for(const q of I)q.then(oe=>oe?G(oe):X(),X)})}const x=I=>new Promise(G=>setTimeout(G,I));async function v(I){const G=new AbortController,C=m(I,o,G.signal);let X=!1;C.then(()=>X=!0,()=>X=!0);let q=!1;for(;!X&&(await Promise.race([x(u),C.catch(()=>{})]),!X);)if(await c()!=="prompt"){q=!0,G.abort();break}return{result:await C,answered:q}}function E(I,G,C){return`${I}.x 대역 확인 중 (${Math.min(100,Math.round(G/Math.max(1,C)*100))}%)`}function R(I,G){const C=Array.isArray(G?.addresses)&&G.addresses.length?`http://${G.addresses[0]}`:null,X=[I,C].map(Ad).filter(Boolean);if(!X.length)return;const q=[...new Set([...X,...P()])].slice(0,4);s.set(Su,JSON.stringify(q))}function P(){try{const I=JSON.parse(s.get(Su)??"[]");return Array.isArray(I)?I.filter(G=>typeof G=="string"):[]}catch{return[]}}function k(){return[...p().map(I=>I.base),...P()]}async function A(I,G,C,X="primary"){const q=yu({hints:I,primary:l.primary,secondary:l.secondary}),oe=X==="secondary"?q.stage2:q.stage1;let de=[],Ee=0;if(!oe.length||C?.aborted)return{found:null,scanned:[],wrongServers:de};const ye=oe.length*254,Pe=await Ey({prefixes:oe,port:e,concurrency:l.concurrency??24,baseFor:l.baseFor??Cd,ledger:l.ledger??Pd,signal:C,probe:(Y,j)=>m(Y,l.timeoutMs??600,j),onProgress:({done:Y,prefix:j})=>{const ge=Date.now();ge-Ee<250||(Ee=ge,_({progress:E(j,Y,ye)}))}});if(de=de.concat(Pe.wrongServers),Pe.found)return{found:Pe.found,scanned:oe,wrongServers:de};if(!C?.aborted){const Y=oe.length>4?`${oe.slice(0,4).map(j=>`${j}.x`).join(", ")} 외 ${oe.length-4}개`:oe.map(j=>`${j}.x`).join(", ");G.push({base:`${X==="secondary"?"나머지":"기억한·흔한"} 공유기 대역 ${Y}`,via:"scan",error:"응답 없음"})}return{found:null,scanned:oe,wrongServers:de}}const w=(I,G,C,X)=>(s.set(Mr,I),R(I,C),_({status:"connected",base:I,via:G,info:C,attempts:X,reason:null,progress:null,moreAvailable:!1}),d);async function D(I,G,C){const oe=await F()&&I.some(de=>/^http:/.test(de.base)&&!Ly(de.base)||de.via==="scan")?"mixed-content":G?"wrong-server":"unreachable";return _({status:"failed",base:null,via:null,info:null,attempts:I,reason:oe,progress:null,moreAvailable:C&&oe==="unreachable"}),d}let $=null;const F=()=>$??=h().catch(()=>!1);async function W(){_({status:"connecting",attempts:[],reason:null,progress:null,moreAvailable:!1}),$=null;const I=[];let G=!1,C=await c();const X=p(),q=k();if(C==="prompt"&&X.length){const j=X.find(Re=>Re.via==="mdns")??X[0],{result:ge}=await v(j.base);if(ge.ok)return w(j.base,j.via,ge.info,I);C=await c()}if(C==="denied")return _({status:"failed",base:null,via:null,info:null,attempts:I,reason:"denied",progress:null,moreAvailable:!1}),d;for(const{base:j,via:ge}of X.filter(Re=>Re.via!=="mdns")){const Re=await m(j,r);if(Re.ok)return w(j,ge,Re.info,I);Re.kind==="wrong-server"&&(G=!0),I.push({base:j,via:ge,error:Re.error})}const oe=new AbortController,de=[],Ee=X.find(j=>j.via==="mdns"),ye=Ee?m(Ee.base,a,oe.signal).then(j=>j.ok?(oe.abort(),{base:Ee.base,via:"mdns",info:j.info}):(oe.signal.aborted||(j.kind==="wrong-server"&&(G=!0),I.push({base:Ee.base,via:"mdns",error:j.error})),null)):null;ye&&de.push(ye),l&&de.push((async()=>{if(ye&&await Promise.race([ye.catch(()=>null),x(l.startDelayMs??1500)]),oe.signal.aborted)return null;const j=await A(q,I,oe.signal,"primary");return j.found?(oe.abort(),{base:j.found.base,via:"scan",info:j.found.info}):(j.wrongServers.length&&(G=!0),null)})());const Pe=await S(de);if(oe.abort(),Pe)return w(Pe.base,Pe.via,Pe.info,I);const Y=!!l&&yu({hints:q,primary:l.primary,secondary:l.secondary}).stage2.length>0;return D(I,G,Y)}async function te(){const I=[...d.attempts];$=null,_({status:"connecting",progress:null,reason:null,moreAvailable:!1});const G=await A(k(),I,void 0,"secondary");return G.found?w(G.found.base,"scan",G.found.info,I):D(I,G.wrongServers.length>0,!1)}return{get state(){return d},connect(){return f??=W().finally(()=>{f=null}),f},scanMore(){return l?(f??=te().finally(()=>{f=null}),f):Promise.resolve(d)},async ensure(){return d.status==="connected"?d:this.connect()},markLost(){d.status==="connected"&&_({status:"idle",base:null,via:null,info:null})},subscribe(I){return g.add(I),()=>g.delete(I)},hasLastBase(){return Tr(s.get(Mr),e)!==null},setManualBase(I){if(!String(I??"").trim())return s.set(Er,null),!0;const G=Tr(I,e);return G?(s.set(Er,G),!0):!1},getManualBase(){return s.get(Er)},forgetLastBase(){s.set(Mr,null)}}}async function Ld(){const n=["local-network-access","local-network","loopback-network"];for(const e of n)try{return(await navigator.permissions.query({name:e})).state}catch{}return"unknown"}function Ny(n){return n.reason==="denied"?{title:"로컬 네트워크 접근이 차단되어 있습니다",steps:["브라우저 주소창 왼쪽 자물쇠(사이트 설정)에서 '로컬 네트워크 기기' 권한을 허용으로 바꾸세요.","허용한 뒤 [다시 연결]을 누르세요."]}:n.reason==="mixed-content"?{title:"브라우저가 앱에서 PC로 가는 연결을 막은 것 같습니다",steps:["먼저 PC에서 run_quest_pc_server.bat의 검은 창이 켜져 있는지, 창에 'PC 주소'가 보이는지 확인하고 [다시 찾기]를 눌러 보세요. 서버가 꺼져 있을 때도 이 안내가 나올 수 있습니다.","Quest와 PC가 같은 Wi-Fi(공유기)인지 확인하세요. 게스트 Wi-Fi나 VPN이 켜져 있으면 끄세요.","서버 창의 'PC 주소' 숫자(예: 192.168.50.149)를 [고급: 주소 직접 입력]에 적어 저장한 뒤 [다시 찾기]를 눌러도 됩니다.","그래도 같은 안내가 나오면 브라우저가 앱(https)에서 PC의 http 주소로 가는 요청을 보안 규칙(혼합 콘텐츠)으로 막는 것입니다. 이 화면을 개발 담당에게 알려 주세요. 연결 방식을 바꿔야 합니다."]}:n.reason==="wrong-server"?{title:"주소는 응답하지만 SHARP PC 서버가 아닙니다",steps:["PC에서 run_quest_pc_server.bat가 실행 중인지 확인하세요.","포트 8787을 다른 프로그램이 쓰고 있지 않은지 확인하세요."]}:{title:"PC에 연결하지 못했습니다",steps:["PC에서 run_quest_pc_server.bat를 실행하고 검은 창을 열어 두세요. 창에 'PC 주소'가 보이면 서버는 켜진 것입니다. 켠 뒤 [다시 찾기]를 누르세요.","Quest와 PC가 같은 Wi-Fi(공유기)에 있는지 확인하세요. 게스트 Wi-Fi나 'AP 격리'가 켜진 공유기는 기기끼리 보이지 않습니다.","처음 실행하면 Windows 방화벽 창이 뜹니다. '개인 네트워크'를 허용하세요. 이미 닫았다면 방화벽 설정에서 Python의 개인 네트워크 허용을 켜세요.","PC의 네트워크 프로필이 '개인'인지 확인하세요(설정 > 네트워크 및 인터넷 > Wi-Fi/이더넷 > 네트워크 프로필 유형). '공용'이면 연결이 막힙니다.","브라우저가 '로컬 네트워크 기기 찾기' 권한을 물으면 허용하세요.",n.attempts?.some(t=>t.via==="scan")?`앱이 sharp-vr.local 이름과 기억해 둔(또는 흔한) 공유기 주소를 찾아봤지만 응답이 없었습니다. 서버가 켜져 있다면 [다시 찾기]를 누르세요.${n.moreAvailable?" 공유기나 Wi-Fi를 바꿨다면 [더 찾아보기]로 나머지 공유기 주소까지 찾아봅니다(몇 분 걸릴 수 있습니다).":""} 서버 창에 적힌 'PC 주소'의 숫자(예: 192.168.50.149)를 아래 [고급: 주소 직접 입력]에 한 번만 적으면, 다음부터는 자동으로 연결됩니다.`:"그래도 안 되면 서버 창에 적힌 'PC 주소'의 숫자(예: 192.168.50.149)를 아래 [고급: 주소 직접 입력]에 적으세요."]}}function Fy(n){if(n?.status!=="connected")return"";switch(n.via){case"mdns":return"연결 방법: sharp-vr.local 이름";case"scan":return"연결 방법: 공유기 주소 자동 탐색 (이 기기에서는 sharp-vr.local 이름이 풀리지 않을 수 있습니다)";case"manual":return"연결 방법: 직접 입력한 주소";default:return"연결 방법: 마지막으로 성공한 주소"}}const Oy=1e3,bu=5e3,ky=2e4,By=new Set(["splat","video","image"]);function zy(n={}){const e=n.fetch??((...u)=>globalThis.fetch(...u)),t=n.connection??Uy({fetch:e}),i=n.recentLimit??Oy,s={ensureControl:n.proxy?.ensureControl??(()=>oy()),configure:n.proxy?.configure??((u,h)=>Td(u,h)),available:n.proxy?.available??(()=>Ed())};async function r(u){try{const h=await e(u,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:AbortSignal.timeout(4e3)});try{await h.body?.cancel()}catch{}return h.ok}catch{return!1}}async function o(u){const h=await t.ensure();if(h.status!=="connected")throw new wr(h);try{const d=await e(`${h.base}${u}`,eo(h.base,{cache:"no-store"}));if(!d.ok)throw new Error(`HTTP ${d.status}`);return await d.json()}catch(d){throw t.markLost(),d}}function a(u){const h=`${u.root}/${u.path}`;return{id:`pc:${h}`,sourceId:"pc",name:u.name,kind:u.kind,size:u.size??void 0,mtime:u.mtime??void 0,path:h}}function c(u){const h=u.path?`${u.root}/${u.path}`:u.root;return{id:`pc:${h}`,path:h,name:u.name,count:u.count??0,mtime:u.mtime??void 0}}function l(u){const h=String(u??"").split("/").filter(Boolean);return{root:h[0]??"",rel:h.slice(1).join("/")}}return{id:"pc",label:"PC",browsable:!0,connection:t,connect:()=>t.connect(),async list(u="",{kind:h}={}){const d=By.has(h)?h:null,{root:f,rel:g}=l(u);if(!f){const v=await t.ensure();if(v.status!=="connected")throw new wr(v);const E=v.info??await o("/api/info"),R=d?`&kind=${encodeURIComponent(d)}`:"",P=await o(`/api/recent?limit=${i}${R}`);return{items:P.items.filter(k=>k.kind).map(a),dirs:(E.roots??[]).map(k=>k.id),sequences:(P.sequences??[]).map(c),counts:{splat:0,video:0,image:0,...P.counts??{}}}}const _=[];let m=0,p=0,S=!1;for(;;){const v=await o(`/api/list?root=${encodeURIComponent(f)}&path=${encodeURIComponent(g)}&offset=${m}&limit=${bu}`);_.push(...v.items),p=v.total??_.length;const E=v.nextOffset;if(E==null||E<=m)break;if(_.length>=ky){S=!0;break}m=E}return{items:_.filter(v=>v.type==="file"&&v.kind&&(!d||v.kind===d)).map(a),dirs:_.filter(v=>v.type==="dir").map(v=>`${v.root}/${v.path}`),total:p,truncated:S}},searchHint(){return t.state?.status==="connected"?"":"PC 찾는 중(처음 한 번 최대 30초)"},async dirs(u=""){const{root:h,rel:d}=l(u);if(!h){const g=await t.ensure();if(g.status!=="connected")throw new wr(g);return((g.info??await o("/api/info")).roots??[]).map(m=>m.id)}return(await o(`/api/list?root=${encodeURIComponent(h)}&path=${encodeURIComponent(d)}&offset=0&limit=${bu}`)).items.filter(g=>g.type==="dir").map(g=>`${g.root}/${g.path}`)},async recent(u,h=i){const d=u?`&kind=${encodeURIComponent(u)}`:"";return(await o(`/api/recent?limit=${h}${d}`)).items.filter(g=>g.kind).map(a)},async open(u){const h=await t.ensure();if(h.status!=="connected")throw new wr(h);const d=u.path??u.id.replace(/^pc:/,""),f=`${h.base}/files/${Md(d)}`;let g=await s.ensureControl()&&await s.configure("pc",{base:h.base})&&s.available();g&&!await r(Qr("pc",d,n.baseUrl))&&(g=!1);const _=g?Qr("pc",d,n.baseUrl):f;return{url:_,name:u.name,size:u.size,mime:u.mime,stream:async()=>{const m=await e(_,g?{cache:"no-store"}:eo(h.base,{cache:"no-store"}));if(!m.ok||!m.body)throw t.markLost(),new Error(`파일을 읽지 못했습니다 (HTTP ${m.status})`);return m.body},release(){}}}}}class wr extends Error{constructor(e){super("PC 서버에 연결하지 못했습니다"),this.name="PcConnectionError",this.state=e}}const en=(n,e="")=>`${n}|${e}`;function Hy(n){const e=String(n??"").split("/").filter(Boolean);return e.map((t,i)=>e.slice(0,i+1).join("/"))}function Dd({listSources:n,getSource:e,onChange:t=()=>{}}){const i=new Set,s=new Map,r=g=>s.get(g),o=(g,_)=>r(en(g,_))?.dirs??null;function a(g,_,m){s.set(en(g,_),{dirs:dl(m).map(p=>p.path),loading:!1,error:!1,partial:!1}),t()}function c(g,_){i.add(en(g,""));let m="";for(const p of Hy(_)){const S=en(g,m),x=r(S);x?x.dirs.includes(p)||(x.dirs=[...x.dirs,p].sort()):s.set(S,{dirs:[p],loading:!1,error:!1,partial:!0}),i.add(en(g,p)),m=p}t()}async function l(g,_){const m=en(g,_),p=e(g);if(p){s.set(m,{dirs:r(m)?.dirs??[],loading:!0,error:!1,partial:!1}),t();try{const S=typeof p.dirs=="function"?await p.dirs(_):(await p.list(_)).dirs??[];s.set(m,{dirs:dl(S).map(x=>x.path),loading:!1,error:!1,partial:!1})}catch{s.set(m,{dirs:r(m)?.dirs??[],loading:!1,error:!0,partial:!1})}t()}}async function u(g,_=""){const m=en(g,_);i.add(m);const p=r(m);!p||p.partial||p.error?await l(g,_):t()}function h(g,_=""){i.delete(en(g,_)),t()}async function d(g,_=""){i.has(en(g,_))?h(g,_):await u(g,_)}function f(g){const _=[],m=(p,S,x)=>{const v=en(p,S),E=r(v);for(const R of E?.dirs??[]){const P=en(p,R),k=r(P),A=i.has(P);_.push({key:P,sourceId:p,path:R,name:R.split("/").filter(Boolean).pop()??R,depth:x,kind:"dir",expandable:!0,expanded:A,loading:!!k?.loading,error:!!k?.error,current:g.sourceId===p&&g.path===R}),A&&m(p,R,x+1)}};for(const p of n()){const S=en(p.id,""),x=i.has(S);_.push({key:S,sourceId:p.id,path:"",name:p.label,depth:0,kind:"source",expandable:!!p.browsable,expanded:x&&!!p.browsable,loading:!!r(S)?.loading,error:!!r(S)?.error,current:g.sourceId===p.id&&g.path===""}),x&&p.browsable&&m(p.id,"",1)}return _}return{rows:f,prime:a,reveal:c,expand:u,collapse:h,toggle:d,dirsOf:o,isExpanded:(g,_="")=>i.has(en(g,_))}}const Ss=(n,e,t)=>n+(e-n)*t,Vy=/Quest|OculusBrowser|Meta Quest/i;function Id({mode:n="quality",level:e=5}={}){const t=n==="safe",i=n==="lite"||n==="quest",s=n==="quest",r=Math.min(10,Math.max(1,Math.round(e)||5)),o=t?(r-1)/9:0;return{mode:n,level:t?r:null,label:t?`안전 ${r}/10`:{lite:"라이트",quest:"초저부하",quality:"고화질"}[n],precision:s?"mediump":"highp",pixelRatio:a=>s?.85:i?1:t?Ss(.7,1.25,o):Math.min(a,1.5),spark:{focalAdjustment:s?1:i?1.15:2,maxStdDev:Math.sqrt(s?2.2:i?3:t?Ss(3.2,5.8,o):6),minAlpha:s?8/255:i?4/255:t?Math.round(Ss(6,1,o))/255:1/255,maxPixelRadius:s?28:i?56:t?Math.round(Ss(64,220,o)):256,minPixelRadius:s?1:i?.5:t?Ss(.35,0,o):0,sortRadial:!0,minSortIntervalMs:s?180:i?120:0,enableLod:i,lodSplatScale:s?.45:i?.8:1,lodRenderScale:s?3:i?2.4:1,lodInflate:!1,coneFov0:s?8:90,coneFov:s?46:120,coneFoveate:s?.92:.4,behindFoveate:s?.02:.2},mesh:{enableLod:i,lod:i?"quality":!1,lodScale:s?.3:i?.55:1,coneFov0:s?8:90,coneFov:s?46:120,coneFoveate:s?.92:.4,behindFoveate:s?.02:.2}}}function Gy({search:n="",userAgent:e="",saved:t=null}={}){const i=new URLSearchParams(n);return i.has("quest")?{mode:"quest",level:5}:i.has("lite")?{mode:"lite",level:5}:i.has("quality")?{mode:"quality",level:5}:i.has("safe")?{mode:"safe",level:Mu(i.get("safe"))}:t&&["safe","lite","quest","quality"].includes(t.mode)?{mode:t.mode,level:Mu(t.level)}:Vy.test(e)?{mode:"safe",level:5}:{mode:"quality",level:5}}function Mu(n){return Math.min(10,Math.max(1,Number.parseInt(String(n??""),10)||5))}const Wy=[{value:"safe:1",label:"안전 1 (가장 가볍게)"},{value:"safe:3",label:"안전 3"},{value:"safe:5",label:"안전 5 (Quest 기본)"},{value:"safe:7",label:"안전 7"},{value:"safe:10",label:"안전 10 (가장 선명)"},{value:"lite:5",label:"라이트"},{value:"quest:5",label:"초저부하"},{value:"quality:5",label:"고화질 (PC용)"}],Hn={mono2d:{label:"2D 일반 화면",short:"2D",shape:"screen",stereo:"mono"},mono360:{label:"360° 모노",short:"360",shape:"sphere360",stereo:"mono"},tb360:{label:"360° 3D 위아래(TB)",short:"360 TB",shape:"sphere360",stereo:"tb"},sbs360:{label:"360° 3D 좌우(SBS)",short:"360 SBS",shape:"sphere360",stereo:"sbs"},sbs180:{label:"VR180 3D 좌우(SBS)",short:"VR180",shape:"sphere180",stereo:"sbs"},mono180:{label:"VR180 모노",short:"180",shape:"sphere180",stereo:"mono"},sbsScreenFull:{label:"3D 스크린 Full SBS",short:"SBS 스크린",shape:"screen",stereo:"sbs"},sbsScreenHalf:{label:"3D 스크린 Half SBS",short:"HSBS 스크린",shape:"screen",stereo:"sbs"},tbScreen:{label:"3D 스크린 위아래(TB)",short:"TB 스크린",shape:"screen",stereo:"tb"}},Ar=["sbs180","mono180","mono360","tb360","sbs360","sbsScreenFull","sbsScreenHalf","tbScreen","mono2d"];function to(n){return typeof n=="string"&&Object.prototype.hasOwnProperty.call(Hn,n)}function $y(n){const t=String(n||"").split(/[\\/]/).pop().replace(/\.[^.]+$/,"").toLowerCase(),i=t.split(/[^a-z0-9]+/).filter(Boolean);return{base:t,tokens:i}}function Xy(n){const{base:e,tokens:t}=$y(n),i=(...l)=>l.some(u=>t.includes(u)),s=[];let r=null,o=null,a=!1,c=!1;return(i("360","vr360","equirect","equirectangular","spherical")||/vr360|360vr/.test(e))&&(r="360",s.push("이름에 360")),(i("180","vr180","fisheye180")||/vr180/.test(e))&&(r="180",s.push("이름에 180")),i("hsbs","halfsbs","half-sbs")||/half[-_ ]?sbs/.test(e)?(o="sbs",a=!0,s.push("이름에 HSBS")):i("fsbs","fullsbs")||/full[-_ ]?sbs/.test(e)?(o="sbs",c=!0,s.push("이름에 FSBS")):i("sbs","lr","3dh","leftright","sidebyside")||/side[-_ ]?by[-_ ]?side/.test(e)?(o="sbs",s.push("이름에 SBS/LR")):i("tb","ou","htb","ftb","3dv","topbottom","overunder")||/over[-_ ]?under|top[-_ ]?bottom/.test(e)?(o="tb",s.push("이름에 TB/OU")):i("mono","2d")&&(o="mono",s.push("이름에 mono")),!o&&i("3d")&&s.push("이름에 3D(좌우/위아래 불명)"),{projection:r,stereo:o,half:a,full:c,hints:s}}function qy(n){if(!n)return null;let e=null;n.stereoMode==="left-right"?e="sbs":n.stereoMode==="top-bottom"?e="tb":n.stereoMode==="mono"&&(e="mono");let t=null;if(n.projection==="equirect"){const i=n.equirectBounds;i&&i.left+i.right>=.45?t="180":t="360"}return!t&&!e?null:{projection:t,stereo:e}}function Yy(n){return n>=3.2?"sbs":n<=1.25?"tb":"mono"}function jy({name:n="",width:e=0,height:t=0,spatial:i=null}={}){const s=e>0&&t>0?e/t:0,r=Xy(n),o=qy(i),a=[];let c=r.projection,l=r.stereo,u=!1;o&&(o.projection&&(c=o.projection),o.stereo&&(l=o.stereo),u=!0,a.push("MP4 공간 메타데이터(st3d/sv3d)")),a.push(...r.hints.filter(()=>!u||!o));const h=(d,f,g)=>(g&&a.push(g),{layout:d,confidence:f,reasons:a});if(c==="360"){const d=l==="mono"?"mono":l??(s?Yy(s):"mono");return h(d==="sbs"?"sbs360":d==="tb"?"tb360":"mono360",u||(u||l!==null||!s)?"high":"medium",l===null&&s?`비율 ${s.toFixed(2)}:1로 입체 방식 추정`:null)}if(c==="180"){let d=l;return(!d||d==="tb")&&(d=s&&s>=1.6?"sbs":s&&s<=1.25||d==="tb"?"mono":"sbs"),h(d==="mono"?"mono180":"sbs180","high")}return l==="sbs"?r.half?h("sbsScreenHalf","high"):r.full?h("sbsScreenFull","high"):s>=1.9&&s<=2.15?h("sbs180","medium",`SBS 이름 + 비율 ${s.toFixed(2)}:1 → VR180으로 추정`):s>=2.6?h("sbsScreenFull","medium",`SBS 이름 + 비율 ${s.toFixed(2)}:1 → Full SBS`):h("sbsScreenHalf","medium",s?`SBS 이름 + 비율 ${s.toFixed(2)}:1 → Half SBS`:null):l==="tb"?s>=.95&&s<=1.1?h("tb360","medium","비율 1:1 → 360 TB로 추정"):h("tbScreen","medium"):l==="mono"?s>=1.9&&s<=2.15?h("mono360","medium","비율 2:1 → 360으로 추정"):h("mono2d","medium"):s?(r.hints.length===0&&/3d/.test(String(n).toLowerCase())&&a.push("이름에 3D"),s>=3.8&&s<=4.2?h("sbs360","low",`비율 ${s.toFixed(2)}:1 → 360 SBS로 추정`):s>=2.6?h("sbsScreenFull","low",`비율 ${s.toFixed(2)}:1 → Full SBS 스크린으로 추정`):s>=1.9&&s<=2.15?h("mono360","low","비율 2:1 → 360 모노로 추정(VR180이면 형식을 바꾸세요)"):s>=.95&&s<=1.05?h("tb360","low","비율 1:1 → 360 TB로 추정"):h("mono2d","low",`일반 비율 ${s.toFixed(2)}:1`)):h("mono2d","low","해상도 정보 없음")}function Ud(n,e,t){const i=e||16,s=t||9;switch(n){case"sbsScreenFull":return i/2/s;case"tbScreen":return i/s<1.2?i/(s/2):i/s;default:return i/s}}function Ky(n,e){const t=Hn[n]?.stereo??"mono";return t==="sbs"?e==="left"?{u0:0,u1:.5,v0:0,v1:1}:{u0:.5,u1:1,v0:0,v1:1}:t==="tb"?e==="left"?{u0:0,u1:1,v0:.5,v1:1}:{u0:0,u1:1,v0:0,v1:.5}:{u0:0,u1:1,v0:0,v1:1}}function Eu(n,e,t,i,s,r){let o=-1;for(let a=-r;a<=r;a++){let c=0,l=0,u=0;for(let d=0;d<i.h;d++){const f=(i.y0+d)*e+i.x0,g=(s.y0+d)*e+s.x0,_=Math.max(0,-a),m=Math.min(i.w,i.w-a);if(m-_<4)continue;let p=0,S=0;for(let x=_;x<m;x++)p+=n[f+x],S+=n[g+x+a];p/=m-_,S/=m-_;for(let x=_;x<m;x++){const v=n[f+x]-p,E=n[g+x+a]-S;c+=v*E,l+=v*v,u+=E*E}}const h=Math.sqrt(l*u);h>0&&(o=Math.max(o,c/h))}return o}function Zy(n,e,t){if(!n||e<16||t<16||n.length<e*t)return{result:null,sbs:0,tb:0};let i=0,s=0;const r=e*t;for(let g=0;g<r;g++)i+=n[g],s+=n[g]*n[g];if(Math.sqrt(Math.max(0,s/r-(i/r)**2))<6)return{result:null,sbs:0,tb:0};const a=Math.floor(e/2),c=Math.floor(t/2),l=Math.max(2,Math.round(a*.06)),u=Eu(n,e,t,{x0:0,y0:0,w:a,h:t},{x0:a,y0:0},l),h=Eu(n,e,t,{x0:0,y0:0,w:e,h:c},{x0:0,y0:c},Math.max(2,Math.round(e*.03))),d=.8;let f="mono";return u>=d&&u>=h+.05?f="sbs":h>=d&&h>=u+.05&&(f="tb"),{result:f,sbs:u,tb:h}}function Jy(n,e,t){return!n||n.confidence!=="low"||!e?.result?n:n.layout==="mono360"&&t>=1.9&&t<=2.15&&e.result==="sbs"?{layout:"sbs180",confidence:"medium",reasons:[...n.reasons,"화면 내용을 보니 좌우 그림이 거의 같아 VR180 좌우(SBS)로 판단"]}:n.layout==="tb360"&&e.result==="mono"?{layout:"mono360",confidence:"low",reasons:[...n.reasons,"화면 내용을 보니 위아래 그림이 달라 360 모노로 판단"]}:n}const Vl=1,Nd=2;function Qy(n,e){if(n&&n.length>=2){const t=Array.prototype.indexOf.call(n,e);if(t===0)return"left";if(t===1)return"right"}return e?.layers?.isEnabled?.(Nd)&&!e.layers.isEnabled(Vl)?"right":"left"}const eS=50,Fd=3,Od=6,Rr=80*Math.PI/180,no=.6,Br=.15,zr=3,pl=1,Hr=4,tS=.001,bs=(n,e,t)=>Math.min(t,Math.max(e,n));function na(n,e){const t=Math.max(1,e||1),i=(n.u0+n.u1)/2,s=(n.v0+n.v1)/2,r=(n.u1-n.u0)/2/t,o=(n.v1-n.v0)/2/t;return{u0:i-r,u1:i+r,v0:s-o,v1:s+o}}function Tu({azMin:n,azMax:e,radius:t=eS,segU:i=64,segV:s=40,region:r}){const o=i+1,a=s+1,c=new Float32Array(o*a*3),l=new Float32Array(o*a*2);let u=0;for(let g=0;g<a;g++){const _=g/s,m=-Math.PI/2+_*Math.PI,p=Math.cos(m),S=Math.sin(m);for(let x=0;x<o;x++){const v=x/i,E=n+v*(e-n);c[u++]=t*Math.sin(E)*p,c[u++]=t*S,c[u++]=-t*Math.cos(E)*p}}kd(l,i,s,r);const h=new Uint32Array(i*s*6);let d=0;for(let g=0;g<s;g++)for(let _=0;_<i;_++){const m=g*o+_,p=(g+1)*o+_,S=(g+1)*o+_+1,x=g*o+_+1;h[d++]=m,h[d++]=p,h[d++]=x,h[d++]=p,h[d++]=S,h[d++]=x}const f=new Yt;return f.setAttribute("position",new Pt(c,3)),f.setAttribute("uv",new Pt(l,2)),f.setIndex(new Pt(h,1)),f.computeBoundingSphere(),f}function kd(n,e,t,i){let s=0;for(let r=0;r<=t;r++){const o=r/t;for(let a=0;a<=e;a++){const c=a/e;n[s++]=i.u0+c*(i.u1-i.u0),n[s++]=i.v0+o*(i.v1-i.v0)}}}function nS({width:n,height:e,region:t}){const i=n/2,s=e/2,r=new Float32Array([-i,-s,0,i,-s,0,i,s,0,-i,s,0]),o=new Float32Array([t.u0,t.v0,t.u1,t.v0,t.u1,t.v1,t.u0,t.v1]),a=new Yt;return a.setAttribute("position",new Pt(r,3)),a.setAttribute("uv",new Pt(o,2)),a.setIndex(new Pt(new Uint16Array([0,1,2,0,2,3]),1)),a.computeBoundingSphere(),a}class wu{constructor(e){this.texture=e,this.root=new wn,this.root.name="media-projection",this.shell=new wn,this.root.add(this.shell),this.layout="mono2d",this.swapEyes=!1,this.screenScale=no,this.sphereZoom=pl,this.baseYaw=0,this.turn={yaw:0,pitch:0},this.mediaWidth=1920,this.mediaHeight=1080,this.meshes=[],this.eyeMethod="camera",this.eyeStats={left:0,right:0,mono:0,cross:0},this._material=new li({map:e,toneMapped:!1}),this._screenMaterial=new li({map:e,toneMapped:!1,side:En}),this._v=new O}get info(){return Hn[this.layout]}get isScreen(){return this.info.shape==="screen"}setEyeMethod(e){this.eyeMethod=e==="mask"?"mask":"camera",this._rebuild()}setTexture(e){this.texture=e,this._material.map=e,this._screenMaterial.map=e,this._material.needsUpdate=!0,this._screenMaterial.needsUpdate=!0}setLayout(e,t={}){if(!Hn[e])throw new Error(`알 수 없는 형식: ${e}`);this.layout=e,t.width&&(this.mediaWidth=t.width),t.height&&(this.mediaHeight=t.height),t.swapEyes!==void 0&&(this.swapEyes=!!t.swapEyes),t.screenScale!==void 0&&(this.screenScale=bs(t.screenScale,Br,zr)),t.sphereZoom!==void 0&&(this.sphereZoom=bs(t.sphereZoom,1,Hr)),this._rebuild()}_clear(){for(const e of this.meshes)this.shell.remove(e),e.geometry.dispose();this.meshes=[]}_rebuild(){this._clear();const{shape:e,stereo:t}=this.info,i=t==="mono"?["mono"]:this.swapEyes?["right","left"]:["left","right"],s=t==="mono"?["mono"]:["left","right"];i.forEach((r,o)=>{const a=s[o]??"left",c=Ky(this.layout,t==="mono"?"left":a);let l,u=this._material;if(e==="sphere360")l=Tu({azMin:-Math.PI,azMax:Math.PI,region:na(c,this.sphereZoom)}),u.side=Ot;else if(e==="sphere180")l=Tu({azMin:-Math.PI/2,azMax:Math.PI/2,segU:48,region:na(c,this.sphereZoom)}),u.side=Ot;else{const f=Ud(this.layout,this.mediaWidth,this.mediaHeight)||1.7777777777777777,g=Od*this.screenScale;l=nS({width:g,height:g/f,region:c}),u=this._screenMaterial}const h=new Xt(l,u);h.name=`media-${e}-${r}`,h.frustumCulled=!1,h.renderOrder=-10,h.userData.region=c,h.userData.segU=e==="sphere180"?48:64,h.userData.segV=40,e==="screen"&&h.position.set(0,0,-Fd);const d=this.eyeMethod==="camera"&&r!=="mono";d||r==="mono"?h.layers.set(0):r==="left"?h.layers.set(Vl):h.layers.set(Nd),h.onBeforeRender=(f,g,_)=>{if(r==="mono"){this.eyeStats.mono++;return}const m=f?.xr?.isPresenting?f.xr.getCamera().cameras:null,p=Qy(m,_);r===p?this.eyeStats[p]++:d||this.eyeStats.cross++,d&&h.geometry.setDrawRange(0,r===p?1/0:0)},this.shell.add(h),this.meshes.push(h)}),this.shell.userData.shape=e}setScreenScale(e){this.screenScale=bs(e,Br,zr),this.isScreen&&this._rebuild()}setSphereZoom(e){if(this.sphereZoom=bs(e,1,Hr),!this.isScreen)for(const t of this.meshes){const{region:i,segU:s,segV:r}=t.userData,o=t.geometry.getAttribute("uv");kd(o.array,s,r,na(i,this.sphereZoom)),o.needsUpdate=!0}}get zoom(){return this.isScreen?this.screenScale:this.sphereZoom}get zoomRange(){return this.isScreen?{min:Br,max:zr}:{min:1,max:Hr}}setZoom(e){return this.isScreen?this.setScreenScale(e):this.setSphereZoom(e),this.zoom}follow(e){this.isScreen||this.shell.position.copy(e)}place(e,t,{keepTurn:i=!1}={}){this.baseYaw=this.isScreen?t:0,i||(this.turn.yaw=0,this.turn.pitch=0),this.shell.position.copy(e),this._applyRotation()}addTurn(e,t){this.turn.yaw+=e,this.turn.pitch=Math.min(Rr,Math.max(-Rr,this.turn.pitch+t)),this._applyRotation()}setTurn(e,t){this.turn.yaw=e||0,this.turn.pitch=bs(t||0,-Rr,Rr),this._applyRotation()}resetTurn(){this.turn.yaw=0,this.turn.pitch=0,this._applyRotation()}_applyRotation(){this.shell.rotation.set(this.turn.pitch,this.baseYaw+this.turn.yaw,0,"YXZ")}dispose(){this._clear(),this._material.dispose(),this._screenMaterial.dispose(),this.root.removeFromParent()}}function iS(n,{width:e,height:t,screenScale:i=1,swapEyes:s=!1,sphereZoom:r=1}={}){const o=Hn[n];if(!o||s&&o.stereo!=="mono"||o.shape!=="screen"&&r>1+tS)return null;const a=o.stereo==="sbs"?"stereo-left-right":o.stereo==="tb"?"stereo-top-bottom":"mono";if(o.shape==="sphere360"||o.shape==="sphere180")return{kind:"equirect",layout:a,centralHorizontalAngle:o.shape==="sphere360"?Math.PI*2:Math.PI,upperVerticalAngle:Math.PI/2,lowerVerticalAngle:-Math.PI/2};const c=Ud(n,e,t)||16/9,l=Od*i;return{kind:"quad",layout:a,width:l,height:l/c,distance:Fd}}function Vr(n){if(!n||typeof globalThis.XRMediaBinding>"u")return!1;const e=n.enabledFeatures;return!e||[...e].includes("layers")}function Bd(n,e,t){const i=new lt().compose(e,t,new O(1,1,1)),s=new lt().copy(n).invert().multiply(i),r=new O,o=new $t;return s.decompose(r,o,new O),{position:{x:r.x,y:r.y,z:r.z},orientation:{x:o.x,y:o.y,z:o.z,w:o.w}}}class sS{constructor(e){this.stage=e,this.layer=null,this.spec=null,this.session=null,this._saved=null,this._video=null,this.lastError=""}get active(){return!!this.layer}attach(e,t,i,s){this.detach();const r=this.stage.renderer.xr,o=r.getSession?.();if(!t||!Vr(o))return!1;try{const a=r.getReferenceSpace();if(!a)return!1;const c=new globalThis.XRMediaBinding(o),l={space:a,layout:t.layout,transform:this._transform(t,i,s)};let u;t.kind==="equirect"?u=c.createEquirectLayer(e,{...l,centralHorizontalAngle:t.centralHorizontalAngle,upperVerticalAngle:t.upperVerticalAngle,lowerVerticalAngle:t.lowerVerticalAngle}):u=c.createQuadLayer(e,{...l,width:t.width,height:t.height});const h=[...o.renderState.layers??[]].filter(d=>d!==this.layer);return o.updateRenderState({layers:[u,...h]}),this.layer=u,this.spec=t,this.session=o,this._video=e,this.lastError="",this._makeBackgroundTransparent(),!0}catch(a){return console.warn("[media] XR 미디어 레이어를 만들지 못해 메시 경로로 보여 줍니다:",a?.message??a),this.detach(),this.lastError=`${a?.name??"Error"}: ${String(a?.message??a).slice(0,70)}`,!1}}update(e,t,i){if(this.layer)try{this.layer.transform=this._transform(e,t,i),e.kind==="quad"&&"width"in this.layer&&(this.layer.width=e.width,this.layer.height=e.height),this.spec=e}catch(s){console.warn("[media] XR 미디어 레이어 갱신 실패:",s?.message??s)}}detach(){const{layer:e,session:t}=this;if(this._restoreBackground(),this.layer=null,this.spec=null,this._video=null,e&&t){try{const i=[...t.renderState.layers??[]].filter(s=>s!==e);t.updateRenderState({layers:i})}catch{}try{e.destroy?.()}catch{}}this.session=null}_transform(e,t,i){const s=new O(0,0,0);e.kind==="quad"&&s.set(0,0,-e.distance).applyQuaternion(i),s.add(t);const r=this.stage.player;r?.updateWorldMatrix?.(!0,!1);const o=Bd(r?.matrixWorld??new lt,s,i);return new globalThis.XRRigidTransform(o.position,o.orientation)}_makeBackgroundTransparent(){const{scene:e,renderer:t}=this.stage;this._saved||(this._saved={background:e.background,alpha:t.getClearAlpha()},e.background=null,t.setClearAlpha(0))}_restoreBackground(){if(!this._saved)return;const{scene:e,renderer:t}=this.stage;e.background=this._saved.background,t.setClearAlpha(this._saved.alpha),this._saved=null}}const ml="sharp-quest.ui-layer";function zd({search:n=globalThis.location?.search??"",storage:e=Hd()}={}){const t=new URLSearchParams(n).get("uilayer");if(t==="0"||t==="off")return!1;if(t==="1"||t==="on")return!0;try{return e?.getItem(ml)!=="off"}catch{return!0}}let Gr=null;function rS(){return Gr===null&&(Gr=zd()),Gr}function oS(n,e=Hd()){try{n?e?.removeItem(ml):e?.setItem(ml,"off")}catch{}Gr=!!n}function Hd(){try{return globalThis.localStorage??null}catch{return null}}function aS(n,e){if(!n||!e||typeof e.createQuadLayer!="function"||typeof e.getSubImage!="function")return!1;const t=n.enabledFeatures;return!t||[...t].includes("layers")}const lS=32,cS=9,uS="rgba(255, 255, 255, 0.95)",hS="#4fb3ff",Au=.5;function dS(n,e,t,i){const s=new O,r=new $t,o=new O;n.decompose(s,r,o);const a=Bd(e??new lt,s,r),c=t*o.x,l=i*o.y;return{position:a.position,orientation:a.orientation,fullWidth:c,fullHeight:l,width:c*Au,height:l*Au}}const Ru=(n,e)=>n&&e&&n.length===e.length&&n.every((t,i)=>t===e[i]);class Vd{constructor({stage:e,canvas:t,mesh:i,widthM:s,heightM:r,name:o="ui",enabled:a=rS,makeTransform:c,makeScratch:l}){this.stage=e,this.canvas=t,this.mesh=i,this.widthM=s,this.heightM=r,this.name=o,this.enabled=a,this.makeTransform=c??((u,h)=>new globalThis.XRRigidTransform(u,h)),this.makeScratch=l??(()=>globalThis.document.createElement("canvas")),this._scratch=null,this._cursors={left:null,right:null},this._cursorsDirty=!1,this._patches=[],this.layer=null,this.session=null,this.failed=!1,this.lastError="",this.size=null,this.dirty=!0,this.active=!1,this.gl=null,this.srcTexture=null,this.srcFbo=null,this.dstFbo=null,this._lastPose=null,this._lastSize=null,this._checked=!1}invalidate(){this.dirty=!0}setCursor(e,t){const i=this._cursors[e];!i&&!t||i&&t&&Math.abs(i.x-t.x)<1&&Math.abs(i.y-t.y)<1||(this._cursors[e]=t?{x:t.x,y:t.y}:null,this._cursorsDirty=!0)}sync(e){if(!e||this.failed||!this.enabled())return this._leave(),!1;const t=this.stage.renderer.xr,i=t.getSession?.();if(!i)return this._leave(),!1;this.session&&this.session!==i&&this._forgetSession();try{const s=t.getBinding?.();if(!this.layer){if(!aS(i,s))return this._fail("레이어를 지원하지 않음",!1),!1;if(!this._create(i,s,t))return!1}this._ensureInSession(i),this._updatePose();const r=t.getFrame?.();return r?(this._draw(s,r),this.active=!0,!0):this.active}catch(s){return this._fail(`${s?.name??"Error"}: ${String(s?.message??s).slice(0,80)}`,!0),!1}}detach(){this._leave(),this._forgetSession()}dispose(){this.detach();const e=this.gl;e&&(this.srcTexture&&e.deleteTexture(this.srcTexture),this.srcFbo&&e.deleteFramebuffer(this.srcFbo),this.dstFbo&&e.deleteFramebuffer(this.dstFbo)),this.srcTexture=this.srcFbo=this.dstFbo=null,this.gl=null}_create(e,t,i){const s=i.getReferenceSpace?.();if(!s)return!1;this._ensureGl();const r=this._geometry(),{width:o,height:a}=r,c=t.createQuadLayer({space:s,viewPixelWidth:this.canvas.width,viewPixelHeight:this.canvas.height,layout:"mono",textureType:"texture",isStatic:!1,transform:this.makeTransform(r.position,r.orientation),width:o,height:a});return this.layer=c,this.session=e,this._lastPose=null,this._lastSize=[o,a],this.dirty=!0,this.lastError="",this.size={fullWidth:r.fullWidth,fullHeight:r.fullHeight,width:o,height:a},!0}_ensureGl(){if(this.gl)return;const e=this.stage.renderer.getContext();if(typeof e.blitFramebuffer!="function")throw new Error("WebGL2가 아님");this.gl=e;const t=e.getParameter(e.TEXTURE_BINDING_2D);this.srcTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.srcTexture),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA8,this.canvas.width,this.canvas.height),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,t),this.srcFbo=e.createFramebuffer(),this.dstFbo=e.createFramebuffer()}_geometry(){const{mesh:e,stage:t}=this;return e.updateWorldMatrix(!0,!1),t.player?.updateWorldMatrix?.(!0,!1),dS(e.matrixWorld,t.player?.matrixWorld??null,this.widthM,this.heightM)}_updatePose(){const{position:e,orientation:t,width:i,height:s}=this._geometry(),r=[e.x,e.y,e.z,t.x,t.y,t.z,t.w];Ru(r,this._lastPose)||(this.layer.transform=this.makeTransform(e,t),this._lastPose=r),Ru([i,s],this._lastSize)||(this.layer.width=i,this.layer.height=s,this._lastSize=[i,s])}_ensureInSession(e){const t=[...e.renderState.layers??[]];t.includes(this.layer)||e.updateRenderState({layers:[...t,this.layer]})}_leave(){this.active=!1,this.dirty=!0,this._cursors={left:null,right:null},this._cursorsDirty=!1,this._patches=[];const{layer:e,session:t}=this;if(!(!e||!t))try{const i=[...t.renderState.layers??[]];i.includes(e)&&t.updateRenderState({layers:i.filter(s=>s!==e)})}catch{}}_forgetSession(){const{layer:e}=this;this.layer=null,this.session=null,this._lastPose=null,this.failed=!1,this.active=!1;try{e?.destroy?.()}catch{}}_fail(e,t){this.lastError=e,this.failed=!0,t&&console.warn(`[ui-layer] ${this.name}: 레이어로 못 그려 메시로 보여 줍니다:`,e),this._leave();try{this.layer?.destroy?.()}catch{}this.layer=null}_draw(e,t){const i=this.gl;this.dirty&&(this._upload(),this.dirty=!1,this._patches=[],this._cursorsDirty=!0),this._cursorsDirty&&(this._applyCursors(),this._cursorsDirty=!1);const s=e.getSubImage(this.layer,t),r=i.getParameter(i.DRAW_FRAMEBUFFER_BINDING),o=i.getParameter(i.READ_FRAMEBUFFER_BINDING),a=i.isEnabled(i.SCISSOR_TEST);try{a&&i.disable(i.SCISSOR_TEST),i.bindFramebuffer(i.READ_FRAMEBUFFER,this.srcFbo),i.framebufferTexture2D(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.srcTexture,0),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,this.dstFbo),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,s.colorTexture,0);const c=!this._checked;if(c){const u=i.checkFramebufferStatus(i.READ_FRAMEBUFFER),h=i.checkFramebufferStatus(i.DRAW_FRAMEBUFFER);if(u!==i.FRAMEBUFFER_COMPLETE||h!==i.FRAMEBUFFER_COMPLETE)throw new Error(`framebuffer 불완전(read ${u}, draw ${h})`)}const l=s.viewport??{x:0,y:0,width:this.canvas.width,height:this.canvas.height};if(i.blitFramebuffer(0,0,this.canvas.width,this.canvas.height,l.x,l.y+l.height,l.x+l.width,l.y,i.COLOR_BUFFER_BIT,i.LINEAR),c){const u=i.getError();if(u!==i.NO_ERROR)throw new Error(`GL 오류 0x${u.toString(16)}`);this._checked=!0}}finally{i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,null,0),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,r),i.bindFramebuffer(i.READ_FRAMEBUFFER,o),a&&i.enable(i.SCISSOR_TEST)}}_upload(){this._uploadSource(0,0,this.canvas)}_applyCursors(){for(const e of this._patches)this._uploadPatch(e,null);this._patches=[];for(const e of["left","right"]){const t=this._cursors[e];if(!t)continue;const i=this._patchRect(t);this._uploadPatch(i,t),this._patches.push(i)}}_patchRect(e){const t=lS,i=Math.min(Math.max(Math.round(e.x)-t/2,0),Math.max(0,this.canvas.width-t)),s=Math.min(Math.max(Math.round(e.y)-t/2,0),Math.max(0,this.canvas.height-t));return{x:i,y:s,size:t}}_uploadPatch(e,t){const i=this._scratch??=this.makeScratch();i.width=e.size,i.height=e.size;const s=i.getContext("2d");s.clearRect(0,0,e.size,e.size),s.drawImage(this.canvas,e.x,e.y,e.size,e.size,0,0,e.size,e.size),t&&(s.beginPath(),s.arc(t.x-e.x,t.y-e.y,cS,0,Math.PI*2),s.fillStyle=uS,s.fill(),s.lineWidth=3,s.strokeStyle=hS,s.stroke()),this._uploadSource(e.x,e.y,i)}_uploadSource(e,t,i){const s=this.gl,r=s.getParameter(s.TEXTURE_BINDING_2D),o=s.getParameter(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL),a=s.getParameter(s.UNPACK_FLIP_Y_WEBGL);try{s.bindTexture(s.TEXTURE_2D,this.srcTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texSubImage2D(s.TEXTURE_2D,0,e,t,s.RGBA,s.UNSIGNED_BYTE,i)}finally{s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,a),s.bindTexture(s.TEXTURE_2D,r)}}}const Gd="sharp.autoVrMedia",Wd=["video","image"];function $d(){try{return globalThis.localStorage??null}catch{return null}}function fS(){try{return $d()?.getItem(Gd)!=="0"}catch{return!0}}function pS(n){try{$d()?.setItem(Gd,n?"1":"0")}catch{}}function mS({kind:n,enabled:e,supported:t,presenting:i}){return!!e&&!!t&&!i&&Wd.includes(n??"")}function gS({kind:n,hasXr:e,presenting:t,dismissed:i}){return!i&&!!e&&!t&&Wd.includes(n??"")}const _S={splat:"PLY",video:"영상",image:"사진"},Nn=n=>Number(n).toLocaleString("ko-KR"),vS={video:"▶ 재생",image:"열기",splat:"열기"},xS=2*1024**3;function yS(n,e){if(e==="session")return{text:"보관",title:"앱에 복사해 두면 앱을 껐다 켜도 남습니다"};if(n.kind==="video"&&(n.size??0)>=xS)return null;const t=Number.isFinite(n.size)?bn(n.size):"",i=n.kind==="video"?"기기에 저장":"보관";return{text:t?`${i}
${t}`:i,title:n.kind==="video"||n.kind==="image"?"저장하지 않아도 행을 누르면 바로 열립니다. 이 버튼은 오프라인용으로 기기에 복사해 둡니다.":"앱에 복사해 두면 PC가 꺼져 있어도 열 수 있습니다"}}function SS({root:n,library:e,pickFiles:t,addFiles:i,keepItem:s,removeItem:r,presetValue:o,setPreset:a,presetLabel:c}){n.innerHTML=`
    <div class="layout">
      <aside class="sidebar" id="sidebar">
        <div class="rail" id="rail">
          <h1>SHARP 뷰어</h1>
          <button class="btn primary" id="btn-vr" type="button" disabled>VR 보기</button>
          <div class="actions">
            <button class="btn" id="btn-pick" type="button">기기에서 파일 열기</button>
            <button class="btn" id="btn-settings" type="button" aria-expanded="false" aria-controls="settings">설정</button>
          </div>
          <div class="settings" id="settings" hidden>
            <label class="field">
              <span>그래픽 품질 (바꾸면 앱이 다시 시작됩니다)</span>
              <select id="preset"></select>
            </label>
            <label class="autovr" id="ui-layer-field">
              <input type="checkbox" id="ui-layer">
              <span>VR 패널·재생 컨트롤을 레이어로 그리기</span>
            </label>
            <p class="muted" id="ui-layer-hint">VR에서 패널이 뒤집혀 보이거나 안 보이면 끄세요. VR에 다시 들어가면 적용됩니다.</p>
            <p class="muted" id="storage"></p>
          </div>
          <nav class="tabs" id="tabs" role="tablist"></nav>
          <div class="source-panel" id="source-panel"></div>
        </div>
        <section class="listcol" id="listcol">
          <div class="listhead" id="listhead">
            <div class="toolbar">
              <div class="chips" id="chips" role="group" aria-label="종류"></div>
              <label class="sort"><span class="sr-only">정렬</span><select id="sort" aria-label="정렬"></select></label>
            </div>
            <div class="folderbar" id="folderbar" hidden>
              <button class="btn small" id="btn-up" type="button">⬆ 상위</button>
              <button class="btn small" id="btn-recent" type="button">최근</button>
              <span class="crumbs" id="crumbs"></span>
            </div>
            <p class="count" id="count" aria-live="polite"></p>
          </div>
          <div class="listbody">
            <nav class="foldertree" id="foldertree" aria-label="폴더" hidden></nav>
            <ul class="list" id="list"></ul>
          </div>
        </section>
      </aside>
      <main class="stage" id="stage">
        <button class="btn fold" id="btn-fold" type="button" aria-label="목록 접기/펼치기">☰</button>
        <p class="status" id="status" role="status"></p>
        <div class="drop-hint" id="drop-hint">PLY·영상·사진 파일을 여기로 끌어다 놓아도 됩니다</div>
      </main>
    </div>
  `;const l=se=>n.querySelector(se),u=l("#status"),h=l("#list"),d=l("#foldertree");l("#listcol");const f=l("#tabs"),g=l("#source-panel"),_=new Map,m=l("#btn-vr"),p=l("#preset"),S=l("#chips"),x=l("#sort"),v=l("#folderbar"),E=l("#btn-up"),R=l("#btn-recent"),P=l("#crumbs"),k=l("#count"),A=l("#listhead"),w=l("#stage"),D=l("#drop-hint");let $=!1;const F=(se,me="")=>{u.textContent=se,u.dataset.kind=me,$=!1},W=se=>{F(se,"error"),$=!0};let te=null,I=!1,G=null,C=!1;const X=document.createElement("div");X.className="vr-prompt hidden",X.innerHTML='<button type="button" class="vr-prompt-go">🥽 VR로 보기 (입체)</button><p>지금은 2D 미리보기라 입체가 아니고 3D 영상·사진은 왼쪽 눈 그림만 보입니다.</p><button type="button" class="vr-prompt-close" aria-label="안내 닫기">닫기</button>',w.appendChild(X);const q=()=>X.classList.toggle("hidden",!gS({kind:G,hasXr:!!navigator.xr,presenting:Xe,dismissed:C}));async function oe(){if(te)try{await te.enterVR()}catch(se){F(`VR을 시작하지 못했습니다: ${_d(se)}`,"error"),C=!1,q()}}X.querySelector(".vr-prompt-go").addEventListener("click",()=>oe()),X.querySelector(".vr-prompt-close").addEventListener("click",()=>{C=!0,q()});let de=fS();const Ee=document.createElement("label");Ee.className="autovr",Ee.innerHTML='<input type="checkbox" id="auto-vr"> 영상·사진은 열면 바로 VR로';const ye=Ee.querySelector("input");ye.checked=de,ye.addEventListener("change",()=>{de=ye.checked,pS(de)}),m.insertAdjacentElement("afterend",Ee);function Pe(se){te=se;const me=T=>{I=T,m.disabled=!navigator.xr,Xe||(m.textContent=navigator.xr?T?"VR 보기":"VR 시도(지원 확인 안 됨)":"VR 사용 불가"),m.title=T||!navigator.xr?"":"이 화면에서는 VR 지원이 확인되지 않았습니다. 눌러서 시도할 수 있습니다.",q()};se.isVRSupported().then(me),navigator.xr?.addEventListener?.("devicechange",()=>se.isVRSupported().then(me)),m.addEventListener("click",()=>oe())}Je("xr:sessionstart",()=>{Xe=!0,m.textContent="VR 보는 중",q()}),Je("xr:sessionend",()=>{Xe=!1,m.textContent=I?"VR 보기":"VR 시도(지원 확인 안 됨)",C=!1,q(),De&&(_e(),h.querySelector(".row.current")?.scrollIntoView({block:"center"}))}),l("#btn-pick").addEventListener("click",async()=>{const se=await t();se.length&&await i(se)});for(const se of["dragenter","dragover"])w.addEventListener(se,me=>{me.preventDefault(),D.classList.add("active")});for(const se of["dragleave","drop"])w.addEventListener(se,()=>D.classList.remove("active"));w.addEventListener("drop",async se=>{se.preventDefault();const me=[...se.dataTransfer?.files??[]];me.length&&await i(me)}),l("#btn-fold").addEventListener("click",()=>n.querySelector(".layout").classList.toggle("folded"));function Y(){f.innerHTML="";for(const se of fl()){const me=document.createElement("button");me.type="button",me.role="tab",me.className="tab",me.textContent=se.label,me.setAttribute("aria-selected",String(se.id===e.listSourceId)),me.addEventListener("click",()=>e.setListSource(se.id)),f.appendChild(me)}}for(const se of Kr){const me=document.createElement("button");me.type="button",me.className="chip",me.dataset.value=se.value,me.textContent=se.label,me.addEventListener("click",()=>e.setView({kind:se.value})),S.appendChild(me)}for(const se of Zr){const me=document.createElement("option");me.value=se.value,me.textContent=se.label,x.appendChild(me)}x.addEventListener("change",()=>e.setView({sort:x.value})),E.addEventListener("click",()=>e.upFolder()),R.addEventListener("click",()=>e.openFolder(""));const j=Dd({listSources:fl,getSource:sn,onChange:()=>be()});let ge="",Re=!1;function be(){const se=e.canBrowse;if(d.hidden=!se,n.querySelector(".layout")?.classList.toggle("has-tree",se),d.innerHTML="",!se)return;const me={sourceId:e.listSourceId,path:e.folder};for(const T of j.rows(me)){if(T.sourceId!==me.sourceId)continue;const y=document.createElement("div");y.className="tree-row"+(T.current?" current":""),y.style.paddingLeft=`${Math.min(T.depth,5)*12}px`;const z=document.createElement("button");z.type="button",z.className="tree-toggle",z.textContent=T.expandable?T.loading?"…":T.error?"!":T.expanded?"▾":"▸":"",z.disabled=!T.expandable,z.setAttribute("aria-label",T.expanded?"접기":"펼치기"),z.addEventListener("click",()=>j.toggle(T.sourceId,T.path));const ee=document.createElement("button");ee.type="button",ee.className="tree-label",ee.textContent=T.kind==="source"?T.loading&&sn(T.sourceId)?.searchHint?.()||"최근 파일":T.name,ee.title=T.path||T.name,ee.addEventListener("click",()=>T.kind==="source"?e.openFolder("",T.sourceId):e.openFolder(T.path,T.sourceId)),y.append(z,ee),d.appendChild(y)}}Je("library:changed",(se={})=>{if(Re=!!se.loading,se.loading)return;se.dirs&&!se.failed&&j.prime(se.sourceId,se.folder??"",se.dirs);const me=`${se.sourceId}|${se.folder??""}`;me!==ge&&(ge=me,sn(se.sourceId)?.browsable&&j.reveal(se.sourceId,se.folder??""))});function Ve(){for(const ee of S.children)ee.setAttribute("aria-pressed",String(ee.dataset.value===e.view.kind));x.value=e.view.sort;const se=e.canBrowse;v.hidden=!se,E.hidden=!0,R.hidden=!0,(se?v:A).append(k),se&&(P.textContent=fd(e.folder),P.title=e.folder,E.disabled=!e.folder,R.disabled=!e.folder);const me=e.items.length,T=e.allItems.length,y=e.folders.length+e.sequences.length,z=[];y&&z.push(`폴더 ${Nn(y)}개`),z.push(me===T?`파일 ${Nn(T)}개`:`파일 ${Nn(T)}개 중 ${Nn(me)}개`),e.hiddenCount&&z.push(`외 ${Nn(e.hiddenCount)}개`),e.truncated&&z.push("일부만 표시"),k.textContent=z.join(" · "),k.title=e.hiddenCount?"최근 파일 목록에 다 담지 못한 파일이 있습니다. 폴더로 들어가면 모두 보입니다.":""}let Ye={start:0,end:Bn},L="",Xe=!1,De=!1;function Ie(){const se=e.view,me=`${e.listSourceId}|${e.folder}|${se.kind}|${se.sort}`;me!==L&&(L=me,Ye={start:0,end:Bn});const T=e.current?e.items.findIndex(y=>y.id===e.current.id):-1;Ye=rx(Ye,e.items.length,T)}function _e(){if(Xe){De=!0;return}De=!1,Ie(),Y(),g.innerHTML="";const se=_.get(e.listSourceId);g.hidden=!se,se?.(g),Ve(),be(),h.innerHTML="";const me=e.items,T=e.folders,y=e.listSourceId,z=e.sequences;if(!me.length&&!T.length&&!z.length){const b=document.createElement("li");b.className="empty";const N=e.allItems.length>0,B=Re?sn(y)?.searchHint?.()??"":"";b.textContent=Re?B||"불러오는 중…":N?"이 종류의 파일이 없습니다. 위에서 「전체」를 눌러 보세요.":y==="session"?"아직 연 파일이 없습니다. [기기에서 파일 열기]를 눌러 Quest 저장소의 .ply를 고르세요.":y==="library"?"보관함이 비어 있습니다. 파일을 연 뒤 [보관]을 누르면 앱에 저장됩니다.":e.folder?"이 폴더에는 열 수 있는 파일이 없습니다.":"표시할 파일이 없습니다.",h.appendChild(b);return}const ee=e.view.kind==="video"||e.view.kind==="splat"?[]:z,le=ee.length>=2&&!e.sequencesExpanded;if(ee.length>=2){const b=document.createElement("li");b.className="row folder sequence group";const N=document.createElement("button");N.type="button",N.className="open",N.setAttribute("aria-expanded",String(!le)),N.innerHTML='<span class="kind k-seq">프레임</span><span class="name"></span><span class="meta"></span><span class="go"></span>',N.querySelector(".name").textContent=`프레임 시퀀스 ${ee.length}곳`,N.querySelector(".meta").textContent=le?"눌러서 펼치기":"눌러서 접기",N.querySelector(".go").textContent=le?"▸":"▾",N.addEventListener("click",()=>e.toggleSequences()),b.appendChild(N),h.appendChild(b)}for(const b of le?[]:ee){const N=document.createElement("li");N.className="row folder sequence";const B=document.createElement("button");B.type="button",B.className="open",B.innerHTML='<span class="kind k-seq">프레임</span><span class="name"></span><span class="meta"></span><span class="go">›</span>',B.querySelector(".name").textContent=b.name,B.querySelector(".name").title=b.path;const K=b.path.split("/").slice(0,-1).join("/");B.querySelector(".meta").textContent=[`${Nn(b.count)}장`,K,ru(b.mtime)].filter(Boolean).join(" · "),B.addEventListener("click",()=>e.openFolder(b.path)),N.appendChild(B),h.appendChild(N)}if(Ye.start>0){const b=document.createElement("li");b.className="more";const N=document.createElement("button");N.type="button",N.className="btn more-btn",N.textContent=`이전 보기 (위에 ${Nn(Ye.start)}개 더 있음)`,N.addEventListener("click",()=>{Ye={start:Math.max(0,Ye.start-Bn),end:Ye.end},_e()}),b.appendChild(N),h.appendChild(b)}for(const b of me.slice(Ye.start,Ye.end)){const N=document.createElement("li"),B=e.current?.id===b.id;N.className=`row${B?" current":""}`;const K=document.createElement("button");K.type="button",K.className="open",K.disabled=!e.canOpen(b),K.innerHTML=`<span class="kind k-${b.kind}"></span><span class="name"></span><span class="meta"></span><span class="go"></span>`,K.querySelector(".kind").textContent=_S[b.kind]??b.kind,K.querySelector(".go").textContent=e.canOpen(b)?vS[b.kind]??"열기":"",K.querySelector(".name").textContent=b.name,K.querySelector(".name").title=b.name;const re=[rs(b.name).toUpperCase(),bn(b.size??NaN),ru(b.mtime)].filter(Boolean);e.canOpen(b)||re.push("뷰어 준비 중"),K.querySelector(".meta").textContent=re.join(" · "),K.addEventListener("click",()=>{mS({kind:b.kind,enabled:de,supported:I,presenting:Xe})&&oe(),e.open(b,{playlist:e.items})}),N.appendChild(K);const J=document.createElement("div");if(J.className="row-actions",y==="library")J.appendChild(Ke("삭제",()=>r(b)));else{const ae=yS(b,y);if(ae){const xe=Ke(ae.text,()=>s(b));xe.classList.add("ghost"),xe.title=ae.title,J.appendChild(xe)}}J.childElementCount&&N.appendChild(J),h.appendChild(N)}if(me.length>Ye.end){const b=document.createElement("li");b.className="more";const N=document.createElement("button");N.type="button",N.className="btn more-btn";const B=me.length-Ye.end;N.textContent=`더 보기 (${Nn(Math.min(Bn,B))}개 · 남은 ${Nn(B)}개)`,N.addEventListener("click",()=>{Ye={start:Ye.start,end:Ye.end+Bn},_e()}),b.appendChild(N),h.appendChild(b)}}function Ke(se,me){const T=document.createElement("button");return T.type="button",T.className="btn small",T.textContent=se,T.addEventListener("click",async()=>{T.disabled=!0;try{await me()}finally{T.disabled=!1}}),T}Je("library:changed",({failed:se}={})=>{!se&&$&&F(""),_e()}),Je("item:loading",({item:se})=>{F(`불러오는 중… ${se.name}`),_e()}),Je("item:opened",({item:se})=>{G=se.kind,C=!1,q();const me=e.playlist.findIndex(y=>y.id===se.id),T=e.playlist.length>1?`${me+1}/${e.playlist.length} `:"";F(`${T}${se.name}`),D.classList.add("hidden"),_e()}),Je("item:error",({item:se,error:me})=>{W(`열지 못했습니다 (${se.name}): ${me?.message??me}`),_e()}),Je("item:closed",()=>{G=null,q(),F(""),D.classList.remove("hidden"),_e()}),Je("app:status",({text:se,kind:me})=>F(se,me)),Je("library:error",({error:se})=>W(`목록을 불러오지 못했습니다: ${se?.message??se}`));for(const se of Wy){const me=document.createElement("option");me.value=se.value,me.textContent=se.label,p.appendChild(me)}if(![...p.options].some(se=>se.value===o)){const se=document.createElement("option");se.value=o,se.textContent=c,p.appendChild(se)}p.value=o,p.addEventListener("change",()=>a(p.value));const we=l("#ui-layer");we.checked=zd(),we.addEventListener("change",()=>oS(we.checked));async function Fe(){const se=await xd();l("#storage").textContent=se?`앱 저장 공간: ${bn(se.usage)} 사용 / ${bn(se.quota)} 가능${se.persisted?" (자동 삭제 방지됨)":""}`:""}return l("#btn-settings").addEventListener("click",()=>{const se=l("#settings");se.hidden=!se.hidden,l("#btn-settings").setAttribute("aria-expanded",String(!se.hidden)),se.hidden||Fe()}),Je("library:stored",Fe),_e(),{stageEl:w,bindStage:Pe,setStatus:F,renderList:_e,setSourcePanel(se,me){_.set(se,me),_e()}}}const bS={default:"기본값",device:"이 기기에서 바꿈",pc:"PC에서 받아 옴"};function MS(n){if(!n)return"";try{return new Date(n).toLocaleString("ko-KR",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}}function ES({store:n=pn,sync:e=null,doc:t=document}={}){const i=t.createElement("dialog");i.className="bindings-dialog",i.setAttribute("aria-labelledby","bindings-title"),i.innerHTML=`
    <form method="dialog" class="bindings-form">
      <header class="bindings-head">
        <h2 id="bindings-title">컨트롤러 버튼 지정</h2>
        <button class="btn small" value="close" type="submit" aria-label="닫기">닫기</button>
      </header>
      <p class="muted bindings-intro">동작마다 쓸 버튼이나 스틱을 고르세요. 바꾸면 바로 저장되고 VR 조작과 안내 문구에 반영됩니다. 같은 버튼이라도 '짧게'와 '길게'는 따로 쓸 수 있습니다.</p>
      <p class="bindings-meta" data-role="meta"></p>
      <div class="bindings-sync" data-role="sync" hidden></div>
      <div class="bindings-warn" data-role="warn" role="alert" hidden></div>
      <div data-role="sections"></div>
      <footer class="bindings-foot">
        <button class="btn" type="button" data-role="reset-all">모두 기본값으로</button>
      </footer>
    </form>
  `,t.body.appendChild(i);const s=h=>i.querySelector(`[data-role="${h}"]`),r=new Map,o=s("sections");for(const h of Object.keys(cl)){const d=t.createElement("section");d.className="bindings-section";const f=t.createElement("h3");f.textContent=cl[h],d.appendChild(f);for(const g of us.filter(_=>_.scope===h)){const _=t.createElement("div");_.className="bindings-row";const m=t.createElement("label");m.className="bindings-label",m.htmlFor=`binding-${g.id}`,m.textContent=g.label,g.note&&(m.title=g.note);const p=t.createElement("select");p.id=`binding-${g.id}`,p.dataset.action=g.id;for(const v of Zv(g.kind,g)){const E=t.createElement("option");E.value=v.value,E.textContent=v.label,p.appendChild(E)}p.addEventListener("change",()=>{n.set(g.id,JSON.parse(p.value))});const S=t.createElement("button");S.type="button",S.className="btn small",S.textContent="기본",S.title=`기본값: ${Bs({[g.id]:g.default},g.id)}`,S.addEventListener("click",()=>n.reset(g.id));const x=t.createElement("p");x.className="bindings-row-warn",x.hidden=!0,_.append(m,p,S,x),d.appendChild(_),r.set(g.id,{select:p,reset:S,warn:x,row:_})}for(const g of Os.filter(_=>_.scope===h)){const _=t.createElement("div");_.className="bindings-row fixed",_.innerHTML='<span class="bindings-label"></span><span class="bindings-fixed"></span>',_.children[0].textContent=g.label,_.children[1].textContent=`${g.text} (고정)`,d.appendChild(_)}o.appendChild(d)}s("reset-all").addEventListener("click",()=>n.reset());function a(){const h=n.get(),d=n.meta(),f=ks(h),g=new Map;for(const m of f)for(const[p,S]of[[m.a,m.b],[m.b,m.a]])g.has(p)||g.set(p,[]),g.get(p).push(S);for(const[m,{select:p,reset:S,warn:x,row:v}]of r){p.value=JSON.stringify(h[m]??null),S.disabled=Ul(h[m]??null,ti(m).default);const E=g.get(m)??[];v.classList.toggle("conflict",E.length>0),x.hidden=E.length===0,x.textContent=E.length?`⚠ ${E.map(R=>ti(R)?.label??c(R)).join(", ")}과(와) 같은 입력`:""}const _=s("warn");_.hidden=f.length===0,_.textContent=f.length?`⚠ 같은 입력에 동작이 두 개 걸린 곳이 ${f.length}곳 있습니다. 둘 다 동작하니 하나를 바꾸세요: ${f.map(m=>`${m.input} → ${l(m.a)} / ${l(m.b)}`).join(" · ")}`:"",s("meta").textContent=`지금 배정: ${bS[d.source]??d.source}${d.updatedAt?` (${MS(d.updatedAt)})`:""}`,u()}const c=h=>Os.find(d=>d.id===h)?.label??h,l=h=>ti(h)?.label??c(h);function u(){const h=s("sync");if(!e){h.hidden=!0;return}const d=e.status();h.hidden=!1,h.replaceChildren();const f=t.createElement("p");if(f.className="muted",f.textContent=d.text,h.appendChild(f),e.notice){const S=t.createElement("p");S.className="bindings-warn",S.dataset.role="sync-notice",S.setAttribute("role","alert"),S.textContent=`⚠ ${e.notice}`,h.appendChild(S)}if(!d.connected)return;const g=t.createElement("button");g.type="button",g.className="btn small",g.textContent="PC 배정 불러오기";const _=t.createElement("button");_.type="button",_.className="btn small",_.textContent="이 배정을 PC로 보내기";const m=t.createElement("span");m.className="muted",m.setAttribute("aria-live","polite");const p=S=>async()=>{g.disabled=_.disabled=!0;try{m.textContent=await S()}catch(x){m.textContent=`실패: ${x?.message??x}`}finally{g.disabled=_.disabled=!1}};g.addEventListener("click",p(e.pull)),_.addEventListener("click",p(e.push)),h.append(g,_,m)}return n.subscribe(()=>{i.open&&a()}),e?.subscribe?.(()=>{i.open&&u()}),{dialog:i,open(){a(),typeof i.showModal=="function"?i.showModal():i.setAttribute("open","")},close(){i.close?.()},render:a}}const TS=400;function Cr(n){if(!n)return"없음";try{return new Date(n).toLocaleString("ko-KR",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return String(n)}}function wS({store:n,connection:e,fetch:t=(...o)=>globalThis.fetch(...o),setTimeout:i=(...o)=>globalThis.setTimeout(...o),clearTimeout:s=(...o)=>globalThis.clearTimeout(...o),onDiscard:r=()=>{}}){let o={state:"unknown",updatedAt:0,error:""},a=null,c=null,l="",u="";const h=new Set,d=()=>{for(const x of[...h])try{x()}catch{}},f=()=>e.state?.status==="connected"?e.state.base:null;async function g(x,v){const E=f();if(!E)throw new Error("PC에 연결되어 있지 않습니다");const R=eo(E,{method:x,cache:"no-store",...v?{headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}:{}}),P=await t(`${E}/api/bindings`,R);if(P.status===404)throw o={state:"unsupported",updatedAt:0,error:""},new Error("PC 서버가 버튼 지정을 모릅니다(PC 서버를 새 버전으로 바꿔 주세요)");const k=await P.json().catch(()=>({}));return{status:P.status,data:k}}function _(x){o={state:"ok",updatedAt:Number(x.updatedAt)||0,error:""},n.replace(x.bindings??{},{source:"pc",updatedAt:o.updatedAt||Date.now(),version:Number(x.version)||1})}async function m(x=!1){const v=n.meta(),{status:E,data:R}=await g("PUT",{version:Ls,bindings:n.overrides(),updatedAt:v.updatedAt||Date.now(),force:x});if(E===409&&R.current){const P=v.source!=="pc";if(_(R.current),P){u=`PC에서 더 최근에 바꾼 배정이 있어, 이 기기에서 바꾼 배정(${Cr(v.updatedAt)})은 버리고 PC 배정(${Cr(o.updatedAt)})으로 바꿨습니다. 이 기기 배정을 쓰려면 다시 바꾼 뒤 [이 배정을 PC로 보내기]를 누르세요.`;try{r(u)}catch{}d()}return"PC 배정이 더 최근이라 그것을 받아 왔습니다"}if(E===200&&x&&(u=""),E!==200)throw new Error(R.error||`HTTP ${E}`);return o={state:"ok",updatedAt:Number(R.updatedAt)||v.updatedAt,error:""},d(),"PC로 보냈습니다"}async function p(){const{status:x,data:v}=await g("GET");if(x!==200)throw new Error(v.error||`HTTP ${x}`);return Number(v.updatedAt)?(_(v),"PC 배정을 받아 왔습니다"):(o={state:"ok",updatedAt:0,error:""},d(),"PC에 저장된 배정이 없습니다(이 기기 배정을 그대로 둡니다)")}async function S(){try{const{status:x,data:v}=await g("GET");if(x!==200)throw new Error(v.error||`HTTP ${x}`);const E=Number(v.updatedAt)||0,R=n.meta().updatedAt||0;o={state:"ok",updatedAt:E,error:""},E>R?_(v):R>E&&await m(!1),l=E>R?"PC 배정이 더 최근이라 받아 왔습니다":R>E?"이 기기 배정이 더 최근이라 PC로 보냈습니다":"PC와 같습니다"}catch(x){o.state!=="unsupported"&&(o={state:"error",updatedAt:0,error:x?.message??String(x)}),l=""}d()}return e.subscribe?.(x=>{const v=x?.status==="connected"?x.base:null;v&&v!==a?(a=v,S()):!v&&a&&(a=null,o={state:"unknown",updatedAt:0,error:""},d())}),n.subscribe((x,v)=>{v.source!=="pc"&&(u="",!(!f()||o.state==="unsupported")&&(c&&s(c),c=i(()=>{c=null,m(!1).then(E=>{l=E,d()}).catch(E=>{l=`PC로 보내지 못함: ${E?.message??E}`,d()})},TS)))}),{reconcile:S,pull:p,push:()=>m(!0),get notice(){return u},status(){if(!f())return{connected:!1,text:"PC에 연결되어 있지 않습니다. [PC] 탭에서 연결하면 PC 배정과 자동으로 맞춥니다(나중에 바꾼 쪽이 이깁니다)."};if(o.state==="unsupported")return{connected:!1,text:"연결된 PC 서버가 옛 버전이라 버튼 지정을 모릅니다. PC 프로젝트 폴더에서 update_quest_pc_server.bat를 더블클릭하고, 열려 있는 서버 창을 닫은 뒤 run_quest_pc_server.bat를 다시 실행하세요."};if(o.state==="error")return{connected:!0,text:`PC 배정을 읽지 못했습니다: ${o.error}`};const v=n.meta().updatedAt;return{connected:!0,text:`PC 연결됨 · PC 배정 ${Cr(o.updatedAt)} · 이 기기 ${Cr(v)} · 규칙: 나중에 바꾼 쪽이 이깁니다${l?` · ${l}`:""}`}},subscribe(x){return h.add(x),()=>h.delete(x)}}}const Cu="gdrive-panel-style",AS=`
.gd-panel{display:grid;gap:12px;padding:16px;border-radius:12px;background:rgba(255,255,255,.06);font:16px/1.5 system-ui,sans-serif}
.gd-panel__status{font-weight:600}
.gd-panel__hint{opacity:.75;font-size:14px;margin:0}
.gd-panel__error{color:#ff8a80;margin:0}
.gd-panel ol,.gd-panel ul{margin:0;padding-left:1.2em}
.gd-panel li{margin:4px 0}
.gd-panel button{min-height:44px;padding:0 18px;border-radius:10px;border:0;font:inherit;font-weight:600;cursor:pointer}
.gd-panel__row{display:flex;gap:8px;align-items:center;justify-content:space-between}
.gd-panel__row button{min-height:36px;padding:0 12px;font-weight:500}
`;function _t(n,e={},...t){const i=document.createElement(n);return Object.assign(i,e),i.append(...t),i}function RS({source:n,onChange:e,setupGuideUrl:t}){document.getElementById(Cu)||document.head.append(_t("style",{id:Cu,textContent:AS}));const i=_t("div",{className:"gd-panel__status"}),s=_t("p",{className:"gd-panel__hint"}),r=_t("p",{className:"gd-panel__error"}),o=_t("div"),a=_t("section",{className:"gd-panel"},i,o,s,r);a.setAttribute("aria-live","polite");function c(d,f=!1){s.textContent=f?"":d,r.textContent=f?d:""}function l(d){c(d instanceof nn?d.message:`문제가 생겼습니다: ${d?.message??d}`,!0)}async function u(){c("");try{const d=await n.pick();if(!d)return;const f=[`${d.added.length}개를 목록에 추가했습니다.`];d.skipped.length&&f.push(`지원하지 않는 형식이라 뺀 파일: ${d.skipped.join(", ")}`),c(f.join(" ")),e?.()}catch(d){l(d)}}async function h(){if(o.replaceChildren(),!n.isConfigured()){i.textContent="구글 드라이브 연결은 아직 켜지지 않았습니다",o.append(_t("p",{className:"gd-panel__hint",textContent:"고장이 아닙니다. 이 기능은 한 번만 설정하면 켜집니다. 그전에는 아래 방법으로 드라이브 파일을 열 수 있습니다."}),_t("ol",{},_t("li",{textContent:"Quest 브라우저에서 drive.google.com을 열고 파일을 내려받습니다(Download 폴더에 저장됩니다)."}),_t("li",{textContent:"이 앱의 [기기에서 파일 열기]로 내려받은 파일을 고릅니다."}))),o.append(_t("p",{className:"gd-panel__hint"},"나중에 직접 연결하려면: ",_t("a",{href:t,target:"_blank",rel:"noopener",textContent:"구글 드라이브 설정 안내"})));return}const{items:d}=await n.list();i.textContent=n.state.signedIn?"구글 드라이브: 로그인됨":"구글 드라이브: 로그인 필요",o.append(_t("button",{type:"button",textContent:d.length?"파일 더 고르기":"드라이브에서 파일 고르기",onclick:u})),d.length?o.append(_t("ul",{},...d.map(f=>_t("li",{},_t("div",{className:"gd-panel__row"},_t("span",{textContent:f.name}),_t("button",{type:"button",textContent:"목록에서 빼기",onclick:()=>{n.remove(f.path),e?.()}})))))):o.append(_t("p",{className:"gd-panel__hint",textContent:"고른 파일만 앱이 볼 수 있습니다. 폴더 전체나 다른 파일은 접근하지 않습니다."})),n.state.signedIn&&o.append(_t("button",{type:"button",textContent:"로그아웃(접근 해제)",onclick:()=>{n.signOut(),c("로그아웃했습니다.")}}))}return n.subscribe(()=>{h().catch(l)}),h().catch(l),{element:a,render:h}}function CS({library:n,slideshow:e}){const t=document.createElement("div");t.className="navbar",t.hidden=!0,t.setAttribute("role","toolbar"),t.setAttribute("aria-label","이전·다음·슬라이드쇼"),t.innerHTML=`
    <button class="btn small" type="button" data-act="prev" aria-label="이전 파일">◀ 이전</button>
    <span class="navpos" data-role="pos" aria-live="polite"></span>
    <button class="btn small" type="button" data-act="show" aria-pressed="false">▶ 슬라이드쇼</button>
    <label class="navint"><span class="sr-only">슬라이드쇼 간격</span><select data-role="interval" aria-label="슬라이드쇼 간격"></select></label>
    <button class="btn small" type="button" data-act="next" aria-label="다음 파일">다음 ▶</button>
  `;const i=u=>t.querySelector(u),s=i('[data-act="prev"]'),r=i('[data-act="next"]'),o=i('[data-act="show"]'),a=i('[data-role="interval"]'),c=i('[data-role="pos"]');for(const u of ji){const h=document.createElement("option");h.value=String(u),h.textContent=`${u}초`,a.appendChild(h)}s.addEventListener("click",()=>n.prev()),r.addEventListener("click",()=>n.next()),o.addEventListener("click",()=>e.toggle()),a.addEventListener("change",()=>e.setInterval(Number(a.value)));function l(){const u=n.current;if(t.hidden=!u,!u)return;const h=n.playlist,d=h.findIndex(g=>g.id===u.id);c.textContent=d>=0&&h.length>1?`${d+1} / ${h.length}`:"";const f=h.length>1;s.disabled=!f,r.disabled=!f,o.disabled=!f&&!e.running,o.textContent=e.running?"⏸ 슬라이드쇼 멈춤":"▶ 슬라이드쇼",o.setAttribute("aria-pressed",String(e.running)),a.value=String(e.interval)}for(const u of["library:changed","item:loading","item:opened","item:error","item:closed","slideshow:changed"])Je(u,l);return l(),{element:t,render:l}}const Pu="pc-panel-style",PS=`
.pc-panel{display:grid;gap:12px;padding:16px;border-radius:12px;background:rgba(255,255,255,.06);font:16px/1.5 system-ui,sans-serif}
.pc-panel__status{display:flex;align-items:center;gap:10px;font-weight:600}
.pc-panel__dot{width:12px;height:12px;border-radius:50%;background:#888;flex:none}
.pc-panel[data-status=connected] .pc-panel__dot{background:#3ecf6a}
.pc-panel[data-status=connecting] .pc-panel__dot{background:#f0b840;animation:pc-pulse 1s infinite}
.pc-panel[data-status=failed] .pc-panel__dot{background:#ef5350}
.pc-panel__guide{margin:0;padding-left:1.2em}
.pc-panel__guide li{margin:4px 0}
.pc-panel__hint{opacity:.75;font-size:14px;margin:0}
.pc-panel__warn{opacity:1;color:#ffb74d}
.pc-panel button{min-height:44px;padding:0 18px;border-radius:10px;border:0;font:inherit;font-weight:600;cursor:pointer}
.pc-panel details{font-size:14px}
.pc-panel input{min-height:40px;padding:0 10px;border-radius:8px;border:1px solid #666;font:inherit;width:min(100%,18em)}
.pc-panel>div:empty{display:none}
.pc-panel.compact{gap:6px;padding:8px 10px}
.pc-panel.compact .pc-panel__status{min-width:0;font-size:15px;line-height:1.3}
.pc-panel.compact .pc-panel__status span:last-child{overflow-wrap:anywhere}
.pc-panel.compact button{min-height:44px;padding:0 12px;font-size:16px}
@keyframes pc-pulse{50%{opacity:.35}}
`;function vt(n,e={},...t){const i=document.createElement(n);return Object.assign(i,e),i.append(...t),i}function LS({source:n,onConnected:e}){document.getElementById(Pu)||document.head.append(vt("style",{id:Pu,textContent:PS}));const t=n.connection,i=vt("span",{className:"pc-panel__dot"}),s=vt("span"),r=vt("div"),o=vt("button",{type:"button",textContent:"PC에 연결"}),a=vt("button",{type:"button",textContent:"더 찾아보기"});a.hidden=!0;const c=vt("input",{type:"text",placeholder:"예: 192.168.0.23 (보통 필요 없음)",inputMode:"url"});c.value=t.getManualBase()??"";const l=vt("button",{type:"button",textContent:"저장"}),u=vt("p",{className:"pc-panel__hint"}),h=vt("details",{},vt("summary",{textContent:"고급: 주소 직접 입력"}),vt("p",{className:"pc-panel__hint",textContent:"자동 연결이 안 될 때만 쓰는 비상용입니다. 비우고 저장하면 지웁니다."}),c," ",l,u),d=vt("section",{className:"pc-panel"},vt("div",{className:"pc-panel__status"},i,s),r,o,a,h);d.setAttribute("aria-live","polite");function f(m){if(d.dataset.status=m.status,d.classList.toggle("compact",m.status==="connected"),h.hidden=m.status==="connected",r.replaceChildren(),o.hidden=m.status==="connecting",a.hidden=!(m.status==="failed"&&m.moreAvailable),m.status==="connected"){const p=m.info?.host?`${m.info.host} (${new URL(m.base).hostname})`:m.base;s.textContent=`PC 연결됨: ${p}`,o.textContent="다시 연결";const S=Fy(m);S&&r.append(vt("p",{className:"pc-panel__hint",textContent:S}));const x=Ry(m);x&&r.append(vt("p",{className:"pc-panel__hint pc-panel__warn",textContent:x}))}else if(m.status==="connecting")s.textContent=m.progress?`PC를 찾는 중입니다… ${m.progress}`:"PC를 찾는 중입니다…",r.append(vt("p",{className:"pc-panel__hint",textContent:"처음 한 번만 30초쯤 걸립니다. 다음부터는 바로 연결됩니다. 브라우저가 '로컬 네트워크 기기 찾기' 권한을 물으면 허용을 누르세요. PC 서버가 꺼져 있으면 몇 분 뒤 실패 안내가 나옵니다. 급하면 아래 '고급: 주소 직접 입력'을 열어 PC 주소를 넣어 볼 수 있습니다."}));else if(m.status==="failed"){const{title:p,steps:S}=Ny(m);if(s.textContent=p,o.textContent="다시 찾기",r.append(vt("ol",{className:"pc-panel__guide"},...S.map(x=>vt("li",{textContent:x})))),m.attempts.length){const x=m.attempts.map(v=>`${v.base} (${v.error})`).join(", ");r.append(vt("p",{className:"pc-panel__hint",textContent:`시도한 주소: ${x}`}))}}else s.textContent="PC에 연결되지 않았습니다",o.textContent="PC에 연결"}let g=!1;async function _(){const m=await t.connect();return f(m),m.status==="connected"&&!g?(g=!0,e?.()):m.status!=="connected"&&(g=!1),m}return t.subscribe(f),o.addEventListener("click",_),a.addEventListener("click",async()=>{const m=await t.scanMore();f(m),m.status==="connected"&&!g&&(g=!0,e?.())}),l.addEventListener("click",()=>{const m=t.setManualBase(c.value);u.textContent=m?"저장했습니다. [다시 연결]을 누르세요.":"주소 형식이 올바르지 않습니다."}),f(t.state),{element:d,connect:_,async activate(){if(t.state.status==="connected"||t.state.status==="connecting")return;(await Ld()==="granted"||t.hasLastBase())&&await _()}}}const Lu=n=>Math.atan2(Math.sin(n),Math.cos(n));function ia(n){return n.parent?.updateMatrixWorld?.(!0),n.parent??null}function sa(n){return Math.atan2(-n.x,-n.z)}const DS=3;function IS({emit:n=xt}={}){let e=!0,t=!1,i=null,s=0;const r=new O,o=new O;function a(c){c.updateMatrixWorld(!0);const l=ia(c);c.getWorldPosition(o),c.getWorldDirection(r),r.y=0,r.lengthSq()<1e-4&&r.set(0,0,-1),r.normalize();const u=o.clone();return l&&(l.worldToLocal(u),r.transformDirection(l.matrixWorld.clone().invert()),r.y=0,r.lengthSq()<1e-4&&r.set(0,0,-1),r.normalize()),{x:u.x,y:u.y,z:u.z,yaw:sa(r)}}return{get visible(){return e},setVisible(c){return c=!!c,c===e||(e=c,n("ui:visibility",{visible:e})),e},toggle(){return this.setVisible(!e)},get panelOpen(){return t},setPanelOpen(c){t=!!c},gaze(c){const l=a(c),u=ia(c),h=new O(l.x,l.y,l.z);let d=l.yaw;return u&&(u.localToWorld(h),d=sa(new O(-Math.sin(l.yaw),0,-Math.cos(l.yaw)).transformDirection(u.matrixWorld))),{head:h,yaw:Lu(d)}},get hasAnchor(){return i!==null},get anchor(){return i?{...i}:null},resetForSession(){i=null,s=0,t=!1,this.setVisible(!0)},tick(c,l){if(!l){s=0;return}s+=1,!i&&s>=DS&&(i=a(c),n("ui:anchor",{reason:"session"}))},reference(c){const l=i??a(c),u=ia(c),h=new O(l.x,l.y,l.z);let d=l.yaw;if(u){u.localToWorld(h);const f=new O(-Math.sin(l.yaw),0,-Math.cos(l.yaw)).transformDirection(u.matrixWorld);d=sa(f)}return{head:h,yaw:Lu(d)}},relocate(c){i=a(c),n("ui:anchor",{reason:"relocate"}),this.setVisible(!0)}}}const St=IS();function US(n,e,t,{sizes:i=[28,26,24,22],maxLines:s=2,maxHeight:r=1/0,lineGap:o=1.2}={}){const a=String(e).split(`
`),c=(f,g)=>g*f*o<=r,l=(f,g)=>f.every(_=>n(_,g)<=t);if(a.length<=s){for(const f of i)if(c(f,a.length)&&l(a,f))return{size:f,lines:a,truncated:!1}}if(a.length===1&&s>=2)for(const f of i){if(!c(f,2))continue;const g=Du(_=>n(_,f),a[0],t,s);if(!g.truncated)return{size:f,lines:g.lines,truncated:!1}}const u=[...i].reverse().find(f=>c(f,Math.min(s,a.length)))??i[i.length-1],h=a.length>1?a.slice(0,s):[a[0]];if(h.length>1)return{size:u,lines:h.map(f=>Xd(g=>n(g,u),f,t)),truncated:h.some(f=>n(f,u)>t)};const d=Du(f=>n(f,u),h[0],t,s);return{size:u,lines:d.lines,truncated:d.truncated}}function Xd(n,e,t){if(n(e)<=t)return e;let i=e;for(;i.length>1&&n(`${i}…`)>t;)i=i.slice(0,-1);return`${i}…`}function Du(n,e,t,i){const s=[];let r="";for(const o of e)if(r&&n(r+o)>t){if(s.length===i-1)return{lines:[...s,Xd(n,`${r}${o}`,t)],truncated:!0};s.push(r),r=o===" "?"":o}else r+=o;return r&&s.push(r),{lines:s,truncated:!1}}function On(n,e,t,i,s,{weight:r=500,family:o,sizes:a,maxLines:c,maxHeight:l,lineGap:u=1.2,align:h="center",x:d}={}){const f=US((m,p)=>(n.font=`${r} ${p}px ${o}`,n.measureText(m).width),e,s,{sizes:a,maxLines:c,maxHeight:l,lineGap:u});n.font=`${r} ${f.size}px ${o}`,n.textAlign=h,n.textBaseline="middle";const g=f.size*u,_=i-(f.lines.length-1)*g/2;return f.lines.forEach((m,p)=>n.fillText(m,h==="left"?d??t:t,_+p*g+1)),f}const Iu=.6,NS=.7,Uu=.3,qd=["trigger","grip","primary","secondary","stick"];function Yd(n,e){return n?e==="trigger"?(n.trigger??0)>Iu:e==="grip"?(n.grip??0)>Iu:!!n[e]:!1}function FS(n){for(const e of["left","right"]){const t=n?.[e];if(t&&(qd.some(i=>Yd(t,i))||Math.abs(t.x??0)>Uu||Math.abs(t.y??0)>Uu))return!1}return!0}function Nu({kind:n,either:e=!1,holdMs:t=Nl,now:i=()=>performance.now()}){let s=null,r;return{get done(){return r!==void 0},get value(){return r},get pending(){return s?{...s}:null},update(o,a={}){if(r!==void 0||!o?.presenting)return r;const c=i();if(n==="button"){if(s)return Yd(o[s.hand],s.button)?c-s.since>=t&&(r={hand:e?"either":s.hand,button:s.button,mode:"hold"}):r={hand:e?"either":s.hand,button:s.button,mode:"press"},r;for(const u of["left","right"]){const h=o[u];if(h){for(const d of qd)if(h[`${d}Pressed`]&&!(d==="trigger"&&a[u]))return s={hand:u,button:d,since:c||1},r}}return r}let l=null;for(const u of["left","right"]){const h=o[u],d=Math.abs(h?.x??0),f=Math.abs(h?.y??0),g=Math.max(d,f);g>NS&&(!l||g>l.m)&&(l={side:u,m:g,axis:d>f?"x":"y"})}return l&&(r=n==="axis"?{hand:l.side,axis:l.axis}:{hand:l.side}),r}}}const OS=1e4,kS=["common","media","splat"],BS={button:"지정할 버튼을 누르세요 (0.8초 넘게 누르면 '길게'). 트리거는 패널 밖을 가리키고 당기세요.",axis:"쓸 스틱을 원하는 방향(좌우·상하)으로 끝까지 미세요.",stick:"쓸 스틱을 아무 방향으로 끝까지 미세요."},zS="줄을 누른 뒤 지정할 버튼·스틱을 누르세요 · 취소는 [취소]";function HS({store:n=pn,now:e=()=>performance.now(),onChange:t=()=>{}}={}){let i="common",s=null,r=null,o=!1,a=null,c=!1,l="";const u=()=>t(),h=m=>ti(m)?.label??Os.find(p=>p.id===m)?.label??m;function d(m){const p=ti(m);if(!p)return;s=m;const S=n.get()[m];o=p.kind==="button"&&S?.hand==="either",r=Nu({kind:p.kind,either:o,now:e}),l=`「${p.label}」 ${BS[p.kind]}`,u()}function f(m="지정을 취소했습니다."){s&&(s=null,r=null,c=!0,l=m,u())}function g(m,p){const S=ti(m),x=p===null?null:Il(S.kind,p);if(x===void 0)return;if(!uo(S,x))return l=x===null?`「${S.label}」은(는) 비워 둘 수 없습니다(메뉴로 돌아오는 길).`:`「${S.label}」은(는) ${kn(S.kind,x)}에 둘 수 없습니다(패널 선택과 겹칩니다). 다른 버튼을 누르세요.`,u(),!1;const v=n.get()[m];n.set(m,x);const E=n.get(),R=ks(E).filter(P=>P.a===m||P.b===m).map(P=>h(P.a===m?P.b:P.a));return l=`「${S.label}」 → ${kn(S.kind,x)}${R.length?` · ⚠ ${R.join(", ")}과(와) 같은 입력입니다(둘 다 동작). 하나를 바꾸세요.`:""}`,m==="common.uiToggle"&&!_(v,x)&&(a={previous:v,value:x,deadline:e()+OS},l=`UI 켜기·끄기를 ${kn("button",x)}(으)로 바꿨습니다. 10초 안에 그 버튼을 한 번 눌러 확인하세요. 확인하지 않으면 ${kn("button",v)}(으)로 되돌립니다.`),u(),!0}const _=(m,p)=>JSON.stringify(m??null)===JSON.stringify(p??null);return{get inputBlocked(){return!!s||!!a||c},get capturing(){return s},get confirming(){return a?{...a,remainingMs:Math.max(0,a.deadline-e())}:null},get scope(){return i},get message(){if(a){const m=Math.ceil(Math.max(0,a.deadline-e())/1e3);return`새 UI 켜기·끄기 버튼(${kn("button",a.value)})을 한 번 눌러 확인하세요 · ${m}초 뒤 되돌림`}return l},begin:d,cancel:f,assign:g,leave(){s&&f("")},tick(m,p={}){if(!m?.presenting){s&&f("");return}if(s&&r){const S=r.update(m,p);if(S!==void 0){const x=s;if(s=null,r=null,c=!0,g(x,S)===!1){const v=l;d(x),l=v}}}if(a)if(!c&&ul(m,a.value))a=null,c=!0,l="확인했습니다. 이제 이 버튼이 UI 켜기·끄기입니다.",u();else if(e()>=a.deadline){const S=a.previous;a=null,n.set("common.uiToggle",S),l=`확인하지 않아 UI 켜기·끄기를 ${kn("button",S)}(으)로 되돌렸습니다.`,u()}else u();c&&!s&&FS(m)&&(c=!1,u())},layout({W:m,margin:p,top:S,bottom:x,gap:v=14}){const E=[],R=n.get(),P=new Set(ks(R).flatMap(I=>[I.a,I.b])),k=m-p*2,A=(k-v*2)/3;kS.forEach((I,G)=>{E.push({x:p+G*(A+v),y:S,w:A,h:60,align:"center",label:cl[I],on:i===I,enabled:!s,run:()=>{i=I,u()}})});const w=66,D=74;let $=S+76;for(const I of us.filter(G=>G.scope===i)){const G=s===I.id,C=P.has(I.id);E.push({x:p,y:$,w:k,h:w,label:I.label,side:G?"누르세요…":`${C?"⚠ ":""}${Bs(R,I.id)}`,current:G,enabled:!s||G,run:()=>G?f():d(I.id)}),$+=D}for(const I of Os.filter(G=>G.scope===i))E.push({x:p,y:$,w:k,h:w-8,label:I.label,side:`${I.text} (고정)`,enabled:!1}),$+=D-8;const F=this.message;F&&E.push({x:p,y:x-70-16-132,w:k,h:132,align:"center",label:F,enabled:!1,note:!0});const W=s?[{label:"취소",run:()=>f()},{label:"이 줄 기본값",run:()=>{const I=s;f(""),n.reset(I),l=`「${h(I)}」을(를) 기본값(${Bs(n.get(),I)})으로 되돌렸습니다.`,u()}},...ti(s).required?[]:[{label:"지정 안 함",run:()=>{const I=s;f(""),g(I,null)}}],...ti(s).kind==="button"?[{label:o?"양손: 켬":"양손: 끔",on:o,run:()=>{o=!o,r=Nu({kind:"button",either:o,now:e}),u()}}]:[]]:[{label:"모두 기본값",run:()=>{n.reset(),a=null,l="모든 버튼을 기본값으로 되돌렸습니다(UI 켜기·끄기 = B/Y).",u()}}],te=Math.min(240,(k-v*(W.length-1))/W.length);return W.forEach((I,G)=>{E.push({x:p+G*(te+v),y:x-70,w:te,h:64,align:"center",enabled:!0,...I})}),E}}}const tn=1024,Xi=960,gl=1.2,Fu=gl*(Xi/tn),Ou=1.25,Nt=40,VS=64,GS=72,ra=72,ku=4,Pr=2,WS=84,oa=64,Lr=316,aa=16,la=56,Bu=64,zu=56,Hu=62,$S=20,ca=52,Vu=70,Gu=78,XS=140,qS=.6,YS=[[2500,20],[1200,5],[0,1]],jS="바꾼 설정은 메뉴를 닫으면 적용됩니다 (메뉴가 열린 동안 PLY는 멈춤)",Wt="system-ui, 'Noto Sans KR', sans-serif",ht={bg:"rgba(17, 22, 26, 0.94)",line:"#2e3a42",text:"#e8eef2",muted:"#9aaab4",accent:"#4fb3ff",button:"#173245",hover:"#24648f",current:"#1f4f3a",disabled:"#2a3238",folder:"#1b3b4d"},Wu={dir:{label:"폴더",bg:"#234154",fg:"#9fd4ff"},seq:{label:"프레임",bg:"#43304a",fg:"#f0b4e8"},splat:{label:"PLY",bg:"#3a3157",fg:"#cbb8ff"},video:{label:"영상",bg:"#2d4a3d",fg:"#9fe3bd"},image:{label:"사진",bg:"#4a3f2a",fg:"#f0d28a"}};function KS({stage:n,library:e,getActions:t=()=>[],slideshow:i=null}){const s=document.createElement("canvas");s.width=tn,s.height=Xi;const r=s.getContext("2d"),o=new $s(s);o.colorSpace=yt,o.anisotropy=Math.min(8,n.renderer.capabilities?.getMaxAnisotropy?.()??1);const a=new Xt(new ui(gl,Fu),new li({map:o,transparent:!0,depthTest:!1,toneMapped:!1}));a.renderOrder=999,a.visible=!1,n.scene.add(a);const c=new Vd({stage:n,canvas:s,mesh:a,widthM:gl,heightM:Fu,name:"panel"}),l={left:de(),right:de()},u=new Ll,h=new lt;new O,new O;let d=[];const f={left:null,right:null};let g=!1,_=0;const m=4;let p="list";const S=HS({onChange:()=>{v=!0}});let x="",v=!0,E=0,R=!0,P=5,k=0,A="",w=0,D=0;const $=Dd({listSources:fl,getSource:sn,onChange:()=>v=!0});let F=0,W=8,te=0,I="",G="",C={LIST_X:Nt+Lr+aa,LIST_W:600};const X={left:null,right:null};let q="",oe=!1;function de(){const b=new Pl(new Yt().setFromPoints([new O(0,0,0),new O(0,0,-1)]),new lo({color:5223423}));return b.visible=!1,b.scale.z=2,b}function Ee(){for(const b of["left","right"]){const N=n.controllers[b],B=l[b];N&&B.parent!==N&&N.add(B)}}const ye=()=>g&&St.visible;let Pe=!1;function Y(){const b=ye();b!==Pe&&(Pe=b,xt("list:solo",{on:b}))}function j(){const b=ye();a.visible=b;for(const N of Object.values(l))N.visible=b;b&&(f.left=null,f.right=null,v=!0),Y()}function ge(b){const N=g!==b;g=b,St.setPanelOpen(g),g&&(Re(St.gaze(n.camera)),p="list",R=!0,v=!0),j(),N&&e.activeViewer?.onPanelToggle?.(g)}function Re({head:b,yaw:N}){a.scale.setScalar(1),a.rotation.set(0,N,0),a.position.set(b.x-Math.sin(N)*Ou,b.y,b.z-Math.cos(N)*Ou)}let be=null;function Ve(b){if(!ye()){g&&ge(!1);return}ge(!1),St.relocate(n.camera),xt("list:picked",{item:b})}function Ye(){const b=e.view.kind,N=b==="video"||b==="splat"?[]:e.sequences,B=N.length>=2?[{type:"seqgroup",count:N.length}]:[],K=N.length>=2&&!e.sequencesExpanded?[]:N;return[...B,...K.map(re=>({type:"seq",sequence:re})),...e.items.map(re=>({type:"item",item:re}))]}const L=()=>Math.max(0,k-P),Xe=()=>{E=Math.max(0,Math.min(E,L()))};function De(b){const N=E;E+=b,Xe(),E!==N&&(v=!0)}const Ie=()=>Math.max(0,te-W),_e=()=>{F=Math.max(0,Math.min(F,Ie()))};function Ke(b){const N=F;F+=b,_e(),F!==N&&(v=!0)}function we(b){return b.kind==="source"?e.setListSource(b.sourceId):e.openFolder(b.path,b.sourceId)}function Fe(b){const N=E;E=b,Xe(),E!==N&&(v=!0)}function se(){const b=Ye();k=b.length;const N=e.current,B=e.view;d=[];const K=e.activeViewer?.panelOptions?.()??[];!K.length&&p==="options"&&(p="list");const re=16,J=Xi-24-ra,ae=(tn-Nt*2-re*(ku-1))/ku,xe=e.playlist.length>1,ne=[{label:"◀ 이전",run:()=>e.prev(),enabled:xe},{label:"다음 ▶",run:()=>e.next(),enabled:xe},...i?[{label:i.running?"슬라이드쇼 ■":"슬라이드쇼 ▶",run:()=>i.toggle(),enabled:xe||i.running,on:i.running}]:[],p==="list"?{label:"더 보기 ▸",run:()=>p="more",enabled:!0}:p==="bindings"?{label:"◂ 더 보기",run:()=>{S.leave(),p="more"},enabled:!0}:{label:"◂ 목록",run:()=>p="list",enabled:!0}];function he(){ne.forEach((ke,ut)=>{d.push({x:Nt+ut*(ae+re),y:J,w:ae,h:ra,align:"center",...ke})}),d.push({x:tn-Nt-oa,y:18,w:oa,h:56,label:"✕",run:()=>"close",enabled:!0,align:"center",close:!0})}if(p==="more"){const ke=(tn-Nt*2-re*(Pr-1))/Pr;return[...i?[{label:`슬라이드쇼 간격: ${i.interval}초`,run:()=>i.cycleInterval(),enabled:!0}]:[],{label:"UI를 여기로 옮기기",run:()=>me(),enabled:!0},{label:"컨트롤러 버튼 지정 ▸",run:()=>p="bindings",enabled:!0},{label:"위치 초기화",run:()=>e.activeViewer?.resetView?e.activeViewer.resetView():n.resetPlayer(),enabled:!0},...t().map(Lt=>({label:Lt.label,run:Lt.run,enabled:!0})),...K.length?[{label:"PLY 옵션 ▸",run:()=>p="options",enabled:!0}]:[],{label:"VR 종료",run:()=>n.exitVR(),enabled:!0}].forEach((Lt,gn)=>{d.push({x:Nt+gn%Pr*(ke+re),y:124+Math.floor(gn/Pr)*WS,w:ke,h:ra,align:"center",...Lt})}),k=0,he(),{listTop:124,actionsTop:J}}if(p==="bindings")return d.push(...S.layout({W:tn,margin:Nt,top:124,bottom:J-8})),k=0,he(),{listTop:124,actionsTop:J};if(p==="options"){const ke=GS+8;return K.forEach((ut,Lt)=>{d.push({x:Nt,y:124+Lt*ke,w:tn-Nt*2,h:VS+8,label:ut.label,side:ut.side,run:ut.run,enabled:!0})}),k=0,he(),{listTop:124,actionsTop:J}}const Le=Nt,U=Le+Lr+aa,ue=tn-Nt-U,fe=124,ve=fe+Bu,ce=J-12;C={TREE_X:Le,LIST_X:U,LIST_W:ue,bodyTop:ve,bodyBottom:ce};const ie=$.rows({sourceId:e.listSourceId,path:e.folder});te=ie.length,W=Math.max(1,Math.floor((ce-ve)/Hu));const Te=ie.find(ke=>ke.current)?.key??"";if(Te!==I){I=Te;const ke=ie.findIndex(ut=>ut.current);ke>=0&&(ke<F||ke>=F+W)&&(F=ke-Math.floor(W/3))}_e();const Oe=(Lr-8)/2;[{label:"▲ 폴더",run:()=>Ke(-(W-1)),enabled:F>0},{label:"▼ 폴더",run:()=>Ke(W-1),enabled:F<Ie()}].forEach((ke,ut)=>{d.push({x:Le+ut*(Oe+8),y:fe,w:Oe,h:la,align:"center",...ke,column:"tree"})}),ie.slice(F,F+W).forEach((ke,ut)=>{const Lt=ve+ut*Hu,gn=Math.min(ke.depth,4)*$S,Dt=Le+gn;let Rn=Dt;ke.expandable?(d.push({x:Dt,y:Lt,w:ca,h:zu,align:"center",label:ke.loading?"…":ke.error?"!":ke.expanded?"▾":"▸",run:()=>$.toggle(ke.sourceId,ke.path),enabled:!0,folder:!0,expander:!0,column:"tree"}),Rn=Dt+ca+4):ke.kind==="dir"&&(Rn=Dt+ca+4);const di=ke.loading&&ke.kind==="source"?sn(ke.sourceId)?.searchHint?.()??"":"";d.push({x:Rn,y:Lt,w:Le+Lr-Rn,h:zu,label:di||ke.name,treeRow:!0,source:ke.kind==="source",run:()=>we(ke),enabled:!0,current:ke.current,column:"tree"})});const nt=(ue-8)/2;[{label:`종류: ${su(Kr,B.kind)}`,run:()=>e.setView({kind:iu(Kr,B.kind)}),enabled:!0},{label:`정렬: ${su(Zr,B.sort)}`,run:()=>e.setView({sort:iu(Zr,B.sort)}),enabled:!0}].forEach((ke,ut)=>{d.push({x:U+ut*(nt+8),y:fe,w:nt,h:la,align:"center",...ke,column:"list"})});const on=ve,jt=6,ds=(ue-8*(jt-1))/jt,mn=E<=0,hi=E>=L();[{label:"⏮",run:()=>Fe(0),enabled:!mn},{label:`−${yr}`,run:()=>De(-yr),enabled:!mn},{label:"▲",run:()=>De(-(P-1)),enabled:!mn},{label:"▼",run:()=>De(P-1),enabled:!hi},{label:`+${yr}`,run:()=>De(yr),enabled:!hi},{label:"⏭",run:()=>Fe(1/0),enabled:!hi}].forEach((ke,ut)=>{d.push({x:U+ut*(ds+8),y:on,w:ds,h:la,align:"center",...ke,column:"list"})});const wi=on+Bu;if(P=Math.max(1,Math.floor((ce-wi)/Gu)),(e.folder!==A||e.listSourceId!==G)&&(A=e.folder,G=e.listSourceId,E=0,R=!1),R&&N){const ke=b.findIndex(ut=>ut.type==="item"&&ut.item.id===N.id);ke>=0&&(E=ke-Math.floor(P/2))}return R=!1,Xe(),b.slice(E,E+P).forEach((ke,ut)=>{const Lt=wi+ut*Gu,gn={x:U,y:Lt,w:ue,h:Vu,fileRow:!0,column:"list"};if(ke.type==="seqgroup"){d.push({...gn,label:`프레임 시퀀스 ${ke.count}곳`,tag:"seq",side:e.sequencesExpanded?"접기 ▾":"펼치기 ▸",folder:!0,run:()=>e.toggleSequences(),enabled:!0});return}if(ke.type==="seq"){const{sequence:di}=ke;d.push({...gn,label:di.name,tag:"seq",side:`${Number(di.count).toLocaleString("ko-KR")}장`,folder:!0,run:()=>e.openFolder(di.path),enabled:!0});return}const{item:Dt}=ke,Rn=!!N&&Dt.id===N.id;d.push({...gn,label:`${Rn?"▶ ":""}${Dt.name}`,tag:Dt.kind,side:[rs(Dt.name).toUpperCase(),bn(Dt.size??NaN)].filter(Boolean).join(" · "),run:()=>(be=Dt.id,e.open(Dt,{playlist:e.items})),enabled:e.canOpen(Dt),current:Rn})}),he(),{listTop:wi,actionsTop:J}}function me(){St.relocate(n.camera),x="UI를 지금 보는 곳으로 옮겼습니다",v=!0}function T(b,N,B,K,re){r.beginPath(),r.roundRect(b,N,B,K,re)}function y(){Y();const b=E;let{listTop:N}=se();E!==b&&({listTop:N}=se()),r.clearRect(0,0,tn,Xi),r.fillStyle=ht.bg,T(0,0,tn,Xi,36),r.fill(),r.strokeStyle=ht.line,r.lineWidth=3,r.stroke();const B=e.current,K=k?E+1:0,re=Math.min(k,E+P),J=p==="options"?"PLY 옵션":p==="more"?"더 보기":p==="bindings"?"버튼 지정":k?`${K}–${re} / ${k}`:"0개",ae=tn-Nt-oa-16;r.font=`28px ${Wt}`;const xe=r.measureText(J).width;if(r.fillStyle=ht.text,r.font=`600 38px ${Wt}`,r.textBaseline="middle",r.textAlign="left",r.fillText(ee(p==="list"?z():B?B.name:"열린 파일 없음",ae-Nt-xe-24),Nt,50),r.font=`28px ${Wt}`,r.fillStyle=ht.muted,r.textAlign="right",r.fillText(J,ae,50),r.fillStyle=ht.muted,On(r,p==="bindings"?zS:p==="options"?jS:x||ex(pn.get()),Nt,94,tn-Nt*2,{family:Wt,weight:400,sizes:[25,23,21],maxLines:1,align:"left"}),!k&&p==="list"){r.fillStyle=ht.muted,r.font=`28px ${Wt}`,r.textAlign="center";const ne=oe?sn(e.listSourceId)?.searchHint?.()??"":"",he=oe?ne||"불러오는 중…":e.allItems.length?"이 종류의 파일이 없습니다":e.listSourceId==="session"?"VR에서는 기기 파일을 고를 수 없습니다. 'SHARP 뷰어'(2D)에서 열거나 보관함을 쓰세요":"표시할 파일이 없습니다";On(r,he,C.LIST_X+C.LIST_W/2,N+Vu,C.LIST_W-24,{family:Wt,weight:400,sizes:[28,26,24],maxLines:3,maxHeight:150})}for(const ne of d){const he=`${ne.x},${ne.y}`,Le=f.left===he||f.right===he;r.fillStyle=ne.note?ht.current:ne.enabled?Le?ht.hover:ne.current||ne.on?ht.current:ne.folder?ht.folder:ht.button:ht.disabled,T(ne.x,ne.y,ne.w,ne.h,14),r.fill(),r.strokeStyle=Le?ht.accent:ht.line,r.lineWidth=Le?4:2,r.stroke(),r.textBaseline="middle";const U=ne.y+ne.h/2;if(ne.treeRow){r.fillStyle=ne.enabled?ht.text:ht.muted,On(r,ne.label,ne.x+12,U,ne.w-22,{family:Wt,weight:ne.source?600:400,sizes:[28,26,24,22],maxLines:2,maxHeight:ne.h-4,align:"left"});continue}if(ne.fileRow){let ie=ne.x+16;const Te=Wu[ne.tag];Te&&(r.font=`24px ${Wt}`,r.fillStyle=Te.bg,T(ie,U-17,64,34,17),r.fill(),r.fillStyle=Te.fg,r.textAlign="center",r.fillText(Te.label,ie+64/2,U+1),ie+=78);const Oe=ne.x+ne.w-16-ie;r.fillStyle=ne.enabled?ht.text:ht.muted,On(r,ne.label,ie,ne.side?U-13:U,Oe,{family:Wt,weight:400,sizes:[30,28,26],maxLines:1,align:"left"}),ne.side&&(r.fillStyle=ht.muted,On(r,ne.side,ie,U+20,Oe,{family:Wt,weight:400,sizes:[25,23],maxLines:1,align:"left"}));continue}if(ne.align==="center"){r.fillStyle=ne.enabled||ne.note?ht.text:ht.muted,On(r,ne.label,ne.x+ne.w/2,U,ne.w-24,{family:Wt,sizes:ne.close?[34]:ne.note?[30,28,26,24]:[30,28,26,24,22],maxLines:ne.note?3:2,maxHeight:ne.h-8});continue}let ue=ne.x+20;const fe=Wu[ne.tag];if(fe){r.font=`22px ${Wt}`;const ce=84;r.fillStyle=fe.bg,T(ue,U-16,ce,32,16),r.fill(),r.fillStyle=fe.fg,r.textAlign="center",r.fillText(fe.label,ue+ce/2,U+1),ue+=ce+16}let ve=0;ne.side&&(r.font=`24px ${Wt}`,r.fillStyle=ht.muted,r.textAlign="right",ve=Math.min(r.measureText(ne.side).width,260),r.fillText(ne.side,ne.x+ne.w-20,U)),r.fillStyle=ne.enabled?ht.text:ht.muted,On(r,ne.label,ue,U,ne.x+ne.w-20-ve-16-ue,{family:Wt,weight:400,sizes:[30,28,26,24],maxLines:2,maxHeight:ne.h-6,align:"left"})}o.needsUpdate=!0,c.invalidate(),v=!1}function z(){const b=sn(e.listSourceId),N=b?.label??"목록";return b?.browsable?`${N} / ${fd(e.folder)}`:N}function ee(b,N){if(r.measureText(b).width<=N)return b;let B=b;for(;B.length>1&&r.measureText(`…${B}`).width>N;)B=B.slice(1);return`…${B}`}function le(b){const N=n.controllers[b];if(!N)return null;h.identity().extractRotation(N.matrixWorld),u.ray.origin.setFromMatrixPosition(N.matrixWorld),u.ray.direction.set(0,0,-1).applyMatrix4(h);const B=u.intersectObject(a,!1)[0];if(!B?.uv)return c.setCursor(b,null),X[b]=null,null;const K=B.uv.x*tn;X[b]=K;const re=(1-B.uv.y)*Xi;return c.setCursor(b,{x:K,y:re}),d.find(J=>K>=J.x&&K<=J.x+J.w&&re>=J.y&&re<=J.y+J.h)??null}Je("app:status",({text:b})=>{x=b??"",v=!0}),pn.subscribe(()=>{v=!0}),Je("ui:visibility",()=>j()),Je("ui:anchor",()=>{g&&Re(St.reference(n.camera))}),Je("item:opened",({item:b})=>{be&&b?.id===be&&(be=null,Ve(b))}),Je("item:error",()=>{be=null}),Je("library:changed",b=>{if(oe=!!b?.loading,b?.loading)return;b?.dirs&&!b.failed&&$.prime(b.sourceId,b.folder??"",b.dirs);const N=`${b?.sourceId}|${b?.folder??""}`;N!==q&&(q=N,sn(b?.sourceId)?.browsable&&$.reveal(b.sourceId,b.folder??""))});for(const b of["library:changed","item:opened","item:loading","item:error","item:closed","slideshow:changed"])Je(b,()=>{b==="item:opened"&&(R=!0),v=!0});return{get isOpen(){return ye()},get wantsOpen(){return g},open:()=>ge(!0),toggle:()=>ge(!g),get optionsOpen(){return p==="options"},setOptionsOpen(b){p=b?"options":"list",v=!0},get page(){return p},setPage(b){p==="bindings"&&b!=="bindings"&&S.leave(),p=b==="more"||b==="options"||b==="bindings"?b:"list",v=!0},get inputBlocked(){return S.inputBlocked},bindingsPage:S,get canvas(){return s},close:()=>ge(!1),get layerState(){return{active:c.active,failed:c.failed,error:c.lastError,size:c.size??null}},showMessage(b){x=b,v=!0},invalidate(){v=!0},scrollBy:De,scrollTo:Fe,get buttonRects(){return d.map(({label:b,x:N,y:B,w:K,h:re,enabled:J})=>({label:b,x:N,y:B,w:K,h:re,enabled:J}))},get scrollState(){return{scroll:E,rowsVisible:P,total:k}},get treeState(){return{rows:$.rows({sourceId:e.listSourceId,path:e.folder}),scroll:F,rowsVisible:W,total:te}},tree:$,openAfterPose(){_=m},update(b){if(!b.presenting)return _=0,g&&ge(!1),c.detach(),a.material.visible=!0,!1;if(Ee(),_>0&&--_===0&&!g&&ge(!0),S.capturing&&(p!=="bindings"||!ye())&&S.leave(),S.tick(b,{left:X.left!==null&&X.left!==void 0,right:X.right!==null&&X.right!==void 0}),!ye())return c.sync(!1),a.material.visible=!0,!1;const N=Math.abs(b.left.y)>Math.abs(b.right.y),B=N?b.left.y:b.right.y,K=X[N?"left":"right"]??X[N?"right":"left"],re=p==="list"&&K!==null&&K<C.LIST_X-aa/2,J=performance.now();if(Math.abs(B)>qS&&p!=="bindings"){if(D||(D=J),J-w>XS){w=J;const ae=YS.find(([xe])=>J-D>=xe)[1];re?Ke(B>0?ae:-ae):De(B>0?ae:-ae)}}else w=0,D=0;for(const ae of["left","right"]){const xe=le(ae),ne=xe?`${xe.x},${xe.y}`:null;f[ae]!==ne&&(f[ae]=ne,v=!0),xe&&xe.enabled&&b[ae].triggerPressed&&(x="",xe.run()==="close"&&ge(!1),v=!0)}return v&&y(),a.material.visible=!c.sync(!0),!0}}}function ZS({ui:n,camera:e,panel:t,viewerHasUi:i=()=>!1,getBindings:s,now:r}){const o=ho(["common.uiToggle","common.uiMove"],{...s?{getBindings:s}:{},...r?{now:r}:{}});function a(){!t.wantsOpen&&!i()&&t.open()}return{update(c){const l=o.update(c);return l.has("common.uiMove")?(n.relocate(e),a(),t.showMessage("UI를 지금 보는 곳으로 옮겼습니다"),"relocate"):l.has("common.uiToggle")?(n.visible&&(t.isOpen||i())?n.setVisible(!1):(n.setVisible(!0),a()),"toggle"):null}}}const $u=4096*2304,JS=4096,QS=8192*4096,eb=8192,tb=[{family:"h264",codec:"avc1.640033"},{family:"h265",codec:"hvc1.1.6.L153.B0"},{family:"vp9",codec:"vp09.00.51.08"},{family:"av1",codec:"av01.0.13M.08"}];function nb(n,e){const t=String(n||"").toLowerCase();return/\.webm$/.test(t)||/webm/.test(e||"")?"video/webm":/\.(mkv)$/.test(t)?"video/x-matroska":/\.(mov)$/.test(t)?"video/quicktime":"video/mp4"}const _l={h264:"H.264",h265:"HEVC(H.265)",av1:"AV1",vp9:"VP9",vp8:"VP8"};function ib({family:n,width:e,height:t,frameRate:i,known:s=!0}){const r=[],o=(e||0)*(t||0),a=Math.max(e||0,t||0),c=_l[n]??"이 코덱";return s&&n==="h264"&&(o>$u||a>JS)?r.push({level:"error",code:"h264-over-4k",text:`${e}x${t} H.264는 Quest 한계(4K)를 넘어 재생이 안 되거나 끊깁니다. PC에서 HEVC로 변환하세요(make_quest_app_video.bat).`}):(n==="vp8"||n==="vp9"&&o>$u)&&r.push({level:"warn",code:"sw-decode",text:`${c} 고해상도는 Quest에서 하드웨어 디코딩이 안 되어 끊길 수 있습니다. HEVC 또는 AV1을 권장합니다.`}),o>QS||a>eb?r.push({level:"error",code:"over-hw-limit",text:`${e}x${t}는 Quest 하드웨어 디코더 한계(8192x4096)를 넘습니다. 해상도를 줄여 다시 인코딩하세요.`}):i>61&&o>3840*2160&&r.push({level:"warn",code:"high-fps",text:`${Math.round(i)}fps 고해상도는 디코더 한계(60fps)를 넘어 끊길 수 있습니다.`}),r}async function sb(n){const e=n.width||0,t=n.height||0,i=n.frameRate&&n.frameRate>0?Math.min(Math.round(n.frameRate*100)/100,240):30,s=n.bitrate&&n.bitrate>0?n.bitrate:Math.max(2e6,Math.round(e*t*i*.08)),r=nb(n.name,n.mime),o=r==="video/webm",a=n.codec?[{family:n.family,codec:n.codec}]:tb.filter(g=>(!n.family||g.family===n.family)&&(!o||g.family==="vp9"||g.family==="av1")),c=[];let l=null;const u=typeof navigator<"u"?navigator.mediaCapabilities:null;if(u?.decodingInfo&&e&&t)for(const g of a)try{const _=await u.decodingInfo({type:"file",video:{contentType:`${r}; codecs="${g.codec}"`,width:e,height:t,bitrate:s,framerate:i}}),m={...g,supported:!!_.supported,smooth:!!_.smooth,powerEfficient:!!_.powerEfficient};if((!l||m.supported&&!l.supported)&&(l=m),m.supported)break}catch{}const h=n.family??l?.family??null,d=!!n.codec;l?l.supported?l.smooth?l.powerEfficient||c.push({level:"info",code:"sw-decode",text:"소프트웨어 디코딩일 수 있어 발열·배터리 소모가 클 수 있습니다."}):c.push({level:"warn",code:"not-smooth",text:`${_l[h]??"이"} ${e}x${t} 영상은 재생이 끊길 수 있습니다.`}):c.push({level:"error",code:"unsupported",text:d?`이 기기 브라우저가 ${_l[h]??"이 코덱"} ${e}x${t}${i?` ${Math.round(i)}fps`:""} 영상을 디코딩할 수 없다고 보고합니다.`:`코덱을 알 수 없고, 흔한 코덱(H.264/HEVC/AV1/VP9) 어느 것으로도 ${e}x${t}를 디코딩할 수 없다고 보고합니다.`}):c.push({level:"info",code:"no-capabilities",text:"MediaCapabilities를 쓸 수 없어 디코딩 가능 여부를 미리 확인하지 못했습니다."}),h&&c.push(...ib({family:h,width:e,height:t,frameRate:i,known:d}));const f=!c.some(g=>g.level==="error"||g.level==="warn");return{supported:l?l.supported:null,smooth:l?l.smooth:null,powerEfficient:l?l.powerEfficient:null,codec:n.codec??l?.codec??null,family:h,warnings:c,ok:f}}function ua(n){if(!n||!n.warnings.length)return"";const e={error:0,warn:1,info:2};return[...n.warnings].sort((t,i)=>e[t.level]-e[i.level])[0].text}const io={aac:"AAC",mp3:"MP3",opus:"Opus",flac:"FLAC",ac3:"AC-3(돌비)",eac3:"E-AC-3(돌비 디지털 플러스)",ac4:"AC-4",dts:"DTS",alac:"ALAC",pcm:"PCM",other:"알 수 없는 소리 형식"};function rb(n){if(!n)return null;switch(n.family){case"aac":return n.codec||"mp4a.40.2";case"mp3":return"mp3";case"opus":return"opus";case"flac":return"flac";case"ac3":return"ac-3";case"eac3":return"ec-3";case"ac4":return"ac-4";case"dts":return"dtsc";default:return null}}function ob(n,e){if(!n)return null;if(!n.audio)return{code:"no-audio",level:"info",text:"이 영상 파일에는 소리 트랙이 없습니다. (파일에 소리가 들어 있지 않아 소리가 나지 않는 게 정상입니다)"};const t=rb(n.audio);return t&&typeof e=="function"&&e(`audio/mp4; codecs="${t}"`)===""?{code:"audio-codec",level:"warn",text:`소리 형식 ${io[n.audio.family]??io.other}는 Quest 브라우저가 재생하지 못해 소리가 나지 않습니다. PC에서 make_quest_app_video.bat으로 변환하면 AAC로 바뀝니다.`}:null}const ab=1.5;function lb({decodedBytes:n,currentTime:e,playing:t,muted:i}){return typeof n!="number"?null:n>0?"ok":!t||i||e<ab?null:{code:"audio-silent",level:"warn",text:"재생 중인데 소리가 디코딩되지 않습니다. 소리 트랙이 없거나 이 브라우저가 못 읽는 소리 형식일 수 있습니다."}}function cb({muted:n,volume:e,decodedBytes:t,meta:i}){let s="?";i&&(s=i.audio?`${io[i.audio.family]??io.other}${i.audio.channels?` ${i.audio.channels}ch`:""}`:"없음");const r=typeof t=="number"?`${Math.round(t/1024)}KB`:"?",o=Number.isFinite(e)?Math.round(e*100):"?";return`소리 ${n?"꺼짐(음소거)":"켜짐"} · 볼륨 ${o}% · 소리 트랙 ${s} · 디코딩된 소리 ${r}`}const qs=new O(0,1,0),ub=.6,hb=1.25,db=.12,fb=.1,pb=25,mb=.6,gb=.35,_b=Math.PI/6,vb=.7,xb=.35,Gl={x:!0,y:!0},jd=(n,e,t)=>Math.min(t,Math.max(e,n));function yb(n){const e=2*Math.atan2(n.y,n.w);return Math.atan2(Math.sin(e),Math.cos(e))}const Xu=n=>Math.atan2(-n.z,n.x);function Sb(n){const e=new O(0,0,-1).applyQuaternion(n);return e.y=0,e.lengthSq()<1e-6?0:Math.atan2(-e.x,-e.z)}function bb(n,e=.01,t=.99){const i=Math.floor(n.length/3);if(i<1)return null;const s=new O,r=new O,o=new Float32Array(i);for(let u=0;u<3;u++){for(let f=0;f<i;f++)o[f]=n[f*3+u];o.sort();const h=o[Math.floor((i-1)*e)],d=o[Math.ceil((i-1)*t)];s.setComponent(u,h),r.setComponent(u,d)}const a=r.clone().sub(s),c=s.clone().add(r).multiplyScalar(.5),l=Math.max(.5*a.length()*.85,1e-4);return{center:c,radius:l,size:a}}function Kd(n){return n?jd(ub/n.radius,.005,500):1}function qu(n,{headPosition:e,heading:t,mode:i="fit"}){if(i==="immersive")return{position:e.clone(),yaw:t,scale:1};const s=n?.center??new O,r=Kd(n),o=new O(-Math.sin(t),0,-Math.cos(t)),a=e.clone().addScaledVector(o,hb);return a.y=e.y-db,{position:a.sub(s.clone().multiplyScalar(r).applyAxisAngle(qs,t)),yaw:t,scale:r}}function ha(n,e){return e.clone().multiplyScalar(n.scale).applyAxisAngle(qs,n.yaw).add(n.position)}function Mb(n,e){const t=e.handQuaternion.clone().multiply(n.handQuaternion.clone().invert()),i=yb(t);return{position:n.transform.position.clone().sub(n.handPosition).applyAxisAngle(qs,i).add(e.handPosition),yaw:n.transform.yaw+i,scale:n.transform.scale}}function Eb(n,e,t){const i=n.right.clone().sub(n.left),s=e.right.clone().sub(e.left),r=i.length(),o=s.length();let a=r>.04?o/r:1;a=jd(n.transform.scale*a,t.min,t.max)/n.transform.scale;const c=Math.hypot(i.x,i.z),l=Math.hypot(s.x,s.z),u=c>.06&&l>.06?Xu(s)-Xu(i):0,h=n.left.clone().add(n.right).multiplyScalar(.5),d=e.left.clone().add(e.right).multiplyScalar(.5);return{position:n.transform.position.clone().sub(h).multiplyScalar(a).applyAxisAngle(qs,u).add(d),yaw:n.transform.yaw+u,scale:n.transform.scale*a}}function Tb(n,e,t,i){return{position:n.clone().sub(t).applyAxisAngle(qs,i).add(t),yaw:e+i}}function wb(n=_b,e=Gl.x){const t=e?-1:1;let i=!0;return{step(s){return Math.abs(s)<xb?(i=!0,0):i&&Math.abs(s)>vb?(i=!1,(s>0?-n:n)*t):0},reset(){i=!0}}}function Yu(){let n=!1;return{update(e){return!n&&e>mb?n=!0:n&&e<gb&&(n=!1),n},get held(){return n},reset(){n=!1}}}function Ab(n,e,t,i,s=Gl){const r=s.x?1:-1,o=s.y?1:-1;return{yaw:-r*n*t*i,pitch:-o*e*t*i}}const Vi=1024,Ms=330,ju=1.2,Rb='ui-monospace,"D2Coding","Consolas","Noto Sans KR","Malgun Gothic",monospace';function Cb(n,e=""){if(!n)return"-";if(/^blob:/.test(n))return"기기 파일(blob)";if(/^data:/.test(n))return"data URL";try{const t=new URL(n,e||void 0);return t.pathname.includes("/__src/")?`앱 프록시(서비스 워커) ${t.pathname.split("/__src/")[1]?.split("/")[0]??""}`.trim():e&&t.origin===e?"같은 출처":`직접 ${t.protocol}//${t.host}`}catch{return String(n).slice(0,40)}}const Pb=n=>`0b${(n>>>0).toString(2).padStart(3,"0")}`;function Ku(n){if(!n)return["(열린 항목 없음)"];const e=[],t=n.layer.active?"레이어 사용 중":n.layer.error?`레이어 실패: ${n.layer.error}`:n.layer.reason?`레이어 안 씀: ${n.layer.reason}`:"레이어 안 씀";if(e.push(`경로 ${n.path}(선호 ${n.pref}) · 형식 ${n.layout} · ${n.kind==="image"?"사진":"영상"} ${n.resolution||"-"}`),e.push(`레이어 ${t}`),e.push(`세션 XRMediaBinding ${n.xr.mediaBinding?"있음":"없음"} · layers 기능 ${n.xr.layersFeature} · renderState.layers [${n.xr.stateLayers.join(", ")||"-"}]`),e.push(`눈 카메라 ${n.xr.cameras}개 · 마스크 ${n.xr.masks.map(Pb).join(" / ")||"-"} · 뷰포트 ${n.xr.viewports.join(" / ")||"-"}`),n.eye){const i=n.eye.rate;e.push(`눈 분리 ${n.eye.method} · 메시 그림/초 L ${i.left} R ${i.right}${i.cross?` 엇갈림 ${i.cross}`:""}${i.mono?` 모노 ${i.mono}`:""}`)}if(n.video){const i=n.video;e.push(`재생 ${i.presentedFps}fps(표시) / 원본 ${i.nominalFps||"?"}fps · 드롭 ${i.droppedInterval}/${i.totalInterval}(누적 ${i.dropped}/${i.total}) · 준비 ${i.readyState}`),e.push(`버퍼 앞 ${i.bufferAhead}초 · 코덱 ${i.codec||"?"} ${i.bitrate?`${i.bitrate}Mbps`:""} · 소스 ${i.source}`),i.audio&&e.push(i.audio)}return e.push(`렌더 평균 ${n.frame.avgMs}ms · 최대 ${n.frame.maxMs}ms · 25ms 넘은 프레임 ${n.frame.slow}/${n.frame.count}`),e}class Lb{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Vi,this.canvas.height=Ms,this.ctx=this.canvas.getContext("2d"),this.texture=new $s(this.canvas),this.texture.colorSpace=yt,this.texture.minFilter=Ct,this.texture.generateMipmaps=!1,this.material=new li({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.height=ju*(Ms/Vi),this.mesh=new Xt(new ui(ju,this.height),this.material),this.mesh.name="media-diag",this.mesh.renderOrder=102,this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.lines=[]}attachTo(e,t){e.add(this.mesh),this.mesh.position.set(0,t/2+this.height/2+.02,.003)}get visible(){return this.mesh.visible}setVisible(e){this.mesh.visible=!!e}setLines(e){(e.length!==this.lines.length||e.some((i,s)=>i!==this.lines[s]))&&(this.lines=e,this.draw())}draw(){const{ctx:e}=this;e.clearRect(0,0,Vi,Ms),e.fillStyle="rgba(8,12,18,0.94)",e.strokeStyle="rgba(255,180,84,0.8)",e.lineWidth=3,e.beginPath(),e.roundRect?.(2,2,Vi-4,Ms-4,22),e.roundRect||e.rect(2,2,Vi-4,Ms-4),e.fill(),e.stroke(),e.textBaseline="top",e.textAlign="left",e.font=`19px ${Rb}`,e.fillStyle="#ffb454",e.fillText("진단 (스크린샷으로 알려 주세요)",22,12),e.fillStyle="#e8edf7",this.lines.slice(0,11).forEach((i,s)=>{let r=i;for(;r.length>2&&e.measureText(r).width>Vi-44;)r=`${r.slice(0,-2)}…`;e.fillText(r,22,42+s*26)}),this.texture.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose(),this.texture.dispose()}}const Zd="sharp.media.layoutByItem.v1",Db=500;function Jd(){try{return globalThis.localStorage??null}catch{return null}}function Qd(){try{const n=Jd()?.getItem(Zd),e=n?JSON.parse(n):null;return Array.isArray(e)?e.filter(t=>Array.isArray(t)&&typeof t[0]=="string"&&to(t[1])):[]}catch{return[]}}function Ib(n){if(typeof n!="string"||!n)return null;const e=Qd().find(t=>t[0]===n);return e?e[1]:null}function Ub(n,e){if(!(typeof n!="string"||!n||!to(e)))try{const t=Qd().filter(i=>i[0]!==n);t.push([n,e]),Jd()?.setItem(Zd,JSON.stringify(t.slice(-Db)))}catch{}}const Nb=24*1024*1024,Fb=64;async function Zu(n,e,t,i){const s=await fetch(n,{headers:{Range:`bytes=${e}-${t}`},signal:i});if(s.status===206)return new Uint8Array(await s.arrayBuffer());if(!s.ok)throw new Error(`Range 요청 실패(${s.status})`);const r=s.body.getReader(),o=new Uint8Array(t-e+1);let a=0,c=0;for(;c<o.length;){const{value:l,done:u}=await r.read();if(u)break;const h=a+l.length;if(h>e){const d=Math.max(0,e-a),f=Math.min(l.length,t+1-a);o.set(l.subarray(d,f),c),c+=f-d}a=h}return r.cancel().catch(()=>{}),o.subarray(0,c)}function An(n,e){return n.getUint32(e)}function mo(n,e){return String.fromCharCode(n.getUint8(e),n.getUint8(e+1),n.getUint8(e+2),n.getUint8(e+3))}function*ci(n,e,t){let i=e;for(;i+8<=t;){let s=An(n,i);const r=mo(n,i+4);let o=8;if(s===1){if(i+16>t)return;s=Number(n.getBigUint64(i+8)),o=16}else s===0&&(s=t-i);if(s<o)return;const a=Math.min(i+s,t);yield{type:r,start:i,bodyStart:i+o,end:a,size:s},i+=s}}function zt(n,e,t,i){for(const s of ci(n,e,t))if(s.type===i)return s;return null}async function Ob(n,e,t){let i=0;for(let s=0;s<Fb;s++){if(e&&i>=e)return null;const r=await Zu(n,i,i+15,t);if(r.length<8)return null;const o=new DataView(r.buffer,r.byteOffset,r.byteLength);let a=o.getUint32(0);const c=mo(o,4);if(a===1&&r.length>=16?a=Number(o.getBigUint64(8)):a===0&&(a=e?e-i:0),c==="moov")return!a||a>Nb?null:await Zu(n,i,i+a-1,t);if(!a)return null;i+=a}return null}function kb(n,e){const t=n.getUint8(e+1),i=n.getUint8(e+2),s=n.getUint8(e+3),r=o=>o.toString(16).padStart(2,"0");return{codec:`avc1.${r(t)}${r(i)}${r(s)}`,family:"h264",profile:t,level:s}}function Bb(n,e,t){const i=n.getUint8(e+1),s=i>>6,r=i>>5&1,o=i&31,a=An(n,e+2);let c=0;for(let f=0;f<32;f++)a&1<<f&&(c|=1<<31-f);const l=n.getUint8(e+12),u=[];for(let f=0;f<6;f++)u.push(n.getUint8(e+6+f));for(;u.length>1&&u[u.length-1]===0;)u.pop();const h=["","A","B","C"][s];return{codec:`${t}.${h}${o}.${(c>>>0).toString(16)}.${r?"H":"L"}${l}${u.map(f=>`.${f.toString(16).toUpperCase()}`).join("")}`,family:"h265",profile:o,level:l}}function zb(n,e){const t=n.getUint8(e+1),i=n.getUint8(e+2),s=t>>5,r=t&31,o=i>>7,a=i>>6&1,c=i>>5&1,l=a?c?12:10:8;return{codec:`av01.${s}.${String(r).padStart(2,"0")}${o?"H":"M"}.${String(l).padStart(2,"0")}`,family:"av1",profile:s,level:r}}function Hb(n,e,t){const i=n.getUint8(e+4),s=n.getUint8(e+5),r=n.getUint8(e+6)>>4;return{codec:`vp09.${String(i).padStart(2,"0")}.${String(s).padStart(2,"0")}.${String(r).padStart(2,"0")}`,family:"vp9",profile:i,level:s}}const Ju={"ac-3":"ac3","ec-3":"eac3","ac-4":"ac4",Opus:"opus",fLaC:"flac",alac:"alac",".mp3":"mp3",dtsc:"dts",dtse:"dts",dtsh:"dts",dtsl:"dts",twos:"pcm",sowt:"pcm",ipcm:"pcm",fpcm:"pcm",lpcm:"pcm"};function Vb(n,e,t){const i={oti:null,aot:null};try{let s=e+4;const r=()=>{let o=0;for(let a=0;a<4&&s<t;a++){const c=n.getUint8(s++);if(o=o<<7|c&127,!(c&128))break}return o};for(;s<t;){const o=n.getUint8(s++);if(r(),o===3){s+=2;const a=n.getUint8(s++);a&128&&(s+=2),a&64&&(s+=1+n.getUint8(s)),a&32&&(s+=2)}else if(o===4)i.oti=n.getUint8(s),s+=13;else if(o===5){i.aot=n.getUint8(s)>>3;break}else break}}catch{}return i}function Gb(n,e){const t=zt(n,e.bodyStart,e.end,"mdia");if(!t)return null;const i=zt(n,t.bodyStart,t.end,"hdlr");if(!i||mo(n,i.bodyStart+8)!=="soun")return null;const s=zt(n,t.bodyStart,t.end,"minf"),r=s&&zt(n,s.bodyStart,s.end,"stbl"),o=r&&zt(n,r.bodyStart,r.end,"stsd"),a={sampleType:null,family:"other",codec:null,channels:0};if(!o)return a;for(const c of ci(n,o.bodyStart+8,o.end)){if(a.sampleType=c.type,c.bodyStart+28>c.end)break;const l=n.getUint16(c.bodyStart+8);a.channels=n.getUint16(c.bodyStart+16);const u=c.bodyStart+28+(l===1?16:l===2?36:0);if(Ju[c.type]&&(a.family=Ju[c.type]),c.type==="mp4a"){let h=null;for(const f of ci(n,u,c.end))f.type==="esds"?h=f:f.type==="wave"&&(h=zt(n,f.bodyStart,f.end,"esds")??h);const d=h?Vb(n,h.bodyStart,h.end):{oti:null,aot:null};d.oti===64||d.oti>=102&&d.oti<=104||d.oti===null?(a.family="aac",a.codec=`mp4a.40.${d.aot||2}`):d.oti===105||d.oti===107?a.family="mp3":d.oti===165?a.family="ac3":d.oti===166?a.family="eac3":d.oti>=169&&d.oti<=172&&(a.family="dts")}break}return a}function Wb(n,e,t){const i={projection:null,equirectBounds:null},s=zt(n,e,t,"proj");if(!s)return i;for(const r of ci(n,s.bodyStart,s.end))if(r.type==="equi"){if(i.projection="equirect",r.bodyStart+20<=r.end){const o=a=>a/4294967296;i.equirectBounds={top:o(An(n,r.bodyStart+4)),bottom:o(An(n,r.bodyStart+8)),left:o(An(n,r.bodyStart+12)),right:o(An(n,r.bodyStart+16))}}}else r.type==="cbmp"?i.projection="cubemap":r.type==="mshp"&&(i.projection="mesh");return i}function $b(n,e){const t=zt(n,e.bodyStart,e.end,"mdia");if(!t)return null;const i=zt(n,t.bodyStart,t.end,"hdlr");if(!i||mo(n,i.bodyStart+8)!=="vide")return null;const s=zt(n,t.bodyStart,t.end,"mdhd");let r=0,o=0;s&&(n.getUint8(s.bodyStart)===1?(r=An(n,s.bodyStart+20),o=Number(n.getBigUint64(s.bodyStart+24))):(r=An(n,s.bodyStart+12),o=An(n,s.bodyStart+16)));const a=zt(n,t.bodyStart,t.end,"minf"),c=a&&zt(n,a.bodyStart,a.end,"stbl");if(!c)return null;const l={codec:null,family:null,width:0,height:0,frameRate:0,durationSec:0,sampleCount:0};r&&o&&(l.durationSec=o/r);const u=zt(n,c.bodyStart,c.end,"stsz");u&&(l.sampleCount=An(n,u.bodyStart+8)),l.sampleCount&&l.durationSec&&(l.frameRate=l.sampleCount/l.durationSec);const h=zt(n,c.bodyStart,c.end,"stsd");if(h)for(const d of ci(n,h.bodyStart+8,h.end)){const f=d.type;if(d.bodyStart+78>d.end)continue;l.width=n.getUint16(d.bodyStart+24),l.height=n.getUint16(d.bodyStart+26);const g=d.bodyStart+78;for(const _ of ci(n,g,d.end)){let m=null;if(_.type==="avcC"?m=kb(n,_.bodyStart):_.type==="hvcC"?m=Bb(n,_.bodyStart,f==="hev1"?"hev1":"hvc1"):_.type==="av1C"?m=zb(n,_.bodyStart):_.type==="vpcC"&&(m=Hb(n,_.bodyStart)),m)Object.assign(l,m);else if(_.type==="st3d"){const p=n.getUint8(_.bodyStart+4);l.stereoMode=p===1?"top-bottom":p===2?"left-right":"mono"}else _.type==="sv3d"&&Object.assign(l,Wb(n,_.bodyStart,_.end))}l.codec||(l.family={avc1:"h264",avc3:"h264",hvc1:"h265",hev1:"h265",av01:"av1",vp09:"vp9"}[f]??null);break}return l}function Qu(n,e,t,i){const s=new TextDecoder("utf-8").decode(e.subarray(t,Math.min(i,t+8192)));if(!/<rdf:SphericalVideo/i.test(s))return null;const r=/<GSpherical:Spherical>\s*true/i.test(s),o=/<GSpherical:StereoMode>\s*(left-right|top-bottom)/i.exec(s),a={};return r&&(a.projection="equirect"),o&&(a.stereoMode=o[1].toLowerCase()),a}async function Xb(n,e,t){try{const i=await Ob(n,e,t);if(!i)return null;const s=new DataView(i.buffer,i.byteOffset,i.byteLength),r=zt(s,0,i.length,"moov");if(!r)return null;let o=null,a=null,c=null;for(const l of ci(s,r.bodyStart,r.end)){if(l.type==="trak"){const u=$b(s,l);u&&!o?o=u:!u&&!a&&(a=Gb(s,l))}else l.type==="uuid"&&(c=c??Qu(s,i,l.bodyStart+16,l.end));if(l.type==="trak")for(const u of ci(s,l.bodyStart,l.end))u.type==="uuid"&&(c=c??Qu(s,i,u.bodyStart+16,u.end))}return o?(o.audio=a,c&&(!o.projection&&c.projection&&(o.projection=c.projection),!o.stereoMode&&c.stereoMode&&(o.stereoMode=c.stereoMode)),o.bitrate=e&&o.durationSec?Math.round(e*8/o.durationSec):0,o):null}catch(i){if(i?.name==="AbortError")throw i;return null}}const ef="sharp.media.zoom.v1";function tf(){try{return globalThis.localStorage??null}catch{return null}}const eh=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function qb(){try{const n=JSON.parse(tf()?.getItem(ef)??"null")??{};return{screen:eh(n.screen,Br,zr,no),sphere:eh(n.sphere,1,Hr,pl)}}catch{return{screen:no,sphere:pl}}}function Yb(n){try{tf()?.setItem(ef,JSON.stringify({screen:n.screen,sphere:n.sphere}))}catch{}}function th(n,e){return`${Math.round(e/(n==="screen"?no:1)*100)}%`}function jb(n,e=typeof location<"u"?location.protocol:""){if(!n||e!=="https:")return!1;try{return new URL(n,"https://app.invalid/").protocol==="http:"}catch{return!1}}function Kb({code:n,url:e="",pageProtocol:t,family:i=null,hint:s=""}){return n===4?jb(e,t)?"영상 연결이 막힌 것 같습니다(https 앱에서 http 주소는 브라우저가 차단할 수 있습니다). 앱을 완전히 닫았다가 다시 열고 PC 탭에서 다시 눌러 보세요. 같은 증상이 반복되면 코덱 문제일 수도 있습니다.".concat(s?` ${s}`:""):`이 영상은 재생할 수 없습니다(코덱·형식 미지원). ${s}`.trim():n===3?`영상 디코딩 중 오류가 났습니다. ${s||(i?`${i} 영상이 기기 한계를 넘었을 수 있습니다.`:"")}`.trim():n===2?"영상을 받는 중 네트워크 오류가 났습니다. PC 서버가 켜져 있고 같은 Wi-Fi인지 확인하세요.":`영상을 불러오지 못했습니다(오류 ${n??"?"}).`}const nh=(n,e)=>Math.atan2(-n,-e);function Zb(n,e){return e<=n?Math.PI:Math.asin(Math.min(1,n/e))}const ih=1.15,Jb=.74,Qi=.72,Qb=.8;function nf(n,e){return new O(n.x-Math.sin(e)*ih,n.y-Jb,n.z-Math.cos(e)*ih)}function Wl(n,e=Qi){return new fn(-e,n,0,"YXZ")}function sf(n,e,t,i){const s=new O(0,1,0).applyEuler(Wl(e,t));return n.clone().addScaledVector(s,-i/2)}const As=1024,eM={H:476},Rs=eM.H,vl=1.2,da=vl*(Rs/As),Jn='"Noto Sans KR","Malgun Gothic","Apple SD Gothic Neo",system-ui,sans-serif',Ft={bg:"rgba(18,22,30,0.92)",border:"rgba(120,150,200,0.5)",button:"rgba(52,64,88,1)",buttonHover:"rgba(82,108,160,1)",buttonActive:"rgba(110,150,230,1)",buttonOn:"rgba(48,110,96,1)",text:"#e8edf7",dim:"#9aa8c4",warn:"#ffb454",error:"#ff6b6b",bar:"rgba(70,84,110,1)",barFill:"rgba(110,170,255,1)"};function sh(n){if(!Number.isFinite(n)||n<0)return"--:--";const e=Math.floor(n%60),t=Math.floor(n/60)%60,i=Math.floor(n/3600),s=r=>String(r).padStart(2,"0");return i?`${i}:${s(t)}:${s(e)}`:`${t}:${s(e)}`}function rh(n,e,t,i=2){const s=[];let r="";for(const o of String(e))if(r&&n(r+o)>t){if(s.length===i-1){let a=r;for(;a&&n(`${a}…`)>t;)a=a.slice(0,-1);return s.push(`${a}…`),s}s.push(r),r=o===" "?"":o}else r+=o;return r&&s.push(r),s}function oh(n,e,t){if(n.measureText(e).width<=t)return e;let i=0,s=e.length;for(;i<s;){const r=Math.ceil((i+s)/2);n.measureText(`${e.slice(0,r)}…`).width<=t?i=r:s=r-1}return`${e.slice(0,i)}…`}function Dr(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}const ah={play(n,e,t,i){n.beginPath(),n.moveTo(e-i*.35,t-i*.5),n.lineTo(e+i*.55,t),n.lineTo(e-i*.35,t+i*.5),n.closePath(),n.fill()},pause(n,e,t,i){n.fillRect(e-i*.4,t-i*.5,i*.28,i),n.fillRect(e+i*.12,t-i*.5,i*.28,i)},back(n,e,t,i){n.beginPath(),n.moveTo(e+i*.1,t-i*.4),n.lineTo(e-i*.4,t),n.lineTo(e+i*.1,t+i*.4),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e+i*.55,t-i*.4),n.lineTo(e+i*.05,t),n.lineTo(e+i*.55,t+i*.4),n.closePath(),n.fill()},fwd(n,e,t,i){n.beginPath(),n.moveTo(e-i*.1,t-i*.4),n.lineTo(e+i*.4,t),n.lineTo(e-i*.1,t+i*.4),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e-i*.55,t-i*.4),n.lineTo(e-i*.05,t),n.lineTo(e-i*.55,t+i*.4),n.closePath(),n.fill()},left(n,e,t,i){n.beginPath(),n.moveTo(e+i*.25,t-i*.45),n.lineTo(e-i*.3,t),n.lineTo(e+i*.25,t+i*.45),n.closePath(),n.fill()},right(n,e,t,i){n.beginPath(),n.moveTo(e-i*.25,t-i*.45),n.lineTo(e+i*.3,t),n.lineTo(e-i*.25,t+i*.45),n.closePath(),n.fill()}};class tM{constructor(e){this.onAction=e,this.canvas=document.createElement("canvas"),this.canvas.width=As,this.canvas.height=Rs,this.ctx=this.canvas.getContext("2d"),this.texture=new $s(this.canvas),this.texture.colorSpace=yt,this.texture.minFilter=ni,this.texture.generateMipmaps=!0,this.material=new li({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new Xt(new ui(vl,da),this.material),this.mesh.name="media-hud",this.mesh.renderOrder=100,this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.surface=null,this.state={kind:"video",name:"",layoutLabel:"",resolution:"",playing:!1,time:0,duration:0,muted:!1,loop:!1,warning:"",warningLevel:"info",hint:"",pathLabel:"",diagOn:!1,canScale:!1,zoomLabel:"",swapEyes:!1,stereo:!1,navPos:"",navCanStep:!1,navShow:!1,navInterval:5},this._dock=null,this.buttons=[],this.page="main",this.seek={x:140,y:118,w:744,h:22},this.hover=new Map,this.pressed=new Map,this.dragSeek=null,this._lastSeekEmit=0,this._dirty=!0,this._raycaster=new Ll,this._tmp=new O,this.layoutButtons(),this.draw()}attachSurface(e){this.texture.anisotropy=Math.min(8,e.renderer?.capabilities?.getMaxAnisotropy?.()??1),this.surface=new Vd({stage:e,canvas:this.canvas,mesh:this.mesh,widthM:vl,heightM:da,name:"media-hud"})}detachSurface(){this.surface?.detach(),this.material.visible=!0}get visible(){return this.mesh.visible}setVisible(e){this.mesh.visible=e,!e&&this.surface&&(this.surface.sync(!1),this.material.visible=!0),e?this._dirty=!0:this.page!=="main"&&(this.page="main",this.layoutButtons())}setState(e){let t=!1;for(const[i,s]of Object.entries(e))this.state[i]!==s&&(this.state[i]=s,t=!0);t&&(this._dirty=!0,this.layoutButtons())}layoutButtons(){const e=this.state,t=e.kind==="video",i=[],s=24,r=976,o=14,a=(d,f,g,_)=>{const m=_?_.reduce((x,v)=>x+v,0):g.length,p=(r-o*(g.length-1))/m;let S=s;g.forEach((x,v)=>{const E=p*(_?_[v]:1);i.push({x:Math.round(S),y:d,w:Math.round(E),h:f,enabled:!0,...x}),S+=E+o})},c={id:"navShow",label:e.navShow?`슬라이드쇼
■ 정지`:`슬라이드쇼
▶ 시작`,toggle:!0,on:!!e.navShow,enabled:!!e.navCanStep||!!e.navShow},l={id:"navPrev",icon:"left",label:"이전",enabled:!!e.navCanStep},u={id:"navNext",icon:"right",label:"다음",enabled:!!e.navCanStep},h={id:"navList",label:"목록"};if(this.page==="more"){const m=[];t&&(m.push({id:"mute",label:e.muted?"소리 꺼짐":"소리 켜짐",toggle:!0,on:!e.muted}),m.push({id:"loop",label:e.loop?"반복 켬":"반복 끔",toggle:!0,on:e.loop})),m.push({id:"swap",label:"좌우 눈 바꿈",toggle:!0,on:e.swapEyes,enabled:!!e.stereo}),m.push({id:"diag",label:e.diagOn?"진단 켬":"진단 끔",toggle:!0,on:!!e.diagOn}),a(166,88,m),a(264,88,[{id:"layoutPrev",icon:"left"},{id:"layoutLabel",label:e.layoutShort||"형식",enabled:!1,tag:!0},{id:"layoutNext",icon:"right"},{id:"recenter",label:"화면 위치 맞춤"}],[1,3.6,1,2.4]),a(362,88,[{id:"navInterval",label:`슬라이드쇼 간격 ${e.navInterval}초`},{id:"less",label:"◂ 돌아가기"}])}else t?(a(166,132,[{id:"back10",icon:"back",label:"10초"},{id:"play",icon:e.playing?"pause":"play",big:!0},{id:"fwd10",icon:"fwd",label:"10초"},l,u]),a(314,140,[c,{id:"sizeDown",label:"줌 −",enabled:!!e.canScale},{id:"sizeUp",label:"줌 +",enabled:!!e.canScale},h,{id:"more",label:"더 보기 ▸"}])):(a(166,132,[l,u,c,h]),a(314,140,[{id:"sizeDown",label:"줌 −",enabled:!!e.canScale},{id:"sizeUp",label:"줌 +",enabled:!!e.canScale},{id:"more",label:"더 보기 ▸"}]));i.push({id:"close",x:876,y:14,w:126,h:56,label:"닫기",enabled:!0,small:!0}),this.buttons=i,this._dirty=!0}_press(e){if(e==="more"||e==="less"){this.page=e==="more"?"more":"main",this.layoutButtons();return}this.onAction(e)}hitTest(e,t){if(this.state.kind==="video"){const i=this.seek;if(e>=i.x-10&&e<=i.x+i.w+10&&t>=i.y-22&&t<=i.y+i.h+22)return{type:"seek",fraction:Math.min(1,Math.max(0,(e-i.x)/i.w))}}for(const i of this.buttons)if(i.enabled&&e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return{type:"button",id:i.id};return null}intersect(e,t){if(!this.mesh.visible)return null;this.mesh.updateWorldMatrix(!0,!1),this._raycaster.set(e,t),this._raycaster.far=6;const i=this._raycaster.intersectObject(this.mesh,!1)[0];return!i||!i.uv?null:{distance:i.distance,px:i.uv.x*As,py:(1-i.uv.y)*Rs}}updatePointers(e,t){const i=new Map;for(const s of e){const r=this.intersect(s.origin,s.direction);i.set(s.id,r?{distance:r.distance}:null);const o=r?this.hitTest(r.px,r.py):null,a=o?o.type==="seek"?"seek":o.id:null;(this.hover.get(s.id)??null)!==a&&(this.hover.set(s.id,a),this._dirty=!0);const l=this.pressed.get(s.id)??!1;if(s.pressed&&!l)this.pressed.set(s.id,!0),o?.type==="seek"?(this.dragSeek=s.id,this._emitSeek(o.fraction,t,!0)):o?.type==="button"&&this._press(o.id),this._dirty=!0;else if(s.pressed&&l&&this.dragSeek===s.id&&r){const u=this.seek,h=Math.min(1,Math.max(0,(r.px-u.x)/u.w));this._emitSeek(h,t,!1)}else if(!s.pressed&&l){if(this.pressed.set(s.id,!1),this.dragSeek===s.id&&(this.dragSeek=null,r)){const u=this.seek;this._emitSeek(Math.min(1,Math.max(0,(r.px-u.x)/u.w)),t,!0)}this._dirty=!0}}return i}_emitSeek(e,t,i){!i&&t-this._lastSeekEmit<200||(this._lastSeekEmit=t,this.onAction("seek",e))}isOverPanel(e,t){return!!e.get(t)}tick(){this._dirty&&this.mesh.visible&&(this.draw(),this.texture.needsUpdate=!0,this.surface?.invalidate(),this._dirty=!1),this.surface&&this.mesh.visible&&(this.material.visible=!this.surface.sync(!0))}draw(){const{ctx:e}=this,t=this.state;e.clearRect(0,0,As,Rs),Dr(e,2,2,As-4,Rs-4,28),e.fillStyle=Ft.bg,e.fill(),e.lineWidth=3,e.strokeStyle=Ft.border,e.stroke(),e.textBaseline="middle",e.textAlign="left";const i=860;e.font=`24px ${Jn}`;const s=[t.navPos,t.zoomLabel&&"줌 "+t.zoomLabel,t.layoutLabel,t.resolution,t.pathLabel].filter(Boolean);for(;s.length>1&&e.measureText(s.join(" · ")).width>420;)s.pop();const r=oh(e,s.join(" · "),420),o=r?e.measureText(r).width:0,a=Math.min(590,i-o-24-28);if(e.font=`600 30px ${Jn}`,e.fillStyle=Ft.text,e.fillText(oh(e,t.name||"(이름 없음)",a),28,36),e.font=`24px ${Jn}`,e.fillStyle=Ft.dim,e.textAlign="right",e.fillText(r,i,36),t.warning?(e.textAlign="left",e.font=`20px ${Jn}`,e.fillStyle=t.warningLevel==="error"?Ft.error:t.warningLevel==="warn"?Ft.warn:Ft.dim,rh(h=>e.measureText(h).width,`⚠ ${t.warning}`,836,2).forEach((h,d)=>e.fillText(h,28,68+d*26))):t.hint&&(e.textAlign="left",e.font=`600 22px ${Jn}`,e.fillStyle=Ft.barFill,rh(h=>e.measureText(h).width,t.hint,836,2).forEach((h,d)=>e.fillText(h,28,68+d*26))),t.kind==="video"){const u=this.seek;e.font=`24px ${Jn}`,e.fillStyle=Ft.text,e.textAlign="right",e.fillText(sh(t.time),u.x-14,u.y+u.h/2),e.textAlign="left",e.fillText(sh(t.duration),u.x+u.w+14,u.y+u.h/2),Dr(e,u.x,u.y,u.w,u.h,11),e.fillStyle=Ft.bar,e.fill();const h=t.duration>0?Math.min(1,Math.max(0,t.time/t.duration)):0;h>0&&(Dr(e,u.x,u.y,Math.max(22,u.w*h),u.h,11),e.fillStyle=Ft.barFill,e.fill()),e.beginPath(),e.arc(u.x+u.w*h,u.y+u.h/2,this.hover.size&&[...this.hover.values()].includes("seek")?20:15,0,Math.PI*2),e.fillStyle="#fff",e.fill()}const c=new Set(this.hover.values()),l=new Set([...this.pressed.entries()].filter(([,u])=>u).map(([u])=>this.hover.get(u)));for(const u of this.buttons)this.drawButton(u,c.has(u.id),l.has(u.id))}drawButton(e,t,i){const{ctx:s}=this;Dr(s,e.x,e.y,e.w,e.h,18);let r=Ft.button;e.tag?r="rgba(34,42,60,1)":e.enabled?i?r=Ft.buttonActive:t?r=Ft.buttonHover:e.toggle&&e.on&&(r=Ft.buttonOn):r="rgba(38,44,58,0.7)",s.fillStyle=r,s.fill(),s.fillStyle=e.enabled||e.tag?Ft.text:"rgba(150,160,180,0.45)";const o=e.x+e.w/2,a=e.y+e.h/2,c=e.h-10;e.icon&&e.label?(ah[e.icon](s,e.x+44,a,e.h>100?40:34),On(s,e.label,e.x+44+(e.w-44)/2+8,a,e.w-44-28,{family:Jn,sizes:[30,28,26,24],maxLines:2,maxHeight:c})):e.icon?ah[e.icon](s,o,a,e.big?60:34):e.label&&On(s,e.label,o,a,e.w-24,{family:Jn,weight:e.tag?600:500,sizes:e.small?[24,22]:e.label.length===1?[44]:[30,28,26,24,22],maxLines:2,maxHeight:c})}place(e,t){const i=nf(e,t);this._dock={top:i,yaw:t},this.mesh.position.copy(sf(i,t,Qi,da)),this.mesh.rotation.copy(Wl(t,Qi))}dock(){return this._dock?{top:this._dock.top.clone(),yaw:this._dock.yaw,tilt:Qi,scale:Qb}:null}dispose(){this.surface?.dispose(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose(),this.texture.dispose()}}const Gi=10,nM=8192,iM=9e3,sM=1.4,rM=.9,lh=1.15,ch=5e3,rf="sharp.media.renderPath",of="sharp.media.eyeMethod",oM=5e3;function aM(){try{const n=new URLSearchParams(globalThis.location?.search??"").get("eye");return n==="mask"||n==="camera"?n:globalThis.localStorage?.getItem(of)==="mask"?"mask":"camera"}catch{return"camera"}}function lM(){try{const n=new URLSearchParams(globalThis.location?.search??"").get("layers");return n==="0"?"mesh":n==="1"?"layers":globalThis.localStorage?.getItem(rf)==="mesh"?"mesh":"layers"}catch{return"layers"}}function cM(n){try{globalThis.localStorage?.setItem(rf,n)}catch{}}function uM(n,e){return/\.(mp4|m4v|mov)$/i.test(n||"")||/mp4|quicktime/.test(e||"")}class hM extends EventTarget{constructor(){super(),this.kinds=["video","image"],this.stage=null,this.root=new wn,this.root.name="media-viewer",this.root.visible=!1,this.item=null,this.file=null,this.video=null,this.texture=null,this.projection=null,this.decode=null,this.meta=null,this.detected=null,this._audioNote=null,this._audioJudged=!1,this.hud=new tM((e,t)=>this._onHudAction(e,t)),this.root.add(this.hud.mesh),this.diag=new Lb,this.diag.attachTo(this.hud.mesh,this.hud.mesh.geometry.parameters.height),this.eyeMethod=aM(),this._layerReason="",this._eyeTest=null,this._frame={last:0,sum:0,max:0,slow:0,count:0,windowStart:0,shown:{avg:0,max:0,slow:0,count:0}},this._vfc={count:0},this._diagPrev={at:0,vfc:0,dropped:0,total:0,eye:{left:0,right:0,cross:0,mono:0}},this._diagRefreshAt=0,this._diagLogAt=0,this._token=0,this._abort=null,this._stickCooldown=0,this._lastSync=0,this._lastInteract=0,this._mouse=null,this._mouseDownLatch=!1,this._rayLines=new Map,this._tmpHead=new O,this._placePending=0,this._input=null,this._hudResults=null,this._videoHandlers=[],this._buffering=!1,this.resolution="",this.renderPath="mesh",this.renderPref=lM(),this.presenter=null,this._lastPlace=null,this._hudPlaced=!1,this._hudWasVisible=!1,this._layoutFromUser=!1,this.zoom=qb(),this._zoomDirty=!1,this._turnMemory={yaw:0,pitch:0},this._sessionStartAt=0,this._hudBeforeUiOff=!1,this._suspended=!1,this._resume={play:!1,item:null},this._offUi=[],this.perf=null,this._hintTimer=0,this._perf={lastDropped:0,lastTotal:0,at:0}}mount(e){this.stage=e,(e.content??e.scene).add(this.root),this.hud.attachSurface(e),e.camera.layers.enable(Vl);const t=e.renderer?.xr;t?.addEventListener?.("sessionstart",this._onSessionStart),t?.addEventListener?.("sessionend",this._onSessionEnd);for(let i=0;i<2;i++){const s=t?.getController?.(i);s&&(s.addEventListener("connected",r=>{s.userData.inputSource=r.data}),s.addEventListener("disconnected",()=>{delete s.userData.inputSource}))}this._lastInteract=performance.now(),this._offUi.push(Je("ui:visibility",({visible:i})=>this._onUiVisibility(i))),this._offUi.push(Je("ui:anchor",()=>this._onUiAnchor()))}async load(e,t){if(!this.stage)throw new Error("MediaViewer.mount(stage)를 먼저 호출해야 합니다.");this.unload();const i=++this._token,s=new AbortController;this._abort=s,this.item=e,this.file=t;const r=e.name||t.name||"";try{let o=0,a=0,c,l=null,u=null;if(e.kind==="video"){const f=this._createVideo(t.url);this.video=f;const g=uM(r,t.mime||e.mime)?Xb(t.url,t.size??e.size,s.signal):Promise.resolve(null);if(await this._waitForMetadata(f,s.signal),i!==this._token||(l=await g,i!==this._token)||(o=f.videoWidth||l?.width||0,a=f.videoHeight||l?.height||0,u=await sb({name:r,mime:t.mime||e.mime,family:l?.family??null,codec:l?.codec??null,width:o,height:a,frameRate:l?.frameRate||0,bitrate:l?.bitrate||0}),i!==this._token))return;c=new Xp(f),c.colorSpace=yt,c.minFilter=Ct,c.magFilter=Ct,c.generateMipmaps=!1}else if(e.kind==="image"){const f=await this._loadBitmap(t.url,s.signal);if(i!==this._token){f.close?.();return}o=f.width,a=f.height,c=new Rt(f),c.colorSpace=yt,c.flipY=!1,c.minFilter=Ct,c.magFilter=Ct,c.generateMipmaps=!1,c.needsUpdate=!0}else throw new Error(`MediaViewer가 처리할 수 없는 종류입니다: ${e.kind}`);this.meta=l,this.decode=u,this.texture=c,this.resolution=o&&a?`${o}×${a}`:"",this.detected=jy({name:r,width:o,height:a,spatial:l});const h=to(e.layout)?e.layout:Ib(e.id),d=h??this.detected.layout;if(this._layoutFromUser=!!h,this.projection=new wu(c),this.projection.eyeMethod=this.eyeMethod,this.projection.setLayout(d,{width:o,height:a,screenScale:this.zoom.screen,sphereZoom:this.zoom.sphere}),this.projection.setTurn(this._turnMemory.yaw,this._turnMemory.pitch),this.root.add(this.projection.root),this.root.visible=!this._suspended,this._placeAll({aim:!1,hud:!this._hudPlaced}),this._presenting()&&performance.now()-this._sessionStartAt>1500&&(this._placePending=0),this.hud.setState({kind:e.kind,name:r,resolution:this.resolution,warning:u?ua(u):"",warningLevel:u?this._worstLevel(u.warnings):"info"}),this._syncHud(),this._setAudioWarning(this.video?ob(l,f=>this.video.canPlayType(f)):null),u?.warnings.length){const f=u.warnings.find(g=>g.level==="error")??u.warnings[0];this.dispatchEvent(new CustomEvent("warning",{detail:{level:f.level,text:f.text,all:u.warnings}}))}if(St.visible?this._panelOpen?this._hudWasVisible=!0:this.hud.setVisible(!0):this._hudBeforeUiOff=!0,this._lastInteract=performance.now(),!h&&this.detected.confidence!=="high"&&this._flashHint(`형식을 ${this.detected.confidence==="low"?"해상도 비율로 추정":"이름·비율로 판단"}했어요: ${Hn[d].label}. 다르면 아래 ◀ ▶로 바꾸세요.`,8e3),this.video&&this._suspended)this._resume={play:!0,item:e};else if(this.video)try{await this.video.play()}catch{}this._emitState(),this._sniffLater(i,o,a)}catch(o){throw i===this._token&&(this.dispatchEvent(new CustomEvent("error",{detail:{message:o.message}})),this._disposeContent()),o}}unload(){this._token++,this._abort?.abort(),this._abort=null,this._disposeContent(),this.item=null,this.file=null,this.root.visible=!1,this.hud.setVisible(!1)}update(e,t){if(!this.item||!this.projection)return;this._input=t??null;const i=performance.now();this._placePending>0&&this._presenting()&&--this._placePending===0&&(this._placeAll({hud:!1}),this.showHud()),this._viewCamera().getWorldPosition(this._tmpHead),this.projection.follow(this._tmpHead),this._expireHint(i),this._samplePerf(i),this._trackFrame(i),this.diag.visible&&i-this._diagRefreshAt>=500&&(this._diagRefreshAt=i,this.diag.setLines(Ku(this.diagnostics()))),i-this._lastSync>=250&&(this._lastSync=i,this._syncHud());const r=this._collectPointers();this._handleControllerInput(r,e,i),this._autoHide(i),this._updateRays(r),this.hud.tick()}panelPlacement(){return this._hudPlaced||this._placeHud(),{dock:this.hud.dock()}}get _panelOpen(){return St.panelOpen}setSuspended(e){if(e=!!e,e===this._suspended)return;if(this._suspended=e,e){this._resume={play:!!(this.video&&!this.video.paused),item:this.item},this.video?.pause(),this.presenter?.active&&this.presenter.detach(),this.root.visible=!1,this.diag.setVisible(!1);return}const{play:t,item:i}=this._resume;this._resume={play:!1,item:null},!(!this.item||!this.projection)&&(this.root.visible=!0,this._refreshRenderPath(),t&&i===this.item&&this.video?.play().catch(()=>{}),this._emitState())}get suspended(){return this._suspended}onPanelToggle(e){e?(this._hudWasVisible=this.hud.visible,this.hideHud()):this._hudWasVisible&&!this.hud.visible&&this.showHud(),e||(this._hudWasVisible=!1)}setNavState(e){this.hud.setState(e)}panelActions(){const e=[];return this.item?.kind==="video"&&(e.push({id:"media-play",label:"재생/일시정지",run:()=>this.togglePlay()}),e.push({id:"media-back",label:"10초 뒤로",run:()=>this.seekBy(-Gi)}),e.push({id:"media-fwd",label:"10초 앞으로",run:()=>this.seekBy(Gi)})),e.push({id:"media-layout",label:`형식: ${this.layoutInfo?.short??""}`.trim(),run:()=>this.cycleLayout(1)}),e.push({id:"media-hud",label:"재생 컨트롤 보기",run:()=>(this._hudWasVisible=!1,this.showHud(),"close")}),e.push({id:"media-diag",label:`진단 ${this.diag.visible?"숨기기":"보기"}`,run:()=>this.toggleDiag()}),this.projection&&this.projection.info.stereo!=="mono"&&(e.push({id:"media-eyetest",label:`눈 테스트 ${this._eyeTest?"끄기":"켜기"}`,run:()=>this.toggleEyeTest()}),e.push({id:"media-eye",label:`눈 분리: ${this.eyeMethod==="camera"?"카메라(기본)":"마스크"}`,run:()=>this.setEyeMethod(this.eyeMethod==="camera"?"mask":"camera")})),this._presenting()&&this.item?.kind==="video"&&Vr(this.stage.renderer.xr.getSession())&&e.push({id:"media-path",label:`출력: ${this.renderPath==="layers"?"레이어(권장)":"메시"}`,run:()=>this.setRenderPref(this.renderPref==="layers"?"mesh":"layers")}),e}get layout(){return this.projection?.layout??null}get layoutInfo(){return this.projection?Hn[this.projection.layout]:null}getState(){const e=this.video;return{kind:this.item?.kind??null,name:this.item?.name??"",layout:this.layout,detected:this.detected,resolution:this.resolution,playing:!!e&&!e.paused&&!e.ended,time:e?.currentTime??0,duration:Number.isFinite(e?.duration)?e.duration:0,muted:!!e?.muted,volume:e?.volume??1,loop:!!e?.loop,swapEyes:!!this.projection?.swapEyes,decode:this.decode,meta:this.meta,renderPath:this.renderPath,renderPref:this.renderPref,eyeMethod:this.eyeMethod,zoom:this.projection?.zoom??null}}setEyeMethod(e){this.eyeMethod=e==="mask"?"mask":"camera";try{globalThis.localStorage?.setItem(of,this.eyeMethod)}catch{}this.projection?.setEyeMethod(this.eyeMethod),this._flashHint(this.eyeMethod==="camera"?"눈 분리: 카메라 판별(눈마다 맞는 그림만 그림)":"눈 분리: 레이어 마스크(three 기본)",4e3),this._emitState()}toggleEyeTest(){if(this._eyeTest){const o=this._eyeTest;this._eyeTest=null,o.projection.dispose(),o.texture.dispose(),this.projection&&(this.projection.root.visible=this.renderPath!=="layers"),this._flashHint("눈 테스트 패턴을 껐습니다.",3e3);return}if(!this.projection)return;const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d");t.fillStyle="#d02020",t.fillRect(0,0,512,512),t.fillStyle="#2040d0",t.fillRect(512,0,512,512),t.fillStyle="#fff",t.font="bold 380px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("L",256,270),t.fillText("R",768,270);const i=new $s(e);i.colorSpace=yt;const s=new wu(i);s.eyeMethod=this.eyeMethod,s.setLayout("sbsScreenFull",{width:1024,height:512});const r=this._lastPlace??{head:this._tmpHead.clone(),yaw:0};s.place(r.head,r.yaw),this.projection.root.visible=!1,this.presenter?.detach(),this.renderPath="mesh",this.root.add(s.root),this._eyeTest={projection:s,texture:i},this._flashHint("눈 테스트: 왼눈만 뜨면 빨강 L, 오른눈만 뜨면 파랑 R이 보여야 합니다.",12e3)}toggleDiag(){const e=!this.diag.visible;this.diag.setVisible(e),e&&(this._diagRefreshAt=0,this.diag.setLines(Ku(this.diagnostics()))),this.hud.setState({diagOn:e}),this._lastInteract=performance.now()}diagnostics(){if(!this.item||!this.projection)return null;const e=performance.now(),i=this.stage.renderer.xr,s=this._presenting(),r=s?i.getSession?.():null,o=s?[...i.getCamera().cameras??[]]:[],a=r?.renderState?.layers?[...r.renderState.layers].map(m=>m?.constructor?.name??m?.type??"?"):[],c=r?.enabledFeatures?[...r.enabledFeatures]:null,l=this._diagPrev,u=l.at?Math.max(.001,(e-l.at)/1e3):0,h=this.projection.eyeStats,d=m=>u?Math.round((h[m]-l.eye[m])/u):0,f={left:d("left"),right:d("right"),cross:d("cross"),mono:d("mono")};let g=null;const _=this.video;if(_){const m=_.getVideoPlaybackQuality?.()??{droppedVideoFrames:0,totalVideoFrames:0};let p=0;for(let S=0;S<_.buffered.length;S++)_.buffered.start(S)<=_.currentTime+.1&&_.buffered.end(S)>=_.currentTime&&(p=_.buffered.end(S)-_.currentTime);g={presentedFps:u?Math.round((this._vfc.count-l.vfc)/u):0,nominalFps:this.meta?.frameRate?Math.round(this.meta.frameRate*10)/10:0,dropped:m.droppedVideoFrames,total:m.totalVideoFrames,droppedInterval:u?m.droppedVideoFrames-l.dropped:0,totalInterval:u?m.totalVideoFrames-l.total:0,readyState:_.readyState,bufferAhead:Math.round(p*10)/10,codec:this.meta?.codec??"",bitrate:this.meta?.bitrate?Math.round(this.meta.bitrate/1e5)/10:0,source:Cb(_.currentSrc||_.src,globalThis.location?.origin??""),audio:cb({muted:_.muted,volume:_.volume,decodedBytes:_.webkitAudioDecodedByteCount,meta:this.meta})},this._diagPrev={at:e,vfc:this._vfc.count,dropped:m.droppedVideoFrames,total:m.totalVideoFrames,eye:{...h}}}else this._diagPrev={at:e,vfc:0,dropped:0,total:0,eye:{...h}};return{path:this.renderPath,pref:this.renderPref,layout:this.layout,kind:this.item.kind,resolution:this.resolution,presenting:s,layer:{active:!!this.presenter?.active,error:this.presenter?.lastError??"",reason:this._layerReason},xr:{mediaBinding:typeof globalThis.XRMediaBinding<"u",layersFeature:c?c.includes("layers")?"있음":"없음":"?",stateLayers:a,cameras:o.length,masks:o.map(m=>m.layers.mask),viewports:o.map(m=>`${Math.round(m.viewport?.x??0)}+${Math.round(m.viewport?.z??0)}x${Math.round(m.viewport?.w??0)}`)},eye:this.projection.info.stereo==="mono"?null:{method:this.projection.eyeMethod,rate:f},video:g,frame:{...this._frame.shown}}}_trackFrame(e){const t=this._frame;if(t.last){const i=e-t.last;t.sum+=i,t.count++,i>t.max&&(t.max=i),i>25&&t.slow++}t.last=e,t.windowStart||(t.windowStart=e),e-t.windowStart>=2e3&&(t.shown={avg:t.count?Math.round(t.sum/t.count*10)/10:0,max:Math.round(t.max),slow:t.slow,count:t.count},t.sum=0,t.max=0,t.slow=0,t.count=0,t.windowStart=e)}play(){return this._suspended?(this.video&&(this._resume={play:!0,item:this.item}),Promise.resolve()):this.video?.play().catch(()=>{})}pause(){this._suspended&&(this._resume={play:!1,item:this.item}),this.video?.pause()}togglePlay(){if(this.video){if(this._suspended){this._resume.play?this.pause():this.play();return}this.video.paused||this.video.ended?this.play():this.pause()}}seekTo(e){const t=this.video;!t||!Number.isFinite(t.duration)||(t.currentTime=Math.min(Math.max(0,e),t.duration),this._syncHud(!0))}seekBy(e){this.video&&this.seekTo(this.video.currentTime+e)}setMuted(e){this.video&&(this.video.muted=!!e)}setVolume(e){if(!this.video)return;const t=Math.min(1,Math.max(0,Number(e)));this.video.volume=Number.isFinite(t)?t:1,this.video.volume>0&&(this.video.muted=!1)}_idleWarning(){const e=this.decode?ua(this.decode):"",t=this.decode?this._worstLevel(this.decode.warnings):"info";return this._audioNote&&!(e&&t==="error")?{warning:this._audioNote.text,warningLevel:this._audioNote.level}:{warning:e,warningLevel:t}}_setAudioWarning(e){this._audioNote=e,this._buffering||this.hud.setState(this._idleWarning())}_judgeAudio(){const e=this.video;if(!e||this._audioJudged)return;const t=lb({decodedBytes:e.webkitAudioDecodedByteCount,currentTime:e.currentTime,playing:!e.paused&&!e.ended,muted:e.muted});t&&(this._audioJudged=!0,t==="ok"?this._setAudioWarning(null):this._audioNote||this._setAudioWarning(t))}setLoop(e){this.video&&(this.video.loop=!!e)}setLayout(e,{auto:t=!1}={}){if(!this.projection||!to(e))return;const[i,s]=[this.video?.videoWidth||this.texture?.image?.width||0,this.video?.videoHeight||this.texture?.image?.height||0];this.projection.setLayout(e,{width:i||void 0,height:s||void 0}),this._placeAll({aim:!1,hud:!1}),this._syncHud(!0),this.item&&!t&&(this.item.layout=e),t||(this._layoutFromUser=!0,Ub(this.item?.id,e)),this._flashHint(`형식: ${Hn[e].label}`,3e3),this.dispatchEvent(new CustomEvent("layoutchange",{detail:{itemId:this.item?.id,layout:e,auto:t}}))}cycleLayout(e=1){if(!this.projection)return;const t=Ar.indexOf(this.projection.layout),i=Ar[(t+e+Ar.length)%Ar.length];this.setLayout(i)}setSwapEyes(e){this.projection&&(this.projection.setLayout(this.projection.layout,{swapEyes:e}),this._placeAll({aim:!1,hud:!1}),this._syncHud(!0),this._flashHint(e?"눈 바꿈: 켬(좌우 눈 그림을 서로 바꿈)":"눈 바꿈: 끔",3e3))}zoomBy(e,{persist:t=!0}={}){const i=this.projection;if(!i||!Number.isFinite(e)||e<=0)return;const s=i.zoom,r=i.setZoom(s*e);if(this.zoom[i.isScreen?"screen":"sphere"]=r,r===s){t&&this._flashHint(i.isScreen?"더는 줄이거나 키울 수 없어요.":"360/180은 원래 크기보다 작게는 못 줄여요.",2500);return}this._zoomDirty=!0,this._refreshRenderPath(),t&&(this._flushZoom(),this._flashHint(`줌 ${th(i.isScreen?"screen":"sphere",r)}`,2e3)),this._syncHud(t)}setZoom(e){const t=this.projection;t&&this.zoomBy(e/t.zoom)}_flushZoom(){this._zoomDirty&&(this._zoomDirty=!1,Yb(this.zoom))}scaleScreen(e){this.zoomBy(e)}recenter(){this._placeAll({hud:!1})}resetView(){this.recenter()}showHud(){if(St.visible){if(this._panelOpen){this._hudWasVisible=!0;return}this._hudPlaced||this._placeHud(),this.hud.setVisible(!0),this._lastInteract=performance.now()}}callHud(){!St.visible||this._panelOpen||(this._placeHud(),this.hud.setVisible(!0),this._lastInteract=performance.now())}hideHud(){this.hud.setVisible(!1)}toggleHud(){this.hud.visible?this.hideHud():this.showHud()}setRenderPref(e){this.renderPref=e==="mesh"?"mesh":"layers",cM(this.renderPref),this._refreshRenderPath(),this._flashHint(this.renderPath==="layers"?"영상 출력: 컴포지터 레이어(부드러움·입체 권장)":"영상 출력: 메시(레이어를 못 쓰거나 꺼짐)",4e3),this._syncHud(!0),this._emitState()}setMousePointer(e,t){t&&(this._mouseDownLatch=!0),this._mouse=e?{id:"mouse",origin:e.ray.origin.clone(),direction:e.ray.direction.clone(),pressed:!!t}:null}dispose(){this.unload();for(const e of this._offUi.splice(0))e();this._lastPlace=null,this._hudPlaced=!1,this.stage?.renderer?.xr?.removeEventListener?.("sessionstart",this._onSessionStart),this.stage?.renderer?.xr?.removeEventListener?.("sessionend",this._onSessionEnd),this._eyeTest&&this.toggleEyeTest(),this.diag.dispose(),this.hud.dispose(),this.root.removeFromParent()}_onSessionStart=()=>{this._lastPlace=null,this._hudPlaced=!1,this._sessionStartAt=performance.now(),this._placePending=4};_onSessionEnd=()=>{this.presenter?.detach(),this.hud.detachSurface(),this.renderPath="mesh",this._placePending=0,this.projection&&(this.projection.root.visible=!0,this._lastPlace=null,this._hudPlaced=!1,this._placeAll())};_viewCamera(){const{renderer:e,camera:t}=this.stage;return this._presenting()?e.xr.getCamera():t}_presenting(){return this.stage.isPresenting?!!this.stage.isPresenting():!!this.stage.renderer?.xr?.isPresenting}_headYaw(){const e=this._viewCamera(),t=new O(0,0,-1).transformDirection(e.matrixWorld);return Math.atan2(-t.x,-t.z)}_placeAll({aim:e=!0,hud:t=!0}={}){if(!this.projection)return;const i=e||!this._lastPlace;if(i){const s=this._viewCamera();s.updateMatrixWorld(!0),s.getWorldPosition(this._tmpHead),this._lastPlace={head:this._tmpHead.clone(),yaw:this._headYaw()},this._turnMemory={yaw:0,pitch:0}}this.projection.place(this._lastPlace.head,this._lastPlace.yaw,{keepTurn:!i}),t&&this._placeHud(),this._refreshRenderPath()}_placeHud(){const{head:e,yaw:t}=St.reference(this.stage.camera);this.hud.place(e,t),this._hudPlaced=!0}_onUiVisibility(e){if(!e){this._hudBeforeUiOff=this._hudBeforeUiOff||this.hud.visible,this.hud.setVisible(!1);return}const t=this._hudBeforeUiOff&&!this._panelOpen&&!!this.item&&!!this.projection;this._hudBeforeUiOff=!1,t&&this.showHud()}_onUiAnchor(){!this.item||!this.projection||(this._placeHud(),this._lastInteract=performance.now())}_layerSpec(){const e=this.projection;if(!e)return null;const t=this.video?.videoWidth||void 0,i=this.video?.videoHeight||void 0;return iS(e.layout,{width:t,height:i,screenScale:e.screenScale,swapEyes:e.swapEyes,sphereZoom:e.sphereZoom})}_contentQuaternion(){const e=this.projection;return new $t().setFromEuler(new fn(e.turn.pitch,e.baseYaw+e.turn.yaw,0,"YXZ"))}_refreshRenderPath(){const e=this.projection;if(!e)return;if(this._suspended){this.presenter?.active&&this.presenter.detach();return}const t=this._presenting()?this.stage.renderer.xr.getSession?.():null,i=this.video&&this.renderPref==="layers"&&t&&Vr(t)?this._layerSpec():null;if(!i){this.presenter?.active&&this.presenter.detach(),this.renderPath="mesh",e.root.visible=!0,this._layerReason=this._layerReasonNow(t);return}this._layerReason="",this.presenter??=new sS(this.stage);const s=this.presenter.spec,r=s&&s.kind===i.kind&&s.layout===i.layout&&s.centralHorizontalAngle===i.centralHorizontalAngle;if(this.presenter.active&&r){this.presenter.update(i,e.shell.position,this._contentQuaternion()),this.renderPath="layers",e.root.visible=!1;return}const o=this.presenter.attach(this.video,i,e.shell.position,this._contentQuaternion());this.renderPath=o?"layers":"mesh",e.root.visible=!o,this._syncHud(!0)}_layerReasonNow(e){return this._presenting()?this.video?this.renderPref!=="layers"?"선호가 메시":typeof globalThis.XRMediaBinding>"u"?"이 브라우저에 XRMediaBinding 없음":Vr(e)?this.projection?.swapEyes?"눈 바꿈 켬":!this.projection?.isScreen&&this.projection?.sphereZoom>1.001?"확대 중(구는 메시로 그림)":"":"세션에 'layers' 기능 없음":"사진은 메시 경로":"VR 세션이 아님(2D 미리보기)"}_updateLayerPose(){if(!this.presenter?.active||!this.projection)return;const e=this._layerSpec();e&&this.presenter.update(e,this.projection.shell.position,this._contentQuaternion())}_samplePerf(e){if(!this.video||!this._presenting()||e-this._perf.at<5e3)return;const t=this.video.getVideoPlaybackQuality?.();if(!t)return;const i=t.droppedVideoFrames-this._perf.lastDropped,s=t.totalVideoFrames-this._perf.lastTotal;this._perf.at&&s>0&&console.info(`[media-perf] path=${this.renderPath} layout=${this.layout} ${this.resolution} 5초: 표시 ${s}프레임, 드롭 ${i}`),this._perf={lastDropped:t.droppedVideoFrames,lastTotal:t.totalVideoFrames,at:e},this.perf={path:this.renderPath,dropped:i,total:s},this._logDiag(e)}_logDiag(e){if(!(e-this._diagLogAt<oM)){this._diagLogAt=e;try{console.info("[media-diag]",JSON.stringify(this.diagnostics()))}catch{}}}flashHint(e,t=ch){this._flashHint(e,t)}_flashHint(e,t=ch){this.hud.setState({hint:e}),this._hintTimer=performance.now()+t}_expireHint(e){this._hintTimer&&e>this._hintTimer&&(this._hintTimer=0,this.hud.setState({hint:""}))}async _sniffLater(e,t,i){if(this._layoutFromUser||!this.detected||this.detected.confidence!=="low"||!t||!i)return;const s=this.video??this.texture?.image;if(s)try{if(this.video&&this.video.readyState<2&&await new Promise(f=>{const g=()=>f();this.video.addEventListener("loadeddata",g,{once:!0}),setTimeout(g,4e3)}),e!==this._token||this._layoutFromUser)return;const r=t/i,o=128,a=Math.max(16,Math.round(o/r)),c=document.createElement("canvas");c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.drawImage(s,0,0,o,a);const{data:u}=l.getImageData(0,0,o,a),h=new Uint8Array(o*a);for(let f=0;f<h.length;f++)h[f]=u[f*4]*77+u[f*4+1]*150+u[f*4+2]*29>>8;const d=Jy(this.detected,Zy(h,o,a),r);d!==this.detected&&d.layout!==this.layout&&(this.detected=d,this.setLayout(d.layout,{auto:!0}),this._flashHint(`형식을 화면 내용으로 판단했어요: ${Hn[d.layout].label}. 다르면 ◀ ▶로 바꾸세요.`,8e3))}catch{}}_worstLevel(e){return e.some(t=>t.level==="error")?"error":e.some(t=>t.level==="warn")?"warn":"info"}_createVideo(e){const t=document.createElement("video");if(t.crossOrigin="anonymous",t.defaultMuted=!1,t.muted=!1,t.volume=1,this._audioJudged=!1,t.playsInline=!0,t.setAttribute("playsinline",""),t.preload="auto",t.loop=!1,t.disablePictureInPicture=!0,t.disableRemotePlayback=!0,t.style.cssText="position:fixed;left:-9999px;top:0;width:2px;height:2px;opacity:0;pointer-events:none;",document.body?.appendChild(t),t.src=e,t.requestVideoFrameCallback){const s=()=>{this._vfc.count++,t.isConnected&&this.video===t&&t.requestVideoFrameCallback(s)};t.requestVideoFrameCallback(s)}const i=(s,r)=>{t.addEventListener(s,r),this._videoHandlers.push([s,r])};i("play",()=>this._emitState()),i("pause",()=>this._emitState()),i("ended",()=>{this._emitState(),this.showHud()}),i("volumechange",()=>this._syncHud(!0)),i("timeupdate",()=>this._judgeAudio()),i("waiting",()=>this._setBuffering(!0)),i("stalled",()=>{!t.paused&&t.readyState<3&&this._setBuffering(!0)});for(const s of["playing","canplay","seeked","pause"])i(s,()=>this._setBuffering(t.readyState<3&&!t.paused));return i("error",()=>{const s=this._videoErrorMessage(t);this.hud.setState({warning:s,warningLevel:"error"}),this.dispatchEvent(new CustomEvent("error",{detail:{message:s}}))}),t}_setBuffering(e){!this.video||this._buffering===e||(this._buffering=e,this.hud.setState(e?{warning:"버퍼링 중…",warningLevel:"info"}:this._idleWarning()),this.dispatchEvent(new CustomEvent("buffering",{detail:{buffering:e}})))}_videoErrorMessage(e){return Kb({code:e.error?.code,url:e.currentSrc||e.src,family:this.meta?.family,hint:this.decode?ua(this.decode):""})}_waitForMetadata(e,t){return new Promise((i,s)=>{if(e.readyState>=1)return i();const r=()=>{e.removeEventListener("loadedmetadata",o),e.removeEventListener("error",a),t.removeEventListener("abort",c),clearTimeout(l)},o=()=>{r(),i()},a=()=>{r(),s(new Error(this._videoErrorMessage(e)))},c=()=>{r(),s(new DOMException("중단됨","AbortError"))},l=setTimeout(()=>{r(),s(new Error("영상 정보를 읽는 데 시간이 너무 오래 걸립니다."))},3e4);e.addEventListener("loadedmetadata",o),e.addEventListener("error",a),t.addEventListener("abort",c)})}async _loadBitmap(e,t){const i=await fetch(e,{signal:t});if(!i.ok)throw new Error(`사진을 읽지 못했습니다(${i.status}).`);const s=await i.blob(),r=this.stage.renderer?.capabilities?.maxTextureSize??4096,o=Math.min(r,nM),a={imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"};let c=await createImageBitmap(s,a);const l=Math.max(c.width,c.height);if(l>o){const u=o/l,h=await createImageBitmap(s,{...a,resizeWidth:Math.round(c.width*u),resizeHeight:Math.round(c.height*u),resizeQuality:"high"});c.close?.(),c=h}return c}_syncHud(e=!1){const t=this.getState(),i=this.layoutInfo;this.hud.setState({kind:t.kind??"video",playing:t.playing,time:Math.floor(t.time*4)/4,duration:t.duration,muted:t.muted,loop:t.loop,swapEyes:t.swapEyes,layoutLabel:i?.label??"",layoutShort:i?.short??"",pathLabel:this.renderPath==="layers"?"레이어":"",stereo:!!i&&i.stereo!=="mono",canScale:!!this.projection,zoomLabel:this.projection?th(this.projection.isScreen?"screen":"sphere",this.projection.zoom):""}),e&&this.hud.tick()}_emitState(){this._syncHud(!0),this.dispatchEvent(new CustomEvent("state",{detail:this.getState()}))}_onHudAction(e,t){switch(this._lastInteract=performance.now(),e){case"play":this.togglePlay();break;case"back10":this.seekBy(-Gi);break;case"fwd10":this.seekBy(Gi);break;case"seek":this.video&&Number.isFinite(this.video.duration)&&this.seekTo(this.video.duration*t);break;case"mute":this.setMuted(!this.video?.muted);break;case"loop":this.setLoop(!this.video?.loop);break;case"layoutPrev":this.cycleLayout(-1);break;case"layoutNext":this.cycleLayout(1);break;case"swap":this.setSwapEyes(!this.projection?.swapEyes);break;case"sizeDown":this.zoomBy(1/lh);break;case"sizeUp":this.zoomBy(lh);break;case"diag":this.toggleDiag();break;case"recenter":this.recenter();break;case"close":this.hideHud();break;default:typeof e=="string"&&e.startsWith("nav")&&this.dispatchEvent(new CustomEvent("nav",{detail:{id:e}}));break}this._emitState()}_collectPointers(){const e=[],t=this.stage.renderer?.xr;if(this._presenting()&&t)for(let i=0;i<2;i++){const s=t.getController(i),r=s.userData.inputSource??this._sourceFor(i);r&&(s.parent||(this.stage.player??this.stage.scene).add(s),s.updateWorldMatrix(!0,!1),e.push({id:i,origin:s.getWorldPosition(new O),direction:new O(0,0,-1).transformDirection(s.matrixWorld),hand:r.handedness,pressed:this._input?(this._input[r.handedness]?.trigger??0)>.6:!!r.gamepad?.buttons?.[0]?.pressed,source:r,controller:s}))}return this._mouse&&(e.push(this._mouseDownLatch?{...this._mouse,pressed:!0}:this._mouse),this._mouseDownLatch=!1),e}_sourceFor(e){const t=this.stage.renderer?.xr?.getSession?.()?.inputSources;return t&&t[e]?t[e]:null}_handleControllerInput(e,t,i){const s=this.hud.visible?this.hud.updatePointers(e,i):new Map;if(this.hud.visible&&[...this.hud.hover.values()].some(Boolean)&&(this._lastInteract=i),this._hudResults=s,!this.item||!this.projection)return;const r=this._input;if(!r?.presenting)return;this._stickCooldown=Math.max(0,this._stickCooldown-t);const o=g=>this.hud.visible&&e.some(_=>_.hand===g&&s.get(_.id)),a=pn.get();this._actions??=ho(["media.controls","media.playPause","media.recenter"]);const c=this._actions.update(r),l=g=>g?.button==="trigger"&&(g.hand==="either"?o("left")||o("right"):o(g.hand));c.has("media.controls")&&!l(a["media.controls"])&&(this.toggleHud(),this._lastInteract=i),c.has("media.playPause")&&!l(a["media.playPause"])&&(this.item.kind==="video"?this.togglePlay():this.toggleHud(),this._lastInteract=i),c.has("media.recenter")&&(this.recenter(),this._flashHint("화면을 지금 보는 방향으로 맞췄어요.",2500),this._lastInteract=i);const{x:u,y:h}=ld(r,a["media.turn"]);if(u!==0||h!==0){const g=Ab(u,h,sM,t);this.projection.addTurn(g.yaw,g.pitch),this.renderPath==="layers"&&this._updateLayerPose(),this._lastInteract=i}const{scrub:d,zoom:f}=ud(r,a);if(f!==0?(this.zoomBy(Math.exp(f*rM*t),{persist:!1}),this._lastInteract=i):this._flushZoom(),this.item.kind==="video"){const g=d;Math.abs(g)>.7&&this._stickCooldown===0?(this.seekBy(g>0?Gi:-Gi),this._stickCooldown=.4,this._lastInteract=i):Math.abs(g)<.4&&(this._stickCooldown=0)}}_autoHide(e){!this.hud.visible||!this.video||this.video.paused||e-this._lastInteract>iM&&this.hideHud()}_updateRays(e){const t=this.hud.visible;for(const i of e){if(!i.controller)continue;let s=this._rayLines.get(i.id);if(!s){const o=new Yt;o.setAttribute("position",new dn([0,0,0,0,0,-1],3)),s=new Pl(o,new lo({color:9224447,transparent:!0,opacity:.8,depthTest:!1})),s.name="media-ray",s.renderOrder=101,s.frustumCulled=!1,i.controller.add(s),this._rayLines.set(i.id,s)}s.visible=t;const r=this._hudResults?.get(i.id);s.scale.z=r?r.distance:1.5}}_disposeContent(){this._eyeTest&&this.toggleEyeTest(),this.presenter?.detach(),this.renderPath="mesh",this.projection&&(this._turnMemory={yaw:this.projection.turn.yaw,pitch:this.projection.turn.pitch}),this._flushZoom(),this._layoutFromUser=!1,this._hintTimer=0,this.hud.setState({hint:"",pathLabel:""});for(const[e,t]of this._videoHandlers)this.video?.removeEventListener(e,t);this._videoHandlers=[],this.video&&(this.video.pause(),this.video.removeAttribute("src"),this.video.load(),this.video.remove(),this.video=null),this._audioNote=null,this._audioJudged=!1,this.diag.setVisible(!1),this.hud.setState({diagOn:!1}),this.projection&&(this.projection.dispose(),this.projection=null),this.texture&&(this.texture.image?.close?.(),this.texture.dispose(),this.texture=null),this.decode=null,this.meta=null,this.detected=null,this._buffering=!1,this.resolution="";for(const e of this._rayLines.values())e.removeFromParent(),e.geometry.dispose(),e.material.dispose();this._rayLines.clear()}}function dM(){return new hM}const fM="modulepreload",pM=function(n){return"/sharp-gaussian-splatting-vr-toolkit/"+n},uh={},mM=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(t.map(l=>{if(l=pM(l),l in uh)return;uh[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":fM,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},af={minFrames:180,cooldownMs:6e3,avgOver:1.15,movingP95Over:1.6,movingMinFrames:90,sortSteps:[50,120],floorLevel:3},gM=4,_M=49,vM=n=>Math.min(n*gM,_M),xM=(n,e)=>n>vM(e),yM=30,SM=.5,bM=8;function MM({window:n=yM,fraction:e=SM,minFrames:t=bM}={}){let i=[],s=!1,r=null;return{push(o,a,c){const l=xM(o,c);i.push(l),i.length>n&&i.shift();const u={ms:o,moving:a};if(!l)return r=null,s=!1,[u];const h=i.length>=t&&i.filter(Boolean).length/i.length>=e,d=[];return r&&d.push(r),r=null,s||h?d.push(u):r=u,s=!0,d},reset(){i=[],s=!1,r=null}}}function hh(n){return 1e3/(Number.isFinite(n)&&n>=30?n:72)}function EM(n,e,t=af){return n.frames<t.minFrames?!1:n.avgMs>e*t.avgOver?!0:n.moving.frames>=t.movingMinFrames&&n.moving.p95Ms>e*t.movingP95Over}function TM(n,{budgetMs:e,sortMs:t,level:i,sinceChangeMs:s},r=af){if(s<r.cooldownMs||!EM(n,e,r))return null;const o=r.sortSteps.find(a=>a>t);return o!==void 0?{sortMs:o}:i!==null&&i>r.floorLevel?{level:i-1}:null}const wM=.05,AM=.15,RM=(n,e)=>n>wM||e>AM;function fa(n,e){return n.length?n[Math.min(n.length-1,Math.floor(e*n.length))]:0}function dh(n=720){let e=[];return{add(t,i){!(t>0)||!Number.isFinite(t)||(e.push({ms:t,moving:!!i}),e.length>n&&e.shift())},reset(){e=[]},summary(){const t=e.map(a=>a.ms).sort((a,c)=>a-c),i=a=>{const c=e.filter(l=>l.moving===a).map(l=>l.ms).sort((l,u)=>l-u);return{frames:c.length,p95Ms:fa(c,.95)}},s=t.reduce((a,c)=>a+c,0),r=t.length?s/t.length:0,o=fa(t,.5);return{frames:t.length,fps:r?1e3/r:0,avgMs:r,p95Ms:fa(t,.95),worstMs:t.length?t[t.length-1]:0,dropRate:t.length?t.filter(a=>a>o*1.5).length/t.length:0,moving:i(!0),still:i(!1)}}}}function fh(n,e=1e3/72){if(n.moving.frames<30||n.still.frames<30)return null;const t=e*1.3;return n.moving.p95Ms>t&&n.moving.p95Ms>n.still.p95Ms*1.25?"motion":n.still.p95Ms>t?"slow":"ok"}const pa=n=>n.toFixed(1);function ph(n){if(!n.frames)return"측정 중…";const e=[`${Math.round(n.fps)}fps`];return n.moving.frames>=30&&e.push(`움직일 때 ${pa(n.moving.p95Ms)}ms`),n.still.frames>=30&&e.push(`가만히 ${pa(n.still.p95Ms)}ms`),e.length===1&&e.push(`p95 ${pa(n.p95Ms)}ms`),e.join(" · ")}const Cs=800,Ps=400,lf=.62,mh=lf*(Ps/Cs),ma="system-ui, 'Noto Sans KR', sans-serif";function cf(n=pn.get()){const e=i=>Bs(n,i);return[["그립(옆 버튼)","장면 잡고 이동·돌리기"],["양손 그립","벌리면 확대, 모으면 축소"],[e("splat.move"),"이동"],[e("splat.turn"),"30° 돌리기"],[e("splat.height"),"높이"],[e("splat.fit"),"크기·위치 맞춤 (한 번 더: 1:1 몰입)"],[e("splat.resetSize"),"크기만 되돌리기"],[`${e("common.prev")} / ${e("common.next")}`,"이전 · 다음 파일"],[e("common.uiToggle"),"UI 켜기·끄기"],[e("common.uiMove"),"UI를 여기로 옮기기"]].filter(([i])=>!i.includes("지정 안 함")||i.includes("/"))}cf();function CM(n,e,t){const i=t.clone().sub(n),s=i.length();return s<.12||s>.8?!1:i.normalize().dot(e)>Math.cos(38*Math.PI/180)}function PM({scene:n,camera:e,getHand:t}){const i=document.createElement("canvas");i.width=Cs,i.height=Ps;const s=i.getContext("2d"),r=new $s(i);r.colorSpace=yt;const o=new Xt(new ui(lf,mh),new li({map:r,transparent:!0,depthTest:!1,toneMapped:!1}));o.renderOrder=998,o.visible=!1,n.add(o),d();const a=pn.subscribe(()=>d()),c=new O,l=new O,u=new O;let h=0;function d(){s.clearRect(0,0,Cs,Ps),s.fillStyle="rgba(17, 22, 26, 0.92)",s.beginPath(),s.roundRect(0,0,Cs,Ps,28),s.fill(),s.strokeStyle="#4fb3ff",s.lineWidth=4,s.stroke(),s.textBaseline="middle",s.font=`600 34px ${ma}`,s.fillStyle="#e8eef2",s.textAlign="left",s.fillText("PLY 조작",32,38);const f=cf(),g=Math.min(44,(Ps-92)/f.length),_=Math.round(Math.min(26,g*.62)),m=(p,S,x)=>{let v=_;for(s.font=`${S} ${v}px ${ma}`;v>14&&s.measureText(p).width>x;)v-=1,s.font=`${S} ${v}px ${ma}`};f.forEach(([p,S],x)=>{const v=82+g/2+x*g;m(p,600,300),s.fillStyle="#4fb3ff",s.fillText(p,32,v),m(S,400,Cs-350-24),s.fillStyle="#e8eef2",s.fillText(S,350,v)}),r.needsUpdate=!0}return{get visible(){return St.visible&&(o.visible||performance.now()<h)},showToast(f=9){h=performance.now()+f*1e3},hideToast(){h=0},get toastActive(){return performance.now()<h},update(f){if(!f||!St.visible){o.visible=!1;return}if(e.getWorldPosition(c),e.getWorldDirection(l),performance.now()<h){const _=St.reference(e);o.scale.setScalar(1),o.rotation.copy(Wl(_.yaw,Qi)),o.position.copy(sf(nf(_.head,_.yaw),_.yaw,Qi,mh)),o.visible=!0;return}const g=t();if(g&&(g.getWorldPosition(u),CM(c,l,u))){o.position.copy(u).add(new O(0,.12,0)),o.scale.setScalar(.55),o.lookAt(c),o.visible=!0;return}o.visible=!1},dispose(){a(),n.remove(o),o.geometry.dispose(),o.material.dispose(),r.dispose()}}}const LM={accelHalfLife:.1,decelHalfLife:.08,headingHalfLife:.12,stopBelow:.01},ga=Math.PI*2;function gh(n){const e=((n+Math.PI)%ga+ga)%ga-Math.PI;return e===-Math.PI?Math.PI:e}function uf(n,e){return n>0?e>0?1-Math.pow(.5,n/e):1:0}function DM(n,e,t,i){return n+(e-n)*uf(t,i)}function IM(n,e,t,i){return gh(n+gh(e-n)*uf(t,i))}function UM(n=LM){let e=0,t=0,i=0,s=null;return{step(r,o,a){const c=Math.hypot(e,t,i)>n.stopBelow;o!==null&&Number.isFinite(o)?s=s===null||!c?o:IM(s,o,a,n.headingHalfLife):s===null&&(s=0);const l=(d,f)=>Math.abs(f)>Math.abs(d)-1e-9,u=(d,f)=>DM(d,f,a,l(d,f)?n.accelHalfLife:n.decelHalfLife);return e=u(e,r.right),t=u(t,r.forward),i=u(i,r.up),!r.right&&!r.forward&&!r.up&&Math.hypot(e,t,i)<n.stopBelow&&(e=t=i=0),{right:e,forward:t,up:i,heading:s,moving:e!==0||t!==0||i!==0}},reset(){e=t=i=0,s=null},get active(){return e!==0||t!==0||i!==0}}}function NM(n){return{forward:{x:-Math.sin(n),z:-Math.cos(n)},right:{x:Math.cos(n),z:-Math.sin(n)}}}const hf="sharp-quest.ply-options",FM=[1,3,5,7,10],df=[.7,.85,1,1.2,1.5],Wr=["auto",120,"preset"],os=50,Wi={maxPixelRadius:512,clipXY:4,maxStdDev:Math.sqrt(8),minAlpha:1/255,coneFoveate:1,behindFoveate:1},OM=Object.freeze({keepPose:!0,fullView:!1,pointSize:1,prefetch:!0,sortMs:"auto"});function _h(n){const e={...OM};return n&&typeof n=="object"&&(typeof n.keepPose=="boolean"&&(e.keepPose=n.keepPose),typeof n.fullView=="boolean"&&(e.fullView=n.fullView),typeof n.prefetch=="boolean"&&(e.prefetch=n.prefetch),df.includes(n.pointSize)&&(e.pointSize=n.pointSize),Wr.includes(n.sortMs)&&(e.sortMs=n.sortMs)),e}function kM(n=ff()){try{return _h(JSON.parse(n?.getItem(hf)??"null"))}catch{return _h(null)}}function BM(n,e=ff()){try{e?.setItem(hf,JSON.stringify(n))}catch{}}function ff(){try{return globalThis.localStorage??null}catch{return null}}function vh(n,e,t=1){let i=n.indexOf(e);return i<0?(i=n.reduce((s,r,o)=>Math.abs(r-e)<Math.abs(n[s]-e)?o:s,0),n[i]):n[(i+t+n.length)%n.length]}function xh(n){return Id({mode:"safe",level:n}).spark}function zM(n,e,t=os){return n==="preset"?null:n==="auto"?e?t:null:typeof n=="number"?n:null}function HM(n,{fullView:e,pointSize:t,sortMs:i="auto"},{vr:s=!1,autoSortMs:r=os}={}){const o={...n},a=zM(i,s,r);return a&&(o.minSortIntervalMs=Math.max(n.minSortIntervalMs??0,a)),e?(o.maxPixelRadius=Math.max(n.maxPixelRadius??0,Wi.maxPixelRadius),o.clipXY=Math.max(n.clipXY??1.4,Wi.clipXY),o.maxStdDev=Math.max(n.maxStdDev??0,Wi.maxStdDev),o.minAlpha=Math.min(n.minAlpha??1,Wi.minAlpha),o.coneFoveate=Wi.coneFoveate,o.behindFoveate=Wi.behindFoveate):o.clipXY=n.clipXY??1.4,o.focalAdjustment=(n.focalAdjustment??1)*t,o}const VM=(n,e)=>e===null?n:`${n} (자동 ${e})`;function GM(n,e=null){return n==="preset"?"이전 값":n!=="auto"?`${n}ms`:!e||e.sortMs===null&&e.level===null?`자동 (VR ${os}ms~)`:`자동 (지금 ${e.sortMs??os}ms${e.level!==null?` · 화질 ${e.level}`:""})`}const WM=n=>`×${n.toFixed(2).replace(/\.?0+$/,"")}`,$M=.75,XM=.6,yh=[.3,2],qM=3,YM=15e4,jM=1e4,KM=1e3,ZM=new O(0,1,0),JM=120*1024*1024,QM=["maxStdDev","minPixelRadius","maxPixelRadius","minAlpha","clipXY","focalAdjustment","minSortIntervalMs","coneFoveate","behindFoveate"];function eE(n,e,t){let i=0,s=0;return n.pipeThrough(new TransformStream({transform(r,o){i+=r.byteLength;const a=performance.now();if(a-s>250){s=a;const c=e?` / ${bn(e)}`:"";xt("app:status",{text:`PLY 받는 중… ${t} (${bn(i)}${c})`,kind:""})}o.enqueue(r)}}))}function tE({preset:n,savePreset:e=()=>{}}){let t=null,i=null,s=null,r=null,o=0,a=0;const c=new wn,l=new em(4,16,4350058,2503738);l.visible=!1;let u=kM(),h=n.spark,d=n.label,f=n.mode==="safe"?n.level:null;const g={sortMs:null,level:null,at:0,checkedAt:0};let _=null,m=!1,p=null,S=1,x="fit",v=!0,E=null,R=!1,P=!1;const k=dh(),A=dh(),w=MM(),D={position:new O,quaternion:new $t,valid:!1};let $=0;function F(){g.sortMs=null,g.level=null,g.at=performance.now(),g.checkedAt=g.at}function W(b,N){if(u.sortMs!=="auto")return;const B=t.renderer.xr.getSession?.(),K=TM(b,{budgetMs:hh(B?.frameRate),sortMs:g.sortMs??os,level:g.level??f,sinceChangeMs:N-g.at});K&&(K.sortMs!==void 0&&(g.sortMs=K.sortMs),K.level!==void 0&&(g.level=K.level),g.at=N,A.reset(),w.reset(),be(),console.info(`[splat] 프레임 부족 → 자동 조절: ${K.sortMs!==void 0?`정렬 갱신 ${K.sortMs}ms`:`화질 ${K.level}/10`}`))}function te(b){if(t.camera.getWorldPosition(de),t.camera.getWorldQuaternion(Ee),D.valid&&b>0){const B=RM(de.distanceTo(D.position)/b,Ee.angleTo(D.quaternion)/b);k.add(b*1e3,B);for(const K of w.push(b*1e3,B,hh(t.renderer.xr.getSession?.()?.frameRate)))A.add(K.ms,K.moving)}D.position.copy(de),D.quaternion.copy(Ee),D.valid=!0;const N=performance.now();if(N-g.checkedAt>KM&&(g.checkedAt=N,W(A.summary(),N)),N-$>jM){$=N;const B=k.summary();B.frames>=60&&console.info(`[splat] VR 프레임 ${ph(B)} · 끊김 ${(B.dropRate*100).toFixed(1)}% · 판정 ${fh(B)??"표본 부족"}`)}}const I={left:Yu(),right:Yu()},G=wb(),C=UM(),X=ho(["splat.fit","splat.resetSize"]);let q=null;const oe=new O;new O;const de=new O,Ee=new $t,ye=new O,Pe={left:{position:new O,quaternion:new $t},right:{position:new O,quaternion:new $t}};let Y=null,j=!1;function ge(){if(j){r?.parent&&c.remove(r),i?.parent&&t.scene.remove(i),l.visible=!1,Y?.update(!1);return}r&&!r.parent&&c.add(r),i&&!i.parent&&t.scene.add(i),r&&(l.visible=!0),D.valid=!1,w.reset()}async function Re(){return s||(s=await mM(()=>import("./spark.module-BHn3E0b0.js"),[])),i||(i=new s.SparkRenderer({renderer:t.renderer,...n.spark}),j||t.scene.add(i),be()),s}function be(){if(t?.renderer.xr.setFoveation?.(u.fullView?0:1),!i)return;const b=g.level!==null?xh(g.level):h,N=HM(b,u,{vr:!!t?.isPresenting(),autoSortMs:g.sortMs??os});for(const B of QM)N[B]!==void 0&&(i[B]=N[B]);for(const B of[r,_?.mesh])B&&(B.coneFoveate=u.fullView?N.coneFoveate:n.mesh.coneFoveate,B.behindFoveate=u.fullView?N.behindFoveate:n.mesh.behindFoveate)}function Ve(b){u={...u,...b},BM(u),be(),u.prefetch||L()}function Ye(b){f=b,d=`안전 ${b}/10`,h=xh(b),g.level=null,e(`safe:${b}`),be()}function L(){_&&(_.mesh.dispose?.(),_=null)}async function Xe(b,N){const B={...n.mesh,fileName:N.name},K=Gv(N.name);K&&(B.fileType=K),N.stream?(B.stream=eE(await N.stream(),N.size,N.name),N.size&&(B.streamLength=N.size)):B.url=N.url;const re=new b(B);return re.quaternion.set(1,0,0,0),re}function De(){r&&(r.parent&&c.remove(r),r.dispose?.(),r=null,a=0,p=null,E=null,q=null)}function Ie(b){const N=b.packedSplats?.numSplats??b.numSplats??0,B=Math.max(1,Math.ceil(N/YM)),K=new Float32Array(Math.ceil(N/B)*3);let re=0;try{b.forEachSplat((J,ae,xe,ne,he)=>{J%B!==0||he<.05||(K[re++]=ae.x,K[re++]=-ae.y,K[re++]=-ae.z)})}catch(J){console.warn("[splat] 범위 계산 실패(기본 배치 사용)",J)}return bb(K.subarray(0,re))}function _e(b){c.position.copy(b.position),c.rotation.set(0,b.yaw,0),c.scale.setScalar(b.scale),c.updateMatrixWorld(!0)}const Ke=()=>({position:c.position.clone(),yaw:c.rotation.y,scale:c.scale.x}),we=()=>({min:Math.min(S,1)*fb,max:Math.max(S,1)*pb});function Fe(b,N){if(!t||!r)return;const B=t.isPresenting();let K=new O(0,0,0),re=0;B&&(t.camera.getWorldPosition(K),t.camera.getWorldQuaternion(Ee),re=Sb(Ee));const J=qu(p,{headPosition:K,heading:re,mode:"fit"});S=J.scale;const ae=B?b:"fit",xe=ae==="fit"?J:qu(p,{headPosition:K,heading:re,mode:ae});if(_e(xe),x=ae,v=!1,m=!0,l.position.y=B?K.y>.7?0:K.y-1.4:-.5,l.position.x=K.x,l.position.z=K.z-(B?0:1.25),l.visible=!j,B)N&&Y?.showToast(9);else{const ne=ha(xe,p?.center??new O);t.controls.target.copy(ne),t.camera.position.copy(ne).add(new O(0,.15,1.9)),t.controls.update()}}function se(b,{intro:N=!1}={}){r&&(t.isPresenting()?E={mode:b,frames:qM,intro:N}:(E=null,Fe(b,N)))}function me(){if(!r)return;const b=Ke(),N=p?.center??new O,B=ha(b,N);b.scale=S,b.position.copy(B).sub(N.clone().multiplyScalar(S).applyAxisAngle(ZM,b.yaw)),_e(b),v=!0,xt("app:status",{text:"크기를 맞췄습니다",kind:""})}function T(b="fit"){r&&(t.isPresenting()&&t.resetPlayer(),se(b))}function y(){T(x==="fit"&&!v?"immersive":"fit")}function z(b){const N=t.controllers[b];return N?(N.updateWorldMatrix(!0,!1),N.matrixWorld.decompose(Pe[b].position,Pe[b].quaternion,ye),Pe[b]):null}function ee(b){const N={left:I.left.update(b.left.grip)&&!!t.controllers.left,right:I.right.update(b.right.grip)&&!!t.controllers.right},B=`${N.left?"L":""}${N.right?"R":""}`;if(!B)return q=null,!1;const K=N.left?z("left"):null,re=N.right?z("right"):null;if(Y?.hideToast(),!q||q.key!==B)return q={key:B,transform:Ke(),left:K&&{position:K.position.clone(),quaternion:K.quaternion.clone()},right:re&&{position:re.position.clone(),quaternion:re.quaternion.clone()}},!0;let J;if(B==="LR")J=Eb({left:q.left.position,right:q.right.position,transform:q.transform},{left:K.position,right:re.position},we());else{const ae=B==="L"?"left":"right",xe=q[ae],ne=ae==="left"?K:re;J=Mb({handPosition:xe.position,handQuaternion:xe.quaternion,transform:q.transform},{handPosition:ne.position,handQuaternion:ne.quaternion})}return _e(J),v=!0,!0}function le(b,N){const{camera:B,player:K}=t,re=$M*Math.min(yh[1],Math.max(yh[0],c.scale.x));B.getWorldDirection(oe),oe.y=0;const J=oe.lengthSq()<.001?null:Math.atan2(-oe.x,-oe.z);let ae=!1;const xe=pn.get(),ne=ld(N,xe["splat.move"]),he=xe["splat.height"],Le=xe["splat.turn"],U=he?he.axis==="y"?$i(N,he):-$i(N,he):0,ue=cd(he,Le)&&Math.abs($i(N,Le))>=.6,fe=U&&!ue?(Gl.y?1:-1)*U:0,ve=C.step({right:ne.x,forward:-ne.y,up:fe},J,b);if(ve.moving){const ie=NM(ve.heading);K.position.x+=(ie.right.x*ve.right+ie.forward.x*ve.forward)*re*b,K.position.z+=(ie.right.z*ve.right+ie.forward.z*ve.forward)*re*b,K.position.y+=ve.up*XM*b,ae=!0}const ce=G.step(Le?Le.axis==="x"?$i(N,Le):-$i(N,Le):0);if(ce){B.getWorldPosition(de);const ie=Tb(K.position,K.rotation.y,de,ce);K.position.copy(ie.position),K.rotation.y=ie.yaw,ae=!0}ae&&(v=!0)}return{kinds:["splat"],mount(b){t=b,t.content.add(c),t.content.add(l),Y=PM({scene:t.scene,camera:t.camera,getHand:()=>t.controllers.left})},async load(b,N){const B=++o,{SplatMesh:K}=await Re();if(B!==o)return;De();let re;_&&_.itemId===b.id?(re=_.mesh,_=null):(L(),re=await Xe(K,N)),re.visible=!1,j||c.add(re),r=re,be();try{await re.initialized}catch(J){throw r===re&&De(),J}if(B===o){if(a=re.packedSplats?.numSplats??re.numSplats??0,p=Ie(re),S=Kd(p),re.visible=!0,u.keepPose&&m){v=!0;return}t.isPresenting()||t.resetPlayer(),t.isPresenting()&&_e({position:new O(0,-100,0),yaw:0,scale:1e-4}),se("fit")}},async prefetch(b,N){if(!t||!u.prefetch||(N.size??0)>JM)return!1;if(_?.itemId===b.id)return!0;const{SplatMesh:B}=await Re();L();const K=await Xe(B,N);return _={itemId:b.id,mesh:K},be(),K.initialized.catch(()=>{_?.mesh===K&&L()}),!0},discardPrefetch:L,get prefetchedItemId(){return _?.itemId??null},unload(){o++,De(),l.visible=!1,Y?.update(!1)},setSuspended(b){j!==!!b&&(j=!!b,ge())},get suspended(){return j},update(b,N){if(!t)return;if(j){Y?.update(!1),R=N.presenting;return}if(N.presenting&&!R?(P=!0,m=!1,F(),be(),k.reset(),A.reset(),w.reset(),C.reset(),I.left.reset(),I.right.reset(),G.reset(),q=null,r&&se("fit",{intro:!0})):!N.presenting&&R&&(F(),be(),C.reset(),q=null,m=!1,r&&se("fit")),R=N.presenting,!r){Y?.update(!1);return}if(E&&N.presenting&&--E.frames<=0){const{mode:J,intro:ae}=E;E=null,Fe(J,ae||P),P=!1}if(!N.presenting){Y?.update(!1);return}const B=N.left.connected||N.right.connected;if(Y?.update(B),!B){q=null,D.valid=!1,C.reset();return}if(E){D.valid=!1,C.reset();return}te(b);const K=ee(N),re=X.update(N);re.has("splat.fit")&&y(),re.has("splat.resetSize")&&me(),K?C.reset():le(b,N)},panelPlacement(){if(!t||!r||!p)return{distance:1.15};const N=t.camera.getWorldPosition(de),B=ha(Ke(),p.center),K=t.camera.getWorldDirection(oe),re=B.sub(N);re.y=0;const J=re.length();if(J<.001)return{distance:1.15};const ae=.5*Math.hypot(p.size.x,p.size.z)*c.scale.x;return{distance:1.15,avoidYaw:nh(re.x,re.z)-nh(K.x,K.z),avoidHalf:Zb(ae,J)}},resetView:T,panelOptions(){return[{id:"quality",label:"화질",side:VM(f?`안전 ${f}/10`:d,g.level),run:()=>Ye(vh(FM,f??5))},{id:"full-view",label:u.fullView?"전체 보기 (가장자리 살림, 느려질 수 있음)":"전체 보기 (가장자리 안 사라지게)",side:u.fullView?"켬":"끔",run:()=>Ve({fullView:!u.fullView})},{id:"point-size",label:"점 크기",side:WM(u.pointSize),run:()=>Ve({pointSize:vh(df,u.pointSize)})},{id:"keep-pose",label:"다음·이전 PLY로 갈 때 자세 유지",side:u.keepPose?"켬":"끔",run:()=>Ve({keepPose:!u.keepPose})},{id:"prefetch",label:"다음 PLY 미리 받기",side:u.prefetch?"켬":"끔",run:()=>Ve({prefetch:!u.prefetch})},{id:"sort-interval",label:"정렬 갱신·자동 조절 (프레임 부족 시)",side:GM(u.sortMs,g),run:()=>Ve({sortMs:Wr[(Wr.indexOf(u.sortMs)+1)%Wr.length]})},{id:"frame-stats",label:"프레임 측정 (누르면 다시 측정)",side:ph(k.summary()),run:()=>k.reset()}]},panelActions(){return[{id:"splat-size",label:"크기 초기화",run:()=>me()},{id:"splat-immersive",label:"1:1 몰입",run:()=>T("immersive")},{id:"splat-help",label:"조작 안내",run:()=>Y?.showToast(12)}]},getState(){return{position:c.position.toArray(),yaw:c.rotation.y,scale:c.scale.x,baseScale:S,lastMode:x,movedSinceFit:v,grabbing:!!q,bounds:p&&{center:p.center.toArray(),radius:p.radius,size:p.size.toArray()},helpVisible:!!Y?.visible,frame:{...k.summary(),diagnosis:fh(k.summary())},sortMs:u.sortMs,adapt:{sortMs:g.sortMs,level:g.level}}},info(){return r?{numSplats:a}:null}}}const pf="sharp-quest.preset";function nE(){try{const[n,e]=(localStorage.getItem(pf)??"").split(":");return n?{mode:n,level:Number(e)}:null}catch{return null}}const xl=Gy({search:location.search,userAgent:navigator.userAgent,saved:nE()}),zs=Id(xl),iE=`${xl.mode}:${xl.level}`,$l=ty(),Ys=ny(),He=px(),$n=Rx({library:He}),go=tE({preset:zs,savePreset:n=>_f(n)}),ot=dM(),Xl=zy(),mf=fy({config:Bv});po($l);po(Ys);po(Xl);po(mf);pd(go);pd(ot);gd("splat",120*1024*1024);gd("image",48*1024*1024);const At=(n,e="")=>xt("app:status",{text:n,kind:e});async function gf(n){const{added:e,skipped:t}=$l.addFiles(n);t.length&&At(`지원하지 않는 파일은 건너뛰었습니다: ${t.slice(0,3).join(", ")}${t.length>3?" 외":""}`,"warn"),await He.refresh("session");const i=e.find(s=>He.canOpen(s));i?await He.open(i,{playlist:He.items}):e.length&&At("열 수 있는 뷰어가 아직 없는 형식입니다.","warn")}async function sE(n){try{const e=$v(n,await xd());if(e){At(e,"warn");return}const i=await sn(n.sourceId).open(n);try{At(`보관 중… ${n.name}`),await Ys.keep(n,i,s=>{At(`보관 중… ${n.name} (${bn(s)}${n.size?` / ${bn(n.size)}`:""})`)})}finally{i.release()}At(`보관했습니다: ${n.name}`,"ok"),xt("library:stored"),He.listSourceId==="library"&&await He.refresh()}catch(e){console.error(e),At(`보관하지 못했습니다 (${n.name}): ${e?.message??e}`,"error")}}async function rE(n){try{He.current?.id===n.id&&He.close(),await Ys.remove(n),xt("library:stored"),await He.refresh("library"),At(`삭제했습니다: ${n.name}`)}catch(e){console.error(e),At(`삭제하지 못했습니다: ${e?.message??e}`,"error")}}function _f(n){try{localStorage.setItem(pf,n)}catch{}}function oE(n){_f(n);const e=new URL(location.href);for(const t of["safe","lite","quest","quality"])e.searchParams.delete(t);location.replace(e)}const js=SS({root:document.querySelector("#app"),library:He,pickFiles:()=>iy(),addFiles:gf,keepItem:sE,removeItem:rE,presetValue:iE,presetLabel:zs.label,setPreset:oE}),_a="버튼 배정: PC에서 더 최근에 바꾼 배정으로 바뀌었습니다(이 기기 변경은 버림). 설정 > 컨트롤러 버튼 지정에서 확인하세요.",aE=wS({store:pn,connection:Xl.connection,onDiscard:()=>{At(_a,"warn"),un?.showMessage(_a),He.activeViewer===ot&&ot.flashHint?.(_a,8e3)}}),lE=ES({sync:aE});{const n=document.createElement("button");n.className="btn",n.type="button",n.id="btn-bindings",n.textContent="컨트롤러 버튼 지정",n.addEventListener("click",()=>lE.open()),document.querySelector("#settings")?.append(n)}const cE=LS({source:Xl,onConnected:()=>He.refresh("pc")});js.setSourcePanel("pc",n=>n.append(cE.element));const uE="https://github.com/shimansKim/sharp-gaussian-splatting-vr-toolkit/blob/quest-app/notes/quest-gdrive-setup-ko.md",hE=RS({source:mf,setupGuideUrl:uE,onChange:()=>He.refresh("gdrive")});js.setSourcePanel("gdrive",n=>n.append(hE.element));js.stageEl.append(CS({library:He,slideshow:$n}).element);const bt=ey({container:js.stageEl,pixelRatio:zs.pixelRatio,precision:zs.precision});js.bindStage(bt);go.mount(bt);ot.mount(bt);ot.addEventListener("layoutchange",n=>{const{itemId:e,layout:t,auto:i}=n.detail;i||typeof e=="string"&&e.startsWith("library:")&&Ys.update(e,{layout:t}).catch(s=>console.error(s))});let ii=null;ot.addEventListener("warning",n=>{ii={text:n.detail.text,kind:n.detail.level==="error"?"error":"warn"},At(ii.text,ii.kind)});Je("item:opened",()=>{ii&&(At(ii.text,ii.kind),ii=null)});Je("item:loading",()=>{ii=null});ot.addEventListener("error",n=>At(n.detail.message,"error"));let Es=null;ot.addEventListener("buffering",n=>{const e=document.querySelector("#status");n.detail.buffering?(Es={text:e?.textContent??"",kind:e?.dataset.kind??""},At(`버퍼링 중… ${He.current?.name??""}`)):Es&&(At(Es.text,Es.kind),Es=null)});const as=new Ll,ql=n=>{const e=bt.renderer.domElement.getBoundingClientRect();return new We((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height*2-1))},_o=bt.renderer.domElement;_o.addEventListener("pointermove",n=>{bt.isPresenting()||!He.current||(as.setFromCamera(ql(n),bt.camera),ot.setMousePointer(as,n.buttons===1))});_o.addEventListener("pointerdown",n=>{bt.isPresenting()||!He.current||n.button!==0||(as.setFromCamera(ql(n),bt.camera),ot.setMousePointer(as,!0))});_o.addEventListener("pointerup",n=>{bt.isPresenting()||!He.current||(as.setFromCamera(ql(n),bt.camera),ot.setMousePointer(as,!1))});_o.addEventListener("pointerleave",()=>ot.setMousePointer(null,!1));const un=KS({stage:bt,library:He,slideshow:$n,getActions:()=>He.activeViewer?.panelActions?.()??[]});let so=!1;Je("list:solo",({on:n})=>{so=!!n;for(const e of[go,ot])e.setSuspended?.(so)});Je("xr:sessionend",()=>{if(so){so=!1;for(const n of[go,ot])n.setSuspended?.(!1)}});Je("list:picked",()=>{He.activeViewer===ot&&ot.recenter()});const dE=ZS({ui:St,camera:bt.camera,panel:un,viewerHasUi:()=>{const n=He.activeViewer;return n?n===ot?!!ot.hud?.visible:!!n.getState?.().helpVisible:!1}});for(const n of["xr:sessionstart","xr:sessionend"])Je(n,()=>St.resetForSession());function vf(){const n=He.current,e=He.playlist,t=n?e.findIndex(i=>i.id===n.id):-1;ot.setNavState({navPos:t>=0&&e.length>1?`${t+1} / ${e.length}`:"",navCanStep:e.length>1,navShow:$n.running,navInterval:$n.interval})}for(const n of["library:changed","item:opened","item:loading","item:error","item:closed","slideshow:changed"])Je(n,vf);vf();ot.addEventListener("nav",n=>{switch(n.detail.id){case"navPrev":He.prev();break;case"navNext":He.next();break;case"navShow":$n.toggle();break;case"navInterval":$n.cycleInterval();break;case"navList":un.toggle();break}});const fE=zl(),Sh=zl(),bh=ix(),pE=ho(["common.prev","common.next","common.openList"]),mE=Ax({isRunning:()=>$n.running,notify:n=>$n.notifyEnded(n)});bt.setFrameHandler((n,e)=>{St.tick(bt.camera,e.presenting);const t=un.inputBlocked?Sh:e;dE.update(t);const i=un.update(e),s=pE.update(un.inputBlocked?Sh:t);if(s.has("common.prev")&&He.prev(),s.has("common.next")&&He.next(),s.has("common.openList")&&(un.isOpen&&un.page==="list"?un.close():(St.visible||St.setVisible(!0),un.open())),e.presenting&&!i&&He.current?.kind==="image"){const o=bh.update(ud(e).scrub);o>0?He.next():o<0&&He.prev()}else bh.reset();mE(He.current,!!ot.video?.ended);const r=He.activeViewer;r&&r.update(n,i?{...fE,presenting:!0}:e)});const xf=gx({layers:()=>[bt.isPresenting()&&"vr",(He.current||He.loading)&&"viewer",He.folder&&"folder"].filter(Boolean),pop:{vr:()=>bt.exitVR(),viewer:()=>He.close(),folder:()=>He.upFolder()}});for(const n of["xr:sessionstart","xr:sessionend","item:loading","item:opened","item:error","item:closed","library:changed"])Je(n,()=>xf.sync());window.addEventListener("keydown",n=>{n.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(n.target.tagName)||((n.key==="ArrowLeft"||n.key==="[")&&He.prev(),(n.key==="ArrowRight"||n.key==="]")&&He.next(),He.activeViewer===ot&&(n.key===" "&&(n.preventDefault(),ot.item?.kind==="video"?ot.togglePlay():ot.toggleHud()),(n.key==="l"||n.key==="L")&&ot.cycleLayout(1),(n.key==="f"||n.key==="F")&&ot.recenter()))});He.refresh("session");const yf=Sx({notify:n=>At(n),canReloadNow:()=>!bt.isPresenting()&&!He.current&&!He.loading});for(const n of["item:closed","xr:sessionend"])Je(n,()=>yf.flush());yf.wasReloaded()&&At("새 버전으로 다시 시작했습니다. 파일을 다시 눌러 열어 주세요.","ok");const Sf=Ex();Je("library:changed",({sourceId:n})=>n!=="session"&&Sf.save(n));Mx(location.search)&&Tx({stage:bt,library:He,panel:un,status:At,memory:Sf,on:Je});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(`${Zc}sw.js`,{scope:Zc,updateViaCache:"none"}).catch(n=>{console.warn("[sw] 등록 실패(오프라인 캐시 없이 동작)",n)})});window.__sharpQuest={bindings:pn,stage:bt,library:He,session:$l,keptLibrary:Ys,panel:un,preset:zs,addFiles:gf,mediaViewer:ot,navHistory:xf,slideshow:$n,ui:St};export{yE as A,Gs as B,Ze as C,En as D,fn as E,ME as F,ec as G,_E as H,EE as I,yl as J,SE as K,gE as L,lt as M,rn as N,qt as O,Pc as P,$t as Q,Sn as R,Wn as S,$e as T,Gn as U,O as V,Bp as W,Yt as X,Rt as Y,bp as Z,dn as _,We as a,Xt as b,TE as c,mt as d,qh as e,kp as f,bE as g,ai as h,yt as i,hn as j,Rl as k,Tl as l,Ei as m,wl as n,vE as o,xE as p,Ll as q,Ge as r,Jp as s,is as t,Ct as u,Hh as v,Xh as w,Ds as x,zn as y,Pt as z};
