import SDK from './sdk';


export default function (httpClient) {
    const instance = new SDK(httpClient)
    return {
        install(__Vue, options) {
            Object.defineProperty(__Vue.prototype, '$sdk', {
                get() {
                    return instance
                }
            })
        }
    }
}
