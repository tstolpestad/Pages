import handleResponse from './handle-response';
import handleError from './handle-error';

export default function handler(responder) {
	return async (request, response) => {
		try {
			handleResponse(response, await responder());
		} catch (error) {
			handleError(response, error);
		}
	};
}
