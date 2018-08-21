import Home from './Views/Home.vue';
import Account from './Views/Account.vue';
import Pilots from './Views/Pilots.vue';
import Movements from './Views/Movements.vue';
import Login from './Views/Login.vue';
import Schedules from './Views/Schedules.vue';

import App from './Layouts/App.vue';
import LoginTPL from './Layouts/Login.vue';

const routes = [
    /**
     * APP Template
     */
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {
                    auth: true,
                    title: 'Heliquality - Home'
                }
            },
            {
                path: '/account',
                name: 'account',
                component: Account,
                meta: {
                    title: 'Heliquality - minha conta'
                }
            },
            {
                path: '/pilots',
                name: 'pilots',
                component: Pilots,
                meta: {
                    title: 'Heliquality - pilotos'
                }
            },
            {
                path: '/movements',
                name: 'movements',
                component: Movements,
                meta: {
                    title: 'Heliquality - movimentos'
                }
            },
            {
                path: '/schedules',
                name: 'schedules',
                component: Schedules,
                meta: {
                    title: 'Heliquality - agendamentos'
                }
            }
        ],
    },

    /**
     * Auth Template
     */
    {
        path: '/',
        component: LoginTPL,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: {
                    title: 'Heliquality - login'
                }
            },
        ],
    },
]

export default routes