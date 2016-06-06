angular.module('Surface')
    .directive('surfaceNewStoryButton', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfaceNewStoryButton.html'
        }
    }
);