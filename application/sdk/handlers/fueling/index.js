import presenter from './presenter';

const fueling = http => {
    return {
        last(n = 3) {
            return http.get(`fueling/last/${n}`)
                .then(presenter.many)
        }
    }
}

export default fueling