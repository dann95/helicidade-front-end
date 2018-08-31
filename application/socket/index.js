class Socket {

    constructor() {
        this.connect()
    }

    connect() {
        this.connection = ''
    }

}


const plugin = driver => {

    let kernel = new Socket()

    return {
        install(_Vue, options) {
            Object.defineProperty(_Vue.prototype, '$socket', {
                get() {
                    return kernel
                }
            })
        }
    }
}

export default plugin