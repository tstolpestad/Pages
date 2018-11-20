import lilypads from 'lilypads';
import {NAME, AUTHOR, ENVIRONMENT, VERSION, DESCRIPTION} from '../env';
import handler from '../utilities/handler';
import {specification as helloSpecification} from './v1/hello';

export default handler(() => (
	lilypads({id: 'handlers/index'}, () => (
		JSON.stringify({
			success: true,
			name: NAME,
			author: AUTHOR,
			environment: ENVIRONMENT,
			version: VERSION,
			description: DESCRIPTION,

			operations: {
				hello: helloSpecification
			}
		})
	))
));
