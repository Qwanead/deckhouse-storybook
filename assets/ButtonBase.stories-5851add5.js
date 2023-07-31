import{B as t}from"./ButtonBase-8f35181a.js";import{a as S}from"./IconBase-64cd1ae6.js";import"./vue.esm-bundler-c22c51b1.js";import"./vue-types.modern-24ec03a8.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={title:"UI Kit/ButtonBase",component:t,argTypes:{btnStyle:{type:{name:"string"},control:"select",defaultValue:"default",options:["default","accent"]},iconPositionLeft:{type:{name:"boolean"},control:"boolean",defaultValue:!1},iconName:{type:{name:"string"},control:"select",options:Object.keys(S)},disabled:{type:{name:"boolean"},control:"boolean",defaultValue:!1}}},I=h=>({components:{ButtonBase:t},setup(){return{args:h}},template:`
    <ButtonBase v-bind="args">Button</ButtonBase>
  `}),e=I.bind({}),n=()=>({components:{ButtonBase:t},template:`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent">
        accent
      </ButtonBase>
    </div>
  `}),a=()=>({components:{ButtonBase:t},template:`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" icon-name="arrow">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" icon-name="arrow">
        accent
      </ButtonBase>
    </div>
  `}),o=()=>({components:{ButtonBase:t},template:`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" icon-name="cancel" icon-position-left>
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" icon-name="cancel" icon-position-left>
        accent
      </ButtonBase>
    </div>
  `}),s=()=>({components:{ButtonBase:t},template:`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" disabled icon-name="cancel">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" disabled icon-name="cancel">
        accent
      </ButtonBase>
    </div>
  `});var c,l,r;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    ButtonBase
  },
  setup() {
    return {
      args
    };
  },
  template: /* html */\`
    <ButtonBase v-bind="args">Button</ButtonBase>
  \`
})`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var u,B,i;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => ({
  components: {
    ButtonBase
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent">
        accent
      </ButtonBase>
    </div>
  \`
})`,...(i=(B=n.parameters)==null?void 0:B.docs)==null?void 0:i.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    ButtonBase
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" icon-name="arrow">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" icon-name="arrow">
        accent
      </ButtonBase>
    </div>
  \`
})`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => ({
  components: {
    ButtonBase
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" icon-name="cancel" icon-position-left>
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" icon-name="cancel" icon-position-left>
        accent
      </ButtonBase>
    </div>
  \`
})`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    ButtonBase
  },
  template: /* html */\`
    <div style="display: flex; gap: 15px">
      <ButtonBase btn-style="default" disabled icon-name="cancel">
        default
      </ButtonBase>
      <ButtonBase btn-style="accent" disabled icon-name="cancel">
        accent
      </ButtonBase>
    </div>
  \`
})`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const _=["Default","ButtonStyle","WithIcon","WithLeftPositionIcon","Disabled"];export{n as ButtonStyle,e as Default,s as Disabled,a as WithIcon,o as WithLeftPositionIcon,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=ButtonBase.stories-5851add5.js.map
