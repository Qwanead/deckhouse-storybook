import{I as c,o as t,k as s,p as a,d as l,f as u,e as i}from"./vue.esm-bundler-c22c51b1.js";import{L as f,P as n,A as m}from"./vue-types.modern-24ec03a8.js";import{I as r}from"./IconBase-64cd1ae6.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const y=["disabled"],d=c({__name:"ButtonBase",props:{btnStyle:f(["default","accent"]).def("default"),iconPositionLeft:n().def(!1),iconName:m(),disabled:n().def(!1),uppercase:n().def(!0)},setup(e){return(o,_)=>(t(),s("button",{type:"button",class:a([`button button--${e.btnStyle}`,{"button--icon-left":e.iconPositionLeft,"button--disabled":e.disabled}]),disabled:e.disabled},[o.$slots.default?(t(),s("span",{key:0,class:a(["ty-btn-text","button__text",`button__text--${e.btnStyle}`,{"button__text--disabled":e.disabled,"button__text--uppercase":e.uppercase}])},[l(o.$slots,"default",{},void 0,!0)],2)):u("",!0),e.iconName?(t(),i(r,{key:1,class:a(["button__icon",`button__icon--${e.btnStyle}`,{"button__icon--disabled":e.disabled}]),name:e.iconName},null,8,["class","name"])):u("",!0)],10,y))}});const N=b(d,[["__scopeId","data-v-59a8dfc9"]]);d.__docgenInfo={exportName:"default",displayName:"ButtonBase",description:"",tags:{},props:[{name:"btnStyle",type:{name:'oneOf(["default", "accent"] as const).def("default")',func:!0}},{name:"iconPositionLeft",type:{name:"bool().def(false)",func:!0}},{name:"iconName",type:{name:"string<IconNameType>()",func:!0}},{name:"disabled",type:{name:"bool().def(false)",func:!0}},{name:"uppercase",type:{name:"bool().def(true)",func:!0}}],slots:[{name:"default"}],sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/shared/ui_kit/ButtonBase.vue"]};export{N as B};
//# sourceMappingURL=ButtonBase-8f35181a.js.map
