import{o as s,k as o,s as l,p as d}from"./vue.esm-bundler-c22c51b1.js";var p={name:"Skeleton",props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},computed:{containerClass(){return["p-skeleton p-component",{"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}]},containerStyle(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function h(n,i,r,t,e,a){return s(),o("div",{style:l(a.containerStyle),class:d(a.containerClass),"aria-hidden":"true"},null,6)}function c(n,i){i===void 0&&(i={});var r=i.insertAt;if(!(!n||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",r==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}}var u=`
.p-skeleton {
    position: relative;
    overflow: hidden;
}
.p-skeleton::after {
    content: '';
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
}
.p-skeleton.p-skeleton-circle {
    border-radius: 50%;
}
.p-skeleton-none::after {
    animation: none;
}
@keyframes p-skeleton-animation {
from {
        transform: translateX(-100%);
}
to {
        transform: translateX(100%);
}
}
`;c(u);p.render=h;export{p as s};
//# sourceMappingURL=skeleton.esm-7cb94a1a.js.map
