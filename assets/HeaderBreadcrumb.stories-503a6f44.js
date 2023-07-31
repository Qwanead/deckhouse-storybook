import{I as i,g as b,o as r,k as a,l as c,F as p,y as f,f as H,u as g,m as B,p as v,t as y}from"./vue.esm-bundler-c22c51b1.js";import{S as k}from"./vue-types.modern-24ec03a8.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const x={class:"breadcrumb","aria-label":"Global"},C={class:"breadcrumb__list"},N={key:0,class:"ty-comment-text breadcrumb__separator"},u=i({__name:"HeaderBreadcrumbs",props:{items:k().isRequired},setup(s){return(I,D)=>{const _=b("router-link");return r(),a("nav",x,[c("ul",C,[(r(!0),a(p,null,f(s.items,(t,o)=>(r(),a("li",{key:o,class:"breadcrumb__item"},[o!==0?(r(),a("span",N," / ")):H("",!0),g(_,{to:t.to||"/"},{default:B(()=>[c("span",{class:v(["ty-comment-text","breadcrumb__label",{"breadcrumb__label--active":t.active}])},y(t.label),3)]),_:2},1032,["to"])]))),128))])])}}});const l=h(u,[["__scopeId","data-v-1edbb476"]]);u.__docgenInfo={exportName:"default",displayName:"HeaderBreadcrumbs",description:"",tags:{},props:[{name:"items",type:{name:"array<HeaderBreadcrumb>().isRequired",func:!0}}],sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/shared/ui_kit/header/HeaderBreadcrumbs.vue"]};const q={title:"UI Kit/header/HeaderBreadcrumbs",component:l},e=s=>({components:{HeaderBreadcrumbs:l},setup(){return{args:s}},template:'<HeaderBreadcrumbs v-bind="args" />'});e.args={items:[{label:"Узлы",to:{name:"Home"}},{label:"commander",to:{name:"Home"}},{label:"Список узлов",to:{name:"Home"}},{label:"kube-commander-e3d1bdf6-565d7-zv72g",to:{name:"Home"},active:!0}]};var m,d,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    HeaderBreadcrumbs
  },
  setup() {
    return {
      args
    };
  },
  template: '<HeaderBreadcrumbs v-bind="args" />'
})`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=HeaderBreadcrumb.stories-503a6f44.js.map
