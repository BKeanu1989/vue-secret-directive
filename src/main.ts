import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import secretDirectivePlugin from './plugins/secret-directive/SecretDirective'

const app = createApp(App)

app.use(secretDirectivePlugin, {
    secret: 'mehtest'
})
app.mount('#app')
