import Vue from 'vue';

// Require all svgs in folder with vue-svg-loader which gives us
// pre-compiled render functions
const allSvgs = require.context(
	'!!vue-svg-loader?{"svgo":{"plugins":[{"cleanupIDs":false},{"mergePaths":false}]}}!svgs/',
	true,
	/\.svg$/,
);

// Export object of svg components
export default allSvgs
	.keys()
	.reduce((obj, key) => {
		// Create name of component by finding filename, prepending
		// 'svg-' and transforming all non alpha characters to '-'
		const componentName = key
			.replace('./', 'svg-')
			.split('.svg')
			.join('')
			.replace(/[^a-z]+?/g, '-');
		// Create component with name
		const component = Vue.component(componentName, {
			extends: allSvgs(key),
		});
		obj[componentName] = component;
		return obj;
	}, {});
