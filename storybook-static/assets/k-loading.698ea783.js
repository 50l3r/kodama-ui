var X=Object.defineProperty;var d=(a,g)=>X(a,"name",{value:g,configurable:!0});import{V as K,d as U,j as q,a as G,o as H,b as Z,f as J,k as Q,n as R}from"./vue.esm-bundler.7a829ca1.js";import{a7 as W,c as Y,g as ee}from"./iframe.ad698d62.js";import{u as te}from"./query.1f733cdc.js";import{_ as ne}from"./_plugin-vue_export-helper.cdc0426e.js";var N={exports:{}};const ae=W(K);(function(a,g){(function(m,p){a.exports=p(ae)})(Y,function(m){return(()=>{var p={553:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=(i,w)=>{const v=i.__vccOpts||i;for(const[k,C]of w)v[k]=C;return v}},976:e=>{e.exports=m}},h={};function l(e){var o=h[e];if(o!==void 0)return o.exports;var i=h[e]={exports:{}};return p[e](i,i.exports,l),i.exports}d(l,"n"),l.d=(e,o)=>{for(var i in o)l.o(o,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),l.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return(()=>{l.r(f),l.d(f,{Component:()=>y,Plugin:()=>x,default:()=>O,useLoading:()=>S});var e=l(976);function o(t,n,r){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=(0,e.h)(t,n,c),u=document.createElement("div");return u.classList.add("vld-container"),r.appendChild(u),(0,e.render)(s,u),s.component}d(o,"t");const i=typeof window<"u"?window.HTMLElement:Object,w=["aria-busy"],v={class:"vld-icon"},k={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(t){if(!this.isActive||t.target===this.$refs.root||this.$refs.root.contains(t.target))return;let n=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||n&&n.contains(t.target))&&(t.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},C=["width","height","stroke"],L=[(0,e.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)],M=(0,e.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var b=l(553);const $=(0,b.default)(M,[["render",function(t,n,r,c,s,u){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color},L,8,C)}]]),P=["fill","width","height"],E=[(0,e.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)],F=(0,e.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),V=(0,b.default)(F,[["render",function(t,n,r,c,s,u){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,width:t.width,height:t.height},E,8,P)}]]),T=["height","width","fill"],_=[(0,e.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)],j=(0,e.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),z={Spinner:$,Dots:V,Bars:(0,b.default)(j,[["render",function(t,n,r,c,s,u){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:t.height,width:t.width,fill:t.color},_,8,T)}]])},A=(0,e.defineComponent)({name:"vue-loading",mixins:[k],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:z,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const t=this.$refs.root.parentElement;var n,r;(0,e.render)(null,t),(n=t).remove!==void 0?n.remove():(r=n.parentNode)===null||r===void 0||r.removeChild(n)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(t){t.keyCode===27&&this.cancel()}},watch:{active(t){this.isActive=t},isActive(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),I=(0,b.default)(A,[["render",function(t,n,r,c,s,u){return(0,e.openBlock)(),(0,e.createBlock)(e.Transition,{ref:"root",name:t.transition},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",{tabindex:"0",class:(0,e.normalizeClass)(["vld-overlay is-active",{"is-full-page":t.isFullPage}]),"aria-busy":t.isActive,"aria-label":"Loading",style:(0,e.normalizeStyle)({zIndex:t.zIndex})},[(0,e.createElementVNode)("div",{class:"vld-background",onClick:n[0]||(n[0]=(0,e.withModifiers)(function(){return t.cancel&&t.cancel(...arguments)},["prevent"])),style:(0,e.normalizeStyle)(t.bgStyle)},null,4),(0,e.createElementVNode)("div",v,[(0,e.renderSlot)(t.$slots,"before"),(0,e.renderSlot)(t.$slots,"default",{},()=>[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.loader),{color:t.color,width:t.width,height:t.height},null,8,["color","width","height"]))]),(0,e.renderSlot)(t.$slots,"after")])],14,w),[[e.vShow,t.isActive]])]),_:3},8,["name"])}]]),y=I;function S(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n;const s=Object.assign({},t,r,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let u=s.container;s.container||(u=document.body,s.isFullPage=!0);const D=Object.assign({},n,c);return{hide:o(y,s,u,D).ctx.hide}}}}d(S,"x");const x=d(function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const c=S(n,r);t.config.globalProperties.$loading=c,t.provide("$loading",c)},"N");y.install=x;const O=y})(),f})()})})(N);const oe=ee(N.exports),B=U({name:"KLoading",components:{Loading:oe},autoload:!0,props:{active:{type:Boolean,default:!1,description:"Show or hide the loader"},type:{type:String,default:"bars",description:"Type of loader",options:["spinner","bars","dots"],validator:a=>["spinner","bars","dots"].includes(a),control:"inline-radio"},fullpage:{type:Boolean,default:!1,description:"Show the loader as full page"},color:{type:String,default:"primary",description:"Color del spinner"},height:{type:Number,default:0,description:"Altura m\xEDnima del contenedor"},zIndex:{type:Number,default:99,description:"ZIndex del loader"}},emits:["cancel"],setup(a,g){const m=te();return{backgroundColor:q(()=>m.get("darkMode").value?"#1f2937":"#F3F4F6")}}});function ie(a,g,m,p,h,l){const f=G("loading");return H(),Z("div",{style:R({position:"relative","min-height":`${a.height}px`})},[J(f,{active:a.active,"is-full-page":a.fullpage,loader:a.type,color:"#1A56DB","z-index":a.zIndex,"on-cancel":a.$emit("cancel"),"background-color":a.backgroundColor},null,8,["active","is-full-page","loader","z-index","on-cancel","background-color"]),Q(a.$slots,"default")],4)}d(ie,"_sfc_render");const de=ne(B,[["render",ie]]);B.__docgenInfo={displayName:"KLoading",exportName:"default",description:"",tags:{},props:[{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"Loader"},defaultValue:{func:!1,value:"'bars'"}},{name:"fullpage",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"zIndex",type:{name:"number"},defaultValue:{func:!1,value:"99"}}],events:[{name:"cancel"}],slots:[{name:"default"}]};export{de as K};
//# sourceMappingURL=k-loading.698ea783.js.map
