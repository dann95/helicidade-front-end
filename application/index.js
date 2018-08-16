import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './Components/App.vue';
import routes from './routes';
import SDK from './sdk/plugin';
import meta from './metainfo';

/**
 * SDK
 */
Vue.use(SDK)

/**
 * Vue Router
 */
Vue.use(VueRouter)

const router = new VueRouter({routes})
meta(router)

Vue.router = router

App.router = Vue.router

/**
 * Render App component
 */
new Vue(App).$mount('#app')