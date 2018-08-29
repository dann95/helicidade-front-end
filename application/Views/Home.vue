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
                                <ul class="home-search-input-autocomplete">
                                    <li v-for="sugg in landings.autoComplete">{{ sugg.name }}</li>
                                </ul>
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </span>
                    <span style="float:right;">
                        <a href="#" class="home-detailed-link">VER POUSOS DETALHADOS</a>
                    </span>
                    <br style="clear:both;">
                    <single-line-chart
                            :values="landings.values"
                            :xAxis="landings.xAxis"/>
                </div>
            </div>
            <div class="home-white-box">
                <h2>ABASTECIMENTO</h2>
                <h3>Informações de abastecimento das aeronaves</h3>

                <!--<div class="home-search-input-container">-->
                    <!--<input type="text" placeholder="search input...">-->
                    <!--<ul class="home-search-input-autocomplete">-->
                        <!--<li>BZ1409</li>-->
                    <!--</ul>-->
                    <!--<i class="fa fa-search"></i>-->
                <!--</div>-->

                <div class="home-airplane-refuling" v-for="fueling in fueling.lasts">
                    <h3>{{ prefix(opt(fueling.prefixo, "")) }}</h3>

                    <h4>
                        Data do último abastecimento: {{ fueling.dt_registro.split('-').reverse().join('/')+' '+fueling.hr_registro }}
                    </h4>

                    <progress-bar :percent="fueling.porcentagem_tanque_1"/>
                    <progress-bar :percent="fueling.porcentagem_tanque_2"/>

                    <span class="home-fueling-type">Tipo de combustível: <strong :class="{'fueling-color-jet1': fueling.combustivel == 2, 'fueling-color-avgas' : fueling.combustivel == 1}">{{(fueling.combustivel == 2) ? 'JET-A1' : 'AVGAS' }}</strong></span>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="home-white-box">
                <h2>Indicadores</h2>
                <h3>Histórico de alertas emitidos durante o período</h3>
                <ul class="home-white-box-switch">
                    <li class="active">Hoje</li>
                    <li>Semana</li>
                    <li>Mês</li>
                </ul>
                <doughnut-infographic :series="dseries"/>
            </div>
            <div class="home-white-box">
                <h2>Próximos vôos agendados</h2>
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

    import SingleLineChart from '../Components/Charts/SingleLineChart.vue';
    import DoughnutInfographic from '../Components/Charts/DoughnutInfographic.vue';
    import ProgressBar from '../Components/Charts/ProgressBar.vue';
    import { prefix, opt } from '../utils';

    export default {
        name: "Home",
        components: {
            SingleLineChart,
            DoughnutInfographic,
            ProgressBar
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {

                vm.fetchLandings()
                    .then(vm.setLandingCharts)

                vm.fetchFueling()
                    .then(vm.setFuelingCharts)

            })
        },
        methods: {
            opt,
            prefix,
            fetchFueling() {
                return this.$sdk.fueling.last()
            },
            setFuelingCharts(res) {
                this.fueling.lasts = res
            },
            fetchLandings() {
                return this.$sdk.landings.findByPeriod(this.landings.start, this.landings.end)
            },
            setLandingCharts(res) {
                this.landings.values = res
            }
        },
        data() {
            return {
                fueling: {
                    lasts: []
                },
                landings: {
                    start: moment().format("YYYY-MM-DD"),
                    end: moment().format("YYYY-MM-DD"),
                    xAxis: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                    values: [],
                    autoComplete: []
                },
                dseries: [
                    {
                        name: 'Pouso',
                        value: 50,
                        color: '#d4a628'
                    },
                    {
                        name: 'Movimentação',
                        value: 50,
                        color: '#c3621f'
                    },
                    {
                        name: 'Abastecimento',
                        value: 50,
                        color: '#303234'
                    },
                    {
                        name: 'Falso positivo',
                        value: 50,
                        color: '#DD241A'
                    }
                ]
            }
        },
        mounted() {
            let self = this
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