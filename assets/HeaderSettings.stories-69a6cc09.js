import{I as v,o as H,k as I,l as e,t as o,u as i,G as _,Q as c,Y as y,Z as V}from"./vue.esm-bundler-c22c51b1.js";import{I as p}from"./InputToggle-652170f9.js";import"./ButtonBase-8f35181a.js";import{u as b,a as M}from"./useTimezoneMode-bcff309d.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-types.modern-24ec03a8.js";import"./IconBase-64cd1ae6.js";const h=t=>(y("data-v-2ce64c48"),t=t(),V(),t),N={class:"header-settings"},U={class:"ty-h2"},$={class:"ty-h3"},z={class:"header-settings__controls"},B={class:"header-settings__toggle"},D={class:"header-settings__toggle-label"},P=h(()=>e("div",{class:"ty-separator-dashed header-settings__toggle-separator"},null,-1)),x={class:"header-settings__toggle"},E={class:"header-settings__toggle-label"},T=h(()=>e("div",{class:"ty-separator-dashed header-settings__toggle-separator"},null,-1)),f=v({__name:"HeaderSettings",setup(t){const{apiPathMode:r}=b(),{timezoneMode:d}=M();return(s,a)=>(H(),I("div",N,[e("h2",U,o(s.$t("header.settings.title.main")),1),e("h3",$,o(s.$t("header.settings.title.common")),1),e("ul",z,[e("li",B,[e("span",D,o(s.$t("header.settings.label.apiPathMode")),1),P,i(p,{class:"header-settings__toggle-input",modelValue:_(r),"onUpdate:modelValue":a[0]||(a[0]=l=>c(r)?r.value=l:null)},null,8,["modelValue"])]),e("li",x,[e("span",E,o(s.$t("header.settings.label.timezoneMode")),1),T,i(p,{class:"header-settings__toggle-input",modelValue:_(d),"onUpdate:modelValue":a[1]||(a[1]=l=>c(d)?d.value=l:null)},null,8,["modelValue"])])])]))}});const S=k(f,[["__scopeId","data-v-2ce64c48"]]);f.__docgenInfo={exportName:"default",displayName:"HeaderSettings",description:"",tags:{},sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/components/header/HeaderSettings.vue"]};const Q={title:"UI Kit/header/HeaderSettings",component:S},n=t=>({components:{HeaderSettings:S},setup(){return{args:t}},template:'<HeaderSettings v-bind="args" />'});var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    HeaderSettings
  },
  setup() {
    return {
      args
    };
  },
  template: '<HeaderSettings v-bind="args" />'
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=HeaderSettings.stories-69a6cc09.js.map
