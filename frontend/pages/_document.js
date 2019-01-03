import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<html id="document" lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="initial-scale=1"/>
					<link rel="icon" href="/static/favicon.png"/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>

				<body>
					<Main/>
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
