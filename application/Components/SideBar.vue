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
            <li :class="classesForLink('movements')">
                <router-link :to="{name: 'movements'}">
                    <img class="side-bar-icon" src="/dist/img/helice.svg" height="23" width="23" alt="">Movimentação
                </router-link>
            </li>
            <li :class="classesForLink('schedules')">
                <router-link :to="{name: 'schedules'}">
                    <img class="side-bar-icon" src="/dist/img/calendario.svg" height="23" width="23" alt="">Agendamentos
                </router-link>
            </li>
            <li :class="classesForLink('pilots')">
                <router-link :to="{name: 'pilots'}">
                    <img class="side-bar-icon" src="/dist/img/piloto_1.svg" height="23" width="23" alt="">Piloto
                </router-link>
            </li>
            <li class="side-bar-item">
                <a href="#">
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