import React,{ useState, useEffect} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import CircleLoader from "react-spinners/CircleLoader";
//own components
import {PageList} from "./PageList"
import {initialdata, emptydata} from "../initialdata";

import classNames from './PageLists.css';

/*
* Contains builtin Timeout logic based on the code presented here https://medium.com/@jonatan_salas/a-walk-through-react-experimental-features-562baeb8a63a
* It has been modified to use hooks
* The reason to do it this way is that React.Suspense does not yet support server side rendering, when that comes a better solution might be to switch to that.
 */

export const PageLists = ({searchInput}) => {

	const [data, setData] = useState(emptydata());
	const [didTimeout, setDidTimeout] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);

	useEffect(()=> {
		if (JSON.stringify(data) === JSON.stringify(emptydata()) && !timeoutId){
			//we only want to load the initial data if the current data is empty
			initialdata().then(result => setData(result))
		}
		const id = setTimeout(setDidTimeout(true), 250);
		setTimeoutId(id);
		return function cleanup() {
			clearTimeout(timeoutId);
			setDidTimeout(false);
			setTimeoutId(null);
		}
	});

	const onDragEnd = result => {
		if (result.destination) {
			let sourcePages = data.lists[result.source.droppableId].pages;
			let destPages = data.lists[result.destination.droppableId].pages;
			const item = sourcePages.splice(result.source.index,1);
			destPages.splice(result.destination.index, 0, item);
			const newState = {
				...data,
				lists: {
					...data.lists,
					[result.source.droppableId]: {
						...data.lists[result.source.droppableId],
						pages: sourcePages
					},
					[result.destination.droppableId]: {
						...data.lists[result.destination.droppableId],
						pages: destPages
					}
				}
			};
			setData(newState)
		}
	};

	const fallback = <div className={classNames.spinner}><CircleLoader
		color="darkorange"
		sizeUnit={"px"}
		size={100}/></div>

	const children = <DragDropContext id="lists" onDragEnd={onDragEnd}>
		{data.listOrder.map(listID => {
			const list = {...data.lists[listID], pages : data.lists[listID].pages.map((pageid) => data.allPages[pageid])};
			return <PageList key={listID} {...list} search={searchInput}/>
		})}
	</DragDropContext>

	return (didTimeout && JSON.stringify(data) === JSON.stringify(emptydata())) ? fallback : children

}
