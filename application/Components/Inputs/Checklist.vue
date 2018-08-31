<template>
    <div :id="_id" class="hlq-checklist-item">

        <div class="fl">
            <i class="fa fa-check-circle" :class="{
                'hlq-checklist-item-grey': ! green,
                'hlq-checklist-item-green': green
            }"></i>
        </div>

        <div class="fr">
            <i class="fa fa-times-circle" :class="{
                'hlq-checklist-item-grey': ! red,
                'hlq-checklist-item-red': red
            }"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Checklist",
        props:["disabled", "state"],
        computed: {
            _id() {
                return `hlq-checklist-${this.uniqId}`
            },
            green() {
                return !! this.state
            },
            red() {
                return ! (!! this.state)
            }
        }
    }
</script>

<style scoped>

    .hlq-checklist-item {
        display:inline-block;
        border:1px solid purple;
        width:82px;
    }

    .hlq-checklist-item > div > i {
        font-size:1.5em;
    }

    .hlq-checklist-item-grey {
        color:#868589 !important;
    }

    .hlq-checklist-item-green {
        color:#529646 !important;
    }

    .hlq-checklist-item-red {
        color:#C7001E !important;
    }
</style>