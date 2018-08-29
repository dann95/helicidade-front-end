import Home from './Views/Home.vue';
import Account from './Views/Account.vue';
import Pilots from './Views/Pilots.vue';
import Movements from './Views/Movements.vue';
import Login from './Views/Login.vue';
import Schedules from './Views/Schedules.vue';
import Airplanes from './Views/Airplanes.vue';

import Landings from './Views/Landings/All.vue';
import Landing from './Views/Landings/View.vue';


import Fuelling from './Views/Fuelling.vue';
import Settings from './Views/Settings.vue';
import Dashboard from './Views/Dashboard.vue';

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
                    auth: true,
                    title: 'Heliquality - minha conta'
                }
            },
            {
                path: '/pilots',
                name: 'pilots',
                component: Pilots,
                meta: {
                    auth: true,
                    title: 'Heliquality - pilotos'
                }
            },
            {
                path: '/movements',
                name: 'movements',
                component: Movements,
                meta: {
                    auth: true,
                    title: 'Heliquality - movimentos'
                }
            },
            {
                path: '/schedules',
                name: 'schedules',
                component: Schedules,
                meta: {
                    auth: true,
                    title: 'Heliquality - agendamentos'
                }
            },
            {
                path: '/airplanes',
                name: 'airplanes',
                component: Airplanes,
                meta: {
                    auth: true,
                    title: 'Heliquality - aeronaves'
                }
            },
            {
                path: '/landings',
                name: 'landings',
                component: Landings,
                meta: {
                    auth: true,
                    title: 'Heliquality - pousos'
                }
            },
            {
                path: '/landings/:id',
                name: 'landings.view',
                component: Landing,
                meta: {
                    auth: true
                }
            },
            {
                path: '/fuelling',
                name: 'fuelling',
                component: Fuelling,
                meta: {
                    auth: true,
                    title: 'Heliquality - abastecimentos'
                }
            },
            {
                path: '/settings',
                name: 'settings',
                component: Settings,
                meta: {
                    auth: true,
                    title: 'Heliquality - configurações'
                }
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    auth: true,
                    title: 'Heliquality - dashboard'
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