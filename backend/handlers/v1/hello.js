import lilypads from 'lilypads';
import handler from '../../utilities/handler';

const specification = {
	description: 'Get hello.',
	examples: ['GET /v1/hello'],
	request: {
		method: 'get',
		path: '/v1/hello'
	}
};

export {specification};
export default handler(({request}) => {
	const {url} = request;
	const options = {id: `handlers/v1/hello/${url}`};

	return lilypads(options, () => (
		JSON.stringify({
			success: true,
			message: `hello from ${url}`
		})
	))
});
