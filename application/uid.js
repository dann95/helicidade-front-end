const uidPlugin = {
    install(Vue, options) {
        Object.defineProperty(Vue.prototype, "uniqId", {
            get: function uniqId() {
                return this._uid;
            }
        })
    }
}

export default uidPlugin