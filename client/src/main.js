import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap'
import App from './App'

import { createApp } from 'vue'
import router from "@/router";


createApp(App).use(router).mount('#app')
