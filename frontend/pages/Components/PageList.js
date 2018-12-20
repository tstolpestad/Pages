//todo: make list of PageElements
//todo: make tests
//todo: add styling
//todo: optional header
//todo: collapse and expand
//todo: make droppable
import React from "react";
import classNames from './PageList.css';
import {PageElement} from './PageElement';

export const PageList = ({pages, title})=>{
	return <div>
		{title && <div className={classNames.title}>{title}</div>}
		{pages.map((page, index) => <PageElement key={index} text={page}/>)}
	</div>
}
