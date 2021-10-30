'use strict';

const { handler } = require('vercel-serverless-api');
const { IndexAPI } = require('vercel-serverless-routes');

class Api extends IndexAPI {

	static get githubUser() {
		return {
			projectName: '{serviceName}',
			user: 'gastonpereyra',
			owner: 'Gastón Pereyra'
		};
	}

	static get colors() {
		return {
			brand: '00ba7c',
			hover: '12694f',
			background: '15202b',
			disclaimer: '00ba7c',
			footerLine: '00ba7c'
		};
	}

	static get messages() {
		return {
			banner: 'https://user-images.githubusercontent.com/39351850/133937038-471eacb3-d3e7-4f49-b211-f2679ada53cd.png', // Changed To {serviceBanner}
			location: 'Buenos Aires, Argentina'
		};
	}
}

module.exports = async (...args) => handler(Api, ...args);
