import lilypads from 'lilypads';
import handler from '../../utilities/handler';

const options = {id: 'handlers/v1/hello'};
const specification = {
	description: 'Get hello.',
	examples: ['GET /v1/hello'],
	request: {
		method: 'get',
		path: '/v1/hello'
	}
};

export {specification};
export default handler(() => (
	lilypads(options, () => (
		JSON.stringify({
			success: true,
			message: 'hello'
		})
	))
));
