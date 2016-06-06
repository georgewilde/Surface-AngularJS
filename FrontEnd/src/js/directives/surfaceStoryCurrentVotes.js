angular.module('Surface')
    .directive('surfaceStoryCurrentVotes', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfaceStoryCurrentVotes.html',
            scope: "="
        };
    });