var d=Object.defineProperty;var o=(s,e)=>d(s,"name",{value:e,configurable:!0});import{d as l,i as p,o as c,a as u,j as g,n as b}from"./vue.esm-bundler.40c2ec29.js";import{u as h}from"./utils.afff62ba.js";import{_ as x}from"./+plugin-vue+export-helper.ed6a1c48.js";const i=["white","black","gray","primary","secondary","success","warning","danger","info"],f={id:{type:String,default:()=>h(),description:"ID del badge"},size:{type:String,control:"inline-radio",options:["xs","sm","md","lg"],validator:s=>["xs","sm","md","lg"].includes(s),default:"md",description:"Tama\xF1o del badge"},color:{type:String,control:"inline-radio",options:i,validator:s=>i.includes(s),default:"gray",description:"Color del badge"},neon:{type:Boolean,default:!1,description:"Establece el dise\xF1o `ne\xF3n` del bot\xF3n"}},m=o(s=>{const e=["text-center font-semibold rounded-lg transition-all h-max whitespace-nowrap inline-flex"],t=s.neon,r=s.color,a=s.size;return a==="xs"?e.push("py-1 px-3 text-xs"):a==="sm"?e.push("py-1 px-4 text-sm"):a==="md"?e.push("py-1.5 px-4 text-sm"):a==="lg"&&e.push("py-2 px-5 text-base"),t?e.push("border bg-opacity-20 border-opacity-0 dark:bg-opacity-10 dark:border-opacity-0"):e.push("border"),r==="black"||r==="white"?(e.push("border-black bg-black dark:border-white dark:bg-white"),e.push(t?"text-black dark:text-white":"text-white dark:text-black")):r==="gray"?(e.push("border-gray-300 bg-gray-300"),e.push(t?"text-gray-300":"text-gray-700")):r==="primary"?(e.push("border-primary bg-primary"),e.push(t?"text-primary":"text-white")):r==="secondary"?(e.push("border-secondary  bg-secondary"),e.push(t?"text-secondary":"text-white")):r==="success"?(e.push("border-success  bg-success"),e.push(t?"text-success":"text-white")):r==="warning"?(e.push("border-warning  bg-warning"),e.push(t?"text-warning":"text-white")):r==="danger"?(e.push("border-danger  bg-danger"),e.push(t?"text-danger":"text-white")):r==="info"&&(e.push("border-info  bg-info"),e.push(t?"text-info":"text-white")),e},"parseClasses"),n=l({name:"KBadge",autoload:!0,props:f,setup(s){return{badgeClasses:p(()=>m(s))}}}),y=["id"];function w(s,e,t,r,a,k){return c(),u("span",{id:s.id,class:b(s.badgeClasses)},[g(s.$slots,"default")],10,y)}o(w,"_sfc_render");const z=x(n,[["render",w]]);n.__docgenInfo={displayName:"KBadge",exportName:"default",description:"",tags:{},slots:[{name:"default"}]};export{z as K};
//# sourceMappingURL=k-badge.bf8b5d05.js.map
