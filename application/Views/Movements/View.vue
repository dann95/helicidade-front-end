<template>
    <div class="row" v-if="movement">
        <div class="col-lg-4">
            <div style="background-color:white; height: 170px;">
                <h2>
                    Aeronave sem movimentação
                </h2>
                <p>
                    Deseja iniciar o checklist?
                </p>
                <button>sim</button>
                <button>não</button>
            </div>
            <div style="height: 720px; background-color:#fff;">
                <h2>
                    CHECKLIST 360
                </h2>
                <ul>
                    <li>
                        Rotor e Pás <checklist :state="false" />
                    </li>
                    <li>
                        Rotor de Cauda
                    </li>
                    <li>
                        Célula
                    </li>
                </ul>
                <p>
                    Fale sobre o problema encontrado
                </p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>
                    enviar
                </button>
            </div>
        </div>
        <div class="col-lg-8">
            <div style="background-color:white; height: 493px;">

            </div>
            <div style="height: 399px;">

            </div>
        </div>
    </div>
</template>

<script>
    import Checklist from '../../Components/Inputs/Checklist.vue';

    export default {
        name: "Movements",
        components: {
            Checklist
        },
        data() {
            return {
                movement: false
            }
        },
        methods: {
            fetchMovement() {
                return this.$sdk.movements.find(this.$route.params['id'])
            },
            setMovementOrRedirect(res) {

                if(! res.found) {
                    this.$router.push('/404')
                    return;
                }

                this.movement = res.movement
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchMovement()
                    .then(vm.setMovementOrRedirect)
            })
        }
    }
</script>

<style scoped>

</style>