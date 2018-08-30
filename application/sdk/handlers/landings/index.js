import presenter from './presenter';

const landings = http => {
    return {
        find(id) {
            return http.get(`landings/${id}`)
                .then(presenter.single)
        },
        findByPeriod(start, end)  {
            return http.get(`landings/findByPeriod/${start};${end}`)
                .then(presenter.dayCount)
        },
        findInPeriod(start, end) {

            return http.get(`landings/findByPeriod/${start};${end}`)
                .then(presenter.many)
        },
        all() {
            return http.get('landings')
                .then(presenter.many)
        }
    }
}

export default landings