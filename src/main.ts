import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import secretDirectivePlugin from './plugins/secret-directive/secret-directive'

const app = createApp(App)
// app.directive('secret-directive', {
//     mounted(el, binding, vnode, prevVnode) {
//         console.log("")
//     },
// })

app.use(secretDirectivePlugin)
app.mount('#app')
