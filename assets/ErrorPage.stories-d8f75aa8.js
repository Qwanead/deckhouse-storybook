import{_ as p}from"./ErrorPage-f2d3b4ef.js";import"./vue.esm-bundler-c22c51b1.js";const i={title:"Deckhouse UI/components/deprecated/ErrorPage",component:p,parameters:{layout:"fullscreen"}},g=m=>({components:{ErrorPage:p},setup(){return{args:m}},template:`
    <ErrorPage v-bind="args" />
  `}),r=g.bind({});r.args={loadError:{code:404,text:"Страница не найдена."}};const e=g.bind({});e.args={loadError:{code:500,text:"Что-то пошло не так. Перезагрузите страницу."}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    ErrorPage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <ErrorPage v-bind="args" />
  \`
})`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,t,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ErrorPage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <ErrorPage v-bind="args" />
  \`
})`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const l=["Page404","Page500"];export{r as Page404,e as Page500,l as __namedExportsOrder,i as default};
//# sourceMappingURL=ErrorPage.stories-d8f75aa8.js.map
