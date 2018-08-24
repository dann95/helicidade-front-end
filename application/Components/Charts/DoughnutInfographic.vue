<template>
    <div :id="_id" style="height:400px; width:100%;"></div>
</template>
<script>
    export default {
        name: "doughnut-infographic",
        props: ["series"],
        data() {
            return {
                DOM: null,
                option: {
                    title: false,
                    tooltip: {
                        show: true,
                        formatter: function (e) {
                            if('name' in e && e.name === 'invisible')
                                return;
                            return `${e.marker} ${e.name}<br> ${e.data.value}`
                        }
                    },
                    legend: {
                        data: [...this.series.map(s => s.name)]
                    },
                    color: [... this.series.map(s => s.color)],
                    series: this.buildSeries(this.series)
                }
            }
        },
        mounted() {
            this.DOM = echarts.init(document.getElementById(this._id))
            this.DOM.setOption(this.option)
        },
        computed: {
            _id() {
                return `hlq-doughnut-infographic-${this.uniqId}`
            }
        },
        methods: {
            refresh() {
                this.DOM.setOption(this.option)
            },
            buildSeries(series) {
                let incre = -1
                let radius = i => [75 - (15 * i)+'%', 90 - (15 * i)+'%']
                return [
                    ...series.map(s => {
                        ++incre;
                        return {
                            _name: s.name,
                            name: incre,
                            type: 'pie',
                            clockwise: false,
                            radius: radius(incre),
                            itemStyle: {
                                normal: {
                                    label: {show: false},
                                    labelLine: {show: false}
                                }
                            },
                            data:[
                                {
                                    value: s.value,
                                    name: s.name
                                },
                                {
                                    value: 100 - s.value,
                                    name: 'invisible',
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(0,0,0,0)',
                                            label: {show: false},
                                            labelLine: {show: false}
                                        },
                                        emphasis: {
                                            color: 'rgba(0,0,0,0)'
                                        }
                                    }
                                }
                            ]
                        }
                    })
                ]
            }
        },
        watch: {
            series: {
                handler(newVal, oldVal) {
                    this.option.series= this.buildSeries(newVal)
                    this.refresh()

                },
                deep: true
            }
        }
    }
</script>
<style scoped>

</style>