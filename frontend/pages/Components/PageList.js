//todo: add styling
//todo: optional header
//todo: make droppable
import React,{ useState } from "react";
import classNames from './PageList.css';
import {PageElement} from './PageElement';

export const PageList = ({pages, title})=>{

	const [open, setOpen] = useState(true);

	return <div>
		{title && <div className={classNames.title} onClick={()=> setOpen(!open)}>{title}</div>}
		{open && pages.map((page, index) => <PageElement key={index} text={page}/>)}
	</div>
}
