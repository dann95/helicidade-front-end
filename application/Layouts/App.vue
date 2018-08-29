<template>
    <div id="wrapper" :class="{'mobile-nav-open': mobileNav}">
        <side-bar />
        <div id="content">
            <div :class="_containerClass" id="content-container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    import SideBar from '../Components/SideBar.vue';
    import SearchInput from '../Components/SearchInput.vue';

    export default {
        name: "App",
        data() {
            return {
                width: window.innerWidth,
                mobileNav: false
            }
        },
        components: {
            SideBar,
            SearchInput
        },
        mounted() {
            let self = this
            window.addEventListener('resize', () => {
                this.width = window.innerWidth
            })
            this.$bus.on('toggle-mobile-nav', () => {
                self.mobileNav = ! self.mobileNav
            })
        },
        computed: {
            _containerClass() {
                return (this.width <= 992) ? 'container-fluid' : 'container'
            }
        }
    }
</script>

<style scoped>

</style>