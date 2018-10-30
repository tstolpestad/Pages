const config = {

};

module.exports = Object.assign(
	config,
	require('@zeit/next-css')({
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[local]-[hash:base64:5]'
		}
	})
);
