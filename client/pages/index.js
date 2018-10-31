import React from 'react';
import classNames from './index.css';

import('./_document.css');

export default () => {
	console.log('it works');

	return (
		<div className={classNames.container}>
			<p className={classNames.paragraph}>hello</p>
		</div>
	);
};
