let PHASE_PRODUCTION_SERVER;

try {
	/* eslint-disable-next-line import/no-unresolved */
	({PHASE_PRODUCTION_SERVER} = require('next-server/constants'));
} catch (error) {
	({PHASE_PRODUCTION_SERVER} = require('next/constants'));
}

const config = {
	serverRuntimeConfig: {},
	publicRuntimeConfig: {}
};

module.exports = (phase) => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		return config;
	}

	return Object.assign(
		config,
		require('@zeit/next-css')({
			cssModules: true,
			cssLoaderOptions: {
				importLoaders: 1,
				localIdentName: '[local]-[hash:base64:5]'
			}
		})
	);
};
