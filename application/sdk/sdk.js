import landings from './handlers/landings';
import fueling from './handlers/fueling';

export default class SDK {

    constructor(http) {
        this.http = http
    }

    get airplane() {

    }

    get landings() {
        return landings(this.http)
    }

    get fueling() {
        return fueling(this.http)
    }

    get movements() {

    }

}