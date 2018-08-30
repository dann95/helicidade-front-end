const presenter = {
    landingsAndChecklists(res) {

        let _res = res.data

        let empty = Array(24).fill(0)

        let result = {
            landings: empty.slice(0),
            fake: empty.slice(0),
            checklists: empty.slice(0)
        }

        Object.keys(_res)
            .forEach((k) => {
                const i = parseInt(k)
                _res[k].forEach((r) => {
                    ++result[(r.real) ? 'landings' : 'fake'][i]
                    if(r.checklist_done)
                        ++result['checklists'][i]
                })
            })

        return result
    }
}

export default presenter