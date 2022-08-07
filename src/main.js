import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/styles.css'
import '../public/js/scripts.js'



createApp(App).use(router).mount('#app')
