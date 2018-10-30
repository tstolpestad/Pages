import createServer from '@amphibian/server';
import {ENVIRONMENT, LOGGING_ENABLED, PORT} from './env';

const server = createServer({
	port: (ENVIRONMENT === 'test')
		? PORT + Math.floor(Math.random() * 1000)
		: PORT,
	logging: LOGGING_ENABLED || 'errors'
});

async function gracefulShutdown() {
	console.log('Shutting down gracefully...');
	await server.close();
	process.exit(1);
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

export default server;
