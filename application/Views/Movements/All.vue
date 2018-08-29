<template>
    <div>
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
                        <tr class="row100 body" v-for="movement in movements">
                            <td class="cell100 column1 tc">{{ movement.id_pre_ocorrencia }}</td>
                            <td class="cell100 column2 tc">{{ `${dt2br(movement.dt_registro)} ${movement.hr_registro}` }}</td>
                            <td class="cell100 column3 tc">{{ movement.id ? 'SIM' : 'NÃO' }}</td>
                            <td class="cell100 column3 tc">
                                <router-link :to="{ name: 'movements.view', params: { id: movement.id }}">
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

    import {dt2br} from '../../utils';

    export default {
        name: "Movements-All",
        data() {
            return {
                movements: []
            }
        },
        methods: {
            dt2br,
            fetchMovements() {
                return this.$sdk.movements.all()
            },
            setMovements(res) {
                this.movements = res.reverse()
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchMovements()
                    .then(vm.setMovements)
            })
        }
    }
</script>

<style scoped>

</style>