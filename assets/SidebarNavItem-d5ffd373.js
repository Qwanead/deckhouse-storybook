import{I as c,c as d,g as u,o as s,k as l,u as p,m as _,p as i,f as r,G as m,e as f,l as v,t as b}from"./vue.esm-bundler-c22c51b1.js";import{T as y}from"./TreeMarker-6e42dd51.js";import{N as k,A as S}from"./vue-types.modern-24ec03a8.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const I={key:0},o=c({__name:"SidebarNavItem",props:{item:k().isRequired,type:S().def("default")},setup(e){const t=e,a=d(()=>t.type==="subitem"||t.type==="lastSubitem");return(g,x)=>{const n=u("router-link");return e.item.disabled?r("",!0):(s(),l("li",I,[p(n,{to:e.item.route,class:i(["nav-item",{"nav-item--active":e.item.active}])},{default:_(()=>[m(a)?(s(),f(y,{key:0,class:"nav-item__tree-marker",last:e.type==="lastSubitem"},null,8,["last"])):r("",!0),v("span",{class:i(["ty-forms-text","nav-item__title",{"nav-item__title--subitem":m(a)}])},b(e.item.title),3)]),_:1},8,["to","class"])]))}}});const V=N(o,[["__scopeId","data-v-206d2d70"]]);o.__docgenInfo={exportName:"default",displayName:"SidebarNavItem",description:"",tags:{},props:[{name:"item",type:{name:"object<SidebarItemType>().isRequired",func:!0}},{name:"type",type:{name:'string<"default" | "subitem" | "lastSubitem">().def("default")',func:!0}}],sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/shared/ui_kit/sidebar-nav/SidebarNavItem.vue"]};export{V as S};
//# sourceMappingURL=SidebarNavItem-d5ffd373.js.map