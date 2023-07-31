import{_ as l}from"./List-09f6fd5e.js";import{r as g}from"./releaseStatuses-3e794a4f.js";import"./vue.esm-bundler-c22c51b1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue-types.modern-24ec03a8.js";import"./CardBlock-473d9ef6.js";import"./PlaceholderContent-c4af05a1.js";import"./skeleton.esm-7cb94a1a.js";import"./CardNotice-7e5e3c04.js";import"./messageStatusTypes-beeb8f93.js";import"./IconBase-64cd1ae6.js";import"./CardTitle-dec90532.js";import"./CardTitleBadge-5d4540a9.js";import"./ButtonBase-8f35181a.js";import"./ParamsItem-b5dbda71.js";import"./vue-i18n.esm-bundler-ace93cd9.js";const n={title:"v1.45.",route:{name:"Home"},content:[{title:"Дата релиза",value:"2023/02/11 - 19:00:15"},{title:"Дата установки",value:"2023/02/11 - 19:00:36"}]},u=g.map((s,r)=>({uid:`${n.title}${r}`,title:`${n.title}${r}`,status:s,content:n.content})),O={title:"Deckhouse UI/components/releases/ReleaseList",component:l},d=s=>({components:{ReleaseList:l},setup(){return{args:s}},template:`
    <ReleaseList  v-bind="args" />
  `}),e=d.bind({});e.args={items:u};const t=d.bind({});t.args={items:u,contentLoading:!0};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    ReleaseList
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ReleaseList  v-bind="args" />
  \`
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    ReleaseList
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ReleaseList  v-bind="args" />
  \`
})`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const T=["Default","ContentLoading"];export{t as ContentLoading,e as Default,T as __namedExportsOrder,O as default};
//# sourceMappingURL=ReleaseList.stories-b577eb41.js.map
