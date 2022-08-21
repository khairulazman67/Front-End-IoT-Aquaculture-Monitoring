import {
    createApp
} from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router';
import './assets/tailwind.css'
import store from './store';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
    