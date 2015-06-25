(function() {
	"use strict";

	angular.module('skySvg').directive('skySvg', skySvgDirective);

	skySvgDirective.$inject = ['skySvg'];

	function skySvgDirective(skySvg) {
		var directive = {
			restrict:'A',
			priority:100,
			link: link
		};

		function link(scope, element, attrs) {
			var unwatch = scope.$watch(attrs.skySvg, function(name) {
				if(name) {
					element.append(skySvg.getSvg(name));
					element.addClass('sky-svg-loaded');
					unwatch();
				}
			});
		}

		return directive;
	}

})();
