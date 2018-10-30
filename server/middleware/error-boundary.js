import chalk from 'chalk';
import errors from '@amphibian/errors';
import {timeLogger} from '@amphibian/logger';
import server from '../server';

const errorLogger = timeLogger.extend(chalk.red('[Error]'));

async function errorBoundary(context, next) {
	try {
		await next();
	} catch (error) {
		if (!error.data || (error.type === 'fatal_error')) {
			errorLogger.log(error); // TODO probably report it somewhere

			const genericError = errors.fatalError('unknown_error');
			genericError.log = false;
			throw genericError;
		}

		throw error;
	}
}

server.registerMiddleware(errorBoundary);

export default errorBoundary;
