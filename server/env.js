const {NAME, NODE_ENV, AUTHOR, VERSION, DESCRIPTION} = process.env;
const ENVIRONMENT = NODE_ENV || 'development';
const PORT = process.env.PORT || 4000;
const LOGGING_ENABLED = NODE_ENV !== 'production';

export {
	NAME,
	AUTHOR,
	ENVIRONMENT,
	VERSION,
	DESCRIPTION,
	PORT,
	LOGGING_ENABLED
};
