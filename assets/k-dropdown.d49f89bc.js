var y=Object.defineProperty;var a=(e,o)=>y(e,"name",{value:o,configurable:!0});import{d as k,r as b,z as w,k as f,l as u,B as m,x as l,A as s,p as x,y as c,H as v}from"./vue.esm-bundler.ad0aee8d.js";import{_}from"./+plugin-vue+export-helper.ed6a1c48.js";const S=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","auto","auto-start","auto-end"],g=k({name:"KDropdown",autoload:!0,props:{placement:{type:String,default:"bottom-end",options:S},trigger:{type:String,default:"focusin",options:["click","mouseenter","focus","manual","focusin"]},tag:{type:String,default:"button"},maxHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:0}},setup(e,{slots:o}){const t=b(),d=a(r=>!!o[r],"hasSlot"),i=a(()=>{t.value&&t.value.hide()},"hide"),p=a(()=>{t.value&&t.value.show()},"show"),n=w(()=>({maxHeight:e.maxHeight?`${e.maxHeight}px`:"auto",overflowY:"auto"}));return{hasSlot:d,ulStyle:n,tooltip:t,hide:i,show:p}}}),$=["onClick"];function V(e,o,t,d,i,p){const n=f("k-dropdown-menu"),r=f("k-tooltip");return u(),m(r,{ref:"tooltip",arrow:"",interactive:"","hide-on-click":!1,trigger:e.trigger,placement:e.placement,theme:"dropdown",tag:e.tag,class:"select-none"},{default:l(()=>[s(e.$slots,"default")]),content:l(({hide:h})=>[x("ul",{class:"k-dropdown-items text-base text-gray-700 dark:text-gray-200 text-left",style:v(e.ulStyle),onClick:h},[e.hasSlot("header")?(u(),m(n,{key:0,class:"px-4 py-3 text-gray-900 dark:text-white"},{default:l(()=>[s(e.$slots,"header")]),_:3})):c("",!0),s(e.$slots,"content"),e.hasSlot("footer")?(u(),m(n,{key:1,class:"px-4 py-3 text-gray-900 dark:text-white"},{default:l(()=>[s(e.$slots,"footer")]),_:3})):c("",!0)],12,$)]),_:3},8,["trigger","placement","tag"])}a(V,"_sfc_render");const K=_(g,[["render",V]]);g.__docgenInfo={displayName:"KDropdown",exportName:"default",description:"",tags:{},props:[{name:"placement",type:{name:"String as () => KTooltipPlacement"},defaultValue:{func:!1,value:"'bottom-end'"}},{name:"trigger",type:{name:"string"},defaultValue:{func:!1,value:"'focusin'"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"maxHeight",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"minWidth",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxWidth",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"},{name:"header"},{name:"content"},{name:"footer"}]};export{S as K,K as a};
//# sourceMappingURL=k-dropdown.d49f89bc.js.map
