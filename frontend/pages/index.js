import React,{ useState, Timeout } from "react";

//css imports
import classNames from './index.css';
import('./_document.css');

//own components
import {PageLists} from "./Components/PageLists"
import {BlurredImage} from "./Components/BlurredImage"

export default () => {


	const [searchInput, setSearchInput] = useState(null);

	return (
		<div className={classNames.container}>
			<BlurredImage />
			<div id="search" className={classNames.searchBar}>
				<button className={classNames.newButton} type="button" onClick={(e)=> console.log(e.target.value)}>+ Ny</button>
				<input type="text" name="search" className={classNames.search} onChange={(e)=> setSearchInput(e.target.value)} />
			</div>
				{<PageLists searchInput={searchInput}/> }
		</div>
	);
};
