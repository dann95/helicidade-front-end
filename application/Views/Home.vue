<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="home-white-box">
                <h2>Histórico de POUSOS</h2>
                <h3>Histórico dos voos ocorridos durante o período.</h3>
                <ul>
                    <li>Pousos Totais</li>
                </ul>
                <div>
                    <span style="float:left;">
                        <div class="home-search-input-container">
                            <input type="text" placeholder="search input...">
                            <ul class="home-search-input-autocomplete">
                                <li>BZ1409</li>
                            </ul>
                            <i class="fa fa-search"></i>
                        </div>
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
                <ul>
                    <li>Hoje</li>
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
    .home-white-box + .home-white-box {
        margin-top:23px;
    }

    .home-search-input-container {
        position:relative;
    }

    .home-search-input-container > .fa-search {
        position:absolute;
        top:0;
        left:0;
    }

    .home-search-input-container > .home-search-input-autocomplete {
        position:absolute;
        top:0;
        left:0;
        padding:0;
        margin:0;
        list-style-type: none;
    }

    .home-search-input-container > .home-search-input-autocomplete > li {
        padding:0;
        margin:0;
        display:block;
    }

</style>