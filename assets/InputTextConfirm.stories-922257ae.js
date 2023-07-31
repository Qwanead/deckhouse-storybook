import{I as r}from"./InputTextConfirm-c0059b46.js";import{a as v}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./InputTextBase-963889aa.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputErrorTooltip-41202258.js";const D={title:"UI Kit/form/InputText/InputTextConfirm",component:r},f=o=>({components:{InputTextConfirm:r},setup(){const x=v("");return{args:o,value:x}},template:`
    <InputTextConfirm v-bind="args" v-model="value" />
  `}),n=f.bind({}),e=f.bind({});e.args={disabled:!0,modelValue:"Text"};const t=()=>({components:{InputTextConfirm:r},setup(){return{value:v("")}},template:`
    <div style="padding-top: 20px;">
      <InputTextConfirm v-model="value" error="Error text" style="padding-top: 20px;"/>
    </div>
  `});var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    InputTextConfirm
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextConfirm v-bind="args" v-model="value" />
  \`
})`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,u,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    InputTextConfirm
  },
  setup() {
    const value = ref("");
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTextConfirm v-bind="args" v-model="value" />
  \`
})`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    InputTextConfirm
  },
  setup() {
    const value = ref("");
    return {
      value
    };
  },
  template: /* html */\`
    <div style="padding-top: 20px;">
      <InputTextConfirm v-model="value" error="Error text" style="padding-top: 20px;"/>
    </div>
  \`
})`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["Default","Disabled","Error"];export{n as Default,e as Disabled,t as Error,h as __namedExportsOrder,D as default};
//# sourceMappingURL=InputTextConfirm.stories-922257ae.js.map
