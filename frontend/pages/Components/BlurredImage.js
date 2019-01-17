import React, {useState, useEffect} from 'react';
import classNames from "./BlurredImage.css"

/*
 * Modified from https://medium.com/@dimitarnikovski/building-a-medium-style-progressive-image-loader-with-react-hooks-in-40-lines-of-code-eb8ed5a6c777
 * Uses more classes instead of styled-components
 */

export const BlurredImage = () => {
	const runOnce = true;
	const [loaded, setLoaded] = useState(false);
	useEffect(()=>{
		const img = new Image();
		img.onload = function () {
			setLoaded(true)
		}
		img.src = '/img/croppedFull.jpg'
	}, [runOnce])
		return <div className={classNames.blurredimage + " " + (loaded? classNames.loaded : classNames.unloaded)} />
}

