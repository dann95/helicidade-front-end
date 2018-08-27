<template>
    <div class="hlqpbm" :style="_mainStyle">
        <span class="" :style="_childStyle">

        </span>
    </div>
</template>
<script>
    export default {
        name: "progress-bar",
        props:["color", "percent", "bgcolor"],
        computed: {
            _mainStyle() {
                return {
                    backgroundColor: (this.bgcolor || '#dcdcdc')
                }
            },
            _childStyle() {
                return {
                    backgroundColor: (this.color || '#e3b806'),
                    width: (this.percent < 100) ? this.percent+'%' : 0+'%'
                }
            }
        }
    }
</script>
<style scoped>

    .hlqpbm {
        height:27px;
        position: relative;
        background: #555;
        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
        margin:10px 0 10px 0;
    }

    .hlqpbm > span {

        display: block;
        height: 100%;

        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        border-radius: 25px;


        box-shadow:
                inset 0 2px 9px  rgba(255,255,255,0.3),
                inset 0 -2px 6px rgba(0,0,0,0.4);
        position: relative;
        overflow: hidden;
    }
</style>