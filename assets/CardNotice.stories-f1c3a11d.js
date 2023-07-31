import{C as r}from"./CardNotice-7e5e3c04.js";import{m}from"./messageStatusTypes-beeb8f93.js";import"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";const f={title:"UI Kit/Card/CardNotice",component:r},d=c=>({components:{CardNotice:r},setup(){return{args:c}},template:`
    <CardNotice v-bind="args">Notice text</CardNotice>
  `}),e=d.bind({}),t=()=>({components:{CardNotice:r},setup(){return{messageStatusTypes:m}},template:`
    <div style="display: flex; gap: 15px; flex-direction: column;">
      <template  v-for="(type, i) in messageStatusTypes" :key="i">
        <CardNotice :type="type">Notice {{ type }}</CardNotice>
      </template>
    </div>
  `});var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    CardNotice
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <CardNotice v-bind="args">Notice text</CardNotice>
  \`
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,p,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    CardNotice
  },
  setup() {
    return {
      messageStatusTypes
    };
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px; flex-direction: column;">
      <template  v-for="(type, i) in messageStatusTypes" :key="i">
        <CardNotice :type="type">Notice {{ type }}</CardNotice>
      </template>
    </div>
  \`
})`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const x=["Default","Types"];export{e as Default,t as Types,x as __namedExportsOrder,f as default};
//# sourceMappingURL=CardNotice.stories-f1c3a11d.js.map
