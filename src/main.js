import { createApp } from 'vue';
import Router from './router';
import App from './App.vue';

const vueApp = createApp(App);
vueApp.use(Router);
vueApp.mount('#app');
