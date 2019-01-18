import { createResource, createCache } from "simple-cache-provider";

const data = {
	allPages: {
		page1: {id: "page1", title: "digital"},
		page2: {id: "page2", title: "digital/paske"},
		page3: {id: "page3", title: "digital/senior"},
		page4: {id: "page4", title: "total"},
		page5: {id: "page5", title: "total/sommer"}
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
			style: "greenbackground",
			dnd: false,
			pages: ["page3"]
		},
		list2: {
			id: "list2",
			title: "Sesong",
			style: "bluebackground",
			dnd: false,
			pages: ["page2", "page5"]
		}
	},
	listOrder: ["favorites", "list1", "list2"]
};
export const initialdata = () => {
	//a bit of an extreme wait but it is to show that the thing can load. also added some randomness just for fun
	const ms = Math.floor(Math.random() * 10000);

	return new Promise(resolve => {
		console.log(new Date().getTime(), "Promise created, will resolve in ", ms);
		setTimeout(() => {
			resolve(data);
		}, ms);
	}, ()=> data);
}
export const emptydata = () => {
	 return {
		allPages: {},
		lists: {},
		listOrder: []
	};
}
