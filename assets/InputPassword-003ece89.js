import{I as l,a as m,o as f,e as i,x as c}from"./vue.esm-bundler-c22c51b1.js";import{A as a,P as t}from"./vue-types.modern-24ec03a8.js";import{I as y}from"./InputTextBase-963889aa.js";const I=l({__name:"InputPassword",props:{placeholder:a().def(""),modelValue:a().def(""),disabled:t().def(!1),error:a(),required:t().def(!1),label:a().def("")},emits:["update:modelValue"],setup(s,{emit:r}){const u=s,n=m("password"),p=o=>{r("update:modelValue",o)};return(o,e)=>(f(),i(y,c(u,{type:n.value,iconName:"show",onIconMousedown:e[0]||(e[0]=d=>n.value="text"),onIconMouseup:e[1]||(e[1]=d=>n.value="password"),"onUpdate:modelValue":p}),null,16,["type"]))}});I.__docgenInfo={exportName:"default",displayName:"InputPassword",description:"",tags:{},props:[{name:"placeholder",type:{name:'string().def("")',func:!0}},{name:"modelValue",type:{name:'string().def("")',func:!0}},{name:"disabled",type:{name:"bool().def(false)",func:!0}},{name:"error",type:{name:"string()",func:!0}},{name:"required",type:{name:"bool().def(false)",func:!0}},{name:"label",type:{name:'string().def("")',func:!0}}],events:[{name:"update:modelValue",type:{names:["TSTypeQuery"]}}],sourceFiles:["/Users/user/deckhouse-ui/images/frontend/src/shared/ui_kit/form/InputText/InputPassword.vue"]};export{I as _};
//# sourceMappingURL=InputPassword-003ece89.js.map