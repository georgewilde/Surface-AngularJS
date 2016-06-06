angular.module('Surface')
    .directive('surfaceStoryCreatedOn', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfaceStoryCreatedOn.html',
            scope: "=",
            controller: function($scope, SurfaceConstants) {
                $scope.constants = SurfaceConstants;
            }
        };
    });