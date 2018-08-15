<template>
    <div>
        <div id="calendar-container">
            <div id="calendar">
                <header>
                    <h1>Month YYYY</h1>
                </header>
                <div class="day-names">
                    <p>Domingo</p>
                    <p>Segunda</p>
                    <p>Terça</p>
                    <p>Quarta</p>
                    <p>Quinta</p>
                    <p>Sexta</p>
                    <p>Sábado</p>
                </div>
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

    export default {
        name: "Schedules",
        data() {
            return {
                eb: 0,
                ea: 0,
                days:[]
            }
        },
        mounted() {
            const amount = dim(2018,2)
            const firstd = wd(2018,2)

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
</script>

<style scoped>

    #calendar-container {
        width:100%;
        height:500px;
    }

    #calendar { box-sizing: border-box; width: 100%; height: 100%; display: flex; flex-direction: column; }
    #calendar > header { flex-grow: 7; display: flex; align-items: center; justify-content: center; }
    #calendar .day-names { flex-grow: 5; display: flex; align-items: center; }
    #calendar .day-names p { flex-grow: 1; text-align: center; border:1px solid #b3b3b3; height: 30px;}
    #calendar .days { flex-grow: 88; display: flex; flex-direction: row; flex-wrap: wrap; }
    #calendar .days > div { width: calc(100% * 1/7); }
    #calendar { font-family: 'Source Sans Pro', Arial, sans-serif; font-weight: 900; text-transform: uppercase; border: 1px solid #D5D5D5; }
    #calendar > header { background: #FCFCFC; }
    #calendar > header h1 { font-size: 2em; color: #333; }
    #calendar .day-names { background: #fff; }
    #calendar .day-names, #calendar .days { font-size: 0.825em; color: #666; }
    #calendar .spacer  { background: #F5F5F5; }
    #calendar .days > div { box-sizing: border-box; border: 1px solid #F5F5F5; border-width: 1px 0 0 1px; }
    #calendar .days > div:nth-child(-n+7) { border-top-width: 0; }
    #calendar .days > div:nth-child(7n+1) { border-left-width: 0; }
    #calendar .days > div:nth-child(7n+1), #calendar .days > div:nth-child(7n+7) { background: #FEFEFE; }
    #calendar .day-number { float: left; padding: 1em; }
</style>