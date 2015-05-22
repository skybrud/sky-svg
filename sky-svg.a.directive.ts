(function() {
	"use strict";

	angular.module('skySvg').directive('skySvg', skySvgDirective);

	skySvgDirective.$inject = ['$templateCache'];

	function skySvgDirective($templateCache) {
		var directive = {
			restrict:'A',
			priority:100,
			link: link
		};

		function link(scope, element, attrs, ctr, transclude) {
			var id;

			// Append svg
			if(attrs.skySvg) {
				// The svg name
				id = attrs.skySvg;

				element.append(getSvg(id));

			}

			function getSvg(id) {
				return $templateCache.get('/' + id + '.svg') || '';
			}
		}

		return directive;
	}

})();

