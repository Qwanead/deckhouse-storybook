import{I as i}from"./InputTimeWindow-3ccd7e1a.js";import{a as l}from"./vue.esm-bundler-c22c51b1.js";import"./ButtonBase-8f35181a.js";import"./vue-types.modern-24ec03a8.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputSelectButton-6adddfcd.js";import"./InputTime-e0b9b076.js";import"./InputTextConfirm-c0059b46.js";import"./InputTextBase-963889aa.js";import"./InputErrorTooltip-41202258.js";import"./vue-i18n.esm-bundler-ace93cd9.js";const F={title:"UI Kit/form/InputTimeWindow",component:i},p=u=>({components:{InputTimeWindow:i},setup(){const d=l([{days:["Fri","Sat","Sun"],from:"02:00",to:"08:00"}]);return{args:u,value:d}},template:`
    <InputTimeWindow v-bind="args" v-model="value" />
  `}),e=p.bind({}),n=p.bind({});n.args={disabled:!0};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    InputTimeWindow
  },
  setup() {
    const value = ref([{
      days: ["Fri", "Sat", "Sun"],
      from: "02:00",
      to: "08:00"
    }]);
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTimeWindow v-bind="args" v-model="value" />
  \`
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var a,s,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    InputTimeWindow
  },
  setup() {
    const value = ref([{
      days: ["Fri", "Sat", "Sun"],
      from: "02:00",
      to: "08:00"
    }]);
    return {
      args,
      value
    };
  },
  template: /* html */\`
    <InputTimeWindow v-bind="args" v-model="value" />
  \`
})`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const _=["Default","Disabled"];export{e as Default,n as Disabled,_ as __namedExportsOrder,F as default};
//# sourceMappingURL=InputTimeWindow.stories-bba1b1d1.js.map
