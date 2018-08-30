import presenter from './presenter';

const analytics = http => {
    return {
        landingsAndChecklists(date) {
            return http.get('analytics/landings-and-checklists')
                .then(presenter.landingsAndChecklists)
        }
    }
}

export default analytics