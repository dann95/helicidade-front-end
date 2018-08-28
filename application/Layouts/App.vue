<template>
    <div id="wrapper" class="mobile-nav-open">
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
                width: window.innerWidth
            }
        },
        components: {
            SideBar,
            SearchInput
        },
        mounted() {
            window.addEventListener('resize', () => {
                this.width = window.innerWidth
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