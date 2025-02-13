import { createApp } from 'vue'
import './style.css'
import router from './router/router'
import App from './App.vue'
import 'locomotive-scroll/locomotive-scroll.css'
import { createPotiah } from 'potiah'

createApp(App)
.use(router)
.use(createPotiah())
.mount('#app')
