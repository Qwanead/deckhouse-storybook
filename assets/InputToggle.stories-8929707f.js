import{I as a}from"./InputToggle-652170f9.js";import{a as l}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./_plugin-vue_export-helper-c27b6911.js";const u={title:"UI Kit/form/InputToggle",component:a,argTypes:{disabled:{type:{name:"boolean"},control:"boolean",defaultValue:!1}}},c=s=>({components:{InputToggle:a},setup(){const r=l(!1);return{args:s,checked:r}},template:`
    <InputToggle
      v-model="checked" 
      :disabled="args.disabled"
    />
  `}),e=c.bind({});var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    InputToggle
  },
  setup() {
    const checked = ref(false);
    return {
      args,
      checked
    };
  },
  template: /* html */\`
    <InputToggle
      v-model="checked" 
      :disabled="args.disabled"
    />
  \`
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,u as default};
//# sourceMappingURL=InputToggle.stories-8929707f.js.map
