class Socket {

    constructor(driver) {
        this.driver = driver
    }

}


const plugin = driver => {

    let kernel = new Socket(driver)

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