<template>
    <div id="login-container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    #login-container {

        height: 100vh;
        width: 100vw;

        max-width: 100vw;
        max-height: 100vh;

        background: rgb(228,164,5) !important;
        background: linear-gradient(90deg, rgba(228,164,5,1) 24%, rgba(239,193,3,1) 56%) !important;
    }
</style>