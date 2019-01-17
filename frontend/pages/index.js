import React,{ useState, Timeout } from "react";

//css imports
import classNames from './index.css';
import('./_document.css');

//own components
import {PageLists} from "./Components/PageLists"
import {FadeInImage} from "./Components/Utils/FadeInImage"

export default () => {


	const [searchInput, setSearchInput] = useState(null);

	return (
		<div className={classNames.container}>
			<FadeInImage
				height="180px"
				width="500px"
				src="https://upload.wikimedia.org/wikipedia/commons/1/10/A_stack_of_newspapers.jpg"
			/>
			<div id="search" className={classNames.searchBar}>
				<button className={classNames.newButton} type="button" onClick={(e)=> console.log(e.target.value)}>+ Ny</button>
				<input type="text" name="search" className={classNames.search} onChange={(e)=> setSearchInput(e.target.value)} />
			</div>
				{<PageLists searchInput={searchInput}/> }
		</div>
	);
};
