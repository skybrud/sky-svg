(function() {
	"use strict";

	angular.module('skySvg').directive('skySvg', skySvgDirective);

	skySvgDirective.$inject = ['$templateCache'];

	function skySvgDirective($templateCache) {
		var directive = {
			restrict:'E',
			priority:100,
			templateUrl: function(element) {
				var id = element.text().trim();
				if(!!id) {
					return '/' + id + '.svg';
				}
			}
		};

		return directive;
	}

})();

