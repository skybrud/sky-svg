(function () {
    "use strict";
    angular.module('skySvg', []);
})();
(function () {
    "use strict";
    angular.module('skySvg').provider('skySvg', skySvgProvider);
    skySvgProvider.$inject = [];
    function skySvgProvider() {
        var path = '/';
        /**
         * Update the path
         *
         * @param {string} value
         * @return {string}
         */
        this.setPath = function (value) {
            path = value;
            return path;
        };
        this.$get = skySvgFactory;
        skySvgFactory.$inject = ['$templateCache'];
        function skySvgFactory($templateCache) {
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
                getSvg: getSvg,
                getPath: getPath
            };
        }
        return this;
    }
})();
(function () {
    "use strict";
    angular.module('skySvg').directive('skySvg', skySvgDirective);
    skySvgDirective.$inject = ['skySvg'];
    function skySvgDirective(skySvg) {
        var directive = {
            restrict: 'E',
            priority: 100,
            compile: compile,
            templateUrl: function (element) {
                var name = element.text().trim();
                if (!!name) {
                    return skySvg.getPath() + name + '.svg';
                }
            }
        };
        function compile() {
            return {
                post: function (scope, element) {
                    element.addClass('sky-svg-loaded');
                }
            };
        }
        return directive;
    }
})();
(function () {
    "use strict";
    angular.module('skySvg').directive('skySvg', skySvgDirective);
    skySvgDirective.$inject = ['skySvg'];
    function skySvgDirective(skySvg) {
        var directive = {
            restrict: 'A',
            priority: 100,
            link: link
        };
        function link(scope, element, attrs) {
            var unwatch = scope.$watch(attrs.skySvg, function (name) {
                if (name) {
                    element.append(skySvg.getSvg(name));
                    element.addClass('sky-svg-loaded');
                    unwatch();
                }
            });
        }
        return directive;
    }
})();
(function () {
    "use strict";
    angular.module('skySvg').directive('skySvgPrepend', skySvgPrependDirective);
    skySvgPrependDirective.$inject = ['skySvg'];
    function skySvgPrependDirective(skySvg) {
        var directive = {
            restrict: 'A',
            priority: 100,
            link: link
        };
        function link(scope, element, attrs, ctr, transclude) {
            var unwatch = scope.$watch(attrs.skySvg, function (name) {
                if (name) {
                    element.prepend(skySvg.getSvg(name));
                    element.addClass('sky-svg-loaded');
                    unwatch();
                }
            });
        }
        return directive;
    }
})();
