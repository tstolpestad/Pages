import React, {useState, useEffect} from 'react';
import classNames from './FadeInImage.css';


export const FadeInImage = (props) => {
	const runOnce = true;
	const [loaded, setLoaded] = useState(false);
	useEffect(()=> {
		const img = new Image();
		img.onload = function () {
			setLoaded(true)
		}
		img.src = props.src;
	}, [runOnce]);

	return <img className={loaded? classNames.loaded : classNames.unloaded} {...props}/>
}

