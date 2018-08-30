class AbstractDriver {

    subscribe(channel, callback) {
        this._unImplementedMethod(arguments.callee.name)
    }

    unsubscribe(channel, callback) {
        this._unImplementedMethod(arguments.callee.name)
    }

    static _unImplementedMethod(name) {
        throw new Error(`The ${name} method must be implemented!!`)
    }

}


export default AbstractDriver