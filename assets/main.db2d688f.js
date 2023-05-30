var G=Object.defineProperty;var u=(e,s)=>G(e,"name",{value:s,configurable:!0});import{d as M,o as R,L as W,m as l,F as C,G as B,C as x,k as d,l as t,v as T,t as L,y as f,q as n,x as w,B as N,p as _,z as A,a4 as q,r as J,ab as X}from"./vue.esm-bundler.ad0aee8d.js";import{u as K}from"./query.373371fe.js";import{u as H}from"./vue-router.da7b39ba.js";import{A as Q}from"./index.2134fa8b.js";import{v as Y,s as Z}from"./app.cff1ae94.js";import{_ as E}from"./+plugin-vue+export-helper.ed6a1c48.js";import{k as I}from"./iframe.988cdce5.js";import"./popper.ab98475b.js";import"./tippy.esm.a5a76a6e.js";const ee=[],j=M({name:"KMenu",props:{collapsed:{type:Boolean,default:!1}},setup(){const e=H(),s=W("$menu")||(()=>[]),i=[{separator:!0}],b=[...s(),...i,...ee],k=u(a=>e.path.indexOf(a.toString())!==-1,"hasActiveChildren"),c=u(a=>a.auth?a.auth:!0,"checkRoles"),p=u(a=>{if(a.auth)return a.auth;if(a.pages)for(let h=0;h<a.pages.length;h++){const o=a.pages[h];if(o.auth)return o.auth;if(o.pages)for(let v=0;v<o.pages.length;v++){const r=o.pages[v];if(c(r))return!0}}return!1},"hasOneAccess"),m=u(()=>{let a=[];b.forEach(o=>{o.pages&&o.pages.forEach(v=>{if(v.pages){const r=document.getElementById(`k-menu-dropdown-${v.title}`),$=document.getElementById(`k-menu-dropdown-${v.title}-body`);r&&$&&a.push({id:`k-menu-dropdown-${v.title}`,triggerEl:r,targetEl:$,active:!1})}})});const h={alwaysOpen:!0,activeClasses:"bg-gray-800 text-gray-200",inactiveClasses:"text-gray-200"};new Q(a,h)},"initCollapse");return R(()=>{m()}),{hasActiveChildren:k,hasOneAccess:p,menu:b,version:Y,checkRoles:c}}});const oe={key:0,class:"k-menu-header"},te={key:1,class:"k-menu-separator"},se={key:0},ne=["data-href","onClick"],ae={key:0,class:"k-menu-icon"},le={key:1,class:"k-menu-title"},ie=["id"],ce={key:0,class:"k-menu-icon"},re={key:1,class:"k-menu-title"},de=["id"],pe={key:0},ue=["data-href","onClick"],_e={key:0,class:"k-menu-icon",type:"fal"},fe={key:1,class:"k-menu-title"};function ge(e,s,i,g,b,k){const c=d("k-icon"),p=d("router-link"),m=d("k-tooltip");return t(),l("ul",{class:x(["k-menu",{"k-menu-collapsed":e.collapsed}])},[(t(!0),l(C,null,B(e.menu,(a,h)=>(t(),l(C,{key:h},[e.checkRoles(a)?(t(),l(C,{key:0},[a.heading&&e.hasOneAccess(a)?(t(),l("li",oe,[e.collapsed?f("",!0):(t(),l(C,{key:0},[T(L(a.heading),1)],64))])):a.separator?(t(),l("li",te)):f("",!0),(t(!0),l(C,null,B(a.pages,(o,v)=>(t(),l(C,{key:v},[e.checkRoles(o)?(t(),l(C,{key:0},[o.pages?e.hasOneAccess(o)?(t(),l("li",{key:1,class:x({show:e.hasActiveChildren(o.route)})},[n(m,{content:o.title,placement:"right",arrow:!1,disabled:!e.collapsed},{default:w(()=>[_("button",{id:`k-menu-dropdown-${o.title}`,class:"k-menu-item"},[o.icon?(t(),l("span",ce,[n(c,{icon:o.icon,type:"fal"},null,8,["icon"])])):f("",!0),e.collapsed?f("",!0):(t(),l("span",re,L(o.title),1)),o.pages&&!e.collapsed?(t(),N(c,{key:2,icon:"chevron-down",type:"fal",class:"k-menu-chevron"})):f("",!0)],8,ie)]),_:2},1032,["content","disabled"]),_("ul",{id:`k-menu-dropdown-${o.title}-body`,class:"k-menu-sub hidden"},[(t(!0),l(C,null,B(o.pages,(r,$)=>(t(),l(C,{key:$},[r.title&&e.checkRoles(r)?(t(),l("li",pe,[n(m,{content:r.title,placement:"right",arrow:!1,disabled:!e.collapsed},{default:w(()=>[r.pages?f("",!0):(t(),N(p,{key:0,"active-class":"active",to:r.disabled?{}:r.route},{default:w(({href:y,navigate:S,isActive:U})=>[_("button",{class:x(["k-menu-item",{"k-menu-item-active":U,"k-menu-item-disabled":r.disabled}]),"data-href":y,onClick:S},[r.icon?(t(),l("span",_e,[n(c,{icon:r.icon,type:"fal"},null,8,["icon"])])):f("",!0),e.collapsed?f("",!0):(t(),l("span",fe,L(r.title),1))],10,ue)]),_:2},1032,["to"]))]),_:2},1032,["content","disabled"])])):f("",!0)],64))),128))],8,de)],2)):f("",!0):(t(),l("li",se,[n(m,{hover:o.title,placement:"right",arrow:!1,disabled:!e.collapsed},{default:w(()=>[o.pages?f("",!0):(t(),N(p,{key:0,"active-class":"active",to:o.disabled?{}:o.route},{default:w(({href:r,navigate:$,isActive:y})=>[_("button",{class:x(["k-menu-item",{"k-menu-item-active":y,"k-menu-item-disabled":o.disabled}]),"data-href":r,onClick:$},[o.icon?(t(),l("span",ae,[n(c,{icon:o.icon,type:"fal"},null,8,["icon"])])):f("",!0),e.collapsed?f("",!0):(t(),l("span",le,L(o.title),1)),o.pages&&!e.collapsed?(t(),N(c,{key:2,icon:"chevron-down",type:"fal",class:"k-menu-chevron"})):f("",!0)],10,ne)]),_:2},1032,["to"]))]),_:2},1032,["hover","disabled"])]))],64)):f("",!0)],64))),128))],64)):f("",!0)],64))),128))],2)}u(ge,"_sfc_render$6");const ke=E(j,[["render",ge],["__scopeId","data-v-24e10e92"]]);j.__docgenInfo={displayName:"KMenu",exportName:"default",description:"",tags:{},props:[{name:"collapsed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const D=M({name:"KAside",components:{KMenu:ke},setup(){const e=u(i=>typeof q(i)!="string","isComponent");return{collapsed:A({get(){return K().get("aside.collapsed")||!1},set(i){K().set("aside.collapsed",i)}}),isComponent:e}}});const me={class:"overflow-y-auto py-5 px-3 h-full flex-1"},he={class:"justify-center p-4 space-x-4"};function ve(e,s,i,g,b,k){const c=d("k-logo"),p=d("k-button"),m=d("k-menu"),a=d("k-aside-footer");return t(),l("aside",{class:x(["k-aside h-screen bg-sidebar text-gray-100 flex flex-col",{"k-aside-collapsed":e.collapsed}])},[_("div",{class:x(["px-3 pb-5 pt-5 flex relative",e.collapsed?"justify-center":"justify-between"])},[n(c,{dark:"",side:!e.collapsed,class:"cursor-pointer",onClick:s[0]||(s[0]=h=>e.collapsed=!1)},null,8,["side"]),e.collapsed?(t(),N(p,{key:1,icon:"chevrons-right",link:"",color:"primary",class:"absolute top-0 right-0 -m-3 mt-5",onClick:s[2]||(s[2]=h=>e.collapsed=!1)})):(t(),N(p,{key:0,icon:"chevrons-left",link:"",color:"primary",class:"-mr-2",onClick:s[1]||(s[1]=h=>e.collapsed=!0)}))],2),_("div",me,[n(m,{collapsed:e.collapsed},null,8,["collapsed"])]),_("div",he,[n(a,{collapsed:e.collapsed},null,8,["collapsed"])])],2)}u(ve,"_sfc_render$5");const ye=E(D,[["render",ve],["__scopeId","data-v-0af091d2"]]);D.__docgenInfo={displayName:"KAside",exportName:"default",description:"",tags:{}};function be(e={}){const{immediate:s=!1,onNeedRefresh:i,onOfflineReady:g,onRegistered:b,onRegisteredSW:k,onRegisterError:c}=e;let p,m,a,h;const o=u(async(r=!0)=>{await a,r&&(p==null||p.addEventListener("controlling",$=>{$.isUpdate&&window.location.reload()})),await(h==null?void 0:h())},"updateServiceWorker");async function v(){if("serviceWorker"in navigator){const{Workbox:r,messageSW:$}=await I(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);h=u(async()=>{m&&m.waiting&&await $(m.waiting,{type:"SKIP_WAITING"})},"sendSkipWaitingMessage"),p=new r("/sw.js",{scope:"/",type:"classic"}),p.addEventListener("activated",y=>{y.isUpdate||g==null||g()});{const y=u(()=>{i==null||i()},"showSkipWaitingPrompt");p.addEventListener("waiting",y),p.addEventListener("externalwaiting",y)}p.register({immediate:s}).then(y=>{m=y,k?k("/sw.js",y):b==null||b(y)}).catch(y=>{c==null||c(y)})}}return u(v,"register"),a=v(),o}u(be,"registerSW");const F=M({name:"KUpdater",setup(){let e=J(!1),s=null;const i=u(()=>{s&&s(!0)},"update");return R(()=>{"serviceWorker"in navigator&&(s=be({onNeedRefresh(){e.value=!0},onRegistered(g){g&&setInterval(()=>{g.update()},6e4)}}))}),{update:i,updateAvailable:e}}});function $e(e,s,i,g,b,k){const c=d("k-button"),p=d("k-tooltip");return e.updateAvailable?(t(),N(p,{key:0,content:"\u{1F37E} Actualizaci\xF3n disponible",placement:"left"},{default:w(()=>[n(c,{neon:"",color:"success",icon:"cloud-arrow-down",onClick:e.update},null,8,["onClick"])]),_:1})):f("",!0)}u($e,"_sfc_render$4");const we=E(F,[["render",$e]]);F.__docgenInfo={displayName:"KUpdater",exportName:"default",description:"",tags:{}};const O=M({name:"KTheme",setup(){const e=A(()=>K().get("darkMode"));return{toggleTheme:u(()=>{const i=K();e.value?(i.set("darkMode",!1),document.getElementsByTagName("html")[0].classList.remove("dark"),document.getElementsByTagName("html")[0].classList.add("light")):(i.set("darkMode",!0),document.getElementsByTagName("html")[0].classList.remove("light"),document.getElementsByTagName("html")[0].classList.add("dark"))},"toggleTheme"),darkMode:e}}});function Ce(e,s,i,g,b,k){const c=d("k-button");return t(),N(c,{outline:"",color:"gray",icon:e.darkMode?"moon":"sun","icon-type":"fal",onClick:e.toggleTheme},null,8,["icon","onClick"])}u(Ce,"_sfc_render$3");const Ne=E(O,[["render",Ce]]);O.__docgenInfo={displayName:"KTheme",exportName:"default",description:"",tags:{}};const V=M({name:"KDebug",setup(){const e=K();return{debug:A(()=>e.get("debug"))}}}),xe="_debug_54i91_1",Ke={debug:xe},Me=X('<div class="block sm:hidden">XS</div><div class="hidden sm:block md:hidden">SM</div><div class="hidden md:block lg:hidden">MD</div><div class="hidden lg:block xl:hidden">LG</div><div class="hidden xl:block">XL</div>',5),Ee=[Me];function Ae(e,s,i,g,b,k){return e.debug?(t(),l("div",{key:0,class:x(e.$style.debug)},Ee,2)):f("",!0)}u(Ae,"_sfc_render$2");const Te={$style:Ke},Le=E(V,[["render",Ae],["__cssModules",Te]]);V.__docgenInfo={displayName:"KDebug",exportName:"default",description:"",tags:{}};const P=M({name:"KTopbar",components:{KUpdater:we,KTheme:Ne,KDebug:Le},setup(){const e=W("$auth"),s=u(()=>{e.logout()},"logout"),i=A(()=>e.getLastName()||"Jhon"),g=A(()=>{const k=e.getName()||"Jhon",c=e.getLastName()||"Doe";return`${k} ${c}`}),b=A({get(){return K().get("aside.collapsed")||!1},set(k){K().set("aside.collapsed",k)}});return{firstname:i,fullname:g,searchEnabled:Z,logout:s,collapsed:b}}}),Se={class:"px-4 lg:px-6 py-2.5 bg-sidebar text-gray-200 select-none"},Be={class:"flex flex-wrap items-center"},Re={class:"flex sm:hidden"},We={class:"hidden sm:flex justify-start items-center"},je=_("div",{class:"ml-auto"},null,-1),De={class:"flex flex-row gap-4"},Fe={class:"flex items-center lg:order-2"},Oe={class:"flex gap-4 items-center"},Ve=_("br",null,null,-1);function Pe(e,s,i,g,b,k){const c=d("k-button"),p=d("k-toolbar-search"),m=d("k-updater"),a=d("k-debug"),h=d("k-theme"),o=d("k-avatar"),v=d("k-icon"),r=d("router-link"),$=d("k-dropdown-menu"),y=d("k-dropdown");return t(),l("header",null,[_("nav",Se,[_("div",Be,[_("div",Re,[n(c,{icon:"chevrons-right",link:"",color:"primary",onClick:s[0]||(s[0]=S=>e.collapsed=!1)})]),_("div",We,[n(p)]),je,_("div",De,[n(m),n(a),n(h),_("div",Fe,[n(y,null,{header:w(()=>[_("div",Oe,[n(o,{name:e.fullname,size:40,tooltip:!1},null,8,["name"]),_("div",null,[T(" Bienvenido "),Ve,_("strong",null,L(e.firstname),1)])])]),content:w(()=>[n($,null,{default:w(()=>[n(r,{to:"/pages/profile/overview"},{default:w(()=>[n(v,{icon:"address-card",type:"fal",class:"mr-2"}),T(" Mi Perfil ")]),_:1})]),_:1}),n($,null,{default:w(()=>[n(r,{to:"/pages/profile/overview"},{default:w(()=>[n(v,{icon:"gear",type:"fal",class:"mr-2"}),T(" Configuraci\xF3n ")]),_:1})]),_:1})]),footer:w(()=>[_("a",{class:"text-danger cursor-pointer block",onClick:s[1]||(s[1]=S=>e.logout())},[n(v,{icon:"right-from-bracket",class:"mr-2"}),T(" Cerrar sesi\xF3n ")])]),default:w(()=>[_("div",null,[n(o,{name:e.fullname,size:42,tooltip:!1,square:"",class:"cursor-pointer"},null,8,["name"])])]),_:1})])])])])])}u(Pe,"_sfc_render$1");const ze=E(P,[["render",Pe]]);P.__docgenInfo={displayName:"KTopbar",exportName:"default",description:"",tags:{}};const z=M({name:"KMain",components:{KAside:ye,KTopbar:ze},setup(){return{}}});const Ue={class:"flex flex-row bg-white dark:bg-gray-800"},Ge={id:"k-wrapper",class:"flex flex-col flex-row-fluid w-full bg-gray-100 dark:bg-gray-900 h-screen overflow-y-auto overflow-x-hidden"};function qe(e,s,i,g,b,k){const c=d("k-aside"),p=d("k-topbar"),m=d("router-view");return t(),l("div",Ue,[n(c),_("div",Ge,[n(p),n(m)])])}u(qe,"_sfc_render");const so=E(z,[["render",qe]]);z.__docgenInfo={displayName:"KMain",exportName:"default",description:"",tags:{}};export{so as default};
//# sourceMappingURL=main.db2d688f.js.map
