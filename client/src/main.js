import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from './App'
import {createApp} from 'vue'
import router from "@/router";


createApp(App).use(router).mount('#app')
