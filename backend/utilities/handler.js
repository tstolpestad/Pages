import handleResponse from './handle-response';
import handleError from './handle-error';

export default function handler(responder, options) {
	return async (request, response) => {
		const context = {request, response};

		try {
			handleResponse(context, await responder(context), options);
		} catch (error) {
			handleError(context, error, options);
		}
	};
}
