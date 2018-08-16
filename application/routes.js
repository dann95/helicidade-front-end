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
        component: Home,
        meta: {
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
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Heliquality - login'
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
]

export default routes