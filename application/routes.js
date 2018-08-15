import Home from './Views/Home.vue';
import Account from './Views/Account.vue';
import Pilots from './Views/Pilots.vue';
import Movements from './Views/Movements.vue';
import Login from './Views/Login.vue';
import Schedules from './Views/Schedules.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/pilots',
        name: 'pilots',
        component: Pilots
    },
    {
        path: '/movements',
        name: 'movements',
        component: Movements
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/schedules',
        name: 'schedules',
        component: Schedules
    }
]

export default routes