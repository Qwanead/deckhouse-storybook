import{F as m}from"./FormBlock-83c4df11.js";import{F as c}from"./FromBlockTitle-bd2f7d29.js";import{I as i}from"./InputRadioButton-ecf14902.js";import{a as t}from"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputToggle-652170f9.js";import"./FormApiPath-e44bb38a.js";import"./IconBase-64cd1ae6.js";import"./RadioButtonBase-94fe6765.js";import"./utils-f563949e.js";const P={title:"UI Kit/form/FormBlockExample",component:m},u=l=>({components:{FormBlock:m,FromBlockTitle:c,InputRadioButton:i},setup(){const a=[{name:"Ручной",value:"1"},{name:"Авто",value:"2"},{name:"По умолчанию",value:"3"}],p=t("2"),s=t(!1);return{args:l,options:a,value:p,toggleValue:s,comment:"Пример опасных изменений: изменившиеся значения по умолчанию, поведение модулей, перезапуск компонентов. Влияет только на минорные версии. Обновления патч-версий всегда применяются автоматически.",error:"Выберите канал обновлений."}},template:`
    <FormBlock :comment="comment" :error="error" style="width: 472px;">
      <template #title>
        <FromBlockTitle
          docIcon
          showApiPath
          apiPathText="spec.settings.update.mode"
          toggle
          :error="error"
          v-model="toggleValue"
        >
          Режим обновлений
        </FromBlockTitle>
      </template>
      
      <template #content>
        <InputRadioButton :options="options" v-model="value" />
      </template>
    </FormBlock>
  `}),o=u.bind({});var e,n,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    FormBlock,
    FromBlockTitle,
    InputRadioButton
  },
  setup() {
    const options = [{
      name: "Ручной",
      value: "1"
    }, {
      name: "Авто",
      value: "2"
    }, {
      name: "По умолчанию",
      value: "3"
    }];
    const value = ref("2");
    const toggleValue = ref(false);
    const error = "Выберите канал обновлений.";
    const comment = "Пример опасных изменений: изменившиеся значения по умолчанию, поведение модулей, перезапуск компонентов. Влияет только на минорные версии. Обновления патч-версий всегда применяются автоматически.";
    return {
      args,
      options,
      value,
      toggleValue,
      comment,
      error
    };
  },
  template: /* html */\`
    <FormBlock :comment="comment" :error="error" style="width: 472px;">
      <template #title>
        <FromBlockTitle
          docIcon
          showApiPath
          apiPathText="spec.settings.update.mode"
          toggle
          :error="error"
          v-model="toggleValue"
        >
          Режим обновлений
        </FromBlockTitle>
      </template>
      
      <template #content>
        <InputRadioButton :options="options" v-model="value" />
      </template>
    </FormBlock>
  \`
})`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,P as default};
//# sourceMappingURL=FormBlockExample.stories-fdc8d506.js.map
