(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.SecretDirective={},t.Vue))})(this,function(t,e){"use strict";const o=e.ref(!1),i=e.ref([]),l=()=>{const r=e.inject("custom-secret-quote","secret"),s=n=>{i.value.push(n)},c=n=>{o.value=n},d=e.watch(i,(n,_)=>{if(n.join("")===r){c(!0);return}n.length>6&&i.value.shift()},{deep:!0});return e.watch(o,(n,_)=>{n&&(console.log("we are done"),Array.from(document.querySelectorAll("[data-v-secret]")).forEach(m=>{m.style.display="block"}),d())}),{secretEntered:o,setSecretEntered:c,addKeysEntered:s}},u=e.defineComponent({__name:"SecretDirective",setup(r){const s=l();return e.onMounted(()=>{document.addEventListener("keyup",c=>{s.addKeysEntered(c.key)})}),(c,d)=>null}}),a={mounted(r,s,c){c.el.dataset.vSecret=!0,c.el.style.display="none"}},f={install(r,s){r.provide("custom-secret-quote",s.secret||"secret"),r.directive("c-secret",a),r.component("SecretDirective",u)}};t.SecretDirectiveComponent=u,t.default=f,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
