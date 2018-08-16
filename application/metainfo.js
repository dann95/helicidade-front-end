const metainfo = (router) => {
    router.beforeEach((to, from, next) => {
        document.title = ('title' in to.meta) ? to.meta.title : 'Heliquality'
        next()
    })
}

export default metainfo