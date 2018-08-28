<template>
    <nav id="side-bar">
        <div id="side-bar-logo-place">
            <div id="logo-left-nav">
                <img src="/dist/img/logo.svg" id="logo">
            </div>
            <div id="logo-right-nav">
                <button class="fr">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
        </div>
        <ul id="side-bar-list">
            <li :class="classesForLink('home')">
                <router-link to="/">
                    <img class="side-bar-icon" src="/dist/img/home.svg" alt="home" height="23" width="23">Principal
                </router-link>
            </li>
            <li :class="classesForLink('account')">
                <router-link :to="{name: 'account'}">
                    <img class="side-bar-icon" src="/dist/img/usuario.svg" height="23" width="23" alt="">Conta
                </router-link>
            </li>

            <li :class="classesForLink('airplanes')">
                <router-link :to="{name: 'airplanes'}">
                    <img class="side-bar-icon" src="/dist/img/helicoptero.svg" height="23" width="23" alt="">Aeronaves
                </router-link>
            </li>
            <li :class="classesForLink('landings')">
                <router-link :to="{name: 'landings'}">
                    <img class="side-bar-icon" src="/dist/img/pouso.svg" height="23" width="23" alt="">Pousos
                </router-link>
            </li>
            <li :class="classesForLink('movements')">
                <router-link :to="{name: 'movements'}">
                    <img class="side-bar-icon" src="/dist/img/gasolina.svg" height="23" width="23" alt="">Movimentações
                </router-link>
            </li>
            <li :class="classesForLink('schedules')">
                <router-link :to="{name: 'schedules'}">
                    <img class="side-bar-icon" src="/dist/img/calendario.svg" height="23" width="23" alt="">Agendamentos
                </router-link>
            </li>
            <li :class="classesForLink('fuelling')">
                <router-link :to="{name: 'fuelling'}">
                    <img class="side-bar-icon" src="/dist/img/helice.svg" height="23" width="23" alt="">Abastecimentos
                </router-link>
            </li>
            <li :class="classesForLink('pilots')">
                <router-link :to="{name: 'pilots'}">
                    <img class="side-bar-icon" src="/dist/img/piloto_1.svg" height="23" width="23" alt="">Pilotos
                </router-link>
            </li>
            <li :class="classesForLink('settings')">
                <router-link :to="{name: 'settings'}">
                    <img class="side-bar-icon" src="/dist/img/configuracoes.svg" height="23" width="23" alt="">Configurações
                </router-link>
            </li>
            <li :class="classesForLink('dashboard')">
                <router-link :to="{name: 'dashboard'}">
                    <img class="side-bar-icon" src="/dist/img/helice.svg" height="23" width="23" alt="">Dashfull
                </router-link>
            </li>
            <li class="side-bar-item">
                <a href="#" @click="$auth.logout({redirect: '/login'})">
                    <img class="side-bar-icon" src="/dist/img/logout.svg" height="23" width="23" alt="">Sair
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "SideBar",
        methods: {
            classesForLink(name) {
                let acc = ['side-bar-item']

                if(name === this._route)
                    acc.push('active')

                return acc
            }
        },
        computed: {
            _route() {
                return this.$route.name || '404'
            }
        }
    }
</script>

<style scoped>

</style>