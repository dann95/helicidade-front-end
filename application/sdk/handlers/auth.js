const auth = http => {
    return {
        login() {
            return http.get('/auth').then(r => r.data)
        }
    }
}

export default auth