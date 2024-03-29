const config = {
	basename: '',
	defaultPath: '/panel-admin',
	theme: 'light', // light, dark
	i18n: 'en',
	rtlLayout: false,
	jwt: {
		secret: 'SECRET-KEY',
		timeout: '1 days'
	},
	firebase: {},
	auth0: {
		client_id: '',
		domain: ''
	}
}

export default config
