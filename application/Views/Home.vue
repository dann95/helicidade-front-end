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
                                    <li data-option-value="1">BZ1409</li>
                                    <li data-option-value="2">BZ1408</li>
                                </ul>
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <button>confirmar</button>
                    </span>
                    <span style="float:right;">
                        <a href="#">VER POUSOS DETALHADOS</a>
                    </span>
                    <single-line-chart :xAxis="xAxis"/>
                </div>
            </div>
            <div class="home-white-box">
                <h2>ABASTECIMENTO</h2>
                <h3>Informações de abastecimento das aeronaves</h3>

                <div class="home-search-input-container">
                    <input type="text" placeholder="search input...">
                    <ul class="home-search-input-autocomplete">
                        <li>BZ1409</li>
                    </ul>
                    <i class="fa fa-search"></i>
                </div>

                <progress-bar :percent="x"/>

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

                <div class="cal">
                    <div class="cal-header">
                        <span class="cal-left  cal-button" id="prev"> &lang; </span>
                        <span class="cal-left  cal-hook"></span>
                        <span class="cal-month-year"> June 20&0 </span>
                        <span class="cal-right  cal-hook"></span>
                        <span class="cal-right  cal-button" id="next"> &rang; </span>
                    </div>
                    <table class="cal-days">
                        <tr>
                            <td>dom</td>
                            <td>seg</td>
                            <td>ter</td>
                            <td>qua</td>
                            <td>qui</td>
                            <td>sex</td>
                            <td>sab</td>
                        </tr>
                    </table>
                    <div class="cal-frame">


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

    export default {
        name: "Home",
        components: {
            SingleLineChart,
            DoughnutInfographic,
            ProgressBar
        },
        data() {
            return {
                x: 50,
                xAxis: [],
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
                        name: 'Backoffice',
                        value: 50,
                        color: '#9e9e9e'
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
        /*font-style: normal;*/
        /*font-stretch: normal;*/
        /*line-height: 1.79;*/
        /*letter-spacing: 0.5px;*/
        text-align: left;
        color: #1a1a1a;
        margin-bottom:5px;
    }

    .home-white-box > h3 {
        font-size: 17.5px;
        font-weight: 300;
        /*font-style: normal;*/
        /*font-stretch: normal;*/
        /*line-height: 4.14;*/
        /*letter-spacing: 0.2px;*/
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
    }

</style>