var i=Object.defineProperty;var n=(e,o)=>i(e,"name",{value:o,configurable:!0});import{d as r,k as a,l as d,B as u,x as s,p as t,t as f,q as _}from"./vue.esm-bundler.ad0aee8d.js";import{_ as m}from"./+plugin-vue+export-helper.ed6a1c48.js";const c=r({name:"KHelp",autoload:!0,props:{text:{type:String,default:"",description:"Texto de la ayuda"},icon:{type:String,default:"seal-question",description:"Icono"}}}),x={class:"flex flex-col text-sm"},y=t("div",{class:"border-b border-b-gray-600 px-4 py-1 text-center uppercase font-bold flex justify-center"},[t("span",null,"Ayuda")],-1),g={class:"px-4 py-2"};function k(e,o,h,v,b,B){const p=a("k-icon"),l=a("k-tooltip");return d(),u(l,{content:e.text},{content:s(()=>[t("div",x,[y,t("div",g,f(e.text),1)])]),default:s(()=>[_(p,{type:"fad",icon:e.icon,class:"dark:text-white text-gray-200"},null,8,["icon"])]),_:1},8,["content"])}n(k,"_sfc_render");const $=m(c,[["render",k]]);c.__docgenInfo={displayName:"KHelp",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'seal-question'"}}]};export{$ as K};
//# sourceMappingURL=k-help.625df571.js.map
