import{I as o,a as r}from"./IconBase-64cd1ae6.js";import"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={title:"UI Kit/Icons",component:o},i=t=>({components:{IconBase:o},setup(){return{args:t,icons:r}},template:`
    <ul>
      <li v-for="(iconName, i) in Object.keys(icons)" style="padding: 5px; display: flex; border: 1px solid var(--grey); gap: 8px; align-items: center; margin-bottom: 5px;">
        <IconBase :name="iconName" style="fill: var(--brandeis-blue);"/>
        <span>{{ iconName }}</span>
      </li>
    </ul>
  `}),e=i.bind({});var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    IconBase
  },
  setup() {
    return {
      args,
      icons
    };
  },
  template: /* html */\`
    <ul>
      <li v-for="(iconName, i) in Object.keys(icons)" style="padding: 5px; display: flex; border: 1px solid var(--grey); gap: 8px; align-items: center; margin-bottom: 5px;">
        <IconBase :name="iconName" style="fill: var(--brandeis-blue);"/>
        <span>{{ iconName }}</span>
      </li>
    </ul>
  \`
})`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
//# sourceMappingURL=Icons.stories-1f03380f.js.map
