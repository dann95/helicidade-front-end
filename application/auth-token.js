module.exports = {

    request: function (req, token) {
        req.headers.Authorization = token
        // this.options.http._setHeaders.call(this, req, {Authorization: token});
    },

    response: function (res) {
        return res.data.token;
    }
};