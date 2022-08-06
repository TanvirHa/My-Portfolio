import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/styles.css'
import '../public/js/scripts.js'
import 'font-awesome/css/font-awesome.min.css'


createApp(App).use(router).mount('#app')
