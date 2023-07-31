import{C as a}from"./CardTitleBadge-5d4540a9.js";import{m as o}from"./messageStatusTypes-beeb8f93.js";import"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={title:"UI Kit/Card/CardTitleBadge",component:a},m=l=>({components:{CardTitleBadge:a},setup(){return{args:l,messageStatusTypes:o}},template:`
    <CardTitleBadge v-bind="args">Title badge</CardTitleBadge>
  `}),e=m.bind({}),t=()=>({components:{CardTitleBadge:a},setup(){return{messageStatusTypes:o}},template:`
    <div style="display: flex; gap: 15px">
      <template  v-for="(type, i) in messageStatusTypes" :key="i">
        <CardTitleBadge :type="type">{{ type }}</CardTitleBadge>
      </template>
    </div>
  `});var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    CardTitleBadge
  },
  setup() {
    return {
      args,
      messageStatusTypes
    };
  },
  template: /* html */\`
    <CardTitleBadge v-bind="args">Title badge</CardTitleBadge>
  \`
})`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var p,d,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    CardTitleBadge
  },
  setup() {
    return {
      messageStatusTypes
    };
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px">
      <template  v-for="(type, i) in messageStatusTypes" :key="i">
        <CardTitleBadge :type="type">{{ type }}</CardTitleBadge>
      </template>
    </div>
  \`
})`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const B=["Default","Types"];export{e as Default,t as Types,B as __namedExportsOrder,C as default};
//# sourceMappingURL=CardTitleBage.stories-6948a6bf.js.map
