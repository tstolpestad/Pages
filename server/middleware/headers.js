import server from '../server';

const responseHeaders = {
	'access-control-allow-origin': '*',
	'access-control-allow-methods': 'GET, POST, PATCH, PUT, DELETE',
	'access-control-max-age': 3600,
	'access-control-allow-headers': [
		'cache-control',
		'content-type',
		'authorization',
		'x-referrer',
		'if-modified-since'
	].join(', '),

	'x-frame-options': 'DENY',
	'x-content-type-options': 'nosniff',
	'strict-transport-security': 'max-age=16070400; includeSubDomains'
};

/**
 * Headers middleware
 * @param {object} context: the context
 * @param {function} next
**/
async function headers(context, next) {
	context.set(responseHeaders);
	await next();
}

server.registerMiddleware(headers);
