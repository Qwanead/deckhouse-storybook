import{I as V,a as l,w as _,R as p,c as I,o as x,e as T,x as C,G as b}from"./vue.esm-bundler-c22c51b1.js";import{A as o,P as f,E as g}from"./vue-types.modern-24ec03a8.js";import{I as k}from"./InputTextBase-963889aa.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const i=V({__name:"InputTextConfirm",props:{placeholder:o().def(""),modelValue:o().def(""),disabled:f().def(!1),error:o(),required:f().def(!1),label:o().def(""),updateValueKey:g()},emits:["update:modelValue","updateCurrentValue"],setup(c,{emit:d}){const e=c,a=l(e.modelValue);_(()=>e.updateValueKey,()=>a.value=e.modelValue),p(()=>a.value=e.modelValue);const v=u=>{a.value=u,d("updateCurrentValue",u)},t=l(!!(e.error||e.disabled||!a.value)),s=l(!1);p(()=>{t.value||(t.value=!!(e.error||e.disabled||!a.value))});const r=u=>{t.value=u,s.value=u,u||d("update:modelValue",a.value)},y=I(()=>{if(a.value)return t.value?"check":"edit"});return(u,n)=>(x(),T(k,C(e,{modelValue:a.value,iconName:b(y),viewMode:!t.value,focus:s.value,"onUpdate:modelValue":v,onIconClick:n[0]||(n[0]=m=>r(!t.value)),onFocus:n[1]||(n[1]=m=>r(!0)),onBlur:n[2]||(n[2]=m=>r(!1))}),null,16,["modelValue","iconName","viewMode","focus"]))}});const F=B(i,[["__scopeId","data-v-690814ed"]]);i.__docgenInfo={exportName:"default",displayName:"InputTextConfirm",description:"",tags:{},props:[{name:"placeholder",type:{name:'string().def("")',func:!0}},{name:"modelValue",type:{name:'string().def("")',func:!0}},{name:"disabled",type:{name:"bool().def(false)",func:!0}},{name:"error",type:{name:"string()",func:!0}},{name:"required",type:{name:"bool().def(false)",func:!0}},{name:"label",type:{name:'string().def("")',func:!0}},{name:"updateValueKey",type:{name:"number()",func:!0}}],events:[{name:"update:modelValue",type:{names:["TSTypeQuery"]}},{name:"updateCurrentValue",type:{names:["TSTypeQuery"]}}],sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/shared/ui_kit/form/InputText/InputTextConfirm.vue"]};export{F as I};
//# sourceMappingURL=InputTextConfirm-c0059b46.js.map