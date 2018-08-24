import EventEmitter from 'wolfy87-eventemitter';

const ee = new EventEmitter;

const busPlugin = {
    install(_Vue, opt) {
        Object.defineProperty(_Vue.prototype, '$bus', {
            get() {
                return ee
            }
        })
    }
}

export default busPlugin