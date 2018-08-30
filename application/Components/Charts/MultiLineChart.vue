<template>
    <div :id="_id" style="height:400px; width:100%;"></div>
</template>

<script>

    const formatSerie = s => {
        return {
            data: s.values,
            color: s.color,
            type: 'line',
            lineStyle: {
                type: s.type || 'solid'
            },
            name: s.name
        }
    }

    export default {
        name: "MultiLineChart",
        props: ["series", "color", "xAxis"],
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
                    series: [
                        ...this.series.map(formatSerie)
                    ],
                    tooltip: {
                        trigger: 'axis',
                        show: true,
                        // formatter: function (e) {
                        //     return `${e.dataIndex} hrs<br> ${e.data}`
                        // }
                    }
                }
            }
        },
        mounted() {
            let self = this
            self.DOM = echarts.init(document.getElementById(this._id))
            self.option.xAxis.data = self.xAxis || []
            self.DOM.setOption(this.option)
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
            },
            series(_new) {
                this.option.series = _new.map(formatSerie)
                this.refresh()
            }
        }
    }
</script>

<style scoped>

</style>