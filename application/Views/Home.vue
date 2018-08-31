<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="home-white-box">
                <h2>Histórico de POUSOS</h2>
                <h3>Histórico dos voos ocorridos durante o período.</h3>
                <ul class="home-white-box-switch">
                    <li class="active">Pousos Totais</li>
                </ul>
                <div>
                    <span style="float:left;">
                        <div style="width:184px;">
                            <div class="home-search-input-container">
                                <input type="text" placeholder="search input...">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </span>
                    <span style="float:right;">
                        <router-link class="home-detailed-link" :to="{name: 'landings'}">
                            VER POUSOS DETALHADOS
                        </router-link>
                    </span>
                    <br style="clear:both;">
                    <multi-line-chart
                            :series="lec.series"
                            :xAxis="lec.xAxis"/>
                </div>
            </div>
            <div class="home-white-box">
                <h2>ABASTECIMENTO</h2>
                <h3>Informações de abastecimento das aeronaves</h3>

                <div class="home-airplane-refuling" v-for="fueling in fueling.lasts">
                    <h3>{{ prefix(opt(fueling.prefixo, "")) }}</h3>

                    <h4>
                        Data abastecimento: {{ fueling.dt_registro.split('-').reverse().join('/')+' '+fueling.hr_registro }}
                    </h4>

                    <span class="home-fueling-type">Tipo de combustível: <strong :class="{'fueling-color-jet1': fueling.combustivel == 2, 'fueling-color-avgas' : fueling.combustivel == 1}">{{(fueling.combustivel == 2) ? 'JET-A1' : 'AVGAS' }}</strong></span><br>

                    Quantidade: {{ fueling.litro }} litros<br>

                    Peso do combustivel abastecido: {{ (fueling.combustivel === 1) ? avgas(fueling.litro) : jeta1(fueling.litro) }} KG<br>

                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="home-white-box">
                <h2>Indicadores</h2>
                <h3>Histórico de alertas emitidos durante o período</h3>
                <ul class="home-white-box-switch">
                    <li :class="{'active' : indicatorPeriod === 1}" @click="setIndicatorsPeriod(1)">Hoje</li>
                    <li :class="{'active' : indicatorPeriod === 2}" @click="setIndicatorsPeriod(2)">Semana</li>
                    <li :class="{'active' : indicatorPeriod === 3}" @click="setIndicatorsPeriod(3)">Mês</li>
                </ul>
                <br style="clear: both;">
                <doughnut-infographic :series="_indicators"/>
            </div>
            <div class="home-white-box">
                <h2>Próximos voos agendados</h2>
                <h3>Datas dos próximos vôos agendados.</h3>

                <div id="home-calendar-month">
                    <div id="home-calendar-controls">August</div>
                    <div id="days">
                        <div class="home-calendar-cell week"><p>DOM</p></div>
                        <div class="home-calendar-cell week"><p>SEG</p></div>
                        <div class="home-calendar-cell week"><p>TER</p></div>
                        <div class="home-calendar-cell week"><p>QUA</p></div>
                        <div class="home-calendar-cell week"><p>QUI</p></div>
                        <div class="home-calendar-cell week"><p>SEX</p></div>
                        <div class="home-calendar-cell week"><p>SAB</p></div>
                        <div class="home-dayOfMonth home-calendar-prevMonth home-calendar-cell"><p>30</p></div>
                        <div class="home-dayOfMonth home-calendar-prevMonth home-calendar-cell"><p>31</p></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>1</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>2</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>3</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>4</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>5</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>6</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>7</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>8</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>9</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>10</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>11</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>12</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>13</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>14</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>15</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>16</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>17</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>18</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>19</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>20</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>21</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>22</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>23</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>24</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>25</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>26</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>27</p></div></div>
                        <div class="home-dayOfMonth current home-calendar-cell"><div><p>28</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>29</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell"><div><p>30</p></div></div>
                        <div class="home-dayOfMonth home-calendar-cell">
                            <div>
                                <p>31</p>
                            </div>
                        </div>
                        <div class="home-dayOfMonth home-calendar-prevMonth home-calendar-cell"><p>1</p></div>
                        <div class="home-dayOfMonth home-calendar-prevMonth home-calendar-cell"><p>2</p></div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import MultiLineChart from '../Components/Charts/MultiLineChart.vue';
    import DoughnutInfographic from '../Components/Charts/DoughnutInfographic.vue';
    import { prefix, opt, sumObjProperties } from '../utils';

    import fuel from '../calcs/fuel';

    export default {
        name: "Home",
        components: {
            MultiLineChart,
            DoughnutInfographic
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {

                vm.fetchLandingsAndChecklists()
                    .then(vm.setLandingAndChecklists)

                vm.fetchFueling()
                    .then(vm.setFuelingCharts)

                vm.fetchIndicators()
                    .then(vm.setIndicators)

            })
        },
        methods: {
            avgas: fuel.density.avgas,
            jeta1: fuel.density.jeta1,
            generatePeriod() {
                switch (this.indicatorPeriod) {
                    case 1:
                        return [moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
                    case 2:
                        return [moment().subtract(1, 'week').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
                    case 3:
                        return [moment().subtract(1, 'month').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
                    default:
                        return []
                }
            },
            fetchIndicators() {
                return this.$sdk.analytics.indicators(... this.generatePeriod())
            },
            setIndicators(res) {
                this.indicators = res
            },
            setIndicatorsPeriod(n) {
                this.indicatorPeriod = n
            },
            opt,
            prefix,
            fetchFueling() {
                return this.$sdk.fueling.last()
            },
            setFuelingCharts(res) {
                this.fueling.lasts = res
            },
            fetchLandingsAndChecklists() {
                return this.$sdk.analytics.landingsAndChecklists(this.lec.day)
            },
            setLandingAndChecklists(res) {
                this.lec.series = [
                    {
                        name: 'Pousos',
                        color: '#efc203',
                        values: res.landings
                    },
                    {
                        name: 'Falso positivo',
                        color: 'red',
                        values: res.fake
                    },
                    {
                        name: 'Checklists',
                        color: 'grey',
                        values: res.checklists
                    }
                ]
            }
        },
        data() {
            return {
                fueling: {
                    lasts: []
                },
                lec: {
                    day: moment().format("YYYY-MM-DD"),
                    xAxis: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].map(i => `${i} hrs`),
                    series: []
                },
                indicatorPeriod: 1,
                indicators: {
                    landings: 0,
                    movements: 0,
                    fuelling: 0,
                    fake: 0,
                }
            }
        },
        computed: {
            _indicators() {
                const total = sumObjProperties(this.indicators)
                const percent = (a, t) => Math.floor((a / t) * 100)
                return [
                    {
                        name: 'Pouso',
                        value: percent(this.indicators.landings, total),
                        color: '#d4a628'
                    },
                    {
                        name: 'Movimentação',
                        value: percent(this.indicators.movements, total),
                        color: '#c3621f'
                    },
                    {
                        name: 'Abastecimento',
                        value: percent(this.indicators.fuelling, total),
                        color: '#303234'
                    },
                    {
                        name: 'Falso positivo',
                        value: percent(this.indicators.fake, total),
                        color: '#DD241A'
                    }
                ]
            }
        },
        mounted() {
            let self = this
        },
        watch: {
            indicatorPeriod(_new) {
                this.fetchIndicators()
                    .then(this.setIndicators)
            }
        }
    }
</script>

<style scoped>

    .home-detailed-link {
        font-size: 13.5px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #efc203;
        text-decoration:none;
    }

    .home-white-box {
        height: 688px;
        border-radius: 3px;
        box-shadow: -0.1px 2px 2.9px 0.1px rgba(108, 108, 108, 0.53);
        background-color: #ffffff;
        border: solid 1px #dadada;
        padding:31px;
    }

    .home-white-box > h2 {
        font-family: Lato;
        font-size: 23.5px;
        font-weight: 600;
        text-align: left;
        color: #1a1a1a;
        margin-bottom:5px;
    }

    .home-white-box > h3 {
        font-size: 17.5px;
        font-weight: 300;
        text-align: left;
        color: #1a1a1a;
        margin-top:5px;
        margin-bottom:5px;
    }

    .home-white-box-switch {
        list-style-type: none;
        margin:0;
        margin-bottom:50px;
        padding:0;
        width:100%;
        display:block;
        float:left;
    }

    .home-white-box-switch > li {
        margin:0;
        padding:0;
        display:block;
        float:left;
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .home-white-box-switch > li.active {
        border-bottom: 3px solid #efc203;
    }


    .home-white-box-switch > li+li {
        margin-left:70px !important;
    }

    .home-white-box + .home-white-box {
        margin-top:23px;
    }

    .home-search-input-container {
        position:relative;
        display: block;
    }

    .home-search-input-container > input[type="text"] {
        width:100%;
        height:32px;
        padding-left:24px;
    }

    .home-search-input-container > .fa-search {
        position:absolute;
        top:8px;
        left:4px;
    }

    .home-search-input-container > .home-search-input-autocomplete {
        position:absolute;
        top:32px;
        left:0;
        padding:0;
        margin:0;
        list-style-type: none;
        width:100%;
        z-index:5;
    }

    .home-search-input-container > .home-search-input-autocomplete > li {
        padding:0;
        padding-left:24px;
        margin:0;
        display:block;
        border: solid 1px #cbcbcb;
        width:100%;
        line-height: 33px;
        color: #2c303b;
        font-weight: 600;
        font-size: 14px;
        z-index:6;
        background-color:#fff;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
    }





    #home-calendar-month{
        margin:50px auto;
        box-sizing:border-box;
        text-align: left;
        font-size:24px;
        overflow:hidden;
        color:#1F1F1F;
    }
    #home-calendar-controls{
        font-size:18px;
        padding: 10px;
        box-sizing:border-box;
        z-index: 3;
    }

    #days{
        border-top: none;
        display:flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        -webkit-translate: 0.3s all ease-in-out;
        transition: 0.3s all ease-in-out;
    }

    .week{

    }
    .home-calendar-prevMonth{
        color: lightgrey;
    }
    .home-calendar-cell{
        display:inline-block;
        width:calc(100% / 7);
        text-align: center;
        box-sizing:border-box;
        font-size:18px;
    }
    .home-dayOfMonth{
        /*border: 1px solid lightgrey;*/
    }

    .home-dayOfMonth:hover,.current{
        cursor:pointer;
        color: white;
        transition: 0.3s all ease-in-out;
    }

    .home-dayOfMonth.current > div {
        border-radius: 50%;
        background-color:#efc203;
        border:1px solid transparent;
        height:100%;
        width:100%;
    }
</style>