import './_document.css';
import classNames from './index.css';

export default () => {
	console.log('it works');

	return (
		<div className={classNames.container}>
			<p className={classNames.paragraph}>hello</p>
		</div>
	);
};
