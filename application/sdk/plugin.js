import SDK from './sdk';

const instance = new SDK()

export default {
    install(__Vue, options) {
        Object.defineProperty(__Vue.prototype, '$sdk', {
            get() {
                return instance
            }
        })
    }
}