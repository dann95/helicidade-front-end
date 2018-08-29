import presenter from './presenter';

const singlePeriodQuery = (start,end) => {
    return {
        start,
        end
    }
}

const landings = http => {
    return {
        find(id) {
            return http.get(`landings/${id}`)
                .then(presenter.single)
        },
        findByPeriod(start, end)  {

            const body = singlePeriodQuery(start, end)

            return http.post('landings/findByPeriod', body)
                .then(presenter.dayCount)
        },
        findInPeriod(start, end) {
            const body = singlePeriodQuery(start, end)

            return http.post('landings/findByPeriod', body)
                .then(presenter.many)
        },
        all() {
            return http.get('landings')
                .then(presenter.many)
        }
        // paginate(perPage, currentPage) {
        //     return http.get(`landings/paginate?amount=${perPage}&page=${currentPage}`)
        //         .then(presenter.many)
        // }
    }
}

export default landings