import http from './http';
import example from './handlers/example';

export default class SDK {

    constructor() {
        this.http = http
    }

    get example() {
        return example(this.http)
    }

}