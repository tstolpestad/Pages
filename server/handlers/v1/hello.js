import {lilypads} from '@amphibian/server-lilypads';
import server from '../../server';

const id = 'handlers/v1/hello';
const specification = {
	description: 'Get hello.',
	examples: ['GET /v1/hello'],
	request: {
		method: 'get',
		path: '/v1/hello'
	}
};

async function hello(context) {
	await lilypads(context, {id}, () => ({success: true, message: 'hello'}));
	context.set('cache-control', 'public, max-age=60');
}

server.registerRouteHandler(hello, specification.request);

export default hello;
export {specification};
