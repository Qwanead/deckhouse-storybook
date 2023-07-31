import{I as v}from"./InputRadioButton-ecf14902.js";import{a as f}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./RadioButtonBase-94fe6765.js";import"./utils-f563949e.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={title:"UI Kit/form/RadioButton/InputRadioButton",component:v},o=[{name:"option1",value:"1"},{name:"option2",value:"2"},{name:"option3",value:"3"}],a=g=>({components:{InputRadioButton:v},setup(){const b=f("1");return{args:g,options:o,value:b}},template:`
    <InputRadioButton v-bind="args" v-model="value" />
  `}),n=a.bind({});n.args={options:o};const t=a.bind({});t.args={disabled:!0,options:o};const e=a.bind({});e.args={options:[...o,{name:"option4",value:"4",disabled:!0}]};var r,s,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    InputRadioButton
  },
  setup() {
    const value = ref("1");
    return {
      args,
      options,
      value
    };
  },
  template: /* html */\`
    <InputRadioButton v-bind="args" v-model="value" />
  \`
})`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    InputRadioButton
  },
  setup() {
    const value = ref("1");
    return {
      args,
      options,
      value
    };
  },
  template: /* html */\`
    <InputRadioButton v-bind="args" v-model="value" />
  \`
})`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    InputRadioButton
  },
  setup() {
    const value = ref("1");
    return {
      args,
      options,
      value
    };
  },
  template: /* html */\`
    <InputRadioButton v-bind="args" v-model="value" />
  \`
})`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _=["Default","Disabled","DisabledOneOfOption"];export{n as Default,t as Disabled,e as DisabledOneOfOption,_ as __namedExportsOrder,S as default};
//# sourceMappingURL=InputRadioButton.stories-e2a255ec.js.map
