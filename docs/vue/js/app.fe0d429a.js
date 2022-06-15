(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["qiankun-vue-app"]=t():e["qiankun-vue-app"]=t()})(self,(function(){return function(){var e={2358:function(e,t,n){"use strict";n.r(t),n.d(t,{bootstrap:function(){return P},mount:function(){return j},unmount:function(){return I}});n(8131);var o=n(9242),r=n(9444),l=(n(4415),n(3396));const u={class:"app"};function a(e,t,n,o,r,a){const s=(0,l.up)("MyEditor");return(0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(s,{modelValue:e.state,"onUpdate:modelValue":t[0]||(t[0]=t=>e.state=t)},null,8,["modelValue"])])}var s=n(4870),i=n(2748),c=(0,l.aZ)({props:["block"],emits:["update: block"],setup(e,t){const n=(0,l.Fl)({get:()=>e.block,set:e=>{t.emit("update: block",e)}}),o=(0,l.Fl)((()=>({top:`${n.value.top}px`,left:`${n.value.left}px`,zIndex:n.value.zIndex}))),r=(0,l.f3)("config"),u=(0,s.iH)(null);return(0,l.bv)((()=>{const{offsetWidth:e,offsetHeight:t}=u.value;n.value.alginCenter&&(n.value.top=n.value.top-t/2,n.value.left=n.value.left-e/2,n.value.alginCenter=!1),n.value.width=e,n.value.height=t})),()=>{const e=r.componentMap[n.value.key],t=e.render();return(0,l.Wm)("div",{class:"editor-block",style:o.value,ref:u},[t])}}}),f=n(2177),p=n.n(f);function d(e,t){let n=null;const o=e=>{e.dataTransfer.dropEffect="move"},r=e=>{e.preventDefault()},l=e=>{e.dataTransfer.dropEffect="none"},u=e=>{const o=t.value.blocks;t.value={...t.value,blocks:[...o,{top:e.offsetY,left:e.offsetX,zIndex:1,key:n.key,alginCenter:!0}]},n=null},a=(t,a)=>{e.value.addEventListener("dragenter",o),e.value.addEventListener("dragover",r),e.value.addEventListener("dragleave",l),e.value.addEventListener("drop",u),n=a},s=()=>{e.value.removeEventListener("dragenter",o),e.value.removeEventListener("dragover",r),e.value.removeEventListener("dragleave",l),e.value.removeEventListener("drop",u)};return{dragstart:a,dragend:s}}function v(e,t){const n=(0,s.iH)(-1),o=(0,l.Fl)((()=>e.value.blocks[n.value])),r=(0,l.Fl)((()=>{const t=[],n=[];return e.value.blocks.forEach((e=>(e.focus?t:n).push(e))),{focus:t,unfocused:n}})),u=()=>{e.value.blocks.forEach((e=>e.focus=!1)),n.value=-1},a=(e,o,l)=>{e.preventDefault(),e.stopPropagation(),e.shiftKey?r.value.focus.length<=1?o.focus=!0:o.focus=!o.focus:o.focus||(u(),o.focus=!0),n.value=l,t(e)},i=()=>{u()};return{blockMousedown:a,containerMousedown:i,focusData:r,lastSelectBlock:o}}function m(e,t,n){let o={startX:0,startY:0},r=(0,s.qj)({x:null,y:null});const l=t=>{let{pageX:n,pageY:l}=t,u=n-o.startX+o.startLeft,a=l-o.startY+o.startTop,s=null,i=null;for(let e=0;e<o.lines.y.length;e++){const{top:t,showTop:n}=o.lines.y[e];if(Math.abs(t-a)<5){s=n,l=o.startY-o.startTop+t;break}}for(let e=0;e<o.lines.x.length;e++){const{left:t,showLeft:r}=o.lines.x[e];if(Math.abs(t-u)<5){i=r,n=o.startX-o.startLeft+t;break}}r.x=i,r.y=s;let c=n-o.startX,f=l-o.startY;e.value.focus.forEach(((e,t)=>{e.top=o.startPos[t].top+f,e.left=o.startPos[t].left+c}))},u=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",u),r.x=null,r.y=null},a=r=>{console.log(t);const{width:a,height:s}=t.value;o={startX:r.pageX,startY:r.pageY,startLeft:t.value.left,startTop:t.value.top,startPos:e.value.focus.map((({top:e,left:t})=>({top:e,left:t}))),lines:(()=>{const{unfocused:t}=e.value;let o={x:[],y:[]};return[...t,{top:0,left:0,width:n.value.container.width,height:n.value.container.height}].forEach((e=>{const{top:t,left:n,width:r,height:l}=e;o.y.push({showTop:t,top:t}),o.y.push({showTop:t,top:t-s}),o.y.push({showTop:t+l/2,top:t+l/2-s/2}),o.y.push({showTop:t+l,top:t+l}),o.y.push({showTop:t+l,top:t+l-s}),o.x.push({showLeft:n,left:n}),o.x.push({showLeft:n+r,left:n+r}),o.x.push({showLeft:n+r/2,left:n+r/2-a/2}),o.x.push({showLeft:n+r,left:n+r-a}),o.x.push({showLeft:n,left:n-a})})),o})()},document.addEventListener("mousemove",l),document.addEventListener("mouseup",u)};return{mousedown:a,markLine:r}}function h(){const e={current:-1,queue:[],commands:{},commandArray:[]},t=t=>{e.commandArray.push(t),e.commands[t.name]=()=>{const{redo:e}=t.execute();e()}};return t({name:"redo",keyboard:"ctrl+y",execute(){return{redo(){console.log(123)}}}}),t({name:"undo",keyboard:"ctrl+z",execute(){return{redo(){console.log(2222)}}}}),e}var b=(0,l.aZ)({props:{modelValue:{type:Object}},emits:["update:modelValue"],setup(e,t){const n=(0,l.Fl)({get(){return e.modelValue},set(e){t.emit("update:modelValue",p()(e))}}),o=(0,l.Fl)((()=>({width:n.value.container.width+"px",height:n.value.container.height+"px"}))),r=(0,l.f3)("config"),u=(0,s.iH)(null),{dragstart:a,dragend:f}=d(u,n),{blockMousedown:b,containerMousedown:g,focusData:y,lastSelectBlock:k}=v(n,(e=>{w(e)})),{mousedown:w,markLine:x}=m(y,k,n),{commands:_}=h(),E=[{label:"撤销",icon:(0,l.Wm)(i.eJh,null,null),handler:()=>_.undo()},{label:"重做",icon:(0,l.Wm)(i.Ufu,null,null),handler:()=>_.redo()}];return()=>(0,l.Wm)("div",{class:"editor"},[(0,l.Wm)("div",{class:"editor-left"},[r.componentList.map((e=>(0,l.Wm)("div",{class:"editor-left-item",draggable:!0,onDragstart:t=>a(t,e),onDragend:f},[(0,l.Wm)("span",null,[e.label]),e.preview()])))]),(0,l.Wm)("div",{class:"editor-center"},[(0,l.Wm)("div",{class:"editor-top"},[E.map(((e,t)=>(0,l.Wm)((0,l.up)("el-button"),{type:"primary",icon:e.icon,key:t,onClick:e.handler},{default:()=>[(0,l.Wm)("span",null,[e.label])]})))]),(0,l.Wm)("div",{class:"editor-container"},[(0,l.Wm)("div",{class:"editor-container-canvas"},[(0,l.Wm)("div",{class:"editor-container-canvas_content",style:o.value,ref:u,onMousedown:g},[n.value.blocks.map(((e,t)=>(0,l.Wm)(c,{class:e.focus?"editor-block-focus":"",block:e,"onUpdate:block":t=>e=t,onMousedown:n=>b(n,e,t)},null))),null!==x.x&&(0,l.Wm)("div",{class:"line-x",style:{left:x.x+"px"}},null),null!==x.y&&(0,l.Wm)("div",{class:"line-y",style:{top:x.y+"px"}},null)])])])]),(0,l.Wm)("div",{class:"editor-right"},[(0,l.Uk)("属性控制栏目")])])}});function g(){const e=[],t={};return{componentList:e,componentMap:t,register:n=>{e.push(n),t[n.key]=n}}}const y=g();y.register({label:"文本",preview:()=>"预览文本",render:()=>"渲染文本",key:"text"}),y.register({label:"按钮",preview:()=>(0,l.Wm)((0,l.up)("el-button"),null,{default:()=>[(0,l.Uk)("预览按钮")]}),render:()=>(0,l.Wm)((0,l.up)("el-button"),null,{default:()=>[(0,l.Uk)("渲染按钮")]}),key:"button"}),y.register({label:"输入框",preview:()=>(0,l.Wm)((0,l.up)("el-input"),null,{default:()=>[(0,l.Uk)("预览输入框")]}),render:()=>(0,l.Wm)((0,l.up)("el-input"),null,{default:()=>[(0,l.Uk)("渲染输入框")]}),key:"input"});var k=(0,l.aZ)({name:"App",components:{MyEditor:b},setup(){const e=n(8451),t=(0,s.iH)(e);return(0,l.JJ)("config",y),{state:t}}}),w=n(89);const x=(0,w.Z)(k,[["render",a],["__scopeId","data-v-12b36b1d"]]);var _=x,E=n(678);const L=[],W=(0,E.p7)({history:(0,E.PO)(window.__POWERED_BY_QIANKUN__?"/vue3":"/"),routes:L});var O=W;let T=null;function M(e={}){const{container:t}=e;T=(0,o.ri)(_),T.use(O),T.use(r.Z),T.mount(t?t.querySelector("#app"):"#app")}async function P(){console.log("[vue] vue app bootstraped")}async function j(e){console.log("[vue] props from main framework",e),M(e),T.config.globalProperties.$onGlobalStateChange=e.onGlobalStateChange,T.config.globalProperties.$setGlobalState=e.setGlobalState}async function I(){T.unmount(),T._container.innerHTML="",T=null}window.__POWERED_BY_QIANKUN__||M()},8131:function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},8451:function(e){"use strict";e.exports=JSON.parse('{"container":{"width":550,"height":1550},"blocks":[{"top":100,"left":100,"zIndex":1,"key":"text"},{"top":200,"left":200,"zIndex":1,"key":"button"},{"top":300,"left":300,"zIndex":1,"key":"input"}]}')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,l){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],l=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||u>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<u&&(u=l));if(a){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,u=o[0],a=o[1],s=o[2],i=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);i<u.length;i++)l=u[i],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunkqiankun_vue_"]=self["webpackChunkqiankun_vue_"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2358)}));return o=n.O(o),o}()}));