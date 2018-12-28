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

	const onDragEnd = result => {
		//Todo: implement onDragEnd
	}

	return (
		<div className={classNames.container}>
			<div id="search"></div>
			<DragDropContext id="lists" onDragEnd={onDragEnd}>
				{data.listOrder.map(listID => {
					const list = {...data.lists[listID], pages : data.lists[listID].pages.map((pageid) => data.allPages[pageid])};
					return <PageList key={listID} {...list} />
				})}
			</DragDropContext>
		</div>
	);
};
