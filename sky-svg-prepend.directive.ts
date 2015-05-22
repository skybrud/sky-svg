
(function() {
	"use strict";

	angular.module('skySvg').directive('skySvgPrepend', skySvgPrependDirective);

	skySvgPrependDirective.$inject = ['$templateCache'];

	function skySvgPrependDirective($templateCache) {
		var directive = {
			restrict:'A',
			priority:100,
			link: link
		};

		function link(scope, element, attrs, ctr, transclude) {
			var id;

			// The svg name
			id = attrs.skySvgPrepend;

			element.prepend(getSvg(id));

			function getSvg(id) {
				return $templateCache.get('/' + id + '.svg') || '';
			}
		}

		return directive;
	}

})();
