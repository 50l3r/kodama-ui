var rt=Object.defineProperty;var r=(e,t)=>rt(e,"name",{value:t,configurable:!0});import{c as fe}from"./iframe.ad698d62.js";import{y as ve,d as $e,r as ue,j as z,H as ye,f as H,h as _e,B as X,I as se,F as at,E as je,J as st,K as it,L as Ue,c as lt,M as ut}from"./vue.esm-bundler.7a829ca1.js";var qe={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(fe,function(){var n=1e3,o=6e4,a=36e5,i="millisecond",m="second",y="minute",M="hour",d="day",C="week",E="month",T="quarter",Y="year",B="date",c="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var l=["th","st","nd","rd"],s=h%100;return"["+h+(l[(s-20)%10]||l[s]||l[0])+"]"}},I=r(function(h,l,s){var p=String(h);return!p||p.length>=l?h:""+Array(l+1-p.length).join(s)+h},"m"),P={s:I,z:function(h){var l=-h.utcOffset(),s=Math.abs(l),p=Math.floor(s/60),u=s%60;return(l<=0?"+":"-")+I(p,2,"0")+":"+I(u,2,"0")},m:r(function h(l,s){if(l.date()<s.date())return-h(s,l);var p=12*(s.year()-l.year())+(s.month()-l.month()),u=l.clone().add(p,E),v=s-u<0,f=l.clone().add(p+(v?-1:1),E);return+(-(p+(s-u)/(v?u-f:f-u))||0)},"t"),a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:E,y:Y,w:C,d,D:B,h:M,m:y,s:m,ms:i,Q:T}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},L="en",O={};O[L]=_;var U=r(function(h){return h instanceof G},"p"),F=r(function h(l,s,p){var u;if(!l)return L;if(typeof l=="string"){var v=l.toLowerCase();O[v]&&(u=v),s&&(O[v]=s,u=v);var f=l.split("-");if(!u&&f.length>1)return h(f[0])}else{var A=l.name;O[A]=l,u=A}return!p&&u&&(L=u),u||!p&&L},"t"),b=r(function(h,l){if(U(h))return h.clone();var s=typeof l=="object"?l:{};return s.date=h,s.args=arguments,new G(s)},"w"),$=P;$.l=F,$.i=U,$.w=function(h,l){return b(h,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var G=function(){function h(s){this.$L=F(s.locale,null,!0),this.parse(s)}r(h,"M");var l=h.prototype;return l.parse=function(s){this.$d=function(p){var u=p.date,v=p.utc;if(u===null)return new Date(NaN);if($.u(u))return new Date;if(u instanceof Date)return new Date(u);if(typeof u=="string"&&!/Z$/i.test(u)){var f=u.match(S);if(f){var A=f[2]-1||0,w=(f[7]||"0").substring(0,3);return v?new Date(Date.UTC(f[1],A,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)):new Date(f[1],A,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)}}return new Date(u)}(s),this.$x=s.x||{},this.init()},l.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},l.$utils=function(){return $},l.isValid=function(){return this.$d.toString()!==c},l.isSame=function(s,p){var u=b(s);return this.startOf(p)<=u&&u<=this.endOf(p)},l.isAfter=function(s,p){return b(s)<this.startOf(p)},l.isBefore=function(s,p){return this.endOf(p)<b(s)},l.$g=function(s,p,u){return $.u(s)?this[p]:this.set(u,s)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(s,p){var u=this,v=!!$.u(p)||p,f=$.p(s),A=r(function(K,j){var W=$.w(u.$u?Date.UTC(u.$y,j,K):new Date(u.$y,j,K),u);return v?W:W.endOf(d)},"l"),w=r(function(K,j){return $.w(u.toDate()[K].apply(u.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(j)),u)},"$"),x=this.$W,R=this.$M,Q=this.$D,V="set"+(this.$u?"UTC":"");switch(f){case Y:return v?A(1,0):A(31,11);case E:return v?A(1,R):A(0,R+1);case C:var le=this.$locale().weekStart||0,ne=(x<le?x+7:x)-le;return A(v?Q-ne:Q+(6-ne),R);case d:case B:return w(V+"Hours",0);case M:return w(V+"Minutes",1);case y:return w(V+"Seconds",2);case m:return w(V+"Milliseconds",3);default:return this.clone()}},l.endOf=function(s){return this.startOf(s,!1)},l.$set=function(s,p){var u,v=$.p(s),f="set"+(this.$u?"UTC":""),A=(u={},u[d]=f+"Date",u[B]=f+"Date",u[E]=f+"Month",u[Y]=f+"FullYear",u[M]=f+"Hours",u[y]=f+"Minutes",u[m]=f+"Seconds",u[i]=f+"Milliseconds",u)[v],w=v===d?this.$D+(p-this.$W):p;if(v===E||v===Y){var x=this.clone().set(B,1);x.$d[A](w),x.init(),this.$d=x.set(B,Math.min(this.$D,x.daysInMonth())).$d}else A&&this.$d[A](w);return this.init(),this},l.set=function(s,p){return this.clone().$set(s,p)},l.get=function(s){return this[$.p(s)]()},l.add=function(s,p){var u,v=this;s=Number(s);var f=$.p(p),A=r(function(R){var Q=b(v);return $.w(Q.date(Q.date()+Math.round(R*s)),v)},"y");if(f===E)return this.set(E,this.$M+s);if(f===Y)return this.set(Y,this.$y+s);if(f===d)return A(1);if(f===C)return A(7);var w=(u={},u[y]=o,u[M]=a,u[m]=n,u)[f]||1,x=this.$d.getTime()+s*w;return $.w(x,this)},l.subtract=function(s,p){return this.add(-1*s,p)},l.format=function(s){var p=this,u=this.$locale();if(!this.isValid())return u.invalidDate||c;var v=s||"YYYY-MM-DDTHH:mm:ssZ",f=$.z(this),A=this.$H,w=this.$m,x=this.$M,R=u.weekdays,Q=u.months,V=r(function(j,W,oe,re){return j&&(j[W]||j(p,v))||oe[W].slice(0,re)},"h"),le=r(function(j){return $.s(A%12||12,j,"0")},"c"),ne=u.meridiem||function(j,W,oe){var re=j<12?"AM":"PM";return oe?re.toLowerCase():re},K={YY:String(this.$y).slice(-2),YYYY:this.$y,M:x+1,MM:$.s(x+1,2,"0"),MMM:V(u.monthsShort,x,Q,3),MMMM:V(Q,x),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:V(u.weekdaysMin,this.$W,R,2),ddd:V(u.weekdaysShort,this.$W,R,3),dddd:R[this.$W],H:String(A),HH:$.s(A,2,"0"),h:le(1),hh:le(2),a:ne(A,w,!0),A:ne(A,w,!1),m:String(w),mm:$.s(w,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:f};return v.replace(N,function(j,W){return W||K[j]||f.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(s,p,u){var v,f=$.p(p),A=b(s),w=(A.utcOffset()-this.utcOffset())*o,x=this-A,R=$.m(this,A);return R=(v={},v[Y]=R/12,v[E]=R,v[T]=R/3,v[C]=(x-w)/6048e5,v[d]=(x-w)/864e5,v[M]=x/a,v[y]=x/o,v[m]=x/n,v)[f]||x,u?R:$.a(R)},l.daysInMonth=function(){return this.endOf(E).$D},l.$locale=function(){return O[this.$L]},l.locale=function(s,p){if(!s)return this.$L;var u=this.clone(),v=F(s,p,!0);return v&&(u.$L=v),u},l.clone=function(){return $.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}(),Z=G.prototype;return b.prototype=Z,[["$ms",i],["$s",m],["$m",y],["$H",M],["$W",d],["$M",E],["$y",Y],["$D",B]].forEach(function(h){Z[h[1]]=function(l){return this.$g(l,h[0],h[1])}}),b.extend=function(h,l){return h.$i||(h(l,G,b),h.$i=!0),b},b.locale=F,b.isDayjs=U,b.unix=function(h){return b(1e3*h)},b.en=O[L],b.Ls=O,b.p={},b})})(qe);const pe=qe.exports;var ke={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(fe,function(){return function(n,o,a){n=n||{};var i=o.prototype,m={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function y(d,C,E,T){return i.fromToBase(d,C,E,T)}r(y,"i"),a.en.relativeTime=m,i.fromToBase=function(d,C,E,T,Y){for(var B,c,S,N=E.$locale().relativeTime||m,_=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],I=_.length,P=0;P<I;P+=1){var L=_[P];L.d&&(B=T?a(d).diff(E,L.d,!0):E.diff(d,L.d,!0));var O=(n.rounding||Math.round)(Math.abs(B));if(S=B>0,O<=L.r||!L.r){O<=1&&P>0&&(L=_[P-1]);var U=N[L.l];Y&&(O=Y(""+O)),c=typeof U=="string"?U.replace("%d",O):U(O,C,L.l,S);break}}if(C)return c;var F=S?N.future:N.past;return typeof F=="function"?F(c):F.replace("%s",c)},i.to=function(d,C){return y(d,C,this,!0)},i.from=function(d,C){return y(d,C,this)};var M=r(function(d){return d.$u?a.utc():a()},"d");i.toNow=function(d){return this.to(M(this),d)},i.fromNow=function(d){return this.from(M(this),d)}}})})(ke);const dt=ke.exports;var ze={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(fe,function(){return function(n,o,a){o.prototype.isBetween=function(i,m,y,M){var d=a(i),C=a(m),E=(M=M||"()")[0]==="(",T=M[1]===")";return(E?this.isAfter(d,y):!this.isBefore(d,y))&&(T?this.isBefore(C,y):!this.isAfter(C,y))||(E?this.isBefore(d,y):!this.isAfter(d,y))&&(T?this.isAfter(C,y):!this.isBefore(C,y))}}})})(ze);const ct=ze.exports;var Ge={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(fe,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(o,a,i){var m=a.prototype,y=m.format;i.en.formats=n,m.format=function(M){M===void 0&&(M="YYYY-MM-DDTHH:mm:ssZ");var d=this.$locale().formats,C=function(E,T){return E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,B,c){var S=c&&c.toUpperCase();return B||T[c]||n[c]||T[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(N,_,I){return _||I.slice(1)})})}(M,d===void 0?{}:d);return y.call(this,C)}}})})(Ge);const ft=Ge.exports;var Ze={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(fe,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,i=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,y={},M=r(function(c){return(c=+c)+(c>68?1900:2e3)},"s"),d=r(function(c){return function(S){this[c]=+S}},"a"),C=[/[+-]\d\d:?(\d\d)?|Z/,function(c){(this.zone||(this.zone={})).offset=function(S){if(!S||S==="Z")return 0;var N=S.match(/([+-]|\d\d)/g),_=60*N[1]+(+N[2]||0);return _===0?0:N[0]==="+"?-_:_}(c)}],E=r(function(c){var S=y[c];return S&&(S.indexOf?S:S.s.concat(S.f))},"h"),T=r(function(c,S){var N,_=y.meridiem;if(_){for(var I=1;I<=24;I+=1)if(c.indexOf(_(I,0,S))>-1){N=I>12;break}}else N=c===(S?"pm":"PM");return N},"u"),Y={A:[m,function(c){this.afternoon=T(c,!1)}],a:[m,function(c){this.afternoon=T(c,!0)}],S:[/\d/,function(c){this.milliseconds=100*+c}],SS:[a,function(c){this.milliseconds=10*+c}],SSS:[/\d{3}/,function(c){this.milliseconds=+c}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[m,function(c){var S=y.ordinal,N=c.match(/\d+/);if(this.day=N[0],S)for(var _=1;_<=31;_+=1)S(_).replace(/\[|\]/g,"")===c&&(this.day=_)}],M:[i,d("month")],MM:[a,d("month")],MMM:[m,function(c){var S=E("months"),N=(E("monthsShort")||S.map(function(_){return _.slice(0,3)})).indexOf(c)+1;if(N<1)throw new Error;this.month=N%12||N}],MMMM:[m,function(c){var S=E("months").indexOf(c)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(c){this.year=M(c)}],YYYY:[/\d{4}/,d("year")],Z:C,ZZ:C};function B(c){var S,N;S=c,N=y&&y.formats;for(var _=(c=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,$,G){var Z=G&&G.toUpperCase();return $||N[G]||n[G]||N[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,l,s){return l||s.slice(1)})})).match(o),I=_.length,P=0;P<I;P+=1){var L=_[P],O=Y[L],U=O&&O[0],F=O&&O[1];_[P]=F?{regex:U,parser:F}:L.replace(/^\[|\]$/g,"")}return function(b){for(var $={},G=0,Z=0;G<I;G+=1){var h=_[G];if(typeof h=="string")Z+=h.length;else{var l=h.regex,s=h.parser,p=b.slice(Z),u=l.exec(p)[0];s.call($,u),b=b.replace(u,"")}}return function(v){var f=v.afternoon;if(f!==void 0){var A=v.hours;f?A<12&&(v.hours+=12):A===12&&(v.hours=0),delete v.afternoon}}($),$}}return r(B,"c"),function(c,S,N){N.p.customParseFormat=!0,c&&c.parseTwoDigitYear&&(M=c.parseTwoDigitYear);var _=S.prototype,I=_.parse;_.parse=function(P){var L=P.date,O=P.utc,U=P.args;this.$u=O;var F=U[1];if(typeof F=="string"){var b=U[2]===!0,$=U[3]===!0,G=b||$,Z=U[2];$&&(Z=U[2]),y=this.$locale(),!b&&Z&&(y=N.Ls[Z]),this.$d=function(p,u,v){try{if(["x","X"].indexOf(u)>-1)return new Date((u==="X"?1e3:1)*p);var f=B(u)(p),A=f.year,w=f.month,x=f.day,R=f.hours,Q=f.minutes,V=f.seconds,le=f.milliseconds,ne=f.zone,K=new Date,j=x||(A||w?1:K.getDate()),W=A||K.getFullYear(),oe=0;A&&!w||(oe=w>0?w-1:K.getMonth());var re=R||0,Oe=Q||0,Le=V||0,Ie=le||0;return ne?new Date(Date.UTC(W,oe,j,re,Oe,Le,Ie+60*ne.offset*1e3)):v?new Date(Date.UTC(W,oe,j,re,Oe,Le,Ie)):new Date(W,oe,j,re,Oe,Le,Ie)}catch{return new Date("")}}(L,F,O),this.init(),Z&&Z!==!0&&(this.$L=this.locale(Z).$L),G&&L!=this.format(F)&&(this.$d=new Date("")),y={}}else if(F instanceof Array)for(var h=F.length,l=1;l<=h;l+=1){U[1]=F[l-1];var s=N.apply(this,U);if(s.isValid()){this.$d=s.$d,this.$L=s.$L,this.init();break}l===h&&(this.$d=new Date(""))}else I.call(this,P)}}})})(Ze);const mt=Ze.exports;var ht={exports:{}};(function(e,t){(function(n,o){e.exports=o(qe.exports)})(fe,function(n){function o(m){return m&&typeof m=="object"&&"default"in m?m:{default:m}}r(o,"o");var a=o(n),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},ordinal:function(m){return m+"\xBA"}};return a.default.locale(i,null,!0),i})})(ht);pe.extend(dt);pe.extend(ct);pe.extend(ft);pe.extend(mt);pe.locale("es");var vt=Object.defineProperty,pt=Object.defineProperties,gt=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,Fe=r((e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp"),q=r((e,t)=>{for(var n in t||(t={}))We.call(t,n)&&Fe(e,n,t[n]);if(Me)for(var n of Me(t))Ve.call(t,n)&&Fe(e,n,t[n]);return e},"__spreadValues"),ae=r((e,t)=>pt(e,gt(t)),"__spreadProps"),St=r((e,t)=>{var n={};for(var o in e)We.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Me)for(var o of Me(e))t.indexOf(o)<0&&Ve.call(e,o)&&(n[o]=e[o]);return n},"__objRest"),ge={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ce={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},J={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_t={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},Je={dangerouslyHTMLString:!1,multiple:!0,position:ge.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},yt={rtl:!1,newestOnTop:!1,toastClassName:""},Qe=q(q({},Je),yt);ae(q({},Je),{data:{},type:J.DEFAULT,icon:!1});var g;(function(e){e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify"})(g||(g={}));var Ee;(function(e){e.ENTRANCE_ANIMATION_END="d"})(Ee||(Ee={}));var Ct={enter:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__bounce-enter`,exit:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__bounce-exit`,appendPosition:!0},Mt={enter:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__slide-enter`,exit:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__slide-exit`,appendPosition:!0},Et={enter:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__zoom-enter`,exit:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__zoom-exit`},$t={enter:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__flip-enter`,exit:`${g.CSS_NAMESPACE}--animate ${g.CSS_NAMESPACE}__flip-exit`};function Ke(e){let t=Ct;if(!e||typeof e=="string")switch(e){case"flip":t=$t;break;case"zoom":t=Et;break;case"slide":t=Mt;break}else t=e;return t}r(Ke,"getDefaultTransition");function At(e){return e.containerId||String(e.position)}r(At,"getContainerId");var Ae="will-unmount";function Tt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ge.TOP_RIGHT;return!!document.querySelector(`.${g.CSS_NAMESPACE}__toast-container--${e}`)}r(Tt,"toastContainerInScreen");function Nt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ge.TOP_RIGHT;return`${g.CSS_NAMESPACE}__toast-container--${e}`}r(Nt,"getToastPosClassName");function Ot(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const o=[`${g.CSS_NAMESPACE}__toast-container`,`${g.CSS_NAMESPACE}__toast-container--${e}`,n?`${g.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return de(t)?t({position:e,rtl:n,defaultClassName:o}):`${o} ${t||""}`}r(Ot,"getContainerClassName");function Lt(e){var t;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=e,m=g.CSS_NAMESPACE,y=Nt(n),M=document.querySelector(`.${m}`),d=document.querySelector(`.${y}`),C=!!d&&!((t=d.className)!=null&&t.includes(Ae)),E=M||document.createElement("div"),T=document.createElement("div");T.className=Ot(n,o,a),T.dataset.testid=`${g.CSS_NAMESPACE}__toast-container--${n}`,T.id=At(e);for(const Y in i)if(Object.prototype.hasOwnProperty.call(i,Y)){const B=i[Y];T.style[Y]=B}return M||(E.className=g.CSS_NAMESPACE,document.body.appendChild(E)),C||E.appendChild(T),T}r(Lt,"generateRenderRoot");function be(e){var t,n,o;const a=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((n=e.target)==null?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",be,!1);try{he[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete he[a],delete k[a]}catch{}}r(be,"unmountComponent");var he=ve({});function It(e,t){const n=document.getElementById(String(t));n&&(he[n.id]=e)}r(It,"cacheRenderInstance");function De(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=String(e);if(!he[n])return;const o=document.getElementById(n);o&&o.classList.add(Ae),t?(bt(e),o&&o.addEventListener("animationend",be,!1)):be(n),ee.items=ee.items.filter(a=>a.containerId!==e)}r(De,"removeContainer");function Pt(e){for(const t in he)De(t,e);ee.items=[]}r(Pt,"clearContainers");function Xe(e,t){const n=document.getElementById(e.toastId);if(n){let o=e;o=q(q({},o),Ke(o.transition));const a=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${a}`,t&&t(n)}}r(Xe,"addExitAnimateToNode");function bt(e){for(const t in k)if(t===e)for(const n of k[t]||[])Xe(n)}r(bt,"resolveNodesAnimation");function Dt(e){const n=Se().find(o=>o.toastId===e);return n==null?void 0:n.containerId}r(Dt,"getContainerIdByToastId");function He(e){return document.getElementById(e)}r(He,"getContainerById");function wt(e){const t=He(e.containerId);return t&&t.classList.contains(Ae)}r(wt,"needWaitingForUnmount");function Re(e){var t;const n=Ue(e.content)?X(e.content.props):null;return n!=null?n:X((t=e.data)!=null?t:{})}r(Re,"getCallbackProps");function xt(e){return e?ee.items.filter(n=>n.containerId===e).length>0:ee.items.length>0}r(xt,"existQueueItem");function Yt(){if(ee.items.length>0){const e=ee.items.shift();we(e==null?void 0:e.toastContent,e==null?void 0:e.toastProps)}}r(Yt,"appendFromQueue");var k=ve({}),ee=ve({items:[]});function Se(){const e=X(k);return Object.values(e).reduce((t,n)=>[...t,...n],[])}r(Se,"getAllToast");function Bt(e){return Se().find(n=>n.toastId===e)}r(Bt,"getToast");function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(wt(t)){const n=He(t.containerId);n&&n.addEventListener("animationend",xe.bind(null,e,t),!1)}else xe(e,t)}r(we,"doAppend");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=He(t.containerId);n&&n.removeEventListener("animationend",xe.bind(null,e,t),!1);const o=k[t.containerId]||[],a=o.length>0;if(!a&&!Tt(t.position)){const i=Lt(t),m=lt(sn,t);m.mount(i),It(m,i.id)}a&&(t.position=o[0].position),je(()=>{t.updateId?te.update(t):te.add(e,t)})}r(xe,"resolveAppend");var te={add(e,t){const{containerId:n=""}=t;n&&(k[n]=k[n]||[],k[n].find(o=>o.toastId===t.toastId)||setTimeout(()=>{var o,a;t.newestOnTop?(o=k[n])==null||o.unshift(t):(a=k[n])==null||a.push(t),t.onOpen&&t.onOpen(Re(t))},t.delay||0))},remove(e){if(e){const t=Dt(e);if(t){const n=k[t];let o=n.find(a=>a.toastId===e);k[t]=n.filter(a=>a.toastId!==e),!k[t].length&&!xt(t)&&De(t,!1),Yt(),je(()=>{o!=null&&o.onClose&&(o.onClose(Re(o)),o=void 0)})}}},update(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{containerId:t=""}=e;if(t&&e.updateId){k[t]=k[t]||[];const n=k[t].find(o=>o.toastId===e.toastId);n&&setTimeout(()=>{for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=e[o];n[o]=a}},e.delay||0)}},clear(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e?De(e,t):Pt(t)},dismissCallback(e){var t;const n=(t=e.currentTarget)==null?void 0:t.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",te.dismissCallback,!1),setTimeout(()=>{te.remove(n)}))},dismiss(e){if(e){const t=Se();for(const n of t)if(n.toastId===e){Xe(n,o=>{o.addEventListener("animationend",te.dismissCallback,!1)});break}}}},et=ve({});function tt(){return Math.random().toString(36).substring(2,9)}r(tt,"generateToastId");function qt(e){return typeof e=="number"&&!isNaN(e)}r(qt,"isNum");function Ye(e){return typeof e=="string"}r(Ye,"isStr");function de(e){return typeof e=="function"}r(de,"isFn");function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return se(...t)}r(Te,"mergeOptions");function Ce(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof(e==null?void 0:e.type)=="object")}r(Ce,"isComponent");function Ht(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};et[`${g.CSS_NAMESPACE}-default-options`]=e}r(Ht,"saveGlobalOptions");function Ft(){return et[`${g.CSS_NAMESPACE}-default-options`]||Qe}r(Ft,"getGlobalOptions");function Rt(){return document.documentElement.className||"light"}r(Rt,"getSystemThem");var me;(function(e){e[e.Enter=0]="Enter",e[e.Exit=1]="Exit"})(me||(me={}));var jt={containerId:{type:[String,Number],required:!1,default:""},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:ge.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:ce.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:J.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},nt=jt,Ut={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:J.DEFAULT},theme:{type:String,required:!1,default:ce.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},kt=$e({name:"ProgressBar",props:Ut,setup(e,t){let{attrs:n}=t;const o=ue(),a=z(()=>e.hide?"true":"false"),i=z(()=>ae(q({},n.style||{}),{animationDuration:`${e.autoClose===!0?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"})),m=z(()=>[`${g.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${g.CSS_NAMESPACE}__progress-bar--controlled`:`${g.CSS_NAMESPACE}__progress-bar--animated`,`${g.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${g.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${g.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),y=z(()=>`${m.value} ${(n==null?void 0:n.class)||""}`),M=r(()=>{o.value&&(o.value.onanimationend=null,o.value.ontransitionend=null)},"removeEventListener"),d=r(()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),M())},"eventCallback"),C=z(()=>e.controlledProgress?null:d),E=z(()=>e.controlledProgress?d:null);return ye(()=>{o.value&&(M(),o.value.onanimationend=C.value,o.value.ontransitionend=E.value)}),()=>H("div",{ref:o,role:"progressbar","aria-hidden":a.value,"aria-label":"notification timer",class:y.value,style:i.value},null)}}),zt=kt,Gt=$e({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:ce.AUTO},type:{type:String,required:!1,default:ce.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>H("button",{class:`${g.CSS_NAMESPACE}__close-button ${g.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[H("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[H("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Ne=r(e=>{let t=e,{theme:n,type:o,path:a}=t,i=St(t,["theme","type","path"]);return H("svg",se({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${o})`},i),[H("path",{d:a},null)])},"Svg");function Zt(e){return H(Ne,se(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}r(Zt,"Warning");function Wt(e){return H(Ne,se(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}r(Wt,"Info");function Vt(e){return H(Ne,se(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}r(Vt,"Success");function Jt(e){return H(Ne,se(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}r(Jt,"Error2");function Qt(){return H("div",{class:`${g.CSS_NAMESPACE}__spinner`},null)}r(Qt,"Spinner");var Be={info:Wt,warning:Zt,success:Vt,error:Jt,spinner:Qt},Kt=r(e=>e in Be,"maybeIcon");function Xt(e){let{theme:t,type:n,isLoading:o,icon:a}=e,i;const m={theme:t,type:n};return o?i=Be.spinner():a===!1?i=void 0:Ce(a)?i=X(a):de(a)?i=a(m):Ue(a)?i=ut(a,m):Ye(a)||qt(a)?i=a:Kt(n)&&(i=Be[n](m)),i}r(Xt,"getIcon");var en=r(()=>{},"NullCallback");function tn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g.COLLAPSE_DURATION;const{scrollHeight:o,style:a}=e,i=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${i}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,i)})})}r(tn,"collapseToast");function nn(e){const t=ue(!1),n=ue(!1),o=ue(!1),a=ue(me.Enter),i=ve(ae(q({},e),{appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||g.COLLAPSE_DURATION})),m=i.done||en,y=z(()=>i.appendPosition?`${i.enter}--${i.position}`:i.enter),M=z(()=>i.appendPosition?`${i.exit}--${i.position}`:i.exit),d=z(()=>e.pauseOnHover?{onMouseenter:S,onMouseleave:c}:{});function C(){const _=y.value.split(" ");T().addEventListener(Ee.ENTRANCE_ANIMATION_END,c,{once:!0});const I=r(L=>{const O=T();L.target===O&&(O.dispatchEvent(new Event(Ee.ENTRANCE_ANIMATION_END)),O.removeEventListener("animationend",I),O.removeEventListener("animationcancel",I),a.value===me.Enter&&L.type!=="animationcancel"&&O.classList.remove(..._))},"onEntered"),P=r(()=>{const L=T();L.classList.add(..._),L.addEventListener("animationend",I),L.addEventListener("animationcancel",I)},"onEnter");e.pauseOnFocusLoss&&Y(),P()}r(C,"onEnterHandler");function E(){if(!T())return;const _=r(()=>{const P=T();P.removeEventListener("animationend",_),i.collapse?tn(P,m,i.collapseDuration):m()},"onExited"),I=r(()=>{const P=T();a.value=me.Exit,P&&(P.className+=` ${M.value}`,P.addEventListener("animationend",_))},"onExit");n.value||(o.value?_():setTimeout(I))}r(E,"onExitHandler");function T(){return e.toastRef.value}r(T,"getTargetNode");function Y(){document.hasFocus()||S(),window.addEventListener("focus",c),window.addEventListener("blur",S)}r(Y,"bindFocusEvents");function B(){window.removeEventListener("focus",c),window.removeEventListener("blur",S)}r(B,"unbindFocusEvents");function c(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}r(c,"playToast");function S(){t.value=!1}r(S,"pauseToast");function N(_){_&&(_.stopPropagation(),_.preventDefault()),n.value=!1}return r(N,"hideToast"),ye(E),ye(()=>{const _=Se();n.value=_.findIndex(I=>I.toastId===i.toastId)>-1}),ye(()=>{e.isLoading!==void 0&&(e.loading.value?S():c())}),st(C),it(()=>{e.pauseOnFocusLoss&&B()}),{isIn:n,isRunning:t,hideToast:N,eventHandlers:d}}r(nn,"useCssTransition");var on=$e({name:"ToastItem",inheritAttrs:!1,props:nt,setup(e){const t=ue(),n=z(()=>!!e.isLoading),o=z(()=>e.progress!==void 0&&e.progress!==null),a=z(()=>Xt(e)),i=z(()=>[`${g.CSS_NAMESPACE}__toast`,`${g.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${g.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${g.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:m,isIn:y,hideToast:M,eventHandlers:d}=nn(q(q({toastRef:t,loading:n,done:()=>{te.remove(e.toastId)}},Ke(e.transition)),e));return()=>H("div",se({id:e.toastId,class:i.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:C=>{e.closeOnClick&&M(),e.onClick&&e.onClick(C)}},d.value),[H("div",{role:e.role,"data-testid":"toast-body",class:`${g.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[a.value!=null&&H("div",{"data-testid":`toast-icon-${e.type}`,class:[`${g.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${g.CSS_NAMESPACE}--animate-icon ${g.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Ce(a.value)?_e(X(a.value),{theme:e.theme,type:e.type}):de(a.value)?a.value({theme:e.theme,type:e.type}):a.value]),H("div",{"data-testid":"toast-content"},[Ce(e.content)?_e(X(e.content),{toastProps:X(e),closeToast:M,data:e.data}):de(e.content)?e.content({toastProps:X(e),closeToast:M,data:e.data}):e.dangerouslyHTMLString?_e("div",{innerHTML:e.content}):e.content])]),(e.closeButton===void 0||e.closeButton===!0)&&H(Gt,{theme:e.theme,closeToast:C=>{C.stopPropagation(),C.preventDefault(),M()}},null),Ce(e.closeButton)?_e(X(e.closeButton),{closeToast:M,type:e.type,theme:e.theme}):de(e.closeButton)?e.closeButton({closeToast:M,type:e.type,theme:e.theme}):null,H(zt,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:y.value,type:e.type,hide:e.hideProgressBar,isRunning:m.value,autoClose:e.autoClose,controlledProgress:o.value,progress:e.progress,closeToast:e.isLoading?void 0:M},null)])}}),rn=on,an=$e({name:"ToastifyContainer",inheritAttrs:!1,props:nt,setup(e){const t=z(()=>e.containerId),n=z(()=>k[t.value]||[]),o=z(()=>n.value.filter(a=>a.position===e.position));return()=>H(at,null,[o.value.map(a=>{const{toastId:i=""}=a;return H(rn,se({key:i},a),null)})])}}),sn=an,Pe=!1;function ot(){const e=[];return Se().forEach(n=>{const o=document.getElementById(n.containerId);o&&!o.classList.contains(Ae)&&e.push(n)}),e}r(ot,"getAllActiveToast");function ln(e){const t=ot().length,n=e!=null?e:0;return n>0&&t+ee.items.length>=n}r(ln,"watingForQueue");function un(e){ln(e.limit)&&!e.updateId&&ee.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}r(un,"resolveQueue");function ie(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Pe)return;n=Te(Ft(),{type:t},n),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=tt()),n=ae(q({},n),{content:e,containerId:n.containerId||String(n.position)});const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Rt()),un(n),n.multiple?ee.items.length||we(e,n):(Pe=!0,D.clearAll(void 0,!1),setTimeout(()=>{we(e,n)},0),setTimeout(()=>{Pe=!1},390)),n.toastId}r(ie,"openToast");var D=r((e,t)=>ie(e,J.DEFAULT,t),"toast");D.info=(e,t)=>ie(e,J.INFO,t);D.error=(e,t)=>ie(e,J.ERROR,t);D.warning=(e,t)=>ie(e,J.WARNING,t);D.warn=D.warning;D.success=(e,t)=>ie(e,J.SUCCESS,t);D.loading=(e,t)=>ie(e,J.DEFAULT,Te(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));D.dark=(e,t)=>ie(e,J.DEFAULT,Te(t,{theme:ce.DARK}));D.remove=e=>{e?te.dismiss(e):te.clear()};D.clearAll=(e,t)=>{te.clear(e,t)};D.isActive=e=>{let t=!1;return t=ot().findIndex(o=>o.toastId===e)>-1,t};D.update=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};setTimeout(()=>{const n=Bt(e);if(n){const o=X(n),{content:a}=o,i=ae(q(q({},o),t),{toastId:t.toastId||e,updateId:tt()}),m=i.render||a;delete i.render,ie(m,i.type,i)}},0)};D.done=e=>{D.update(e,{isLoading:!1,progress:1})};D.promise=dn;function dn(e,t,n){let{pending:o,error:a,success:i}=t,m;o&&(m=Ye(o)?D.loading(o,n):D.loading(o.render,q(q({},n),o)));const y={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},M=r((C,E,T)=>{if(E==null){D.remove(m);return}const Y=ae(q(q({type:C},y),n),{data:T}),B=Ye(E)?{render:E}:E;return m?D.update(m,ae(q(q({},Y),B),{isLoading:!1,autoClose:!0})):D(B.render,ae(q(q({},Y),B),{isLoading:!1,autoClose:!0})),T},"resolver"),d=de(e)?e():e;return d.then(C=>M("success",i,C)).catch(C=>M("error",a,C)),d}r(dn,"handlePromise");D.POSITION=ge;D.THEME=ce;D.TYPE=J;D.TRANSITIONS=_t;var gn=D,cn={install(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};fn(t)}};typeof window<"u"&&(window.Vue3Toastify=cn);function fn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=Te(Qe,e);Ht(t)}r(fn,"updateGlobalOptions");export{pe as d,gn as t};
//# sourceMappingURL=index.27fc613f.js.map
