import presenter from './presenter';

const movements = http => {
    return {
        all() {
            return http.get('movements/all')
                .then(presenter.many)
        }
    }
}

export default movements