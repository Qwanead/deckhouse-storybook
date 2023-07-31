import{I as o}from"./InputTextBase-963889aa.js";import{a as E}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputErrorTooltip-41202258.js";const R={title:"UI Kit/form/InputText/InputTextBase",component:o},s=p=>({components:{InputTextBase:o},setup(){const S=E("");return{args:p,value:S}},template:`
    <InputTextBase v-bind="args" v-model="value" />
  `}),e=s.bind({});e.args={placeholder:"Placeholder"};const n=s.bind({});n.args={label:"Label",required:!0};const t=s.bind({});t.args={disabled:!0,modelValue:"Text"};const r=s.bind({});r.args={iconName:"edit"};const a=()=>({components:{InputTextBase:o},setup(){return{value:E("")}},template:`
    <div style="padding-top: 20px;">
      <InputTextBase v-model="value" error="Error text" style="padding-top: 20px;"/>
    </div>
  `});var u,l,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    InputTextBase
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextBase v-bind="args" v-model="value" />
  \`
})`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    InputTextBase
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextBase v-bind="args" v-model="value" />
  \`
})`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var v,g,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    InputTextBase
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextBase v-bind="args" v-model="value" />
  \`
})`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var I,T,b;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    InputTextBase
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextBase v-bind="args" v-model="value" />
  \`
})`,...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,f,h;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    InputTextBase
  },
  setup() {
    const value = ref("");
    return {
      value
    };
  },
  template: /* html */\`
    <div style="padding-top: 20px;">
      <InputTextBase v-model="value" error="Error text" style="padding-top: 20px;"/>
    </div>
  \`
})`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const K=["Default","RequiredWithLabel","Disabled","WithIcon","Error"];export{e as Default,t as Disabled,a as Error,n as RequiredWithLabel,r as WithIcon,K as __namedExportsOrder,R as default};
//# sourceMappingURL=InputTextBase.stories-f1d0b0de.js.map
