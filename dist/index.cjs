"use strict";const r=require("vue"),n=r.ref(!1),o=r.ref([]),l=()=>{const c=r.inject("custom-secret-quote","secret"),s=t=>{o.value.push(t)},e=t=>{n.value=t},u=r.watch(o,(t,i)=>{if(t.join("")===c){e(!0);return}t.length>6&&o.value.shift()},{deep:!0});return r.watch(n,(t,i)=>{t&&(console.log("we are done"),Array.from(document.querySelectorAll("[data-v-secret]")).forEach(d=>{d.style.display="block"}),u())}),{secretEntered:n,setSecretEntered:e,addKeysEntered:s}},a=r.defineComponent({__name:"SecretDirective",setup(c){const s=l();return r.onMounted(()=>{document.addEventListener("keyup",e=>{s.addKeysEntered(e.key)})}),(e,u)=>null}}),_={mounted(c,s,e){e.el.dataset.vSecret=!0,e.el.style.display="none"}},v={install(c,s){c.provide("custom-secret-quote",s.secret||"secret"),c.directive("c-secret",_),c.component("SecretDirective",a)}};module.exports=v;
