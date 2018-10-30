import {lilypads} from '@amphibian/server-lilypads';
import {NAME, DESCRIPTION, AUTHOR, VERSION} from '../env';
import server from '../server';

import {specification as helloGet} from './v1/hello';

const id = 'handlers/index';

async function index(context) {
	await lilypads(context, {id}, () => ({
		success: true,
		name: NAME,
		description: DESCRIPTION,
		version: VERSION,
		author: AUTHOR,

		operations: {
			v1: {
				hello: helloGet
			}
		}
	}));

	context.set('cache-control', 'public, max-age=60');
}

server.registerRouteHandler(index, {method: 'get', path: '/'});

export default index;
