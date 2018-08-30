import presenter from './presenter';

const movements = http => {
    return {
        all() {
            return http.get('movements/all')
                .then(presenter.many)
        },
        findByPeriod(start, end) {
            return http.get(`movements/findByPeriod/${start};${end}`)
                .then(presenter.many)
        }
    }
}

export default movements