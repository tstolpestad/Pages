export default function handleResponse({response}, body, options = {}) {
	response.statusCode = 200;

	if (options.setCacheControlHeader !== false) {
		const maxAge = (options.cacheControlMaxAge || 60 * 1000) / 1000;
		response.setHeader('cache-control', `public, max-age=${maxAge}`);
	}

	response.setHeader('content-type', options.contentType || 'application/json');
	response.end(body);
}
