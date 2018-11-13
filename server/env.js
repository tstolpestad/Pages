import meta from './package.json';

process.env.NAME = meta.name;
process.env.VERSION = meta.version;
process.env.DESCRIPTION = meta.description;
process.env.AUTHOR = meta.author;

const {NAME, NODE_ENV, AUTHOR, VERSION, DESCRIPTION} = process.env;
const ENVIRONMENT = NODE_ENV || 'development';
const PORT = process.env.PORT || 4000;

export {
	NAME,
	AUTHOR,
	ENVIRONMENT,
	VERSION,
	DESCRIPTION,
	PORT
};
