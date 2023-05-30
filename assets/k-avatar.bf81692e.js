var d=Object.defineProperty;var l=(e,a)=>d(e,"name",{value:a,configurable:!0});import{d as p,z as r,a9 as c,D as f,l as m,m as g,C as v,H as y}from"./vue.esm-bundler.ad0aee8d.js";import{u as b}from"./query.373371fe.js";import{_ as h}from"./+plugin-vue+export-helper.ed6a1c48.js";const s=p({name:"KAvatar",autoload:!0,props:{name:{type:String,default:"???",required:!0,description:"Nombre del avatar"},size:{type:Number,default:120,description:"Tama\xF1o del avatar",control:{type:"range",min:40,max:200}},square:{type:Boolean,default:!0,description:"Define un estilo cuadrado"},circle:{type:Boolean,default:!1,description:"Define un estilo circular"},bgColor:{default:"",type:String,description:"Color de fondo del avatar",control:{type:"color"}},tooltip:{type:Boolean,default:!0,description:"Define si se muestra el tooltip"},tag:{type:String,default:"span",description:"Define el tag del componente"},type:{type:String,default:"auto",description:"Define el tipo de avatar",options:["auto","adventurer-neutral","avataaars-neutral","big-ears-neutral","big-smile","bottts-neutral","croodles","croodles-neutral","initials","lorelei","lorelei-neutral","micah","miniavs","notionists","notionists-neutral","open-peeps","thumbs"],control:{type:"select"}}},setup(e){const a=b(),o=r(()=>e.circle?"circle":"square"),n=r(()=>{let t=e.type;return e.type==="auto"&&(t=a.get("avatarType")),`https://avatar.gestios.es/6.x/${t}/svg?seed=${e.name}`});return{geo:o,src:n}}}),C=["src","width","height"];function D(e,a,o,n,t,i){const u=c("tooltip");return f((m(),g("img",{src:e.src,width:e.size,height:e.size,class:v({"rounded-xl overflow-hidden":e.geo==="square","rounded-full overflow-hidden":e.geo==="circle"}),style:y({backgroundColor:e.bgColor||void 0})},null,14,C)),[[u,{content:e.tooltip?e.name:void 0,placement:"top"}]])}l(D,"_sfc_render");const $=h(s,[["render",D]]);s.__docgenInfo={displayName:"KAvatar",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'???'"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"square",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"circle",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bgColor",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'auto'"}}]};export{$ as K};
//# sourceMappingURL=k-avatar.bf81692e.js.map
