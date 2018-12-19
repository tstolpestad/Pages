import React from 'react';
import classNames from './index.css';

import('./_document.css');

import {PageElement} from './Components/PageElement'

export default () => {

	return (
		<div className={classNames.container}>
			<div id="search"></div>
			<div id="favorites">
				<PageElement element="Test"></PageElement>
			</div>
			<div id="list"></div>
		</div>
	);
};
