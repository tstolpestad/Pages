import meta from './package.json';

process.env.NAME = meta.name;
process.env.VERSION = meta.version;
process.env.DESCRIPTION = meta.description;
process.env.AUTHOR = meta.author;

import('./middleware').then(() => {
	import('./handlers');
});
