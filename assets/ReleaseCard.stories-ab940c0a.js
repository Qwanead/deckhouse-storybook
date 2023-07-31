import{R as a,r as u}from"./releaseStatuses-3e794a4f.js";import"./vue.esm-bundler-c22c51b1.js";import"./CardBlock-473d9ef6.js";import"./vue-types.modern-24ec03a8.js";import"./PlaceholderContent-c4af05a1.js";import"./skeleton.esm-7cb94a1a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CardNotice-7e5e3c04.js";import"./messageStatusTypes-beeb8f93.js";import"./IconBase-64cd1ae6.js";import"./CardTitle-dec90532.js";import"./CardTitleBadge-5d4540a9.js";import"./ButtonBase-8f35181a.js";import"./ParamsItem-b5dbda71.js";import"./vue-i18n.esm-bundler-ace93cd9.js";const i=[{title:"Дата релиза",value:"2023/02/11 - 19:00:15"},{title:"Дата установки",value:"2023/02/11 - 19:00:36"}],I={title:"Deckhouse UI/components/releases/ReleaseCard",component:a},c=s=>({components:{ReleaseCard:a},setup(){return{args:s}},template:`
    <ReleaseCard v-bind="args" />
  `}),e=c.bind({});e.args={title:"v1.45.3",content:i};const t=s=>({components:{ReleaseCard:a},setup(){return{args:s,releaseStatuses:u,content:i}},template:`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <template v-for="(status, i) in releaseStatuses">
        <ReleaseCard :status="status" :title="status" :content="content" />
      </template>
    </div>
  `});var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    ReleaseCard
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ReleaseCard v-bind="args" />
  \`
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    ReleaseCard
  },
  setup() {
    return {
      args,
      releaseStatuses,
      content
    };
  },
  template: /* html */\`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <template v-for="(status, i) in releaseStatuses">
        <ReleaseCard :status="status" :title="status" :content="content" />
      </template>
    </div>
  \`
})`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const O=["Default","Statuses"];export{e as Default,t as Statuses,O as __namedExportsOrder,I as default};
//# sourceMappingURL=ReleaseCard.stories-ab940c0a.js.map
