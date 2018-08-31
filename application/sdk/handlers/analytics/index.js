import presenter from './presenter';

const analytics = http => {
    return {
        landingsAndChecklists(date) {
            return http.get(`analytics/landings-and-checklists/${date}`)
                .then(presenter.landingsAndChecklists)
        },
        indicators(start, end) {
            return http.get(`analytics/indicators/${start};${end}`)
                .then(presenter.indicators)
        }
    }
}

export default analytics