import React,{ useState } from "react";
import {DragDropContext} from "react-beautiful-dnd";

//css imports
import classNames from './index.css';
import('./_document.css');

//own components
import {PageList} from "./Components/PageList"

export default () => {

	const initalData = {
		allPages: {
			page1: {id: "page1", title: "/digital"},
			page2: {id: "page2", title: "/digital/paske"},
			page3: {id: "page3", title: "/digital/senior"},
			page4: {id: "page4", title: "/total"},
			page5: {id: "page5", title: "/total/sommer"}
		},
		lists: {
			favorites: {
				id : "favorites",
				dnd: true,
				pages: ["page1", "page4"]
			},
			list1 : {
				id: "list1",
				title: "Spesial",
				style: "greenheader",
				dnd: false,
				pages: ["page3"]
			},
			list2: {
				id: "list2",
				title: "Sesong",
				style: "blueheader",
				dnd: false,
				pages: ["page2", "page5"]
			}
		},
		listOrder: ["favorites", "list1", "list2"]
	};

	const [data, setData] = useState(initalData);
	const [searchInput, setSearchInput] = useState(null);

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

	return (
		<div className={classNames.container}>
			<div id="search">
				<button type="button" onClick={(e)=> console.log(e.target.value)}>+</button>
				<input type="text" name="search" onChange={(e)=> setSearchInput(e.target.value)} />
			</div>
			<DragDropContext id="lists" onDragEnd={onDragEnd}>
				{data.listOrder.map(listID => {
					const list = {...data.lists[listID], pages : data.lists[listID].pages.map((pageid) => data.allPages[pageid])};
					return <PageList key={listID} {...list} search={searchInput}/>
				})}
			</DragDropContext>
		</div>
	);
};
