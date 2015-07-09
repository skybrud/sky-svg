(function() {
	"use strict";

	angular.module('skySvg').directive('skySvg', skySvgDirective);

	skySvgDirective.$inject = ['skySvg'];

	function skySvgDirective(skySvg) {
		var directive = {
			restrict:'E',
			priority:100,
			compile:compile,
			templateUrl: function(element) {
				var name = element.text().trim();
				if(!!name) {
					return skySvg.getPath()+ name + '.svg';
				}
			}
		};

		function compile() {
			return {
				post:function(scope, element) {
					element.addClass('sky-svg-loaded');
				}
			};
		}

		return directive;
	}

})();

