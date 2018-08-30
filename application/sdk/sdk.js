import landings from './handlers/landings';
import fueling from './handlers/fueling';
import movements from './handlers/movements';
import analytics from './handlers/analytics';

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
        return movements(this.http)
    }

    get analytics() {
        return analytics(this.http)
    }
}