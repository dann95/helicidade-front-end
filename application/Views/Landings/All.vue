<template>
    <div>
        escolha uma data: <date-picker :date="date" @update="updateDate"/>
        <div>
            <div class="table100 ver1 m-b-110">
                <div class="table100-head">
                    <table>
                        <thead>
                        <tr class="row100 head">
                            <th class="cell100 column1">ID</th>
                            <th class="cell100 column2">DATA</th>
                            <th class="cell100 column3">FINALIZADO</th>
                            <th class="cell100 column3">AÇÕES</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div class="table100-body js-pscroll">
                    <table>
                        <tbody>
                            <tr class="row100 body" v-for="landing in landings">
                                <td class="cell100 column1 tc">{{ landing.id }}</td>
                                <td class="cell100 column2 tc">{{ `${dt2br(landing.dt_registro)} ${landing.hr_registro}` }}</td>
                                <td class="cell100 column3 tc">NÃO</td>
                                <td class="cell100 column3 tc">
                                    <router-link :to="{ name: 'landings.view', params: { id: landing.id }}">
                                        <button class="hlq-btn hlq-btn-yellow">
                                            detalhes
                                        </button>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import {dt2br} from "../../utils";
    import DatePicker from '../../Components/Inputs/DatePicker.vue';

    export default {
        components: {
            DatePicker
        },
        name: "Landings",
        data() {
            return {
                landings: [],
                date: moment().format("YYYY-MM-DD")
            }
        },
        methods: {
            updateDate(val) {

                this.date = val

                this.fetchAllForDate()
                    .then(this.setLandings)
            },
            dt2br,
            fetchAll() {
                return this.$sdk.landings.all()
            },
            fetchAllForDate() {
                return this.$sdk.landings.findInPeriod(this.date, this.date)
            },
            setLandings(res) {
                this.landings = res.reverse()
            },
            fetchLandingsForCurrentPage() {
                return this.$sdk.landings.paginate()
            },
            setItemsAndPagesInfo(res) {
                this.landings = res
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchAllForDate()
                    .then(vm.setLandings)
            })
        }
    }
</script>

<style scoped>

</style>