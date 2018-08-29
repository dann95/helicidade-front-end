<template>
    <div>
        <h1>POUSO #{{ id }}</h1>
        <hr>
        data: {{ ocurred_at }}
        <hr>
        <a :href="photourl(photo.imagem)" target="_blank" v-for="photo in photos">
            <img :src="photourl(photo.imagem)" width="300" height="300" style="display:block;">
        </a>
    </div>
</template>

<script>
    export default {
        name: "Landing-View",
        data() {
            return {
                id: null,
                photos: [],
                ocurred_at: null
            }
        },
        methods: {
            photourl(img) {
                return `http://qnet.ddns.com.br:8080/heliquality-api${img.slice(1)}`
            },
            fetchLanding(id) {
                return this.$sdk.landings.find(id)
            },
            redirectOrFillLanding(res) {
                if(! res.found) {
                    this.$router.push('/404')
                    return;
                }
                this.id = res.landing.id
                this.ocurred_at = `${res.landing.dt_registro} ${res.landing.hr_registro}`
                this.photos = res.landing.photos
            }
        },
        beforeRouteEnter(to, from, next) {

            next(vm => {
                vm.fetchLanding(to.params.id)
                    .then(vm.redirectOrFillLanding)
            })

        }
    }
</script>

<style scoped>

</style>