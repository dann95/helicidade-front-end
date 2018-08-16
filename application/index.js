import Vue from 'vue';
import VueRouter from 'vue-router';

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

/**
 * Render App component
 */
const app = new Vue({
    el: '#app',
    router,
    template: '<router-view/>'
})