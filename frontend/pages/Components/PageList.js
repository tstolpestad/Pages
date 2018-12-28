//todo: add styling
import React, {useState} from "react";
import {Droppable} from "react-beautiful-dnd"
//css imports
import classNames from './PageList.css';
//own components
import {PageElement} from './PageElement';

export const PageList = ({id, pages, title, dnd, style})=> {

	const [open, setOpen] = useState(true);
	const pageElements = open && pages.map((page, index) => <PageElement key={index} element={page} index={index} dnd={dnd}/>);
	const pagesContainer = dnd ?
			<Droppable droppableId={id}>
				{provided=> (
					<div ref={provided.innerRef}
						 {...provided.droppableProps}>
						{pageElements}
						{provided.placeholder}
					</div>)
				}
			</Droppable>
			: pageElements
		;
	return <div>
		{title && <div className={classNames.title} onClick={()=> setOpen(!open)}>{title}</div>}
		{pagesContainer}
	</div>
}
