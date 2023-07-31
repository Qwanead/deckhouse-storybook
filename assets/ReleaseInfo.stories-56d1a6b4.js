import{R as m}from"./ReleaseInfo-db81f8a3.js";import"./vue.esm-bundler-c22c51b1.js";import"./ParamsBlock-030746a5.js";import"./vue-types.modern-24ec03a8.js";import"./IconBase-64cd1ae6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PlaceholderContent-c4af05a1.js";import"./skeleton.esm-7cb94a1a.js";import"./ParamsItem-b5dbda71.js";const i=[{title:"Общая информация",route:{name:"Home"},items:[{title:"Ваш формат времени",value:"Europe/Moscow (UTC+03:00)"},{title:"Канал обновлений",value:"Alpha"},{title:"Режим обновлений",value:"Авто"},{title:"Подтверждение опасных изменений",value:"По умолчанию"}]},{title:"Уведомления об обновлениях",route:{name:"Home"},items:[{title:"Оповещение",value:"за 1 час"},{title:"URL",value:"http://acme.com",type:"link"},{title:"Авторизация",value:"Bearer-токен"},{title:"Пропустить валидацию TLS",value:"По умолчанию"}]},{title:"Окна обновлений",route:{name:"Home"},items:[{title:"Пн, Вт, Вс",value:"с 19:00 до 23:00"},{title:"Пн, Чт",value:"с 11:00 до 12:30"}]}],L={title:"Deckhouse UI/components/releases/ReleaseInfo",component:m},p=u=>({components:{ReleaseInfo:m},setup(){return{args:u}},template:`
    <ReleaseInfo v-bind="args" />
  `}),e=p.bind({});e.args={params:i};const t=p.bind({});t.args={params:i,contentLoading:!0};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    ReleaseInfo
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ReleaseInfo v-bind="args" />
  \`
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    ReleaseInfo
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ReleaseInfo v-bind="args" />
  \`
})`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const C=["Default","ContentLoading"];export{t as ContentLoading,e as Default,C as __namedExportsOrder,L as default};
//# sourceMappingURL=ReleaseInfo.stories-56d1a6b4.js.map
