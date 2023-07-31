import{d as e}from"./index-725f109f.js";import"./vue.esm-bundler-c22c51b1.js";import"./_plugin-vue_export-helper-c27b6911.js";const o=Object.keys(e),c={options:o,defaultValue:o[0],control:{type:"select"}},l={title:"Deckhouse UI/components/deprecated/Icon",argTypes:{icon:c}},n=r=>({components:{...e},setup(){return{args:r,Icons:e}},template:`
    <ul>
      <li v-for="iconName in Object.keys(Icons)" style="padding: 5px; display: flex; border: 1px solid var(--grey); gap: 15px; align-items: center; margin-bottom: 5px;">
        <component :is="iconName" />
        <span>{{ iconName }}</span>
      </li>
    </ul>
  `});var s,t,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ...Icons
  },
  setup() {
    return {
      args,
      Icons
    };
  },
  template: /* html */\`
    <ul>
      <li v-for="iconName in Object.keys(Icons)" style="padding: 5px; display: flex; border: 1px solid var(--grey); gap: 15px; align-items: center; margin-bottom: 5px;">
        <component :is="iconName" />
        <span>{{ iconName }}</span>
      </li>
    </ul>
  \`
})`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const d=["Icon"];export{n as Icon,d as __namedExportsOrder,l as default};
//# sourceMappingURL=Icon.stories-0530997c.js.map
