const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		['/api'],
		createProxyMiddleware({
			target: 'https://blog-atalaya-back.herokuapp.com',
			changeOrigin: true
		})
	)
}
