<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATA</th>
                    <th>FINALIZADO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="landing in landings">
                    <td>{{ landing.id }}</td>
                    <td> {{ `${landing.dt_registro} ${landing.hr_registro}` }}</td>
                    <td>Não</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Landings",
        data() {
            return {
                landings: [],
                pages: {
                    current: 1,
                    max: 1,
                    perPage: 15
                }
            }
        },
        methods: {
            fetchAll() {
                return this.$sdk.landings.all()
            },
            setLandings(res) {
                this.landings = res
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
                vm.fetchAll()
                    .then(vm.setLandings)
                // vm.fetchLandingsForCurrentPage()
                //     .then(vm.setItemsAndPagesInfo)
                // @todo CRIAR PAGINAÇÃO...
            })
        }
    }
</script>

<style scoped>

</style>