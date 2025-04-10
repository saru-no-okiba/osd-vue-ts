import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events";
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'

import "./assets/scss/style.scss";


const app = createApp(App)
app.use(Vue3TouchEvents);
app.use(VueLazyLoad, {
  // options...
})
app.mount('#app')
