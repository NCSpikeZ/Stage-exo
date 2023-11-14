import { createApp } from 'vue'
import './assets/css/tailwind.css'
import router from "./router";
import App from "./App.vue";
console.log(router);


const app = createApp(App)

app.use(router)

app.mount('#app')