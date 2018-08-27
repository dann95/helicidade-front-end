const presenter = {
    single(res) {

        const data = res.data

        let result = Array(24).fill(0)

        data.forEach(obj => {
            ++result[parseInt(obj.hr_registro.split(':')[0])]
        })

        return result
    }
}

export default presenter