/*
* jet a1 1 => 811 gramas
* avgas 1 => 750 gramas
*/

const fuel = {
    density: {
        jeta1(liters) {
            return (liters * 0.811).toFixed(2)
        },
        avgas(liters) {
            return (liters * 0.75).toFixed(2)
        }
    }
}


export default fuel