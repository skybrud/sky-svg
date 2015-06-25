(function() {
	"use strict";

	angular.module('skySvg').directive('skySvgPrepend', skySvgPrependDirective);

	skySvgPrependDirective.$inject = ['skySvg'];

	function skySvgPrependDirective(skySvg) {
		var directive = {
			restrict:'A',
			priority:100,
			link: link
		};

		function link(scope, element, attrs, ctr, transclude) {
			var unwatch = scope.$watch(attrs.skySvg, function(name) {
				if(name) {
					element.prepend(skySvg.getSvg(name));
					element.addClass('sky-svg-loaded');
					unwatch();
				}
			});
		}

		return directive;
	}

})();
