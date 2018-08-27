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
        }
    }
}

export default landings