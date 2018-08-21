import example from './handlers/example';
import auth from './handlers/auth';

export default class SDK {

    constructor(http) {
        this.http = http
    }

    get auth() {
        return auth(this.http)
    }

    get example() {
        return example(this.http)
    }

}