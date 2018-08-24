<template>
    <div id="wrapper" class="mobile-nav-open">
        <side-bar />
        <div id="content">
            <div id="top-content-bar">
                <div id="top-content-bar-left">
                    <search-input />
                </div>
                <div id="top-content-bar-right">
                    <user-options/>
                </div>
            </div>
            <div class="container" id="content-container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    import UserOptions from '../Components/UserOptions.vue';
    import SideBar from '../Components/SideBar.vue';
    import SearchInput from '../Components/SearchInput.vue';

    export default {
        name: "App",
        components: {
            UserOptions,
            SideBar,
            SearchInput
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>