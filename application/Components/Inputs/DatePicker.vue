<template>
    <div>
        <input type="text" :id="_id" v-model="currentDate">
    </div>
</template>

<script>

    import flatpickr from "flatpickr";
    flatpickr.l10n = require('flatpickr/dist/l10n/pt.js');

    export default {
        name: "DatePicker",
        data() {
            return {
                currentDate: this.date || moment().format('YYYY-MM-DD')
            }
        },
        props:['date'],
        computed: {
            _id() {
                return `hlq-datepicker-${this.uniqId}`
            }
        },
        mounted() {
            let el = document.getElementById(this._id)
            flatpickr(el, {
                locale: 'pt',
                dateFormat: "Y-m-d",
                altFormat: "d/m/Y",
                altInput: true
            })
        },
        watch: {
            currentDate(_new) {
                this.$emit('update', _new)
            }
        }
    }
</script>

<style scoped>

</style>