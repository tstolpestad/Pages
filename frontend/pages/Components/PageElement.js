import React from "react";
import classNames from './PageElement.css';


export const PageElement = ({element}) => {
	//todo: make droppable
	//todo: styling
	return <div className={classNames.element}>
		{element}
	</div>
}
