var m=Object.defineProperty;var a=(e,o)=>m(e,"name",{value:o,configurable:!0});import{b,j as u}from"./jsx-runtime.aedc7a54.js";function f(e){return e===Boolean?"bool":e===String?"string":e===Number?"number":e===Array?"array":e===Object?"object":"???"}a(f,"getReturnType");function p(e,o=!1,c=!1){const n=e.type,s=e.control||null,r=e.options||null,i=e.presetColors||null,t={type:"text",disable:o};if(n===Boolean)t.type=s||"boolean";else if(n===String)t.type=s||(r?"inline-radio":"text");else if(n===Number)t.type=e.control||"number";else if(Array.isArray(n))t.type=p(n[0],o,!0).toString();else return"text";return r&&(t.options=r),i&&(t.presetColors=i),c?t.type:t}a(p,"parseControl");function x(e,o={},c=!1){const n={};for(let r=0;r<Object.keys(e.props).length;r++){const i=Object.keys(e.props)[r],t=e.props[i],l={description:t.description,type:{name:"",required:t.required||!1},control:{type:"text"},table:{defaultValue:t.default!==void 0?{summary:t.default}:void 0,type:{summary:"",required:t.required||!1},disable:c}};if(l.control=p(t,c),l.type.name=p(t,c,!0).toString(),Array.isArray(t.type)){const y=t.type.map(d=>f(d)).join(" | ");l.table.type.summary=y}else l.table.type.summary=f(t.type);o[i]?n[i]={...o[i],...l}:n[i]=l}const s=e.emits;if(s)for(let r=0;r<s.length;r++)s[r]==="click"&&(n.onClick={action:"clicked"});return n}a(x,"renderArgs");function j({showPanel:e}={showPanel:!0}){return{options:{showPanel:e}}}a(j,"renderParameters");function k({image:e,children:o}){return b("div",{children:[u("div",{className:"justify-center items-center flex",style:{backgroundImage:`url(${e})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"calc(100vw - 17px)",height:"400px",position:"absolute",left:0,top:0},children:u("div",{style:{position:"absolute",content:" ",width:"100%",height:"100%",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:u("h2",{style:{color:"white",fontSize:"3rem",fontWeight:"bold",zIndex:2,textShadow:"0 0 10px rgba(0, 0, 0, 0.5)"},children:o})})}),u("div",{style:{position:"relative",marginTop:"400px"}})]})}a(k,"Head");export{k as H,x as a,j as r};
//# sourceMappingURL=s-head.19ea8db1.js.map
