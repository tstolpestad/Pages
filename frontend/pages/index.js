import React,{ useState, Timeout } from "react";

//css imports
import classNames from './index.css';
import('./_document.css');

//own components
import {PageLists} from "./Components/PageLists"
import {FadeInImage} from "./Components/Utils/FadeInImage"

export default () => {

	return (
		<div className={classNames.container}>
			<FadeInImage
				height="180px"
				width="500px"
				src="https://upload.wikimedia.org/wikipedia/commons/1/10/A_stack_of_newspapers.jpg"
			/>
				<PageLists />
		</div>
	);
};
