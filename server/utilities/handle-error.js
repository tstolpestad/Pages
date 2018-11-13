export default function handleError(response, error) {
	response.statusCode = error.status || 500;
	response.setHeader('content-type', 'application/json');
	response.end(
		JSON.stringify({
			error: {
				code: error.code,
				message: error.message
			}
		})
	);
}
