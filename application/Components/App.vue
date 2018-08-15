<template>
    <div id="wrapper" class="mobile-nav-open">
        <side-bar />
        <div id="content">
            <div id="top-content-bar">
                <div id="top-content-bar-left">
                    form de search
                </div>
                <div id="top-content-bar-right">
                    <user-options/>
                </div>
            </div>
            <div class="container" id="content-container" style="border:1px solid green;">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import UserOptions from './UserOptions.vue';
    import SideBar from './SideBar.vue';

    export default {
        name: "App",
        components: {
            UserOptions,
            SideBar
        }
    }
</script>

<style scoped>

</style>