(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["qiankun-vue-app"]=t():e["qiankun-vue-app"]=t()})(self,(function(){return function(){var e={962:function(e,t,n){"use strict";n.r(t),n.d(t,{bootstrap:function(){return W},mount:function(){return x},unmount:function(){return O}});n(8131);var o=n(9242),r=n(2593),u=(n(4415),n(3396));const l={class:"app"};function i(e,t,n,o,r,i){const a=(0,u.up)("MyEditor");return(0,u.wg)(),(0,u.iD)("div",l,[(0,u.Wm)(a,{modelValue:e.state,"onUpdate:modelValue":t[0]||(t[0]=t=>e.state=t)},null,8,["modelValue"])])}var a=n(4870),c=(0,u.aZ)({props:{block:{type:Object,required:!0}},setup(e){const t=(0,u.Fl)((()=>({top:`${e.block.top}px`,left:`${e.block.left}px`,zIndex:e.block.zIndex}))),n=(0,u.f3)("config");return()=>{const o=n.componentMap[e.block.key],r=o.render();return(0,u.Wm)("div",{class:"editor-block",style:t.value},[r])}}}),p=(0,u.aZ)({props:{modelValue:{type:Object}},setup(e){const t=(0,u.Fl)({get(){return e.modelValue},set(){}});console.log(t.value);const n=(0,u.Fl)((()=>({width:t.value.container.width+"px",height:t.value.container.height+"px"}))),o=(0,u.f3)("config"),r=(0,a.iH)(null),l=e=>{e.dataTransfer.droEffect="move"},i=e=>{},p=e=>{},s=e=>{},d=(e,t)=>{r.value.addEventListener("dragenter",l),r.value.addEventListener("dragover",i),r.value.addEventListener("dragleave",p),r.value.addEventListener("drop",s)};return()=>(0,u.Wm)("div",{class:"editor"},[(0,u.Wm)("div",{class:"editor-left"},[o.componentList.map((e=>(0,u.Wm)("div",{class:"editor-left-item",draggable:!0,onDragstart:t=>d(t,e)},[(0,u.Wm)("span",null,[e.label]),e.preview()])))]),(0,u.Wm)("div",{class:"editor-center"},[(0,u.Wm)("div",{class:"editor-top"},[(0,u.Uk)("低代码平台")]),(0,u.Wm)("div",{class:"editor-container"},[(0,u.Wm)("div",{class:"editor-container-canvas"},[(0,u.Wm)("div",{class:"editor-container-canvas_content",style:n.value,ref:r},[t.value.blocks.map((e=>(0,u.Wm)(c,{block:e},null)))])])])]),(0,u.Wm)("div",{class:"editor-right"},[(0,u.Uk)("属性控制栏目")])])}});function s(){const e=[],t={};return{componentList:e,componentMap:t,register:n=>{e.push(n),t[n.key]=n}}}const d=s();d.register({label:"文本",preview:()=>"预览文本",render:()=>"渲染文本",key:"text"}),d.register({label:"按钮",preview:()=>(0,u.Wm)((0,u.up)("el-button"),null,{default:()=>[(0,u.Uk)("预览按钮")]}),render:()=>(0,u.Wm)((0,u.up)("el-button"),null,{default:()=>[(0,u.Uk)("渲染按钮")]}),key:"button"}),d.register({label:"输入框",preview:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("预览输入框")]}),render:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("渲染输入框")]}),key:"input"}),d.register({label:"输入框",preview:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("预览输入框")]}),render:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("渲染输入框")]}),key:"input"}),d.register({label:"输入框",preview:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("预览输入框")]}),render:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("渲染输入框")]}),key:"input"}),d.register({label:"输入框",preview:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("预览输入框")]}),render:()=>(0,u.Wm)((0,u.up)("el-input"),null,{default:()=>[(0,u.Uk)("渲染输入框")]}),key:"input"});var f=(0,u.aZ)({name:"App",components:{MyEditor:p},setup(){const e=n(8451),t=(0,a.iH)(e);return(0,u.JJ)("config",d),{state:t}}}),v=n(89);const m=(0,v.Z)(f,[["render",i],["__scopeId","data-v-12b36b1d"]]);var b=m,g=n(678);const k=[],y=(0,g.p7)({history:(0,g.PO)(window.__POWERED_BY_QIANKUN__?"/vue3":"/"),routes:k});var _=y;let h=null;function w(e={}){const{container:t}=e;h=(0,o.ri)(b),h.use(_),h.use(r.Z),h.mount(t?t.querySelector("#app"):"#app")}async function W(){console.log("[vue] vue app bootstraped")}async function x(e){console.log("[vue] props from main framework",e),w(e),h.config.globalProperties.$onGlobalStateChange=e.onGlobalStateChange,h.config.globalProperties.$setGlobalState=e.setGlobalState}async function O(){h.unmount(),h._container.innerHTML="",h=null}window.__POWERED_BY_QIANKUN__||w()},8131:function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},8451:function(e){"use strict";e.exports=JSON.parse('{"container":{"width":550,"height":1550},"blocks":[{"top":100,"left":100,"zIndex":1,"key":"text"},{"top":200,"left":200,"zIndex":1,"key":"button"},{"top":300,"left":300,"zIndex":1,"key":"input"}]}')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var l=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],u=e[p][2];for(var i=!0,a=0;a<o.length;a++)(!1&u||l>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(i=!1,u<l&&(l=u));if(i){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var p=e.length;p>0&&e[p-1][2]>u;p--)e[p]=e[p-1];e[p]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,l=o[0],i=o[1],a=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var p=a(n)}for(t&&t(o);c<l.length;c++)u=l[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(p)},o=self["webpackChunkqiankun_vue_"]=self["webpackChunkqiankun_vue_"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(962)}));return o=n.O(o),o}()}));