import{I as r}from"./InputSelectButton-6adddfcd.js";import{a as v}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./ButtonBase-8f35181a.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={title:"UI Kit/form/InputSelectButton",component:r},p=i=>({components:{InputSelectButton:r},setup(){const c=v(["Mon","Sun"]);return{args:i,value:c,options:[{label:"Пн",value:"Mon"},{label:"Вт",value:"Tue"},{label:"Ср",value:"Wed"},{label:"Чт",value:"Thu"},{label:"Пт",value:"Fri"},{label:"Сб",value:"Sat"},{label:"Вс",value:"Sun"}]}},template:`
    <InputSelectButton v-bind="args" v-model="value" :options="options" />
  `}),e=p.bind({}),n=p.bind({});n.args={disabled:!0};var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    InputSelectButton
  },
  setup() {
    const value = ref(["Mon", "Sun"]);
    const options = [{
      label: "Пн",
      value: "Mon"
    }, {
      label: "Вт",
      value: "Tue"
    }, {
      label: "Ср",
      value: "Wed"
    }, {
      label: "Чт",
      value: "Thu"
    }, {
      label: "Пт",
      value: "Fri"
    }, {
      label: "Сб",
      value: "Sat"
    }, {
      label: "Вс",
      value: "Sun"
    }];
    return {
      args,
      value,
      options
    };
  },
  template: /* html */\`
    <InputSelectButton v-bind="args" v-model="value" :options="options" />
  \`
})`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var o,u,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    InputSelectButton
  },
  setup() {
    const value = ref(["Mon", "Sun"]);
    const options = [{
      label: "Пн",
      value: "Mon"
    }, {
      label: "Вт",
      value: "Tue"
    }, {
      label: "Ср",
      value: "Wed"
    }, {
      label: "Чт",
      value: "Thu"
    }, {
      label: "Пт",
      value: "Fri"
    }, {
      label: "Сб",
      value: "Sat"
    }, {
      label: "Вс",
      value: "Sun"
    }];
    return {
      args,
      value,
      options
    };
  },
  template: /* html */\`
    <InputSelectButton v-bind="args" v-model="value" :options="options" />
  \`
})`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const T=["Default","Disabled"];export{e as Default,n as Disabled,T as __namedExportsOrder,B as default};
//# sourceMappingURL=InputSelectButton.stories-ec8d3024.js.map
