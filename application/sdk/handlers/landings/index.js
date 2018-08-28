import presenter from './presenter';

const singlePeriodQuery = (start,end) => {
    return {
        start,
        end
    }
}

const landings = http => {
    return {
        findByPeriod(start, end)  {

            const body = singlePeriodQuery(start, end)

            return http.post('landings/findByPeriod', body)
                .then(presenter.single)
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