import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import routes from './routes';
import SDK from './sdk/plugin';
import meta from './metainfo';
import uid from './uid';
import bus from './bus';

/**
 * API endpoint replaced with .env var by Gulp
 * @type {string}
 */
axios.defaults.baseURL = '#_api_#'


/**
 * Vue Router
 */
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const _sdk = SDK(axios)

/**
 * SDK
 */
Vue.use(_sdk)


/**
 * uniqId
 */
Vue.use(uid)

/**
 * Event Bus
 */
Vue.use(bus)

const router = new VueRouter({routes})
meta(router)

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {
    auth: require('./auth-token'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    refreshData: { enabled: false}
})

/**
 * Render App component
 */
const app = new Vue({
    el: '#app',
    router,
    template: '<router-view/>'
})