import http from 'http';

const HANDLERS_FOLDER = './handlers';
const server = http.createServer(async (request, response) => {
	const path = request.url;
	let handlerPath;

	if (path === '/') {
		handlerPath = `${HANDLERS_FOLDER}/index.js`;
	} else {
		handlerPath = `${HANDLERS_FOLDER + path}.js`;
	}

	try {
		const handler = await import(handlerPath);
		await handler.default(request, response);
	} catch (error) {
		response.end('404 Not Found');
	}
});

server.listen(4000);
console.log('> Listening on port 4000');
