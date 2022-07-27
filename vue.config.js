module.exports = {
    devServer: {
        proxy: '${BACKEND_SERVICE_URL}/',
    }
}