import{I as d,o as l,e as _,m as s,u as p,G as u,Y as h,Z as b,l as e}from"./vue.esm-bundler-c22c51b1.js";import{_ as f}from"./SidebarNavList-aa99c4ac.js";import{S as v}from"./SidebarNavLayout-19768e9a.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./SidebarNavFolder-a7d7ef3c.js";import"./IconBase-64cd1ae6.js";import"./vue-types.modern-24ec03a8.js";import"./SidebarNavItem-d5ffd373.js";import"./TreeMarker-6e42dd51.js";const S=""+new URL("logo-c576e81d.svg",import.meta.url).href,x={title:"Сеть",icon:"ingressControllers",section:"Network",route:{name:"Home"},children:[{title:"Ингресс-контроллер",section:"IngressController",route:{name:"Home"}}]},N={title:"Аутентификация и авторизация",icon:"authentication",section:"Authentication",route:{name:"Home"},active:!0,children:[{title:"Провайдеры аутентификации",section:"DexProviders",route:{name:"Home"}},{title:"Статические пользователи",section:"StaticUsers",route:{name:"Home"}},{title:"Права доступа",section:"ClusterAuthorizationRules",route:{name:"Home"}},{title:"Права доступа: продвинутые настройки",icon:"additionalPreferences",section:"RoleBasedAccessControl",route:{name:"Home"},active:!0,children:[{title:"Роли",section:"AuthorizationRole",route:{name:"Home"}},{title:"Привязка ролей",section:"AuthorizationRoleBinding",route:{name:"Home"},active:!0},{title:"Кластерные роли",section:"AuthorizationClusterRole",route:{name:"Home"}},{title:"Привязка кластерных ролей",section:"AuthorizationClusterRoleBinding",route:{name:"Home"}}]}]},C=[x,N],n=t=>(h("data-v-df37248a"),t=t(),b(),t),H=n(()=>e("div",{class:"sidebar__header"},[e("a",{href:"#","aria-label":"logo"},[e("img",{alt:"logo",class:"sidebar__logo",src:S,width:"221",height:"50"})])],-1)),y=n(()=>e("div",{class:"sidebar__footer"},[e("div",{class:"sidebar__footer-block sidebar__footer-block--version"},[e("span",{class:"ty-comment-text sidebar__footer-title"},"Версия:"),e("span",{class:"ty-comment-text sidebar__footer-description"},"0.13.19")]),e("div",{class:"sidebar__footer-block sidebar__footer-block--date"},[e("span",{class:"ty-comment-text sidebar__footer-title"},"Дата сборки::"),e("span",{class:"ty-comment-text sidebar__footer-description"},"2023/07/24 - 12:12:58")])],-1)),c=d({__name:"SidebarNavExample",setup(t){return(w,I)=>(l(),_(v,null,{header:s(()=>[H]),content:s(()=>[p(f,{items:u(C)},null,8,["items"])]),footer:s(()=>[y]),_:1}))}});const m=g(c,[["__scopeId","data-v-df37248a"]]);c.__docgenInfo={exportName:"default",displayName:"SidebarNavExample",description:"",tags:{},sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/stories/components/SideBarNav/SidebarNavExample.vue"]};const T={title:"Deckhouse UI/components/SidebarNav/TheSidebarNav",component:m},k=t=>({components:{SidebarComponent:m},setup(){return{args:t}},template:`
    <SidebarComponent v-bind="args" style="width: var(--sidebar-width); min-height: 100vh"/>
  `}),o=k.bind({});var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    SidebarComponent
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <SidebarComponent v-bind="args" style="width: var(--sidebar-width); min-height: 100vh"/>
  \`
})`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,T as default};
//# sourceMappingURL=SidebarNav.stories-a101b18c.js.map
