import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import { initTheme } from '@/composables/useTheme'
import { registerReveal } from '@/directives/reveal.js'

initTheme()

const app = createApp(App)
app.use(router)
registerReveal(app)
app.mount('#app')
