/**
 * Created by Tonje on 12/17/2018.
 * A single page element for usage in the lists
 */
import React from "react";
import classNames from './PageElement.css';


export const PageElement = ({element}) => {
	//todo: make droppable
	//todo: styling
	return <div className={classNames.element}>
		{element}
	</div>
}
