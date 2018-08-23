<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="home-white-box">
                cima esquerda
            </div>
            <div class="home-white-box">
                baixo esquerda
            </div>
        </div>
        <div class="col-lg-6">
            <div class="home-white-box">
                cima direita
            </div>
            <div class="home-white-box">
                baixo esquerda
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home-white-box {
        height: 688px;
        border-radius: 3px;
        box-shadow: -0.1px 2px 2.9px 0.1px rgba(108, 108, 108, 0.53);
        background-color: #ffffff;
        border: solid 1px #dadada;
        padding:31px;
    }
    .home-white-box + .home-white-box {
        margin-top:23px;
    }
</style>