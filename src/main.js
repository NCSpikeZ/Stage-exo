import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

createApp(App).mount('#app')

import router from './router';

createApp.config.productionTip = false;

new createApp({
  render: (h) => h(App),
  router,
}).$mount('#app');
