import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

import { createApp } from 'vue'
import router from "@/router";


createApp(App).use(router).mount('#app')
