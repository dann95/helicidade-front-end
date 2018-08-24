<template>
    <div :id="_id" style="height:400px; width:100%;"></div>
</template>

<script>
    export default {
        name: "SingleLineChart",
        props: ["channel", "color", "xAxis"],
        data() {
            return {
                DOM: null,
                option: {
                    xAxis: {
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        position: 'right'
                    },
                    series: [{
                        data: [],
                        type: 'line',
                    }]
                }
            }
        },
        mounted() {
            let self = this
            self.DOM = echarts.init(document.getElementById(this._id))
            self.option.xAxis.data = self.xAxis || []
            self.option.series[0].color = self.color || '#efc203'
            self.DOM.setOption(this.option)
            self.$bus.on(this.channel || self._id, (payload) => {
                self.opacity.series[0].data = payload
                self.refresh()
            })
        },
        computed: {
            _id() {
                return `hlq-singlelinechart-${this.uniqId}`
            }
        },
        methods: {
            refresh() {
                this.DOM.setOption(this.option)
            }
        },
        watch: {
            color(_new) {
                this.option.series[0].color = _new
                this.refresh()
            },
            xAxis(_new) {
                this.option.xAxis.data = _new
                this.refresh()
            }
        }
    }
</script>

<style scoped>

</style>