declare module sky {
	interface skySvgProvider {
		setPath(value:string):string;
		$get():skySvg;
	}
	interface skySvg {
		getPath():string;
		getSvg(name:string):string;
	}
}

(function() {
	"use strict";

	angular.module('skySvg').provider('skySvg', skySvgProvider);

	skySvgProvider.$inject = [];

	function skySvgProvider():sky.skySvgProvider {
		var path = '/';

		/**
		 * Update the path
		 *
		 * @param {string} value
		 * @return {string}
		 */
		this.setPath = function(value) {
			path = value;
			return path;
		};

		this.$get = skySvgFactory;

		skySvgFactory.$inject = ['$templateCache'];
		function skySvgFactory($templateCache):sky.skySvg {

			/**
			 * Get the svg path
			 *
			 * @return {string}
			 */
			function getPath() {
				return path;
			}

			/**
			 * Return the svg
			 *
			 * @see getPath
			 * @param {string} name
			 * @return {string}
			 */
			function getSvg(name) {
				return $templateCache.get(path + name + '.svg') || '';
			}

			return {
				getSvg:getSvg,
				getPath:getPath
			};
		}

		return this;
	}
})();