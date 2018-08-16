<template>
    <div>
        <div id="calendar-container">
            <div id="calendar-locale-container">
                Local:
                <select>
                    <option value="">bla</option>
                    <option value="">ble</option>
                    <option value="">blu</option>
                </select>
            </div>
            <div id="calendar-header">
                <div id="calendar-header-controls">
                    <div id="calendar-left-button">
                        <i class="fa fa-angle-left" @click="decrementMonth()"></i>
                    </div>
                    <h1>{{ month }} {{ y }}</h1>
                    <div id="calendar-right-button">
                        <i class="fa fa-angle-right" @click="incrementMonth()"></i>
                    </div>
                </div>
                <div id="calendar-header-days">
                        <div>Domingo</div>
                        <div>Segunda</div>
                        <div>Terça</div>
                        <div>Quarta</div>
                        <div>Quinta</div>
                        <div>Sexta</div>
                        <div>Sábado</div>
                </div>
            </div>
            <div id="calendar">
                <div class="days">
                    <div v-for="day in days" :class="{
                        'spacer pre': ! day.day,
                        'day': day.day
                    }">
                        <span class="day-number" v-if="day.day">{{ day.num }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    const dim = (y, m) => moment(`${m}-${y}`, 'MM-YYYY').daysInMonth()

    const wd = (y, m) => moment(`01-${m}-${y}`,'DD-MM-YYYY').day()

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    export default {
        name: "Schedules",
        data() {
            return {
                eb: 0,
                ea: 0,
                days:[],
                month: '',
                m: null,
                y: null
            }
        },
        mounted() {
            const now = moment()
            this.setMonth(now.month() +1, now.year());
        },
        methods: {
            incrementMonth() {
                if(this.m === 12) {
                    this.setMonth(1, this.y + 1)
                    return;
                }
                this.setMonth(this.m + 1, this.y)
            },
            decrementMonth() {
                if(this.m === 1) {
                    this.setMonth(12, this.y - 1)
                    return;
                }
                this.setMonth(this.m - 1, this.y)
            },
            setMonth(m, y) {
                this.days = []
                this.eb = 0
                this.ea = 0
                this.month = months[m - 1]
                this.m = m
                this.y = y

                const amount = dim(y, m)
                const firstd = wd(y, m)

                for(let w = 0; w < firstd; w++) {
                    this.days.push({
                        day: false
                    })
                }

                for(let k = 1; k <= amount; k++) {
                    this.days.push({
                        day: true,
                        num: k
                    })
                }

                for(let r = 1; r <= (35 - amount - firstd); r++) {
                    this.days.push({
                        day: false
                    })
                }
            }
        }
    }
</script>

<style scoped>

    #calendar-locale-container {
        width:100%;
        height:112px;
        background-color:#eeeeee;
    }

    #calendar-header {
        width:100%;
        border-top: 2px solid #b3b3b3;
        border-bottom: 2px solid #b3b3b3;
        background-color:#eeeeee;
        margin:0;
        padding:0;
    }

    #calendar-header-controls {
        position:relative;
        text-align:center;
    }

    #calendar-header-controls > h1 {
        font-size:20px;
    }


    #calendar-header-days {
        width:100%;
        margin:0;
        padding:0;
        float:left;
    }

    #calendar-header-days > div {
        margin:0;
        padding:0;
        display: inline-block;
        width: calc(100% * 1/7);
        border-left:1px solid #b3b3b3;
        border-right:1px solid #b3b3b3;
        border-top:2px solid #b3b3b3;
        border-bottom:2px solid #b3b3b3;
        float:left;
        text-align: center;
        background-color:#eeeeee;
        height:66px;
        padding-top:22px;
    }


    #calendar-left-button {
        font-size:24px;
        position:absolute;
        left:219px;
        color:#7d7d7d;
        top:0px;
    }

    #calendar-right-button {
        position:absolute;
        right:219px;
        font-size:24px;
        color:#7d7d7d;
        top:0px;
    }

    #calendar-right-button > i, #calendar-left-button > i {
        cursor: pointer;
    }

    #calendar-container {
        width:100%;
        height:500px;
    }

    .days > div {
        background-color:#fff;
    }

    #calendar { box-sizing: border-box; width: 100%; height: 100%; display: flex; flex-direction: column; margin-bottom:150px;}
    #calendar .day-names { flex-grow: 5; display: flex; align-items: center; }
    #calendar .day-names p { flex-grow: 1; text-align: center; border:1px solid #b3b3b3; height: 30px;}
    #calendar .days { flex-grow: 88; display: flex; flex-direction: row; flex-wrap: wrap; }
    #calendar .days > div { width: calc(100% * 1/7); }
    #calendar { font-family: 'Source Sans Pro', Arial, sans-serif; font-weight: 900; text-transform: uppercase; border: 1px solid #D5D5D5; }
    #calendar .day-names { background: #fff; }
    #calendar .day-names, #calendar .days { font-size: 0.825em; color: #666; }

    #calendar .spacer  {
        background-color: #d2d2d2 !important;
    }

    #calendar .days > div { box-sizing: border-box; border: 1px solid #F5F5F5; border-width: 1px 0 0 1px; }
    #calendar .days > div:nth-child(-n+7) { border-top-width: 0; }
    #calendar .days > div:nth-child(7n+1) { border-left-width: 0; }
    #calendar .days > div:nth-child(7n+1), #calendar .days > div:nth-child(7n+7) { background: #F2F2F2; }
    #calendar .day-number { float: left; padding: 1em; }
</style>