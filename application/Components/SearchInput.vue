<template>
    <div id="search-input-container">
        <input type="text" v-model="search">
        <i class="fa fa-search"></i>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        data() {
            return {
                search: ''
            }
        }
    }
</script>

<style scoped>
    #search-input-container {
        position:relative;
        margin-top:30px;
    }
    #search-input-container > i {
        position:absolute;
        left:0;
        top:0;
    }
    #search-input-container > input[type="text"] {
        padding-left:30px;
    }
</style>